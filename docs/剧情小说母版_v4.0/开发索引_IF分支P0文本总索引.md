# IF 分支 P0 文本总索引

## 用途

本索引用来汇总当前 P0 阶段已经完成的 IF 分支开发文本，供后续拆 JSON、节点、选项、变量和毕业结算时快速定位。

P0 的目标不是写支线外传，也不是继续制作试玩器，而是把几个关键时期外流点整理成可开发的剧情骨架：第一卷、第二卷共享，玩家在第三幕、第四幕、第五幕的少数关键处选择林亦舟靠近哪种生活方式，从而进入独立命运池，改变关系容量、事件频率、代价和毕业结算温度。

## 总控文件

| 文件 | 用途 |
|---|---|
| `开发索引_IF命运分歧开发矩阵.md` | IF 分支总原则，定义“时期外流点 + 命运分歧”模型。 |
| `开发规则_IF命运线池化架构.md` | 新增上层架构规则，定义第一二幕共享、第三幕后关键抉择外流、命运池、公共锁点嫁接、线内回流和跨线软回声，防止所有支线挤在同一主线里爆炸。 |
| `开发规则_IF第五第六卷玩法节奏硬约束.md` | 新增玩法节奏硬规则，定义第五卷至少 5 个主线选择窗口，以及第六卷 20 个剧情段、每 4 段 1 次二方向选择、只在当前命运池内承接。 |
| `开发索引_时期外流点路线表.md` | 路线总表，列出 DEFAULT-4XX、A3-ACTIVITY-PUBLIC 父池、R3-PERFECT 子外流、R4-WORK、R5-WANFENG、R5-ROMANCE、三条室友线、摆烂线和 R5X-HARD。 |
| `开发规范_IF分支文本写法.md` | 后续开发文本写法规范，强调事件链、变量、后果和对话逻辑，不写小说正文。 |
| `开发索引_IF分支P0可试玩节点蓝图.md` | 早期节点蓝图，可作为 JSON 拆分参考，但当前阶段不再优先做试玩器。 |
| `开发规格_IF路线Schema与P0节点池.md` | 当前主开发规格，统一路线字段、变量字段、节点字段和 P0-A 至 P0-E 第一版节点池。 |
| `开发规划_IF各路线回流点与内部支线矩阵.md` | 当前内回流点主规划，定义“母版事件池 + 路线镜头”的复用模型，以及每条路线的内部回流点、回流方式、变量回声和防漂移规则。 |

## P0 路线文件

| 模块 | 路线编号 | 文件 | 当前状态 | 后续开发建议 |
|---|---|---|---|---|
| P0-A | `A3-ACTIVITY-PUBLIC` / `R3-PERFECT` | `开发文本_IF分支P0-A第三幕社团完美线.md` | 已按父池 + 子外流格式回改 | 先拆第三幕父池分发，再拆 `R3-PERFECT` 完美子模式；融媒体只作 `focus_newsroom`。 |
| P0-B | `R4-WORK` | `开发文本_IF分支P0-B第四幕暑假兼职线.md` | 已按新格式完成 | 可直接拆事件节点和变量。 |
| P0-C | `R5-WANFENG` / `R5-ROMANCE` | `开发文本_IF分支P0-C第五幕亲密分歧专注感情线.md` | 需按外流权限回改 | 主轴只能直连晚风线；沈嘉禾 / 夏知微等其它感情候选必须由 A3 有女生连续出现的社团线派生。 |
| P0-D | `R5-STAND` / `R5-ZHOU` / `R5-TANG` / `R5-LUCHEN` / `R5-LIEFLAT` | `开发文本_IF分支P0-D第五幕站队分歧事件版.md` | 已按新格式完成 | 可直接拆事件节点和变量；旧稿继续作为文本池。 |
| P0-E | `R5X-HARD` | `开发文本_IF分支P0-E第五幕隐藏高难5X唯一硬外流线.md` | 已按新格式完成 | 可直接拆事件节点；必须保持唯一硬锁和第六 / 七卷单线规则。 |

## 路线进入顺序

后续开发判断路线时，建议按时期和硬锁优先级处理：

1. 第三幕先检查 `A3-ACTIVITY-PUBLIC` 父池：第一次所有方向都可选；第二次可以维持或试新；第三次只能坚持第一个、坚持第二个、两个都要或两个都不要。坚持单一方向后再检查是否形成 `mode_perfect` 并进入 `R3-PERFECT`；两个都要进入压力模式，两个都不要回宿舍主轴。
2. 第四幕检查 `R4-WORK`：生活费、留校、勤工、快递站、打印店和钱压是否持续累积。
3. 第五幕前段检查主轴亲密外流：主轴只能进入 `R5-WANFENG`，或保持朋友 / 错过；不能直接跳到其它女主。
4. 第五幕前段检查社团女生派生感情：只有 A3 有女生连续出现的路线，才允许进入 `R5-ROMANCE`。
5. 第五幕中后段检查 P0-D：强冲突后是否站周屿、唐骁、陆沉，或不站队进入摆烂。
6. 第五幕唯一硬外流点最后检查 `R5X-HARD`：只有满足硬锁条件时进入 5X，进入后不再回原多线。

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

1. 以 `开发规格_IF路线Schema与P0节点池.md` 为依据，生成第一版 JSON 节点草案。
2. 为每个节点补 2-4 个选项，先验证变量和路线判定，再润色文本。
3. 再决定是否接回正式试玩器或保留为开发数据源。

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
- 后续拆 JSON 时，入口建议使用 `P0B_SUMMER_WORK_SHIFT`，入口选择建议使用 `P0B_WORK_TAKE_SHIFT`，路线池建议使用 `POOL-R4-WORK`，主路线 ID 使用 `R4-WORK`。
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
- 后续应先开发 `R3-PERFECT` 完美 / 自我管理子外流，再开发 `R5X-HARD` 唯一硬外流线。

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
- 下一步应开发 `R5X-HARD` 唯一硬外流线；等长线补完后，再回到剧情页细稿和正式 JSON 拆分。

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
- 长线层级已基本补齐；后续应回到剧情页级细稿和正式 JSON 拆分，优先补 P0-E 硬锁双确认页和 `R5X-HARD` 第六卷 20 段承接。

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
- 后续应优先补 `ACT7-E03`、`ACT7-E06`、`ACT7-E07` 三个剧情页级细稿，再把 12 个事件点拆进正式 JSON。

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
