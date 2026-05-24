# IF 玩家侧摘要 P2 首轮审读：亲密线与 5X 线

日期：2026-05-23

范围：
- `R5-WANFENG`
- `R5-ROMANCE`
- `R5X-HARD`

目标：核对玩家侧摘要是否准确对应正式剧情页级 JSON 的第五幕入口、Act6 定形、Act7 毕业温度和结局样本；本轮不新增结构，不改剧情正文。

## 审读维度

1. 入口是否和正式 JSON 一致：检查 `entry_node`、`pool_entry_choice`、P0 入口选择窗和锁池条件。
2. 玩家动作是否和 Act6 定形一致：检查 `act6_detail_blocks` 的五个选择窗是否能支撑摘要里的行动描述。
3. 毕业温度是否和 Act7 一致：检查 12 个 `act7_settlement_events` 和 `ending_candidates`。
4. UI 文案是否会误导玩家：重点避免把结局样本写成成就公式，避免把硬外流写成更高级真结局。

## R5-WANFENG 审读

正式入口：
- `entry_node = P0C_ACT5_WANFENG_BOUNDARY`
- `pool_entry_choice = P0C_WANFENG_STEP_FORWARD`
- `route_focus = main_axis_intimacy`
- `romance_origin = main_axis_wanfeng`

摘要核对：
- `entry_stage` 写成“第五幕 P0-C 主轴唯一直连亲密方向”，与正式 JSON 一致。
- `entry_hint` 写成“向晚风迈近，承认私人入口和现实见面”，能覆盖 P0-C 的赴约、见面、礼物成本、公开边界和路线锁定五个入口节点。
- `player_actions` 中的“安排见面 / 保留私人入口 / 处理晚风生活圈 / 解释优先级和联系频率”对应 Act6 五块：见面安排、公开边界、晚风生活圈、两边解释、毕业后联系频率。
- `graduation_temperature` 和 `ending_samples` 与正式 `ending_candidates` 一致。

结论：玩家侧摘要可保留；未发现需要改正文或改 JSON 的问题。

## R5-ROMANCE 审读

正式入口：
- `entry_node = P0C_ACT5_CANDIDATE_CONFIRM`
- `pool_entry_choice = P0C_ROMANCE_LOCK_CANDIDATE`
- `route_focus = a3_derived_intimacy`
- `romance_origin = a3_activity_public`

摘要核对：
- `entry_stage` 写成“第五幕 P0-C；必须来自 A3 女生候选来源”，与正式 JSON 一致。
- `entry_hint` 写成“锁定沈嘉禾或夏知微等合法候选来源，不能从默认主轴凭空跳转”，能准确防止 UI 误读为默认主轴可直接开其它女主。
- `player_actions` 中的候选对象、协作外壳、署名授权、第一周现实事项，对应 Act6 的候选来源、公开边界、对方任务时间、4XX 最低事实和毕业后联系频率。
- `graduation_temperature` 和 `ending_samples` 与正式 `ending_candidates` 一致。

结论：玩家侧摘要可保留；未发现需要改正文或改 JSON 的问题。

## R5X-HARD 审读

正式入口：
- `entry_node = P0E_5X_LAST_DOOR`
- `pool_entry_choice = P0E_5X_FOLLOW_XUCHE`
- `route_focus = 5x`
- `outflow_stage = act5_hidden_hard_outflow`
- `route_lock = 5x`

摘要核对：
- 原摘要 `entry_stage` 写成“第五幕 P0-E 隐藏高难硬锁；确认后不回流”，与正式 JSON 一致。
- 原 `entry_hint` 写成“选择跟随许澈并确认不回到原多线结构”，过于像单次跟随许澈。正式 P0-E 是五个入口节点连续形成硬锁：最后门口、新桌、薄关系、旧人同场、毕业前后悔。
- 已修正 `entry_hint` 为“在最后门口没有回 4XX，连续选择外走、坐到新桌并接受旧线不可回。”
- Markdown 摘要中的入口说明同步修正为“不是单次跟随许澈，而是在最后门口连续选择外走、坐到新桌并接受旧线不可回。”
- `player_actions` 中的进入新圈、薄关系、旧人同场、许澈边界、删除置顶 / 发送旧消息，对应 Act6 五块和 Act7 结局候选。
- `do_not_frame_as` 已明确不能写成隐藏真结局、许澈拯救线或更高级路线。

结论：本轮只调整玩家侧摘要入口提示；正式剧情正文和正式路线 JSON 不需要改。

## 首轮结论

- `R5-WANFENG`：摘要与正式 JSON 一致。
- `R5-ROMANCE`：摘要与正式 JSON 一致。
- `R5X-HARD`：入口提示已修正，避免 UI / 试玩器误导为“单次跟随许澈”。

下一步建议：继续按同一方法审读宿舍站队组 `DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT`。这组关系密度最高，优先检查玩家侧标题、主要代价和 Act7 毕业温度是否彼此拉开。
