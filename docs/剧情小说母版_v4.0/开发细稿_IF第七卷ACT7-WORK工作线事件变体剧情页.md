# IF 第七卷 ACT7-WORK 工作线事件变体剧情页级细稿

本文用于把 `R4-WORK` / `POOL-R4-WORK` 的第七卷毕业结算拆成 12 个同母事件变体。它不是陆沉勤工线，也不是苦情励志线；它只改变第七卷同一组毕业流程中的镜头、选择、变量回声和结局温度。

工作线的第七卷核心问题是：当林亦舟已经习惯把钱、工时、证明、请假、交通和疲惫放在前面，他能不能在毕业去向、公开材料、开题、改稿、答辩、毕业照、清寝、饭局和离校手续里，把现实压力说成具体事实，而不是只留下“我在忙”。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R4-WORK` |
| `route_pool_id` | `POOL-R4-WORK` |
| `act7_variant_id` | `ACT7-WORK` |
| `entry_choice` | `P0B_WORK_TAKE_SHIFT` |
| `route_switch_allowed` | `false` |
| `same_mother_event` | `true` |

禁止项：

- 不允许把工作线写成苦情卖惨线；钱压必须落在饭卡、工资、打印、交通、证明、AA 和工时上。
- 不允许把工作线写成励志开挂线；能独自办流程不等于关系自动变好。
- 不允许把工作线写成陆沉线；陆沉只能作为现实压力软回声出现，不能默认陪跑或开 `R5-LUCHEN`。
- 不允许把兼职场景写成 5X 新圈子入口；快递站、打印店、勤工负责人只能提供现实回声。
- 不允许用“忙”替代剧情页；每次缺席都必须有具体班次、证明、窗口、工资或疲惫成本。

## 关键变量

| 变量 | 用途 |
|---|---|
| `money_pressure` | 饭卡、打印、交通、工资、AA 和生活费压力。 |
| `work_shift` | 排班、换班、临时加班和请假次数。 |
| `family_signal` | 父母转账、家庭备注、联系人和生活用品暗线。 |
| `time_debt` | 因排班、交通、证明、返工、夜班产生的时间欠账。 |
| `dorm_absence` | 因工作和现实任务错过 4XX 当面现场的累计。 |
| `missed_chance` | 错过饭局、补话、毕业照、材料会或亲密入口的次数。 |
| `reality_bond` | 与快递站、打印店、勤工负责人等现实关系的熟悉度。 |
| `dorm_misread` | 4XX 对林亦舟缺席、节省和沉默的误读。 |
| `energy_low` | 夜班、低烧、疲惫和身体成本。 |
| `public_boundary` | 工资截图、请假说明、证明材料、代交代签的公开边界。 |
| `dorm_warmth` | 4XX 是否仍愿意给他留公共桌、饭局和当面解释入口。 |
| `repair_depth` | 林亦舟是否把钱压、家里和缺席说成具体事实。 |
| `old_debt` | 未解释旧账是否拖到毕业。 |
| `proxy_risk` | 带话、代交、代签、凑单和替人确认的越界风险。 |
| `project_stability` | 排班和证明是否影响 C407、毕业设计和公共材料协作。 |
| `dorm_trust` | 毕业后是否仍保留低频真实联系。 |
| `shift_boundary_checked` | 是否说明排班、请假和毕业窗口的优先级。 |
| `work_public_scope` | 工资截图、请假说明和证明材料的可见范围。 |
| `work_certificate_status` | 勤工 / 兼职证明、工资确认或实习材料状态。 |
| `wage_confirmed` | 工资、补贴、退余额或费用是否确认。 |
| `work_private_entry` | 工时表、工资确认、旧饭卡、打印小票或夜班记录等私人入口。 |
| `work_reply_after_meal` | 最后一顿饭后是否同时回应工作确认和 4XX 离校安排。 |
| `work_final_contact_scope` | 最终联系范围：低频真实联系、体面距离、错过饭局、家庭压力说开或空白离校。 |
| `graduation_temperature` | 毕业结算温度：独立处理、体面距离、错过、家庭说开或低频联系。 |

## 12 事件总表

| 事件 | 工作线变体功能 |
|---|---|
| `ACT7-E01-PRE-REGISTER` | 毕业去向预登记把工时、联系方式和家庭备注绑定，确认毕业后能不能被找到。 |
| `ACT7-E02-PUBLIC-SCOPE` | 工资截图、请假说明和证明材料的公开范围决定“现实压力”能不能被说清。 |
| `ACT7-E03-LAST-NEW-YEAR` | 最后一个新年可能因班次缺席，只留下工时表、旧饭卡、打印小票和班后回声。 |
| `ACT7-E04-THESIS-TOPIC` | 开题方向和排班半径撞在一起，工作经历不能替毕业设计背书。 |
| `ACT7-E05-MARCH-QUEUE` | 三四月事项与实习证明、工资确认、打印窗口和班次互相挤压。 |
| `ACT7-E06-THESIS-REVISION` | 改稿在夜班后、打印店和快递站间隙完成，独立但疲惫。 |
| `ACT7-E07-DEFENSE` | 答辩后还要补交、赶班或领工资确认，情绪被现实压短。 |
| `ACT7-E08-GRAD-PHOTO` | 毕业照和排班撞期，检验能不能提前请假、说明授权和到场边界。 |
| `ACT7-E09-DORM-CLEAR` | 清寝旧物里出现工时表、饭卡、打印小票和未报销单，公共物品仍要确认。 |
| `ACT7-E10-LAST-MEAL` | 最后一顿饭和班次 / 工资确认撞期，检验他能不能为一顿饭请一次假。 |
| `ACT7-E11-LEAVING-PAPERS` | 离校手续把工资、档案、联系人、退余额和第一周生活安排压成具体流程。 |
| `ACT7-E12-STATION-AFTER` | 武生院站后输出独立处理、体面距离、错过饭局、家庭说开或低频联系。 |

---

## `ACT7-E01-PRE-REGISTER` 毕业去向预登记

| 字段 | 值 |
|---|---|
| `previous_event` | `null` |
| `next_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `main_location` | B204 / 教务系统 / 快递站排班表 |
| `scene_function` | 预登记把工时、联系方式、毕业去向和家庭备注绑定，确认林亦舟毕业后还能不能被找到。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 表格与排班 | `ACT7-E01-WORK-P01` | B204 发下毕业去向预登记，林亦舟手机里同时亮着快递站排班表和工资确认群。 | A. 先填学校要求；B. 先看排班能不能请假。 | A：`pre_register_boundary_checked = true`；B：`work_shift +1`, `time_debt +1`。 |
| 联系方式 | `ACT7-E01-WORK-P02` | 手机号、邮箱、紧急联系人都要核准。勤工负责人说毕业后工资确认也要用这个号码。 | A. 把联系方式和工时说明写清；B. 先填待定，等工资确认。 | A：`public_boundary +1`, `shift_boundary_checked = true`；B：`time_debt +1`, `dorm_misread +1`。 |
| 家庭备注 | `ACT7-E01-WORK-P03` | 家庭情况备注栏很短，短到放不下“这周晚点”、生活费、兼职和第一周住宿。 | A. 写最低真实说明；B. 只写无特殊情况。 | A：`family_signal +1`, `repair_depth +1`；B：`old_debt +1`, `public_boundary -1`。 |
| 提交以后 | `ACT7-E01-WORK-P04` | 表格提交成功后，4XX 群问谁到时候一起办离校，快递站群问谁能顶周五晚班。 | A. 先回 4XX 最低事实；B. 先接晚班。 | A：`graduation_direction_status = submitted`, `dorm_trust +1`；B：`graduation_direction_status = submitted`, `work_shift +1`, `dorm_absence +1`。 |

核心选择窗：`ACT7-E01-WORK-CHOICE-01`，位于 `ACT7-E01-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E01-WORK-C01-A` | 把联系方式和工时说明写清 | `pre_register_boundary_checked = true`、`shift_boundary_checked = true`、`public_boundary +1`。 |
| `ACT7-E01-WORK-C01-B` | 先填待定，等工资确认 | `time_debt +1`、`dorm_misread +1`、`graduation_temperature = polite_distance`。 |

完成条件：`pre_register_boundary_checked`、`graduation_direction_status`、`shift_boundary_checked`。

---

## `ACT7-E02-PUBLIC-SCOPE` 公开范围确认

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E01-PRE-REGISTER` |
| `next_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `main_location` | 班级材料群 / 工资截图 / 请假说明页 |
| `scene_function` | 工资截图、请假说明和证明材料的公开范围决定现实压力能不能被说清，而不是被误读成冷淡。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 材料公告 | `ACT7-E02-WORK-P01` | 班级材料群要求确认毕业材料公开范围，林亦舟手里有工资截图和请假说明。 | A. 先读授权要求；B. 先裁掉截图里的金额。 | A：`public_boundary +1`；B：`money_pressure +1`, `family_signal +1`。 |
| 现实可见 | `ACT7-E02-WORK-P02` | 公开不是把家里摊开，也不是继续沉默。他需要说明哪些能给学院看，哪些只留给自己。 | A. 写清证明用途和可见范围；B. 只说兼职，不写细节。 | A：`public_scope_boundary_checked = true`, `work_public_scope = limited_proof`；B：`dorm_misread +1`, `public_boundary -1`。 |
| 4XX 误读 | `ACT7-E02-WORK-P03` | 周屿问他怎么又不去材料会，唐骁只问请假条有没有按格式，陆沉提醒别让别人代交。 | A. 说最低事实；B. 用“我有事”带过。 | A：`repair_depth +1`, `dorm_trust +1`；B：`dorm_misread +1`, `old_debt +1`。 |
| 回执留存 | `ACT7-E02-WORK-P04` | 回执生成，截图里金额被遮住，只留下用途、时间和本人确认。 | A. 保存回执并发给负责人；B. 只存自己手机里。 | A：`public_consent_checked = true`, `reality_bond +1`；B：`work_private_entry +1`。 |

核心选择窗：`ACT7-E02-WORK-CHOICE-01`，位于 `ACT7-E02-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E02-WORK-C01-A` | 写清证明用途和可见范围 | `public_scope_boundary_checked = true`、`public_boundary +1`、`repair_depth +1`。 |
| `ACT7-E02-WORK-C01-B` | 只说兼职，不写细节 | `dorm_misread +1`、`public_boundary -1`、`old_debt +1`。 |

完成条件：`public_scope_boundary_checked`、`public_consent_checked`、`work_public_scope`。

---

## `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `next_event` | `ACT7-E04-THESIS-TOPIC` |
| `main_location` | 青枫居 4XX / 快递站后门 / 共享盘目录 |
| `scene_function` | 最后一个新年可能因班次缺席，只留下工时表、旧饭卡、打印小票和班后回声。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 目录已开 | `ACT7-E03-WORK-P01` | 共享盘里出现“最后一个新年”目录，林亦舟打开时，自己的素材旁边夹着一张夜班排班截图。 | A. 打开旧物目录；B. 先看快递站群。 | A：`opening_contrast_seen = true`；B：`work_shift +1`, `dorm_absence +1`。 |
| 班后回声 | `ACT7-E03-WORK-P02` | 他没赶上最热闹的一段，只在快递站后门听见手机里传来 4XX 的笑声尾巴。 | A. 班后补一句现实说明；B. 只发“你们继续”。 | A：`repair_depth +1`, `dorm_misread -1`；B：`missed_chance +1`, `dorm_absence +1`。 |
| 旧物对照 | `ACT7-E03-WORK-P03` | 公共桌上有旧饭卡、打印小票和一张被压弯的工时表，像把四年切成了很薄的时段。 | A. 标注来源和用途；B. 直接扔掉。 | A：`old_object_scope_checked = true`, `work_private_entry +1`；B：`missed_chance +1`。 |
| 低频留存 | `ACT7-E03-WORK-P04` | 4XX 问素材交不交，勤工负责人问他工资表有没有核对。两个群同时亮着。 | A. 两边都回最低事实；B. 先回工资表。 | A：`dorm_trust +1`, `public_boundary +1`；B：`reality_bond +1`, `dorm_absence +1`。 |

核心选择窗：`ACT7-E03-WORK-CHOICE-01`，位于 `ACT7-E03-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E03-WORK-C01-A` | 班后补一句现实说明 | `opening_contrast_seen = true`、`repair_depth +1`、`dorm_misread -1`。 |
| `ACT7-E03-WORK-C01-B` | 只发你们继续 | `missed_chance +1`、`dorm_absence +1`、`graduation_temperature = polite_distance`。 |

完成条件：`opening_contrast_seen`、`old_object_scope_checked`、`work_private_entry`。

---

## `ACT7-E04-THESIS-TOPIC` 毕业设计方向与开题

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `next_event` | `ACT7-E05-MARCH-QUEUE` |
| `main_location` | C407 / B204 开题复核 / 打印店 |
| `scene_function` | 开题方向和排班半径撞在一起，工作经历不能替毕业设计背书。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 开题表 | `ACT7-E04-WORK-P01` | 林亦舟填毕业设计方向，题目旁边压着快递站请假条和打印店收据。 | A. 先把题目说清；B. 先算请假时间。 | A：`topic_boundary_checked = true`；B：`time_debt +1`, `work_shift +1`。 |
| 经历边界 | `ACT7-E04-WORK-P02` | 他可以写现实场景需求，但不能把兼职经历当成论文结论。 | A. 区分观察和题目依据；B. 用工作经历替方向背书。 | A：`public_boundary +1`, `project_stability +1`；B：`proxy_risk +1`, `project_stability -1`。 |
| 导师签字 | `ACT7-E04-WORK-P03` | 导师签字前，排班群催他确认晚班。唐骁只提醒“签字页别折”。 | A. 先签字再回排班；B. 先接班再补签。 | A：`topic_self_signed = true`, `shift_boundary_checked = true`；B：`time_debt +1`, `dorm_misread +1`。 |
| 题目落定 | `ACT7-E04-WORK-P04` | 开题通过后，打印店老板问他还打不打工时表，C407 群问他是否上传终版。 | A. 记下两个截止时间；B. 先回能赶上。 | A：`work_schedule_checked = true`；B：`time_debt +1`, `energy_low +1`。 |

核心选择窗：`ACT7-E04-WORK-CHOICE-01`，位于 `ACT7-E04-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E04-WORK-C01-A` | 区分观察和题目依据 | `topic_boundary_checked = true`、`project_stability +1`、`public_boundary +1`。 |
| `ACT7-E04-WORK-C01-B` | 用工作经历替方向背书 | `proxy_risk +1`、`project_stability -1`、`thesis_revision_version = risk_later`。 |

完成条件：`topic_boundary_checked`、`topic_self_signed`、`work_schedule_checked`。

---

## `ACT7-E05-MARCH-QUEUE` 三四月事项排队

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E04-THESIS-TOPIC` |
| `next_event` | `ACT7-E06-THESIS-REVISION` |
| `main_location` | 明德楼窗口 / 快递站 / 打印店 |
| `scene_function` | 三四月事项与实习证明、工资确认、打印窗口和班次互相挤压。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 窗口并排 | `ACT7-E05-WORK-P01` | 实习证明预收、证书核验和毕业照信息采集同时排队，快递站群又在问谁能补晚班。 | A. 先看毕业窗口；B. 先回补班消息。 | A：`march_boundary_checked = true`；B：`work_shift +1`, `time_debt +1`。 |
| 证明缺口 | `ACT7-E05-WORK-P02` | 勤工证明缺一枚章，工资确认少一条本人回复。流程不问他难不难，只问材料齐不齐。 | A. 先补证明和工资确认；B. 先把窗口排上号。 | A：`work_certificate_status = submitted`, `wage_confirmed = true`；B：`queue_item_submitted = true`, `time_debt +1`。 |
| 现实成本 | `ACT7-E05-WORK-P03` | 打印费、地铁费、饭卡余额和 AA 都挤在同一张账单里。 | A. 说清 AA / 花费边界；B. 用沉默省解释。 | A：`public_boundary +1`, `repair_depth +1`；B：`dorm_misread +1`, `old_debt +1`。 |
| 缺席回声 | `ACT7-E05-WORK-P04` | 事项赶上了，但 4XX 公共桌那段最适合解释的时间已经过去。 | A. 回群补最低事实；B. 晚点再说。 | A：`queue_item_submitted = true`, `dorm_trust +1`；B：`queue_item_submitted = true`, `dorm_absence +1`, `missed_chance +1`。 |

核心选择窗：`ACT7-E05-WORK-CHOICE-01`，位于 `ACT7-E05-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E05-WORK-C01-A` | 先补证明和工资确认 | `work_certificate_status = submitted`、`wage_confirmed = true`、`money_pressure +1`。 |
| `ACT7-E05-WORK-C01-B` | 先把毕业窗口排上号 | `march_boundary_checked = true`、`queue_item_submitted = true`、`time_debt +1`。 |

完成条件：`march_boundary_checked`、`queue_item_submitted`、`work_certificate_status`。

---

## `ACT7-E06-THESIS-REVISION` 论文与毕设修改

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E05-MARCH-QUEUE` |
| `next_event` | `ACT7-E07-DEFENSE` |
| `main_location` | C407 / 打印店 / 快递站后门 |
| `scene_function` | 改稿在夜班后、打印店和快递站间隙完成，独立但疲惫。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 红批出现 | `ACT7-E06-WORK-P01` | 导师红批标出摘要、图表和格式问题。林亦舟刚下夜班，手机还停在工资确认群。 | A. 先读红批；B. 先睡二十分钟。 | A：`thesis_boundary_checked = true`；B：`energy_low +1`, `time_debt +1`。 |
| 打印成本 | `ACT7-E06-WORK-P02` | 打印店说双面便宜一点，但导师要求单面签字页。他不能再用省钱毁格式。 | A. 按要求打印；B. 先省一版试试。 | A：`public_boundary +1`, `project_stability +1`；B：`money_pressure -1`, `project_stability -1`。 |
| 版本命名 | `ACT7-E06-WORK-P03` | 文件名从终版改成夜班后修改版。不是卖惨，只是他终于把时间写进版本里。 | A. 自己改完剩余部分；B. 发群里请别人兜底。 | A：`thesis_revision_version = self_revised_after_shift`；B：`proxy_risk +1`, `dorm_misread +1`。 |
| 提交回声 | `ACT7-E06-WORK-P04` | 提交成功后，快递站群弹出晚班确认。C407 群里唐骁只回“收到”。 | A. 先确认提交，再回班次；B. 直接去上班。 | A：`revision_submitted_before_deadline = true`, `shift_boundary_checked = true`；B：`time_debt +1`, `energy_low +1`。 |

核心选择窗：`ACT7-E06-WORK-CHOICE-01`，位于 `ACT7-E06-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E06-WORK-C01-A` | 按要求打印并自己改完 | `thesis_boundary_checked = true`、`thesis_revision_version = self_revised_after_shift`、`project_stability +1`。 |
| `ACT7-E06-WORK-C01-B` | 先省一版，问题后补 | `money_pressure -1`、`project_stability -1`、`time_debt +1`。 |

完成条件：`thesis_boundary_checked`、`thesis_revision_version`、`revision_submitted_before_deadline`。

---

## `ACT7-E07-DEFENSE` 答辩日

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E06-THESIS-REVISION` |
| `next_event` | `ACT7-E08-GRAD-PHOTO` |
| `main_location` | C407 答辩门口 / 明德楼窗口 / 快递站群 |
| `scene_function` | 答辩后还要补交、赶班或领工资确认，情绪被现实压短。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 门口排队 | `ACT7-E07-WORK-P01` | 答辩门口排队，林亦舟的包里有论文、请假条和没签完的工资确认单。 | A. 核对答辩顺序；B. 先看工资群。 | A：`defense_order_seen = true`；B：`money_pressure +1`, `time_debt +1`。 |
| 结果说法 | `ACT7-E07-WORK-P02` | 答辩结束，别人问过了吗。他想说过了，又想说还要补章、补扫、补班。 | A. 认真说结果和补交项；B. 只说过了。 | A：`defense_boundary_checked = true`, `repair_depth +1`；B：`dorm_misread +1`, `polite_distance +1`。 |
| 补交窗口 | `ACT7-E07-WORK-P03` | 签字和小章还没办完，快递站负责人问他还能不能赶晚班。 | A. 先补交再回班次；B. 先赶班，补交晚点。 | A：`defense_post_submit_done = true`, `project_stability +1`；B：`work_shift +1`, `time_debt +1`。 |
| 答辩后沉默 | `ACT7-E07-WORK-P04` | 4XX 群里有人发恭喜，勤工群里有人发工资确认表。他第一次觉得两个“确认”都是真的。 | A. 两边都回完整；B. 只回工资确认。 | A：`wage_confirmed = true`, `dorm_trust +1`；B：`wage_confirmed = true`, `dorm_absence +1`。 |

核心选择窗：`ACT7-E07-WORK-CHOICE-01`，位于 `ACT7-E07-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E07-WORK-C01-A` | 认真说结果和补交项 | `defense_boundary_checked = true`、`repair_depth +1`、`dorm_misread -1`。 |
| `ACT7-E07-WORK-C01-B` | 只说过了，先处理工资确认 | `wage_confirmed = true`、`dorm_absence +1`、`graduation_temperature = polite_distance`。 |

完成条件：`defense_boundary_checked`、`defense_post_submit_done`、`wage_confirmed`。

---

## `ACT7-E08-GRAD-PHOTO` 毕业照

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 晨光体育场 / 快递站请假页 / 影像授权表 |
| `scene_function` | 毕业照和排班撞期，检验能不能提前请假、说明授权和到场边界。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 队形集合 | `ACT7-E08-WORK-P01` | 晨光体育场排毕业照，林亦舟手里还攥着请假审批截图。 | A. 先完成班级合照；B. 先确认班次有没有人顶。 | A：`grad_photo_result_recorded = true`；B：`work_shift +1`, `time_debt +1`。 |
| 授权选择 | `ACT7-E08-WORK-P02` | 影像授权表问公开范围，快递站群问请假是否确认。他必须把两件事都说清。 | A. 先说清授权和请假边界；B. 只默认授权，赶去上班。 | A：`photo_boundary_checked = true`, `shift_boundary_checked = true`；B：`public_boundary -1`, `missed_chance +1`。 |
| 4XX 同框 | `ACT7-E08-WORK-P03` | 周屿说站近点，唐骁问他是不是还赶班，陆沉没多问，只把位置让出一点。 | A. 承认赶班但留到拍完；B. 拍完立刻走。 | A：`dorm_warmth +1`, `repair_depth +1`；B：`dorm_absence +1`, `dorm_misread +1`。 |
| 预览留存 | `ACT7-E08-WORK-P04` | 预览图里他站得很正，手机另一边是未读的班次确认。 | A. 保存照片并回 4XX；B. 只保存请假截图。 | A：`dorm_trust +1`；B：`work_private_entry +1`, `graduation_temperature = polite_distance`。 |

核心选择窗：`ACT7-E08-WORK-CHOICE-01`，位于 `ACT7-E08-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-WORK-C01-A` | 说清授权和请假边界 | `photo_boundary_checked = true`、`shift_boundary_checked = true`、`public_boundary +1`。 |
| `ACT7-E08-WORK-C01-B` | 默认授权，赶去上班 | `public_boundary -1`、`missed_chance +1`、`dorm_absence +1`。 |

完成条件：`photo_boundary_checked`、`grad_photo_result_recorded`、`shift_boundary_checked`。

---

## `ACT7-E09-DORM-CLEAR` 清寝与旧物

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居 4XX / 公共桌 / 宿管窗口 |
| `scene_function` | 清寝旧物里出现工时表、饭卡、打印小票和未报销单，公共物品仍要确认。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 旧物翻出 | `ACT7-E09-WORK-P01` | 林亦舟清出旧饭卡、打印小票、工时表和一张没报销的交通票。 | A. 分类留存；B. 直接扔掉。 | A：`old_object_scope_checked = true`, `work_private_entry +1`；B：`missed_chance +1`。 |
| 公共物品 | `ACT7-E09-WORK-P02` | 公共 U 盘、遥控器和旧插排还要确认归属。他不能因为赶班让别人代签。 | A. 先确认公共物品；B. 请室友代说一声。 | A：`shared_item_owner_checked = true`, `public_boundary +1`；B：`proxy_risk +1`, `dorm_misread +1`。 |
| 工资消息 | `ACT7-E09-WORK-P03` | 工资确认表弹出来，宿管窗口也在排队，两个队伍都只认本人。 | A. 先交钥匙再确认工资；B. 一边排队一边处理工资。 | A：`dorm_key_returned = true`；B：`time_debt +1`, `energy_low +1`。 |
| 空桌回声 | `ACT7-E09-WORK-P04` | 公共桌空下来的时候，他把旧饭卡和小票夹进同一个文件袋。 | A. 留下最后一句说明；B. 只收走文件袋。 | A：`repair_depth +1`, `dorm_trust +1`；B：`work_private_entry +1`, `polite_distance +1`。 |

核心选择窗：`ACT7-E09-WORK-CHOICE-01`，位于 `ACT7-E09-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-WORK-C01-A` | 先确认公共物品 | `shared_item_owner_checked = true`、`public_boundary +1`、`dorm_trust +1`。 |
| `ACT7-E09-WORK-C01-B` | 请室友代说一声 | `proxy_risk +1`、`dorm_misread +1`、`missed_chance +1`。 |

完成条件：`old_object_scope_checked`、`shared_item_owner_checked`、`dorm_key_returned`。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 东北饺子馆 / 快递站群 / 校门口 |
| `scene_function` | 最后一顿饭和班次 / 工资确认撞期，检验他能不能为一顿饭请一次假。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 饭局撞班 | `ACT7-E10-WORK-P01` | 4XX 最后一顿饭订好，快递站群刚好问他能不能补一个晚班。 | A. 先说明饭局安排；B. 先问晚班工资。 | A：`repair_depth +1`；B：`money_pressure +1`, `dorm_misread +1`。 |
| 请假边界 | `ACT7-E10-WORK-P02` | 负责人说可以请，但这晚班没人顶就会少一笔钱。 | A. 为最后饭局请一次假；B. 接班，让他们先吃。 | A：`meal_boundary_checked = true`, `dorm_warmth +1`；B：`work_shift +1`, `missed_chance +1`。 |
| 饭桌现实 | `ACT7-E10-WORK-P03` | 饭桌上说起实习、租房和第一份工资，林亦舟第一次没有把钱压全吞回去。 | A. 说一件具体事实；B. 只说还行。 | A：`family_signal +1`, `repair_depth +1`；B：`old_debt +1`, `polite_distance +1`。 |
| 饭后确认 | `ACT7-E10-WORK-P04` | 散场后，负责人问他工资确认收到没，4XX 问他明天几点走。 | A. 两边都回清楚；B. 只回工资确认。 | A：`meal_attendance_locked = true`, `work_reply_after_meal = true`, `dorm_trust +1`；B：`wage_confirmed = true`, `dorm_absence +1`。 |

核心选择窗：`ACT7-E10-WORK-CHOICE-01`，位于 `ACT7-E10-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-WORK-C01-A` | 为最后饭局请一次假 | `meal_boundary_checked = true`、`dorm_warmth +1`、`money_pressure +1`。 |
| `ACT7-E10-WORK-C01-B` | 接班，让他们先吃 | `work_shift +1`、`missed_chance +1`、`graduation_temperature = missed_meal`。 |

完成条件：`meal_boundary_checked`、`meal_attendance_locked`、`work_reply_after_meal`。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 明德楼离校窗口 / 证书领取处 / 勤工办公室 |
| `scene_function` | 离校手续把工资、档案、联系人、退余额和第一周生活安排压成具体流程。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 离校清单 | `ACT7-E11-WORK-P01` | 离校系统一项项变绿，勤工办公室还差一项工资确认签收。 | A. 发完整行程；B. 只说今天离校。 | A：`leaving_boundary_checked = true`；B：`dorm_misread +1`。 |
| 证书档案 | `ACT7-E11-WORK-P02` | 证书领取处只核身份证，勤工办公室只看本人签字。现实流程都很清楚。 | A. 先完成证书和工资签收；B. 先赶去档案窗口。 | A：`certificate_or_archive_seen = true`, `wage_confirmed = true`；B：`time_debt +1`, `work_certificate_status = pending`。 |
| 第一周生活 | `ACT7-E11-WORK-P03` | 校园卡退余额只剩几块钱，足够买一瓶水，不够回答毕业后第一周怎么过。 | A. 对父母和 4XX 各说一件具体事；B. 只回“安排好了”。 | A：`family_signal +1`, `repair_depth +1`；B：`old_debt +1`, `polite_distance +1`。 |
| 站前确认 | `ACT7-E11-WORK-P04` | 去武生院站路上，勤工负责人说工资表下周发，4XX 群问他到了说一声。 | A. 约定低频真实联系；B. 只保留流程确认。 | A：`work_final_contact_scope = low_contact`；B：`work_final_contact_scope = polite_distance`。 |

核心选择窗：`ACT7-E11-WORK-CHOICE-01`，位于 `ACT7-E11-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-WORK-C01-A` | 先完成证书和工资签收 | `certificate_or_archive_seen = true`、`wage_confirmed = true`、`public_boundary +1`。 |
| `ACT7-E11-WORK-C01-B` | 先赶档案窗口，工资后补 | `time_debt +1`、`work_certificate_status = pending`、`graduation_temperature = polite_distance`。 |

完成条件：`leaving_boundary_checked`、`certificate_or_archive_seen`、`work_final_contact_scope`。

---

## `ACT7-E12-STATION-AFTER` 武生院站后

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `null` |
| `main_location` | 武生院站 / 地铁车厢 / 工资确认群与 4XX 群 |
| `scene_function` | 输出工作线最终温度：独立处理、体面距离、错过饭局、家庭说开或低频联系。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 进站前 | `ACT7-E12-WORK-P01` | 武生院站口人很多，林亦舟一手拉行李，一手看工资确认群和 4XX 群。 | A. 先报站；B. 先核对工资表。 | A：`station_after_echo_seen = true`；B：`wage_confirmed = true`, `time_debt +1`。 |
| 到站以后 | `ACT7-E12-WORK-P02` | 地铁开出校园站，最后的选择不再是去不去兼职，而是现实生活以后还怎么联系。 | A. 约定低频真实联系；B. 只保留流程确认。 | A：`work_final_contact_scope = low_contact`, `dorm_trust +1`；B：`work_final_contact_scope = polite_distance`, `polite_distance +1`。 |
| 家庭消息 | `ACT7-E12-WORK-P03` | 父亲问工资到了没，母亲问有没有吃饭。两个问题都很普通，也都不能再只回“嗯”。 | A. 说一件具体安排；B. 只回到了。 | A：`family_signal +1`, `repair_depth +1`；B：`old_debt +1`。 |
| 站后温度 | `ACT7-E12-WORK-P04` | 出站后手机震了一下。工资确认和“到了说一声”都在等他回。 | A. 两边都回完整；B. 只回一个确认。 | A：`graduation_temperature = low_contact`；B：`graduation_temperature = polite_distance`。 |

核心选择窗：`ACT7-E12-WORK-CHOICE-01`，位于 `ACT7-E12-WORK-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-WORK-C01-A` | 约定低频真实联系 | `work_final_contact_scope = low_contact`、`dorm_trust +1`、`graduation_temperature = low_contact`。 |
| `ACT7-E12-WORK-C01-B` | 只保留流程确认 | `work_final_contact_scope = polite_distance`、`polite_distance +1`、`graduation_temperature = polite_distance`。 |

完成条件：`work_final_contact_scope`、`graduation_temperature`、`station_after_echo_seen`。

---

## 结局温度建议

| 结局 | 条件建议 | 文本落点 |
|---|---|---|
| `WORK-END-INDEPENDENT` | `work_shift >= 6`、`public_boundary >= 4`、`dorm_misread <= 3` | 林亦舟能独自办完离校、工资确认和材料归档；4XX 仍有低频联系，但不再默认同行。 |
| `WORK-END-POLITE-DISTANCE` | `work_shift >= 6`、`dorm_absence >= 5`、`repair_depth <= 2` | 他处理流程很稳，关系却体面淡化，群里只剩到站和确认。 |
| `WORK-END-MISSED-MEAL` | `missed_chance >= 4` 或 `meal_boundary_checked = false` | 最后一顿饭有人给他留位置或没有留，他都没赶上最适合说话的那一刻。 |
| `WORK-END-FAMILY-OPEN` | `family_signal >= 4`、`public_boundary >= 3`、`repair_depth >= 3` | 他终于把家里的压力说出一部分，但不要求别人立刻理解。 |
| `WORK-END-LOW-CONTACT` | `reality_bond >= 3`、`dorm_trust >= 2`、`work_final_contact_scope = low_contact` | 毕业后仍会因为工作、快递、材料或城市生活偶尔联系，关系低频但真实。 |

## 后续 JSON 接入建议

- 正式 JSON 文件建议命名为 `开发数据_IF剧情页级JSON_R4-WORK_v1.json`。
- `source_docs` 至少引用本文、`开发长线_IF可玩支线R4-WORK暑假兼职线.md`、`开发规则_IF第七卷毕业结算与共用事件变体矩阵.md`。
- 每个事件保持 4 个剧情页、1 个二方向选择窗、`same_mother_event = true`、`route_switch_allowed = false`。
- 重点记录 `shift_boundary_checked`、`work_certificate_status`、`wage_confirmed`、`work_final_contact_scope`，用于区分独立处理、体面距离、错过饭局、家庭说开和低频联系。
