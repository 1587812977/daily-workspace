# 个人工作台 · 云端版

每日信息中枢：AIHOT 实时热点 / AI 行业日报 / 每日科技播报（含 Epic 限免）/ 全网热榜 / 抖音热榜。

**在线访问**：`https://1587812977.github.io/daily-workspace/`

**更新日志**：详见 [`CHANGELOG.md`](./CHANGELOG.md)（含「未发布」本地提交与历史版本）。

## 它如何自动更新（电脑关机也照常）

- GitHub Actions 定时任务每天 **08:00 / 12:30 / 20:30**（北京时间）自动运行 `refresh.py`
- 脚本抓取：AIHOT（热点/精选/日报）、60s 公共 API（微博/知乎/抖音/头条/百度热榜 + Epic 限免）、B站官方接口、新浪科技/IT之家首页
- 结果写入 `data.js` 并自动提交，页面打开即是最新数据（页顶有更新时间戳）
- 仓库刚创建时 `data.js` 尚不存在：到 **Actions** 页面手动运行一次 `refresh-data` 即可（页面也会提示）

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 工作台页面（单文件，零依赖） |
| `data.js` | 数据文件（Actions 自动生成，勿手改） |
| `refresh.py` | 数据刷新脚本 |
| `.github/workflows/refresh.yml` | 定时任务定义 |

## 备注

- ⚠️ GitHub 规定：仓库 **60 天无任何活动**会自动停用定时任务。偶尔点开仓库页面或手动 Run 一次即可保活。
- 定时执行时间可能有几分钟误差（GitHub 队列繁忙时）。
- 想加信息源/改版式：修改 `refresh.py` 或 `index.html` 后提交即可。
