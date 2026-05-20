# IF 分支 P0 文本总索引

## 用途

本索引用来汇总当前 P0 阶段已经完成的 IF 分支开发文本，供后续拆 JSON、节点、选项、变量和毕业结算时快速定位。

P0 的目标不是写支线外传，也不是继续制作试玩器，而是把几个关键时期外流点整理成可开发的剧情骨架：第一卷、第二卷共享，玩家在第三幕、第四幕、第五幕的少数关键处选择林亦舟靠近哪种生活方式，从而进入独立命运池，改变关系容量、事件频率、代价和毕业结算温度。

## 总控文件

| 文件 | 用途 |
|---|---|
| `开发索引_IF命运分歧开发矩阵.md` | IF 分支总原则，定义“时期外流点 + 命运分歧”模型。 |
| `开发规则_IF命运线池化架构.md` | 新增上层架构规则，定义第一二幕共享、第三幕后关键抉择外流、命运池、公共锁点嫁接、线内回流和跨线软回声，防止所有支线挤在同一主线里爆炸。 |
| `开发索引_时期外流点路线表.md` | 路线总表，列出 DEFAULT-4XX、A3-ACTIVITY-PUBLIC 父池、R3-PERFECT 子外流、R4-WORK、R5-ROMANCE、三条室友线、摆烂线和 R5X-HARD。 |
| `开发规范_IF分支文本写法.md` | 后续开发文本写法规范，强调事件链、变量、后果和对话逻辑，不写小说正文。 |
| `开发索引_IF分支P0可试玩节点蓝图.md` | 早期节点蓝图，可作为 JSON 拆分参考，但当前阶段不再优先做试玩器。 |
| `开发规格_IF路线Schema与P0节点池.md` | 当前主开发规格，统一路线字段、变量字段、节点字段和 P0-A 至 P0-E 第一版节点池。 |
| `开发规划_IF各路线回流点与内部支线矩阵.md` | 当前内回流点主规划，定义“母版事件池 + 路线镜头”的复用模型，以及每条路线的内部回流点、回流方式、变量回声和防漂移规则。 |

## P0 路线文件

| 模块 | 路线编号 | 文件 | 当前状态 | 后续开发建议 |
|---|---|---|---|---|
| P0-A | `A3-ACTIVITY-PUBLIC` / `R3-PERFECT` | `开发文本_IF分支P0-A第三幕社团完美线.md` | 已按父池 + 子外流格式回改 | 先拆第三幕父池分发，再拆 `R3-PERFECT` 完美子模式；融媒体只作 `focus_newsroom`。 |
| P0-B | `R4-WORK` | `开发文本_IF分支P0-B第四幕暑假兼职线.md` | 已按新格式完成 | 可直接拆事件节点和变量。 |
| P0-C | `R5-ROMANCE` | `开发文本_IF分支P0-C第五幕亲密分歧专注感情线.md` | 已按新格式完成 | 可直接拆节点；需要在 JSON 中支持沈嘉禾 / 夏知微候选对象字段。 |
| P0-D | `R5-STAND` / `R5-ZHOU` / `R5-TANG` / `R5-LUCHEN` / `R5-LIEFLAT` | `开发文本_IF分支P0-D第五幕站队分歧事件版.md` | 已按新格式完成 | 可直接拆事件节点和变量；旧稿继续作为文本池。 |
| P0-E | `R5X-HARD` | `开发文本_IF分支P0-E第五幕隐藏高难5X唯一硬外流线.md` | 已按新格式完成 | 可直接拆事件节点；必须保持唯一硬锁和第六 / 七卷单线规则。 |

## 路线进入顺序

后续开发判断路线时，建议按时期和硬锁优先级处理：

1. 第三幕先检查 `A3-ACTIVITY-PUBLIC` 父池：第一次所有方向都可选；第二次可以维持或试新；第三次只能坚持第一个、坚持第二个、两个都要或两个都不要。坚持单一方向后再检查是否形成 `mode_perfect` 并进入 `R3-PERFECT`；两个都要进入压力模式，两个都不要回宿舍主轴。
2. 第四幕检查 `R4-WORK`：生活费、留校、勤工、快递站、打印店和钱压是否持续累积。
3. 第五幕前段检查 `R5-ROMANCE`：晚风边界后是否稳定靠近沈嘉禾或夏知微。
4. 第五幕中后段检查 P0-D：强冲突后是否站周屿、唐骁、陆沉，或不站队进入摆烂。
5. 第五幕唯一硬外流点最后检查 `R5X-HARD`：只有满足硬锁条件时进入 5X，进入后不再回原多线。

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
| `romance_focus` | 专注感情线、晚风亲密方向 | 判断是否把情绪和时间投给亲密对象。 |
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
3. 再写 `R5-ROMANCE`，明确沈嘉禾 / 夏知微候选结构，并保留晚风非必选。
4. 再写 `R4-WORK` 与 `A3-ACTIVITY-PUBLIC` 父池；其中 `R3-PERFECT` 先作为 A3 父池下的完美 / 自我管理子外流样板。
5. 最后写 `R5X-HARD` 唯一硬外流线。

JSON 节点草案顺延到长支线模板稳定之后再做，避免支线只有骨架、缺少母本级事件容量。

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
- 后续 `R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` 可以复用本文件的字段层级，但不能复制周屿线的“热闹、面子、玩笑防御、活动圈人情”核心代价。
