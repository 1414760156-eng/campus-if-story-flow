# IF 第七卷 ACT7-ZHOU 周屿线事件变体剧情页级细稿

本文用于把 `R5-ZHOU` / `POOL-R5-ZHOU` 的第七卷毕业结算拆成 12 个同母事件变体。它不是新增第七卷路线选择，也不是把玩家从周屿线跳回 DEFAULT；它只改变镜头、可操作内容、变量回声和毕业温度。

周屿线的第七卷核心问题是：热闹退场以后，周屿还能不能停住玩笑，把一句真实的话留在合适的位置；林亦舟还能不能靠近他，但不替他圆所有公开场面。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-ZHOU` |
| `route_pool_id` | `POOL-R5-ZHOU` |
| `act7_variant_id` | `ACT7-ZHOU` |
| `entry_choice` | `P0D_STAND_WITH_ZHOU` |
| `route_switch_allowed` | `false` |
| `same_mother_event` | `true` |

禁止项：

- 不允许把周屿线写成“活动圈奖励线”。
- 不允许用毕业饭局或毕业照强行完成 4XX 大团圆。
- 不允许让林亦舟替周屿填表、签字、公开授权或解释缺席。
- 不允许把周屿的玩笑直接翻译成完整剖白；他可以停住半句，也可以只把一句话说低。

## 关键变量

| 变量 | 用途 |
|---|---|
| `zhou_trust` | 周屿是否愿意把玩笑背后的真话交给林亦舟。 |
| `activity_link` | 林亦舟进入周屿活动圈、主持队、秦越流程的深度。 |
| `public_smooth` | 公开场面是否被圆顺；高值会压住真实问题。 |
| `face_debt` | 请客、热闹、人情和面子补偿的累积。 |
| `joke_defense` | 周屿用玩笑防御难堪的强度。 |
| `public_boundary` | 公开材料、照片、署名、朋友圈和留存授权边界。 |
| `dorm_absence` | 林亦舟在 4XX 场域缺席程度。 |
| `tang_misread` | 唐骁对林亦舟偏袒周屿的误读。 |
| `luchen_distance` | 陆沉与林亦舟的距离。 |
| `qinyue_pressure` | 秦越活动流程 / 人情对林亦舟的挤压。 |
| `zhou_contact_scope_checked` | 预登记中是否把个人联系方式与活动联络范围分开。 |
| `zhou_activity_signature_scope` | 毕业活动、主题材料和协助名单中的署名范围。 |
| `zhou_half_apology_seen` | 周屿是否出现半句道歉或等价停顿。 |
| `zhou_final_contact_scope` | 毕业后是否保留低频但真实联系。 |

## 12 事件总表

| 事件 | 周屿线变体功能 |
|---|---|
| `ACT7-E01-PRE-REGISTER` | 把活动联系人和毕业去向拆开，确认周屿不能把热闹写满表格。 |
| `ACT7-E02-PUBLIC-SCOPE` | 处理主持素材、活动片段和最后一个新年主题材料的公开范围。 |
| `ACT7-E03-LAST-NEW-YEAR` | 让周屿在玩笑和不公开之间停一下。 |
| `ACT7-E04-THESIS-TOPIC` | 把毕业设计方向与活动素材边界分开，避免把周屿写进林亦舟的课题。 |
| `ACT7-E05-MARCH-QUEUE` | 主持彩排、证书核验、毕业照信息采集和复核窗口同时挤压。 |
| `ACT7-E06-THESIS-REVISION` | 改稿和彩排撞期，决定帮周屿稳场还是让他自己发修改版。 |
| `ACT7-E07-DEFENSE` | 答辩门口和活动现场撞期，周屿赶来后能不能停住玩笑。 |
| `ACT7-E08-GRAD-PHOTO` | 同框和公开照片不再等同和解；周屿活动照也需要授权。 |
| `ACT7-E09-DORM-CLEAR` | 清寝时处理台卡、糖盒、活动布袋和公共桌旧物。 |
| `ACT7-E10-LAST-MEAL` | 最后一顿饭检验请客能不能不再替代道歉。 |
| `ACT7-E11-LEAVING-PAPERS` | 离校手续、活动证明和临时协助署名收口。 |
| `ACT7-E12-STATION-AFTER` | 武生院站后输出低频联系、半句道歉、体面淡化或遗憾。 |

---

## `ACT7-E01-PRE-REGISTER` 毕业去向预登记

| 字段 | 值 |
|---|---|
| `previous_event` | `null` |
| `next_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `main_location` | B204 / 主持队群消息 / 青枫居 4XX |
| `scene_function` | 确认周屿的个人去向不能被活动联络关系覆盖。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 入场 | `ACT7-E01-ZHOU-P01` | B204 预登记表发下来，周屿手里还夹着主持队工作证，手机上秦越催活动联系人确认。 | A. 先核个人手机号；B. 先看活动联系人栏。 | A：`zhou_contact_scope_checked = true`；B：`activity_link +1`, `qinyue_pressure +1`。 |
| 联系方式 | `ACT7-E01-ZHOU-P02` | 周屿想把“活动联系我也行”顺手写进备注，像把毕业也讲成排班。 | A. 备注只写个人可达；B. 写“活动协助另表”。 | A：`public_boundary +1`；B：`zhou_activity_signature_scope = separate_sheet`。 |
| 去向待定 | `ACT7-E01-ZHOU-P03` | 去向栏不能空，周屿说“哪里缺人去哪”，辅导员要求写待定也要复核。 | A. 写待定并接受复核；B. 写活动方向但标注未定。 | A：`graduation_direction_status = pending_with_review`；B：`public_smooth +1`, `face_debt +1`。 |
| 本人确认 | `ACT7-E01-ZHOU-P04` | 林亦舟把自己的表压住，没替周屿填；周屿笑了一下，说“行，别显得我没人找”。 | A. 各自签字；B. 帮他看备注是否太满。 | A：`pre_register_boundary_checked = true`；B：`zhou_trust +1`, `proxy_risk +1`。 |

核心选择窗：`ACT7-E01-ZHOU-CHOICE-01`，位于 `ACT7-E01-ZHOU-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E01-ZHOU-C01-A` | 联系人分开写 | `zhou_contact_scope_checked = true`、`pre_register_boundary_checked = true`、`public_boundary +1`。 |
| `ACT7-E01-ZHOU-C01-B` | 活动备注另表 | `zhou_activity_signature_scope = separate_sheet`、`activity_link +1`、`qinyue_pressure +1`。 |

完成条件：`zhou_contact_scope_checked`、`pre_register_boundary_checked`、`graduation_direction_status`。

---

## `ACT7-E02-PUBLIC-SCOPE` 公开范围确认

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E01-PRE-REGISTER` |
| `next_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `main_location` | 西园餐厅 / 主题材料群 / 活动素材盘 |
| `scene_function` | 确认周屿的主持素材、玩笑片段和私人停顿不能默认公开。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 模板更新 | `ACT7-E02-ZHOU-P01` | 主题材料模板要求写公开范围，秦越顺手把周屿主持片段列进候选素材。 | A. 标成仅留存；B. 先放进候选。 | A：`public_boundary +1`；B：`public_smooth +1`。 |
| 停顿片段 | `ACT7-E02-ZHOU-P02` | 片段里周屿有半秒停顿，后面用玩笑盖过去；周屿说“剪掉就行”。 | A. 保留停顿但不公开；B. 剪成顺滑版。 | A：`zhou_trust +1`, `public_boundary +1`；B：`joke_defense +1`, `old_debt +1`。 |
| 本人确认 | `ACT7-E02-ZHOU-P03` | 林亦舟把“谁能公开谁确认”写进表，周屿不太舒服，但没抢笔。 | A. 让周屿自己写范围；B. 林亦舟先替他列选项。 | A：`public_scope_boundary_checked = true`；B：`proxy_risk +1`。 |
| 不公开有效 | `ACT7-E02-ZHOU-P04` | 辅导员确认“不公开”不影响参与毕业活动，周屿把串词纸折成更小一块。 | A. 提交仅留存；B. 暂放空模板。 | A：`public_consent_checked = true`；B：`polite_distance +1`。 |

核心选择窗：`ACT7-E02-ZHOU-CHOICE-01`，位于 `ACT7-E02-ZHOU-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E02-ZHOU-C01-A` | 停顿只留存 | `public_boundary +2`、`zhou_trust +1`、`public_scope = archive_only`。 |
| `ACT7-E02-ZHOU-C01-B` | 剪成顺滑版 | `public_smooth +2`、`joke_defense +1`、`face_debt +1`。 |

完成条件：`public_consent_checked`、`public_scope_boundary_checked`、`zhou_activity_signature_scope`。

---

## `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `next_event` | `ACT7-E04-THESIS-TOPIC` |
| `main_location` | B204 主题材料会 / 青枫居 4XX 公共桌 |
| `scene_function` | 把最后一个新年写成热闹退场后的不公开权。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 入场 | `ACT7-E03-ZHOU-P01` | 周屿刚从主持队过来，手里有串词纸，纸角被汗浸软。 | A. 让他带串词纸上桌；B. 只带空白目录。 | A：`zhou_visibility +1`；B：`public_boundary +1`。 |
| 核验 | `ACT7-E03-ZHOU-P02` | 有人问能不能讲一段“主持人成长故事”，周屿下意识想开玩笑。 | A. 接住玩笑但不扩写；B. 提醒他可不讲。 | A：`zhou_warmth +1`；B：`zhou_trust +1`。 |
| 旧物 | `ACT7-E03-ZHOU-P03` | 糖盒和串词纸并排，热闹物件忽然像一张不太好看的证据。 | A. 糖盒只留存；B. 串词纸进活动材料。 | A：`public_boundary +1`；B：`public_smooth +1`。 |
| 回声 | `ACT7-E03-ZHOU-P04` | 周屿把糖递出去又收回，最后只在确认表写“灯光照可用”。 | A. 留公共素材；B. 留私人空白。 | A：`activity_link +1`；B：`zhou_half_apology_seen` 倾向。 |

核心选择窗：`ACT7-E03-ZHOU-CHOICE-01`，位于 `ACT7-E03-ZHOU-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E03-ZHOU-C01-A` | 接住玩笑但不扩写 | `public_smooth +1`、`zhou_trust +1`、`joke_defense` 不下降。 |
| `ACT7-E03-ZHOU-C01-B` | 提醒他可以不讲 | `public_boundary +1`、`joke_defense -1`、`zhou_trust +1`。 |

完成条件：`opening_contrast_seen`、`public_scope`、`story_consent`。

---

## `ACT7-E04-THESIS-TOPIC` 开题 / 毕业设计方向

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `next_event` | `ACT7-E05-MARCH-QUEUE` |
| `main_location` | C407 门口 / B204 第二轮复核会 / 活动素材盘 |
| `scene_function` | 把毕业设计方向和周屿活动素材拆开，确认谁能签、谁不能被写进课题。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 导师组名单 | `ACT7-E04-ZHOU-P01` | 周屿指着校园活动信息展示方向，说“你写这个不是正好？” | A. 自己问导师组；B. 先听周屿建议。 | A：`advisor_group_checked = true`；B：`activity_link +1`。 |
| 三张表 | `ACT7-E04-ZHOU-P02` | 去向预登记、毕业设计方向初表和导师组意向表叠在一起，活动素材盘图标还亮着。 | A. 方向待定并签名；B. 填活动信息展示。 | A：`topic_status = pending_with_reason`；B：`project_stability +1`, `qinyue_pressure +1`。 |
| 四人分流 | `ACT7-E04-ZHOU-P03` | 周屿填主持活动管理相关，唐骁看格式，陆沉只划掉无关来源，林亦舟没有替任何人写方向。 | A. 只签自己的表；B. 帮周屿看表述。 | A：`topic_boundary_checked = true`；B：`proxy_risk +1`。 |
| 邮件回执 | `ACT7-E04-ZHOU-P04` | 陈老师回邮件让林亦舟先说明自己的数据来源，周屿发“别把我写太漂亮”。 | A. 保存邮件回执；B. 把这句发给周屿确认。 | A：`topic_review_time = "周三 C407"`；B：`zhou_trust +1`, `public_boundary +1`。 |

核心选择窗：`ACT7-E04-ZHOU-CHOICE-01`，位于 `ACT7-E04-ZHOU-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E04-ZHOU-C01-A` | 待定并本人签字 | `thesis_topic_form_seen = true`、`topic_self_signed = true`、`topic_boundary_checked = true`。 |
| `ACT7-E04-ZHOU-C01-B` | 活动方向但先复核 | `thesis_topic_form_seen = true`、`project_stability +1`、`qinyue_pressure +1`、`topic_self_signed = true`。 |

完成条件：`thesis_topic_form_seen`、`topic_self_signed`、`topic_boundary_checked`。

---

## `ACT7-E05-MARCH-QUEUE` 三四月毕业事项排队

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E04-THESIS-TOPIC` |
| `next_event` | `ACT7-E06-THESIS-REVISION` |
| `main_location` | B204 / 明德楼学工窗口 / 主持彩排后台 / 晨光体育场通知 |
| `scene_function` | 把主持彩排、证书核验、毕业照信息采集和开题复核压到同一时间段。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 事项预排 | `ACT7-E05-ZHOU-P01` | 三四月事项预排贴出来，周屿彩排、证书核验、毕业照信息采集撞在同一周。 | A. 先处理自己的复核；B. 帮周屿看彩排空档。 | A：`march_queue_seen = true`；B：`activity_link +1`, `time_debt +1`。 |
| 窗口挤压 | `ACT7-E05-ZHOU-P02` | 明德楼窗口排队，秦越催主持队名单，周屿说“你先去，我能编”。 | A. 只转达窗口规则；B. 帮他问补交口径。 | A：`march_boundary_checked = true`；B：`qinyue_pressure +1`, `proxy_risk +1`。 |
| 开题红批前置 | `ACT7-E05-ZHOU-P03` | 陈老师要求十点前改数据来源，周屿的彩排消息同时弹出来。 | A. 自己改数据来源；B. 先问周屿活动数据口径。 | A：`project_stability +1`；B：`zhou_trust +1`, `time_debt +1`。 |
| 缺席不补拍 | `ACT7-E05-ZHOU-P04` | 毕业照信息采集写着缺席不补拍，周屿说他可以“主持完冲过去”。 | A. 要求本人确认批次；B. 先给他占消息提醒。 | A：`grad_photo_info_seen = true`；B：`face_debt +1`。 |

核心选择窗：`ACT7-E05-ZHOU-CHOICE-01`，位于 `ACT7-E05-ZHOU-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E05-ZHOU-C01-A` | 只转达规则，不代跑 | `march_queue_seen = true`、`march_boundary_checked = true`、`public_boundary +1`。 |
| `ACT7-E05-ZHOU-C01-B` | 现场协助但本人确认 | `march_queue_seen = true`、`zhou_trust +1`、`time_debt +1`、`qinyue_pressure +1`。 |

完成条件：`march_queue_seen`、`grad_photo_info_seen`、`march_boundary_checked`。

---

## `ACT7-E06-THESIS-REVISION` 改论文 / 改毕业设计

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E05-MARCH-QUEUE` |
| `next_event` | `ACT7-E07-DEFENSE` |
| `main_location` | C407 / 九龙壁后台 / 4XX 公共桌 |
| `scene_function` | 检验周屿的临场口径能不能只作为提醒，而不是替林亦舟改稿。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 红批 | `ACT7-E06-ZHOU-P01` | 导师要求把“活动效果”改成可验证的展示逻辑，周屿那边彩排同时催人。 | A. 先改自己的摘要；B. 先帮周屿看口径。 | A：`project_stability +1`；B：`zhou_trust +1`, `time_debt +1`。 |
| 给谁看 | `ACT7-E06-ZHOU-P02` | 周屿发来一句“你这段像主持串词”，玩笑背后是他也赶。 | A. 接住建议但不让他代写；B. 让他帮润色整段。 | A：`public_boundary +1`；B：`proxy_risk +1`。 |
| 改稿 | `ACT7-E06-ZHOU-P03` | 九龙壁后台和 C407 修改稿同时开着，热闹不等于余裕。 | A. 让周屿去彩排；B. 请他多留十分钟。 | A：`zhou_visibility +1`；B：`missed_chance +1`。 |
| 提交 | `ACT7-E06-ZHOU-P04` | 修改版提交后，周屿只回“别写太漂亮”，像玩笑也像提醒。 | A. 留下这句作答辩前回声；B. 删掉私人痕迹。 | A：`zhou_half_apology_seen` 倾向；B：`public_boundary +1`。 |

核心选择窗：`ACT7-E06-ZHOU-CHOICE-01`，位于 `ACT7-E06-ZHOU-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E06-ZHOU-C01-A` | 只接一句口径提醒 | `thesis_boundary_checked = true`、`public_boundary +1`、`zhou_trust +1`。 |
| `ACT7-E06-ZHOU-C01-B` | 让周屿多看十分钟 | `time_debt +1`、`proxy_risk +1`、`activity_link +1`。 |

完成条件：`thesis_revision_version`、`thesis_boundary_checked`、`revision_submitted_before_deadline`。

---

## `ACT7-E07-DEFENSE` 答辩 / 答辩以后

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E06-THESIS-REVISION` |
| `next_event` | `ACT7-E08-GRAD-PHOTO` |
| `main_location` | C407 答辩门口 / 活动现场后台 / 打印店 |
| `scene_function` | 检验周屿能不能从活动现场赶来，并在门口停住玩笑。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 顺序表 | `ACT7-E07-ZHOU-P01` | 林亦舟顺序靠后，周屿那边活动收尾同时催归还工作证。 | A. 让周屿先处理活动；B. 发消息问他能不能来。 | A：`activity_link +1`；B：`zhou_trust +1`, `time_debt +1`。 |
| 门口 | `ACT7-E07-ZHOU-P02` | 周屿可能从活动现场赶来，想逗一句又停住。 | A. 接住他的停顿；B. 用玩笑盖过去。 | A：`say_clear +1`；B：`joke_defense +1`。 |
| 补交 | `ACT7-E07-ZHOU-P03` | 答辩后要补签活动数据来源，周屿知道口径但不能替他写。 | A. 自己补来源；B. 请周屿帮看一句是否太漂亮。 | A：`public_boundary +1`；B：`proxy_risk +1`。 |
| 回声 | `ACT7-E07-ZHOU-P04` | 周屿发“别写我等过你”，像玩笑也像真的。 | A. 留下这句进入饭局回声；B. 删掉私人痕迹。 | A：`zhou_half_apology_seen = true`；B：`zhou_final_contact_scope = low_frequency`。 |

核心选择窗：`ACT7-E07-ZHOU-CHOICE-01`，位于 `ACT7-E07-ZHOU-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E07-ZHOU-C01-A` | 接住停顿 | `defense_boundary_checked = true`、`zhou_half_apology_seen = true`、`say_clear +1`。 |
| `ACT7-E07-ZHOU-C01-B` | 玩笑盖过去 | `defense_boundary_checked = true`、`joke_defense +1`、`public_smooth +1`。 |

完成条件：`defense_order_seen`、`defense_boundary_checked`、`defense_message_echo`。

---

## `ACT7-E08-GRAD-PHOTO` 毕业照 / 影像授权

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 晨光体育场北侧看台 / 活动照片共享盘 / 4XX 群 |
| `scene_function` | 检验同框资格和活动照片授权，确认毕业照不是和解证明。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 批次表 | `ACT7-E08-ZHOU-P01` | 周屿主持彩排点名和寝室合照批次相邻，名单上林亦舟仍被写在活动协助栏。 | A. 先核寝室合照；B. 先核活动协助照。 | A：`photo_boundary_checked = true`；B：`activity_link +1`。 |
| 错过第三组 | `ACT7-E08-ZHOU-P02` | 周屿从彩排点赶来，手里工作证还没摘，第三组已经拍完。 | A. 接受缺席不补；B. 等最后一张补拍。 | A：`polite_distance +1`；B：`time_debt +1`, `zhou_trust +1`。 |
| 预览缩略图 | `ACT7-E08-ZHOU-P03` | 活动照比寝室照更顺，周屿说“这张能用”，林亦舟看见停顿被裁掉。 | A. 标注仅活动留存；B. 允许毕业材料使用。 | A：`public_boundary +1`；B：`public_smooth +1`。 |
| 授权确认 | `ACT7-E08-ZHOU-P04` | 周屿自己勾了“仅留存”，又把笔推给林亦舟，让他勾自己的。 | A. 各自确认；B. 互相核一遍。 | A：`photo_self_confirmed = true`；B：`zhou_trust +1`, `proxy_risk +1`。 |

核心选择窗：`ACT7-E08-ZHOU-CHOICE-01`，位于 `ACT7-E08-ZHOU-P03` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-ZHOU-C01-A` | 活动照仅留存 | `photo_boundary_checked = true`、`public_boundary +1`、`joke_defense -1`。 |
| `ACT7-E08-ZHOU-C01-B` | 允许活动材料使用 | `photo_boundary_checked = true`、`public_smooth +1`、`activity_link +1`。 |

完成条件：`grad_photo_info_seen`、`photo_boundary_checked`、`photo_self_confirmed`。

---

## `ACT7-E09-DORM-CLEAR` 清寝 / 旧物处理

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居 4XX / 宿管窗口 / 活动布袋 |
| `scene_function` | 处理台卡、糖盒、活动布袋和公共桌旧物，确认谁能留、谁不能替谁丢。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 清单入场 | `ACT7-E09-ZHOU-P01` | 清寝共享清单跳出“周屿彩排物料未归还”，公共桌下还有一只活动布袋。 | A. 先列自己的物品；B. 单列活动布袋。 | A：`clearance_boundary_checked = true`；B：`shared_item_owner_checked = true`。 |
| 旧物归属 | `ACT7-E09-ZHOU-P02` | 糖盒、串词纸、没用完的胸牌贴在一起，周屿说“丢了也行”。 | A. 让他自己勾选；B. 替他装进布袋。 | A：`public_boundary +1`；B：`face_debt +1`。 |
| 宿管窗口 | `ACT7-E09-ZHOU-P03` | 宿管阿姨只看清单不问故事，周屿第一次没把气氛逗起来。 | A. 只交本人确认；B. 顺手补活动物料说明。 | A：`clearance_boundary_checked = true`；B：`qinyue_pressure +1`。 |
| 公共桌空位 | `ACT7-E09-ZHOU-P04` | 公共桌空出来，活动布袋被周屿挂到自己椅背，没再放到桌中央。 | A. 不追问；B. 问他要不要留一张台卡。 | A：`polite_distance +1`；B：`zhou_half_apology_seen` 倾向。 |

核心选择窗：`ACT7-E09-ZHOU-CHOICE-01`，位于 `ACT7-E09-ZHOU-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-ZHOU-C01-A` | 让周屿自己勾选 | `clearance_boundary_checked = true`、`public_boundary +1`、`face_debt -1`。 |
| `ACT7-E09-ZHOU-C01-B` | 帮他装袋但不替丢 | `shared_item_owner_checked = true`、`zhou_trust +1`、`face_debt +1`。 |

完成条件：`clearance_boundary_checked`、`shared_item_owner_checked`、`dorm_item_confirmed_by_self`。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 东北饺子馆 / 后街 / 班级群 |
| `scene_function` | 检验请客能不能不再替代道歉，饭桌能不能不被热闹盖掉。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 人数确认 | `ACT7-E10-ZHOU-P01` | 周屿在群里说他请饮料，唐骁只回人数，陆沉回“到”。 | A. AA 写清；B. 接受周屿请饮料。 | A：`money_boundary +1`；B：`face_debt +1`。 |
| 到场顺序 | `ACT7-E10-ZHOU-P02` | 周屿迟到两分钟，进门就想说笑，看到空位又停住。 | A. 不替留座；B. 留一个可取消空位。 | A：`public_boundary +1`；B：`dorm_warmth +1`, `time_debt +1`。 |
| 半句旧账 | `ACT7-E10-ZHOU-P03` | 周屿把筷套折了又展开，说“以前有些话吧，挺没劲的。” | A. 接住半句；B. 转成轻松话题。 | A：`zhou_half_apology_seen = true`；B：`public_smooth +1`。 |
| 结账 | `ACT7-E10-ZHOU-P04` | 账单被扫码分摊，周屿没再抢着付，只把一瓶没开的饮料推过来。 | A. 收下但 AA；B. 退回饮料。 | A：`meal_boundary_checked = true`；B：`polite_distance +1`。 |

核心选择窗：`ACT7-E10-ZHOU-CHOICE-01`，位于 `ACT7-E10-ZHOU-P03` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-ZHOU-C01-A` | 接住半句道歉 | `zhou_half_apology_seen = true`、`repair_depth +1`、`face_debt -1`。 |
| `ACT7-E10-ZHOU-C01-B` | 饭桌保持体面 | `public_smooth +1`、`meal_boundary_checked = true`、`old_debt +1`。 |

完成条件：`meal_boundary_checked`、`meal_attendance_locked`、`zhou_half_apology_seen` 或 `polite_distance`。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续 / 证书 / 档案

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 明德楼离校窗口 / 活动证明领取处 / 武生院站动线 |
| `scene_function` | 收束离校手续和活动协助署名，确认周屿线的公开身份不覆盖私人边界。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 离校单 | `ACT7-E11-ZHOU-P01` | 离校单、证书和档案排队，周屿另有一张活动协助证明要盖章。 | A. 先办自己的离校单；B. 陪他去活动证明窗口。 | A：`leaving_boundary_checked = true`；B：`activity_link +1`, `time_debt +1`。 |
| 署名复核 | `ACT7-E11-ZHOU-P02` | 活动证明里林亦舟被写成协助，秦越问是否改成临时协助。 | A. 改成临时协助；B. 保留完整协助。 | A：`zhou_activity_signature_scope = temporary_assist`；B：`public_smooth +1`。 |
| 档案封口 | `ACT7-E11-ZHOU-P03` | 档案袋封口后，周屿说“你看，盖章比人诚实”。 | A. 回他一句具体话；B. 只看封条。 | A：`say_clear +1`；B：`polite_distance +1`。 |
| 证书离场 | `ACT7-E11-ZHOU-P04` | 周屿把工作证从挂绳上摘下来，和毕业证分开放。 | A. 不再帮他收；B. 提醒别落下。 | A：`leaving_boundary_checked = true`；B：`zhou_trust +1`。 |

核心选择窗：`ACT7-E11-ZHOU-CHOICE-01`，位于 `ACT7-E11-ZHOU-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-ZHOU-C01-A` | 改成临时协助 | `zhou_activity_signature_scope = temporary_assist`、`public_boundary +2`、`qinyue_pressure -1`。 |
| `ACT7-E11-ZHOU-C01-B` | 保留完整协助 | `activity_link +1`、`public_smooth +1`、`tang_misread +1`。 |

完成条件：`leaving_boundary_checked`、`certificate_or_archive_seen`、`zhou_activity_signature_scope`。

---

## `ACT7-E12-STATION-AFTER` 武生院站 / 毕业后消息

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `null` |
| `main_location` | 武生院站 / 地铁口 / 4XX 群 / 周屿私聊 |
| `scene_function` | 输出周屿线最终温度：半句道歉、低频联系、体面淡化或迟来遗憾。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 站口短停 | `ACT7-E12-ZHOU-P01` | 武生院站口人流很快，周屿拎着活动布袋，说“别搞得像散伙主持词”。 | A. 让他说完；B. 顺着玩笑过去。 | A：`zhou_half_apology_seen` 倾向；B：`joke_defense +1`。 |
| 布袋交接 | `ACT7-E12-ZHOU-P02` | 布袋里有一张没用上的台卡和一颗没编号的糖，周屿说“这个你别公开”。 | A. 收下仅留存；B. 当场问为什么给。 | A：`public_boundary +1`；B：`say_clear +1`。 |
| 私聊频率 | `ACT7-E12-ZHOU-P03` | 进站前周屿问“以后没事也能发你吧”，声音比平时低。 | A. 说可以，但低频；B. 让他有事再说。 | A：`zhou_final_contact_scope = low_frequency_real`；B：`polite_distance +1`。 |
| 群消息 | `ACT7-E12-ZHOU-P04` | 4XX 群里有人报到站，周屿发了个表情又撤回，改成“到了说一声”。 | A. 回“到了说”；B. 私聊回他半句。 | A：`final_group_state = not_disbanded`；B：`continue_contact` 倾向。 |

核心选择窗：`ACT7-E12-ZHOU-CHOICE-01`，位于 `ACT7-E12-ZHOU-P03` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-ZHOU-C01-A` | 低频但真实联系 | `zhou_final_contact_scope = low_frequency_real`、`continue_contact`、`ending_temperature_locked = true`。 |
| `ACT7-E12-ZHOU-C01-B` | 体面收住 | `polite_distance +1`、`present_but_not_close`、`ending_temperature_locked = true`。 |

完成条件：`station_boundary_checked`、`ending_temperature_locked`、`zhou_final_contact_scope` 或 `polite_distance`。

---

## 结局温度判断

| 结算 ID | 触发倾向 | 文本温度 |
|---|---|---|
| `ZHOU-END-CONTACT` | `zhou_trust` 高、`public_boundary` 高、`tang_misread` 低、`zhou_final_contact_scope = low_frequency_real` | 毕业后低频但真实联系，玩笑少一点。 |
| `ZHOU-END-HALF-APOLOGY` | `zhou_half_apology_seen = true`、`face_debt` 低、`repair_depth` 有积累 | 周屿说出半句道歉，没完全说开，但不再用请客盖住。 |
| `ZHOU-END-POLITE` | `public_smooth` 高、`old_debt` 高、公开材料好看 | 场面体面，旧账淡化但没有真正清掉。 |
| `ZHOU-END-DISTANCE` | `dorm_absence` 高、`tang_misread` 高、`luchen_distance` 高 | 周屿线温度较高，但 4XX 毕业时只剩礼貌同框。 |
| `ZHOU-END-REGRET` | `joke_defense` 高、`public_boundary` 低、`late_regret` 高 | 周屿仍把很多话讲成玩笑，林亦舟到离校才意识到自己也帮他盖过太多。 |

## 后续 JSON 接入建议

正式接入 `R5-ZHOU` 的第七卷结算 JSON 时，建议：

- 以 DEFAULT-4XX 的 12 事件顺序为母结构，不改变事件 ID 顺序。
- 新建或扩展正式 JSON 时使用 `route_id = R5-ZHOU`、`route_pool_id = POOL-R5-ZHOU`、`act7_variant_id = ACT7-ZHOU`。
- 每个事件保留 4 个剧情页和 1 个二方向选择窗口。
- `route_switch_allowed` 全程保持 `false`。
- 必须记录 `zhou_activity_signature_scope`、`zhou_half_apology_seen`、`zhou_final_contact_scope`，用于第七卷最终温度判断。
