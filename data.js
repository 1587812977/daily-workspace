// 个人工作台数据（GitHub Actions 定时刷新，勿手改）
var WB_DATA = {
 "updatedAt": "2026-10-21 01:26",
 "aihotHot": [
  {
   "rank": 1,
   "title": "DeepSeek 开源内部推理框架 DeepInfer",
   "source": "公众号：DeepSeek（深度求索）",
   "url": "https://aihot.news/items/ckykonvith99q6hvd0utjdwfn",
   "time": "10-20 22:31",
   "sourceCount": 9
  },
  {
   "rank": 2,
   "title": "MiniMax 发布 M3.1 Flash，权重 10 月 23 日开放",
   "source": "MiniMax：Blog（网页）",
   "url": "https://aihot.news/items/wrnv8dd428iozlj5xax99zbmj",
   "time": "10-20 23:39",
   "sourceCount": 12
  },
  {
   "rank": 3,
   "title": "美国土安全部令联邦文职机构移除DeepSeek及关联产品",
   "source": "Hacker News：AI 热帖",
   "url": "https://aihot.news/items/p04w1xjk7v6fmlskpf5vsnuka",
   "time": "10-20 21:07",
   "sourceCount": 6
  },
  {
   "rank": 4,
   "title": "DeepSeek 发布 V4.1-Flash-1017 并开放搜索 API",
   "source": "DeepSeek：API 更新日志",
   "url": "https://aihot.news/items/w34qm27sedtziwxig5ub9wwhr",
   "time": "10-20 23:32",
   "sourceCount": 7
  },
  {
   "rank": 5,
   "title": "Anthropic设公益基金 承诺投入5%股份",
   "source": "Anthropic：Newsroom（网页）",
   "url": "https://aihot.news/items/eg3kb6utc3fzmkjqyxdi4i92b",
   "time": "10-19 13:06",
   "sourceCount": 2
  },
  {
   "rank": 6,
   "title": "OpenAI 拟以超1.4万亿美元估值融资300亿美元",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/srgsfi8edabzrwgg6vjtgw3ya",
   "time": "10-20 16:06",
   "sourceCount": 1
  },
  {
   "rank": 7,
   "title": "Mercury 3 发布：速度与评测争议",
   "source": "Inception Labs：Blog（网页）",
   "url": "https://aihot.news/items/osk3jj5jltogwr6zpo09w80j8",
   "time": "10-20 11:32",
   "sourceCount": 4
  },
  {
   "rank": 8,
   "title": "Viggle AI 发布 3D 原生世界模型 JST-2",
   "source": "X：邵猛 (@shao__meng)",
   "url": "https://aihot.news/items/i8s81ihzs5zl16pc3zgz4swkz",
   "time": "10-20 11:52",
   "sourceCount": 2
  },
  {
   "rank": 9,
   "title": "Anthropic与Nscale洽谈第二笔450亿美元算力协议",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/w5ksj7eghzbmzpf6lwds0un12",
   "time": "10-20 13:53",
   "sourceCount": 2
  },
  {
   "rank": 10,
   "title": "AWS 开源 TorchNeuron，Trainium 原生支持 PyTorch",
   "source": "PyTorch：Blog（RSS）",
   "url": "https://aihot.news/items/szf3v3re4888fzekwoohhu8b4",
   "time": "10-20 04:09",
   "sourceCount": 3
  }
 ],
 "aihotItems": [
  {
   "title": "Databricks 发布 MemCurrent 生产级 Agent 持久记忆架构",
   "summary": "Databricks 介绍 MemCurrent，一种面向生产 Agent 的持久记忆架构，结合情景记忆与派生记忆，通过插件、工具调用和离线 dreaming 管线三种访问模式读写与整合记忆，已用于 Agent Bricks Memory 和 Genie。",
   "reason": "原文给出完整设计、消融和成本数据，读者可以据此评估生产级 Agent 记忆架构的选型与收益。",
   "source": "Databricks：Blog（RSS）",
   "url": "https://aihot.news/items/v26pyuir21k0m4r02acyz6v4g",
   "time": "10-20 08:00",
   "category": "ai-products"
  },
  {
   "title": "Google 与 Meta 发布 TorchTPU：PyTorch 原生 TPU 后端",
   "summary": "Google 与 Meta 发布开源项目 TorchTPU，为 Google TPU 提供原生 PyTorch 后端，模型迁移只需把 .to(\"cuda\") 改为 .to(\"tpu\")。",
   "reason": "Google 与 Meta 官方详解 TorchTPU 的架构设计、精度策略和分布式支持，读者可据此评估把现有 PyTorch 工作流迁到 TPU 的改动成本。",
   "source": "PyTorch：Blog（RSS）",
   "url": "https://aihot.news/items/lh8vm7yp332xoffhqoscusss4",
   "time": "10-21 00:00",
   "category": "ai-products"
  },
  {
   "title": "Tessl 团队分享：不再逐行审查 AI 生成代码，改为验证意图",
   "summary": "Tessl 工程师 Ankit Jain 分享团队 PR 量翻四倍、代码几乎全部由 AI 生成后，放弃逐行 diff 审查、改为在代码生成前审查意图并逐条验证验收标准的做法。关键实践包括维护 offer-skill 技能理解代码变更，以及把重复出现最多的审查评论固化成机器自动执行的不变量规则，作者预计第二个月起审查负担明显缩小。",
   "reason": "作者团队 PR 量翻四倍后放弃逐行审代码，改为事前审意图加可验证准则，给出了可直接照搬的做法和时间预期。",
   "source": "Tessl：产品与工程博客",
   "url": "https://aihot.news/items/xil73ls42cqpszvsiuq6u41mj",
   "time": "10-20 00:00",
   "category": "tip"
  },
  {
   "title": "Ai2 发布 FairStress 基准：测量 LLM 决策中被隐藏的公平性不对称",
   "summary": "Ai2 发布 FairStress 基准，通过 300 个两候选决策场景和对抗前缀，测量 LLM 在面对说服性论据时改变决策的难易是否因候选人所属人口群体而不同，全部组合超过 1300 万测试用例，并已开放下载、集成进 Olmo-eval。",
   "reason": "Ai2 用对抗前缀测出模型在人口群体之间的决策不对称，并发现多数去偏方法不可靠，提供了诊断与改进思路。",
   "source": "Ai2 / Allen Institute for AI（RSS）",
   "url": "https://aihot.news/items/cszm6fv1o99q04dbffzx8qqio",
   "time": "10-20 16:00",
   "category": "paper"
  },
  {
   "title": "Perplexity Computer 现可在 Mac 上完全本地运行，无需云端推理",
   "summary": "Perplexity CEO Aravind Srinivas 宣布，Perplexity Computer 现可在 Mac 上完全本地运行，无需云端推理，也不用 WiFi。模型和智能体都在本机运行，可操作 Mac 原生应用和本地文件，敏感数据不必发送到云端，现已在 Perplexity Mac 应用中可用。",
   "reason": "Perplexity CEO 亲自宣布，Perplexity Computer 可完全本地运行，敏感数据无需上云，对关注隐私和离线使用的人有参考价值。",
   "source": "X：Aravind Srinivas（Perplexity CEO） (@AravSrinivas)",
   "url": "https://aihot.news/items/zs3zvf51jl6pa35kn4npmoy7j",
   "time": "10-21 00:34",
   "category": "ai-products"
  },
  {
   "title": "Google 发布 TorchTitan TPU 分叉并给出模型优化 Playbook",
   "summary": "Google 推出 TorchTitan TPU 分叉（github.com/google-pytorch/torchtitan），配合 TorchTPU 原生后端在 Cloud TPU 上训练 PyTorch 模型，提供 SimpleFSDP、Graph Trainer、Pallas 内核和优化 Playbook。",
   "reason": "原文给出从基准到编译、内核、内存的完整 TPU 优化顺序，以及 FLUX.1、Qwen3 235B 等实测数字，可迁移到自己的训练工作流。",
   "source": "Google Developers Blog（RSS）",
   "url": "https://aihot.news/items/h4dx2g41nbw5jofprsfwr2xmq",
   "time": "10-20 00:00",
   "category": "tip"
  },
  {
   "title": "Google 发布 vLLM 与 SGLang 的 TorchTPU 原生推理引擎",
   "summary": "Google 在 PyTorch 相关公告中推出基于 TorchTPU 的 vLLM 和 SGLang 原生 PyTorch 推理引擎，分别与 Inferact、RadixArk 合作开发，让开发者用熟悉的 PyTorch 工具在 TPU 上部署模型。",
   "reason": "原文给出两套 PyTorch 原生 TPU 推理引擎的功能清单、公开基准成本和开源入口，读者可据此评估把现有 PyTorch 服务栈迁到 TPU 的可行性。",
   "source": "Google Developers Blog（RSS）",
   "url": "https://aihot.news/items/mlusnw9gi199uld4ixj58m2cz",
   "time": "10-20 00:00",
   "category": "ai-products"
  },
  {
   "title": "METR 评测 Anthropic 2026 年 8 月风险报告对齐章节，认可低风险结论但质疑评估方法",
   "summary": "METR 发布对 Anthropic 2026 年 8 月风险报告“高风险场景中的错位”章节的独立外部审查，基本同意截至 2026 年 7 月 15 日 Mythos 5 和内部模型 Model 2 的灾难性错位风险为低，但认为这主要源于模型能力有限而非安全防护。",
   "reason": "METR 独立审查了 Anthropic 风险报告的对齐章节，指出隐藏 CoT 评估无法覆盖 CoT 合理化攻击面，并给出监测系统红队测试建议。",
   "source": "METR：Blog（网页）",
   "url": "https://aihot.news/items/kvok7sv5ddw0i5n62gbtuwtt3",
   "time": "10-20 00:00",
   "category": "paper"
  },
  {
   "title": "Anthropic 用 Claude 设计出针对蝎子神经毒素的蛋白质迷你结合剂",
   "summary": "Anthropic 让内部研究模型在 Claude Science 中主要自主运行 64 小时，设计针对五种蝎子神经毒素的蛋白质迷你结合剂，共生成 318,484 个设计、筛选出 180 个。",
   "reason": "原文完整披露设计流程、筛选标准和实验数据，读者可以了解 AI 驱动蛋白质设计在被忽视疾病上的真实进展与局限。",
   "source": "Anthropic：Research（发表成果 · 网页）",
   "url": "https://aihot.news/items/oxl50pfymja6rgxkem3y0de9j",
   "time": "10-20 00:00",
   "category": "paper"
  },
  {
   "title": "美国陆军网络司令部 ECHOTRIBBLE 项目拟将 AI 智能体变成自主扩散的网络武器",
   "summary": "据 The Intercept 获取的文件，美国陆军网络司令部（ARCYBER）正在开发代号 ECHOTRIBBLE 的平台，让 AI 智能体自主在网络间移动、识别并清除威胁目标，之后自毁，且须在极少人工监督下运行。",
   "reason": "文件披露 ARCYBER 让 AI 智能体自主扩散和清除目标的计划，多位安全研究者指出了误伤和失控风险。",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/u6kqfrgiqrhbpxn012nlisd66",
   "time": "10-20 20:32",
   "category": "industry"
  },
  {
   "title": "llm-d 1.0 发布：Kubernetes 原生分布式推理服务走向生产就绪",
   "summary": "IBM、Red Hat 和 Google 等主导的开源推理项目 llm-d 在 PyTorch Conference North America 上发布 llm-d 1.0，这是一个 Kubernetes 原生的分布式推理服务框架，支持任意模型、任意加速器和任意云。",
   "reason": "原文给出 llm-d 1.0 的具体能力变化和实测成本数据，读者可据此评估自建推理基础设施是否划算。",
   "source": "IBM Research：AI",
   "url": "https://aihot.news/items/b1pcaa7ceghor24vjgsjagqqd",
   "time": "10-20 20:00",
   "category": "ai-products"
  },
  {
   "title": "Waymo 宣布进军西班牙，2027 年在马德里大区迎接首批乘客",
   "summary": "Waymo 宣布为在西班牙马德里大区推出全自动驾驶出行服务奠定基础，目标 2027 年迎来首批乘客。未来数日其电动 Jaguar I-PACE 车辆将现身当地街头，先以人工驾驶开始，再由当地受训的自动驾驶专家进行技术验证。Waymo 称已累计完成逾 2000 万次行程、400 万公里全自动驾驶里程，在其运营城市中涉及重伤或更严重事故的比例比人类司机低 95%。",
   "reason": "Waymo 官方宣布进入西班牙市场，给出了落地时间表、分阶段部署方式和安全数据，读者可了解其全球扩张节奏。",
   "source": "Waymo：Blog（网页）",
   "url": "https://aihot.news/items/mnqboa5pusqz9brarpfutz57b",
   "time": "10-20 15:00",
   "category": "industry"
  }
 ],
 "aiDaily": {
  "date": "2026-10-20",
  "url": "https://aihot.news/daily/2026-10-20",
  "sections": [
   {
    "label": "模型发布/更新",
    "items": [
     {
      "title": "MiniMax 发布 M3.1 Flash，推理提速近三倍、用量成本降低 70%",
      "summary": "MiniMax 发布 MiniMax M3.1 Flash，匿名模型 Space Bunny 是其早期版本，曾处理超过 200 万亿 token。",
      "source": "MiniMax：Blog（网页）",
      "url": "https://aihot.news/items/wrnv8dd428iozlj5xax99zbmj"
     },
     {
      "title": "蚂蚁 inclusionAI 开源 Ming-3.0-tts 语音合成模型",
      "summary": "蚂蚁 inclusionAI 在 GitHub 发布 Ming-3.0-tts，包含 0.5b dense 和基于 Ling V3 的 tiny（7.9B 总参数、1.3B 激活）两个语音生成模型，MIT 协议开源，权重可在 Hugging Face 和 ModelScope 下载。",
      "source": "蚂蚁 inclusionAI：GitHub 新仓库",
      "url": "https://aihot.news/items/uvgayscfmc9ujjak94ymsnxnd"
     },
     {
      "title": "OpenAI 发布 MultiLangBench 与 COBOL 迁移评测，GPT-6 系列大幅提升低资源编程语言能力",
      "summary": "OpenAI 宣布其最新模型在 COBOL、Fortran、Visual Basic 等低资源编程语言上的构建与迁移能力显著提升，并开源评测套件。",
      "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
      "url": "https://aihot.news/items/tzuiybo7a45sm87wj4rec2mvo"
     },
     {
      "title": "fal 联合 bfl_ai 发布后训练视频模型 FLUX 3 Max",
      "summary": "fal 发布与 @bfl_ai 合作的最新后训练视频模型 FLUX 3 Max，在第三方 image-to-video 质量评测中并列第一，生成 10 秒 720/768p 视频约需 12 秒。未来三周该模型 75% 折扣，标注为同质量级别最便宜的前沿视频模型。",
      "source": "X：fal (@fal)",
      "url": "https://aihot.news/items/qldoluc73m0j8mo7u0ttf95km"
     }
    ]
   },
   {
    "label": "产品发布/更新",
    "items": [
     {
      "title": "Inception 扩散模型 Mercury 3 上线 OpenRouter",
      "summary": "Inception 的扩散模型 Mercury 3 上线 OpenRouter，生成速度超 1,000 tok/s，支持 1M 上下文，是 Mercury 2.5 的 4 倍。Inception 报告其在 IFBench、GPQA Diamond 和 SWE-Bench Atlas 上超过 GPT-6 Luna 和 Haiku 5.5；上线期五折，价格 $0.10/M 输入、$0.35/M 输出。",
      "source": "X：OpenRouter (@OpenRouter)",
      "url": "https://aihot.news/items/hnasqdie0vmly79xyg2ehqcgb"
     },
     {
      "title": "AWS 发布 TorchNeuron：Trainium 的原生 PyTorch 后端",
      "summary": "AWS 发布 TorchNeuron，一个面向 AWS Trainium 的开源原生 PyTorch 后端，将于 10 月 20 日在 PyTorch Conference North America 上以 Apache 2.0 协议开放公开 Beta，代码位于 github.com/aws-neuron/torch-neuronx。",
      "source": "PyTorch：Blog（RSS）",
      "url": "https://aihot.news/items/szf3v3re4888fzekwoohhu8b4"
     },
     {
      "title": "Claude 推出 Dashboards 和 Motion 两款新工具并转正 Docs、Slides、Design",
      "summary": "Claude 宣布 Dashboards 和 Motion 进入 beta。Dashboards 可连接数据平台或 CRM，生成随数据变化实时更新的仪表盘，面向所有付费计划；Motion 把报告或图表变成动画讲解短片，以代码方式生成、无视频模型参与，可修改文字、数字和节奏后导出 MP4，面向 Team 和 Enterprise 计划。",
      "source": "Claude：YouTube（RSS）",
      "url": "https://aihot.news/items/nxsltk5oepaf6w8afa0baxqf5"
     }
    ]
   },
   {
    "label": "行业动态",
    "items": [
     {
      "title": "美国国土安全部下令所有联邦文职机构移除 DeepSeek 及基于其开发的产品",
      "summary": "美国国土安全部依据 2018 年供应链法发布 2026-01 号命令，要求所有联邦文职机构立即停止采购 DeepSeek 及其关联公司产品，并从 IT 系统中移除相关产品，包括使用 DeepSeek 实现开发的第三方产品与服务。",
      "source": "Hacker News：AI 热帖",
      "url": "https://aihot.news/items/p04w1xjk7v6fmlskpf5vsnuka"
     },
     {
      "title": "黑客用 AI 智能体入侵 John Deere、SharkNinja 等超 100 家网站",
      "summary": "AI 安全公司 Norforge 发现一名黑客用开源 AI 平台 Cairn 编排的智能体入侵了超过 100 个网站，据 Reuters 报道受害者包括 John Deere、SharkNinja 和 Cummins。",
      "source": "The Verge：AI（RSS）",
      "url": "https://aihot.news/items/tdcasw4dwhyzne3hxo3dmizmz"
     }
    ]
   },
   {
    "label": "技巧与观点",
    "items": [
     {
      "title": "Meta 详解 Prometheus 吉瓦级超集群：一期已完成并用于训练 Muse 模型",
      "summary": "Meta 介绍其位于俄亥俄州 New Albany 的吉瓦级超集群 Prometheus，一期已建成并用于训练 Muse 系列基础模型，目标扩展到约 100 万张 GPU。",
      "source": "Meta Engineering Blog（RSS）",
      "url": "https://aihot.news/items/ebl13m9gich6kfjixzvfiw5bq"
     },
     {
      "title": "Meta 详解 Thin Orchestrator 模式：让路由少干活提升 AI 智能体可靠性",
      "summary": "Meta 工程团队介绍其数据管道智能体采用的瘦编排器（thin orchestrator）模式：一个约 1300 行的编排器只负责路由和可靠性检查，将 20+ 工作流分派给 14 个上下文隔离的专项子智能体，自身不做任何领域推理。",
      "source": "Meta Engineering Blog（RSS）",
      "url": "https://aihot.news/items/qh6pvehounuylklti7i0zl124"
     },
     {
      "title": "n8n 教程：在 NVIDIA DGX Spark 上离线运行全套 AI 工作流",
      "summary": "n8n 博客发布教程，讲解如何在一台 NVIDIA DGX Spark（128GB 统一内存）上部署七个本地模型，通过 LiteLLM 单一 OpenAI 兼容端点驱动 n8n 工作流，全程不调用云 API。",
      "source": "n8n Blog",
      "url": "https://aihot.news/items/ezjbo6ic6xfvpyxyghjekaude"
     }
    ]
   }
  ]
 },
 "hotLists": {
  "weibo": {
   "name": "微博热搜",
   "updateTime": "2026-10-20 17:33",
   "url": "https://s.weibo.com/top/summary",
   "data": [
    {
     "title": "女子被流浪狗咬伤后几分钟狗死亡",
     "url": "https://s.weibo.com/weibo?q=%E5%A5%B3%E5%AD%90%E8%A2%AB%E6%B5%81%E6%B5%AA%E7%8B%97%E5%92%AC%E4%BC%A4%E5%90%8E%E5%87%A0%E5%88%86%E9%92%9F%E7%8B%97%E6%AD%BB%E4%BA%A1",
     "hot": 1927983
    },
    {
     "title": "小天才封闭社交倒逼家长购买",
     "url": "https://s.weibo.com/weibo?q=%E5%B0%8F%E5%A4%A9%E6%89%8D%E5%B0%81%E9%97%AD%E7%A4%BE%E4%BA%A4%E5%80%92%E9%80%BC%E5%AE%B6%E9%95%BF%E8%B4%AD%E4%B9%B0",
     "hot": 943895
    },
    {
     "title": "前三季度国民经济四大亮点",
     "url": "https://s.weibo.com/weibo?q=%E5%89%8D%E4%B8%89%E5%AD%A3%E5%BA%A6%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E%E5%9B%9B%E5%A4%A7%E4%BA%AE%E7%82%B9",
     "hot": 808329
    },
    {
     "title": "钟南山院士才是真正的薄肌90后",
     "url": "https://s.weibo.com/weibo?q=%E9%92%9F%E5%8D%97%E5%B1%B1%E9%99%A2%E5%A3%AB%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E8%96%84%E8%82%8C90%E5%90%8E",
     "hot": 764999
    },
    {
     "title": "曝iPhoneDuo折痕区来回滑动有波纹",
     "url": "https://s.weibo.com/weibo?q=%E6%9B%9DiPhoneDuo%E6%8A%98%E7%97%95%E5%8C%BA%E6%9D%A5%E5%9B%9E%E6%BB%91%E5%8A%A8%E6%9C%89%E6%B3%A2%E7%BA%B9",
     "hot": 635501
    },
    {
     "title": "儿童手表新规难破小天才社交壁垒",
     "url": "https://s.weibo.com/weibo?q=%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8%E6%96%B0%E8%A7%84%E9%9A%BE%E7%A0%B4%E5%B0%8F%E5%A4%A9%E6%89%8D%E7%A4%BE%E4%BA%A4%E5%A3%81%E5%9E%92",
     "hot": 613330
    },
    {
     "title": "新鲜牛肉烫10秒到底够不够",
     "url": "https://s.weibo.com/weibo?q=%E6%96%B0%E9%B2%9C%E7%89%9B%E8%82%89%E7%83%AB10%E7%A7%92%E5%88%B0%E5%BA%95%E5%A4%9F%E4%B8%8D%E5%A4%9F",
     "hot": 581782
    },
    {
     "title": "小米全新车型曝光",
     "url": "https://s.weibo.com/weibo?q=%E5%B0%8F%E7%B1%B3%E5%85%A8%E6%96%B0%E8%BD%A6%E5%9E%8B%E6%9B%9D%E5%85%89",
     "hot": 472291
    },
    {
     "title": "维密靠大学生翻身",
     "url": "https://s.weibo.com/weibo?q=%E7%BB%B4%E5%AF%86%E9%9D%A0%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%BF%BB%E8%BA%AB",
     "hot": 464623
    },
    {
     "title": "肖战演唱会周边销售额",
     "url": "https://s.weibo.com/weibo?q=%E8%82%96%E6%88%98%E6%BC%94%E5%94%B1%E4%BC%9A%E5%91%A8%E8%BE%B9%E9%94%80%E5%94%AE%E9%A2%9D",
     "hot": 401109
    },
    {
     "title": "刘恺威黎纪君承认恋情",
     "url": "https://s.weibo.com/weibo?q=%E5%88%98%E6%81%BA%E5%A8%81%E9%BB%8E%E7%BA%AA%E5%90%9B%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85",
     "hot": 400617
    },
    {
     "title": "全裸受检谁给的权力",
     "url": "https://s.weibo.com/weibo?q=%E5%85%A8%E8%A3%B8%E5%8F%97%E6%A3%80%E8%B0%81%E7%BB%99%E7%9A%84%E6%9D%83%E5%8A%9B",
     "hot": 398883
    }
   ]
  },
  "zhihu": {
   "name": "知乎热榜",
   "updateTime": "2026-10-20 17:33",
   "url": "https://www.zhihu.com/hot",
   "data": [
    {
     "title": "中国留学生俄罗斯课堂披旭日旗后道歉且已被遣返，如何评价？他在俄罗斯当地及回国后可能面临哪些实质追责？",
     "url": "https://www.zhihu.com/question/2095439399555285790",
     "hot": ""
    },
    {
     "title": "法国爆发严重暴力骚乱，超50万人上街抗议，马克龙公开谴责，冲突的深层根源是什么？折射出法国怎样的危机？",
     "url": "https://www.zhihu.com/question/2095436236819096015",
     "hot": ""
    },
    {
     "title": "长鑫科技股价跳水，市值跌破3万亿元，前三季度预赚 1300 多亿还推出回购，为什么股价反而大跌？",
     "url": "https://www.zhihu.com/question/2095452033461511103",
     "hot": ""
    },
    {
     "title": "如何看待 00 后小伙自学机械手搓载人飞行滑板，成功飞越长江？这个飞行滑板的技术原理是什么？",
     "url": "https://www.zhihu.com/question/2095632163530077628",
     "hot": ""
    },
    {
     "title": "如何评价DeepSeek V4.1 Flash 1017登顶「史上最差AI模型名称排行榜」?",
     "url": "https://www.zhihu.com/question/2095476625228019430",
     "hot": ""
    },
    {
     "title": "如何看待华为引望加入宁德时代巧克力换电？",
     "url": "https://www.zhihu.com/question/2095629465703523584",
     "hot": ""
    },
    {
     "title": "董明珠称格力技工学校禁止谈恋爱、头发不能太长，你觉得合理吗？这对学生而言是束缚还是保护？",
     "url": "https://www.zhihu.com/question/2095788538184691975",
     "hot": ""
    },
    {
     "title": "如何看待 9 月 BBA 旗下无一车型零售破万？这是否意味着消费者不再单纯认豪华车标？",
     "url": "https://www.zhihu.com/question/2095630667409254223",
     "hot": ""
    },
    {
     "title": "现在 AI 短剧满天飞，怎么没见影视行业人员发声？",
     "url": "https://www.zhihu.com/question/2090228809819862141",
     "hot": ""
    },
    {
     "title": "我妈是1971年出生的，她是中专学历，请问在那个年代中专学历相当于什么水平？",
     "url": "https://www.zhihu.com/question/1981378024705389846",
     "hot": ""
    },
    {
     "title": "小天才手表回应「有意封闭平台利用孩子社交需求」，称能正常添加到联系人，能平息质疑吗？这对孩子影响多大？",
     "url": "https://www.zhihu.com/question/2095810210455445682",
     "hot": ""
    },
    {
     "title": "2026《全球前 2％ 顶尖科学家榜单》出炉，你或者你熟识的人入选了么？",
     "url": "https://www.zhihu.com/question/2091926847034318849",
     "hot": ""
    }
   ]
  },
  "douyin": {
   "name": "抖音热点",
   "updateTime": "2026-10-20 17:33",
   "url": "https://www.douyin.com/hot",
   "data": [
    {
     "title": "美舰冲闯南沙群岛仙宾礁附近海域",
     "url": "https://www.douyin.com/search/%E7%BE%8E%E8%88%B0%E5%86%B2%E9%97%AF%E5%8D%97%E6%B2%99%E7%BE%A4%E5%B2%9B%E4%BB%99%E5%AE%BE%E7%A4%81%E9%99%84%E8%BF%91%E6%B5%B7%E5%9F%9F",
     "hot": 11764717
    },
    {
     "title": "英雄联盟S16瑞士轮首日赛程",
     "url": "https://www.douyin.com/search/%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9FS16%E7%91%9E%E5%A3%AB%E8%BD%AE%E9%A6%96%E6%97%A5%E8%B5%9B%E7%A8%8B",
     "hot": 11450529
    },
    {
     "title": "三季度1.92亿人次出入境",
     "url": "https://www.douyin.com/search/%E4%B8%89%E5%AD%A3%E5%BA%A61.92%E4%BA%BF%E4%BA%BA%E6%AC%A1%E5%87%BA%E5%85%A5%E5%A2%83",
     "hot": 11170187
    },
    {
     "title": "专家谈美日大规模联合军演",
     "url": "https://www.douyin.com/search/%E4%B8%93%E5%AE%B6%E8%B0%88%E7%BE%8E%E6%97%A5%E5%A4%A7%E8%A7%84%E6%A8%A1%E8%81%94%E5%90%88%E5%86%9B%E6%BC%94",
     "hot": 11150231
    },
    {
     "title": "台风蔷琵将进入48小时警戒线",
     "url": "https://www.douyin.com/search/%E5%8F%B0%E9%A3%8E%E8%94%B7%E7%90%B5%E5%B0%86%E8%BF%9B%E5%85%A548%E5%B0%8F%E6%97%B6%E8%AD%A6%E6%88%92%E7%BA%BF",
     "hot": 10547711
    },
    {
     "title": "吴艳妮说只要跑得动就不会退役",
     "url": "https://www.douyin.com/search/%E5%90%B4%E8%89%B3%E5%A6%AE%E8%AF%B4%E5%8F%AA%E8%A6%81%E8%B7%91%E5%BE%97%E5%8A%A8%E5%B0%B1%E4%B8%8D%E4%BC%9A%E9%80%80%E5%BD%B9",
     "hot": 10539317
    },
    {
     "title": "当东北人假装南方人",
     "url": "https://www.douyin.com/search/%E5%BD%93%E4%B8%9C%E5%8C%97%E4%BA%BA%E5%81%87%E8%A3%85%E5%8D%97%E6%96%B9%E4%BA%BA",
     "hot": 9382362
    },
    {
     "title": "我关注的中国设计师都在抖音大秀",
     "url": "https://www.douyin.com/search/%E6%88%91%E5%85%B3%E6%B3%A8%E7%9A%84%E4%B8%AD%E5%9B%BD%E8%AE%BE%E8%AE%A1%E5%B8%88%E9%83%BD%E5%9C%A8%E6%8A%96%E9%9F%B3%E5%A4%A7%E7%A7%80",
     "hot": 9220628
    },
    {
     "title": "披旭日旗中国留学生已被遣返",
     "url": "https://www.douyin.com/search/%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%B7%B2%E8%A2%AB%E9%81%A3%E8%BF%94",
     "hot": 9163328
    },
    {
     "title": "天黑了该我在乐园上场了",
     "url": "https://www.douyin.com/search/%E5%A4%A9%E9%BB%91%E4%BA%86%E8%AF%A5%E6%88%91%E5%9C%A8%E4%B9%90%E5%9B%AD%E4%B8%8A%E5%9C%BA%E4%BA%86",
     "hot": 9135955
    },
    {
     "title": "南部战区回应美舰冲闯中国海域",
     "url": "https://www.douyin.com/search/%E5%8D%97%E9%83%A8%E6%88%98%E5%8C%BA%E5%9B%9E%E5%BA%94%E7%BE%8E%E8%88%B0%E5%86%B2%E9%97%AF%E4%B8%AD%E5%9B%BD%E6%B5%B7%E5%9F%9F",
     "hot": 8965890
    },
    {
     "title": "妲己配音大赛",
     "url": "https://www.douyin.com/search/%E5%A6%B2%E5%B7%B1%E9%85%8D%E9%9F%B3%E5%A4%A7%E8%B5%9B",
     "hot": 8958627
    }
   ]
  },
  "toutiao": {
   "name": "头条热榜",
   "updateTime": "2026-10-19 10:53",
   "url": "https://www.toutiao.com/",
   "data": [
    {
     "title": "没退休就意外离世交的社保怎么办",
     "url": "https://www.toutiao.com/trending/7697347017676439593",
     "hot": 18448107
    },
    {
     "title": "钧正平就中国留学生身披旭日旗发声",
     "url": "https://www.toutiao.com/trending/7697204184608771620",
     "hot": 16692538
    },
    {
     "title": "第五届亚残运开幕",
     "url": "https://www.toutiao.com/article/7697946034852364827",
     "hot": 15104033
    },
    {
     "title": "马克龙谴责法国多地暴力事件",
     "url": "https://www.toutiao.com/trending/7698154320520302118",
     "hot": 13666694
    },
    {
     "title": "前三季度我国GDP同比增长4.6%",
     "url": "https://www.toutiao.com/trending/7698147350853763091",
     "hot": 12366136
    },
    {
     "title": "王毅访问黑山 黑山总理用中文打招呼",
     "url": "https://www.toutiao.com/trending/7697439342582631999",
     "hot": 11189342
    },
    {
     "title": "江苏通报千元近视防控镜批发价仅30元",
     "url": "https://www.toutiao.com/trending/7698156473523637779",
     "hot": 10124536
    },
    {
     "title": "大麦回应“肖战演唱会首排门票25万”",
     "url": "https://www.toutiao.com/trending/7696782550337113643",
     "hot": 9161059
    },
    {
     "title": "日媒民调：高市内阁支持率跌至新低",
     "url": "https://www.toutiao.com/trending/7698049927176340006",
     "hot": 8289269
    },
    {
     "title": "“九国联军”真能锁住台海大门吗",
     "url": "https://www.toutiao.com/trending/7697997709113822763",
     "hot": 7500440
    },
    {
     "title": "梅艳芳骨灰被偷运至东南亚？不实",
     "url": "https://www.toutiao.com/trending/7697439342582664767",
     "hot": 6786679
    },
    {
     "title": "科比23岁女儿首登维密T台大秀",
     "url": "https://www.toutiao.com/trending/7698175129792282643",
     "hot": 6140841
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
   "updateTime": "2026-10-21 01:26",
   "url": "https://www.bilibili.com/v/popular/all/",
   "data": [
    {
     "title": "我得到了，能看到表白率的超能力……",
     "url": "https://www.bilibili.com/video/BV1ALnw6YE4S",
     "hot": 616467
    },
    {
     "title": "《绝区零》菲欧妮EP | 1% Battery Girl 低电量女孩",
     "url": "https://www.bilibili.com/video/BV1SknF6KE5g",
     "hot": 1476949
    },
    {
     "title": "【Codex × Maya】AI辅助三维建模实测！从几何体搭建到材质渲染，完整实操链路演示。该教程同样适配Claude code、Workbuddy等其他智能体",
     "url": "https://www.bilibili.com/video/BV1bxnA6yE5h",
     "hot": 23400
    },
    {
     "title": "爱上纯血世家女孩的混血男孩【AI全民制作人】",
     "url": "https://www.bilibili.com/video/BV1bKnw6zEsV",
     "hot": 249605
    },
    {
     "title": "中文已死：为什么我们越来越不敢好好说话？",
     "url": "https://www.bilibili.com/video/BV1Xdnc6jEbL",
     "hot": 643685
    },
    {
     "title": "PCL出事了？那MC下载和联机，我们先顶上了",
     "url": "https://www.bilibili.com/video/BV1nCnA6AEYB",
     "hot": 149879
    },
    {
     "title": "法国影响力最大的八卦是什么？【神奇组织56】",
     "url": "https://www.bilibili.com/video/BV1Vbnn6iEfG",
     "hot": 1270112
    },
    {
     "title": "《三过车门而不入》",
     "url": "https://www.bilibili.com/video/BV1n7nF6WEco",
     "hot": 683191
    },
    {
     "title": "特厨隋坡|排队超久的网红店？！今天我们来说实话！！",
     "url": "https://www.bilibili.com/video/BV1mCnF6vEYn",
     "hot": 842640
    },
    {
     "title": "财神窦占龙 第12集 宿仇【8月国创】",
     "url": "https://www.bilibili.com/video/BV1UbJ96DEbP",
     "hot": 257983
    },
    {
     "title": "iG出征单曲《仁川共鸣》",
     "url": "https://www.bilibili.com/video/BV1F7nF6WEmD",
     "hot": 736420
    },
    {
     "title": "社交媒体世界大战：泰韩法巴西已加入抗日全球统一战线",
     "url": "https://www.bilibili.com/video/BV1AJnP6BEsa",
     "hot": 309480
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
   "title": "当AI输出的文本，开始自带“水印”",
   "url": "https://finance.sina.com.cn/tech/roll/2026-10-20/doc-inivvhfu0846677.shtml",
   "source": "新浪科技"
  },
  {
   "title": "韩路：汽车之家坑了韩路400万及更多",
   "url": "https://finance.sina.com.cn/tech/roll/2026-10-20/doc-inivuvry0899073.shtml",
   "source": "新浪科技"
  },
  {
   "title": "苹果授权店回应iPhone Duo库存：首销当天的现货只提供给已经预订的顾客",
   "url": "https://finance.sina.com.cn/tech/roll/2026-10-20/doc-inivvnpx6578036.shtml",
   "source": "新浪科技"
  },
  {
   "title": "英伟达官宣新突破：创纪录量子容错计算模拟所需物理比特减少 90%",
   "url": "https://finance.sina.com.cn/tech/digi/2026-10-20/doc-inivvnpx6594288.shtml",
   "source": "新浪科技"
  },
  {
   "title": "57 亿美元赔款还不够，Taction 要求苹果支付 iPhone 与 Apple Watch 专利费至 2035 年",
   "url": "https://finance.sina.com.cn/tech/digi/2026-10-20/doc-inivvnpt7593786.shtml",
   "source": "新浪科技"
  },
  {
   "title": "SpaceX财报前瞻：华尔街押注首次季度盈利，即便大超预期也不意味着股价大涨",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-10-20/doc-inivwuic7788695.shtml",
   "source": "新浪科技"
  },
  {
   "title": "陈靖出席2026可持续全球领导者大会并致辞",
   "url": "https://finance.sina.com.cn/hy/hyjz/2026-10-20/doc-inivwuii6458787.shtml",
   "source": "新浪科技"
  },
  {
   "title": "2026可持续全球领导者大会开幕：诺奖、图灵奖得主齐现身，集结全球300余位顶尖嘉宾共议绿色发展",
   "url": "https://finance.sina.com.cn/hy/hyjz/2026-10-20/doc-inivwuic7746703.shtml",
   "source": "新浪科技"
  },
  {
   "title": "跨界共话可持续未来，2026可持续全球领导者大会今日在沪开幕",
   "url": "https://finance.sina.com.cn/hy/hyjz/2026-10-20/doc-inivwuia0897852.shtml",
   "source": "新浪科技"
  },
  {
   "title": "东方航空阎非：以绿色飞行描绘美好出行新图景",
   "url": "https://finance.sina.com.cn/hy/hyjz/2026-10-20/doc-inivwpzm6519954.shtml",
   "source": "新浪科技"
  },
  {
   "title": "新央企国家数据集团成立，它将干这些事",
   "url": "https://finance.sina.com.cn/roll/2026-10-20/doc-inivwpzm6482518.shtml",
   "source": "新浪科技"
  },
  {
   "title": "安踏集团：坚持共生共赢，构建可持续发展的全球竞争力",
   "url": "https://finance.sina.com.cn/hy/hyjz/2026-10-20/doc-inivwpzf7684146.shtml",
   "source": "新浪科技"
  }
 ]
};
if (typeof window !== 'undefined') window.WB_DATA = WB_DATA;
