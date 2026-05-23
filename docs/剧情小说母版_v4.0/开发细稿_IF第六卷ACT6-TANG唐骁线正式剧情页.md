# IF 第六卷 ACT6-TANG 唐骁线正式剧情页

本文用于把 `R5-TANG` / `POOL-R5-TANG` 的第六卷承接层从五个四段组占位扩成 20 个正式剧情段、5 个四段组和 5 个双方向选择窗口。

本文件不是 P0-D 站队入口，也不是第七卷毕业结算。第五幕已经让林亦舟选择先靠近唐骁；第六卷只处理一件事：规则、流程、项目、责任边界、材料证据和实用照看怎样把唐骁线定形。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-TANG` |
| `route_pool_id` | `POOL-R5-TANG` |
| `act6_variant_id` | `ACT6-TANG` |
| `entry_node` | `P0D_ACT5_SHORT_GROUP` |
| `pool_entry_choice` | `P0D_STAND_WITH_TANG` |
| `route_focus` | `tang` |
| `outflow_stage` | `act5_dorm_stand` |
| `route_switch_allowed` | `false` |
| `new_full_route_unlock_allowed` | `false` |

禁止项：

- 不允许把唐骁线写成唐骁正确线、项目成功线或完美线。
- 不允许在第六卷重新开放 DEFAULT、周屿线、陆沉线、摆烂线、晚风线、专注感情线、工作线或 5X。
- 不允许让林亦舟成为唐骁的流程执行器、表格代填人或默认解释器。
- 不允许用材料齐全、演示通过、权限清楚直接抵消宿舍低温。
- 不允许在选择窗口给第三方向；每个窗口只保留当前池内两种处理方式。

## 关键变量

| 变量 | 用途 |
|---|---|
| `tang_trust` | 唐骁是否愿意把流程背后的担心交给林亦舟。 |
| `project_stability` | C407、共享文档、演示口径和归档是否稳定。 |
| `rule_pressure` | 规则和表格给周屿、陆沉、4XX 带来的压迫感。 |
| `responsibility_clarity` | 分工、授权、提交口径和谁能确认是否清楚。 |
| `fairness_cost` | 公平执行导致的人情损耗。 |
| `emotion_delay` | 情绪和旧账被流程延后的程度。 |
| `public_boundary` | 公开材料、署名、权限、共享范围和代填边界。 |
| `zhou_misread` | 周屿对林亦舟偏向唐骁的误读。 |
| `luchen_proxy_risk` | 陆沉是否被表格、流程或别人代言。 |
| `dorm_warmth` | 4XX 还能不能当面处理事。 |
| `money_pressure` | 打印、备份、饭局和手续产生的钱压。 |
| `repair_depth` | 林亦舟是否把规则背后的关系问题说到具体事实。 |
| `tang_final_contact_scope` | 唐骁线最终联系范围。 |
| `graduation_temperature` | 第七卷结算温度。 |

## 20 段总表

| 四段组 | 剧情段 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-TANG-B01` | `S01` 至 `S04` | `ACT6-TANG-CHOICE-01` | 流程稳定优先 / 情绪解释优先 |
| `ACT6-TANG-B02` | `S05` 至 `S08` | `ACT6-TANG-CHOICE-02` | 收紧代填权限 / 当面说明边界 |
| `ACT6-TANG-B03` | `S09` 至 `S12` | `ACT6-TANG-CHOICE-03` | 项目截止优先 / 宿舍补话优先 |
| `ACT6-TANG-B04` | `S13` 至 `S16` | `ACT6-TANG-CHOICE-04` | 解释周屿误读 / 暂缓解释保提交进度 |
| `ACT6-TANG-B05` | `S17` 至 `S20` | `ACT6-TANG-CHOICE-05` | 毕业后低频协作 / 体面断开 |

---

## `ACT6-TANG-B01` 流程稳定与情绪解释

本组承接 P0-D 站队。林亦舟已经先靠近唐骁，但第六卷不能让这件事变成“唐骁正确”。第一组要建立项目更稳、关系更低温的代价。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-TANG-S01` 至 `ACT6-TANG-S04` |
| `choice_window_id` | `ACT6-TANG-CHOICE-01` |
| `choice_after_scene` | `ACT6-TANG-S04` |
| `mother_lockpoints` | 4XX 事项群、C407 清单、共享文档版本、周屿玩笑回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-TANG-S01` | 4XX 事项群 / 公共桌 | 唐骁把第五幕后遗留事项整理成时间线，只写事实、缺口和本人确认栏。周屿回了一个玩笑表情，陆沉只回“看到了”。 | 先核事实 / 先删定罪感 / 先问每人能否写入 | `responsibility_clarity +1`、`rule_pressure +1`、`zhou_misread +1` |
| `ACT6-TANG-S02` | C407 / 共享文档 | C407 初版有两个版本号。唐骁把林亦舟拉进权限列表，提醒他“先别补情绪判断”。 | 锁版本 / 保留编辑记录 / 给每人只看自己部分 | `project_stability +1`、`public_boundary +1`、`luchen_proxy_risk -1` |
| `ACT6-TANG-S03` | 青枫居楼道 / 事项群 | 周屿说“你俩又开会”，唐骁没接。林亦舟看见这句话不是玩笑，是站队后的第一层误读。 | 私聊周屿一句 / 先稳清单 / 约晚点当面说 | `zhou_misread +1`、`emotion_delay +1`、`dorm_warmth -1` |
| `ACT6-TANG-S04` | C407 门口 / 公共桌回声 | 清单能让事情继续推进，但公共桌更安静。林亦舟必须决定第六幕开局先保流程稳定，还是先把情绪解释拉回现场。 | 流程稳定优先 / 情绪解释优先 / 只写最低事实 | `tang_trust +1`、`project_stability +1`、`repair_depth +1` |

### 选择窗口

`ACT6-TANG-CHOICE-01` 位于 `ACT6-TANG-S04` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-TANG-C01-A` | 流程稳定优先 | `project_stability +2`、`tang_trust +1`、`emotion_delay +1`；C407 更稳，周屿误读和宿舍低温上升。 |
| `ACT6-TANG-C01-B` | 情绪解释优先 | `repair_depth +1`、`rule_pressure -1`、`project_stability -1`；关系问题被看见，但唐骁会觉得风险被推迟。 |

完成条件：`route_pool_locked = true`、`project_stability`、`responsibility_clarity`。

---

## `ACT6-TANG-B02` 代填权限与当面边界

本组处理唐骁线核心风险：流程越稳，越容易让人把“帮忙确认”误解成“替别人确认”。林亦舟必须决定规则是继续收紧，还是让唐骁当面说清边界。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-TANG-S05` 至 `ACT6-TANG-S08` |
| `choice_window_id` | `ACT6-TANG-CHOICE-02` |
| `choice_after_scene` | `ACT6-TANG-S08` |
| `mother_lockpoints` | 贡献说明、本人确认、陆沉边界、打印格式 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-TANG-S05` | 共享文档 / 贡献说明 | 贡献说明表要求每人补一句原因。唐骁不许任何人替写，连语气都不想帮别人润。 | 每人自填 / 只写事实 / 唐骁统一格式 | `responsibility_clarity +1`、`luchen_proxy_risk -1`、`rule_pressure +1` |
| `ACT6-TANG-S06` | 图书馆西侧回声 / 事项群 | 陆沉发来一行“我那栏不要补原因”。唐骁想直接留空，林亦舟知道留空也会被解读。 | 留空并注明本人确认 / 私聊陆沉再问 / 先交后补 | `public_boundary +1`、`time_debt +1`、`project_stability +1` |
| `ACT6-TANG-S07` | 打印店 / 食堂侧门 | 纸质版要签字。唐骁多打了一份空白确认页，嘴上说防错，实际是不想有人临时被代签。 | 多打备份 / 只打必需页 / 电子留痕 | `money_pressure +1`、`project_stability +1`、`fairness_cost +1` |
| `ACT6-TANG-S08` | 青枫居 4XX / 公共桌 | 周屿看见“不得代填”笑说像处分，唐骁脸色变硬。林亦舟必须决定继续收紧代填权限，还是让唐骁当面说明边界。 | 收紧代填权限 / 当面说明边界 / 只改措辞 | `rule_pressure +1`、`repair_depth +1`、`zhou_misread +1` |

### 选择窗口

`ACT6-TANG-CHOICE-02` 位于 `ACT6-TANG-S08` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-TANG-C02-A` | 收紧代填权限 | `public_boundary +2`、`luchen_proxy_risk -1`、`rule_pressure +1`；风险更低，现场更像审查。 |
| `ACT6-TANG-C02-B` | 当面说明边界 | `repair_depth +1`、`dorm_warmth +1`、`time_debt +1`；唐骁必须把规则说成人话，项目节奏变慢。 |

完成条件：`public_boundary`、`luchen_proxy_risk`、`route_pool_locked = true`。

---

## `ACT6-TANG-B03` 项目截止与宿舍补话

本组把 C407 截止和 4XX 旧账正面相撞。唐骁线不能只写任务效率，必须让玩家看见每一次“先交材料”都会延后一次当面补话。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-TANG-S09` 至 `ACT6-TANG-S12` |
| `choice_window_id` | `ACT6-TANG-CHOICE-03` |
| `choice_after_scene` | `ACT6-TANG-S12` |
| `mother_lockpoints` | C407 演示、评分细则、宿舍旧账、沈嘉禾格式照面 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-TANG-S09` | C407 / 评分细则 | 评分细则新增贡献说明，唐骁想按最低责任列。林亦舟知道这比排名温和，但仍会留下谁做得少的影子。 | 按最低责任列 / 每人自填 / 暂不发群 | `responsibility_clarity +1`、`rule_pressure +1`、`project_stability +1` |
| `ACT6-TANG-S10` | 阳光书屋 / 格式照面 | 沈嘉禾只帮看引用格式，提醒“别把我写成审核人”。唐骁点头，把外部协助单独标注。 | 只留格式批注 / 群里感谢来源 / 删除外部痕迹 | `public_boundary +1`、`responsibility_clarity +1`、`old_debt +1` |
| `ACT6-TANG-S11` | 4XX 公共桌 | 周屿和陆沉都在，但没人主动开口。唐骁把文件夹放在桌上，说“十点半前得定”。 | 先谈旧账 / 先核文件 / 发约时间 | `dorm_warmth +1`、`emotion_delay +1`、`project_stability +1` |
| `ACT6-TANG-S12` | 打印店外 / C407 提醒 | 老师催最终版，周屿在群里回“你们定吧”。林亦舟必须决定项目截止优先，还是宿舍补话优先。 | 项目截止优先 / 宿舍补话优先 / 拆成十分钟 | `time_debt +1`、`fairness_cost +1`、`repair_depth +1` |

### 选择窗口

`ACT6-TANG-CHOICE-03` 位于 `ACT6-TANG-S12` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-TANG-C03-A` | 项目截止优先 | `project_stability +2`、`emotion_delay +1`、`dorm_warmth -1`；演示风险下降，旧账继续后移。 |
| `ACT6-TANG-C03-B` | 宿舍补话优先 | `repair_depth +1`、`dorm_warmth +1`、`project_stability -1`；唐骁接受得很慢，后续需要补救材料。 |

完成条件：`project_stability`、`repair_depth`、`route_pool_locked = true`。

---

## `ACT6-TANG-B04` 周屿误读与提交进度

本组处理未选择者后果。周屿不是反派，他对唐骁线的误读来自“事实清楚”被说得像定性；林亦舟可以解释，也可以先保提交进度，但两种都不是无代价。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-TANG-S13` 至 `ACT6-TANG-S16` |
| `choice_window_id` | `ACT6-TANG-CHOICE-04` |
| `choice_after_scene` | `ACT6-TANG-S16` |
| `mother_lockpoints` | 周屿活动撞期、C407 最终版、只读权限、4XX 低温 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-TANG-S13` | B206 门口 / 活动群 | 周屿活动设备撞期，秦越找人帮忙。唐骁只问最终版谁核，周屿说“你们表里写清楚不就行”。 | 回周屿一句 / 让秦越走正式流程 / 先核最终版 | `zhou_misread +1`、`public_boundary +1`、`project_stability +1` |
| `ACT6-TANG-S14` | C407 / 只读权限页 | 唐骁建议锁只读权限，每个人保留自己的提交记录。陆沉接受，周屿沉默。 | 锁只读 / 独立编辑留痕 / 先问老师范围 | `project_stability +1`、`luchen_proxy_risk -1`、`rule_pressure +1` |
| `ACT6-TANG-S15` | 楼道 / 公共桌外 | 周屿堵在门口，问林亦舟“是不是以后都按他那张表算”。这句话难听，但具体。 | 当面解释 / 说提交后再聊 / 不解释先走 | `repair_depth +1`、`time_debt +1`、`zhou_misread +1` |
| `ACT6-TANG-S16` | C407 / 提交按钮前 | 提交倒计时只剩几分钟。林亦舟必须决定解释周屿误读，还是暂缓解释保提交进度。 | 解释周屿误读 / 暂缓解释保提交进度 / 只写最低说明 | `project_stability +1`、`emotion_delay +1`、`public_boundary +1` |

### 选择窗口

`ACT6-TANG-CHOICE-04` 位于 `ACT6-TANG-S16` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-TANG-C04-A` | 解释周屿误读 | `zhou_misread -1`、`repair_depth +1`、`project_stability -1`；误读下降，但唐骁要承担补救压力。 |
| `ACT6-TANG-C04-B` | 暂缓解释保提交进度 | `project_stability +2`、`emotion_delay +1`、`zhou_misread +1`；材料准时，周屿误读进入第七卷回声。 |

完成条件：`zhou_misread`、`project_stability`、`route_pool_locked = true`。

---

## `ACT6-TANG-B05` 低频协作与体面断开预结算

本组把第六幕交给第七幕。这里不写最终结局，但必须输出第七卷读取的流程合作、非功利表达、饭局边界、4XX 温度和唐骁最终联系范围。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-TANG-S17` 至 `ACT6-TANG-S20` |
| `choice_window_id` | `ACT6-TANG-CHOICE-05` |
| `choice_after_scene` | `ACT6-TANG-S20` |
| `mother_lockpoints` | 归档只读范围、最后饭局预热、离校手续、武生院站预回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-TANG-S17` | C407 / 归档文件夹 | 归档接收人、只读范围和停止条件要最后确认。唐骁把“不要代管私人材料”写进备注。 | 锁只读权限 / 每人独立留痕 / 问老师公开范围 | `project_stability +1`、`public_boundary +1`、`responsibility_clarity +1` |
| `ACT6-TANG-S18` | 东区商业街 / 最后饭局预热 | 饭局人数截止，唐骁按人数锁座，不替迟到的人占确定位置。林亦舟看见这和第五幕一样硬，却少了定罪感。 | 按人数锁座 / 留可取消空位 / 只确认自己到场 | `meal_boundary_checked`、`fairness_cost +1`、`dorm_warmth +1` |
| `ACT6-TANG-S19` | 打印店 / 离校手续清单 | 唐骁顺手多打了一张离校流程表，递给林亦舟时说“别漏证书复印件”。这句话不是流程必须。 | 只说谢谢 / 问为什么多打一张 / 收下但不让他代管 | `tang_nonfunctional_line_seen`、`tang_trust +1`、`polite_distance +1` |
| `ACT6-TANG-S20` | 武生院站预回声 / 4XX 群 | 第七卷还没开始，4XX 群已经像最后的事项群。唐骁说以后材料问题可以发他，停了一下，又补“不是材料也行”。 | 毕业后低频协作 / 体面断开 / 只说有事再发 | `tang_final_contact_scope`、`graduation_temperature`、`ending_temperature_locked` |

### 选择窗口

`ACT6-TANG-CHOICE-05` 位于 `ACT6-TANG-S20` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-TANG-C05-A` | 毕业后低频协作 | `tang_final_contact_scope = low_frequency_collab`、`graduation_temperature = tang_low_frequency`、`continue_contact = true`；第七卷可进入低频协作、实用照看或非功利一句话结算。 |
| `ACT6-TANG-C05-B` | 体面断开 | `tang_final_contact_scope = polite_distance`、`graduation_temperature = polite_distance`、`polite_distance +1`；第七卷偏材料完整、饭局体面和不再私聊。 |

完成条件：`act6_closed = true`、`act6_route_pool_locked = true`、`act6_to_act7_handoff_ready = true`。

## Act6 -> Act7 交接字段

建议写入正式 JSON：

```json
{
  "act6_closed": true,
  "act6_route_pool_locked": true,
  "act6_choice_window_count": 5,
  "act6_directions_per_window": 2,
  "act6_to_act7_handoff": {
    "tang_final_contact_scope": "branch_dependent",
    "graduation_temperature": "branch_dependent",
    "route_switch_allowed": false,
    "soft_echo_routes_only": true
  }
}
```

第七卷读取重点：

- `project_stability` 高且 `emotion_delay` 低：偏低频协作或非功利表达。
- `project_stability` 高但 `emotion_delay` 高：偏体面距离、材料完整但低温。
- `rule_pressure` 高或 `zhou_misread` 高：偏 4XX 礼貌同框、周屿误读未消。
- `luchen_proxy_risk` 低：陆沉线只保留本人确认回声，不反向开启陆沉主线。
- `tang_final_contact_scope = low_frequency_collab`：第七卷允许保留唐骁低频协作或私人入口，但不反向修复全寝室。

## 验收标准

- 20 个剧情段必须全部存在：`ACT6-TANG-S01` 至 `ACT6-TANG-S20`。
- 5 个四段组必须全部存在：`ACT6-TANG-B01` 至 `ACT6-TANG-B05`。
- 每组 4 页，每组 1 个选择窗口。
- 每个选择窗口只保留 2 个方向，且都留在 `POOL-R5-TANG`。
- 不重新开放 DEFAULT、周屿线、陆沉线、摆烂线、晚风线、专注感情线、工作线或 5X。
- 唐骁线必须同时保留更稳、更清楚、更低温、更容易延后情绪的代价。
- `ACT6-TANG-S20` 后只进入 `ACT6-END`，再进入 `ACT7-TANG` 12 事件正式 JSON。
