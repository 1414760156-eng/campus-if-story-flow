# IF 第七卷 ACT7-A3 活动父池事件变体剧情页级细稿

本文用于把 `A3-ACTIVITY-PUBLIC` / `POOL-A3-ACTIVITY-PUBLIC` 的第七卷毕业结算拆成 12 个同母事件变体。它不是 `R3-PERFECT` 完美线，也不是 `R5-ROMANCE` 专注感情线，更不是第七卷重新开放社团横跳的入口；它只结算第三幕活动父池留下的公开材料、联系人、署名、照片授权、活动信用、候选来源和宿舍温度。

活动父池的第七卷核心问题是：当林亦舟曾经被主持队、融媒体、摄影社、幕后物资、志愿服务或活动材料牵引过，毕业流程会怎样要求他把“被看见”变成可确认的公开范围，把“帮过忙”变成本人签收，把“有人认识他”变成有边界的低频联系。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `A3-ACTIVITY-PUBLIC` |
| `route_pool_id` | `POOL-A3-ACTIVITY-PUBLIC` |
| `act7_variant_id` | `ACT7-A3` |
| `entry_choice` | `P0A_ACT3_RECRUIT_FORM` |
| `route_switch_allowed` | `false` |
| `same_mother_event` | `true` |

禁止项：

- 不允许把 A3 直接写成 `R3-PERFECT`；只有前文已经形成 `mode_perfect`，第七卷才允许留下完美线种子。
- 不允许把 A3 直接写成 `R5-ROMANCE`；只有沈嘉禾或夏知微已有合法连续任务来源，才能保留候选回声。
- 不允许把许棠写成 romance 候选；她只承担采访、公开叙事、授权和活动材料压力。
- 不允许让主持、幕后、志愿方向凭空跳出沈嘉禾或夏知微。
- 不允许把 `take_both` 当奖励路线；两个都要只能结算为压力、时间债和宿舍降温。
- 不允许在第七卷重新横跳所有社团；本文件只承接已形成的 A3 父池结果。

## 关键变量

| 变量 | 用途 |
|---|---|
| `a3_activity_choice_count` | 第三幕活动父池选择次数回声。 |
| `a3_first_focus` | 第一次活动方向：主持、新闻、摄影、幕后、志愿、回寝或回避。 |
| `a3_second_focus` | 第二次维持或试新的方向。 |
| `a3_final_choice` | 第三次收束：坚持第一个、坚持第二个、两个都要或两个都不要。 |
| `a3_focus_votes` | 各活动 focus 的累计倾向。 |
| `a3_mode_votes` | 普通、完美、压力、回避、回寝的累计倾向。 |
| `activity_link` | 活动圈和公开事务继续找林亦舟的强度。 |
| `public_credit` | 老师、活动负责人、同学对其公开可靠度的记忆。 |
| `self_control` | 是否能按流程、范围和时间表自我管理。 |
| `emotional_delay` | 是否用材料和活动延后当面解释。 |
| `public_boundary` | 采访、照片、署名、材料、联系人和公开范围边界。 |
| `candidate_source_tag` | 候选来源：`shen_material`、`xia_photo` 或 `none`。 |
| `female_candidate_present` | 是否存在合法女生候选来源。 |
| `romance_outflow_allowed` | 是否允许后续进入专注感情线候选确认。 |
| `dorm_warmth` | 4XX 是否仍保留当面解释与低频联系温度。 |
| `time_debt` | 活动材料、补签、授权、总结会和联系人维护造成的时间欠账。 |
| `project_stability` | 活动材料是否挤压 C407 / 毕业设计流程。 |
| `old_debt` | 公开生活是否把宿舍旧账继续往后拖。 |
| `a3_contact_scope_checked` | 毕业联系人和活动联系人是否分清。 |
| `a3_public_scope` | 活动材料可公开范围：`limited_public`、`activity_default`、`not_public`。 |
| `activity_certificate_status` | 活动证明、志愿时长、后台签收或新闻稿证明状态。 |
| `activity_image_scope_checked` | 毕业照、活动图、背影、正脸和图包用途是否确认。 |
| `activity_archive_boundary_checked` | 最后一个新年和活动归档之间的私物边界是否确认。 |
| `a3_focus_status_checked` | 第七卷是否承认自己最终属于哪个活动方向或低可见状态。 |
| `a3_final_contact_scope` | 毕业后活动联系人、候选来源和 4XX 的最终联系范围。 |
| `graduation_temperature` | 公开信用、候选开放、压力扩散、回寝、低可见或完美种子。 |

## 12 事件总表

| 事件 | 活动父池变体功能 |
|---|---|
| `ACT7-E01-PRE-REGISTER` | 毕业去向预登记把活动联系人、毕业联系人和候选来源压到同一张表上。 |
| `ACT7-E02-PUBLIC-SCOPE` | 确认活动材料、采访、署名和照片授权的公开范围。 |
| `ACT7-E03-LAST-NEW-YEAR` | 最后一个新年被活动材料会吸走，但仍可选择哪些材料不公开。 |
| `ACT7-E04-THESIS-TOPIC` | 开题方向和活动履历并排出现，活动信用不能替论文依据背书。 |
| `ACT7-E05-MARCH-QUEUE` | 三四月窗口里活动证明、志愿时长、照片提交和毕业材料互相挤压。 |
| `ACT7-E06-THESIS-REVISION` | 改稿和活动材料并行，公开署名、候选回声和终版边界同时到场。 |
| `ACT7-E07-DEFENSE` | 答辩结果和活动履历进入毕业叙事，不能只发活动式通过截图。 |
| `ACT7-E08-GRAD-PHOTO` | 毕业照与活动图包、授权用途和候选来源一起结算。 |
| `ACT7-E09-DORM-CLEAR` | 清寝时把活动胸牌、挂绳、节目单、签到表和 4XX 旧物分开处理。 |
| `ACT7-E10-LAST-MEAL` | 最后一顿饭和活动总结会撞期，检验公开信用能不能让位给当面关系。 |
| `ACT7-E11-LEAVING-PAPERS` | 离校手续、活动证明、归档交接和联系人范围都要求本人确认。 |
| `ACT7-E12-STATION-AFTER` | 武生院站后输出公开信用、候选开放、压力扩散、回寝、低可见或完美种子。 |

---

## `ACT7-E01-PRE-REGISTER` 毕业去向预登记

| 字段 | 值 |
|---|---|
| `previous_event` | `null` |
| `next_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `main_location` | B204 / 教务系统 / 活动联系人群 |
| `scene_function` | 预登记把毕业方向、活动联系人、公开材料联系人和候选来源压到同一张表上。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 表格弹出 | `ACT7-E01-A3-P01` | B204 发毕业去向预登记，活动负责人也在群里问毕业后谁还能确认材料。 | A. 先看学校表格；B. 先回活动联系人。 | A：`pre_register_boundary_checked = true`；B：`activity_link +1`, `time_debt +1`。 |
| 联系口 | `ACT7-E01-A3-P02` | 同一个手机号既能被学院找到，也能被活动群继续拉去确认图包、采访稿和证明。 | A. 把毕业联系人和活动联系人分开；B. 继续用活动群当默认联系口。 | A：`a3_contact_scope_checked = true`, `public_boundary +1`；B：`activity_link +1`, `old_debt +1`。 |
| 来源栏 | `ACT7-E01-A3-P03` | 表格没有“沈嘉禾材料协作”或“夏知微照片授权”这种栏，只有去向和备注。 | A. 只写合法公开来源；B. 把熟人名字写进备注。 | A：`candidate_source_tag` 保持合法来源；B：`public_boundary -1`, `emotional_delay +1`。 |
| 提交后 | `ACT7-E01-A3-P04` | 提交成功后，4XX 群问谁一起办离校，活动群问谁能保留毕业后联系方式。 | A. 两边都回清楚边界；B. 先保活动联系不中断。 | A：`graduation_direction_status = submitted`, `dorm_warmth +1`；B：`graduation_direction_status = submitted`, `activity_link +1`, `time_debt +1`。 |

核心选择窗：`ACT7-E01-A3-CHOICE-01`，位于 `ACT7-E01-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E01-A3-C01-A` | 把活动联系人和毕业联系人分开 | `pre_register_boundary_checked = true`、`a3_contact_scope_checked = true`、`public_boundary +1`。 |
| `ACT7-E01-A3-C01-B` | 继续用活动群当默认联系口 | `activity_link +1`、`time_debt +1`、`graduation_temperature = public_credit_pressure`。 |

完成条件：`pre_register_boundary_checked`、`graduation_direction_status`、`a3_contact_scope_checked`。

---

## `ACT7-E02-PUBLIC-SCOPE` 公开范围确认

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E01-PRE-REGISTER` |
| `next_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `main_location` | 班级材料群 / 融媒体共享文档 / 活动图包 |
| `scene_function` | 确认活动材料、采访、署名和照片授权的公开范围，避免把私事写进公开场。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 材料通知 | `ACT7-E02-A3-P01` | 班级材料群要毕业公开素材，活动共享盘里有主持照、采访稿、后台签收和摄影社图包。 | A. 先看授权要求；B. 先把素材拖进目录。 | A：`public_boundary +1`；B：`public_credit +1`, `public_boundary -1`。 |
| 署名范围 | `ACT7-E02-A3-P02` | 许棠问采访稿署名，夏知微的图包问能不能发正脸，沈嘉禾的共享文档仍显示修订记录。 | A. 写清公开范围和署名；B. 按活动习惯默认可用。 | A：`public_scope_boundary_checked = true`, `a3_public_scope = limited_public`；B：`a3_public_scope = activity_default`, `old_debt +1`。 |
| 私人边界 | `ACT7-E02-A3-P03` | 有些材料能代表活动信用，有些只是四年里某个晚上，没有义务被公开解释。 | A. 删掉寝室私物和非授权背影；B. 只要不露脸就保留。 | A：`public_consent_checked = true`, `dorm_warmth +1`；B：`public_boundary -1`, `emotional_delay +1`。 |
| 回执生成 | `ACT7-E02-A3-P04` | 回执写着“本人确认”。它不问谁帮过忙，只问谁允许公开。 | A. 保存回执并同步群内范围；B. 只在自己手机留一份。 | A：`public_consent_checked = true`, `public_credit +1`；B：`candidate_source_tag` 保持待核验。 |

核心选择窗：`ACT7-E02-A3-CHOICE-01`，位于 `ACT7-E02-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E02-A3-C01-A` | 写清公开范围和署名 | `public_scope_boundary_checked = true`、`a3_public_scope = limited_public`、`public_boundary +1`。 |
| `ACT7-E02-A3-C01-B` | 按活动习惯默认可用 | `a3_public_scope = activity_default`、`public_boundary -1`、`old_debt +1`。 |

完成条件：`public_scope_boundary_checked`、`public_consent_checked`、`a3_public_scope`。

---

## `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `next_event` | `ACT7-E04-THESIS-TOPIC` |
| `main_location` | 青枫居 4XX / 活动材料会 / 共享盘旧目录 |
| `scene_function` | 最后一个新年被活动材料会吸走，但可选择只留下可公开材料，不把私人热闹塞进主题。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 旧目录 | `ACT7-E03-A3-P01` | 共享盘里“最后一个新年”目录旁边，是活动复盘、主持串词、摄影社图包和志愿名单。 | A. 打开旧目录；B. 先去活动材料会。 | A：`opening_contrast_seen = true`；B：`activity_link +1`, `time_debt +1`。 |
| 材料会上 | `ACT7-E03-A3-P02` | 大家想找一段热闹的视频做毕业主题，但那段视频里有 4XX 桌角和没授权的背影。 | A. 只留活动可公开材料；B. 把热闹素材都塞进主题。 | A：`activity_archive_boundary_checked = true`, `a3_public_scope = limited_public`；B：`public_boundary -1`, `old_debt +1`。 |
| 私人碎片 | `ACT7-E03-A3-P03` | 林亦舟翻到旧传单、挂绳、节目单和一张 4XX 外卖小票，忽然分不清哪张算活动材料。 | A. 标注来源和用途；B. 先一起扫进归档。 | A：`old_object_scope_checked = true`；B：`activity_link +1`, `emotional_delay +1`。 |
| 不公开项 | `ACT7-E03-A3-P04` | 周屿在群里问要不要把那段笑声留下，许棠只问一句“授权齐吗”。 | A. 明确哪些不公开；B. 让活动组自行剪。 | A：`public_boundary +1`, `dorm_warmth +1`；B：`public_credit +1`, `old_debt +1`。 |

核心选择窗：`ACT7-E03-A3-CHOICE-01`，位于 `ACT7-E03-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E03-A3-C01-A` | 只留活动可公开材料 | `activity_archive_boundary_checked = true`、`public_boundary +1`、`dorm_warmth +1`。 |
| `ACT7-E03-A3-C01-B` | 把热闹素材都塞进主题 | `public_credit +1`、`public_boundary -1`、`old_debt +1`。 |

完成条件：`opening_contrast_seen`、`old_object_scope_checked`、`activity_archive_boundary_checked`。

---

## `ACT7-E04-THESIS-TOPIC` 毕业设计方向与开题

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `next_event` | `ACT7-E05-MARCH-QUEUE` |
| `main_location` | C407 / B204 开题复核 / 活动履历表 |
| `scene_function` | 开题方向和活动履历并排出现，确认活动信用不能替毕业设计依据背书。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 题目页 | `ACT7-E04-A3-P01` | 开题表要求写选题依据，活动履历表又弹出“是否关联校园实践材料”。 | A. 先写题目依据；B. 先补活动履历。 | A：`topic_boundary_checked = true`；B：`public_credit +1`, `time_debt +1`。 |
| 依据边界 | `ACT7-E04-A3-P02` | 主持、摄影或材料协作可以成为观察来源，却不能自动替代论文论证。 | A. 区分活动经历和题目依据；B. 用公开信用替题目说服。 | A：`project_stability +1`, `a3_focus_status_checked = true`；B：`project_stability -1`, `self_control -1`。 |
| 候选回声 | `ACT7-E04-A3-P03` | 如果沈嘉禾或夏知微曾经连续承担任务，她们的名字只能作为来源核验，不能写成第七卷新选择。 | A. 只保合法来源标签；B. 把熟人关系写成亮点。 | A：`candidate_source_tag` 保持合法；B：`romance_outflow_allowed = false`, `public_boundary -1`。 |
| 题目落定 | `ACT7-E04-A3-P04` | 导师签字后，活动群还在催“毕业专栏个人简介”，C407 群只催终版题目。 | A. 先完成开题签字；B. 先写活动简介。 | A：`topic_self_signed = true`；B：`activity_link +1`, `time_debt +1`。 |

核心选择窗：`ACT7-E04-A3-CHOICE-01`，位于 `ACT7-E04-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E04-A3-C01-A` | 区分活动经历和题目依据 | `topic_boundary_checked = true`、`a3_focus_status_checked = true`、`project_stability +1`。 |
| `ACT7-E04-A3-C01-B` | 用公开信用替题目说服 | `project_stability -1`、`self_control -1`、`thesis_revision_version = risk_later`。 |

完成条件：`topic_boundary_checked`、`topic_self_signed`、`a3_focus_status_checked`。

---

## `ACT7-E05-MARCH-QUEUE` 三四月事项排队

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E04-THESIS-TOPIC` |
| `next_event` | `ACT7-E06-THESIS-REVISION` |
| `main_location` | 明德楼窗口 / 活动办公室 / 摄影社图包提交页 |
| `scene_function` | 三四月窗口里活动证明、志愿时长、照片提交和毕业材料互相挤压。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 窗口并排 | `ACT7-E05-A3-P01` | 实习预收、证书核验、活动证明和志愿时长盖章排在同一天。 | A. 先看毕业窗口；B. 先补活动证明。 | A：`march_boundary_checked = true`；B：`activity_certificate_status = pending`, `time_debt +1`。 |
| 证明缺口 | `ACT7-E05-A3-P02` | 活动负责人说证明能开，但需要本人确认活动名称、署名和时长。 | A. 按毕业窗口先确认材料；B. 先补活动端证明。 | A：`queue_item_submitted = true`, `public_boundary +1`；B：`activity_certificate_status = submitted`, `activity_link +1`。 |
| 图包提交 | `ACT7-E05-A3-P03` | 摄影社图包、采访稿附件和后台签收单都能证明他参与过，但不能替他办毕业流程。 | A. 分开提交材料；B. 一起打包省时间。 | A：`public_boundary +1`, `project_stability +1`；B：`public_boundary -1`, `time_debt +1`。 |
| 回寝空档 | `ACT7-E05-A3-P04` | 4XX 公共桌正好有一段能说话的时间，活动群又提醒他去拿证明。 | A. 先回 4XX 说清窗口；B. 先去拿证明。 | A：`dorm_warmth +1`, `old_debt -1`；B：`activity_certificate_status = submitted`, `dorm_warmth -1`。 |

核心选择窗：`ACT7-E05-A3-CHOICE-01`，位于 `ACT7-E05-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E05-A3-C01-A` | 按毕业窗口先确认材料 | `march_boundary_checked = true`、`queue_item_submitted = true`、`public_boundary +1`。 |
| `ACT7-E05-A3-C01-B` | 先补活动端证明 | `activity_certificate_status = submitted`、`activity_link +1`、`time_debt +1`。 |

完成条件：`march_boundary_checked`、`queue_item_submitted`、`activity_certificate_status`。

---

## `ACT7-E06-THESIS-REVISION` 改论文 / 毕业设计

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E05-MARCH-QUEUE` |
| `next_event` | `ACT7-E07-DEFENSE` |
| `main_location` | C407 / 共享文档 / 活动材料终稿群 |
| `scene_function` | 改稿和活动材料并行，公开署名、候选回声和论文终版边界同时到场。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 红批与终稿 | `ACT7-E06-A3-P01` | 导师红批刚到，活动材料终稿群也催他确认个人简介、照片和署名。 | A. 先读论文红批；B. 先回活动材料。 | A：`thesis_boundary_checked = true`；B：`activity_link +1`, `time_debt +1`。 |
| 署名挤压 | `ACT7-E06-A3-P02` | 论文作者、活动材料署名和候选来源不是一回事，偏偏都在同一晚要求确认。 | A. 先锁论文边界再处理活动材料；B. 让活动材料继续挤进终版。 | A：`public_boundary +1`, `project_stability +1`；B：`project_stability -1`, `emotional_delay +1`。 |
| 帮看边界 | `ACT7-E06-A3-P03` | 沈嘉禾能看格式，夏知微能问图片授权，但谁都不能替他改论文论点。 | A. 只请求边界内确认；B. 把未改完的部分丢给熟人。 | A：`thesis_revision_version = self_revised_with_boundary`；B：`romance_outflow_allowed = false`, `public_boundary -1`。 |
| 提交前 | `ACT7-E06-A3-P04` | 十点前，论文系统和活动终稿群都亮着“请确认”。林亦舟必须先选一个顺序。 | A. 提交论文后再回活动群；B. 两边同时压线确认。 | A：`revision_submitted_before_deadline = true`；B：`time_debt +1`, `self_control -1`。 |

核心选择窗：`ACT7-E06-A3-CHOICE-01`，位于 `ACT7-E06-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E06-A3-C01-A` | 先锁论文边界再处理活动材料 | `thesis_boundary_checked = true`、`project_stability +1`、`public_boundary +1`。 |
| `ACT7-E06-A3-C01-B` | 让活动材料继续挤进终版 | `project_stability -1`、`time_debt +1`、`graduation_temperature = pressure_spread`。 |

完成条件：`thesis_boundary_checked`、`thesis_revision_version`、`revision_submitted_before_deadline`。

---

## `ACT7-E07-DEFENSE` 答辩日

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E06-THESIS-REVISION` |
| `next_event` | `ACT7-E08-GRAD-PHOTO` |
| `main_location` | C407 答辩门口 / 明德楼窗口 / 活动履历页 |
| `scene_function` | 答辩结果和活动履历进入毕业叙事，确认公开信用不能遮住真实结果。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 门口排队 | `ACT7-E07-A3-P01` | 答辩门口排队，手机里活动群已经把“毕业专栏通过稿”发到他面前。 | A. 先核答辩顺序；B. 先看活动稿。 | A：`defense_order_seen = true`；B：`activity_link +1`, `time_debt +1`。 |
| 结果说法 | `ACT7-E07-A3-P02` | 答辩通过不是活动海报上的一句“顺利毕业”，还包括补章、补交和本人确认。 | A. 认真说答辩结果和公开材料状态；B. 只发一张活动式通过截图。 | A：`defense_boundary_checked = true`, `activity_public_credit_recorded = true`；B：`public_credit +1`, `old_debt +1`。 |
| 履历确认 | `ACT7-E07-A3-P03` | 活动履历页列着主持、新闻、摄影或后台。他需要确认这些只是经历，不是新的路线入口。 | A. 标注已结算活动经历；B. 保持模糊好看一点。 | A：`a3_focus_status_checked = true`；B：`emotional_delay +1`, `public_boundary -1`。 |
| 恭喜以后 | `ACT7-E07-A3-P04` | 4XX 群里有人说恭喜，活动群里有人说“那专栏也可以发了”。 | A. 两边都回完整；B. 只回活动群。 | A：`defense_post_submit_done = true`, `dorm_warmth +1`；B：`activity_link +1`, `dorm_warmth -1`。 |

核心选择窗：`ACT7-E07-A3-CHOICE-01`，位于 `ACT7-E07-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E07-A3-C01-A` | 认真说答辩结果和公开材料状态 | `defense_boundary_checked = true`、`activity_public_credit_recorded = true`、`dorm_warmth +1`。 |
| `ACT7-E07-A3-C01-B` | 只发一张活动式通过截图 | `public_credit +1`、`old_debt +1`、`graduation_temperature = low_visibility`。 |

完成条件：`defense_boundary_checked`、`defense_post_submit_done`、`activity_public_credit_recorded`。

---

## `ACT7-E08-GRAD-PHOTO` 毕业照

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 晨光体育场 / 摄影社图包 / 毕业影像授权页 |
| `scene_function` | 毕业照与活动图包、授权用途和候选来源一起结算。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 队形集合 | `ACT7-E08-A3-P01` | 晨光体育场排毕业照，摄影社图包也在同时征集“校园活动回顾”。 | A. 先站班级队形；B. 先确认活动图包。 | A：`grad_photo_result_recorded = true`；B：`activity_link +1`, `time_debt +1`。 |
| 授权用途 | `ACT7-E08-A3-P02` | 毕业照、活动图和候选来源的照片不能混用；正脸、背影、空镜都要用途清楚。 | A. 先确认影像授权和活动用途；B. 默认活动图可用。 | A：`photo_boundary_checked = true`, `activity_image_scope_checked = true`；B：`public_boundary -1`, `activity_link +1`。 |
| 同框边界 | `ACT7-E08-A3-P03` | 如果夏知微在场，她只是在确认图包；如果沈嘉禾发来文件名，也只是材料回声。 | A. 保持候选来源合法；B. 借毕业照重新摇摆候选。 | A：`candidate_source_tag` 保持合法；B：`romance_outflow_allowed = false`, `old_debt +1`。 |
| 预览留存 | `ACT7-E08-A3-P04` | 预览图里 4XX 站在一起，活动图包也很完整。两边都能留下，但不能互相代替。 | A. 分开保存班级照和活动照；B. 都放进活动目录。 | A：`dorm_warmth +1`, `public_boundary +1`；B：`public_credit +1`, `dorm_warmth -1`。 |

核心选择窗：`ACT7-E08-A3-CHOICE-01`，位于 `ACT7-E08-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-A3-C01-A` | 先确认影像授权和活动用途 | `photo_boundary_checked = true`、`activity_image_scope_checked = true`、`public_boundary +1`。 |
| `ACT7-E08-A3-C01-B` | 默认活动图可用 | `public_boundary -1`、`activity_link +1`、`graduation_temperature = public_credit_pressure`。 |

完成条件：`photo_boundary_checked`、`grad_photo_result_recorded`、`activity_image_scope_checked`。

---

## `ACT7-E09-DORM-CLEAR` 清寝与旧物

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居 4XX / 公共桌 / 活动物料袋 |
| `scene_function` | 清寝时把活动胸牌、挂绳、节目单、签到表和 4XX 旧物分开处理。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 旧物翻出 | `ACT7-E09-A3-P01` | 林亦舟清出活动胸牌、挂绳、节目单、志愿时长表和一叠旧签到表。 | A. 分类留存；B. 直接装进同一袋。 | A：`old_object_scope_checked = true`；B：`activity_link +1`, `old_debt +1`。 |
| 公私分袋 | `ACT7-E09-A3-P02` | 活动物料可以交回，4XX 的旧外卖单、便签和桌角照片不该跟着归档。 | A. 先分开活动物料和宿舍旧物；B. 按文件袋一起收走。 | A：`shared_item_owner_checked = true`, `public_boundary +1`；B：`activity_archive_boundary_checked = false`, `dorm_warmth -1`。 |
| 本人签收 | `ACT7-E09-A3-P03` | 后台物资签收表上有他的名字，但公共插排和钥匙仍要按寝室确认。 | A. 先确认公共物品归属；B. 请活动负责人一起代交。 | A：`dorm_key_returned = true`, `public_boundary +1`；B：`public_boundary -1`, `time_debt +1`。 |
| 空桌以后 | `ACT7-E09-A3-P04` | 公共桌空下来，挂绳和旧小票被放进不同袋子，像把热闹和日常终于分开。 | A. 留一句当面说明；B. 只发一张收拾完的照片。 | A：`dorm_warmth +1`, `old_debt -1`；B：`public_credit +1`, `emotional_delay +1`。 |

核心选择窗：`ACT7-E09-A3-CHOICE-01`，位于 `ACT7-E09-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-A3-C01-A` | 先分开活动物料和宿舍旧物 | `old_object_scope_checked = true`、`shared_item_owner_checked = true`、`public_boundary +1`。 |
| `ACT7-E09-A3-C01-B` | 按文件袋一起收走 | `activity_link +1`、`old_debt +1`、`dorm_warmth -1`。 |

完成条件：`old_object_scope_checked`、`shared_item_owner_checked`、`dorm_key_returned`。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 东北饺子馆 / 活动总结会 / 校门口 |
| `scene_function` | 最后一顿饭和活动总结会撞期，检验公开信用能不能让位给当面关系。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 撞期消息 | `ACT7-E10-A3-P01` | 4XX 最后一顿饭订好，活动群也说今晚做毕业总结和材料交接。 | A. 先说明饭局安排；B. 先问总结会几点结束。 | A：`meal_boundary_checked = true`；B：`activity_link +1`, `time_debt +1`。 |
| 优先级 | `ACT7-E10-A3-P02` | 活动负责人说他不到也能交接，但“你来会更稳”。4XX 那边只问他来不来。 | A. 明确最后饭局优先；B. 先去活动总结再赶饭局。 | A：`meal_attendance_locked = true`, `dorm_warmth +1`；B：`public_credit +1`, `missed_chance +1`。 |
| 饭桌话 | `ACT7-E10-A3-P03` | 饭桌上聊起谁被哪个活动记住，周屿笑他“你现在到哪都有群”。 | A. 承认自己被活动分走过；B. 说只是顺手帮忙。 | A：`old_debt -1`, `dorm_warmth +1`；B：`emotional_delay +1`。 |
| 饭后回执 | `ACT7-E10-A3-P04` | 散场后，活动群问交接表是否确认，4XX 问明天几点走。 | A. 饭后再回活动交接；B. 直接去总结会补签。 | A：`activity_reply_after_meal = true`, `dorm_warmth +1`；B：`activity_certificate_status = submitted`, `dorm_warmth -1`。 |

核心选择窗：`ACT7-E10-A3-CHOICE-01`，位于 `ACT7-E10-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-A3-C01-A` | 明确最后饭局优先 | `meal_boundary_checked = true`、`meal_attendance_locked = true`、`dorm_warmth +1`。 |
| `ACT7-E10-A3-C01-B` | 先去活动总结再赶饭局 | `public_credit +1`、`missed_chance +1`、`graduation_temperature = pressure_spread`。 |

完成条件：`meal_boundary_checked`、`meal_attendance_locked`、`activity_reply_after_meal`。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 明德楼离校窗口 / 活动办公室 / 档案领取处 |
| `scene_function` | 离校手续、活动证明、归档交接和联系人范围都要求本人确认。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 离校清单 | `ACT7-E11-A3-P01` | 离校系统一项项变绿，活动办公室还差一份证明签收和归档交接。 | A. 先核离校清单；B. 先去活动办公室。 | A：`leaving_boundary_checked = true`；B：`activity_certificate_status = submitted`, `time_debt +1`。 |
| 本人签收 | `ACT7-E11-A3-P02` | 证书、档案和活动证明都写着本人确认，公开信用再高也不能代签。 | A. 把档案和活动证明都按本人签收；B. 只保活动端继续找得到。 | A：`certificate_or_archive_seen = true`, `public_boundary +1`；B：`activity_link +1`, `a3_final_contact_scope = activity_default`。 |
| 联系范围 | `ACT7-E11-A3-P03` | 秦越、许棠、摄影社或志愿负责人都可能以后找他，但毕业后不能默认随叫随到。 | A. 写清低频联系范围；B. 保持所有群不退。 | A：`a3_final_contact_scope = low_contact_with_boundary`；B：`time_debt +1`, `public_credit +1`。 |
| 站前确认 | `ACT7-E11-A3-P04` | 去武生院站前，4XX 群和活动群同时问“到了说一声”。 | A. 分别约定联系范围；B. 只回活动群的流程确认。 | A：`a3_final_contact_scope = low_contact_with_boundary`, `dorm_warmth +1`；B：`a3_final_contact_scope = activity_only`, `dorm_warmth -1`。 |

核心选择窗：`ACT7-E11-A3-CHOICE-01`，位于 `ACT7-E11-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-A3-C01-A` | 把档案和活动证明都按本人签收 | `leaving_boundary_checked = true`、`certificate_or_archive_seen = true`、`public_boundary +1`。 |
| `ACT7-E11-A3-C01-B` | 只保活动端继续找得到 | `activity_link +1`、`a3_final_contact_scope = activity_default`、`graduation_temperature = public_credit_pressure`。 |

完成条件：`leaving_boundary_checked`、`certificate_or_archive_seen`、`a3_final_contact_scope`。

---

## `ACT7-E12-STATION-AFTER` 武生院站后

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `null` |
| `main_location` | 武生院站 / 地铁车厢 / 活动群与 4XX 群 |
| `scene_function` | 输出活动父池最终温度：公开信用、候选开放、压力扩散、回寝、低可见或完美种子。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 进站前 | `ACT7-E12-A3-P01` | 武生院站口人很多，林亦舟手机里同时亮着活动群、4XX 群和毕业材料回执。 | A. 先报站；B. 先回活动材料确认。 | A：`station_after_echo_seen = true`；B：`activity_link +1`, `time_debt +1`。 |
| 到站以后 | `ACT7-E12-A3-P02` | 地铁开出校园站，最后的选择不是再加入哪个社团，而是以后还把谁放进真实联系里。 | A. 保留低频真实联系和清楚边界；B. 只保公开材料里的名字。 | A：`a3_final_contact_scope = low_contact_with_boundary`, `dorm_warmth +1`；B：`a3_final_contact_scope = public_name_only`, `public_credit +1`。 |
| 候选余温 | `ACT7-E12-A3-P03` | 若沈嘉禾或夏知微来源达标，她们只是保留现实入口；若没有达标，名字只留在材料或图包里。 | A. 只输出合法候选开放；B. 把软照面写成未竟感情。 | A：`romance_outflow_allowed` 由前置来源决定；B：`romance_outflow_allowed = false`, `public_boundary -1`。 |
| 站后温度 | `ACT7-E12-A3-P04` | 出站后，活动群终于安静一点，4XX 群也只剩“到了”。他可以被记住，也可以只留下一个清楚的名字。 | A. 回到真实低频联系；B. 只留公开记录。 | A：`graduation_temperature = public_credit_with_low_contact`；B：`graduation_temperature = low_visibility_or_public_record`。 |

核心选择窗：`ACT7-E12-A3-CHOICE-01`，位于 `ACT7-E12-A3-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-A3-C01-A` | 保留低频真实联系和清楚边界 | `a3_final_contact_scope = low_contact_with_boundary`、`dorm_warmth +1`、`graduation_temperature = public_credit_with_low_contact`。 |
| `ACT7-E12-A3-C01-B` | 只保公开材料里的名字 | `a3_final_contact_scope = public_name_only`、`public_credit +1`、`graduation_temperature = low_visibility_or_public_record`。 |

完成条件：`a3_final_contact_scope`、`graduation_temperature`、`station_after_echo_seen`。

---

## 结局温度建议

| 结局 | 条件建议 | 文本落点 |
|---|---|---|
| `A3-END-PUBLIC-CREDIT` | `public_credit >= 4`、`public_boundary >= 4`、`dorm_warmth >= 2` | 林亦舟的公开材料、活动履历和署名清楚，活动圈仍会低频找他确认少量事项。 |
| `A3-END-CANDIDATE-OPEN` | `female_candidate_present = true`、`romance_outflow_allowed = true`、`candidate_source_tag` 合法 | 沈嘉禾或夏知微保留现实入口，但第七卷不重新选择、不双候选摇摆。 |
| `A3-END-PRESSURE-SPREAD` | `a3_final_choice = take_both` 或 `time_debt >= 5` | 他做过很多公开事务，却很难说自己属于哪边；活动群还在响，私人消息变少。 |
| `A3-END-DORM-RETURN` | `mode_dorm` 高、`dorm_warmth >= 4`、`a3_final_contact_scope = low_contact_with_boundary` | 活动成为软回声，4XX 当面解释和毕业后低频联系保住。 |
| `A3-END-LOW-VISIBILITY` | `mode_avoid` 高或 `public_credit <= 1`、`dorm_warmth <= 1` | 他既没有被活动圈真正记住，也没有及时回到宿舍现场，只留下低可见记录。 |
| `A3-END-PERFECT-SEED` | `mode_perfect` 高、`self_control >= 4`、`public_boundary >= 4` | 可作为 `R3-PERFECT` 的毕业种子；若未转入，文本温度清楚、体面但偏冷。 |

## 后续 JSON 接入建议

- 正式 JSON 文件建议命名为 `开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json`。
- `source_docs` 至少引用本文、`开发长线_IF可玩支线A3-ACTIVITY-PUBLIC社团活动父池.md`、`开发规则_IF第七卷毕业结算与共用事件变体矩阵.md`。
- 每个事件保持 4 个剧情页、1 个二方向选择窗、`same_mother_event = true`、`route_switch_allowed = false`。
- 重点记录 `a3_contact_scope_checked`、`a3_public_scope`、`activity_certificate_status`、`activity_image_scope_checked`、`a3_final_contact_scope`，用于区分公开信用、候选开放、压力扩散、回寝、低可见和完美种子。
