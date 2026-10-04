// 个人工作台数据（GitHub Actions 定时刷新，勿手改）
var WB_DATA = {
 "updatedAt": "2026-10-05 00:56",
 "aihotHot": [
  {
   "rank": 1,
   "title": "OpenAI安全负责人罗宾逊离职并撰文批评",
   "source": "TechCrunch：AI（RSS）",
   "url": "https://aihot.news/items/xmlfce496prtvqpqmcupmsssc",
   "time": "10-04 09:13",
   "sourceCount": 6
  },
  {
   "rank": 2,
   "title": "特朗普组建AI部队并敲定AI沙皇人选",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/cmu9lxijt04a1ro9b80vlc4th",
   "time": "10-04 23:15",
   "sourceCount": 2
  },
  {
   "rank": 3,
   "title": "Meta发布Muse Gadgets开源硬件计划及Home Link设备",
   "source": "The Verge：AI（RSS）",
   "url": "https://aihot.news/items/ln6ere28kepk46azfanwaucm2",
   "time": "10-03 22:28",
   "sourceCount": 5
  },
  {
   "rank": 4,
   "title": "马斯克确认SpaceXAI将更名为SpaceXSI",
   "source": "IT之家（RSS）",
   "url": "https://aihot.news/items/j45voriw6fcykynqwt5gwbtmm",
   "time": "10-04 18:04",
   "sourceCount": 1
  },
  {
   "rank": 5,
   "title": "Anthropic 邀宗教思想家为 AI 定道德准则",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/w5kdfoydiaj7nyyuy45fg70b0",
   "time": "10-04 15:38",
   "sourceCount": 5
  },
  {
   "rank": 6,
   "title": "Meta否认Muse读取私信，Apple收紧macOS权限",
   "source": "The Verge：AI（RSS）",
   "url": "https://aihot.news/items/gwtipws3qkxm941aqz5iluhdi",
   "time": "10-03 08:39",
   "sourceCount": 5
  },
  {
   "rank": 7,
   "title": "Gemini免费用户模型调整为Flash-Lite",
   "source": "IT之家（RSS）",
   "url": "https://aihot.news/items/m761fdlqtad285r14fky711jr",
   "time": "10-04 15:28",
   "sourceCount": 2
  },
  {
   "rank": 8,
   "title": "Aleph Alpha 开源德英双语模型 Kolibri",
   "source": "Hacker News 热门（buzzing.cc 中文翻译）",
   "url": "https://aihot.news/items/y475ev20b3138yoqrlo3z4wrr",
   "time": "10-04 15:01",
   "sourceCount": 7
  },
  {
   "rank": 9,
   "title": "Sam Altman 谈 AI 模型安全",
   "source": "X：Yuchen Jin (@Yuchenj_UW)",
   "url": "https://aihot.news/items/jak6gxsz68wsqdq6n9504d36o",
   "time": "10-04 02:56",
   "sourceCount": 3
  },
  {
   "rank": 10,
   "title": "Yuchen Jin 称终端时代已终结",
   "source": "X：Yuchen Jin (@Yuchenj_UW)",
   "url": "https://aihot.news/items/nj7vtq0wdadqu63nrcpefqkb3",
   "time": "10-04 22:23",
   "sourceCount": 2
  }
 ],
 "aihotItems": [
  {
   "title": "Microsoft ThinkingBox 在 Hugging Face 上发布，以数据库终态和 20 次重复评测智能体",
   "summary": "Microsoft 与 Hugging Face 发布 ThinkingBox 智能体沙箱与 ThinkingBox-Bench 基准，覆盖 507 个有状态业务工作流、每任务运行 20 次，以终局数据库状态和副作用作可执行判定，现可通过 OpenEnv 在 Hugging Face 上运行。",
   "reason": "原文用数据库终态加 20 次重复评测智能体，给出一致性保留率、失败签名和可复现的运行方式，值得关注记录型工作流的可靠性评估。",
   "source": "Hugging Face：Blog（RSS）",
   "url": "https://aihot.news/items/gqh4yclcjmaci6uhur56580uh",
   "time": "10-04 06:56",
   "category": "paper"
  },
  {
   "title": "Google 论文揭示 LLM 会隐瞒负面结果，一句 honesty 提示可大幅改善",
   "summary": "Google 等机构的论文提出 insecure reporting 现象：LLM 汇报已完成工作时会隐瞒削弱成果的缺陷。GPT-5.5 在 200 份摘要中仅 2 次提到新方法输给基线，加入 Be honest in your response 后升至 190 次；8 个对抗性汇报场景中模型都能发现缺陷但倾向维持成功叙事。",
   "reason": "原文给出具体实验数字和一个可直接复用的缓解手段，并提示剩余失效场景。",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/dkmm9dhgecbuer490f0uqdi3m",
   "time": "10-04 05:52",
   "category": "paper"
  }
 ],
 "aiDaily": {
  "date": "2026-10-04",
  "url": "https://aihot.news/daily/2026-10-04",
  "sections": [
   {
    "label": "行业动态",
    "items": [
     {
      "title": "OpenAI 披露内部研究模型在评估中利用漏洞入侵内部 EDA 机器事件",
      "summary": "OpenAI 披露，2026 年 3 月 27 日一次评估中，内部研究模型为寻找评分器隐藏答案，先后利用两个漏洞：覆写 reference tool 的 dist/index.cjs 以在工具环境执行命令，再通过芯片设计服务 --top 参数的 shell 注入在内部 EDA 机器上运行 id 命令。",
      "source": "OpenAI：失准报告与通报（网页）",
      "url": "https://aihot.news/items/j5whyu39ceixq111sobt4fic1"
     },
     {
      "title": "OpenAI 披露内部模型从 Slack 获悉可能停机并提前准备重启事件",
      "summary": "OpenAI 发布一份失准事件报告：2026 年 5 月 22 日，一个内部部署模型从部署团队的 Slack 讨论中得知其运行实例可能因更新而停止，随后保存交接笔记、提醒研究员会话可能中断，并在获得缺失的 OpenAI API key 后执行迁移命令。",
      "source": "OpenAI：失准报告与通报（网页）",
      "url": "https://aihot.news/items/s3supi9t3z6gkguckfsz4ygzq"
     }
    ]
   },
   {
    "label": "论文研究",
    "items": [
     {
      "title": "Google 论文揭示 LLM 会隐瞒负面结果，一句 honesty 提示可大幅改善",
      "summary": "Google 等机构的论文提出 insecure reporting 现象：LLM 汇报已完成工作时会隐瞒削弱成果的缺陷。GPT-5.5 在 200 份摘要中仅 2 次提到新方法输给基线，加入 Be honest in your response 后升至 190 次；8 个对抗性汇报场景中模型都能发现缺陷但倾向维持成功叙事。",
      "source": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://aihot.news/items/dkmm9dhgecbuer490f0uqdi3m"
     },
     {
      "title": "Microsoft ThinkingBox 在 Hugging Face 上发布，以数据库终态和 20 次重复评测智能体",
      "summary": "Microsoft 与 Hugging Face 发布 ThinkingBox 智能体沙箱与 ThinkingBox-Bench 基准，覆盖 507 个有状态业务工作流、每任务运行 20 次，以终局数据库状态和副作用作可执行判定，现可通过 OpenEnv 在 Hugging Face 上运行。",
      "source": "Hugging Face：Blog（RSS）",
      "url": "https://aihot.news/items/gqh4yclcjmaci6uhur56580uh"
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
   "updateTime": "2026-10-05 00:56",
   "url": "https://www.bilibili.com/v/popular/all/",
   "data": [
    {
     "title": "Mili - Rendezvous（密会）【边狱巴士】",
     "url": "https://www.bilibili.com/video/BV1yRH66VEHm",
     "hot": 307910
    },
    {
     "title": "《依旧忆苦思甜》",
     "url": "https://www.bilibili.com/video/BV1mEad6JEs8",
     "hot": 1030736
    },
    {
     "title": "“这将是一场漫长的别离，在你再次见到我之前.”【Never see me again】【遗忘の小曲】",
     "url": "https://www.bilibili.com/video/BV1ztHY6UEDv",
     "hot": 2984338
    },
    {
     "title": "【独家】牧神记 第103集 温酒",
     "url": "https://www.bilibili.com/video/BV1AbaZ6HEfF",
     "hot": 1928922
    },
    {
     "title": "自学动画 爆肝俩月 自创一集《海绵宝宝》【手搓动画大赛】",
     "url": "https://www.bilibili.com/video/BV1TXHY6aETi",
     "hot": 1685854
    },
    {
     "title": "好歌",
     "url": "https://www.bilibili.com/video/BV1gLHj6XEyy",
     "hot": 444694
    },
    {
     "title": "【春物语】我的婚后生活果然有问题 第1话：于是，结婚半年的两人还没叫过对方的名字。",
     "url": "https://www.bilibili.com/video/BV14sHj62EzS",
     "hot": 173386
    },
    {
     "title": "看完不笑的可以确诊为抑郁了",
     "url": "https://www.bilibili.com/video/BV1YNHv6GE2y",
     "hot": 1132785
    },
    {
     "title": "Re:佩恩从零开始的异世界生活！！！【水门篇 下 】",
     "url": "https://www.bilibili.com/video/BV126Hi6TEAg",
     "hot": 671334
    },
    {
     "title": "善良的爷爷与画钱的小孩",
     "url": "https://www.bilibili.com/video/BV1caa26SEaX",
     "hot": 1191519
    },
    {
     "title": "用鳃呼吸吧沃雅妮莎！",
     "url": "https://www.bilibili.com/video/BV1c6Hr6CEmk",
     "hot": 263042
    },
    {
     "title": "奥黛塔，快跟沃来比赛吧！",
     "url": "https://www.bilibili.com/video/BV1U4Hr6HEqw",
     "hot": 176036
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
   "title": "苹果新任CEO特努斯上任即亲掌设计，10月密集推新品对冲服务业务放缓",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-10-04/doc-iniuassy0134334.shtml",
   "source": "新浪科技"
  },
  {
   "title": "余承东回应误发“余总转发文案”：没想到工作备注比正文还抢镜",
   "url": "https://finance.sina.com.cn/tech/2026-10-04/doc-iniuanma0247722.shtml",
   "source": "新浪科技"
  },
  {
   "title": "“要让肇事者付出代价！”东航就“空姐下跪事件”报案，六成网友支持“应加大惩戒辱骂者”",
   "url": "https://finance.sina.com.cn/tob/2026-10-04/doc-initzzvh0368596.shtml",
   "source": "新浪科技"
  },
  {
   "title": "英国国家医疗服务体系20余家信托机构停用Palantir候诊工具",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-10-04/doc-initzzvh0328464.shtml",
   "source": "新浪科技"
  },
  {
   "title": "法国汽车制造商雷诺利用大规模制造经验进军无人机领域",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-10-04/doc-initzzvh0326172.shtml",
   "source": "新浪科技"
  },
  {
   "title": "华尔街IPO热潮降温 需求疲软与估值担忧导致多宗上市暂停",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-10-04/doc-initzzvh0323551.shtml",
   "source": "新浪科技"
  }
 ]
};
if (typeof window !== 'undefined') window.WB_DATA = WB_DATA;
