# IF 第七卷 ACT7-WANFENG 晚风线事件变体剧情页级细稿

本文用于把 `R5-WANFENG` / `POOL-R5-WANFENG` 的第七卷毕业结算拆成 12 个同母事件变体。它不是恋爱奖励线，也不是把第七卷改成甜线；它只改变镜头、可操作内容、变量回声和毕业温度。

晚风线的第七卷核心问题是：当大学结束后，游戏语音、微信、地铁口和私人入口还能不能从“随时能说”变成“现实里说得清”。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-WANFENG` |
| `route_pool_id` | `POOL-R5-WANFENG` |
| `act7_variant_id` | `ACT7-WANFENG` |
| `entry_choice` | `P0C_WANFENG_STEP_FORWARD` |
| `route_switch_allowed` | `false` |
| `same_mother_event` | `true` |

禁止项：

- 不允许把晚风线写成毕业奖励、突然官宣或大团圆。
- 不允许让晚风替林亦舟解决青枫居 4XX 的旧账。
- 不允许把晚风写成只等林亦舟的人；她有室友、队友、通勤、实习和自己的节奏。
- 不允许在第七卷借晚风线临时打开沈嘉禾、夏知微、5X 或其它完整路线。
- 不允许用“不公开”遮蔽责任；本线的不公开必须是双方说清后的边界。

## 关键变量

| 变量 | 用途 |
|---|---|
| `wanfeng_link` | 晚风关系连续强度，决定是否仍有真实联系入口。 |
| `wanfeng_boundary` | 公开、见面、语音和未来频率是否说清。 |
| `romance_focus` | 亲密投入度；高值带来靠近，也挤压宿舍当面处理。 |
| `dorm_absence` | 因晚风线错过 4XX 当面节点的累计。 |
| `time_debt` | 地铁、排队、见面、改稿和离校之间的时间债。 |
| `money_pressure` | 交通、奶茶、礼物、打印和离校现实成本。 |
| `public_boundary` | 照片、朋友圈、材料、授权和可见范围边界。 |
| `wanfeng_misread` | 晚风误读、失约受伤或聊天变短的累计。 |
| `dorm_visibility` | 4XX 是否看见这段关系，及其带来的解释压力。 |
| `future_talk` | 毕业城市、实习、考研和联系频率是否被具体讨论。 |
| `intimacy_cost` | 亲密关系带来的迟到、缺席、解释成本。 |
| `wanfeng_city_seen` | 是否把毕业后城市写成现实字段。 |
| `wanfeng_future_frequency` | 是否讨论毕业后联系频率。 |
| `wanfeng_private_entry` | 是否保留微信、语音、旧游戏房间或私存照片作为私人入口。 |
| `wanfeng_final_contact_scope` | 最终联系范围：继续联系、私人入口、体面分别或错过。 |
| `graduation_temperature` | 毕业结算温度：继续联系、私人入口、体面分别、甜但有代价或错过。 |

## 12 事件总表

| 事件 | 晚风线变体功能 |
|---|---|
| `ACT7-E01-PRE-REGISTER` | 晚风问他填哪里，“以后”第一次变成表格。 |
| `ACT7-E02-PUBLIC-SCOPE` | 不公开不是躲藏，而是双方确认材料和照片边界。 |
| `ACT7-E03-LAST-NEW-YEAR` | 最后一个新年通过消息、语音和私存目录出现。 |
| `ACT7-E04-THESIS-TOPIC` | 开题方向和毕业后城市 / 联系频率一起被问到。 |
| `ACT7-E05-MARCH-QUEUE` | 三四月事项和线下见面撞期，检验能不能提前说。 |
| `ACT7-E06-THESIS-REVISION` | 晚风能陪他听语音改摘要，但不能变成免费工具。 |
| `ACT7-E07-DEFENSE` | 答辩结果要认真说，还是继续用玩笑糊过去。 |
| `ACT7-E08-GRAD-PHOTO` | 毕业照、预览和私发照片检验公开边界。 |
| `ACT7-E09-DORM-CLEAR` | 清寝旧物和语音记录决定哪些能带走，哪些只私存。 |
| `ACT7-E10-LAST-MEAL` | 最后一顿饭和晚风私聊同时发生，座位和回复都要说清。 |
| `ACT7-E11-LEAVING-PAPERS` | 离校手续把城市、联系方式、档案和联系频率压成现实。 |
| `ACT7-E12-STATION-AFTER` | 武生院站后输出继续联系、私人入口、体面分别或错过。 |

---

## `ACT7-E01-PRE-REGISTER` 毕业去向预登记

| 字段 | 值 |
|---|---|
| `previous_event` | `null` |
| `next_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `main_location` | B204 / 教务系统 / 微信语音 |
| `scene_function` | 预登记把毕业后城市和联系方式写成格子，晚风问他到底填哪里。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 表格亮起 | `ACT7-E01-WANFENG-P01` | B204 发下毕业去向预登记，林亦舟刚点开表格，晚风的消息跳出来：“你填哪里？” | A. 先看去向栏；B. 先回晚风一句玩笑。 | A：`wanfeng_city_seen = true`；B：`avoidance +1`, `wanfeng_misread +1`。 |
| 城市成格 | `ACT7-E01-WANFENG-P02` | 城市、手机号、邮箱都要本人确认。他第一次发现“以后见”不能只靠一句随口。 | A. 写清城市和可联系邮箱；B. 先写待定。 | A：`pre_register_boundary_checked = true`, `future_talk +1`；B：`time_debt +1`, `wanfeng_misread +1`。 |
| 联系人栏 | `ACT7-E01-WANFENG-P03` | “毕业后联系人”一栏不适合直接填晚风，林亦舟意识到亲密和手续不是一回事。 | A. 填正式联系人，私下说明；B. 把表格问题含混带过。 | A：`wanfeng_boundary +1`, `public_boundary +1`；B：`public_boundary -1`, `wanfeng_misread +1`。 |
| 提交回声 | `ACT7-E01-WANFENG-P04` | 提交成功后，晚风没有问“你会不会来找我”，只问：“那你到那个城市以后，还会报平安吗？” | A. 约定到站报平安；B. 说到时候再看。 | A：`wanfeng_future_frequency +1`, `wanfeng_link +1`；B：`future_talk -1`, `graduation_temperature = polite_distance`。 |

核心选择窗：`ACT7-E01-WANFENG-CHOICE-01`，位于 `ACT7-E01-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E01-WANFENG-C01-A` | 把城市和联系频率说清 | `wanfeng_city_seen = true`、`future_talk +1`、`wanfeng_boundary +1`。 |
| `ACT7-E01-WANFENG-C01-B` | 先写待定，以后再说 | `wanfeng_misread +1`、`time_debt +1`、`future_talk -1`。 |

完成条件：`pre_register_boundary_checked`、`wanfeng_city_seen`、`graduation_direction_status`。

---

## `ACT7-E02-PUBLIC-SCOPE` 公开范围确认

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E01-PRE-REGISTER` |
| `next_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `main_location` | 班级材料群 / 朋友圈权限页 / 微信私聊 |
| `scene_function` | 检验晚风线的公开边界：不公开必须是共识，不是林亦舟怕被问。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 授权公告 | `ACT7-E02-WANFENG-P01` | 班级材料群要求确认照片和经历公开范围，晚风刚好发来一张只拍到他半个影子的照片。 | A. 先读授权要求；B. 先看照片。 | A：`public_boundary +1`；B：`romance_focus +1`, `dorm_visibility +1`。 |
| 不公开共识 | `ACT7-E02-WANFENG-P02` | 晚风说“不公开也行，不用拿出来证明给谁看”。林亦舟需要分清共识和回避。 | A. 和她说清哪些能留存；B. 默认不公开，不解释。 | A：`public_scope_boundary_checked = true`, `wanfeng_boundary +1`；B：`avoidance +1`, `wanfeng_misread +1`。 |
| 4XX 刷到 | `ACT7-E02-WANFENG-P03` | 周屿刷到相似背景的照片，唐骁只问授权有没有填，陆沉没评价。 | A. 承认有这张照片但不展开；B. 用玩笑否认。 | A：`dorm_visibility +1`, `public_boundary +1`；B：`wanfeng_misread +2`, `public_boundary -1`。 |
| 回执生成 | `ACT7-E02-WANFENG-P04` | 回执里写着“仅留存”。晚风回了一个很轻的“收到”，没有追问他是不是怕。 | A. 保存回执并发给她；B. 只保存在自己手机里。 | A：`wanfeng_link +1`, `public_consent_checked = true`；B：`wanfeng_private_entry +1`。 |

核心选择窗：`ACT7-E02-WANFENG-CHOICE-01`，位于 `ACT7-E02-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E02-WANFENG-C01-A` | 把不公开说成共识 | `public_scope_boundary_checked = true`、`wanfeng_boundary +1`、`public_boundary +1`。 |
| `ACT7-E02-WANFENG-C01-B` | 默认不公开但不解释 | `avoidance +1`、`wanfeng_misread +1`、`public_boundary -1`。 |

完成条件：`public_scope_boundary_checked`、`public_consent_checked`、`wanfeng_public_scope`。

---

## `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `next_event` | `ACT7-E04-THESIS-TOPIC` |
| `main_location` | 青枫居 4XX / 共享盘目录 / 微信语音 |
| `scene_function` | 最后一个新年通过消息、语音和“不公开”的共识出现，强调不用证明亲密。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 目录命名 | `ACT7-E03-WANFENG-P01` | 共享盘里出现“最后一个新年”目录，林亦舟想起第一卷开学时手机里还没有这么多群。 | A. 打开旧物目录；B. 先点开晚风语音。 | A：`opening_contrast_seen = true`；B：`romance_focus +1`, `dorm_absence +1`。 |
| 七秒语音 | `ACT7-E03-WANFENG-P02` | 晚风发来七秒语音，说：“不想公开就不公开，别把不公开说得像你输了。” | A. 把语音私存进目录说明；B. 只听完，不留下记录。 | A：`wanfeng_private_entry +1`, `public_boundary +1`；B：`wanfeng_misread +1`, `missed_chance +1`。 |
| 旧物对照 | `ACT7-E03-WANFENG-P03` | 公共桌上有旧耳机、地铁小票和一张没发出去的截图，四年从空白变成证据。 | A. 标注仅自己留存；B. 把旧截图删掉。 | A：`old_object_scope_checked = true`；B：`wanfeng_private_entry -1`, `late_regret +1`。 |
| 新年回话 | `ACT7-E03-WANFENG-P04` | 4XX 在群里问素材交不交，晚风那边等他一句“我知道”。 | A. 两边都回一句完整的；B. 只回晚风。 | A：`dorm_visibility +1`, `wanfeng_boundary +1`；B：`dorm_absence +1`, `intimacy_cost +1`。 |

核心选择窗：`ACT7-E03-WANFENG-CHOICE-01`，位于 `ACT7-E03-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E03-WANFENG-C01-A` | 私存语音，确认不公开 | `opening_contrast_seen = true`、`wanfeng_private_entry +1`、`public_boundary +1`。 |
| `ACT7-E03-WANFENG-C01-B` | 听完但不留下记录 | `missed_chance +1`、`wanfeng_misread +1`、`graduation_temperature = polite_distance`。 |

完成条件：`opening_contrast_seen`、`old_object_scope_checked`、`wanfeng_private_entry`。

---

## `ACT7-E04-THESIS-TOPIC` 毕业设计方向与开题

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `next_event` | `ACT7-E05-MARCH-QUEUE` |
| `main_location` | C407 / B204 开题复核 / 微信语音 |
| `scene_function` | 开题方向把“接下来做什么”和“毕业后怎么联系”同时推到眼前。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 开题表 | `ACT7-E04-WANFENG-P01` | 林亦舟在 C407 填毕业设计方向，晚风问：“你这题以后也会带到那个城市吗？” | A. 认真解释方向；B. 说只是作业。 | A：`topic_boundary_checked = true`, `future_talk +1`；B：`avoidance +1`, `wanfeng_misread +1`。 |
| 未来频率 | `ACT7-E04-WANFENG-P02` | 晚风没有问承诺，只问“那以后多久能聊一次比较现实”。这个问题比开题更难填。 | A. 讨论现实联系频率；B. 用论文忙糊过去。 | A：`wanfeng_future_frequency +1`, `wanfeng_boundary +1`；B：`time_debt +1`, `wanfeng_misread +1`。 |
| 导师签字 | `ACT7-E04-WANFENG-P03` | 导师签字前，唐骁提醒版本名，4XX 没追问晚风；他们只看见林亦舟这次没有消失。 | A. 先签字再回语音；B. 先回晚风再签。 | A：`project_stability +1`, `wanfeng_boundary +1`；B：`dorm_absence +1`, `intimacy_cost +1`。 |
| 题目落定 | `ACT7-E04-WANFENG-P04` | 题目提交成功，晚风说：“那我以后问你在忙什么，你别只回一个改稿。” | A. 答应说清实际进度；B. 只回一个表情。 | A：`future_talk +1`, `wanfeng_link +1`；B：`wanfeng_misread +1`。 |

核心选择窗：`ACT7-E04-WANFENG-CHOICE-01`，位于 `ACT7-E04-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E04-WANFENG-C01-A` | 讨论毕业后现实频率 | `wanfeng_future_frequency +1`、`future_talk +1`、`wanfeng_boundary +1`。 |
| `ACT7-E04-WANFENG-C01-B` | 用开题忙先糊过去 | `wanfeng_misread +1`、`time_debt +1`、`future_talk -1`。 |

完成条件：`topic_boundary_checked`、`topic_self_signed`、`wanfeng_future_frequency`。

---

## `ACT7-E05-MARCH-QUEUE` 三四月事项排队

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E04-THESIS-TOPIC` |
| `next_event` | `ACT7-E06-THESIS-REVISION` |
| `main_location` | 明德楼窗口 / 地铁口 / 打印店 |
| `scene_function` | 三四月事项和晚风线下见面撞期，检验林亦舟是否提前说清。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 窗口排队 | `ACT7-E05-WANFENG-P01` | 明德楼窗口排到证书核验，晚风发来地铁口照片，说她今天刚好路过。 | A. 先看叫号；B. 先回她在哪里。 | A：`march_boundary_checked = true`；B：`romance_focus +1`, `time_debt +1`。 |
| 撞期提醒 | `ACT7-E05-WANFENG-P02` | 毕业照确认、材料补交和地铁口见面压在同一下午，他不能再用“马上”糊两边。 | A. 提前说明先办材料；B. 说自己尽快到。 | A：`wanfeng_boundary +1`, `queue_item_submitted = true`；B：`wanfeng_misread +1`, `time_debt +1`。 |
| 地铁延迟 | `ACT7-E05-WANFENG-P03` | 晚风在地铁口没有催，只拍了站牌。林亦舟知道这不是浪漫截图，是等人的时间。 | A. 发具体预计时间；B. 买奶茶当补偿。 | A：`future_talk +1`, `wanfeng_link +1`；B：`money_pressure +1`, `wanfeng_misread +1`。 |
| 缺席不补 | `ACT7-E05-WANFENG-P04` | 窗口关闭前他赶上了，但错过了 4XX 公共桌最适合问的一段。 | A. 回群补最低事实；B. 晚点再解释。 | A：`dorm_visibility +1`；B：`dorm_absence +1`, `intimacy_cost +1`。 |

核心选择窗：`ACT7-E05-WANFENG-CHOICE-01`，位于 `ACT7-E05-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E05-WANFENG-C01-A` | 先办材料，提前说明 | `march_boundary_checked = true`、`wanfeng_boundary +1`、`queue_item_submitted = true`。 |
| `ACT7-E05-WANFENG-C01-B` | 先赶见面，材料压后 | `time_debt +1`、`dorm_absence +1`、`wanfeng_misread +1`。 |

完成条件：`march_boundary_checked`、`queue_item_submitted`、`wanfeng_meeting_time_checked`。

---

## `ACT7-E06-THESIS-REVISION` 论文与毕设修改

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E05-MARCH-QUEUE` |
| `next_event` | `ACT7-E07-DEFENSE` |
| `main_location` | C407 / 宿舍桌边 / 微信语音 |
| `scene_function` | 晚风可以陪他听语音改摘要，但不能被写成免费工具；改稿同时追问未来频率。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 红批弹出 | `ACT7-E06-WANFENG-P01` | 导师红批里标了摘要问题，晚风那边问他要不要开语音陪着改。 | A. 先读红批；B. 直接接语音。 | A：`thesis_boundary_checked = true`；B：`romance_focus +1`, `time_debt +1`。 |
| 语音陪改 | `ACT7-E06-WANFENG-P02` | 晚风听他念摘要，忽然说：“我可以陪你改，但你不能只在要我听的时候出现。” | A. 发摘要并说清今晚时间；B. 只让她帮听句子。 | A：`wanfeng_boundary +1`, `thesis_revision_version = shared_summary`；B：`intimacy_cost +1`, `wanfeng_misread +1`。 |
| 版本命名 | `ACT7-E06-WANFENG-P03` | 文件名从“终版”改成“查重前版”，晚风笑他大学四年终于承认终版不一定是终版。 | A. 自己改格式，语音暂停；B. 一边聊一边拖。 | A：`revision_submitted_before_deadline = true`；B：`time_debt +1`, `project_stability -1`。 |
| 截止前夜 | `ACT7-E06-WANFENG-P04` | 提交按钮亮起时，晚风说：“你先交。交完再告诉我。”这次她没有要求他立刻陪她。 | A. 交完认真回复；B. 只发提交截图。 | A：`wanfeng_link +1`, `wanfeng_future_frequency +1`；B：`wanfeng_private_entry +1`, `future_talk 0`。 |

核心选择窗：`ACT7-E06-WANFENG-CHOICE-01`，位于 `ACT7-E06-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E06-WANFENG-C01-A` | 发摘要，也说清今晚时间 | `thesis_boundary_checked = true`、`wanfeng_boundary +1`、`thesis_revision_version = shared_summary`。 |
| `ACT7-E06-WANFENG-C01-B` | 只把晚风当陪改语音 | `intimacy_cost +1`、`wanfeng_misread +1`、`public_boundary -1`。 |

完成条件：`thesis_boundary_checked`、`thesis_revision_version`、`revision_submitted_before_deadline`。

---

## `ACT7-E07-DEFENSE` 答辩日

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E06-THESIS-REVISION` |
| `next_event` | `ACT7-E08-GRAD-PHOTO` |
| `main_location` | C407 答辩门口 / 走廊 / 微信私聊 |
| `scene_function` | 答辩结果检验林亦舟能不能认真说，而不是继续把重要事讲成玩笑。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 门口等待 | `ACT7-E07-WANFENG-P01` | 答辩门口人很多，晚风发来“你进去了吗”。她不在门口，但她等结果。 | A. 回具体顺序；B. 回还没死。 | A：`defense_order_seen = true`；B：`wanfeng_misread +1`。 |
| 结果问法 | `ACT7-E07-WANFENG-P02` | 答辩结束，晚风问“过了吗”，后面又补一句“认真说”。 | A. 认真说通过和修改项；B. 用玩笑糊过去。 | A：`defense_boundary_checked = true`, `wanfeng_link +1`；B：`avoidance +1`, `wanfeng_misread +1`。 |
| 补交小章 | `ACT7-E07-WANFENG-P03` | 补交窗口还开着，他不能为了马上回语音就漏掉签字和小章。 | A. 先补交再语音；B. 先找地方给她打电话。 | A：`defense_post_submit_done = true`, `wanfeng_boundary +1`；B：`time_debt +1`, `project_stability -1`。 |
| 走廊短笑 | `ACT7-E07-WANFENG-P04` | 他在走廊听完晚风那句“可以夸你一句吗”，没有像以前那样把声音压得很低。 | A. 接受夸奖并报备补交；B. 转开话题。 | A：`graduation_temperature = continue_contact`；B：`graduation_temperature = polite_distance`。 |

核心选择窗：`ACT7-E07-WANFENG-CHOICE-01`，位于 `ACT7-E07-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E07-WANFENG-C01-A` | 认真说结果和修改项 | `defense_boundary_checked = true`、`wanfeng_link +1`、`wanfeng_boundary +1`。 |
| `ACT7-E07-WANFENG-C01-B` | 用玩笑把结果糊过去 | `wanfeng_misread +1`、`avoidance +1`、`graduation_temperature = polite_distance`。 |

完成条件：`defense_boundary_checked`、`defense_post_submit_done`、`defense_message_echo`。

---

## `ACT7-E08-GRAD-PHOTO` 毕业照

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 晨光体育场 / 影像授权页 / 微信私聊 |
| `scene_function` | 毕业照检验晚风线的公开边界：能不能私发、能不能留存、能不能不拿来证明。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 队形集合 | `ACT7-E08-WANFENG-P01` | 晨光体育场排毕业照，晚风说想看一眼，但不是要他立刻发朋友圈。 | A. 先拍完集体照；B. 先自拍给她。 | A：`grad_photo_result_recorded = true`；B：`romance_focus +1`, `dorm_visibility +1`。 |
| 私发预览 | `ACT7-E08-WANFENG-P02` | 影像授权页还没确认，林亦舟手里有一张预览小图。 | A. 私发前先说明仅给她看；B. 直接发过去。 | A：`photo_boundary_checked = true`, `public_boundary +1`；B：`public_boundary -1`, `wanfeng_misread +1`。 |
| 4XX 同框 | `ACT7-E08-WANFENG-P03` | 周屿起哄要不要发给“那位”，唐骁问授权，陆沉只提醒别把原图乱传。 | A. 承认会私发但不公开；B. 说没有这回事。 | A：`dorm_visibility +1`, `public_boundary +1`；B：`wanfeng_misread +2`。 |
| 照片存档 | `ACT7-E08-WANFENG-P04` | 晚风把照片存下，没有发动态，只说：“你这张终于不像临时补位。” | A. 回她一张站口照以后再发；B. 说照片就这样吧。 | A：`wanfeng_private_entry +1`, `future_talk +1`；B：`graduation_temperature = private_entry`。 |

核心选择窗：`ACT7-E08-WANFENG-CHOICE-01`，位于 `ACT7-E08-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-WANFENG-C01-A` | 先说明仅私发留存 | `photo_boundary_checked = true`、`public_boundary +1`、`wanfeng_private_entry +1`。 |
| `ACT7-E08-WANFENG-C01-B` | 直接发，边界后补 | `public_boundary -1`、`wanfeng_misread +1`、`dorm_visibility +1`。 |

完成条件：`photo_boundary_checked`、`grad_photo_result_recorded`、`wanfeng_private_entry`。

---

## `ACT7-E09-DORM-CLEAR` 清寝与旧物

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居 4XX / 宿管窗口 / 手机备份页 |
| `scene_function` | 清寝时处理旧耳机、地铁小票、语音记录和没发出的草稿，决定哪些只私存。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 耳机和线 | `ACT7-E09-WANFENG-P01` | 林亦舟收出旧耳机和一根胶带缠过的数据线，很多晚风语音都从这里听过。 | A. 留下旧耳机；B. 扔掉坏线和耳机。 | A：`old_object_scope_checked = true`, `wanfeng_private_entry +1`；B：`late_regret +1`。 |
| 语音备份 | `ACT7-E09-WANFENG-P02` | 手机备份提示空间不足，他必须决定旧语音、截图和游戏结算图要不要留。 | A. 只留关键几条并标私存；B. 全部删除省空间。 | A：`wanfeng_private_entry +1`, `wanfeng_boundary +1`；B：`missed_chance +1`, `graduation_temperature = polite_distance`。 |
| 公共桌旧账 | `ACT7-E09-WANFENG-P03` | 4XX 公共桌还要确认 U 盘和遥控器，晚风没有打断，只让他先处理那边。 | A. 先确认公共物品；B. 一边语音一边收。 | A：`dorm_visibility +1`, `shared_item_owner_checked = true`；B：`dorm_absence +1`, `intimacy_cost +1`。 |
| 交钥匙 | `ACT7-E09-WANFENG-P04` | 宿管窗口收走钥匙，晚风问他是不是以后就不用回那个房间了。 | A. 说房间不用回，但人还要说明；B. 说都结束了。 | A：`future_talk +1`, `wanfeng_link +1`；B：`old_dorm_distance +1`, `wanfeng_misread +1`。 |

核心选择窗：`ACT7-E09-WANFENG-CHOICE-01`，位于 `ACT7-E09-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-WANFENG-C01-A` | 私存关键语音和截图 | `wanfeng_private_entry +1`、`old_object_scope_checked = true`、`wanfeng_boundary +1`。 |
| `ACT7-E09-WANFENG-C01-B` | 删除旧记录，轻装离开 | `missed_chance +1`、`wanfeng_private_entry -1`、`graduation_temperature = polite_distance`。 |

完成条件：`old_object_scope_checked`、`shared_item_owner_checked`、`dorm_key_returned`。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 东北饺子馆 / 校门口 / 微信语音 |
| `scene_function` | 最后一顿饭检验他能不能同时尊重旧桌和晚风私聊，而不是用一边逃另一边。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 饭局投票 | `ACT7-E10-WANFENG-P01` | 4XX 最后一顿饭订在东北饺子馆，晚风刚好问他今晚能不能语音。 | A. 先告诉她有饭局；B. 说晚点聊但不解释。 | A：`wanfeng_boundary +1`；B：`wanfeng_misread +1`。 |
| 座位和时间 | `ACT7-E10-WANFENG-P02` | 饭局人数锁定，晚风没有要他缺席，只问他大概几点结束。 | A. 给明确结束时间；B. 说看情况。 | A：`meal_boundary_checked = true`, `wanfeng_future_frequency +1`；B：`time_debt +1`, `wanfeng_misread +1`。 |
| 桌下消息 | `ACT7-E10-WANFENG-P03` | 饭桌上有人说起毕业后城市，林亦舟手机里晚风发来“别在桌下偷聊”。 | A. 放下手机，饭后回；B. 继续低头回。 | A：`dorm_visibility +1`, `wanfeng_boundary +1`；B：`dorm_absence +1`, `intimacy_cost +1`。 |
| 饭后路口 | `ACT7-E10-WANFENG-P04` | 散场后他站在校门口回语音，晚风说：“你先把那顿饭吃完，是对的。” | A. 认真讲饭局结果；B. 只说吃完了。 | A：`wanfeng_link +1`, `future_talk +1`；B：`graduation_temperature = private_entry`。 |

核心选择窗：`ACT7-E10-WANFENG-CHOICE-01`，位于 `ACT7-E10-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-WANFENG-C01-A` | 给明确结束时间 | `meal_boundary_checked = true`、`wanfeng_boundary +1`、`wanfeng_future_frequency +1`。 |
| `ACT7-E10-WANFENG-C01-B` | 含混地说看情况 | `wanfeng_misread +1`、`time_debt +1`、`intimacy_cost +1`。 |

完成条件：`meal_boundary_checked`、`meal_attendance_locked`、`wanfeng_voice_reply_seen`。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 明德楼离校窗口 / 证书领取处 / 武生院站路上 |
| `scene_function` | 离校手续把城市、证书、档案和未来联系频率压成具体安排。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 离校清单 | `ACT7-E11-WANFENG-P01` | 离校系统一项项变绿，晚风问他今天几点离校，像问一次真正的行程。 | A. 发完整行程；B. 只说下午。 | A：`leaving_boundary_checked = true`, `future_talk +1`；B：`wanfeng_misread +1`。 |
| 证书档案 | `ACT7-E11-WANFENG-P02` | 证书领取处只核身份证，档案窗口只问去向。晚风的问题却是“到了以后先忙什么”。 | A. 认真讲第一周安排；B. 说先活下来。 | A：`certificate_or_archive_seen = true`, `wanfeng_future_frequency +1`；B：`avoidance +1`, `future_talk 0`。 |
| 校园卡余额 | `ACT7-E11-WANFENG-P03` | 校园卡退余额只剩几块钱，够不了一次地铁换乘。亲密在这里也要算路费。 | A. 说清暂时不约见；B. 说有空就去找她。 | A：`money_pressure +1`, `wanfeng_boundary +1`；B：`future_talk +1`, `intimacy_cost +1`。 |
| 站前确认 | `ACT7-E11-WANFENG-P04` | 武生院站路上，晚风问他到站后还会不会发消息。 | A. 约定到站消息；B. 说可能会很忙。 | A：`wanfeng_final_contact_scope = continue_contact`；B：`wanfeng_final_contact_scope = private_entry`。 |

核心选择窗：`ACT7-E11-WANFENG-CHOICE-01`，位于 `ACT7-E11-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-WANFENG-C01-A` | 认真讲第一周安排 | `certificate_or_archive_seen = true`、`future_talk +1`、`wanfeng_future_frequency +1`。 |
| `ACT7-E11-WANFENG-C01-B` | 用玩笑躲开第一周 | `avoidance +1`、`wanfeng_misread +1`、`graduation_temperature = private_entry`。 |

完成条件：`leaving_boundary_checked`、`certificate_or_archive_seen`、`wanfeng_final_contact_scope`。

---

## `ACT7-E12-STATION-AFTER` 武生院站后

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `null` |
| `main_location` | 武生院站 / 地铁车厢 / 微信语音 |
| `scene_function` | 输出晚风线最终温度：继续联系、私人入口、体面分别、甜但有代价或错过。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 进站前 | `ACT7-E12-WANFENG-P01` | 武生院站口人很多，林亦舟把行李箱拉到闸机前，晚风发来一句：“上车了吗？” | A. 先报站；B. 先看 4XX 群。 | A：`wanfeng_voice_reply_seen = true`；B：`dorm_visibility +1`, `time_debt +1`。 |
| 到站以后 | `ACT7-E12-WANFENG-P02` | 地铁开出校园站，最后的选择不再是说不说喜欢，而是到站以后还回不回。 | A. 约定到站报平安和低频联系；B. 只说有空再聊。 | A：`wanfeng_final_contact_scope = continue_contact`, `future_talk +1`；B：`wanfeng_final_contact_scope = polite_parting`, `wanfeng_misread +1`。 |
| 最后一条语音 | `ACT7-E12-WANFENG-P03` | 晚风发来最后一条短语音：“别说永远，先说到站以后给我发消息。” | A. 听完并回复；B. 晚点再听。 | A：`wanfeng_link +1`, `wanfeng_private_entry +1`；B：`missed_chance +1`, `wanfeng_misread +1`。 |
| 站后温度 | `ACT7-E12-WANFENG-P04` | 出站后手机震了一下。林亦舟可以发“到了”，也可以让聊天框慢慢沉下去。 | A. 发“到了”，再补一句现实安排；B. 只发一个表情或不发。 | A：`graduation_temperature = continue_contact`；B：`graduation_temperature = missed`。 |

核心选择窗：`ACT7-E12-WANFENG-CHOICE-01`，位于 `ACT7-E12-WANFENG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-WANFENG-C01-A` | 到站报平安，保留低频联系 | `wanfeng_final_contact_scope = continue_contact`、`wanfeng_private_entry +1`、`graduation_temperature = continue_contact`。 |
| `ACT7-E12-WANFENG-C01-B` | 有空再聊，聊天框沉下去 | `wanfeng_final_contact_scope = polite_parting`、`wanfeng_misread +1`、`graduation_temperature = missed`。 |

完成条件：`wanfeng_final_contact_scope`、`graduation_temperature`、`station_after_echo_seen`。

---

## 结局温度建议

| 结局 | 条件建议 | 文本落点 |
|---|---|---|
| `WANFENG-END-CONTINUE` | `wanfeng_link >= 7`、`wanfeng_boundary >= 5`、`future_talk >= 3`、`wanfeng_misread <= 2` | 毕业后继续联系，不许诺永远，但有清楚的低频联系和下一次见面入口。 |
| `WANFENG-END-PRIVATE-ENTRY` | `wanfeng_link >= 5`、`public_boundary >= 3`、`future_talk <= 2` | 关系不公开收束成私人入口：微信、语音、旧游戏房间或一张没有发出的照片。 |
| `WANFENG-END-POLITE-PARTING` | `wanfeng_boundary >= 4`、`future_talk >= 2`、`romance_focus <= 5` | 关系真实存在过，但城市、实习和生活节奏分开，选择体面分别。 |
| `WANFENG-END-MISSED` | `wanfeng_misread >= 5` 或 `missed_chance >= 4` | 多次失约、含混和没有说清让关系停在差一点。 |
| `WANFENG-END-SWEET-BUT-COSTLY` | `romance_focus >= 7`、`dorm_absence >= 5`、`public_boundary >= 2` | 晚风关系保住了，但 4XX 毕业温度明显降低，甜和缺席一起结算。 |

## 后续 JSON 接入建议

- 正式 JSON 文件建议命名为 `开发数据_IF剧情页级JSON_R5-WANFENG_v1.json`。
- `source_docs` 至少引用本文、`开发长线_IF可玩支线R5-WANFENG晚风线.md`、`开发规则_IF第七卷毕业结算与共用事件变体矩阵.md`。
- 每个事件保持 4 个剧情页、1 个二方向选择窗、`same_mother_event = true`、`route_switch_allowed = false`。
- 重点记录 `wanfeng_private_entry`、`wanfeng_future_frequency`、`wanfeng_final_contact_scope`，用于区分继续联系、私人入口、体面分别、甜但有代价和错过。
