# IF 第七卷 ACT7-LUCHEN 陆沉线事件变体剧情页级细稿

本文用于把 `R5-LUCHEN` / `POOL-R5-LUCHEN` 的第七卷毕业结算拆成 12 个同母事件变体。它不是新增第七卷路线选择，也不是把陆沉写成被拯救对象；它只改变镜头、可操作内容、变量回声和毕业温度。

陆沉线的第七卷核心问题是：所有毕业流程都在要求“填清楚、说清楚、交上去”的时候，林亦舟还能不能只守住事实边界，把能说的部分交还给陆沉自己。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-LUCHEN` |
| `route_pool_id` | `POOL-R5-LUCHEN` |
| `act7_variant_id` | `ACT7-LUCHEN` |
| `entry_choice` | `P0D_STAND_WITH_LUCHEN` |
| `route_switch_allowed` | `false` |
| `same_mother_event` | `true` |

禁止项：

- 不允许把陆沉线写成“救赎陆沉线”。
- 不允许把沉默写成天然正确，也不允许用家庭压力免除全部关系责任。
- 不允许让林亦舟替陆沉完整表达心声、代签、代解释或代办决定。
- 不允许让陆沉在毕业前突然变得外向，只能通过等一分钟、发截图、补一句话、递旧书等动作增加信任。

## 关键变量

| 变量 | 用途 |
|---|---|
| `luchen_trust` | 陆沉是否愿意把最低事实和少量真实压力交给林亦舟。 |
| `proxy_risk` | 林亦舟是否替陆沉说完整心声、代做决定或替他交代原因。 |
| `work_reality` | 勤工、排班、打印、交通和现实成本是否被看见。 |
| `family_pressure` | 家庭消息、生活费、补材料等不可公开压力的重量。 |
| `quiet_bond` | 低声共处、等一下、同走一段路的信任温度。 |
| `repair_temperature` | 宿舍旧账是否能说到最低事实，而不是被圆过去。 |
| `dorm_trust` | 4XX 是否仍愿意把陆沉算进同一张桌和同一套流程。 |
| `money_pressure` | 打印、交通、饭钱、排班损失等具体成本。 |
| `tang_misread` | 唐骁对林亦舟靠近陆沉后“边界不清”的误读。 |
| `zhou_distance` | 周屿对林亦舟偏向陆沉后的距离感。 |
| `luchen_contact_scope_checked` | 预登记中是否确认“本人联系方式”和勤工 / 图书馆联系人不能互相替代。 |
| `luchen_public_fact_scope` | 陆沉愿意公开的最低事实范围。 |
| `luchen_old_book_checked` | 旧书、借书条、夹页或寄存物是否由陆沉本人确认。 |
| `luchen_late_word_seen` | 陆沉是否说出那句迟到但属于自己的解释。 |
| `luchen_final_contact_scope` | 毕业后是否保留低频联系、迟来解释、礼貌同框或空白断开。 |
| `graduation_temperature` | 毕业结算温度：低频联系、迟来解释、礼貌同框或空白离校。 |

## 12 事件总表

| 事件 | 陆沉线变体功能 |
|---|---|
| `ACT7-E01-PRE-REGISTER` | 把毕业后本人联系方式、备用电话和勤工联系人拆开，林亦舟只能等陆沉自己交表。 |
| `ACT7-E02-PUBLIC-SCOPE` | 确认可公开的最低事实，允许“不公开”成立。 |
| `ACT7-E03-LAST-NEW-YEAR` | 最后一个新年落到旧书、借书条和没写出处的轻物件。 |
| `ACT7-E04-THESIS-TOPIC` | 开题方向不能被勤工和家庭压力替代说明，也不能由林亦舟替陆沉解释。 |
| `ACT7-E05-MARCH-QUEUE` | 三四月事项排队检验“等他本人确认”与“替他省事”的差别。 |
| `ACT7-E06-THESIS-REVISION` | 陆沉晚发一版修改稿，林亦舟不能替他说迟到原因。 |
| `ACT7-E07-DEFENSE` | 陆沉可能迟到，但必须亲自完成一个真实任务。 |
| `ACT7-E08-GRAD-PHOTO` | 毕业照同框不是解释，迟到补拍也需要本人授权。 |
| `ACT7-E09-DORM-CLEAR` | 清寝旧书、包裹、借书条和遗留物检验谁能打开、谁不能替他处理。 |
| `ACT7-E10-LAST-MEAL` | 最后一顿饭处理低价窗口、AA 和不把钱压写成怜悯。 |
| `ACT7-E11-LEAVING-PAPERS` | 离校手续、证书、档案和补登记都必须回到本人签收。 |
| `ACT7-E12-STATION-AFTER` | 武生院站后输出低频联系、迟来解释、礼貌同框或空白离校。 |

---

## `ACT7-E01-PRE-REGISTER` 毕业去向预登记

| 字段 | 值 |
|---|---|
| `previous_event` | `null` |
| `next_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `main_location` | B204 / 图书馆服务台 / 青枫居 4XX |
| `scene_function` | 确认毕业后能否被找到，同时把本人联系方式、备用电话和勤工联系人拆开。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 入场 | `ACT7-E01-LUCHEN-P01` | B204 发下预登记表，陆沉在“备用联系人”一栏停住，手机屏幕亮了一下又扣回去。 | A. 等他自己写；B. 提醒这一栏可以先空着。 | A：`quiet_bond +1`；B：`luchen_trust +1`, `family_pressure +1`。 |
| 联系范围 | `ACT7-E01-LUCHEN-P02` | 陆沉把图书馆勤工排班电话写到草稿纸边上，又划掉。林亦舟知道那不是私人联系方式。 | A. 问本人联系方式怎么留；B. 问哪部分能写成备用说明。 | A：`luchen_contact_scope_checked = true`；B：`luchen_public_fact_scope = minimum_contact`。 |
| 去向复核 | `ACT7-E01-LUCHEN-P03` | 去向栏可以写待定，陆沉只写了城市首字母。唐骁看见后想问是否需要备注。 | A. 只写待定并复核；B. 替他说“可能留本地”。 | A：`pre_register_boundary_checked = true`；B：`proxy_risk +2`, `tang_misread +1`。 |
| 本人交表 | `ACT7-E01-LUCHEN-P04` | 林亦舟没有替他把表交到前排。陆沉排到窗口时才把备用电话补上。 | A. 等他自己交表；B. 帮他把表递上去。 | A：`luchen_trust +1`, `proxy_risk -1`；B：`work_reality +1`, `proxy_risk +1`。 |

核心选择窗：`ACT7-E01-LUCHEN-CHOICE-01`，位于 `ACT7-E01-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E01-LUCHEN-C01-A` | 本人联系方式本人确认 | `luchen_contact_scope_checked = true`、`pre_register_boundary_checked = true`、`proxy_risk -1`。 |
| `ACT7-E01-LUCHEN-C01-B` | 只问最低可公开范围 | `luchen_public_fact_scope = minimum_contact`、`luchen_trust +1`、`family_pressure +1`。 |

完成条件：`luchen_contact_scope_checked`、`pre_register_boundary_checked`、`graduation_direction_status`。

---

## `ACT7-E02-PUBLIC-SCOPE` 公开范围确认

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E01-PRE-REGISTER` |
| `next_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `main_location` | 西园餐厅 / 班级材料群 / 图书馆门口 |
| `scene_function` | 确认陆沉只公开最低事实的权利，同时承受别人觉得他说得太少。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 模板更新 | `ACT7-E02-LUCHEN-P01` | 活动材料群要求每个人确认公开范围，陆沉的空格停在“照片、去向、联系方式、经历”之间。 | A. 先看可不公开项；B. 先问照片能否用。 | A：`public_boundary +1`；B：`dorm_trust +1`, `proxy_risk +1`。 |
| 最低事实 | `ACT7-E02-LUCHEN-P02` | 陆沉只愿意公开“毕业去向待定”和班级合照，不愿意写勤工经历和家庭情况。 | A. 保留最低事实；B. 替他补一句“家里有事”。 | A：`luchen_public_fact_scope = minimum_fact`；B：`proxy_risk +2`, `family_pressure +1`。 |
| 误读出现 | `ACT7-E02-LUCHEN-P03` | 周屿说这也太像什么都不肯说，唐骁提醒材料最好有统一口径。陆沉没有抬头。 | A. 只说“他本人确认过”；B. 解释他为什么不方便说。 | A：`public_scope_boundary_checked = true`；B：`proxy_risk +1`, `tang_misread +1`。 |
| 不公开有效 | `ACT7-E02-LUCHEN-P04` | 辅导员确认“不公开”有效，陆沉把自己的名字从经历墙候选里划掉。 | A. 提交不公开目录；B. 改为仅班级内部可见。 | A：`public_consent_checked = true`, `quiet_bond +1`；B：`dorm_trust +1`, `luchen_trust -1`。 |

核心选择窗：`ACT7-E02-LUCHEN-CHOICE-01`，位于 `ACT7-E02-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E02-LUCHEN-C01-A` | 保留最低事实 | `luchen_public_fact_scope = minimum_fact`、`public_scope_boundary_checked = true`、`proxy_risk -1`。 |
| `ACT7-E02-LUCHEN-C01-B` | 替他补原因让场面好看 | `proxy_risk +2`、`dorm_trust +1`、`quiet_bond -1`。 |

完成条件：`public_consent_checked`、`public_scope_boundary_checked`、`luchen_public_fact_scope`。

---

## `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `next_event` | `ACT7-E04-THESIS-TOPIC` |
| `main_location` | 青枫居 4XX / 阳光书屋 / 校门口便利店 |
| `scene_function` | 用旧书、借书条和空白卡片承接最后一个新年，不强迫物件说出来源。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 年前空桌 | `ACT7-E03-LUCHEN-P01` | 4XX 的年货袋放在公共桌上，陆沉只带回一本封皮磨白的旧书。 | A. 问书要不要放公共桌；B. 问是谁给的。 | A：`quiet_bond +1`；B：`family_pressure +1`, `luchen_trust -1`。 |
| 旧书夹页 | `ACT7-E03-LUCHEN-P02` | 旧书里夹着一张过期借书条和一张没写名字的便利店小票。陆沉把夹页按回去。 | A. 不翻夹页，只问要不要保存；B. 猜测来源并替他说轻一点。 | A：`luchen_old_book_checked = true`；B：`proxy_risk +1`, `missed_chance +1`。 |
| 新年消息 | `ACT7-E03-LUCHEN-P03` | 群里问新年祝福素材，陆沉发了一个句号又撤回。林亦舟看到他的输入框停了很久。 | A. 发自己的，不代发他的；B. 替他发一句祝福。 | A：`proxy_risk -1`, `luchen_trust +1`；B：`dorm_trust +1`, `quiet_bond -1`。 |
| 轻物件 | `ACT7-E03-LUCHEN-P04` | 陆沉把旧书留在林亦舟桌角，说“先放你这。”这句话比祝福更像交代。 | A. 收下但不问原因；B. 追问是不是送给自己。 | A：`luchen_old_book_checked = true`, `quiet_bond +1`；B：`luchen_trust -1`, `family_pressure +1`。 |

核心选择窗：`ACT7-E03-LUCHEN-CHOICE-01`，位于 `ACT7-E03-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E03-LUCHEN-C01-A` | 不翻夹页，只确认保存 | `luchen_old_book_checked = true`、`quiet_bond +1`、`proxy_risk -1`。 |
| `ACT7-E03-LUCHEN-C01-B` | 替旧书补一个温柔来源 | `proxy_risk +1`、`missed_chance +1`、`family_pressure +1`。 |

完成条件：`luchen_old_book_checked`、`new_year_item_kept`、`public_message_not_proxied`。

---

## `ACT7-E04-THESIS-TOPIC` 毕业设计方向与开题

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `next_event` | `ACT7-E05-MARCH-QUEUE` |
| `main_location` | C407 / 开题签字窗口 / 图书馆复印区 |
| `scene_function` | 确认开题方向和导师签字，避免把勤工、家庭压力或沉默写成替代说明。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 方向表 | `ACT7-E04-LUCHEN-P01` | 开题表需要写研究方向，陆沉的草稿比别人少一行背景说明。 | A. 问缺的是材料还是时间；B. 直接替他补背景。 | A：`work_reality +1`, `luchen_trust +1`；B：`proxy_risk +2`。 |
| 排班撞签字 | `ACT7-E04-LUCHEN-P02` | 签字窗口和图书馆排班撞在一起，陆沉说“我晚点去”，没有解释。 | A. 问他能公开哪段时间；B. 替他向导师解释勤工。 | A：`topic_boundary_checked = true`；B：`proxy_risk +1`, `tang_misread +1`。 |
| 本人说明 | `ACT7-E04-LUCHEN-P03` | 导师问为什么材料晚交，陆沉只说“我改完再交”，把其它话吞回去。 | A. 让陆沉自己补一句；B. 帮他说“他有排班”。 | A：`luchen_trust +1`, `repair_temperature +1`；B：`work_reality +1`, `proxy_risk +2`。 |
| 签字通过 | `ACT7-E04-LUCHEN-P04` | 陆沉在表上写下自己的方向，签字后把多印的一份递给林亦舟。 | A. 收下复印件；B. 帮他归进共享夹。 | A：`quiet_bond +1`；B：`project_stability +1`, `public_boundary -1`。 |

核心选择窗：`ACT7-E04-LUCHEN-CHOICE-01`，位于 `ACT7-E04-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E04-LUCHEN-C01-A` | 只确认可公开时间 | `topic_boundary_checked = true`、`work_reality +1`、`proxy_risk -1`。 |
| `ACT7-E04-LUCHEN-C01-B` | 替他说明勤工原因 | `work_reality +1`、`proxy_risk +2`、`luchen_trust -1`。 |

完成条件：`topic_boundary_checked`、`thesis_topic_submitted`、`advisor_signature_done`。

---

## `ACT7-E05-MARCH-QUEUE` 三四月事项排队

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E04-THESIS-TOPIC` |
| `next_event` | `ACT7-E06-THESIS-REVISION` |
| `main_location` | 事务大厅 / 打印店 / 图书馆服务台 |
| `scene_function` | 用窗口排队、证件核验和排班冲突检验“等本人确认”与“替他省事”的差别。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 队列开场 | `ACT7-E05-LUCHEN-P01` | 三四月事项同时弹出：证件核验、开题补交、毕业照信息、勤工排班。 | A. 先排本人窗口；B. 先把可代办项拿走。 | A：`march_boundary_checked = true`；B：`proxy_risk +1`, `work_reality +1`。 |
| 截图迟到 | `ACT7-E05-LUCHEN-P02` | 陆沉发来排班截图，比约定时间晚了十三分钟，最后一行备注被截掉。 | A. 等完整截图；B. 先按你猜的时间填。 | A：`luchen_trust +1`, `work_reality +1`；B：`proxy_risk +2`, `missed_chance +1`。 |
| 窗口点名 | `ACT7-E05-LUCHEN-P03` | 窗口叫到陆沉名字，工作人员说本人不在不能确认。林亦舟拿着材料站在旁边。 | A. 给陆沉留位置；B. 说明你可以代交。 | A：`proxy_risk -1`, `quiet_bond +1`；B：`proxy_risk +2`, `dorm_trust +1`。 |
| 本人确认 | `ACT7-E05-LUCHEN-P04` | 陆沉赶到时额角有汗，只说“到了”。他自己签下补交确认。 | A. 把笔递给他；B. 替他解释迟到。 | A：`march_boundary_checked = true`, `luchen_trust +1`；B：`family_pressure +1`, `proxy_risk +1`。 |

核心选择窗：`ACT7-E05-LUCHEN-CHOICE-01`，位于 `ACT7-E05-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E05-LUCHEN-C01-A` | 等完整截图和本人确认 | `march_boundary_checked = true`、`luchen_trust +1`、`proxy_risk -1`。 |
| `ACT7-E05-LUCHEN-C01-B` | 先替他填，避免窗口过号 | `proxy_risk +2`、`work_reality +1`、`quiet_bond -1`。 |

完成条件：`march_boundary_checked`、`personal_window_confirmed`、`queue_item_submitted`。

---

## `ACT7-E06-THESIS-REVISION` 论文与毕设修改

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E05-MARCH-QUEUE` |
| `next_event` | `ACT7-E07-DEFENSE` |
| `main_location` | 图书馆机房 / C407 / 打印店 |
| `scene_function` | 陆沉晚发一版修改稿，林亦舟可以帮他找错，但不能替他说迟到理由。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 晚到文件 | `ACT7-E06-LUCHEN-P01` | 凌晨一点，陆沉发来一版命名很短的修改稿，只附一句“麻烦看下格式”。 | A. 先看格式；B. 先问为什么这么晚。 | A：`work_reality +1`, `quiet_bond +1`；B：`family_pressure +1`, `luchen_trust -1`。 |
| 缺页红批 | `ACT7-E06-LUCHEN-P02` | 打印店发现参考页缺一页，唐骁问是否写进延期说明。陆沉没有回群。 | A. 只报缺页事实；B. 替陆沉解释原因。 | A：`revision_boundary_checked = true`；B：`proxy_risk +2`, `tang_misread +1`。 |
| 本人回复 | `ACT7-E06-LUCHEN-P03` | 陆沉隔了很久回了一个截图，证明他在图书馆排队。截图边缘有未接来电。 | A. 等他补文字；B. 直接转发截图。 | A：`luchen_trust +1`, `family_pressure +1`；B：`public_boundary -1`, `proxy_risk +1`。 |
| 修改提交 | `ACT7-E06-LUCHEN-P04` | 最终稿提交成功，陆沉把打印小票夹进旧书里，没有解释那通电话。 | A. 不追问电话；B. 问是不是家里催。 | A：`quiet_bond +1`, `proxy_risk -1`；B：`family_pressure +1`, `luchen_trust -1`。 |

核心选择窗：`ACT7-E06-LUCHEN-CHOICE-01`，位于 `ACT7-E06-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E06-LUCHEN-C01-A` | 只报缺页事实 | `revision_boundary_checked = true`、`proxy_risk -1`、`work_reality +1`。 |
| `ACT7-E06-LUCHEN-C01-B` | 替他说迟到理由 | `proxy_risk +2`、`tang_misread +1`、`quiet_bond -1`。 |

完成条件：`revision_boundary_checked`、`thesis_revision_submitted`、`late_draft_seen`。

---

## `ACT7-E07-DEFENSE` 答辩日

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E06-THESIS-REVISION` |
| `next_event` | `ACT7-E08-GRAD-PHOTO` |
| `main_location` | C407 / 答辩教室门口 / 打印店 |
| `scene_function` | 陆沉可能迟到，但必须亲自完成一个真实任务，而不是被林亦舟替过去。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 门口等待 | `ACT7-E07-LUCHEN-P01` | 答辩教室门口，陆沉还没到。林亦舟手里有他的备用打印件。 | A. 等到点前最后一分钟；B. 先替他交备用件。 | A：`quiet_bond +1`；B：`proxy_risk +2`, `project_stability +1`。 |
| 迟到到场 | `ACT7-E07-LUCHEN-P02` | 陆沉赶到时只说“路上耽误了”。老师问材料是谁补的。 | A. 让陆沉自己回答；B. 帮他说明你只补打印。 | A：`defense_boundary_checked = true`；B：`proxy_risk +1`, `dorm_trust +1`。 |
| 一件真事 | `ACT7-E07-LUCHEN-P03` | 答辩后需要补交签收单，陆沉主动去窗口排队，没有让林亦舟跟上。 | A. 在门口等他；B. 跟过去帮他说。 | A：`luchen_trust +1`, `work_reality +1`；B：`proxy_risk +1`, `luchen_trust -1`。 |
| 答辩后话 | `ACT7-E07-LUCHEN-P04` | 陆沉回来，把签收单放在旧书上，说“刚才那句，是真的。”但没有解释完整。 | A. 只接一句“我听见了”；B. 追问哪一句。 | A：`luchen_late_word_seen = true`, `quiet_bond +1`；B：`family_pressure +1`, `missed_chance +1`。 |

核心选择窗：`ACT7-E07-LUCHEN-CHOICE-01`，位于 `ACT7-E07-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E07-LUCHEN-C01-A` | 让陆沉自己回答 | `defense_boundary_checked = true`、`luchen_trust +1`、`proxy_risk -1`。 |
| `ACT7-E07-LUCHEN-C01-B` | 帮他把材料关系说清 | `proxy_risk +1`、`dorm_trust +1`、`luchen_late_word_seen`延后。 |

完成条件：`defense_boundary_checked`、`defense_post_submit_done`、`luchen_late_word_seen`。

---

## `ACT7-E08-GRAD-PHOTO` 毕业照

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 操场 / 图书馆台阶 / 影像授权表 |
| `scene_function` | 毕业照同框不是解释，迟到补拍和影像授权仍然需要本人确认。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 集合缺口 | `ACT7-E08-LUCHEN-P01` | 毕业照集合时陆沉还在图书馆交接钥匙，4XX 的位置空出一个窄缝。 | A. 给他留边位；B. 让队形先合上。 | A：`dorm_trust +1`, `quiet_bond +1`；B：`zhou_distance +1`。 |
| 授权表 | `ACT7-E08-LUCHEN-P02` | 影像授权表需要本人勾选。周屿问能不能先替陆沉选班级内部。 | A. 等陆沉本人勾；B. 先替他选最保守项。 | A：`photo_boundary_checked = true`；B：`proxy_risk +2`, `public_boundary +1`。 |
| 迟到补拍 | `ACT7-E08-LUCHEN-P03` | 陆沉到场时大合照已经拍完，只剩台阶旁的补拍队列。 | A. 陪他补拍；B. 说大合照不用补也行。 | A：`dorm_trust +1`, `luchen_trust +1`；B：`graduation_temperature -1`。 |
| 同框不解释 | `ACT7-E08-LUCHEN-P04` | 补拍照片里陆沉站得很直，没解释为什么晚到，只把授权表自己交回去。 | A. 不把迟到写进群；B. 替他在群里说明。 | A：`proxy_risk -1`, `quiet_bond +1`；B：`proxy_risk +1`, `zhou_distance -1`。 |

核心选择窗：`ACT7-E08-LUCHEN-CHOICE-01`，位于 `ACT7-E08-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-LUCHEN-C01-A` | 等本人勾授权表 | `photo_boundary_checked = true`、`proxy_risk -1`、`luchen_trust +1`。 |
| `ACT7-E08-LUCHEN-C01-B` | 先替他选最保守项 | `public_boundary +1`、`proxy_risk +2`、`quiet_bond -1`。 |

完成条件：`photo_boundary_checked`、`grad_photo_result_recorded`、`photo_release_scope_confirmed`。

---

## `ACT7-E09-DORM-CLEAR` 清寝与旧物

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居 4XX / 楼下回收点 / 快递站 |
| `scene_function` | 清寝旧书、包裹、借书条和遗留物必须由陆沉本人确认，不让好意变成代处置。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 床位清空 | `ACT7-E09-LUCHEN-P01` | 陆沉的床位很早清空，只剩旧书、快递袋和一张没有寄出的退件单。 | A. 先放回原位；B. 先帮他扔掉空袋。 | A：`luchen_old_book_checked = true`；B：`proxy_risk +1`, `money_pressure +1`。 |
| 旧书确认 | `ACT7-E09-LUCHEN-P02` | 旧书夹页里有一张车票小票，周屿想看是不是纪念品。陆沉不在屋里。 | A. 不打开，等陆沉；B. 打开确认有没有重要证件。 | A：`dorm_clear_boundary_checked = true`；B：`proxy_risk +2`, `luchen_trust -1`。 |
| 快递退件 | `ACT7-E09-LUCHEN-P03` | 快递站打来电话，说退件需要本人或授权短信。林亦舟拿着陆沉留下的旧手机号码。 | A. 发消息让他授权；B. 去窗口说明你认识他。 | A：`work_reality +1`, `proxy_risk -1`；B：`proxy_risk +2`, `money_pressure +1`。 |
| 本人拿走 | `ACT7-E09-LUCHEN-P04` | 陆沉回来，把旧书和退件单一起收进包里，只把一本教材留给公共桌。 | A. 问教材能不能留名；B. 替他写“陆沉留”。 | A：`luchen_trust +1`, `public_boundary +1`；B：`proxy_risk +1`, `dorm_trust +1`。 |

核心选择窗：`ACT7-E09-LUCHEN-CHOICE-01`，位于 `ACT7-E09-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-LUCHEN-C01-A` | 不打开夹页，等本人确认 | `dorm_clear_boundary_checked = true`、`luchen_old_book_checked = true`、`proxy_risk -1`。 |
| `ACT7-E09-LUCHEN-C01-B` | 先确认有没有重要证件 | `proxy_risk +2`、`luchen_trust -1`、`work_reality +1`。 |

完成条件：`dorm_clear_boundary_checked`、`luchen_old_book_checked`、`dorm_key_returned`。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 西园餐厅 / 校门口小店 / 4XX 群 |
| `scene_function` | 最后一顿饭处理低价窗口、AA 和留座，不把钱压写成怜悯。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 约饭分歧 | `ACT7-E10-LUCHEN-P01` | 周屿提议去校门口吃一顿好的，陆沉说“我晚点到”，没有说预算。 | A. 提议西园也行；B. 私聊问他钱够不够。 | A：`money_pressure +1`, `dorm_trust +1`；B：`family_pressure +1`, `luchen_trust -1`。 |
| AA 方式 | `ACT7-E10-LUCHEN-P02` | 唐骁开始算分账，陆沉把手机放回口袋，说“按人头”。 | A. 让账单公开但不点名；B. 替陆沉说他少吃少付。 | A：`last_meal_boundary_checked = true`；B：`proxy_risk +2`, `money_pressure +1`。 |
| 留座 | `ACT7-E10-LUCHEN-P03` | 陆沉晚来，只拿了最便宜的窗口饭。林亦舟旁边还空着一个座位。 | A. 把座位留着，不解释；B. 告诉大家他刚下班。 | A：`quiet_bond +1`, `zhou_distance +1`；B：`work_reality +1`, `proxy_risk +1`。 |
| 低声收口 | `ACT7-E10-LUCHEN-P04` | 散场时陆沉把多出的两块钱转给林亦舟，说“别替我垫”。 | A. 收下转账；B. 退回并说不用。 | A：`luchen_trust +1`, `money_pressure`记录；B：`quiet_bond -1`, `proxy_risk +1`。 |

核心选择窗：`ACT7-E10-LUCHEN-CHOICE-01`，位于 `ACT7-E10-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-LUCHEN-C01-A` | 账单公开但不点名 | `last_meal_boundary_checked = true`、`money_pressure +1`、`proxy_risk -1`。 |
| `ACT7-E10-LUCHEN-C01-B` | 替他说少吃少付 | `proxy_risk +2`、`dorm_trust +1`、`quiet_bond -1`。 |

完成条件：`last_meal_boundary_checked`、`meal_payment_settled`、`no_pity_label_added`。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 事务大厅 / 档案窗口 / 图书馆还书台 |
| `scene_function` | 离校手续、证书、档案和补登记共同收口，但每个关键签收都必须回到陆沉本人。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 手续清单 | `ACT7-E11-LUCHEN-P01` | 离校清单显示陆沉还有图书馆还书台和档案窗口两项未绿。 | A. 先陪他还书；B. 先替他排档案窗口。 | A：`work_reality +1`, `quiet_bond +1`；B：`proxy_risk +1`, `project_stability +1`。 |
| 旧书归还 | `ACT7-E11-LUCHEN-P02` | 还书台发现旧书不是馆藏，工作人员让陆沉自己确认是否带走。 | A. 等他本人确认；B. 说这本先放林亦舟这里。 | A：`leaving_papers_boundary_checked = true`；B：`proxy_risk +1`, `luchen_old_book_checked = true`。 |
| 档案签收 | `ACT7-E11-LUCHEN-P03` | 档案窗口需要本人签收，陆沉低头核对地址，手指停在家庭住址一栏。 | A. 转开视线等他签；B. 问地址是不是要改。 | A：`family_pressure +1`, `luchen_trust +1`；B：`family_pressure +2`, `luchen_trust -1`。 |
| 清单变绿 | `ACT7-E11-LUCHEN-P04` | 清单最后变绿，陆沉把旧书放进包里，说“这本不还。” | A. 点头，不问归属；B. 问是不是要送人。 | A：`quiet_bond +1`, `proxy_risk -1`；B：`missed_chance +1`, `family_pressure +1`。 |

核心选择窗：`ACT7-E11-LUCHEN-CHOICE-01`，位于 `ACT7-E11-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-LUCHEN-C01-A` | 等本人确认旧书与签收 | `leaving_papers_boundary_checked = true`、`luchen_old_book_checked = true`、`proxy_risk -1`。 |
| `ACT7-E11-LUCHEN-C01-B` | 先替他保管旧书 | `proxy_risk +1`、`quiet_bond +1`、`luchen_final_contact_scope`延后确认。 |

完成条件：`leaving_papers_boundary_checked`、`archive_signed_by_self`、`library_item_closed`。

---

## `ACT7-E12-STATION-AFTER` 武生院站后

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `null` |
| `main_location` | 武生院站 / 公交站台 / 私聊窗口 |
| `scene_function` | 在站后结算陆沉线毕业温度：低频联系、迟来解释、礼貌同框或空白离校。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 站台重逢 | `ACT7-E12-LUCHEN-P01` | 武生院站风很大，陆沉背着包站在广告牌阴影里，旧书露出一个角。 | A. 走过去等车；B. 远远点头就好。 | A：`quiet_bond +1`；B：`graduation_temperature = polite_distance`。 |
| 旧书交还 | `ACT7-E12-LUCHEN-P02` | 陆沉把旧书递给林亦舟，里面多了一张夹页，只写着“那天没说完”。 | A. 收下，等他继续；B. 替他把没说完的话补完。 | A：`luchen_late_word_seen = true`；B：`proxy_risk +2`, `missed_chance +1`。 |
| 联系范围 | `ACT7-E12-LUCHEN-P03` | 公交快到了，陆沉问“以后有事发这个号。”他说的是一个低频但有效的联系方式。 | A. 确认可低频联系；B. 问能不能常联系。 | A：`luchen_final_contact_scope = low_frequency`；B：`luchen_trust -1`, `family_pressure +1`。 |
| 终局落点 | `ACT7-E12-LUCHEN-P04` | 车门打开前，陆沉补了一句“不是不想说，是那时候说不了。”风把后半句盖掉。 | A. 回一句“我知道现在这句就够了”；B. 追问当时到底发生什么。 | A：`graduation_temperature = late_word_or_lowfreq`；B：`graduation_temperature = blank_or_polite`, `proxy_risk +1`。 |

核心选择窗：`ACT7-E12-LUCHEN-CHOICE-01`，位于 `ACT7-E12-LUCHEN-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-LUCHEN-C01-A` | 收下旧书，等他自己补一句 | `luchen_late_word_seen = true`、`luchen_final_contact_scope = low_frequency`、`proxy_risk -1`。 |
| `ACT7-E12-LUCHEN-C01-B` | 替他补完整解释 | `proxy_risk +2`、`missed_chance +1`、`luchen_final_contact_scope = polite_or_blank`。 |

完成条件：`luchen_final_contact_scope`、`graduation_temperature`、`station_after_echo_seen`。

---

## 结局温度建议

| 结局 | 条件建议 | 文本落点 |
|---|---|---|
| `LUCHEN-END-LOWFREQ` | `luchen_trust >= 6`、`proxy_risk <= 2`、`quiet_bond >= 5` | 陆沉留下一个低频但有效的联系方式，偶尔发图书馆、车站或旧书相关消息。 |
| `LUCHEN-END-LATE-WORD` | `repair_temperature >= 5`、`family_pressure >= 3`、`proxy_risk <= 3`、`luchen_late_word_seen = true` | 陆沉说出迟来的半句解释，但仍保留不能公开的部分。 |
| `LUCHEN-END-POLITE` | `dorm_trust <= 2`、`zhou_distance >= 4`、`tang_misread >= 4` | 毕业照和离校手续都完成，陆沉与林亦舟保留礼貌同框，不再深入。 |
| `LUCHEN-END-BLANK` | `proxy_risk >= 5` 或 `missed_chance >= 4` | 大多数流程都办完了，但陆沉没有再补那句话，旧书也没有留下。 |

## 后续 JSON 接入建议

- 正式 JSON 文件建议命名为 `开发数据_IF剧情页级JSON_R5-LUCHEN_v1.json`。
- `source_docs` 至少引用本文、`开发长线_IF可玩支线R5-LUCHEN陆沉线.md`、`开发规则_IF第七卷毕业结算与共用事件变体矩阵.md`。
- 每个事件保持 4 个剧情页、1 个二方向选择窗、`same_mother_event = true`、`route_switch_allowed = false`。
- 重点记录 `luchen_old_book_checked`、`luchen_late_word_seen`、`luchen_final_contact_scope`，用于区分低频联系、迟来解释、礼貌同框和空白离校。
