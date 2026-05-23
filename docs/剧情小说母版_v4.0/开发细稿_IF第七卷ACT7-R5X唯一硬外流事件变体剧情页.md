# IF 第七卷 ACT7-R5X 唯一硬外流事件变体剧情页级细稿

本文用于把 `R5X-HARD` / `POOL-R5X-HARD` 的第七卷毕业结算拆成 12 个同母事件变体。它不是普通摆烂线，也不是许澈奖励线，更不是新人更好的替代结局；它只结算第五幕唯一硬外流后，林亦舟已经把原多线整体放下，第七卷仍要经过毕业流程时，新圈、旧人擦肩、消息切断、薄关系和武生院站另一边怎样落地。

5X 的第七卷核心问题是：当旧线已经不可回退，新圈也没有义务替他记住旧故事，林亦舟能不能承认自己当初确实离开了，而不是把离开写成胜利、惩罚或被谁拯救。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5X-HARD` |
| `route_pool_id` | `POOL-R5X-HARD` |
| `act7_variant_id` | `ACT7-R5X` |
| `entry_choice` | `P0E_5X_FOLLOW_XUCHE` |
| `confirm_choice` | `P0E_5X_CONFIRM_NO_RETURN` |
| `route_lock` | `5x` |
| `hard_outflow` | `true` |
| `route_switch_allowed` | `false` |
| `same_mother_event` | `true` |

禁止项：

- 不允许在第七卷回原多线完整修补；旧线人物只能软照面、消息、同场流程或低温回声。
- 不允许把许澈写成拯救者、新男主或稳定替代宿舍的人。
- 不允许把新圈写成更好的家庭、宿舍或爱情；它的轻松真实存在，它的薄和散也必须真实存在。
- 不允许把 5X 写成惩罚线或奖励线；它是玩家确认不回头后的不可逆生活后果。
- 不允许在毕业流程里重新开放周屿、唐骁、陆沉、晚风、沈嘉禾或夏知微完整线。

## 关键变量

| 变量 | 用途 |
|---|---|
| `hard_outflow_candidate` | 进入硬外流前的候选强度，第七卷只作锁线证据回声。 |
| `route_lock` | 固定为 `5x`。 |
| `hard_outflow` | 固定为 `true`。 |
| `new_circle_trust` | 新圈熟悉度：许澈、韩野、蒋沐等轻关系。 |
| `thin_relation` | 薄关系显形程度：散局、改约、AA 不清、玩笑带过。 |
| `old_dorm_distance` | 旧宿舍距离。 |
| `message_cut` | 群静音、电话不接、只读不回、置顶下移。 |
| `money_cost` | 新圈现实成本：夜宵、台球、打车、垫钱。 |
| `soft_passing` | 旧人擦肩、短句、同场流程次数。 |
| `new_circle_truth` | 是否看清新圈不是答案。 |
| `identity_drift` | 是否继续用新圈身份遮旧账。 |
| `5x_regret` | 5X 遗憾强度。 |
| `xuche_boundary_seen` | 是否看见并承认许澈边界。 |
| `old_message_sent` | 毕业时是否给旧群或旧人发出信息。 |
| `deleted_pin` | 是否删除旧群置顶或让旧群沉下去。 |
| `graduation_temperature` | 清醒离开、薄圈散场、许澈边界、旧消息、删除置顶或站台空白。 |

## 12 事件总表

| 事件 | 5X 变体功能 |
|---|---|
| `ACT7-E01-PRE-REGISTER` | 旧群预登记只是软消息，新圈问毕业后去哪像随口问天气。 |
| `ACT7-E02-PUBLIC-SCOPE` | 公开范围只保最低本人流程，旧线授权和新圈照片都不能回旧线。 |
| `ACT7-E03-LAST-NEW-YEAR` | 旧线的最后一个新年在远处成形，新圈没有义务替他记住开学。 |
| `ACT7-E04-THESIS-TOPIC` | 开题只交自己的最低责任，新圈不理解旧项目，旧人只看见结果。 |
| `ACT7-E05-MARCH-QUEUE` | 三四月窗口仍发生，但旧群消息更短，新圈约局更快散。 |
| `ACT7-E06-THESIS-REVISION` | 新圈可以陪他熬夜，但不理解旧项目；旧人只看见他交了终版。 |
| `ACT7-E07-DEFENSE` | 许澈或新圈问一句“过了没”，旧人只在同场流程里擦肩。 |
| `ACT7-E08-GRAD-PHOTO` | 毕业照外侧和新圈随手照并置，旧同框不能重新修补。 |
| `ACT7-E09-DORM-CLEAR` | 清寝旧物能碰到，但不再由林亦舟主导旧宿舍修补。 |
| `ACT7-E10-LAST-MEAL` | 旧饭局和新圈饭局同时降频，最后一顿饭不能回旧线。 |
| `ACT7-E11-LEAVING-PAPERS` | 离校手续把旧群置顶、新圈去向和许澈边界压到一起。 |
| `ACT7-E12-STATION-AFTER` | 武生院站另一边输出清醒离开、薄圈散场、旧消息、删除置顶或站台空白。 |

---

## `ACT7-E01-PRE-REGISTER` 毕业去向预登记

| 字段 | 值 |
|---|---|
| `previous_event` | `null` |
| `next_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `main_location` | B204 / 教务系统 / 新圈群与旧群置顶 |
| `scene_function` | 旧群预登记只是软消息，新圈问毕业后去哪像随口问天气。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 表格仍来 | `ACT7-E01-R5X-P01` | B204 仍发毕业去向预登记，旧群也有人转发通知，但没人再点名等他确认。 | A. 先填本人去向；B. 先看新圈约饭消息。 | A：`pre_register_boundary_checked = true`；B：`new_circle_trust +1`, `message_cut +1`。 |
| 像天气 | `ACT7-E01-R5X-P02` | 许澈问毕业后去哪，语气像问今晚吃什么，不像要替他接住什么。 | A. 按自己去向填，不借旧人；B. 只跟新圈随口说。 | A：`graduation_direction_status = submitted`, `new_circle_truth +1`；B：`identity_drift +1`, `old_dorm_distance +1`。 |
| 旧联系人 | `ACT7-E01-R5X-P03` | 旧联系人栏能填，旧群置顶也还在，但它们已经不是回线按钮。 | A. 保留正式联系人，不重开私线；B. 把旧联系人都留空。 | A：`soft_passing +1`；B：`message_cut +1`, `5x_regret +1`。 |
| 提交后 | `ACT7-E01-R5X-P04` | 表格提交成功，新圈问他要不要去后街吃点东西，旧群消息沉到第二屏。 | A. 报备最低流程后赴约；B. 直接赴约。 | A：`project_stability +1`；B：`old_dorm_distance +1`, `message_cut +1`。 |

核心选择窗：`ACT7-E01-R5X-CHOICE-01`，位于 `ACT7-E01-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E01-R5X-C01-A` | 按自己去向填，不借旧人 | `pre_register_boundary_checked = true`、`graduation_direction_status = submitted`、`new_circle_truth +1`。 |
| `ACT7-E01-R5X-C01-B` | 只跟新圈随口说 | `identity_drift +1`、`message_cut +1`、`graduation_temperature = 5x_regret`。 |

完成条件：`pre_register_boundary_checked`、`graduation_direction_status`、`route_lock`。

---

## `ACT7-E02-PUBLIC-SCOPE` 公开范围确认

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E01-PRE-REGISTER` |
| `next_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `main_location` | 班级材料群 / 新圈随手照 / 旧授权回执 |
| `scene_function` | 公开范围只保最低本人流程，旧线授权和新圈照片都不能回旧线。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 材料提醒 | `ACT7-E02-R5X-P01` | 班级材料群提醒公开范围确认，新圈群里有人随手发了后街合照。 | A. 先确认本人公开材料；B. 先看新圈照片。 | A：`public_scope_boundary_checked = true`；B：`new_circle_trust +1`, `identity_drift +1`。 |
| 旧授权 | `ACT7-E02-R5X-P02` | 旧线照片、采访或项目材料仍要最低授权，但这不再打开旧关系解释。 | A. 只确认最低公开材料；B. 切掉旧授权回声。 | A：`public_consent_checked = true`, `soft_passing +1`；B：`message_cut +1`, `old_dorm_distance +1`。 |
| 新圈照片 | `ACT7-E02-R5X-P03` | 韩野说随便发，蒋沐问要不要打码。许澈只说“不想发就不发”。 | A. 说清新圈照片边界；B. 随他们发。 | A：`new_circle_truth +1`；B：`thin_relation +1`, `public_boundary -1`。 |
| 回执以后 | `ACT7-E02-R5X-P04` | 公开回执保存好，旧群没有追问，新圈也没有继续讨论。事情轻得像没有发生。 | A. 保存回执；B. 不再看旧群。 | A：`public_boundary +1`；B：`message_cut +1`。 |

核心选择窗：`ACT7-E02-R5X-CHOICE-01`，位于 `ACT7-E02-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E02-R5X-C01-A` | 只确认最低公开材料 | `public_scope_boundary_checked = true`、`public_consent_checked = true`、`soft_passing +1`。 |
| `ACT7-E02-R5X-C01-B` | 切掉旧授权回声 | `message_cut +1`、`old_dorm_distance +1`、`graduation_temperature = deleted_pin_shadow`。 |

完成条件：`public_scope_boundary_checked`、`public_consent_checked`、`hard_outflow`。

---

## `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `next_event` | `ACT7-E04-THESIS-TOPIC` |
| `main_location` | 青枫居远处 / 后街小馆 / 旧共享盘目录 |
| `scene_function` | 旧线的最后一个新年在远处成形，新圈没有义务替他记住开学。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 远处目录 | `ACT7-E03-R5X-P01` | 旧共享盘里出现“最后一个新年”目录，林亦舟只在消息预览里看见标题。 | A. 打开看一眼；B. 直接划掉。 | A：`opening_contrast_seen = true`, `soft_passing +1`；B：`message_cut +1`。 |
| 新桌子 | `ACT7-E03-R5X-P02` | 后街小馆的桌子很吵，没人问他第一卷怎么开始，也没人记得 4XX 那张桌。 | A. 承认旧新年在远处发生；B. 用新局覆盖。 | A：`new_circle_truth +1`, `5x_regret +1`；B：`identity_drift +1`, `thin_relation +1`。 |
| 旧物提示 | `ACT7-E03-R5X-P03` | 一张旧传单或外卖小票从包里掉出来，许澈看见了，但没有追问。 | A. 自己收起；B. 扔掉。 | A：`old_object_scope_checked = true`；B：`old_dorm_distance +1`, `5x_regret +1`。 |
| 散场很快 | `ACT7-E03-R5X-P04` | 新局散得比吵架快，大家说下次约，谁也没问下次是哪天。 | A. 问一句下次；B. 装作不在意。 | A：`new_circle_truth +1`；B：`thin_relation +1`。 |

核心选择窗：`ACT7-E03-R5X-CHOICE-01`，位于 `ACT7-E03-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E03-R5X-C01-A` | 承认旧新年在远处发生 | `opening_contrast_seen = true`、`new_circle_truth +1`、`5x_regret +1`。 |
| `ACT7-E03-R5X-C01-B` | 用新局覆盖 | `identity_drift +1`、`thin_relation +1`、`graduation_temperature = thin_circle`。 |

完成条件：`opening_contrast_seen`、`old_object_scope_checked`、`new_circle_truth`。

---

## `ACT7-E04-THESIS-TOPIC` 毕业设计方向与开题

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `next_event` | `ACT7-E05-MARCH-QUEUE` |
| `main_location` | C407 / 后街便利店 / 教务系统 |
| `scene_function` | 开题只交自己的最低责任，新圈不理解旧项目，旧人只看见结果。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 开题页 | `ACT7-E04-R5X-P01` | 开题表仍要填，C407 仍要最低材料，只是旧项目组不再等他完整解释。 | A. 先交自己的题目；B. 先去新圈约好的局。 | A：`topic_boundary_checked = true`；B：`new_circle_trust +1`, `project_stability -1`。 |
| 旧项目 | `ACT7-E04-R5X-P02` | 唐骁或同学在同场流程里看见他交表，没有要求他回到旧线。 | A. 只交自己的题目与最低责任；B. 用新圈时间遮旧项目。 | A：`project_stability +1`, `soft_passing +1`；B：`identity_drift +1`, `5x_regret +1`。 |
| 许澈不懂 | `ACT7-E04-R5X-P03` | 许澈问他题目是什么，听完只说“挺麻烦”，没有假装懂。 | A. 接受他不懂；B. 说没什么。 | A：`new_circle_truth +1`；B：`thin_relation +1`。 |
| 签字以后 | `ACT7-E04-R5X-P04` | 签字完成，旧群没有追问，安静得像一种确认。 | A. 保存签字页；B. 不看旧群。 | A：`topic_self_signed = true`；B：`message_cut +1`。 |

核心选择窗：`ACT7-E04-R5X-CHOICE-01`，位于 `ACT7-E04-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E04-R5X-C01-A` | 只交自己的题目与最低责任 | `topic_boundary_checked = true`、`project_stability +1`、`soft_passing +1`。 |
| `ACT7-E04-R5X-C01-B` | 用新圈时间遮旧项目 | `identity_drift +1`、`project_stability -1`、`graduation_temperature = 5x_regret`。 |

完成条件：`topic_boundary_checked`、`topic_self_signed`、`project_stability`。

---

## `ACT7-E05-MARCH-QUEUE` 三四月事项排队

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E04-THESIS-TOPIC` |
| `next_event` | `ACT7-E06-THESIS-REVISION` |
| `main_location` | 明德楼窗口 / 台球厅消息 / 旧群短句 |
| `scene_function` | 三四月窗口仍发生，但旧群消息更短，新圈约局更快散。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 窗口排队 | `ACT7-E05-R5X-P01` | 实习预收、证书核验和材料窗口仍排队，新圈群问晚上台球还来不来。 | A. 先办本人事项；B. 先回新圈消息。 | A：`march_boundary_checked = true`；B：`new_circle_trust +1`, `time_debt +1`。 |
| 旧群短句 | `ACT7-E05-R5X-P02` | 旧群只发“窗口在三楼”，没有人问他要不要一起去。 | A. 完成本人事项不回旧线；B. 让消息继续断。 | A：`queue_item_submitted = true`, `soft_passing +1`；B：`message_cut +1`, `old_dorm_distance +1`。 |
| 钱和票 | `ACT7-E05-R5X-P03` | 台球费、夜宵钱和打印费挤在一起，新圈的钱账也不是自动清楚。 | A. 当场 AA 说清；B. 先垫钱。 | A：`new_circle_truth +1`；B：`money_cost +1`, `thin_relation +1`。 |
| 窗口之后 | `ACT7-E05-R5X-P04` | 事项办完，他没有地方需要回去解释，轻松和空都是真的。 | A. 去新圈但保留流程截图；B. 直接去新圈。 | A：`project_stability +1`；B：`identity_drift +1`。 |

核心选择窗：`ACT7-E05-R5X-CHOICE-01`，位于 `ACT7-E05-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E05-R5X-C01-A` | 完成本人事项不回旧线 | `march_boundary_checked = true`、`queue_item_submitted = true`、`soft_passing +1`。 |
| `ACT7-E05-R5X-C01-B` | 让消息继续断 | `message_cut +1`、`old_dorm_distance +1`、`graduation_temperature = deleted_pin_shadow`。 |

完成条件：`march_boundary_checked`、`queue_item_submitted`、`message_cut`。

---

## `ACT7-E06-THESIS-REVISION` 改论文 / 毕业设计

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E05-MARCH-QUEUE` |
| `next_event` | `ACT7-E07-DEFENSE` |
| `main_location` | C407 / 便利店后门 / 新圈夜宵桌 |
| `scene_function` | 新圈可以陪他熬夜，但不理解旧项目；旧人只看见他交了终版。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 红批到来 | `ACT7-E06-R5X-P01` | 导师红批发来，许澈在便利店后门说“你先弄，弄完来坐会”。 | A. 先改自己的版本；B. 先去坐一会。 | A：`thesis_boundary_checked = true`；B：`new_circle_trust +1`, `time_debt +1`。 |
| 不理解旧项目 | `ACT7-E06-R5X-P02` | 新圈可以陪他熬夜，却不理解 C407 旧项目为什么这么重。 | A. 自己改完不找旧人；B. 熬夜跟新圈混过。 | A：`thesis_revision_version = self_revised_5x`, `project_stability +1`；B：`identity_drift +1`, `project_stability -1`。 |
| 旧人结果 | `ACT7-E06-R5X-P03` | 旧人只在系统里看见他提交了终版，不再问他为什么没来讨论。 | A. 接受只剩结果；B. 私聊一句但不解释。 | A：`old_dorm_distance +1`；B：`soft_passing +1`, `5x_regret +1`。 |
| 提交成功 | `ACT7-E06-R5X-P04` | 终版提交成功，新圈夜宵已经散了一半，旧群也没有新消息。 | A. 保存提交回执；B. 去追散局。 | A：`revision_submitted_before_deadline = true`；B：`thin_relation +1`。 |

核心选择窗：`ACT7-E06-R5X-CHOICE-01`，位于 `ACT7-E06-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E06-R5X-C01-A` | 自己改完不找旧人 | `thesis_boundary_checked = true`、`thesis_revision_version = self_revised_5x`、`project_stability +1`。 |
| `ACT7-E06-R5X-C01-B` | 熬夜跟新圈混过 | `identity_drift +1`、`project_stability -1`、`graduation_temperature = thin_circle`。 |

完成条件：`thesis_boundary_checked`、`thesis_revision_version`、`revision_submitted_before_deadline`。

---

## `ACT7-E07-DEFENSE` 答辩日

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E06-THESIS-REVISION` |
| `next_event` | `ACT7-E08-GRAD-PHOTO` |
| `main_location` | C407 答辩门口 / 走廊擦肩 / 新圈群 |
| `scene_function` | 许澈或新圈问一句“过了没”，旧人只在同场流程里擦肩。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 门口排队 | `ACT7-E07-R5X-P01` | 答辩门口排队，周屿或唐骁从另一边走过，谁都没有停太久。 | A. 点头就走；B. 发一句短消息。 | A：`defense_order_seen = true`, `soft_passing +1`；B：`5x_regret +1`。 |
| 过了没 | `ACT7-E07-R5X-P02` | 许澈在群里问“过了没”，像问一局游戏赢没赢。 | A. 简单说过了并补交；B. 只跟新圈发。 | A：`defense_boundary_checked = true`, `defense_post_submit_done = true`；B：`new_circle_trust +1`, `message_cut +1`。 |
| 旧人同场 | `ACT7-E07-R5X-P03` | 陆沉在补交窗口外看见他，只点了一下头，没替他说旧事。 | A. 点头回应；B. 假装没看见。 | A：`soft_passing +1`；B：`old_dorm_distance +1`。 |
| 答辩以后 | `ACT7-E07-R5X-P04` | 新圈说今晚吃点好的，旧群只有一条“都过了吧”。 | A. 回最低流程；B. 直接赴约。 | A：`project_stability +1`；B：`new_circle_trust +1`, `message_cut +1`。 |

核心选择窗：`ACT7-E07-R5X-CHOICE-01`，位于 `ACT7-E07-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E07-R5X-C01-A` | 简单说过了并补交 | `defense_boundary_checked = true`、`defense_post_submit_done = true`、`new_circle_truth +1`。 |
| `ACT7-E07-R5X-C01-B` | 只跟新圈发 | `new_circle_trust +1`、`message_cut +1`、`graduation_temperature = 5x_regret`。 |

完成条件：`defense_boundary_checked`、`defense_post_submit_done`、`soft_passing`。

---

## `ACT7-E08-GRAD-PHOTO` 毕业照

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 晨光体育场 / 台球厅门口 / 新圈随手照 |
| `scene_function` | 毕业照外侧和新圈随手照并置，旧同框不能重新修补。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 队形外侧 | `ACT7-E08-R5X-P01` | 晨光体育场排队，4XX 那边有自己的站位，林亦舟站在外侧也能完成流程。 | A. 站外侧完成合照；B. 避开旧队形。 | A：`grad_photo_result_recorded = true`, `soft_passing +1`；B：`old_dorm_distance +1`。 |
| 授权表 | `ACT7-E08-R5X-P02` | 毕业照授权仍要签，签完也不会把旧同框修回来。 | A. 签清公开授权；B. 让别人代看用途。 | A：`photo_boundary_checked = true`；B：`public_boundary -1`。 |
| 新圈随手照 | `ACT7-E08-R5X-P03` | 新圈在台球厅门口随手拍了一张，画面轻，像随时会被刷过去。 | A. 去拍新圈随手照；B. 留在旧照外侧多站一会。 | A：`new_circle_trust +1`, `identity_drift +1`；B：`soft_passing +1`, `5x_regret +1`。 |
| 预览以后 | `ACT7-E08-R5X-P04` | 两张照片都在手机里，一张太重，一张太轻。 | A. 分开保存；B. 删除旧照预览。 | A：`new_circle_truth +1`；B：`deleted_pin +1`, `message_cut +1`。 |

核心选择窗：`ACT7-E08-R5X-CHOICE-01`，位于 `ACT7-E08-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-R5X-C01-A` | 站外侧完成合照 | `photo_boundary_checked = true`、`grad_photo_result_recorded = true`、`soft_passing +1`。 |
| `ACT7-E08-R5X-C01-B` | 去拍新圈随手照 | `new_circle_trust +1`、`identity_drift +1`、`graduation_temperature = thin_circle`。 |

完成条件：`photo_boundary_checked`、`grad_photo_result_recorded`、`new_circle_truth`。

---

## `ACT7-E09-DORM-CLEAR` 清寝与旧物

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居走廊 / 宿管窗口 / 旧物袋 |
| `scene_function` | 清寝旧物能碰到，但不再由林亦舟主导旧宿舍修补。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 走廊旧物 | `ACT7-E09-R5X-P01` | 清寝时，旧物袋摆在走廊边，里面有他曾经用过的便签和公共物品标签。 | A. 处理旧物但不进门；B. 避开清寝现场。 | A：`old_object_scope_checked = true`, `soft_passing +1`；B：`old_dorm_distance +1`, `5x_regret +1`。 |
| 公共物品 | `ACT7-E09-R5X-P02` | 宿管窗口仍要本人确认，旧宿舍却已经各自把东西分完。 | A. 只确认本人部分；B. 留一句“辛苦了”。 | A：`shared_item_owner_checked = true`；B：`old_message_sent = true`, `5x_regret +1`。 |
| 交钥匙 | `ACT7-E09-R5X-P03` | 钥匙交出去时，旧门还在身后。他已经没有回去重写关系的按钮。 | A. 交钥匙离开；B. 回头看一眼。 | A：`dorm_key_returned = true`；B：`dorm_key_returned = true`, `soft_passing +1`。 |
| 新圈消息 | `ACT7-E09-R5X-P04` | 新圈问今晚还来不来，像清寝只是另一个普通下午。 | A. 先完成清寝回执；B. 直接回新圈。 | A：`project_stability +1`；B：`identity_drift +1`。 |

核心选择窗：`ACT7-E09-R5X-CHOICE-01`，位于 `ACT7-E09-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-R5X-C01-A` | 处理旧物但不进门 | `old_object_scope_checked = true`、`shared_item_owner_checked = true`、`soft_passing +1`。 |
| `ACT7-E09-R5X-C01-B` | 避开清寝现场 | `old_dorm_distance +1`、`5x_regret +1`、`graduation_temperature = 5x_regret`。 |

完成条件：`old_object_scope_checked`、`shared_item_owner_checked`、`dorm_key_returned`。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 东北饺子馆远处 / 后街小馆 / 新圈群 |
| `scene_function` | 旧饭局和新圈饭局同时降频，最后一顿饭不能回旧线。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 两张桌 | `ACT7-E10-R5X-P01` | 4XX 最后一顿饭订在东北饺子馆，新圈说后街也能随便吃点。 | A. 看一眼旧饭局消息；B. 直接回新圈。 | A：`soft_passing +1`；B：`new_circle_trust +1`, `message_cut +1`。 |
| 不能回线 | `ACT7-E10-R5X-P02` | 他可以发祝福，也可以坐到新桌，但不能把这一顿饭当作回旧线按钮。 | A. 发一句祝福但不回线；B. 去新圈饭局。 | A：`meal_boundary_checked = true`, `old_message_sent = true`；B：`thin_relation +1`, `new_circle_trust +1`。 |
| 新饭局 | `ACT7-E10-R5X-P03` | 新圈饭局没有旧账，也没有人非要坐到最后。轻松是真的，散得快也是真的。 | A. 问清 AA；B. 装作都行。 | A：`new_circle_truth +1`；B：`money_cost +1`, `thin_relation +1`。 |
| 饭后 | `ACT7-E10-R5X-P04` | 旧群没有再追问，新圈也各自回去了。街口风一吹，两边都轻了。 | A. 保存旧群回复；B. 把旧群下移。 | A：`meal_attendance_locked = true`, `5x_regret +1`；B：`deleted_pin +1`。 |

核心选择窗：`ACT7-E10-R5X-CHOICE-01`，位于 `ACT7-E10-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-R5X-C01-A` | 发一句祝福但不回线 | `meal_boundary_checked = true`、`old_message_sent = true`、`soft_passing +1`。 |
| `ACT7-E10-R5X-C01-B` | 去新圈饭局 | `thin_relation +1`、`new_circle_trust +1`、`graduation_temperature = thin_circle`。 |

完成条件：`meal_boundary_checked`、`meal_attendance_locked`、`old_message_sent`。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 明德楼离校窗口 / 便利店门口 / 旧群置顶 |
| `scene_function` | 离校手续把旧群置顶、新圈去向和许澈边界压到一起。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 离校清单 | `ACT7-E11-R5X-P01` | 离校系统一项项变绿，旧群置顶还在，许澈问他哪天走。 | A. 先办离校手续；B. 先回许澈。 | A：`leaving_boundary_checked = true`；B：`new_circle_trust +1`。 |
| 许澈边界 | `ACT7-E11-R5X-P02` | 许澈说自己也不一定留在这边，他没有义务成为新的终点。 | A. 说清新圈有限和旧线不可回；B. 保持切断。 | A：`xuche_boundary_seen = true`, `new_circle_truth +1`；B：`message_cut +1`, `identity_drift +1`。 |
| 证书档案 | `ACT7-E11-R5X-P03` | 证书和档案只认本人，不认他在哪个圈子里。流程冷静地把他往外送。 | A. 完成本人签收；B. 只拍照留存。 | A：`certificate_or_archive_seen = true`；B：`public_boundary -1`。 |
| 站前消息 | `ACT7-E11-R5X-P04` | 旧群问到了说一声，新圈问要不要最后打台球。两个问题都不像答案。 | A. 给旧群发最低消息；B. 删除旧群置顶。 | A：`old_message_sent = true`；B：`deleted_pin = true`, `message_cut +1`。 |

核心选择窗：`ACT7-E11-R5X-CHOICE-01`，位于 `ACT7-E11-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-R5X-C01-A` | 说清新圈有限和旧线不可回 | `xuche_boundary_seen = true`、`new_circle_truth +1`、`5x_regret -1`。 |
| `ACT7-E11-R5X-C01-B` | 保持切断 | `message_cut +1`、`identity_drift +1`、`graduation_temperature = deleted_pin_shadow`。 |

完成条件：`leaving_boundary_checked`、`certificate_or_archive_seen`、`xuche_boundary_seen`。

---

## `ACT7-E12-STATION-AFTER` 武生院站后

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `null` |
| `main_location` | 武生院站 / 地铁车厢 / 旧群与许澈私聊 |
| `scene_function` | 武生院站另一边输出清醒离开、薄圈散场、旧消息、删除置顶或站台空白。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 另一边 | `ACT7-E12-R5X-P01` | 武生院站口人很多，旧人可能在另一边，新圈也未必有人来送。 | A. 先报站；B. 先看许澈消息。 | A：`station_after_echo_seen = true`；B：`new_circle_trust +1`。 |
| 不是答案 | `ACT7-E12-R5X-P02` | 许澈有自己的去向。他给过一张不用解释的桌子，但不是林亦舟的答案。 | A. 对许澈说清不是你欠我；B. 删除置顶或什么都不做。 | A：`xuche_boundary_seen = true`, `new_circle_truth +1`；B：`deleted_pin = true`, `5x_regret +1`。 |
| 旧消息 | `ACT7-E12-R5X-P03` | 旧群最后一次亮起。发完整消息不会倒回，不发也不会显得轻松。 | A. 给旧群发一条完整消息；B. 只给一个旧人私聊。 | A：`old_message_sent = true`, `5x_regret -1`；B：`soft_passing +1`, `5x_regret +1`。 |
| 站后温度 | `ACT7-E12-R5X-P04` | 车开出去，旧群和新圈都安静。不是谁赢了，是他终于看见两边都没有完全留下。 | A. 清醒离开；B. 什么都不做，上车。 | A：`graduation_temperature = clear_leave`；B：`graduation_temperature = station_nothing`, `5x_regret +2`。 |

核心选择窗：`ACT7-E12-R5X-CHOICE-01`，位于 `ACT7-E12-R5X-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-R5X-C01-A` | 对许澈说清，给旧群完整消息 | `new_circle_truth +1`、`old_message_sent = true`、`graduation_temperature = clear_leave`。 |
| `ACT7-E12-R5X-C01-B` | 删除置顶或什么都不做 | `deleted_pin = true`、`5x_regret +2`、`graduation_temperature = station_nothing`。 |

完成条件：`graduation_temperature`、`station_after_echo_seen`、`route_lock`。

---

## 结局温度建议

| 结局 | 条件建议 | 文本落点 |
|---|---|---|
| `R5X-END-CLEAR-LEAVE` | `new_circle_truth >= 4`、`5x_regret <= 3` | 林亦舟承认离开旧线，也承认新圈有限；低温但清楚。 |
| `R5X-END-THIN-CIRCLE` | `thin_relation >= 5`、`new_circle_trust < 4` | 新圈散得轻，旧人远得重。 |
| `R5X-END-XUCHE-BOUNDARY` | `xuche_boundary_seen = true`、`new_circle_truth >= 5` | 许澈不是答案，但他曾经给过一张不用解释的桌子。 |
| `R5X-END-OLD-MESSAGE` | `soft_passing >= 4`、`old_message_sent = true` | 旧人有回应，但只是回应，不是回去。 |
| `R5X-END-DELETED-PIN` | `message_cut >= 6`、`deleted_pin = true` | 旧群沉下去，新圈也各自散开。 |
| `R5X-END-STATION-NOTHING` | `5x_regret >= 6`、`old_message_sent = false` | 不是谁赢了，是林亦舟终于意识到自己两边都没真正留下。 |

## 后续 JSON 接入建议

- 正式 JSON 文件建议命名为 `开发数据_IF剧情页级JSON_R5X-HARD_v1.json`。
- `source_docs` 至少引用本文、`开发长线_IF可玩支线R5X-HARD唯一硬外流线.md`、`开发规则_IF第七卷毕业结算与共用事件变体矩阵.md`。
- 每个事件保持 4 个剧情页、1 个二方向选择窗、`same_mother_event = true`、`route_switch_allowed = false`、`hard_outflow = true`、`route_lock = "5x"`。
- 重点记录 `new_circle_truth`、`thin_relation`、`old_dorm_distance`、`message_cut`、`soft_passing`、`xuche_boundary_seen`、`old_message_sent`、`deleted_pin`、`5x_regret`，用于区分清醒离开、薄圈散场、许澈边界、旧消息、删除置顶和站台空白。
