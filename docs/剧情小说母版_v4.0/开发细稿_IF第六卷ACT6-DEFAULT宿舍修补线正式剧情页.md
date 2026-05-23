# IF 第六卷 ACT6-DEFAULT 宿舍修补线正式剧情页

本文用于把 `DEFAULT-4XX` / `POOL-DEFAULT-4XX` 的第六卷承接层从五个四段组占位扩成 20 个正式剧情段、5 个四段组和 5 个双方向选择窗口。

本文件不是 P0-D 站队入口，也不是第七卷毕业结算。第五幕已经让林亦舟选择继续留在 4XX 的旧账现场；第六卷只处理一件事：四人不再默认同行以后，公共桌、C407、饭局、旧物、毕业前流程怎样把“修补但不圆满”的关系定形。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `DEFAULT-4XX` |
| `route_pool_id` | `POOL-DEFAULT-4XX` |
| `act6_variant_id` | `ACT6-DEFAULT` |
| `entry_node` | `P0D_ACT5_SHORT_GROUP` |
| `pool_entry_choice` | `P0D_STAND_REPAIR_TABLE` |
| `route_focus` | `default_4xx` |
| `outflow_stage` | `act5_dorm_stand` |
| `route_switch_allowed` | `false` |
| `new_full_route_unlock_allowed` | `false` |

禁止项：

- 不允许把本线写成四人大团圆、真结局或默认正确线。
- 不允许在第六卷重新开放周屿线、唐骁线、陆沉线、摆烂线、晚风线、专注感情线、工作线或 5X。
- 不允许让任何一个室友成为替全寝室解释的人。
- 不允许让 C407 稳定、饭局坐下、毕业照同框自动等于和解。
- 不允许在选择窗口给第三方向；每个窗口只保留当前池内两种处理方式。

## 关键变量

| 变量 | 用途 |
|---|---|
| `dorm_trust` | 四人是否还愿意当面核对最低事实。 |
| `dorm_warmth` | 还有没有等一下、留位置、问一句的温度。 |
| `avoidance` | 林亦舟继续回避、静音、拖延或让入口过期的程度。 |
| `old_debt` | 旧账是否被具体看见，而不是只剩情绪。 |
| `repair_depth` | 修补是否落到具体事实、时间、授权和缺席。 |
| `proxy_risk` | 替别人解释、代签、代取、代填和代处理的风险。 |
| `public_boundary` | 群消息、共享盘、合照、旧物和毕业材料的公开边界。 |
| `project_stability` | C407 / 课程协作是否稳定。 |
| `time_debt` | 迟到、等人、补说明、后处理造成的时间欠账。 |
| `polite_distance` | 体面淡化程度。 |
| `missed_chance` | 错过饭局、补话、同框或最后一句的机会。 |
| `conflict_heat` | 旧账被说出口后的冲突升温。 |
| `relationship_truth` | 是否承认“没有完全和解”这个事实。 |
| `final_group_state` | 第七卷读取的 4XX 群状态。 |
| `graduation_temperature` | 第七卷结算温度。 |

## 20 段总表

| 四段组 | 剧情段 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-DEFAULT-B01` | `S01` 至 `S04` | `ACT6-DEFAULT-CHOICE-01` | 当面修补 / 保持体面距离 |
| `ACT6-DEFAULT-B02` | `S05` 至 `S08` | `ACT6-DEFAULT-CHOICE-02` | 公共桌补话 / C407 事项优先 |
| `ACT6-DEFAULT-B03` | `S09` 至 `S12` | `ACT6-DEFAULT-CHOICE-03` | 集体饭局推进 / 一对一短谈推进 |
| `ACT6-DEFAULT-B04` | `S13` 至 `S16` | `ACT6-DEFAULT-CHOICE-04` | 说旧账 / 只处理现实任务 |
| `ACT6-DEFAULT-B05` | `S17` 至 `S20` | `ACT6-DEFAULT-CHOICE-05` | 留下最后一句 / 允许空白毕业 |

---

## `ACT6-DEFAULT-B01` 当面修补与体面距离

本组承接 P0-D 共用入口。核心不是重新问站谁，而是林亦舟已经选择回到 4XX 后，能不能把事项群短句带回公共桌。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-DEFAULT-S01` 至 `ACT6-DEFAULT-S04` |
| `choice_window_id` | `ACT6-DEFAULT-CHOICE-01` |
| `choice_after_scene` | `ACT6-DEFAULT-S04` |
| `mother_lockpoints` | 4XX 事项群、青枫居楼下、公共桌事实表、旧账第一次重提 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-DEFAULT-S01` | 4XX 事项群 / 青枫居楼下 | 第六卷开场，群里只剩“C407 表谁交”“今晚回不回”。林亦舟站在楼下，知道自己再回一个收到就会让公共桌继续空着。 | 回群说当面说 / 先不进门 / 直接上楼 | `old_debt +1`、`avoidance +1`、`dorm_pressure +1` |
| `ACT6-DEFAULT-S02` | 4XX 门口 / 宿管窗口 | 宿管阿姨催夜归登记，唐骁从门里问“你还进不进来”。这不是温柔入口，而是一次现实催回。 | 写清马上回 / 让唐骁先别关门 / 只点头进门 | `public_boundary +1`、`dorm_trust +1`、`time_debt +1` |
| `ACT6-DEFAULT-S03` | 4XX 公共桌 | 公共桌上压着事实表、外卖小票和 C407 分工。周屿说“这么正式啊”，陆沉只把椅子往外挪一点。 | 先说事实表 / 先问谁没吃饭 / 先承认自己想逃 | `repair_depth +1`、`dorm_warmth +1`、`old_debt +1` |
| `ACT6-DEFAULT-S04` | 公共桌 / 阳台门口 | 第一轮话没有说完。唐骁要求先定截止，周屿不想被写进表格，陆沉提醒“别替我说”。 | 当面修补 / 保持体面距离 / 把话停在边界内 | `proxy_risk +1`、`public_boundary +1`、`repair_depth +1` |

### 选择窗口

`ACT6-DEFAULT-CHOICE-01` 位于 `ACT6-DEFAULT-S04` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-DEFAULT-C01-A` | 当面修补 | `repair_depth +1`、`dorm_trust +1`、`old_debt +1`；公共桌继续打开，但旧账会更具体。 |
| `ACT6-DEFAULT-C01-B` | 保持体面距离 | `polite_distance +1`、`avoidance +1`、`dorm_warmth -1`；短期少吵，后续更偏事项优先和低温。 |

完成条件：`repair_depth`、`public_boundary`、`route_pool_locked = true`。

---

## `ACT6-DEFAULT-B02` 公共桌补话与 C407 事项优先

本组把宿舍修补和专业协作绑在一起。公共桌能坐下不代表 C407 能等，C407 稳定也不代表旧账消失。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-DEFAULT-S05` 至 `ACT6-DEFAULT-S08` |
| `choice_window_id` | `ACT6-DEFAULT-CHOICE-02` |
| `choice_after_scene` | `ACT6-DEFAULT-S08` |
| `mother_lockpoints` | C407 分工、共享盘权限、打印材料、本人确认 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-DEFAULT-S05` | C407 / 共享盘 | 唐骁把命名规范发来，周屿问自己是不是又只负责“热闹的部分”。共享盘权限变成旧账回声。 | 按接口分工 / 让每人只改本人部分 / 先回公共桌 | `project_stability +1`、`public_boundary +1`、`zhou_misread +1` |
| `ACT6-DEFAULT-S06` | 打印店 / 课程材料 | 打印店窗口要本人确认，陆沉的排班截图夹在材料里，不能被林亦舟拿去替他说。 | 本人确认 / 请陆沉自己补一行 / 先打草稿 | `proxy_risk +1`、`luchen_misread +1`、`public_boundary +1` |
| `ACT6-DEFAULT-S07` | 青枫居公共桌 | 外卖袋还在，事实表也还在。周屿不接“开会”这个词，唐骁只看截止时间。 | 补一句难听话 / 先问今晚谁有事 / 把表格收起来 | `dorm_warmth +1`、`repair_depth +1`、`time_debt +1` |
| `ACT6-DEFAULT-S08` | B204 / 事项群 | 学习委员催 C407 材料，4XX 群里也有人问今晚还说不说。林亦舟必须选择先补关系，还是先保事项。 | 公共桌补话 / C407 事项优先 / 两边都写明截止 | `project_stability +1`、`old_debt +1`、`dorm_trust +1` |

### 选择窗口

`ACT6-DEFAULT-CHOICE-02` 位于 `ACT6-DEFAULT-S08` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-DEFAULT-C02-A` | 公共桌补话 | `dorm_warmth +1`、`repair_depth +1`、`project_stability -1`；关系有机会回温，但 C407 会留下后补成本。 |
| `ACT6-DEFAULT-C02-B` | C407 事项优先 | `project_stability +1`、`public_boundary +1`、`dorm_warmth -1`；专业协作更稳，关系更低温。 |

完成条件：`project_stability_checked`、`public_boundary`、`route_pool_locked = true`。

---

## `ACT6-DEFAULT-B03` 集体饭局与一对一短谈

本组处理修补线最容易误写的部分：饭局不是和解证明，一对一短谈也不能替全寝室解决旧账。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-DEFAULT-S09` 至 `ACT6-DEFAULT-S12` |
| `choice_window_id` | `ACT6-DEFAULT-CHOICE-03` |
| `choice_after_scene` | `ACT6-DEFAULT-S12` |
| `mother_lockpoints` | 食堂二楼、东北饺子馆预热、凌空栈道软照面、体育馆短场 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-DEFAULT-S09` | 食堂二楼 / 饭卡余额 | 周屿提东区商业街，唐骁问能不能准点，陆沉看了一眼价格。饭局从一开始就不是简单热闹。 | 提食堂二楼 / 提东北饺子馆 / 不组织 | `dorm_warmth +1`、`money_pressure +1`、`missed_chance +1` |
| `ACT6-DEFAULT-S10` | 凌空栈道 / 事项群 | 林亦舟出去透气，夏知微或许棠只提醒“材料本人确认了吗”。外部照面只能把边界提醒带回 4XX。 | 先回 4XX 群 / 先回外部消息 / 不解释先走 | `public_boundary +1`、`avoidance +1`、`repair_depth +1` |
| `ACT6-DEFAULT-S11` | 东区商业街 / 饭局投票 | 饭局投票快截止，有人没回，有人迟到。留不留座变成照顾和越界的分界线。 | 留可取消位 / 不替人填 / 私聊最后问一次 | `proxy_risk +1`、`dorm_warmth +1`、`polite_distance +1` |
| `ACT6-DEFAULT-S12` | 4XX 门口 / 水房 | 饭局前后，某个人终于愿意单独说两句，但另一个人的消息还停在未读。 | 集体饭局推进 / 一对一短谈推进 / 先回未读消息 | `selected_private +1`、`time_debt +1`、`misread +1` |

### 选择窗口

`ACT6-DEFAULT-CHOICE-03` 位于 `ACT6-DEFAULT-S12` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-DEFAULT-C03-A` | 集体饭局推进 | `dorm_warmth +1`、`time_debt +1`、`proxy_risk +1`；饭局温度更可见，但替人占位风险上升。 |
| `ACT6-DEFAULT-C03-B` | 一对一短谈推进 | `selected_private +1`、`repair_depth +1`、`misread +1`；局部关系更深，另一个室友可能误读。 |

完成条件：`meal_boundary_checked`、`repair_depth`、`route_pool_locked = true`。

---

## `ACT6-DEFAULT-B04` 旧账说明与现实任务

本组让旧账和现实任务正面相撞。旧包裹、共享盘、毕业照缓存和清寝清单都要求本人确认，不能用“我帮你处理了”包装修补。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-DEFAULT-S13` 至 `ACT6-DEFAULT-S16` |
| `choice_window_id` | `ACT6-DEFAULT-CHOICE-04` |
| `choice_after_scene` | `ACT6-DEFAULT-S16` |
| `mother_lockpoints` | 快递站旧包裹、清寝预检查、毕业照预览、共享盘缓存 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-DEFAULT-S13` | 快递站 / 旧包裹 | 取件码像室友的，但不完全确定。快递站只认本人手机号，陆沉只回“等我自己来”。 | 等本人来 / 代取不拆 / 拿回公共桌确认 | `proxy_risk +1`、`public_boundary +1`、`old_debt +1` |
| `ACT6-DEFAULT-S14` | 青枫居清寝预检查 | 宿管让提前清公共物，桌上有谁都用过的线、杯子、旧打印页。归属不是靠记忆能决定。 | 列归属清单 / 问本人 / 先装公共袋 | `old_object_weight +1`、`dorm_warmth +1`、`proxy_risk +1` |
| `ACT6-DEFAULT-S15` | B204 / 毕业照预览 | 预览图里四人同框，但公开用途还没确认。许棠提醒缓存不是授权，周屿问“会不会写得太好看”。 | 只留存不公开 / 发群确认 / 暂缓提交 | `photo_boundary_checked +1`、`public_boundary +1`、`graduation_temperature` |
| `ACT6-DEFAULT-S16` | 公共桌 / 共享盘 | 旧账终于被带到具体物件上：那天谁替谁说了话，谁没有被问过，谁后来也懒得解释。 | 说旧账 / 只处理现实任务 / 把话停在本人确认 | `conflict_heat +1`、`relationship_truth +1`、`project_stability +1` |

### 选择窗口

`ACT6-DEFAULT-CHOICE-04` 位于 `ACT6-DEFAULT-S16` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-DEFAULT-C04-A` | 说旧账 | `old_debt +1`、`repair_depth +1`、`conflict_heat +1`；最后一组有机会留下具体话，但温度不一定高。 |
| `ACT6-DEFAULT-C04-B` | 只处理现实任务 | `project_stability +1`、`polite_distance +1`、`dorm_warmth -1`；手续更稳，关系更可能体面远离。 |

完成条件：`clearance_boundary_checked`、`relationship_truth`、`route_pool_locked = true`。

---

## `ACT6-DEFAULT-B05` 最后一句与空白毕业预结算

本组把第六幕交给第七幕。这里不写最终结局，但必须输出第七卷读取的公共桌温度、群状态、最后饭局、联系方式、旧账和是否允许空白。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-DEFAULT-S17` 至 `ACT6-DEFAULT-S20` |
| `choice_window_id` | `ACT6-DEFAULT-CHOICE-05` |
| `choice_after_scene` | `ACT6-DEFAULT-S20` |
| `mother_lockpoints` | 预登记预告、最后饭局预热、4XX 群短句、武生院站预回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-DEFAULT-S17` | 教务系统 / 4XX 群 | 毕业去向预登记快开始，联系方式和紧急联系人都不能由别人代填。4XX 群问“到时候谁一起办”。 | 先填本人信息 / 先回 4XX 最低事实 / 两边都写真实范围 | `pre_register_boundary_checked +1`、`contact_info_checked +1`、`dorm_trust +1` |
| `ACT6-DEFAULT-S18` | 东北饺子馆预热 / 饭局投票 | 最后饭局投票出来，有人能到，有人迟到，有人不确定。饭局不是和解证明，只是最后一张可能坐下的桌。 | 不替人填 / 留可取消位 / 只确认自己到场 | `last_meal_seat_confirmed +1`、`meal_boundary_checked +1`、`polite_distance +1` |
| `ACT6-DEFAULT-S19` | 4XX 公共桌 / 清单夹 | 清寝、毕业照、C407 归档和离校手续都压到同一只夹子里。每一项都能办完，但不代表话说完。 | 补一句具体旧事 / 只核对清单 / 把话留到群里 | `relationship_truth +1`、`repair_depth +1`、`final_group_state` |
| `ACT6-DEFAULT-S20` | 校门口 / 武生院站预回声 | 站台还没到，第七卷已经靠近。四人都知道“到了说一声”可能有人回，也可能没人回。 | 留下最后一句 / 允许空白毕业 / 只约定低频真实联系 | `graduation_temperature`、`material_contact_scope`、`ending_temperature_locked` |

### 选择窗口

`ACT6-DEFAULT-CHOICE-05` 位于 `ACT6-DEFAULT-S20` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-DEFAULT-C05-A` | 留下最后一句 | `graduation_temperature = unresolved_but_present`、`repair_depth +1`、`dorm_trust +1`；第七卷可结算为说开、低频联系或未完全和解但仍可见。 |
| `ACT6-DEFAULT-C05-B` | 允许空白毕业 | `graduation_temperature = polite_distance`、`polite_distance +1`、`missed_chance +1`；第七卷可结算为体面淡化、错过或不和解。 |

完成条件：`act6_closed = true`、`act6_route_pool_locked = true`、`act6_to_act7_handoff_ready = true`。

## Act6 -> Act7 交接字段

建议写入正式 JSON：

```json
{
  "act6_closed": true,
  "act6_route_pool_locked": true,
  "act6_choice_window_count": 5,
  "act6_directions_per_window": 2,
  "act6_to_act7_handoff": {
    "graduation_temperature": "branch_dependent",
    "final_group_state": "branch_dependent",
    "route_switch_allowed": false,
    "soft_echo_routes_only": true
  }
}
```

第七卷读取重点：

- `repair_depth` 高且 `public_boundary` 高：偏说开局部旧事，但不保证亲密。
- `dorm_trust` 高且 `old_debt` 可见：偏未完全和解但仍在场。
- `polite_distance` 高：偏体面淡化。
- `avoidance` 或 `missed_chance` 高：偏错过、空白或低温毕业。
- `conflict_heat` 高且 `dorm_warmth` 低：偏不和解但停止互相追究。

## 验收标准

- 20 个剧情段必须全部存在：`ACT6-DEFAULT-S01` 至 `ACT6-DEFAULT-S20`。
- 5 个四段组必须全部存在：`ACT6-DEFAULT-B01` 至 `ACT6-DEFAULT-B05`。
- 每组 4 页，每组 1 个选择窗口。
- 每个选择窗口只保留 2 个方向，且都留在 `POOL-DEFAULT-4XX`。
- 不重新开放周屿线、唐骁线、陆沉线、摆烂线、晚风线、专注感情线、工作线或 5X。
- 4XX 修补必须允许遗憾、不和解、体面淡化和低频联系存在。
- `ACT6-DEFAULT-S20` 后只进入 `ACT6-END`，再进入 `ACT7-DEFAULT` 12 事件正式 JSON。
