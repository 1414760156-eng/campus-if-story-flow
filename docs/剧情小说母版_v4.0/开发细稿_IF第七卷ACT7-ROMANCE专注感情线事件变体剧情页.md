# IF 第七卷 ACT7-ROMANCE 专注感情线事件变体剧情页级细稿

本文用于把 `R5-ROMANCE` / `POOL-R5-ROMANCE` 的第七卷毕业结算拆成 12 个同母事件变体。它不是“换女主奖励线”，也不是在第七卷重新选择对象；它只在已经锁定 `romance_candidate` 的前提下，输出沈嘉禾或夏知微方向的毕业结算镜头、变量回声和结局温度。

专注感情线的第七卷核心问题是：这段从 A3 父池现实任务里长出来的亲密关系，能不能在预登记、公开范围、改稿、答辩、毕业照、清寝和离校手续里继续说清边界。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-ROMANCE` |
| `route_pool_id` | `POOL-R5-ROMANCE` |
| `act7_variant_id` | `ACT7-ROMANCE` |
| `entry_choice` | `P0C_ROMANCE_LOCK_CANDIDATE` |
| `route_switch_allowed` | `false` |
| `same_mother_event` | `true` |

候选锁定：

| `romance_candidate` | 第七卷镜头 |
|---|---|
| `shen_jiahe` | 共享文档、打印店、格式、权限、停止同步、旧书签、考证 / 城市去向。 |
| `xia_zhiwei` | 摄影社、照片授权、影像素材、预览、私存相册、删不删、作品 / 城市去向。 |

禁止项：

- 不允许没有 A3 女生候选来源就启用本线。
- 不允许在第七卷重新摇摆沈嘉禾和夏知微；进入本细稿时必须已有 `romance_candidate`。
- 不允许把晚风写成失败对象；晚风只能作为低频生活回声或体面错过。
- 不允许让候选对象替 4XX 兜底或解决宿舍旧账。
- 不允许把候选对象写成免费工具：沈嘉禾不是免费格式员，夏知微不是免费修图员。

## 关键变量

| 变量 | 用途 |
|---|---|
| `romance_candidate` | 已锁定对象：`shen_jiahe` 或 `xia_zhiwei`。 |
| `candidate_link` | 当前候选关系强度。 |
| `shen_jiahe_link` | 沈嘉禾方向关系强度。 |
| `xia_zhiwei_link` | 夏知微方向关系强度。 |
| `romance_focus` | 亲密投入度。 |
| `relationship_truth` | 愿意说真话、说具体的程度。 |
| `public_boundary` | 公开、署名、照片、授权、文档权限边界。 |
| `candidate_misread` | 候选对象误读、受伤、小冷或边界收紧。 |
| `future_talk` | 毕业城市、考证、作品、实习和联系频率是否被具体讨论。 |
| `dorm_absence` | 亲密推进挤压 4XX 当面节点的累计。 |
| `time_debt` | 打印、修片、散步、窗口、见面和改稿产生的时间债。 |
| `money_pressure` | 礼物、打印、奶茶、胶片、交通和 AA 的现实成本。 |
| `boundary_awareness` | 是否能设停止条件、权限范围和公开范围。 |
| `image_boundary` | 夏知微方向影像授权、私存和删除边界。 |
| `study_reality` | 沈嘉禾方向材料、考证、文档和格式现实性。 |
| `candidate_private_entry` | 共享文档、旧书签、私存相册或未发照片的私人入口。 |
| `candidate_final_contact_scope` | 最终联系范围：继续联系、私人入口、体面分别或错过。 |
| `graduation_temperature` | 毕业结算温度：继续联系、私人入口、体面分别、错过或甜但宿舍降温。 |

## 12 事件总表

| 事件 | 专注感情线变体功能 |
|---|---|
| `ACT7-E01-PRE-REGISTER` | 候选对象的城市、考证或作品去向开始成为现实问题。 |
| `ACT7-E02-PUBLIC-SCOPE` | 文档署名 / 照片授权决定关系是否能被看见。 |
| `ACT7-E03-LAST-NEW-YEAR` | 最后一个新年转成共享文档、照片、授权或私存。 |
| `ACT7-E04-THESIS-TOPIC` | 开题方向和候选对象的任务半径互相照见。 |
| `ACT7-E05-MARCH-QUEUE` | 三四月事项与打印、修片、考证或作品窗口撞期。 |
| `ACT7-E06-THESIS-REVISION` | 沈嘉禾偏文档边界，夏知微偏影像 / 图表授权，候选对象不能变成免费工具。 |
| `ACT7-E07-DEFENSE` | 答辩后候选对象等不等、怎么问，取决于真实投入和公开边界。 |
| `ACT7-E08-GRAD-PHOTO` | 毕业照和影像授权检验同框、署名、私存和删除。 |
| `ACT7-E09-DORM-CLEAR` | 清寝旧物变成文档痕迹、书签、相册和未发照片。 |
| `ACT7-E10-LAST-MEAL` | 最后一顿饭和候选对象安排撞期，检验能不能两边说清。 |
| `ACT7-E11-LEAVING-PAPERS` | 离校手续把城市、档案、证书、作品和联系频率压成具体安排。 |
| `ACT7-E12-STATION-AFTER` | 武生院站后输出继续联系、私人入口、体面分别或错过。 |

---

## `ACT7-E01-PRE-REGISTER` 毕业去向预登记

| 字段 | 值 |
|---|---|
| `previous_event` | `null` |
| `next_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `main_location` | B204 / 教务系统 / 共享文档或摄影社私聊 |
| `scene_function` | 预登记把候选对象的城市、考证或作品去向拉进现实，确认毕业后还能不能被找到。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 表格与候选 | `ACT7-E01-ROMANCE-P01` | B204 发下毕业去向预登记。沈嘉禾方向，光标停在城市和考证计划旁；夏知微方向，作品去向和摄影社归档同时亮起。 | A. 先填学校要求；B. 先问候选对象去向。 | A：`pre_register_boundary_checked = true`；B：`future_talk +1`, `romance_focus +1`。 |
| 城市现实化 | `ACT7-E01-ROMANCE-P02` | 对方的城市不再只是聊天里的地名。沈嘉禾发来考证安排，夏知微发来作品投递截止。 | A. 讨论毕业后现实联系；B. 只说以后再看。 | A：`future_talk +1`, `candidate_link +1`；B：`candidate_misread +1`, `time_debt +1`。 |
| 联系人栏 | `ACT7-E01-ROMANCE-P03` | “毕业后联系人”一栏不适合用亲密证明。林亦舟必须把手续联系人和私人联系分开。 | A. 填正式联系人，私下说明；B. 含混跳过。 | A：`public_boundary +1`, `relationship_truth +1`；B：`candidate_misread +1`, `avoidance +1`。 |
| 提交以后 | `ACT7-E01-ROMANCE-P04` | 表格提交后，沈嘉禾问“那份计划你自己也要留一份吗”；夏知微问“你到那边以后还会拍给我看吗”。 | A. 约定低频联系；B. 不承诺，只保留入口。 | A：`candidate_final_contact_scope = continue_contact`；B：`candidate_private_entry +1`。 |

核心选择窗：`ACT7-E01-ROMANCE-CHOICE-01`，位于 `ACT7-E01-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E01-ROMANCE-C01-A` | 讨论毕业后现实联系 | `future_talk +1`、`candidate_link +1`、`relationship_truth +1`。 |
| `ACT7-E01-ROMANCE-C01-B` | 先说以后再看 | `candidate_misread +1`、`time_debt +1`、`graduation_temperature = private_entry`。 |

完成条件：`pre_register_boundary_checked`、`graduation_direction_status`、`candidate_final_contact_scope`。

---

## `ACT7-E02-PUBLIC-SCOPE` 公开范围确认

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E01-PRE-REGISTER` |
| `next_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `main_location` | 班级材料群 / 共享文档权限页 / 摄影社授权表 |
| `scene_function` | 公开范围检验亲密关系能不能被看见：沈嘉禾是文档署名和权限，夏知微是照片授权和可见范围。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 授权公告 | `ACT7-E02-ROMANCE-P01` | 班级材料群要求确认公开范围。沈嘉禾方向有协作者名字，夏知微方向有照片预览。 | A. 先读授权要求；B. 先看候选对象发来的版本。 | A：`public_boundary +1`；B：`romance_focus +1`, `dorm_visibility +1`。 |
| 关系可见 | `ACT7-E02-ROMANCE-P02` | 沈嘉禾问是否写协作范围；夏知微问是否允许背影入镜。林亦舟不能只让对方猜。 | A. 写清可见范围；B. 暂时不命名关系。 | A：`public_scope_boundary_checked = true`, `boundary_awareness +1`；B：`candidate_misread +1`, `ambiguity +1`。 |
| 4XX 回声 | `ACT7-E02-ROMANCE-P03` | 4XX 看见痕迹：周屿可能起哄，唐骁问授权，陆沉提醒别让别人替他决定。 | A. 承认有这段关系但不展开；B. 否认或打哈哈。 | A：`dorm_visibility +1`, `public_boundary +1`；B：`candidate_misread +2`, `public_boundary -1`。 |
| 回执留存 | `ACT7-E02-ROMANCE-P04` | 回执生成。沈嘉禾把权限调成仅评论，夏知微把照片标成仅留存。 | A. 保存回执并确认边界；B. 只当流程完成。 | A：`public_consent_checked = true`, `candidate_private_entry +1`；B：`relationship_truth -1`。 |

核心选择窗：`ACT7-E02-ROMANCE-CHOICE-01`，位于 `ACT7-E02-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E02-ROMANCE-C01-A` | 写清可见范围 | `public_scope_boundary_checked = true`、`public_boundary +1`、`boundary_awareness +1`。 |
| `ACT7-E02-ROMANCE-C01-B` | 暂时不命名关系 | `candidate_misread +1`、`ambiguity +1`、`public_boundary -1`。 |

完成条件：`public_scope_boundary_checked`、`public_consent_checked`、`candidate_public_scope`。

---

## `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E02-PUBLIC-SCOPE` |
| `next_event` | `ACT7-E04-THESIS-TOPIC` |
| `main_location` | 青枫居 4XX / 共享盘目录 / 摄影社相册 |
| `scene_function` | 最后一个新年转成共享文档、照片、授权或私存，写出开学空白到毕业痕迹的对照。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 目录打开 | `ACT7-E03-ROMANCE-P01` | “最后一个新年”目录出现。沈嘉禾方向像一份已停止同步的文档；夏知微方向像一组还没决定公开的照片。 | A. 打开旧物目录；B. 先看候选对象私聊。 | A：`opening_contrast_seen = true`；B：`romance_focus +1`, `dorm_absence +1`。 |
| 留存边界 | `ACT7-E03-ROMANCE-P02` | 沈嘉禾问文档要不要留共同版本；夏知微问那张背影是删掉还是私存。 | A. 标注私存 / 仅留存；B. 让对方决定。 | A：`candidate_private_entry +1`, `public_boundary +1`；B：`boundary_awareness -1`, `candidate_misread +1`。 |
| 旧物对照 | `ACT7-E03-ROMANCE-P03` | 公共桌上的旧物和手机里的文档 / 相册互相照见：第一卷的空白已经被权限、照片和文件名写满。 | A. 写清来源；B. 删掉痕迹。 | A：`old_object_scope_checked = true`, `relationship_truth +1`；B：`missed_chance +1`, `candidate_private_entry -1`。 |
| 新年回声 | `ACT7-E03-ROMANCE-P04` | 4XX 问素材交不交。候选对象没有催，只等他先把公共桌那边处理完。 | A. 两边都说完整；B. 只回候选对象。 | A：`dorm_visibility +1`, `public_boundary +1`；B：`dorm_absence +1`, `intimacy_cost +1`。 |

核心选择窗：`ACT7-E03-ROMANCE-CHOICE-01`，位于 `ACT7-E03-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E03-ROMANCE-C01-A` | 标注私存 / 仅留存 | `opening_contrast_seen = true`、`candidate_private_entry +1`、`public_boundary +1`。 |
| `ACT7-E03-ROMANCE-C01-B` | 让对方替自己决定 | `candidate_misread +1`、`boundary_awareness -1`、`missed_chance +1`。 |

完成条件：`opening_contrast_seen`、`old_object_scope_checked`、`candidate_private_entry`。

---

## `ACT7-E04-THESIS-TOPIC` 毕业设计方向与开题

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E03-LAST-NEW-YEAR` |
| `next_event` | `ACT7-E05-MARCH-QUEUE` |
| `main_location` | C407 / B204 开题复核 / 共享文档或摄影社电脑 |
| `scene_function` | 开题方向和候选对象的任务半径互相照见，检验亲密是不是能说具体。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 开题表 | `ACT7-E04-ROMANCE-P01` | 林亦舟填毕业设计方向。沈嘉禾问他题目能不能一句话说清；夏知微问图表和影像有没有授权来源。 | A. 认真解释方向；B. 说只是交表。 | A：`topic_boundary_checked = true`, `relationship_truth +1`；B：`avoidance +1`, `candidate_misread +1`。 |
| 候选任务 | `ACT7-E04-ROMANCE-P02` | 沈嘉禾也有考证 / 文档任务，夏知微也有作品 / 影像提交。她们不是只等他的人。 | A. 先确认对方任务时间；B. 继续只讲自己的题目。 | A：`boundary_awareness +1`, `candidate_link +1`；B：`candidate_misread +1`, `intimacy_cost +1`。 |
| 导师签字 | `ACT7-E04-ROMANCE-P03` | 导师签字前，4XX 只提醒流程，不评价这段关系。林亦舟要自己把签字和私聊分开。 | A. 先签字再私聊；B. 先私聊再签字。 | A：`topic_self_signed = true`, `project_stability +1`；B：`time_debt +1`, `dorm_absence +1`。 |
| 题目落定 | `ACT7-E04-ROMANCE-P04` | 开题通过后，沈嘉禾说“以后别把题目说成一团”；夏知微说“别把授权当成最后再补的事”。 | A. 记下边界要求；B. 只回收到。 | A：`future_talk +1`, `public_boundary +1`；B：`relationship_truth -1`。 |

核心选择窗：`ACT7-E04-ROMANCE-CHOICE-01`，位于 `ACT7-E04-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E04-ROMANCE-C01-A` | 先确认对方任务时间 | `boundary_awareness +1`、`candidate_link +1`、`future_talk +1`。 |
| `ACT7-E04-ROMANCE-C01-B` | 继续只讲自己的题目 | `candidate_misread +1`、`intimacy_cost +1`、`public_boundary -1`。 |

完成条件：`topic_boundary_checked`、`topic_self_signed`、`candidate_task_time_checked`。

---

## `ACT7-E05-MARCH-QUEUE` 三四月事项排队

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E04-THESIS-TOPIC` |
| `next_event` | `ACT7-E06-THESIS-REVISION` |
| `main_location` | 明德楼窗口 / 打印店 / 摄影社修片电脑 |
| `scene_function` | 三四月事项与打印、修片、考证或作品窗口撞期，检验林亦舟能不能提前说清。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 窗口并排 | `ACT7-E05-ROMANCE-P01` | 证书核验、毕业照确认、材料补交同时排队。沈嘉禾方向有打印样张，夏知微方向有影像导出。 | A. 先看毕业窗口；B. 先处理候选对象那边。 | A：`march_boundary_checked = true`；B：`romance_focus +1`, `time_debt +1`。 |
| 撞期说明 | `ACT7-E05-ROMANCE-P02` | 他不能再用“马上”糊两边。候选对象等的不是优先级，而是一句准确时间。 | A. 提前说明毕业窗口优先；B. 临时改口两边赶。 | A：`boundary_awareness +1`, `queue_item_submitted = true`；B：`candidate_misread +1`, `time_debt +1`。 |
| 现实成本 | `ACT7-E05-ROMANCE-P03` | 打印费、胶片、奶茶或交通费都落到账上。亲密不是滤镜，是时间和钱一起结算。 | A. 说清 AA / 花费边界；B. 用请客补偿迟到。 | A：`money_pressure +1`, `public_boundary +1`；B：`money_pressure +2`, `candidate_misread +1`。 |
| 缺席回声 | `ACT7-E05-ROMANCE-P04` | 窗口赶上了，但 4XX 公共桌那段最适合解释的时间过去了。 | A. 回群补最低事实；B. 晚点再说。 | A：`dorm_visibility +1`；B：`dorm_absence +1`, `intimacy_cost +1`。 |

核心选择窗：`ACT7-E05-ROMANCE-CHOICE-01`，位于 `ACT7-E05-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E05-ROMANCE-C01-A` | 提前说明毕业窗口优先 | `march_boundary_checked = true`、`boundary_awareness +1`、`queue_item_submitted = true`。 |
| `ACT7-E05-ROMANCE-C01-B` | 临时改口两边赶 | `candidate_misread +1`、`time_debt +1`、`dorm_absence +1`。 |

完成条件：`march_boundary_checked`、`queue_item_submitted`、`candidate_schedule_checked`。

---

## `ACT7-E06-THESIS-REVISION` 论文与毕设修改

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E05-MARCH-QUEUE` |
| `next_event` | `ACT7-E07-DEFENSE` |
| `main_location` | C407 / 阳光书屋 / 摄影社电脑 / 共享文档 |
| `scene_function` | 沈嘉禾偏文档和格式，夏知微偏影像 / 图表授权；候选对象不能变成免费工具。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 红批出现 | `ACT7-E06-ROMANCE-P01` | 导师红批标出摘要、图表或格式问题。沈嘉禾能看文档边界，夏知微能提醒图表授权。 | A. 先读红批；B. 直接发给候选对象。 | A：`thesis_boundary_checked = true`；B：`candidate_misread +1`, `public_boundary -1`。 |
| 帮看边界 | `ACT7-E06-ROMANCE-P02` | 沈嘉禾说只能看格式和逻辑，夏知微说只能看图表和授权。她们都不给他背锅。 | A. 只请求边界内帮助；B. 让对方帮整份终版。 | A：`boundary_awareness +1`, `thesis_revision_version = bounded_help`；B：`candidate_misread +1`, `intimacy_cost +1`。 |
| 版本命名 | `ACT7-E06-ROMANCE-P03` | 文件名从“终版”改成“查重前版”。沈嘉禾问停止条件，夏知微问授权来源。 | A. 自己改完剩余部分；B. 一边聊天一边拖。 | A：`revision_submitted_before_deadline = true`；B：`time_debt +1`, `project_stability -1`。 |
| 提交回声 | `ACT7-E06-ROMANCE-P04` | 提交成功后，对方没有邀功，只提醒他记得答辩前再读一遍。 | A. 认真道谢并说清边界；B. 只发提交截图。 | A：`relationship_truth +1`, `candidate_link +1`；B：`candidate_private_entry +1`, `future_talk 0`。 |

核心选择窗：`ACT7-E06-ROMANCE-CHOICE-01`，位于 `ACT7-E06-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E06-ROMANCE-C01-A` | 只请求边界内帮助 | `thesis_boundary_checked = true`、`boundary_awareness +1`、`thesis_revision_version = bounded_help`。 |
| `ACT7-E06-ROMANCE-C01-B` | 让对方帮整份终版 | `candidate_misread +1`、`intimacy_cost +1`、`public_boundary -1`。 |

完成条件：`thesis_boundary_checked`、`thesis_revision_version`、`revision_submitted_before_deadline`。

---

## `ACT7-E07-DEFENSE` 答辩日

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E06-THESIS-REVISION` |
| `next_event` | `ACT7-E08-GRAD-PHOTO` |
| `main_location` | C407 答辩门口 / 走廊 / 私聊 |
| `scene_function` | 候选对象是否在答辩后等他，取决于前面的真实投入和公开边界。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 门口消息 | `ACT7-E07-ROMANCE-P01` | 答辩门口排队。沈嘉禾问顺序和补交项，夏知微问他能不能深呼吸一下再进去。 | A. 回具体顺序；B. 回一句玩笑。 | A：`defense_order_seen = true`；B：`candidate_misread +1`。 |
| 结果说法 | `ACT7-E07-ROMANCE-P02` | 答辩结束，对方问“过了吗”。这不是求甜，而是等他把结果说具体。 | A. 认真说结果和修改项；B. 用轻松话糊过去。 | A：`defense_boundary_checked = true`, `relationship_truth +1`；B：`avoidance +1`, `candidate_misread +1`。 |
| 补交窗口 | `ACT7-E07-ROMANCE-P03` | 签字和小章还没办完。他不能为了立刻见面漏掉流程。 | A. 先补交再见 / 回话；B. 先去找对方。 | A：`defense_post_submit_done = true`, `boundary_awareness +1`；B：`time_debt +1`, `project_stability -1`。 |
| 答辩后等待 | `ACT7-E07-ROMANCE-P04` | 沈嘉禾在打印店门口等他一份修改清单；夏知微在楼下只问“要不要拍一张不公开的”。 | A. 接住等待但说清边界；B. 把等待当成理所当然。 | A：`defense_message_echo = true`, `candidate_link +1`；B：`candidate_misread +1`。 |

核心选择窗：`ACT7-E07-ROMANCE-CHOICE-01`，位于 `ACT7-E07-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E07-ROMANCE-C01-A` | 认真说结果和修改项 | `defense_boundary_checked = true`、`relationship_truth +1`、`candidate_link +1`。 |
| `ACT7-E07-ROMANCE-C01-B` | 用轻松话糊过去 | `candidate_misread +1`、`avoidance +1`、`graduation_temperature = polite_distance`。 |

完成条件：`defense_boundary_checked`、`defense_post_submit_done`、`defense_message_echo`。

---

## `ACT7-E08-GRAD-PHOTO` 毕业照

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 晨光体育场 / 影像授权页 / 共享文档或摄影社相册 |
| `scene_function` | 毕业照和影像授权检验同框、署名、私存和删除。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 队形集合 | `ACT7-E08-ROMANCE-P01` | 晨光体育场排毕业照。沈嘉禾方向，名单和署名在材料里；夏知微方向，镜头和预览更敏感。 | A. 先完成班级合照；B. 先看候选对象发来的预览。 | A：`grad_photo_result_recorded = true`；B：`romance_focus +1`, `dorm_visibility +1`。 |
| 授权选择 | `ACT7-E08-ROMANCE-P02` | 沈嘉禾问协作材料要不要署名，夏知微问照片能不能公开或只私存。 | A. 先说清授权 / 署名范围；B. 直接默认可用。 | A：`photo_boundary_checked = true`, `public_boundary +1`；B：`candidate_misread +1`, `public_boundary -1`。 |
| 4XX 可见 | `ACT7-E08-ROMANCE-P03` | 4XX 看见痕迹：周屿起哄，唐骁问授权，陆沉不评价但提醒“别让别人替你确认”。 | A. 承认但不展开私事；B. 否认关系。 | A：`dorm_visibility +1`, `relationship_truth +1`；B：`candidate_misread +2`。 |
| 私存或公开 | `ACT7-E08-ROMANCE-P04` | 预览留在手机里。沈嘉禾方向是一份不公开文档，夏知微方向是一张没有发出去的照片。 | A. 私存并标边界；B. 删除或随手发。 | A：`candidate_private_entry +1`；B：`missed_chance +1`, `public_boundary -1`。 |

核心选择窗：`ACT7-E08-ROMANCE-CHOICE-01`，位于 `ACT7-E08-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-ROMANCE-C01-A` | 先说清授权 / 署名范围 | `photo_boundary_checked = true`、`public_boundary +1`、`candidate_private_entry +1`。 |
| `ACT7-E08-ROMANCE-C01-B` | 默认可用，边界后补 | `candidate_misread +1`、`public_boundary -1`、`dorm_visibility +1`。 |

完成条件：`photo_boundary_checked`、`grad_photo_result_recorded`、`candidate_private_entry`。

---

## `ACT7-E09-DORM-CLEAR` 清寝与旧物

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居 4XX / 公共桌 / 手机相册或共享盘 |
| `scene_function` | 清寝旧物变成文档痕迹、旧书签、相册和未发照片，检验哪些能带走。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 旧物翻出 | `ACT7-E09-ROMANCE-P01` | 林亦舟清出打印小票、旧书签或一张照片预览。沈嘉禾方向像文档痕迹，夏知微方向像未发相册。 | A. 分类留存；B. 直接扔掉。 | A：`old_object_scope_checked = true`, `candidate_private_entry +1`；B：`missed_chance +1`。 |
| 共享痕迹 | `ACT7-E09-ROMANCE-P02` | 共享文档提示“最后同步于昨天”，相册提示“是否备份”。这些痕迹不能替他说话。 | A. 标注私人入口和边界；B. 全部关闭 / 删除。 | A：`candidate_private_entry +1`, `boundary_awareness +1`；B：`candidate_private_entry -1`, `candidate_misread +1`。 |
| 公共桌确认 | `ACT7-E09-ROMANCE-P03` | 4XX 公共桌还要确认 U 盘、遥控器和旧纸。候选对象没有催，只等他先把那边处理完。 | A. 先确认公共物品；B. 一边私聊一边收。 | A：`shared_item_owner_checked = true`, `dorm_visibility +1`；B：`dorm_absence +1`, `intimacy_cost +1`。 |
| 交钥匙 | `ACT7-E09-ROMANCE-P04` | 宿管窗口收走钥匙。沈嘉禾问文档要不要停止同步，夏知微问相册要不要从云端撤下。 | A. 说清停止条件；B. 让系统自动处理。 | A：`dorm_key_returned = true`, `boundary_awareness +1`；B：`candidate_misread +1`。 |

核心选择窗：`ACT7-E09-ROMANCE-CHOICE-01`，位于 `ACT7-E09-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-ROMANCE-C01-A` | 标注私人入口和边界 | `candidate_private_entry +1`、`old_object_scope_checked = true`、`boundary_awareness +1`。 |
| `ACT7-E09-ROMANCE-C01-B` | 全部关闭 / 删除 | `missed_chance +1`、`candidate_private_entry -1`、`graduation_temperature = missed`。 |

完成条件：`old_object_scope_checked`、`shared_item_owner_checked`、`dorm_key_returned`。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 东北饺子馆 / 校门口 / 私聊 |
| `scene_function` | 最后一顿饭和候选对象安排撞期，检验能不能两边说清。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 饭局撞期 | `ACT7-E10-ROMANCE-P01` | 4XX 最后一顿饭订好。沈嘉禾方向有文档停止同步，夏知微方向有照片交付时间。 | A. 先告诉候选对象饭局安排；B. 只说晚点再聊。 | A：`relationship_truth +1`；B：`candidate_misread +1`。 |
| 时间说明 | `ACT7-E10-ROMANCE-P02` | 对方没有要求他缺席，只问他几点结束、什么时候能确认下一步。 | A. 给明确结束时间；B. 说看情况。 | A：`meal_boundary_checked = true`, `future_talk +1`；B：`time_debt +1`, `candidate_misread +1`。 |
| 桌下消息 | `ACT7-E10-ROMANCE-P03` | 饭桌上说起毕业后城市和去向，手机里的候选对象也在等一句准确话。 | A. 放下手机，饭后认真回；B. 桌下继续回。 | A：`dorm_visibility +1`, `boundary_awareness +1`；B：`dorm_absence +1`, `intimacy_cost +1`。 |
| 饭后说明 | `ACT7-E10-ROMANCE-P04` | 散场后，沈嘉禾问文档要不要继续留，夏知微问照片是否只给他一份。 | A. 认真说明饭局和边界；B. 只说吃完了。 | A：`meal_attendance_locked = true`, `candidate_link +1`；B：`graduation_temperature = private_entry`。 |

核心选择窗：`ACT7-E10-ROMANCE-CHOICE-01`，位于 `ACT7-E10-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-ROMANCE-C01-A` | 给明确结束时间 | `meal_boundary_checked = true`、`relationship_truth +1`、`future_talk +1`。 |
| `ACT7-E10-ROMANCE-C01-B` | 含混地说看情况 | `candidate_misread +1`、`time_debt +1`、`intimacy_cost +1`。 |

完成条件：`meal_boundary_checked`、`meal_attendance_locked`、`candidate_reply_after_meal`。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 明德楼离校窗口 / 证书领取处 / 档案转递窗口 |
| `scene_function` | 离校手续把城市、档案、证书、作品和联系频率压成具体安排。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 离校清单 | `ACT7-E11-ROMANCE-P01` | 离校系统一项项变绿。沈嘉禾看见考证 / 城市安排，夏知微看见作品和影像归档时间。 | A. 发完整行程；B. 只说今天离校。 | A：`leaving_boundary_checked = true`, `future_talk +1`；B：`candidate_misread +1`。 |
| 证书档案 | `ACT7-E11-ROMANCE-P02` | 证书领取处只核身份证，档案窗口只问去向。亲密关系却问第一周怎么活。 | A. 认真讲第一周安排；B. 用玩笑躲开。 | A：`certificate_or_archive_seen = true`, `relationship_truth +1`；B：`avoidance +1`, `future_talk -1`。 |
| 私人入口 | `ACT7-E11-ROMANCE-P03` | 沈嘉禾方向是共享文档是否停止同步；夏知微方向是相册是否私存。 | A. 保留一个私人入口；B. 关闭同步 / 删除相册。 | A：`candidate_private_entry +1`；B：`missed_chance +1`, `candidate_misread +1`。 |
| 站前确认 | `ACT7-E11-ROMANCE-P04` | 去武生院站路上，对方问毕业后怎么联系。这个问题不能再留到以后。 | A. 约定现实联系频率；B. 说有空再说。 | A：`candidate_final_contact_scope = continue_contact`；B：`candidate_final_contact_scope = private_entry`。 |

核心选择窗：`ACT7-E11-ROMANCE-CHOICE-01`，位于 `ACT7-E11-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-ROMANCE-C01-A` | 认真讲第一周安排 | `certificate_or_archive_seen = true`、`future_talk +1`、`relationship_truth +1`。 |
| `ACT7-E11-ROMANCE-C01-B` | 用玩笑躲开第一周 | `avoidance +1`、`candidate_misread +1`、`graduation_temperature = private_entry`。 |

完成条件：`leaving_boundary_checked`、`certificate_or_archive_seen`、`candidate_final_contact_scope`。

---

## `ACT7-E12-STATION-AFTER` 武生院站后

| 字段 | 值 |
|---|---|
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `null` |
| `main_location` | 武生院站 / 地铁车厢 / 共享文档或相册私聊 |
| `scene_function` | 输出专注感情线最终温度：继续联系、私人入口、体面分别、错过或甜但宿舍降温。 |

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 进站前 | `ACT7-E12-ROMANCE-P01` | 武生院站口人很多。沈嘉禾方向，文档最后同步时间停住；夏知微方向，相册预览还没删。 | A. 先发到站 / 进站消息；B. 先看 4XX 群。 | A：`candidate_reply_after_station = true`；B：`dorm_visibility +1`, `time_debt +1`。 |
| 到站以后 | `ACT7-E12-ROMANCE-P02` | 地铁开出校园站，最后不是说不说喜欢，而是毕业后还怎么联系。 | A. 约定低频真实联系；B. 只保留私人入口。 | A：`candidate_final_contact_scope = continue_contact`, `future_talk +1`；B：`candidate_final_contact_scope = private_entry`, `future_talk 0`。 |
| 留下或删掉 | `ACT7-E12-ROMANCE-P03` | 沈嘉禾方向是一份共享文档是否停止同步；夏知微方向是一张照片是否删除。 | A. 保留但标边界；B. 删除 / 停止同步。 | A：`candidate_private_entry +1`, `public_boundary +1`；B：`missed_chance +1`, `candidate_misread +1`。 |
| 站后温度 | `ACT7-E12-ROMANCE-P04` | 出站后手机震了一下。他可以发一句现实安排，也可以让文档 / 相册慢慢沉下去。 | A. 发出完整回复；B. 只发一个表情或不发。 | A：`graduation_temperature = continue_contact`；B：`graduation_temperature = missed`。 |

核心选择窗：`ACT7-E12-ROMANCE-CHOICE-01`，位于 `ACT7-E12-ROMANCE-P02` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-ROMANCE-C01-A` | 约定低频真实联系 | `candidate_final_contact_scope = continue_contact`、`future_talk +1`、`graduation_temperature = continue_contact`。 |
| `ACT7-E12-ROMANCE-C01-B` | 只保留私人入口或沉下去 | `candidate_final_contact_scope = private_entry`、`candidate_private_entry +1`、`graduation_temperature = private_entry`。 |

完成条件：`candidate_final_contact_scope`、`graduation_temperature`、`station_after_echo_seen`。

---

## 结局温度建议

| 结局 | 条件建议 | 文本落点 |
|---|---|---|
| `ROMANCE-END-CONTINUE-SHEN` | `romance_candidate = shen_jiahe`、`relationship_truth >= 5`、`public_boundary >= 4`、`future_talk >= 3` | 毕业后仍保留现实联系，可能是材料、考证、城市选择和低频私聊。 |
| `ROMANCE-END-CONTINUE-XIA` | `romance_candidate = xia_zhiwei`、`image_boundary >= 4`、`public_boundary >= 4`、`future_talk >= 3` | 毕业后仍保留照片 / 影像式联系，不高调但有下一次见面入口。 |
| `ROMANCE-END-PRIVATE-ENTRY` | `candidate_link >= 5`、`public_boundary >= 3`、`future_talk <= 2` | 不公开大团圆，但保留共享文档、旧书签、相册或未发出的照片入口。 |
| `ROMANCE-END-POLITE-PARTING` | `relationship_truth >= 3`、`candidate_misread <= 3`、`future_talk >= 2` | 关系真实存在过，但实习、考研、城市和作品去向让两人选择不拖住彼此。 |
| `ROMANCE-END-MISSED` | `candidate_misread >= 5` 或 `missed_chance >= 4` | 多次含混、否认、失约或公开边界失败，让关系停在差一点。 |
| `ROMANCE-END-SWEET-BUT-DORM-COLD` | `romance_focus >= 7`、`dorm_absence >= 5`、`candidate_misread <= 3` | 亲密关系保住了，但 4XX 毕业温度明显降低，甜和缺席一起结算。 |

## 后续 JSON 接入建议

- 正式 JSON 文件建议命名为 `开发数据_IF剧情页级JSON_R5-ROMANCE_v1.json`。
- `source_docs` 至少引用本文、`开发长线_IF可玩支线R5-ROMANCE专注感情线.md`、`开发规则_IF第七卷毕业结算与共用事件变体矩阵.md`。
- 每个事件保持 4 个剧情页、1 个二方向选择窗、`same_mother_event = true`、`route_switch_allowed = false`。
- 重点记录 `romance_candidate`、`candidate_private_entry`、`candidate_final_contact_scope`，用于区分沈嘉禾继续联系、夏知微继续联系、私人入口、体面分别、错过和甜但宿舍降温。
