# IF 第五幕 ACT5-WORK 工作线桥接剧情页

更新时间：2026-05-23

## 用途

本文补齐 `R4-WORK` 的第五幕桥接层，把第四幕暑假 / 兼职入口交给第六幕工作线定形层。

本桥接不是把工作线写成苦情奖励，也不是把陆沉、晚风、默认宿舍线重新打开。它让工作线按母版第五幕五类压力完成一次本池版本的锁池：宿舍站队、亲密 / 晚风、项目 / 规则、活动 / 兴趣、回避 / 外流都必须出现，但都从钱、排班、证明、错过照面和第一周现实安排处理。

## 硬规则

- 路线：`R4-WORK`
- 当前池：`POOL-R4-WORK`
- Act5 桥接骨架：5 个桥接节点，20 个选择前剧情页，5 个宏观选择窗。
- 5 个宏观选择窗只代表五类主压力已经覆盖，不代表整幕只有 5 个可玩选择点；正式黄金样板需要继续补方向反馈链、选择后承接剧情和必要微心态。
- 每个选择窗 3 项，全部留在当前池。
- 每个选择窗对应第五幕最低主线选择窗口之一。
- 末尾接 `ACT6-WORK-B01`。

## 总链路

```text
P0B_ACT4_ROUTE_CONFIRM
-> ACT5-WORK-B01 宿舍站队从排班缺席开始
-> ACT5-WORK-B02 亲密 / 晚风只能低频照面
-> ACT5-WORK-B03 项目 / 规则 / 证明材料
-> ACT5-WORK-B04 工作生活半径确认
-> ACT5-WORK-B05 回避 / 外流门槛关闭
-> ACT6-WORK-B01
```

## ACT5-WORK-B01 宿舍站队从排班缺席开始

覆盖窗口：`ACT5-MAIN-CHOICE-01-DORM-STAND`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-WORK-S01` | 青枫居 4XX | 强冲突前，公共桌已经把林亦舟的名字写在“晚班后补说明”旁边。 |
| `ACT5-WORK-S02` | 快递站排班表 | 固定班第一次和 4XX 当面处理撞上，钱压不再是临时跑腿。 |
| `ACT5-WORK-S03` | C407 门口 | 唐骁只问他今晚能不能到场，不问他为什么缺钱。 |
| `ACT5-WORK-S04` | 4XX 门口 | 林亦舟必须决定把排班、钱和缺席说到什么程度。 |

选择窗：`ACT5-WORK-CHOICE-01`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 固定班照接，给 4XX 最低事实 | `work_shift +1`、`dorm_absence +1`、`public_boundary +1`、`act5_required_windows_seen += dorm_stand` | 第六幕从排班事实和宿舍误读开场 |
| B | 请假半小时，当面解释钱压 | `dorm_warmth +1`、`money_pressure +1`、`shift_boundary_checked = true`、`act5_required_windows_seen += dorm_stand` | 第六幕保留关系修补入口但钱压更明显 |
| C | 不讲家里，只说今晚有班 | `family_signal +1`、`dorm_misread +1`、`public_boundary +1`、`act5_required_windows_seen += dorm_stand` | 第六幕宿舍知道事实但不知道原因 |

## ACT5-WORK-B02 亲密 / 晚风只能低频照面

覆盖窗口：`ACT5-MAIN-CHOICE-02-INTIMACY`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-WORK-S05` | 快递站后门 / 手机 | 晚风发来一句“下班后还回吗”，这不是晚风线入口，只是私人联系频率测试。 |
| `ACT5-WORK-S06` | 东区商业街 | 林亦舟看到活动散场的人经过，自己还在等最后一车件。 |
| `ACT5-WORK-S07` | 便利店门口 | 他可以回晚风，也可以先把 4XX 的最低事实补上，但两边都不能替他上班。 |
| `ACT5-WORK-S08` | 青枫居楼下 | 亲密关系在本线里变成时间可用性，而不是告白或换线。 |

选择窗：`ACT5-WORK-CHOICE-02`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 把排班和回寝时间说给晚风 | `work_private_entry +1`、`wanfeng_distance +1`、`act5_required_windows_seen += intimacy_or_wanfeng` | 第六幕晚风只作低频现实提醒 |
| B | 只说有班，不解释更多 | `polite_distance +1`、`work_shift +1`、`act5_required_windows_seen += intimacy_or_wanfeng` | 第六幕私人入口变窄 |
| C | 先回 4XX 说明不是躲人 | `dorm_warmth +1`、`time_debt +1`、`act5_required_windows_seen += intimacy_or_wanfeng` | 第六幕宿舍温度回升但工时更紧 |

## ACT5-WORK-B03 项目 / 规则 / 证明材料

覆盖窗口：`ACT5-MAIN-CHOICE-03-PROJECT-RULE`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-WORK-S09` | 打印店 | 勤工证明、家庭说明、课程补交材料和 C407 分工表被夹进同一个文件袋。 |
| `ACT5-WORK-S10` | 明德楼材料窗口 | 老师只认本人签字和证明格式，不认“室友帮忙说一下”。 |
| `ACT5-WORK-S11` | C407 机房 | 唐骁把项目拆成可交付和不可到场两列，规则变成现实边界。 |
| `ACT5-WORK-S12` | 教学楼楼梯口 | 林亦舟发现证明能解释缺席，但不能自动修补关系。 |

选择窗：`ACT5-WORK-CHOICE-03`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 先补勤工证明和收入说明 | `work_certificate_status = prepared`、`work_material_boundary_checked = true`、`money_pressure -1`、`act5_required_windows_seen += project_or_rule` | 第六幕证明线更清楚 |
| B | 先补 C407 项目分工 | `project_stability +1`、`time_debt +1`、`act5_required_windows_seen += project_or_rule` | 第六幕唐骁只保流程低温协作 |
| C | 写清可交付和不可到场 | `public_boundary +1`、`work_schedule_checked = true`、`act5_required_windows_seen += project_or_rule` | 第六幕排班边界成为主压力 |

## ACT5-WORK-B04 工作生活半径确认

覆盖窗口：`ACT5-MAIN-CHOICE-04-ACTIVITY-INTEREST`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-WORK-S13` | 快递站清点台 | 负责人问他下周能不能固定来，不像请求，更像把他写进表格。 |
| `ACT5-WORK-S14` | 九龙壁舞台边 | 周屿路过说“你现在比我还像有固定岗位的人”，玩笑停在半句。 |
| `ACT5-WORK-S15` | 活动群 / 事项群 | 活动、课程和宿舍都还能找他，但它们都必须绕开排班表。 |
| `ACT5-WORK-S16` | 青枫居楼下 | 工作牌、文件袋和宿舍门同时在他手里。 |

选择窗：`ACT5-WORK-CHOICE-04`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 固定班成为主生活半径 | `route_pool_locked = true`、`work_shift +1`、`work_reliability +1`、`act5_required_windows_seen += activity_or_interest` | 第六幕进入 `ACT6-WORK-B01`，排班成为默认事实 |
| B | 降低班次，保一次宿舍照面 | `dorm_warmth +1`、`money_pressure +1`、`work_reliability -1`、`act5_required_windows_seen += activity_or_interest` | 第六幕关系入口更暖但收入不稳 |
| C | 给排班、活动、作业都写停止条件 | `self_control +1`、`public_boundary +1`、`time_debt -1`、`act5_required_windows_seen += activity_or_interest` | 第六幕边界更清楚但温度偏低 |

## ACT5-WORK-B05 回避 / 外流门槛关闭

覆盖窗口：`ACT5-MAIN-CHOICE-05-AVOID-OUTFLOW`

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT5-WORK-S17` | 青枫居楼下 | 许澈或新圈消息只作为外部诱因出现，不能把工作线改成 5X。 |
| `ACT5-WORK-S18` | 快递站后门 / 事项群 | 摆烂式静音能省解释，但工资、证明和晚归登记都会留下空格。 |
| `ACT5-WORK-S19` | 明德楼门口 | 林亦舟确认：本线继续用钱压、排班和证明材料承接第六幕。 |
| `ACT5-WORK-S20` | C407 机房外 | 工作线第五幕桥接完成，变量交给 `ACT6-WORK-B01`。 |

选择窗：`ACT5-WORK-CHOICE-05`

| 方向 | 标签 | 结果 | 第六幕回声 |
|---|---|---|---|
| A | 留在工作线，写清第一周安排 | `act5_work_bridge_ready = true`、`route_pool_locked = true`、`work_schedule_checked = true`、`act5_required_windows_seen += avoidance_or_outflow` | `ACT6-WORK-B01` 承接排班边界 |
| B | 保留宿舍回声，但不回默认线 | `dorm_warmth +1`、`closed_route_ids_kept_closed = true`、`act5_required_windows_seen += avoidance_or_outflow` | 第六幕保留 4XX 低频软回声 |
| C | 拒绝 5X / 摆烂诱因，按现实清单走 | `hard_outflow = false`、`drift_guard_triggered = true`、`work_reliability +1`、`act5_required_windows_seen += avoidance_or_outflow` | 第六幕不触发 5X 或摆烂线 |

## 校验要求

- Act5 宏观桥接节点：5。
- Act5 选择前剧情页：20。
- Act5 宏观选择窗：5。
- 每个宏观选择窗方向数：3。
- 宏观方向总数：15。
- 每个宏观方向必须补选择后剧情反馈；关键方向需要补微心态选择和后续承接页。
- 禁止把 5 个宏观窗口当作 Act5 整幕完成量。
- 五类窗口必须全部覆盖：`dorm_stand`、`intimacy_or_wanfeng`、`project_or_rule`、`activity_or_interest`、`avoidance_or_outflow`。
- 所有方向 `route_switch_allowed = false`。
- 末尾 `next_node` 必须接 `ACT6-WORK-B01`。
