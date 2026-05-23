# IF 第六卷 ACT6-A3 活动父池正式剧情页

本文用于把 `A3-ACTIVITY-PUBLIC` / `POOL-A3-ACTIVITY-PUBLIC` 的第六卷承接层从长线占位扩成 20 个正式剧情段、5 个四段组和 5 个双方向选择窗口。

本文件不是 `R3-PERFECT` 完美线，也不是 `R5-ROMANCE` 感情线，更不是第六卷重新横跳所有社团的入口。第六卷只处理一件事：林亦舟在第三幕活动父池留下公开信用、活动联系人、署名归档、照片授权、候选来源和宿舍缺席以后，这些东西如何在毕业前定形。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `A3-ACTIVITY-PUBLIC` |
| `route_pool_id` | `POOL-A3-ACTIVITY-PUBLIC` |
| `act6_variant_id` | `ACT6-A3` |
| `entry_node` | `P0A_ACT3_RECRUIT_FORM` |
| `pool_entry_choice` | `P0A_ACT3_RECRUIT_FORM` |
| `route_focus` | `activity_public_parent_pool` |
| `romance_origin` | `candidate_source_only` |
| `route_switch_allowed` | `false` |
| `new_full_route_unlock_allowed` | `false` |

禁止项：

- 不允许把 A3 第六幕写成 `R3-PERFECT`；完美线只能由前文 `mode_perfect` 合法确认后另走。
- 不允许把 A3 第六幕写成 `R5-ROMANCE`；沈嘉禾 / 夏知微只能做候选来源核验，不能直接锁完整感情线。
- 不允许把许棠写成 romance 候选；她只承担采访、公开叙事、授权和活动材料压力。
- 不允许在第六卷重新开放主持、融媒体、摄影、幕后、志愿全部方向；只能承接已形成的父池方向。
- 不允许把“两个都要”写成奖励；多头活动只能带来压力、时间债和宿舍降温。
- 不允许取消母本公共锁点：事项群、C407、公开边界、答辩预备、毕业去向预热都仍发生。

## 关键变量

| 变量 | 用途 |
|---|---|
| `a3_public_scope` | 活动材料可公开范围：有限公开、默认公开或不公开。 |
| `activity_link` | 活动圈继续找林亦舟确认材料、流程和联系人范围的强度。 |
| `public_credit` | 老师、活动负责人、同学对其公开可靠度的记忆。 |
| `public_boundary` | 采访、照片、署名、材料、联系人和公开范围边界。 |
| `activity_certificate_status` | 活动证明、志愿时长、后台签收或新闻稿证明状态。 |
| `activity_image_scope_checked` | 活动图、毕业照、背影、正脸和图包用途是否确认。 |
| `activity_archive_boundary_checked` | 最后一个新年、活动材料和私物边界是否确认。 |
| `a3_focus_status_checked` | 第六卷是否承认自己最终属于哪个活动方向或低可见状态。 |
| `candidate_source_tag` | 候选来源：`shen_material`、`xia_photo` 或 `none`。 |
| `female_candidate_present` | 是否存在合法女生候选来源。 |
| `romance_outflow_allowed` | 是否允许后续进入专注感情线候选确认。 |
| `a3_final_contact_scope` | 毕业后活动联系人、候选来源和 4XX 的最终联系范围。 |
| `dorm_warmth` | 4XX 是否仍保留当面解释与低频联系温度。 |
| `time_debt` | 活动材料、补签、授权、总结会和联系人维护造成的时间欠账。 |
| `project_stability` | 活动材料是否挤压 C407 / 毕业设计流程。 |
| `old_debt` | 公开生活是否把宿舍旧账继续往后拖。 |
| `graduation_temperature` | 公开信用、候选开放、压力扩散、回寝、低可见或完美种子。 |

## 20 段总表

| 四段组 | 剧情段 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-A3-B01` | `ACT6-A3-S01` 至 `ACT6-A3-S04` | `ACT6-A3-CHOICE-01` | 保活动公开边界 / 先回 4XX 解释缺席 |
| `ACT6-A3-B02` | `ACT6-A3-S05` 至 `ACT6-A3-S08` | `ACT6-A3-CHOICE-02` | 维持单一活动方向 / 降低活动密度 |
| `ACT6-A3-B03` | `ACT6-A3-S09` 至 `ACT6-A3-S12` | `ACT6-A3-CHOICE-03` | 公开署名清楚 / 幕后归档低调 |
| `ACT6-A3-B04` | `ACT6-A3-S13` 至 `ACT6-A3-S16` | `ACT6-A3-CHOICE-04` | 说明女生候选来源 / 只保软照面 |
| `ACT6-A3-B05` | `ACT6-A3-S17` 至 `ACT6-A3-S20` | `ACT6-A3-CHOICE-05` | 毕业公开材料完整 / 私人关系低频保留 |

---

## `ACT6-A3-B01` 公开边界与宿舍缺席

本组承接 A3 父池的公开生活半径。核心不是让玩家重新选择社团，而是让林亦舟第一次把活动材料的公开范围和 4XX 缺席解释放在同一天处理。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-A3-S01` 至 `ACT6-A3-S04` |
| `choice_window_id` | `ACT6-A3-CHOICE-01` |
| `choice_after_scene` | `ACT6-A3-S04` |
| `mother_lockpoints` | 活动材料授权、事项群短句、C407 预备、4XX 缺席解释 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-A3-S01` | B204 / 活动联系人群 | 活动负责人问毕业材料能不能继续用他的联系方式，学院群同时发 C407 分工确认。林亦舟发现公开联系人和毕业联系人已经混在一起。 | 先看学校表格 / 先回活动联系人 / 都先截图 | `a3_contact_scope_checked +1`、`activity_link +1`、`time_debt +1` |
| `ACT6-A3-S02` | 融媒体共享文档 / 4XX 群 | 许棠问采访稿署名和活动照片能不能公开，4XX 群里唐骁只发了一个截止时间。 | 写清署名范围 / 按活动默认公开 / 先回 4XX 截止 | `public_boundary +1`、`a3_public_scope = branch_dependent`、`project_stability +1` |
| `ACT6-A3-S03` | 青枫居走廊 | 周屿问他最近怎么老在活动群里，语气像玩笑也像试探。陆沉只说如果不回来，就提前说。 | 解释缺席原因 / 打哈哈 / 只说晚点回 | `dorm_warmth +1`、`old_debt +1`、`dorm_absence +1` |
| `ACT6-A3-S04` | 活动归档页 / 公共桌回声 | 一张活动照片里扫到 4XX 私人物品，林亦舟必须决定先处理公开边界，还是先把缺席解释给室友。 | 删掉私物再提交 / 先回 4XX 解释 / 暂存不交 | `activity_image_scope_checked +1`、`dorm_warmth +1`、`time_debt +1` |

### 选择窗口

`ACT6-A3-CHOICE-01` 位于 `ACT6-A3-S04` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-A3-C01-A` | 保活动公开边界 | `public_boundary +2`、`a3_public_scope = limited_public`、`activity_link +1`、`dorm_warmth -1`；活动材料更清楚，4XX 本轮更低温。 |
| `ACT6-A3-C01-B` | 先回 4XX 解释缺席 | `dorm_warmth +2`、`old_debt -1`、`public_credit -1`、`activity_link -1`；宿舍保温，但活动圈不再默认他随叫随到。 |

完成条件：`public_boundary_checked`、`a3_contact_scope_checked`、`act6_choice_window_count += 1`。

---

## `ACT6-A3-B02` 单一方向与活动密度

本组确认第六幕不能重新横跳全部社团。林亦舟只能承接此前已经形成的活动方向，或者降低活动密度，把公开生活退回低频回声。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-A3-S05` 至 `ACT6-A3-S08` |
| `choice_window_id` | `ACT6-A3-CHOICE-02` |
| `choice_after_scene` | `ACT6-A3-S08` |
| `mother_lockpoints` | 活动方向确认、补签 / 排练 / 图包、C407 时间冲突、宿舍低温回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-A3-S05` | 活动复盘会 | 秦越或活动负责人把下次流程表发来，默认林亦舟还负责原来的那一块。这个默认没有恶意，但已经占掉他的晚上。 | 接固定方向 / 说明只做一次 / 转给其他同学 | `a3_focus_status_checked +1`、`public_credit +1`、`activity_link -1` |
| `ACT6-A3-S06` | 摄影 / 文案 / 后台群 | 许棠、夏知微或后台负责人只按既有来源找他，不再给新的社团选择。A3 只承接已形成方向。 | 只处理既有方向 / 想再试新方向 / 降低参与频率 | `activity_link +1`、`time_debt +1`、`public_boundary +1` |
| `ACT6-A3-S07` | C407 / 活动群 | C407 演示预备和活动补签撞期。唐骁问他能不能先把本人材料交了，活动群问能不能今晚确认图包。 | 先保 C407 / 先保活动群 / 给两边都发短句 | `project_stability +1`、`public_credit +1`、`emotional_delay +1` |
| `ACT6-A3-S08` | 4XX 公共桌 | 公共桌上少了他的位置，周屿开玩笑说活动那边是不是给他发工资。玩笑落下以后没人接。 | 承认活动占时间 / 说只是帮忙 / 降低活动密度 | `dorm_warmth +1`、`old_debt +1`、`activity_link -1` |

### 选择窗口

`ACT6-A3-CHOICE-02` 位于 `ACT6-A3-S08` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-A3-C02-A` | 维持单一活动方向 | `a3_focus_status_checked = true`、`activity_link +1`、`public_credit +1`、`time_debt +1`；父池方向稳定，但宿舍解释成本继续增加。 |
| `ACT6-A3-C02-B` | 降低活动密度 | `time_debt -1`、`dorm_warmth +1`、`activity_link -1`、`public_credit -1`；活动圈退为低频，4XX 有更多当面空间。 |

完成条件：`a3_focus_status_checked`、`route_pool_locked = true`、`new_full_route_unlock_allowed = false`。

---

## `ACT6-A3-B03` 署名、证明与归档边界

本组处理公开署名、活动证明、照片用途和幕后归档。公开信用不是奖状，它会要求林亦舟把“谁做了什么、谁允许公开”写清楚。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-A3-S09` 至 `ACT6-A3-S12` |
| `choice_window_id` | `ACT6-A3-CHOICE-03` |
| `choice_after_scene` | `ACT6-A3-S12` |
| `mother_lockpoints` | 署名范围、活动证明、照片授权、幕后归档 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-A3-S09` | 活动证明申请页 | 活动证明、志愿时长或后台签收需要本人确认。系统只认签名，不认“大家都知道是他做的”。 | 写清本人职责 / 让负责人代填 / 暂时不申请 | `activity_certificate_status = pending`、`public_boundary +1`、`public_boundary -1` |
| `ACT6-A3-S10` | 共享文档 / 采访稿 | 许棠问公开稿署名，沈嘉禾的修订记录还在文档里。公开场面必须分清协作、署名和材料来源。 | 写清协作来源 / 只保主署名 / 隐去私人协作 | `public_credit +1`、`candidate_source_tag = branch_dependent`、`emotional_delay +1` |
| `ACT6-A3-S11` | 图包预览 / 摄影社群 | 夏知微问正脸、背影和活动号用途。她先问再删，这让林亦舟意识到照片不是热闹，是授权。 | 确认可公开图 / 只留背影 / 删掉私人物件 | `activity_image_scope_checked +1`、`xia_zhiwei_link = branch_dependent`、`public_boundary +1` |
| `ACT6-A3-S12` | 后台库房 / 归档箱 | 节目单、胸牌、签到表和 4XX 的旧便签混在一个袋子里。能归档的不一定该公开。 | 公开署名清楚 / 幕后归档低调 / 私物单独收起 | `activity_archive_boundary_checked +1`、`old_debt +1`、`dorm_warmth +1` |

### 选择窗口

`ACT6-A3-CHOICE-03` 位于 `ACT6-A3-S12` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-A3-C03-A` | 公开署名清楚 | `public_boundary +2`、`activity_certificate_status = public_confirmed`、`public_credit +1`；第七卷可进入公开信用或活动证明结算。 |
| `ACT6-A3-C03-B` | 幕后归档低调 | `activity_archive_boundary_checked = true`、`a3_public_scope = limited_public`、`dorm_warmth +1`；公开度降低，但私物和宿舍温度保住。 |

完成条件：`activity_certificate_status`、`activity_image_scope_checked`、`activity_archive_boundary_checked`。

---

## `ACT6-A3-B04` 候选来源核验

本组只核验来源，不开完整感情线。沈嘉禾和夏知微必须有连续任务级来源，才能成为第五幕 `R5-ROMANCE` 候选；许棠、主持、幕后和志愿不能临时升级。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-A3-S13` 至 `ACT6-A3-S16` |
| `choice_window_id` | `ACT6-A3-CHOICE-04` |
| `choice_after_scene` | `ACT6-A3-S16` |
| `mother_lockpoints` | 沈嘉禾材料来源、夏知微照片来源、许棠公开叙事、候选白名单 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-A3-S13` | 打印店 / 共享文档 | 沈嘉禾如果连续处理过材料、格式、打印或阳光书屋任务，系统才允许把她记作 `shen_material`。一次提醒格式不算候选。 | 核对两次任务 / 只保材料软照面 / 强行写成候选 | `shen_jiahe_link = branch_dependent`、`candidate_source_tag = branch_dependent`、`drift_guard_triggered = true` |
| `ACT6-A3-S14` | 晨光湖 / 摄影社群 | 夏知微如果连续处理过照片授权、图包用途或补拍任务，才允许把她记作 `xia_photo`。一次背影不算候选。 | 核对两次授权 / 只保观看软照面 / 把一次照片当候选 | `xia_zhiwei_link = branch_dependent`、`candidate_source_tag = branch_dependent`、`drift_guard_triggered = true` |
| `ACT6-A3-S15` | 融媒体采访台 | 许棠问公开稿要不要保留寝室号。她承担公开叙事和授权压力，但不是本阶段 romance 候选。 | 确认许棠非候选 / 模糊处理 / 把采访误作感情来源 | `public_boundary +1`、`romance_outflow_allowed = false`、`drift_guard_triggered = true` |
| `ACT6-A3-S16` | 活动白名单页 / 4XX 群 | 候选来源、完美种子、宿舍回声都出现在白名单里，但每一项都必须有前置证据。 | 说明女生候选来源 / 只保软照面 / 暂不开放候选 | `female_candidate_present = branch_dependent`、`dorm_warmth +1`、`romance_outflow_allowed = false` |

### 选择窗口

`ACT6-A3-CHOICE-04` 位于 `ACT6-A3-S16` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-A3-C04-A` | 说明女生候选来源 | `candidate_source_tag = branch_dependent`、`female_candidate_present = branch_dependent`、`romance_outflow_allowed = branch_dependent`、`public_boundary +1`；只在证据达标时开放第五幕候选确认。 |
| `ACT6-A3-C04-B` | 只保软照面 | `candidate_source_tag = none_or_soft_echo`、`romance_outflow_allowed = false`、`dorm_warmth +1`；沈嘉禾 / 夏知微只保留文本回声，不开完整感情线。 |

完成条件：`candidate_source_checked`、`romance_permission_checked`、`closed_route_ids_kept_closed = true`。

---

## `ACT6-A3-B05` 毕业公开材料与最终联系范围

本组把第六幕交给第七幕。这里不写最终毕业结局，但必须输出公开材料完整度、候选来源、宿舍温度、活动联系人范围和毕业温度。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-A3-S17` 至 `ACT6-A3-S20` |
| `choice_window_id` | `ACT6-A3-CHOICE-05` |
| `choice_after_scene` | `ACT6-A3-S20` |
| `mother_lockpoints` | 毕业去向预热、活动证明、公开材料、最终联系范围 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-A3-S17` | 教务系统 / 活动证明页 | 毕业去向预登记快开始，活动证明、志愿时长或新闻稿归档也在催签收。公开信用第一次变成离校材料。 | 先办毕业表格 / 先确认活动证明 / 两边都排队 | `graduation_direction_status = pending`、`activity_certificate_status = pending`、`time_debt +1` |
| `ACT6-A3-S18` | 图包 / 毕业照预告 | 活动图、毕业照和公开素材都问同一个问题：哪些能用，哪些只能留在个人相册。 | 确认活动图用途 / 删除私人图 / 留给第七卷再定 | `activity_image_scope_checked +1`、`public_boundary +1`、`a3_public_scope = branch_dependent` |
| `ACT6-A3-S19` | 4XX 公共桌 / 活动群 | 4XX 讨论最后饭局，活动群问毕业后还能不能联系他确认材料。两个群都不是敌人，但时间只剩一份。 | 给 4XX 留具体回复 / 给活动联系人低频范围 / 继续含混 | `dorm_warmth +1`、`a3_final_contact_scope = branch_dependent`、`old_debt +1` |
| `ACT6-A3-S20` | 武生院站预回声 / 归档箱 | 站台还没到，活动胸牌、节目单、共享文档和 4XX 旧便签已经在同一个箱子里。林亦舟必须决定最后交给第七卷的公开温度。 | 完整整理公开材料 / 保留私人低频联系 / 只做最低归档 | `graduation_temperature = branch_dependent`、`act6_to_act7_handoff_ready = true` |

### 选择窗口

`ACT6-A3-CHOICE-05` 位于 `ACT6-A3-S20` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-A3-C05-A` | 毕业公开材料完整 | `activity_certificate_status = ready`、`a3_final_contact_scope = public_credit_low_frequency`、`public_credit +2`、`graduation_temperature = public_credit`；第七卷可进入公开信用、活动证明或完美种子回声。 |
| `ACT6-A3-C05-B` | 私人关系低频保留 | `a3_final_contact_scope = private_low_frequency`、`dorm_warmth +1`、`activity_link -1`、`graduation_temperature = dorm_return_or_low_visibility`；活动公开度降低，宿舍和私人边界更明确。 |

完成条件：`act6_closed = true`、`act6_route_pool_locked = true`、`act6_to_act7_handoff_ready = true`。

---

## Act6 -> Act7 交接

第六幕结束后必须向 `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` 的第七卷结算层交出以下状态：

| 字段 | 来源 | 第七卷用途 |
|---|---|---|
| `a3_public_scope` | `B01`、`B03`、`B05` | 判断公开材料是有限公开、默认公开还是低可见。 |
| `activity_link` | `B01`、`B02`、`B05` | 判断活动联系人是否继续低频找他。 |
| `public_credit` | `B02`、`B03`、`B05` | 判断公开信用或完美种子回声。 |
| `public_boundary` | 全部五组 | 判断署名、照片、采访、联系人和私物边界。 |
| `activity_certificate_status` | `B03`、`B05` | 判断活动证明、志愿时长、新闻稿或后台签收是否完整。 |
| `activity_image_scope_checked` | `B01`、`B03`、`B05` | 判断活动图、毕业照和图包授权。 |
| `activity_archive_boundary_checked` | `B03` | 判断活动归档和私物是否分开。 |
| `a3_focus_status_checked` | `B02` | 判断第六幕是否承认最终活动方向或低可见状态。 |
| `candidate_source_tag` | `B04` | 判断沈嘉禾 / 夏知微是否有合法候选来源。 |
| `female_candidate_present` | `B04` | 判断是否允许第五幕候选确认回声。 |
| `romance_outflow_allowed` | `B04` | 判断是否允许后续进入 `R5-ROMANCE` 候选确认。 |
| `a3_final_contact_scope` | `B05` | 判断毕业后活动联系人、候选来源和 4XX 的联系范围。 |
| `dorm_warmth` | 全部五组 | 判断活动公开生活是否压低 4XX 毕业温度。 |
| `time_debt` | `B01`、`B02`、`B05` | 判断压力扩散和错过。 |
| `graduation_temperature` | `B05` | 进入第七卷公开信用、候选开放、压力扩散、回寝、低可见或完美种子分流。 |

## 防漂移检查

- 如果某一段写活动圈热闹，必须补公开范围、授权、署名、证明、时间债或宿舍缺席。
- 如果某一段写沈嘉禾或夏知微，必须说明是否有连续任务级来源；一次照面只能软回声。
- 如果某一段写许棠，必须保持她的公开叙事和授权功能，不写成 romance 候选。
- 如果某一段写“两个都要”，必须进入压力、时间债或宿舍降温，不能写成全收奖励。
- 如果某一段写选择，必须只能在 `POOL-A3-ACTIVITY-PUBLIC` 内改变公开信用、活动牵引、候选来源、宿舍温度和毕业温度，不能转路线。
- 如果某一段写未来联系，必须区分活动联系人、毕业联系人、候选来源和 4XX 联系，不允许混成一个万能联系人。
