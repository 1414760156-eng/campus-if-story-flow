# IF 玩家侧摘要 P2 第二轮审读：宿舍站队组

日期：2026-05-23

范围：
- `DEFAULT-4XX`
- `R5-ZHOU`
- `R5-TANG`
- `R5-LUCHEN`
- `R5-LIEFLAT`

目标：核对宿舍站队组玩家侧摘要是否准确对应 P0-D 共用入口、各线 Act6 定形、Act7 毕业温度和结局样本；本轮不新增结构，不改正式剧情正文。

## 审读维度

1. P0-D 入口是否被误写成单独新入口。
2. 玩家侧标题是否能区分五条宿舍组路线。
3. Act6 五块是否支撑摘要里的玩家动作。
4. Act7 毕业温度是否和 `ending_candidates` 一致。
5. UI 首屏是否会把五条线都读成“低频体面结局”。

## DEFAULT-4XX 审读

正式入口：
- 共用 `P0D_ACT5_SHORT_GROUP` 至 `P0D_ACT5_LIE_NO_REPLY`。
- `pool_entry_choice = DEFAULT-ENTRY-01`
- `route_focus = default_4xx`
- `primary_bond = none`

摘要核对：
- 摘要把本线写成“把问题带回公共桌”，与 Act6 的当面修补、公共桌补话、饭局、一对一短谈和最后一句一致。
- `ending_samples` 与正式 `ending_candidates` 一致。
- 为避免 UI 误读成“默认低频路线”，已把一句话改成“不替谁下结论”，并把主要代价补成“旧账必须本人确认，关系可能不亲近但还在”。

结论：摘要已更准确地区分 DEFAULT 与三室友单人站队线；正式 JSON 不需要改。

## R5-ZHOU 审读

正式入口：
- P0-D 共用入口后锁向 `P0D_STAND_WITH_ZHOU`。
- `route_focus = zhou`
- `primary_bond = zhou`

摘要核对：
- 玩家侧标题“接住热闹背后的面子债”能够对应 Act6 的活动现场陪跑、替周屿收场、公开材料热闹、唐骁误读和低频体面淡化。
- 代价“面子债 / 公开误读 / 宿舍缺席 / 未被选择者低温回声”与正式 JSON 一致。
- `ending_samples` 与正式 `ending_candidates` 一致。

结论：摘要可保留；不需要改剧情正文或正式 JSON。

## R5-TANG 审读

正式入口：
- P0-D 共用入口后锁向 `P0D_STAND_WITH_TANG`。
- `route_focus = tang`
- `primary_bond = tang`

摘要核对：
- 玩家侧标题“站在流程和边界旁边”与 Act6 的流程稳定、代填权限、项目截止、解释周屿误读和低频协作一致。
- 原主要代价里的“未被选择者误读”较泛，容易和周屿线重复。
- 已把 JSON 版 `route_costs` 调整为“规则定罪感 / 情绪延后 / 关系被流程化 / 周屿误读”。
- Markdown 版主要代价同步改为“关系会被流程化，周屿误读和冷边界仍会存在”。
- `ending_samples` 与正式 `ending_candidates` 一致。

结论：摘要已拉开唐骁线与周屿线的 UI 感知差异；正式 JSON 不需要改。

## R5-LUCHEN 审读

正式入口：
- P0-D 共用入口后锁向 `P0D_STAND_WITH_LUCHEN`。
- `route_focus = luchen`
- `primary_bond = luchen`

摘要核对：
- 玩家侧标题“等他说，而不是替他说”与 Act6 的等本人开口、不可公开内容、现实任务、追问边界和低频体面淡化一致。
- 为了贴合 Act7 多次出现的“最低可公开范围 / 待本人确认”，已把 JSON 版 `entry_hint` 从“最低事实”改为“最低公开范围和现实任务”。
- Markdown 版玩家动作同步加入“最低公开范围”。
- `ending_samples` 与正式 `ending_candidates` 一致。

结论：摘要已更准确地区分陆沉线和 DEFAULT 的“最低事实”；正式 JSON 不需要改。

## R5-LIEFLAT 审读

正式入口：
- P0-D 共用入口中不明确站队 / 不回复 / 静音后进入回避池。
- `pool_entry_choice = P0D_STAND_NO_REPLY`
- `route_focus = avoidance`
- `primary_bond = avoidance`

摘要核对：
- 玩家侧标题“什么都不选也会变成一种选择”与 Act6 的静音、短逃、旁观、入口过期和空白毕业一致。
- 原主要代价“无人私催”偏轻，容易被 UI 读成轻松奖励。
- 已把 JSON 版 `route_costs` 改为“没人再追问 / 也没人再等 / 低存在感 / 空白毕业”。
- 已把毕业温度从“入口过期”改成“错过已成事实”，更贴合 Act7 的迟来最低消息、低存在感和空白毕业。
- `ending_samples` 与正式 `ending_candidates` 一致。

结论：摘要已减少摆烂线的轻松误读；正式 JSON 不需要改。

## 第二轮结论

- `DEFAULT-4XX`：已强化“本人确认旧账”和“不亲近但还在”。
- `R5-ZHOU`：摘要无需修改，活动 / 面子债 / 公开误读区分明确。
- `R5-TANG`：已强化“规则定罪感”和“关系被流程化”。
- `R5-LUCHEN`：已强化“最低公开范围”和“不代言”。
- `R5-LIEFLAT`：已强化“没人再追问，也没人再等”，避免摆烂线被读成轻松奖励。

下一步建议：继续审读早期外流和生活半径组 `A3-ACTIVITY-PUBLIC`、`R3-PERFECT`、`R4-WORK`，重点检查第四幕 / 第五幕桥接后的玩家摘要是否充分体现“每条线都过第五幕”。
