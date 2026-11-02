// 个人工作台数据（GitHub Actions 定时刷新，勿手改）
var WB_DATA = {
 "updatedAt": "2026-11-02 11:56",
 "aihotHot": [
  {
   "rank": 1,
   "title": "DeepSeek开源Super-agent双层架构原型",
   "source": "IT之家·人工智能",
   "url": "https://aihot.news/items/oig5qkyz9fzkdpchgk7l2cmm3",
   "time": "11-02 00:05",
   "sourceCount": 4
  },
  {
   "rank": 2,
   "title": "Karpathy用Claude从HN评论筛出6454个视频",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/k02hyr58q45b0ip29mm5bfxkf",
   "time": "11-02 10:29",
   "sourceCount": 3
  },
  {
   "rank": 3,
   "title": "OpenAI 12月起ChatGPT与Codex共享Token额度",
   "source": "公众号：数字生命卡兹克",
   "url": "https://aihot.news/items/f6dxzur6d4pwjdhvm1x6m5rfp",
   "time": "11-01 17:51",
   "sourceCount": 4
  },
  {
   "rank": 4,
   "title": "OpenAI 融资目标缩至约 200 亿美元，估值约 1.25 万亿",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/qexf6est4uitwd71p3ugedxo6",
   "time": "11-01 00:12",
   "sourceCount": 4
  },
  {
   "rank": 5,
   "title": "苹果 Apple 智能随 iOS 27.3 入华，接入阿里千问",
   "source": "IT之家·人工智能",
   "url": "https://aihot.news/items/lnc48gxlu5nv0he3mw57lzmc6",
   "time": "11-01 23:05",
   "sourceCount": 1
  },
  {
   "rank": 6,
   "title": "OpenAI中期选举后启动公关攻势并拟更名数据中心",
   "source": "TechCrunch：AI（RSS）",
   "url": "https://aihot.news/items/apioobuo772gw6rynva9a573j",
   "time": "11-02 06:58",
   "sourceCount": 3
  },
  {
   "rank": 7,
   "title": "Anthropic 限制 Claude Code 复刻现有游戏",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/k0xci1tn1nue1lop6rwik8l8v",
   "time": "10-31 14:26",
   "sourceCount": 1
  },
  {
   "rank": 8,
   "title": "四家AI公司支持robots.txt统一退出信号",
   "source": "IT之家·人工智能",
   "url": "https://aihot.news/items/u0icl9u1j0rleehslmzq89pe5",
   "time": "11-01 22:19",
   "sourceCount": 1
  },
  {
   "rank": 9,
   "title": "Suleyman 发文反对构建有意识的超级智能",
   "source": "X：Mustafa Suleyman（Microsoft AI CEO） (@mustafasuleyman)",
   "url": "https://aihot.news/items/ivv9w3bhrzbnnakdcrhhzc34h",
   "time": "11-02 07:36",
   "sourceCount": 2
  },
  {
   "rank": 10,
   "title": "xAI将于11月7日为Grok文本添加隐形水印",
   "source": "IT之家·人工智能",
   "url": "https://aihot.news/items/lwa87gofh1a81othd2f2gamnb",
   "time": "11-01 14:11",
   "sourceCount": 1
  }
 ],
 "aihotItems": [
  {
   "title": "数字生命卡兹克分享折腾一年的Agent自动化系统架构",
   "summary": "自媒体作者卡兹克分享自己搭建近一年的Agent自动化系统，核心是把任务起点从人身上移开，由事件触发Agent工作。系统分为自动化中台、Agent执行、CI中台和飞书决策四层：中台用rules.json统一管理事件触发和Agent调度，本地MacMini跑Agent任务，自建CI中台完成审查、检查、合并、发布、核实五步，只在删数据、花钱、改方向等关键决策时通过飞书卡片找作者拍板。",
   "reason": "作者把自己一年搭建的Agent自动化架构拆成事件中台、执行、CI和飞书决策四层，给出可复用的规则与流程细节。",
   "source": "公众号：数字生命卡兹克",
   "url": "https://aihot.news/items/dzwfvd9xp6v4qaj6olxezpier",
   "time": "11-02 08:19",
   "category": "tip"
  }
 ],
 "aiDaily": {
  "date": "2026-11-02",
  "url": "https://aihot.news/daily/2026-11-02",
  "sections": [
   {
    "label": "行业动态",
    "items": [
     {
      "title": "OpenAI 12月起将ChatGPT与Codex合并为统一Token额度",
      "summary": "作者引述OpenAI凌晨更新的帮助文档称，从12月开始Plus和Pro用户的ChatGPT聊天与Codex用量将合并为同一Token额度，仅Instant聊天不受影响。作者回顾此前按条数计费的历史、一个月内Codex Pro额度先降后恢复的运营反复，以及社区在GitHub上提issue抗议的反应，认为合并与IPO预期下的算力成本压力有关。",
      "source": "公众号：数字生命卡兹克",
      "url": "https://aihot.news/items/f6dxzur6d4pwjdhvm1x6m5rfp"
     }
    ]
   },
   {
    "label": "技巧与观点",
    "items": [
     {
      "title": "OpenRouter 教程：用 Responses API 构建可在 Linux 沙箱验证 bug 的 AI 代码审查脚本",
      "summary": "OpenRouter 发布教程，介绍一个 233 行、仅用标准库的 review.py，通过 Responses API 组合 Files API、Shell 沙箱工具和 Apply Patch 工具，把变更文件上传到托管 Linux 沙箱，让模型实际运行检查确认 bug 并返回 V4A 补丁。",
      "source": "OpenRouter：Announcements（RSS）",
      "url": "https://aihot.news/items/yww15c701iat30p8ttjf029ij"
     },
     {
      "title": "Claude Code 技巧：任务变难时输入 ultrathink 提升当前回合推理努力",
      "summary": "Addy Osmani 分享 Claude Code 技巧：当任务比预期更难时，在 Claude 工作期间输入 ultrathink，可提升该回合剩余部分的推理努力，该功能适用于最新版本的终端。他引用 @dmwlff 的帖子，其中提到 ultrathink 已回归 Claude Code CLI，此前因显得怪异且可能令人困惑曾被关闭。",
      "source": "X：Addy Osmani (@addyosmani)",
      "url": "https://aihot.news/items/mhw3rtr5o13p5777y7el9tczk"
     }
    ]
   }
  ]
 },
 "hotLists": {
  "weibo": {
   "name": "微博热搜",
   "updateTime": "2026-11-02 11:57",
   "url": "https://s.weibo.com/top/summary",
   "data": [
    {
     "title": "微信转账加一个动作",
     "url": "https://s.weibo.com/weibo?q=%E5%BE%AE%E4%BF%A1%E8%BD%AC%E8%B4%A6%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%8A%A8%E4%BD%9C",
     "hot": 1367454
    },
    {
     "title": "胡歌自曝已戒烟很久了",
     "url": "https://s.weibo.com/weibo?q=%E8%83%A1%E6%AD%8C%E8%87%AA%E6%9B%9D%E5%B7%B2%E6%88%92%E7%83%9F%E5%BE%88%E4%B9%85%E4%BA%86",
     "hot": 1076433
    },
    {
     "title": "2026年世界互联网大会乌镇峰会",
     "url": "https://s.weibo.com/weibo?q=2026%E5%B9%B4%E4%B8%96%E7%95%8C%E4%BA%92%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A%E4%B9%8C%E9%95%87%E5%B3%B0%E4%BC%9A",
     "hot": 685780
    },
    {
     "title": "罗技广告再被指侮辱用户",
     "url": "https://s.weibo.com/weibo?q=%E7%BD%97%E6%8A%80%E5%B9%BF%E5%91%8A%E5%86%8D%E8%A2%AB%E6%8C%87%E4%BE%AE%E8%BE%B1%E7%94%A8%E6%88%B7",
     "hot": 534718
    },
    {
     "title": "保时捷女销冠奖励是芬兰免费旅游",
     "url": "https://s.weibo.com/weibo?q=%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%A5%B3%E9%94%80%E5%86%A0%E5%A5%96%E5%8A%B1%E6%98%AF%E8%8A%AC%E5%85%B0%E5%85%8D%E8%B4%B9%E6%97%85%E6%B8%B8",
     "hot": 427129
    },
    {
     "title": "影之刃零销量破400万",
     "url": "https://s.weibo.com/weibo?q=%E5%BD%B1%E4%B9%8B%E5%88%83%E9%9B%B6%E9%94%80%E9%87%8F%E7%A0%B4400%E4%B8%87",
     "hot": 426085
    },
    {
     "title": "美公务机坠毁前1分钟下降超8000米",
     "url": "https://s.weibo.com/weibo?q=%E7%BE%8E%E5%85%AC%E5%8A%A1%E6%9C%BA%E5%9D%A0%E6%AF%81%E5%89%8D1%E5%88%86%E9%92%9F%E4%B8%8B%E9%99%8D%E8%B6%858000%E7%B1%B3",
     "hot": 420432
    },
    {
     "title": "电诈园区从柬埔寨转移到马达加斯加",
     "url": "https://s.weibo.com/weibo?q=%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E4%BB%8E%E6%9F%AC%E5%9F%94%E5%AF%A8%E8%BD%AC%E7%A7%BB%E5%88%B0%E9%A9%AC%E8%BE%BE%E5%8A%A0%E6%96%AF%E5%8A%A0",
     "hot": 411266
    },
    {
     "title": "曝马天宇为了张萌跟节目外的人吵架",
     "url": "https://s.weibo.com/weibo?q=%E6%9B%9D%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%BA%E4%BA%86%E5%BC%A0%E8%90%8C%E8%B7%9F%E8%8A%82%E7%9B%AE%E5%A4%96%E7%9A%84%E4%BA%BA%E5%90%B5%E6%9E%B6",
     "hot": 410489
    },
    {
     "title": "AI短剧 影视行业",
     "url": "https://s.weibo.com/weibo?q=AI%E7%9F%AD%E5%89%A7%20%E5%BD%B1%E8%A7%86%E8%A1%8C%E4%B8%9A",
     "hot": 401691
    },
    {
     "title": "中国女生借卫生巾震撼外国网友",
     "url": "https://s.weibo.com/weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%80%9F%E5%8D%AB%E7%94%9F%E5%B7%BE%E9%9C%87%E6%92%BC%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B",
     "hot": 399645
    },
    {
     "title": "林一跟刘亦菲打招呼后的反应",
     "url": "https://s.weibo.com/weibo?q=%E6%9E%97%E4%B8%80%E8%B7%9F%E5%88%98%E4%BA%A6%E8%8F%B2%E6%89%93%E6%8B%9B%E5%91%BC%E5%90%8E%E7%9A%84%E5%8F%8D%E5%BA%94",
     "hot": 392728
    }
   ]
  },
  "zhihu": {
   "name": "知乎热榜",
   "updateTime": "2026-11-02 11:57",
   "url": "https://www.zhihu.com/hot",
   "data": [
    {
     "title": "为何AI短剧好像放弃了清宫戏，而更倾向于唐/宋/架空朝代？跟观众偏好、技术、选题、价值观有啥关系吗？",
     "url": "https://www.zhihu.com/question/2100281204884731770",
     "hot": ""
    },
    {
     "title": "《影之刃零》能复刻《黑神话：悟空》的千万级销量神话吗？",
     "url": "https://www.zhihu.com/question/2098861445219985178",
     "hot": ""
    },
    {
     "title": "中国首次载人登月时，航天员走出舱门后的第一句话适合说什么？",
     "url": "https://www.zhihu.com/question/2099962739854669782",
     "hot": ""
    },
    {
     "title": "央行、金融监管总局、证监会召开座谈会，研究推动支持资本市场工具使用，这次含金量和9.24比能到几成？",
     "url": "https://www.zhihu.com/question/2100255430828103026",
     "hot": ""
    },
    {
     "title": "庆功宴上，领导表扬你一句后夹起一块鱼给你，说“鱼是好鱼，就是刺多”，你该如何高情商地回答？",
     "url": "https://www.zhihu.com/question/2099783520373756743",
     "hot": ""
    },
    {
     "title": "热播剧《小城良方》中用甲硝唑磨粉吸进鼻子治鼻炎被质疑，甲硝唑粉真的能治鼻炎吗？可能会有哪些风险？",
     "url": "https://www.zhihu.com/question/2099543121717454405",
     "hot": ""
    },
    {
     "title": "柬埔寨电诈园区转到非洲，主要从事网恋、加密货币及虚假投资诈骗，为什么会转移地点？海外出行需要注意什么？",
     "url": "https://www.zhihu.com/question/2100488722936328450",
     "hot": ""
    },
    {
     "title": "《后会友期》的四对旧友中，哪对之间的矛盾是更可能化解的？哪对最可能不和好？他们后续关系可能如何发展？",
     "url": "https://www.zhihu.com/question/2098043137100703411",
     "hot": ""
    },
    {
     "title": "岳不群是一开始就是坏人还是中途变坏？",
     "url": "https://www.zhihu.com/question/597388955",
     "hot": ""
    },
    {
     "title": "如果给正在秋招的应届生写一封信，但这封信里「不许出现任何建议」，你会怎么写？",
     "url": "https://www.zhihu.com/question/2096976861461063626",
     "hot": ""
    },
    {
     "title": "法定节假日增至 13 天并优化调休，将对公众生活与休假体验带来哪些改变？",
     "url": "https://www.zhihu.com/question/2099697728552952157",
     "hot": ""
    },
    {
     "title": "孩子主动和我说，不想拿第一名，只想做中等舒服的人，我该怎么办？",
     "url": "https://www.zhihu.com/question/2098060428395991630",
     "hot": ""
    }
   ]
  },
  "douyin": {
   "name": "抖音热点",
   "updateTime": "2026-11-02 11:57",
   "url": "https://www.douyin.com/hot",
   "data": [
    {
     "title": "央行证监会将召开座谈会",
     "url": "https://www.douyin.com/search/%E5%A4%AE%E8%A1%8C%E8%AF%81%E7%9B%91%E4%BC%9A%E5%B0%86%E5%8F%AC%E5%BC%80%E5%BA%A7%E8%B0%88%E4%BC%9A",
     "hot": 12107003
    },
    {
     "title": "请大家选出最适合我的发型",
     "url": "https://www.douyin.com/search/%E8%AF%B7%E5%A4%A7%E5%AE%B6%E9%80%89%E5%87%BA%E6%9C%80%E9%80%82%E5%90%88%E6%88%91%E7%9A%84%E5%8F%91%E5%9E%8B",
     "hot": 11749288
    },
    {
     "title": "产业集群有多硬核",
     "url": "https://www.douyin.com/search/%E4%BA%A7%E4%B8%9A%E9%9B%86%E7%BE%A4%E6%9C%89%E5%A4%9A%E7%A1%AC%E6%A0%B8",
     "hot": 11608954
    },
    {
     "title": "中国U17女足1:2巴西",
     "url": "https://www.douyin.com/search/%E4%B8%AD%E5%9B%BDU17%E5%A5%B3%E8%B6%B31%3A2%E5%B7%B4%E8%A5%BF",
     "hot": 11279069
    },
    {
     "title": "孙颖莎夺WTT蒙彼利埃站冠军",
     "url": "https://www.douyin.com/search/%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%BAWTT%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E7%AB%99%E5%86%A0%E5%86%9B",
     "hot": 10561147
    },
    {
     "title": "即梦首个剧本模型上线",
     "url": "https://www.douyin.com/search/%E5%8D%B3%E6%A2%A6%E9%A6%96%E4%B8%AA%E5%89%A7%E6%9C%AC%E6%A8%A1%E5%9E%8B%E4%B8%8A%E7%BA%BF",
     "hot": 10437325
    },
    {
     "title": "首届CMG世界机器人登泰山大赛",
     "url": "https://www.douyin.com/search/%E9%A6%96%E5%B1%8ACMG%E4%B8%96%E7%95%8C%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BB%E6%B3%B0%E5%B1%B1%E5%A4%A7%E8%B5%9B",
     "hot": 9201592
    },
    {
     "title": "阿森纳1:0利物浦",
     "url": "https://www.douyin.com/search/%E9%98%BF%E6%A3%AE%E7%BA%B31%3A0%E5%88%A9%E7%89%A9%E6%B5%A6",
     "hot": 9131267
    },
    {
     "title": "美公务机坠毁致9死",
     "url": "https://www.douyin.com/search/%E7%BE%8E%E5%85%AC%E5%8A%A1%E6%9C%BA%E5%9D%A0%E6%AF%81%E8%87%B49%E6%AD%BB",
     "hot": 9125477
    },
    {
     "title": "将有2名中国人登陆月球",
     "url": "https://www.douyin.com/search/%E5%B0%86%E6%9C%892%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%99%BB%E9%99%86%E6%9C%88%E7%90%83",
     "hot": 9118439
    },
    {
     "title": "杨瀚森工作室回应执行合同",
     "url": "https://www.douyin.com/search/%E6%9D%A8%E7%80%9A%E6%A3%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%9B%9E%E5%BA%94%E6%89%A7%E8%A1%8C%E5%90%88%E5%90%8C",
     "hot": 9111800
    },
    {
     "title": "斯诺克国锦赛怀特2:6不敌塞尔比",
     "url": "https://www.douyin.com/search/%E6%96%AF%E8%AF%BA%E5%85%8B%E5%9B%BD%E9%94%A6%E8%B5%9B%E6%80%80%E7%89%B92%3A6%E4%B8%8D%E6%95%8C%E5%A1%9E%E5%B0%94%E6%AF%94",
     "hot": 9087998
    }
   ]
  },
  "toutiao": {
   "name": "头条热榜",
   "updateTime": "2026-10-25 00:10",
   "url": "https://www.toutiao.com/",
   "data": [
    {
     "title": "乌鸦喝水不扔石子了直接找人帮忙",
     "url": "https://www.toutiao.com/trending/7699836402422464521",
     "hot": 13947310
    },
    {
     "title": "金正恩访问丹东 王沪宁陪同",
     "url": "https://www.toutiao.com/trending/7700187033473679398",
     "hot": 12620048
    },
    {
     "title": "子弟兵为西藏震区受灾群众煮上热饭",
     "url": "https://www.toutiao.com/article/7699835046269600266",
     "hot": 11419092
    },
    {
     "title": "美解密UFO档案：黑三角3秒飞2.4公里",
     "url": "https://www.toutiao.com/trending/7699919329604796426",
     "hot": 10332421
    },
    {
     "title": "菲两架军机空中相撞画面曝光",
     "url": "https://www.toutiao.com/trending/7699853418193993778",
     "hot": 9349161
    },
    {
     "title": "菲防长叫嚣“战争行为”恐吓中国",
     "url": "https://www.toutiao.com/trending/7699081979290976299",
     "hot": 8459471
    },
    {
     "title": "博主：预计下周汽油调价",
     "url": "https://www.toutiao.com/trending/7700229461580451347",
     "hot": 7654446
    },
    {
     "title": "金正恩向抗美援朝纪念塔敬献花篮",
     "url": "https://www.toutiao.com/trending/7700197835144236571",
     "hot": 6926029
    },
    {
     "title": "“苏超”决赛对阵出炉",
     "url": "https://www.toutiao.com/trending/7700230696404520467",
     "hot": 6266930
    },
    {
     "title": "西藏震区小学墙体裂缝比拳头还大",
     "url": "https://www.toutiao.com/trending/7699554624717586482",
     "hot": 5670553
    },
    {
     "title": "李冰冰任泉在清华被偶遇",
     "url": "https://www.toutiao.com/trending/7700219143803076651",
     "hot": 5130928
    },
    {
     "title": "四价流感疫苗消失了？真相来了",
     "url": "https://www.toutiao.com/trending/7700018293196963883",
     "hot": 4642656
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
   "updateTime": "2026-11-02 11:57",
   "url": "https://www.bilibili.com/v/popular/all/",
   "data": [
    {
     "title": "是该让爸妈兑现催生时的承诺了",
     "url": "https://www.bilibili.com/video/BV1M5xz64EFq",
     "hot": 2491772
    },
    {
     "title": "《三角洲行动》新干员故事短片：维罗妮卡·卡尔多佐—代号野火",
     "url": "https://www.bilibili.com/video/BV1vRxe69EeZ",
     "hot": 1153973
    },
    {
     "title": "BLG八强结算珍贵录像《朝你韩华捏一把》",
     "url": "https://www.bilibili.com/video/BV1PFx46EEWs",
     "hot": 553741
    },
    {
     "title": "【独家】牧神记 第107集 上苍",
     "url": "https://www.bilibili.com/video/BV1QMxz6hEV5",
     "hot": 2185006
    },
    {
     "title": "她拽住了全城的人，可谁来拽住她？【反乌托邦】",
     "url": "https://www.bilibili.com/video/BV15UxC6SEiR",
     "hot": 514772
    },
    {
     "title": "欢迎收看09年高中生学到电脑关机的一天",
     "url": "https://www.bilibili.com/video/BV13Fxv6nEqS",
     "hot": 1699309
    },
    {
     "title": "大肥鱼适合做女朋友吗？（2）",
     "url": "https://www.bilibili.com/video/BV1y5xW63EVq",
     "hot": 780749
    },
    {
     "title": "韩网炸了！BLG淘汰HLE送全队十六强，韩国人怎么评价韩华突然回家？",
     "url": "https://www.bilibili.com/video/BV1V4xb6BEzN",
     "hot": 306579
    },
    {
     "title": "重大发现！故宫太和殿的天花板上竟藏了颗百年前的“监控”！",
     "url": "https://www.bilibili.com/video/BV1jTxC6mExW",
     "hot": 1058175
    },
    {
     "title": "新三国up锐评楚汉传奇25：极致的双标，癫疯的享受",
     "url": "https://www.bilibili.com/video/BV1EYxt6yEu8",
     "hot": 75702
    },
    {
     "title": "这！绝对不是儿童餐！",
     "url": "https://www.bilibili.com/video/BV1hBxJ6uEcy",
     "hot": 860338
    },
    {
     "title": "⚡️⚡️⚡️猫咖倒闭，救救我们⚡️⚡️⚡️",
     "url": "https://www.bilibili.com/video/BV1rJxG6ME5x",
     "hot": 275057
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
   "title": "刚刚，OpenAI新模型GPT-6.2 Astra曝光！",
   "url": "https://finance.sina.com.cn/roll/2026-11-02/doc-inixhwzc2374756.shtml",
   "source": "新浪科技"
  },
  {
   "title": "一颗智驾芯片的“反向诞生”",
   "url": "https://finance.sina.com.cn/roll/2026-11-02/doc-inixhwzc2399787.shtml",
   "source": "新浪科技"
  },
  {
   "title": "大众+小鹏，结果变小众了？",
   "url": "https://finance.sina.com.cn/tech/discovery/2026-11-02/doc-inixhhcm2676992.shtml",
   "source": "新浪科技"
  },
  {
   "title": "激增1400倍的Token背后，中国大模型正在悄悄改变什么？",
   "url": "https://finance.sina.com.cn/roll/2026-11-02/doc-inixhwzc2417371.shtml",
   "source": "新浪科技"
  },
  {
   "title": "朱帅：全球AI投资逻辑迎来新变化",
   "url": "https://finance.sina.com.cn/jjxw/2026-11-02/doc-inixhwzk3073229.shtml",
   "source": "新浪科技"
  },
  {
   "title": "ChatGPT无限爽聊倒计时！12月起聊天、Codex共用额度，Plus亏麻了",
   "url": "https://finance.sina.com.cn/tech/roll/2026-11-02/doc-inixhwzh7318293.shtml",
   "source": "新浪科技"
  },
  {
   "title": "赛力斯10月销量同比腰斩，第三季度营收同比下降41.66%",
   "url": "https://finance.sina.com.cn/tech/shenji/2026-11-02/doc-inixiira7224196.shtml",
   "source": "新浪科技"
  },
  {
   "title": "李佳琦直播间今晚首次开卖Token，千问办公CEO陈宇森将做客直播间",
   "url": "https://finance.sina.com.cn/tech/shenji/2026-11-02/doc-inixiiqx2279723.shtml",
   "source": "新浪科技"
  },
  {
   "title": "几张照片就能搭建虚拟训练场，全新机器人世界模型Mundo来了！",
   "url": "https://finance.sina.com.cn/wm/2026-11-02/doc-inixiiqx2299014.shtml",
   "source": "新浪科技"
  },
  {
   "title": "摩根士丹利：新兴市场回调创造入场时间",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-02/doc-inixicih3058293.shtml",
   "source": "新浪科技"
  },
  {
   "title": "李在明：韩国将向AI、数据中心投资21.3万亿韩元 4.6万亿押注自研顶尖大模型",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-02/doc-inixicic0551603.shtml",
   "source": "新浪科技"
  },
  {
   "title": "美国推动俄天然气经乌克兰管道恢复对欧销售 遭欧洲多国反对",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-02/doc-inixicih3036170.shtml",
   "source": "新浪科技"
  }
 ]
};
if (typeof window !== 'undefined') window.WB_DATA = WB_DATA;
