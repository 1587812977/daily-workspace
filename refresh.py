# -*- coding: utf-8 -*-
"""
云端版工作台数据刷新脚本（在 GitHub Actions 服务器上运行）
数据源：
  - AIHOT（热点 / 24h精选 / 日报）
  - 60s 公共 API（微博/知乎/抖音/头条/百度热榜 + Epic 限免）
  - B站官方接口（热门视频）
  - 新浪科技 / IT之家 首页抓取（科技要闻）
输出：data.js（被 index.html 加载）
失败降级：任一源失败保留旧数据，不中断。
"""
import io, json, os, re, datetime, urllib.request
from html.parser import HTMLParser
from urllib.parse import urljoin

ROOT = os.path.dirname(os.path.abspath(__file__))
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) daily-workspace/1.0"
AIHOT_UA = "aihot-skill/1.2.1 (+https://aihot.virxact.com/aihot-skill/)"
S60 = "https://60s-api.viki.moe/v2/"
BJ = datetime.timezone(datetime.timedelta(hours=8))


def http_json(url, headers=None, timeout=20):
    req = urllib.request.Request(url, headers=headers or {"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode("utf-8"))


def http_text(url, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        raw = r.read()
    for enc in ("utf-8", "gbk", "gb18030"):
        try:
            return raw.decode(enc)
        except (LookupError, UnicodeDecodeError):
            continue
    return raw.decode("utf-8", "replace")


def bj_time(iso):
    if not iso:
        return ""
    try:
        dt = datetime.datetime.fromisoformat(str(iso).replace("Z", "+00:00"))
        return dt.astimezone(BJ).strftime("%m-%d %H:%M")
    except Exception:
        return ""


def now_str():
    return datetime.datetime.now(BJ).strftime("%Y-%m-%d %H:%M")


def load_old():
    p = os.path.join(ROOT, "data.js")
    if not os.path.exists(p):
        return {}
    try:
        with io.open(p, "r", encoding="utf-8") as f:
            t = f.read()
        return json.loads(t[t.index("{"):t.rindex("}") + 1])
    except Exception:
        return {}


# ---------- 1. AIHOT ----------
def fetch_aihot(data):
    try:
        hot = http_json("https://aihot.virxact.com/api/v1/hot-topics", {"User-Agent": AIHOT_UA})
        data["aihotHot"] = [{
            "rank": x["rank"], "title": x["title"],
            "source": x.get("source", {}).get("name", ""),
            "url": x["links"].get("aihot", ""),
            "time": bj_time(x.get("latestAt", "")),
            "sourceCount": x.get("sourceCount", 0),
        } for x in hot.get("items", [])[:10]]
    except Exception as e:
        print("[warn] AIHOT hot-topics:", e)
    try:
        items = http_json("https://aihot.virxact.com/api/v1/items?mode=selected&window=24h&limit=12",
                          {"User-Agent": AIHOT_UA})
        data["aihotItems"] = [{
            "title": x["title"], "summary": x.get("summary", ""),
            "reason": x.get("reason", ""),
            "source": x.get("source", {}).get("name", ""),
            "url": x["links"].get("aihot", ""),
            "time": bj_time(x.get("publishedAt") or x.get("discoveredAt", "")),
            "category": x.get("category", ""),
        } for x in items.get("items", [])[:12]]
    except Exception as e:
        print("[warn] AIHOT items:", e)
    try:
        daily = http_json("https://aihot.virxact.com/api/v1/dailies/latest", {"User-Agent": AIHOT_UA})
        rep = daily.get("report", {})
        data["aiDaily"] = {
            "date": rep.get("date", ""),
            "url": rep.get("links", {}).get("aihot", ""),
            "sections": [{
                "label": s.get("label", ""),
                "items": [{
                    "title": i["title"], "summary": i.get("summary", ""),
                    "source": i.get("source", {}).get("name", ""),
                    "url": i["links"].get("aihot", ""),
                } for i in s.get("items", [])]
            } for s in rep.get("sections", [])]
        }
    except Exception as e:
        print("[warn] AIHOT daily:", e)


# ---------- 2. 热榜（60s 公共 API + B站直连） ----------
HOT_META = {
    "weibo":   ("微博热搜", "https://s.weibo.com/top/summary"),
    "zhihu":   ("知乎热榜", "https://www.zhihu.com/hot"),
    "douyin":  ("抖音热点", "https://www.douyin.com/hot"),
    "toutiao": ("头条热榜", "https://www.toutiao.com/"),
    "baidu":   ("百度热搜", "https://top.baidu.com/board"),
}


def fetch_60s_hot(data):
    hl = data.setdefault("hotLists", {})
    for key, (name, home) in HOT_META.items():
        try:
            ep = "baidu/hot" if key == "baidu" else key
            obj = http_json(S60 + ep)
            lst = obj.get("data", []) or []
            if not lst:
                continue
            hl[key] = {
                "name": name, "updateTime": now_str(), "url": home,
                "data": [{
                    "title": x.get("title", ""),
                    "url": x.get("link") or x.get("url") or home,
                    "hot": x.get("hot_value", ""),
                } for x in lst[:12]],
            }
        except Exception as e:
            print("[warn] 60s %s:" % key, e)


def fetch_bili(data):
    try:
        obj = http_json("https://api.bilibili.com/x/web-interface/popular?ps=12",
                        {"User-Agent": UA, "Referer": "https://www.bilibili.com/"})
        lst = obj.get("data", {}).get("list", []) or []
        if not lst:
            return
        data.setdefault("hotLists", {})["bilibili"] = {
            "name": "B站热门", "updateTime": now_str(), "url": "https://www.bilibili.com/v/popular/all/",
            "data": [{
                "title": x.get("title", ""),
                "url": "https://www.bilibili.com/video/" + (x.get("bvid") or ""),
                "hot": (x.get("stat", {}) or {}).get("view", ""),
            } for x in lst[:12]],
        }
    except Exception as e:
        print("[warn] bilibili:", e)


# ---------- 3. Epic 限免 ----------
def fetch_epic(data):
    try:
        obj = http_json(S60 + "epic")
        lst = obj.get("data", []) or []
        data["epic"] = [{
            "title": x.get("title", ""),
            "description": x.get("description", ""),
            "original_price_desc": x.get("original_price_desc", ""),
            "free_end": (x.get("free_end", "") or "")[:16],
            "link": x.get("link", ""),
        } for x in lst if x.get("is_free_now", True)]
    except Exception as e:
        print("[warn] epic:", e)


# ---------- 4. 科技要闻（新浪科技 + IT之家） ----------
def _nav_short(text):
    if not text or len(text) < 8:
        return True
    nav = ("首页", "客户端", "微博", "视频", "体育", "财经", "博客", "游戏", "众测", "科学大家", "新浪")
    return any(text == x or text.startswith(x) for x in nav)


class _Links(HTMLParser):
    def __init__(self, base):
        super().__init__()
        self.base, self.links = base, []
        self._in_a = self._href = None
        self._buf = []

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            self._in_a, self._buf = True, []
            self._href = ""
            for k, v in attrs:
                if k == "href" and v:
                    self._href = v if v.startswith("http") else urljoin(self.base, v)
                    break

    def handle_endtag(self, tag):
        if tag == "a" and self._in_a:
            self._in_a = False
            text = "".join(self._buf).strip()
            if text and self._href:
                self.links.append((text, self._href))

    def handle_data(self, d):
        if self._in_a:
            self._buf.append(d)


def fetch_tech(data):
    items = []
    # 新浪科技
    try:
        p = _Links("https://tech.sina.com.cn/")
        p.feed(http_text("https://tech.sina.com.cn/"))
        for text, href in p.links:
            if (_nav_short(text) or len(text) > 120 or not re.search(r"[\u4e00-\u9fff]", text)):
                continue
            if "sina.com" not in href or "comment" in href:
                continue
            art = ("/doc-" in href or "/tech/" in href or "finance.sina.com.cn/tech" in href)
            items.append({"title": text, "url": href, "source": "新浪科技", "w": 1 if art else 0})
    except Exception as e:
        print("[warn] sina:", e)
    # IT之家
    try:
        p = _Links("https://www.ithome.com/")
        p.feed(http_text("https://www.ithome.com/"))
        for text, href in p.links:
            if not (4 <= len(text) <= 100) or "ithome.com" not in href:
                continue
            if not re.search(r"[\u4e00-\u9fff]", text):
                continue
            items.append({"title": text, "url": href, "source": "IT之家", "w": 0})
    except Exception as e:
        print("[warn] ithome:", e)
    # 文章链接优先 + 去重
    items.sort(key=lambda x: -x["w"])
    seen, out = set(), []
    for it in items:
        if it["title"] in seen:
            continue
        seen.add(it["title"])
        out.append({"title": it["title"], "url": it["url"], "source": it["source"]})
        if len(out) >= 12:
            break
    if out:
        data["techNews"] = out


# ---------- 5. 输出 ----------
def write_data(data):
    js = "// 个人工作台数据（GitHub Actions 定时刷新，勿手改）\n"
    js += "var WB_DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n"
    js += "if (typeof window !== 'undefined') window.WB_DATA = WB_DATA;\n"
    with io.open(os.path.join(ROOT, "data.js"), "w", encoding="utf-8") as f:
        f.write(js)
    print("[done] data.js 已刷新")


def main():
    data = load_old()
    data["updatedAt"] = now_str()
    fetch_aihot(data)
    fetch_60s_hot(data)
    fetch_bili(data)
    fetch_epic(data)
    fetch_tech(data)
    write_data(data)
    print("摘要: AIHOT热点%d / 精选%d / 日报%s / 科技%d / Epic%d / 热榜%d平台" % (
        len(data.get("aihotHot", [])), len(data.get("aihotItems", [])),
        data.get("aiDaily", {}).get("date", "无"), len(data.get("techNews", [])),
        len(data.get("epic", [])), len(data.get("hotLists", {}))))


if __name__ == "__main__":
    main()
