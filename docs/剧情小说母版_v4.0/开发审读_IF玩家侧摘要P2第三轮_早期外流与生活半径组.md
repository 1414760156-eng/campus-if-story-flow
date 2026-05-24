# IF 玩家侧摘要 P2 第三轮审读：早期外流与生活半径组

日期：2026-05-23

范围：
- `A3-ACTIVITY-PUBLIC`
- `R3-PERFECT`
- `R4-WORK`

目标：核对早期外流和生活半径组玩家侧摘要是否准确体现“第三 / 四幕入口不是直接跳第六幕，而是继续经过第四幕生活半径和第五幕承接”。本轮不新增结构，不改正式剧情正文。

## 审读维度

1. 是否明确早期外流后的 Act4 / Act5 链路。
2. 是否把 A3 写成单纯社团成功线。
3. 是否把 R3 写成无代价正确答案线。
4. 是否把 R4 写成第四幕直接跳第六幕或打工爽线。
5. `ending_samples` 是否与正式 `ending_candidates` 一致。

## A3-ACTIVITY-PUBLIC 审读

正式链路：
- `entry_node = P0A_ACT3_RECRUIT_FORM`
- `route_focus = activity_public_parent_pool`
- `act4_detail_blocks = 5`
- `act5_bridge_nodes = 5`
- `act6_detail_blocks = 5`
- `act7_settlement_events = 12`

摘要核对：
- 摘要已写明“第三幕 P0-A；之后经过 Act4 活动生活半径和 Act5 当前池桥接”，与正式 JSON 一致。
- 为了让 UI / 试玩器更清楚地显示“不是第三幕直跳第六幕”，已把 JSON 版 `entry_hint` 改为“第四幕把活动变成生活半径，第五幕继续处理宿舍、亲密、项目、活动密度和外流诱因”。
- 已把 JSON 版 `player_actions` 加入“经历第四幕活动生活半径”和“管理第五幕宿舍和亲密回声”。
- Markdown 版玩家动作同步改为“在第四幕活动生活半径和第五幕桥接里处理宿舍、亲密、项目与候选对象来源”。
- `ending_samples` 与正式 `ending_candidates` 一致。

结论：摘要已能体现 A3 是活动父池长线，不是社团成功捷径，也不是感情候选入口合集。

## R3-PERFECT 审读

正式链路：
- `entry_node = P0A_ACT3_ROUTE_CONFIRM`
- `pool_entry_choice = P0A_PERFECT_ACCEPT_SCOPE`
- `route_focus = perfect`
- `act4_detail_blocks = 5`
- `act5_bridge_nodes = 5`
- `act6_detail_blocks = 5`
- `act7_settlement_events = 12`

摘要核对：
- 摘要已写明“第三幕 P0-A 活动父池派生；之后经过 Act4 低风险生活半径和 Act5 桥接”，与正式 JSON 一致。
- 为避免 UI 误读为“完美正确答案”，已把 JSON 版 `entry_hint` 改为“第四幕形成低风险生活半径，第五幕继续面对宿舍、亲密、项目和外流窗口”。
- 已把 JSON 版 `player_actions` 加入“经历第五幕工具化压力”。
- Markdown 版玩家动作同步改为“在第五幕继续面对工具化压力和停止默认兜底的问题”。
- `ending_samples` 与正式 `ending_candidates` 一致。

结论：摘要已能体现完美线的代价是工具化、私人延迟和停止兜底，不是无代价最优路线。

## R4-WORK 审读

正式链路：
- `entry_node = P0B_SUMMER_WORK_SHIFT`
- `pool_entry_choice = P0B_WORK_TAKE_SHIFT`
- `route_focus = work`
- `outflow_stage = act4_summer`
- `act5_bridge_nodes = 5`
- `act6_detail_blocks = 5`
- `act7_settlement_events = 12`

摘要核对：
- 摘要已写明“第四幕 P0-B；第五幕经过 ACT5-WORK 桥接后进入 Act6”，与正式 JSON 一致。
- 为避免 UI 误读为第四幕直接跳第六幕，已把 JSON 版 `entry_hint` 改为“第四幕是工作主场；第五幕仍要经过宿舍、晚风、项目、工作半径和回避诱因的桥接”。
- 已把 JSON 版 `player_actions` 加入“在第五幕写清排班停止条件”。
- Markdown 版玩家动作同步加入“第五幕写清排班停止条件和毕业第一周现实安排”。
- `ending_samples` 与正式 `ending_candidates` 一致。

结论：摘要已能体现工作线第四幕是主场，但仍必须经过第五幕桥接，不再留下“第四幕直接跳第六幕”的玩家侧误读。

## 第三轮结论

- `A3-ACTIVITY-PUBLIC`：摘要已强化 Act4 活动生活半径和 Act5 当前池桥接。
- `R3-PERFECT`：摘要已强化 Act4 低风险生活半径、Act5 工具化压力和停止兜底。
- `R4-WORK`：摘要已强化第四幕主场与第五幕 ACT5-WORK 桥接。

下一步建议：进入 11 条路线玩家侧摘要总复核，检查 UI JSON 字段命名、排序、分组、首屏字段、详情页字段和是否还存在“过早展示结局条件”的风险。
