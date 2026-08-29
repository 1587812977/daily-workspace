# 更新日志 · Changelog

本文件记录「个人工作台 · 云端版」的版本变更。在线版本：`https://1587812977.github.io/daily-workspace/`

> 约定：以 commit 哈希标注每次变更；`[未发布]` 表示已提交到本地、尚未推送到 GitHub 的提交。

---

## [未发布] — 本地提交待推送（领先线上 `b9e8416` 共 3 个提交）

### `72fe5c3` 新增 GitHub AI 趋势 + 热门项目 两个模块
- 工作台新增两个默认开启的 addon 模块（复用 `github-ai-trends` 与 `github-trending-cn` 技能的抓取口径）：
  - **GitHub AI 趋势**：本周最火的 AI 开源项目（按 `topic:llm / ai-agent / generative-ai / artificial-intelligence` 近 7 天 + stars 近似）。
  - **GitHub 热门项目**：本周 GitHub 全站热门仓库（按 `pushed:>=近7天 stars:>=10` 近似 trending）。
- **数据策略（快照 + 实时）**：页面为静态离线 HTML，无法直接跑脚本，故先抓取本周快照内联进页面（`WB_GITHUB_AI` / `WB_GITHUB_HOT` / `WB_GITHUB_UPDATED`），作为离线可见内容与刷新回退；卡片「刷新」按钮在浏览器内直连 `api.github.com/search/repositories`（GitHub API 支持 CORS）拉实时数据，成功则覆盖快照并 toast 提示，失败/限流则优雅降级继续显示缓存。
- **渲染**：card-acc 榜单卡片——排名、仓库名（新标签页外链）、语言徽标、★ stars、Fork 数、描述；列表可滚动（max-height 360px）。图标用 GitHub 标记内联 SVG（★ 为排版字形，非 emoji）。
- **默认开启**：`loadAddedMods` 默认含 `github-ai` / `github-hot`（与 `water` 一同默认添加）；「添加功能」弹窗仅列剩余可选模块。
- 三副本同步并通过 jsdom 冒烟测试（含 GitHub 专项断言）。

### `9a4096b` 喝水打卡增强（默认开启 + 连续达标 + 自定义目标）
- **默认开启**：`loadAddedMods()` 默认返回 `["water"]`，首次打开即自带「喝水打卡」导航项（不再需手动添加）。
- **连续达标天数**：新增 `waterStreak()`，基于每日 `hist` 字典从今天起逐日倒推，连续达标（当日 `n>=goal`）即 +1 天；总览卡片显示「连续达标 N 天」。
- **自定义目标**：目标支持 ±1 调节（范围 1~30，默认 8 杯）。
- **图标规范**：卡片图标由 emoji `💧` 改为内联 SVG `WATER_IC`（水滴路径），toast 文案去 emoji，符合「图标必用内联 SVG、禁 emoji 当图标」规范。
- 存储键 `wb_water_v1`，结构 `{date, n, goal, hist}`。三副本同步并通过 jsdom 冒烟测试（含喝水专项断言）。

### `49129d4` 修复：黑白极简主题下导航角标去橙色光晕
- 修复 `body.theme-mono` 下左侧导航角标 `.nav-badge` 的橙色光晕残留，改为灰阶（`background:var(--txt2); color:var(--card); box-shadow:none`），与黑白极简风一致。三副本同步并通过 jsdom 冒烟测试。

---

## 已发布（线上 `main` = `b9e8416`）

### `b9e8416` 更多主题入口 + 黑白极简风（mono 灰阶三态主题）
- header 新增「更多主题」按钮（`#themeMore`，调色板图标）打开弹窗，列出 **浅色 / 深色 / 黑白极简** 三张卡片，当前主题高亮打勾。原有「☀/🌙」按钮保留为浅色↔深色快速互切。
- 主题键 `wb_theme_v1` 由布尔升级为三态字符串 `light` / `dark` / `mono`，新增 `applyThemeMode(mode)` / `setTheme(mode)` / `openThemePicker()` / `bindThemePicker()`。
- 黑白极简风：新增 `body.theme-mono` 灰阶变量块并逐一覆盖 24 处写死彩色的规则，新增模块选择器也中性化为灰阶。浅色/深色/背景图/移动端布局均不受影响。

### `94337f4` 添加功能面板（番茄钟 / 倒计时 / 便签 / 喝水打卡）+ 模块管理
- 左侧栏「＋ 添加功能」入口打开弹窗，列出可加入的可选模块（番茄钟 / 倒计时 / 便签 / 喝水打卡），均为离线、localStorage 持久化功能。
- 添加后注册进 `SEC`、在侧栏插入导航项、写入 `wb_added_mods_v1` 持久化；刷新/重开仍保留。支持「移除」已添加模块、空态显示「无功能添加」。

### `c1535e6` 今日热点资讯点击展开子板块索引（不汇总）
- 点「今日热点资讯」父项改为显示子板块索引（AIHOT热点 / AI 行业日报 / 科技播报 / Epic 限免 / 全网热榜），各板块独立互不混杂；侧栏子项自动展开。满足「全平台同步」。

### `40bd37f` 部署：个人工作台 + PWA manifest / icons（GitHub Pages）
- 接入 GitHub Pages 长期 HTTPS，叠加 PWA（`manifest.webmanifest` + `icon-192.png` / `icon-512.png`），支持「添加到主屏幕 / 桌面」独立样式入口（仍是网页，非原生 APP）。

### `220561e` 数据刷新（资讯定时刷新 workflow 初始数据）
- 初始化 `data.js` / `习惯数据.js` 等数据文件，承接 `.github/workflows/refresh.yml` 定时刷新。

---

## 推送说明（部署到 GitHub）
- 目标仓库：`1587812977/daily-workspace`，分支 `main`（公开仓库）。
- 推送方式：将 GitHub PAT 临时写入 remote URL（`https://git:<TOKEN>@github.com/...`），以「沙箱关闭」方式执行 `git push origin main`，推完立即重置 remote URL 为无令牌地址。
- ⚠️ 安全提示：此前用于推送的 PAT 已在本环境明文出现，存在泄露风险，**建议先在 GitHub 撤销该 PAT 并重新生成**后再推送本文件的 `[未发布]` 部分。
- 校验：推送后 `git fetch` 比对 blob SHA、访问 `https://1587812977.github.io/daily-workspace/` 确认 HTTP 200 且含最新内容。
