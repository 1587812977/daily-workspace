// 个人工作台数据（GitHub Actions 定时刷新，勿手改）
var WB_DATA = {
 "updatedAt": "2026-11-14 03:57",
 "aihotHot": [
  {
   "rank": 1,
   "title": "黄仁勋辞任英伟达CEO并退出董事会",
   "source": "NVIDIA：Newsroom（RSS）",
   "url": "https://aihot.news/items/qsbjbz754aodhcijq56puh6va",
   "time": "11-13 12:17",
   "sourceCount": 15
  },
  {
   "rank": 2,
   "title": "Google 发布 Gemini 4 Hydrogen，接入搜索与编程工具",
   "source": "Google DeepMind：Blog（RSS）",
   "url": "https://aihot.news/items/uy1ayrrlqx1snqsv4lub7whsa",
   "time": "11-13 17:45",
   "sourceCount": 18
  },
  {
   "rank": 3,
   "title": "微软365故障波及Claude，Anthropic通报中断",
   "source": "IT之家·人工智能",
   "url": "https://aihot.news/items/h2nxkfqpvkcqzof1dlta9j5w0",
   "time": "11-13 21:10",
   "sourceCount": 1
  },
  {
   "rank": 4,
   "title": "OpenAI推出ChatGPT Wallet，智能体可代用户购物",
   "source": "X：ChatGPT (@ChatGPT)",
   "url": "https://aihot.news/items/vot1htumxjgnb0i88rbq3zsuq",
   "time": "11-14 02:55",
   "sourceCount": 5
  },
  {
   "rank": 5,
   "title": "DeepSeek 开放 App 能力 API，扩展调用另收费",
   "source": "DeepSeek：API 更新日志",
   "url": "https://aihot.news/items/nnbnoebf6mvo97usmwj5wziyl",
   "time": "11-13 23:31",
   "sourceCount": 3
  },
  {
   "rank": 6,
   "title": "Anthropic 向 Team 和 Enterprise 推出 Claude Meetings beta",
   "source": "Claude：Blog（网页）",
   "url": "https://aihot.news/items/l36ne5q2gsdx6thyia7fi10kn",
   "time": "11-13 06:36",
   "sourceCount": 5
  },
  {
   "rank": 7,
   "title": "Anthropic启动IPO路演，估值预期回落至1.25–1.75万亿美元",
   "source": "Anthropic：Newsroom（网页）",
   "url": "https://aihot.news/items/xywgx35ocbe6mzl2pnajw8ruu",
   "time": "11-14 02:01",
   "sourceCount": 2
  },
  {
   "rank": 8,
   "title": "前OpenAI工程师称四家中国AI实验室用Blackwell训练模型",
   "source": "X：indigo (@indigox)",
   "url": "https://aihot.news/items/p9g8alrjslao3dn6von37647l",
   "time": "11-13 23:21",
   "sourceCount": 2
  },
  {
   "rank": 9,
   "title": "Google发布Gemini Decision 1决策模型与Decisions API",
   "source": "Google Blog：AI（RSS）",
   "url": "https://aihot.news/items/r8hsm3m3munjwk1n3u885zszw",
   "time": "11-13 09:10",
   "sourceCount": 6
  },
  {
   "rank": 10,
   "title": "李彦宏在百度世界2026提出“智能组织”",
   "source": "X：百度 Baidu (@Baidu_Inc)",
   "url": "https://aihot.news/items/lwol7ih78afft10fpv5rxphes",
   "time": "11-12 15:01",
   "sourceCount": 2
  }
 ],
 "aihotItems": [
  {
   "title": "Anthropic 详解常驻智能体的五个核心架构原语",
   "summary": "Anthropic 发布博客，拆解常驻智能体（always-on agents）背后的架构。这类智能体有状态且可主动行动，其兴起得益于模型判断力提升和智能成本下降，例如长程编码任务上 Opus 5.5 每解决一个任务的成本比 Opus 5 低 78%。",
   "reason": "Anthropic 把常驻智能体拆成五个可落地的架构原语，并给出实现细节与最佳实践，读者可按此搭建自己的方案。",
   "source": "Claude：Blog（网页）",
   "url": "https://aihot.news/items/ypeap2t8w4fqqfuvt7mw3wg79",
   "time": "11-13 08:00",
   "category": "tip"
  },
  {
   "title": "研究称中国最强 AI 模型由被禁运的 Nvidia Blackwell 芯片训练",
   "summary": "TechCrunch 报道，前 OpenAI 研究员 Will DePue 分析 DeepSeek、月之暗面、MiniMax 和蚂蚁集团开源模型权重后，称 Kimi K3 与 DeepSeek V4 等模型留有 Blackwell 芯片训练痕迹，而这些芯片被禁止出口到中国。",
   "reason": "报道结合新研究称中国头部开源模型有 Blackwell 芯片训练痕迹，读者可以据此了解出口管制在离岸算力面前的实际缺口。",
   "source": "TechCrunch：AI（RSS）",
   "url": "https://aihot.news/items/q92ir58jcjtp3g9fn11jlb6ei",
   "time": "11-14 02:40",
   "category": "industry"
  },
  {
   "title": "Claude Code Stop hook 技巧：用 exit code 2 让 Claude 在检查失败时自动重试",
   "summary": "Lydia Hallie 分享一个 Claude Code 使用技巧：用 Stop hook 让 Claude 在检查失败后自动重试，关键是让 hook 以 exit code 2 退出。exit 2 会把 hook 的 stderr 返回给 Claude 触发重试，exit 1 则是非阻塞的，即使检查失败 Claude 也会直接结束。",
   "reason": "原文讲清了 Claude Code Stop hook 中 exit 1 与 exit 2 的行为差异，可用于让检查失败时自动重试。",
   "source": "X：Lydia Hallie（Anthropic，Claude Code） (@lydiahallie)",
   "url": "https://aihot.news/items/p0jsxs2bnv6tmnmn1soi56759",
   "time": "11-14 02:43",
   "category": "tip"
  },
  {
   "title": "Sierra 发布 Personal Agent Protocol（Poppy）v1.0",
   "summary": "Sierra 宣布 Personal Agent Protocol（Poppy）v1.0 正式可用，该协议定义个人智能体如何通过企业智能体、网站和 API 与公司交互，主要基于 MCP、OpenAPI、UCP 等现有标准构建，认证通过 OAuth 由客户控制权限。",
   "reason": "协议 v1.0 正式开放，正文给出多家企业落地场景和 Shopify 全量启用等进展，可据此评估个人智能体接入企业服务的现状。",
   "source": "Sierra：Blog（RSS）",
   "url": "https://aihot.news/items/z4wsrxr1xmhg3lq3y0ouq5rmr",
   "time": "11-14 01:00",
   "category": "ai-products"
  },
  {
   "title": "ChatGPT 推出 ChatGPT Wallet，dot 可在用户批准下代为完成购买",
   "summary": "ChatGPT 官方账号宣布推出 ChatGPT Wallet，dot 可在用户批准下安全地代用户完成购买。智能体支付时不会接触用户的实际卡号信息，每笔购买都需要通过安全检查。该功能即日起在美国向 Pro 订阅用户的 dot 推出，详情见 https://openai.com/index/introducing-chatgpt-wallet/。",
   "reason": "原文说明了智能体支付不接触实际卡号且每笔需安全检查的机制，以及初期开放范围。",
   "source": "X：ChatGPT (@ChatGPT)",
   "url": "https://aihot.news/items/vot1htumxjgnb0i88rbq3zsuq",
   "time": "11-14 00:44",
   "category": "ai-products"
  },
  {
   "title": "Anthropic 直播 Dario Amodei 与 JPMorgan CEO Jamie Dimon 炉边谈话并披露 SEC 注册声明",
   "summary": "Anthropic 预告美东时间中午 12 点直播 Dario Amodei 与 JPMorgan CEO Jamie Dimon 的炉边谈话，链接为 https://www.youtube.com/live/YHEaEpeY3ew。",
   "reason": "Anthropic 官方预告与 JPMorgan CEO Jamie Dimon 的对谈直播入口，并附上 SEC 注册声明与招股书获取方式。",
   "source": "X：Anthropic (@AnthropicAI)",
   "url": "https://aihot.news/items/vsfne926njom5wnadceo8r04m",
   "time": "11-14 00:00",
   "category": "industry"
  },
  {
   "title": "DeepSeek 开放全家桶应用 API：联网搜索、文件输入、阅读链接等能力面向开发者",
   "summary": "DeepSeek 在 API 中开放此前 App 对话服务所用的能力，开发者开启对应参数即可使用，工具调用与上下文拼接由服务端完成。",
   "reason": "官方更新日志说明开发者可在 API 中开启联网搜索、文件输入等能力，并给出具体参数与接口，便于评估接入方式。",
   "source": "DeepSeek：API 更新日志",
   "url": "https://aihot.news/items/nnbnoebf6mvo97usmwj5wziyl",
   "time": "11-13 00:00",
   "category": "ai-products"
  },
  {
   "title": "llama.cpp v1.0.0 发布，本地运行 AI 模型迎来首个稳定大版本",
   "summary": "Hugging Face CEO Clément Delangue 与 @ggerganov 宣布 llama.cpp v1.0.0 发布，这是这个最常用的本地运行 AI 模型库的首个完全稳定大版本。作者称用户可在手机、笔记本和工作站上免费掌控自己的智能，不向任何人发送数据，并承诺支持所有硬件、平台和模型类型，让 AI 分布式而非集中于少数硅谷机构。",
   "reason": "llama.cpp 迈出首个稳定大版本，作者点明本地运行对数据自主和硬件覆盖的意义。",
   "source": "X：Clément Delangue（Hugging Face CEO） (@ClementDelangue)",
   "url": "https://aihot.news/items/um8pmpa91qn1ymvx3pux0sq1x",
   "time": "11-13 23:13",
   "category": "ai-products"
  },
  {
   "title": "Apple HomeView 正式开售，售价 299 美元并搭载 Siri AI",
   "summary": "Apple 于 11 月 13 日正式开售 HomeView，提供桌面和壁挂两款型号，均售 $299（U.S.），首发澳大利亚、加拿大、印度、新西兰、新加坡、英国和美国市场。",
   "reason": "官方公布 HomeView 的定价、双型号配置、Siri AI 能力与上市地区，可据此了解其功能边界和欧盟未售原因。",
   "source": "Apple：Newsroom（RSS）",
   "url": "https://aihot.news/items/bp01lj0ahiqsoahba8sjor2b4",
   "time": "11-13 00:00",
   "category": "ai-products"
  },
  {
   "title": "Nvidia 领导层变动引发以色列科技界关注，投资人认为挑战者或有机会",
   "summary": "Nvidia 前CEO黄仁勋辞职后，以色列科技界关注这家在其拥有6000名员工和最大海外研发中心的公司是否会继续深耕以色列。多位以色列投资人认为，Nvidia 决策放缓可能给 AI 芯片和推理软件领域的竞争者留出空间，但如果不确定性也拖慢 AI 支出，竞争者面对的可能是更小的市场机会。",
   "reason": "文章从以色列视角梳理 Nvidia 领导层变动后的产业影响，投资人观点提示竞争者可能获得的窗口及其局限。",
   "source": "TechCrunch：AI（RSS）",
   "url": "https://aihot.news/items/pdhda5tufq7ubi8w17bys7w66",
   "time": "11-13 20:52",
   "category": "industry"
  },
  {
   "title": "MOSS-Live 全双工实时交互评测解读：与 GPT-Live-1、豆包的对比",
   "summary": "OpenMOSS 团队发布 MOSS-Live 全双工语音交互评测解读。依据 MOSS 官网 2026 年 11 月 13 日图表，MOSS-Live 六项全双工指标均居参评模型首位，无关语音误接话率 2.00%，低于 GPT-Live-1 的 68% 和豆包的 75%，停顿抢话率 1.44%。",
   "reason": "文章按官网图表整理 MOSS-Live 与三款语音模型的全双工评测对比，同时指出多轮任务和理解指标上仍存在的差距。",
   "source": "OpenMOSS / 复旦NLP / 上海创智 / MOSI（网页）",
   "url": "https://aihot.news/items/rcjkjkhq7xxwbhh9wnv15fqy1",
   "time": "11-13 00:00",
   "category": "ai-models"
  },
  {
   "title": "AINews：黄仁勋辞任 NVIDIA CEO，Colette Kress 出任临时 CEO",
   "summary": "Latent Space 的 AI 新闻日报头条是 NVIDIA 宣布黄仁勋在任职 33 年后辞去 CEO、总裁和董事职务，CFO Colette Kress 出任临时 CEO，SEC 文件显示董事会于 11 月 11 日接受辞呈，此前董事会已就 NYT 报道的绯闻事件展开独立调查。",
   "reason": "这期日报汇总了黄仁勋辞职、Gemini 4 Hydrogen 发布与权重溯源争议，读者可在一篇内掌握多条主线的事实与各方反应。",
   "source": "Latent Space（RSS）",
   "url": "https://aihot.news/items/se0y4v3gihr6s0jmrc5vuv1zo",
   "time": "11-13 17:04",
   "category": "industry"
  }
 ],
 "aiDaily": {
  "date": "2026-11-13",
  "url": "https://aihot.news/daily/2026-11-13",
  "sections": [
   {
    "label": "模型发布/更新",
    "items": [
     {
      "title": "Google DeepMind 发布 Gemini 4 Hydrogen",
      "summary": "Google DeepMind 发布 Gemini 4 Hydrogen，定位快速执行日常编码与智能体工作流，面向 Gemini API、AI Studio、Gemini 应用、Google Search 等全层级开放。",
      "source": "Google DeepMind：Blog（RSS）",
      "url": "https://aihot.news/items/uy1ayrrlqx1snqsv4lub7whsa"
     }
    ]
   },
   {
    "label": "产品发布/更新",
    "items": [
     {
      "title": "Anthropic 推出 Claude Meetings，Claude 以参会者身份加入视频会议",
      "summary": "Anthropic 推出 Claude Meetings beta，Claude 可作为可见参会者加入视频通话，在会中回答提问、协作创建文档和白板，并生成笔记和行动项。",
      "source": "Claude：Blog（网页）",
      "url": "https://aihot.news/items/l36ne5q2gsdx6thyia7fi10kn"
     },
     {
      "title": "Anthropic 建议把 Claude Opus 5.5 作为知识工作的日常主力模型",
      "summary": "Anthropic 宣布 Claude Opus 5.5 成为 Pro、Max、Ultra 和 Team 套餐的默认模型，并推荐将其作为研究、分析和写作等知识工作的日常主力。",
      "source": "Claude：Blog（网页）",
      "url": "https://aihot.news/items/t5pucqx6ac58z0ed1b0875ci0"
     },
     {
      "title": "Google 智能眼镜开放预购，12 月 10 日发货",
      "summary": "Josh Woodward 宣布 Google 智能眼镜开启预购，用户可在 https://glasses.google 下单，12 月 10 日发货。首批用户可到部分 Warby Parker、Gentle Monster 和 Google 门店试戴体验。",
      "source": "X：Josh Woodward (@joshwoodward, Google Labs VP)",
      "url": "https://aihot.news/items/hjhcsj440ym8b7ynttcx4433j"
     },
     {
      "title": "Replit Agent 新增代购能力和 Google Ads 投放功能",
      "summary": "Replit 给 Replit Agent 新增两项能力：通过 Stripe Link 和 Visa 为企业代购物资，以及在 Replit 内直接创建和投放 Google Ads 覆盖 Search、YouTube 等渠道。",
      "source": "Replit：Blog（RSS）",
      "url": "https://aihot.news/items/k7sfjumcmtq0zswb5yj5kmju1"
     }
    ]
   },
   {
    "label": "行业动态",
    "items": [
     {
      "title": "NVIDIA 宣布 CEO 变动：Jensen Huang 辞任，CFO Colette Kress 出任临时 CEO",
      "summary": "NVIDIA 董事会宣布 Jensen Huang 即刻辞去总裁、CEO 及董事职务，CFO Colette Kress 被任命为临时 CEO，直至选定永久继任者，董事会已启动内外部人选遴选。",
      "source": "NVIDIA：Newsroom（RSS）",
      "url": "https://aihot.news/items/qsbjbz754aodhcijq56puh6va"
     },
     {
      "title": "Anthropic 官宣首次公开募股（IPO）",
      "summary": "Anthropic 官方宣布启动首次公开募股（IPO），并公布入口 ipo.anthropic.com。Anthropic 已向 SEC 提交注册声明及招股说明书，证券在注册声明生效前不得出售，初步招股说明书可经高盛与摩根士丹利获取。",
      "source": "X：Anthropic (@AnthropicAI)",
      "url": "https://aihot.news/items/k99zjo9hbtous9r6vmmz7pxyh"
     },
     {
      "title": "Jensen Huang 辞任 Nvidia CEO 后对 AI 经济的五点影响分析",
      "summary": "Tomasz Tunguz 分析 Jensen Huang 即日辞任 Nvidia 总裁、CEO 及董事后对 AI 行业的影响，CFO Colette Kress 出任临时 CEO。",
      "source": "Tomasz Tunguz 博客（VC 分析）",
      "url": "https://aihot.news/items/ivpl9ziip8mpoa90avi3ke9pj"
     },
     {
      "title": "民主党对 Nvidia 对华芯片销售启动调查，致函质疑黄仁勋与特朗普的安排",
      "summary": "民主党议员 Rep. Richard Neal 和 Sen. Ron Wyden 就特朗普政府处理 Nvidia 对华芯片销售一事开启调查，并致函商务部长 Howard Lutnick 要求保存相关记录。",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://aihot.news/items/cfh0nazzl7eedgttz8n99fza4"
     },
     {
      "title": "Rohan Paul 类比乔布斯被逐，评 NVIDIA 放走黄仁勋",
      "summary": "Lex Fridman 发文称 NVIDIA 让黄仁勋离开对美国和人类都是巨大错误，堪比 Apple 当年解雇 Steve Jobs 但影响更大，并为其品格辩护、回应间谍传闻。Rohan Paul 转引并列举 Atari 1978（Nolan Bushnell）、Apple 1985（Steve Jobs）、Uber 2017（Travis Kalanick）、OpenAI 2023（Sam Altman），称每隔几年董事会就会重新认识到创始人本身就是战略。",
      "source": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://aihot.news/items/k1kga19xtdab67lhplor8he8n"
     }
    ]
   },
   {
    "label": "技巧与观点",
    "items": [
     {
      "title": "OpenRouter 详解自纠错网站本地化流水线：GPT-6.1 Sol 翻译 7 种语言全站约 $460",
      "summary": "OpenRouter 上线简体中文、日语等 7 种语言 Beta 本地化，并详解配套的自纠错翻译流水线：GPT-6.1 Sol 翻译 16,918 条字符串，经代码检查、同模型校验和每日 AI 审查重试，最坏情况每条约 20 次模型调用。全站重译 7 种语言约 $460，约为 Smartling 机器翻译牌价的 6%，错误报告会转化为术语规则、风格注释或评测用例。",
      "source": "OpenRouter：Announcements（RSS）",
      "url": "https://aihot.news/items/cve017k4le2q7l8x1bfr2xdjx"
     },
     {
      "title": "OpenRouter 实测六模型并给出四层防护，解决 AI Agent 无限循环烧钱问题",
      "summary": "OpenRouter 发布教程，讲解 AI Agent 因工具反复失败而陷入无限循环的成因，并给出四层防护：doom-loop 检测、loopKey 参数归一化、stopWhen 步数与成本上限、API key 信用额度。",
      "source": "OpenRouter：Announcements（RSS）",
      "url": "https://aihot.news/items/vq9nwgwhtm31cgoliyb7ydyde"
     }
    ]
   }
  ]
 },
 "hotLists": {
  "weibo": {
   "name": "微博热搜",
   "updateTime": "2026-11-13 12:41",
   "url": "https://s.weibo.com/top/summary",
   "data": [
    {
     "title": "考研人数",
     "url": "https://s.weibo.com/weibo?q=%E8%80%83%E7%A0%94%E4%BA%BA%E6%95%B0",
     "hot": 1602614
    },
    {
     "title": "2027研究生报考人数347万",
     "url": "https://s.weibo.com/weibo?q=2027%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8A%A5%E8%80%83%E4%BA%BA%E6%95%B0347%E4%B8%87",
     "hot": 1344868
    },
    {
     "title": "多元供给赋能线上消费新活力",
     "url": "https://s.weibo.com/weibo?q=%E5%A4%9A%E5%85%83%E4%BE%9B%E7%BB%99%E8%B5%8B%E8%83%BD%E7%BA%BF%E4%B8%8A%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B4%BB%E5%8A%9B",
     "hot": 1078218
    },
    {
     "title": "张萌后悔叫马天宇上节目",
     "url": "https://s.weibo.com/weibo?q=%E5%BC%A0%E8%90%8C%E5%90%8E%E6%82%94%E5%8F%AB%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%8A%E8%8A%82%E7%9B%AE",
     "hot": 1037393
    },
    {
     "title": "女子忍耐噪音8年楼上孩子2个变5个",
     "url": "https://s.weibo.com/weibo?q=%E5%A5%B3%E5%AD%90%E5%BF%8D%E8%80%90%E5%99%AA%E9%9F%B38%E5%B9%B4%E6%A5%BC%E4%B8%8A%E5%AD%A9%E5%AD%902%E4%B8%AA%E5%8F%985%E4%B8%AA",
     "hot": 982248
    },
    {
     "title": "男子花四千多元做AI短剧火了",
     "url": "https://s.weibo.com/weibo?q=%E7%94%B7%E5%AD%90%E8%8A%B1%E5%9B%9B%E5%8D%83%E5%A4%9A%E5%85%83%E5%81%9AAI%E7%9F%AD%E5%89%A7%E7%81%AB%E4%BA%86",
     "hot": 806048
    },
    {
     "title": "上海00后女生靠AI卖穿戴甲月入10万",
     "url": "https://s.weibo.com/weibo?q=%E4%B8%8A%E6%B5%B700%E5%90%8E%E5%A5%B3%E7%94%9F%E9%9D%A0AI%E5%8D%96%E7%A9%BF%E6%88%B4%E7%94%B2%E6%9C%88%E5%85%A510%E4%B8%87",
     "hot": 587901
    },
    {
     "title": "文吉儿后面几期要怎么办",
     "url": "https://s.weibo.com/weibo?q=%E6%96%87%E5%90%89%E5%84%BF%E5%90%8E%E9%9D%A2%E5%87%A0%E6%9C%9F%E8%A6%81%E6%80%8E%E4%B9%88%E5%8A%9E",
     "hot": 536904
    },
    {
     "title": "7碗米饭摆拍到底骗了多少善意",
     "url": "https://s.weibo.com/weibo?q=7%E7%A2%97%E7%B1%B3%E9%A5%AD%E6%91%86%E6%8B%8D%E5%88%B0%E5%BA%95%E9%AA%97%E4%BA%86%E5%A4%9A%E5%B0%91%E5%96%84%E6%84%8F",
     "hot": 535306
    },
    {
     "title": "微软Outlook服务宕机",
     "url": "https://s.weibo.com/weibo?q=%E5%BE%AE%E8%BD%AFOutlook%E6%9C%8D%E5%8A%A1%E5%AE%95%E6%9C%BA",
     "hot": 534929
    },
    {
     "title": "金晨发文秒删",
     "url": "https://s.weibo.com/weibo?q=%E9%87%91%E6%99%A8%E5%8F%91%E6%96%87%E7%A7%92%E5%88%A0",
     "hot": 531645
    },
    {
     "title": "英伟达更新黄仁勋为创始人",
     "url": "https://s.weibo.com/weibo?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%9B%B4%E6%96%B0%E9%BB%84%E4%BB%81%E5%8B%8B%E4%B8%BA%E5%88%9B%E5%A7%8B%E4%BA%BA",
     "hot": 530841
    }
   ]
  },
  "zhihu": {
   "name": "知乎热榜",
   "updateTime": "2026-11-13 12:41",
   "url": "https://www.zhihu.com/hot",
   "data": [
    {
     "title": "被曝大裁员的腾讯，是业务出了什么问题吗？",
     "url": "https://www.zhihu.com/question/2104225780083286957",
     "hot": ""
    },
    {
     "title": "微软多项服务发生大规模故障，Outlook异常报告超13万起，问题可能出在哪？你现在还能正常登录吗？",
     "url": "https://www.zhihu.com/question/2104481527711143901",
     "hot": ""
    },
    {
     "title": "如何看待28岁中国留学毕业生在墨尔本遇袭，两根手指被砍断，膝盖被砍伤，还遭朋友卷走5.4万澳元医药费？",
     "url": "https://www.zhihu.com/question/2103997936267019794",
     "hot": ""
    },
    {
     "title": "成都成中国唯一入选美国《国家地理》全球最佳旅行地城市，凭什么吸引世界目光？",
     "url": "https://www.zhihu.com/question/2101800244514121260",
     "hot": ""
    },
    {
     "title": "张雪回应「读书无用论」，称这种定义很 low，自己几乎每天都学习，如何看待这一表态？",
     "url": "https://www.zhihu.com/question/2103876810748453802",
     "hot": ""
    },
    {
     "title": "乡干部捅伤村民潜逃 15 年，其间违规吃空饷 140 万元并升为正科，暴露出哪些问题？",
     "url": "https://www.zhihu.com/question/2101649988895904476",
     "hot": ""
    },
    {
     "title": "大学保研中举报现象越来越频发，背后原因是什么？为了保研主动切断同学关系是否可取？",
     "url": "https://www.zhihu.com/question/2103788856000755554",
     "hot": ""
    },
    {
     "title": "网友称高铁座椅 USB 口充手机越充越掉电，12306 称电压更低，用于应急补电，这个设计合理吗？",
     "url": "https://www.zhihu.com/question/2103538454634180703",
     "hot": ""
    },
    {
     "title": "禅让制为何在尧舜禹之间传了三代就玩不下去了？",
     "url": "https://www.zhihu.com/question/2103759019978630326",
     "hot": ""
    },
    {
     "title": "《福尔摩斯》原著里头的房东太太为什么会像个仆人一样伺候她的租客？",
     "url": "https://www.zhihu.com/question/266192012",
     "hot": ""
    },
    {
     "title": "如何评价Google 11月13日发布的模型Gemini 4 Hydrogen？",
     "url": "https://www.zhihu.com/question/2104402653010834622",
     "hot": ""
    },
    {
     "title": "如何看待2026年10月特斯拉国内销量暴跌？",
     "url": "https://www.zhihu.com/question/2103258099138172807",
     "hot": ""
    }
   ]
  },
  "douyin": {
   "name": "抖音热点",
   "updateTime": "2026-11-12 13:26",
   "url": "https://www.douyin.com/hot",
   "data": [
    {
     "title": "纪念孙中山先生诞辰160周年",
     "url": "https://www.douyin.com/search/%E7%BA%AA%E5%BF%B5%E5%AD%99%E4%B8%AD%E5%B1%B1%E5%85%88%E7%94%9F%E8%AF%9E%E8%BE%B0160%E5%91%A8%E5%B9%B4",
     "hot": 11106375
    },
    {
     "title": "哈登助骑士复仇尼克斯",
     "url": "https://www.douyin.com/search/%E5%93%88%E7%99%BB%E5%8A%A9%E9%AA%91%E5%A3%AB%E5%A4%8D%E4%BB%87%E5%B0%BC%E5%85%8B%E6%96%AF",
     "hot": 10963179
    },
    {
     "title": "AI算力成消费新热点",
     "url": "https://www.douyin.com/search/AI%E7%AE%97%E5%8A%9B%E6%88%90%E6%B6%88%E8%B4%B9%E6%96%B0%E7%83%AD%E7%82%B9",
     "hot": 10730359
    },
    {
     "title": "火箭115:108击败勇士",
     "url": "https://www.douyin.com/search/%E7%81%AB%E7%AE%AD115%3A108%E5%87%BB%E8%B4%A5%E5%8B%87%E5%A3%AB",
     "hot": 10655622
    },
    {
     "title": "天凉热乎美食登场",
     "url": "https://www.douyin.com/search/%E5%A4%A9%E5%87%89%E7%83%AD%E4%B9%8E%E7%BE%8E%E9%A3%9F%E7%99%BB%E5%9C%BA",
     "hot": 10089962
    },
    {
     "title": "俄方公布俄美乌三方会谈成果",
     "url": "https://www.douyin.com/search/%E4%BF%84%E6%96%B9%E5%85%AC%E5%B8%83%E4%BF%84%E7%BE%8E%E4%B9%8C%E4%B8%89%E6%96%B9%E4%BC%9A%E8%B0%88%E6%88%90%E6%9E%9C",
     "hot": 9039612
    },
    {
     "title": "离岸信托收益征税过渡期已结束",
     "url": "https://www.douyin.com/search/%E7%A6%BB%E5%B2%B8%E4%BF%A1%E6%89%98%E6%94%B6%E7%9B%8A%E5%BE%81%E7%A8%8E%E8%BF%87%E6%B8%A1%E6%9C%9F%E5%B7%B2%E7%BB%93%E6%9D%9F",
     "hot": 8052639
    },
    {
     "title": "寒潮结束全国大部气温回升",
     "url": "https://www.douyin.com/search/%E5%AF%92%E6%BD%AE%E7%BB%93%E6%9D%9F%E5%85%A8%E5%9B%BD%E5%A4%A7%E9%83%A8%E6%B0%94%E6%B8%A9%E5%9B%9E%E5%8D%87",
     "hot": 7827771
    },
    {
     "title": "国内成品油价格或迎下调",
     "url": "https://www.douyin.com/search/%E5%9B%BD%E5%86%85%E6%88%90%E5%93%81%E6%B2%B9%E4%BB%B7%E6%A0%BC%E6%88%96%E8%BF%8E%E4%B8%8B%E8%B0%83",
     "hot": 7827278
    },
    {
     "title": "乌东领土问题未达成结论性共识",
     "url": "https://www.douyin.com/search/%E4%B9%8C%E4%B8%9C%E9%A2%86%E5%9C%9F%E9%97%AE%E9%A2%98%E6%9C%AA%E8%BE%BE%E6%88%90%E7%BB%93%E8%AE%BA%E6%80%A7%E5%85%B1%E8%AF%86",
     "hot": 7806573
    },
    {
     "title": "时间从来证明不了什么",
     "url": "https://www.douyin.com/search/%E6%97%B6%E9%97%B4%E4%BB%8E%E6%9D%A5%E8%AF%81%E6%98%8E%E4%B8%8D%E4%BA%86%E4%BB%80%E4%B9%88",
     "hot": 7801700
    },
    {
     "title": "今天是太阳雨二创大赏",
     "url": "https://www.douyin.com/search/%E4%BB%8A%E5%A4%A9%E6%98%AF%E5%A4%AA%E9%98%B3%E9%9B%A8%E4%BA%8C%E5%88%9B%E5%A4%A7%E8%B5%8F",
     "hot": 7788667
    }
   ]
  },
  "toutiao": {
   "name": "头条热榜",
   "updateTime": "2026-11-05 12:46",
   "url": "https://www.toutiao.com/",
   "data": [
    {
     "title": "马兴瑞被提起公诉",
     "url": "https://www.toutiao.com/trending/7704501062417268787",
     "hot": 33571228
    },
    {
     "title": "福建舰的这一“弹”到底有多猛",
     "url": "https://www.toutiao.com/trending/7703607834747355190",
     "hot": 30376503
    },
    {
     "title": "历史昭示未来 奋斗成就伟业",
     "url": "https://www.toutiao.com/article/7704463532959498787",
     "hot": 27485797
    },
    {
     "title": "“偷拍黑产”调查：约14万女性被偷拍",
     "url": "https://www.toutiao.com/trending/7704484797367845414",
     "hot": 24870177
    },
    {
     "title": "51岁阿姨参加健美比赛 体脂率12%",
     "url": "https://www.toutiao.com/trending/7704283013869223945",
     "hot": 22503467
    },
    {
     "title": "牛奶是血糖“杀手”吗",
     "url": "https://www.toutiao.com/trending/7704158603363532863",
     "hot": 20361979
    },
    {
     "title": "专家：福建舰入列一周年战力狂飙",
     "url": "https://www.toutiao.com/trending/7704522315337305641",
     "hot": 18424280
    },
    {
     "title": "文班亚马尽显天赋",
     "url": "https://www.toutiao.com/trending/7704522317908476467",
     "hot": 16670978
    },
    {
     "title": "我军37架艘次军机舰船位台岛周边活动",
     "url": "https://www.toutiao.com/trending/7704112402199101490",
     "hot": 15084525
    },
    {
     "title": "王毅把话说到不可容忍 菲方听懂了吗",
     "url": "https://www.toutiao.com/trending/7699376583278218786",
     "hot": 13649043
    },
    {
     "title": "大衣哥朱之文谈当爷爷感受",
     "url": "https://www.toutiao.com/trending/7703714181933760566",
     "hot": 12350164
    },
    {
     "title": "张国强怎么看“国强元年”",
     "url": "https://www.toutiao.com/trending/7704258330910523419",
     "hot": 11174891
    }
   ]
  },
  "baidu": {
   "name": "百度热搜",
   "updateTime": "2026-11-05 12:46",
   "url": "https://top.baidu.com/board",
   "data": [
    {
     "title": "马兴瑞被提起公诉",
     "url": "https://www.baidu.com/s?wd=%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E6%8F%90%E8%B5%B7%E5%85%AC%E8%AF%89&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "“偷拍黑产”调查：约14万女性被偷拍",
     "url": "https://www.baidu.com/s?wd=%E2%80%9C%E5%81%B7%E6%8B%8D%E9%BB%91%E4%BA%A7%E2%80%9D%E8%B0%83%E6%9F%A5%EF%BC%9A%E7%BA%A614%E4%B8%87%E5%A5%B3%E6%80%A7%E8%A2%AB%E5%81%B7%E6%8B%8D&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "透过丰收景象看到“三个一”",
     "url": "https://www.baidu.com/s?wd=%E9%80%8F%E8%BF%87%E4%B8%B0%E6%94%B6%E6%99%AF%E8%B1%A1%E7%9C%8B%E5%88%B0%E2%80%9C%E4%B8%89%E4%B8%AA%E4%B8%80%E2%80%9D&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "把手机掉在沙漠 一个月后失而复得",
     "url": "https://www.baidu.com/s?wd=%E6%8A%8A%E6%89%8B%E6%9C%BA%E6%8E%89%E5%9C%A8%E6%B2%99%E6%BC%A0+%E4%B8%80%E4%B8%AA%E6%9C%88%E5%90%8E%E5%A4%B1%E8%80%8C%E5%A4%8D%E5%BE%97&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "中国人最喜欢用的十大PC应用出炉",
     "url": "https://www.baidu.com/s?wd=%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%9C%80%E5%96%9C%E6%AC%A2%E7%94%A8%E7%9A%84%E5%8D%81%E5%A4%A7PC%E5%BA%94%E7%94%A8%E5%87%BA%E7%82%89&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "高市早苗面见日本天皇姿势被批丢人",
     "url": "https://www.baidu.com/s?wd=%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E9%9D%A2%E8%A7%81%E6%97%A5%E6%9C%AC%E5%A4%A9%E7%9A%87%E5%A7%BF%E5%8A%BF%E8%A2%AB%E6%89%B9%E4%B8%A2%E4%BA%BA&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "小心睡前这个习惯 严重可致盲",
     "url": "https://www.baidu.com/s?wd=%E5%B0%8F%E5%BF%83%E7%9D%A1%E5%89%8D%E8%BF%99%E4%B8%AA%E4%B9%A0%E6%83%AF+%E4%B8%A5%E9%87%8D%E5%8F%AF%E8%87%B4%E7%9B%B2&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "泰版《步步惊心》开播全是笑点",
     "url": "https://www.baidu.com/s?wd=%E6%B3%B0%E7%89%88%E3%80%8A%E6%AD%A5%E6%AD%A5%E6%83%8A%E5%BF%83%E3%80%8B%E5%BC%80%E6%92%AD%E5%85%A8%E6%98%AF%E7%AC%91%E7%82%B9&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "黄渤谈父母患老年痴呆",
     "url": "https://www.baidu.com/s?wd=%E9%BB%84%E6%B8%A4%E8%B0%88%E7%88%B6%E6%AF%8D%E6%82%A3%E8%80%81%E5%B9%B4%E7%97%B4%E5%91%86&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "北电院长谈《我的前半生》翻红",
     "url": "https://www.baidu.com/s?wd=%E5%8C%97%E7%94%B5%E9%99%A2%E9%95%BF%E8%B0%88%E3%80%8A%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E3%80%8B%E7%BF%BB%E7%BA%A2&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "征信修复这些误区要注意",
     "url": "https://www.baidu.com/s?wd=%E5%BE%81%E4%BF%A1%E4%BF%AE%E5%A4%8D%E8%BF%99%E4%BA%9B%E8%AF%AF%E5%8C%BA%E8%A6%81%E6%B3%A8%E6%84%8F&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "炖肉时出现的浮沫该不该撇",
     "url": "https://www.baidu.com/s?wd=%E7%82%96%E8%82%89%E6%97%B6%E5%87%BA%E7%8E%B0%E7%9A%84%E6%B5%AE%E6%B2%AB%E8%AF%A5%E4%B8%8D%E8%AF%A5%E6%92%87&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    }
   ]
  },
  "bilibili": {
   "name": "B站热门",
   "updateTime": "2026-11-14 03:57",
   "url": "https://www.bilibili.com/v/popular/all/",
   "data": [
    {
     "title": "你们外卖还有陪聊服务吗？",
     "url": "https://www.bilibili.com/video/BV1mjWm6gE1T",
     "hot": 612125
    },
    {
     "title": "极致的走线！",
     "url": "https://www.bilibili.com/video/BV1bkW86bEij",
     "hot": 896738
    },
    {
     "title": "在这里，万亿吨水被强行灌进火山……【地理志】",
     "url": "https://www.bilibili.com/video/BV1GPWi6SECk",
     "hot": 319243
    },
    {
     "title": "【独家】《罗小黑战记》第43话 跟师父一起做任务啦【10月国创】",
     "url": "https://www.bilibili.com/video/BV1nwWd6XEyv",
     "hot": 1973808
    },
    {
     "title": "一人扬言能吃三斤脆肉皖，直接拿下8斤大脆肉皖。",
     "url": "https://www.bilibili.com/video/BV1K3WR6oEjT",
     "hot": 798337
    },
    {
     "title": "拿中老年病痛玩梗，还被44万人点赞，这是最近最让我恶心的烂梗！",
     "url": "https://www.bilibili.com/video/BV11CWD6EEjf",
     "hot": 1486863
    },
    {
     "title": "假⚡️面⚡️难⚡️藏⚡️泪",
     "url": "https://www.bilibili.com/video/BV1GbWq6HEct",
     "hot": 420925
    },
    {
     "title": "有用版新僵尸：慈祥二爷",
     "url": "https://www.bilibili.com/video/BV1wyWv6YEJK",
     "hot": 352991
    },
    {
     "title": "多兰：你是不是想踢了我？【AI全民制作人】",
     "url": "https://www.bilibili.com/video/BV1acW16kEZ6",
     "hot": 1290595
    },
    {
     "title": "当家里的大肥鱼被饿了好几个小时以后",
     "url": "https://www.bilibili.com/video/BV1GsWv6jErZ",
     "hot": 453574
    },
    {
     "title": "《蓝色星原：旅谣》公测预告PV",
     "url": "https://www.bilibili.com/video/BV1NdWo6vEQL",
     "hot": 1693574
    },
    {
     "title": "巨型生物袭击村庄，而你却孤身一人！面对你的只有绝望！",
     "url": "https://www.bilibili.com/video/BV1VxWq6WE4s",
     "hot": 254178
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
   "title": "黄仁勋辞职后，英伟达股价巨震！",
   "url": "https://finance.sina.com.cn/roll/2026-11-13/doc-iniypvhn8088830.shtml",
   "source": "新浪科技"
  },
  {
   "title": "量子计算能让AI更便宜吗？",
   "url": "https://finance.sina.com.cn/roll/2026-11-13/doc-iniypekp1027689.shtml",
   "source": "新浪科技"
  },
  {
   "title": "词元摆上双11货架 折射数字消费新变迁",
   "url": "https://finance.sina.com.cn/jjxw/2026-11-13/doc-iniypvhp3680110.shtml",
   "source": "新浪科技"
  },
  {
   "title": "黄仁勋落幕！噪音、污染、电费单……美国人为什么讨厌AI数据中心？",
   "url": "https://finance.sina.com.cn/stock/bxjj/2026-11-13/doc-iniypvhp3712214.shtml",
   "source": "新浪科技"
  },
  {
   "title": "王虹的导师拉里·古斯：AI时代，数学对我意味着什么",
   "url": "https://finance.sina.com.cn/roll/2026-11-13/doc-iniypekv3695082.shtml",
   "source": "新浪科技"
  },
  {
   "title": "李飞飞最新 CoRL2026 演讲实录：从「橱柜模型」到世界模型，机器人需要什么样的 AI ？",
   "url": "https://finance.sina.com.cn/roll/2026-11-13/doc-iniypekp1035165.shtml",
   "source": "新浪科技"
  },
  {
   "title": "微软最新邮件故障，演变为全球性云服务危机",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-13/doc-iniyrazv1170666.shtml",
   "source": "新浪科技"
  },
  {
   "title": "苹果、Alphabet、Uber都平稳度过创始人交接，英伟达的考验会更严峻",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-13/doc-iniyrazr0881615.shtml",
   "source": "新浪科技"
  },
  {
   "title": "英伟达“星光寥寥”的董事会 如今肩负科技界最受瞩目的CEO遴选重任",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-13/doc-iniyqwtx1251802.shtml",
   "source": "新浪科技"
  },
  {
   "title": "微软：Microsoft 365服务恢复取得“进一步进展”",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-13/doc-iniyqwtx1250458.shtml",
   "source": "新浪科技"
  },
  {
   "title": "openEuler发布面向Agentic Infra的操作系统，携手产业伙伴发起生态共建倡议",
   "url": "https://finance.sina.com.cn/jjxw/2026-11-13/doc-iniyqwtz3613074.shtml",
   "source": "新浪科技"
  },
  {
   "title": "商标临时禁令申请遭驳回，安世中国欧盟业务保持稳定",
   "url": "https://finance.sina.com.cn/jjxw/2026-11-13/doc-iniyqwtx1213272.shtml",
   "source": "新浪科技"
  }
 ]
};
if (typeof window !== 'undefined') window.WB_DATA = WB_DATA;
