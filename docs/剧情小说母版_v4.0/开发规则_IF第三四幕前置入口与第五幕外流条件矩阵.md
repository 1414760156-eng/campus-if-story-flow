# IF 第三四幕前置入口与第五幕外流条件矩阵

## 用途

本文件用于冻结 11 条 IF 路线从第三幕 / 第四幕前置变量，到第五幕正式外流或锁池的判断逻辑。

核心口径：

- 所有完整路线都必须经过第五幕。第三幕或第四幕发生的外流，只代表提前进入独立命运池，不代表跳过第五幕。
- 未正式锁池前，不写 `active_route_id`，只记录 `route_candidate_scores`、`act5_entry_bias`、`soft_echo_routes` 和具体事实变量。
- 第五幕锁池不是静默自动判线，必须由“前置条件 + 第五幕最终选择”共同成立。
- 不满足前置条件的方向，可以作为软回声、不可锁定候选或低温旁路出现，但不能直接开启完整路线。
- 一旦写入 `route_pool_id`，后续只在当前池内演化，其它人物只能作为微影响、现实压力或软回声出现。

## 判定字段

后续 JSON 或审计表可以按以下字段描述每条路线入口：

```json
{
  "route_id": "R5-WANFENG",
  "entry_stage": "P0-C",
  "required_all": [],
  "required_any_min": 2,
  "required_any": [],
  "score_threshold": {},
  "lockout": [],
  "final_choice_required": "",
  "seed_variables": []
}
```

字段含义：

| 字段 | 用途 |
|---|---|
| `required_all` | 必须成立的事实条件。例如女主候选来源、工作线已锁、5X 硬外流候选等。 |
| `required_any` / `required_any_min` | 可替代的前置体验条件。例如至少两次晚风私聊、至少两次宿舍修补、至少两次项目压力处理。 |
| `score_threshold` | 路线倾向分数下限。用于第五幕可见 / 候选 / 锁定，不替代最终选择。 |
| `lockout` | 互斥条件。已经锁入其它完整路线、5X 硬锁、或缺失来源时禁止进入。 |
| `final_choice_required` | 第五幕必须出现的明确玩家选择。没有这一步不能自动锁完整路线。 |
| `seed_variables` | 锁池后带入 Act6 的初始温度、代价、误读、缺席和软回声。 |

推荐判定状态：

| 状态 | 说明 |
|---|---|
| `hidden` | 条件不足，方向不显示或只以普通文本背景出现。 |
| `echo_only` | 条件不足以成线，只能作为软回声或人物短照面。 |
| `candidate` | 前置条件足够，允许第五幕出现锁池选择。 |
| `locked` | 前置条件满足且第五幕最终选择成立，写入 `route_pool_id`。 |
| `fallback` | 条件不足或玩家拒绝锁池，回到默认宿舍修补 / 低温普通线 / 摆烂旁路。 |

## 第三四幕前置入口矩阵

| 路线 | 第三 / 四幕前置作用 | 第五幕入口与锁池条件 | 锁池种子 |
|---|---|---|---|
| `DEFAULT-4XX` | 共享主轴持续处理 4XX 宿舍事实、旧账、修补、家庭压力和公开边界；第四幕记录 `dorm_repair`、`dorm_warmth`、`old_debt_visible`、`route_candidate_scores.default_4xx`、`act5_entry_bias.default_4xx`。 | P0-D 中选择回到宿舍事实 / 修补 / 继续把 4XX 当主场。若其它路线候选不足或玩家拒绝站队，默认回落到本线。 | `dorm_trust`、`dorm_repair`、`old_debt_visible`、`public_boundary`、`graduation_temperature.default_4xx`。 |
| `A3-ACTIVITY-PUBLIC` | P0-A 第三幕活动父池。至少完成 A3 三次选择中的有效进入，并留下 `a3_first_focus`、`a3_second_focus`、`a3_final_choice`、`a3_join_result`。第四幕进入当前活动池生活半径，不再回主轴抢资源。 | Act5-A3 只做当前活动父池承接：宿舍站队、亲密 / 晚风、项目 / 规则、活动 / 兴趣、回避 / 外流。第五幕不直接跳其它完整感情线，除非已形成符合条件的女生候选来源。 | `activity_link`、`public_boundary`、`candidate_task_shared`、`a3_pressure_mode`、`act5_echo_hook`。 |
| `R3-PERFECT` | 从 A3 子外流产生。需要 `a3_final_choice` 支持单一方向或高自控模式，并形成 `mode_perfect`、公开材料边界、自我管理和情绪延迟。 | Act5-PERFECT 只做完美线内部承接，不从第三幕直接跳 Act6。第五幕选择确认“继续用低风险 / 自控 / 工具化方式处理关系”，再进入 Act6。 | `self_control`、`public_credit`、`emotional_delay`、`private_cost`、`graduation_temperature.perfect`。 |
| `R4-WORK` | 第四幕 P0-B 是工作线主场。第三幕只能预埋钱压、生活费、暑假、留校、家庭消息、勤工助学和错过照面的苗头，不提前锁完整线。第四幕必须完成工作半径确认。 | P0-B 锁入工作池后，Act5-WORK 继续承接钱压、排班、证明、宿舍缺席、亲密低频照面和回避门槛关闭。第五幕不能再打开其它完整路线。 | `money_pressure`、`work_shift`、`time_debt`、`dorm_absence`、`first_week_plan`。 |
| `R5-WANFENG` | 主轴唯一可直连的亲密方向。第三 / 四幕需要有晚风出现、私聊或语音、延迟回复、边界保留和不公开共识。第四幕记录 `wanfeng_contact`、`private_boundary`、`late_reply_to_wanfeng`、`route_candidate_scores.wanfeng`。 | P0-C 中满足晚风候选后，玩家明确选择把时间留给晚风 / 承认私人边界。若分数不足，只能是晚风软照面或普通朋友回声。 | `wanfeng_trust`、`private_contact_seen`、`not_public_consensus`、`late_reply_cost`、`graduation_temperature.wanfeng`。 |
| `R5-ROMANCE` | 不能从默认主轴凭空生成。必须由 A3 中有女生连续出现并承担事件压力的活动方向派生，例如沈嘉禾 / 夏知微等候选。第四幕记录候选任务、授权、署名、公开边界和共同处理过的现实问题。 | P0-C 中必须同时满足 `romance_origin` 非 `none`、`female_candidate_present = true`、候选任务关系成立，并由玩家在第五幕确认专注候选对象。没有 A3 来源时禁止锁入本线。 | `romance_origin`、`candidate_task_shared`、`candidate_public_boundary_checked`、`romance_focus`、`first_week_arrangement`。 |
| `R5-ZHOU` | 第三 / 四幕记录活动圈、主持、玩笑防御、公开场面和面子债。周屿可作为微影响进入普通主轴，但未到 P0-D 前不写完整线锁池。 | P0-D 中 `zhou_bias >= 2` 且玩家明确站周屿 / 接住公开场面后锁池。若只够软条件，保留活动圈回声或半句玩笑，不成完整线。 | `zhou_trust`、`face_debt`、`public_smooth`、`activity_link`、`dorm_misread`。 |
| `R5-TANG` | 第三 / 四幕记录项目、规则、材料、流程截止、证据链和稳定执行。唐骁可作为规则微影响出现，但第五幕前不抢完整线。 | P0-D 中 `tang_bias >= 2` 且玩家选择站流程 / 站唐骁的规则处理方式后锁池。条件不足时只保留项目回声。 | `tang_trust`、`project_stability`、`rule_boundary`、`material_chain`、`public_boundary`。 |
| `R5-LUCHEN` | 第三 / 四幕记录现实任务、家庭压力、工作 / 证明材料、安静边界和不替人代办。陆沉微影响应具体到行动，不写成“替他”。 | P0-D 中 `luchen_bias >= 2` 且玩家选择跟陆沉一起处理现实任务 / 不代办但不缺席后锁池。条件不足时只留现实压力回声。 | `luchen_trust`、`reality_task`、`no_proxy_boundary`、`quiet_support`、`first_week_plan`。 |
| `R5-LIEFLAT` | 第三 / 四幕记录回避、沉默、低存在感、迟回、失约和把选择推迟。它不是省内容线，回避也必须有具体选择和后果。 | P0-D 中 `avoidance >= 3`、`lost_chance >= 2`，且玩家在站队窗口拒绝表态 / 不回复 / 选择低存在感后锁池。若回避值不足，回落到 DEFAULT 低温修补。 | `avoidance`、`lost_chance`、`low_presence_checked`、`missed_chance`、`late_regret`。 |
| `R5X-HARD` | 许澈线是唯一需要新写的硬外流。第三 / 四幕只能预埋疲惫、旧关系变薄、离场冲动、门口风险和未说清的旧账，不能提前硬锁。 | P0-E 中必须同时满足硬候选、门口 / 离场场景、普通修补不足、玩家明确离开或选择不回头。满足后写入硬锁，覆盖普通软外流和站队候选。 | `hard_outflow_candidate`、`door_slam_risk`、`xu_che_shadow`、`old_debt_unspoken`、`5x_regret`。 |

## 第五幕外流判定顺序

第五幕判线建议按以下顺序执行，避免互相抢入口：

1. 已有 `route_pool_id` 的早期外流线先回到当前池第五幕桥接。适用 `A3-ACTIVITY-PUBLIC`、`R3-PERFECT`、`R4-WORK`。这些路线第五幕不再开启其它完整路线，只允许池内微内流和软回声。
2. 检查 P0-C 亲密分歧。主轴只允许直连 `R5-WANFENG`；`R5-ROMANCE` 必须有 A3 女生候选来源。
3. 检查 P0-D 宿舍站队。`DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` 共用同一入口，不为每条线重复写一套第五幕入口。
4. 检查 P0-E 5X 唯一硬外流。只有在硬条件和最终选择同时成立时进入 `R5X-HARD`；一旦锁定，禁止回流普通多线。
5. 如果没有任何候选满足锁池，或玩家拒绝锁池，回落到 `DEFAULT-4XX` 的低温修补 / 普通未决状态，而不是凭空打开新线。

## P0-C 亲密分歧外流条件

`R5-WANFENG`：

- `required_all`：`wanfeng_met`、`private_contact_seen`、`public_boundary_kept`。
- `required_any_min = 2`：`late_reply_to_wanfeng`、`voice_message_seen`、`not_public_consensus`、`dorm_old_debt_unresolved`、`wanfeng_private_help_seen`。
- `score_threshold`：`route_candidate_scores.wanfeng >= 3`。
- `lockout`：`route_pool_id` 已锁其它完整路线、`hard_outflow_candidate` 已进入 P0-E 硬锁确认。
- `final_choice_required`：第五幕明确选择把私人时间留给晚风，或承认这段关系不公开但需要负责。

`R5-ROMANCE`：

- `required_all`：`a3_activity_pool_entered`、`female_candidate_present`、`romance_origin != none`、`candidate_task_shared`。
- `required_any_min = 2`：`candidate_public_boundary_checked`、`candidate_signature_or_credit_seen`、`shared_material_risk`、`first_week_arrangement_seed`、`candidate_authorization_seen`。
- `score_threshold`：`route_candidate_scores.romance >= 3`。
- `lockout`：没有 A3 女生候选来源、默认主轴直接跳其它女主、`R5-WANFENG` 已锁、`R5X-HARD` 已硬锁。
- `final_choice_required`：第五幕明确选择专注候选对象，并承担候选任务、署名、授权或第一周现实安排。

## P0-D 宿舍站队外流条件

P0-D 是共用站队入口，不给 DEFAULT、周屿、唐骁、陆沉、摆烂重复开五套入口。候选逻辑如下：

| 去向 | 候选条件 | 第五幕最终选择 |
|---|---|---|
| `DEFAULT-4XX` | `dorm_repair >= 2` 或其它站队候选不足；仍保留旧账、事实、边界和修补动作。 | 选择继续回到 4XX 事实、把问题说清、或不把宿舍关系押给某一个人。 |
| `R5-ZHOU` | `zhou_bias >= 2`，且有活动圈 / 公开场面 / 面子债回声。 | 选择接住周屿的公开场面，承认热闹背后的代价。 |
| `R5-TANG` | `tang_bias >= 2`，且有流程、材料、规则、项目压力回声。 | 选择站流程，和唐骁一起把证据链 / 材料边界落地。 |
| `R5-LUCHEN` | `luchen_bias >= 2`，且有现实任务、家庭或工作压力回声。 | 选择不代办但不缺席，和陆沉一起处理具体现实任务。 |
| `R5-LIEFLAT` | `avoidance >= 3` 且 `lost_chance >= 2`，或多次迟回 / 不表态 / 低存在感。 | 选择不回复、不站队、降低存在感，并承担机会过期。 |

P0-D 的第一层选择可以出现五个方向，因为它承担站队分发。锁池后从 Act6 开始必须回到当前池内双选，不再继续开放跨线分发。

## P0-E 5X 硬外流条件

`R5X-HARD` 不能由普通疲惫、普通厌烦或第四幕离场冲动提前触发。必须在第五幕 P0-E 满足以下条件：

- `required_all`：`hard_outflow_candidate`、`xu_che_shadow`、`old_debt_unspoken`、`door_slam_risk`。
- `required_any_min = 3`：`avoidance >= 3`、`dorm_repair <= 1`、`private_boundary_broken`、`late_reply_cost_high`、`ordinary_routes_refused`、`leave_scene_seen`。
- `score_threshold`：`hard_outflow_score >= 4`。
- `lockout`：已在 A3 / R3 / R4 当前池完成第五幕桥接且未出现硬离场；玩家在 P0-E 明确选择回头修补。
- `final_choice_required`：第五幕明确选择离开 / 不回头 / 让旧关系停在门外。

锁定后写入：

```json
{
  "route_pool_id": "POOL-R5X-HARD",
  "active_route_id": "R5X-HARD",
  "route_lock": "5x",
  "hard_outflow": true,
  "route_switch_allowed": false
}
```

## 验收清单

- 11 条路线均能说明第三 / 四幕前置变量、第五幕锁池条件、锁池种子和互斥条件。
- `R5-ROMANCE` 不允许从默认主轴凭空生成，必须有 A3 女生候选来源。
- `R5-WANFENG` 是主轴唯一可直连的亲密方向，但仍需要第五幕明确选择。
- P0-D 共用站队入口，不重复写五套第五幕入口。
- `R5X-HARD` 只在 P0-E 硬锁，不能被第三 / 四幕提前触发。
- 早期外流线第五幕只做当前池承接，不重新开放其它完整路线。
- 未锁池前只记录候选分数和入口偏置；锁池后才写 `route_pool_id` / `active_route_id`。
