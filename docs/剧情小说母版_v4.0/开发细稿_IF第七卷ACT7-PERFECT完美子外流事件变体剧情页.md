# IF 第七卷 ACT7-PERFECT 完美子外流事件变体剧情页级细稿

本文用于把 `R3-PERFECT` / `POOL-R3-PERFECT` 的第七卷毕业结算拆成 12 个同母事件变体。它不是奖状线、正确线、唐骁规则线，也不是 A3 活动父池本体；它只结算林亦舟在前文持续选择流程、自控、低风险、公开可控之后，如何在毕业流程里显得“什么都能处理”，以及这种处理能力怎样把私人解释、宿舍温度和被问一句的机会推迟到最后。

完美子外流的第七卷核心问题是：当所有表格都填得清楚、所有材料都能按时提交、所有授权都留有记录时，毕业还会不会留下一个地方，问他自己到底难不难受。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R3-PERFECT` |
| `route_pool_id` | `POOL-R3-PERFECT` |
| `route_parent_pool_id` | `POOL-A3-ACTIVITY-PUBLIC` |
| `act7_variant_id` | `ACT7-PERFECT` |
| `entry_choice` | `P0A_PERFECT_ACCEPT_SCOPE` |
| `route_switch_allowed` | `false` |
| `same_mother_event` | `true` |

禁止项：

- 不允许把本线写成优秀奖励或爽线；公开信用越高，越要写被默认兜底、私人延后和低温代价。
- 不允许把本线写成 `R5-TANG`；唐骁只能作为流程镜像或规则提醒，不能抢成唐骁线。
- 不允许把沈嘉禾 / 夏知微 / 晚风软回声改写成完整感情线。
- 不允许重新开放 A3 父池所有 focus；进入本线后只承接 `mode_perfect` 结果。
- 不允许用“他都处理好了”跳过剧情页；每个事件都必须有公开边界、职责范围、工具化风险或私人空格。

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
| `graduation_temperature` | 公开清楚、工具化、体面低温、迟来私人话、低温或安静边界。 |
| `perfect_contact_scope` | 毕业后最终联系范围：低频真实、体面距离、停止默认兜底或继续被找。 |
| `handoff_scope_checked` | 是否写清交接人和停止条件。 |
| `private_blank_seen` | 是否看见公开材料背后的私人空格。 |

## 12 事件总表

| 事件 | 完美线变体功能 |
|---|---|
| `ACT7-E01-PRE-REGISTER` | 预登记表格最清楚，但私人联系人一栏最难写。 |
| `ACT7-E02-PUBLIC-SCOPE` | 公开范围、署名、授权和停止条件都清楚，却也让他继续被默认兜底。 |
| `ACT7-E03-LAST-NEW-YEAR` | 最后一个新年目录清楚到几乎没有错，私人话却仍空着。 |
| `ACT7-E04-THESIS-TOPIC` | 开题依据、履历和职责边界分得很干净，风险是把自己也写进流程。 |
| `ACT7-E05-MARCH-QUEUE` | 三四月事项排得很稳，但别人开始默认他能顺手替大家收尾。 |
| `ACT7-E06-THESIS-REVISION` | 改稿版本最干净，边界最清楚，也最容易继续被找去看别人的问题。 |
| `ACT7-E07-DEFENSE` | 答辩材料清楚、补交流程稳定，结尾体面但不一定有人等他吃饭。 |
| `ACT7-E08-GRAD-PHOTO` | 毕业照授权和公开照边界都清楚，私人同框可能被流程照替代。 |
| `ACT7-E09-DORM-CLEAR` | 清寝清单无误，公共物品归属明确，但寝室像被整理成办公室。 |
| `ACT7-E10-LAST-MEAL` | 最后一顿饭检验他能不能停一次兜底，先坐下来而不是先收尾。 |
| `ACT7-E11-LEAVING-PAPERS` | 离校手续、证书、档案和交接人都清楚，毕业后是否继续默认找他要结算。 |
| `ACT7-E12-STATION-AFTER` | 武生院站后输出公开清楚、工具化、体面低温、迟来私人话、低温或安静边界。 |

---

## `ACT7-E01-PRE-REGISTER` 毕业去向预登记

| 字段 | 值 |
|---|---|
| `previous_event` | `null` |
| `next_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `main_location` | B204 / 教务系统 / 活动材料交接表 |
| `scene_function` | 预登记表格最清楚，但私人联系人一栏最难写。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 表格无错 | `ACT7-E01-PERFECT-P01` | B204 发毕业去向预登记，林亦舟比别人更快核对手机号、邮箱、去向和材料备注。 | A. 先按学校表格核准；B. 顺手帮旁边同学看格式。 | A：`pre_register_boundary_checked = true`；B：`tooling_risk +1`, `public_credit +1`。 |
| 私人联系人 | `ACT7-E01-PERFECT-P02` | 紧急联系人和毕业后联系人都能填，只有“毕业后谁真正会问他”这一格不存在。 | A. 填清流程联系人和私人空格；B. 只把所有事项填得无错。 | A：`private_blank_seen = true`, `scope_clarity +1`；B：`self_control +1`, `private_delay +1`。 |
| 交接说明 | `ACT7-E01-PERFECT-P03` | 活动材料交接表也递过来，负责人说“你最熟，毕业后也能找你吧”。 | A. 写明交接人；B. 暂时保留自己为默认联系人。 | A：`handoff_scope_checked = true`, `tooling_risk -1`；B：`tooling_risk +1`, `activity_link +1`。 |
| 提交以后 | `ACT7-E01-PERFECT-P04` | 表格提交成功，4XX 群问谁一起办离校，活动群问谁能最终核一遍材料。 | A. 先回 4XX 具体时间；B. 先回材料确认。 | A：`graduation_direction_status = submitted`, `dorm_warmth +1`；B：`graduation_direction_status = submitted`, `public_credit +1`, `private_delay +1`。 |

核心选择窗：`ACT7-E01-PERFECT-CHOICE-01`，位于 `ACT7-E01-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E01-PERFECT-C01-A` | 填清流程联系人和私人空格 | `pre_register_boundary_checked = true`、`private_blank_seen = true`、`scope_clarity +1`。 |
| `ACT7-E01-PERFECT-C01-B` | 只把所有事项填得无错 | `self_control +1`、`private_delay +1`、`graduation_temperature = public_clear_private_blank`。 |

完成条件：`pre_register_boundary_checked`、`graduation_direction_status`、`private_blank_seen`。

---

## `ACT7-E02-PUBLIC-SCOPE` 公开范围确认

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E01-PRE-REGISTER` |
| `next_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `main_location` | 班级材料群 / 共享文档权限页 / 授权回执 |
| `scene_function` | 公开范围、署名、授权和停止条件都清楚，却也让他继续被默认兜底。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 范围公告 | `ACT7-E02-PERFECT-P01` | 班级材料群要求确认公开范围，林亦舟已经把截图、照片、署名和用途分好类。 | A. 先读授权要求；B. 先帮群里整理模板。 | A：`public_boundary +1`；B：`public_credit +1`, `tooling_risk +1`。 |
| 停止条件 | `ACT7-E02-PERFECT-P02` | 公开材料不只是能不能发，也包括谁负责、到哪里为止、毕业后谁不再默认兜底。 | A. 写清公开范围和停止条件；B. 默认自己继续兜底。 | A：`public_scope_boundary_checked = true`, `scope_clarity +1`；B：`tooling_risk +1`, `private_delay +1`。 |
| 署名回声 | `ACT7-E02-PERFECT-P03` | 许棠说这样写最稳，唐骁看了一眼说“稳是稳，就是太像交接文档”。 | A. 保留冷一点的清楚；B. 改得更像感谢稿。 | A：`public_boundary +1`, `public_misread +1`；B：`public_credit +1`, `scope_clarity -1`。 |
| 回执归档 | `ACT7-E02-PERFECT-P04` | 回执生成，文件夹命名没有错。错的是他忽然发现，没有一个文件夹叫“我也需要说”。 | A. 保存回执并留私人备注；B. 只完成归档。 | A：`public_consent_checked = true`, `private_blank_seen = true`；B：`public_consent_checked = true`, `emotional_delay +1`。 |

核心选择窗：`ACT7-E02-PERFECT-CHOICE-01`，位于 `ACT7-E02-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E02-PERFECT-C01-A` | 写清公开范围和停止条件 | `public_scope_boundary_checked = true`、`scope_clarity +1`、`tooling_risk -1`。 |
| `ACT7-E02-PERFECT-C01-B` | 默认自己继续兜底 | `tooling_risk +1`、`public_credit +1`、`graduation_temperature = tooling`。 |

完成条件：`public_scope_boundary_checked`、`public_consent_checked`、`handoff_scope_checked`。

---

## `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `next_event` | `ACT7-E04-THESIS-TOPIC` |
| `main_location` | 青枫居 4XX / 共享盘目录 / 活动归档页 |
| `scene_function` | 最后一个新年目录清楚到几乎没有错，私人话却仍空着。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 目录整齐 | `ACT7-E03-PERFECT-P01` | 最后一个新年目录按时间、来源、授权范围排得很清楚，清楚得不像一次热闹。 | A. 打开目录核来源；B. 先看是否缺文件。 | A：`opening_contrast_seen = true`；B：`self_control +1`, `public_credit +1`。 |
| 私人空格 | `ACT7-E03-PERFECT-P02` | 目录、来源、确认人都齐，唯独当时没有说出口的那句话没有位置。 | A. 留下私人空格说明；B. 只留整理完的目录。 | A：`private_blank_seen = true`, `dorm_warmth +1`；B：`private_delay +1`, `public_misread +1`。 |
| 旧物标注 | `ACT7-E03-PERFECT-P03` | 旧传单、签到表、外卖小票都能标来源。周屿问：“那我们算什么来源？” | A. 承认不是所有事都能归档；B. 用玩笑带过。 | A：`old_object_scope_checked = true`, `old_debt -1`；B：`old_debt +1`, `emotional_delay +1`。 |
| 目录提交 | `ACT7-E03-PERFECT-P04` | 归档提交成功，活动群说“太清楚了”，4XX 群却安静了几秒。 | A. 回 4XX 一句具体话；B. 先回活动群。 | A：`dorm_warmth +1`；B：`public_credit +1`, `private_delay +1`。 |

核心选择窗：`ACT7-E03-PERFECT-CHOICE-01`，位于 `ACT7-E03-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E03-PERFECT-C01-A` | 留下私人空格说明 | `opening_contrast_seen = true`、`private_blank_seen = true`、`dorm_warmth +1`。 |
| `ACT7-E03-PERFECT-C01-B` | 只留整理完的目录 | `public_credit +1`、`private_delay +1`、`graduation_temperature = public_clear_private_blank`。 |

完成条件：`opening_contrast_seen`、`old_object_scope_checked`、`private_blank_seen`。

---

## `ACT7-E04-THESIS-TOPIC` 毕业设计方向与开题

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `next_event` | `ACT7-E05-MARCH-QUEUE` |
| `main_location` | C407 / B204 开题复核 / 履历附件 |
| `scene_function` | 开题依据、履历和职责边界分得很干净，风险是把自己也写进流程。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 开题表 | `ACT7-E04-PERFECT-P01` | 林亦舟的开题表没有错别字，参考依据和实践来源都列得很稳。 | A. 先核题目依据；B. 先补履历附件。 | A：`topic_boundary_checked = true`；B：`public_credit +1`, `time_debt +1`。 |
| 职责边界 | `ACT7-E04-PERFECT-P02` | 活动履历能说明他做过什么，却不能替论文和关系背书。 | A. 写清题目依据和职责边界；B. 用完整履历替代解释。 | A：`scope_clarity +1`, `project_stability +1`；B：`public_credit +1`, `private_delay +1`。 |
| 导师签字 | `ACT7-E04-PERFECT-P03` | 导师签字前，旁边同学请他顺手看格式，唐骁只说“你可以拒绝”。 | A. 先签自己的字；B. 顺手帮别人看完。 | A：`topic_self_signed = true`, `tooling_risk -1`；B：`tooling_risk +1`, `time_debt +1`。 |
| 题目落定 | `ACT7-E04-PERFECT-P04` | 题目通过，文件名也很干净。林亦舟忽然不知道该把“我很累”命名成什么版本。 | A. 给自己留一条备注；B. 直接归档终版。 | A：`private_blank_seen = true`；B：`self_control +1`, `emotional_delay +1`。 |

核心选择窗：`ACT7-E04-PERFECT-CHOICE-01`，位于 `ACT7-E04-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E04-PERFECT-C01-A` | 写清题目依据和职责边界 | `topic_boundary_checked = true`、`scope_clarity +1`、`project_stability +1`。 |
| `ACT7-E04-PERFECT-C01-B` | 用完整履历替代解释 | `public_credit +1`、`private_delay +1`、`graduation_temperature = polite_distance`。 |

完成条件：`topic_boundary_checked`、`topic_self_signed`、`scope_clarity`。

---

## `ACT7-E05-MARCH-QUEUE` 三四月事项排队

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E04-THESIS-TOPIC` |
| `next_event` | `ACT7-E06-THESIS-REVISION` |
| `main_location` | 明德楼窗口 / 证书核验处 / 材料交接群 |
| `scene_function` | 三四月事项排得很稳，但别人开始默认他能顺手替大家收尾。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 队列计划 | `ACT7-E05-PERFECT-P01` | 三四月事项同时排队，他把窗口、证明、证书和照片采集排成一张不冲突的表。 | A. 先看本人事项；B. 先帮群里排总表。 | A：`march_boundary_checked = true`；B：`public_credit +1`, `tooling_risk +1`。 |
| 代办边界 | `ACT7-E05-PERFECT-P02` | 有人说“你顺手一起问一下”，窗口却只认本人确认。 | A. 按本人事项排优先级；B. 顺手替别人补流程。 | A：`queue_item_submitted = true`, `scope_clarity +1`；B：`tooling_risk +1`, `time_debt +1`。 |
| 材料清单 | `ACT7-E05-PERFECT-P03` | 清单上所有勾都能打，只有饭局和当面话没有被列进三四月事项。 | A. 把饭局时间也写进表；B. 先把流程全部清完。 | A：`dorm_warmth +1`；B：`private_delay +1`, `public_misread +1`。 |
| 窗口结束 | `ACT7-E05-PERFECT-P04` | 事项赶上了，负责人夸他稳。4XX 公共桌那段最适合说话的时间也过去了。 | A. 回群补一句具体话；B. 只发已完成截图。 | A：`old_debt -1`；B：`public_credit +1`, `old_debt +1`。 |

核心选择窗：`ACT7-E05-PERFECT-CHOICE-01`，位于 `ACT7-E05-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E05-PERFECT-C01-A` | 按本人事项排优先级 | `march_boundary_checked = true`、`queue_item_submitted = true`、`scope_clarity +1`。 |
| `ACT7-E05-PERFECT-C01-B` | 顺手替别人补流程 | `tooling_risk +1`、`time_debt +1`、`graduation_temperature = tooling`。 |

完成条件：`march_boundary_checked`、`queue_item_submitted`、`handoff_scope_checked`。

---

## `ACT7-E06-THESIS-REVISION` 改论文 / 毕业设计

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E05-MARCH-QUEUE` |
| `next_event` | `ACT7-E07-DEFENSE` |
| `main_location` | C407 / 版本目录 / 共享盘交接页 |
| `scene_function` | 改稿版本最干净，边界最清楚，也最容易继续被找去看别人的问题。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 红批出现 | `ACT7-E06-PERFECT-P01` | 导师红批标出摘要、图表和格式问题，林亦舟把版本号改得一眼能看懂。 | A. 先改自己版本；B. 先整理公共问题清单。 | A：`thesis_boundary_checked = true`；B：`public_credit +1`, `tooling_risk +1`。 |
| 版本边界 | `ACT7-E06-PERFECT-P02` | 共享盘里有人问他能不能顺便看一下。唐骁提醒“顺便”也会变成责任。 | A. 只改自己版本并写交接；B. 继续帮别人收尾。 | A：`thesis_revision_version = self_revised_with_handoff`, `handoff_scope_checked = true`；B：`tooling_risk +1`, `time_debt +1`。 |
| 私人话延后 | `ACT7-E06-PERFECT-P03` | 4XX 群问他今晚在不在，他看着“十点前提交”把话又推到十点以后。 | A. 先回一个具体时间；B. 提交完再说。 | A：`dorm_warmth +1`；B：`private_delay +1`, `emotional_delay +1`。 |
| 提交成功 | `ACT7-E06-PERFECT-P04` | 提交成功，文件名干净得像没发生过混乱。可他知道混乱只是被他压下去了。 | A. 留下交接说明；B. 直接归档终版。 | A：`revision_submitted_before_deadline = true`, `scope_clarity +1`；B：`revision_submitted_before_deadline = true`, `self_control +1`。 |

核心选择窗：`ACT7-E06-PERFECT-CHOICE-01`，位于 `ACT7-E06-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E06-PERFECT-C01-A` | 只改自己版本并写交接 | `thesis_boundary_checked = true`、`thesis_revision_version = self_revised_with_handoff`、`tooling_risk -1`。 |
| `ACT7-E06-PERFECT-C01-B` | 继续帮别人收尾 | `tooling_risk +1`、`time_debt +1`、`graduation_temperature = tooling`。 |

完成条件：`thesis_boundary_checked`、`thesis_revision_version`、`revision_submitted_before_deadline`。

---

## `ACT7-E07-DEFENSE` 答辩日

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E06-THESIS-REVISION` |
| `next_event` | `ACT7-E08-GRAD-PHOTO` |
| `main_location` | C407 答辩门口 / 补交窗口 / 4XX 群 |
| `scene_function` | 答辩材料清楚、补交流程稳定，结尾体面但不一定有人等他吃饭。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 门口排队 | `ACT7-E07-PERFECT-P01` | 答辩门口排队，他的材料顺序、签字页和备份都放在正确位置。 | A. 核对答辩顺序；B. 顺手提醒别人材料顺序。 | A：`defense_order_seen = true`；B：`public_credit +1`, `tooling_risk +1`。 |
| 结果说法 | `ACT7-E07-PERFECT-P02` | 答辩通过后，他能把补交项说得很清楚，却说不出自己其实松了一口气。 | A. 说结果也说自己到场限制；B. 只发体面通过消息。 | A：`defense_boundary_checked = true`, `private_blank_seen = true`；B：`public_misread +1`, `private_delay +1`。 |
| 补交窗口 | `ACT7-E07-PERFECT-P03` | 补交窗口只认本人签字，活动群又问他能不能帮忙汇总答辩通过名单。 | A. 先补交自己的材料；B. 先帮汇总名单。 | A：`defense_post_submit_done = true`；B：`tooling_risk +1`, `time_debt +1`。 |
| 恭喜以后 | `ACT7-E07-PERFECT-P04` | 4XX 群里有人发恭喜，他回得很得体，得体到没人继续追问。 | A. 补一句具体感受；B. 只回谢谢。 | A：`dorm_warmth +1`, `public_misread -1`；B：`public_misread +1`。 |

核心选择窗：`ACT7-E07-PERFECT-CHOICE-01`，位于 `ACT7-E07-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E07-PERFECT-C01-A` | 说结果也说自己到场限制 | `defense_boundary_checked = true`、`private_blank_seen = true`、`dorm_warmth +1`。 |
| `ACT7-E07-PERFECT-C01-B` | 只发体面通过消息 | `public_misread +1`、`private_delay +1`、`graduation_temperature = polite_distance`。 |

完成条件：`defense_boundary_checked`、`defense_post_submit_done`、`private_blank_seen`。

---

## `ACT7-E08-GRAD-PHOTO` 毕业照

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 晨光体育场 / 影像授权表 / 活动照片归档页 |
| `scene_function` | 毕业照授权和公开照边界都清楚，私人同框可能被流程照替代。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 队形集合 | `ACT7-E08-PERFECT-P01` | 晨光体育场排毕业照，他先确认班级队形、公开用途和图包命名。 | A. 先完成班级合照；B. 先核公开图包。 | A：`grad_photo_result_recorded = true`；B：`public_credit +1`, `activity_link +1`。 |
| 授权边界 | `ACT7-E08-PERFECT-P02` | 正脸、背影、活动照、班级照都能分清，只有“站近一点”不是授权表能解决的事。 | A. 确认公开照和私人照边界；B. 让流程照替代私人同框。 | A：`photo_boundary_checked = true`, `public_boundary +1`；B：`private_delay +1`, `public_misread +1`。 |
| 4XX 同框 | `ACT7-E08-PERFECT-P03` | 周屿说站近点，唐骁说别只顾对表，陆沉让出一个位置。 | A. 站过去拍完；B. 站在最方便出队的位置。 | A：`dorm_warmth +1`；B：`self_control +1`, `dorm_warmth -1`。 |
| 预览留存 | `ACT7-E08-PERFECT-P04` | 预览图没有问题。林亦舟却发现，没问题和有纪念意义不是同一件事。 | A. 保存并私下发给 4XX；B. 只归档公开版本。 | A：`private_blank_seen = true`, `dorm_warmth +1`；B：`public_credit +1`, `private_delay +1`。 |

核心选择窗：`ACT7-E08-PERFECT-CHOICE-01`，位于 `ACT7-E08-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-PERFECT-C01-A` | 确认公开照和私人照边界 | `photo_boundary_checked = true`、`public_boundary +1`、`private_blank_seen = true`。 |
| `ACT7-E08-PERFECT-C01-B` | 让流程照替代私人同框 | `private_delay +1`、`public_misread +1`、`graduation_temperature = public_clear_private_blank`。 |

完成条件：`photo_boundary_checked`、`grad_photo_result_recorded`、`private_blank_seen`。

---

## `ACT7-E09-DORM-CLEAR` 清寝与旧物

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居 4XX / 公共桌 / 清寝清单 |
| `scene_function` | 清寝清单无误，公共物品归属明确，但寝室像被整理成办公室。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 清单展开 | `ACT7-E09-PERFECT-P01` | 林亦舟把公共插排、U 盘、旧纸、洗衣卡和钥匙列成清单，没人能说不清楚。 | A. 先分类确认；B. 先把清单发群里。 | A：`old_object_scope_checked = true`；B：`self_control +1`, `public_misread +1`。 |
| 谁确认的 | `ACT7-E09-PERFECT-P02` | 周屿在清单最后写“谁确认的”，那四个字比勾选框更难处理。 | A. 清单后留下来当面说；B. 清到无误就离开。 | A：`shared_item_owner_checked = true`, `dorm_warmth +1`；B：`private_delay +1`, `dorm_warmth -1`。 |
| 交钥匙 | `ACT7-E09-PERFECT-P03` | 宿管窗口收钥匙，他连旧标签都撕得干净。陆沉说“干净得像没人住过”。 | A. 先交钥匙再回头看一眼；B. 直接拍照留档。 | A：`dorm_key_returned = true`, `private_blank_seen = true`；B：`dorm_key_returned = true`, `public_credit +1`。 |
| 空桌回声 | `ACT7-E09-PERFECT-P04` | 公共桌空出来，清单完成，话却没有自动完成。 | A. 坐下十分钟；B. 去补最后一项交接。 | A：`dorm_warmth +1`；B：`tooling_risk +1`, `private_delay +1`。 |

核心选择窗：`ACT7-E09-PERFECT-CHOICE-01`，位于 `ACT7-E09-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-PERFECT-C01-A` | 清单后留下来当面说 | `shared_item_owner_checked = true`、`dorm_warmth +1`、`private_blank_seen = true`。 |
| `ACT7-E09-PERFECT-C01-B` | 清到无误就离开 | `private_delay +1`、`dorm_warmth -1`、`graduation_temperature = low_temperature`。 |

完成条件：`old_object_scope_checked`、`shared_item_owner_checked`、`dorm_key_returned`。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 东北饺子馆 / 活动材料群 / 校门口 |
| `scene_function` | 最后一顿饭检验他能不能停一次兜底，先坐下来而不是先收尾。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 饭局撞尾款 | `ACT7-E10-PERFECT-P01` | 4XX 最后一顿饭订好，材料群也说“就差你最后核一下”。 | A. 先说明饭局安排；B. 先问材料要多久。 | A：`meal_boundary_checked = true`；B：`tooling_risk +1`, `time_debt +1`。 |
| 停一次兜底 | `ACT7-E10-PERFECT-P02` | 这一次不是他不会处理，而是他要不要停下来坐到桌边。 | A. 为最后饭局停止一次兜底；B. 先把最后材料收尾。 | A：`meal_attendance_locked = true`, `dorm_warmth +1`；B：`public_credit +1`, `private_delay +1`。 |
| 饭桌上 | `ACT7-E10-PERFECT-P03` | 周屿说他像什么都能安排好，唐骁补一句“也像不需要别人安排”。 | A. 承认自己不是不需要；B. 说这样省事。 | A：`public_misread -1`, `private_blank_seen = true`；B：`public_misread +1`。 |
| 饭后确认 | `ACT7-E10-PERFECT-P04` | 散场后，活动群还在等他。4XX 问他明天几点走。 | A. 饭后再回材料交接；B. 直接去补材料。 | A：`perfect_reply_after_meal = true`, `dorm_warmth +1`；B：`tooling_risk +1`, `dorm_warmth -1`。 |

核心选择窗：`ACT7-E10-PERFECT-CHOICE-01`，位于 `ACT7-E10-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-PERFECT-C01-A` | 为最后饭局停止一次兜底 | `meal_boundary_checked = true`、`meal_attendance_locked = true`、`dorm_warmth +1`。 |
| `ACT7-E10-PERFECT-C01-B` | 先把最后材料收尾 | `public_credit +1`、`private_delay +1`、`graduation_temperature = tooling`。 |

完成条件：`meal_boundary_checked`、`meal_attendance_locked`、`perfect_reply_after_meal`。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 明德楼离校窗口 / 档案窗口 / 交接文档 |
| `scene_function` | 离校手续、证书、档案和交接人都清楚，毕业后是否继续默认找他要结算。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 离校清单 | `ACT7-E11-PERFECT-P01` | 离校系统一项项变绿，证书、档案、照片授权和材料交接都排在正确顺序。 | A. 先办本人离校清单；B. 先核最终交接文档。 | A：`leaving_boundary_checked = true`；B：`public_credit +1`, `tooling_risk +1`。 |
| 交接人 | `ACT7-E11-PERFECT-P02` | 活动负责人说“以后还找你方便”。林亦舟看见交接人那一栏还空着。 | A. 写清交接人和停止默认；B. 保持毕业后还能找他。 | A：`certificate_or_archive_seen = true`, `handoff_scope_checked = true`；B：`tooling_risk +1`, `perfect_contact_scope = still_available`。 |
| 第一周安排 | `ACT7-E11-PERFECT-P03` | 第一周怎么过、住哪里、什么时候报到，都能说清。可他不确定该不该告诉 4XX。 | A. 发一条具体行程；B. 只发已办完。 | A：`dorm_warmth +1`, `private_blank_seen = true`；B：`public_misread +1`, `private_delay +1`。 |
| 站前确认 | `ACT7-E11-PERFECT-P04` | 去武生院站前，活动群问最终版能不能再问他，4XX 群问到了说一声。 | A. 约定低频真实联系；B. 只保体面流程确认。 | A：`perfect_contact_scope = low_contact_with_boundary`；B：`perfect_contact_scope = polite_distance`。 |

核心选择窗：`ACT7-E11-PERFECT-CHOICE-01`，位于 `ACT7-E11-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-PERFECT-C01-A` | 写清交接人和停止默认 | `certificate_or_archive_seen = true`、`handoff_scope_checked = true`、`tooling_risk -1`。 |
| `ACT7-E11-PERFECT-C01-B` | 保持毕业后还能找他 | `tooling_risk +1`、`perfect_contact_scope = still_available`、`graduation_temperature = tooling`。 |

完成条件：`leaving_boundary_checked`、`certificate_or_archive_seen`、`perfect_contact_scope`。

---

## `ACT7-E12-STATION-AFTER` 武生院站后

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `null` |
| `main_location` | 武生院站 / 地铁车厢 / 4XX 群与交接文档 |
| `scene_function` | 输出完美线最终温度：公开清楚、工具化、体面低温、迟来私人话、低温或安静边界。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 进站前 | `ACT7-E12-PERFECT-P01` | 武生院站口人很多，林亦舟手里没有漏办项。手机里还有一条“以后有事还能找你吧”。 | A. 先报站；B. 先回交接消息。 | A：`station_after_echo_seen = true`；B：`tooling_risk +1`, `public_credit +1`。 |
| 到站以后 | `ACT7-E12-PERFECT-P02` | 地铁开出校园站，最后不是还有没有事没办，而是他还愿不愿意被默认继续办。 | A. 清楚边界加低频真实联系；B. 公开完整，私人留白。 | A：`perfect_contact_scope = low_contact_with_boundary`, `tooling_risk -1`；B：`perfect_contact_scope = public_clear_private_blank`, `private_delay +1`。 |
| 迟来一句 | `ACT7-E12-PERFECT-P03` | 4XX 群里只有“到了说一声”。他终于可以不写表格，只写一句人话。 | A. 发一句具体私人话；B. 只回到了。 | A：`private_blank_seen = true`, `dorm_warmth +1`；B：`public_misread +1`。 |
| 站后温度 | `ACT7-E12-PERFECT-P04` | 出站后，交接文档停在已完成，私人空格还在。他可以把边界写清，也可以让空格继续空着。 | A. 停止默认兜底并保留低频联系；B. 维持体面距离。 | A：`graduation_temperature = quiet_boundary`；B：`graduation_temperature = polite_distance`。 |

核心选择窗：`ACT7-E12-PERFECT-CHOICE-01`，位于 `ACT7-E12-PERFECT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-PERFECT-C01-A` | 清楚边界加低频真实联系 | `perfect_contact_scope = low_contact_with_boundary`、`tooling_risk -1`、`graduation_temperature = quiet_boundary`。 |
| `ACT7-E12-PERFECT-C01-B` | 公开完整，私人留白 | `perfect_contact_scope = public_clear_private_blank`、`private_delay +1`、`graduation_temperature = public_clear_private_blank`。 |

完成条件：`perfect_contact_scope`、`graduation_temperature`、`station_after_echo_seen`。

---

## 结局温度建议

| 结局 | 条件建议 | 文本落点 |
|---|---|---|
| `PERFECT-END-CLEAR-PUBLIC` | `public_credit >= 5`、`public_boundary >= 4`、`scope_clarity >= 4` | 毕业材料、公开署名和去向说明都清楚；活动圈低频找他，但不再默认兜底。 |
| `PERFECT-END-TOOLING` | `tooling_risk >= 5`、`private_delay >= 4` | 他被许多人记得很靠谱，毕业后仍有人找他补流程；私人关系却更少被问起。 |
| `PERFECT-END-POLITE-DISTANCE` | `dorm_warmth <= 1`、`public_misread >= 4` | 4XX 承认他处理得好，但关系停在体面和事项确认。 |
| `PERFECT-END-LATE-PRIVATE` | `private_blank_seen = true`、`dorm_warmth >= 2`、`scope_clarity >= 3` | 他终于在毕业前说出一两句具体的私人话，不圆满，但不再全靠表格。 |
| `PERFECT-END-LOW-TEMPERATURE` | `emotional_delay >= 4`、`old_debt >= 4` | 所有材料都按时交了，许多话却过了最适合说的时候。 |
| `PERFECT-END-QUIET-BOUNDARY` | `tooling_risk <= 2`、`public_boundary >= 4`、`perfect_contact_scope = low_contact_with_boundary` | 他学会不把自己也写成公共工具，毕业后联系少但边界清楚。 |

## 后续 JSON 接入建议

- 正式 JSON 文件建议命名为 `开发数据_IF剧情页级JSON_R3-PERFECT_v1.json`。
- `source_docs` 至少引用本文、`开发长线_IF可玩支线R3-PERFECT完美子外流.md`、`开发规则_IF第七卷毕业结算与共用事件变体矩阵.md`。
- 每个事件保持 4 个剧情页、1 个二方向选择窗、`same_mother_event = true`、`route_switch_allowed = false`。
- 重点记录 `scope_clarity`、`tooling_risk`、`private_delay`、`private_blank_seen`、`handoff_scope_checked`、`perfect_contact_scope`，用于区分公开清楚、工具化、体面低温、迟来私人话、低温和安静边界。
