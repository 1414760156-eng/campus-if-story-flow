# IF 第七卷 ACT7-TANG 唐骁线事件变体剧情页级细稿

本文用于把 `R5-TANG` / `POOL-R5-TANG` 的第七卷毕业结算拆成 12 个同母事件变体。它不是新增第七卷路线选择，也不是证明唐骁永远正确；它只改变镜头、可操作内容、变量回声和毕业温度。

唐骁线的第七卷核心问题是：流程走完以后，唐骁还能不能说一句不服务流程的话；林亦舟还能不能和他一起把事情做稳，但不变成唐骁的表格执行器。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-TANG` |
| `route_pool_id` | `POOL-R5-TANG` |
| `act7_variant_id` | `ACT7-TANG` |
| `entry_choice` | `P0D_STAND_WITH_TANG` |
| `route_switch_allowed` | `false` |
| `same_mother_event` | `true` |

禁止项：

- 不允许把唐骁线写成“唐骁正确线”。
- 不允许把流程、表格、归档写成自动修复关系的万能工具。
- 不允许让林亦舟成为唐骁的流程执行器或代替其他人确认责任。
- 不允许用毕业手续、答辩通过或材料齐全覆盖周屿误读、陆沉代言风险和宿舍低温。

## 关键变量

| 变量 | 用途 |
|---|---|
| `tang_trust` | 唐骁是否愿意把规则背后的担心交给林亦舟。 |
| `project_stability` | 项目、材料、版本、手续是否稳定推进。 |
| `rule_pressure` | 规则带来的压迫感和定罪感。 |
| `responsibility_clarity` | 责任、授权、提交口径是否清楚。 |
| `fairness_cost` | 公平执行造成的人情损耗。 |
| `emotion_delay` | 情绪被项目和流程延后的程度。 |
| `public_boundary` | 公开材料、署名、权限和共享范围边界。 |
| `zhou_misread` | 周屿对林亦舟偏向唐骁的误读。 |
| `luchen_proxy_risk` | 陆沉是否被表格或他人语言代言。 |
| `dorm_warmth` | 4XX 日常温度是否还保留当面处理空间。 |
| `tang_contact_scope_checked` | 预登记中是否区分个人联系和项目 / 流程联系。 |
| `tang_archive_scope` | 毕业材料、活动材料、项目归档的留存 / 公开范围。 |
| `tang_nonfunctional_line_seen` | 唐骁是否说出一句不服务流程的话。 |
| `tang_final_contact_scope` | 毕业后是否保留低频协作、私聊或体面断开。 |
| `graduation_temperature` | 毕业结算温度：继续协作、非功利表达、体面距离、低温淡化或不再私聊。 |

## 12 事件总表

| 事件 | 唐骁线变体功能 |
|---|---|
| `ACT7-E01-PRE-REGISTER` | 把毕业后联系人、项目联系人和个人联系方式拆开。 |
| `ACT7-E02-PUBLIC-SCOPE` | 把“不公开”写成清楚规则，同时处理被误读成冷的风险。 |
| `ACT7-E03-LAST-NEW-YEAR` | 让最后一个新年落到空白目录、版本表和旧物权限。 |
| `ACT7-E04-THESIS-TOPIC` | 确认毕业设计方向和导师签字，避免唐骁替林亦舟定方向。 |
| `ACT7-E05-MARCH-QUEUE` | 用三四月事项清单制造窗口挤压和人情低温。 |
| `ACT7-E06-THESIS-REVISION` | 版本、格式、红批和截止时间最强，私人话最难。 |
| `ACT7-E07-DEFENSE` | 答辩后补交清单清楚，但一句不服务流程的话更珍贵。 |
| `ACT7-E08-GRAD-PHOTO` | 毕业照同框和影像授权按规则处理，不等于关系回温。 |
| `ACT7-E09-DORM-CLEAR` | 清寝清单和旧物标签检验谁能确认、谁不能被表格代替。 |
| `ACT7-E10-LAST-MEAL` | 最后一顿饭检验分账、留座和实用照看能否多出一点私人温度。 |
| `ACT7-E11-LEAVING-PAPERS` | 离校手续、证书、档案和项目归档共同收口。 |
| `ACT7-E12-STATION-AFTER` | 武生院站后输出低频协作、非功利表达、体面距离或不再私聊。 |

---

## `ACT7-E01-PRE-REGISTER` 毕业去向预登记

| 字段 | 值 |
|---|---|
| `previous_event` | `null` |
| `next_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `main_location` | B204 / C407 共享文档 / 青枫居 4XX |
| `scene_function` | 确认毕业后能否被找到，同时把个人联系和项目联系人拆开。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 入场 | `ACT7-E01-TANG-P01` | B204 发下预登记表，唐骁先看格式，发现“毕业后联系人”一栏不能用项目群替代。 | A. 先核个人手机号；B. 先看项目联系人备注。 | A：`tang_contact_scope_checked = true`；B：`project_stability +1`, `emotion_delay +1`。 |
| 联系范围 | `ACT7-E01-TANG-P02` | 唐骁想把共享文档接收人写清，林亦舟提醒那不是私人联系方式。 | A. 联系方式只写本人；B. 项目接收人另表。 | A：`public_boundary +1`；B：`responsibility_clarity +1`。 |
| 去向复核 | `ACT7-E01-TANG-P03` | 去向栏可写待定但要复核，唐骁把待定旁边标了版本号。 | A. 写待定并接受复核；B. 写方向但注明未确认。 | A：`graduation_direction_status = pending_with_review`；B：`project_stability +1`。 |
| 本人签字 | `ACT7-E01-TANG-P04` | 林亦舟没有让唐骁替他核最后一遍，唐骁把笔推回来，说“你自己签”。 | A. 各自签字；B. 让唐骁只看格式。 | A：`pre_register_boundary_checked = true`；B：`tang_trust +1`, `proxy_risk +1`。 |

核心选择窗：`ACT7-E01-TANG-CHOICE-01`，位于 `ACT7-E01-TANG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E01-TANG-C01-A` | 私人联系方式独立填写 | `tang_contact_scope_checked = true`、`pre_register_boundary_checked = true`、`public_boundary +1`。 |
| `ACT7-E01-TANG-C01-B` | 项目接收人另表 | `responsibility_clarity +1`、`project_stability +1`、`emotion_delay +1`。 |

完成条件：`tang_contact_scope_checked`、`pre_register_boundary_checked`、`graduation_direction_status`。

---

## `ACT7-E02-PUBLIC-SCOPE` 公开范围确认

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E01-PRE-REGISTER` |
| `next_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `main_location` | 西园餐厅 / 主题材料群 / 共享盘权限页 |
| `scene_function` | 把不公开写成清楚规则，同时承受“看起来冷”的误读。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 模板更新 | `ACT7-E02-TANG-P01` | 主题材料模板新增公开范围，唐骁把“班级内部、学院活动、仅留存、不公开”四类排好。 | A. 先按类核范围；B. 先提交空模板。 | A：`responsibility_clarity +1`；B：`public_boundary +1`。 |
| 准确伤人 | `ACT7-E02-TANG-P02` | 唐骁把“未经本人确认不得公开”写得很准，周屿看见后说这像处分格式。 | A. 保留规则但删定罪感；B. 原句不动。 | A：`rule_pressure -1`, `public_boundary +1`；B：`rule_pressure +1`, `zhou_misread +1`。 |
| 本人确认 | `ACT7-E02-TANG-P03` | 林亦舟让每个人自己写范围，唐骁不再把确认表一次性收齐。 | A. 各自确认；B. 唐骁统一汇总。 | A：`public_scope_boundary_checked = true`；B：`project_stability +1`, `proxy_risk +1`。 |
| 不公开有效 | `ACT7-E02-TANG-P04` | 辅导员确认“不公开”有效，唐骁在表格边上补了一句“不影响活动参与”。 | A. 提交不公开目录；B. 只留班级内部。 | A：`public_consent_checked = true`；B：`public_smooth +1`。 |

核心选择窗：`ACT7-E02-TANG-CHOICE-01`，位于 `ACT7-E02-TANG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E02-TANG-C01-A` | 保留规则但删定罪感 | `public_scope_boundary_checked = true`、`responsibility_clarity +1`、`rule_pressure -1`。 |
| `ACT7-E02-TANG-C01-B` | 原句不动，先保证风险最低 | `public_boundary +1`、`rule_pressure +1`、`zhou_misread +1`。 |

完成条件：`public_consent_checked`、`public_scope_boundary_checked`、`tang_archive_scope`。

---

## `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `next_event` | `ACT7-E04-THESIS-TOPIC` |
| `main_location` | B204 主题材料会 / 4XX 公共桌 / 共享盘目录 |
| `scene_function` | 把最后一个新年写成空白目录、版本表和旧物权限的对照。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 入场 | `ACT7-E03-TANG-P01` | 唐骁带来主题材料目录版本表，空白目录旁边多了“确认人”一列。 | A. 保留确认人列；B. 删除确认人列。 | A：`responsibility_clarity +1`；B：`rule_pressure -1`。 |
| 核验 | `ACT7-E03-TANG-P02` | 后排问为什么 4XX 没有故事，唐骁准备按公开范围解释。 | A. 让他说范围；B. 只提交空白确认。 | A：`public_boundary +1`；B：`emotion_delay +1`。 |
| 旧物 | `ACT7-E03-TANG-P03` | 军训手机袋和旧电子确认表并排出现，唐骁第一反应是确认谁能看。 | A. 只留存不公开；B. 写进班级内部。 | A：`public_scope = archive_only`；B：`public_smooth +1`, `old_debt +1`。 |
| 回声 | `ACT7-E03-TANG-P04` | 唐骁把 PDF 归档，又把“无需说明原因”补进备注，像流程也像照看。 | A. 留下备注；B. 删掉私人照看痕迹。 | A：`tang_trust +1`；B：`polite_distance +1`。 |

核心选择窗：`ACT7-E03-TANG-CHOICE-01`，位于 `ACT7-E03-TANG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E03-TANG-C01-A` | 按范围说清，不解释私人原因 | `opening_contrast_seen = true`、`public_boundary +1`、`responsibility_clarity +1`。 |
| `ACT7-E03-TANG-C01-B` | 只交空白确认 | `opening_contrast_seen = true`、`emotion_delay +1`、`polite_distance +1`。 |

完成条件：`opening_contrast_seen`、`public_scope`、`story_consent`。

---

## `ACT7-E04-THESIS-TOPIC` 开题 / 毕业设计方向

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `next_event` | `ACT7-E05-MARCH-QUEUE` |
| `main_location` | C407 门口 / B204 第二轮复核会 / 打印店 |
| `scene_function` | 确认毕业设计方向、导师意向和本人签字，避免唐骁替林亦舟定方向。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 导师组名单 | `ACT7-E04-TANG-P01` | C407 门口贴出导师组名单，唐骁先看截止时间和表格格式。 | A. 自己问导师组；B. 先听唐骁建议。 | A：`advisor_group_checked = true`；B：`project_stability +1`。 |
| 三张表 | `ACT7-E04-TANG-P02` | 去向预登记、毕业设计方向初表、导师组意向确认叠在一起，唐骁把三张表按提交顺序排开。 | A. 方向待定并签名；B. 按唐骁建议先选稳定方向。 | A：`topic_status = pending_with_reason`；B：`project_stability +1`, `emotion_delay +1`。 |
| 四人分流 | `ACT7-E04-TANG-P03` | 唐骁填项目归档和流程稳定方向，周屿看着表格冷笑，陆沉只确认自己的来源。 | A. 只签自己的表；B. 帮唐骁核格式。 | A：`topic_boundary_checked = true`；B：`responsibility_clarity +1`, `proxy_risk +1`。 |
| 邮件回执 | `ACT7-E04-TANG-P04` | 陈老师回复周三 C407 二次确认，唐骁把回执转成待办，林亦舟没有让他替自己解释。 | A. 保存邮件回执；B. 只让唐骁看格式。 | A：`topic_review_time = "周三 C407"`；B：`tang_trust +1`。 |

核心选择窗：`ACT7-E04-TANG-CHOICE-01`，位于 `ACT7-E04-TANG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E04-TANG-C01-A` | 待定并本人签字 | `thesis_topic_form_seen = true`、`topic_self_signed = true`、`topic_boundary_checked = true`。 |
| `ACT7-E04-TANG-C01-B` | 先选稳定方向再复核 | `thesis_topic_form_seen = true`、`project_stability +1`、`emotion_delay +1`、`topic_self_signed = true`。 |

完成条件：`thesis_topic_form_seen`、`topic_self_signed`、`topic_boundary_checked`。

---

## `ACT7-E05-MARCH-QUEUE` 三四月毕业事项排队

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E04-THESIS-TOPIC` |
| `next_event` | `ACT7-E06-THESIS-REVISION` |
| `main_location` | B204 / 明德楼窗口 / C407 / 打印店 |
| `scene_function` | 用三四月事项清单制造窗口挤压，检验流程稳定和宿舍低温代价。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 事项预排 | `ACT7-E05-TANG-P01` | 三四月毕业事项预排贴出来，唐骁把实习证明、证书核验、毕业照信息采集排成清单。 | A. 先处理自己的待复核；B. 跟唐骁一起拆截止。 | A：`march_queue_seen = true`；B：`project_stability +1`, `emotion_delay +1`。 |
| 窗口挤压 | `ACT7-E05-TANG-P02` | 明德楼窗口排队，周屿活动撞期，陆沉证书核验延后，唐骁想按表催。 | A. 只转达窗口规则；B. 逐项催确认。 | A：`march_boundary_checked = true`；B：`rule_pressure +1`, `zhou_misread +1`。 |
| 开题红批前置 | `ACT7-E05-TANG-P03` | 陈老师要求十点前改数据来源，唐骁已经把补正格式列好。 | A. 自己改来源；B. 让唐骁只看格式。 | A：`responsibility_clarity +1`；B：`tang_trust +1`, `proxy_risk +1`。 |
| 缺席不补拍 | `ACT7-E05-TANG-P04` | 毕业照信息采集写着缺席不补拍，唐骁说“这个不能靠补说明”。 | A. 本人确认批次；B. 先替别人做提醒表。 | A：`grad_photo_info_seen = true`；B：`fairness_cost +1`。 |

核心选择窗：`ACT7-E05-TANG-CHOICE-01`，位于 `ACT7-E05-TANG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E05-TANG-C01-A` | 只转达规则，不代催 | `march_queue_seen = true`、`march_boundary_checked = true`、`public_boundary +1`。 |
| `ACT7-E05-TANG-C01-B` | 拆成待办并逐项确认 | `project_stability +1`、`rule_pressure +1`、`fairness_cost +1`。 |

完成条件：`march_queue_seen`、`grad_photo_info_seen`、`march_boundary_checked`。

---

## `ACT7-E06-THESIS-REVISION` 改论文 / 改毕业设计

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E05-MARCH-QUEUE` |
| `next_event` | `ACT7-E07-DEFENSE` |
| `main_location` | C407 / 共享盘 / 打印店 |
| `scene_function` | 检验唐骁的版本和格式能力是否压过私人话。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 红批 | `ACT7-E06-TANG-P01` | 陈老师红批落下，唐骁第一眼看见版本名错了，第二眼才看见林亦舟熬到凌晨。 | A. 先改版本名；B. 先问红批意思。 | A：`project_stability +1`；B：`tang_trust +1`。 |
| 给谁看 | `ACT7-E06-TANG-P02` | 唐骁可以看格式、页码和提交口径，但不能替林亦舟写解释。 | A. 只发格式问题；B. 发整段说明。 | A：`thesis_boundary_checked = true`；B：`proxy_risk +1`。 |
| 改稿 | `ACT7-E06-TANG-P03` | 共享盘里 `thesis_revision_v2_final` 后面又多了一个 `final2`，唐骁没笑，只说别交错。 | A. 自己改内容；B. 请唐骁核最终版。 | A：`responsibility_clarity +1`；B：`project_stability +1`, `emotion_delay +1`。 |
| 提交 | `ACT7-E06-TANG-P04` | 十点前提交成功，唐骁把打印店小票压在键盘边，说“这个别丢”。 | A. 只说谢谢；B. 问他是不是一直等着。 | A：`polite_distance +1`；B：`tang_nonfunctional_line_seen` 倾向。 |

核心选择窗：`ACT7-E06-TANG-CHOICE-01`，位于 `ACT7-E06-TANG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E06-TANG-C01-A` | 只让唐骁核格式 | `thesis_boundary_checked = true`、`responsibility_clarity +1`、`project_stability +1`。 |
| `ACT7-E06-TANG-C01-B` | 追问他为什么等版本 | `tang_trust +1`、`emotion_delay -1`、`time_debt +1`。 |

完成条件：`thesis_revision_version`、`thesis_boundary_checked`、`revision_submitted_before_deadline`。

---

## `ACT7-E07-DEFENSE` 答辩 / 答辩以后

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E06-THESIS-REVISION` |
| `next_event` | `ACT7-E08-GRAD-PHOTO` |
| `main_location` | C407 答辩门口 / 补交窗口 / 共享盘归档页 |
| `scene_function` | 检验唐骁是否只盯补交清单，还是能在答辩后说一句流程外的话。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 顺序表 | `ACT7-E07-TANG-P01` | 答辩顺序表贴出来，唐骁先帮林亦舟确认补交项，没问紧不紧张。 | A. 让他继续核清单；B. 说清单先放一会儿。 | A：`project_stability +1`；B：`tang_trust +1`。 |
| 门口 | `ACT7-E07-TANG-P02` | 林亦舟从 C407 出来，唐骁递来小章位置说明，手里还有多打的一份封面。 | A. 接过封面；B. 问他等了多久。 | A：`defense_boundary_checked = true`；B：`tang_nonfunctional_line_seen` 倾向。 |
| 补交 | `ACT7-E07-TANG-P03` | 答辩后要补签版本说明，唐骁能看出缺口，但不能替他写。 | A. 自己补说明；B. 请唐骁核是否漏项。 | A：`responsibility_clarity +1`；B：`project_stability +1`, `proxy_risk +1`。 |
| 回声 | `ACT7-E07-TANG-P04` | 唐骁发“过了就行”，隔了三分钟又补“你刚才脸色很差”。 | A. 回他真实状态；B. 只回收到。 | A：`tang_nonfunctional_line_seen = true`；B：`emotion_delay +1`。 |

核心选择窗：`ACT7-E07-TANG-CHOICE-01`，位于 `ACT7-E07-TANG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E07-TANG-C01-A` | 接受实用照看 | `defense_boundary_checked = true`、`project_stability +1`、`polite_distance +1`。 |
| `ACT7-E07-TANG-C01-B` | 追问流程外那句 | `defense_boundary_checked = true`、`tang_nonfunctional_line_seen = true`、`repair_depth +1`。 |

完成条件：`defense_order_seen`、`defense_boundary_checked`、`defense_message_echo`。

---

## `ACT7-E08-GRAD-PHOTO` 毕业照 / 影像授权

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 晨光体育场北侧看台 / 影像授权表 / 4XX 群 |
| `scene_function` | 检验同框和公开照片是否按规则处理，同时承认规则不等于亲密恢复。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 批次表 | `ACT7-E08-TANG-P01` | 毕业照批次表发出，唐骁先确认个人照、班级照、寝室合照顺序。 | A. 按批次走；B. 问是否等齐。 | A：`photo_boundary_checked = true`；B：`dorm_warmth +1`, `time_debt +1`。 |
| 错过第三组 | `ACT7-E08-TANG-P02` | 周屿彩排迟到，陆沉交接晚到，唐骁说缺席不补不是威胁，是规则。 | A. 接受缺席不补；B. 留最后一张补拍。 | A：`polite_distance +1`；B：`dorm_warmth +1`。 |
| 预览缩略图 | `ACT7-E08-TANG-P03` | 缩略图里四个人站得齐，唐骁却先看授权范围，没说照片好不好看。 | A. 只留存寝室照；B. 允许班级内部使用。 | A：`public_boundary +1`；B：`public_smooth +1`。 |
| 授权确认 | `ACT7-E08-TANG-P04` | 唐骁自己勾完范围，把表推回来：“你自己勾，别让我替你判断。” | A. 各自确认；B. 请他核一遍。 | A：`photo_self_confirmed = true`；B：`proxy_risk +1`。 |

核心选择窗：`ACT7-E08-TANG-CHOICE-01`，位于 `ACT7-E08-TANG-P03` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-TANG-C01-A` | 照片只留存 | `photo_boundary_checked = true`、`public_boundary +1`、`emotion_delay +1`。 |
| `ACT7-E08-TANG-C01-B` | 班级内部使用 | `photo_boundary_checked = true`、`public_smooth +1`、`responsibility_clarity +1`。 |

完成条件：`grad_photo_info_seen`、`photo_boundary_checked`、`photo_self_confirmed`。

---

## `ACT7-E09-DORM-CLEAR` 清寝 / 旧物处理

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居 4XX / 宿管窗口 / 公共桌 |
| `scene_function` | 用清寝清单、标签和旧物归属检验谁能确认、谁不能被表格代替。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 清单入场 | `ACT7-E09-TANG-P01` | 唐骁把清寝共享清单拆成个人物品、公共物品、待确认物三栏。 | A. 先列自己的物品；B. 先处理公共桌。 | A：`clearance_boundary_checked = true`；B：`responsibility_clarity +1`。 |
| 旧物归属 | `ACT7-E09-TANG-P02` | 未知快递袋、公共 U 盘和旧打印小票都不能靠“没人要”丢掉。 | A. 各自确认；B. 唐骁统一贴标签。 | A：`shared_item_owner_checked = true`；B：`rule_pressure +1`, `fairness_cost +1`。 |
| 宿管窗口 | `ACT7-E09-TANG-P03` | 宿管阿姨只看清单和钥匙，不问谁对谁错，唐骁把“未确认”留到最后。 | A. 留未确认栏；B. 清空所有栏位。 | A：`public_boundary +1`；B：`project_stability +1`, `emotion_delay +1`。 |
| 公共桌空位 | `ACT7-E09-TANG-P04` | 公共桌空出来，唐骁把多打的封面纸放进自己箱子，没有再给别人备份。 | A. 不追问；B. 问他为什么多打一份。 | A：`polite_distance +1`；B：`tang_nonfunctional_line_seen` 倾向。 |

核心选择窗：`ACT7-E09-TANG-CHOICE-01`，位于 `ACT7-E09-TANG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-TANG-C01-A` | 各自确认旧物 | `clearance_boundary_checked = true`、`shared_item_owner_checked = true`、`responsibility_clarity +1`。 |
| `ACT7-E09-TANG-C01-B` | 统一贴标签但不代丢 | `project_stability +1`、`rule_pressure +1`、`fairness_cost +1`。 |

完成条件：`clearance_boundary_checked`、`shared_item_owner_checked`、`dorm_item_confirmed_by_self`。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 东北饺子馆 / 班级群 / 4XX 小群 |
| `scene_function` | 检验分账、留座和实用照看能不能多出一点私人温度。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 人数确认 | `ACT7-E10-TANG-P01` | 最后一顿饭投票截止，唐骁按人数锁座，不替迟到的人占确定位置。 | A. 按人数锁定；B. 留一个可取消空位。 | A：`meal_attendance_locked = true`；B：`dorm_warmth +1`, `time_debt +1`。 |
| 到场顺序 | `ACT7-E10-TANG-P02` | 唐骁先到，菜单旁边压着分账二维码和一张离校手续提醒。 | A. 先点菜；B. 先收起手续提醒。 | A：`project_stability +1`；B：`emotion_delay -1`。 |
| 半句旧账 | `ACT7-E10-TANG-P03` | 饭到一半，唐骁说“有些表我写得太像结论了”，声音不高。 | A. 接住这句；B. 让饭桌保持体面。 | A：`tang_nonfunctional_line_seen = true`；B：`public_smooth +1`。 |
| 结账 | `ACT7-E10-TANG-P04` | 账单 AA，唐骁没有抢着付，只把林亦舟落下的校园卡推过来。 | A. 说谢谢并收下；B. 问他怎么发现的。 | A：`meal_boundary_checked = true`；B：`tang_trust +1`。 |

核心选择窗：`ACT7-E10-TANG-CHOICE-01`，位于 `ACT7-E10-TANG-P03` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-TANG-C01-A` | 接住流程外一句 | `tang_nonfunctional_line_seen = true`、`repair_depth +1`、`emotion_delay -1`。 |
| `ACT7-E10-TANG-C01-B` | 饭桌保持体面 | `meal_boundary_checked = true`、`polite_distance +1`、`emotion_delay +1`。 |

完成条件：`meal_boundary_checked`、`meal_attendance_locked`、`tang_nonfunctional_line_seen` 或 `polite_distance`。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续 / 证书 / 档案

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 明德楼离校窗口 / 证书领取处 / 档案转递窗口 |
| `scene_function` | 收束离校手续、证书、档案和项目归档，确认流程结束不等于关系自动结束。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 离校单 | `ACT7-E11-TANG-P01` | 离校单、证书、档案和寝室钥匙排成四个窗口，唐骁把路线图发给林亦舟。 | A. 先办自己的离校单；B. 跟唐骁一起核流程。 | A：`leaving_boundary_checked = true`；B：`project_stability +1`。 |
| 归档复核 | `ACT7-E11-TANG-P02` | 项目归档接收人、共享盘只读权限和主题材料留存范围需要最后确认。 | A. 锁只读权限；B. 每人保留独立编辑记录。 | A：`tang_archive_scope = read_only_archive`；B：`responsibility_clarity +1`, `dorm_warmth +1`。 |
| 档案封口 | `ACT7-E11-TANG-P03` | 档案袋封口，唐骁说“这个封了就不能补说明了”。 | A. 补最后一条说明；B. 不再补私人话。 | A：`say_clear +1`；B：`polite_distance +1`。 |
| 证书离场 | `ACT7-E11-TANG-P04` | 唐骁把毕业证和多余复印件分开放，递给林亦舟一张备用复印件。 | A. 收下但不让他代管；B. 问他为什么多备。 | A：`leaving_boundary_checked = true`；B：`tang_nonfunctional_line_seen` 倾向。 |

核心选择窗：`ACT7-E11-TANG-CHOICE-01`，位于 `ACT7-E11-TANG-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-TANG-C01-A` | 锁只读归档 | `tang_archive_scope = read_only_archive`、`project_stability +1`、`public_boundary +1`。 |
| `ACT7-E11-TANG-C01-B` | 独立编辑并保留记录 | `responsibility_clarity +1`、`dorm_warmth +1`、`rule_pressure -1`。 |

完成条件：`leaving_boundary_checked`、`certificate_or_archive_seen`、`tang_archive_scope`。

---

## `ACT7-E12-STATION-AFTER` 武生院站 / 毕业后消息

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `null` |
| `main_location` | 武生院站 / 地铁口 / 4XX 群 / 唐骁私聊 |
| `scene_function` | 输出唐骁线最终温度：低频协作、非功利表达、体面距离或不再私聊。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 站口短停 | `ACT7-E12-TANG-P01` | 武生院站口人很多，唐骁看了眼时间，说“五分钟够你进站”。 | A. 按他的时间走；B. 多停一分钟。 | A：`polite_distance +1`；B：`tang_trust +1`, `time_debt +1`。 |
| 备用纸袋 | `ACT7-E12-TANG-P02` | 唐骁递来一只纸袋，里面是证书复印件、打印店小票和一张没写完的提醒。 | A. 收下仅留存；B. 问提醒为什么没写完。 | A：`public_boundary +1`；B：`tang_nonfunctional_line_seen` 倾向。 |
| 私聊频率 | `ACT7-E12-TANG-P03` | 唐骁说“以后材料问题可以发我”，停了一下，又补“不是材料也行”。 | A. 说低频也可以；B. 只说有事再发。 | A：`tang_final_contact_scope = low_frequency_collab`；B：`polite_distance +1`。 |
| 群消息 | `ACT7-E12-TANG-P04` | 4XX 群里有人报到站，唐骁发“以后有事群里说”，私聊却多出一句“到站回一下”。 | A. 私聊回到站；B. 只在群里回复。 | A：`continue_contact` 倾向；B：`final_group_state = not_disbanded`。 |

核心选择窗：`ACT7-E12-TANG-CHOICE-01`，位于 `ACT7-E12-TANG-P03` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-TANG-C01-A` | 低频协作也保留私人入口 | `tang_final_contact_scope = low_frequency_collab`、`continue_contact`、`ending_temperature_locked = true`。 |
| `ACT7-E12-TANG-C01-B` | 体面断开，不再私聊 | `polite_distance +1`、`emotion_delay +1`、`ending_temperature_locked = true`。 |

完成条件：`station_boundary_checked`、`ending_temperature_locked`、`tang_final_contact_scope` 或 `polite_distance`。

---

## 结局温度判断

| 结算 ID | 触发倾向 | 文本温度 |
|---|---|---|
| `TANG-END-COLLAB` | `tang_trust` 高、`project_stability` 高、`emotion_delay` 低、`tang_final_contact_scope = low_frequency_collab` | 毕业后仍能低频协作，关系不热闹但可靠。 |
| `TANG-END-NONFUNCTIONAL` | `tang_nonfunctional_line_seen = true`、`responsibility_clarity` 高、`fairness_cost` 不高 | 唐骁说出一句不服务流程的话，表达笨但真实。 |
| `TANG-END-POLITE` | `project_stability` 高、`emotion_delay` 高、`dorm_warmth` 低 | 所有材料都对，关系停在体面距离。 |
| `TANG-END-LOWTEMP` | `rule_pressure` 高、`zhou_misread` 高、`luchen_proxy_risk` 高 | 专业温度高，但 4XX 毕业时只剩礼貌同框。 |
| `TANG-END-NOCHAT` | `emotion_delay` 高、`repair_depth` 低、`graduation_temperature` 低 | 流程走完后不再私聊，像什么都没坏，也像什么都没留下。 |

## 后续 JSON 接入建议

正式接入 `R5-TANG` 的第七卷结算 JSON 时，建议：

- 以 `R5-ZHOU` 正式 JSON 的 Act7 数据结构为样板，但不复用周屿线文本。
- 使用 `route_id = R5-TANG`、`route_pool_id = POOL-R5-TANG`、`act7_variant_id = ACT7-TANG`。
- 每个事件保留 4 个剧情页和 1 个二方向选择窗口。
- `route_switch_allowed` 全程保持 `false`。
- 必须记录 `tang_archive_scope`、`tang_nonfunctional_line_seen`、`tang_final_contact_scope`，用于区分继续协作、非功利表达、体面距离、低温淡化或不再私聊。
