# 开发细稿_IF第六卷ACT6-LIEFLAT摆烂线正式剧情页

## 用途

本文把 `R5-LIEFLAT` 摆烂线第六幕从长线占位拆成可接入 JSON 的正式剧情页。它只处理 `POOL-R5-LIEFLAT` 池内的第六卷定形层，不重新开启 DEFAULT、周屿线、唐骁线、陆沉线、晚风线、专注感情线、工作线或 5X。

摆烂线第六幕的核心不是省内容，也不是中立保全。玩家每次少回一句、晚到一步、绕开一场，都会让入口变短一点：当晚安静、群里少问、表格过期、饭局没留座、毕业照站到边缘。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-LIEFLAT` |
| `route_pool_id` | `POOL-R5-LIEFLAT` |
| `act6_variant_id` | `ACT6-LIEFLAT` |
| `pool_entry_choice` | `P0D_STAND_NO_REPLY` |
| `route_switch_allowed` | `false` |
| `page_count` | 20 |
| `block_count` | 5 |
| `choice_window_count` | 5 |
| `direction_count` | 10 |

## 禁止项

- 不能把摆烂线写成省略线或空白线。
- 不能把不站队写成保住所有关系的中立正确线。
- 不能从后街、许澈或新圈软照面打开 5X。
- 不能从晚风低频消息转成晚风线。
- 不能让任何内部选择重新打开其它命运池。

## 变量表

| 变量 | 本幕作用 |
|---|---|
| `lieflat_score` | 持续静音、晚回、短逃和低投入累计 |
| `avoidance` | 回避程度，短期降冲突，长期关入口 |
| `lost_chance` | 已错过的当面机会 |
| `missed_chance` | 已过期的补救入口 |
| `low_conflict` | 表面没吵、实际变薄的弱冲突 |
| `late_regret` | 想补但已经晚了一步的后悔 |
| `dorm_trust` | 4XX 是否仍默认把林亦舟算进同一张桌 |
| `old_dorm_distance` | 与旧宿舍的体面距离 |
| `time_debt` | 拖延和短逃累积的时间债 |
| `money_pressure` | 后街、夜宵、临时花费和现实成本 |
| `hard_outflow_shadow` | 5X 影子，只做提示，不在本线锁 5X |
| `graduation_temperature` | 第七幕体面淡化、低存在感、迟来私聊或空白离校的基础温度 |

## 总览表

| 四段组 | 剧情页 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-LIEFLAT-B01` | `S01` - `S04` | `ACT6-LIEFLAT-CHOICE-01` | 继续静音 / 回一句最低事实 |
| `ACT6-LIEFLAT-B02` | `S05` - `S08` | `ACT6-LIEFLAT-CHOICE-02` | 短逃开场 / 回公共桌补一个动作 |
| `ACT6-LIEFLAT-B03` | `S09` - `S12` | `ACT6-LIEFLAT-CHOICE-03` | 保持旁观 / 补一个具体任务 |
| `ACT6-LIEFLAT-B04` | `S13` - `S16` | `ACT6-LIEFLAT-CHOICE-04` | 承认已经错过 / 装作无事发生 |
| `ACT6-LIEFLAT-B05` | `S17` - `S20` | `ACT6-LIEFLAT-CHOICE-05` | 体面淡化 / 空白毕业 |

## `ACT6-LIEFLAT-B01` 静音与最低事实

功能：第六幕开局明确“不选任何人”也会被理解成一种态度。林亦舟可以继续静音，也可以只回一句最低事实，但都不能转回深修补线。

| 页 ID | 场景 | 剧情要点 | 记录变量 |
|---|---|---|---|
| `ACT6-LIEFLAT-S01` | 4XX 事项群 / 床上 | 群消息连续弹出。周屿发了半句玩笑，唐骁贴了截止时间，陆沉只回收到；林亦舟把手机扣下。 | `avoidance +1`、`low_conflict +1`、`dorm_trust -1` |
| `ACT6-LIEFLAT-S02` | 手机界面 / 4XX 门口 | 林亦舟打了“你们先说”，又删掉；门外有人经过，没有敲他的门。 | `time_debt +1`、`lost_chance +1` |
| `ACT6-LIEFLAT-S03` | 公共桌 / 群聊回声 | 公共桌最后只剩“那就先这样”。没有人骂他，也没人再单独问他怎么看。 | `old_dorm_distance +1`、`late_regret +1` |
| `ACT6-LIEFLAT-S04` | 床边 / 通知栏 | 通知栏停了，冲突也暂时停了。林亦舟必须决定继续静音，还是只回一句最低事实。 | `missed_chance +1`、`public_boundary +1` |

### `ACT6-LIEFLAT-CHOICE-01`

| 方向 | 玩家动作 | 变量变化 | 下一组 |
|---|---|---|---|
| `ACT6-LIEFLAT-C01-A` | 继续静音 | `lieflat_score +2`、`avoidance +1`、`dorm_trust -1` | `ACT6-LIEFLAT-B02` |
| `ACT6-LIEFLAT-C01-B` | 回一句最低事实 | `late_regret +1`、`public_boundary +1`、`low_conflict -1` | `ACT6-LIEFLAT-B02` |

## `ACT6-LIEFLAT-B02` 短逃与公共桌动作

功能：写短逃的诱惑。游戏、晚风低频消息和后街夜宵都能让当晚安静，但它们只增加时间债和软回声，不能打开其它路线。

| 页 ID | 场景 | 剧情要点 | 记录变量 |
|---|---|---|---|
| `ACT6-LIEFLAT-S05` | 手机游戏 / 床上 | 游戏结算页弹出“再来一局”，4XX 群未读压在通知栏下面。 | `lieflat_score +1`、`time_debt +1` |
| `ACT6-LIEFLAT-S06` | 私聊 / 门禁时间 | 晚风发来低频消息，问他是不是还在忙。林亦舟可以回她，但这不解决 4XX。 | `wanfeng_low_echo +1`、`avoidance +1` |
| `ACT6-LIEFLAT-S07` | 后街便利店 / 台球厅门口 | 许澈在门口擦肩，新圈看起来轻松。林亦舟停了一下，但没有真正跟过去。 | `hard_outflow_shadow +1`、`money_pressure +1` |
| `ACT6-LIEFLAT-S08` | 青枫居楼下 / 公共桌回声 | 4XX 的灯还亮着。林亦舟必须决定继续短逃，还是回公共桌补一个具体动作。 | `old_dorm_distance +1`、`repair_attempt +1` |

### `ACT6-LIEFLAT-CHOICE-02`

| 方向 | 玩家动作 | 变量变化 | 下一组 |
|---|---|---|---|
| `ACT6-LIEFLAT-C02-A` | 短逃开场 | `lieflat_score +1`、`time_debt +2`、`missed_chance +1` | `ACT6-LIEFLAT-B03` |
| `ACT6-LIEFLAT-C02-B` | 回公共桌补一个动作 | `repair_attempt +1`、`dorm_trust +1`、`late_regret +1` | `ACT6-LIEFLAT-B03` |

## `ACT6-LIEFLAT-B03` 旁观与具体任务

功能：把 C407、表格和材料截止压到摆烂线里。林亦舟可以保持旁观，也可以补一个具体任务；补任务只能保流程，不会转回深关系线。

| 页 ID | 场景 | 剧情要点 | 记录变量 |
|---|---|---|---|
| `ACT6-LIEFLAT-S09` | C407 / 共享文档 | 共享文档有一栏空着，唐骁只在群里贴截止，没有再私聊催他。 | `expired_form_seen +1`、`dorm_trust -1` |
| `ACT6-LIEFLAT-S10` | 打印店 / 课堂材料 | 周屿已经把活动材料交给别人，陆沉也只确认自己的部分；林亦舟发现最低项还能补。 | `lost_chance +1`、`low_conflict +1` |
| `ACT6-LIEFLAT-S11` | 教务平台 / 手机 | 系统还有一次补交机会，倒计时比群消息更直接。 | `time_debt +1`、`project_stability -1` |
| `ACT6-LIEFLAT-S12` | C407 门口 | 没有人再围着他问原因。林亦舟必须决定保持旁观，还是补一个具体任务。 | `late_regret +1`、`missed_chance +1` |

### `ACT6-LIEFLAT-CHOICE-03`

| 方向 | 玩家动作 | 变量变化 | 下一组 |
|---|---|---|---|
| `ACT6-LIEFLAT-C03-A` | 保持旁观 | `old_dorm_distance +2`、`missed_chance +1`、`low_conflict +1` | `ACT6-LIEFLAT-B04` |
| `ACT6-LIEFLAT-C03-B` | 补一个具体任务 | `repair_attempt +1`、`project_stability +1`、`graduation_temperature +1` | `ACT6-LIEFLAT-B04` |

## `ACT6-LIEFLAT-B04` 入口过期与无事发生

功能：摆烂线的核心低温段。林亦舟意识到自己错过了入口，但周围没有爆炸；正因为没有爆炸，关系才更难被重新抓住。

| 页 ID | 场景 | 剧情要点 | 记录变量 |
|---|---|---|---|
| `ACT6-LIEFLAT-S13` | 湖边 / 青枫居楼下 | 林亦舟在楼下绕了一圈，4XX 的灯亮着，但没人下来找他。 | `avoidance +1`、`late_regret +1` |
| `ACT6-LIEFLAT-S14` | 湖边栈道 / 软照面 | 夏知微或生活人物只是聊照片、路灯和截止时间，不替他解释宿舍关系。 | `external_echo +1`、`old_dorm_distance +1` |
| `ACT6-LIEFLAT-S15` | 4XX 群 / 教务平台 | 群话题已经结束，系统提示提交关闭。没有人责怪他，但也没人替他重开。 | `expired_entry_checked +1`、`lost_chance +1`、`missed_chance +1` |
| `ACT6-LIEFLAT-S16` | 4XX 门口 | 门内有人关灯，林亦舟站了一会儿。必须决定承认已经错过，还是装作无事发生。 | `low_conflict +1`、`graduation_temperature -1` |

### `ACT6-LIEFLAT-CHOICE-04`

| 方向 | 玩家动作 | 变量变化 | 下一组 |
|---|---|---|---|
| `ACT6-LIEFLAT-C04-A` | 承认已经错过 | `late_regret +2`、`repair_attempt +1`、`old_dorm_distance +1` | `ACT6-LIEFLAT-B05` |
| `ACT6-LIEFLAT-C04-B` | 装作无事发生 | `lieflat_score +2`、`missed_chance +2`、`graduation_temperature -1` | `ACT6-LIEFLAT-B05` |

## `ACT6-LIEFLAT-B05` 低存在感与空白毕业

功能：把第六幕交给第七幕。摆烂线的毕业不是大决裂，而是边缘同框、没留座、空栏不用填、迟来的私聊或按流程离校。

| 页 ID | 场景 | 剧情要点 | 记录变量 |
|---|---|---|---|
| `ACT6-LIEFLAT-S17` | 毕业照队列 / 操场 | 合照队伍排好时，林亦舟站在边缘。没人赶他走，也没人特意叫他往中间站。 | `low_presence_checked +1`、`old_dorm_distance +1` |
| `ACT6-LIEFLAT-S18` | 饭局投票 / 群聊 | 最后一顿饭投票锁定，座位数没有等他的回复。 | `meal_attendance_locked +1`、`missed_chance +1` |
| `ACT6-LIEFLAT-S19` | 清寝 / 学院窗口 | 离校表最后一栏空着，流程不再需要他补解释，只需要本人签字。 | `leaving_boundary_checked +1`、`polite_distance +1` |
| `ACT6-LIEFLAT-S20` | 校门 / 武生院站前回声 | 第六幕最后确认毕业温度。林亦舟必须决定体面淡化，还是让关系空白毕业。 | `graduation_temperature +1`、`act6_to_act7_handoff_ready +1` |

### `ACT6-LIEFLAT-CHOICE-05`

| 方向 | 玩家动作 | 变量变化 | 下一组 |
|---|---|---|---|
| `ACT6-LIEFLAT-C05-A` | 体面淡化 | `graduation_temperature +1`、`late_regret +1`、`lieflat_contact_scope +1` | `ACT6-END` |
| `ACT6-LIEFLAT-C05-B` | 空白毕业 | `graduation_temperature -2`、`old_dorm_distance +2`、`low_presence_checked +1` | `ACT6-END` |

## Act6 -> Act7 交接

第六幕结束时至少应向第七幕交出以下状态：

- `lieflat_score`
- `avoidance`
- `lost_chance`
- `missed_chance`
- `low_conflict`
- `late_regret`
- `dorm_trust`
- `old_dorm_distance`
- `time_debt`
- `money_pressure`
- `hard_outflow_shadow`
- `repair_attempt`
- `expired_entry_checked`
- `low_presence_checked`
- `meal_attendance_locked`
- `lieflat_contact_scope`
- `graduation_temperature`

第七幕 `ACT7-LIEFLAT` 使用这些状态区分体面淡化、低存在感、迟来私聊、入口错过和 5X 影子。

## 验收标准

- 必须有 5 个四段组、20 个剧情页、5 个选择窗口、10 个方向。
- 每个选择窗口只保留两个 `POOL-R5-LIEFLAT` 池内方向。
- 所有方向 `route_switch_allowed = false`。
- 每组 `next_block` 只能指向下一组或 `ACT6-END`。
- 文本中不能把摆烂线写成省内容线、中立正确线、晚风线或 5X。
