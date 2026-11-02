// 个人工作台数据（GitHub Actions 定时刷新，勿手改）
var WB_DATA = {
 "updatedAt": "2026-11-03 05:52",
 "aihotHot": [
  {
   "rank": 1,
   "title": "MIT 称 GPT-6 Astra 可直接改写模型权重",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/ob84tivbahzy2ux0letnmcxp7",
   "time": "11-03 05:37",
   "sourceCount": 2
  },
  {
   "rank": 2,
   "title": "Anthropic 递交 S-1 拟以 ANT 登陆纳斯达克",
   "source": "Anthropic：Newsroom（网页）",
   "url": "https://aihot.news/items/xywgx35ocbe6mzl2pnajw8ruu",
   "time": "11-03 05:28",
   "sourceCount": 2
  },
  {
   "rank": 3,
   "title": "DeepSeek 开源 Super-agent 双层架构原型",
   "source": "IT之家·人工智能",
   "url": "https://aihot.news/items/oig5qkyz9fzkdpchgk7l2cmm3",
   "time": "11-02 22:30",
   "sourceCount": 3
  },
  {
   "rank": 4,
   "title": "Karpathy用Claude从HN评论筛出6454个视频",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/k02hyr58q45b0ip29mm5bfxkf",
   "time": "11-02 10:29",
   "sourceCount": 3
  },
  {
   "rank": 5,
   "title": "OpenAI 12月起ChatGPT与Codex共享Token额度",
   "source": "公众号：数字生命卡兹克",
   "url": "https://aihot.news/items/f6dxzur6d4pwjdhvm1x6m5rfp",
   "time": "11-02 21:57",
   "sourceCount": 4
  },
  {
   "rank": 6,
   "title": "马斯克承认Grok Bot成本高于收入并下调限额",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/wrmi17szf006yhdo1g9uufn74",
   "time": "11-03 02:15",
   "sourceCount": 3
  },
  {
   "rank": 7,
   "title": "Anthropic 限制 Claude Code 复刻现有游戏",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/k0xci1tn1nue1lop6rwik8l8v",
   "time": "11-03 02:56",
   "sourceCount": 2
  },
  {
   "rank": 8,
   "title": "美团龙猫发布 LongCat-2.5 原生多模态模型",
   "source": "IT之家·人工智能",
   "url": "https://aihot.news/items/acf7r1s4jnc5uean49urp6sj5",
   "time": "11-02 22:35",
   "sourceCount": 3
  },
  {
   "rank": 9,
   "title": "SemiAnalysis发布GDPx基准，最佳模型仅得12%",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/rlrbaplq6k09qoovy0ksafrcg",
   "time": "11-02 20:45",
   "sourceCount": 3
  },
  {
   "rank": 10,
   "title": "OpenAI中期选举后启动公关攻势并拟更名数据中心",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/hrxdnlymj2phbpvvohwdeezk1",
   "time": "11-02 18:47",
   "sourceCount": 4
  }
 ],
 "aihotItems": [
  {
   "title": "Claude Platform 推出 message threads 公测，降低长会话智能体延迟",
   "summary": "Anthropic 在 Claude Platform 推出 message threads 公测，智能体每轮只需发送新增消息而无需重发全部对话历史，从而缩短首 token 时间。",
   "reason": "原文给出了 500k 至 1M token 请求下 TTFT 中位数下降约 35% 的数据，以及线程生命周期和接入方式，便于评估长会话智能体的延迟收益。",
   "source": "Claude：Blog（网页）",
   "url": "https://aihot.news/items/sg5u3u91kw42j1grtyp3ny65n",
   "time": "11-02 08:00",
   "category": "ai-products"
  },
  {
   "title": "OpenAI 训练并部署激活分类器作为前沿模型安全监控层",
   "summary": "OpenAI 自 GPT-5.6 起在其最强模型的内部和外部流量上部署激活分类器（probes），利用模型内部激活逐 token 实时评分，可在生成中途阻断违规回复和工具调用并交由推理模型复审。实验显示 probes 比更大的文本分类器对测试的越狱攻击更鲁棒，准确率随模型能力提升，且在后训练各检查点间迁移良好，但需为新基础模型重新训练，且只能检测可显式训练的已知违规类型。",
   "reason": "OpenAI 官方披露激活分类器的架构、训练与部署细节，并给出其相对文本分类器在越狱鲁棒性上的实验对比。",
   "source": "OpenAI：Alignment 研究博客（RSS）",
   "url": "https://aihot.news/items/wlmiqh13694tqabyvu6nzvlrs",
   "time": "11-03 04:00",
   "category": "paper"
  },
  {
   "title": "Anthropic 季度营收增长十二倍至近 170 亿美元，但净亏损达 233 亿美元",
   "summary": "据 Bloomberg 与 The Information，Anthropic 该季度营收近 170 亿美元，为一年前的十二倍，但运营成本达 175 亿美元，季度净亏损 233 亿美元，高于去年同期的 121 亿美元。",
   "reason": "原文汇总多家媒体信源，把 Anthropic 营收激增与巨额亏损、算力承诺和 IPO 压力放在同一语境下呈现。",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/owfopy087lszd1cpfp3c82pxv",
   "time": "11-03 00:26",
   "category": "industry"
  },
  {
   "title": "Anthropic 算力与基础设施合同承诺达 $895.4B，其中 $447.5B 须在 2031 年前支付",
   "summary": "Anthropic 在更新的 IPO 文件中首次披露第三季度业绩，算力与基础设施合同承诺总额约 $895.4B，其中 $447.5B 须在 2031 年前支付，仅 $213.8B 可取消或附带条件。",
   "reason": "原文梳理了 Anthropic 更新 IPO 文件中的算力承诺结构和可取消比例，读者可以据此评估其现金流与扩张风险。",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/xiu342i7osbgfxe2ezhrjndl0",
   "time": "11-03 05:28",
   "category": "industry"
  },
  {
   "title": "OpenAI 推出 Grid Protectors 计划，从 Georgia 校园开始支持电网削峰",
   "summary": "OpenAI 推出 Grid Protectors 计划，与电力公司、监管机构和政策制定者合作，让未来算力校园在电网紧张时降低用电需求，首站为 Effingham County 校园。",
   "reason": "OpenAI 首次系统化说明其校园电力弹性安排，给出 Georgia Power 合同的具体可削减容量与电费影响数据。",
   "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
   "url": "https://aihot.news/items/sxbs5a90fgybhyucacmzvrc6w",
   "time": "11-02 23:00",
   "category": "industry"
  },
  {
   "title": "腾讯混元发布 Hyra 2.0：让通用 agent 研发可复用的科学工具与模型",
   "summary": "腾讯混元发布 Hyra 2.0，将自动化科研重点从直接解题转向由 agent 研发和升级科学模型、工作流与软件工具。系统采用 Overall、Mission、Worker 三层分工，接入企业微信、计算平台和代码仓库的实际研发环境，成果已公开在 GitHub 仓库。",
   "reason": "原文把自动化科研的思路从解题转向造工具，并给出蛋白质设计、量子码、处理器等具体成果和可复用的 Harness 分层设计。",
   "source": "公众号：腾讯混元",
   "url": "https://aihot.news/items/l37ydaic43icz85huclc2io6c",
   "time": "11-02 18:06",
   "category": "ai-products"
  },
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
   "updateTime": "2026-11-02 20:45",
   "url": "https://s.weibo.com/top/summary",
   "data": [
    {
     "title": "JDG战胜狼队",
     "url": "https://s.weibo.com/weibo?q=JDG%E6%88%98%E8%83%9C%E7%8B%BC%E9%98%9F",
     "hot": 1116044
    },
    {
     "title": "社保欠缴逾期不缴可罚1至3倍",
     "url": "https://s.weibo.com/weibo?q=%E7%A4%BE%E4%BF%9D%E6%AC%A0%E7%BC%B4%E9%80%BE%E6%9C%9F%E4%B8%8D%E7%BC%B4%E5%8F%AF%E7%BD%9A1%E8%87%B33%E5%80%8D",
     "hot": 832250
    },
    {
     "title": "2026年世界互联网大会乌镇峰会",
     "url": "https://s.weibo.com/weibo?q=2026%E5%B9%B4%E4%B8%96%E7%95%8C%E4%BA%92%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A%E4%B9%8C%E9%95%87%E5%B3%B0%E4%BC%9A",
     "hot": 625970
    },
    {
     "title": "芒果 我涨停了厉娜",
     "url": "https://s.weibo.com/weibo?q=%E8%8A%92%E6%9E%9C%20%E6%88%91%E6%B6%A8%E5%81%9C%E4%BA%86%E5%8E%89%E5%A8%9C",
     "hot": 615221
    },
    {
     "title": "彩票中心回应中1113万逾期兑奖被拒",
     "url": "https://s.weibo.com/weibo?q=%E5%BD%A9%E7%A5%A8%E4%B8%AD%E5%BF%83%E5%9B%9E%E5%BA%94%E4%B8%AD1113%E4%B8%87%E9%80%BE%E6%9C%9F%E5%85%91%E5%A5%96%E8%A2%AB%E6%8B%92",
     "hot": 569472
    },
    {
     "title": "许飞空降回复",
     "url": "https://s.weibo.com/weibo?q=%E8%AE%B8%E9%A3%9E%E7%A9%BA%E9%99%8D%E5%9B%9E%E5%A4%8D",
     "hot": 415552
    },
    {
     "title": "10月车企销量排名",
     "url": "https://s.weibo.com/weibo?q=10%E6%9C%88%E8%BD%A6%E4%BC%81%E9%94%80%E9%87%8F%E6%8E%92%E5%90%8D",
     "hot": 366739
    },
    {
     "title": "8岁女孩课间被同桌冲撞倒地脑死亡",
     "url": "https://s.weibo.com/weibo?q=8%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%AF%BE%E9%97%B4%E8%A2%AB%E5%90%8C%E6%A1%8C%E5%86%B2%E6%92%9E%E5%80%92%E5%9C%B0%E8%84%91%E6%AD%BB%E4%BA%A1",
     "hot": 354716
    },
    {
     "title": "JDG首次晋级年总胜决",
     "url": "https://s.weibo.com/weibo?q=JDG%E9%A6%96%E6%AC%A1%E6%99%8B%E7%BA%A7%E5%B9%B4%E6%80%BB%E8%83%9C%E5%86%B3",
     "hot": 305088
    },
    {
     "title": "2027或是最舒服年",
     "url": "https://s.weibo.com/weibo?q=2027%E6%88%96%E6%98%AF%E6%9C%80%E8%88%92%E6%9C%8D%E5%B9%B4",
     "hot": 302364
    },
    {
     "title": "马天宇仅互关评论后的杨幂",
     "url": "https://s.weibo.com/weibo?q=%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BB%85%E4%BA%92%E5%85%B3%E8%AF%84%E8%AE%BA%E5%90%8E%E7%9A%84%E6%9D%A8%E5%B9%82",
     "hot": 301737
    },
    {
     "title": "荆轲刺秦王监控视频",
     "url": "https://s.weibo.com/weibo?q=%E8%8D%86%E8%BD%B2%E5%88%BA%E7%A7%A6%E7%8E%8B%E7%9B%91%E6%8E%A7%E8%A7%86%E9%A2%91",
     "hot": 301358
    }
   ]
  },
  "zhihu": {
   "name": "知乎热榜",
   "updateTime": "2026-11-02 20:45",
   "url": "https://www.zhihu.com/hot",
   "data": [
    {
     "title": "美国一公务机在居民区坠毁致9死，距特朗普的海湖庄园仅七八公里，具体情况如何？可能是什么原因？",
     "url": "https://www.zhihu.com/question/2100501083466326367",
     "hot": ""
    },
    {
     "title": "网友发现罗技广告又以狗比喻用户，客服回应已展开调查，为什么继此前舆论风波后还会出现这种情况？",
     "url": "https://www.zhihu.com/question/2100514761490129595",
     "hot": ""
    },
    {
     "title": "如何看待南京一助教老师休息日爬山5小时未回工作消息遭辞退？「休息日定时查看3次工作号」的要求合法吗？",
     "url": "https://www.zhihu.com/question/2100514068792661637",
     "hot": ""
    },
    {
     "title": "柬埔寨电诈园区转到非洲，主要从事网恋、加密货币及虚假投资诈骗，为什么会转移地点？海外出行需要注意什么？",
     "url": "https://www.zhihu.com/question/2100488722936328450",
     "hot": ""
    },
    {
     "title": "如何看待即使在山河四省，也有很多高中生疯狂玩游戏，抄作业，早恋，摆烂，最后全凭高考分数考上985的？",
     "url": "https://www.zhihu.com/question/2097354391070291569",
     "hot": ""
    },
    {
     "title": "币安被盗资产已补回 90%，剩余 10% 因流动性较低暂未补齐，此次事件还有哪些问题需要解决？",
     "url": "https://www.zhihu.com/question/2100144466690405284",
     "hot": ""
    },
    {
     "title": "Bin 赛后采访称「都说 Zeus 是世一上，今天我击败了他就接替了他的位置」对此你有什么想说的？",
     "url": "https://www.zhihu.com/question/2100542237821986644",
     "hot": ""
    },
    {
     "title": "第二届苏超结束，流量断崖下跌，这个比赛未来还有新的破局增长点吗，未来这个比赛将立足于哪里？",
     "url": "https://www.zhihu.com/question/2100539974781071970",
     "hot": ""
    },
    {
     "title": "如何看待 Qwen3.5 4b 仅调整一个参数就变成「邪恶人格」？",
     "url": "https://www.zhihu.com/question/2099896597056435206",
     "hot": ""
    },
    {
     "title": "砍完人就收进剑鞘，剑不会臭吗？",
     "url": "https://www.zhihu.com/question/2095907153181505492",
     "hot": ""
    },
    {
     "title": "美国中期选举临近，捐款榜前十里七家倒向共和党，支持率却不如民主党，为啥金钱失去了以往一锤定音的威力？",
     "url": "https://www.zhihu.com/question/2099494216397054526",
     "hot": ""
    },
    {
     "title": "法定节假日增至 13 天并优化调休，将对公众生活与休假体验带来哪些改变？",
     "url": "https://www.zhihu.com/question/2099697728552952157",
     "hot": ""
    }
   ]
  },
  "douyin": {
   "name": "抖音热点",
   "updateTime": "2026-11-02 20:45",
   "url": "https://www.douyin.com/hot",
   "data": [
    {
     "title": "首届CMG世界机器人登泰山大赛",
     "url": "https://www.douyin.com/search/%E9%A6%96%E5%B1%8ACMG%E4%B8%96%E7%95%8C%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BB%E6%B3%B0%E5%B1%B1%E5%A4%A7%E8%B5%9B",
     "hot": 12049564
    },
    {
     "title": "北京的秋藏在这片水杉林里",
     "url": "https://www.douyin.com/search/%E5%8C%97%E4%BA%AC%E7%9A%84%E7%A7%8B%E8%97%8F%E5%9C%A8%E8%BF%99%E7%89%87%E6%B0%B4%E6%9D%89%E6%9E%97%E9%87%8C",
     "hot": 11444203
    },
    {
     "title": "长征路上学党史",
     "url": "https://www.douyin.com/search/%E9%95%BF%E5%BE%81%E8%B7%AF%E4%B8%8A%E5%AD%A6%E5%85%9A%E5%8F%B2",
     "hot": 10935336
    },
    {
     "title": "影之刃零系列背景解说",
     "url": "https://www.douyin.com/search/%E5%BD%B1%E4%B9%8B%E5%88%83%E9%9B%B6%E7%B3%BB%E5%88%97%E8%83%8C%E6%99%AF%E8%A7%A3%E8%AF%B4",
     "hot": 10931142
    },
    {
     "title": "双11忙忙碌碌寻宝藏belike",
     "url": "https://www.douyin.com/search/%E5%8F%8C11%E5%BF%99%E5%BF%99%E7%A2%8C%E7%A2%8C%E5%AF%BB%E5%AE%9D%E8%97%8Fbelike",
     "hot": 10359693
    },
    {
     "title": "多海域连发航行警告",
     "url": "https://www.douyin.com/search/%E5%A4%9A%E6%B5%B7%E5%9F%9F%E8%BF%9E%E5%8F%91%E8%88%AA%E8%A1%8C%E8%AD%A6%E5%91%8A",
     "hot": 10213146
    },
    {
     "title": "勇士124:112力克快船",
     "url": "https://www.douyin.com/search/%E5%8B%87%E5%A3%AB124%3A112%E5%8A%9B%E5%85%8B%E5%BF%AB%E8%88%B9",
     "hot": 9123005
    },
    {
     "title": "冬天一秒出门的百搭外套",
     "url": "https://www.douyin.com/search/%E5%86%AC%E5%A4%A9%E4%B8%80%E7%A7%92%E5%87%BA%E9%97%A8%E7%9A%84%E7%99%BE%E6%90%AD%E5%A4%96%E5%A5%97",
     "hot": 9119957
    },
    {
     "title": "知名导演江小鱼因病离世",
     "url": "https://www.douyin.com/search/%E7%9F%A5%E5%90%8D%E5%AF%BC%E6%BC%94%E6%B1%9F%E5%B0%8F%E9%B1%BC%E5%9B%A0%E7%97%85%E7%A6%BB%E4%B8%96",
     "hot": 9116102
    },
    {
     "title": "8个问题看懂美国中期选举",
     "url": "https://www.douyin.com/search/8%E4%B8%AA%E9%97%AE%E9%A2%98%E7%9C%8B%E6%87%82%E7%BE%8E%E5%9B%BD%E4%B8%AD%E6%9C%9F%E9%80%89%E4%B8%BE",
     "hot": 9113998
    },
    {
     "title": "央行将启动第三次互换便利操作",
     "url": "https://www.douyin.com/search/%E5%A4%AE%E8%A1%8C%E5%B0%86%E5%90%AF%E5%8A%A8%E7%AC%AC%E4%B8%89%E6%AC%A1%E4%BA%92%E6%8D%A2%E4%BE%BF%E5%88%A9%E6%93%8D%E4%BD%9C",
     "hot": 9019983
    },
    {
     "title": "阿森纳1:0利物浦",
     "url": "https://www.douyin.com/search/%E9%98%BF%E6%A3%AE%E7%BA%B31%3A0%E5%88%A9%E7%89%A9%E6%B5%A6",
     "hot": 8911983
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
   "updateTime": "2026-11-03 05:52",
   "url": "https://www.bilibili.com/v/popular/all/",
   "data": [
    {
     "title": "哟西！故乡的樱花开了！",
     "url": "https://www.bilibili.com/video/BV1w34A62Eq2",
     "hot": 636509
    },
    {
     "title": "大家好，这里是 DeepSeek Harness，正式入驻 B 站！",
     "url": "https://www.bilibili.com/video/BV1i24P6rEmt",
     "hot": 489885
    },
    {
     "title": "【全网最全】DeepSeek Harness超详细教程！50分钟吃透DSH，让SuperAgent给你干活！",
     "url": "https://www.bilibili.com/video/BV1REx46NEc4",
     "hot": 609748
    },
    {
     "title": "宠粉天花板，请我的粉丝朋友清空一家零食店，你来选我买单，看看要花多少钱",
     "url": "https://www.bilibili.com/video/BV14o4F6EELU",
     "hot": 1297238
    },
    {
     "title": "【纸绘动画/卡点】爆肝600张！！数形结合！让你爱上数学【手搓动画大赛】",
     "url": "https://www.bilibili.com/video/BV1yhxp66Ez8",
     "hot": 937757
    },
    {
     "title": "你从未离去 x 平凡之路",
     "url": "https://www.bilibili.com/video/BV1mVxx6SEJ4",
     "hot": 620407
    },
    {
     "title": "停停停！别再从电影里学习错误的女性知识啦……！",
     "url": "https://www.bilibili.com/video/BV13oxa6yEPx",
     "hot": 1127516
    },
    {
     "title": "这还能是童年套圈机！？做成世界大赛！",
     "url": "https://www.bilibili.com/video/BV16Ux46yEsR",
     "hot": 907818
    },
    {
     "title": "原来10后也有自己的老歌了",
     "url": "https://www.bilibili.com/video/BV1xWH56zEb8",
     "hot": 370450
    },
    {
     "title": "猫咪目前正在恢复，后续还会跟进的~",
     "url": "https://www.bilibili.com/video/BV1A14c61ERU",
     "hot": 285183
    },
    {
     "title": "⚡️⚡️⚡️猫咖倒闭，救救我们⚡️⚡️⚡️",
     "url": "https://www.bilibili.com/video/BV1rJxG6ME5x",
     "hot": 765614
    },
    {
     "title": "【STN快报第8.5季25】不觉得边缘行者2的预期违背也是一种反抗精神吗",
     "url": "https://www.bilibili.com/video/BV13D4w6cEKG",
     "hot": 395280
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
   "title": "Anthropic IPO前营收猛增 第三季度已达上年同期12倍",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-02/doc-inixkmat9159848.shtml",
   "source": "新浪科技"
  },
  {
   "title": "创维发布自然光电视QX及酷开电视K6 Pro，主打健康护眼新体验",
   "url": "https://finance.sina.com.cn/chanjing/gsnews/2026-11-03/doc-inixkmaq7074931.shtml",
   "source": "新浪科技"
  },
  {
   "title": "Anthropic Q3营收同比增1127% Claude收入170亿美元",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-02/doc-inixkeuu2821699.shtml",
   "source": "新浪科技"
  },
  {
   "title": "OpenAI承诺：极端天气下 旗下美国数据中心可削减用电负荷",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-02/doc-inixkeur0372896.shtml",
   "source": "新浪科技"
  },
  {
   "title": "李佳琦双十一卖Token，半小时卖出10万份千问办公会员",
   "url": "https://finance.sina.com.cn/tech/it/2026-11-02/doc-inixkeus7143726.shtml",
   "source": "新浪科技"
  },
  {
   "title": "哈塞特淡化AI融资担忧：不会出现大规模抛售",
   "url": "https://finance.sina.com.cn/stock/usstock/c/2026-11-02/doc-inixkeus7132223.shtml",
   "source": "新浪科技"
  }
 ]
};
if (typeof window !== 'undefined') window.WB_DATA = WB_DATA;
