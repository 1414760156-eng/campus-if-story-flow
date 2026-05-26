# IF 第五六七幕路线连通总表

本文用于把已开发的 IF 长线从第五幕入口、第六幕承接、第七幕结算接成一张可执行路线图。

2026-05-23 口径修正：本文件原先只按 5/6/7 检查，容易把“P0-A / P0-B 早期入口 + Act6 / Act7 已有数据”误写成“全链路完成”。当前硬规则改为：所有完整路线都必须经过第五幕；第三幕 / 第四幕外流后，还要先在当前池内经历第四幕生活半径分化，再进入第五幕池内承接 / 锁池。`A3-ACTIVITY-PUBLIC`、`R3-PERFECT` 与 `R4-WORK` 的早期外流桥接均已补入正式 JSON。

本文件不是第六幕完整剧情页，也不替代各路线长线文件。它只回答三个问题：

1. 每条路线从第五幕或更早的哪个入口进入。
2. 第六幕用哪 5 个四段组承接，并把哪些变量交给第七幕。
3. 第七幕接到哪份正式 JSON，当前还缺什么。

## 全局连通规则

标准链路：

```text
Act5 锁池
Act5 主线五类窗口 / 早期父池确认
-> route_pool_id 锁定当前命运池
-> Act6 当前池 20 段，5 个四段组，每组 4 段
-> 每组 1 个二方向选择窗口，只允许当前池内方向
-> ACT6-END
-> Act7 12 事件
-> Act7 12 个毕业结算母事件
-> 路线ENDING
```

硬规则：

- 除 `R5X-HARD` 外，普通长线不得少于第五幕 5 类主线窗口就直接锁完整路线。
- 第五幕五类窗口必须覆盖：宿舍站队、亲密 / 晚风、项目 / 规则、活动 / 兴趣、回避 / 外流。
- 第六幕只做当前池定形，不重新开完整路线。
- 第六幕每条线必须是 20 段、5 个四段组、5 个选择窗口、每窗 2 个方向。
- 第七幕已经统一为 `ACT6-END -> ACT7-E01...E12 -> 路线ENDING`。
- 第七幕所有正式 JSON 均 `route_switch_allowed = false`。

## 当前总状态

| 层级 | 当前状态 | 说明 |
|---|---|---|
| Act5 入口层 | 结构完整 | P0-C 晚风 / 专注感情入口、P0-D 站队入口、P0-E 5X 硬锁入口均已转正式页级 JSON；`A3-ACTIVITY-PUBLIC` 与 `R3-PERFECT` 已补 Act4 生活半径与 Act5 池内桥接；`R4-WORK` 已补 `ACT5-WORK` 池内承接。 |
| Act6 承接层 | 11 条完整页级接入 | `R5X-HARD`、`R5-WANFENG`、`A3-ACTIVITY-PUBLIC`、`R3-PERFECT`、`R5-ROMANCE`、`R4-WORK`、`DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` 均已完成第六幕 20 页定形层。 |
| Act7 结算层 | 已正式 JSON 收口 | 11 条线均为 12 事件、48 页、24 方向，source_docs 与事件链已校验通过。 |

结论：Act6 已完成 11 / 11 条完整页级接入，Act7 已完成 11 / 11 条结算；`A3-ACTIVITY-PUBLIC`、`R3-PERFECT` 与 `R4-WORK` 的早期外流桥接已补齐。全链路结构缺口已收口。

## Act6 block ID 清单

| 路线 | B01 | B02 | B03 | B04 | B05 |
|---|---|---|---|---|---|
| `DEFAULT-4XX` | `ACT6-DEFAULT-B01` | `ACT6-DEFAULT-B02` | `ACT6-DEFAULT-B03` | `ACT6-DEFAULT-B04` | `ACT6-DEFAULT-B05` |
| `A3-ACTIVITY-PUBLIC` | `ACT6-A3-B01` | `ACT6-A3-B02` | `ACT6-A3-B03` | `ACT6-A3-B04` | `ACT6-A3-B05` |
| `R3-PERFECT` | `ACT6-PERFECT-B01` | `ACT6-PERFECT-B02` | `ACT6-PERFECT-B03` | `ACT6-PERFECT-B04` | `ACT6-PERFECT-B05` |
| `R4-WORK` | `ACT6-WORK-B01` | `ACT6-WORK-B02` | `ACT6-WORK-B03` | `ACT6-WORK-B04` | `ACT6-WORK-B05` |
| `R5-WANFENG` | `ACT6-WANFENG-B01` | `ACT6-WANFENG-B02` | `ACT6-WANFENG-B03` | `ACT6-WANFENG-B04` | `ACT6-WANFENG-B05` |
| `R5-ROMANCE` | `ACT6-ROMANCE-B01` | `ACT6-ROMANCE-B02` | `ACT6-ROMANCE-B03` | `ACT6-ROMANCE-B04` | `ACT6-ROMANCE-B05` |
| `R5-ZHOU` | `ACT6-ZHOU-B01` | `ACT6-ZHOU-B02` | `ACT6-ZHOU-B03` | `ACT6-ZHOU-B04` | `ACT6-ZHOU-B05` |
| `R5-TANG` | `ACT6-TANG-B01` | `ACT6-TANG-B02` | `ACT6-TANG-B03` | `ACT6-TANG-B04` | `ACT6-TANG-B05` |
| `R5-LUCHEN` | `ACT6-LUCHEN-B01` | `ACT6-LUCHEN-B02` | `ACT6-LUCHEN-B03` | `ACT6-LUCHEN-B04` | `ACT6-LUCHEN-B05` |
| `R5-LIEFLAT` | `ACT6-LIEFLAT-B01` | `ACT6-LIEFLAT-B02` | `ACT6-LIEFLAT-B03` | `ACT6-LIEFLAT-B04` | `ACT6-LIEFLAT-B05` |
| `R5X-HARD` | `ACT6-R5X-B01` | `ACT6-R5X-B02` | `ACT6-R5X-B03` | `ACT6-R5X-B04` | `ACT6-R5X-B05` |

## 路线连通矩阵

| 路线 | Act5 / 早期入口 | Act6 承接 | Act6 -> Act7 必带变量 | Act7 JSON | 当前缺口 |
|---|---|---|---|---|---|
| `DEFAULT-4XX` | 默认宿舍修补；`DEFAULT-ENTRY-01/02/03`；要求 `dorm_repair >= 2`、`avoidance <= 2`、未进 5X；P0-D 共用入口已在本 JSON 中接入 | `ACT6-DEFAULT-B01` 至 `B05`；第六幕完整页级 JSON 已接入 | `dorm_trust`、`dorm_warmth`、`repair_depth`、`avoidance`、`old_debt`、`public_boundary`、`project_stability`、`relationship_truth`、`final_group_state`、`graduation_temperature` | `开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` | P0-D 入口、第六幕完整页级 JSON 与第七幕正式 JSON 均已接入；可作为站队组剩余路线的结构基准。 |
| `A3-ACTIVITY-PUBLIC` | 第三幕活动父池；P0-A 父池入口 5 节点 / 20 页、Act4 生活半径 14 页、Act5 桥接 20 页均已接入 | `ACT6-A3-B01` 至 `B05` | `a3_public_scope`、`activity_link`、`activity_certificate_status`、`activity_image_scope_checked`、`a3_final_contact_scope`、`dorm_warmth`、`act5_a3_bridge_ready` | `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` | P0-A -> Act4 -> Act5 -> Act6 -> Act7 已接通；后续只需 P2 文案审读。 |
| `R3-PERFECT` | A3 子外流；`P0A_ACT3_ROUTE_CONFIRM` + `P0A_PERFECT_ACCEPT_SCOPE`；P0-A 完美派生确认、Act4 生活半径 14 页、Act5 桥接 20 页均已接入 | `ACT6-PERFECT-B01` 至 `B05` | `scope_clarity`、`tooling_risk`、`private_delay`、`private_blank_seen`、`handoff_scope_checked`、`perfect_contact_scope` | `开发数据_IF剧情页级JSON_R3-PERFECT_v1.json` | P0-A -> Act4 -> Act5 -> Act6 -> Act7 已接通；后续只需 P2 文案审读。 |
| `R4-WORK` | 第四幕暑假兼职；P0-B 工作入口 5 节点 / 20 页已接入；`ACT5-WORK` 5 节点 / 20 页已接入 | `ACT6-WORK-B01` 至 `B05` | `work_shift`、`money_pressure`、`shift_boundary_checked`、`work_certificate_status`、`wage_confirmed`、`work_final_contact_scope` | `开发数据_IF剧情页级JSON_R4-WORK_v1.json` | `P0-B -> ACT5-WORK -> ACT6-WORK -> ACT7-WORK` 已接通；后续只做 P2 审读。 |
| `R5-WANFENG` | 主轴唯一亲密外流；P0-C 晚风入口 5 节点 / 20 页已接入，覆盖边界、现实见面、礼物成本、公开边界和锁池确认 | `ACT6-WANFENG-B01` 至 `B05` | `wanfeng_private_entry`、`wanfeng_boundary`、`wanfeng_future_frequency`、`wanfeng_final_contact_scope`、`dorm_warmth`、`old_debt` | `开发数据_IF剧情页级JSON_R5-WANFENG_v1.json` | P0-C 晚风入口、第六幕完整页级 JSON 与第七幕正式 JSON 均已接入。 |
| `R5-ROMANCE` | A3 女生候选派生；P0-C 专注感情入口 5 节点 / 20 页已接入，必须已有 `club_with_female_candidate` 来源并锁 `shen_jiahe` 或 `xia_zhiwei` | `ACT6-ROMANCE-B01` 至 `B05` | `romance_candidate`、`candidate_private_entry`、`candidate_public_scope`、`candidate_final_contact_scope`、`dorm_absence`、`money_pressure` | `开发数据_IF剧情页级JSON_R5-ROMANCE_v1.json` | P0-C 候选入口、第六幕完整页级 JSON 与第七幕正式 JSON 均已接入。 |
| `R5-ZHOU` | 第五幕站队；P0-D 共用入口已在 `DEFAULT-4XX` JSON 中接入，方向 `P0D_STAND_WITH_ZHOU` | `ACT6-ZHOU-B01` 至 `B05`；第六幕完整页级 JSON 已接入 | `zhou_trust`、`activity_link`、`public_boundary`、`money_boundary`、`tang_misread`、`qinyue_pressure`、`zhou_final_contact_scope`、`graduation_temperature` | `开发数据_IF剧情页级JSON_R5-ZHOU_v1.json` | 第六幕完整页级 JSON 与第七幕正式 JSON 均已接入；P0-D 入口共用 DEFAULT 数据源。 |
| `R5-TANG` | 第五幕站队；P0-D 共用入口已在 `DEFAULT-4XX` JSON 中接入，方向 `P0D_STAND_WITH_TANG` | `ACT6-TANG-B01` 至 `B05`；第六幕完整页级 JSON 已接入 | `tang_trust`、`project_stability`、`rule_pressure`、`public_boundary`、`emotion_delay`、`tang_final_contact_scope`、`graduation_temperature` | `开发数据_IF剧情页级JSON_R5-TANG_v1.json` | 第六幕完整页级 JSON 与第七幕正式 JSON 均已接入；P0-D 入口共用 DEFAULT 数据源。 |
| `R5-LUCHEN` | 第五幕站队；P0-D 共用入口已在 `DEFAULT-4XX` JSON 中接入，方向 `P0D_STAND_WITH_LUCHEN` | `ACT6-LUCHEN-B01` 至 `B05`；第六幕完整页级 JSON 已接入 | `luchen_trust`、`quiet_bond`、`proxy_risk`、`work_reality`、`family_pressure`、`luchen_late_word_seen`、`luchen_final_contact_scope`、`graduation_temperature` | `开发数据_IF剧情页级JSON_R5-LUCHEN_v1.json` | 第六幕完整页级 JSON 与第七幕正式 JSON 均已接入；P0-D 入口共用 DEFAULT 数据源。 |
| `R5-LIEFLAT` | 第五幕不站队 / 摆烂；P0-D 共用入口已在 `DEFAULT-4XX` JSON 中接入，方向 `P0D_STAND_NO_REPLY` | `ACT6-LIEFLAT-B01` 至 `B05`；第六幕完整页级 JSON 已接入 | `avoidance`、`missed_chance`、`lieflat_score`、`low_conflict`、`old_dorm_distance`、`late_regret`、`low_presence_checked`、`lieflat_contact_scope`、`graduation_temperature` | `开发数据_IF剧情页级JSON_R5-LIEFLAT_v1.json` | 第六幕完整页级 JSON 与第七幕正式 JSON 均已接入；P0-D 入口共用 DEFAULT 数据源。 |
| `R5X-HARD` | 唯一硬外流；P0-E 5 节点 / 20 页已接入，覆盖最后一扇门、新桌子、薄关系、同场擦肩、新圈散场 | `ACT6-R5X-B01` 至 `B05` | `route_lock`、`hard_outflow`、`new_circle_truth`、`thin_relation`、`message_cut`、`xuche_boundary_seen`、`5x_regret` | `开发数据_IF剧情页级JSON_R5X-HARD_v1.json` | P0-E 硬锁入口与第六幕完整页级 JSON 均已接入；5X 线已收成不可回流单线。 |

## Act6 四段组接法

| 路线 | `B01` | `B02` | `B03` | `B04` | `B05` |
|---|---|---|---|---|---|
| `DEFAULT-4XX` | 当面修补 / 保持体面距离 | 公共桌补话 / C407 事项优先 | 集体饭局推进 / 一对一短谈推进 | 说旧账 / 只处理现实任务 | 留下最后一句 / 允许空白毕业 |
| `A3-ACTIVITY-PUBLIC` | 保活动公开边界 / 先回 4XX 解释缺席 | 维持单一活动方向 / 降低活动密度 | 公开署名清楚 / 幕后归档低调 | 说明女生候选来源 / 只保软照面 | 毕业公开材料完整 / 私人关系低频保留 |
| `R3-PERFECT` | 写清职责边界 / 先修补私人解释 | 保公开材料完整 / 降低被默认兜底 | 继续损失控制 / 承认自己延后太久 | 保持体面低温 / 留一次当面饭局 | 毕业材料完整交接 / 毕业后停止默认兜底 |
| `R4-WORK` | 把排班说清 / 先把宿舍消息补上 | 先保工时 / 先保 C407 协作 | 钱账透明 / 用沉默省解释 | 请假修补关系 / 接加班保收入 | 毕业后先处理现实安排 / 留关系口但不承诺 |
| `R5-WANFENG` | 先解释见面安排 / 先处理事项群最低事实 | 公开边界说清 / 暂时只保留私人入口 | 尊重晚风生活圈 / 要求更多优先权 | 两边都解释 / 继续用一边拖住另一边 | 讨论毕业后现实联系 / 保留当下不承诺 |
| `R5-ROMANCE` | 说清候选来源 / 含混保留协作外壳 | 明确公开边界 / 暂时只保留私人入口 | 尊重对方任务时间 / 要求对方先接住自己 | 给 4XX 最低事实 / 继续让亲密关系延迟旧账 | 讨论毕业后现实联系 / 保留当下不承诺 |
| `R5-ZHOU` | 活动现场陪跑 / 宿舍边界留白 | 替周屿收场 / 不替周屿圆场 | 公开材料写热闹 / 控制授权和口径 | 当面解释唐骁误读 / 暂缓解释保活动进度 | 毕业后低频联系 / 体面淡化 |
| `R5-TANG` | 流程稳定优先 / 情绪解释优先 | 收紧代填权限 / 当面说明边界 | 项目截止优先 / 宿舍补话优先 | 解释周屿误读 / 暂缓解释保提交进度 | 毕业后低频协作 / 体面断开 |
| `R5-LUCHEN` | 等陆沉自己说 / 只处理工时事实 | 保护不公开内容 / 说明最低事实 | 跟他完成现实任务 / 回 4XX 解释误读 | 接住一句真话 / 停止追问保留边界 | 毕业后低频联系 / 体面淡化 |
| `R5-LIEFLAT` | 继续静音 / 回最低事实 | 短暂补入口 / 回公共桌做一件事 | 继续旁观 / 完成一个现实任务 | 承认入口过期 / 装作没发生 | 体面淡出 / 空白毕业 |
| `R5X-HARD` | 继续留在新圈 / 保最低公共责任但不回旧线 | 接受薄关系边界 / 继续用轻松遮旧账 | 旧人同场短句 / 借新约离开 | 对许澈说清 / 继续不谈深事 | 发旧消息但不回线 / 删除置顶并离开 |

## Act5 到 Act6 的变量传递

第五幕不只决定路线，还要给第六幕留下可见压力。每条线至少要传下列类型变量：

| 类型 | 变量例子 | 第六幕用途 |
|---|---|---|
| 投入方向 | `route_focus`、`route_pool_id`、`primary_bond` | 决定第六幕镜头落在哪里。 |
| 关系温度 | `dorm_warmth`、`dorm_trust`、`zhou_trust`、`tang_trust`、`luchen_trust` | 决定软照面是否还能展开。 |
| 现实代价 | `time_debt`、`money_pressure`、`work_shift`、`project_stability` | 决定第六幕公共锁点的压力。 |
| 边界风险 | `public_boundary`、`proxy_risk`、`tooling_risk`、`candidate_public_scope` | 决定授权、公开、代填、照片等事件的变体。 |
| 错过和回避 | `avoidance`、`missed_chance`、`message_cut`、`old_dorm_distance` | 决定第七幕是说清、淡化、错过还是空白。 |
| 硬锁 | `route_lock`、`hard_outflow`、`5x_regret` | 只服务 `R5X-HARD`，进入后不再回旧路线。 |

## Act6 到 Act7 的结算接口

第六幕最后一组 `B05` 必须输出可被第七幕读取的结算倾向。建议统一写入：

```json
{
  "act6_closed": true,
  "act6_route_pool_locked": true,
  "act6_choice_window_count": 5,
  "act6_directions_per_window": 2,
  "act6_to_act7_handoff": {
    "graduation_temperature": "branch_dependent",
    "route_switch_allowed": false,
    "soft_echo_routes_only": true
  }
}
```

各路线 `B05` 的实际作用：

- `DEFAULT-4XX`：决定第七幕是说开、体面、错过还是不和解。
- `A3-ACTIVITY-PUBLIC`：决定第七幕公开材料完整度、候选来源和宿舍回温可能。
- `R3-PERFECT`：决定第七幕是公开清楚、工具化、低温还是安静边界。
- `R4-WORK`：决定第七幕工资、证明、排班、错过饭局和低频联系。
- `R5-WANFENG`：决定第七幕私人入口、未来频率和宿舍旧账是否被说清。
- `R5-ROMANCE`：决定第七幕候选对象、公开边界和毕业后联系范围。
- `R5-ZHOU`：决定第七幕活动热闹是否退温、误读是否解释。
- `R5-TANG`：决定第七幕流程合作是否保留、体面断开或低频协作。
- `R5-LUCHEN`：决定第七幕低频联系、沉默边界和现实任务是否说清。
- `R5-LIEFLAT`：决定第七幕入口过期、体面淡出或空白毕业。
- `R5X-HARD`：决定第七幕清醒离开、薄圈散场、许澈边界、旧消息、删除置顶或站台空白。

## 后续补写顺序

现在先接骨架，后续补完整第六幕建议按风险排序：

1. `R5X-HARD`：P0-E 硬锁入口与第六幕完整页级 JSON 已接入。
2. `R5-WANFENG`：P0-C 晚风入口、第六幕完整页级 JSON 与第七幕正式 JSON 已接入。
3. `A3-ACTIVITY-PUBLIC`：P0-A 父池入口与第六幕完整页级 JSON 已接入。
4. `R3-PERFECT`：P0-A 完美派生确认与第六幕完整页级 JSON 已接入。
5. `R5-ROMANCE`：P0-C 候选入口、第六幕完整页级 JSON 与第七幕正式 JSON 已接入。
6. `R4-WORK`：P0-B 入口、`ACT5-WORK` 桥接、第六幕完整页级 JSON 与第七幕正式 JSON 已接入。
7. `DEFAULT-4XX`：P0-D 共用入口、第六幕完整页级 JSON 与第七幕正式 JSON 已接入，可作为站队组剩余路线的结构基准。
8. `R5-ZHOU`：第六幕完整页级 JSON 与第七幕正式 JSON 已接入。
9. `R5-TANG`：第六幕完整页级 JSON 与第七幕正式 JSON 已接入。
10. `R5-LUCHEN`：第六幕完整页级 JSON 与第七幕正式 JSON 已接入。
11. `R5-LIEFLAT`：第六幕完整页级 JSON 与第七幕正式 JSON 已接入。

## 校验清单

后续每补一条第六幕，至少检查：

- 是否仍然只有 20 段。
- 是否仍然只有 5 个选择窗。
- 每个选择窗是否只有 2 个方向。
- 两个方向是否都留在当前 `route_pool_id`。
- 未选择者是否只作为软照面、消息、同场流程或文本回声。
- `ACT6-S20` 后是否只进入 `ACT6-END`，再进入第七幕正式 JSON。
- 是否没有新增第七幕路线横跳。

## 当前结论

5/6/7 现在只能按“Act6 / Act7 已收齐，P0-C / P0-D / P0-E 第五幕入口完整，A3、R3 与 R4 早期外流桥接已补齐”的口径理解。`R4-WORK` 已补 `ACT5-WORK`，不再是结构断链。

当前结论：不建议继续新增第七幕变体。11 条路线 Act6 均已转完整页级 JSON，Act7 均已收口；`A3-ACTIVITY-PUBLIC`、`R3-PERFECT` 与 `R4-WORK` 已补早期外流桥接，结构层可进入冻结复核。

## 2026-05-23 纵向连读审计记录

已新增 `开发审计_IF第五六七幕纵向连读表.md`，作为本总表之后的逐路线纵向阅读索引。

本轮结论：

- 11 条路线均已有“入口数据 -> 第六幕定形 -> 第七幕结算”的可读数据，但早期外流线不能再简化为“第五幕入口已完成”。
- P0-D 站队入口继续作为 `DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` 的共用入口，不需要拆成五套重复入口。
- P0-C 已区分晚风主轴私人入口和 A3 候选对象派生入口，不应互相跳转。
- P0-A / P0-B / P0-E 分别承接活动父池 / 完美派生、工作线和 5X 硬外流；其中 P0-E 已是第五幕硬锁入口，A3 父池、R3 完美派生与 P0-B 工作线均已补当前池第四幕生活半径 / 第五幕承接或工作线桥接。
- 当前不再建议新增第七幕事件；后续结构开发应转入旧口径残留清理、P2 正文审读或玩家侧路线摘要。

## 2026-05-22 复核记录：5/6/7 全路线一致性审计

本轮已完成 11 个路线 JSON 的 5/6/7 全链复核。

- Act5 入口层：P0-C、P0-D、P0-E 均可定位并已接入；A3 父池、R3 完美子外流与 P0-B 工作线均已补 Act4 / Act5 或 Act5 桥接。
- Act6 detail blocks：11 条路线均为 5 组 / 20 页 / 5 个双方向选择窗 / 10 个方向，最后统一进入 `ACT6-END`。
- Act7 settlement events：11 条路线均为 12 事件 / 48 页 / 12 个选择窗 / 24 个方向，事件链为 `ACT6-END -> ACT7-E01...E12 -> 路线ENDING`。
- 已修补 `R5-ZHOU` Act7 变量表达式键，将 `变量 +1` / `变量 = 值` 归一为标准 `updates` / `variable_delta` 键值。
- 已补齐入口 / 完成条件变量池和 3 处 Act6 末组 `next_block = ACT6-END`。
- 当前审计结果修正：JSON 解析、source_docs 文件存在、变量缺口、旧状态残留、Act5 / Act6 / Act7 结构通过；`R4-WORK` 早期外流线已补 `ACT5-WORK`。

## 2026-05-22 审读记录：Act7 站队组收口质量

已完成 `R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` 四条站队组路线的 Act7 收口质量审读。

- 周屿线的活动热闹退潮、公开边界、半句道歉和低频私聊成立，不需要新增结构层。
- 唐骁线的流程压迫、低频协作和非功能性私聊入口成立，不需要新增结构层。
- 陆沉线的沉默边界和现实任务代价成立；首轮 P1 已把“替他 / 帮他”类高密度标签改成更具体的现场动作，保留 `proxy_risk` 代价但降低显性说教感。
- 摆烂线的入口过期、低存在感和空白毕业成立；已机械补齐 `R5-LIEFLAT` 的通用规则 / 样板 `source_docs` 来源登记。

## 2026-05-22 审读记录：Act7 非站队组收口质量

已完成 `DEFAULT-4XX`、`R5-WANFENG`、`R5-ROMANCE`、`R4-WORK`、`A3-ACTIVITY-PUBLIC`、`R3-PERFECT`、`R5X-HARD` 七条非站队组路线的 Act7 收口质量审读。

- 七条线的毕业温度差异成立：宿舍修补线是未圆满但仍可联系，晚风线是私人入口和报平安，专注感情线是候选对象现实任务与亲密边界，工作线是工时 / 钱 / 第一周生活安排，活动父池是公开信用和活动压力，完美线是公开清楚但私人空格仍在，5X 是清醒离开和薄圈散场。
- 已机械补齐 `DEFAULT-4XX` 的 12 个 Act7 `event_name` 和 `act7_temperature_candidates`。
- 已补齐非站队组旧 JSON 的通用来源登记：第五六卷玩法节奏规则、JSON 拆分样板，以及 `DEFAULT-4XX` / `R4-WORK` 的 Schema 来源。
- P1 润色状态：`R5-WANFENG` 与 `R5-ROMANCE` 在 E07、E10、E11 的重复选择标签已改成路线特异动作；`R5-ROMANCE` 个别斜杠式标签已改成更明确的双选动作。

Act7 全路线最终扫尾复核已完成，不新增结构层；11 条路线的标签重复、路线温度、source_docs、变量缺口、旧状态残留和最终文档记录一致性均已通过。

## 2026-05-23 润色记录：Act7 P1 标签润色第一轮

已完成 `R5-LUCHEN`、`R5-WANFENG`、`R5-ROMANCE` 三条目标线的 Act7 P1 标签润色。

- `R5-LUCHEN`：选择标签已从高密度“替他 / 帮他”改为留空、待本人确认、递截图、拿号、签收、追问未说完的话等现场动作。
- `R5-WANFENG`：E07、E10、E11 标签已改向语音实话、饭后语音时间、离校行程、到站后第一周和报平安。
- `R5-ROMANCE`：E07、E10、E11 标签已改向补交项、候选对象可用行程、饭后确认、授权署名和第一周现实安排；斜杠式标签已清理为明确动作。
- 本轮不新增事件、不改事件链、不改变量池；验证口径转入全路线最终扫尾复核。

## 2026-05-23 复核记录：Act7 全路线最终扫尾

已完成 11 条路线最终扫尾复核。

- 结构：Act6 均为 20 页 / 5 窗 / 10 方向；Act7 均为 48 页 / 12 窗 / 24 方向。
- 链路：所有路线均为 `ACT6-END -> ACT7-E01...E12 -> *-ENDING`，且 `route_switch_allowed = false`。
- 来源：`source_docs` 与每个 Act7 `source_detail_doc` 均存在。
- 温度：`DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` 已补齐顶层 `ending_candidates`；11 条路线均有机器可读结局温度候选。
- 标签：三条以上跨线重复标签已归零；斜杠标签已归零。
- 结论：5/6/7 路线 JSON 已进入可冻结状态；后续如继续，建议只做正文级 P2 局部润色，不再新增 Act7 事件或路线。

## 2026-05-22 接入记录：ACT6-WANFENG 第六幕正式剧情页

`开发细稿_IF第六卷ACT6-WANFENG晚风线正式剧情页.md` 已完成第一版。

本文件把 `R5-WANFENG` 的第六幕从 5 个 block 占位扩成 20 个连续剧情段：

- `ACT6-WANFENG-B01`：见面安排与事项群最低事实。
- `ACT6-WANFENG-B02`：公开边界与私人入口。
- `ACT6-WANFENG-B03`：晚风生活圈与优先权压力。
- `ACT6-WANFENG-B04`：两边都要解释。
- `ACT6-WANFENG-B05`：毕业前联系频率预结算。

每组均保留 4 个剧情段、1 个双方向选择窗口，且所有方向都锁在 `POOL-R5-WANFENG` 内。该文件现在是后续生成 `R5-WANFENG` Act6 完整页级 JSON 的依据。

## 2026-05-22 接入记录：ACT6-R5X 第六幕正式剧情页

`开发细稿_IF第六卷ACT6-R5X唯一硬外流正式剧情页.md` 已完成第一版。

本文件把 `R5X-HARD` 的第六幕从 5 个 block 占位扩成 20 个连续剧情段：

- `ACT6-R5X-B01`：新圈半径与最低公共责任。
- `ACT6-R5X-B02`：薄关系显形。
- `ACT6-R5X-B03`：旧人同场短句。
- `ACT6-R5X-B04`：许澈边界。
- `ACT6-R5X-B05`：旧消息与删除置顶预结算。

每组均保留 4 个剧情段、1 个双方向选择窗口，且所有方向都锁在 `POOL-R5X-HARD` 内。该文件是生成 `R5X-HARD` Act6 完整页级 JSON 的依据；现有 `开发数据_IF剧情页级JSON_R5X-HARD_v1.json` 已在后续记录中转成完整页级 JSON。

## 2026-05-22 接入记录：R5X-HARD 第六幕完整页级 JSON

`开发数据_IF剧情页级JSON_R5X-HARD_v1.json` 已接入 `ACT6-R5X` 完整页级数据。

本次接入内容：

- `act6_detail_blocks` 覆盖 `ACT6-R5X-B01` 至 `ACT6-R5X-B05`。
- 每组 4 个剧情页，合计 `ACT6-R5X-S01` 至 `ACT6-R5X-S20` 20 页。
- 每组 1 个双方向选择窗口，合计 5 个选择窗、10 个方向。
- 所有 Act6 方向都锁在 `POOL-R5X-HARD` 内，保持 `route_switch_allowed = false` 和 `hard_outflow = true`。
- `act6_blocks.conversion_status` 与 `validation_targets.act6_full_page_json_status` 已更新为 `full_page_json_ready`。

后续状态更新：P0-E 硬锁入口已在 `开发数据_IF剧情页级JSON_R5X-HARD_v1.json` 中接入完整页级 JSON，覆盖最后一扇门、新桌子、薄关系显形、同场擦肩和新圈散场。

## 2026-05-22 接入记录：R5-WANFENG 第六幕完整页级 JSON

`开发数据_IF剧情页级JSON_R5-WANFENG_v1.json` 已接入 `ACT6-WANFENG` 完整页级数据。

本次接入内容：

- `act6_detail_blocks` 覆盖 `ACT6-WANFENG-B01` 至 `ACT6-WANFENG-B05`。
- 每组 4 个剧情页，合计 `ACT6-WANFENG-S01` 至 `ACT6-WANFENG-S20` 20 页。
- 每组 1 个双方向选择窗口，合计 5 个选择窗、10 个方向。
- 所有 Act6 方向都锁在 `POOL-R5-WANFENG` 内，保持 `route_switch_allowed = false`。
- `act6_blocks.conversion_status` 与 `validation_targets.act6_full_page_json_status` 已更新为 `full_page_json_ready`。

后续状态更新：P0-C 晚风入口已在同一 JSON 中接入完整页级数据，覆盖晚风边界、现实见面、礼物成本、公开边界和锁池确认。

## 2026-05-22 接入记录：ACT6-A3 第六幕正式剧情页

`开发细稿_IF第六卷ACT6-A3活动父池正式剧情页.md` 已完成第一版。

本文件把 `A3-ACTIVITY-PUBLIC` 的第六幕从 5 个 block 占位扩成 20 个连续剧情段：

- `ACT6-A3-B01`：公开边界与宿舍缺席。
- `ACT6-A3-B02`：单一方向与活动密度。
- `ACT6-A3-B03`：署名、证明与归档边界。
- `ACT6-A3-B04`：候选来源核验。
- `ACT6-A3-B05`：毕业公开材料与最终联系范围。

每组均保留 4 个剧情段、1 个双方向选择窗口，且所有方向都锁在 `POOL-A3-ACTIVITY-PUBLIC` 内。该文件是 `A3-ACTIVITY-PUBLIC` Act6 完整页级 JSON 的依据；现有 `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` 已在后续记录中转成完整页级 JSON。

## 2026-05-22 接入记录：A3-ACTIVITY-PUBLIC 第六幕完整页级 JSON

`开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` 已接入 `ACT6-A3` 完整页级数据。

本次接入内容：

- `act6_detail_blocks` 覆盖 `ACT6-A3-B01` 至 `ACT6-A3-B05`。
- 每组 4 个剧情页，合计 `ACT6-A3-S01` 至 `ACT6-A3-S20` 20 页。
- 每组 1 个双方向选择窗口，合计 5 个选择窗、10 个方向。
- 所有 Act6 方向都锁在 `POOL-A3-ACTIVITY-PUBLIC` 内，保持 `route_switch_allowed = false`。
- `act6_blocks.conversion_status` 与 `validation_targets.act6_full_page_json_status` 已更新为 `full_page_json_ready`。

后续状态更新：P0-A 活动父池入口已在 `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` 中接入完整页级 JSON，覆盖第三幕三次选择、女生候选来源和 `R3-PERFECT` 派生条件。

## 2026-05-22 接入记录：ACT6-PERFECT 第六幕正式剧情页

`开发细稿_IF第六卷ACT6-PERFECT完美子外流正式剧情页.md` 已完成第一版。

本文件把 `R3-PERFECT` 的第六幕从 5 个 block 占位扩成 20 个连续剧情段：

- `ACT6-PERFECT-B01`：职责边界与私人解释。
- `ACT6-PERFECT-B02`：公开材料完整与默认兜底。
- `ACT6-PERFECT-B03`：损失控制与延后承认。
- `ACT6-PERFECT-B04`：体面低温与当面饭局。
- `ACT6-PERFECT-B05`：毕业材料交接与停止默认兜底。

每组均保留 4 个剧情段、1 个双方向选择窗口，且所有方向都锁在 `POOL-R3-PERFECT` 内。该文件是 `R3-PERFECT` Act6 完整页级 JSON 的依据；现有 `开发数据_IF剧情页级JSON_R3-PERFECT_v1.json` 已在后续记录中转成完整页级 JSON。

## 2026-05-22 接入记录：R3-PERFECT 第六幕完整页级 JSON

`开发数据_IF剧情页级JSON_R3-PERFECT_v1.json` 已接入 `ACT6-PERFECT` 完整页级数据。

本次接入内容：

- `act6_detail_blocks` 覆盖 `ACT6-PERFECT-B01` 至 `ACT6-PERFECT-B05`。
- 每组 4 个剧情页，合计 `ACT6-PERFECT-S01` 至 `ACT6-PERFECT-S20` 20 页。
- 每组 1 个双方向选择窗口，合计 5 个选择窗、10 个方向。
- 所有 Act6 方向都锁在 `POOL-R3-PERFECT` 内，保持 `route_switch_allowed = false`。
- `act6_blocks.conversion_status` 与 `validation_targets.act6_full_page_json_status` 已更新为 `full_page_json_ready`。

后续状态更新：P0-A 完美派生确认已在 `开发数据_IF剧情页级JSON_R3-PERFECT_v1.json` 中接入页级 JSON，覆盖“三次活动选择 -> mode_perfect -> R3-PERFECT 派生确认”的最终确认节点。

## 2026-05-22 接入记录：P0-C 晚风 / 专注感情入口完整页级 JSON

`开发数据_IF剧情页级JSON_R5-WANFENG_v1.json` 已接入 P0-C 晚风主轴入口完整页级数据。

本次晚风入口接入内容：

- `p0c_entry_nodes` 覆盖 `P0C_ACT5_WANFENG_BOUNDARY`、`P0C_ACT5_WANFENG_REAL_MEET`、`P0C_ACT5_WANFENG_GIFT_COST`、`P0C_ACT5_WANFENG_PUBLIC_BOUNDARY`、`P0C_ACT5_WANFENG_ROUTE_LOCK`。
- 合计 5 个节点、20 页、5 个选择窗、20 个方向。
- 主轴只允许直进晚风线，或退回 `DEFAULT-4XX` / `R5-LIEFLAT`；不从晚风入口直接跳 `R5-ROMANCE`。

`开发数据_IF剧情页级JSON_R5-ROMANCE_v1.json` 已接入 P0-C A3 女生候选派生入口完整页级数据。

本次专注感情入口接入内容：

- `p0c_entry_nodes` 覆盖 `P0C_ACT5_CANDIDATE_CONFIRM`、`P0C_ACT5_COMPANION_FREQ`、`P0C_ACT5_GIFT_FESTIVAL`、`P0C_ACT5_PUBLIC_BOUNDARY`、`P0C_ACT5_ROMANCE_ROUTE_LOCK`。
- 合计 5 个节点、20 页、5 个选择窗、20 个方向。
- 入口明确要求 `outflow_permission_class = club_with_female_candidate`，并锁定 `romance_candidate = shen_jiahe` 或 `xia_zhiwei`。

后续状态更新：`R5-ROMANCE` 第六幕正式剧情页与完整页级 JSON 已接入，专注感情线已形成 `P0-C Act5 入口 -> Act6 定形 -> Act7 结算` 的完整纵向链。

## 2026-05-22 接入记录：ACT6-ROMANCE 第六幕正式剧情页

`开发细稿_IF第六卷ACT6-ROMANCE专注感情线正式剧情页.md` 已完成第一版。

本文件把 `R5-ROMANCE` 的第六幕从 5 个 block 占位扩成 20 个连续剧情段：

- `ACT6-ROMANCE-B01`：候选来源与协作外壳。
- `ACT6-ROMANCE-B02`：公开边界与私人入口。
- `ACT6-ROMANCE-B03`：对方任务时间与亲密索取。
- `ACT6-ROMANCE-B04`：4XX 最低事实与旧账延迟。
- `ACT6-ROMANCE-B05`：毕业前联系频率预结算。

每组均保留 4 个剧情段、1 个双方向选择窗口，且所有方向都锁在 `POOL-R5-ROMANCE` 内。该文件是 `R5-ROMANCE` Act6 完整页级 JSON 的依据。

## 2026-05-22 接入记录：R5-ROMANCE 第六幕完整页级 JSON

`开发数据_IF剧情页级JSON_R5-ROMANCE_v1.json` 已接入 `ACT6-ROMANCE` 完整页级数据。

本次接入内容：

- `act6_detail_blocks` 覆盖 `ACT6-ROMANCE-B01` 至 `ACT6-ROMANCE-B05`。
- 每组 4 个剧情页，合计 `ACT6-ROMANCE-S01` 至 `ACT6-ROMANCE-S20` 20 页。
- 每组 1 个双方向选择窗口，合计 5 个选择窗、10 个方向。
- 所有 Act6 方向都锁在 `POOL-R5-ROMANCE` 内，保持 `route_switch_allowed = false`。
- `act6_blocks.conversion_status` 与 `validation_targets.act6_full_page_json_status` 已更新为 `full_page_json_ready`。

后续状态更新：`R4-WORK` 第六幕正式剧情页与完整页级 JSON 已接入。

## 2026-05-22 接入记录：ACT6-WORK 第六幕正式剧情页

`开发细稿_IF第六卷ACT6-WORK工作线正式剧情页.md` 已完成第一版。

本文件把 `R4-WORK` 的第六幕从 5 个 block 占位扩成 20 个连续剧情段：

- `ACT6-WORK-B01`：排班边界与宿舍最低事实。
- `ACT6-WORK-B02`：工时、证明与 C407 协作。
- `ACT6-WORK-B03`：钱账透明与沉默成本。
- `ACT6-WORK-B04`：请假修补与加班收益。
- `ACT6-WORK-B05`：毕业前现实安排预结算。

每组均保留 4 个剧情段、1 个双方向选择窗口，且所有方向都锁在 `POOL-R4-WORK` 内。该文件是 `R4-WORK` Act6 完整页级 JSON 的依据。

## 2026-05-22 接入记录：R4-WORK 第六幕完整页级 JSON

`开发数据_IF剧情页级JSON_R4-WORK_v1.json` 已接入 `ACT6-WORK` 完整页级数据。

本次接入内容：

- `act6_detail_blocks` 覆盖 `ACT6-WORK-B01` 至 `ACT6-WORK-B05`。
- 每组 4 个剧情页，合计 `ACT6-WORK-S01` 至 `ACT6-WORK-S20` 20 页。
- 每组 1 个双方向选择窗口，合计 5 个选择窗、10 个方向。
- 所有 Act6 方向都锁在 `POOL-R4-WORK` 内，保持 `route_switch_allowed = false`。
- `act6_blocks.conversion_status` 与 `validation_targets.act6_full_page_json_status` 已更新为 `full_page_json_ready`。

后续状态更新：`DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN` 与 `R5-LIEFLAT` Act6 正式剧情页均已接入；后续转向 5/6/7 全链路扫尾与旧口径残留清理。

## 2026-05-22 接入记录：P0-B 工作入口完整页级 JSON

`开发数据_IF剧情页级JSON_R4-WORK_v1.json` 已接入 P0-B 第四幕暑假 / 兼职入口完整页级数据。

本次 P0-B 入口接入内容：

- `p0b_entry_nodes` 覆盖 `P0B_ACT4_LIVING_FEE_DELAY`、`P0B_ACT4_EXPRESS_SHIFT`、`P0B_ACT4_PRINT_MATERIALS`、`P0B_ACT4_MISSED_MEET`、`P0B_ACT4_ROUTE_CONFIRM`。
- 合计 5 个节点、20 页、5 个选择窗、20 个方向。
- 入口从生活费延迟、快递站排班、打印材料、错过关系照面和兼职线确认逐步锁到 `POOL-R4-WORK`。
- `source_docs` 已包含 `开发文本_IF分支P0-B第四幕暑假兼职线.md`。
- 后续状态更新：`DEFAULT-4XX`、`R5-ZHOU` 与 `R5-TANG` 第六幕正式剧情页和完整页级 JSON 均已接入。
- 后续状态更新：`R5-LUCHEN` 第六幕正式剧情页与完整页级 JSON 已接入。
- 后续状态更新：`R5-LIEFLAT` Act6 已接入完整页级 JSON；后续转向 5/6/7 全链路扫尾与旧口径残留清理。

## 2026-05-22 接入记录：ACT6-TANG 第六幕正式剧情页

`开发细稿_IF第六卷ACT6-TANG唐骁线正式剧情页.md` 已完成第一版。

本文件把 `R5-TANG` 的第六幕从 5 个 block 占位扩成 20 个连续剧情段：

- `ACT6-TANG-B01`：流程稳定与情绪解释。
- `ACT6-TANG-B02`：代填权限与当面边界。
- `ACT6-TANG-B03`：项目截止与宿舍补话。
- `ACT6-TANG-B04`：周屿误读与提交进度。
- `ACT6-TANG-B05`：低频协作与体面断开预结算。

每组均保留 4 个剧情段、1 个双方向选择窗口，且所有方向都锁在 `POOL-R5-TANG` 内。该文件是 `R5-TANG` Act6 完整页级 JSON 的依据。

## 2026-05-22 接入记录：R5-TANG 第六幕完整页级 JSON

`开发数据_IF剧情页级JSON_R5-TANG_v1.json` 已接入 `ACT6-TANG` 完整页级数据。

本次接入内容：

- `act6_detail_blocks` 覆盖 `ACT6-TANG-B01` 至 `ACT6-TANG-B05`。
- 每组 4 个剧情页，合计 `ACT6-TANG-S01` 至 `ACT6-TANG-S20` 20 页。
- 每组 1 个双方向选择窗口，合计 5 个选择窗、10 个方向。
- 所有 Act6 方向都锁在 `POOL-R5-TANG` 内，保持 `route_switch_allowed = false`。
- `act6_blocks.conversion_status` 与 `validation_targets.act6_full_page_json_status` 已更新为 `full_page_json_ready`。
- 后续状态更新：`R5-LUCHEN` 与 `R5-LIEFLAT` 第六幕正式剧情页和完整页级 JSON 已接入。

## 2026-05-22 接入记录：P0-D 站队入口完整页级 JSON

`开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` 已接入 P0-D 第五幕站队入口完整页级数据，作为 DEFAULT / 三室友 / 摆烂线共用入口层。

本次 P0-D 入口接入内容：

- `p0d_entry_nodes` 覆盖 `P0D_ACT5_SHORT_GROUP`、`P0D_ACT5_REPAIR_TABLE`、`P0D_ACT5_ZHOU_JOKE`、`P0D_ACT5_TANG_TIMELINE`、`P0D_ACT5_LUCHEN_NO_PROXY`、`P0D_ACT5_LIE_NO_REPLY`。
- 合计 6 个节点、24 页、6 个选择窗、20 个方向。
- 共用入口先分发到 `DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT`，再由各路线 Act6 接续。
- `source_docs` 已包含 `开发文本_IF分支P0-D第五幕站队分歧事件版.md`。
- 后续状态更新：`DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN` 与 `R5-LIEFLAT` 第六幕正式剧情页和完整页级 JSON 已接入。

## 2026-05-22 接入记录：ACT6-LUCHEN 第六幕正式剧情页

`开发细稿_IF第六卷ACT6-LUCHEN陆沉线正式剧情页.md` 已完成第一版。

本文件把 `R5-LUCHEN` 的第六幕从 5 个 block 占位扩成 20 个连续剧情段：

- `ACT6-LUCHEN-B01`：等他说与排班事实。
- `ACT6-LUCHEN-B02`：不公开内容与最低事实。
- `ACT6-LUCHEN-B03`：现实任务与 4XX 误读。
- `ACT6-LUCHEN-B04`：一句真话与追问边界。
- `ACT6-LUCHEN-B05`：低频联系与体面淡化。

每组均保留 4 个剧情段、1 个双方向选择窗口，且所有方向都锁在 `POOL-R5-LUCHEN` 内。该文件是 `R5-LUCHEN` Act6 完整页级 JSON 的依据。

## 2026-05-22 接入记录：R5-LUCHEN 第六幕完整页级 JSON

`开发数据_IF剧情页级JSON_R5-LUCHEN_v1.json` 已接入 `ACT6-LUCHEN` 完整页级数据。

本次接入内容：

- `act6_detail_blocks` 覆盖 `ACT6-LUCHEN-B01` 至 `ACT6-LUCHEN-B05`。
- 每组 4 个剧情页，合计 `ACT6-LUCHEN-S01` 至 `ACT6-LUCHEN-S20` 20 页。
- 每组 1 个双方向选择窗口，合计 5 个选择窗、10 个方向。
- 所有 Act6 方向都锁在 `POOL-R5-LUCHEN` 内，保持 `route_switch_allowed = false`。
- `act6_blocks.conversion_status` 与 `validation_targets.act6_full_page_json_status` 已更新为 `full_page_json_ready`。
- 后续状态更新：`R5-LIEFLAT` 第六幕正式剧情页与完整页级 JSON 已接入。

## 2026-05-22 接入记录：ACT6-LIEFLAT 第六幕正式剧情页

`开发细稿_IF第六卷ACT6-LIEFLAT摆烂线正式剧情页.md` 已完成第一版。

本文件把 `R5-LIEFLAT` 的第六幕从 5 个 block 占位扩成 20 个连续剧情段：

- `ACT6-LIEFLAT-B01`：静音与最低事实。
- `ACT6-LIEFLAT-B02`：短逃与公共桌动作。
- `ACT6-LIEFLAT-B03`：旁观与具体任务。
- `ACT6-LIEFLAT-B04`：入口过期与无事发生。
- `ACT6-LIEFLAT-B05`：低存在感与空白毕业。

每组均保留 4 个剧情段、1 个双方向选择窗口，且所有方向都锁在 `POOL-R5-LIEFLAT` 内。该文件是 `R5-LIEFLAT` Act6 完整页级 JSON 的依据。

## 2026-05-22 接入记录：R5-LIEFLAT 第六幕完整页级 JSON

`开发数据_IF剧情页级JSON_R5-LIEFLAT_v1.json` 已接入 `ACT6-LIEFLAT` 完整页级数据。

本次接入内容：

- `act6_detail_blocks` 覆盖 `ACT6-LIEFLAT-B01` 至 `ACT6-LIEFLAT-B05`。
- 每组 4 个剧情页，合计 `ACT6-LIEFLAT-S01` 至 `ACT6-LIEFLAT-S20` 20 页。
- 每组 1 个双方向选择窗口，合计 5 个选择窗、10 个方向。
- 所有 Act6 方向都锁在 `POOL-R5-LIEFLAT` 内，保持 `route_switch_allowed = false`。
- `act6_blocks.conversion_status` 与 `validation_targets.act6_full_page_json_status` 已更新为 `full_page_json_ready`。
- 后续建议转入 5/6/7 全路线一致性复核。
## 2026-05-26 开发顺序修订：先 R4 全线黄金样板

后续 IF 开发顺序调整为：

1. 先把 `R4-WORK` 从第四幕到第七幕做成完整黄金样板。
2. 冻结 `R4-WORK` 后，再按同一标准补齐所有支线。
3. 所有支线结构、选择反馈和毕业结算对齐后，再回头处理母本主轴。

理由：支线一旦外流进入独立池，就要自己演化，但仍复用小说母版事件逻辑。先完成一条支线全链路样板，可以固定每幕的选择密度、反馈页标准、变量承接和毕业结算方式，避免后续各线按不同口径扩写。

`R4-WORK` 当前已具备 P0-B / Act4 / Act5 / Act6 / Act7 正式 JSON 基础，但 Act5 至 Act7 的选择后反馈粒度仍低于 Act4 最新样板。下一阶段应优先补齐 `R4-WORK` Act5、Act6、Act7 的方向反馈和全线试玩样板，而不是继续细抠 Act4 表达。

详见：`开发审计_IF_R4-WORK四至七幕黄金样板推进.md`。
