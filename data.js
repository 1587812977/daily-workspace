// 个人工作台数据（GitHub Actions 定时刷新，勿手改）
var WB_DATA = {
 "updatedAt": "2026-10-24 17:00",
 "aihotHot": [
  {
   "rank": 1,
   "title": "月之暗面发布 Kimi K3.1 Pro，权重定于 11 月 4 日前释出",
   "source": "Moonshot AI：Kimi Blog",
   "url": "https://aihot.news/items/okgjn7r72wo7c5j0bu3o1vbie",
   "time": "10-24 15:59",
   "sourceCount": 21
  },
  {
   "rank": 2,
   "title": "OpenAI 前沿训练断网，红队测出 Brotli 漏洞",
   "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
   "url": "https://aihot.news/items/ss1c1fu81134agwcw2ae90gai",
   "time": "10-24 14:46",
   "sourceCount": 8
  },
  {
   "rank": 3,
   "title": "OpenAI称AI协助发现PHP核心漏洞，补丁已发布",
   "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
   "url": "https://aihot.news/items/r4saw5foxj8v0eb82f3b66cs0",
   "time": "10-22 23:25",
   "sourceCount": 1
  },
  {
   "rank": 4,
   "title": "Apple折叠屏iPhone Duo发布并开售",
   "source": "Apple：Newsroom（RSS）",
   "url": "https://aihot.news/items/ofhppbtjnzfrzbv2a11sl8u7h",
   "time": "10-23 00:00",
   "sourceCount": 1
  },
  {
   "rank": 5,
   "title": "Claude Code 核心成员 Thariq 离开 Anthropic",
   "source": "X：Thariq (@trq212)",
   "url": "https://aihot.news/items/hhwasdljj9hnckutq2vvyei4i",
   "time": "10-24 12:40",
   "sourceCount": 3
  },
  {
   "rank": 6,
   "title": "Anthropic 开放 Claude Duet 主动式智能体研究预览",
   "source": "Claude：Blog（网页）",
   "url": "https://aihot.news/items/jgg0i29t3o1eycc24c3wev0fx",
   "time": "10-24 03:33",
   "sourceCount": 2
  },
  {
   "rank": 7,
   "title": "1Password 推出智能体代登录平台，多家接入",
   "source": "X：Grok Bot (@bot)",
   "url": "https://aihot.news/items/c7kz49ohg81rxi4ozxv046ttp",
   "time": "10-23 07:54",
   "sourceCount": 7
  },
  {
   "rank": 8,
   "title": "MiniMax 开源 M3.1 Flash 权重，总参数 428B",
   "source": "MiniMax：Blog（网页）",
   "url": "https://aihot.news/items/wrnv8dd428iozlj5xax99zbmj",
   "time": "10-24 05:02",
   "sourceCount": 5
  },
  {
   "rank": 9,
   "title": "Canva 发布首个自研图像模型 Canva Craft",
   "source": "The Verge：AI（RSS）",
   "url": "https://aihot.news/items/xrz4fj30hoq167997p69rqe8v",
   "time": "10-23 19:36",
   "sourceCount": 4
  },
  {
   "rank": 10,
   "title": "OpenAI 洽谈至多 300 亿美元融资，目标估值降至 1.25 万亿美元",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/qexf6est4uitwd71p3ugedxo6",
   "time": "10-23 17:49",
   "sourceCount": 3
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
   "updateTime": "2026-10-24 17:00",
   "url": "https://s.weibo.com/top/summary",
   "data": [
    {
     "title": "秦始皇兵马俑上发现女性指纹",
     "url": "https://s.weibo.com/weibo?q=%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%85%B5%E9%A9%AC%E4%BF%91%E4%B8%8A%E5%8F%91%E7%8E%B0%E5%A5%B3%E6%80%A7%E6%8C%87%E7%BA%B9",
     "hot": 1161989
    },
    {
     "title": "去年全国结婚登记676万对",
     "url": "https://s.weibo.com/weibo?q=%E5%8E%BB%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0676%E4%B8%87%E5%AF%B9",
     "hot": 857746
    },
    {
     "title": "个人账户跨省共济全国落地",
     "url": "https://s.weibo.com/weibo?q=%E4%B8%AA%E4%BA%BA%E8%B4%A6%E6%88%B7%E8%B7%A8%E7%9C%81%E5%85%B1%E6%B5%8E%E5%85%A8%E5%9B%BD%E8%90%BD%E5%9C%B0",
     "hot": 645713
    },
    {
     "title": "匡威卖不动了吗",
     "url": "https://s.weibo.com/weibo?q=%E5%8C%A1%E5%A8%81%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%E5%90%97",
     "hot": 512300
    },
    {
     "title": "成都蓉城vs大连英博",
     "url": "https://s.weibo.com/weibo?q=%E6%88%90%E9%83%BD%E8%93%89%E5%9F%8Evs%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A",
     "hot": 393172
    },
    {
     "title": "老年人摔倒后身体断崖式衰退真相",
     "url": "https://s.weibo.com/weibo?q=%E8%80%81%E5%B9%B4%E4%BA%BA%E6%91%94%E5%80%92%E5%90%8E%E8%BA%AB%E4%BD%93%E6%96%AD%E5%B4%96%E5%BC%8F%E8%A1%B0%E9%80%80%E7%9C%9F%E7%9B%B8",
     "hot": 389294
    },
    {
     "title": "菲防长竟叫嚣战争行为恐吓中国",
     "url": "https://s.weibo.com/weibo?q=%E8%8F%B2%E9%98%B2%E9%95%BF%E7%AB%9F%E5%8F%AB%E5%9A%A3%E6%88%98%E4%BA%89%E8%A1%8C%E4%B8%BA%E6%81%90%E5%90%93%E4%B8%AD%E5%9B%BD",
     "hot": 383967
    },
    {
     "title": "多位网友晒iPhoneDuo屏幕裂了",
     "url": "https://s.weibo.com/weibo?q=%E5%A4%9A%E4%BD%8D%E7%BD%91%E5%8F%8B%E6%99%92iPhoneDuo%E5%B1%8F%E5%B9%95%E8%A3%82%E4%BA%86",
     "hot": 338716
    },
    {
     "title": "年轻人正在抛弃帆布鞋",
     "url": "https://s.weibo.com/weibo?q=%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%AD%A3%E5%9C%A8%E6%8A%9B%E5%BC%83%E5%B8%86%E5%B8%83%E9%9E%8B",
     "hot": 258736
    },
    {
     "title": "BLG不夺冠雷鸟退全款",
     "url": "https://s.weibo.com/weibo?q=BLG%E4%B8%8D%E5%A4%BA%E5%86%A0%E9%9B%B7%E9%B8%9F%E9%80%80%E5%85%A8%E6%AC%BE",
     "hot": 232543
    },
    {
     "title": "突然get到了杨超越毫不费力的绝美",
     "url": "https://s.weibo.com/weibo?q=%E7%AA%81%E7%84%B6get%E5%88%B0%E4%BA%86%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%AF%AB%E4%B8%8D%E8%B4%B9%E5%8A%9B%E7%9A%84%E7%BB%9D%E7%BE%8E",
     "hot": 232231
    },
    {
     "title": "男明星红毯 无聊",
     "url": "https://s.weibo.com/weibo?q=%E7%94%B7%E6%98%8E%E6%98%9F%E7%BA%A2%E6%AF%AF%20%E6%97%A0%E8%81%8A",
     "hot": 231535
    }
   ]
  },
  "zhihu": {
   "name": "知乎热榜",
   "updateTime": "2026-10-24 17:00",
   "url": "https://www.zhihu.com/hot",
   "data": [
    {
     "title": "如何看待泰国旅游部长称「普通游客不会遭绑架」，这类问题「只出现在中国游客」？实际情况是怎样的？",
     "url": "https://www.zhihu.com/question/2096553772138886771",
     "hot": ""
    },
    {
     "title": "S16 全球总决赛瑞士轮首日 LPL 战队四战全败创联赛最差开局成绩，如何评价首日他们的表现？",
     "url": "https://www.zhihu.com/question/2097190763675309990",
     "hot": ""
    },
    {
     "title": "如何评价博主称“游戏劫持了人生最珍贵的算力，导致现实问题一个都没碰”的观点？",
     "url": "https://www.zhihu.com/question/2096910627998585435",
     "hot": ""
    },
    {
     "title": "如何评价英国拟征收看剧税，观看 YouTube、Netflix 等网络流媒体需每年缴纳 180 英镑？",
     "url": "https://www.zhihu.com/question/2096182423621059644",
     "hot": ""
    },
    {
     "title": "听说月球在以每年四厘米的距离离开地球，这是不是真的？",
     "url": "https://www.zhihu.com/question/299894978",
     "hot": ""
    },
    {
     "title": "如何看待小鹏新车发布会「老登营销」翻车事件？",
     "url": "https://www.zhihu.com/question/2095562516445320151",
     "hot": ""
    },
    {
     "title": "领导让你去他车里拿茅台，但车里没有怎么办？",
     "url": "https://www.zhihu.com/question/1919848515183568588",
     "hot": ""
    },
    {
     "title": "国务院办公厅称要「有效减缓人工智能应用就业替代影响」，释放出什么信号？可能带来哪些实际影响？",
     "url": "https://www.zhihu.com/question/2097043375547536464",
     "hot": ""
    },
    {
     "title": "9岁孩子开门杀致路人死亡，司机获刑10个月缓刑1年，开门的是乘客，为何判刑的是司机？带给我们哪些启示？",
     "url": "https://www.zhihu.com/question/2096896642700013908",
     "hot": ""
    },
    {
     "title": "为什么腾讯有了QQ这么庞大的用户基础群之后要开发微信呢？",
     "url": "https://www.zhihu.com/question/1926924740225922646",
     "hot": ""
    },
    {
     "title": "如何评价博主「赛车星冰乐」涉嫌诋毁嘲讽尊界 S800，公开向尊界汽车道歉？具体发生了什么？",
     "url": "https://www.zhihu.com/question/2097007117353883602",
     "hot": ""
    },
    {
     "title": "你怎么看毛不易在女性好友婚礼上的致辞，算越界吗？为什么「结婚越来越不意味着什么」引发热议？",
     "url": "https://www.zhihu.com/question/2096550287901307789",
     "hot": ""
    }
   ]
  },
  "douyin": {
   "name": "抖音热点",
   "updateTime": "2026-10-24 17:00",
   "url": "https://www.douyin.com/hot",
   "data": [
    {
     "title": "中超成都蓉城vs大连英博",
     "url": "https://www.douyin.com/search/%E4%B8%AD%E8%B6%85%E6%88%90%E9%83%BD%E8%93%89%E5%9F%8Evs%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A",
     "hot": 11337160
    },
    {
     "title": "秦岭半山红叶半山雪",
     "url": "https://www.douyin.com/search/%E7%A7%A6%E5%B2%AD%E5%8D%8A%E5%B1%B1%E7%BA%A2%E5%8F%B6%E5%8D%8A%E5%B1%B1%E9%9B%AA",
     "hot": 11228503
    },
    {
     "title": "各方救援力量抵达西藏",
     "url": "https://www.douyin.com/search/%E5%90%84%E6%96%B9%E6%95%91%E6%8F%B4%E5%8A%9B%E9%87%8F%E6%8A%B5%E8%BE%BE%E8%A5%BF%E8%97%8F",
     "hot": 11055898
    },
    {
     "title": "台风蔷琵正在我国近海活跃",
     "url": "https://www.douyin.com/search/%E5%8F%B0%E9%A3%8E%E8%94%B7%E7%90%B5%E6%AD%A3%E5%9C%A8%E6%88%91%E5%9B%BD%E8%BF%91%E6%B5%B7%E6%B4%BB%E8%B7%83",
     "hot": 10964569
    },
    {
     "title": "懒人版番茄炖牛肉承包秋冬晚餐",
     "url": "https://www.douyin.com/search/%E6%87%92%E4%BA%BA%E7%89%88%E7%95%AA%E8%8C%84%E7%82%96%E7%89%9B%E8%82%89%E6%89%BF%E5%8C%85%E7%A7%8B%E5%86%AC%E6%99%9A%E9%A4%90",
     "hot": 10404211
    },
    {
     "title": "湖人6人上双胜快船",
     "url": "https://www.douyin.com/search/%E6%B9%96%E4%BA%BA6%E4%BA%BA%E4%B8%8A%E5%8F%8C%E8%83%9C%E5%BF%AB%E8%88%B9",
     "hot": 10351567
    },
    {
     "title": "秋日收藏小赛",
     "url": "https://www.douyin.com/search/%E7%A7%8B%E6%97%A5%E6%94%B6%E8%97%8F%E5%B0%8F%E8%B5%9B",
     "hot": 9165366
    },
    {
     "title": "火箭114:110力克马刺",
     "url": "https://www.douyin.com/search/%E7%81%AB%E7%AE%AD114%3A110%E5%8A%9B%E5%85%8B%E9%A9%AC%E5%88%BA",
     "hot": 9121557
    },
    {
     "title": "Kimi K3.1 Pro来了",
     "url": "https://www.douyin.com/search/Kimi%20K3.1%20Pro%E6%9D%A5%E4%BA%86",
     "hot": 9091599
    },
    {
     "title": "LPL瑞士轮首轮全败",
     "url": "https://www.douyin.com/search/LPL%E7%91%9E%E5%A3%AB%E8%BD%AE%E9%A6%96%E8%BD%AE%E5%85%A8%E8%B4%A5",
     "hot": 9048441
    },
    {
     "title": "第31号台风烟花已生成",
     "url": "https://www.douyin.com/search/%E7%AC%AC31%E5%8F%B7%E5%8F%B0%E9%A3%8E%E7%83%9F%E8%8A%B1%E5%B7%B2%E7%94%9F%E6%88%90",
     "hot": 8976861
    },
    {
     "title": "亲手捏个角色放主页",
     "url": "https://www.douyin.com/search/%E4%BA%B2%E6%89%8B%E6%8D%8F%E4%B8%AA%E8%A7%92%E8%89%B2%E6%94%BE%E4%B8%BB%E9%A1%B5",
     "hot": 8891467
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
   "updateTime": "2026-10-24 17:00",
   "url": "https://www.bilibili.com/v/popular/all/",
   "data": [
    {
     "title": "《绝区零》先导演示丨挽昼",
     "url": "https://www.bilibili.com/video/BV1U3n46GEzY",
     "hot": 2199493
    },
    {
     "title": "人性、欲望与奇观，自驾拉斯维加斯，现实夜之城什么样？",
     "url": "https://www.bilibili.com/video/BV12qnt6VEM1",
     "hot": 1232941
    },
    {
     "title": "派大星跳伞是什么梗【梗指南】",
     "url": "https://www.bilibili.com/video/BV11kn86mEjg",
     "hot": 853611
    },
    {
     "title": " 【独家】《凡人修仙传之慕兰之战》第21集【总第197集】",
     "url": "https://www.bilibili.com/video/BV1ojn86vEeU",
     "hot": 3030996
    },
    {
     "title": "人工耳蜗里的声音，到底是什么样的？",
     "url": "https://www.bilibili.com/video/BV14Enb6LEDe",
     "hot": 2422691
    },
    {
     "title": "我的天呐！这S赛太让人痛苦了，突破历史的首日全败！观众做了什么坏事要熬夜看这种比赛？【1酱赛评S赛瑞士轮Day1】",
     "url": "https://www.bilibili.com/video/BV1WtHA6TEew",
     "hot": 859943
    },
    {
     "title": "半夜偷吃的生死体验 3.0",
     "url": "https://www.bilibili.com/video/BV1SAn168E4B",
     "hot": 790092
    },
    {
     "title": "“借大圣威名，护我痴儿周全”",
     "url": "https://www.bilibili.com/video/BV1KMnw6ME1Z",
     "hot": 670029
    },
    {
     "title": "【真实锐评】LPL瑞士轮首轮全败！4个0-1 4个BO1加一起凑不出来一条龙魂！牛了！",
     "url": "https://www.bilibili.com/video/BV1sHHA63ELC",
     "hot": 716713
    },
    {
     "title": "【纪录片】中国救护2 06 此去仍有光",
     "url": "https://www.bilibili.com/video/BV1oXnx6sEnc",
     "hot": 669963
    },
    {
     "title": "《纯阳真气》",
     "url": "https://www.bilibili.com/video/BV111na6WExX",
     "hot": 515274
    },
    {
     "title": "11天，我们干掉祸害20多年的传销头目！",
     "url": "https://www.bilibili.com/video/BV1oTnW67E4n",
     "hot": 914320
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
   "title": "小红书“大城小聚”活动落地北京首钢园",
   "url": "https://finance.sina.com.cn/tech/2026-10-24/doc-iniwicvs1355745.shtml",
   "source": "新浪科技"
  },
  {
   "title": "宇树机器人侧空翻表演甩断腿，系新发布的H2-X人形机器人",
   "url": "https://finance.sina.com.cn/tob/2026-10-24/doc-iniwicvn8029436.shtml",
   "source": "新浪科技"
  },
  {
   "title": "企业微信回应“多品牌账号发色情引流链接”：系第三方外挂软件服务被攻破",
   "url": "https://finance.sina.com.cn/tob/2026-10-24/doc-iniwicvu2057966.shtml",
   "source": "新浪科技"
  },
  {
   "title": "英伟达、谷歌加持 B站启动AI创造公开赛新赛季",
   "url": "https://finance.sina.com.cn/tob/2026-10-24/doc-iniwhxpq8092815.shtml",
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
  }
 ]
};
if (typeof window !== 'undefined') window.WB_DATA = WB_DATA;
