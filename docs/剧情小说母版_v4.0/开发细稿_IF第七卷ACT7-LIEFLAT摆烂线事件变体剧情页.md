# IF 第七卷 ACT7-LIEFLAT 摆烂线事件变体剧情页级细稿

本文用于把 `R5-LIEFLAT` / `POOL-R5-LIEFLAT` 的第七卷毕业结算拆成 12 个同母事件变体。它不是新增第七卷路线选择，也不是“少写内容”的省略线；它只改变镜头、可操作内容、变量回声和毕业温度。

摆烂线的第七卷核心问题是：当所有流程都还照常发生，林亦舟会不会发现自己不是被讨厌了，而是很多事已经不再默认等他。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-LIEFLAT` |
| `route_pool_id` | `POOL-R5-LIEFLAT` |
| `act7_variant_id` | `ACT7-LIEFLAT` |
| `entry_choice` | `P0D_STAND_NO_REPLY` |
| `route_switch_allowed` | `false` |
| `same_mother_event` | `true` |

禁止项：

- 不允许把摆烂线写成搞笑线、偷懒线或省内容线。
- 不允许把“不站队”写成中立保全；它的代价是入口过期和低存在感。
- 不允许借晚风、许澈或后街照面临时打开其它完整路线。
- 不允许让第七卷突然大爆炸；摆烂线的痛点是少问一次、少留一个座、少等一分钟。

## 关键变量

| 变量 | 用途 |
|---|---|
| `lieflat_score` | 摆烂倾向累计：静音、晚回、低投入、无效回复。 |
| `avoidance` | 回避程度：越高越少当面处理。 |
| `lost_chance` | 已错过的当面机会。 |
| `missed_chance` | 已过期的材料、饭局、同框或解释入口。 |
| `low_conflict` | 表面无事但关系变薄的程度。 |
| `late_regret` | 迟来后悔，可触发轻微补话但不回深线。 |
| `dorm_trust` | 4XX 是否还默认把林亦舟算进同一张桌。 |
| `old_dorm_distance` | 旧宿舍距离感。 |
| `time_debt` | 拖延造成的时间债。 |
| `money_pressure` | 夜市、游戏、临时消费与现实成本。 |
| `hard_outflow_shadow` | 5X 影子，只提示风险，不在本线开硬外流。 |
| `lieflat_contact_scope` | 毕业后是否还保留礼貌群聊、迟来私聊或空白断开。 |
| `expired_entry_checked` | 是否明确记录某个入口已经过期。 |
| `low_presence_checked` | 是否确认林亦舟在毕业流程中的低存在感。 |
| `graduation_temperature` | 毕业结算温度：体面淡化、低存在感、迟来消息、错过或 5X 影子。 |

## 12 事件总表

| 事件 | 摆烂线变体功能 |
|---|---|
| `ACT7-E01-PRE-REGISTER` | 差点忘交预登记，系统提醒代替了人。 |
| `ACT7-E02-PUBLIC-SCOPE` | 公开范围不是主动边界，而是默认最低可见。 |
| `ACT7-E03-LAST-NEW-YEAR` | 空白目录不是抵抗，是他又晚了一步。 |
| `ACT7-E04-THESIS-TOPIC` | 开题方向拖到最低可填，导师签字压着时间走。 |
| `ACT7-E05-MARCH-QUEUE` | 三四月事项排队时，没人再单独催他。 |
| `ACT7-E06-THESIS-REVISION` | 改稿拖到最低可交版，错过别人愿意帮看稿的时间。 |
| `ACT7-E07-DEFENSE` | 答辩通过，群里礼貌恭喜，没人继续问。 |
| `ACT7-E08-GRAD-PHOTO` | 毕业照有他，但站在边缘；补拍和授权不再被反复确认。 |
| `ACT7-E09-DORM-CLEAR` | 清寝旧物被流程处理，公共桌不再等他决定。 |
| `ACT7-E10-LAST-MEAL` | 最后一顿饭人数锁定，没留座不是恶意，是默认他可能不来。 |
| `ACT7-E11-LEAVING-PAPERS` | 离校手续盖章时，空栏终于不用填了。 |
| `ACT7-E12-STATION-AFTER` | 武生院站后输出体面淡化、迟来私聊、低存在感或空白离校。 |

---

## `ACT7-E01-PRE-REGISTER` 毕业去向预登记

| 字段 | 值 |
|---|---|
| `previous_event` | `null` |
| `next_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `main_location` | B204 / 教务系统提醒 / 青枫居 4XX |
| `scene_function` | 预登记仍然要交，但提醒林亦舟的人从室友变成了系统通知。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 系统提醒 | `ACT7-E01-LIEFLAT-P01` | B204 的预登记表发下很久，林亦舟在系统弹窗里才想起自己还没填。 | A. 立刻补最低项；B. 先关掉提醒。 | A：`late_regret +1`；B：`lieflat_score +1`, `time_debt +1`。 |
| 空栏停住 | `ACT7-E01-LIEFLAT-P02` | “毕业后联系人”一栏空着，4XX 群里已经没人再单独问他写谁。 | A. 写公共邮箱和手机号；B. 先空着等晚点再说。 | A：`pre_register_boundary_checked = true`；B：`missed_chance +1`, `avoidance +1`。 |
| 去向待定 | `ACT7-E01-LIEFLAT-P03` | 去向栏可以写待定，但需要复核。林亦舟把光标停在输入框里很久。 | A. 写待定并接受复核；B. 写一个模糊方向。 | A：`graduation_direction_status = pending_with_review`；B：`low_conflict +1`, `time_debt +1`。 |
| 交表截止 | `ACT7-E01-LIEFLAT-P04` | 系统显示“提交成功”，没有人骂他晚，也没有人夸他赶上。 | A. 在群里回一句已交；B. 什么都不说。 | A：`dorm_trust +1`, `late_regret +1`；B：`old_dorm_distance +1`, `low_presence_checked = true`。 |

核心选择窗：`ACT7-E01-LIEFLAT-CHOICE-01`，位于 `ACT7-E01-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E01-LIEFLAT-C01-A` | 立刻补最低项 | `pre_register_boundary_checked = true`、`late_regret +1`、`time_debt +1`。 |
| `ACT7-E01-LIEFLAT-C01-B` | 先空着，晚点再说 | `lieflat_score +1`、`missed_chance +1`、`expired_entry_checked = true`。 |

完成条件：`pre_register_boundary_checked`、`graduation_direction_status`、`low_presence_checked`。

---

## `ACT7-E02-PUBLIC-SCOPE` 公开范围确认

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E01-PRE-REGISTER` |
| `next_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `main_location` | 班级材料群 / 共享盘权限页 / 西园餐厅 |
| `scene_function` | 公开范围不再是主动边界选择，而是拖到默认最低可见。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 群公告 | `ACT7-E02-LIEFLAT-P01` | 材料群要求确认照片和经历公开范围，唐骁只发群公告，没有私聊催他。 | A. 点开公告；B. 先当没看见。 | A：`public_boundary +1`；B：`avoidance +1`, `time_debt +1`。 |
| 默认最低 | `ACT7-E02-LIEFLAT-P02` | 截止前系统默认仅班级内部可见，林亦舟发现这也算一种选择。 | A. 主动改成仅留存；B. 接受默认范围。 | A：`public_scope_boundary_checked = true`；B：`lieflat_score +1`, `low_conflict +1`。 |
| 素材空格 | `ACT7-E02-LIEFLAT-P03` | “个人经历补充”空着，周屿没有再拿玩笑帮他圆场。 | A. 补一句最低事实；B. 空着提交。 | A：`late_regret +1`, `dorm_trust +1`；B：`low_presence_checked = true`, `old_dorm_distance +1`。 |
| 确认回执 | `ACT7-E02-LIEFLAT-P04` | 回执生成后，他的名字在列表里很普通，像从没缺席过，也像从没被等过。 | A. 截图发群；B. 只保存回执。 | A：`dorm_trust +1`；B：`old_dorm_distance +1`, `low_conflict +1`。 |

核心选择窗：`ACT7-E02-LIEFLAT-CHOICE-01`，位于 `ACT7-E02-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E02-LIEFLAT-C01-A` | 主动改成仅留存 | `public_scope_boundary_checked = true`、`late_regret +1`、`dorm_trust +1`。 |
| `ACT7-E02-LIEFLAT-C01-B` | 接受系统默认 | `lieflat_score +1`、`low_presence_checked = true`、`old_dorm_distance +1`。 |

完成条件：`public_scope_boundary_checked`、`public_consent_checked`、`low_presence_checked`。

---

## `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `next_event` | `ACT7-E04-THESIS-TOPIC` |
| `main_location` | 青枫居 4XX / 共享盘目录 / 后街便利店 |
| `scene_function` | 最后一个新年的空白目录不是抵抗，而是林亦舟又晚了一步。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 目录已建 | `ACT7-E03-LIEFLAT-P01` | 共享盘里已经建好“最后一个新年”目录，林亦舟打开时里面有三个人的素材。 | A. 现在补一张照片；B. 先退出目录。 | A：`late_regret +1`；B：`avoidance +1`, `missed_chance +1`。 |
| 空白不是边界 | `ACT7-E03-LIEFLAT-P02` | 他的文件夹空着，不像“不公开”，更像没人知道他还想不想交。 | A. 写“不公开，仅留存”；B. 让空文件夹继续空着。 | A：`opening_contrast_seen = true`；B：`expired_entry_checked = true`, `low_presence_checked = true`。 |
| 后街短逃 | `ACT7-E03-LIEFLAT-P03` | 他去后街便利店买饮料，门口有新圈人物擦肩，但没有真正叫住他。 | A. 直接回寝补材料；B. 在便利店多待一会儿。 | A：`late_regret +1`, `dorm_trust +1`；B：`hard_outflow_shadow +1`, `time_debt +1`。 |
| 旧物缺席 | `ACT7-E03-LIEFLAT-P04` | 4XX 公共桌上有旧物清单，他的那栏写着“未确认”。 | A. 补确认；B. 明天再看。 | A：`old_object_scope_checked = true`；B：`missed_chance +1`, `old_dorm_distance +1`。 |

核心选择窗：`ACT7-E03-LIEFLAT-CHOICE-01`，位于 `ACT7-E03-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E03-LIEFLAT-C01-A` | 补“不公开，仅留存” | `opening_contrast_seen = true`、`public_boundary +1`、`late_regret +1`。 |
| `ACT7-E03-LIEFLAT-C01-B` | 让空文件夹继续空着 | `expired_entry_checked = true`、`low_presence_checked = true`、`missed_chance +1`。 |

完成条件：`opening_contrast_seen`、`old_object_scope_checked`、`expired_entry_checked`。

---

## `ACT7-E04-THESIS-TOPIC` 毕业设计方向与开题

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `next_event` | `ACT7-E05-MARCH-QUEUE` |
| `main_location` | C407 / B204 复核会 / 教务平台 |
| `scene_function` | 开题方向拖到最低可填，流程仍能走，但没人再帮他把方向聊热。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 表格未读 | `ACT7-E04-LIEFLAT-P01` | 开题方向表在群里发过两遍，林亦舟第一次认真看时已经是复核前一晚。 | A. 立刻填最低版；B. 先收藏链接。 | A：`topic_boundary_checked = true`；B：`time_debt +1`, `lieflat_score +1`。 |
| 导师签字 | `ACT7-E04-LIEFLAT-P02` | 导师组问他的方向是否确认，唐骁只在群里提醒“按时签”。 | A. 自己去签；B. 问现在还能不能改。 | A：`topic_self_signed = true`；B：`late_regret +1`, `old_dorm_distance +1`。 |
| 最低方向 | `ACT7-E04-LIEFLAT-P03` | 他写下一个安全但没什么温度的方向，像把未来先放进最窄的格子。 | A. 补一句真实兴趣；B. 保持安全方向。 | A：`repair_attempt +1`, `late_regret +1`；B：`low_conflict +1`, `graduation_temperature = polite_distance`。 |
| 表格通过 | `ACT7-E04-LIEFLAT-P04` | 表格通过了，C407 没人多问他怎么想，流程替他们省掉了那句话。 | A. 在群里回已过；B. 不再回。 | A：`dorm_trust +1`；B：`old_dorm_distance +1`, `low_presence_checked = true`。 |

核心选择窗：`ACT7-E04-LIEFLAT-CHOICE-01`，位于 `ACT7-E04-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E04-LIEFLAT-C01-A` | 自己去签最低版 | `topic_boundary_checked = true`、`topic_self_signed = true`、`time_debt +1`。 |
| `ACT7-E04-LIEFLAT-C01-B` | 问现在还能不能改 | `late_regret +1`、`old_dorm_distance +1`、`expired_entry_checked = true`。 |

完成条件：`topic_boundary_checked`、`topic_self_signed`、`thesis_topic_submitted`。

---

## `ACT7-E05-MARCH-QUEUE` 三四月事项排队

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E04-THESIS-TOPIC` |
| `next_event` | `ACT7-E06-THESIS-REVISION` |
| `main_location` | 明德楼窗口 / C407 / 打印店 |
| `scene_function` | 三四月事项仍然排队，但单独提醒他的那个人变少了。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 窗口过号 | `ACT7-E05-LIEFLAT-P01` | 明德楼窗口叫号很快，林亦舟刚到，屏幕上他的号已经过了三位。 | A. 重新取号；B. 先去买水。 | A：`march_boundary_checked = true`；B：`time_debt +1`, `missed_chance +1`。 |
| 群公告已沉 | `ACT7-E05-LIEFLAT-P02` | 毕业照信息、证书核验和补交材料都在群公告里，他往上翻才看到。 | A. 逐项补最低信息；B. 只补最急的一项。 | A：`queue_item_submitted = true`；B：`low_conflict +1`, `expired_entry_checked = true`。 |
| 没人私催 | `ACT7-E05-LIEFLAT-P03` | 周屿发过活动提醒，唐骁发过清单，陆沉发过一个“收到”。没有人再单独叫他。 | A. 主动问还缺什么；B. 当作没人需要他。 | A：`late_regret +1`, `dorm_trust +1`；B：`old_dorm_distance +1`, `lieflat_score +1`。 |
| 最低过关 | `ACT7-E05-LIEFLAT-P04` | 最后系统显示“材料已收”，但备注里有两个“未补充”。 | A. 记下待补；B. 关掉页面。 | A：`march_boundary_checked = true`；B：`missed_chance +1`, `low_presence_checked = true`。 |

核心选择窗：`ACT7-E05-LIEFLAT-CHOICE-01`，位于 `ACT7-E05-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E05-LIEFLAT-C01-A` | 逐项补最低信息 | `march_boundary_checked = true`、`queue_item_submitted = true`、`late_regret +1`。 |
| `ACT7-E05-LIEFLAT-C01-B` | 只补最急的一项 | `expired_entry_checked = true`、`missed_chance +1`、`low_presence_checked = true`。 |

完成条件：`march_boundary_checked`、`queue_item_submitted`、`expired_entry_checked`。

---

## `ACT7-E06-THESIS-REVISION` 论文与毕设修改

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E05-MARCH-QUEUE` |
| `next_event` | `ACT7-E07-DEFENSE` |
| `main_location` | C407 / 共享盘 / 打印店 |
| `scene_function` | 改稿拖到最低可交版，错过别人愿意帮他看稿的时间。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 红批未读 | `ACT7-E06-LIEFLAT-P01` | 导师红批早就发到共享盘，林亦舟打开时群里已经在讨论终版命名。 | A. 立刻改最低版；B. 先保存到桌面。 | A：`thesis_boundary_checked = true`；B：`time_debt +1`, `lieflat_score +1`。 |
| 帮看过期 | `ACT7-E06-LIEFLAT-P02` | 唐骁之前说过能帮看格式，周屿说过能帮看摘要，但现在时间都不合适了。 | A. 自己改格式；B. 迟来问一句还能看吗。 | A：`thesis_revision_version = minimum_pass`；B：`late_regret +1`, `missed_chance +1`。 |
| 最低可交 | `ACT7-E06-LIEFLAT-P03` | 他交出一个能过系统的版本，内容没错，只是少了本可以被提醒的余地。 | A. 提交前再读一遍；B. 直接提交。 | A：`revision_submitted_before_deadline = true`；B：`low_conflict +1`, `expired_entry_checked = true`。 |
| 截止前后 | `ACT7-E06-LIEFLAT-P04` | 提交按钮亮起又暗下去，系统提示成功。群里没有人为他松口气。 | A. 回群说已交；B. 只截屏留存。 | A：`dorm_trust +1`, `late_regret +1`；B：`old_dorm_distance +1`, `low_presence_checked = true`。 |

核心选择窗：`ACT7-E06-LIEFLAT-CHOICE-01`，位于 `ACT7-E06-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E06-LIEFLAT-C01-A` | 自己改最低可交版 | `thesis_boundary_checked = true`、`thesis_revision_version = minimum_pass`、`time_debt +1`。 |
| `ACT7-E06-LIEFLAT-C01-B` | 迟来问还能不能看 | `late_regret +1`、`missed_chance +1`、`expired_entry_checked = true`。 |

完成条件：`thesis_boundary_checked`、`thesis_revision_version`、`revision_submitted_before_deadline`。

---

## `ACT7-E07-DEFENSE` 答辩日

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E06-THESIS-REVISION` |
| `next_event` | `ACT7-E08-GRAD-PHOTO` |
| `main_location` | C407 答辩门口 / 补交窗口 / 4XX 群 |
| `scene_function` | 答辩通过，群里礼貌恭喜，没人继续问他想不想一起走。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 门口晚到 | `ACT7-E07-LIEFLAT-P01` | 答辩门口还有人等，但不是专门等他。他到的时候前一组刚出来。 | A. 向他们点头；B. 站到队尾。 | A：`dorm_trust +1`；B：`old_dorm_distance +1`, `low_presence_checked = true`。 |
| 顺序表 | `ACT7-E07-LIEFLAT-P02` | 顺序表上他的名字在中间，流程很清楚，清楚到不需要谁多问。 | A. 核对补交项；B. 只看自己序号。 | A：`defense_boundary_checked = true`；B：`lieflat_score +1`, `low_conflict +1`。 |
| 礼貌恭喜 | `ACT7-E07-LIEFLAT-P03` | 答辩通过后群里有人发“恭喜”，大家都回得很快，也很礼貌。 | A. 回一句谢谢；B. 发个表情。 | A：`late_regret +1`；B：`low_presence_checked = true`, `old_dorm_distance +1`。 |
| 补交窗口 | `ACT7-E07-LIEFLAT-P04` | 补交窗口还开着，他一个人把签字和小章办完，没有人继续问他要不要吃饭。 | A. 问饭局还在不在；B. 先回寝。 | A：`late_regret +1`, `dorm_trust +1`；B：`missed_chance +1`, `old_dorm_distance +1`。 |

核心选择窗：`ACT7-E07-LIEFLAT-CHOICE-01`，位于 `ACT7-E07-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E07-LIEFLAT-C01-A` | 核对补交项，流程过关 | `defense_boundary_checked = true`、`defense_post_submit_done = true`、`polite_distance +1`。 |
| `ACT7-E07-LIEFLAT-C01-B` | 只看自己序号，少说一句 | `low_presence_checked = true`、`old_dorm_distance +1`、`missed_chance +1`。 |

完成条件：`defense_boundary_checked`、`defense_post_submit_done`、`low_presence_checked`。

---

## `ACT7-E08-GRAD-PHOTO` 毕业照

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 晨光体育场 / 影像授权表 / 4XX 群 |
| `scene_function` | 毕业照有他，但站在边缘；补拍和授权不再被反复确认。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 队形边缘 | `ACT7-E08-LIEFLAT-P01` | 毕业照队形已经排好，林亦舟被安排在边缘，位置合理，也没人觉得不对。 | A. 接受边位；B. 问还能不能换。 | A：`low_presence_checked = true`；B：`late_regret +1`, `dorm_trust +1`。 |
| 授权默认 | `ACT7-E08-LIEFLAT-P02` | 影像授权表默认班级内部可见，他差点没注意到还要确认。 | A. 勾仅留存；B. 接受默认。 | A：`photo_boundary_checked = true`；B：`lieflat_score +1`, `public_boundary +1`。 |
| 缩略图缓存 | `ACT7-E08-LIEFLAT-P03` | 预览缩略图里他在边上，脸很清楚，但不像谁会专门点开放大。 | A. 保存照片；B. 不保存。 | A：`grad_photo_result_recorded = true`；B：`old_dorm_distance +1`, `missed_chance +1`。 |
| 补拍过期 | `ACT7-E08-LIEFLAT-P04` | 补拍窗口关闭前，群里提醒过一次。他看到时已经过了半小时。 | A. 接受现有照片；B. 迟来问还能补吗。 | A：`graduation_temperature = present_but_not_close`；B：`expired_entry_checked = true`, `late_regret +1`。 |

核心选择窗：`ACT7-E08-LIEFLAT-CHOICE-01`，位于 `ACT7-E08-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-LIEFLAT-C01-A` | 勾仅留存并确认 | `photo_boundary_checked = true`、`grad_photo_result_recorded = true`、`late_regret +1`。 |
| `ACT7-E08-LIEFLAT-C01-B` | 接受默认范围 | `low_presence_checked = true`、`old_dorm_distance +1`、`public_boundary +1`。 |

完成条件：`photo_boundary_checked`、`grad_photo_result_recorded`、`low_presence_checked`。

---

## `ACT7-E09-DORM-CLEAR` 清寝与旧物

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居 4XX / 宿管窗口 / 公共桌 |
| `scene_function` | 清寝旧物被流程处理，公共桌不再等他决定。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 清单已分 | `ACT7-E09-LIEFLAT-P01` | 公共桌上的清寝清单已经分好类，他的几件小东西被放在“待认领”旁边。 | A. 现在认领；B. 先去宿管窗口。 | A：`clearance_boundary_checked = true`；B：`time_debt +1`, `missed_chance +1`。 |
| 旧物默认 | `ACT7-E09-LIEFLAT-P02` | 遥控器、公共 U 盘和一袋旧纸都已经被别人按规则处理。没人问他同不同意。 | A. 确认处理结果；B. 不再追问。 | A：`shared_item_owner_checked = true`；B：`old_dorm_distance +1`, `low_conflict +1`。 |
| 钥匙窗口 | `ACT7-E09-LIEFLAT-P03` | 宿管窗口只问钥匙和床位，不问这四年发生过什么。 | A. 按流程交钥匙；B. 回 4XX 再看一眼。 | A：`dorm_key_returned = true`；B：`late_regret +1`, `dorm_trust +1`。 |
| 空桌回声 | `ACT7-E09-LIEFLAT-P04` | 他再回公共桌时，桌面已经干净，只剩一张没写名字的便签。 | A. 收起便签；B. 留在桌上。 | A：`late_regret +1`；B：`low_presence_checked = true`, `missed_chance +1`。 |

核心选择窗：`ACT7-E09-LIEFLAT-CHOICE-01`，位于 `ACT7-E09-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-LIEFLAT-C01-A` | 确认旧物处理结果 | `clearance_boundary_checked = true`、`shared_item_owner_checked = true`、`late_regret +1`。 |
| `ACT7-E09-LIEFLAT-C01-B` | 不再追问，按流程清掉 | `old_dorm_distance +1`、`low_presence_checked = true`、`missed_chance +1`。 |

完成条件：`clearance_boundary_checked`、`shared_item_owner_checked`、`dorm_key_returned`。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 东北饺子馆 / 4XX 群 / 校门口 |
| `scene_function` | 最后一顿饭人数锁定，没留座不是恶意，是默认他可能不来。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 投票已过 | `ACT7-E10-LIEFLAT-P01` | 饭局地点投票已经结束，林亦舟打开时只剩“已订位”。 | A. 问还能不能加人；B. 点个表情。 | A：`late_regret +1`；B：`lieflat_score +1`, `old_dorm_distance +1`。 |
| 人数锁定 | `ACT7-E10-LIEFLAT-P02` | 东北饺子馆座位按人数锁了，服务员问“还有人吗”，没人立刻看向他。 | A. 说自己会到；B. 说你们先吃。 | A：`meal_boundary_checked = true`；B：`missed_chance +1`, `low_presence_checked = true`。 |
| 到场边座 | `ACT7-E10-LIEFLAT-P03` | 他到的时候靠边还有一个位置，不是特意留的，只是刚好空着。 | A. 坐下吃完；B. 只打包带走。 | A：`dorm_trust +1`, `graduation_temperature = polite_distance`；B：`old_dorm_distance +1`, `avoidance +1`。 |
| 饭后散场 | `ACT7-E10-LIEFLAT-P04` | 散场时大家说“路上小心”，没有人再拦住他补那句迟来的话。 | A. 私聊发一句谢谢；B. 什么都不发。 | A：`late_regret +1`, `lieflat_contact_scope = late_message`；B：`old_dorm_distance +1`, `graduation_temperature = low_presence`。 |

核心选择窗：`ACT7-E10-LIEFLAT-CHOICE-01`，位于 `ACT7-E10-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-LIEFLAT-C01-A` | 明确自己会到 | `meal_boundary_checked = true`、`dorm_trust +1`、`late_regret +1`。 |
| `ACT7-E10-LIEFLAT-C01-B` | 说你们先吃 | `missed_chance +1`、`low_presence_checked = true`、`old_dorm_distance +1`。 |

完成条件：`meal_boundary_checked`、`meal_attendance_locked`、`lieflat_contact_scope`。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 明德楼离校窗口 / 证书领取处 / 档案转递窗口 |
| `scene_function` | 离校手续盖章时，空栏终于不用填了，但这不是补救。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 绿勾清单 | `ACT7-E11-LIEFLAT-P01` | 离校系统一项项变绿，林亦舟忽然发现流程比人更耐心。 | A. 按清单完成；B. 先放着等晚点。 | A：`leaving_boundary_checked = true`；B：`time_debt +1`, `missed_chance +1`。 |
| 证书领取 | `ACT7-E11-LIEFLAT-P02` | 证书领取处只核身份证，旁边有人合照，他站在队尾没有加入。 | A. 领取后回群报备；B. 直接装进包里。 | A：`certificate_or_archive_seen = true`, `dorm_trust +1`；B：`low_presence_checked = true`, `old_dorm_distance +1`。 |
| 空栏消失 | `ACT7-E11-LIEFLAT-P03` | 档案窗口盖完章，那些曾经空着的栏位终于都变成“无需补充”。 | A. 截图留档；B. 关掉页面。 | A：`expired_entry_checked = true`；B：`lieflat_score +1`, `low_conflict +1`。 |
| 校园卡 | `ACT7-E11-LIEFLAT-P04` | 校园卡退余额只剩几块钱，像这条线里所有没来得及说的话。 | A. 退掉余额；B. 留作纪念。 | A：`money_pressure +1`；B：`late_regret +1`, `graduation_temperature = missed`。 |

核心选择窗：`ACT7-E11-LIEFLAT-CHOICE-01`，位于 `ACT7-E11-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-LIEFLAT-C01-A` | 领取后回群报备 | `leaving_boundary_checked = true`、`certificate_or_archive_seen = true`、`dorm_trust +1`。 |
| `ACT7-E11-LIEFLAT-C01-B` | 直接装进包里 | `low_presence_checked = true`、`old_dorm_distance +1`、`lieflat_contact_scope = blank`。 |

完成条件：`leaving_boundary_checked`、`certificate_or_archive_seen`、`expired_entry_checked`。

---

## `ACT7-E12-STATION-AFTER` 武生院站后

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `null` |
| `main_location` | 武生院站 / 地铁口 / 4XX 群 |
| `scene_function` | 输出摆烂线最终温度：体面淡化、迟来私聊、低存在感、错过或 5X 影子。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 站口人流 | `ACT7-E12-LIEFLAT-P01` | 武生院站人很多，林亦舟站在出入口旁边，发现没人知道他具体哪一班车。 | A. 在群里报站；B. 直接进站。 | A：`lieflat_contact_scope = group_polite`；B：`low_presence_checked = true`。 |
| 迟来私聊 | `ACT7-E12-LIEFLAT-P02` | 他点开某个私聊框，输入“之前有些事”，又停住。 | A. 发出最低一句；B. 删除草稿。 | A：`late_message_sent = true`, `late_regret +1`；B：`missed_chance +1`, `lost_chance +1`。 |
| 后街影子 | `ACT7-E12-LIEFLAT-P03` | 地铁口外有去后街的车，许澈或新圈人物的头像短暂亮起，但没有形成邀请。 | A. 看一眼就关掉；B. 回一个表情。 | A：`hard_outflow_shadow +1`；B：`hard_outflow_shadow +2`, `old_dorm_distance +1`。 |
| 最后一栏 | `ACT7-E12-LIEFLAT-P04` | 群里有人发“到了说”，林亦舟这次回得很快，但那已经只是礼貌。 | A. 回“到了”；B. 不再回。 | A：`graduation_temperature = polite_fade`；B：`graduation_temperature = missed`, `lieflat_contact_scope = blank`。 |

核心选择窗：`ACT7-E12-LIEFLAT-CHOICE-01`，位于 `ACT7-E12-LIEFLAT-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-LIEFLAT-C01-A` | 发出最低一句迟来私聊 | `late_message_sent = true`、`lieflat_contact_scope = late_message`、`graduation_temperature = late_message`。 |
| `ACT7-E12-LIEFLAT-C01-B` | 删除草稿，按流程离校 | `missed_chance +1`、`lieflat_contact_scope = blank`、`graduation_temperature = missed`。 |

完成条件：`lieflat_contact_scope`、`graduation_temperature`、`station_after_echo_seen`。

---

## 结局温度建议

| 结局 | 条件建议 | 文本落点 |
|---|---|---|
| `LIEFLAT-END-POLITE-FADE` | `late_regret >= 3`、`dorm_trust >= 2`、`missed_chance <= 3` | 毕业时仍有体面同框，但旧账不再展开。 |
| `LIEFLAT-END-LOW-PRESENCE` | `lieflat_score >= 5`、`old_dorm_distance >= 4` | 林亦舟没有被讨厌，只是名单、饭局和合照不再默认算他。 |
| `LIEFLAT-END-LATE-MESSAGE` | `repair_attempt >= 2`、`late_regret >= 4` 或 `late_message_sent = true` | 离校前发出一条迟来的私聊，对方礼貌回复，但不重开旧线。 |
| `LIEFLAT-END-MISSED` | `missed_chance >= 5` 或 `lost_chance >= 5` | 不是大事毁掉关系，而是很多入口过期。 |
| `LIEFLAT-END-5X-SHADOW` | `hard_outflow_shadow >= 3` 且 `hard_outflow = false` | 林亦舟看见过新圈入口，但没有真正进入；旧人远了，新人也没接住。 |

## 后续 JSON 接入建议

- 正式 JSON 文件建议命名为 `开发数据_IF剧情页级JSON_R5-LIEFLAT_v1.json`。
- `source_docs` 至少引用本文、`开发长线_IF可玩支线R5-LIEFLAT摆烂线.md`、`开发规则_IF第七卷毕业结算与共用事件变体矩阵.md`。
- 每个事件保持 4 个剧情页、1 个二方向选择窗、`same_mother_event = true`、`route_switch_allowed = false`。
- 重点记录 `expired_entry_checked`、`low_presence_checked`、`lieflat_contact_scope`，用于区分体面淡化、迟来私聊、低存在感、错过和 5X 影子。
