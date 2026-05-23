# IF 第五幕 ACT5-PERFECT 完美子外流桥接剧情页

更新时间：2026-05-23

## 用途

本文补齐 `R3-PERFECT` 的第五幕桥接层，把第三幕完美子外流和第四幕低风险生活半径交给第六幕定形层。

本桥接不是 A3 父池复用，也不是唐骁规则线。它让完美线按母版第五幕五类压力完成一次本池版本的锁池：宿舍站队、亲密 / 晚风、项目 / 规则、活动 / 兴趣、回避 / 外流都必须出现，但都从“公开无错、私人延迟、被默认兜底”的角度处理。

## 硬规则

- 路线：`R3-PERFECT`
- 当前池：`POOL-R3-PERFECT`
- 父池：`POOL-A3-ACTIVITY-PUBLIC`
- Act5 桥接体量：5 个桥接节点，20 个剧情页，5 个选择窗。
- 每个选择窗 3 项，全部留在当前池。
- 每个选择窗对应第五幕最低主线选择窗口之一。
- 末尾接 `ACT6-PERFECT-B01`。

## 总链路

```text
ACT4-PERFECT-B05
-> ACT5-PERFECT-B01 宿舍站队和事实表
-> ACT5-PERFECT-B02 亲密不能项目化
-> ACT5-PERFECT-B03 项目 / 规则 / 公开边界
-> ACT5-PERFECT-B04 公开信用主轴确认
-> ACT5-PERFECT-B05 回避 / 外流门槛关闭
-> ACT6-PERFECT-B01
```

## ACT5-PERFECT-B01 宿舍站队和事实表

覆盖窗口：`ACT5-MAIN-CHOICE-01-DORM-STAND`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-PERFECT-S01` | 青枫居 4XX | 强冲突前，林亦舟已经习惯先列事实、来源、责任人和截止。 |
| `ACT5-PERFECT-S02` | 事项群 | 唐骁认可表清楚，周屿没有接玩笑，陆沉只问是否需要当面说。 |
| `ACT5-PERFECT-S03` | 教学楼走廊 | 秦越催活动补场，时间撞上 4XX 当面处理。 |
| `ACT5-PERFECT-S04` | 4XX 门口 | 林亦舟必须决定先用事实表进入冲突，还是承认自己把私人话推迟太久。 |

选择窗：`ACT5-PERFECT-CHOICE-01`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 先列事实表，再补私人解释 | `self_control +1`、`public_misread +1`、`act5_required_windows_seen += dorm_stand` | 第六幕第一组承接职责边界与私人解释冲突 |
| B | 先把缺席当面说清 | `dorm_warmth +1`、`private_delay -1`、`act5_required_windows_seen += dorm_stand` | 第六幕保留 4XX 当面修补入口 |
| C | 只说自己负责的部分 | `scope_clarity +1`、`old_debt +1`、`act5_required_windows_seen += dorm_stand` | 第六幕关系低温但责任边界清楚 |

## ACT5-PERFECT-B02 亲密不能项目化

覆盖窗口：`ACT5-MAIN-CHOICE-02-INTIMACY`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-PERFECT-S05` | 微信 / 游戏消息 | 晚风只发一句“别把自己也排进去”，不是晚风线入口，只是提醒。 |
| `ACT5-PERFECT-S06` | 明德楼材料窗口 | 沈嘉禾指出材料没错，但关系不是格式检查。 |
| `ACT5-PERFECT-S07` | 摄影社修片桌 | 夏知微退回照片，提醒公开留证不能代替同意。 |
| `ACT5-PERFECT-S08` | 西园餐桌 | 林亦舟发现自己可以把材料说清，却很难把“我也在意”说清。 |

选择窗：`ACT5-PERFECT-CHOICE-02`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 向晚风说真实状态，但不转晚风线 | `private_blank_seen = true`、`emotional_delay -1`、`act5_required_windows_seen += intimacy_or_wanfeng` | 第六幕晚风只作低频提醒，不抢主线 |
| B | 确认沈嘉禾只是材料边界 | `shen_jiahe_link +1`、`scope_clarity +1`、`act5_required_windows_seen += intimacy_or_wanfeng` | 第六幕材料边界继续存在，不开感情线 |
| C | 确认夏知微只是照片边界 | `xia_zhiwei_link +1`、`public_consent_checked = true`、`act5_required_windows_seen += intimacy_or_wanfeng` | 第六幕公开观看和授权继续发酵 |

## ACT5-PERFECT-B03 项目 / 规则 / 公开边界

覆盖窗口：`ACT5-MAIN-CHOICE-03-PROJECT-RULE`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-PERFECT-S09` | C407 机房 | 唐骁把课程项目拆成版本、接口和责任人，像一面流程镜子。 |
| `ACT5-PERFECT-S10` | 明德楼材料窗口 | 公开材料补件和课程项目截止撞在一起，两边都默认他能处理。 |
| `ACT5-PERFECT-S11` | 打印店 | 署名、授权、附件和项目分工都需要清楚版本。 |
| `ACT5-PERFECT-S12` | 教学楼楼梯口 | 林亦舟意识到“没有错”不等于“没有亏欠”。 |

选择窗：`ACT5-PERFECT-CHOICE-03`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 先保公开材料无错 | `public_credit +1`、`public_boundary +1`、`act5_required_windows_seen += project_or_rule` | 第六幕公开材料完整但工具化风险上升 |
| B | 先补 C407 项目分工 | `project_stability +1`、`scope_clarity +1`、`act5_required_windows_seen += project_or_rule` | 第六幕唐骁只作流程镜像，不转唐骁线 |
| C | 先写交接人和停止条件 | `tooling_risk -1`、`handoff_scope_checked = true`、`act5_required_windows_seen += project_or_rule` | 第六幕默认兜底风险下降 |

## ACT5-PERFECT-B04 公开信用主轴确认

覆盖窗口：`ACT5-MAIN-CHOICE-04-ACTIVITY-INTEREST`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-PERFECT-S13` | 活动复盘桌 | 有人说“以后这种事还是找林亦舟”，公开信用开始变成默认分工。 |
| `ACT5-PERFECT-S14` | 九龙壁舞台边 | 周屿说“你现在连退场都能写流程”，不像玩笑。 |
| `ACT5-PERFECT-S15` | 活动共享文档 | 林亦舟要决定继续当可靠的人，还是把交接和停止条件推到台前。 |
| `ACT5-PERFECT-S16` | 青枫居楼下 | 文件袋、宿舍门和活动消息同时在他手里。 |

选择窗：`ACT5-PERFECT-CHOICE-04`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 保持公开信用为主生活半径 | `route_pool_locked = true`、`public_credit +1`、`act5_required_windows_seen += activity_or_interest` | 第六幕进入 `ACT6-PERFECT-B01`，公开信用继续成立 |
| B | 降低默认兜底，只保必要职责 | `scope_clarity +1`、`tooling_risk -1`、`act5_required_windows_seen += activity_or_interest` | 第六幕交接范围更清楚 |
| C | 为 4XX 留一次当面饭局 | `dorm_warmth +1`、`time_debt +1`、`act5_required_windows_seen += activity_or_interest` | 第六幕保留私人低频修补入口 |

## ACT5-PERFECT-B05 回避 / 外流门槛关闭

覆盖窗口：`ACT5-MAIN-CHOICE-05-AVOID-OUTFLOW`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-PERFECT-S17` | 青枫居楼下 | 许澈或新圈消息只作为外部诱因出现，不能把完美线改成 5X。 |
| `ACT5-PERFECT-S18` | 活动群 / 事项群 | 两个群都在等他确认，但都不是完整新路线入口。 |
| `ACT5-PERFECT-S19` | 明德楼门口 | 林亦舟确认：本线继续用公开信用、停止条件和私人空格承接第六幕。 |
| `ACT5-PERFECT-S20` | C407 机房外 | 完美线第五幕桥接完成，变量交给 `ACT6-PERFECT-B01`。 |

选择窗：`ACT5-PERFECT-CHOICE-05`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 留在完美线，写清停止条件 | `act5_perfect_bridge_ready = true`、`route_pool_locked = true`、`act5_required_windows_seen += avoidance_or_outflow` | `ACT6-PERFECT-B01` 承接职责边界 |
| B | 保留宿舍回声，但不回默认线 | `dorm_warmth +1`、`closed_route_ids_kept_closed = true`、`act5_required_windows_seen += avoidance_or_outflow` | 第六幕保留 4XX 低频软回声 |
| C | 拒绝 5X 硬外流诱因 | `hard_outflow = false`、`drift_guard_triggered = true`、`act5_required_windows_seen += avoidance_or_outflow` | 第六幕不触发 5X 单线 |

## 校验要求

- Act5 桥接节点：5。
- Act5 剧情页：20。
- Act5 选择窗：5。
- 每窗方向数：3。
- 方向总数：15。
- 五类窗口必须全部覆盖：`dorm_stand`、`intimacy_or_wanfeng`、`project_or_rule`、`activity_or_interest`、`avoidance_or_outflow`。
- 所有方向 `route_switch_allowed = false`。
- 末尾 `next_node` 必须接 `ACT6-PERFECT-B01`。
