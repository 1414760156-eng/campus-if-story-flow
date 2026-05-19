# IF 路线 Schema 与 P0 节点池开发规格

## 用途

本文件把 P0-A 至 P0-E 的开发文本整理成统一的路线字段、节点字段和第一版节点池，供后续拆 JSON、写互动节点、做路线判定和毕业结算时使用。

本文件不是小说正文，不负责写完整对白；也不是试玩器，不要求当前直接运行。它的作用是把“玩家选择林亦舟靠近哪种生活”拆成开发可落地的结构。

## 总原则

1. 主线锁点不变：军训手机事件、汇演、班会、主持招新、第五幕站队爆发、5X 唯一外流、第六卷关系定形、第七卷毕业收束都必须发生。
2. 玩家改变的是林亦舟的投入方向：宿舍修补、活动履历、兼职生存、专注感情、站某个室友、摆烂自保或 5X 硬外流。
3. 被选择方向获得更多事件容量、互动频率和毕业结算文本；未被选择人物仍按母版世界线生活，只是和林亦舟的交集变少。
4. 普通选项只改微变量，不应动辄锁大路线。大路线只从第三幕、第四幕、第五幕几个时期外流点进入。
5. 5X 是唯一硬锁。进入后第六卷、第七卷只走 5X 单线，不再回原多线。

## 路线状态 Schema

建议每个存档保留一组路线状态字段。字段命名先统一，后续 JSON / H5 / 引擎可按技术需要转换。

```json
{
  "route_focus": "default_4xx",
  "outflow_stage": "none",
  "primary_bond": "none",
  "route_lock": false,
  "hard_outflow": false,
  "route_confidence": 0,
  "graduation_temperature": "unresolved_but_present"
}
```

| 字段 | 类型 | 可选值 | 用途 |
|---|---|---|---|
| `route_focus` | enum | `default_4xx`、`perfect`、`work`、`romance`、`zhou`、`tang`、`luchen`、`lieflat`、`5x` | 当前生活重心。 |
| `outflow_stage` | enum | `none`、`act3_activity`、`act4_summer`、`act5_romance`、`act5_stand`、`act5x_hard` | 大路线从哪个时期偏离默认线。 |
| `primary_bond` | enum | `none`、`zhou`、`tang`、`luchen`、`wanfeng`、`shen_jiahe`、`xia_zhiwei`、`xu_che` | 林亦舟当前最靠近的人。 |
| `route_lock` | boolean/string | `false`、`5x` | 是否进入不可回退路线。现阶段只有 5X。 |
| `hard_outflow` | boolean | `true`、`false` | 是否进入唯一硬外流。 |
| `route_confidence` | number | 0-5 | 路线稳定度，避免一次选择立刻锁线。 |
| `graduation_temperature` | enum | `say_clear`、`fade`、`polite_distance`、`not_reconciled`、`continue_contact`、`missed`、`5x_regret`、`unresolved_but_present` | 第七卷结算温度。 |

## 共用变量池

建议所有节点都只增减变量，不直接写死结局。路线判定由变量累积、时期节点和硬锁共同决定。

| 变量 | 建议范围 | 作用 |
|---|---:|---|
| `dorm_trust` | -5 到 5 | 宿舍互信和能否回同质内流。 |
| `dorm_warmth` | -5 到 5 | 4XX 日常温度。 |
| `avoidance` | 0 到 8 | 回避、静音、短句和错过倾向。 |
| `time_debt` | 0 到 8 | 时间欠账，影响迟到、缺席、解释成本。 |
| `money_pressure` | 0 到 8 | 钱压，影响兼职、礼物、交通、AA 和饭局。 |
| `public_boundary` | -3 到 6 | 公开材料、照片、朋友圈、融媒体边界。 |
| `activity_link` | 0 到 6 | 活动圈、主持、公开表达和周屿线牵引。 |
| `project_stability` | 0 到 6 | 项目、课程设计、C407 和唐骁线稳定度。 |
| `work_shift` | 0 到 6 | 勤工、快递站、打印店、排班。 |
| `romance_focus` | 0 到 6 | 亲密关系投入。 |
| `old_debt` | 0 到 8 | 宿舍旧账可见度。 |
| `missed_chance` | 0 到 8 | 错过入口数量。 |
| `5x_regret` | 0 到 8 | 5X 外流遗憾强度。 |

## 节点 Schema

每个互动节点建议使用下列字段。开发文本可以先用 Markdown 表达，后续再转 JSON。

```json
{
  "id": "P0A_ACT3_RECRUIT_FORM",
  "module": "P0-A",
  "route_id": "R3-PERFECT",
  "act": "第三幕",
  "scene": "主持招新协助表",
  "location": "教学楼门口咨询点 / 晨光大道 / 主持队临时物资桌",
  "participants": ["林亦舟", "周屿", "秦越", "唐骁"],
  "trigger": "主持招新现场临时缺人，秦越把签到表、物资表和候场顺序交给林亦舟。",
  "player_question": "先保现场流程，还是回到 4XX 的当面关系？",
  "mainline_anchor": ["主持招新发生", "周屿进入活动圈"],
  "choices": [],
  "echo_hooks": ["第五幕事项群语气", "第六卷项目协作温度", "第七卷毕业材料边界"],
  "drift_guard": "不能把完美线写成奖励线。"
}
```

| 字段 | 用途 |
|---|---|
| `id` | 全局唯一节点 ID。 |
| `module` | P0-A / P0-B / P0-C / P0-D / P0-E。 |
| `route_id` | 节点主要服务的路线。 |
| `act` | 所属幕次。 |
| `scene` | 事件名。 |
| `location` | 场景地点，必须符合武生院空间逻辑。 |
| `participants` | 参与人物，只列会触发关系变化的人。 |
| `trigger` | 现实触发，不写抽象情绪。 |
| `player_question` | 玩家此处真正选择什么。 |
| `mainline_anchor` | 本节点不许取消的主线锁点。 |
| `choices` | 可拆选项。 |
| `echo_hooks` | 后续回响位置。 |
| `drift_guard` | 防漂移提醒。 |

## 选项 Schema

```json
{
  "choice_id": "P0A_RECRUIT_TAKE_TABLE",
  "label": "接签到和物资表，先保证招新现场不乱",
  "action_logic": "林亦舟把自己放进活动流程，短期解决混乱，长期增加活动圈牵引。",
  "variable_delta": {
    "self_control": 1,
    "public_credit": 1,
    "time_debt": 1
  },
  "route_effect": {
    "route_focus": "perfect",
    "route_confidence": 1
  },
  "relationship_effect": {
    "qin_yue": 1,
    "tang_xiao": -0.5,
    "zhou_yu": -0.5
  },
  "next_hint": "秦越以后更愿意把流程交给他；唐骁第一次不等他确认。"
}
```

选项不必都改变路线。多数选项只改变变量、关系温度和后续文本。

## 路线判定优先级

路线判定建议按时期顺序检查，但 5X 硬锁永远最后覆盖。

1. 第三幕检查 `R3-PERFECT` 前置：`self_control`、`public_credit`、`emotional_delay`、`activity_link`。
2. 第四幕检查 `R4-WORK` 前置：`money_pressure`、`work_shift`、`family_signal`、`dorm_absence`。
3. 第五幕前段检查 `R5-ROMANCE`：`romance_focus`、候选对象链接、晚风边界、宿舍缺席。
4. 第五幕中后段检查 P0-D：`dorm_repair`、`zhou_alignment`、`tang_alignment`、`luchen_alignment`、`lieflat_score`。
5. 第五幕唯一硬外流点检查 `R5X-HARD`：只有满足硬锁条件才覆盖所有普通路线。

如果多个软路线同时达标，按“最近一次时期外流点 + route_confidence + route_focus 持续次数”判定，不要让早期一次选择永久锁死玩家。

## P0-A 节点池：第三幕社团 / 完美线

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0A_ACT3_RECRUIT_FORM` | 主持招新协助表 | 接流程、帮周屿、回 4XX、补秦越漏洞 | `self_control`、`public_credit`、`time_debt`、`zhou_trust` | 秦越是否继续找他；唐骁是否默认不等他。 |
| `P0A_ACT3_ARCHIVE` | 班会材料归档 | 先授权边界、找沈嘉禾核格式、找唐骁拆时间、只交最低要求 | `public_boundary`、`shen_jiahe_link`、`project_stability`、`dorm_warmth` | 第七卷公开材料风险；沈嘉禾现实协作参照。 |
| `P0A_ACT3_PUBLIC_LOW_RISK` | 公开表达低风险化 | 幕后串稿、上台说明、拒绝正脸、接受采访但删私人信息 | `public_credit`、`public_boundary`、`activity_link` | 完美线公开评价与低温代价。 |
| `P0A_ACT3_DORM_HEAT_MANAGE` | 宿舍热度被管理 | 公共桌清单、只提醒截止、替大家错峰安排、不管公共桌 | `dorm_order`、`dorm_warmth`、`old_debt`、`time_debt` | 第五幕公共桌冲突和事项群冷化。 |
| `P0A_ACT3_ROUTE_CONFIRM` | 完美线确认 | 接长期协助、回 4XX、继续替周屿兜情绪、建立协作边界 | `route_focus`、`route_confidence`、`activity_link` | 锁定或退出 `R3-PERFECT`。 |

### P0-A 漂移防线

完美线不是正确线。它的结果是“做事更稳，但关系温度更低”。如果节点只给奖励，不给宿舍退温和亲密延迟，就偏离路线。

## P0-B 节点池：第四幕暑假 / 兼职线

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0B_ACT4_MONEY_DELAY` | 生活费没有准时到账 | 问父母、压缩支出、问陆沉勤工、接临时代取 / 打印跑腿 | `money_pressure`、`family_signal`、`work_shift`、`luchen_reality_link` | 家庭暗线提前浮出；宿舍误读缺席。 |
| `P0B_ACT4_EXPRESS_SHIFT` | 快递站排班 | 接半天班、迟到饭局、拒绝排班、请陆沉问换班 | `work_shift`、`dorm_absence`、`favor_debt` | 周屿少叫他吃饭；唐骁按排班约束他。 |
| `P0B_ACT4_PRINT_PROOF` | 打印店和证明材料 | 先勤工材料、先课程扫描、请沈嘉禾看格式、接许棠跑腿 | `family_signal`、`tang_trust`、`boundary`、`public_boundary_risk` | 第六卷材料边界；沈嘉禾或唐骁支撑。 |
| `P0B_ACT4_MISSED_MEET` | 错过晚风或活动圈 | 完成晚班、赶去见晚风、帮秦越收尾、明说都去不了 | `wanfeng_misread`、`activity_link`、`relationship_truth`、`work_reliability` | 亲密、活动和兼职互相挤压。 |
| `P0B_ACT4_ROUTE_CONFIRM` | 兼职线确认 | 固定排班、暂停兼职回 4XX、临时兼职、低限度参与 | `route_focus`、`route_confidence`、`avoidance`、`lieflat_score` | 锁定或退出 `R4-WORK`。 |

### P0-B 漂移防线

兼职线不是苦情线，也不是励志线。它的核心是钱、排班和错过如何改变林亦舟的生活半径。

## P0-C 节点池：第五幕亲密分歧 / 专注感情线

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0C_ACT5_WANFENG_BOUNDARY` | 晚风停在门外 | 说清不进一步、不解释按后、保持朋友 / 游戏搭子、回 4XX | `wanfeng_boundary`、`wanfeng_misread`、`romance_focus_open`、`dorm_warmth` | 晚风转生活回声或继续亲密方向。 |
| `P0C_ACT5_CANDIDATE_CONFIRM` | 候选对象确认 | 进沈嘉禾方向、进夏知微方向、只短聊、不见任何人 | `romance_candidate`、`shen_jiahe_link`、`xia_zhiwei_link`、`avoidance` | 决定专注感情线对象。 |
| `P0C_ACT5_COMPANION_FREQ` | 第一次现实陪伴增频 | 聊宿舍事、聊近况未来、帮对方任务、中途回 4XX | `relationship_truth`、`future_talk`、`time_debt`、`romance_focus` | 宿舍缺席和亲密信任同时增长。 |
| `P0C_ACT5_GIFT_FESTIVAL` | 礼物、节日和笨拙模仿 | 送实用礼物、陪完成一件事、问室友建议、临时退缩 | `gift_debt`、`money_pressure`、`dorm_visibility`、`candidate_misread` | 甜和代价同场出现。 |
| `P0C_ACT5_PUBLIC_BOUNDARY` | 公开边界和第一次明确靠近 | 明确靠近并说边界、不命名关系、回头处理宿舍、起哄后否认 | `public_boundary`、`romance_focus`、`ambiguity`、`candidate_hurt` | 锁定或退出 `R5-ROMANCE`。 |

### 候选对象字段

```json
{
  "romance_candidate": "shen_jiahe"
}
```

可选值：

- `shen_jiahe`：现实协作、资料、边界、未来选择。
- `xia_zhiwei`：影像、观看角度、授权、表达和错过。

晚风不能被写成失败选项。玩家没选晚风更进一步，只代表这条路线里晚风不承担核心亲密对象功能。

## P0-D 节点池：第五幕站队分歧

### 共用入口

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0D_ACT5_SHORT_GROUP` | 事项群变短 | 回群当面说、私聊周屿、私聊唐骁、私聊陆沉、不回静音 | `dorm_repair`、`zhou_alignment`、`tang_alignment`、`luchen_alignment`、`avoidance` | 进入宿舍修补、三室友线或摆烂倾向。 |

### DEFAULT-4XX 宿舍修补线

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0D_REPAIR_TABLE` | 公共桌事实表 | 列事实、承认想逃、先问今晚必须赶什么 | `dorm_repair`、`avoidance`、`time_pressure_visible` | 四人能不能坐下说。 |
| `P0D_REPAIR_PRIVATE_TALK` | 单独补话 | 先补周屿、先补唐骁、先补陆沉、谁都不找 | `zhou_trust`、`tang_trust`、`luchen_trust`、`lost_chance` | 谁在第六卷还愿意等林亦舟。 |
| `P0D_REPAIR_RELAPSE` | 再次复发 | 指出旧账解释、先做任务晚点说、只处理当下 | `repair_depth`、`emotion_delay`、`late_regret` | 第七卷说开或没说完。 |

### R5-ZHOU 周屿线

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0D_ZHOU_JOKE` | 玩笑挡不住 | 帮圆场、当场截住、私下提醒 | `zhou_trust`、`public_smooth`、`repair_depth` | 周屿是否说出玩笑背后的受伤。 |
| `P0D_ZHOU_ACTIVITY_SIDE` | 活动圈站边 | 去补场、拉回 4XX、找秦越流程解决 | `activity_link`、`dorm_absence`、`activity_boundary` | 唐骁 / 陆沉是否认为林亦舟偏周屿。 |
| `P0D_ZHOU_FACE_DEBT` | 面子账 | 接热闹并说清、拒绝请客式补偿、只吃饭不谈 | `money_boundary`、`zhou_truth`、`late_regret` | 毕业饭局和半句道歉。 |

### R5-TANG 唐骁线

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0D_TANG_TIMELINE` | 时间线不是判决书 | 核事实但删定罪措辞、按原表发群、先问授权 | `tang_trust`、`public_boundary`、`conflict_heat` | 第六卷项目边界和公开材料风险。 |
| `P0D_TANG_PROJECT_FIRST` | 项目优先 | 先稳项目、强行拉回宿舍、找沈嘉禾 / 老师确认边界 | `project_stability`、`emotion_delay`、`project_risk` | C407 专业配合但不亲密。 |
| `P0D_TANG_FAIR_COST` | 公平的代价 | 按规则执行、拆成最低责任和可协商、让唐骁自己说 | `rule_pressure`、`repair_depth`、`tang_growth` | 唐骁是否只剩流程，或能承认自己也害怕漏洞。 |

### R5-LUCHEN 陆沉线

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0D_LUCHEN_NO_PROXY` | 不替他说 | 只说事实、不说情绪、替他说完整结论、把问题交回陆沉 | `proxy_risk`、`luchen_trust`、`others_misread` | 陆沉是否留下真正入口。 |
| `P0D_LUCHEN_REALITY_PRESSURE` | 现实压力撞上宿舍规则 | 先处理排班、先回宿舍、把排班说给大家听 | `work_reality`、`dorm_trust`、`family_pressure` | 陆沉线是否转深。 |
| `P0D_LUCHEN_SILENCE_EDGE` | 沉默不是答案 | 等他说、问最低可公开事实、替他挡掉追问 | `quiet_bond`、`proxy_risk`、`repair_temperature` | 第七卷旧书、补登记和迟来的解释。 |

### R5-LIEFLAT 摆烂 / 不站队线

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0D_LIE_NO_REPLY` | 不回群 | 静音、只回表情、刷手机、去买吃的 | `avoidance`、`lost_chance`、`lieflat_score` | 下一次少问他一次。 |
| `P0D_LIE_WEAK_CONFLICT` | 弱冲突积累 | 不叫人上课、不帮取外卖、不解释缺席 | `low_conflict`、`dorm_trust`、`late_regret` | 不大吵，但入口慢慢关。 |
| `P0D_LIE_EXPIRED_ENTRY` | 入口过期 | 想补但没人等、饭局空栏、材料已提交 | `missed_chance`、`graduation_temperature` | 第七卷像被生活推出去。 |

## P0-E 节点池：5X 唯一硬外流

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0E_5X_LAST_DOOR` | 最后一扇门 | 回头敲门、下楼冷静、跟许澈走、静音群继续离开 | `hard_outflow_candidate`、`old_dorm_distance`、`route_lock` | 决定是否硬锁 5X。 |
| `P0E_5X_NEW_TABLE` | 新桌子 | 加入、旁听、讲旧事、试图叫旧人 | `new_circle_trust`、`thin_relation`、`old_dorm_distance` | 新圈轻松感和旧线退场。 |
| `P0E_5X_THIN_RELATION` | 薄关系显形 | 补钱、问清、想回头、装没事 | `money_cost`、`thin_relation`、`5x_regret` | 新关系不是坏，是不深。 |
| `P0E_5X_SOFT_PASSING` | 同场擦肩 | 点头、只读、短句问候、继续新约 | `soft_passing`、`message_cut`、`old_dorm_distance` | 旧人同场但不回流。 |
| `P0E_5X_GRAD_REGRET` | 新圈散场 | 发旧消息、对许澈说清、删除置顶、什么都不做 | `5x_regret`、`new_circle_truth`、`identity_drift` | 5X 毕业结算。 |

### P0-E 漂移防线

5X 不得提前出现在第三幕或第四幕，也不得由普通厌烦直接触发。它必须是第五幕唯一硬外流点，并且进入后不能再回原多线。

## 毕业结算映射

| 结算温度 | 触发倾向 | 文本方向 |
|---|---|---|
| `say_clear` | `dorm_trust` 高、`repair_depth` 高、`avoidance` 低 | 有人把旧账说开，但不必大团圆。 |
| `fade` | 中等互信、低冲突、长期缺席 | 关系淡化，保留体面和少量联系。 |
| `polite_distance` | 流程稳定但温度低 | 会互相照看手续，但不再亲近。 |
| `not_reconciled` | 强误读、高旧账、低修补 | 不和解，也不再追究。 |
| `continue_contact` | 亲密或特定对象长期投入并承担代价 | 毕业后仍保留联系入口。 |
| `missed` | 高 `missed_chance`、高 `time_debt` | 不是大事毁掉关系，而是很多入口过期。 |
| `5x_regret` | `route_lock = 5x` 且 `5x_regret` 高 | 新圈散得轻，旧人远得重。 |

## 后续拆分顺序

1. 先按本文件生成 P0 节点 JSON 草案，但不要直接接入正式试玩器。
2. 为每个节点补 2-4 个选项，先保证变量和路线逻辑正确，再追求文本丰满。
3. 用 `开发文本_IF分支P0-A` 至 `P0-E` 作为事件和对话逻辑来源；旧 P0-D 只作为可入池片段库。
4. 做一次路线判定测试：确保 5X 不被普通软外流触发，确保完美线 / 摆烂线是弱冲突但有后果，确保专注感情线不默认晚风失败。
5. 用户确认节点池后，再决定是否生成正式 JSON 或接回试玩器。

## 当前 P0 完成度

| 模块 | 完成状态 | 是否可拆 JSON |
|---|---|---|
| P0-A | 已完成事件版 | 是 |
| P0-B | 已完成事件版 | 是 |
| P0-C | 已完成事件版 | 是，但需选择候选对象字段 |
| P0-D | 已完成事件版 | 是 |
| P0-E | 已完成事件版 | 是，但需硬锁测试 |

P0 骨架已具备进入节点 JSON 草案阶段的条件。
