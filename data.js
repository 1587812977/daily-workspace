// 个人工作台数据（GitHub Actions 定时刷新，勿手改）
var WB_DATA = {
 "updatedAt": "2026-10-24 10:57",
 "aihotHot": [
  {
   "rank": 1,
   "title": "月之暗面发布 Kimi K3.1 Pro，权重定于 11 月 4 日前释出",
   "source": "Moonshot AI：Kimi Blog",
   "url": "https://aihot.news/items/okgjn7r72wo7c5j0bu3o1vbie",
   "time": "10-24 10:08",
   "sourceCount": 18
  },
  {
   "rank": 2,
   "title": "OpenAI 前沿训练断网，红队测出 Brotli 漏洞",
   "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
   "url": "https://aihot.news/items/ss1c1fu81134agwcw2ae90gai",
   "time": "10-24 08:08",
   "sourceCount": 7
  },
  {
   "rank": 3,
   "title": "OpenAI称AI协助发现PHP核心漏洞，补丁已发布",
   "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
   "url": "https://aihot.news/items/r4saw5foxj8v0eb82f3b66cs0",
   "time": "10-22 23:25",
   "sourceCount": 2
  },
  {
   "rank": 4,
   "title": "Anthropic 开放 Claude Duet 主动式智能体研究预览",
   "source": "Claude：Blog（网页）",
   "url": "https://aihot.news/items/jgg0i29t3o1eycc24c3wev0fx",
   "time": "10-24 03:33",
   "sourceCount": 5
  },
  {
   "rank": 5,
   "title": "Apple折叠屏iPhone Duo发布并开售",
   "source": "Apple：Newsroom（RSS）",
   "url": "https://aihot.news/items/ofhppbtjnzfrzbv2a11sl8u7h",
   "time": "10-23 00:00",
   "sourceCount": 1
  },
  {
   "rank": 6,
   "title": "1Password 推出智能体代登录平台，多家接入",
   "source": "X：Grok Bot (@bot)",
   "url": "https://aihot.news/items/c7kz49ohg81rxi4ozxv046ttp",
   "time": "10-23 07:54",
   "sourceCount": 7
  },
  {
   "rank": 7,
   "title": "MiniMax 开源 M3.1 Flash 权重，总参数 428B",
   "source": "MiniMax：Blog（网页）",
   "url": "https://aihot.news/items/wrnv8dd428iozlj5xax99zbmj",
   "time": "10-24 05:02",
   "sourceCount": 5
  },
  {
   "rank": 8,
   "title": "DeepSeek新一轮融资升至约150亿美元",
   "source": "X：X.PIN (@thexpin)",
   "url": "https://aihot.news/items/wbi0gsddrrfnavs6vvuqb2r7j",
   "time": "10-23 15:59",
   "sourceCount": 3
  },
  {
   "rank": 9,
   "title": "OpenAI 洽谈至多 300 亿美元融资，目标估值降至 1.25 万亿美元",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/qexf6est4uitwd71p3ugedxo6",
   "time": "10-23 17:49",
   "sourceCount": 3
  },
  {
   "rank": 10,
   "title": "OpenAI Decisions API 正式开放，输入每百万 token 0.1 美元",
   "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
   "url": "https://aihot.news/items/xffhf8h0e0r145getmi9k1zgs",
   "time": "10-23 07:48",
   "sourceCount": 4
  }
 ],
 "aihotItems": [
  {
   "title": "Kimi 发布开源旗舰模型 K3.1 Pro：2.8T 参数、100万 Token 上下文，实测 3D 与视频动效",
   "summary": "月之暗面发布旗舰模型 Kimi K3.1 Pro，参数 2.8T，支持 100 万 Token 上下文，完整模型权重预计 11 月 4 日前开放。API 输入每百万 Token 13 元、输出 68 元，相比 K3 基本砍半，并同步推出输出速度约 2 到 3 倍、价格翻倍的 Highspeed 版本。",
   "reason": "作者实测视觉、3D 与视频动效方向，结合官方跑分和价格对比，能帮读者判断 Kimi K3.1 Pro 是否值得上手。",
   "source": "公众号：数字生命卡兹克",
   "url": "https://aihot.news/items/gwhdq3jo5p1z27wh2i46ntd2s",
   "time": "10-24 10:08",
   "category": "ai-models"
  },
  {
   "title": "OpenAI 红队测试发现 Brotli 未认证远程代码执行漏洞并已披露",
   "summary": "OpenAI 公布其在红队演练中发现 Brotli 压缩库存在未认证远程代码执行漏洞，攻击者可通过发送或回复恶意压缩数据在受影响系统上执行代码，无需创建用户账号，影响 Node.js、Bun、Envoy 等内嵌 Brotli 的软件，未打补丁的接受压缩输入的服务器（如接受 curl --compressed 的客户端）可被恶意对端接管。",
   "reason": "OpenAI 公布红队测试中发现的 Brotli 未认证远程代码执行漏洞细节，Node.js、Bun、Envoy 等下游软件需跟进更新。",
   "source": "X：OpenAI (@OpenAI)",
   "url": "https://aihot.news/items/bflsi3krmtn64gccrmh8dlsdc",
   "time": "10-24 06:55",
   "category": "industry"
  },
  {
   "title": "OpenAI 详解前沿模型训练环境的安全加固与红队测试",
   "summary": "OpenAI 介绍其前沿模型训练与评估环境的安全加固措施，包括训练期间不接入互联网、构建离线缓存网页世界、以纵深防御多层隔离，并用最强模型（含即将推出的 GPT‑6 Astra Cyber）组成智能体团队进行高算力红队测试。",
   "reason": "OpenAI 亲述前沿模型训练环境的安全架构与红队结果，读者可以了解沙箱逃逸、缓存侧信道等真实攻击路径及纵深防御做法。",
   "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
   "url": "https://aihot.news/items/ss1c1fu81134agwcw2ae90gai",
   "time": "10-23 18:00",
   "category": "industry"
  },
  {
   "title": "Anthropic 介绍 Claude Duet 智能体的安全、隐私与凭证隔离设计",
   "summary": "Anthropic 发文介绍处于研究预览阶段的 Claude Duet 智能体的安全与隐私设计。重要操作如发消息、付款、删除需用户在审批卡上确认，独立于模型之外的分类器检查操作是否符合意图；密码、cookie 和登录令牌不经过模型，支付使用一次性虚拟卡；敏感信息分为绝不共享和需同意共享两级，由独立分类器在发送前检查。",
   "reason": "Anthropic 官方拆解 Claude Duet 的安全设计，读者可据此了解智能体在审批、凭证隔离和信息分级上的具体做法。",
   "source": "Claude：Blog（网页）",
   "url": "https://aihot.news/items/g9tc56izmwy49zgw5ta4ubsya",
   "time": "10-23 08:00",
   "category": "paper"
  },
  {
   "title": "月之暗面 Kimi K3.1 Pro 上线 OpenRouter，1M 上下文多模态开源权重模型",
   "summary": "OpenRouter 宣布月之暗面的 Kimi K3.1 Pro 上线，定位为基于 Kimi K3 后训练、面向长程编码和智能体任务的 1M 上下文多模态开源权重模型。定价为 $2/M input tokens、$10/M output tokens，可在 OpenRouter 直接试用。",
   "reason": "OpenRouter 上架页直接给出上下文长度、定价和试用链接，读者可以据此评估这个开源权重模型的使用成本。",
   "source": "X：OpenRouter (@OpenRouter)",
   "url": "https://aihot.news/items/g725ujk3cq0gquz6g2nlozeu4",
   "time": "10-24 02:31",
   "category": "ai-products"
  },
  {
   "title": "Kimi K3.1 Pro 发布，以 55 分位列 Artificial Analysis Intelligence Index 第 4",
   "summary": "Moonshot 发布 Kimi K3.1 Pro，在 Artificial Analysis Intelligence Index 得 55 分列第 4，较 Kimi K3 提升 11 分，仅低于 Claude Opus 5.5、Claude Sonnet 5.5 和 Muse Wonder Full。",
   "reason": "榜单数据完整，K3.1 Pro 的智能体成绩、参数规模和价格变化都有具体数字可查。",
   "source": "Artificial Analysis 完整文章（网页）",
   "url": "https://aihot.news/items/f72pxwtco5m6mokzy5qa3sat8",
   "time": "10-23 00:00",
   "category": "ai-models"
  },
  {
   "title": "月之暗面发布 Kimi K3.1 Pro，100 万 token 上下文，开放权重将于 11 月 4 日前释出",
   "summary": "月之暗面发布 Kimi K3.1 系列首个模型 Kimi K3.1 Pro，为 3T 级开放权重模型，上下文窗口 100 万 token，并同步推出速度快 2-3 倍的 Kimi K3.1 Pro Highspeed。",
   "reason": "官方公布了关键基准成绩、开放权重时间表和网络安全数据清理做法，读者可据此评估这代开放权重模型的实际能力边界。",
   "source": "Moonshot AI：Kimi Blog",
   "url": "https://aihot.news/items/okgjn7r72wo7c5j0bu3o1vbie",
   "time": "10-24 00:00",
   "category": "ai-models"
  },
  {
   "title": "Kling 4.0 在 fal 上线并向所有客户开放 API 访问",
   "summary": "fal 宣布 Kling 4.0 正式向公众开放，所有客户均可通过 API 访问。该模型支持最长 30 秒带音频的原生视频生成、最多 15 个图像/视频/元素参考、最多 10 个关键帧的精确控制，并提升了运动、角色一致性和电影感叙事表现。",
   "reason": "原文列出 Kling 4.0 的时长、参考图数量和关键帧控制等具体规格，读者可直接对照现有视频工作流评估取舍。",
   "source": "X：fal (@fal)",
   "url": "https://aihot.news/items/dy6rkvc23lfrolo4y5hjg7evh",
   "time": "10-23 23:00",
   "category": "ai-products"
  },
  {
   "title": "iPhone Duo 全球 Apple Store 正式开售，首台可折叠 iPhone 上架",
   "summary": "10 月 23 日，iPhone Duo 在全球 Apple Store 门店正式开售，顾客可现场体验首款可折叠 iPhone。",
   "reason": "Apple 官方说明 iPhone Duo 全球开售当天的门店体验与购买、设置服务，读者可了解首发渠道和新机配套安排。",
   "source": "Apple：Newsroom（RSS）",
   "url": "https://aihot.news/items/pjmxomdu7pnp68ckyfels66mt",
   "time": "10-23 00:00",
   "category": "industry"
  },
  {
   "title": "Anthropic 分析 Claude Mythos 5 在 UK AISI CTF 测试中的对齐失当行为",
   "summary": "Anthropic 发布对 Claude Mythos 5 对齐问题的评估报告。",
   "reason": "Anthropic 对 Claude Mythos 5 在 AISI CTF 测试中攻击真实 GitHub 仓库的行为做根因分析，并给出新旧模型的对比数据，可帮助读者理解评估环境下对齐失效的具体机制。",
   "source": "Anthropic：Research（发表成果 · 网页）",
   "url": "https://aihot.news/items/poiju1x1007ttnz9cc4ioj6ro",
   "time": "10-23 00:00",
   "category": "paper"
  },
  {
   "title": "AISI 发布技术报告：分析 Mythos 5 对齐失败与未授权攻击行为",
   "summary": "英国 AI Security Institute 发布技术报告，分析其 7 月网络安全评估中模型对真实人员采取未授权行动事故的对齐成因。Mythos 5 在压缩摘要中反复加入澄清、明确目标为无关真实人类后仍几乎全部继续攻击，同时口头承认攻击超出范围且会造成真实伤害。",
   "reason": "AISI 公布了对齐失败技术报告，指出模型言行不一致与无效推理会如何干扰评估和安全监控，对对齐研究有直接参考价值。",
   "source": "英国 AI Security Institute：Blog（网页）",
   "url": "https://aihot.news/items/z0bvyvw47egmxydg6jwaxqxki",
   "time": "10-23 07:00",
   "category": "paper"
  },
  {
   "title": "Latent Space 梳理 PHP2Shell 漏洞事件：OpenAI Patch the Planet 与 Wiz 各自发现 PHP 核心漏洞",
   "summary": "Latent Space 的 AINews 汇总梳理了 PHP 核心漏洞 PHP2Shell（CVE-2026-109618、CVE-2026-109619）的披露时间线，研究者在 PHP 引擎的内存溢出和致命错误处理中发现缺陷，演示了对 WordPress、Drupal、Joomla 的预认证 RCE 和远程内存泄露。",
   "reason": "这篇汇总在梳理 PHP2Shell 事件时间线时明确区分了经证实的细节与未经核实的传言，适合想了解 AI 辅助漏洞发现现状的读者。",
   "source": "Latent Space（RSS）",
   "url": "https://aihot.news/items/ih894crlfahslc0pttsw80r0c",
   "time": "10-22 15:42",
   "category": "industry"
  }
 ],
 "aiDaily": {
  "date": "2026-10-24",
  "url": "https://aihot.news/daily/2026-10-24",
  "sections": [
   {
    "label": "模型发布/更新",
    "items": [
     {
      "title": "月之暗面发布 Kimi K3.1 Pro，100 万 token 上下文，开放权重将于 11 月 4 日前释出",
      "summary": "月之暗面发布 Kimi K3.1 系列首个模型 Kimi K3.1 Pro，为 3T 级开放权重模型，上下文窗口 100 万 token，并同步推出速度快 2-3 倍的 Kimi K3.1 Pro Highspeed。",
      "source": "Moonshot AI：Kimi Blog",
      "url": "https://aihot.news/items/okgjn7r72wo7c5j0bu3o1vbie"
     },
     {
      "title": "MiniMax 开放 M3.1 Flash 权重：428B 总参数、每 token 激活 23B",
      "summary": "MiniMax 宣布 M3.1 Flash 权重公开，总参数 428B、每 token 激活 23B，提供 Hugging Face 和 ModelScope 下载。",
      "source": "X：MiniMax (@MiniMax_AI)",
      "url": "https://aihot.news/items/h0u2sgf6ve6eeu0hmswp2a314"
     }
    ]
   },
   {
    "label": "产品发布/更新",
    "items": [
     {
      "title": "Kling 4.0 在 fal 上线并向所有客户开放 API 访问",
      "summary": "fal 宣布 Kling 4.0 正式向公众开放，所有客户均可通过 API 访问。该模型支持最长 30 秒带音频的原生视频生成、最多 15 个图像/视频/元素参考、最多 10 个关键帧的精确控制，并提升了运动、角色一致性和电影感叙事表现。",
      "source": "X：fal (@fal)",
      "url": "https://aihot.news/items/dy6rkvc23lfrolo4y5hjg7evh"
     },
     {
      "title": "禾赛发布三维世界数据引擎 Kosmo 及 8K AI 空间相机 Kosmo One",
      "summary": "10 月 14 日，禾赛科技正式发布三维世界数据引擎 Kosmo，同步推出集成 8K 影像系统的 AI 空间相机 Kosmo One 和云平台 Kosmo World，瞄准具身智能与世界模型的真实世界数据需求。",
      "source": "禾赛科技",
      "url": "https://aihot.news/items/jmd8cc56pi525th3tcccmzxqf"
     }
    ]
   },
   {
    "label": "行业动态",
    "items": [
     {
      "title": "OpenAI 详解前沿模型训练环境的安全加固与红队测试",
      "summary": "OpenAI 介绍其前沿模型训练与评估环境的安全加固措施，包括训练期间不接入互联网、构建离线缓存网页世界、以纵深防御多层隔离，并用最强模型（含即将推出的 GPT‑6 Astra Cyber）组成智能体团队进行高算力红队测试。",
      "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
      "url": "https://aihot.news/items/ss1c1fu81134agwcw2ae90gai"
     },
     {
      "title": "iPhone Duo 全球 Apple Store 正式开售，首台可折叠 iPhone 上架",
      "summary": "10 月 23 日，iPhone Duo 在全球 Apple Store 门店正式开售，顾客可现场体验首款可折叠 iPhone。",
      "source": "Apple：Newsroom（RSS）",
      "url": "https://aihot.news/items/pjmxomdu7pnp68ckyfels66mt"
     },
     {
      "title": "国务院办公厅印发意见：增强 AI 创造就业正面效应，减缓就业替代影响",
      "summary": "国务院办公厅 10 月 23 日印发《关于适应人工智能技术发展助力构建就业友好型发展方式的意见》，提出增强 AI 创造就业机会、赋能传统岗位的正面效应，有效减缓 AI 应用的就业替代影响。",
      "source": "IT之家·人工智能",
      "url": "https://aihot.news/items/shi5tga503u6jcb3itberbm18"
     },
     {
      "title": "Latent Space 梳理 PHP2Shell 漏洞事件：OpenAI Patch the Planet 与 Wiz 各自发现 PHP 核心漏洞",
      "summary": "Latent Space 的 AINews 汇总梳理了 PHP 核心漏洞 PHP2Shell（CVE-2026-109618、CVE-2026-109619）的披露时间线，研究者在 PHP 引擎的内存溢出和致命错误处理中发现缺陷，演示了对 WordPress、Drupal、Joomla 的预认证 RCE 和远程内存泄露。",
      "source": "Latent Space（RSS）",
      "url": "https://aihot.news/items/ih894crlfahslc0pttsw80r0c"
     },
     {
      "title": "WSJ：OpenAI 因 Signal 阅后即焚聊天解雇 3 名安全研究员",
      "summary": "据 WSJ 报道，OpenAI 安全人员发现 3 名安全研究员与一名外部安全研究员使用阅后即焚的 Signal 聊天后将其解雇。",
      "source": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://aihot.news/items/mc8widr5lukck9npmgeat917x"
     }
    ]
   },
   {
    "label": "论文研究",
    "items": [
     {
      "title": "Anthropic 分析 Claude Mythos 5 在 UK AISI CTF 测试中的对齐失当行为",
      "summary": "Anthropic 发布对 Claude Mythos 5 对齐问题的评估报告。",
      "source": "Anthropic：Research（发表成果 · 网页）",
      "url": "https://aihot.news/items/poiju1x1007ttnz9cc4ioj6ro"
     },
     {
      "title": "Anthropic 介绍 Claude Duet 智能体的安全、隐私与凭证隔离设计",
      "summary": "Anthropic 发文介绍处于研究预览阶段的 Claude Duet 智能体的安全与隐私设计。重要操作如发消息、付款、删除需用户在审批卡上确认，独立于模型之外的分类器检查操作是否符合意图；密码、cookie 和登录令牌不经过模型，支付使用一次性虚拟卡；敏感信息分为绝不共享和需同意共享两级，由独立分类器在发送前检查。",
      "source": "Claude：Blog（网页）",
      "url": "https://aihot.news/items/g9tc56izmwy49zgw5ta4ubsya"
     }
    ]
   },
   {
    "label": "技巧与观点",
    "items": [
     {
      "title": "Sundar Pichai 解释 Demis Hassabis 退出 DeepMind 日常管理与 Jeff Dean 离职",
      "summary": "Sundar Pichai 在访谈中解释 Demis Hassabis 逐步退出 DeepMind 日常管理和 Jeff Dean 离开 Google 的原因，称前沿模型开发已成为一项从数据、算力到团队管理都全消耗的规模化工作。",
      "source": "X：Alex Heath (@alexeheath)",
      "url": "https://aihot.news/items/ryf4bbjezfib8jx05ng0889zf"
     }
    ]
   }
  ]
 },
 "hotLists": {
  "weibo": {
   "name": "微博热搜",
   "updateTime": "2026-10-24 10:57",
   "url": "https://s.weibo.com/top/summary",
   "data": [
    {
     "title": "AI短剧公司几乎不需要基础岗",
     "url": "https://s.weibo.com/weibo?q=AI%E7%9F%AD%E5%89%A7%E5%85%AC%E5%8F%B8%E5%87%A0%E4%B9%8E%E4%B8%8D%E9%9C%80%E8%A6%81%E5%9F%BA%E7%A1%80%E5%B2%97",
     "hot": 1291163
    },
    {
     "title": "S16抽签 内战",
     "url": "https://s.weibo.com/weibo?q=S16%E6%8A%BD%E7%AD%BE%20%E5%86%85%E6%88%98",
     "hot": 1062892
    },
    {
     "title": "高质量发展看重庆",
     "url": "https://s.weibo.com/weibo?q=%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E7%9C%8B%E9%87%8D%E5%BA%86",
     "hot": 997125
    },
    {
     "title": "iPhoneDuo屏幕开裂",
     "url": "https://s.weibo.com/weibo?q=iPhoneDuo%E5%B1%8F%E5%B9%95%E5%BC%80%E8%A3%82",
     "hot": 977196
    },
    {
     "title": "两天闪婚2个月闪离分走130万拆迁款",
     "url": "https://s.weibo.com/weibo?q=%E4%B8%A4%E5%A4%A9%E9%97%AA%E5%A9%9A2%E4%B8%AA%E6%9C%88%E9%97%AA%E7%A6%BB%E5%88%86%E8%B5%B0130%E4%B8%87%E6%8B%86%E8%BF%81%E6%AC%BE",
     "hot": 563694
    },
    {
     "title": "父亲突发脑梗儿子用AI抢出救命时间",
     "url": "https://s.weibo.com/weibo?q=%E7%88%B6%E4%BA%B2%E7%AA%81%E5%8F%91%E8%84%91%E6%A2%97%E5%84%BF%E5%AD%90%E7%94%A8AI%E6%8A%A2%E5%87%BA%E6%95%91%E5%91%BD%E6%97%B6%E9%97%B4",
     "hot": 516531
    },
    {
     "title": "Crisp破防",
     "url": "https://s.weibo.com/weibo?q=Crisp%E7%A0%B4%E9%98%B2",
     "hot": 510536
    },
    {
     "title": "患癌妻子发现丈夫欠千万外债",
     "url": "https://s.weibo.com/weibo?q=%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E6%AC%A0%E5%8D%83%E4%B8%87%E5%A4%96%E5%80%BA",
     "hot": 501033
    },
    {
     "title": "王志军任湖南省委书记",
     "url": "https://s.weibo.com/weibo?q=%E7%8E%8B%E5%BF%97%E5%86%9B%E4%BB%BB%E6%B9%96%E5%8D%97%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0",
     "hot": 489937
    },
    {
     "title": "大熊猫生了个耗子崽",
     "url": "https://s.weibo.com/weibo?q=%E5%A4%A7%E7%86%8A%E7%8C%AB%E7%94%9F%E4%BA%86%E4%B8%AA%E8%80%97%E5%AD%90%E5%B4%BD",
     "hot": 475403
    },
    {
     "title": "赵丽颖直播称没有关注粉丝",
     "url": "https://s.weibo.com/weibo?q=%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9B%B4%E6%92%AD%E7%A7%B0%E6%B2%A1%E6%9C%89%E5%85%B3%E6%B3%A8%E7%B2%89%E4%B8%9D",
     "hot": 466320
    },
    {
     "title": "黄多多正式进圈",
     "url": "https://s.weibo.com/weibo?q=%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%9C%88",
     "hot": 450664
    }
   ]
  },
  "zhihu": {
   "name": "知乎热榜",
   "updateTime": "2026-10-23 17:28",
   "url": "https://www.zhihu.com/hot",
   "data": [
    {
     "title": "为什么我国在黄海要进行持续 47 天的实弹射击？释放了哪些信号？",
     "url": "https://www.zhihu.com/question/2096358861804511510",
     "hot": ""
    },
    {
     "title": "香港餐饮业出现倒闭潮，部分餐厅甩锅深圳抢客，你怎么看待？",
     "url": "https://www.zhihu.com/question/2089335688500192096",
     "hot": ""
    },
    {
     "title": "原「死了么」App 年费最高 199 元，由政府采购供独居老人免费使用，收费高吗？政府采购有必要吗？",
     "url": "https://www.zhihu.com/question/2096880010871007016",
     "hot": ""
    },
    {
     "title": "如何看待《令人心动的offer8》李子祺在节目里诊断用盲猜，称专博不临床，10篇SCI被指为水刊凑数？",
     "url": "https://www.zhihu.com/question/2096626576456507559",
     "hot": ""
    },
    {
     "title": "古代权贵吃饭吃到虫子怎么办？",
     "url": "https://www.zhihu.com/question/51730080",
     "hot": ""
    },
    {
     "title": "2627 赛季 NBA 常规赛，骑士 106-114 76 人，如何评价这场比赛？",
     "url": "https://www.zhihu.com/question/2096862410476872513",
     "hot": ""
    },
    {
     "title": "如何看待一人之下781话之中，王国平和巴伦的大战？",
     "url": "https://www.zhihu.com/question/2096290658663376086",
     "hot": ""
    },
    {
     "title": "DeepSeek拟新融资1000亿元，腾讯、宁德时代出资最多，这会不会改写国内大模型的竞争格局？",
     "url": "https://www.zhihu.com/question/2096713518582179306",
     "hot": ""
    },
    {
     "title": "真的有公司裁员裁到“大动脉”，最后不得不花高价把人请回来的吗？",
     "url": "https://www.zhihu.com/question/2095467399596266995",
     "hot": ""
    },
    {
     "title": "河北承德一拾荒老人被倾倒渣石砸死后，被瞒报近三年 ，事情为什么能被压这么久？问题出在哪些环节？",
     "url": "https://www.zhihu.com/question/2095479322576532718",
     "hot": ""
    },
    {
     "title": "曝波兰爆发大规模抗议活动，数百万人涌上街头，具体什么情况？为啥欧洲最近都在陆续爆发大规模的抗议活动？",
     "url": "https://www.zhihu.com/question/2096731185820819857",
     "hot": ""
    },
    {
     "title": "如果真按小岛说的，做一款充满“偶然性”的3A大作，把日常任务和保底全删了，玩家真能玩下去吗？",
     "url": "https://www.zhihu.com/question/2096012007564637306",
     "hot": ""
    }
   ]
  },
  "douyin": {
   "name": "抖音热点",
   "updateTime": "2026-10-24 10:57",
   "url": "https://www.douyin.com/hot",
   "data": [
    {
     "title": "LPL瑞士轮首轮全败",
     "url": "https://www.douyin.com/search/LPL%E7%91%9E%E5%A3%AB%E8%BD%AE%E9%A6%96%E8%BD%AE%E5%85%A8%E8%B4%A5",
     "hot": 11725956
    },
    {
     "title": "国内黄金克价跌破860元",
     "url": "https://www.douyin.com/search/%E5%9B%BD%E5%86%85%E9%BB%84%E9%87%91%E5%85%8B%E4%BB%B7%E8%B7%8C%E7%A0%B4860%E5%85%83",
     "hot": 11364864
    },
    {
     "title": "西藏克服难点开展地震救援",
     "url": "https://www.douyin.com/search/%E8%A5%BF%E8%97%8F%E5%85%8B%E6%9C%8D%E9%9A%BE%E7%82%B9%E5%BC%80%E5%B1%95%E5%9C%B0%E9%9C%87%E6%95%91%E6%8F%B4",
     "hot": 11182785
    },
    {
     "title": "秦岭半山红叶半山雪",
     "url": "https://www.douyin.com/search/%E7%A7%A6%E5%B2%AD%E5%8D%8A%E5%B1%B1%E7%BA%A2%E5%8F%B6%E5%8D%8A%E5%B1%B1%E9%9B%AA",
     "hot": 11162903
    },
    {
     "title": "骑行四千五百公里赴赛里木湖",
     "url": "https://www.douyin.com/search/%E9%AA%91%E8%A1%8C%E5%9B%9B%E5%8D%83%E4%BA%94%E7%99%BE%E5%85%AC%E9%87%8C%E8%B5%B4%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96",
     "hot": 10450364
    },
    {
     "title": "KC战胜AL",
     "url": "https://www.douyin.com/search/KC%E6%88%98%E8%83%9CAL",
     "hot": 10432379
    },
    {
     "title": "MKOI战胜BLG",
     "url": "https://www.douyin.com/search/MKOI%E6%88%98%E8%83%9CBLG",
     "hot": 9185044
    },
    {
     "title": "秋日收藏小赛",
     "url": "https://www.douyin.com/search/%E7%A7%8B%E6%97%A5%E6%94%B6%E8%97%8F%E5%B0%8F%E8%B5%9B",
     "hot": 9178374
    },
    {
     "title": "毛茸茸治愈一切",
     "url": "https://www.douyin.com/search/%E6%AF%9B%E8%8C%B8%E8%8C%B8%E6%B2%BB%E6%84%88%E4%B8%80%E5%88%87",
     "hot": 9168116
    },
    {
     "title": "网友拍到绝美火箭云",
     "url": "https://www.douyin.com/search/%E7%BD%91%E5%8F%8B%E6%8B%8D%E5%88%B0%E7%BB%9D%E7%BE%8E%E7%81%AB%E7%AE%AD%E4%BA%91",
     "hot": 9077856
    },
    {
     "title": "泽连斯基称停火是乌方最大让步",
     "url": "https://www.douyin.com/search/%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E5%81%9C%E7%81%AB%E6%98%AF%E4%B9%8C%E6%96%B9%E6%9C%80%E5%A4%A7%E8%AE%A9%E6%AD%A5",
     "hot": 9050368
    },
    {
     "title": "林诗栋将出战混合团体世界杯",
     "url": "https://www.douyin.com/search/%E6%9E%97%E8%AF%97%E6%A0%8B%E5%B0%86%E5%87%BA%E6%88%98%E6%B7%B7%E5%90%88%E5%9B%A2%E4%BD%93%E4%B8%96%E7%95%8C%E6%9D%AF",
     "hot": 9020840
    }
   ]
  },
  "toutiao": {
   "name": "头条热榜",
   "updateTime": "2026-10-23 17:28",
   "url": "https://www.toutiao.com/",
   "data": [
    {
     "title": "西藏地震地面裂缝比手宽",
     "url": "https://www.toutiao.com/trending/7699707790348045850",
     "hot": 32883068
    },
    {
     "title": "李昌钰夫人泪别：你等我18年 我们合葬",
     "url": "https://www.toutiao.com/trending/7699290534531219466",
     "hot": 29753830
    },
    {
     "title": "中共中央政治局召开会议",
     "url": "https://www.toutiao.com/article/7699727667100222015",
     "hot": 26922379
    },
    {
     "title": "李雪健已无法说话 仅靠表情完成演出",
     "url": "https://www.toutiao.com/trending/7699399358780968511",
     "hot": 24360376
    },
    {
     "title": "泽连斯基：真不想打仗了",
     "url": "https://www.toutiao.com/trending/7699770335046143538",
     "hot": 22042180
    },
    {
     "title": "专家：A股恐慌盘还没来",
     "url": "https://www.toutiao.com/trending/7699759718796889627",
     "hot": 19944589
    },
    {
     "title": "职场综艺 令人心梗的offer",
     "url": "https://www.toutiao.com/trending/7699782249973059098",
     "hot": 18046610
    },
    {
     "title": "宇树封死20cm涨停",
     "url": "https://www.toutiao.com/trending/7699772404330925587",
     "hot": 16329248
    },
    {
     "title": "西藏地震已致16死76伤",
     "url": "https://www.toutiao.com/trending/7699756774206770715",
     "hot": 14775315
    },
    {
     "title": "日本重兵部署与那国岛有何目的",
     "url": "https://www.toutiao.com/trending/7699668272744140330",
     "hot": 13369258
    },
    {
     "title": "采暖费能找人打折代缴？假的",
     "url": "https://www.toutiao.com/trending/7699127970027569188",
     "hot": 12097004
    },
    {
     "title": "航拍西藏强震受灾核心区域",
     "url": "https://www.toutiao.com/trending/7699727099828915755",
     "hot": 10945822
    }
   ]
  },
  "baidu": {
   "name": "百度热搜",
   "updateTime": "2026-10-23 01:31",
   "url": "https://top.baidu.com/board",
   "data": [
    {
     "title": "西藏那曲市7.0级地震",
     "url": "https://www.baidu.com/s?wd=%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B2%E5%B8%827.0%E7%BA%A7%E5%9C%B0%E9%9C%87&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "全球70%网站都危险了",
     "url": "https://www.baidu.com/s?wd=%E5%85%A8%E7%90%8370%25%E7%BD%91%E7%AB%99%E9%83%BD%E5%8D%B1%E9%99%A9%E4%BA%86&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "红军为何总能绝处逢生",
     "url": "https://www.baidu.com/s?wd=%E7%BA%A2%E5%86%9B%E4%B8%BA%E4%BD%95%E6%80%BB%E8%83%BD%E7%BB%9D%E5%A4%84%E9%80%A2%E7%94%9F&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "国乒男团3比0韩国 亚锦赛4连冠",
     "url": "https://www.baidu.com/s?wd=%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%940%E9%9F%A9%E5%9B%BD+%E4%BA%9A%E9%94%A6%E8%B5%9B4%E8%BF%9E%E5%86%A0&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "李雪健这段无声演绎看哭了",
     "url": "https://www.baidu.com/s?wd=%E6%9D%8E%E9%9B%AA%E5%81%A5%E8%BF%99%E6%AE%B5%E6%97%A0%E5%A3%B0%E6%BC%94%E7%BB%8E%E7%9C%8B%E5%93%AD%E4%BA%86&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "女子100天零违章获奖1吨汽油",
     "url": "https://www.baidu.com/s?wd=%E5%A5%B3%E5%AD%90100%E5%A4%A9%E9%9B%B6%E8%BF%9D%E7%AB%A0%E8%8E%B7%E5%A5%961%E5%90%A8%E6%B1%BD%E6%B2%B9&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "西藏那曲地震 居民跑到室外避险",
     "url": "https://www.baidu.com/s?wd=%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B2%E5%9C%B0%E9%9C%87+%E5%B1%85%E6%B0%91%E8%B7%91%E5%88%B0%E5%AE%A4%E5%A4%96%E9%81%BF%E9%99%A9&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "捷达M6上市 售价7.98万起",
     "url": "https://www.baidu.com/s?wd=%E6%8D%B7%E8%BE%BEM6%E4%B8%8A%E5%B8%82+%E5%94%AE%E4%BB%B77.98%E4%B8%87%E8%B5%B7&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "国乒女团2比3日本 获亚锦赛亚军",
     "url": "https://www.baidu.com/s?wd=%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A22%E6%AF%943%E6%97%A5%E6%9C%AC+%E8%8E%B7%E4%BA%9A%E9%94%A6%E8%B5%9B%E4%BA%9A%E5%86%9B&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "青海玉树4.3级地震",
     "url": "https://www.baidu.com/s?wd=%E9%9D%92%E6%B5%B7%E7%8E%89%E6%A0%914.3%E7%BA%A7%E5%9C%B0%E9%9C%87&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "多地辟谣外地患者到高校传播艾滋病",
     "url": "https://www.baidu.com/s?wd=%E5%A4%9A%E5%9C%B0%E8%BE%9F%E8%B0%A3%E5%A4%96%E5%9C%B0%E6%82%A3%E8%80%85%E5%88%B0%E9%AB%98%E6%A0%A1%E4%BC%A0%E6%92%AD%E8%89%BE%E6%BB%8B%E7%97%85&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "孙坚 一边拍戏一边还债",
     "url": "https://www.baidu.com/s?wd=%E5%AD%99%E5%9D%9A+%E4%B8%80%E8%BE%B9%E6%8B%8D%E6%88%8F%E4%B8%80%E8%BE%B9%E8%BF%98%E5%80%BA&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    }
   ]
  },
  "bilibili": {
   "name": "B站热门",
   "updateTime": "2026-10-24 10:57",
   "url": "https://www.bilibili.com/v/popular/all/",
   "data": [
    {
     "title": "有用版新植物：野狗小喷菇",
     "url": "https://www.bilibili.com/video/BV1G1nb6oExa",
     "hot": 1031666
    },
    {
     "title": "11天，我们干掉祸害20多年的传销头目！",
     "url": "https://www.bilibili.com/video/BV1oTnW67E4n",
     "hot": 416817
    },
    {
     "title": "人工耳蜗里的声音，到底是什么样的？",
     "url": "https://www.bilibili.com/video/BV14Enb6LEDe",
     "hot": 1357969
    },
    {
     "title": "⚡⚡逆 天 复 仇 者⚡⚡",
     "url": "https://www.bilibili.com/video/BV1BZn86qE9n",
     "hot": 343786
    },
    {
     "title": "警告！别跟海绵宝宝学做蟹黄堡！！",
     "url": "https://www.bilibili.com/video/BV17pnp6EEen",
     "hot": 692918
    },
    {
     "title": "“大肥鱼适合做女朋友吗？”",
     "url": "https://www.bilibili.com/video/BV166nW6REyR",
     "hot": 1226554
    },
    {
     "title": "《洛克王国：世界》S5赛季「圣龙宝藏」PV首曝，11月5日冒险启程！",
     "url": "https://www.bilibili.com/video/BV1C8nH69Ekq",
     "hot": 1497490
    },
    {
     "title": "当男摄和女摄相遇……",
     "url": "https://www.bilibili.com/video/BV1bAnp6wEap",
     "hot": 2036689
    },
    {
     "title": "我的手办还会动，这世道不会还有人没有会动的手办吧，不会吧不会吧",
     "url": "https://www.bilibili.com/video/BV1i4nC6KE19",
     "hot": 733114
    },
    {
     "title": "传统口技表演《大闹天宫》",
     "url": "https://www.bilibili.com/video/BV1xwnE6jEUZ",
     "hot": 1960447
    },
    {
     "title": "😨\"后室里的乌鲁鲁3\"😰",
     "url": "https://www.bilibili.com/video/BV1Honn67ENm",
     "hot": 482685
    },
    {
     "title": "《原神》7.2版本PV：「坏灭肇始之时」",
     "url": "https://www.bilibili.com/video/BV1z9nt6aE5H",
     "hot": 1559351
    }
   ]
  }
 },
 "epic": [
  {
   "title": "Home - A Unique Horror Adventure",
   "description": "Home is a unique horror adventure set in a beautifully-realized pixel world. It’s a murder mystery with a twist – because you decide what ultimately happens.",
   "original_price_desc": "¥15.00",
   "free_end": "2026/10/29 23:00",
   "link": "https://store.epicgames.com/store/zh-CN/p/home-19212a"
  },
  {
   "title": "Sker Ritual",
   "description": "The round-based co-op survival FPS and spin-off to the award-winning British horror, Maid of Sker. Play solo or up to 4 players to survive the supernatural onslaught of the Quiet Ones.",
   "original_price_desc": "¥78.00",
   "free_end": "2026/10/29 23:00",
   "link": "https://store.epicgames.com/store/zh-CN/p/sker-ritual-aac702"
  }
 ],
 "techNews": [
  {
   "title": "对话项飙：AI可能使年轻人的生命经验更稀薄",
   "url": "https://finance.sina.com.cn/tech/shenji/2026-10-23/doc-iniweiyu8053043.shtml",
   "source": "新浪科技"
  },
  {
   "title": "Claude自动模式将全球上线！OpenAI曝出最恐怖一幕",
   "url": "https://finance.sina.com.cn/wm/2026-10-23/doc-iniweiyt5660748.shtml",
   "source": "新浪科技"
  },
  {
   "title": "打卡ESG大会：美团与你一起低碳出行",
   "url": "https://finance.sina.com.cn/jjxw/2026-10-22/doc-iniwchpk4993529.shtml",
   "source": "新浪科技"
  },
  {
   "title": "机圈过节了！多家苹果店门前排起长龙：只为拿到iPhone Duo",
   "url": "https://finance.sina.com.cn/stock/t/2026-10-23/doc-iniweiyt5612012.shtml",
   "source": "新浪科技"
  },
  {
   "title": "一张图直接生成“电影片场”！AI虚拟影棚效率拉满",
   "url": "https://finance.sina.com.cn/jjxw/2026-10-23/doc-iniweiyr4906028.shtml",
   "source": "新浪科技"
  },
  {
   "title": "卖吆喝大于销售，不打折的token为何急着上架电商双11？",
   "url": "https://finance.sina.com.cn/tech/roll/2026-10-23/doc-iniweiyr4883341.shtml",
   "source": "新浪科技"
  },
  {
   "title": "东风风神L8+上市：搭载700TOPS算力智驾，售价12.99万元起",
   "url": "https://finance.sina.com.cn/tob/2026-10-24/doc-iniwhtfu4962608.shtml",
   "source": "新浪科技"
  },
  {
   "title": "拼多多紧急捐赠1000万元 驰援西藏那曲抗震救灾",
   "url": "https://finance.sina.com.cn/tob/2026-10-24/doc-iniwhtfu4953813.shtml",
   "source": "新浪科技"
  },
  {
   "title": "英国承诺出资1亿英镑设立生物安全实验室 OpenAI、Anthropic参与合作",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-10-24/doc-iniwhtfy2247230.shtml",
   "source": "新浪科技"
  },
  {
   "title": "科大讯飞连发AI新品：涵盖语音、多模态、具身多模交互，推出机器人超脑平台V3.0",
   "url": "https://finance.sina.com.cn/jjxw/2026-10-23/doc-iniwfruh5072367.shtml",
   "source": "新浪科技"
  },
  {
   "title": "舞台神器荣耀Magic9成肖战演唱会“硬通货”",
   "url": "https://finance.sina.com.cn/tech/mobile/n/n/2026-10-23/doc-iniwfruk1812762.shtml",
   "source": "新浪科技"
  },
  {
   "title": "Momenta曹旭东：世界模型加速智驾摩尔定律，2028年将迎来L4规模化拐点",
   "url": "https://finance.sina.com.cn/jjxw/2026-10-23/doc-iniwfmnh8284823.shtml",
   "source": "新浪科技"
  }
 ]
};
if (typeof window !== 'undefined') window.WB_DATA = WB_DATA;
