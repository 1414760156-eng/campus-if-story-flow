# 开发长线_IF可玩支线R5-ROMANCE专注感情线

## 用途

本文用于把 `R5-ROMANCE` 从第五幕亲密分歧骨架扩展成可拆剧情页、选项页、变量回调和毕业结算的 A 级社团女生派生专注感情线。

它不是主轴“没选晚风以后换女主”的补偿路线，也不是凭一次照面开启的新感情池。它规定的是：玩家必须已经在第三幕 `A3-ACTIVITY-PUBLIC` 父池里让某个女生角色连续出现、承担现实任务、留下可拆选择和后续回声，到了第五幕才允许把林亦舟的情绪、时间和解释转向这个人。

本线当前只承认两个已铺垫候选来源：

- 沈嘉禾：来自材料协作、班会归档、打印店、共享文档、阳光书屋和现实边界。
- 夏知微：来自摄影社、影像授权、照片用途、晨光湖、凌空栈道和被看见的边界。

进入本线后必须锁定一个 `romance_candidate`。第六卷不能继续在沈嘉禾、夏知微、晚风之间均摊，也不能重新打开宿舍站队组完整命运线。

## 路线定位

路线编号：`R5-ROMANCE`

路线池编号：`POOL-R5-ROMANCE`

路线等级：A 级社团女生派生亲密外流线

共享范围：第一卷、第二卷共享；第三幕必须进入 `A3-ACTIVITY-PUBLIC` 父池并形成女生候选来源；第五幕前段通过 `P0C_ACT5_CANDIDATE_CONFIRM` 进入独立命运池。

核心体验：林亦舟不是忽然爱上一个新对象，而是在活动、材料、照片、授权、打印、共享文档和现实协作里，逐渐发现自己愿意把某些原本说不出口的话解释给一个具体的人听。关系会变甜，但甜必须同时带来时间代价、钱压、公开边界、宿舍缺席和未说清的旧账。

本线的可玩重点是：玩家是否能把亲密关系写成“具体生活里的互相靠近”，而不是把它写成逃离 4XX、逃离晚风或逃离责任的漂亮出口。

## 候选来源核验

必须先通过来源核验，才能进入本线。

| 候选 | A3 来源 | 必要条件 | 不足时处理 |
|---|---|---|---|
| 沈嘉禾 | 班会材料归档、材料协作、共享文档、打印店、阳光书屋 | `shen_jiahe_link >= 2`、`study_reality >= 1`、`boundary_awareness >= 1`、`female_candidate_present = true` | 只能作为材料边界软照面，不能锁感情线 |
| 夏知微 | 摄影社、照片授权、活动影像、晨光湖、凌空栈道 | `xia_zhiwei_link >= 2`、`image_boundary >= 1`、`expression_need >= 1`、`female_candidate_present = true` | 只能作为观看角度软照面，不能锁感情线 |
| 晚风 | 主轴亲密外流 | 走 `R5-WANFENG` | 不进入本线 |
| 无女生候选来源 | 主持、幕后、志愿、纯流程、自我管理 | `romance_outflow_allowed = false` | 只能流向 `R3-PERFECT`、宿舍修补 / 站队、`R5-WANFENG` 或 `R5-LIEFLAT` |

## 进入条件

建议满足以下条件进入本线：

| 条件 | 建议值 | 说明 |
|---|---:|---|
| `outflow_permission_class` | `club_with_female_candidate` | 必须来自 A3 有女生连续出现的社团 / 活动方向 |
| `romance_outflow_allowed` | `true` | 父池明确允许派生其它感情线 |
| `candidate_link` | `>= 2` | 候选对象至少有两次现实任务级出现 |
| `romance_focus` | `>= 2` | 玩家已经多次把时间或情绪投给候选对象 |
| `dorm_absence` | `>= 1` | 亲密推进至少挤压过一次 4XX 当面节点 |

入口关键选择建议：

```json
{
  "canon_line": "MOTHER-V4",
  "shared_until": "act2_end",
  "branch_mode": "butterfly_outflow",
  "route_pool_id": "POOL-R5-ROMANCE",
  "route_focus": "a3_derived_intimacy",
  "outflow_stage": "act5_intimacy",
  "entry_node": "P0C_ACT5_CANDIDATE_CONFIRM",
  "pool_entry_choice": "P0C_ROMANCE_LOCK_CANDIDATE",
  "active_route_id": "R5-ROMANCE",
  "romance_origin": "a3_activity_public",
  "romance_candidate": "shen_jiahe_or_xia_zhiwei",
  "closed_route_ids": ["DEFAULT-4XX", "R5-WANFENG", "R5-ZHOU", "R5-TANG", "R5-LUCHEN", "R5-LIEFLAT", "R4-WORK", "R3-PERFECT"],
  "grafted_lockpoints": ["ME-SHEN-XIA", "ME-CLASS-MATERIAL", "ME-PUBLIC-BOUNDARY", "ME-4XX-GROUP", "ME-GRADUATION"],
  "soft_echo_routes": ["R5-WANFENG", "DEFAULT-4XX", "R5-ZHOU", "R5-TANG", "R5-LUCHEN"]
}
```

## 不改变的母本锁点

- 主轴没有 A3 女生候选来源时，不能进入本线。
- 晚风不是失败选项。若玩家从主轴推进晚风，必须走 `R5-WANFENG`；若玩家进入本线，晚风只能保留朋友、游戏搭子、错过或低频生活回声。
- 第五幕宿舍强冲突仍发生，4XX 旧账不会因为亲密对象出现而被解决。
- 沈嘉禾 / 夏知微都有自己的任务、边界和生活半径，不能写成随叫随到的安慰对象。
- 第六卷只能围绕已锁定的 `romance_candidate` 深入，不能继续多对象均摊。
- 第七卷仍通过预登记、毕业照、答辩、清寝、饭局和离校手续收束。

## 核心变量

| 变量 | 含义 | 高值倾向 | 风险 |
|---|---|---|---|
| `romance_candidate` | 当前锁定对象 | `shen_jiahe` 或 `xia_zhiwei` | 一旦锁定，第六卷不再切换主对象 |
| `romance_focus` | 亲密投入度 | 关系成为主叙事半径 | 宿舍缺席和旧账延迟 |
| `candidate_link` | 候选关系强度 | 更容易触发稳定陪伴 | 过低不能锁线 |
| `shen_jiahe_link` | 沈嘉禾方向关系强度 | 资料、边界、现实协作更稳定 | 容易把亲密处理成流程 |
| `xia_zhiwei_link` | 夏知微方向关系强度 | 影像、观看、表达更稳定 | 容易被公开和照片误读 |
| `public_boundary` | 公开边界 | 授权、署名、朋友圈、照片可控 | 过低触发公开风险 |
| `relationship_truth` | 愿意说真话的程度 | 能解释宿舍、未来和自己选择 | 过低会变成好感悬浮 |
| `time_debt` | 时间债 | 见面、打印、修片、散步占用时间 | 挤压 4XX、学习和打工 |
| `money_pressure` | 钱压 | 礼物、奶茶、打印、交通更真实 | 钱压不能被浪漫滤镜抹掉 |
| `dorm_absence` | 宿舍缺席 | 4XX 不再默认等他 | 毕业温度降低 |
| `candidate_misread` | 候选对象误读或受伤 | 失约、否认、不说清导致小冷 | 高值触发错过或体面分别 |
| `future_talk` | 未来讨论 | 实习、考研、城市和作品去向更具体 | 说得太满会变成承诺压力 |
| `graduation_temperature` | 毕业结算温度 | 继续联系、私人入口、体面分别或错过 | 综合前述变量决定 |

## 体量与密度

建议 9 章开发体量，对应约 70,000-95,000 字正文容量。本文只提供可开发骨架，不直接写足正文。

最低配置：

- 至少 36 次有效选择。
- 至少 7 个内部回流点。
- 每个内部回流点至少 2 个回流方向。
- 每个回流方向至少 3-4 个连续剧情拍点。
- 第六卷固定 20 个剧情段，5 个四段组，每组一个二方向选择窗口，且只能在 `POOL-R5-ROMANCE` 当前池内分流。

## 候选方向差异

| 项目 | 沈嘉禾方向 | 夏知微方向 |
|---|---|---|
| 关系质感 | 安静、具体、边界清楚、现实协作 | 被看见、轻微暧昧、影像、表达压力 |
| A3 来源 | 班会材料、打印店、共享文档、阳光书屋 | 摄影社、活动影像、照片授权、晨光湖 |
| 亲密增长方式 | 一起核材料、定停止条件、讨论考试和未来 | 授权照片、整理影像、散步、讨论是否留下 |
| 主要代价 | 容易把关系处理成协作和流程 | 容易被照片、公开和他人观看误读 |
| 与 4XX 的摩擦 | 唐骁更能理解，周屿觉得无聊，陆沉觉得边界安全 | 周屿更容易起哄，唐骁担心公开风险，陆沉少评价 |
| 第七卷结算物 | 共享文档、旧书签、考证材料、城市表 | 照片、毕业影像、授权记录、未发出的相册 |

## 章节总表

| 章 | 标题 | 母本事件 | 核心任务 | 关系压力 |
|---:|---|---|---|---|
| 1 | 来源不是偶遇 | `A3-ACTIVITY-PUBLIC` / `ME-SHEN-XIA` | 核验 A3 女生候选来源，禁止主轴凭空跳线 | 没有来源就不能开始 |
| 2 | 先选一个人 | `P0C_ACT5_CANDIDATE_CONFIRM` | 锁定沈嘉禾或夏知微，关闭多对象均摊 | 选择对象也意味着放弃其它亲密方向 |
| 3 | 第一次把话说具体 | `ME-4XX-GROUP` / `ME-SHEN-XIA` | 聊宿舍、聊近况、聊未来或只帮一件事 | 被听见会让他更晚回 4XX |
| 4 | 不是安慰对象 | `ME-DAILY-CAMPUS` | 候选对象也有自己的任务和时间成本 | 亲密不能只索取理解 |
| 5 | 礼物和账单 | `ME-GIFT-FESTIVAL` / `ME-EXPRESS-WORK` | 礼物、打印、奶茶、交通和 AA 现实化 | 甜和钱压同场出现 |
| 6 | 要不要被看见 | `ME-PUBLIC-BOUNDARY` | 共享文档署名、照片授权、朋友圈和起哄 | 公开边界决定关系能不能承受误读 |
| 7 | 晚风停在门外 | `ME-WANFENG-CIRCLE` | 晚风作为低频回声出现，要求说清而非失败 | 转向不能建立在含混伤人上 |
| 8 | 第六卷只走一条生活圈 | `ME-C407-DEMO` / `ME-PUBLIC-BOUNDARY` | 20 段关系成形，围绕当前对象深入 | 爱情不取消项目、材料和毕业流程 |
| 9 | 留下或删掉 | `ME-GRADUATION` | 第七卷毕业结算：继续联系、私人入口、体面分别或错过 | 真实存在过，也可能不继续 |

## 章节开发详表

### 第一章：来源不是偶遇

章节目标：把本线的权限门槛写成剧情和系统判断。玩家必须看见：沈嘉禾 / 夏知微不是凭空出现，而是第三幕已经有连续生活半径。

现实触发：
- 系统回查第三幕 A3 父池记录。
- 若玩家持续选择材料协作、共享文档、打印店、阳光书屋，可出现沈嘉禾候选。
- 若玩家持续选择摄影社、照片授权、活动影像、晨光湖，可出现夏知微候选。

可拆节点：

| 节点 ID | 功能 | 场景 | 人物 |
|---|---|---|---|
| `ROMANCE-CH01-N01` | 来源核验 | A3 回溯 / 路由判断 | 林亦舟、系统记录 |
| `ROMANCE-CH01-N02` | 沈嘉禾来源回声 | 打印店 / 共享文档 | 林亦舟、沈嘉禾 |
| `ROMANCE-CH01-N03` | 夏知微来源回声 | 摄影社 / 晨光湖 | 林亦舟、夏知微 |

关键选择：

| 选择 ID | 玩家动作 | 变量变化 | 后续回调 |
|---|---|---|---|
| `ROMANCE-CH01-C01` | 确认沈嘉禾来源成立 | `romance_candidate = shen_jiahe`、`candidate_link +1`、`study_reality +1` | 第二章进入沈嘉禾锁定判断 |
| `ROMANCE-CH01-C02` | 确认夏知微来源成立 | `romance_candidate = xia_zhiwei`、`candidate_link +1`、`image_boundary +1` | 第二章进入夏知微锁定判断 |
| `ROMANCE-CH01-C03` | 来源不足但强行靠近 | `romance_outflow_allowed = false`、`candidate_misread +1` | 退回 `R5-WANFENG` / 宿舍站队 / 摆烂判断 |
| `ROMANCE-CH01-C04` | 承认只是短暂照面，不锁本线 | `public_boundary +1`、`missed_chance 0` | 保留软回声，不开启完整感情池 |

本章结尾钩子：系统提示不是“好感不足”，而是“来源不足”，像一扇门没有坏，只是从来没有被真正走到过。

### 第二章：先选一个人

章节目标：完成 `romance_candidate` 锁定。双候选只是入口层判断，进入本线后必须选定一个主对象，另一个只能做软照面。

现实触发：
- 沈嘉禾在共享文档或打印店给出具体协作入口。
- 夏知微在摄影社或照片授权里给出具体影像入口。
- 晚风仍可能有低频消息，但不能与本线三角并行。

可拆节点：

| 节点 ID | 功能 | 场景 | 人物 |
|---|---|---|---|
| `ROMANCE-CH02-N01` | 候选确认 | 阳光书屋 / 摄影社 | 林亦舟、候选对象 |
| `ROMANCE-CH02-N02` | 排除其它完整线 | 私聊 / 系统路由 | 林亦舟、晚风软回声 |
| `ROMANCE-CH02-N03` | 第一轮专注投入 | 打印店或晨光湖 | 林亦舟、候选对象 |

关键选择：

| 选择 ID | 玩家动作 | 变量变化 | 后续回调 |
|---|---|---|---|
| `ROMANCE-CH02-C01` | 锁定沈嘉禾，后续以材料和边界推进 | `romance_candidate = shen_jiahe`、`shen_jiahe_link +2`、`romance_focus +1` | 第三章进入共享文档 / 阳光书屋主半径 |
| `ROMANCE-CH02-C02` | 锁定夏知微，后续以影像和观看推进 | `romance_candidate = xia_zhiwei`、`xia_zhiwei_link +2`、`romance_focus +1` | 第三章进入摄影社 / 凌空栈道主半径 |
| `ROMANCE-CH02-C03` | 试图两边都保留 | `candidate_misread +2`、`public_boundary -1`、`romance_focus 0` | 第六卷禁止多对象均摊，关系不稳定 |
| `ROMANCE-CH02-C04` | 先不命名，只保留协作 / 照面 | `candidate_link +1`、`romance_focus -1` | 可退回 A3 软回声，不锁完整线 |

本章结尾钩子：林亦舟在两个聊天框之间停了很久，最后只把其中一个置顶。

### 第三章：第一次把话说具体

章节目标：写第一次真实靠近。林亦舟不只是“心动”，而是把宿舍事、近况、未来或某个具体困境解释给候选对象听。

现实触发：
- 4XX 群消息变短或宿舍当面节点被错过。
- 候选对象正在处理自己的任务，不是专门等他倾诉。
- 林亦舟需要选择说多少、何时停、是否回 4XX。

可拆节点：

| 节点 ID | 功能 | 场景 | 人物 |
|---|---|---|---|
| `ROMANCE-CH03-N01` | 现实陪伴增频 | 阳光书屋 / 凌空栈道 | 林亦舟、候选对象 |
| `ROMANCE-CH03-N02` | 宿舍事是否说出口 | 私聊 / 现场任务 | 林亦舟、候选对象 |
| `ROMANCE-CH03-N03` | 回 4XX 或继续留下 | 校园夜路 / 事项群 | 林亦舟、4XX 软回声 |

关键选择：

| 选择 ID | 玩家动作 | 变量变化 | 后续回调 |
|---|---|---|---|
| `ROMANCE-CH03-C01` | 聊刚发生的宿舍事，但不让对方替自己判断 | `relationship_truth +2`、`romance_focus +1`、`dorm_absence +1` | 第六章公开边界更稳 |
| `ROMANCE-CH03-C02` | 只聊近况和未来，不说冲突 | `future_talk +1`、`emotional_delay +1`、`romance_focus +1` | 关系更轻，旧账延迟 |
| `ROMANCE-CH03-C03` | 帮对方完成具体任务 | `time_debt +1`、`candidate_link +1`、`intimacy_cost +1` | 亲密从行动增长，同时晚回 |
| `ROMANCE-CH03-C04` | 中途回 4XX | `dorm_warmth +1`、`romance_focus -1/+0`、`candidate_misread +0.5` | 专注感情线降速但不消失 |

本章结尾钩子：候选对象没有问“你是不是难过”，只问：“这句话，你准备回去也说一遍吗？”

### 第四章：不是安慰对象

章节目标：防止候选对象沦为情绪容器。她必须有自己的任务、截止时间、作品、考试或协作压力。

现实触发：
- 沈嘉禾有材料样张、共享文档权限或考试安排。
- 夏知微有照片授权、活动影像整理或作品提交。
- 林亦舟想继续说自己的事，但对方也需要他尊重她的时间。

可拆节点：

| 节点 ID | 功能 | 场景 | 人物 |
|---|---|---|---|
| `ROMANCE-CH04-N01` | 对方任务压入 | 打印店 / 摄影社 | 林亦舟、候选对象 |
| `ROMANCE-CH04-N02` | 亲密索取与尊重 | 共享文档 / 修片电脑 | 林亦舟、候选对象 |
| `ROMANCE-CH04-N03` | 时间成本结算 | 门禁 / 课程提醒 | 林亦舟 |

关键选择：

| 选择 ID | 玩家动作 | 变量变化 | 后续回调 |
|---|---|---|---|
| `ROMANCE-CH04-C01` | 先帮对方完成任务，再继续聊 | `candidate_link +1`、`time_debt +1`、`relationship_truth +1` | 关系更扎实，宿舍更晚回 |
| `ROMANCE-CH04-C02` | 要对方先听自己说完 | `candidate_misread +1`、`romance_focus +1`、`public_boundary -1` | 候选对象感到被当成出口 |
| `ROMANCE-CH04-C03` | 明确停止条件：聊到几点、做完哪一步就回去 | `boundary_awareness +2`、`public_boundary +1`、`time_debt 0/+1` | 沈嘉禾方向更稳，夏知微方向也更安全 |
| `ROMANCE-CH04-C04` | 发现自己只是在躲，主动暂停 | `avoidance -1`、`candidate_link +0.5`、`dorm_absence 0` | 保留成熟回声 |

本章结尾钩子：她把时间提醒调到屏幕上，没有赶他走，只说：“到这个点，我们都要停。”

### 第五章：礼物和账单

章节目标：把甜和现实账单放在一起。礼物、奶茶、打印、胶片、交通、AA 和预算都要进入可玩选择。

现实触发：
- 特殊节日、考试前、作品提交前或普通见面。
- 林亦舟想送点东西，又怕太正式或太随便。
- 4XX 可能看见订单、包装或收据。

可拆节点：

| 节点 ID | 功能 | 场景 | 人物 |
|---|---|---|---|
| `ROMANCE-CH05-N01` | 礼物选择 | 淘宝 / 快递站 / 奶茶店 | 林亦舟 |
| `ROMANCE-CH05-N02` | 候选方向差异 | 打印店 / 摄影社 | 林亦舟、候选对象 |
| `ROMANCE-CH05-N03` | 钱压与室友可见 | 4XX / 快递柜 | 林亦舟、4XX 软回声 |

关键选择：

| 选择 ID | 玩家动作 | 变量变化 | 后续回调 |
|---|---|---|---|
| `ROMANCE-CH05-C01` | 送符合对方任务的小礼物 | `gift_debt +1`、`money_pressure +1`、`candidate_link +1` | 礼物成为真实生活物，不是奖励道具 |
| `ROMANCE-CH05-C02` | 不送礼，只陪对方完成一件事 | `time_debt +1`、`relationship_truth +1`、`romance_focus +1` | 更自然但挤压宿舍时间 |
| `ROMANCE-CH05-C03` | 坚持 AA 或说清花费边界 | `public_boundary +1`、`money_pressure 0/+1`、`candidate_link +1` | 关系更清楚，不靠消费证明 |
| `ROMANCE-CH05-C04` | 临时退缩，不送也不解释 | `candidate_misread +1`、`missed_chance +1`、`romance_focus -1` | 第六章公开边界降温 |

本章结尾钩子：收据被风吹到公共桌边上，周屿看了一眼，没起哄，只说：“你最近挺会缺席的。”

### 第六章：要不要被看见

章节目标：处理公开边界。沈嘉禾方向是共享文档、署名、权限和协作边界；夏知微方向是照片、授权、发不发、给谁看和要不要删。

现实触发：
- 亲密关系被资料、照片、朋友圈、评论或同学起哄看见。
- 候选对象等待林亦舟给出边界，而不是自动替他圆。
- 4XX 也可能看见这段关系的痕迹。

可拆节点：

| 节点 ID | 功能 | 场景 | 人物 |
|---|---|---|---|
| `ROMANCE-CH06-N01` | 公开边界触发 | 共享文档 / 照片 / 朋友圈 | 林亦舟、候选对象 |
| `ROMANCE-CH06-N02` | 4XX 可见回声 | 公共桌 / 事项群 | 林亦舟、4XX |
| `ROMANCE-CH06-N03` | 关系命名或不命名 | 私聊 / 夜路 | 林亦舟、候选对象 |

关键选择：

| 选择 ID | 玩家动作 | 变量变化 | 后续回调 |
|---|---|---|---|
| `ROMANCE-CH06-C01` | 明确靠近，但先说清公开边界 | `public_boundary +2`、`romance_focus +2`、`candidate_link +1` | 锁定成熟亲密方向 |
| `ROMANCE-CH06-C02` | 暂时不命名关系，但保持稳定陪伴 | `romance_focus +1`、`ambiguity +1`、`candidate_misread 0/+1` | 甜和误读并存 |
| `ROMANCE-CH06-C03` | 被起哄后否认 | `candidate_misread +2`、`public_boundary -1`、`dorm_visibility +1` | 后续需要修补，否则转错过 |
| `ROMANCE-CH06-C04` | 因宿舍冲突回头，暂停推进 | `dorm_warmth +1`、`romance_focus -1`、`candidate_link 0` | 候选对象不消失，但停在差一点 |

本章结尾钩子：照片没有发出去，共享文档也没有改名，只有那个权限提示停在屏幕右上角，像一句没说完的话。

### 第七章：晚风停在门外

章节目标：处理晚风回声。晚风不能被写成失败，也不能成为三角工具。进入本线后，晚风只作为低频朋友、游戏搭子、错过文本或边界照面出现。

现实触发：
- 晚风发来游戏语音、抖音状态或一句“最近还好吗”。
- 林亦舟已经锁定沈嘉禾或夏知微方向。
- 玩家需要选择是否说清，而不是把晚风按到后面。

可拆节点：

| 节点 ID | 功能 | 场景 | 人物 |
|---|---|---|---|
| `ROMANCE-CH07-N01` | 晚风低频回声 | 微信 / 游戏房间 | 林亦舟、晚风 |
| `ROMANCE-CH07-N02` | 说清或含混 | 私聊 / 通知栏 | 林亦舟、晚风 |
| `ROMANCE-CH07-N03` | 回主候选线 | 阳光书屋 / 摄影社 | 林亦舟、候选对象 |

关键选择：

| 选择 ID | 玩家动作 | 变量变化 | 后续回调 |
|---|---|---|---|
| `ROMANCE-CH07-C01` | 告诉晚风现在只能做朋友 / 游戏搭子 | `public_boundary +1`、`candidate_misread 0`、`missed_chance +0.5` | 晚风体面退为生活回声 |
| `ROMANCE-CH07-C02` | 含糊拖延，不说清 | `candidate_misread +1`、`missed_chance +1`、`avoidance +1` | 候选对象若知道，会形成信任风险；晚风低频回声降温 |
| `ROMANCE-CH07-C03` | 完全不回晚风 | `missed_chance +1`、`relationship_truth -1`、`romance_focus +0` | 毕业回声变冷 |
| `ROMANCE-CH07-C04` | 回去找晚风推进亲密 | 不结算本池变量，`POOL-R5-ROMANCE` 不锁 | 必须退出本线，转 `R5-WANFENG` 或回路由判断 |

本章结尾钩子：晚风回得很慢，最后只发来一句：“那就别把我留在通知栏里。”

### 第八章：第六卷只走一条生活圈

章节目标：承接第六卷关系成形和 20 段结构。此章强调：选择专注感情线后，第六卷围绕当前对象生活圈深入，而不是继续多线均摊。

现实触发：
- C407、课程演示、材料归档、照片授权、项目时间和毕业前置任务并行。
- 当前候选对象生活圈开始成为主要叙事半径。
- 4XX 作为旧主轴回声出现，事项群变短。

可拆节点：

| 节点 ID | 功能 | 场景 | 人物 |
|---|---|---|---|
| `ROMANCE-CH08-N01` | 第六卷主半径确认 | 共享文档 / 摄影社 | 林亦舟、候选对象 |
| `ROMANCE-CH08-N02` | C407 / 材料 / 影像嫁接 | C407 / 打印店 / 修片电脑 | 林亦舟、4XX、候选对象 |
| `ROMANCE-CH08-N03` | 两边解释成本 | 事项群 / 私聊 | 林亦舟 |

关键选择：

| 选择 ID | 玩家动作 | 变量变化 | 后续回调 |
|---|---|---|---|
| `ROMANCE-CH08-C01` | 围绕当前对象生活圈推进，同时给 4XX 最低事实 | `romance_focus +1`、`public_boundary +1`、`dorm_absence +1` | 第九章继续联系可用 |
| `ROMANCE-CH08-C02` | 只顾亲密对象，不处理 4XX 最低事实 | `romance_focus +2`、`dorm_absence +2`、`graduation_temperature -1` | 甜但旧线明显降温 |
| `ROMANCE-CH08-C03` | 为 4XX 暂停亲密推进 | `dorm_warmth +1`、`romance_focus -1`、`candidate_misread +1` | 体面分别风险上升 |
| `ROMANCE-CH08-C04` | 试图同时推进沈嘉禾和夏知微 | 不结算本池变量，`candidate_misread +2` | 不允许进入第六卷 20 段映射 |

本章结尾钩子：第六卷不是把所有关系摆上桌，而是把一条关系摆得更近，近到别的椅子都退开一点。

### 第九章：留下或删掉

章节目标：完成第七卷毕业结算。沈嘉禾方向以共享文档、材料、旧书签、考证和城市去向收束；夏知微方向以照片、毕业影像、授权记录、留下或删掉收束。

现实触发：
- 毕业照、清寝、答辩、离校手续、饭局和最后一次私聊到来。
- 候选对象也有自己的实习、考研、工作城市或作品去向。
- 林亦舟需要决定：继续联系、体面分别、保留私人入口或承认错过。

可拆节点：

| 节点 ID | 功能 | 场景 | 人物 |
|---|---|---|---|
| `ROMANCE-CH09-N01` | 毕业结算物 | 共享文档 / 相册 / 旧书签 | 林亦舟、候选对象 |
| `ROMANCE-CH09-N02` | 未来讨论 | 校门 / 车站 / 私聊 | 林亦舟、候选对象 |
| `ROMANCE-CH09-N03` | 最后温度结算 | 离校手续 / 微信 | 林亦舟、候选对象 |

关键选择：

| 选择 ID | 玩家动作 | 变量变化 | 后续回调 |
|---|---|---|---|
| `ROMANCE-CH09-C01` | 讨论毕业后的现实联系频率 | `future_talk +2`、`public_boundary +1`、`graduation_temperature +2` | 继续联系结算 |
| `ROMANCE-CH09-C02` | 保留一个私人入口，不公开承诺 | `candidate_link +1`、`public_boundary +1`、`future_talk 0/+1` | 私人入口结算 |
| `ROMANCE-CH09-C03` | 说清但不承诺 | `relationship_truth +1`、`future_talk +1`、`graduation_temperature +1` | 体面分别结算 |
| `ROMANCE-CH09-C04` | 删除照片 / 关闭共享文档 / 不再回复 | `candidate_misread +2`、`missed_chance +2`、`graduation_temperature -2` | 错过结算 |

本章结尾钩子：沈嘉禾方向是一份共享文档最后一次显示“已停止同步”；夏知微方向是一张照片停在删除确认框里，按钮还没按下去。

## 内部回流点

本线设置 7 个内部回流点。它们都只能回到 `POOL-R5-ROMANCE`，不能借晚风、4XX、沈嘉禾 / 夏知微未锁对象或 5X 照面开启其它完整路线。

### `RET-ROMANCE-01` 候选来源复核

| 方向 | 第1拍：现实触发 | 第2拍：照面或打断 | 第3拍：玩家选择 | 第4拍：回流与结算 |
|---|---|---|---|---|
| A 沈嘉禾来源回 | 共享文档里有连续协作记录。 | 沈嘉禾只问格式和停止条件。 | 确认来源 / 只做软照面 / 强行靠近。 | 回第一章；结算 `shen_jiahe_link`、`boundary_awareness`。 |
| B 夏知微来源回 | 摄影社或照片授权有连续记录。 | 夏知微问能不能用那张背影。 | 确认来源 / 只做授权 / 强行靠近。 | 回第一章；结算 `xia_zhiwei_link`、`image_boundary`。 |
| C 来源不足回 | A3 只有一次照面。 | 系统不允许锁线。 | 退回晚风 / 回宿舍 / 摆烂。 | 回路由判断；结算 `romance_outflow_allowed`。 |

### `RET-ROMANCE-02` 沈嘉禾打印样张

| 方向 | 第1拍：现实触发 | 第2拍：照面或打断 | 第3拍：玩家选择 | 第4拍：回流与结算 |
|---|---|---|---|---|
| A 打印回 | 沈嘉禾需要资料样张确认。 | 打印店快关门，4XX 群在催。 | 一起去打印 / 只线上改 / 先回 4XX。 | 回沈嘉禾主线；结算 `time_debt`、`public_boundary`。 |
| B 格式回 | 文档页边距和附件顺序出错。 | 沈嘉禾不替人背锅，只指出问题。 | 让她只看格式 / 公开感谢 / 私聊全部材料。 | 回边界；结算 `boundary_awareness`、`relationship_truth`。 |
| C AA 回 | 打印费用需要结算。 | 林亦舟想顺手付掉。 | AA / 替她付 / 下次互请。 | 回第五章；结算 `money_pressure`、`candidate_misread`。 |

### `RET-ROMANCE-03` 夏知微照片授权

| 方向 | 第1拍：现实触发 | 第2拍：照面或打断 | 第3拍：玩家选择 | 第4拍：回流与结算 |
|---|---|---|---|---|
| A 授权回 | 夏知微问能不能用一张背影。 | 林亦舟发现自己会被看见。 | 授权 / 只留私存 / 要求不露脸。 | 回夏知微主线；结算 `public_boundary`、`image_boundary`。 |
| B 修片回 | 摄影社电脑前，照片还没导出。 | 4XX 消息压在通知栏。 | 等她修完 / 先回寝 / 帮她整理素材。 | 回时间债；结算 `time_debt`、`romance_focus`。 |
| C 删除回 | 照片让林亦舟觉得太明显。 | 夏知微等他一句准确边界。 | 删除 / 暂存 / 说清哪里不适合。 | 回公开边界；结算 `relationship_truth`、`candidate_misread`。 |

### `RET-ROMANCE-04` 共享文档权限

| 方向 | 第1拍：现实触发 | 第2拍：照面或打断 | 第3拍：玩家选择 | 第4拍：回流与结算 |
|---|---|---|---|---|
| A 权限回 | 共享文档需要开编辑权限。 | 名字反复出现在协作者列表。 | 开权限 / 只开评论 / 线下确认。 | 回第六章；结算 `public_boundary`、`dorm_visibility`。 |
| B 署名回 | 材料需要署名或致谢。 | 唐骁或同学看见协作者名字。 | 写清协作范围 / 不署名 / 私下感谢。 | 回公开边界；结算 `boundary_awareness`、`candidate_misread`。 |
| C 停止回 | 沈嘉禾问这份文档做到哪里停。 | 林亦舟意识到亲密也需要停止条件。 | 设停止条件 / 继续加需求 / 暂停协作。 | 回第四章；结算 `relationship_truth`、`time_debt`。 |

### `RET-ROMANCE-05` 凌空栈道散步

| 方向 | 第1拍：现实触发 | 第2拍：照面或打断 | 第3拍：玩家选择 | 第4拍：回流与结算 |
|---|---|---|---|---|
| A 聊冲突回 | 宿舍冲突后不想立刻回寝。 | 候选对象在栈道或湖边出现。 | 聊刚发生的事 / 只走一段 / 中途回寝。 | 回第三章；结算 `relationship_truth`、`dorm_absence`。 |
| B 聊未来回 | 两人绕开宿舍，聊考试、作品或城市。 | 未来话题比当下更容易说。 | 继续聊 / 停在现实问题 / 打断回寝。 | 回第九章铺垫；结算 `future_talk`。 |
| C 沉默回 | 林亦舟只是想有人在旁边。 | 对方不替他定义情绪。 | 说清 / 继续沉默 / 道别。 | 回亲密温度；结算 `candidate_link`、`candidate_misread`。 |

### `RET-ROMANCE-06` 晚风低频回声

| 方向 | 第1拍：现实触发 | 第2拍：照面或打断 | 第3拍：玩家选择 | 第4拍：回流与结算 |
|---|---|---|---|---|
| A 说清回 | 晚风发来游戏语音。 | 林亦舟已锁定候选对象。 | 说清只做朋友 / 含混拖延 / 不回。 | 回第七章；结算 `public_boundary`、`missed_chance`。 |
| B 抖音回 | 晚风发来武生院相关视频。 | 视频和当前对象的场景重叠。 | 回一句清楚话 / 收藏不回 / 转给候选对象。 | 回边界；结算 `relationship_truth`、`candidate_misread`。 |
| C 误开回 | 玩家试图重新推进晚风。 | 路由发现当前池冲突。 | 退出本线 / 放弃推进 / 回路由判断。 | 不在 `POOL-R5-ROMANCE` 内继续。 |

### `RET-ROMANCE-07` 毕业照片或文档

| 方向 | 第1拍：现实触发 | 第2拍：照面或打断 | 第3拍：玩家选择 | 第4拍：回流与结算 |
|---|---|---|---|---|
| A 沈嘉禾文档回 | 共享文档最后一次同步。 | 文件名里还有两个人的修改记录。 | 保留入口 / 停止同步 / 发最后一句。 | 回沈嘉禾结算；结算 `future_talk`、`graduation_temperature`。 |
| B 夏知微照片回 | 毕业照片或影像素材需要决定去留。 | 照片能发，也能删。 | 留下 / 删掉 / 只私存。 | 回夏知微结算；结算 `public_boundary`、`graduation_temperature`。 |
| C 饭局回 | 4XX 最后一顿饭和候选对象安排撞期。 | 两边都需要提前解释。 | 两边都说清 / 只去一边 / 临时改口。 | 回毕业结算；结算 `dorm_absence`、`candidate_misread`。 |

## 对话逻辑

### 沈嘉禾

- 她的亲密来自把混乱变具体，而不是替林亦舟承担责任。
- 她会问文件、权限、停止条件、时间边界，不会把每次私聊都自动理解成暧昧。
- 她受伤时通常不大吵，而是把权限收回、把话题退回材料或把边界说得更硬。

### 夏知微

- 她的亲密来自观看角度：能不能拍、能不能发、谁可以看、什么要留下。
- 她不会替林亦舟解释宿舍旧账，但会让他意识到自己如何被别人看见。
- 她受伤时可能不是冷战，而是把某张照片删掉，或不再问他要不要留下。

### 林亦舟

- 不能写成“换女主就解决问题”。他靠近候选对象，是因为某种生活半径已经让他停下来。
- 他真正要学的是把话说具体、把边界说清、把时间代价承担起来。
- 每次亲密推进都要带出一个后果：错过 4XX、钱压、公开风险、候选对象误读或未来压力。

### 晚风

- 晚风不能被写成失败选项。她可以体面退场、低频出现、提醒说清，也可以不再等。
- 本线里晚风不做主亲密对象，不能继续三角拉扯。

### 4XX

- 周屿会更容易起哄夏知微方向，也更容易觉得沈嘉禾方向无聊。
- 唐骁更能理解沈嘉禾方向的边界和流程，也更担心夏知微方向的公开风险。
- 陆沉少评价，但会注意林亦舟是否提前说明时间和责任。

## 毕业结算

| 结算 ID | 条件倾向 | 结局温度 |
|---|---|---|
| `ROMANCE-END-CONTINUE-SHEN` | `romance_candidate = shen_jiahe`, `relationship_truth >= 5`, `public_boundary >= 4`, `future_talk >= 3` | 两人毕业后仍保留现实联系，可能是材料、考证、城市选择和低频私聊 |
| `ROMANCE-END-CONTINUE-XIA` | `romance_candidate = xia_zhiwei`, `image_boundary >= 4`, `public_boundary >= 4`, `future_talk >= 3` | 两人毕业后仍保留照片 / 影像式联系，不高调但有下一次见面入口 |
| `ROMANCE-END-PRIVATE-ENTRY` | `candidate_link >= 5`, `public_boundary >= 3`, `future_talk <= 2` | 不公开大团圆，但保留共享文档、旧书签、相册或未发出的照片入口 |
| `ROMANCE-END-POLITE-PARTING` | `relationship_truth >= 3`, `candidate_misread <= 3`, `future_talk >= 2` | 关系真实存在过，但实习、考研、城市和作品去向让两人选择不拖住彼此 |
| `ROMANCE-END-MISSED` | `candidate_misread >= 5` 或 `missed_chance >= 4` | 多次含混、否认、失约或公开边界失败，让关系停在差一点 |
| `ROMANCE-END-SWEET-BUT-DORM-COLD` | `romance_focus >= 7`, `dorm_absence >= 5`, `candidate_misread <= 3` | 亲密关系保住了，但 4XX 毕业温度明显降低，甜和缺席一起结算 |

## JSON 拆分建议

基础路由：

```json
{
  "route_id": "R5-ROMANCE",
  "route_pool_id": "POOL-R5-ROMANCE",
  "route_type": "butterfly_outflow",
  "grade": "A",
  "shared_until": "act2_end",
  "entry_node": "P0C_ACT5_CANDIDATE_CONFIRM",
  "entry_choice": "P0C_ROMANCE_LOCK_CANDIDATE",
  "chapters": 9,
  "min_effective_choices": 36,
  "return_points": [
    "RET-ROMANCE-01",
    "RET-ROMANCE-02",
    "RET-ROMANCE-03",
    "RET-ROMANCE-04",
    "RET-ROMANCE-05",
    "RET-ROMANCE-06",
    "RET-ROMANCE-07"
  ],
  "local_variables": [
    "romance_candidate",
    "romance_focus",
    "candidate_link",
    "shen_jiahe_link",
    "xia_zhiwei_link",
    "public_boundary",
    "relationship_truth",
    "time_debt",
    "money_pressure",
    "dorm_absence",
    "candidate_misread",
    "future_talk",
    "graduation_temperature"
  ]
}
```

章节节点命名：

- `ROMANCE-CH01-*` 至 `ROMANCE-CH09-*`：主章节节点。
- `RET-ROMANCE-01-*` 至 `RET-ROMANCE-07-*`：内部回流节点。
- `ECHO-ROMANCE-*`：第六卷、第七卷公共锁点回声。

## 第六卷 20 段承接映射占位

`act6_20_scene_mapping` 拆分时必须服从 `开发规则_IF第五第六卷玩法节奏硬约束.md`：第六卷固定 20 个剧情段，5 个四段组；每 4 段落 1 个选择窗口；每个窗口只给两个 `POOL-R5-ROMANCE` 池内方向。两个方向必须围绕已锁定的 `romance_candidate`，不能重新开放晚风线、宿舍站队线或另一个候选对象完整线。

| 四段组 | 剧情段 | 选择窗口 | 仅保留两个池内方向 |
|---|---|---|---|
| `ACT6-ROMANCE-B01` | `ACT6-ROMANCE-S01` 至 `ACT6-ROMANCE-S04` | `ACT6-ROMANCE-CHOICE-01` | 说清候选来源 / 含混保留协作外壳 |
| `ACT6-ROMANCE-B02` | `ACT6-ROMANCE-S05` 至 `ACT6-ROMANCE-S08` | `ACT6-ROMANCE-CHOICE-02` | 明确公开边界 / 暂时只保留私人入口 |
| `ACT6-ROMANCE-B03` | `ACT6-ROMANCE-S09` 至 `ACT6-ROMANCE-S12` | `ACT6-ROMANCE-CHOICE-03` | 尊重对方任务时间 / 要求对方先接住自己 |
| `ACT6-ROMANCE-B04` | `ACT6-ROMANCE-S13` 至 `ACT6-ROMANCE-S16` | `ACT6-ROMANCE-CHOICE-04` | 给 4XX 最低事实 / 继续让亲密关系延迟旧账 |
| `ACT6-ROMANCE-B05` | `ACT6-ROMANCE-S17` 至 `ACT6-ROMANCE-S20` | `ACT6-ROMANCE-CHOICE-05` | 讨论毕业后现实联系 / 保留当下不承诺 |

## 漂移防线

- 本线不是“换女主奖励线”。没有 A3 女生候选来源时，本线不得启用。
- 本线不是晚风失败线。晚风只能作为低频生活回声或体面错过，不得被写成输掉的对象。
- 本线不能同时保留沈嘉禾和夏知微两个完整主对象。入口可以双候选，锁定后必须单对象推进。
- 本线不能让候选对象替 4XX 兜底。她们可以听、问、提醒边界，但不能解决宿舍旧账。
- 本线内部回流不能打开其它命运池。所有回流只改变当前候选关系温度、公开边界、时间债、钱压、误读和毕业结算。
- 本线不能取消母本公共锁点，只能改变林亦舟进入锁点的位置：更晚、更需要解释、更可能被旧关系误读。

## 开发优先级

1. 先实现来源核验：`outflow_permission_class = club_with_female_candidate`，`romance_outflow_allowed = true`。
2. 再实现候选锁定：`romance_candidate = shen_jiahe` 或 `romance_candidate = xia_zhiwei`，禁止第六卷多对象均摊。
3. 再实现 9 章主事件链。
4. 再实现 7 个内部回流点，每个回流点至少 2 个方向。
5. 再写第六卷公共锁点嫁接：共享文档 / 摄影社 / C407 / 公开边界 / 事项群。
6. 最后写第七卷毕业结算：共享文档、照片、授权、私人入口、体面分别或错过。

本线完成后，`R5-WANFENG` 与 `R5-ROMANCE` 的亲密方向边界形成闭环：主轴只能直进晚风，A3 女生候选来源才可派生沈嘉禾 / 夏知微。后续可转入 `R4-WORK` 或把已完成长线拆成剧情页级 JSON。
