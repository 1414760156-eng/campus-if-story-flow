# IF 分支 P0 文本总索引

## 用途

本索引用来汇总当前 P0 阶段已经完成的 IF 分支开发文本，供后续拆 JSON、节点、选项、变量和毕业结算时快速定位。

P0 的目标不是写支线外传，也不是继续制作试玩器，而是把几个关键时期外流点整理成可开发的剧情骨架：第一卷、第二卷共享，玩家在第三幕、第四幕、第五幕的少数关键处选择林亦舟靠近哪种生活方式，从而进入独立命运池，改变关系容量、事件频率、代价和毕业结算温度。

2026-05-23 口径修正：所有完整路线都必须经过第五幕；第三幕 / 第四幕外流不是跳过第五幕，而是提前进入独立命运池，并在该池内继续经历第四幕生活半径和第五幕承接。第四幕是全路线生活半径分化层，`R4-WORK` 在第四幕成为主场，其它路线也要留下变量前置和关系温度差异。

## 总控文件

| 文件 | 用途 |
|---|---|
| `开发索引_IF命运分歧开发矩阵.md` | IF 分支总原则，定义“时期外流点 + 命运分歧”模型。 |
| `开发规则_IF命运线池化架构.md` | 上层架构规则，定义第一二幕共享、第三幕后关键抉择外流、第四幕生活半径分化、第五幕全线必经、命运池、公共锁点嫁接、线内回流和跨线软回声。 |
| `开发规则_IF第四幕生活半径与池内流硬约束.md` | 第四幕硬规则，定义普通线最低 4 个选择剧情点、第四幕主场线最低 5 个选择剧情点、正式推荐剧情段密度、每窗三项内流、微内流剧情密度和支线母版规格等价原则。 |
| `开发规则_IF第三四幕前置入口与第五幕外流条件矩阵.md` | 第三 / 四幕前置入口与第五幕外流判定规则，覆盖 11 条路线的候选分数、入口偏置、锁池条件、互斥条件和锁池种子。 |
| `开发规则_IF第五第六卷玩法节奏硬约束.md` | 新增玩法节奏硬规则，定义第五卷至少 5 个主线选择窗口，以及第六卷 20 个剧情段、每 4 段 1 次二方向选择、只在当前命运池内承接。 |
| `开发索引_时期外流点路线表.md` | 路线总表，列出 DEFAULT-4XX、A3-ACTIVITY-PUBLIC 父池、R3-PERFECT 子外流、R4-WORK、R5-WANFENG、R5-ROMANCE、三条室友线、摆烂线和 R5X-HARD。 |
| `开发规范_IF分支文本写法.md` | 后续开发文本写法规范，强调事件链、变量、后果和对话逻辑，不写小说正文。 |
| `开发索引_IF分支P0可试玩节点蓝图.md` | 早期节点蓝图，可作为 JSON 拆分参考，但当前阶段不再优先做试玩器。 |
| `开发规格_IF路线Schema与P0节点池.md` | 当前主开发规格，统一路线字段、变量字段、节点字段和 P0-A 至 P0-E 第一版节点池；已补 `entry_gate_*` 与 `route_candidate_scores` / `act5_entry_bias` 变量池审计字段。 |
| `开发规划_IF各路线回流点与内部支线矩阵.md` | 当前内回流点主规划，定义“母版事件池 + 路线镜头”的复用模型，以及每条路线的内部回流点、回流方式、变量回声和防漂移规则。 |
| `开发审计_IF第三四五六七幕全链路总表.md` | 结构冻结前的全链路审计表，确认 Act6 / Act7 已接入，并记录 `A3-ACTIVITY-PUBLIC`、`R3-PERFECT` 与 `R4-WORK` 均已补齐早期外流后的 Act4 / Act5 或 Act5 桥接。 |
| `开发摘要_IF玩家侧路线摘要_11条路线.md` | 玩家侧路线摘要，给策划 / 文案审阅路线名、入口提示、玩法感受、路线代价和毕业温度。 |
| `开发数据_IF玩家侧路线摘要_11条路线_v1.json` | UI / 试玩器可读取的 11 条路线摘要数据源，包含 `route_id`、`ui_group`、`player_title`、`entry_stage`、`act6_shape`、`ending_samples` 等字段。 |
| `开发审读_IF玩家侧摘要P2首轮_亲密与5X线.md` | 玩家侧摘要 P2 首轮审读记录，已核对 `R5-WANFENG`、`R5-ROMANCE` 和 `R5X-HARD` 的入口、Act6 定形和 Act7 毕业温度。 |
| `开发审读_IF玩家侧摘要P2第二轮_宿舍站队组.md` | 玩家侧摘要 P2 第二轮审读记录，已核对 `DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` 的 P0-D 入口、Act6 定形和 Act7 毕业温度。 |
| `开发审读_IF玩家侧摘要P2第三轮_早期外流与生活半径组.md` | 玩家侧摘要 P2 第三轮审读记录，已核对 `A3-ACTIVITY-PUBLIC`、`R3-PERFECT`、`R4-WORK` 的 Act4 / Act5 桥接和毕业温度。 |
| `开发矩阵_IF路线完成度轴与四档结局_11条路线.md` | 11 条路线的完成度轴与四档结局矩阵，定义完美 / 良好 / 一般 / 遗憾四档，并按主关系、室友、恋人、家庭、学业 / 工作、兴趣活动、边缘人物、自我边界等轴拆分。 |
| `开发数据_IF路线完成度轴与四档结局_11条路线_v1.json` | 完成度轴机器数据，供后续 UI / 试玩器 / 结算器读取；覆盖 11 条路线、8 个标准轴、55 个路线内有效轴和四档文案，变量绑定仍待审计。 |
| `开发审计_IF路线完成度轴变量绑定_11条路线.md` | 完成度轴变量绑定审计表，列出 55 个路线轴对应的候选变量、结局候选数量、绑定状态和剩余缺口。 |
| `开发数据_IF路线完成度轴变量绑定审计_11条路线_v1.json` | 完成度轴变量绑定审计数据版，供后续独立结算公式层继续处理；当前不写回正式剧情页级 JSON。 |
| `开发规则_IF路线完成度轴结算公式草案_11条路线.md` | 完成度轴结算公式草案，定义轴分、四档阈值、强 / 次 / 软回声权重、路线聚合规则和后续人工审定项。 |
| `开发数据_IF路线完成度轴结算公式草案_11条路线_v1.json` | 完成度轴结算公式草案数据版，包含 55 个轴的候选变量正负向草案、阈值、轴权重和公式状态；当前不可直接执行。 |
| `开发审读_IF路线完成度轴结算公式P1首轮_信号与硬门槛.md` | 完成度轴结算公式 P1 首轮审定记录，审定变量信号、代理变量和硬门槛候选，明确后续封顶规则缺口。 |
| `开发数据_IF路线完成度轴结算公式P1审定_11条路线_v1.json` | 完成度轴结算公式 P1 审定数据版，覆盖 11 条路线、55 个轴、275 个候选变量出现次数；仍不可直接执行。 |
| `开发规则_IF路线完成度轴正式结算公式_v1.md` | 完成度轴正式结算公式规则版，定义轴分、硬门槛封顶、代理家庭轴封顶、路线加权聚合和玩家解释策略。 |
| `开发数据_IF路线完成度轴正式结算公式_11条路线_v1.json` | 完成度轴正式结算公式数据版，覆盖 11 条路线、55 个轴和 275 个变量引用；作为后续结算器 / UI 独立数据层，不写回正式剧情页级 JSON。 |
| `开发样本_IF路线完成度轴四档结算解释_11条路线.md` | 11 条路线四档结算解释样本审阅版，每条路线各含完美 / 良好 / 一般 / 遗憾解释，用于核对公式玩家可见表达。 |
| `开发数据_IF路线完成度轴四档结算解释样本_11条路线_v1.json` | 11 条路线四档结算解释样本数据版，覆盖 44 个路线档位样本和 220 个轴结果；不写回正式剧情页级 JSON。 |

## P0 路线文件

| 模块 | 路线编号 | 文件 | 当前状态 | 后续开发建议 |
|---|---|---|---|---|
| P0-A | `A3-ACTIVITY-PUBLIC` / `R3-PERFECT` | `开发文本_IF分支P0-A第三幕社团完美线.md` | `A3-ACTIVITY-PUBLIC` 与 `R3-PERFECT` 均已补 Act4 / Act5 并接入 Act6 / Act7 | 后续只需 P2 审读或旧口径残留清理；融媒体只作 `focus_newsroom`。 |
| P0-B | `R4-WORK` | `开发文本_IF分支P0-B第四幕暑假兼职线.md` / `开发细稿_IF第五幕ACT5-WORK工作线桥接剧情页.md` | 第四幕入口、Act5 桥接、Act6 / Act7 均已接入 | 第四幕作为工作线主场处理，第五幕已承接钱压、排班、错过照面和宿舍缺席；后续只做 P2 审读或旧口径残留清理。 |
| P0-C | `R5-WANFENG` / `R5-ROMANCE` | `开发文本_IF分支P0-C第五幕亲密分歧专注感情线.md` | 已接入正式页级 JSON | 已在 `R5-WANFENG` 与 `R5-ROMANCE` 两个正式 JSON 中分别转成 5 节点 / 20 页 / 5 选择窗 / 20 方向；主轴只能直连晚风线，沈嘉禾 / 夏知微必须由 A3 女生候选来源派生。 |
| P0-D | `R5-STAND` / `R5-ZHOU` / `R5-TANG` / `R5-LUCHEN` / `R5-LIEFLAT` | `开发文本_IF分支P0-D第五幕站队分歧事件版.md` | 已接入正式页级 JSON | 已在 `开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` 中转成 6 节点 / 24 页 / 6 选择窗 / 20 方向，作为 DEFAULT / 三室友 / 摆烂线共用站队入口。 |
| P0-E | `R5X-HARD` | `开发文本_IF分支P0-E第五幕隐藏高难5X唯一硬外流线.md` | 已接入正式页级 JSON | 已在 `开发数据_IF剧情页级JSON_R5X-HARD_v1.json` 中转成 5 节点 / 20 页 / 5 选择窗 / 20 方向；必须保持唯一硬锁和第六 / 七卷单线规则。 |

## 路线进入顺序

后续开发判断路线时，建议按时期和硬锁优先级处理：

1. 第三幕先检查 `A3-ACTIVITY-PUBLIC` 父池：第一次所有方向都可选；第二次可以维持或试新；第三次只能坚持第一个、坚持第二个、两个都要或两个都不要。坚持单一方向后再检查是否形成 `mode_perfect` 并进入 `R3-PERFECT`；两个都要进入压力模式，两个都不要回宿舍主轴。
2. 第四幕检查 `R4-WORK`：生活费、留校、勤工、快递站、打印店和钱压是否持续累积。
3. 第五幕前段检查主轴亲密外流：主轴只能进入 `R5-WANFENG`，或保持朋友 / 错过；不能直接跳到其它女主。
4. 第五幕前段检查社团女生派生感情：只有 A3 有女生连续出现的路线，才允许进入 `R5-ROMANCE`。
5. 第五幕中后段检查 P0-D：强冲突后是否站周屿、唐骁、陆沉，或不站队进入摆烂。
6. 第五幕唯一硬外流点最后检查 `R5X-HARD`：只有满足硬锁条件时进入 5X，进入后不再回原多线。

2026-05-23 追加：具体外流条件以 `开发规则_IF第三四幕前置入口与第五幕外流条件矩阵.md` 为准。第三 / 四幕只记录候选分数、事实变量、入口偏置和软回声；第五幕必须由“前置条件 + 最终选择”共同锁池，不能静默自动判线。

硬锁优先级：

- `R5X-HARD` 一旦锁定，覆盖普通软外流、亲密线、站队线和摆烂线。
- 5X 以前的所有出门、湖边、楼下、便利店、晚风语音、夏知微照片、沈嘉禾资料，都只是软回流或软外流，不得写成硬锁。

## 推荐路线字段

```json
{
  "shared_until": "act2_end",
  "branch_mode": "butterfly_outflow",
  "route_parent_pool_id": "none",
  "pool_entry_choice": "none",
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
  "primary_bond": "none",
  "route_lock": false,
  "hard_outflow": false,
  "graduation_temperature": "unresolved_but_present"
}
```

字段建议：

| 字段 | 可选值 | 说明 |
|---|---|---|
| `shared_until` | `act2_end` | 第一卷、第二卷共享，第三幕后才进入长线外流。 |
| `branch_mode` | `butterfly_outflow` | 关键抉择触发命运外流，而不是所有支线在同一主线并行。 |
| `route_parent_pool_id` | `none`、`POOL-A3-ACTIVITY-PUBLIC`、`POOL-R5-STAND` 等 | 父池 ID。第三幕应先进入 A3 父池，再按 focus / mode 判断子外流。 |
| `pool_entry_choice` | 节点或选项 ID | 导致进入当前命运池的关键选择。 |
| `route_focus` | `default_4xx`、`activity_public`、`perfect`、`work`、`romance`、`zhou`、`tang`、`luchen`、`lieflat`、`5x` | 当前生活重心。 |
| `route_focus_tag` | `none`、`focus_hosting`、`focus_newsroom`、`focus_photo`、`focus_backstage`、`focus_volunteer`、`focus_dorm_return`、`focus_public_avoid` | 父池内部主通道。 |
| `route_mode_tag` | `none`、`mode_normal`、`mode_perfect`、`mode_pressure`、`mode_avoid`、`mode_dorm` | 父池内部行为模式。 |
| `child_outflow_id` | `none`、`R3-PERFECT` 等 | 父池确认后的子外流路线。 |
| `a3_activity_choice_count` | `0`-`3` | 第三幕社团 / 活动机会计数。 |
| `a3_first_focus` | focus 枚举 | 第一次全开放试探时选择的方向。 |
| `a3_second_focus` | focus 枚举 | 第二次维持或试新后选择的方向。 |
| `a3_final_choice` | `keep_first`、`keep_second`、`take_both`、`take_neither` | 第三次最终选择。 |
| `a3_focus_votes` | focus 计数对象 | 三次选择后的社团 / 活动方向权重。 |
| `a3_mode_votes` | mode 计数对象 | 三次选择后的行为模式权重。 |
| `a3_join_result` | `none`、`join_hosting`、`join_newsroom`、`join_photo`、`join_backstage`、`join_volunteer`、`join_none` | 第三次后锁定进入哪个社团方向，或不进入社团。 |
| `outflow_permission_class` | `main_axis`、`club_with_female_candidate`、`club_without_female_candidate`、`hard_5x` | 当前路线外流权限层。 |
| `female_candidate_present` | `true`、`false` | 社团线里是否已有女生角色连续出现并承担事件压力。 |
| `romance_outflow_allowed` | `true`、`false` | 是否允许进入晚风之外的其它感情线。 |
| `romance_origin` | `none`、`main_axis_wanfeng`、`a3_photo`、`a3_newsroom`、`a3_backstage`、`a3_other_female_route` | 感情线来源，用来禁止主轴凭空跳其它女主。 |
| `allowed_next_routes` | 路线编号数组 | 当前池可进入的下一组完整路线白名单。 |
| `outflow_stage` | `none`、`act3_activity`、`act4_summer`、`act5_romance`、`act5_stand`、`act5x_hard` | 分流发生时期。 |
| `primary_bond` | `none`、`zhou`、`tang`、`luchen`、`wanfeng`、`shen_jiahe`、`xia_zhiwei`、`xu_che` | 玩家主要靠近对象。 |
| `route_lock` | `false`、`5x` | 目前只有 5X 需要硬锁。 |
| `hard_outflow` | `true`、`false` | 是否进入唯一硬外流。 |
| `graduation_temperature` | `say_clear`、`fade`、`polite_distance`、`not_reconciled`、`continue_contact`、`missed`、`5x_regret` | 第七卷结算温度。 |

## P0 共用变量池

| 变量 | 适用路线 | 作用 |
|---|---|---|
| `dorm_trust` | 全路线 | 判断宿舍互信和是否可回同质内流。 |
| `avoidance` | 摆烂线、5X、亲密线 | 判断逃避、短句、静音和错过。 |
| `time_debt` | 完美线、兼职线、亲密线、5X | 判断时间被谁占用，以及后续迟到 / 缺席。 |
| `money_pressure` | 兼职线、亲密线、5X | 判断钱压、礼物、交通、AA 和生活费暗线。 |
| `public_boundary` | 完美线、亲密线、站队线 | 判断照片、朋友圈、融媒体、材料公开边界。 |
| `activity_link` | 完美线、周屿线 | 判断活动圈和公开表达投入。 |
| `work_shift` | 兼职线、陆沉线 | 判断排班、勤工和现实压力。 |
| `romance_focus` | 晚风线、社团女生派生感情线 | 判断是否把情绪和时间投给亲密对象；主轴只允许晚风，其它对象必须有 A3 来源。 |
| `route_lock` | 5X | 判断是否禁止回原多线。 |
| `5x_regret` | 5X | 判断外流遗憾强度。 |

## 拆 JSON 注意事项

### P0-A / P0-B / P0-C / P0-D / P0-E

这五份已经是事件版开发稿，可以按以下方式直接拆：

- 每个“事件”拆成一个主节点。
- 每个“可拆选择”拆成选项。
- “结果”进入变量变化。
- “回响”进入后续文本条件。
- “对话逻辑”进入角色语气约束，不直接复制成完整对白。

### P0-D 旧稿

`开发文本_IF分支P0第五卷站队分歧.md` 是旧样式素材稿，文本可读性更强，带有较多可入池片段。后续有两种处理方式：

1. 拆 JSON 时以 `开发文本_IF分支P0-D第五幕站队分歧事件版.md` 为主。
2. 需要具体可入池文本时，再从旧稿摘取片段，并按事件版变量和节点归位。

不要再把旧稿当成 P0-D 的结构依据，否则后续互动最容易膨胀。

## 试玩器和开发稿关系

当前存在 `playtest/if-p0-branches-data.js`、`playtest/if-p0-branches-data.test.js`、`playtest/md-reader.html` 等辅助文件。这些文件不是当前主产物，暂不作为路线真实性的唯一依据。

后续如果恢复试玩，应以本索引和五份 P0 文本稿为准，重新生成干净 JSON，而不是继续在旧试玩器上追加临时分支。

## 下一步建议

1. 结构层已冻结，当前不再新增 3/4/5/6/7 路线结构。
2. `开发摘要_IF玩家侧路线摘要_11条路线.md` 与 `开发数据_IF玩家侧路线摘要_11条路线_v1.json` 已可作为后续 UI / 试玩器读取的路线摘要入口。
3. `R5-WANFENG`、`R5-ROMANCE` 和 `R5X-HARD` 的玩家侧摘要 P2 首轮审读已完成；`R5X-HARD` 入口提示已修正为连续硬锁，不再像单次跟随许澈。
4. 宿舍站队组 `DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` 的玩家侧摘要 P2 第二轮审读已完成；已拉开 DEFAULT、唐骁、陆沉和摆烂线的玩家侧代价表达。
5. 早期外流和生活半径组 `A3-ACTIVITY-PUBLIC`、`R3-PERFECT`、`R4-WORK` 的玩家侧摘要 P2 第三轮审读已完成；已强化 Act4 / Act5 桥接提示，避免 UI 误读成早期入口直跳 Act6。
6. 11 条路线完成度轴与四档结局矩阵已完成；当前确认每条线不是单一四结局，而是多轴四档组合。
7. `开发数据_IF路线完成度轴与四档结局_11条路线_v1.json` 已生成。
8. 完成度轴变量绑定审计已完成：55 个轴均找到候选变量，53 个直接候选、2 个家庭关系轴依赖现实压力代理变量；下一步建议定义独立结算公式草案，先不写回正式剧情页级 JSON。
9. 独立结算公式草案已完成：轴分 0-100，四档阈值为 80 / 60 / 40，路线聚合按强 / 次 / 软回声轴 1.0 / 0.75 / 0.5 加权；下一步建议人工审定变量信号和硬门槛，再生成正式结算数据层。
10. 公式 P1 首轮审定已完成：62 个需确认信号已全部审为 positive / negative / context；后续已把硬门槛候选写成正式封顶规则，并决定两个代理家庭轴本版采用代理封顶。
11. 正式结算公式数据层已完成：55 个轴全部公式化，39 个硬门槛应用和 13 个软负向扣分已规则化，2 个家庭代理轴本版封顶良好；后续已生成 11 条路线四档结算解释样本。
12. 11 条路线四档结算解释样本已完成：共 44 个路线档位样本、220 个轴结果；下一步建议做结算样本 P1 审读，核对样本文案与 Act7 毕业事件、`ending_candidates`、玩家侧摘要是否一致。

## 2026-05-19 追加：可玩长支线扩展阶段

用户最新要求已经从“P0 节点骨架”推进到“每条线扩展成可玩支线，并符合母本长度”。因此后续不宜立刻把 36 个节点粗拆为 JSON，而应先按长支线标准补足每条路线的章节量、事件量、选择密度和毕业结算。

新增总控文件：

| 文件 | 用途 |
|---|---|
| `开发规划_IF可玩支线长篇扩展总表.md` | 定义 S/A/B 三级路线体量、每条路线的建议章节数、字数区间、有效选择下限、事件密度、交付结构和推荐开发顺序。 |
| `开发规划_IF各路线回流点与内部支线矩阵.md` | 定义每条路线内部可绕出的回流点。回流点从母版事件池调用，不重写其他人的主线，只改变林亦舟的接入角度、变量和关系温度。 |

后续优先顺序调整为：

1. 先写 `DEFAULT-4XX` 宿舍修补长支线，作为 10 章级模板线。
2. 再扩写第五幕站队分歧中的 `R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT`。
3. 再写 `R5-WANFENG`，因为主轴只能直接进入晚风亲密方向。
4. 再写 `R5-ROMANCE`，但必须先确认 A3 社团女生候选来源，再拆沈嘉禾 / 夏知微等候选结构。
4. 再写 `R4-WORK` 与 `A3-ACTIVITY-PUBLIC` 父池；其中 `R3-PERFECT` 先作为 A3 父池下的完美 / 自我管理子外流样板。
5. 最后写 `R5X-HARD` 唯一硬外流线。

JSON 节点草案顺延到长支线模板稳定之后再做，避免支线只有骨架、缺少母本级事件容量。

## 2026-05-20 追加：第五第六卷玩法节奏硬约束

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发规则_IF第五第六卷玩法节奏硬约束.md` | 第一版完成 | 把“第五卷最低主线选择要求”和“第六卷 20 个剧情段 / 每 4 段 1 个选择 / 每次只选两个方向”写成可拆 JSON 的硬规则。 |

使用说明：

- 第五卷普通长线结算前，必须至少完成 5 个主线选择窗口：宿舍站队、亲密 / 晚风、项目 / 规则、活动 / 兴趣、回避 / 外流。
- 每个第五卷选择窗口必须留下第六卷可见回响，不能只改当场台词。
- 第六卷进入命运池后，必须拆成 20 个剧情段，按 5 个四段组组织。
- 第六卷每 4 个剧情段后落 1 个选择窗口，共 5 个选择窗口。
- 第六卷每个选择窗口只能保留两个当前池内方向，不得重新开放其它完整命运线。
- 后续 `R5-LUCHEN`、`R5-LIEFLAT` 和 JSON 草案都必须按本规则检查。

## 2026-05-19 追加：DEFAULT-4XX 长支线模板

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `DEFAULT-4XX` | `开发长线_IF可玩支线DEFAULT-4XX宿舍修补线.md` | 第一版完成 | 作为九条 IF 可玩长支线的章节级模板，提供 10 章结构、变量池、可拆选择、内回流点和毕业结算温度。 |
| `DEFAULT-4XX` | `开发细稿_IF可玩支线DEFAULT-4XX内回流剧情页.md` | 8 个内回流点完成 | 作为内回流剧情页细稿样板，已展开 `RET-DEFAULT-01` 至 `RET-DEFAULT-08` 的方向、四拍、选项和变量结算。 |

使用说明：

- 后续拆 JSON 时，`开发文本_IF分支P0-D第五幕站队分歧事件版.md` 仍是 P0-D 入口和共用事件来源。
- `开发长线_IF可玩支线DEFAULT-4XX宿舍修补线.md` 用于展开 `DEFAULT-4XX` 路线的章节级内容量，不替代 P0-D 共用入口。
- `开发细稿_IF可玩支线DEFAULT-4XX内回流剧情页.md` 用于指导后续具体剧情页和 JSON 节点拆分；它不是小说正文，也不是试玩器脚本。
- 后续 `R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` 应复用本模板的字段结构，但根据各自路线重写生活半径、站队后果、未选择者误读和毕业温度。
- `DEFAULT-4XX` 不等于完美线；它只提高当面修补机会，不取消裂痕、不取消毕业分流。
## 2026-05-19 追加：R5-ZHOU 周屿线长线开发稿

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-ZHOU` | `开发长线_IF可玩支线R5-ZHOU周屿线.md` | 第一版完成 | 作为第五幕站队组第一条 A 级命运外流线，提供周屿线的路线池、章节结构、变量、内回流点、毕业温度和 JSON 拆分建议。 |

使用说明：

- `R5-ZHOU` 不是支线外传，也不是“帮周屿变好”的奖励线，而是玩家在第五幕站队后把时间、情绪和行动投给周屿所形成的独立命运池。
- 进入 `POOL-R5-ZHOU` 后，后续主线锁点仍按母版发生；其它路线只作为软回声出现，不再和周屿线互相交叉生成分支爆炸。
- 本线当前提供 8 章主结构、6 个内回流点、11 个局部变量和 5 种毕业温度结算。
- 后续拆 JSON 时，入口建议使用 `P0D_STAND_WITH_ZHOU`，路线池建议使用 `POOL-R5-ZHOU`，主路线 ID 使用 `R5-ZHOU`。
- `R5-TANG`、`R5-LUCHEN` 和 `R5-LIEFLAT` 已复用本文件的字段层级，并分别改写为规则流程、不代言现实压力、入口过期低温失联三种核心代价。

## 2026-05-20 追加：R5-TANG 唐骁线长线开发稿

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-TANG` | `开发长线_IF可玩支线R5-TANG唐骁线.md` | 第一版完成 | 作为第五幕站队组第二条 A 级命运外流线，提供唐骁线的路线池、章节结构、变量、内回流点、毕业温度和 JSON 拆分建议。 |

使用说明：

- `R5-TANG` 不是支线外传，也不是“唐骁正确”的奖励线，而是玩家在第五幕站队后把时间、情绪和行动投给唐骁所形成的独立命运池。
- 进入 `POOL-R5-TANG` 后，后续主线锁点仍按母版发生；其它路线只作为软回声出现，不再和唐骁线互相交叉生成分支爆炸。
- 本线当前提供 8 章主结构、6 个内回流点、11 个局部变量和 5 种毕业温度结算。
- 后续拆 JSON 时，入口建议使用 `P0D_STAND_WITH_TANG`，路线池建议使用 `POOL-R5-TANG`，主路线 ID 使用 `R5-TANG`。
- `R5-LIEFLAT` 已复用本文件的字段层级，但改写为“静音、晚回、低投入、入口过期”的生活方式代价，不复制唐骁线的“规则、流程、责任边界、项目归档、实用照看”核心代价。

## 2026-05-20 追加：R5-LUCHEN 陆沉线长线开发稿

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-LUCHEN` | `开发长线_IF可玩支线R5-LUCHEN陆沉线.md` | 第一版完成 | 作为第五幕站队组第三条 A 级命运外流线，提供陆沉线的路线池、章节结构、变量、内回流点、毕业温度、第六卷 20 段承接和 JSON 拆分建议。 |

使用说明：

- `R5-LUCHEN` 不是支线外传，也不是“救赎陆沉”的奖励线，而是玩家在第五幕站队后把时间、情绪和行动投给陆沉所形成的独立命运池。
- 进入 `POOL-R5-LUCHEN` 后，后续主线锁点仍按母版发生；其它路线只作为软回声出现，不再和陆沉线互相交叉生成分支爆炸。
- 本线当前提供 8 章主结构、6 个内回流点、11 个核心局部变量、6 个共享回声变量、5 个第六卷四段组和 5 种毕业温度结算。
- 后续拆 JSON 时，入口建议使用 `P0D_STAND_WITH_LUCHEN`，路线池建议使用 `POOL-R5-LUCHEN`，主路线 ID 使用 `R5-LUCHEN`。
- `R5-LIEFLAT` 已复用本文件的字段层级，但改写为“静音、晚回、低投入、入口过期”的生活方式代价，不复制陆沉线的“不代言、现实压力、沉默边界、迟来的解释”核心代价。

## 2026-05-20 追加：R5-LIEFLAT 摆烂线长线开发稿

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-LIEFLAT` | `开发长线_IF可玩支线R5-LIEFLAT摆烂线.md` | 第一版完成 | 作为第五幕站队组第四条 B 级生活方式外流线，提供摆烂线的路线池、章节结构、变量、内回流点、毕业温度、第六卷 20 段承接和 JSON 拆分建议。 |

使用说明：

- `R5-LIEFLAT` 不是省内容线，也不是中立保全线，而是玩家在第五幕站队后持续选择静音、晚回、低投入和不当面处理所形成的独立命运池。
- 进入 `POOL-R5-LIEFLAT` 后，后续主线锁点仍按母版发生；其它路线只作为软回声出现，不再和摆烂线互相交叉生成分支爆炸。
- 本线当前提供 6 章主结构、5 个内回流点、12 个局部变量、5 个第六卷四段组和 5 种毕业温度结算。
- 后续拆 JSON 时，入口建议使用 `P0D_STAND_NO_REPLY`，路线池建议使用 `POOL-R5-LIEFLAT`，主路线 ID 使用 `R5-LIEFLAT`。
- 至此第五幕站队组 `R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` 四条命运外流线均已完成第一版长线开发稿。

## 2026-05-20 追加：R5-WANFENG 晚风线长线开发稿

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-WANFENG` | `开发长线_IF可玩支线R5-WANFENG晚风线.md` | 第一版完成 | 作为主轴唯一直接亲密外流线，提供晚风线的路线池、章节结构、变量、内回流点、毕业温度、第六卷 20 段承接和 JSON 拆分建议。 |

使用说明：

- `R5-WANFENG` 不是恋爱奖励线，也不是把 4XX 问题交给晚风解决，而是玩家在第五幕亲密分歧里继续靠近晚风后形成的独立命运池。
- 进入 `POOL-R5-WANFENG` 后，宿舍强冲突、C407、公开边界、毕业流程仍按母版发生；其它路线只作为软回声出现，不再和晚风线互相交叉生成分支爆炸。
- 本线当前提供 8 章主结构、6 个内回流点、12 个局部变量、5 个第六卷四段组和 5 种毕业温度结算。
- 后续拆 JSON 时，入口建议使用 `P0C_ACT5_WANFENG_BOUNDARY`，入口选择建议使用 `P0C_WANFENG_STEP_FORWARD`，路线池建议使用 `POOL-R5-WANFENG`，主路线 ID 使用 `R5-WANFENG`。
- `R5-ROMANCE` 仍需等待 A3 社团 / 活动父池确认女生候选来源后再开发，不能从主轴或晚风线直接临时跳入沈嘉禾 / 夏知微完整线。

## 2026-05-20 追加：R5-ROMANCE 专注感情线长线开发稿

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-ROMANCE` | `开发长线_IF可玩支线R5-ROMANCE专注感情线.md` | 第一版完成 | 作为 A3 社团 / 活动父池女生候选派生感情线，提供沈嘉禾 / 夏知微双候选但单锁定的路线池、章节结构、变量、内回流点、毕业温度、第六卷 20 段承接和 JSON 拆分建议。 |

使用说明：

- `R5-ROMANCE` 不是主轴没选晚风后的换女主补偿线，必须先满足 `outflow_permission_class = club_with_female_candidate` 与 `romance_outflow_allowed = true`。
- 当前可用候选来源只有两类：沈嘉禾的材料协作 / 共享文档 / 打印店 / 阳光书屋，夏知微的摄影社 / 照片授权 / 活动影像 / 凌空栈道。
- 进入 `POOL-R5-ROMANCE` 后必须锁定 `romance_candidate = shen_jiahe` 或 `romance_candidate = xia_zhiwei`，第六卷不能多对象均摊，也不能重新打开晚风线或宿舍站队组完整命运线。
- 本线当前提供 9 章主结构、7 个内回流点、13 个局部变量、5 个第六卷四段组和 6 种毕业温度结算。
- 后续拆 JSON 时，入口建议使用 `P0C_ACT5_CANDIDATE_CONFIRM`，入口选择建议使用 `P0C_ROMANCE_LOCK_CANDIDATE`，路线池建议使用 `POOL-R5-ROMANCE`，主路线 ID 使用 `R5-ROMANCE`。

## 2026-05-20 追加：剧情页级 JSON 拆分样板 v1

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发样板_IF剧情页级JSON拆分样板_v1.json` | 第一版完成 | 提供可解析的剧情页级 JSON 样板，覆盖路线池、页面节点、选项、变量、第五卷最低主线选择和第六卷 20/4/2 块结构。 |
| `开发样板_IF剧情页级JSON拆分说明.md` | 第一版完成 | 说明 JSON 字段拆法、样板覆盖范围、第五卷门槛、第六卷 20/4/2 规则和后续拆分顺序。 |

使用说明：

- 该样板不是全量剧情转换，也不是试玩器脚本；它是后续正式拆 `DEFAULT-4XX`、站队组四线、`R5-WANFENG`、`R5-ROMANCE` 的结构模板。
- 样板节点包含 P0-D 站队入口、P0-C 晚风入口、P0-C 社团女生候选确认、P0-E 规则项目窗口和普通长线门槛检查。
- `act6_blocks` 以 `POOL-R5-WANFENG` 为例，完整展示 5 个四段组、20 个剧情段、5 个二方向选择窗口。
- 后续正式拆 JSON 时，每个被计入第五卷最低主线选择的选项都必须写 `act6_echo_hook`。

## 2026-05-20 追加：DEFAULT-4XX 剧情页级正式 JSON

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `DEFAULT-4XX` | `开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` | 第一版完成 | 作为第一条正式路线 JSON 数据源，覆盖宿舍修补线入口、8 个内回流点、方向四拍页面 ID 和第六卷 20/4/2 承接。 |

使用说明：

- 该文件承接 `开发长线_IF可玩支线DEFAULT-4XX宿舍修补线.md` 与 `开发细稿_IF可玩支线DEFAULT-4XX内回流剧情页.md`，不是新的路线设定。
- `entry_node` 固定为 `D_00_SHORT_GROUP`，兼容 `P0D_ACT5_SHORT_GROUP` 和 `DEFAULT-ENTRY`。
- `return_points` 已覆盖 `RET-DEFAULT-01` 至 `RET-DEFAULT-08`，每个回流点至少 3 个方向，每个方向保留 4 个剧情页拍点 ID。
- `act6_blocks` 已覆盖 `ACT6-DEFAULT-B01` 至 `ACT6-DEFAULT-B05`，共 20 个剧情段、5 个二方向选择窗口。

## 2026-05-20 追加：R4-WORK 暑假兼职线长线开发稿

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R4-WORK` | `开发长线_IF可玩支线R4-WORK暑假兼职线.md` | 第一版完成 | 作为第四幕暑假 / 生活费 / 勤工兼职倾向扩展出的 B 级生活方式外流线，提供钱压、排班、家庭暗线、宿舍缺席、内回流点、毕业温度和第六卷 20/4/2 承接。 |

使用说明：

- `R4-WORK` 不是苦情线、励志线、陆沉线或 5X 新圈子入口，而是林亦舟把时间投向赚钱、排班和现实优先后形成的生活方式命运池。
- 本线当前提供 8 章主结构、6 个内回流点、11 个核心局部变量、6 个共享回声变量、5 个第六卷四段组和 5 种毕业温度结算。
- 正式 JSON 入口使用 `P0B_SUMMER_WORK_SHIFT`，锁线选择使用 `P0B-WORK-B05-A`，路线池使用 `POOL-R4-WORK`，主路线 ID 使用 `R4-WORK`。
- 下一步应转入 `A3-ACTIVITY-PUBLIC` 父池，补清社团 / 活动方向、女生候选权限和 `R3-PERFECT` 的来源。

## 2026-05-20 追加：A3-ACTIVITY-PUBLIC 社团活动父池长线开发稿

新增文件：

| 父池 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `A3-ACTIVITY-PUBLIC` | `开发长线_IF可玩支线A3-ACTIVITY-PUBLIC社团活动父池.md` | 第一版完成 | 作为第三幕社团 / 活动方向的父池开发稿，提供三次选择窗口、focus / mode 分发、女生候选权限、内回流点、白名单和第六卷 20/4/2 承接。 |

使用说明：

- `A3-ACTIVITY-PUBLIC` 不是 `R3-PERFECT`，也不是 `R5-ROMANCE`；它负责先判断林亦舟第三幕把时间投向哪里。
- 父池固定三次机会：第一次全开放，第二次维持或试新，第三次只能坚持第一个、坚持第二个、两个都要、两个都不要。
- 当前只承认两个可派生 `R5-ROMANCE` 的女生候选来源：沈嘉禾材料 / 共享文档 / 打印店方向，夏知微摄影社 / 照片授权 / 活动影像方向。
- 许棠当前只作为公开叙事、采访、授权和融媒体压力软照面，不写入 `romance_candidate`。
- 后续状态更新：`R3-PERFECT` 与 `R5X-HARD` 的长线稿、入口、Act6 和 Act7 均已接入；当前不再按此旧顺序开发。

## 2026-05-20 追加：R3-PERFECT 完美子外流长线开发稿

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R3-PERFECT` | `开发长线_IF可玩支线R3-PERFECT完美子外流.md` | 第一版完成 | 作为 A3 父池下 `mode_perfect` 派生的 B 级生活方式子外流线，提供公开信用、自我管理、职责边界、被工具化、宿舍低温、内回流点、毕业温度和第六卷 20/4/2 承接。 |

使用说明：

- `R3-PERFECT` 必须从 `POOL-A3-ACTIVITY-PUBLIC` 派生，且 `a3_final_choice` 必须为 `keep_first` 或 `keep_second`，不能由 `take_both` 或 `take_neither` 强行进入。
- 本线不是奖状线、正确线或 `R5-TANG` 唐骁规则线；它写公开信用、活动履历、材料边界和“被默认可靠”的代价。
- 本线当前提供 8 章主结构、6 个内回流点、11 个核心局部变量、5 个共享回声变量、5 个第六卷四段组和 6 种毕业温度结算。
- 后续拆 JSON 时，入口建议使用 `P0A_ACT3_ROUTE_CONFIRM`，入口选择建议使用 `P0A_PERFECT_ACCEPT_SCOPE`，路线池建议使用 `POOL-R3-PERFECT`，主路线 ID 使用 `R3-PERFECT`。
- 后续状态更新：`R5X-HARD` 长线、P0-E 入口、Act6 和 Act7 均已接入正式页级 JSON；当前不再列为待开发长线。

## 2026-05-20 追加：R5X-HARD 唯一硬外流长线开发稿

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5X-HARD` | `开发长线_IF可玩支线R5X-HARD唯一硬外流线.md` | 第一版完成 | 作为第五幕隐藏高难 / 唯一硬外流 S 级长线，提供硬锁条件、双确认入口、许澈 / 韩野 / 蒋沐新圈生活半径、薄关系代价、旧线软照面、内回流点、毕业温度和第六卷 20/4/2 单线承接。 |

使用说明：
- `R5X-HARD` 是唯一硬外流。它可以在 P0-E 硬锁点覆盖普通长线第五卷最低 5 个主线窗口限制，但不能由普通厌烦、第三幕或第四幕软照面直接触发。
- 入口建议使用 `P0E_5X_LAST_DOOR`，入口选择建议使用 `P0E_5X_FOLLOW_XUCHE`，二次确认建议使用 `P0E_5X_CONFIRM_NO_RETURN`，路线池建议使用 `POOL-R5X-HARD`，主路线 ID 使用 `R5X-HARD`。
- 解锁建议同时检查 `hard_outflow_candidate >= 3`、`old_dorm_distance >= 4`、`missed_chance >= 2`、`message_cut >= 2`、`hard_outflow_warning_seen = true` 和二次确认。
- 锁定后设置 `route_lock = "5x"`、`hard_outflow = true`，关闭 `DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT`、`R5-WANFENG`、`R5-ROMANCE`、`R3-PERFECT`、`R4-WORK` 的完整主分支。
- 本线当前提供 10 章主结构、9 个内回流点、13 个核心局部变量、5 个共享回声变量、5 个第六卷四段组和 6 种毕业温度结算。
- 长线层级已基本补齐；后续状态更新：P0-E 硬锁入口和 `R5X-HARD` 第六卷 20 段承接均已接入正式页级 JSON。

## 2026-05-20 追加：第七卷毕业结算与共用事件变体矩阵

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发规则_IF第七卷毕业结算与共用事件变体矩阵.md` | 第一版完成 | 把第七卷从“共用毕业流程”补成“路线变体结算层”，固定 12 个共用事件点，并要求每条已锁定路线在同一事件点写出不同结局温度和文本差异。 |

使用说明：
- 第七卷不再重新选路线；它读取 `route_pool_id`、`active_route_id`、`route_lock`、`hard_outflow` 和 `graduation_temperature`，只做已锁路线的毕业变体结算。
- 已固定 12 个共用事件点：预登记、不公开、最后一个新年、开题、三四月、改论文 / 改毕业设计、答辩、毕业照、清寝、最后一顿饭、离校手续、武生院站后。
- `ACT7-E03-LAST-NEW-YEAR` 必须写出大学四年最后一个新年与第一卷 / 开学处境的对照。
- `ACT7-E06-THESIS-REVISION` 与 `ACT7-E07-DEFENSE` 必须作为硬事件写入，不能只用“论文改完 / 答辩通过”带过。
- 已为 `DEFAULT-4XX`、三室友线、摆烂线、晚风线、专注感情线、`R4-WORK`、`A3-ACTIVITY-PUBLIC`、`R3-PERFECT` 和 `R5X-HARD` 配置第七卷变体 ID。
- 后续状态更新：`ACT7-E01` 至 `ACT7-E12` 事件点已接入 11 条正式路线 JSON；当前不再把 E03 / E06 / E07 列为待补结构。

## 2026-05-20 追加：ACT7-E03 最后一个新年剧情页级细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-E03最后一个新年剧情页.md` | 第一版完成 | 将 `ACT7-E03-LAST-NEW-YEAR` 拆为可开发剧情页，覆盖共用 B204 材料会、开学 / 最后一个新年对照、11 个路线变体和禁止第七卷换线规则。 |

使用说明：
- 本文件不是重写第七卷第三章正文，而是把第三章拆成正式 JSON 可引用的页面细稿。
- 所有路线都必须经过 `ACT7-E03-LAST-NEW-YEAR`，但根据 `route_pool_id` 输出不同物件、公开范围、人物在场方式和毕业温度。
- 已覆盖 `ACT7-DEFAULT`、`ACT7-ZHOU`、`ACT7-TANG`、`ACT7-LUCHEN`、`ACT7-LIEFLAT`、`ACT7-WANFENG`、`ACT7-ROMANCE`、`ACT7-WORK`、`ACT7-A3`、`ACT7-PERFECT`、`ACT7-R5X`。
- 本事件完成时必须记录 `opening_contrast_seen = true`，否则不算完成。

## 2026-05-21 追加：ACT7-E06 改论文 / 毕业设计剧情页级细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-E06改论文毕业设计剧情页.md` | 第一版完成 | 将 `ACT7-E06-THESIS-REVISION` 拆为可开发剧情页，承接 `ACT7-E03` 末尾的开题 / 毕业设计方向初表，覆盖导师红批、版本命名、谁能看稿、谁不能替写、十点前提交和 11 个路线变体。 |

使用说明：

- 本文件不是论文正文，也不是试玩器脚本，而是把改论文 / 改毕业设计拆成第七卷关系结算事件。
- 所有路线都必须经过 `ACT7-E06-THESIS-REVISION`，但根据 `route_pool_id` 输出不同的帮看关系、改稿地点、版本边界和答辩前回声。
- 已覆盖 `ACT7-DEFAULT`、`ACT7-ZHOU`、`ACT7-TANG`、`ACT7-LUCHEN`、`ACT7-LIEFLAT`、`ACT7-WANFENG`、`ACT7-ROMANCE`、`ACT7-WORK`、`ACT7-A3`、`ACT7-PERFECT`、`ACT7-R5X`。
- 本事件完成时必须记录 `thesis_boundary_checked = true`，否则不算完成；它要求明确区分课程成果、主题材料、私人故事和当前路线人物的帮看权限。
- `ACT7-E07-DEFENSE` 已继续拆出第一版剧情页级细稿；后续应把 `ACT7-E03`、`ACT7-E06`、`ACT7-E07` 三个核心事件接入正式 JSON 的第七卷结算层。

## 2026-05-21 追加：ACT7-E07 答辩 / 答辩后剧情页级细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-E07答辩剧情页.md` | 第一版完成 | 将 `ACT7-E07-DEFENSE` 拆为可开发剧情页，承接 `ACT7-E06` 的提交版本、帮看关系和边界检查，覆盖答辩顺序表、门口等待、签字小章、修改后提交、答辩后消息回声和 11 个路线变体。 |

使用说明：

- 本文件不是答辩正文，也不是试玩器脚本，而是把答辩 / 答辩后拆成第七卷关系等待、补交顺序和毕业温度结算事件。
- 所有路线都必须经过 `ACT7-E07-DEFENSE`，但根据 `route_pool_id` 输出不同的门口在场方式、补交优先级、第一条答辩后消息和毕业温度。
- 已覆盖 `ACT7-DEFAULT`、`ACT7-ZHOU`、`ACT7-TANG`、`ACT7-LUCHEN`、`ACT7-LIEFLAT`、`ACT7-WANFENG`、`ACT7-ROMANCE`、`ACT7-WORK`、`ACT7-A3`、`ACT7-PERFECT`、`ACT7-R5X`。
- 本事件完成时必须记录 `defense_boundary_checked = true`，否则不算完成；它要求明确写出答辩门口谁在、谁不在、谁只发消息、谁赶流程、谁等到最后一分钟，以及答辩后补交是否由本人完成。
- 下一步应把 `ACT7-E03`、`ACT7-E06`、`ACT7-E07` 三个核心事件写入正式 JSON 第七卷结算层，再补 `ACT7-E08` 至 `ACT7-E12` 的剩余毕业事件页。

## 2026-05-21 追加：DEFAULT-4XX 第七卷核心事件正式 JSON 接入

更新文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` | 已接入第七卷核心事件 | 在第六卷 20 段正式数据之后新增 `act7_settlement_events`，先落入 `ACT7-E03-LAST-NEW-YEAR`、`ACT7-E06-THESIS-REVISION`、`ACT7-E07-DEFENSE` 三个 DEFAULT-4XX 核心结算事件。 |

使用说明：

- 本次只接入 `POOL-DEFAULT-4XX` / `ACT7-DEFAULT` 的正式 JSON，不提前替其它路线生成伪完整数据。
- 三个事件都保留 `route_switch_allowed = false`，承接第七卷毕业结算矩阵中“不重新开线，只结算已锁路线”的规则。
- `ACT7-E03` 记录 `opening_contrast_seen`、公开范围、空白目录和旧物权限；`ACT7-E06` 记录 `thesis_revision_version`、帮看关系、边界检查和十点前提交；`ACT7-E07` 记录答辩顺序、门口等待、补交、答辩后消息和 `defense_boundary_checked`。
- `validation_targets` 已追加第七卷核心事件数量、12 事件总目标、禁止换线和三个必备完成标记，后续补 `ACT7-E08` 至 `ACT7-E12` 时继续扩展同一数组。

## 2026-05-21 追加：ACT7-E08 至 E12 毕业收束剧情页级细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-E08至E12毕业收束剧情页.md` | 第一版完成 | 将 DEFAULT-4XX 第七卷后半段毕业收束拆成可接 JSON 的剧情页级细稿，覆盖毕业照、清寝、最后一顿饭、离校手续和武生院站后回声。 |

使用说明：

- 本文件只覆盖 `route_id = DEFAULT-4XX`、`route_pool_id = POOL-DEFAULT-4XX`、`act7_variant_id = ACT7-DEFAULT`，不替其它路线预写文本。
- 已拆出 `ACT7-E08-GRAD-PHOTO`、`ACT7-E09-DORM-CLEAR`、`ACT7-E10-LAST-MEAL`、`ACT7-E11-LEAVING-PAPERS`、`ACT7-E12-STATION-AFTER` 五个事件。
- 每个事件都保留 4 个剧情页、1 个二方向选择窗口、完成条件、禁止项和结局温度钩子。
- 下一步应把这 5 个事件追加进 DEFAULT-4XX 正式 JSON 的 `act7_settlement_events`，让 DEFAULT 第七卷先形成 E03/E06/E07/E08-E12 的后半闭环。

## 2026-05-21 追加：DEFAULT-4XX 第七卷 E08-E12 正式 JSON 接入

更新文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` | 已完成第七卷 12 事件闭环 | 已接入 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER` 全部毕业结算事件，使 DEFAULT-4XX 正式 JSON 可作为后续路线变体母结构。 |

使用说明：

- 当前正式 JSON 已覆盖 `ACT7-E01`、`ACT7-E02`、`ACT7-E03`、`ACT7-E04`、`ACT7-E05`、`ACT7-E06`、`ACT7-E07`、`ACT7-E08`、`ACT7-E09`、`ACT7-E10`、`ACT7-E11`、`ACT7-E12`。
- `validation_targets.act7_core_event_count` 已更新为 12；`act7_required_event_count` 仍为 12。
- `ACT7-E01/E02/E04/E05` 已接入正式 JSON，其中 `ACT7-E04-THESIS-TOPIC` 和 `ACT7-E05-MARCH-QUEUE` 补齐了 E03 到 E06 之间的毕业设计 / 三四月压力链。
- 后续建议以 DEFAULT-4XX 的 12 事件闭环为母结构，进入三室友线、晚风 / 感情线、工作 / 活动 / 完美线和 5X 的同事件变体。

## 2026-05-21 追加：ACT7-ZHOU 周屿线 12 事件变体细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-ZHOU周屿线事件变体剧情页.md` | 第一版完成 | 将 `R5-ZHOU` / `POOL-R5-ZHOU` 的第七卷拆成 `ACT7-E01` 至 `ACT7-E12` 的同母事件变体，作为三室友路线第七卷变体样板。 |

使用说明：

- 本文件继承 DEFAULT-4XX 的 12 事件顺序，但不复用 DEFAULT 文本；周屿线镜头落在活动圈、主持材料、热闹退场、半句道歉、最后饭局和低频联系。
- 每个事件均保留 4 个剧情页、1 个二方向选择窗口、完成条件和 `route_switch_allowed = false`。
- 关键变量包括 `zhou_activity_signature_scope`、`zhou_half_apology_seen`、`zhou_final_contact_scope`，用于判断继续联系、半句道歉、体面淡化或遗憾。
- 后续已将 `ACT7-ZHOU` 接入正式 JSON；下一步可按同一格式继续写 `ACT7-TANG`、`ACT7-LUCHEN`、`ACT7-LIEFLAT`。

## 2026-05-21 追加：R5-ZHOU 第七卷正式 JSON 接入

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-ZHOU` | `开发数据_IF剧情页级JSON_R5-ZHOU_v1.json` | 第一版完成 | 将 `ACT7-ZHOU` 12 个第七卷同母事件变体接入正式剧情页级 JSON，作为后续三室友路线 Act7 数据接入样板。 |

使用说明：

- 本文件只把周屿线第七卷毕业结算接入正式 JSON，不伪造尚未正式拆页的第五卷 / 第六卷完整数据。
- `act7_settlement_events` 已覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`，每个事件 4 个剧情页、1 个二方向选择窗口。
- 路由锁定为 `route_id = R5-ZHOU`、`route_pool_id = POOL-R5-ZHOU`、`act7_variant_id = ACT7-ZHOU`，全程 `route_switch_allowed = false`。
- 后续已完成 `ACT7-TANG` 细稿；下一步可接 `R5-TANG` 正式 JSON，不能直接替换周屿文本。

## 2026-05-21 追加：ACT7-TANG 唐骁线 12 事件变体细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-TANG唐骁线事件变体剧情页.md` | 第一版完成 | 将 `R5-TANG` / `POOL-R5-TANG` 的第七卷拆成 `ACT7-E01` 至 `ACT7-E12` 的同母事件变体，作为唐骁线正式 JSON 接入依据。 |

使用说明：

- 本文件继承 DEFAULT-4XX 的 12 事件顺序，但不复用 DEFAULT 或周屿线文本；唐骁线镜头落在流程表、格式、权限、责任边界、实用照看、非功利表达和不再私聊风险。
- 每个事件均保留 4 个剧情页、1 个二方向选择窗口、完成条件和 `route_switch_allowed = false`。
- 关键变量包括 `tang_archive_scope`、`tang_nonfunctional_line_seen`、`tang_final_contact_scope`，用于判断继续协作、非功利表达、体面距离、低温淡化或不再私聊。
- 后续已按 `R5-ZHOU` 正式 JSON 结构，把 `ACT7-TANG` 接入 `开发数据_IF剧情页级JSON_R5-TANG_v1.json`。

## 2026-05-21 追加：R5-TANG 第七卷正式 JSON 接入

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-TANG` | `开发数据_IF剧情页级JSON_R5-TANG_v1.json` | 第一版完成 | 将 `ACT7-TANG` 12 个第七卷同母事件变体接入正式剧情页级 JSON，作为唐骁线 Act7 数据源和后续三室友路线数据接入样板。 |

使用说明：

- 本文件只把唐骁线第七卷毕业结算接入正式 JSON，不伪造尚未正式拆页的第五卷 / 第六卷完整数据。
- `act7_settlement_events` 已覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`，每个事件 4 个剧情页、1 个二方向选择窗口。
- 路由锁定为 `route_id = R5-TANG`、`route_pool_id = POOL-R5-TANG`、`act7_variant_id = ACT7-TANG`，全程 `route_switch_allowed = false`。
- 后续建议继续写 `ACT7-LUCHEN` 细稿，再按本文件和 `R5-ZHOU` 的结构接入陆沉线正式 JSON。

## 2026-05-21 追加：ACT7-LUCHEN 陆沉线 12 事件变体细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-LUCHEN陆沉线事件变体剧情页.md` | 第一版完成 | 将 `R5-LUCHEN` / `POOL-R5-LUCHEN` 的第七卷拆成 `ACT7-E01` 至 `ACT7-E12` 的同母事件变体，作为陆沉线正式 JSON 接入依据。 |

使用说明：

- 本文件继承 DEFAULT-4XX 的 12 事件顺序，但不复用 DEFAULT、周屿线或唐骁线文本；陆沉线镜头落在勤工、图书馆、旧书、最低事实、本人确认和迟来的半句解释。
- 每个事件均保留 4 个剧情页、1 个二方向选择窗口、完成条件和 `route_switch_allowed = false`。
- 关键变量包括 `luchen_old_book_checked`、`luchen_late_word_seen`、`luchen_final_contact_scope`，用于判断低频联系、迟来解释、礼貌同框或空白离校。
- 后续建议按 `R5-ZHOU` / `R5-TANG` 正式 JSON 结构，把 `ACT7-LUCHEN` 接入 `开发数据_IF剧情页级JSON_R5-LUCHEN_v1.json`。

## 2026-05-21 追加：R5-LUCHEN 第七卷正式 JSON 接入

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-LUCHEN` | `开发数据_IF剧情页级JSON_R5-LUCHEN_v1.json` | 第一版完成 | 将 `ACT7-LUCHEN` 12 个第七卷同母事件变体接入正式剧情页级 JSON，作为陆沉线 Act7 数据源和三室友路线数据闭环补齐。 |

使用说明：

- 本文件只把陆沉线第七卷毕业结算接入正式 JSON，不伪造尚未正式拆页的第五卷 / 第六卷完整数据。
- `act7_settlement_events` 已覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`，每个事件 4 个剧情页、1 个二方向选择窗口。
- 路由锁定为 `route_id = R5-LUCHEN`、`route_pool_id = POOL-R5-LUCHEN`、`act7_variant_id = ACT7-LUCHEN`，全程 `route_switch_allowed = false`。
- 后续可继续写 `ACT7-LIEFLAT` 细稿，或回头补三室友线第五卷 / 第六卷正式剧情页。

## 2026-05-21 追加：ACT7-LIEFLAT 摆烂线 12 事件变体细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-LIEFLAT摆烂线事件变体剧情页.md` | 第一版完成 | 将 `R5-LIEFLAT` / `POOL-R5-LIEFLAT` 的第七卷拆成 `ACT7-E01` 至 `ACT7-E12` 的同母事件变体，作为摆烂线正式 JSON 接入依据。 |

使用说明：

- 本文件继承 DEFAULT-4XX 的 12 事件顺序，但不复用 DEFAULT 或三室友线文本；摆烂线镜头落在系统提醒、默认最低范围、空白目录、过期表格、最低可交版、礼貌恭喜、边缘同框、没留座和迟来私聊。
- 每个事件均保留 4 个剧情页、1 个二方向选择窗口、完成条件和 `route_switch_allowed = false`。
- 关键变量包括 `expired_entry_checked`、`low_presence_checked`、`lieflat_contact_scope`，用于判断体面淡化、低存在感、迟来消息、错过和 5X 影子。
- 后续建议按 `R5-ZHOU` / `R5-TANG` / `R5-LUCHEN` 正式 JSON 结构，把 `ACT7-LIEFLAT` 接入 `开发数据_IF剧情页级JSON_R5-LIEFLAT_v1.json`。

## 2026-05-21 追加：R5-LIEFLAT 第七卷正式 JSON 接入

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-LIEFLAT` | `开发数据_IF剧情页级JSON_R5-LIEFLAT_v1.json` | 第一版完成 | 将 `ACT7-LIEFLAT` 12 个第七卷同母事件变体接入正式剧情页级 JSON，作为摆烂线 Act7 数据源和第五幕站队组第七卷数据闭环补齐。 |

使用说明：

- 本文件只把摆烂线第七卷毕业结算接入正式 JSON，不伪造尚未正式拆页的第五卷 / 第六卷完整数据。
- `act7_settlement_events` 已覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`，每个事件 4 个剧情页、1 个二方向选择窗口。
- 路由锁定为 `route_id = R5-LIEFLAT`、`route_pool_id = POOL-R5-LIEFLAT`、`act7_variant_id = ACT7-LIEFLAT`，全程 `route_switch_allowed = false`。
- 后续可继续晚风线、感情线、工作线、完美线和 5X 的 Act7 变体，或回头补第五卷 / 第六卷正式剧情页。

## 2026-05-21 追加：ACT7-WANFENG 晚风线 12 事件变体细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-WANFENG晚风线事件变体剧情页.md` | 第一版完成 | 将 `R5-WANFENG` / `POOL-R5-WANFENG` 的第七卷拆成 `ACT7-E01` 至 `ACT7-E12` 的同母事件变体，作为晚风线正式 JSON 接入依据。 |

使用说明：

- 本文件继承 DEFAULT-4XX 的 12 事件顺序，但不复用 DEFAULT、三室友线或摆烂线文本；晚风线镜头落在语音、地铁口、毕业城市、不公开共识、私人入口和毕业后联系频率。
- 每个事件均保留 4 个剧情页、1 个二方向选择窗口、完成条件和 `route_switch_allowed = false`。
- 关键变量包括 `wanfeng_private_entry`、`wanfeng_future_frequency`、`wanfeng_final_contact_scope`，用于判断继续联系、私人入口、体面分别、甜但有代价或错过。
- 后续建议按 `R5-ZHOU` / `R5-TANG` / `R5-LUCHEN` / `R5-LIEFLAT` 正式 JSON 结构，把 `ACT7-WANFENG` 接入 `开发数据_IF剧情页级JSON_R5-WANFENG_v1.json`。

## 2026-05-21 追加：R5-WANFENG 第七卷正式 JSON 接入

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-WANFENG` | `开发数据_IF剧情页级JSON_R5-WANFENG_v1.json` | 第一版完成 | 将 `ACT7-WANFENG` 12 个第七卷同母事件变体接入正式剧情页级 JSON，作为晚风线 Act7 数据源。 |

使用说明：

- 本文件只把晚风线第七卷毕业结算接入正式 JSON，不伪造尚未正式拆页的第五卷 / 第六卷完整数据。
- `act7_settlement_events` 已覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`，每个事件 4 个剧情页、1 个二方向选择窗口。
- 路由锁定为 `route_id = R5-WANFENG`、`route_pool_id = POOL-R5-WANFENG`、`act7_variant_id = ACT7-WANFENG`，全程 `route_switch_allowed = false`。
- 后续可继续 `ACT7-ROMANCE`、`ACT7-WORK`、`ACT7-A3`、`ACT7-PERFECT` 和 `ACT7-R5X` 的 Act7 变体，或回头补晚风线第五卷 / 第六卷正式剧情页。

## 2026-05-21 追加：ACT7-ROMANCE 专注感情线 12 事件变体细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-ROMANCE专注感情线事件变体剧情页.md` | 第一版完成 | 将 `R5-ROMANCE` / `POOL-R5-ROMANCE` 的第七卷拆成 `ACT7-E01` 至 `ACT7-E12` 的同母事件变体，作为专注感情线正式 JSON 接入依据。 |

使用说明：

- 本文件继承 DEFAULT-4XX 的 12 事件顺序，但不复用 DEFAULT、晚风线或其它路线文本；专注感情线镜头落在沈嘉禾文档 / 格式 / 权限与夏知微影像 / 授权 / 私存相册两套候选分镜。
- 每个事件均保留 4 个剧情页、1 个二方向选择窗口、完成条件和 `route_switch_allowed = false`。
- 进入本文件时必须已有 `romance_candidate = shen_jiahe` 或 `romance_candidate = xia_zhiwei`；第七卷不得重新摇摆双候选。
- 关键变量包括 `romance_candidate`、`candidate_private_entry`、`candidate_final_contact_scope`，用于判断沈嘉禾继续联系、夏知微继续联系、私人入口、体面分别、错过和甜但宿舍降温。
- 后续状态更新：`ACT7-ROMANCE` 已接入 `开发数据_IF剧情页级JSON_R5-ROMANCE_v1.json`，且后续已补 Act5 P0-C 与 Act6 完整页级 JSON。

## 2026-05-21 追加：R5-ROMANCE 第七卷正式 JSON 接入

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-ROMANCE` | `开发数据_IF剧情页级JSON_R5-ROMANCE_v1.json` | 第一版完成 | 将 `ACT7-ROMANCE` 12 个第七卷同母事件变体接入正式剧情页级 JSON，作为专注感情线 Act7 数据源。 |

使用说明：

- 本文件只把专注感情线第七卷毕业结算接入正式 JSON，不伪造尚未正式拆页的第五卷 / 第六卷完整数据。
- `act7_settlement_events` 已覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`，每个事件 4 个剧情页、1 个二方向选择窗口。
- 路由锁定为 `route_id = R5-ROMANCE`、`route_pool_id = POOL-R5-ROMANCE`、`act7_variant_id = ACT7-ROMANCE`，全程 `route_switch_allowed = false`。
- 进入本路线时必须已有 `romance_candidate = shen_jiahe` 或 `romance_candidate = xia_zhiwei`；第七卷只结算已锁定候选，不重新开放双候选摇摆。
- 后续可继续 `ACT7-WORK`、`ACT7-A3`、`ACT7-PERFECT` 和 `ACT7-R5X` 的 Act7 变体，或回头补专注感情线第五卷 / 第六卷正式剧情页。

## 2026-05-21 追加：ACT7-WORK 工作线 12 事件变体细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-WORK工作线事件变体剧情页.md` | 第一版完成 | 将 `R4-WORK` / `POOL-R4-WORK` 的第七卷拆成 `ACT7-E01` 至 `ACT7-E12` 的同母事件变体，作为工作线正式 JSON 接入依据。 |

使用说明：

- 本文件继承 DEFAULT-4XX 的 12 事件顺序，但不复用 DEFAULT、摆烂线、陆沉线或感情线文本；工作线镜头落在工时、工资、请假、证明、饭卡、打印小票、交通费和现实流程。
- 每个事件均保留 4 个剧情页、1 个二方向选择窗口、完成条件和 `route_switch_allowed = false`。
- 本文件明确区分 `R4-WORK` 与 `R5-LUCHEN`：陆沉只能作为现实压力软回声，不能默认陪跑或打开陆沉完整线。
- 关键变量包括 `shift_boundary_checked`、`work_certificate_status`、`wage_confirmed`、`work_final_contact_scope`，用于判断独立处理、体面距离、错过饭局、家庭说开或低频联系。
- 后续状态更新：`ACT7-WORK` 已接入 `开发数据_IF剧情页级JSON_R4-WORK_v1.json`，且后续已补 P0-B、`ACT5-WORK` 与 Act6 完整页级 JSON。

## 2026-05-21 追加：R4-WORK 第七卷正式 JSON 接入

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R4-WORK` | `开发数据_IF剧情页级JSON_R4-WORK_v1.json` | 第一版完成 | 将 `ACT7-WORK` 12 个第七卷同母事件变体接入正式剧情页级 JSON，作为工作线 Act7 数据源。 |

使用说明：

- 本文件最初只把工作线第七卷毕业结算接入正式 JSON；后续已补入 `ACT6-WORK` 第六幕完整页级数据，并已补入 P0-B 第四幕暑假 / 兼职入口完整页级 JSON。
- `act7_settlement_events` 已覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`，每个事件 4 个剧情页、1 个二方向选择窗口。
- 路由锁定为 `route_id = R4-WORK`、`route_pool_id = POOL-R4-WORK`、`act7_variant_id = ACT7-WORK`，全程 `route_switch_allowed = false`。
- 后续状态更新：`ACT6-WORK-B01` 至 `ACT6-WORK-B05` 已接入完整页级 JSON，`P0B_ACT4_LIVING_FEE_DELAY` 至 `P0B_ACT4_ROUTE_CONFIRM` 已接入完整页级 JSON。
- 后续可继续补 `DEFAULT-4XX` / 三室友线 / 摆烂线 Act6。

## 2026-05-21 追加：ACT7-A3 活动父池 12 事件变体细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-A3活动父池事件变体剧情页.md` | 第一版完成 | 将 `A3-ACTIVITY-PUBLIC` / `POOL-A3-ACTIVITY-PUBLIC` 的第七卷拆成 `ACT7-E01` 至 `ACT7-E12` 的同母事件变体，作为活动父池正式 JSON 接入依据。 |

使用说明：

- 本文件继承 DEFAULT-4XX 的 12 事件顺序，但不复用 DEFAULT、感情线或工作线文本；活动父池镜头落在活动联系人、公开材料、采访署名、照片授权、活动证明、活动物料、候选来源和低频联系。
- 每个事件均保留 4 个剧情页、1 个二方向选择窗口、完成条件和 `route_switch_allowed = false`。
- 本文件明确区分 `A3-ACTIVITY-PUBLIC` 与 `R3-PERFECT`、`R5-ROMANCE`、`R5X-HARD`：A3 只结算父池结果，不在第七卷重新开放完美线、感情线或新圈子。
- 关键变量包括 `a3_contact_scope_checked`、`a3_public_scope`、`activity_certificate_status`、`activity_image_scope_checked`、`a3_final_contact_scope`，用于判断公开信用、候选开放、压力扩散、回寝、低可见或完美种子。
- 后续状态更新：`ACT7-A3` 已接入 `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json`，且后续已补 Act4 / Act5 / Act6 完整链路。

## 2026-05-21 追加：A3-ACTIVITY-PUBLIC 第七卷正式 JSON 接入

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `A3-ACTIVITY-PUBLIC` | `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` | 第一版完成 | 将 `ACT7-A3` 12 个第七卷同母事件变体接入正式剧情页级 JSON，作为活动父池 Act7 数据源。 |

使用说明：

- 本文件只把活动父池第七卷毕业结算接入正式 JSON，不伪造尚未正式拆页的第五卷 / 第六卷完整数据。
- `act7_settlement_events` 已覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`，每个事件 4 个剧情页、1 个二方向选择窗口。
- 路由锁定为 `route_id = A3-ACTIVITY-PUBLIC`、`route_pool_id = POOL-A3-ACTIVITY-PUBLIC`、`act7_variant_id = ACT7-A3`，全程 `route_switch_allowed = false`。
- 当时第六卷仅保留 `ACT6-A3-B01` 至 `ACT6-A3-B05` 的 20 段长线占位映射；后续已在 2026-05-22 记录中转成完整页级 JSON。
- 后续可继续 `ACT7-PERFECT` 和 `ACT7-R5X` 的 Act7 变体，或回头补活动父池第五卷 / 第六卷正式剧情页。

## 2026-05-21 追加：ACT7-PERFECT 完美子外流 12 事件变体细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-PERFECT完美子外流事件变体剧情页.md` | 第一版完成 | 将 `R3-PERFECT` / `POOL-R3-PERFECT` 的第七卷拆成 `ACT7-E01` 至 `ACT7-E12` 的同母事件变体，作为完美子外流正式 JSON 接入依据。 |

使用说明：

- 本文件继承 DEFAULT-4XX 的 12 事件顺序，但不复用 A3、唐骁线或工作线文本；完美线镜头落在公开信用、职责范围、停止条件、工具化风险、私人空格和低温边界。
- 每个事件均保留 4 个剧情页、1 个二方向选择窗口、完成条件和 `route_switch_allowed = false`。
- 本文件明确区分 `R3-PERFECT` 与 `A3-ACTIVITY-PUBLIC`、`R5-TANG`、`R5-ROMANCE`：完美线只结算 `mode_perfect` 的生活方式代价，不重开父池或感情线。
- 关键变量包括 `scope_clarity`、`tooling_risk`、`private_delay`、`private_blank_seen`、`handoff_scope_checked`、`perfect_contact_scope`，用于判断公开清楚、工具化、体面低温、迟来私人话、低温或安静边界。
- 后续状态更新：`ACT7-PERFECT` 已接入 `开发数据_IF剧情页级JSON_R3-PERFECT_v1.json`，且后续已补 Act4 / Act5 / Act6 完整链路。

## 2026-05-21 追加：R3-PERFECT 第七卷正式 JSON 接入

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R3-PERFECT` | `开发数据_IF剧情页级JSON_R3-PERFECT_v1.json` | 第一版完成 | 将 `ACT7-PERFECT` 12 个第七卷同母事件变体接入正式剧情页级 JSON，作为完美子外流 Act7 数据源。 |

使用说明：

- 本文件只把完美子外流第七卷毕业结算接入正式 JSON，不伪造尚未正式拆页的第五卷 / 第六卷完整数据。
- `act7_settlement_events` 已覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`，每个事件 4 个剧情页、1 个二方向选择窗口。
- 路由锁定为 `route_id = R3-PERFECT`、`route_pool_id = POOL-R3-PERFECT`、`act7_variant_id = ACT7-PERFECT`，全程 `route_switch_allowed = false`。
- 第六卷仅保留 `ACT6-PERFECT-B01` 至 `ACT6-PERFECT-B05` 的 20 段长线占位映射，不在本文件中伪造完整页级剧情。
- 后续可继续 `ACT7-R5X` 的 Act7 变体，或回头补完美子外流第五卷 / 第六卷正式剧情页。

## 2026-05-21 追加：ACT7-R5X 唯一硬外流 12 事件变体细稿

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第七卷ACT7-R5X唯一硬外流事件变体剧情页.md` | 第一版完成 | 将 `R5X-HARD` / `POOL-R5X-HARD` 的第七卷拆成 `ACT7-E01` 至 `ACT7-E12` 的同母事件变体，作为唯一硬外流正式 JSON 接入依据。 |

使用说明：

- 本文件继承 DEFAULT-4XX 的 12 事件顺序，但不复用 DEFAULT、完美线、工作线或感情线文本；R5X 镜头落在旧群变短、新圈轻陪、许澈边界、旧物不进门、删除置顶和站台空白。
- 每个事件均保留 4 个剧情页、1 个二方向选择窗口、完成条件和 `route_switch_allowed = false`。
- 本文件明确区分 `R5X-HARD` 与其它路线：它不是惩罚线、奖励线、许澈救援线，也不允许第七卷从新圈重新横跳回旧路线。
- 关键变量包括 `new_circle_truth`、`thin_relation`、`old_dorm_distance`、`message_cut`、`soft_passing`、`xuche_boundary_seen`、`old_message_sent`、`deleted_pin`、`5x_regret`，用于判断轻陪、薄关系、旧线距离和不可逆感。
- 后续状态更新：`ACT7-R5X` 已接入 `开发数据_IF剧情页级JSON_R5X-HARD_v1.json`，且后续已补 P0-E 与 Act6 完整页级 JSON。

## 2026-05-21 追加：R5X-HARD 第七卷正式 JSON 接入

新增文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5X-HARD` | `开发数据_IF剧情页级JSON_R5X-HARD_v1.json` | 第一版完成 | 将 `ACT7-R5X` 12 个第七卷同母事件变体接入正式剧情页级 JSON，作为唯一硬外流 Act7 数据源。 |

使用说明：

- 本文件只把唯一硬外流第七卷毕业结算接入正式 JSON，不伪造第五卷 / 第六卷完整剧情页。
- `act7_settlement_events` 已覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`，每个事件 4 个剧情页、1 个二方向选择窗口。
- 路由锁定为 `route_id = R5X-HARD`、`route_pool_id = POOL-R5X-HARD`、`act7_variant_id = ACT7-R5X`，`hard_outflow = true`，全程 `route_switch_allowed = false`。
- 第六卷仅保留 `ACT6-R5X-B01` 至 `ACT6-R5X-B05` 的 20 段长线占位映射，不在本文件中伪造完整页级剧情。
- 后续可做第七卷所有已接路线 JSON 横向一致性校验，或回头补晚风线 / 活动父池 / 完美子外流第五卷与第六卷正式剧情页。

## 2026-05-21 追加：IF 第七卷 ACT7 横向 JSON 收口审计

审计范围：

| 范围 | 结果 |
|---|---|
| 11 条正式 JSON | `DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT`、`R5-WANFENG`、`R5-ROMANCE`、`R4-WORK`、`A3-ACTIVITY-PUBLIC`、`R3-PERFECT`、`R5X-HARD` 均通过。 |
| 事件结构 | 每条均为 12 个 Act7 母事件、48 个剧情页、24 个方向。 |
| 路线锁定 | 每条均 `route_switch_allowed = false`。 |
| 前后链 | 已统一为 `ACT6-END -> ACT7-E01...E12 -> 路线ENDING`。 |
| `source_docs` | 无缺口。 |

后续索引判断：第七卷横向毕业结算层已经可以作为路线收口层使用；下一阶段应回到第五卷 / 第六卷纵向页级拆分，而不是继续扩第七卷路线数量。

## 2026-05-21 追加：IF 第五六七幕路线连通总表

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发规划_IF第五六七幕路线连通总表.md` | 第一版完成 | 将 11 条 IF 路线统一接成 `Act5 锁池 -> Act6 当前池 20 段 -> ACT6-END -> Act7 12 事件 -> 路线ENDING`，作为后续补第五幕 / 第六幕正式剧情页的入口表。 |

使用说明：

- 本文件不是第六幕正文，也不是第六幕完整页级 JSON；它是 5/6/7 连通层。
- 它明确了每条路线的 Act5 / 早期入口、Act6 五个四段组、Act6 -> Act7 必带变量、Act7 JSON 和当前缺口。
- 后续补第六幕时，应先查本表确认当前路线的 `route_pool_id`、五个 Act6 block 和二方向窗口，再进入具体路线细稿。
- 后续状态更新：11 条路线 Act6 完整页级 JSON、P0-A/B/C/D/E 入口、早期外流 Act4 / Act5 桥接和 Act7 12 事件均已接入；当前下一步不再是“继续收 Act6”，而是旧口径残留清理 / P2 正文审读 / 玩家侧路线摘要。

## 2026-05-22 追加：ACT6-WANFENG 晚风线第六幕正式剧情页

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-WANFENG晚风线正式剧情页.md` | 第一版完成 | 将 `R5-WANFENG` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为后续 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补晚风线第六幕，不改第七幕结算，不开启其它感情线。
- 五个四段组对应 `ACT6-WANFENG-B01` 至 `ACT6-WANFENG-B05`。
- 每组 4 个剧情段，选择窗口固定在第 4 段后，每窗 2 个方向，且都留在 `POOL-R5-WANFENG`。
- `开发数据_IF剧情页级JSON_R5-WANFENG_v1.json` 已加入该文件为 `source_docs`；后续记录已将 Act6 转成完整页级 JSON。

## 2026-05-22 追加：ACT6-R5X 唯一硬外流第六幕正式剧情页

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-R5X唯一硬外流正式剧情页.md` | 第一版完成 | 将 `R5X-HARD` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为后续 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补唯一硬外流第六幕，不改第七幕结算，不重新打开旧多线。
- 五个四段组对应 `ACT6-R5X-B01` 至 `ACT6-R5X-B05`。
- 每组 4 个剧情段，选择窗口固定在第 4 段后，每窗 2 个方向，且都留在 `POOL-R5X-HARD`。
- `R5X-HARD` 仍然不是惩罚线、奖励线或许澈救援线；新圈只能写轻、薄、快、散，旧线只能软照面。
- `开发数据_IF剧情页级JSON_R5X-HARD_v1.json` 已加入该文件为 `source_docs`；后续记录已将 Act6 转成完整页级 JSON。

## 2026-05-22 追加：R5X-HARD 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5X-HARD` | `开发数据_IF剧情页级JSON_R5X-HARD_v1.json` | Act6 + Act7 完整页级 JSON 已接入 | 在原有 `ACT7-R5X` 12 事件基础上，新增 `ACT6-R5X` 20 个剧情页和 5 个双方向选择窗口。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-R5X-B01` 至 `ACT6-R5X-B05`，每组 4 页。
- Act6 总计 20 页、5 个选择窗、10 个方向，所有方向都留在 `POOL-R5X-HARD`。
- `act6_blocks.conversion_status` 和 `validation_targets.act6_full_page_json_status` 已标记为 `full_page_json_ready`。
- 后续状态更新：P0-E 硬锁入口已在 `开发数据_IF剧情页级JSON_R5X-HARD_v1.json` 中接入完整页级 JSON，覆盖 5 个节点、20 页、5 个选择窗、20 个方向。

## 2026-05-22 追加：R5-WANFENG 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-WANFENG` | `开发数据_IF剧情页级JSON_R5-WANFENG_v1.json` | Act6 + Act7 完整页级 JSON 已接入 | 在原有 `ACT7-WANFENG` 12 事件基础上，新增 `ACT6-WANFENG` 20 个剧情页和 5 个双方向选择窗口。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-WANFENG-B01` 至 `ACT6-WANFENG-B05`，每组 4 页。
- Act6 总计 20 页、5 个选择窗、10 个方向，所有方向都留在 `POOL-R5-WANFENG`。
- `act6_blocks.conversion_status` 和 `validation_targets.act6_full_page_json_status` 已标记为 `full_page_json_ready`。
- 后续状态更新：Act5 P0-C 晚风入口已在本 JSON 中接入完整页级数据，新增 5 个入口节点、20 页、5 个选择窗、20 个方向。

## 2026-05-22 追加：ACT6-A3 活动父池第六幕正式剧情页

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-A3活动父池正式剧情页.md` | 第一版完成 | 将 `A3-ACTIVITY-PUBLIC` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为后续 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补活动父池第六幕，不把 A3 改写成 `R3-PERFECT`、`R5-ROMANCE` 或 5X。
- 五个四段组对应 `ACT6-A3-B01` 至 `ACT6-A3-B05`。
- 每组 4 个剧情段，选择窗口固定在第 4 段后，每窗 2 个方向，且都留在 `POOL-A3-ACTIVITY-PUBLIC`。
- 候选来源只做核验：沈嘉禾 / 夏知微必须有连续任务级来源；许棠不写作 romance 候选。
- `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` 已加入该文件为 `source_docs`；后续记录已将 Act6 转成完整页级 JSON。

## 2026-05-22 追加：A3-ACTIVITY-PUBLIC 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `A3-ACTIVITY-PUBLIC` | `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` | Act6 + Act7 完整页级 JSON 已接入 | 在原有 `ACT7-A3` 12 事件基础上，新增 `ACT6-A3` 20 个剧情页和 5 个双方向选择窗口。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-A3-B01` 至 `ACT6-A3-B05`，每组 4 页。
- Act6 总计 20 页、5 个选择窗、10 个方向，所有方向都留在 `POOL-A3-ACTIVITY-PUBLIC`。
- `act6_blocks.conversion_status` 和 `validation_targets.act6_full_page_json_status` 已标记为 `full_page_json_ready`。
- 后续状态更新：P0-A 活动父池入口已在 `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` 中接入完整页级 JSON，覆盖 5 个入口节点、20 页、5 个选择窗、20 个方向。

## 2026-05-23 追加：A3-ACTIVITY-PUBLIC 第四幕 / 第五幕桥接

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第四幕ACT4-A3活动父池生活半径剧情页.md` | 第一版完成 | 补齐 A3 父池第四幕生活半径：14 页、5 个三项选择窗、15 个方向，全部留在 `POOL-A3-ACTIVITY-PUBLIC`。 |
| `开发细稿_IF第五幕ACT5-A3活动父池桥接剧情页.md` | 第一版完成 | 补齐 A3 父池第五幕桥接：20 页、5 个选择窗，覆盖宿舍站队、亲密 / 晚风、项目 / 规则、活动 / 兴趣、回避 / 外流五类窗口。 |

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `A3-ACTIVITY-PUBLIC` | `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` | P0-A + Act4 + Act5 + Act6 + Act7 完整链路已接入 | 当前链路为 `P0A_ACT3_ROUTE_CONFIRM -> ACT4-A3-B01...B05 -> ACT5-A3-B01...B05 -> ACT6-A3-B01 -> ACT7-A3`。 |

使用说明：

- A3 已完成 Act4 生活半径、Act5 池内桥接、Act6 与 Act7 的完整承接。
- 后续优先级已转为旧口径残留清理 / P2 正文审读；`R4-WORK` 第五幕承接已由 `ACT5-WORK` 补齐。

## 2026-05-22 追加：ACT6-PERFECT 完美子外流第六幕正式剧情页

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-PERFECT完美子外流正式剧情页.md` | 第一版完成 | 将 `R3-PERFECT` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为后续 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补完美子外流第六幕，不把 R3 写成奖状线、唐骁规则线、A3 父池本体或感情线。
- 五个四段组对应 `ACT6-PERFECT-B01` 至 `ACT6-PERFECT-B05`。
- 每组 4 个剧情段，选择窗口固定在第 4 段后，每窗 2 个方向，且都留在 `POOL-R3-PERFECT`。
- 第六幕交接重点是 `scope_clarity`、`tooling_risk`、`private_delay`、`private_blank_seen`、`handoff_scope_checked`、`perfect_contact_scope`、`dorm_warmth` 与 `graduation_temperature`。
- `开发数据_IF剧情页级JSON_R3-PERFECT_v1.json` 已加入该文件为 `source_docs`；后续记录已将 Act6 转成完整页级 JSON。

## 2026-05-22 追加：R3-PERFECT 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R3-PERFECT` | `开发数据_IF剧情页级JSON_R3-PERFECT_v1.json` | Act6 + Act7 完整页级 JSON 已接入 | 在原有 `ACT7-PERFECT` 12 事件基础上，新增 `ACT6-PERFECT` 20 个剧情页和 5 个双方向选择窗口。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-PERFECT-B01` 至 `ACT6-PERFECT-B05`，每组 4 页。
- Act6 总计 20 页、5 个选择窗、10 个方向，所有方向都留在 `POOL-R3-PERFECT`。
- `act6_blocks.conversion_status` 和 `validation_targets.act6_full_page_json_status` 已标记为 `full_page_json_ready`。
- 后续状态更新：R3 完美派生确认已在 `开发数据_IF剧情页级JSON_R3-PERFECT_v1.json` 中接入页级 JSON，覆盖 `P0A_ACT3_ROUTE_CONFIRM` 的 4 页确认节点和 4 个方向。

## 2026-05-22 追加：P0-C 晚风 / 专注感情入口完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-WANFENG` | `开发数据_IF剧情页级JSON_R5-WANFENG_v1.json` | Act5 P0-C + Act6 + Act7 完整页级 JSON 已接入 | 新增晚风主轴入口 5 节点、20 页、5 个选择窗、20 个方向，承接到 `ACT6-WANFENG-B01`。 |
| `R5-ROMANCE` | `开发数据_IF剧情页级JSON_R5-ROMANCE_v1.json` | Act5 P0-C + Act6 + Act7 完整页级 JSON 已接入 | 新增 A3 女生候选派生入口 5 节点、20 页、5 个选择窗、20 个方向，承接到 `ACT6-ROMANCE-B01`。 |

使用说明：

- `R5-WANFENG` 的 P0-C 入口只处理主轴唯一直接亲密外流：晚风边界、现实见面、礼物成本、公开边界和晚风线锁池。
- `R5-ROMANCE` 的 P0-C 入口只处理 A3 女生候选派生：先核验 `club_with_female_candidate`，再锁 `shen_jiahe` 或 `xia_zhiwei`。
- 两个 JSON 的 `validation_targets.act5_full_page_json_status` 已分别标记为 `p0c_wanfeng_entry_full_page_json_ready` 与 `p0c_romance_entry_full_page_json_ready`。
- 后续状态更新：`R5-ROMANCE` 第六幕正式剧情页与完整页级 JSON 已接入，专注感情线已完成 Act5 -> Act6 -> Act7 纵向链。

## 2026-05-22 追加：ACT6-ROMANCE 专注感情线第六幕正式剧情页

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-ROMANCE专注感情线正式剧情页.md` | 第一版完成 | 将 `R5-ROMANCE` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补专注感情线第六幕，不重开晚风线、4XX 站队线、工作线、5X 或另一个候选对象完整线。
- 五个四段组对应 `ACT6-ROMANCE-B01` 至 `ACT6-ROMANCE-B05`。
- 每组 4 个剧情段，选择窗口固定在第 4 段后，每窗 2 个方向，且都留在 `POOL-R5-ROMANCE`。
- 进入本文件时必须已有 `romance_candidate = shen_jiahe` 或 `romance_candidate = xia_zhiwei`。

## 2026-05-22 追加：R5-ROMANCE 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-ROMANCE` | `开发数据_IF剧情页级JSON_R5-ROMANCE_v1.json` | Act5 P0-C + Act6 + Act7 完整页级 JSON 已接入 | 新增 `ACT6-ROMANCE` 5 组、20 页、5 个选择窗、10 个方向，作为专注感情线第六幕定形层。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-ROMANCE-B01` 至 `ACT6-ROMANCE-B05`。
- `validation_targets.act6_full_page_json_status = full_page_json_ready`。
- 后续状态更新：`R4-WORK` 第六幕正式剧情页与完整页级 JSON 已接入。

## 2026-05-22 追加：ACT6-WORK 工作线第六幕正式剧情页

新增文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-WORK工作线正式剧情页.md` | 第一版完成 | 将 `R4-WORK` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补工作线第六幕，不重开陆沉线、晚风线、站队线、专注感情线、摆烂线或 5X。
- 五个四段组对应 `ACT6-WORK-B01` 至 `ACT6-WORK-B05`。
- 每组 4 个剧情段，选择窗口固定在第 4 段后，每窗 2 个方向，且都留在 `POOL-R4-WORK`。
- 钱压必须具体到饭卡、打印、交通、工资、AA、证明或排班，不写抽象苦情。

## 2026-05-22 追加：P0-B 工作入口与 R4-WORK 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R4-WORK` | `开发数据_IF剧情页级JSON_R4-WORK_v1.json` | P0-B + Act6 + Act7 完整页级 JSON 已接入 | 新增 P0-B 5 节点、20 页、5 个选择窗、20 个方向；`ACT6-WORK` 5 组、20 页、5 个选择窗、10 个方向继续作为工作线第六幕定形层。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-WORK-B01` 至 `ACT6-WORK-B05`。
- `p0b_entry_nodes` 覆盖 `P0B_ACT4_LIVING_FEE_DELAY` 至 `P0B_ACT4_ROUTE_CONFIRM`，合计 5 节点 / 20 页 / 5 选择窗 / 20 方向。
- `validation_targets.act6_full_page_json_status = full_page_json_ready`。
- `route_state.p0b_entry_json_status = full_page_json_ready`。
- 后续状态更新：`DEFAULT-4XX`、三室友线与摆烂线 Act6 均已接入完整页级 JSON；当前不再列为待收 Act6。

## 2026-05-22 追加：P0-D 站队入口完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-STAND` / `DEFAULT-4XX` / 三室友 / 摆烂线 | `开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` | P0-D 共用站队入口完整页级 JSON 已接入 | 新增 P0-D 6 节点、24 页、6 个选择窗、20 个方向，负责从第五幕强冲突分发到 DEFAULT、周屿、唐骁、陆沉、摆烂五个方向。 |

使用说明：

- `p0d_entry_nodes` 覆盖 `P0D_ACT5_SHORT_GROUP` 至 `P0D_ACT5_LIE_NO_REPLY`。
- 共用入口方向分别接 `DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT`。
- `validation_targets.p0d_full_page_json_status = full_page_json_ready`。
- 后续状态更新：`DEFAULT-4XX` 第六幕正式剧情页与完整页级 JSON 已接入。
- 后续状态更新：三室友线与摆烂线 Act6 均已接入完整页级 JSON；当前不再列为待收 Act6。

## 2026-05-22 追加：ACT6-DEFAULT 宿舍修补线第六幕正式剧情页

更新文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-DEFAULT宿舍修补线正式剧情页.md` | 第一版完成 | 将 `DEFAULT-4XX` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补宿舍修补线第六幕，不把 DEFAULT 写成大团圆、真结局或任一室友单线。
- 五个四段组对应 `ACT6-DEFAULT-B01` 至 `ACT6-DEFAULT-B05`。
- 第六幕交接重点是 `dorm_trust`、`dorm_warmth`、`avoidance`、`old_debt`、`repair_depth`、`public_boundary`、`project_stability`、`relationship_truth`、`final_group_state` 与 `graduation_temperature`。

## 2026-05-22 追加：DEFAULT-4XX 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `DEFAULT-4XX` | `开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` | P0-D + Act6 + Act7 完整页级 JSON 已接入 | 在原有 P0-D 共用入口和 `ACT7-DEFAULT` 12 事件基础上，新增 `ACT6-DEFAULT` 20 个剧情页和 5 个双方向选择窗口。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-DEFAULT-B01` 至 `ACT6-DEFAULT-B05`，每组 4 页。
- `ACT6-DEFAULT-S01` 至 `ACT6-DEFAULT-S20` 共 20 页。
- 每组 1 个选择窗口，每窗 2 个方向，共 10 个方向，全部锁在 `POOL-DEFAULT-4XX` 内。
- `validation_targets.act6_full_page_json_status = full_page_json_ready`。
- 后续状态更新：`R5-ZHOU` 第六幕正式剧情页与完整页级 JSON 已接入。
- 后续状态更新：`R5-TANG`、`R5-LUCHEN` 与 `R5-LIEFLAT` 第六幕正式剧情页和完整页级 JSON 已接入。

## 2026-05-22 追加：ACT6-TANG 唐骁线第六幕正式剧情页

更新文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-TANG唐骁线正式剧情页.md` | 第一版完成 | 将 `R5-TANG` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补唐骁线第六幕，不把唐骁线写成正确线、项目成功线或完美线。
- 五个四段组对应 `ACT6-TANG-B01` 至 `ACT6-TANG-B05`。
- 第六幕交接重点是 `tang_trust`、`project_stability`、`rule_pressure`、`responsibility_clarity`、`emotion_delay`、`public_boundary`、`zhou_misread`、`luchen_proxy_risk`、`tang_final_contact_scope` 与 `graduation_temperature`。

## 2026-05-22 追加：R5-TANG 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-TANG` | `开发数据_IF剧情页级JSON_R5-TANG_v1.json` | Act6 + Act7 完整页级 JSON 已接入 | 在原有 `ACT7-TANG` 12 事件基础上，新增 `ACT6-TANG` 20 个剧情页和 5 个双方向选择窗口。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-TANG-B01` 至 `ACT6-TANG-B05`，每组 4 页。
- `ACT6-TANG-S01` 至 `ACT6-TANG-S20` 共 20 页。
- 每组 1 个选择窗口，每窗 2 个方向，共 10 个方向，全部锁在 `POOL-R5-TANG` 内。
- `validation_targets.act6_full_page_json_status = full_page_json_ready`。
- 后续状态更新：`R5-LUCHEN` 与 `R5-LIEFLAT` 第六幕正式剧情页和完整页级 JSON 已接入。

## 2026-05-22 追加：ACT6-ZHOU 周屿线第六幕正式剧情页

更新文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-ZHOU周屿线正式剧情页.md` | 第一版完成 | 将 `R5-ZHOU` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补周屿线第六幕，不把周屿线写成活动圈奖励线、主持成功线或救赎线。
- 五个四段组对应 `ACT6-ZHOU-B01` 至 `ACT6-ZHOU-B05`。
- 第六幕交接重点是 `zhou_trust`、`activity_link`、`public_smooth`、`face_debt`、`joke_defense`、`public_boundary`、`dorm_absence`、`tang_misread`、`qinyue_pressure`、`zhou_final_contact_scope` 与 `graduation_temperature`。

## 2026-05-22 追加：R5-ZHOU 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-ZHOU` | `开发数据_IF剧情页级JSON_R5-ZHOU_v1.json` | Act6 + Act7 完整页级 JSON 已接入 | 在原有 `ACT7-ZHOU` 12 事件基础上，新增 `ACT6-ZHOU` 20 个剧情页和 5 个双方向选择窗口。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-ZHOU-B01` 至 `ACT6-ZHOU-B05`，每组 4 页。
- `ACT6-ZHOU-S01` 至 `ACT6-ZHOU-S20` 共 20 页。
- 每组 1 个选择窗口，每窗 2 个方向，共 10 个方向，全部锁在 `POOL-R5-ZHOU` 内。
- `validation_targets.act6_full_page_json_status = full_page_json_ready`。
- 后续状态更新：`R5-TANG`、`R5-LUCHEN` 与 `R5-LIEFLAT` 第六幕正式剧情页和完整页级 JSON 已接入。

## 2026-05-22 追加：ACT6-LUCHEN 陆沉线第六幕正式剧情页

更新文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-LUCHEN陆沉线正式剧情页.md` | 第一版完成 | 将 `R5-LUCHEN` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补陆沉线第六幕，不把陆沉线写成救赎线、沉默正确线或兼职陪跑线。
- 五个四段组对应 `ACT6-LUCHEN-B01` 至 `ACT6-LUCHEN-B05`。
- 第六幕交接重点是 `luchen_trust`、`proxy_risk`、`work_reality`、`family_pressure`、`quiet_bond`、`repair_temperature`、`dorm_trust`、`money_pressure`、`tang_misread`、`zhou_distance`、`luchen_final_contact_scope` 与 `graduation_temperature`。

## 2026-05-22 追加：R5-LUCHEN 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-LUCHEN` | `开发数据_IF剧情页级JSON_R5-LUCHEN_v1.json` | Act6 + Act7 完整页级 JSON 已接入 | 在原有 `ACT7-LUCHEN` 12 事件基础上，新增 `ACT6-LUCHEN` 20 个剧情页和 5 个双方向选择窗口。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-LUCHEN-B01` 至 `ACT6-LUCHEN-B05`，每组 4 页。
- `ACT6-LUCHEN-S01` 至 `ACT6-LUCHEN-S20` 共 20 页。
- 每组 1 个选择窗口，每窗 2 个方向，共 10 个方向，全部锁在 `POOL-R5-LUCHEN` 内。
- `validation_targets.act6_full_page_json_status = full_page_json_ready`。
- 后续状态更新：`R5-LIEFLAT` 第六幕正式剧情页和完整页级 JSON 已接入。

## 2026-05-22 追加：ACT6-LIEFLAT 摆烂线第六幕正式剧情页

更新文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发细稿_IF第六卷ACT6-LIEFLAT摆烂线正式剧情页.md` | 第一版完成 | 将 `R5-LIEFLAT` 第六幕扩成 20 个剧情段、5 个四段组和 5 个双方向选择窗口，作为 Act6 完整 JSON 的依据。 |

使用说明：

- 本文件只补摆烂线第六幕，不把摆烂线写成省内容线、中立保全线、晚风线或 5X。
- 五个四段组对应 `ACT6-LIEFLAT-B01` 至 `ACT6-LIEFLAT-B05`。
- 第六幕交接重点是 `lieflat_score`、`avoidance`、`lost_chance`、`missed_chance`、`low_conflict`、`late_regret`、`old_dorm_distance`、`hard_outflow_shadow`、`low_presence_checked`、`lieflat_contact_scope` 与 `graduation_temperature`。

## 2026-05-22 追加：R5-LIEFLAT 第六幕完整页级 JSON 接入

更新文件：

| 路线 | 文件 | 当前状态 | 用途 |
|---|---|---|---|
| `R5-LIEFLAT` | `开发数据_IF剧情页级JSON_R5-LIEFLAT_v1.json` | Act6 + Act7 完整页级 JSON 已接入 | 在原有 `ACT7-LIEFLAT` 12 事件基础上，新增 `ACT6-LIEFLAT` 20 个剧情页和 5 个双方向选择窗口。 |

使用说明：

- `act6_detail_blocks` 覆盖 `ACT6-LIEFLAT-B01` 至 `ACT6-LIEFLAT-B05`，每组 4 页。
- `ACT6-LIEFLAT-S01` 至 `ACT6-LIEFLAT-S20` 共 20 页。
- 每组 1 个选择窗口，每窗 2 个方向，共 10 个方向，全部锁在 `POOL-R5-LIEFLAT` 内。
- `validation_targets.act6_full_page_json_status = full_page_json_ready`。
- 5/6/7 全路线当前进入一致性复核阶段。

## 2026-05-23 追加：R4-WORK 母本锁点改写表

更新文件：

| 文件 | 当前状态 | 用途 |
|---|---|---|
| `开发映射_IF母本锁点到R4-WORK工作线改写表.md` | 第一版完成 | 在正式写 R4 剧情页前，锁定“基于母本公共事件改写”的依据表，避免工作线自由创作成独立外传。 |
| `开发细稿_IF第四幕ACT4-WORK工作线生活半径剧情页.md` | 样板第一版完成 | 先把 `R4-ACT4-L01` 至 `R4-ACT4-L03` 写成正式剧情页样板，覆盖 12 页、3 个三项选择窗、9 个方向。 |

使用说明：

- 本表覆盖第四幕 6 个、第五幕 6 个、第六幕 6 个、第七幕 12 个母本锁点。
- 每个锁点都给出母本事件、R4 工作线镜头、选择窗建议和变量 / 回声要求。
- `R4-ACT4-L01` 至 `R4-ACT4-L03` 样板已完成，后续应继续补 `R4-ACT4-L04` 至 `R4-ACT4-L06`，再决定是否回写正式剧情页级 JSON。
- 本轮不改正式剧情页级 JSON，不新增路线结构，只作为剧情正文和选择 JSON 的改写依据。
