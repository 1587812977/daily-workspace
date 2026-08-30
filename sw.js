/* 个人工作台 Service Worker
 * 目的：让手机端（APK / 添加到主屏幕）在断网时也能打开工作台。
 * 策略：
 *   - 页面 HTML 与数据文件：网络优先（在线时总能拿到最新内容和最新数据），失败回落缓存
 *   - 其他同源静态资源：缓存优先，后台顺带更新
 *   - 跨域资源（Steam 封面图等）不拦截，交给浏览器
 *
 * 重要：GitHub Pages 对静态资源统一返回 `Cache-Control: max-age=600`。
 * 若直接 fetch(req)，会命中浏览器 HTTP 缓存，导致刚发布的版本最长 10 分钟拿不到
 * （表现为「线上代码已更新，但手机上还是旧页面」）。
 * 故导航与数据请求一律用 `cache:'reload'` 绕过 HTTP 缓存，只把缓存当离线兜底。
 */
var CACHE = 'wb-v4';   /* 重设计改版：升版以清除旧缓存，避免用户仍看到旧页面 */
var PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './data.js',
  './习惯数据.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // 逐个添加，单个失败不影响整体
      return Promise.all(PRECACHE.map(function (u) {
        return c.add(u).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isDataFile(pathname) {
  return /(\/(data|习惯数据)\.js)$/.test(pathname);
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  // 只处理同源请求；跨域（Steam 图片、GitHub API 等）直接放行
  if (url.origin !== self.location.origin) return;

  // 页面导航 & 数据文件：网络优先，保证内容/数据最新；离线时回落缓存
  // cache:'reload' 绕过浏览器 HTTP 缓存（Pages 的 max-age=600），否则新版本要等 10 分钟
  if (req.mode === 'navigate' || isDataFile(url.pathname)) {
    e.respondWith(
      fetch(req, { cache: 'reload' }).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || (req.mode === 'navigate' ? caches.match('./index.html') : null);
        });
      })
    );
    return;
  }

  // 其他同源资源：缓存优先 + 后台更新
  e.respondWith(
    caches.match(req).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    })
  );
});
