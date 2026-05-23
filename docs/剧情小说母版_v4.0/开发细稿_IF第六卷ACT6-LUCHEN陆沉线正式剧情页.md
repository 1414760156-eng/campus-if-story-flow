# 开发细稿_IF第六卷ACT6-LUCHEN陆沉线正式剧情页

## 用途

本文把 `R5-LUCHEN` 陆沉线第六幕从长线占位拆成可接入 JSON 的正式剧情页。它只处理 `POOL-R5-LUCHEN` 池内的第六卷定形层，不重新开启 DEFAULT、周屿线、唐骁线、摆烂线、晚风线、专注感情线、工作线或 5X。

陆沉线第六幕的核心不是“拯救陆沉”，也不是“沉默天然正确”。玩家能做的是：不替陆沉把话说完整，只确认本人同意公开的事实；同时承担周屿觉得被冷处理、唐骁觉得边界不清、4XX 公共桌变冷的代价。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-LUCHEN` |
| `route_pool_id` | `POOL-R5-LUCHEN` |
| `act6_variant_id` | `ACT6-LUCHEN` |
| `pool_entry_choice` | `P0D_STAND_WITH_LUCHEN` |
| `route_switch_allowed` | `false` |
| `page_count` | 20 |
| `block_count` | 5 |
| `choice_window_count` | 5 |
| `direction_count` | 10 |

## 禁止项

- 不能把陆沉写成被林亦舟救好的人。
- 不能把沉默写成免除责任的正确答案。
- 不能让林亦舟成为陆沉的翻译器或代言人。
- 不能因为靠近陆沉就取消周屿、唐骁的误读和低温回声。
- 不能从本线选择重新打开其它命运池。

## 变量表

| 变量 | 本幕作用 |
|---|---|
| `luchen_trust` | 陆沉愿不愿意多留一分钟、多说一句、把最低事实交出来 |
| `proxy_risk` | 林亦舟是否替陆沉说完整心声、代填信息或代办授权 |
| `work_reality` | 排班、勤工、钱、错件、补登记等现实压力是否被看见 |
| `family_pressure` | 家庭消息、生活费、补材料和不可公开压力的存在感 |
| `quiet_bond` | 低声共处的温度，不等于热烈亲密 |
| `repair_temperature` | 4XX 能否说到最低事实，而不是强行和解 |
| `dorm_trust` | 宿舍是否仍愿意把陆沉算进同一张桌 |
| `money_pressure` | 饭卡、打印、交通和窗口手续造成的现实成本 |
| `tang_misread` | 唐骁对“边界不清 / 责任漂移”的误读压力 |
| `zhou_distance` | 周屿因林亦舟偏向陆沉而退开的程度 |
| `graduation_temperature` | 第七幕低频联系、迟来解释、体面淡化或空白离校的基础温度 |

## 总览表

| 四段组 | 剧情页 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-LUCHEN-B01` | `S01` - `S04` | `ACT6-LUCHEN-CHOICE-01` | 等陆沉自己说 / 只处理排班事实 |
| `ACT6-LUCHEN-B02` | `S05` - `S08` | `ACT6-LUCHEN-CHOICE-02` | 守住不可公开内容 / 把最低事实说清 |
| `ACT6-LUCHEN-B03` | `S09` - `S12` | `ACT6-LUCHEN-CHOICE-03` | 陪他完成现实任务 / 回 4XX 解释误读 |
| `ACT6-LUCHEN-B04` | `S13` - `S16` | `ACT6-LUCHEN-CHOICE-04` | 接住一句真话 / 停止追问留边界 |
| `ACT6-LUCHEN-B05` | `S17` - `S20` | `ACT6-LUCHEN-CHOICE-05` | 毕业后低频联系 / 体面淡化 |

## `ACT6-LUCHEN-B01` 等他说与排班事实

功能：第六幕开局不直接修补关系，而是让玩家先决定，面对 4XX 的催问，是继续等陆沉本人说，还是只处理可验证的排班事实。

| 页 ID | 场景 | 剧情要点 | 记录变量 |
|---|---|---|---|
| `ACT6-LUCHEN-S01` | 4XX 事项群 / 公共桌 | 第五幕后的群消息变短。周屿要一句态度，唐骁要责任栏，陆沉只回“我知道”。 | `dorm_trust -1`、`tang_misread +1`、`zhou_distance +1` |
| `ACT6-LUCHEN-S02` | 青枫居楼下 / 排班表 | 陆沉没有解释冲突，只问林亦舟明天早八后有没有十分钟；排班和公共桌时间撞上。 | `work_reality +1`、`luchen_trust +1` |
| `ACT6-LUCHEN-S03` | C407 / 共享文档 | 唐骁把分工栏留给本人确认，问林亦舟能不能先代写陆沉的部分。 | `proxy_risk +1`、`project_stability +1`、`public_boundary +1` |
| `ACT6-LUCHEN-S04` | 楼下 / 事项群回声 | 群里催人齐，陆沉还没下班。林亦舟必须决定是继续等他本人说，还是先只处理排班事实。 | `repair_temperature +1`、`quiet_bond +1` |

### `ACT6-LUCHEN-CHOICE-01`

| 方向 | 玩家动作 | 变量变化 | 下一组 |
|---|---|---|---|
| `ACT6-LUCHEN-C01-A` | 等陆沉自己说 | `luchen_trust +2`、`quiet_bond +1`、`dorm_trust -1` | `ACT6-LUCHEN-B02` |
| `ACT6-LUCHEN-C01-B` | 只处理排班事实 | `work_reality +2`、`proxy_risk -1`、`repair_temperature +1` | `ACT6-LUCHEN-B02` |

## `ACT6-LUCHEN-B02` 不公开内容与最低事实

功能：把陆沉的家庭消息、钱压和不可公开内容放进场面，但不让玩家用“他有难处”替他免除所有关系责任。

| 页 ID | 场景 | 剧情要点 | 记录变量 |
|---|---|---|---|
| `ACT6-LUCHEN-S05` | 阳光书屋 | 陆沉旁边有空位，手机亮了一条家里消息。他扣下屏幕，只把草稿纸往里推。 | `family_pressure +1`、`quiet_bond +1` |
| `ACT6-LUCHEN-S06` | 图书馆门口 / 私聊 | 陆沉把排班截图发来，又撤回最后一行备注。林亦舟看见可公开和不可公开之间的缝。 | `luchen_trust +1`、`public_boundary +1` |
| `ACT6-LUCHEN-S07` | 4XX 群 / 走廊 | 周屿问是不是又“不方便说”，唐骁问能公开的部分能不能写清楚。 | `zhou_distance +1`、`tang_misread +1`、`dorm_trust -1` |
| `ACT6-LUCHEN-S08` | 阳光书屋门口 | 陆沉说“别拿这个证明什么”。林亦舟必须决定守住不可公开内容，还是把最低事实说清。 | `proxy_risk -1`、`repair_temperature +1` |

### `ACT6-LUCHEN-CHOICE-02`

| 方向 | 玩家动作 | 变量变化 | 下一组 |
|---|---|---|---|
| `ACT6-LUCHEN-C02-A` | 守住不可公开内容 | `public_boundary +2`、`quiet_bond +1`、`zhou_distance +1` | `ACT6-LUCHEN-B03` |
| `ACT6-LUCHEN-C02-B` | 把最低事实说清 | `repair_temperature +2`、`family_pressure +1`、`proxy_risk -1` | `ACT6-LUCHEN-B03` |

## `ACT6-LUCHEN-B03` 现实任务与 4XX 误读

功能：把快递站错件、补登记、打印和 C407 截止撞在一起，确认帮忙不能变成代办，解释也不能变成替陆沉说完整心声。

| 页 ID | 场景 | 剧情要点 | 记录变量 |
|---|---|---|---|
| `ACT6-LUCHEN-S09` | 快递站 | 错件单和课程材料同时催。陆沉在排班间隙确认收件信息，林亦舟可以帮忙，但不能替他签。 | `work_reality +1`、`money_pressure +1` |
| `ACT6-LUCHEN-S10` | 打印店 / 补登记窗口 | 窗口快关，唐骁的材料也在等。陆沉说“这个不用替我跑”。 | `proxy_risk -1`、`luchen_trust +1` |
| `ACT6-LUCHEN-S11` | 4XX 群 / C407 | 周屿说林亦舟最近都在陆沉那边，唐骁删掉共享文档里的代填栏。 | `zhou_distance +1`、`tang_misread +1`、`dorm_trust -1` |
| `ACT6-LUCHEN-S12` | 快递站关灯前 | 陆沉把错件单递回去，意思是责任他自己确认。林亦舟必须选择陪他完成现实任务，或先回 4XX 解释误读。 | `quiet_bond +1`、`repair_temperature +1` |

### `ACT6-LUCHEN-CHOICE-03`

| 方向 | 玩家动作 | 变量变化 | 下一组 |
|---|---|---|---|
| `ACT6-LUCHEN-C03-A` | 陪他完成现实任务 | `work_reality +2`、`luchen_trust +1`、`dorm_trust -1` | `ACT6-LUCHEN-B04` |
| `ACT6-LUCHEN-C03-B` | 回 4XX 解释误读 | `repair_temperature +2`、`tang_misread -1`、`quiet_bond -1` | `ACT6-LUCHEN-B04` |

## `ACT6-LUCHEN-B04` 一句真话与追问边界

功能：给陆沉线的转深节点。陆沉可以多说一句，但不是大段倾诉；玩家越急着追问或整理成完整解释，越会推高代言风险。

| 页 ID | 场景 | 剧情要点 | 记录变量 |
|---|---|---|---|
| `ACT6-LUCHEN-S13` | 青枫居楼下 | 陆沉下班回来，没有马上上楼。他说那天不是不想回，只是消息到的时候排班刚换。 | `luchen_trust +1`、`family_pressure +1` |
| `ACT6-LUCHEN-S14` | 楼道 / 私聊 | 林亦舟可以继续问家里，也可以把这句话停在本人愿意说的范围内。 | `public_boundary +1`、`proxy_risk +1` |
| `ACT6-LUCHEN-S15` | 4XX 门口 | 唐骁问最低事实能不能进表，周屿把玩笑吞回去。场面没有和解，只是短暂能站住。 | `repair_temperature +1`、`dorm_trust +1`、`tang_misread -1` |
| `ACT6-LUCHEN-S16` | 4XX 门外 | 陆沉说“那句话你别帮我补”。林亦舟必须决定接住这一句，还是停止追问，把边界留住。 | `quiet_bond +1`、`luchen_trust +1` |

### `ACT6-LUCHEN-CHOICE-04`

| 方向 | 玩家动作 | 变量变化 | 下一组 |
|---|---|---|---|
| `ACT6-LUCHEN-C04-A` | 接住一句真话 | `luchen_trust +2`、`repair_temperature +1`、`family_pressure +1` | `ACT6-LUCHEN-B05` |
| `ACT6-LUCHEN-C04-B` | 停止追问留边界 | `quiet_bond +2`、`proxy_risk -2`、`public_boundary +1` | `ACT6-LUCHEN-B05` |

## `ACT6-LUCHEN-B05` 低频联系与体面淡化

功能：把第六幕交到第七幕。陆沉线的毕业入口不靠热闹告别，而靠清寝旧书、补登记、窗口截止、低频联系和一句迟来的解释。

| 页 ID | 场景 | 剧情要点 | 记录变量 |
|---|---|---|---|
| `ACT6-LUCHEN-S17` | 青枫居 4XX / 清寝预备 | 陆沉桌上只有旧书、补登记提醒和未拆的旧包裹。林亦舟知道自己不能直接拆。 | `luchen_old_book_checked +1`、`proxy_risk -1` |
| `ACT6-LUCHEN-S18` | 学院窗口 / 走廊 | 补登记窗口快关，陆沉还在路上。林亦舟可以等、问授权，或替他办完。 | `leaving_papers_boundary_checked +1`、`money_pressure +1` |
| `ACT6-LUCHEN-S19` | 楼梯口 / 旧书袋 | 陆沉自己来拿旧书，站在楼梯口，没有进 4XX。他说“那天我没说完”。 | `luchen_late_word_seen +1`、`quiet_bond +1`、`repair_temperature +1` |
| `ACT6-LUCHEN-S20` | 武生院站前回声 | 第六幕最后确认毕业联系范围。林亦舟必须决定保留低频入口，还是让关系停在体面淡化。 | `graduation_temperature +1`、`luchen_final_contact_scope +1` |

### `ACT6-LUCHEN-CHOICE-05`

| 方向 | 玩家动作 | 变量变化 | 下一组 |
|---|---|---|---|
| `ACT6-LUCHEN-C05-A` | 毕业后低频联系 | `luchen_final_contact_scope +2`、`graduation_temperature +2`、`quiet_bond +1` | `ACT6-END` |
| `ACT6-LUCHEN-C05-B` | 体面淡化 | `graduation_temperature -1`、`zhou_distance +1`、`tang_misread +1` | `ACT6-END` |

## Act6 -> Act7 交接

第六幕结束时至少应向第七幕交出以下状态：

- `luchen_trust`
- `proxy_risk`
- `work_reality`
- `family_pressure`
- `quiet_bond`
- `repair_temperature`
- `dorm_trust`
- `money_pressure`
- `tang_misread`
- `zhou_distance`
- `luchen_late_word_seen`
- `luchen_final_contact_scope`
- `graduation_temperature`

第七幕 `ACT7-LUCHEN` 使用这些状态区分低频联系、迟来解释、实用照看、礼貌同框和空白离校。

## 验收标准

- 必须有 5 个四段组、20 个剧情页、5 个选择窗口、10 个方向。
- 每个选择窗口只保留两个 `POOL-R5-LUCHEN` 池内方向。
- 所有方向 `route_switch_allowed = false`。
- 每组 `next_block` 只能指向下一组或 `ACT6-END`。
- 文本中不能出现“陆沉被救好”“沉默正确”“替陆沉证明”等偏离线。
