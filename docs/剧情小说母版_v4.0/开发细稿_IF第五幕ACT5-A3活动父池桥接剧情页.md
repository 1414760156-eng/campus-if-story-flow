# IF 第五幕 ACT5-A3 活动父池桥接剧情页

更新时间：2026-05-23

## 用途

本文补齐 `A3-ACTIVITY-PUBLIC` 的第五幕桥接层，把第三幕父池和第四幕生活半径交给第六幕定形层。

本桥接不是重新开放所有路线，而是让 A3 父池按母版第五幕五类压力完成一次本池版本的锁池：宿舍站队、亲密 / 晚风、项目 / 规则、活动 / 兴趣、回避 / 外流都必须出现，但都从活动父池视角处理。

## 硬规则

- 路线：`A3-ACTIVITY-PUBLIC`
- 当前池：`POOL-A3-ACTIVITY-PUBLIC`
- Act5 桥接体量：5 个桥接节点，20 个剧情页，5 个选择窗。
- 每个选择窗 3 项，全部留在当前池。
- 每个选择窗对应第五幕最低主线选择窗口之一。
- 末尾接 `ACT6-A3-B01`。

## 总链路

```text
ACT4-A3-B05
-> ACT5-A3-B01 宿舍站队从活动缺席开始
-> ACT5-A3-B02 亲密和候选边界
-> ACT5-A3-B03 项目 / 规则 / 材料压力
-> ACT5-A3-B04 活动 / 兴趣主轴确认
-> ACT5-A3-B05 回避 / 外流门槛关闭
-> ACT6-A3-B01
```

## ACT5-A3-B01 宿舍站队从活动缺席开始

覆盖窗口：`ACT5-MAIN-CHOICE-01-DORM-STAND`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-A3-S01` | 青枫居 4XX | 强冲突前，公共桌已经默认林亦舟“在活动那边”。 |
| `ACT5-A3-S02` | 事项群 | 唐骁只发任务表，陆沉只回最低事实，周屿把玩笑留在群外。 |
| `ACT5-A3-S03` | 教学楼走廊 | 秦越催活动补场，时间撞上 4XX 当面处理。 |
| `ACT5-A3-S04` | 4XX 门口 | 林亦舟必须决定先以什么身份进入宿舍冲突。 |

选择窗：`ACT5-A3-CHOICE-01`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 先保活动责任，再回宿舍说明 | `activity_link +1`、`dorm_absence +1`、`act5_required_windows_seen += dorm_stand` | 第六幕活动联系人默认继续找他 |
| B | 先回公共桌，把缺席说清 | `dorm_warmth +1`、`old_debt_visible +1`、`act5_required_windows_seen += dorm_stand` | 第六幕第一组保留宿舍解释入口 |
| C | 只给最低事实，不替任何人总结 | `public_boundary +1`、`old_debt +1`、`act5_required_windows_seen += dorm_stand` | 第六幕宿舍关系低温但未断 |

## ACT5-A3-B02 亲密和候选边界

覆盖窗口：`ACT5-MAIN-CHOICE-02-INTIMACY`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-A3-S05` | 微信 / 游戏消息 | 晚风还在，但本线的主要生活半径已经被活动和公开材料占住。 |
| `ACT5-A3-S06` | 明德楼材料窗口 | 沈嘉禾的任务痕迹持续存在，但仍是材料边界。 |
| `ACT5-A3-S07` | 摄影社修片桌 | 夏知微的任务痕迹持续存在，但仍是照片授权。 |
| `ACT5-A3-S08` | 西园餐桌 | 林亦舟不能把亲密关系、候选来源和宿舍旧账混成一个答案。 |

选择窗：`ACT5-A3-CHOICE-02`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 向晚风说明活动占用，不推进亲密线 | `public_boundary +1`、`emotional_delay +1`、`act5_required_windows_seen += intimacy_or_wanfeng` | 第六幕晚风只作低频软回声 |
| B | 确认沈嘉禾只是材料候选来源 | `shen_jiahe_link +1`、`candidate_source_checked = true`、`act5_required_windows_seen += intimacy_or_wanfeng` | 第六幕候选来源可被提及但不抢主线 |
| C | 确认夏知微只是影像候选来源 | `xia_zhiwei_link +1`、`candidate_source_checked = true`、`act5_required_windows_seen += intimacy_or_wanfeng` | 第六幕公开照片边界继续发酵 |

## ACT5-A3-B03 项目 / 规则 / 材料压力

覆盖窗口：`ACT5-MAIN-CHOICE-03-PROJECT-RULE`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-A3-S09` | C407 机房 | 唐骁把课程项目表改成不等林亦舟的版本。 |
| `ACT5-A3-S10` | 明德楼材料窗口 | 公开材料补件和课程项目截止撞在一起。 |
| `ACT5-A3-S11` | 打印店 | 署名、附件、照片授权和项目分工都需要清楚版本。 |
| `ACT5-A3-S12` | 教学楼楼梯口 | 林亦舟发现流程清楚不等于关系清楚。 |

选择窗：`ACT5-A3-CHOICE-03`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 先把活动公开材料归档 | `public_credit +1`、`activity_archive_boundary_checked = true`、`act5_required_windows_seen += project_or_rule` | 第六幕毕业材料更顺但宿舍更冷 |
| B | 先补 C407 项目分工 | `project_stability +1`、`time_debt +1`、`act5_required_windows_seen += project_or_rule` | 第六幕唐骁只保流程低温协作 |
| C | 先核照片和署名授权 | `public_boundary +1`、`activity_image_scope_checked = true`、`act5_required_windows_seen += project_or_rule` | 第六幕公开边界成为主压力 |

## ACT5-A3-B04 活动 / 兴趣主轴确认

覆盖窗口：`ACT5-MAIN-CHOICE-04-ACTIVITY-INTEREST`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-A3-S13` | 主持队复盘桌 | 秦越问他是否继续接活动流程，不像请求，更像默认。 |
| `ACT5-A3-S14` | 九龙壁舞台边 | 周屿在台侧说“你现在比我还像活动那边的人”。 |
| `ACT5-A3-S15` | 活动共享文档 | 林亦舟要决定 A3 父池是继续主轴，还是降成低频回声。 |
| `ACT5-A3-S16` | 青枫居楼下 | 活动袋和宿舍门同时在他手里。 |

选择窗：`ACT5-A3-CHOICE-04`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 保持活动父池为主生活半径 | `route_pool_locked = true`、`activity_link +1`、`act5_required_windows_seen += activity_or_interest` | 第六幕进入 `ACT6-A3-B01` |
| B | 降低活动密度，只保公开边界 | `activity_link -1`、`public_boundary +1`、`act5_required_windows_seen += activity_or_interest` | 第六幕活动仍在但不升温 |
| C | 把任务拆给秦越和许棠，不再独自兜底 | `scope_clarity +1`、`time_debt -1`、`act5_required_windows_seen += activity_or_interest` | 第六幕公开信用下降但边界更清楚 |

## ACT5-A3-B05 回避 / 外流门槛关闭

覆盖窗口：`ACT5-MAIN-CHOICE-05-AVOID-OUTFLOW`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-A3-S17` | 青枫居楼下 | 许澈或新圈消息只作为外部诱因出现，不能直接把 A3 改成 5X。 |
| `ACT5-A3-S18` | 活动群 / 事项群 | 两个群都在等他，但都不是完整新路线入口。 |
| `ACT5-A3-S19` | 明德楼门口 | 林亦舟确认：本线继续用公开活动生活半径承接第六幕。 |
| `ACT5-A3-S20` | C407 机房外 | A3 第五幕桥接完成，变量交给 `ACT6-A3-B01`。 |

选择窗：`ACT5-A3-CHOICE-05`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 留在活动父池，写清停止条件 | `act5_a3_bridge_ready = true`、`route_pool_locked = true`、`act5_required_windows_seen += avoidance_or_outflow` | `ACT6-A3-B01` 承接公开边界 |
| B | 保留宿舍回声，但不回默认线 | `dorm_warmth +1`、`closed_route_ids_kept_closed = true`、`act5_required_windows_seen += avoidance_or_outflow` | 第六幕保留 4XX 软回声 |
| C | 拒绝 5X 硬外流诱因 | `hard_outflow = false`、`drift_guard_triggered = true`、`act5_required_windows_seen += avoidance_or_outflow` | 第六幕不触发 5X 单线 |

## 校验要求

- Act5 桥接节点：5。
- Act5 剧情页：20。
- Act5 选择窗：5。
- 每窗方向数：3。
- 方向总数：15。
- 五类窗口必须全部覆盖：`dorm_stand`、`intimacy_or_wanfeng`、`project_or_rule`、`activity_or_interest`、`avoidance_or_outflow`。
- 所有方向 `route_switch_allowed = false`。
- 末尾 `next_node` 必须接 `ACT6-A3-B01`。
