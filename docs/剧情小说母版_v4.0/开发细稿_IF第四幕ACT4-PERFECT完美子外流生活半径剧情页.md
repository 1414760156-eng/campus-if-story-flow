# IF 第四幕 ACT4-PERFECT 完美子外流生活半径剧情页

更新时间：2026-05-23

## 用途

本文补齐 `R3-PERFECT` 在第三幕从 `A3-ACTIVITY-PUBLIC` 父池派生后、第五幕承接前的第四幕生活半径。

本线不是从第三幕直接跳第六幕，也不是 A3 父池桥接的复用版。林亦舟已经进入 `POOL-R3-PERFECT`，第四幕必须在当前池内继续演化：低风险自控、公开无错、职责范围、被默认兜底、宿舍低温和私人解释延后，都要落成可读事件。

## 硬规则

- 路线：`R3-PERFECT`
- 当前池：`POOL-R3-PERFECT`
- 父池：`POOL-A3-ACTIVITY-PUBLIC`
- Act4 体量：14 个剧情页，5 个选择剧情点。
- 每个选择窗至少 3 项：1 个完美线主轴推进 + 2 个池内微内流点。
- 三项都留在当前池，不开启 A3 父池、唐骁线、感情线、工作线或 5X。
- 每个微内流点必须有触发、人物对话 / 动作、小抉择和回声；不能写成 1-2 页消息过场。
- 第四幕末尾必须交给第五幕，不得直接跳 Act6。

## 总链路

```text
P0A_ACT3_ROUTE_CONFIRM
-> ACT4-PERFECT-B01 停止条件和暑假表
-> ACT4-PERFECT-B02 公开材料无错
-> ACT4-PERFECT-B03 宿舍低温回声
-> ACT4-PERFECT-B04 候选边界和工具化风险
-> ACT4-PERFECT-B05 返校前交接
-> ACT5-PERFECT-B01
```

## ACT4-PERFECT-B01 停止条件和暑假表

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT4-PERFECT-S01` | 活动群 / 明德楼走廊 | 秦越把暑假流程表发给他，第一句不是请求，而是“你最清楚格式”。 |
| `ACT4-PERFECT-S02` | 共享文档权限页 | 许棠提醒表格要写负责人、截止和停止条件，不能只写“林亦舟确认”。 |
| `ACT4-PERFECT-S03` | 青枫居 4XX 事项群 | 唐骁把项目表改成不等他口头解释的版本，陆沉只问“你今晚回吗”。 |

选择窗：`ACT4-PERFECT-CHOICE-01`

| 方向 | 类型 | 标签 | 微剧情链 | 结果 |
|---|---|---|---|---|
| A | 主轴推进 | 接流程表，但写清停止条件 | 秦越给表，林亦舟补负责人和截止，群里默认以后按他的模板走 | `self_control +1`、`scope_clarity +1`、`public_credit +1` |
| B | 微内流点 | 回 4XX 说明今晚时间 | 唐骁只问提交节点，周屿没接玩笑，陆沉把公共桌空位留出来 | `dorm_warmth +1`、`private_delay -1` |
| C | 微内流点 | 不让自己变成唯一联系人 | 许棠建议写交接人，林亦舟删掉“找林亦舟最快”的备注 | `tooling_risk -1`、`public_boundary +1` |

第五幕回声：`act5_echo_hook = perfect_stop_condition_written`

## ACT4-PERFECT-B02 公开材料无错

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT4-PERFECT-S04` | 打印店 | 活动证明、班会附件和课程项目材料同时排队，所有版本都需要“不出错”。 |
| `ACT4-PERFECT-S05` | 明德楼材料窗口 | 沈嘉禾只核附件顺序，明确说“格式清楚不等于以后都该你看”。 |
| `ACT4-PERFECT-S06` | 摄影社群 / 修片桌 | 夏知微退回一张能认出寝室号的照片，提醒留证也要有边界。 |

选择窗：`ACT4-PERFECT-CHOICE-02`

| 方向 | 类型 | 标签 | 微剧情链 | 结果 |
|---|---|---|---|---|
| A | 主轴推进 | 把公开材料一次交清 | 林亦舟重排附件，窗口老师说以后按这个版本，公开信用继续上升 | `public_credit +1`、`public_boundary +1` |
| B | 微内流点 | 只让沈嘉禾核格式 | 沈嘉禾划出错误顺序，林亦舟自己签名，不把责任推给她 | `shen_jiahe_link +1`、`scope_clarity +1` |
| C | 微内流点 | 只留不露脸照片版本 | 夏知微删掉正脸和寝室标记，图包仍能用，但不再把私人空间带出去 | `xia_zhiwei_link +1`、`photo_boundary_checked = true` |

第五幕回声：`act5_echo_hook = perfect_public_material_clean`

## ACT4-PERFECT-B03 宿舍低温回声

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT4-PERFECT-S07` | 青枫居 4XX 公共桌 | 公共桌上项目、取件码和洗衣卡都分栏清楚，没人需要等他来补解释。 |
| `ACT4-PERFECT-S08` | 西园餐桌 | 周屿说“你现在做事像带说明书”，语气轻，但不是玩笑。 |
| `ACT4-PERFECT-S09` | C407 机房外 | 唐骁认可表清楚，但提醒他“别把人也排成表”。 |

选择窗：`ACT4-PERFECT-CHOICE-03`

| 方向 | 类型 | 标签 | 微剧情链 | 结果 |
|---|---|---|---|---|
| A | 主轴推进 | 继续把事情列清楚 | 林亦舟把项目、活动和材料都列出责任人，所有人更省事，但房间更安静 | `self_control +1`、`public_misread +1` |
| B | 微内流点 | 承认自己延后了私人解释 | 周屿没有追问，唐骁只说下次提前讲，陆沉给他留了一个座位 | `dorm_warmth +1`、`old_debt -1` |
| C | 微内流点 | 不替周屿或唐骁总结关系 | 林亦舟只说自己的缺席，不替任何人下结论，减少误读但不升温太快 | `public_boundary +1`、`old_debt +1` |

第五幕回声：`act5_echo_hook = perfect_dorm_low_temperature`

## ACT4-PERFECT-B04 候选边界和工具化风险

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT4-PERFECT-S10` | 明德楼材料窗口 | 沈嘉禾第二次提醒停止条件，她的功能仍是材料边界，不是感情救场。 |
| `ACT4-PERFECT-S11` | 摄影社修片桌 | 夏知微第二次出现，只处理照片和观看边界，不进入亲密锁线。 |
| `ACT4-PERFECT-S12` | 活动复盘共享文档 | 文档历史证明林亦舟一直可靠，也证明他越来越容易被默认继续做。 |

选择窗：`ACT4-PERFECT-CHOICE-04`

| 方向 | 类型 | 标签 | 微剧情链 | 结果 |
|---|---|---|---|---|
| A | 主轴推进 | 写清职责范围和交接人 | 林亦舟把“毕业后默认找我”改成“找当前负责人”，公开信用不再无止境外扩 | `scope_clarity +1`、`tooling_risk -1` |
| B | 微内流点 | 保留沈嘉禾材料回声 | 沈嘉禾指出他写得太像自我兜底，林亦舟把她的名字从责任栏删掉 | `shen_jiahe_link +1`、`public_boundary +1` |
| C | 微内流点 | 保留夏知微照片回声 | 夏知微退回图包，林亦舟确认只保留公开授权版本 | `xia_zhiwei_link +1`、`public_consent_checked = true` |

第五幕回声：`act5_echo_hook = perfect_tooling_risk_visible`

## ACT4-PERFECT-B05 返校前交接

剧情页：

| 页 | 地点 | 内容功能 |
|---|---|---|
| `ACT4-PERFECT-S13` | 明德楼一楼大厅 | 活动证明、项目附件、公开授权和宿舍旧账一起等返校后处理。 |
| `ACT4-PERFECT-S14` | 青枫居楼下 | 林亦舟带着整理好的文件袋回寝，袋子很薄，私人话却还没有说。 |

选择窗：`ACT4-PERFECT-CHOICE-05`

| 方向 | 类型 | 标签 | 微剧情链 | 结果 |
|---|---|---|---|---|
| A | 主轴推进 | 带着公开无错进入第五幕 | 秦越确认返校材料，林亦舟只接最低职责，公开信用继续成立 | `public_credit +1`、`act4_perfect_handoff_ready = true` |
| B | 微内流点 | 带着宿舍低温进入第五幕 | 周屿看见文件袋没多问，唐骁重发项目表，陆沉只移开椅子 | `dorm_warmth -1`、`old_debt +1` |
| C | 微内流点 | 带着停止默认兜底进入第五幕 | 林亦舟把交接人写清，却发现私人解释没有交接人 | `scope_clarity +1`、`private_delay +1` |

第五幕回声：`act5_echo_hook = perfect_act5_bridge_required`

## 校验要求

- Act4 剧情页：14。
- Act4 选择窗：5。
- 每窗方向数：3。
- 方向总数：15。
- 所有方向 `route_switch_allowed = false`。
- `next_node` 必须接 `ACT5-PERFECT-B01`，不得接 `ACT6-PERFECT-B01`。
