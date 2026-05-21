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
6. 长线开发采用命运池结构。进入一条 IF 后，后续公共锁点按当前 `route_pool_id` 生成本线版本；其它命运线关闭完整主分支，只保留软照面和只读回声。
7. 第一卷、第二卷共享；第三幕以后，所有长支线都按关键抉择外流线处理。进入外流线后，只保留当前池完整主线。
8. 第五卷进入长线结算前必须满足最低主线选择要求：至少 5 个主线选择窗口，覆盖宿舍站队、亲密 / 晚风、项目 / 规则、活动 / 兴趣、回避 / 外流，并为第六卷留下可见回响。
9. 第六卷按 20 个剧情段承接当前命运池：每 4 段落 1 个选择窗口，共 5 个选择窗口；每个窗口只能保留 2 个当前池内方向，不得重新开放其它完整路线。详见 `开发规则_IF第五第六卷玩法节奏硬约束.md`。

## 路线状态 Schema

建议每个存档保留一组路线状态字段。字段命名先统一，后续 JSON / H5 / 引擎可按技术需要转换。

```json
{
  "canon_line": "MOTHER-V4",
  "shared_until": "act2_end",
  "branch_mode": "butterfly_outflow",
  "route_parent_pool_id": "none",
  "route_pool_id": "POOL-DEFAULT-4XX",
  "route_focus": "default_4xx",
  "route_focus_tag": "none",
  "route_mode_tag": "none",
  "child_outflow_id": "none",
  "a3_activity_choice_count": 0,
  "a3_first_focus": "none",
  "a3_second_focus": "none",
  "a3_final_choice": "none",
  "a3_focus_votes": {},
  "a3_mode_votes": {},
  "a3_join_result": "none",
  "outflow_permission_class": "main_axis",
  "female_candidate_present": false,
  "romance_outflow_allowed": false,
  "romance_origin": "none",
  "allowed_next_routes": ["R5-STAND", "R5-WANFENG"],
  "outflow_stage": "none",
  "pool_entry_choice": "none",
  "active_route_id": "DEFAULT-4XX",
  "closed_route_ids": [],
  "soft_echo_routes": [],
  "primary_bond": "none",
  "route_lock": false,
  "hard_outflow": false,
  "route_confidence": 0,
  "act5_mainline_choice_count": 0,
  "act5_required_windows_seen": [],
  "act5_choice_floor_met": false,
  "act6_scene_count": 20,
  "act6_block_count": 5,
  "act6_scenes_per_block": 4,
  "act6_choice_window_count": 5,
  "act6_directions_per_window": 2,
  "act6_route_pool_locked": true,
  "graduation_temperature": "unresolved_but_present"
}
```

| 字段 | 类型 | 可选值 | 用途 |
|---|---|---|---|
| `canon_line` | string | `MOTHER-V4` | 指向恒定小说母本线。 |
| `shared_until` | enum | `act2_end` | 表示第一卷、第二卷为共享序章。 |
| `branch_mode` | enum | `butterfly_outflow` | 表示第三幕以后按关键抉择蝴蝶效应外流，而不是全支线并行。 |
| `route_parent_pool_id` | string | `none`、`POOL-A3-ACTIVITY-PUBLIC`、`POOL-R5-STAND` 等 | 父池 ID。第三幕先进入 A3 父池，再按 focus / mode 分发子外流。 |
| `route_pool_id` | string | `POOL-DEFAULT-4XX`、`POOL-A3-ACTIVITY-PUBLIC`、`POOL-R3-PERFECT`、`POOL-R4-WORK`、`POOL-R5-WANFENG`、`POOL-R5-ROMANCE`、`POOL-R5-ZHOU`、`POOL-R5-TANG`、`POOL-R5-LUCHEN`、`POOL-R5-LIEFLAT`、`POOL-R5X-HARD` | 当前命运池。父池未确认子外流时可先使用父池 ID。 |
| `route_focus` | enum | `default_4xx`、`activity_public`、`perfect`、`work`、`wanfeng`、`romance`、`zhou`、`tang`、`luchen`、`lieflat`、`5x` | 当前生活重心。 |
| `route_focus_tag` | enum | `none`、`focus_hosting`、`focus_newsroom`、`focus_photo`、`focus_backstage`、`focus_volunteer`、`focus_dorm_return`、`focus_public_avoid` | 父池内部主通道。 |
| `route_mode_tag` | enum | `none`、`mode_normal`、`mode_perfect`、`mode_pressure`、`mode_avoid`、`mode_dorm` | 父池内部行为模式。 |
| `child_outflow_id` | string | `none`、`R3-PERFECT` 等 | 父池确认后的子外流路线。 |
| `a3_activity_choice_count` | number | `0`-`3` | 第三幕社团 / 活动父池已完成的选择次数。 |
| `a3_first_focus` | enum | focus 枚举或 `none` | 第一次全开放试探时选择的方向。 |
| `a3_second_focus` | enum | focus 枚举或 `none` | 第二次维持或试新后选择的方向。 |
| `a3_final_choice` | enum | `none`、`keep_first`、`keep_second`、`take_both`、`take_neither` | 第三次结算选择。 |
| `a3_focus_votes` | object | `{ "focus_hosting": 1 }` 等 | 三次选择里各 focus 的累计值。 |
| `a3_mode_votes` | object | `{ "mode_perfect": 2 }` 等 | 三次选择里各 mode 的累计值。 |
| `a3_join_result` | enum | `none`、`join_hosting`、`join_newsroom`、`join_photo`、`join_backstage`、`join_volunteer`、`join_none` | 第三次选择后锁定的社团归属或不进入结果。 |
| `outflow_permission_class` | enum | `main_axis`、`club_with_female_candidate`、`club_without_female_candidate`、`hard_5x` | 当前池的外流权限层。 |
| `female_candidate_present` | boolean | `true`、`false` | 社团 / 活动半径中是否已经有女生角色连续出现并承担事件压力。 |
| `romance_outflow_allowed` | boolean | `true`、`false` | 是否允许进入晚风之外的其它感情线。只有 `club_with_female_candidate` 可为 true。 |
| `romance_origin` | enum | `none`、`main_axis_wanfeng`、`a3_photo`、`a3_newsroom`、`a3_backstage`、`a3_other_female_route` | 亲密线来源。 |
| `allowed_next_routes` | array | 路线编号数组 | 当前池允许导向的下一组完整路线白名单。 |
| `outflow_stage` | enum | `none`、`act3_activity`、`act4_summer`、`act5_romance`、`act5_stand`、`act5x_hard` | 大路线从哪个时期偏离默认线。 |
| `pool_entry_choice` | string | 节点或选项 ID | 导致进入当前命运池的关键抉择。 |
| `active_route_id` | string | 见各路线编号 | 当前允许完整展开的主路线。 |
| `closed_route_ids` | array | 其它路线编号 | 进入当前命运池后关闭完整主分支的路线。 |
| `soft_echo_routes` | array | 其它路线编号 | 仍可作为软照面、群消息、朋友圈、同场流程出现的路线。 |
| `primary_bond` | enum | `none`、`zhou`、`tang`、`luchen`、`wanfeng`、`shen_jiahe`、`xia_zhiwei`、`xu_che` | 林亦舟当前最靠近的人。 |
| `route_lock` | boolean/string | `false`、`5x` | 是否进入不可回退路线。现阶段只有 5X。 |
| `hard_outflow` | boolean | `true`、`false` | 是否进入唯一硬外流。 |
| `route_confidence` | number | 0-5 | 路线稳定度，避免一次选择立刻锁线。 |
| `act5_mainline_choice_count` | number | `0`-`5+` | 第五卷已完成的主线选择窗口数量。少于 5 时不得锁定普通完整长线。 |
| `act5_required_windows_seen` | array | `dorm_stand`、`intimacy_or_wanfeng`、`project_or_rule`、`activity_or_interest`、`avoidance_or_outflow` | 第五卷五类必经选择窗口完成情况。 |
| `act5_choice_floor_met` | boolean | `true`、`false` | 是否满足第五卷最低主线选择要求。 |
| `act6_scene_count` | number | `20` | 第六卷当前命运池剧情段总数。 |
| `act6_block_count` | number | `5` | 第六卷四段组数量。 |
| `act6_scenes_per_block` | number | `4` | 每组选 4 个剧情段后落一次选择。 |
| `act6_choice_window_count` | number | `5` | 第六卷选择窗口数量。 |
| `act6_directions_per_window` | number | `2` | 第六卷每个选择窗口只能保留两个当前池内方向。 |
| `act6_route_pool_locked` | boolean | `true` | 第六卷不再重新开放其它完整命运线。 |
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

1. 第三幕先检查 `A3-ACTIVITY-PUBLIC` 父池：第一次所有方向都可选，记录 `a3_first_focus`；第二次可以维持第一次方向或去别的方向试试，记录 `a3_second_focus`；第三次只能选择 `keep_first`、`keep_second`、`take_both`、`take_neither`。`keep_first` / `keep_second` 锁定对应社团方向；`take_both` 自动进入 `mode_pressure`；`take_neither` 进入 `DEFAULT-4XX`。只有坚持单一方向且 `mode_perfect` 成立时，才进入 `R3-PERFECT`。
2. 第四幕检查 `R4-WORK` 前置：`money_pressure`、`work_shift`、`family_signal`、`dorm_absence`。
3. 第五幕前段检查主轴亲密外流：如果当前仍是 `main_axis` 或 `DEFAULT-4XX`，只能进入 `R5-WANFENG`，不能直接进入沈嘉禾 / 夏知微等其它感情线。
4. 第五幕前段检查社团女生派生感情：只有 `female_candidate_present = true` 且 `romance_outflow_allowed = true` 的 A3 社团 / 活动池，才允许进入 `R5-ROMANCE`。
5. 第五幕中后段检查 P0-D：`dorm_repair`、`zhou_alignment`、`tang_alignment`、`luchen_alignment`、`lieflat_score`。
6. 第五幕唯一硬外流点检查 `R5X-HARD`：只有满足硬锁条件才覆盖所有普通路线。

如果多个软路线同时达标，先检查 `allowed_next_routes` 白名单，再按“最近一次时期外流点 + route_confidence + route_focus 持续次数”判定，不要让早期一次选择永久锁死玩家。

第五卷普通长线锁定前，还必须检查 `act5_choice_floor_met = true`。除 `R5X-HARD` 外，任何普通软路线都不得在五类主线选择窗口完成前直接锁完整后续。第五卷五类窗口和第六卷 20 段规则以 `开发规则_IF第五第六卷玩法节奏硬约束.md` 为准。

## 第六卷 20 段承接规则

第六卷不是重新分流卷，而是当前命运池的承接卷。每条已进入的命运池在第六卷必须拆为 20 个剧情段，按 5 个四段组组织。

| 组 | 剧情段 | 选择窗口 | 硬约束 |
|---:|---|---|---|
| 1 | `ACT6-S01` 至 `ACT6-S04` | `ACT6-CHOICE-01` | 只允许 2 个当前池内方向 |
| 2 | `ACT6-S05` 至 `ACT6-S08` | `ACT6-CHOICE-02` | 只允许 2 个当前池内方向 |
| 3 | `ACT6-S09` 至 `ACT6-S12` | `ACT6-CHOICE-03` | 只允许 2 个当前池内方向 |
| 4 | `ACT6-S13` 至 `ACT6-S16` | `ACT6-CHOICE-04` | 只允许 2 个当前池内方向 |
| 5 | `ACT6-S17` 至 `ACT6-S20` | `ACT6-CHOICE-05` | 只允许 2 个当前池内方向 |

这两个方向只能改变当前池内的关系温度、误读、资源代价、公开边界和毕业结算倾向，不能写成“跳去另一条完整路线”。其它人物可作为软照面和文本回声出现，但不得重新打开完整主分支。

## P0-A 节点池：第三幕社团活动父池 / 完美子外流

P0-A 不再代表“第三幕一定进入融媒体”或“第三幕一定进入完美线”。它的上层父池是 `A3-ACTIVITY-PUBLIC`，负责承接主持队、新闻中心 / 融媒体、摄影社、幕后物资、志愿服务、回 4XX 和回避公开等分发。`R3-PERFECT` 只是其中 `mode_perfect` 持续成立后的子外流。

P0-A 还承担外流权限判断：有女生连续出现并形成生活半径的社团线，才允许后续派生其它感情线；没有女生连续出现的社团线，只能流向 `R3-PERFECT`、回宿舍修补 / 站队、`R5-WANFENG` 或 `R5-LIEFLAT`。

| 父池字段 | 可选值 | 用途 |
|---|---|---|
| `route_parent_pool_id` | `POOL-A3-ACTIVITY-PUBLIC` | 标记第三幕父池。 |
| `route_focus_tag` | `focus_hosting`、`focus_newsroom`、`focus_photo`、`focus_backstage`、`focus_volunteer`、`focus_dorm_return`、`focus_public_avoid` | 判断主通道。 |
| `route_mode_tag` | `mode_normal`、`mode_perfect`、`mode_pressure`、`mode_avoid`、`mode_dorm` | 判断行为模式。 |
| `a3_activity_choice_count` | `0`-`3` | 三次机会计数；第三次后必须结算，不继续无限选择。 |
| `a3_first_focus` | focus 枚举 | 第一次全开放试探时选择的方向。 |
| `a3_second_focus` | focus 枚举 | 第二次维持或试新后选择的方向。 |
| `a3_final_choice` | `keep_first`、`keep_second`、`take_both`、`take_neither` | 第三次最终选择。 |
| `a3_focus_votes` | focus 计数对象 | 判断最终进入哪个社团 / 活动方向。 |
| `a3_mode_votes` | mode 计数对象 | 判断普通参与、完美自控、压力、回避或回寝。 |
| `a3_join_result` | `join_hosting`、`join_newsroom`、`join_photo`、`join_backstage`、`join_volunteer`、`join_none` | 第三次选择后的归属结果。 |
| `child_outflow_id` | `none`、`R3-PERFECT` | 只有子外流确认后才写入具体路线。 |

| 权限字段 | 触发条件 | 允许后续 |
|---|---|---|
| `club_with_female_candidate` | 社团 / 活动线里有女生角色连续出现，且有现实任务、选择和后续回声 | `R5-ROMANCE`、`R3-PERFECT`、`R5-STAND`、`R5-WANFENG`、`R5-LIEFLAT` |
| `club_without_female_candidate` | 社团 / 活动线没有女生候选，或女生只是一两次擦肩 | `R3-PERFECT`、`R5-STAND`、`R5-WANFENG`、`R5-LIEFLAT` |
| `main_axis` | 未进入社团女生候选，仍在默认宿舍主轴 | `R5-STAND`、`R5-WANFENG` |

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

## P0-C 节点池：第五幕亲密分歧 / 晚风线与社团女生派生感情线

| 节点 ID | 事件 | 玩家选择核心 | 主要变量 | 后续回响 |
|---|---|---|---|---|
| `P0C_ACT5_WANFENG_BOUNDARY` | 晚风停在门外 | 继续靠近、说清不进一步、保持朋友 / 游戏搭子、回 4XX | `wanfeng_boundary`、`wanfeng_misread`、`wanfeng_link`、`dorm_warmth` | 主轴只能由这里进入 `R5-WANFENG`，或退回宿舍站队 / 摆烂倾向。 |
| `P0C_ACT5_CANDIDATE_CONFIRM` | 社团女生候选来源确认 | 确认 A3 来源、进沈嘉禾方向、进夏知微方向、只短聊、不见任何人 | `romance_candidate`、`female_candidate_present`、`romance_origin`、`avoidance` | 只有 `club_with_female_candidate` 才能决定 `R5-ROMANCE` 对象。 |
| `P0C_ACT5_COMPANION_FREQ` | 第一次现实陪伴增频 | 聊宿舍事、聊近况未来、帮对方任务、中途回 4XX | `relationship_truth`、`future_talk`、`time_debt`、`romance_focus` | 宿舍缺席和亲密信任同时增长。 |
| `P0C_ACT5_GIFT_FESTIVAL` | 礼物、节日和笨拙模仿 | 送实用礼物、陪完成一件事、问室友建议、临时退缩 | `gift_debt`、`money_pressure`、`dorm_visibility`、`candidate_misread` | 甜和代价同场出现。 |
| `P0C_ACT5_PUBLIC_BOUNDARY` | 公开边界和第一次明确靠近 | 明确靠近并说边界、不命名关系、回头处理宿舍、起哄后否认 | `public_boundary`、`romance_focus`、`ambiguity`、`candidate_hurt` | 有 A3 女生来源时锁定或退出 `R5-ROMANCE`；无来源时不生成其它女主线。 |

### 候选对象字段

```json
{
  "romance_candidate": "shen_jiahe"
}
```

可选值：

- `shen_jiahe`：现实协作、资料、边界、未来选择。
- `xia_zhiwei`：影像、观看角度、授权、表达和错过。

晚风不能被写成失败选项。主轴玩家没选晚风更进一步时，只代表亲密外流没有成立；若没有 A3 女生候选来源，系统应回到宿舍站队、完美线、摆烂线或低频朋友回声，而不是自动生成沈嘉禾 / 夏知微线。

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
4. 做一次路线判定测试：确保 5X 不被普通软外流触发，确保完美线 / 摆烂线是弱冲突但有后果，确保主轴只能直连晚风线，确保 `R5-ROMANCE` 必须有 A3 女生候选来源且不把晚风写成失败。
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
