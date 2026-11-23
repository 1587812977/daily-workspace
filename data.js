// 个人工作台数据（GitHub Actions 定时刷新，勿手改）
var WB_DATA = {
 "updatedAt": "2026-11-23 13:19",
 "aihotHot": [
  {
   "rank": 1,
   "title": "OpenAI 提议以困惑度设共同安全上限，微软公布可比数据",
   "source": "TechCrunch：AI（RSS）",
   "url": "https://aihot.news/items/w6aesnkh72hkkxhr4ptrhddd9",
   "time": "11-23 09:00",
   "sourceCount": 7
  },
  {
   "rank": 2,
   "title": "Lean 社区确认阿尔波格黎曼猜想证明正确",
   "source": "公众号：数字生命卡兹克",
   "url": "https://aihot.news/items/vu6fw8wmrs3xcln4u9gwzf1f4",
   "time": "11-23 02:37",
   "sourceCount": 6
  },
  {
   "rank": 3,
   "title": "Thinking Machines 开源 26.4B 循环模型 Inkling 2 Mini",
   "source": "Thinking Machines Lab：News（网页）",
   "url": "https://aihot.news/items/y7nk77dxae51qwi826gpmvbho",
   "time": "11-22 02:31",
   "sourceCount": 3
  },
  {
   "rank": 4,
   "title": "特斯拉FSD v15下月推送，马斯克介绍天空箭头导航",
   "source": "X：indigo (@indigox)",
   "url": "https://aihot.news/items/xriwds9rtl5niekinxe2uwxsu",
   "time": "11-23 07:40",
   "sourceCount": 3
  },
  {
   "rank": 5,
   "title": "Anthropic 上市首日收涨 17%，次日回落",
   "source": "Anthropic：Newsroom（网页）",
   "url": "https://aihot.news/items/xywgx35ocbe6mzl2pnajw8ruu",
   "time": "11-21 23:00",
   "sourceCount": 1
  },
  {
   "rank": 6,
   "title": "蚂蚁开源医疗多模态模型 LingSante-3.1-air-VL",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/lrq0kpclh1u861beihn823d26",
   "time": "11-23 11:00",
   "sourceCount": 4
  },
  {
   "rank": 7,
   "title": "亚马逊深入谈判收购Decart，估值约75亿美元",
   "source": "X：Rohan Paul (@rohanpaul_ai)",
   "url": "https://aihot.news/items/eg97pyuem4incr7vpqsklw36v",
   "time": "11-23 11:35",
   "sourceCount": 2
  },
  {
   "rank": 8,
   "title": "蚂蚁开源560B医疗MoE模型LingSante-3.1-flash",
   "source": "X：蚂蚁百灵 (@AntLingAGI)",
   "url": "https://aihot.news/items/xaoz6pmbhm1e0edczgo89w03l",
   "time": "11-23 11:00",
   "sourceCount": 4
  },
  {
   "rank": 9,
   "title": "200万诱饵请求测出AI服务链数据外泄",
   "source": "Ars Technica：AI（RSS）",
   "url": "https://aihot.news/items/agm7klro03kcu9weuix1bt4su",
   "time": "11-22 20:07",
   "sourceCount": 2
  },
  {
   "rank": 10,
   "title": "Chollet 称算力需求未见顶，马斯克预警资金短缺",
   "source": "X：Francois Chollet (@fchollet)",
   "url": "https://aihot.news/items/keyiyrvngw7f625sjytaia6hf",
   "time": "11-22 16:47",
   "sourceCount": 2
  }
 ],
 "aihotItems": [
  {
   "title": "Anthropic IPO 前三家机构如何重注押注",
   "summary": "TechCrunch 报道 Notable Capital、GIC 和 Baillie Gifford 在 Anthropic IPO 前的重仓投资逻辑。",
   "reason": "报道还原了 Notable Capital、GIC 和 Baillie Gifford 在 Anthropic 上市前的投资决策过程，可了解机构在争议时点押注的依据。",
   "source": "TechCrunch：AI（RSS）",
   "url": "https://aihot.news/items/dus34samsjrld1qopq65v54uq",
   "time": "11-23 09:25",
   "category": "industry"
  },
  {
   "title": "卡兹克分享 Claude、GPT、Gemini 三模型协同调度方法",
   "summary": "自媒体作者卡兹克分享自己让 Claude、GPT 和 Gemini 协同工作的方法：把 Claude Opus 5.5 当总指挥负责沟通、拆解和验收，Gemini 4 Neon 当军师出方案和改界面文案，GPT 负责后端、算法、修 BUG 和代码审查。",
   "reason": "作者以自己半个月的多模型使用实践为基础，给出按模型性格分工的调度结构和可复制的 CLAUDE.md 规则。",
   "source": "公众号：数字生命卡兹克",
   "url": "https://aihot.news/items/hz782dpcwhurj6584rtd13eaf",
   "time": "11-23 07:56",
   "category": "tip"
  },
  {
   "title": "用户实测用 MiniCPM5-2B 在 Mac 上本地跑通体检报告分析",
   "summary": "用户@cxjwin 分享在 Mac（M4 Pro、48GB）上用 Homebrew 装 llama.cpp 跑 minicpm5-2b、colima 起 Docker 本地运行开源项目 Mirobody 的实测：14 页 PDF 首次处理漏掉 3 页扫描版化验单，截图单独上传后 58 行化验数值逐项与原件对上，其中 20 行成功映射到 LOINC 标准编码，肌酐因名称歧义留空未猜。问超标指标时 2B 模型走 11 步找到全部 5 项箭头指标，但把一项在范围内的血糖误判为超标。接 Claude Code 时改用演示账号避免数据上传。Mirobody 由 Theta Health 以 Apache-2.0 开源，网页版和微信小程序也基于它。",
   "reason": "用户实测记录了本地跑通 Mirobody 的完整流程，也包括扫描页漏读、LOINC 编码对不上和 2B 模型答错的细节，可作本地部署健康数据工作流的参考。",
   "source": "X：面壁智能 OpenBMB (@OpenBMB)",
   "url": "https://aihot.news/items/g3vdho0vzm8rzriiz5grruy3m",
   "time": "11-22 19:15",
   "category": "opinion"
  },
  {
   "title": "MiniCPM 8B 成为老挝国家模型，端侧小模型加速落地多国",
   "summary": "面壁智能转发并认同 @xiaoanlab 对 MiniCPM 端侧落地的观察：截至 2026 年 11 月 MiniCPM 下载量超过 7000 万，其 8B 老挝国家模型接入老挝政府 G-Chat v2 通讯软件，老挝翻译在国际基准上超过 GPT-4o。马来西亚用 VoxCPM2 做语音交互，肯尼亚一家银行在其上运行端侧风控 Agent，开发者基于它推出离线应用；小模型之争正从参数量转向谁真正嵌入日常系统。",
   "reason": "引用内容梳理了 MiniCPM 在老挝、马来西亚、肯尼亚等实际落地情况，读者可借此看小模型如何嵌入日常系统而非比拼参数量。",
   "source": "X：面壁智能 OpenBMB (@OpenBMB)",
   "url": "https://aihot.news/items/dr26culfdd1cb21w56i8iruts",
   "time": "11-22 19:25",
   "category": "industry"
  },
  {
   "title": "OpenAI 提议以困惑度作为行业共享指标并公开内部预训练测量数据",
   "summary": "OpenAI 撰文提议将 perplexity（交叉熵损失）确立为跨模型开发者比较和安全标准的共享指标，并公开其内部预训练测量数据。",
   "reason": "OpenAI 公开自 GPT-3.5 以来的内部 log-perplexity 数据，并提出以困惑度作为跨实验室共享的安全限速指标。",
   "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
   "url": "https://aihot.news/items/r7kb35fpdwc1m2iqsmd310tdj",
   "time": "11-22 08:00",
   "category": "opinion"
  },
  {
   "title": "Lean 与 Mathlib 社区确认 Levent Alpöge 黎曼猜想证明正确",
   "summary": "Lean 与 Mathlib 社区发表声明，确认斯坦福数学家 Levent Alpöge 的黎曼猜想证明正确。Alpöge 于 2026 年 11 月 20 日以 1700 万行 Lean 代码发布该证明，数十人独立运行得到相同结果，且验证程序被设计为可证明不会接受有缺陷的证明。",
   "reason": "社区正式确认与代码验证细节都写得很具体，读者可以了解这道数学难题如何以 Lean 形式被独立核验。",
   "source": "The Decoder：AI News（RSS）",
   "url": "https://aihot.news/items/ikpixx0j7414se1f6lww2csek",
   "time": "11-22 19:08",
   "category": "industry"
  },
  {
   "title": "菲尔兹奖得主梅纳德谈 Claude 合作证明黎曼猜想：相信证明正确，但需被理解才可能获认可",
   "summary": "2022 年菲尔兹奖得主、牛津大学数学教授詹姆斯·梅纳德（James Maynard）在采访中表示，他认为 Anthropic 数学家莱文特·阿尔珀格（Levent Alpöge）与 Claude 合作完成的黎曼猜想证明是正确的，依据是该证明已通过 Lean 库形式化验证并经独立核实，且阿尔珀格过往有可靠记录。",
   "reason": "菲尔兹奖得主梅纳德对 AI 辅助黎曼猜想证明的判断，提醒读者形式化验证通过不等于数学界认可，理解证明思想才是关键。",
   "source": "IT之家·人工智能",
   "url": "https://aihot.news/items/p9h5xzsooms0foxeakoivy7qt",
   "time": "11-22 17:35",
   "category": "opinion"
  }
 ],
 "aiDaily": {
  "date": "2026-11-23",
  "url": "https://aihot.news/daily/2026-11-23",
  "sections": [
   {
    "label": "行业动态",
    "items": [
     {
      "title": "MiniCPM 8B 成为老挝国家模型，端侧小模型加速落地多国",
      "summary": "面壁智能转发并认同 @xiaoanlab 对 MiniCPM 端侧落地的观察：截至 2026 年 11 月 MiniCPM 下载量超过 7000 万，其 8B 老挝国家模型接入老挝政府 G-Chat v2 通讯软件，老挝翻译在国际基准上超过 GPT-4o。马来西亚用 VoxCPM2 做语音交互，肯尼亚一家银行在其上运行端侧风控 Agent，开发者基于它推出离线应用；小模型之争正从参数量转向谁真正嵌入日常系统。",
      "source": "X：面壁智能 OpenBMB (@OpenBMB)",
      "url": "https://aihot.news/items/dr26culfdd1cb21w56i8iruts"
     }
    ]
   },
   {
    "label": "技巧与观点",
    "items": [
     {
      "title": "OpenAI 提议以困惑度作为行业共享指标并公开内部预训练测量数据",
      "summary": "OpenAI 撰文提议将 perplexity（交叉熵损失）确立为跨模型开发者比较和安全标准的共享指标，并公开其内部预训练测量数据。",
      "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
      "url": "https://aihot.news/items/r7kb35fpdwc1m2iqsmd310tdj"
     },
     {
      "title": "用户实测用 MiniCPM5-2B 在 Mac 上本地跑通体检报告分析",
      "summary": "用户@cxjwin 分享在 Mac（M4 Pro、48GB）上用 Homebrew 装 llama.cpp 跑 minicpm5-2b、colima 起 Docker 本地运行开源项目 Mirobody 的实测：14 页 PDF 首次处理漏掉 3 页扫描版化验单，截图单独上传后 58 行化验数值逐项与原件对上，其中 20 行成功映射到 LOINC 标准编码，肌酐因名称歧义留空未猜。问超标指标时 2B 模型走 11 步找到全部 5 项箭头指标，但把一项在范围内的血糖误判为超标。接 Claude Code 时改用演示账号避免数据上传。Mirobody 由 Theta Health 以 Apache-2.0 开源，网页版和微信小程序也基于它。",
      "source": "X：面壁智能 OpenBMB (@OpenBMB)",
      "url": "https://aihot.news/items/g3vdho0vzm8rzriiz5grruy3m"
     }
    ]
   }
  ]
 },
 "hotLists": {
  "weibo": {
   "name": "微博热搜",
   "updateTime": "2026-11-23 13:19",
   "url": "https://s.weibo.com/top/summary",
   "data": [
    {
     "title": "南方豆腐掉地上能弹起来",
     "url": "https://s.weibo.com/weibo?q=%E5%8D%97%E6%96%B9%E8%B1%86%E8%85%90%E6%8E%89%E5%9C%B0%E4%B8%8A%E8%83%BD%E5%BC%B9%E8%B5%B7%E6%9D%A5",
     "hot": 1773127
    },
    {
     "title": "treetree的炸鸡外卖火到被迫成为门店",
     "url": "https://s.weibo.com/weibo?q=treetree%E7%9A%84%E7%82%B8%E9%B8%A1%E5%A4%96%E5%8D%96%E7%81%AB%E5%88%B0%E8%A2%AB%E8%BF%AB%E6%88%90%E4%B8%BA%E9%97%A8%E5%BA%97",
     "hot": 1013368
    },
    {
     "title": "优质网络主播中国行川渝行",
     "url": "https://s.weibo.com/weibo?q=%E4%BC%98%E8%B4%A8%E7%BD%91%E7%BB%9C%E4%B8%BB%E6%92%AD%E4%B8%AD%E5%9B%BD%E8%A1%8C%E5%B7%9D%E6%B8%9D%E8%A1%8C",
     "hot": 960773
    },
    {
     "title": "青稚这场直播完天霸都想找人索赔了",
     "url": "https://s.weibo.com/weibo?q=%E9%9D%92%E7%A8%9A%E8%BF%99%E5%9C%BA%E7%9B%B4%E6%92%AD%E5%AE%8C%E5%A4%A9%E9%9C%B8%E9%83%BD%E6%83%B3%E6%89%BE%E4%BA%BA%E7%B4%A2%E8%B5%94%E4%BA%86",
     "hot": 910883
    },
    {
     "title": "韦东奕攻克百年难题获奖",
     "url": "https://s.weibo.com/weibo?q=%E9%9F%A6%E4%B8%9C%E5%A5%95%E6%94%BB%E5%85%8B%E7%99%BE%E5%B9%B4%E9%9A%BE%E9%A2%98%E8%8E%B7%E5%A5%96",
     "hot": 905409
    },
    {
     "title": "许昌外卖小哥一句脆脆的带火炸鸡",
     "url": "https://s.weibo.com/weibo?q=%E8%AE%B8%E6%98%8C%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E4%B8%80%E5%8F%A5%E8%84%86%E8%84%86%E7%9A%84%E5%B8%A6%E7%81%AB%E7%82%B8%E9%B8%A1",
     "hot": 661170
    },
    {
     "title": "两京十五日 历史剧情",
     "url": "https://s.weibo.com/weibo?q=%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%20%E5%8E%86%E5%8F%B2%E5%89%A7%E6%83%85",
     "hot": 404044
    },
    {
     "title": "369贴脸开大Bin",
     "url": "https://s.weibo.com/weibo?q=369%E8%B4%B4%E8%84%B8%E5%BC%80%E5%A4%A7Bin",
     "hot": 385249
    },
    {
     "title": "KPL",
     "url": "https://s.weibo.com/weibo?q=KPL",
     "hot": 373294
    },
    {
     "title": "美貌转移到了许飞脸上",
     "url": "https://s.weibo.com/weibo?q=%E7%BE%8E%E8%B2%8C%E8%BD%AC%E7%A7%BB%E5%88%B0%E4%BA%86%E8%AE%B8%E9%A3%9E%E8%84%B8%E4%B8%8A",
     "hot": 252761
    },
    {
     "title": "特朗普深圳行照片14张是中美互动",
     "url": "https://s.weibo.com/weibo?q=%E7%89%B9%E6%9C%97%E6%99%AE%E6%B7%B1%E5%9C%B3%E8%A1%8C%E7%85%A7%E7%89%8714%E5%BC%A0%E6%98%AF%E4%B8%AD%E7%BE%8E%E4%BA%92%E5%8A%A8",
     "hot": 252719
    },
    {
     "title": "两届炒股大赛冠军破产",
     "url": "https://s.weibo.com/weibo?q=%E4%B8%A4%E5%B1%8A%E7%82%92%E8%82%A1%E5%A4%A7%E8%B5%9B%E5%86%A0%E5%86%9B%E7%A0%B4%E4%BA%A7",
     "hot": 252629
    }
   ]
  },
  "zhihu": {
   "name": "知乎热榜",
   "updateTime": "2026-11-23 13:19",
   "url": "https://www.zhihu.com/hot",
   "data": [
    {
     "title": "在黎曼猜想被声称证明后，如何理解袁新意所说的「或许我们高估了黎曼猜想的难度」？",
     "url": "https://www.zhihu.com/question/2107618428508792525",
     "hot": ""
    },
    {
     "title": "27岁庞众望完成博士论文答辩，即将从清华毕业，未来有望朝什么方向发展？他的求学之路给我们什么启示？",
     "url": "https://www.zhihu.com/question/2107184597846975042",
     "hot": ""
    },
    {
     "title": "编剧芦苇评价《给阿嬷的情书》是合格水准，但很难成为经典，劣币驱逐良币时代是良心之作，怎样理解这一说法？",
     "url": "https://www.zhihu.com/question/2107906248599234133",
     "hot": ""
    },
    {
     "title": "芜湖一住户割断高空作业工人安全绳，警方正在侦办，该住户需承担哪些法律责任？",
     "url": "https://www.zhihu.com/question/2105992057642865192",
     "hot": ""
    },
    {
     "title": "张水华黄石马拉松破个人纪录夺冠，6周连跑6场获5冠1亚，如何评价她的表现？",
     "url": "https://www.zhihu.com/question/2107832295511913619",
     "hot": ""
    },
    {
     "title": "方力申耗时 8 小时 37 分 24 秒从香港游到澳门破吉尼斯纪录，完成这样的挑战难度有多大？",
     "url": "https://www.zhihu.com/question/2107848989819326753",
     "hot": ""
    },
    {
     "title": "DeepSeek 推出限额规则，不少重度免费用户主动求付费保留长对话，这暴露出哪些行业现实问题？",
     "url": "https://www.zhihu.com/question/2107183345205626254",
     "hot": ""
    },
    {
     "title": "如何看待母亲拒送8岁女儿上学遭起诉，自称替人类示范在家教育，结果女儿连自己名字都写错、语文仅考6分？",
     "url": "https://www.zhihu.com/question/2107787943242896234",
     "hot": ""
    },
    {
     "title": "为什么大便之前体重和大便之后的体重一样？难道排泄物没有重量吗？",
     "url": "https://www.zhihu.com/question/2105195950671245354",
     "hot": ""
    },
    {
     "title": "如果 Viper 回到 LCK，BLG 买回 ELK 重组一次效果会怎么样？",
     "url": "https://www.zhihu.com/question/2105302211651810717",
     "hot": ""
    },
    {
     "title": "户均 2.52 人开发商却主推三居，为什么现在 89 平方米刚需户型重新走热？",
     "url": "https://www.zhihu.com/question/2107410857026234017",
     "hot": ""
    },
    {
     "title": "余文乐自曝因长期高压患上恐慌症，严重到不能开车，心理压力为何会引发躯体化症状？这种情况还能治愈吗？",
     "url": "https://www.zhihu.com/question/2107780639281735166",
     "hot": ""
    }
   ]
  },
  "douyin": {
   "name": "抖音热点",
   "updateTime": "2026-11-23 13:19",
   "url": "https://www.douyin.com/hot",
   "data": [
    {
     "title": "现货黄金重返3600美元",
     "url": "https://www.douyin.com/search/%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%E9%87%8D%E8%BF%943600%E7%BE%8E%E5%85%83",
     "hot": 12126785
    },
    {
     "title": "勇士险胜凯尔特人",
     "url": "https://www.douyin.com/search/%E5%8B%87%E5%A3%AB%E9%99%A9%E8%83%9C%E5%87%AF%E5%B0%94%E7%89%B9%E4%BA%BA",
     "hot": 11350835
    },
    {
     "title": "我国服务消费潜能充分释放",
     "url": "https://www.douyin.com/search/%E6%88%91%E5%9B%BD%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E6%BD%9C%E8%83%BD%E5%85%85%E5%88%86%E9%87%8A%E6%94%BE",
     "hot": 11318533
    },
    {
     "title": "2027国考今起可打印准考证",
     "url": "https://www.douyin.com/search/2027%E5%9B%BD%E8%80%83%E4%BB%8A%E8%B5%B7%E5%8F%AF%E6%89%93%E5%8D%B0%E5%87%86%E8%80%83%E8%AF%81",
     "hot": 11197604
    },
    {
     "title": "掘金加时胜公牛",
     "url": "https://www.douyin.com/search/%E6%8E%98%E9%87%91%E5%8A%A0%E6%97%B6%E8%83%9C%E5%85%AC%E7%89%9B",
     "hot": 10584919
    },
    {
     "title": "黄山迎客松为何成为中国名片",
     "url": "https://www.douyin.com/search/%E9%BB%84%E5%B1%B1%E8%BF%8E%E5%AE%A2%E6%9D%BE%E4%B8%BA%E4%BD%95%E6%88%90%E4%B8%BA%E4%B8%AD%E5%9B%BD%E5%90%8D%E7%89%87",
     "hot": 10543838
    },
    {
     "title": "韩国KOSPI指数开盘下跌2.77%",
     "url": "https://www.douyin.com/search/%E9%9F%A9%E5%9B%BDKOSPI%E6%8C%87%E6%95%B0%E5%BC%80%E7%9B%98%E4%B8%8B%E8%B7%8C2.77%25",
     "hot": 9423531
    },
    {
     "title": "稳股市三项新政发布",
     "url": "https://www.douyin.com/search/%E7%A8%B3%E8%82%A1%E5%B8%82%E4%B8%89%E9%A1%B9%E6%96%B0%E6%94%BF%E5%8F%91%E5%B8%83",
     "hot": 9372146
    },
    {
     "title": "A股人形机器人板块上演涨停潮",
     "url": "https://www.douyin.com/search/A%E8%82%A1%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9D%BF%E5%9D%97%E4%B8%8A%E6%BC%94%E6%B6%A8%E5%81%9C%E6%BD%AE",
     "hot": 9348560
    },
    {
     "title": "海军多型舰机将亮相珠海航展",
     "url": "https://www.douyin.com/search/%E6%B5%B7%E5%86%9B%E5%A4%9A%E5%9E%8B%E8%88%B0%E6%9C%BA%E5%B0%86%E4%BA%AE%E7%9B%B8%E7%8F%A0%E6%B5%B7%E8%88%AA%E5%B1%95",
     "hot": 9344486
    },
    {
     "title": "美食的尽头是treetree炸鸡",
     "url": "https://www.douyin.com/search/%E7%BE%8E%E9%A3%9F%E7%9A%84%E5%B0%BD%E5%A4%B4%E6%98%AFtreetree%E7%82%B8%E9%B8%A1",
     "hot": 9319378
    },
    {
     "title": "黎曼猜想是什么",
     "url": "https://www.douyin.com/search/%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E6%98%AF%E4%BB%80%E4%B9%88",
     "hot": 9247812
    }
   ]
  },
  "toutiao": {
   "name": "头条热榜",
   "updateTime": "2026-11-23 13:19",
   "url": "https://www.toutiao.com/",
   "data": [
    {
     "title": "部委干部窃取我国百余份情报获死刑",
     "url": "https://www.toutiao.com/trending/7711136767030690330",
     "hot": 7788124
    },
    {
     "title": "特朗普深圳行照片14张是中美元首互动",
     "url": "https://www.toutiao.com/trending/7710702493755719721",
     "hot": 7046986
    },
    {
     "title": "服务消费升温带动服务业提质扩容",
     "url": "https://www.toutiao.com/article/7710960421867389449",
     "hot": 6376377
    },
    {
     "title": "宇树科技大涨",
     "url": "https://www.toutiao.com/trending/7711181505393787430",
     "hot": 5769584
    },
    {
     "title": "055大驱首次向公众开放",
     "url": "https://www.toutiao.com/trending/7711202163985956927",
     "hot": 5220536
    },
    {
     "title": "李在明走访看到白菜煎饼摊走不动了",
     "url": "https://www.toutiao.com/trending/7711195408593011209",
     "hot": 4723736
    },
    {
     "title": "张雪机车与奇瑞纵横达成全球战略合作",
     "url": "https://www.toutiao.com/trending/7711203722109455898",
     "hot": 4274213
    },
    {
     "title": "魏建军再测长城001号超跑",
     "url": "https://www.toutiao.com/trending/7711143363944677430",
     "hot": 3867468
    },
    {
     "title": "人民日报评1991年张大爷烂梗",
     "url": "https://www.toutiao.com/trending/7710279172438736932",
     "hot": 3499430
    },
    {
     "title": "俄军舰在利比亚遭袭击疑沉没",
     "url": "https://www.toutiao.com/trending/7710769937639735347",
     "hot": 3166415
    },
    {
     "title": "清谣护苗・护航成长",
     "url": "https://www.toutiao.com/trending/7711202650057982015",
     "hot": 2865090
    },
    {
     "title": "神二十三乘组太空出差进入倒计时",
     "url": "https://www.toutiao.com/trending/7710841077620654619",
     "hot": 2592441
    }
   ]
  },
  "baidu": {
   "name": "百度热搜",
   "updateTime": "2026-11-16 21:01",
   "url": "https://top.baidu.com/board",
   "data": [
    {
     "title": "中俄美三国元首历史首次面对面会晤",
     "url": "https://www.baidu.com/s?wd=%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E5%8E%86%E5%8F%B2%E9%A6%96%E6%AC%A1%E9%9D%A2%E5%AF%B9%E9%9D%A2%E4%BC%9A%E6%99%A4&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "墨西哥总统抵达深圳后做了一个动作",
     "url": "https://www.baidu.com/s?wd=%E5%A2%A8%E8%A5%BF%E5%93%A5%E6%80%BB%E7%BB%9F%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%E5%90%8E%E5%81%9A%E4%BA%86%E4%B8%80%E4%B8%AA%E5%8A%A8%E4%BD%9C&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "APEC离我们的生活有多远",
     "url": "https://www.baidu.com/s?wd=APEC%E7%A6%BB%E6%88%91%E4%BB%AC%E7%9A%84%E7%94%9F%E6%B4%BB%E6%9C%89%E5%A4%9A%E8%BF%9C&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "英前首相遭灌酒？扎哈罗娃：自愿喝的",
     "url": "https://www.baidu.com/s?wd=%E8%8B%B1%E5%89%8D%E9%A6%96%E7%9B%B8%E9%81%AD%E7%81%8C%E9%85%92%EF%BC%9F%E6%89%8E%E5%93%88%E7%BD%97%E5%A8%83%EF%BC%9A%E8%87%AA%E6%84%BF%E5%96%9D%E7%9A%84&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "于东来：胖东来郑州店花了两三个亿",
     "url": "https://www.baidu.com/s?wd=%E4%BA%8E%E4%B8%9C%E6%9D%A5%EF%BC%9A%E8%83%96%E4%B8%9C%E6%9D%A5%E9%83%91%E5%B7%9E%E5%BA%97%E8%8A%B1%E4%BA%86%E4%B8%A4%E4%B8%89%E4%B8%AA%E4%BA%BF&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "央视：涉亚马尔种族歧视内容系伪造",
     "url": "https://www.baidu.com/s?wd=%E5%A4%AE%E8%A7%86%EF%BC%9A%E6%B6%89%E4%BA%9A%E9%A9%AC%E5%B0%94%E7%A7%8D%E6%97%8F%E6%AD%A7%E8%A7%86%E5%86%85%E5%AE%B9%E7%B3%BB%E4%BC%AA%E9%80%A0&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "中俄美元首即将会晤 释放强烈信号",
     "url": "https://www.baidu.com/s?wd=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%8D%B3%E5%B0%86%E4%BC%9A%E6%99%A4+%E9%87%8A%E6%94%BE%E5%BC%BA%E7%83%88%E4%BF%A1%E5%8F%B7&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "庄子《逍遥游》诚不欺我",
     "url": "https://www.baidu.com/s?wd=%E5%BA%84%E5%AD%90%E3%80%8A%E9%80%8D%E9%81%A5%E6%B8%B8%E3%80%8B%E8%AF%9A%E4%B8%8D%E6%AC%BA%E6%88%91&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "结婚27年才发现妻子身份是假的",
     "url": "https://www.baidu.com/s?wd=%E7%BB%93%E5%A9%9A27%E5%B9%B4%E6%89%8D%E5%8F%91%E7%8E%B0%E5%A6%BB%E5%AD%90%E8%BA%AB%E4%BB%BD%E6%98%AF%E5%81%87%E7%9A%84&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "华晨宇演唱会拉动4亿消费",
     "url": "https://www.baidu.com/s?wd=%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8B%89%E5%8A%A84%E4%BA%BF%E6%B6%88%E8%B4%B9&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "“沈阳中考英语听力口语改革”不实",
     "url": "https://www.baidu.com/s?wd=%E2%80%9C%E6%B2%88%E9%98%B3%E4%B8%AD%E8%80%83%E8%8B%B1%E8%AF%AD%E5%90%AC%E5%8A%9B%E5%8F%A3%E8%AF%AD%E6%94%B9%E9%9D%A9%E2%80%9D%E4%B8%8D%E5%AE%9E&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    },
    {
     "title": "赵本山祖孙三代唱《慌啥子嘛》",
     "url": "https://www.baidu.com/s?wd=%E8%B5%B5%E6%9C%AC%E5%B1%B1%E7%A5%96%E5%AD%99%E4%B8%89%E4%BB%A3%E5%94%B1%E3%80%8A%E6%85%8C%E5%95%A5%E5%AD%90%E5%98%9B%E3%80%8B&sa=fyb_news&rsv_dl=fyb_news",
     "hot": ""
    }
   ]
  },
  "bilibili": {
   "name": "B站热门",
   "updateTime": "2026-11-23 13:19",
   "url": "https://www.bilibili.com/v/popular/all/",
   "data": [
    {
     "title": "【BLG夺冠VLOG】这是属于我们的冠军记忆",
     "url": "https://www.bilibili.com/video/BV1zGy5ziEnd",
     "hot": 787190
    },
    {
     "title": "同时狂炫「垃圾食品+保健品」，美国人的养生观逆天了",
     "url": "https://www.bilibili.com/video/BV1MLyVz1EiM",
     "hot": 483114
    },
    {
     "title": "GTA6性能要求高吗？哪台主机表现好？解锁30帧后能跑多少帧？",
     "url": "https://www.bilibili.com/video/BV1pDyjzEEsJ",
     "hot": 534129
    },
    {
     "title": "2026-2027国创动画作品发布会 全程回顾",
     "url": "https://www.bilibili.com/video/BV17pWu6QEkp",
     "hot": 582442
    },
    {
     "title": "在雀巢工作室上班有多爽？！",
     "url": "https://www.bilibili.com/video/BV1ozyszZEEJ",
     "hot": 444773
    },
    {
     "title": "曾经主角团最边缘的一个，为啥如今却成了互联网的神？",
     "url": "https://www.bilibili.com/video/BV1gMy3zkEgg",
     "hot": 828753
    },
    {
     "title": "路边一块，用心雕刻，保你看了眼前一黑",
     "url": "https://www.bilibili.com/video/BV15KyLz8Epz",
     "hot": 548601
    },
    {
     "title": "考公务员很难，但是为人民服务却很容易！",
     "url": "https://www.bilibili.com/video/BV1uyyazBEUA",
     "hot": 537665
    },
    {
     "title": "【合集】人类消失后，深度思考三百年的大肥鱼",
     "url": "https://www.bilibili.com/video/BV1Poyaz8Ep4",
     "hot": 1008578
    },
    {
     "title": "《无限暖暖》3.0版本套装PV | 若见沐光之窗&于此重见繁星",
     "url": "https://www.bilibili.com/video/BV1d7yGzsEMG",
     "hot": 1548237
    },
    {
     "title": "《无限暖暖》3.0版本PV｜昨日之城，明日之声",
     "url": "https://www.bilibili.com/video/BV1ovyezpEgP",
     "hot": 1783943
    },
    {
     "title": "熊出没",
     "url": "https://www.bilibili.com/video/BV1qLsC6EEYB",
     "hot": 834939
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
   "title": "“数学进入了一个新纪元”：丘成桐等三位数学家回应AI辅助证明黎曼猜想",
   "url": "https://finance.sina.com.cn/jjxw/2026-11-23/doc-inizskhn2381163.shtml",
   "source": "新浪科技"
  },
  {
   "title": "刚刚，OpenAI首次公开预训练核心指标",
   "url": "https://finance.sina.com.cn/tech/roll/2026-11-23/doc-inizskhk5580620.shtml",
   "source": "新浪科技"
  },
  {
   "title": "掉队的“户外鼻祖”，在下一盘险棋",
   "url": "https://finance.sina.com.cn/tech/roll/2026-11-23/doc-inizsqqk2289550.shtml",
   "source": "新浪科技"
  },
  {
   "title": "中国AI刷爆全球纪录！比Claude快四万倍，多个密码学难题被破解",
   "url": "https://finance.sina.com.cn/wm/2026-11-23/doc-inizskhq8466652.shtml",
   "source": "新浪科技"
  },
  {
   "title": "“历史性成就”还是“数学将终结”？AI破解黎曼猜想引发震动",
   "url": "https://finance.sina.com.cn/roll/2026-11-23/doc-inizskhs0777270.shtml",
   "source": "新浪科技"
  },
  {
   "title": "深扒Anthropic黑料！面试像入教，CEO怒骂黄仁勋",
   "url": "https://finance.sina.com.cn/tech/roll/2026-11-23/doc-inizskhq8437956.shtml",
   "source": "新浪科技"
  },
  {
   "title": "诺亦腾机器人发布ITW-Ego Plus，第一视角视频可扩展五种模态",
   "url": "https://finance.sina.com.cn/tech/shenji/2026-11-23/doc-inizszea5505810.shtml",
   "source": "新浪科技"
  },
  {
   "title": "自变量发布新一代具身基础模型 WALL-OSS-1.0，多种真机测试中零样本成功率高达55.1%",
   "url": "https://finance.sina.com.cn/tech/shenji/2026-11-23/doc-inizszek0653627.shtml",
   "source": "新浪科技"
  },
  {
   "title": "蚂蚁阿福宣布启动全球化，国际版App将在多个国家和地区上线",
   "url": "https://finance.sina.com.cn/roll/2026-11-23/doc-inizsuwh2373107.shtml",
   "source": "新浪科技"
  },
  {
   "title": "传转转集团以保密形式申请赴港上市，官方暂无回应",
   "url": "https://finance.sina.com.cn/tech/shenji/2026-11-23/doc-inizsuwn0740887.shtml",
   "source": "新浪科技"
  },
  {
   "title": "传原京东集团首席战略官廖建文因病去世",
   "url": "https://finance.sina.com.cn/tech/shenji/2026-11-23/doc-inizsuwk8403210.shtml",
   "source": "新浪科技"
  },
  {
   "title": "蚂蚁百灵医疗健康大模型宣布开源",
   "url": "https://finance.sina.com.cn/tech/shenji/2026-11-23/doc-inizsuwk8403188.shtml",
   "source": "新浪科技"
  }
 ]
};
if (typeof window !== 'undefined') window.WB_DATA = WB_DATA;
