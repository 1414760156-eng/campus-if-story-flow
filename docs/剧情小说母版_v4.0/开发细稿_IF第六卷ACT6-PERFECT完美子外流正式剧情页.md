# IF 第六卷 ACT6-PERFECT 完美子外流正式剧情页

本文用于把 `R3-PERFECT` / `POOL-R3-PERFECT` 的第六卷承接层从长线占位扩成 20 个正式剧情段、5 个四段组和 5 个双方向选择窗口。

本文件不是奖状线、正确线、唐骁规则线，也不是 A3 活动父池本体。它只处理一件事：林亦舟在前文持续选择流程、自控、低风险、公开可控以后，如何在第六卷被大家记成“能处理事的人”，以及这种可靠怎样把私人解释、宿舍温度和被问一句的机会继续往后推。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R3-PERFECT` |
| `route_pool_id` | `POOL-R3-PERFECT` |
| `route_parent_pool_id` | `POOL-A3-ACTIVITY-PUBLIC` |
| `act6_variant_id` | `ACT6-PERFECT` |
| `entry_node` | `P0A_ACT3_ROUTE_CONFIRM` |
| `pool_entry_choice` | `P0A_PERFECT_ACCEPT_SCOPE` |
| `route_mode_tag` | `mode_perfect` |
| `romance_origin` | `none` |
| `route_switch_allowed` | `false` |
| `new_full_route_unlock_allowed` | `false` |

禁止项：

- 不允许把完美线写成奖励线；公开信用越高，越要写被继续加活和私人延迟。
- 不允许把本线改写成 `R5-TANG`；唐骁只能作为流程镜像或规则提醒，不能抢成唐骁线。
- 不允许把沈嘉禾 / 夏知微 / 晚风软回声改写成完整感情线。
- 不允许重新开放 `A3-ACTIVITY-PUBLIC` 父池的全部 focus；进入本线后只承接 `mode_perfect` 的结果。
- 不允许用“他都处理好了”跳过剧情页；每组都必须有职责范围、公开边界、工具化风险或私人空格。

## 关键变量

| 变量 | 用途 |
|---|---|
| `self_control` | 自我管理、按时、流程优先。 |
| `public_credit` | 老师、活动圈、材料窗口对林亦舟公开可靠度的记忆。 |
| `scope_clarity` | 职责范围、交接人、停止条件是否写清。 |
| `tooling_risk` | 被当成可靠工具、默认兜底和毕业后继续被找的风险。 |
| `emotional_delay` | 把关系问题推迟处理。 |
| `private_delay` | 私人解释延后程度。 |
| `activity_link` | 活动圈和材料窗口继续找他的强度。 |
| `public_boundary` | 授权、署名、截图、照片、公开材料边界。 |
| `dorm_warmth` | 4XX 是否仍有饭局、当面解释和低频真实联系。 |
| `public_misread` | 别人对他“冷静、会处理、没情绪”的误读。 |
| `old_debt` | 4XX 未说清的旧账。 |
| `project_stability` | C407 / 毕业设计材料稳定度。 |
| `private_blank_seen` | 是否看见公开材料背后的私人空格。 |
| `handoff_scope_checked` | 是否写清交接人和停止条件。 |
| `perfect_contact_scope` | 毕业后最终联系范围。 |
| `graduation_temperature` | 公开清楚、工具化、体面低温、迟来私人话、低温或安静边界。 |

## 20 段总表

| 四段组 | 剧情段 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-PERFECT-B01` | `ACT6-PERFECT-S01` 至 `ACT6-PERFECT-S04` | `ACT6-PERFECT-CHOICE-01` | 写清职责边界 / 先修补私人解释 |
| `ACT6-PERFECT-B02` | `ACT6-PERFECT-S05` 至 `ACT6-PERFECT-S08` | `ACT6-PERFECT-CHOICE-02` | 保公开材料完整 / 降低被默认兜底 |
| `ACT6-PERFECT-B03` | `ACT6-PERFECT-S09` 至 `ACT6-PERFECT-S12` | `ACT6-PERFECT-CHOICE-03` | 继续损失控制 / 承认自己延后太久 |
| `ACT6-PERFECT-B04` | `ACT6-PERFECT-S13` 至 `ACT6-PERFECT-S16` | `ACT6-PERFECT-CHOICE-04` | 保持体面低温 / 留一次当面饭局 |
| `ACT6-PERFECT-B05` | `ACT6-PERFECT-S17` 至 `ACT6-PERFECT-S20` | `ACT6-PERFECT-CHOICE-05` | 毕业材料完整交接 / 毕业后停止默认兜底 |

---

## `ACT6-PERFECT-B01` 职责边界与私人解释

本组承接完美线进入第六卷后的第一层压力：他越能把职责边界写清，越容易把私人解释往后推。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-PERFECT-S01` 至 `ACT6-PERFECT-S04` |
| `choice_window_id` | `ACT6-PERFECT-CHOICE-01` |
| `choice_after_scene` | `ACT6-PERFECT-S04` |
| `mother_lockpoints` | 活动材料交接、C407 预备、公开权限、4XX 私人解释 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-PERFECT-S01` | B204 / 活动材料交接表 | 活动负责人把第六卷材料确认表发给他，说“你最熟”。同一屏里，C407 预备也要求本人确认。 | 接表前写交接人 / 先帮现有表 / 先回 C407 | `public_credit +1`、`tooling_risk +1`、`project_stability +1` |
| `ACT6-PERFECT-S02` | 共享文档权限页 | 许棠提醒公开稿权限要分清谁能改、谁能看、谁负责最后确认。林亦舟手边的 4XX 消息还没有回。 | 写清权限 / 先回 4XX / 暂时保持默认权限 | `public_boundary +1`、`scope_clarity +1`、`private_delay +1` |
| `ACT6-PERFECT-S03` | 青枫居 4XX | 周屿叫他“流程哥”，唐骁说表确实清楚，陆沉只问他今晚还回不回。夸奖没有让房间变热。 | 解释自己不是只处理表 / 让玩笑过去 / 先确认今晚时间 | `dorm_warmth +1`、`public_misread +1`、`old_debt +1` |
| `ACT6-PERFECT-S04` | 教学楼走廊 / 输入框 | 林亦舟在“职责范围”最后一行停住，另一边的私人解释也只打到一半。 | 先写停止条件 / 先把私人话发出去 / 两边都暂存 | `private_blank_seen = true`、`time_debt +1`、`self_control +1` |

### 选择窗口

`ACT6-PERFECT-CHOICE-01` 位于 `ACT6-PERFECT-S04` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-PERFECT-C01-A` | 写清职责边界 | `scope_clarity +2`、`tooling_risk -1`、`public_credit +1`、`private_delay +1`；公开边界更清楚，但私人解释继续推迟。 |
| `ACT6-PERFECT-C01-B` | 先修补私人解释 | `dorm_warmth +2`、`private_delay -1`、`public_credit -1`、`scope_clarity -1`；4XX 温度回升，公开材料本轮不再无错推进。 |

完成条件：`scope_clarity_checked`、`private_blank_seen`、`act6_choice_window_count += 1`。

---

## `ACT6-PERFECT-B02` 公开材料完整与默认兜底

本组把公开信用具体化为证明、授权、共享盘和交接人。完美线的风险不是做错，而是大家默认他继续做下去。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-PERFECT-S05` 至 `ACT6-PERFECT-S08` |
| `choice_window_id` | `ACT6-PERFECT-CHOICE-02` |
| `choice_after_scene` | `ACT6-PERFECT-S08` |
| `mother_lockpoints` | 活动证明、共享盘权限、沈嘉禾格式回声、夏知微照片边界 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-PERFECT-S05` | 活动证明页 / C407 材料 | 活动证明和 C407 材料都没有错，但两个窗口都默认他能把最后一遍看完。 | 先核自己的部分 / 顺手核全组 / 写交接人 | `public_credit +1`、`tooling_risk +1`、`project_stability +1` |
| `ACT6-PERFECT-S06` | 共享盘 / 授权回执 | 文件夹按用途、来源和授权范围排好，负责人问毕业后还找他能不能最快。 | 写清毕业前交接 / 保留自己为联系人 / 只改权限不回话 | `public_boundary +1`、`handoff_scope_checked = true`、`activity_link +1` |
| `ACT6-PERFECT-S07` | 打印店 / 沈嘉禾 | 沈嘉禾指出附件顺序没问题，但说“格式清楚不等于以后都该你看”。她只承担材料边界提醒。 | 只核格式 / 写清她不承担后续 / 让她再看一版 | `shen_jiahe_link +1`、`scope_clarity +1`、`tooling_risk +1` |
| `ACT6-PERFECT-S08` | 摄影社群 / 夏知微图包 | 夏知微删掉一张正脸太清楚的图，说有些东西不是能留证就该留。 | 确认公开图包 / 只留背影 / 删掉私人痕迹 | `xia_zhiwei_link +1`、`public_boundary +1`、`private_blank_seen = true` |

### 选择窗口

`ACT6-PERFECT-CHOICE-02` 位于 `ACT6-PERFECT-S08` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-PERFECT-C02-A` | 保公开材料完整 | `public_credit +2`、`public_boundary +1`、`tooling_risk +1`、`dorm_warmth -1`；材料完整，默认兜底风险加深。 |
| `ACT6-PERFECT-C02-B` | 降低被默认兜底 | `tooling_risk -2`、`scope_clarity +1`、`public_credit -1`、`dorm_warmth +1`；他开始退出默认联系人位置，公开信用降一点但边界更稳。 |

完成条件：`public_boundary_checked`、`handoff_scope_checked`、`route_pool_locked = true`。

---

## `ACT6-PERFECT-B03` 损失控制与延后承认

本组承接第五幕强冲突后的损失控制。林亦舟可以让材料、授权和事实表不出错，但不能靠表格替代自己迟来的解释。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-PERFECT-S09` 至 `ACT6-PERFECT-S12` |
| `choice_window_id` | `ACT6-PERFECT-CHOICE-03` |
| `choice_after_scene` | `ACT6-PERFECT-S12` |
| `mother_lockpoints` | 事项群短句、事实表、C407 截止、4XX 旧账 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-PERFECT-S09` | 4XX 事项群 | 事项群比以前短。林亦舟把时间、来源、授权和责任人列成事实表，群里没人反驳。 | 先列事实 / 先问情绪 / 不发完整表 | `self_control +1`、`public_misread +1`、`old_debt +1` |
| `ACT6-PERFECT-S10` | C407 / 材料窗口 | 截止前，他把可能出错的版本都压下去。窗口夸他稳，唐骁只提醒他别把自己也压进去。 | 继续损失控制 / 写清只到这版 / 先回寝室 | `project_stability +1`、`public_credit +1`、`private_delay +1` |
| `ACT6-PERFECT-S11` | 公共桌 / 周屿短句 | 周屿看着事实表问：“你是不是觉得我们也能这么排？”这句话没有玩笑尾音。 | 承认不能全靠表 / 说先把事处理完 / 暂时不接话 | `dorm_warmth +1`、`old_debt +1`、`public_misread +1` |
| `ACT6-PERFECT-S12` | 共享文档历史 | 文档历史里每一步都清楚，只有他什么时候开始不解释，找不到版本号。 | 标注私人延后 / 继续只保事实 / 删除无关痕迹 | `private_blank_seen = true`、`emotional_delay +1`、`scope_clarity +1` |

### 选择窗口

`ACT6-PERFECT-CHOICE-03` 位于 `ACT6-PERFECT-S12` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-PERFECT-C03-A` | 继续损失控制 | `self_control +2`、`public_credit +1`、`dorm_warmth -1`、`public_misread +1`；现实风险降低，私人温度继续下降。 |
| `ACT6-PERFECT-C03-B` | 承认自己延后太久 | `private_delay -2`、`dorm_warmth +2`、`public_credit -1`、`tooling_risk -1`；他第一次让公开效率为私人解释让路。 |

完成条件：`loss_control_checked`、`private_delay_checked`、`old_debt_recorded`。

---

## `ACT6-PERFECT-B04` 体面低温与当面饭局

本组让完美线进入关系定形。体面可以避免难堪，但也可能把关系留在低温；当面饭局会消耗公开信用，却能保留真实联系。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-PERFECT-S13` 至 `ACT6-PERFECT-S16` |
| `choice_window_id` | `ACT6-PERFECT-CHOICE-04` |
| `choice_after_scene` | `ACT6-PERFECT-S16` |
| `mother_lockpoints` | 活动复盘、最后饭局预热、晚风软提醒、4XX 座位 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-PERFECT-S13` | 活动复盘 / 楼梯口 | 复盘会表扬流程稳定，有人说“以后这种事还是找林亦舟”。他听见后没有立刻反驳。 | 接受表扬 / 写清下次交接 / 私下找负责人说明 | `public_credit +1`、`tooling_risk +1`、`public_misread +1` |
| `ACT6-PERFECT-S14` | 4XX 群 / 最后一顿饭预热 | 4XX 讨论饭局时间，活动群同时问他能不能再核一遍归档。两个窗口都没有错，冲突却很清楚。 | 先回饭局时间 / 先核归档 / 给两边都发短句 | `dorm_warmth +1`、`private_delay +1`、`time_debt +1` |
| `ACT6-PERFECT-S15` | 微信 / 低频提醒 | 晚风只发来一句“别把自己也排进去”。这不是晚风线入口，只是提醒他流程不能替代亲近。 | 回复一点真实状态 / 只说忙完再聊 / 不回 | `private_blank_seen = true`、`public_misread -1`、`private_delay +1` |
| `ACT6-PERFECT-S16` | 青枫居公共桌 | 公共桌上还给他留着位置，没人催他坐。他要决定维持体面低温，还是为饭局空出一次真实时间。 | 保持体面低温 / 留一次当面饭局 / 先把材料收尾 | `dorm_warmth +1`、`old_debt +1`、`self_control +1` |

### 选择窗口

`ACT6-PERFECT-CHOICE-04` 位于 `ACT6-PERFECT-S16` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-PERFECT-C04-A` | 保持体面低温 | `scope_clarity +1`、`self_control +1`、`private_delay +1`、`dorm_warmth -1`、`graduation_temperature = polite_distance`；关系不爆，但更低温。 |
| `ACT6-PERFECT-C04-B` | 留一次当面饭局 | `dorm_warmth +2`、`private_delay -1`、`time_debt +1`、`public_credit -1`、`graduation_temperature = late_private`；公开事项让路一次，私人入口保住。 |

完成条件：`meal_boundary_checked`、`private_blank_seen`、`route_switch_allowed = false`。

---

## `ACT6-PERFECT-B05` 毕业材料交接与停止默认兜底

本组把第六幕交给第七幕。完美线不能只输出“材料完整”，还必须输出毕业后是否继续默认找他，以及私人联系是否仍有位置。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-PERFECT-S17` 至 `ACT6-PERFECT-S20` |
| `choice_window_id` | `ACT6-PERFECT-CHOICE-05` |
| `choice_after_scene` | `ACT6-PERFECT-S20` |
| `mother_lockpoints` | 毕业预登记、离校材料、交接人、武生院站预回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-PERFECT-S17` | 教务系统 / 材料交接页 | 毕业去向预登记快开始，活动材料交接页也亮着。林亦舟所有公开材料都能对上号。 | 先核毕业表 / 先写交接说明 / 顺手帮别人看格式 | `handoff_scope_checked = true`、`public_credit +1`、`tooling_risk +1` |
| `ACT6-PERFECT-S18` | 离校手续 / 共享盘 | 有人问毕业后还能不能找他，理由是“还是你熟”。这句话让他第一次认真看交接人一栏。 | 写明交接人 / 保留自己低频联系人 / 不回应毕业后 | `perfect_contact_scope = branch_dependent`、`scope_clarity +1`、`activity_link +1` |
| `ACT6-PERFECT-S19` | 4XX 公共桌 / 最后确认 | 4XX 问最后饭局和离校手续。他能把每件事排清楚，却不能再把私人话放到表格后面。 | 给 4XX 具体时间 / 只回手续进度 / 先写私人一句 | `dorm_warmth +1`、`old_debt -1`、`private_delay +1` |
| `ACT6-PERFECT-S20` | 武生院站预回声 / 交接说明 | 站台还没到，交接说明已经写到最后一行：毕业后不再默认由本人确认。光标停在这句后面。 | 完整交接公开材料 / 毕业后停止默认兜底 / 留私人低频联系 | `graduation_temperature = branch_dependent`、`act6_to_act7_handoff_ready = true` |

### 选择窗口

`ACT6-PERFECT-CHOICE-05` 位于 `ACT6-PERFECT-S20` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-PERFECT-C05-A` | 毕业材料完整交接 | `handoff_scope_checked = true`、`perfect_contact_scope = public_low_frequency`、`public_credit +2`、`tooling_risk +1`、`graduation_temperature = clear_public_or_tooling`；第七卷可进入公开清楚或工具化结算。 |
| `ACT6-PERFECT-C05-B` | 毕业后停止默认兜底 | `perfect_contact_scope = low_contact_with_boundary`、`tooling_risk -2`、`scope_clarity +1`、`public_credit -1`、`graduation_temperature = quiet_boundary`；他学会不把自己也写成公共工具。 |

完成条件：`act6_closed = true`、`act6_route_pool_locked = true`、`act6_to_act7_handoff_ready = true`。

---

## Act6 -> Act7 交接

第六幕结束后必须向 `开发数据_IF剧情页级JSON_R3-PERFECT_v1.json` 的第七卷结算层交出以下状态：

| 字段 | 来源 | 第七卷用途 |
|---|---|---|
| `self_control` | 全部五组 | 判断流程优先是否持续成立。 |
| `public_credit` | 全部五组 | 判断公开清楚、继续被找或材料完整。 |
| `scope_clarity` | `B01`、`B02`、`B03`、`B05` | 判断职责范围、交接人和停止条件。 |
| `tooling_risk` | 全部五组 | 判断是否被默认兜底或毕业后继续被找。 |
| `private_delay` | `B01`、`B03`、`B04`、`B05` | 判断私人解释是否过期或迟来。 |
| `private_blank_seen` | `B01`、`B02`、`B03`、`B04` | 判断是否看见公开材料背后的私人空格。 |
| `handoff_scope_checked` | `B02`、`B05` | 判断第七卷材料交接和停止默认是否成立。 |
| `perfect_contact_scope` | `B05` | 判断毕业后低频联系、体面距离或停止默认兜底。 |
| `dorm_warmth` | 全部五组 | 判断 4XX 是否保留当面饭局和私人入口。 |
| `public_misread` | `B01`、`B03`、`B04` | 判断别人是否误以为他没情绪。 |
| `graduation_temperature` | `B04`、`B05` | 进入第七卷公开清楚、工具化、迟来私人话、低温或安静边界分流。 |

## 防漂移检查

- 如果某段写“他处理得好”，必须补工具化风险或私人延迟。
- 如果某段写唐骁认可流程，必须保持唐骁只是规则镜像，不转 `R5-TANG`。
- 如果某段写沈嘉禾 / 夏知微，必须保持材料 / 影像边界软回声，不转 `R5-ROMANCE`。
- 如果某段写晚风，只能作为低频提醒“别把自己写成工具人”，不能开启 `R5-WANFENG`。
- 如果某段写选择，两个方向都只能改变 `POOL-R3-PERFECT` 内的公开信用、自控、职责范围、工具化风险、宿舍温度和毕业温度。
- 如果某段写毕业后联系，必须区分公开材料联系人、私人联系人和停止默认兜底，不允许混成一个万能联系人。
