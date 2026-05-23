# IF 第六卷 ACT6-R5X 唯一硬外流正式剧情页

本文用于把 `R5X-HARD` / `POOL-R5X-HARD` 的第六卷承接层从长线占位扩成 20 个正式剧情段、5 个四段组和 5 个双方向选择窗口。

本文件不是第七卷毕业结算，也不是许澈奖励线、惩罚线或新人更好线。第六卷只处理一件事：林亦舟已经在第五幕唯一硬外流点确认不回头以后，公共流程、旧人软擦肩、新圈轻关系、许澈边界和毕业前消息如何把 `route_lock = "5x"` 变成不可逆的日常。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5X-HARD` |
| `route_pool_id` | `POOL-R5X-HARD` |
| `act6_variant_id` | `ACT6-R5X` |
| `entry_node` | `P0E_5X_LAST_DOOR` |
| `pool_entry_choice` | `P0E_5X_FOLLOW_XUCHE` |
| `confirm_choice` | `P0E_5X_CONFIRM_NO_RETURN` |
| `route_focus` | `5x` |
| `route_lock` | `5x` |
| `hard_outflow` | `true` |
| `route_switch_allowed` | `false` |
| `new_full_route_unlock_allowed` | `false` |

禁止项：

- 不允许在第六卷回原多线完整修补；旧宿舍、晚风、社团候选、工作线和站队线只能软照面、消息、同场流程或低温回声。
- 不允许把许澈写成拯救者、新男主或稳定替代宿舍的人。
- 不允许把新圈写成更好的家庭、宿舍或爱情；它的轻松真实存在，它的薄和散也必须真实存在。
- 不允许把 5X 写成惩罚线或奖励线；它是玩家二次确认不回头后的生活后果。
- 不允许在选择窗口给第三方向；每个窗口只保留 `POOL-R5X-HARD` 池内两种处理方式。
- 不允许取消母本公共锁点：事项群、C407、公开边界、论文 / 答辩预备和毕业去向预热都仍发生。

## 关键变量

| 变量 | 用途 |
|---|---|
| `route_lock` | 固定为 `5x`，证明已锁唯一硬外流。 |
| `hard_outflow` | 固定为 `true`，第六 / 七卷只走 `POOL-R5X-HARD`。 |
| `new_circle_trust` | 新圈熟悉度：许澈、韩野、蒋沐等轻关系。 |
| `new_circle_truth` | 是否看清新圈不是答案。 |
| `thin_relation` | 薄关系显形程度：散局、改约、AA 不清、玩笑带过。 |
| `old_dorm_distance` | 旧宿舍距离；高值只带来旧线低温，不回线。 |
| `message_cut` | 群静音、只读不回、电话不接和置顶下移。 |
| `money_cost` | 新圈现实成本：夜宵、台球、打车、垫钱。 |
| `project_stability` | C407 / 课程演示 / 论文最低责任是否能保住。 |
| `soft_passing` | 旧人擦肩、短句、同场流程次数。 |
| `identity_drift` | 是否继续用新圈身份遮旧账。 |
| `xuche_boundary_seen` | 是否看见并承认许澈边界。 |
| `old_message_sent` | 毕业前是否给旧群或旧人发出消息。 |
| `deleted_pin` | 是否删除旧群置顶或让旧群沉下去。 |
| `5x_regret` | 5X 遗憾强度。 |
| `graduation_temperature` | 第七卷读取的清醒离开、薄圈散场、旧消息、删除置顶或站台空白温度。 |

## 20 段总表

| 四段组 | 剧情段 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-R5X-B01` | `ACT6-R5X-S01` 至 `ACT6-R5X-S04` | `ACT6-R5X-CHOICE-01` | 继续留在新圈 / 保最低公共责任但不回旧线 |
| `ACT6-R5X-B02` | `ACT6-R5X-S05` 至 `ACT6-R5X-S08` | `ACT6-R5X-CHOICE-02` | 接受薄关系边界 / 继续用轻松遮旧账 |
| `ACT6-R5X-B03` | `ACT6-R5X-S09` 至 `ACT6-R5X-S12` | `ACT6-R5X-CHOICE-03` | 旧人同场短句 / 借新约离开 |
| `ACT6-R5X-B04` | `ACT6-R5X-S13` 至 `ACT6-R5X-S16` | `ACT6-R5X-CHOICE-04` | 对许澈说清 / 继续不谈深事 |
| `ACT6-R5X-B05` | `ACT6-R5X-S17` 至 `ACT6-R5X-S20` | `ACT6-R5X-CHOICE-05` | 发旧消息但不回线 / 删除置顶并离开 |

---

## `ACT6-R5X-B01` 新圈半径与最低公共责任

本组承接第五幕硬外流确认。核心不是再问“要不要回旧线”，而是林亦舟已经锁入 5X 后，第一次发现公共流程不会因为他离开旧关系就消失。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-R5X-S01` 至 `ACT6-R5X-S04` |
| `choice_window_id` | `ACT6-R5X-CHOICE-01` |
| `choice_after_scene` | `ACT6-R5X-S04` |
| `mother_lockpoints` | 事项群最低确认、C407 分工、便利店新桌、旧群低温回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-R5X-S01` | 便利店门口 / 楼下 | 许澈把一瓶水推给他，说韩野他们在后街占了桌。林亦舟手机上还停着第五幕那条旧群未读，门已经在楼上关上。 | 接水不解释 / 回头看楼道 / 把旧群静音 | `route_lock = 5x`、`hard_outflow = true`、`message_cut +1` |
| `ACT6-R5X-S02` | 后街小馆 | 韩野问他会不会打台球，蒋沐说不会也能凑。没人问 4XX 发生了什么，这种轻让他短暂松了一口气。 | 坐到新桌 / 主动说一点旧事 / 只接玩笑 | `new_circle_trust +1`、`new_circle_truth +1` 或 `identity_drift +1` |
| `ACT6-R5X-S03` | C407 共享文档 / 新圈群 | C407 分工表仍需要他确认本人部分。旧群没有点名，只把截止时间发出来；新圈群同时问他要不要转场。 | 先确认本人部分 / 先回新圈 / 两边都拖着 | `project_stability +1`、`old_dorm_distance +1`、`time_debt +1` |
| `ACT6-R5X-S04` | 台球厅楼下 / 事项群 | 许澈说“你要忙就先忙”，语气里没有承诺也没有责怪。林亦舟第一次看见：不被追问也可能是不被等。 | 继续赴新圈局 / 补最低公共责任 / 只截图不回 | `new_circle_trust +1`、`project_stability +1` 或 `message_cut +1` |

### 选择窗口

`ACT6-R5X-CHOICE-01` 位于 `ACT6-R5X-S04` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-R5X-C01-A` | 继续留在新圈 | `new_circle_trust +1`、`message_cut +1`、`project_stability -1`、`identity_drift +1`；新圈熟悉度上升，但公共流程开始低温。 |
| `ACT6-R5X-C01-B` | 保最低公共责任但不回旧线 | `project_stability +1`、`new_circle_truth +1`、`old_dorm_distance +1`；他完成本人责任，但不开放旧线解释入口。 |

完成条件：`route_lock = 5x`、`hard_outflow = true`、`act6_choice_window_count += 1`。

---

## `ACT6-R5X-B02` 薄关系显形

本组把新圈的轻写成具体代价。这里没有人故意伤害林亦舟，但 AA、改约和玩笑带过会让他明白：没有旧账，也意味着没有深账。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-R5X-S05` 至 `ACT6-R5X-S08` |
| `choice_window_id` | `ACT6-R5X-CHOICE-02` |
| `choice_after_scene` | `ACT6-R5X-S08` |
| `mother_lockpoints` | 后街夜宵、台球费、事项群短句、新圈改约 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-R5X-S05` | 台球厅 / 收银台 | 韩野说先让林亦舟垫一下，蒋沐在群里发了个表情包。钱不多，但话说得很轻。 | 直接垫钱 / 当场 AA / 看许澈反应 | `money_cost +1`、`new_circle_truth +1`、`thin_relation +1` |
| `ACT6-R5X-S06` | 后街小馆 | 原定的夜宵改成别人一桌，蒋沐说“下次吧”。许澈没有替谁解释，只说今晚确实乱。 | 问清改约 / 装作无所谓 / 找许澈单独坐会 | `new_circle_truth +1`、`thin_relation +1`、`new_circle_trust +1` |
| `ACT6-R5X-S07` | 青枫居群预览 | 旧群只发“材料明早前交”，没有人问他怎么不在。短句比吵架轻，也比吵架远。 | 回收到 / 不回 / 私聊一句但不解释 | `project_stability +1`、`message_cut +1`、`soft_passing +1` |
| `ACT6-R5X-S08` | 便利店后门 | 许澈说：“他们就是这样的，约得到就约，约不到也没事。”这句话不是冷漠，只是边界。 | 接受边界 / 继续说没事 / 把旧事岔开 | `new_circle_truth +1`、`thin_relation +1`、`identity_drift +1` |

### 选择窗口

`ACT6-R5X-CHOICE-02` 位于 `ACT6-R5X-S08` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-R5X-C02-A` | 接受薄关系边界 | `new_circle_truth +2`、`thin_relation +1`、`money_cost -1`、`5x_regret +1`；他承认新圈真实但有限。 |
| `ACT6-R5X-C02-B` | 继续用轻松遮旧账 | `identity_drift +1`、`thin_relation +2`、`message_cut +1`；短期更轻，后续散局和站台空白风险上升。 |

完成条件：`thin_relation_seen = true`、`new_circle_truth_checked = true`、`route_pool_locked = true`。

---

## `ACT6-R5X-B03` 旧人同场短句

本组让旧人重新进入画面，但只作为软照面。第六卷不提供回周屿、唐骁、陆沉、晚风或其它路线的按钮；只让玩家处理一两句已经来不及展开的话。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-R5X-S09` 至 `ACT6-R5X-S12` |
| `choice_window_id` | `ACT6-R5X-CHOICE-03` |
| `choice_after_scene` | `ACT6-R5X-S12` |
| `mother_lockpoints` | 食堂同场、C407 外擦肩、活动现场远处、旧群短消息 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-R5X-S09` | 食堂侧门 | 周屿在队伍另一头看到他，笑了一下，又把话接回别人那里。那半拍停顿够长，长到林亦舟无法假装没看见。 | 点头回应 / 低头走过 / 发一句短消息 | `soft_passing +1`、`old_dorm_distance +1`、`5x_regret +1` |
| `ACT6-R5X-S10` | C407 门口 | 唐骁把材料交给老师，只问林亦舟本人页签有没有签。没有责备，也没有把他拉回旧分工。 | 签本人页 / 问旧项目进度 / 只说辛苦了 | `project_stability +1`、`soft_passing +1`、`old_dorm_distance +1` |
| `ACT6-R5X-S11` | 活动现场远处 | 陆沉从走廊另一边让开，晚风或社团候选只在动态里一闪。所有旧线都还在，只是不再等他进入。 | 停一下 / 继续跟新圈走 / 截图后划掉 | `soft_passing +1`、`new_circle_trust +1`、`message_cut +1` |
| `ACT6-R5X-S12` | 校门 / 新圈来电 | 新圈约好的车到了，韩野催他快点。旧群里有人发“到了说一声”，语气像公共提醒。 | 发短句再走 / 借新约离开 / 不回直接上车 | `old_message_sent = branch_dependent`、`old_dorm_distance +1`、`message_cut +1` |

### 选择窗口

`ACT6-R5X-CHOICE-03` 位于 `ACT6-R5X-S12` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-R5X-C03-A` | 旧人同场短句 | `soft_passing +2`、`5x_regret +1`、`message_cut -1`；旧线有回应，但只形成低温回声，不回线。 |
| `ACT6-R5X-C03-B` | 借新约离开 | `old_dorm_distance +1`、`new_circle_trust +1`、`message_cut +1`；新圈优先更明确，旧线距离继续拉开。 |

完成条件：`soft_passing_recorded = true`、`closed_route_ids_kept_closed = true`、`route_pool_locked = true`。

---

## `ACT6-R5X-B04` 许澈边界

本组把许澈写回有限但真实的位置。他可以给林亦舟一张不用解释的桌子，却不能替他解释旧关系，也不能成为新的终点。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-R5X-S13` 至 `ACT6-R5X-S16` |
| `choice_window_id` | `ACT6-R5X-CHOICE-04` |
| `choice_after_scene` | `ACT6-R5X-S16` |
| `mother_lockpoints` | 便利店后门、论文 / C407 预备、新圈散局、许澈个人去向 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-R5X-S13` | 便利店后门 | 许澈下班后摘掉工牌，动作很快，像把一段关系也顺手收进兜里。林亦舟突然不知道该从哪句旧事说起。 | 讲旧宿舍 / 只说最近累 / 问他之后去哪 | `new_circle_truth +1`、`identity_drift +1`、`xuche_boundary_seen = branch_dependent` |
| `ACT6-R5X-S14` | 冷柜旁 / 私聊 | 林亦舟试着说 4XX，许澈听完没有评价谁对谁错，只说“那是你们的事，我不好判”。好意和不承担同时存在。 | 接受他不评判 / 继续追问 / 岔开话题 | `xuche_boundary_seen = true`、`new_circle_truth +1`、`thin_relation +1` |
| `ACT6-R5X-S15` | C407 共享文档 | 论文或演示预备临时提前，新圈群说今天可能散得早。许澈也有自己的排班，不会因为林亦舟留下。 | 先完成本人任务 / 去追新圈散局 / 让许澈等一下 | `project_stability +1`、`thin_relation +1`、`identity_drift +1` |
| `ACT6-R5X-S16` | 校外小馆 | 许澈说毕业后也不一定在这边。他不是拒绝，只是在说事实。林亦舟听见这句时，旧群置顶还在手机顶端。 | 对许澈说清 / 继续不谈深事 / 把旧群下移 | `xuche_boundary_seen = true`、`new_circle_truth +1`、`message_cut +1` |

### 选择窗口

`ACT6-R5X-CHOICE-04` 位于 `ACT6-R5X-S16` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-R5X-C04-A` | 对许澈说清 | `xuche_boundary_seen = true`、`new_circle_truth +2`、`5x_regret +1`、`identity_drift -1`；他承认许澈不是答案，第七卷可进入清醒离开或许澈边界结算。 |
| `ACT6-R5X-C04-B` | 继续不谈深事 | `thin_relation +1`、`identity_drift +1`、`message_cut +1`；新圈继续轻，后续更容易进入薄圈散场或删除置顶温度。 |

完成条件：`xuche_boundary_seen`、`new_circle_truth_checked = true`、`route_pool_locked = true`。

---

## `ACT6-R5X-B05` 旧消息与删除置顶预结算

本组把第六幕交给第七幕。这里不写最终毕业结局，但必须输出第七卷需要读取的旧消息、删除置顶、许澈边界、新圈薄关系和毕业温度。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-R5X-S17` 至 `ACT6-R5X-S20` |
| `choice_window_id` | `ACT6-R5X-CHOICE-05` |
| `choice_after_scene` | `ACT6-R5X-S20` |
| `mother_lockpoints` | 毕业去向预热、答辩预备、旧群置顶、武生院站预回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-R5X-S17` | 教务系统 / 新圈群 | 毕业去向预登记快开始，新圈问要不要最后再约几次。旧群置顶也亮着，像另一张没有消失的表格。 | 先填本人去向 / 先回新圈 / 看旧群不回 | `graduation_direction_status = pending`、`new_circle_trust +1`、`message_cut +1` |
| `ACT6-R5X-S18` | 答辩预备 / 台球厅门口 | 答辩顺序、论文终版和新圈散局撞在一起。韩野说改天，蒋沐说随便，许澈也有自己的班。 | 保最低答辩预备 / 去追散局 / 问许澈能不能等 | `project_stability +1`、`thin_relation +1`、`xuche_boundary_seen = branch_dependent` |
| `ACT6-R5X-S19` | 旧群置顶 / 草稿框 | 他写下一句“到时候都顺利”，又删掉。发出去不会回线，不发也不等于轻松。 | 发短消息 / 存草稿 / 删除置顶 | `old_message_sent = branch_dependent`、`deleted_pin = branch_dependent`、`5x_regret +1` |
| `ACT6-R5X-S20` | 武生院站预回声 / 夜路 | 站台还没到，但第七卷的影子已经出现：毕业照、清寝、最后饭局和离校手续都会问同一个问题，他要不要承认自己已经离开。 | 发旧消息但不回线 / 删除置顶并离开 / 什么都先不做 | `graduation_temperature = branch_dependent`、`route_lock = 5x`、`hard_outflow = true` |

### 选择窗口

`ACT6-R5X-CHOICE-05` 位于 `ACT6-R5X-S20` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-R5X-C05-A` | 发旧消息但不回线 | `old_message_sent = true`、`soft_passing +1`、`5x_regret -1`、`graduation_temperature = old_message_no_return`；第七卷可进入旧消息回应、清醒离开或许澈边界结算。 |
| `ACT6-R5X-C05-B` | 删除置顶并离开 | `deleted_pin = true`、`message_cut +2`、`5x_regret +1`、`graduation_temperature = deleted_pin_shadow`；第七卷可进入删除置顶、薄圈散场或站台空白结算。 |

完成条件：`act6_closed = true`、`act6_route_pool_locked = true`、`act6_to_act7_handoff_ready = true`。

---

## Act6 -> Act7 交接

第六幕结束后必须向 `开发数据_IF剧情页级JSON_R5X-HARD_v1.json` 的第七卷结算层交出以下状态：

| 字段 | 来源 | 第七卷用途 |
|---|---|---|
| `route_lock` | 全部五组 | 固定 `5x`，确认旧路线不能重新打开。 |
| `hard_outflow` | 全部五组 | 固定 `true`，确认仍在唯一硬外流池。 |
| `new_circle_truth` | `B01`、`B02`、`B04`、`B05` | 判断清醒离开、薄圈散场和许澈边界。 |
| `thin_relation` | `B02`、`B04`、`B05` | 判断新圈是否散得更轻、更空。 |
| `old_dorm_distance` | `B01`、`B03`、`B05` | 判断旧线距离和毕业低温。 |
| `message_cut` | 全部五组 | 判断删除置顶、站台空白和旧消息是否还能低频回应。 |
| `soft_passing` | `B03`、`B05` | 判断旧人擦肩、短句和旧消息结算。 |
| `xuche_boundary_seen` | `B04`、`B05` | 判断许澈边界结局是否成立。 |
| `old_message_sent` | `B03`、`B05` | 判断旧群 / 旧人消息是否发出但不回线。 |
| `deleted_pin` | `B04`、`B05` | 判断旧群置顶是否沉下去。 |
| `5x_regret` | `B02` 至 `B05` | 判断 5X 遗憾、站台空白和清醒离开的温度。 |
| `graduation_temperature` | `B05` | 进入第七卷最终温度分流。 |

## 防漂移检查

- 如果某一段写新圈轻松，必须补一个薄关系或现实代价：钱、改约、散局、玩笑带过、没有义务解释。
- 如果某一段写许澈帮忙，必须同时写他的边界：他可以听见，但不负责替林亦舟解释旧关系。
- 如果某一段写旧人出现，必须保持软照面、短句或同场流程，不开放旧路线选择。
- 如果某一段写“完成公共任务”，必须明确只是本人最低责任，不恢复旧项目线。
- 如果某一段写选择，必须只能在 `POOL-R5X-HARD` 内改变温度和边界，不能转路线。
- 如果某一段写毕业前回声，必须明确“发消息不等于回线，删除置顶不等于胜利”。
