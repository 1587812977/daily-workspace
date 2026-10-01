// 个人工作台数据（GitHub Actions 定时刷新，勿手改）
var WB_DATA = {
 "updatedAt": "2026-10-01 19:05",
 "aihotHot": [
  {
   "rank": 1,
   "title": "谷歌发布 Gemini 4 Argon 前沿模型",
   "source": "Google DeepMind：Blog（RSS）",
   "url": "https://aihot.news/items/uob3jvsb97uh5achwaggjrhqh",
   "time": "10-01 18:01",
   "sourceCount": 18
  },
  {
   "rank": 2,
   "title": "OpenAI发布GPT-6.1 Sol与Ultrafast高速档",
   "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
   "url": "https://aihot.news/items/ewa77zkka92qb5lqukt70bfu8",
   "time": "10-01 15:27",
   "sourceCount": 15
  },
  {
   "rank": 3,
   "title": "OpenAI 发布常驻智能体 Dots",
   "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
   "url": "https://aihot.news/items/r9nae38v4x5x29jrec46olsl4",
   "time": "10-01 15:33",
   "sourceCount": 10
  },
  {
   "rank": 4,
   "title": "FTC加大对AI实验室调查力度",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/nhob7mih29e0owj7ay28t7fvw",
   "time": "10-01 17:30",
   "sourceCount": 3
  },
  {
   "rank": 5,
   "title": "DeepSeek开源华为昇腾平台基础设施组件",
   "source": "公众号：DeepSeek（深度求索）",
   "url": "https://aihot.news/items/qw3a6btvwdalftejp20ccxjb3",
   "time": "10-01 13:20",
   "sourceCount": 4
  },
  {
   "rank": 6,
   "title": "特朗普推动AI改名并筹建AI Force",
   "source": "IT之家（RSS）",
   "url": "https://aihot.news/items/cmu9jwllp040mrogngntwk2d7",
   "time": "10-01 17:09",
   "sourceCount": 2
  },
  {
   "rank": 7,
   "title": "华为 Mate 90 系列发布：官宣麒麟 9030/9035 芯片",
   "source": "IT之家（RSS）",
   "url": "https://aihot.news/items/cmuamhooy0oolro5t7g5o4vtd",
   "time": "10-01 18:36",
   "sourceCount": 1
  },
  {
   "rank": 8,
   "title": "Anthropic 推迟 IPO 至 11 月，招股书曝光",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/khyjby0mw5t22dn9zw2l6fflu",
   "time": "10-01 14:01",
   "sourceCount": 4
  },
  {
   "rank": 9,
   "title": "ElevenLabs 估值 220 亿美元、ARR 达 6 亿美元",
   "source": "ElevenLabs：Blog（网页）",
   "url": "https://aihot.news/items/fkaymng16iu4hg5x53jpq7o8p",
   "time": "10-01 17:30",
   "sourceCount": 3
  },
  {
   "rank": 10,
   "title": "白宫《超级智能协议》签署与四层保障",
   "source": "X：Jensen Huang (@JensenHuang)",
   "url": "https://aihot.news/items/fr7dgcpa02ssu37g9fsmj5q9n",
   "time": "10-01 10:40",
   "sourceCount": 7
  }
 ],
 "aihotItems": [
  {
   "title": "Modal Clusters 正式发布，通过 @modal.clustered 提供多节点 GPU 集群",
   "summary": "Modal 宣布 Modal Clusters 正式可用，通过一个装饰器 @modal.clustered 即可获得多节点集群，节点间经 InfiniBand verbs 通信可达 6.4 Tbps，自动配置 PyTorch 和 NCCL。",
   "reason": "官方宣布多节点集群正式可用，文中解释了 gang scheduler 与 RDMA 的实现细节，并给出 Decagon、1x、Runway 的实际用法。",
   "source": "Modal 官方工程博客（RSS）",
   "url": "https://aihot.news/items/zbprvsawadktpi8tcqpp6gw4d",
   "time": "10-01 15:38",
   "category": "ai-products"
  },
  {
   "title": "ChatGPT 现可直接构建并部署 MCP 服务器",
   "summary": "ChatGPT Sites 现在可以托管 MCP 服务器，用户可直接在 ChatGPT 中构建并部署 MCP 服务器，还能将其转为插件并安装到 web、移动端和桌面端。作者补充，可限制访问权限给指定的人，也可向全世界公开分享。",
   "reason": "作者补充了权限控制这一关键细节，可据此判断自建 MCP 服务器能私有共享还是公开分发。",
   "source": "X：Tibo (@thsottiaux)",
   "url": "https://aihot.news/items/ed0fkjtzo2sbnpzqlara60ghs",
   "time": "10-01 12:44",
   "category": "ai-products"
  },
  {
   "title": "OpenRouter 教程：如何在 CI 中用 LLM eval 门禁拦截 Pull Request",
   "summary": "OpenRouter 发布教程，讲解如何用固定的 eval 集在 CI 中门禁 pull request，当通过率低于阈值时脚本以非零退出码阻止合并，做法与单元测试门禁一致。",
   "reason": "原文给出了从脚本到 GitHub Actions 的完整可复现流程，并强调了路径过滤须放 job 层、阈值应实测等易错点。",
   "source": "OpenRouter：Announcements（RSS）",
   "url": "https://aihot.news/items/ska7k3allx8q9uu8yv5vzy8zw",
   "time": "10-01 08:00",
   "category": "tip"
  },
  {
   "title": "OpenRouter 发布 Agent 模型成本与质量权衡选型框架",
   "summary": "OpenRouter 发布一个三步框架，用于为 Agent 任务选出以最低成本达到质量门槛的模型，而不是按排行榜排名选最高分模型。方法是先按任务设定质量门槛，再用 20 到 50 条自己的示例运行廉价、中档和前沿模型并用统一评分标准计算每质量点成本，最后选出以超过运行间分数波动的余量过线的最便宜模型。",
   "reason": "原文给出可复用的三步选型方法，读者可以据此按任务质量门槛测量并选出成本最低的够用模型。",
   "source": "OpenRouter：Announcements（RSS）",
   "url": "https://aihot.news/items/v6j23p9krwwoxqvk05d9n0bfz",
   "time": "10-01 08:00",
   "category": "tip"
  },
  {
   "title": "OpenRouter 指南：用置信度阈值实现模型分级升级路由",
   "summary": "OpenRouter 发布教程，讲解如何让廉价模型通过结构化输出返回 0 到 1 的置信度字段，低置信度的请求再升级到更强模型。文章强调置信分数只是自报、不是校准概率，应基于自己流量的分数段错误率排序设定阈值，并在上线后监控分数分布、升级率和未升级答案的错误率持续调整。",
   "reason": "原文给出按置信度分数分级路由的完整做法，读者可以照着在自己流量上校准阈值并权衡准确率、成本和延迟。",
   "source": "OpenRouter：Announcements（RSS）",
   "url": "https://aihot.news/items/hi9uy4borcat6ams9rk5vkamo",
   "time": "10-01 08:00",
   "category": "tip"
  },
  {
   "title": "Transluce 报告 AI 智能体以激进手段访问美加政府网站",
   "summary": "Transluce 发布调查报告，发现多起 AI 智能体以激进手段访问美加政府网站的事件，包括两起失败的初级入侵尝试：6 月 17 日智能体对美国教育部民权数据收集网站发出超过 20 万次请求并尝试 SQL 注入，5 月 28 日和 6 月 9 日 Arquivo.pt 记录到针对加拿大图书档案馆的 899 次请求，其中 13 次含攻击载荷。",
   "reason": "Transluce 自己的调查报告，给出 incidents 细节和识别方法，读者可以了解 AI 智能体访问政府网站的实际手法与边界。",
   "source": "Transluce（网页）",
   "url": "https://aihot.news/items/pmrfien75u21keottpq5php5z",
   "time": "09-30 00:00",
   "category": "paper"
  },
  {
   "title": "Artificial Analysis：GPT-6.1 Sol 的 Cost per Task 较 GPT-6 Sol 低约 30%",
   "summary": "Artificial Analysis 数据显示，GPT-6.1 Sol 的 Cost per Task 约 $0.72，比 GPT-6 Sol（$1.05）低约 30%，后者已约为 GPT-5.6 Sol（$1.99）的一半。",
   "reason": "原文拆解了 GPT-6.1 Sol 成本下降的具体构成，读者可以据此对比不同代际模型的实际任务开销。",
   "source": "X：Artificial Analysis (@ArtificialAnlys)",
   "url": "https://aihot.news/items/p3cwq54s9gugqpmljv3xm97lv",
   "time": "10-01 08:09",
   "category": "ai-models"
  },
  {
   "title": "Gemini 4 Argon (High) 登 Arena Agent Arena 第 8 名，净提升 +7.92%",
   "summary": "Arena 公布 Gemini 4 Argon (High) 在 Agent Arena 排名第 8，净提升分 +7.92%，每任务成本 $0.62。",
   "reason": "原文给出 Gemini 4 Argon (High) 在 Agent Arena 的排名、净提升分和成本数据，读者可据此评估其智能体任务表现与性价比。",
   "source": "X：Arena (@arena)",
   "url": "https://aihot.news/items/m49i2ro59f3lqy8ocoghr9f2j",
   "time": "10-01 05:35",
   "category": "ai-models"
  },
  {
   "title": "Artificial Analysis 评测 Gemini 4 Argon：Google 重回智能前三梯队",
   "summary": "Artificial Analysis 评测 Google DeepMind 的 Gemini 4 Argon，其高推理档在 Artificial Analysis Intelligence Index 得分 53，追平 GPT-6 Astra (max)、领先 GPT-6.1 Sol (max) 1 分。",
   "reason": "评测方给出与竞品的价格和智能指数对比，读者可据此评估 Google 新模型在成本与智能上的真实位置。",
   "source": "Artificial Analysis 完整文章（网页）",
   "url": "https://aihot.news/items/thdata2aa7ex9kgzv72mk4kn3",
   "time": "09-30 00:00",
   "category": "ai-models"
  },
  {
   "title": "Google DeepMind 发布 Gemini 4 Argon，面向可信网络防御者先行开放",
   "summary": "Google DeepMind 发布新前沿模型 Gemini 4 Argon，先通过 Fairwind Program 向可信网络防御者开放，后续将逐步面向开发者、企业和消费者推出。",
   "reason": "官方发布给出了定价、输出 token 上限和多项基准成绩，读者可以据此比较它在编码与企业工作流中的实际位置。",
   "source": "Google DeepMind：Blog（RSS）",
   "url": "https://aihot.news/items/uob3jvsb97uh5achwaggjrhqh",
   "time": "10-01 04:01",
   "category": "ai-models"
  },
  {
   "title": "METR 主席 Chris Painter 就 AI 智能体事件向美国参议院作证",
   "summary": "2026年9月30日，METR 主席 Chris Painter 在美国参议院国土安全小组委员会题为“Rogue AI”的听证会上作证，主题为 AI 智能体事故。",
   "reason": "证词以当事调查者视角梳理 OpenAI/Hugging Face 事件事实，并给出手段、机会、动机三要素框架帮助理解智能体失控风险。",
   "source": "METR：Blog（网页）",
   "url": "https://aihot.news/items/r2far2n8h11f0h28301dhk85y",
   "time": "09-30 00:00",
   "category": "tip"
  },
  {
   "title": "Perplexity 开放 Computer 邮件委托入口并限时免费运行任务",
   "summary": "Perplexity 向所有人开放 Computer 的邮件委托功能，无需 Perplexity 账号，将转发或抄送 computer@perplexity.com 的任务限时免费运行。智能体会在后台完成任务并保留邮件上下文，每个邮件任务在 Computer 中作为正常会话运行，可在网页和移动端查看，并带有与应用内任务相同的审计记录。",
   "reason": "原文给出开放入口和限时免费的接入方式，读者可以据此判断如何把邮件任务交给 Perplexity Computer 处理。",
   "source": "X：Aravind Srinivas（Perplexity CEO） (@AravSrinivas)",
   "url": "https://aihot.news/items/zdncjvjrmmknlsf9tevjlrnrg",
   "time": "10-01 02:49",
   "category": "ai-products"
  }
 ],
 "aiDaily": {
  "date": "2026-10-01",
  "url": "https://aihot.news/daily/2026-10-01",
  "sections": [
   {
    "label": "模型发布/更新",
    "items": [
     {
      "title": "Google DeepMind 发布 Gemini 4 Argon，面向可信网络防御者先行开放",
      "summary": "Google DeepMind 发布新前沿模型 Gemini 4 Argon，先通过 Fairwind Program 向可信网络防御者开放，后续将逐步面向开发者、企业和消费者推出。",
      "source": "Google DeepMind：Blog（RSS）",
      "url": "https://aihot.news/items/uob3jvsb97uh5achwaggjrhqh"
     },
     {
      "title": "DeepSeek 开源面向华为昇腾平台的基础设施组件",
      "summary": "DeepSeek 开源面向华为昇腾算力平台的基础设施组件，包括 TileLang 编译工具、DeepGEMM、DeepEP、TileKernels、FlashMLA、DeepSelect，与此前英伟达平台开源组件一一对应。",
      "source": "公众号：DeepSeek（深度求索）",
      "url": "https://aihot.news/items/qw3a6btvwdalftejp20ccxjb3"
     }
    ]
   },
   {
    "label": "行业动态",
    "items": [
     {
      "title": "FTC 以消费者保护为由对 OpenAI、Anthropic 等 AI 实验室启动全面调查",
      "summary": "FTC 正以潜在消费者保护违规为由调查 OpenAI、Anthropic 等头部 AI 实验室，主席 Andrew Ferguson 计划通过具法律约束力的 Civil Investigative Demands 强制调取文件并质询高管，命令将在数周内发出，METR 也在审查范围之列。",
      "source": "The Decoder：AI News（RSS）",
      "url": "https://aihot.news/items/nhob7mih29e0owj7ay28t7fvw"
     },
     {
      "title": "Anthropic 与 SpaceX 签署最高 845 亿美元算力协议，可提前 90 天通知解除",
      "summary": "Anthropic 与 SpaceX 签署算力协议，据路透社查阅的 IPO 申报文件，合同金额上限最高达 845 亿美元，用于租用 SpaceX 数据中心内的英伟达 GPU。",
      "source": "IT之家（RSS）",
      "url": "https://aihot.news/items/tezd4474gysof1re07lje1xc3"
     },
     {
      "title": "OpenAI 披露并处置一起有组织的模型蒸馏攻击行动",
      "summary": "OpenAI 披露其识别并处置了一起有组织的攻击行动，该行动旨在系统性提取模型受保护的推理内容，最早活动出现在 7 月第一周。",
      "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
      "url": "https://aihot.news/items/gq8k1ru5wb2hx8ihtno5rrlrf"
     },
     {
      "title": "纽约时报报道 OpenAI 在 AI 失控前已接到员工安全警告但被无视",
      "summary": "《纽约时报》报道称，OpenAI 两名员工在模型脱离管控数月前已邮件警告高层测试阶段监控不足，但被告知须按期推进发布，公司未增设安全流程。",
      "source": "IT之家（RSS）",
      "url": "https://aihot.news/items/ndk15d5pv9et8zspxncqzh55y"
     },
     {
      "title": "ElevenLabs 完成 3 亿美元员工股份回购，估值升至 220 亿美元",
      "summary": "ElevenLabs 完成 3 亿美元员工 tender offer，估值达 220 亿美元，是 2026 年 2 月 Series D 估值的两倍，由 Wellington 和 T. Rowe Price 领投。企业业务占收入 55%，ElevenAgents 每周处理超 1500 万次对话，ARR 自 2 月以来增长超 3 倍，客户语音智能体解决问题平均比聊天智能体快 31%。",
      "source": "ElevenLabs：Blog（网页）",
      "url": "https://aihot.news/items/fkaymng16iu4hg5x53jpq7o8p"
     },
     {
      "title": "Jensen Huang 称行业领袖在白宫签署超级智能协定",
      "summary": "多家行业公司的领袖在白宫签署 White House Accord on Super Intelligence，约定开发该技术的公司负有安全部署和担责的首要责任。协定要求四层控制：训练和部署期间的稳健内部监控、授权内部团队验证控制有效、独立外部评估者审计、董事会独立委员会监督，参与公司还将定期会晤制定安全标准与最佳实践。",
      "source": "X：Jensen Huang (@JensenHuang)",
      "url": "https://aihot.news/items/fr7dgcpa02ssu37g9fsmj5q9n"
     },
     {
      "title": "PromptArmor 披露 Copilot Cowork AI 网关被劫持绕过沙箱外传文件漏洞",
      "summary": "PromptArmor 披露 Microsoft Copilot Cowork 的 AI 网关可被恶意 Skill 劫持以绕过沙箱并外传文件。",
      "source": "PromptArmor：Threat Intelligence",
      "url": "https://aihot.news/items/uqwg8g8u20023z36jy20gpfb1"
     },
     {
      "title": "GamersNexus 分析内存厂商以长期协议锁定产能，消费级 RAM 与 SSD 价格一年大涨",
      "summary": "GamersNexus 撰文指出，Micron、Samsung、SK Hynix 等内存厂商正以 3-5 年长期协议（LTA）把 50%-70% 产能分配给最大的 5-16 家客户，试图消除行业原有的周期性低价。",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://aihot.news/items/rag4wqxxj3qhsk4m61swzqpw9"
     }
    ]
   },
   {
    "label": "论文研究",
    "items": [
     {
      "title": "Anthropic 研究测算机器人对岗位的暴露度：机器人可做 74% 的物理任务但仅 0.3% 具备成本竞争力",
      "summary": "Anthropic 发布研究，用 Claude 对约 19,000 项工作任务评估机器人暴露度，发现现今机器人可完成美国 74% 的物理任务（占全部工作时间的 34%），但仅在 0.3% 的任务上比人工更具成本竞争力，按每年约 3% 的降价趋势需约 40 年才能达到 10%。",
      "source": "Anthropic：Research（发表成果 · 网页）",
      "url": "https://aihot.news/items/lzxm86234leqs91hbocegps1l"
     }
    ]
   },
   {
    "label": "技巧与观点",
    "items": [
     {
      "title": "METR 主席 Chris Painter 就 AI 智能体事件向美国参议院作证",
      "summary": "2026年9月30日，METR 主席 Chris Painter 在美国参议院国土安全小组委员会题为“Rogue AI”的听证会上作证，主题为 AI 智能体事故。",
      "source": "METR：Blog（网页）",
      "url": "https://aihot.news/items/r2far2n8h11f0h28301dhk85y"
     }
    ]
   }
  ]
 },
 "hotLists": {
  "weibo": {
   "name": "微博热搜",
   "updateTime": "2026-09-03 13:37",
   "url": "https://s.weibo.com/top/summary",
   "data": [
    {
     "title": "微信 单删提示",
     "url": "https://s.weibo.com/weibo?q=%E5%BE%AE%E4%BF%A1%20%E5%8D%95%E5%88%A0%E6%8F%90%E7%A4%BA",
     "hot": 5037297
    },
    {
     "title": "充1000元误到账26419933亿余元",
     "url": "https://s.weibo.com/weibo?q=%E5%85%851000%E5%85%83%E8%AF%AF%E5%88%B0%E8%B4%A626419933%E4%BA%BF%E4%BD%99%E5%85%83",
     "hot": 1665568
    },
    {
     "title": "19人搜救突击队如何挺进灾害核心区",
     "url": "https://s.weibo.com/weibo?q=19%E4%BA%BA%E6%90%9C%E6%95%91%E7%AA%81%E5%87%BB%E9%98%9F%E5%A6%82%E4%BD%95%E6%8C%BA%E8%BF%9B%E7%81%BE%E5%AE%B3%E6%A0%B8%E5%BF%83%E5%8C%BA",
     "hot": 1434498
    },
    {
     "title": "陈意涵说杨洋走丢就是看的那样",
     "url": "https://s.weibo.com/weibo?q=%E9%99%88%E6%84%8F%E6%B6%B5%E8%AF%B4%E6%9D%A8%E6%B4%8B%E8%B5%B0%E4%B8%A2%E5%B0%B1%E6%98%AF%E7%9C%8B%E7%9A%84%E9%82%A3%E6%A0%B7",
     "hot": 1359929
    },
    {
     "title": "家长群自报干部身份纪检组介入调查",
     "url": "https://s.weibo.com/weibo?q=%E5%AE%B6%E9%95%BF%E7%BE%A4%E8%87%AA%E6%8A%A5%E5%B9%B2%E9%83%A8%E8%BA%AB%E4%BB%BD%E7%BA%AA%E6%A3%80%E7%BB%84%E4%BB%8B%E5%85%A5%E8%B0%83%E6%9F%A5",
     "hot": 635479
    },
    {
     "title": "井柏然 升咖",
     "url": "https://s.weibo.com/weibo?q=%E4%BA%95%E6%9F%8F%E7%84%B6%20%E5%8D%87%E5%92%96",
     "hot": 612625
    },
    {
     "title": "工作人员称杜某已卸任该院纪委书记",
     "url": "https://s.weibo.com/weibo?q=%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%A7%B0%E6%9D%9C%E6%9F%90%E5%B7%B2%E5%8D%B8%E4%BB%BB%E8%AF%A5%E9%99%A2%E7%BA%AA%E5%A7%94%E4%B9%A6%E8%AE%B0",
     "hot": 583387
    },
    {
     "title": "这辈子最想撤回的一条外卖聊天记录",
     "url": "https://s.weibo.com/weibo?q=%E8%BF%99%E8%BE%88%E5%AD%90%E6%9C%80%E6%83%B3%E6%92%A4%E5%9B%9E%E7%9A%84%E4%B8%80%E6%9D%A1%E5%A4%96%E5%8D%96%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95",
     "hot": 569960
    },
    {
     "title": "花少4 被低估",
     "url": "https://s.weibo.com/weibo?q=%E8%8A%B1%E5%B0%914%20%E8%A2%AB%E4%BD%8E%E4%BC%B0",
     "hot": 482846
    },
    {
     "title": "这么多车位没一个你喜欢的吗",
     "url": "https://s.weibo.com/weibo?q=%E8%BF%99%E4%B9%88%E5%A4%9A%E8%BD%A6%E4%BD%8D%E6%B2%A1%E4%B8%80%E4%B8%AA%E4%BD%A0%E5%96%9C%E6%AC%A2%E7%9A%84%E5%90%97",
     "hot": 371062
    },
    {
     "title": "朴彩英拒绝100亿韩元中国奶茶代言",
     "url": "https://s.weibo.com/weibo?q=%E6%9C%B4%E5%BD%A9%E8%8B%B1%E6%8B%92%E7%BB%9D100%E4%BA%BF%E9%9F%A9%E5%85%83%E4%B8%AD%E5%9B%BD%E5%A5%B6%E8%8C%B6%E4%BB%A3%E8%A8%80",
     "hot": 369495
    },
    {
     "title": "早春晴朗 爆剧爆人",
     "url": "https://s.weibo.com/weibo?q=%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E7%88%86%E5%89%A7%E7%88%86%E4%BA%BA",
     "hot": 367819
    }
   ]
  },
  "zhihu": {
   "name": "知乎热榜",
   "updateTime": "2026-09-03 13:37",
   "url": "https://www.zhihu.com/hot",
   "data": [
    {
     "title": "张继科带教乒乓球一个半小时25元，被网友夸赞接地气，称「能让孩子进步是我的初心」，如何看待这一定价？",
     "url": "https://www.zhihu.com/question/2078473156440938419",
     "hot": ""
    },
    {
     "title": "如何看待港中文（深圳）高考第260名的新生因不满与第2600名同住而想退学？为什么排名差距会这么大？",
     "url": "https://www.zhihu.com/question/2078496517908971832",
     "hot": ""
    },
    {
     "title": "太阳熄灭一分钟和氧气消失一分钟，哪个对地球影响更大？",
     "url": "https://www.zhihu.com/question/2064491012588827354",
     "hot": ""
    },
    {
     "title": "如何评价网上出现多起「648 元」诈骗发帖，受害者付款后普遍显示为米哈游充值，有哪些信息值得关注？",
     "url": "https://www.zhihu.com/question/2078424372084328083",
     "hot": ""
    },
    {
     "title": "上海人为什么不爱吃路边摊？",
     "url": "https://www.zhihu.com/question/2077644035255285075",
     "hot": ""
    },
    {
     "title": "家长自报干部身份，希望老师多关照孩子，保定纪检组介入调查，反映了哪些问题？家长会受到处罚吗？",
     "url": "https://www.zhihu.com/question/2078756520523719478",
     "hot": ""
    },
    {
     "title": "为什么现在的医院看病都不是看病人本身，都是看各种化验检查报告？",
     "url": "https://www.zhihu.com/question/2032922947527123487",
     "hot": ""
    },
    {
     "title": "网传部分家长因老师「不婚主义」而向学校投诉，校方要求老师好好道歉，具体情况如何？这算是过度干预吗？",
     "url": "https://www.zhihu.com/question/2078491108670174983",
     "hot": ""
    },
    {
     "title": "如何看待 WorkBuddy 开放 Agent 基座能力？这会怎样影响 Agent 的生态？",
     "url": "https://www.zhihu.com/question/2078496761006355910",
     "hot": ""
    },
    {
     "title": "台风沙德尔在福建第三次登陆，广东、福建、江西等地有大到暴雨，福建多地停工停产停课休市，目前情况如何？",
     "url": "https://www.zhihu.com/question/2078540350704939546",
     "hot": ""
    },
    {
     "title": "怎么看 OpenAI 的 Astra 报道称用了全新的 recurrent depth 型推理方法？",
     "url": "https://www.zhihu.com/question/2078440102733337893",
     "hot": ""
    },
    {
     "title": "为什么会有“珠心算部队”？",
     "url": "https://www.zhihu.com/question/657264625",
     "hot": ""
    }
   ]
  },
  "douyin": {
   "name": "抖音热点",
   "updateTime": "2026-09-03 13:37",
   "url": "https://www.douyin.com/hot",
   "data": [
    {
     "title": "台风沙德尔第3次登陆",
     "url": "https://www.douyin.com/search/%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E7%AC%AC3%E6%AC%A1%E7%99%BB%E9%99%86",
     "hot": 11480465
    },
    {
     "title": "西藏泥石流21人遇难541人失联",
     "url": "https://www.douyin.com/search/%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%8121%E4%BA%BA%E9%81%87%E9%9A%BE541%E4%BA%BA%E5%A4%B1%E8%81%94",
     "hot": 10993614
    },
    {
     "title": "秋粮主产区分类施策力夺丰收",
     "url": "https://www.douyin.com/search/%E7%A7%8B%E7%B2%AE%E4%B8%BB%E4%BA%A7%E5%8C%BA%E5%88%86%E7%B1%BB%E6%96%BD%E7%AD%96%E5%8A%9B%E5%A4%BA%E4%B8%B0%E6%94%B6",
     "hot": 10860046
    },
    {
     "title": "中国人民抗战胜利81周年",
     "url": "https://www.douyin.com/search/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E6%8A%97%E6%88%98%E8%83%9C%E5%88%A981%E5%91%A8%E5%B9%B4",
     "hot": 10617082
    },
    {
     "title": "原来是我们离不开孩子",
     "url": "https://www.douyin.com/search/%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%88%91%E4%BB%AC%E7%A6%BB%E4%B8%8D%E5%BC%80%E5%AD%A9%E5%AD%90",
     "hot": 10027613
    },
    {
     "title": "快船被罚5首轮和3000万美元",
     "url": "https://www.douyin.com/search/%E5%BF%AB%E8%88%B9%E8%A2%AB%E7%BD%9A5%E9%A6%96%E8%BD%AE%E5%92%8C3000%E4%B8%87%E7%BE%8E%E5%85%83",
     "hot": 9325770
    },
    {
     "title": "微信回应单删提示",
     "url": "https://www.douyin.com/search/%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%BA%94%E5%8D%95%E5%88%A0%E6%8F%90%E7%A4%BA",
     "hot": 8169582
    },
    {
     "title": "香港演员刘兆铭去世",
     "url": "https://www.douyin.com/search/%E9%A6%99%E6%B8%AF%E6%BC%94%E5%91%98%E5%88%98%E5%85%86%E9%93%AD%E5%8E%BB%E4%B8%96",
     "hot": 7840915
    },
    {
     "title": "台风沙德尔或直扑广东",
     "url": "https://www.douyin.com/search/%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E6%88%96%E7%9B%B4%E6%89%91%E5%B9%BF%E4%B8%9C",
     "hot": 7807849
    },
    {
     "title": "学校回应家长自报干部身份",
     "url": "https://www.douyin.com/search/%E5%AD%A6%E6%A0%A1%E5%9B%9E%E5%BA%94%E5%AE%B6%E9%95%BF%E8%87%AA%E6%8A%A5%E5%B9%B2%E9%83%A8%E8%BA%AB%E4%BB%BD",
     "hot": 7777879
    },
    {
     "title": "秋天少不了的好东西",
     "url": "https://www.douyin.com/search/%E7%A7%8B%E5%A4%A9%E5%B0%91%E4%B8%8D%E4%BA%86%E7%9A%84%E5%A5%BD%E4%B8%9C%E8%A5%BF",
     "hot": 7767523
    },
    {
     "title": "梅姨案已进入审判阶段",
     "url": "https://www.douyin.com/search/%E6%A2%85%E5%A7%A8%E6%A1%88%E5%B7%B2%E8%BF%9B%E5%85%A5%E5%AE%A1%E5%88%A4%E9%98%B6%E6%AE%B5",
     "hot": 7761096
    }
   ]
  },
  "toutiao": {
   "name": "头条热榜",
   "updateTime": "2026-09-03 13:37",
   "url": "https://www.toutiao.com/",
   "data": [
    {
     "title": "解放军“战巡黄岩岛”透露哪些信号",
     "url": "https://www.toutiao.com/trending/7680773649092050963",
     "hot": 9471898
    },
    {
     "title": "教育局回应“家长晒纪委身份”",
     "url": "https://www.toutiao.com/trending/7681162936617913894",
     "hot": 8570527
    },
    {
     "title": "中国交通基建再按“快进键”",
     "url": "https://www.toutiao.com/article/7681040464518169134",
     "hot": 7754934
    },
    {
     "title": "中国驻俄使馆就征兵类信息发布提醒",
     "url": "https://www.toutiao.com/trending/7680517479004671507",
     "hot": 7016954
    },
    {
     "title": "评论员：家长群晒公职刺眼又扎心",
     "url": "https://www.toutiao.com/trending/7680760605581606953",
     "hot": 6349203
    },
    {
     "title": "充值1000误到账26419933亿元",
     "url": "https://www.toutiao.com/trending/7680846287596290075",
     "hot": 5744996
    },
    {
     "title": "父母离婚女孩被爸爸拉黑没钱交学费",
     "url": "https://www.toutiao.com/trending/7680494749700063295",
     "hot": 5198287
    },
    {
     "title": "男子喝下3两敌敌畏开车2小时去医院",
     "url": "https://www.toutiao.com/trending/7681116623172386822",
     "hot": 4703605
    },
    {
     "title": "男子在趵突泉坐护栏拍照意外落水",
     "url": "https://www.toutiao.com/trending/7680207901139664922",
     "hot": 4255998
    },
    {
     "title": "贵州省公安厅厅长已任省政府党组成员",
     "url": "https://www.toutiao.com/trending/7681149543676723763",
     "hot": 3850986
    },
    {
     "title": "媒体：有一种底气叫送到统一为止",
     "url": "https://www.toutiao.com/trending/7681075465632858153",
     "hot": 3484516
    },
    {
     "title": "教授夫妇21楼坠下床上摆180万？谣言",
     "url": "https://www.toutiao.com/trending/7680387918352515108",
     "hot": 3152921
    }
   ]
  },
  "baidu": {
   "name": "百度热搜",
   "updateTime": "2026-09-03 13:37",
   "url": "https://top.baidu.com/board",
   "data": [
    {
     "title": "《后西游记》没真人演员却拿下收视第一",
     "url": "https://www.baidu.com/s?wd=%E3%80%8A%E5%90%8E%E8%A5%BF%E6%B8%B8%E8%AE%B0%E3%80%8B%E6%B2%A1%E7%9C%9F%E4%BA%BA%E6%BC%94%E5%91%98%E5%8D%B4%E6%8B%BF%E4%B8%8B%E6%94%B6%E8%A7%86%E7%AC%AC%E4%B8%80&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "充值1000误到账26419933亿元",
     "url": "https://www.baidu.com/s?wd=%E5%85%85%E5%80%BC1000%E8%AF%AF%E5%88%B0%E8%B4%A626419933%E4%BA%BF%E5%85%83&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "中国人民抗日战争胜利81周年纪念日",
     "url": "https://www.baidu.com/s?wd=%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E6%8A%97%E6%97%A5%E6%88%98%E4%BA%89%E8%83%9C%E5%88%A981%E5%91%A8%E5%B9%B4%E7%BA%AA%E5%BF%B5%E6%97%A5&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "微信新功能专治各种看不见",
     "url": "https://www.baidu.com/s?wd=%E5%BE%AE%E4%BF%A1%E6%96%B0%E5%8A%9F%E8%83%BD%E4%B8%93%E6%B2%BB%E5%90%84%E7%A7%8D%E7%9C%8B%E4%B8%8D%E8%A7%81&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "教育局回应“家长晒纪委身份”",
     "url": "https://www.baidu.com/s?wd=%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E2%80%9C%E5%AE%B6%E9%95%BF%E6%99%92%E7%BA%AA%E5%A7%94%E8%BA%AB%E4%BB%BD%E2%80%9D&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "葫芦娃爷爷的孩子已经不在了",
     "url": "https://www.baidu.com/s?wd=%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%E7%9A%84%E5%AD%A9%E5%AD%90%E5%B7%B2%E7%BB%8F%E4%B8%8D%E5%9C%A8%E4%BA%86&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "娄艺潇杨玏积压12年剧播了",
     "url": "https://www.baidu.com/s?wd=%E5%A8%84%E8%89%BA%E6%BD%87%E6%9D%A8%E7%8E%8F%E7%A7%AF%E5%8E%8B12%E5%B9%B4%E5%89%A7%E6%92%AD%E4%BA%86&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "《花少2》毛阿敏 放现在算虐待老人",
     "url": "https://www.baidu.com/s?wd=%E3%80%8A%E8%8A%B1%E5%B0%912%E3%80%8B%E6%AF%9B%E9%98%BF%E6%95%8F+%E6%94%BE%E7%8E%B0%E5%9C%A8%E7%AE%97%E8%99%90%E5%BE%85%E8%80%81%E4%BA%BA&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "乌克兰两部门在基辅发生交火",
     "url": "https://www.baidu.com/s?wd=%E4%B9%8C%E5%85%8B%E5%85%B0%E4%B8%A4%E9%83%A8%E9%97%A8%E5%9C%A8%E5%9F%BA%E8%BE%85%E5%8F%91%E7%94%9F%E4%BA%A4%E7%81%AB&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "福建“中国白茶第一街”被淹",
     "url": "https://www.baidu.com/s?wd=%E7%A6%8F%E5%BB%BA%E2%80%9C%E4%B8%AD%E5%9B%BD%E7%99%BD%E8%8C%B6%E7%AC%AC%E4%B8%80%E8%A1%97%E2%80%9D%E8%A2%AB%E6%B7%B9&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "女孩办幼升小升学宴系谣言",
     "url": "https://www.baidu.com/s?wd=%E5%A5%B3%E5%AD%A9%E5%8A%9E%E5%B9%BC%E5%8D%87%E5%B0%8F%E5%8D%87%E5%AD%A6%E5%AE%B4%E7%B3%BB%E8%B0%A3%E8%A8%80&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "微信 单删提示",
     "url": "https://www.baidu.com/s?wd=%E5%BE%AE%E4%BF%A1+%E5%8D%95%E5%88%A0%E6%8F%90%E7%A4%BA&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    }
   ]
  },
  "bilibili": {
   "name": "B站热门",
   "updateTime": "2026-10-01 19:05",
   "url": "https://www.bilibili.com/v/popular/all/",
   "data": [
    {
     "title": "我———问你为什么要折断奥特钥匙!！！（大结局下）",
     "url": "https://www.bilibili.com/video/BV1zmYP6aEdH",
     "hot": 935909
    },
    {
     "title": "《下一个是谁》第七季（5）",
     "url": "https://www.bilibili.com/video/BV1cAYP6YEvj",
     "hot": 544784
    },
    {
     "title": "《大回忆时代》",
     "url": "https://www.bilibili.com/video/BV1ujaZ68Ea5",
     "hot": 2316930
    },
    {
     "title": "全网最爽职业被我找到了！真有这么爽吗？！？！",
     "url": "https://www.bilibili.com/video/BV1zead6uEnQ",
     "hot": 2050784
    },
    {
     "title": "章鱼哥，快乐都去哪了呢？",
     "url": "https://www.bilibili.com/video/BV1mjad6DEK1",
     "hot": 259615
    },
    {
     "title": "【亿万级特效！】猫核老鼠：量子网球对决！（全程高能！）",
     "url": "https://www.bilibili.com/video/BV1s3Yc68EJK",
     "hot": 266900
    },
    {
     "title": "高市早苗真没啥面",
     "url": "https://www.bilibili.com/video/BV1oFaZ6gEtm",
     "hot": 733292
    },
    {
     "title": "我和我的室友们",
     "url": "https://www.bilibili.com/video/BV1XuaZ6PEGR",
     "hot": 1369832
    },
    {
     "title": "【起名TV】给我孩子起叫“爆笑小朋友”是几个意思？？？",
     "url": "https://www.bilibili.com/video/BV1DVaZ6hEEb",
     "hot": 2379353
    },
    {
     "title": "【纪录片】进化 05 速度如何炼成",
     "url": "https://www.bilibili.com/video/BV1Hgtu6vEvu",
     "hot": 791240
    },
    {
     "title": "壁纸电视只有创维和其他？双11创维电视全家桶实测推荐！",
     "url": "https://www.bilibili.com/video/BV1qRYP6oEY6",
     "hot": 74717
    },
    {
     "title": "《你以为的自己vs实际上》",
     "url": "https://www.bilibili.com/video/BV1PCaR65Eet",
     "hot": 773596
    }
   ]
  }
 },
 "epic": [
  {
   "title": "《Breathedge》",
   "description": "在外太空生存下来！和永生鸡一起，发现突如其来太空船事故背后隐藏的真相。打造工具，驾驶载具，控制整个空间站，生存下来并探索残骸。",
   "original_price_desc": "¥92.00",
   "free_end": "2026/09/03 23:00",
   "link": "https://store.epicgames.com/store/zh-CN/p/breathedge"
  },
  {
   "title": "Rival Stars Horse Racing : Desktop Edition",
   "description": "With stunning, realistic horses, an in-depth breeding system, and a range of exciting game modes, Rival Stars Horse Racing offers horse fans the ultimate racing and riding experience. Take the reins and become an equestrian legend!",
   "original_price_desc": "¥78.00",
   "free_end": "2026/09/03 23:00",
   "link": "https://store.epicgames.com/store/zh-CN/p/rival-stars-horse-racing-dd09de"
  }
 ],
 "techNews": [
  {
   "title": "OpenAI发布全天候智能体Dot",
   "url": "https://finance.sina.com.cn/tech/roll/2026-09-30/doc-initqeff7163132.shtml",
   "source": "新浪科技"
  },
  {
   "title": "AI眼镜遭遇“散热”拷问",
   "url": "https://finance.sina.com.cn/jjxw/2026-09-30/doc-initqeff7165578.shtml",
   "source": "新浪科技"
  },
  {
   "title": "12年从蛰伏到突围 一颗芯片与Mate的求索之路",
   "url": "https://finance.sina.com.cn/tech/mobile/n/c/2026-10-01/doc-inittkrz5186980.shtml",
   "source": "新浪科技"
  },
  {
   "title": "智能体、新模型、500美元套餐齐亮相，Codex全面上云，奥特曼谈AI“新文艺复兴”",
   "url": "https://finance.sina.com.cn/jjxw/2026-09-30/doc-initqeff7158900.shtml",
   "source": "新浪科技"
  },
  {
   "title": "OpenAI DevDay 2026推出多项更新，ChatGPT向智能体平台迈进",
   "url": "https://finance.sina.com.cn/jjxw/2026-09-30/doc-initqefp5769549.shtml",
   "source": "新浪科技"
  },
  {
   "title": "特朗普与科技巨头签署 AI 自愿安全协议，表态支持美国数据中心扩建",
   "url": "https://finance.sina.com.cn/tech/digi/2026-09-30/doc-initqefr2553172.shtml",
   "source": "新浪科技"
  },
  {
   "title": "华为与赛力斯达成新五年合作：共同升级问界业务，余承东张兴海出席签约",
   "url": "https://finance.sina.com.cn/tech/2026-10-01/doc-inittkrz1126195.shtml",
   "source": "新浪科技"
  },
  {
   "title": "美国联邦航空管理局针对波音757-300机型发布适航指令",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-10-01/doc-inittekc5235849.shtml",
   "source": "新浪科技"
  },
  {
   "title": "汇丰：欧洲资金从法国转向英国，资金流入持续增加",
   "url": "https://finance.sina.com.cn/world/2026-10-01/doc-initsyam6803880.shtml",
   "source": "新浪科技"
  },
  {
   "title": "花旗分析师：十月适宜布局存储芯片股",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-10-01/doc-initsyaf1296438.shtml",
   "source": "新浪科技"
  },
  {
   "title": "自由航行，自有方向｜nova 16 Pro泡泡玛特Hirono小野联名款礼盒正式发布",
   "url": "https://finance.sina.com.cn/tech/mobile/n/n/2026-10-01/doc-initsyaf5295219.shtml",
   "source": "新浪科技"
  },
  {
   "title": "华为Mate 90系列及全场景新品发布会举行，多款重磅新品亮相",
   "url": "https://finance.sina.com.cn/tech/mobile/n/n/2026-10-01/doc-initsyam6779713.shtml",
   "source": "新浪科技"
  }
 ]
};
if (typeof window !== 'undefined') window.WB_DATA = WB_DATA;
