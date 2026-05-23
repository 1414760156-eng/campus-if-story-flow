# IF 第六卷 ACT6-WANFENG 晚风线正式剧情页

本文用于把 `R5-WANFENG` / `POOL-R5-WANFENG` 的第六卷承接层从长线占位扩成 20 个正式剧情段、5 个四段组和 5 个双方向选择窗口。

本文件不是第七卷结算，也不重新开放宿舍站队、沈嘉禾 / 夏知微、工作线或 5X。第六卷只处理一件事：林亦舟已经选择把生活重心更多投给晚风以后，事项群、C407、公开边界、晚风生活圈、毕业前现实联系怎样把这段关系定形。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-WANFENG` |
| `route_pool_id` | `POOL-R5-WANFENG` |
| `act6_variant_id` | `ACT6-WANFENG` |
| `entry_node` | `P0C_ACT5_WANFENG_BOUNDARY` |
| `pool_entry_choice` | `P0C_WANFENG_STEP_FORWARD` |
| `route_focus` | `main_axis_intimacy` |
| `romance_origin` | `main_axis_wanfeng` |
| `route_switch_allowed` | `false` |
| `new_full_route_unlock_allowed` | `false` |

禁止项：

- 不允许把晚风写成奖励甜线或宿舍问题解决者。
- 不允许通过第六卷转去沈嘉禾、夏知微或其它感情线。
- 不允许把 4XX 写成反对恋爱的阻碍；他们只感受到林亦舟缺席、延迟和解释不足。
- 不允许在选择窗口给第三方向；每个窗口只保留当前池内两种处理方式。
- 不允许取消母本公共锁点：事项群、C407、公开边界、答辩预备、毕业去向预热都仍发生。

## 关键变量

| 变量 | 用途 |
|---|---|
| `wanfeng_link` | 晚风关系连续强度。 |
| `wanfeng_boundary` | 见面、公开、语音、生活圈和未来频率的边界清晰度。 |
| `wanfeng_private_entry` | 是否形成稳定私人入口。 |
| `wanfeng_future_frequency` | 毕业后联系频率是否被具体讨论。 |
| `wanfeng_final_contact_scope` | 第七卷最终联系范围。 |
| `romance_focus` | 林亦舟把时间和解释投给晚风的程度。 |
| `dorm_absence` | 4XX 当面节点缺席程度。 |
| `dorm_visibility` | 4XX 是否看见这段关系。 |
| `dorm_warmth` | 宿舍旧关系温度。 |
| `old_debt` | 宿舍旧账延迟强度。 |
| `time_debt` | 迟到、改约、错过群消息产生的时间债。 |
| `money_pressure` | 见面、交通、奶茶、礼物产生的钱压。 |
| `public_boundary` | 朋友圈、状态、合照、评论和授权边界。 |
| `project_stability` | C407 / 课程演示是否被稳定处理。 |
| `wanfeng_misread` | 晚风因含混、失约、被否认而产生的误读。 |
| `future_talk` | 是否具体谈到毕业后城市、频率和现实限制。 |
| `graduation_temperature` | 第七卷结算温度。 |

## 20 段总表

| 四段组 | 剧情段 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-WANFENG-B01` | `S01` 至 `S04` | `ACT6-WANFENG-CHOICE-01` | 先解释见面安排 / 先处理事项群最低事实 |
| `ACT6-WANFENG-B02` | `S05` 至 `S08` | `ACT6-WANFENG-CHOICE-02` | 公开边界说清 / 暂时只保留私人入口 |
| `ACT6-WANFENG-B03` | `S09` 至 `S12` | `ACT6-WANFENG-CHOICE-03` | 尊重晚风生活圈 / 要求更多优先权 |
| `ACT6-WANFENG-B04` | `S13` 至 `S16` | `ACT6-WANFENG-CHOICE-04` | 两边都解释 / 继续用一边拖住另一边 |
| `ACT6-WANFENG-B05` | `S17` 至 `S20` | `ACT6-WANFENG-CHOICE-05` | 讨论毕业后现实联系 / 保留当下不承诺 |

---

## `ACT6-WANFENG-B01` 见面安排与事项群最低事实

本组承接第五幕晚风线入口。核心不是“去见晚风还是回宿舍”重新选线，而是林亦舟进入晚风线后，是否愿意同时把见面安排和 4XX 最低事实说清。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-WANFENG-S01` 至 `ACT6-WANFENG-S04` |
| `choice_window_id` | `ACT6-WANFENG-CHOICE-01` |
| `choice_after_scene` | `ACT6-WANFENG-S04` |
| `mother_lockpoints` | 事项群短句、线下见面、C407 预备、4XX 低温回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-WANFENG-S01` | 青枫居楼道 / 微信 | 晚风问周末见面时间，4XX 群同时弹出 C407 分工确认。林亦舟看到两个窗口，没有立刻回任何一个。 | 先点开晚风 / 先点开群 / 都先标未读 | `time_debt +1`、`dorm_absence +1` 或 `dorm_visibility +1` |
| `ACT6-WANFENG-S02` | 游戏语音 / 公共桌回声 | 晚风听出他心不在焉，问是不是寝室那边又有事。公共桌上唐骁只发了一个截止时间。 | 告诉晚风今晚要补事实 / 说只是小事 / 让她先等等 | `wanfeng_boundary +1`、`wanfeng_misread +1`、`old_debt +1` |
| `ACT6-WANFENG-S03` | B204 外 / 事项群 | 课程材料需要本人确认。周屿在群里开了个玩笑，陆沉只回“看你安排”。林亦舟意识到他们不再默认等他。 | 回最低事实 / 私聊其中一人 / 不解释直接赴约 | `project_stability +1`、`dorm_warmth -1`、`dorm_absence +1` |
| `ACT6-WANFENG-S04` | 地铁口 / 校门 | 晚风提前到，没催。他如果迟到，必须给出具体理由；如果准时，4XX 那边就只剩短句。 | 把迟到原因说全 / 只说到了 / 先给 4XX 留最低事实 | `wanfeng_link +1`、`wanfeng_boundary +1`、`time_debt +1` |

### 选择窗口

`ACT6-WANFENG-CHOICE-01` 位于 `ACT6-WANFENG-S04` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-WANFENG-C01-A` | 先解释见面安排 | `wanfeng_boundary +2`、`wanfeng_link +1`、`dorm_absence +1`；晚风知道他没有把见面当逃跑，但 4XX 本轮更低温。 |
| `ACT6-WANFENG-C01-B` | 先处理事项群最低事实 | `project_stability +1`、`dorm_visibility +1`、`wanfeng_misread +1`；晚风接受他先处理事实，但记录这次延迟。 |

完成条件：`wanfeng_boundary_checked`、`act6_choice_window_count += 1`、`route_pool_locked = true`。

---

## `ACT6-WANFENG-B02` 公开边界与私人入口

本组处理照片、状态、评论和 4XX 看见后的解释成本。晚风线的公开不是奖励，也不是羞耻；它是被看见以后必须承担的边界。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-WANFENG-S05` 至 `ACT6-WANFENG-S08` |
| `choice_window_id` | `ACT6-WANFENG-CHOICE-02` |
| `choice_after_scene` | `ACT6-WANFENG-S08` |
| `mother_lockpoints` | 朋友圈可见、公开材料边界、宿舍误读、私人入口 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-WANFENG-S05` | 朋友圈 / 抖音状态 | 晚风发了游戏截图，林亦舟的 ID 在角落。周屿刷到后只发了一个“可以啊”。 | 主动和晚风确认可见范围 / 当没看见 / 私下请她隐藏 | `public_boundary +1`、`dorm_visibility +1`、`wanfeng_misread +1` |
| `ACT6-WANFENG-S06` | 4XX 公共桌 | 唐骁没有评价关系，只问他今晚 C407 到不到；陆沉把打印页放在他桌上。关系被看见后，现实任务没有消失。 | 承认关系存在但不展开 / 打哈哈 / 转回 C407 分工 | `dorm_visibility +1`、`project_stability +1`、`old_debt +1` |
| `ACT6-WANFENG-S07` | 校园夜路 / 私聊 | 晚风问他是不是不想让别人知道。她没有生气，只把问题问清楚。 | 说清不是否认，只是不想乱发 / 说以后再说 / 反问她想不想公开 | `wanfeng_boundary +1`、`wanfeng_misread +1`、`future_talk +1` |
| `ACT6-WANFENG-S08` | 共享相册 / 事项群 | 一张照片能不能留、能不能发、谁能看，和 C407 材料授权一样都要本人确认。林亦舟第一次把恋爱边界和公共边界放在同一张清单里。 | 写清照片边界 / 只保留私人入口 / 直接不发 | `public_boundary +1`、`wanfeng_private_entry +1`、`dorm_warmth -1` |

### 选择窗口

`ACT6-WANFENG-CHOICE-02` 位于 `ACT6-WANFENG-S08` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-WANFENG-C02-A` | 公开边界说清 | `public_boundary +2`、`dorm_visibility +1`、`wanfeng_boundary +1`；第七卷可进入公开但有边界的毕业照 / 状态结算。 |
| `ACT6-WANFENG-C02-B` | 暂时只保留私人入口 | `wanfeng_private_entry +2`、`dorm_visibility -1`、`future_talk +0`；关系更隐蔽，后续可能保留私聊入口但公开温度低。 |

完成条件：`public_boundary_checked`、`wanfeng_private_entry_checked`、`route_pool_locked = true`。

---

## `ACT6-WANFENG-B03` 晚风生活圈与优先权压力

本组必须写出晚风不是只等林亦舟的人。她有室友、队友、安排和边界。林亦舟在这里选择尊重她的生活圈，或要求她把自己放在更优先的位置。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-WANFENG-S09` 至 `ACT6-WANFENG-S12` |
| `choice_window_id` | `ACT6-WANFENG-CHOICE-03` |
| `choice_after_scene` | `ACT6-WANFENG-S12` |
| `mother_lockpoints` | 晚风生活圈、队伍语音、4XX 低温照面、优先权压力 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-WANFENG-S09` | 游戏语音 / 晚风宿舍背景音 | 程小满在背景里问“又等他啊”。晚风没有替林亦舟解释，只说他也有事。林亦舟第一次听见自己被别人旁观。 | 主动道歉 / 接玩笑糊过去 / 假装没听见 | `wanfeng_boundary +1`、`wanfeng_misread +1`、`public_boundary +1` |
| `ACT6-WANFENG-S10` | 队伍房间 | 闻峥和叶遥已经开了另一局。晚风可以找别人，不是非他不可。轻微吃味出现，但不能写成占有奖励。 | 尊重她先开局 / 要她等自己 / 退出语音冷处理 | `future_talk +1`、`intimacy_cost +1`、`wanfeng_misread +1` |
| `ACT6-WANFENG-S11` | 食堂侧门 / 4XX 回声 | 周屿碰到他，开玩笑问“今晚又不回？”林亦舟如果只笑，会让缺席变成默认事实。 | 说明自己晚点回 / 只说有约 / 问他们今晚安排 | `dorm_visibility +1`、`dorm_warmth +1` 或 `dorm_absence +1` |
| `ACT6-WANFENG-S12` | 私聊 / 夜路 | 晚风说她不会每次都等他解释完才开始自己的事。林亦舟需要处理优先权，而不是要求她无条件理解。 | 承认她也有安排 / 要她多给自己一点时间 / 说自己最近很乱 | `wanfeng_boundary +1`、`romance_focus +1`、`wanfeng_misread +1` |

### 选择窗口

`ACT6-WANFENG-CHOICE-03` 位于 `ACT6-WANFENG-S12` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-WANFENG-C03-A` | 尊重晚风生活圈 | `wanfeng_boundary +2`、`future_talk +1`、`romance_focus +1`；关系更成熟，甜度不靠占有。 |
| `ACT6-WANFENG-C03-B` | 要求更多优先权 | `romance_focus +1`、`intimacy_cost +1`、`wanfeng_misread +2`；短期靠近，后续更容易进入小冷或错过。 |

完成条件：`wanfeng_life_circle_seen`、`priority_pressure_recorded`、`route_pool_locked = true`。

---

## `ACT6-WANFENG-B04` 两边都要解释

本组是第六幕核心复发。亲密关系不是免解释卡。林亦舟要么学会同时向晚风和 4XX 说明边界，要么继续用一边拖住另一边。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-WANFENG-S13` 至 `ACT6-WANFENG-S16` |
| `choice_window_id` | `ACT6-WANFENG-CHOICE-04` |
| `choice_after_scene` | `ACT6-WANFENG-S16` |
| `mother_lockpoints` | C407、事项群、公开边界、宿舍旧账复发、亲密责任 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-WANFENG-S13` | C407 / 共享文档 | C407 演示预备临时提前，晚风原定线下见面。唐骁只问他是否能按时提交，不问他去哪。 | 提前告诉晚风项目时间 / 压缩项目解释 / 两边都临时改口 | `project_stability +1`、`wanfeng_misread +1`、`avoidance +1` |
| `ACT6-WANFENG-S14` | 事项群 / 私聊 | 4XX 群里只剩“收到”。晚风问他是不是又要临时改。他看见两边都不再等完整解释。 | 给 4XX 发具体安排 / 给晚风发具体补约 / 两边都发短句 | `dorm_warmth +1`、`wanfeng_boundary +1`、`old_debt +1` |
| `ACT6-WANFENG-S15` | 楼下 / 地铁口 | 他赶到时晚风没有生气，只问：“你到底想让我等你，还是想让我帮你躲？”这句话把宿舍旧账带进亲密关系。 | 承认自己在躲 / 说不是她的问题 / 让她先别问 | `wanfeng_boundary +2`、`wanfeng_misread +1`、`old_debt +1` |
| `ACT6-WANFENG-S16` | 公共桌回声 / 夜路 | 周屿不再起哄，唐骁只让他确认下一次分工，陆沉说“要去就提前说”。晚风那边也等一个明确答复。 | 两边都解释 / 用晚风拖住宿舍 / 用宿舍拖住晚风 | `public_boundary +1`、`dorm_absence +1`、`wanfeng_misread +1` |

### 选择窗口

`ACT6-WANFENG-CHOICE-04` 位于 `ACT6-WANFENG-S16` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-WANFENG-C04-A` | 两边都解释 | `wanfeng_boundary +2`、`public_boundary +1`、`dorm_warmth +1`、`old_debt +1`；第七卷可保留私人入口并降低宿舍误读。 |
| `ACT6-WANFENG-C04-B` | 继续用一边拖住另一边 | `avoidance +1`、`wanfeng_misread +2`、`dorm_absence +1`、`graduation_temperature = wanfeng_missed_risk`；第七卷更容易错过或甜但代价高。 |

完成条件：`both_sides_explained_or_deferred`、`project_stability_checked`、`route_pool_locked = true`。

---

## `ACT6-WANFENG-B05` 毕业前联系频率预结算

本组把第六幕交给第七幕。这里不写最终毕业结局，但必须输出第七卷需要读取的联系频率、私人入口、公开边界和宿舍旧账状态。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-WANFENG-S17` 至 `ACT6-WANFENG-S20` |
| `choice_window_id` | `ACT6-WANFENG-CHOICE-05` |
| `choice_after_scene` | `ACT6-WANFENG-S20` |
| `mother_lockpoints` | 毕业去向预热、答辩预备、最后饭局预热、晚风未来安排 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-WANFENG-S17` | 教务系统 / 微信语音 | 毕业去向预登记快开始，晚风提到自己的实习或城市安排。林亦舟第一次发现“以后”不再是语气词。 | 问她具体安排 / 只说到时候再看 / 转回今晚见不见 | `future_talk +1`、`wanfeng_future_frequency +1`、`avoidance +1` |
| `ACT6-WANFENG-S18` | 答辩预备 / 4XX 群 | 4XX 讨论答辩顺序和最后饭局。林亦舟想把两个安排都保住，但时间表不允许他含混。 | 把晚风安排说成事实 / 只回答辩流程 / 不提任何私人安排 | `dorm_visibility +1`、`project_stability +1`、`old_debt +1` |
| `ACT6-WANFENG-S19` | 晚风语音 / 校门 | 晚风没有问“你选谁”，只问“毕业以后你准备怎么联系我”。这个问题比告白更具体。 | 讨论频率和现实限制 / 保留当下不承诺 / 只说会联系 | `wanfeng_future_frequency +1`、`wanfeng_boundary +1`、`wanfeng_misread +1` |
| `ACT6-WANFENG-S20` | 武生院站预回声 / 夜路 | 站台还没到，但第七卷的影子已经出现：毕业照、清寝、饭局、离校手续都会问同一个问题，他还能不能把话说完整。 | 写下联系频率 / 只保留私人入口 / 留到第七卷再说 | `wanfeng_final_contact_scope = branch_dependent`、`graduation_temperature = branch_dependent` |

### 选择窗口

`ACT6-WANFENG-CHOICE-05` 位于 `ACT6-WANFENG-S20` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-WANFENG-C05-A` | 讨论毕业后现实联系 | `future_talk +2`、`wanfeng_future_frequency = discussed`、`wanfeng_final_contact_scope = concrete_low_frequency`、`graduation_temperature = continue_or_private_entry`；第七卷可进入继续联系或私人入口。 |
| `ACT6-WANFENG-C05-B` | 保留当下不承诺 | `wanfeng_private_entry +1`、`future_talk -1`、`wanfeng_misread +1`、`graduation_temperature = polite_parting_or_missed`；第七卷可进入体面分别、错过或甜但代价高。 |

完成条件：`act6_closed = true`、`act6_route_pool_locked = true`、`act6_to_act7_handoff_ready = true`。

---

## Act6 -> Act7 交接

第六幕结束后必须向 `开发数据_IF剧情页级JSON_R5-WANFENG_v1.json` 的第七卷结算层交出以下状态：

| 字段 | 来源 | 第七卷用途 |
|---|---|---|
| `wanfeng_private_entry` | `B02`、`B05` | 判断是否保留微信、语音、旧游戏房间或未公开照片入口。 |
| `wanfeng_boundary` | `B01` 至 `B05` | 判断晚风线是继续、体面分别还是错过。 |
| `wanfeng_future_frequency` | `B05` | 判断毕业后联系频率是否具体。 |
| `wanfeng_final_contact_scope` | `S20` / `CHOICE-05` | 进入第七卷最终联系范围。 |
| `dorm_warmth` | `B01`、`B04` | 判断 4XX 毕业温度是否明显降低。 |
| `old_debt` | `B01`、`B04`、`B05` | 判断旧账是否被亲密关系延后。 |
| `public_boundary` | `B02`、`B04` | 判断毕业照、状态、公开范围和授权。 |
| `wanfeng_misread` | 全部五组 | 判断错过风险。 |
| `future_talk` | `B03`、`B05` | 判断继续联系是否现实。 |

## 防漂移检查

- 如果某一段只写“甜”，必须补一个现实代价：时间、钱、公开、旧群短句、C407 或门禁。
- 如果某一段写 4XX 反应，必须是缺席和解释成本，不是反恋爱阻碍。
- 如果某一段写晚风等待，必须同时写她也有自己的安排。
- 如果某一段写选择，必须只能在 `POOL-R5-WANFENG` 内改变温度和边界，不能转路线。
- 如果某一段写未来，必须具体到城市、实习、联系频率或现实限制，不能只写空泛承诺。
