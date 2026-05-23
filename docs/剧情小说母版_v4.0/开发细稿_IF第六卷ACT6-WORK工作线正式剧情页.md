# IF 第六卷 ACT6-WORK 工作线正式剧情页

本文用于把 `R4-WORK` / `POOL-R4-WORK` 的第六卷承接层从长线占位扩成 20 个正式剧情段、5 个四段组和 5 个双方向选择窗口。

本文件不是 P0-B 第四幕入口，也不是第七卷毕业结算。第四幕已经让林亦舟进入钱压、排班、留校、快递站和打印店的生活方式倾向；第六卷只处理一件事：他已经进入工作线以后，工时、证明、C407、4XX 最低事实、家庭暗线和毕业前现实安排怎样把这条生活方式线定形。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R4-WORK` |
| `route_pool_id` | `POOL-R4-WORK` |
| `act6_variant_id` | `ACT6-WORK` |
| `entry_node` | `P0B_SUMMER_WORK_SHIFT` |
| `pool_entry_choice` | `P0B_WORK_TAKE_SHIFT` |
| `route_focus` | `work` |
| `outflow_stage` | `act4_summer` |
| `route_switch_allowed` | `false` |
| `new_full_route_unlock_allowed` | `false` |

禁止项：

- 不允许把工作线写成苦情线、励志线或“赚钱后自动变好”的奖励线。
- 不允许在第六卷重新开放陆沉线、晚风线、站队线、专注感情线、摆烂线或 5X。
- 不允许把陆沉写成默认陪跑或导师；陆沉只能作为现实压力软回声出现。
- 不允许把兼职场景写成新圈子替代旧关系；快递站、打印店和勤工负责人只提供现实流程，不提供逃离旧账的完整新路线。
- 不允许在选择窗口给第三方向；每个窗口只保留当前池内两种处理方式。

## 关键变量

| 变量 | 用途 |
|---|---|
| `work_shift` | 排班、勤工、临时加班和固定班投入强度。 |
| `shift_boundary_checked` | 是否把排班、请假、换班和到岗边界说清。 |
| `work_schedule_checked` | 是否核对毕业前工时、请假和现实安排。 |
| `money_pressure` | 饭卡、交通、打印、证明、AA 和生活费压力。 |
| `wage_confirmed` | 工资、补贴、证明或签收是否确认。 |
| `work_certificate_status` | 勤工证明、工资确认和归档状态。 |
| `public_boundary` | 请假说明、证明材料、代签、代带话和公开范围。 |
| `work_public_scope` | 工作相关信息能被同学、老师或负责人看见的范围。 |
| `work_private_entry` | 是否形成只在工作 / 现实任务里处理关系的私人入口。 |
| `family_signal` | 家庭转账、生活用品、联系人和备注暗线显性程度。 |
| `time_debt` | 排班、换班、证明、迟到和后补说明造成的时间欠账。 |
| `dorm_absence` | 4XX 当面节点缺席程度。 |
| `dorm_misread` | 4XX 因缺席、沉默、只回流程产生的误读。 |
| `dorm_warmth` | 宿舍旧关系温度。 |
| `repair_depth` | 林亦舟是否把钱压、排班和缺席说成具体事实。 |
| `project_stability` | C407 / 课程材料是否被稳定处理。 |
| `reality_bond` | 快递站、打印店、勤工负责人等现实关系熟悉度。 |
| `energy_low` | 疲惫、低烧、夜归和身体成本。 |
| `missed_chance` | 错过饭局、晚风、活动或当面补话入口。 |
| `polite_distance` | 关系体面淡化程度。 |
| `work_final_contact_scope` | 第七卷最终联系范围。 |
| `graduation_temperature` | 第七卷结算温度。 |

## 20 段总表

| 四段组 | 剧情段 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-WORK-B01` | `S01` 至 `S04` | `ACT6-WORK-CHOICE-01` | 把排班说清 / 先把宿舍消息补上 |
| `ACT6-WORK-B02` | `S05` 至 `S08` | `ACT6-WORK-CHOICE-02` | 先保工时 / 先保 C407 协作 |
| `ACT6-WORK-B03` | `S09` 至 `S12` | `ACT6-WORK-CHOICE-03` | 钱账透明 / 用沉默省解释 |
| `ACT6-WORK-B04` | `S13` 至 `S16` | `ACT6-WORK-CHOICE-04` | 请假修补关系 / 接加班保收入 |
| `ACT6-WORK-B05` | `S17` 至 `S20` | `ACT6-WORK-CHOICE-05` | 毕业后先处理现实安排 / 留关系口但不承诺 |

---

## `ACT6-WORK-B01` 排班边界与宿舍最低事实

本组承接 P0-B 工作倾向和第五幕门槛。核心不是重新选择要不要兼职，而是林亦舟进入工作线后，能不能把固定班、请假边界和 4XX 最低事实说清。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-WORK-S01` 至 `ACT6-WORK-S04` |
| `choice_window_id` | `ACT6-WORK-CHOICE-01` |
| `choice_after_scene` | `ACT6-WORK-S04` |
| `mother_lockpoints` | 快递站排班、4XX 事项群、C407 分工、暑假 / 留校去向回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-WORK-S01` | 快递站排班表 / 4XX 群 | 第六卷开场，快递站固定班和 4XX 事项群同时弹出。林亦舟看到自己的名字在晚班格子里，也看到唐骁催 C407 分工确认。 | 先看排班 / 先回 4XX / 两边都标未读 | `work_shift +1`、`time_debt +1`、`dorm_misread +1` |
| `ACT6-WORK-S02` | 青枫居楼下 / 宿管窗口 | 宿管阿姨提醒晚归登记要写清；周屿在群里问他今晚到不到。缺席不再只是迟到，而是会被记录。 | 写清晚归原因 / 只说有班 / 先不回群 | `shift_boundary_checked +1`、`public_boundary +1`、`dorm_absence +1` |
| `ACT6-WORK-S03` | B204 走廊 / 手机 | 学习委员发来材料确认，勤工负责人也问能不能临时顶半小时。两个流程都要求本人答复。 | 说明排班冲突 / 先答应顶班 / 请对方给十分钟 | `work_schedule_checked +1`、`time_debt +1`、`project_stability +1` |
| `ACT6-WORK-S04` | 4XX 公共桌回声 | 林亦舟回寝时，公共桌上只剩一张写了分工的纸。唐骁没有发火，只把他的名字写在“后补说明”栏。 | 把排班说清 / 先补宿舍消息 / 用一句“我忙”带过 | `repair_depth +1`、`dorm_misread +1`、`old_debt +1` |

### 选择窗口

`ACT6-WORK-CHOICE-01` 位于 `ACT6-WORK-S04` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-WORK-C01-A` | 把排班说清 | `shift_boundary_checked +1`、`public_boundary +1`、`work_shift +1`；工作线稳定，但 4XX 继续承受他缺席的事实。 |
| `ACT6-WORK-C01-B` | 先把宿舍消息补上 | `dorm_warmth +1`、`repair_depth +1`、`time_debt +1`；宿舍误读降低，但工时和证明会在后面补回成本。 |

完成条件：`shift_boundary_checked`、`act6_choice_window_count += 1`、`route_pool_locked = true`。

---

## `ACT6-WORK-B02` 工时、证明与 C407 协作

本组把工作线和公共任务绑定。快递站、打印店、证明材料和 C407 不是两条线；第六卷必须让玩家看见“先保工时”和“先保协作”都会留下现实代价。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-WORK-S05` 至 `ACT6-WORK-S08` |
| `choice_window_id` | `ACT6-WORK-CHOICE-02` |
| `choice_after_scene` | `ACT6-WORK-S08` |
| `mother_lockpoints` | 勤工证明、打印店盖章、C407 材料、代签 / 代带话边界 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-WORK-S05` | 打印店 / 勤工证明 | 打印店老板认得他要打的表。勤工证明、课程材料和家庭说明夹在同一个文件袋里。 | 先打勤工证明 / 先打 C407 材料 / 少打一份省钱 | `work_certificate_status = pending`、`money_pressure +1`、`public_boundary +1` |
| `ACT6-WORK-S06` | C407 / 共享盘 | 唐骁把命名规范发来，问他能不能按时交扫描件。工作线不是逃课，也不是把项目甩给别人。 | 先稳 C407 协作 / 说自己要去盖章 / 让别人先顶 | `project_stability +1`、`time_debt +1`、`proxy_risk +1` |
| `ACT6-WORK-S07` | B204 / 辅导员办公室 | 盖章窗口只开到下午四点。辅导员提醒不要让室友代签，也不要把家庭说明交给别人转述。 | 本人补签 / 请同学带话 / 放弃这次盖章 | `public_boundary +1`、`work_public_scope +1`、`dorm_misread +1` |
| `ACT6-WORK-S08` | 快递站后门 / 事项群 | 加班通知压过来，C407 也要最后确认。林亦舟必须决定先保工时，还是先保协作。 | 先保工时 / 先保 C407 / 两边都写请假说明 | `work_shift +1`、`project_stability +1`、`time_debt +1` |

### 选择窗口

`ACT6-WORK-CHOICE-02` 位于 `ACT6-WORK-S08` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-WORK-C02-A` | 先保工时 | `work_shift +2`、`money_pressure -1`、`project_stability -1`；第七卷工资和证明更稳，但 C407 与 4XX 温度下降。 |
| `ACT6-WORK-C02-B` | 先保 C407 协作 | `project_stability +2`、`dorm_warmth +1`、`money_pressure +1`；公共协作稳定，但工作收入和证明需要后补。 |

完成条件：`work_certificate_status`、`project_stability_checked`、`route_pool_locked = true`。

---

## `ACT6-WORK-B03` 钱账透明与沉默成本

本组处理钱进入关系后的误读。AA、饭卡、工资、父母消息和请客都不能只用“我没事”盖掉；透明会暴露压力，沉默会省解释但增加距离。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-WORK-S09` 至 `ACT6-WORK-S12` |
| `choice_window_id` | `ACT6-WORK-CHOICE-03` |
| `choice_after_scene` | `ACT6-WORK-S12` |
| `mother_lockpoints` | 食堂二楼、AA、工资确认、家庭转账、最后饭局预热 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-WORK-S09` | 食堂二楼 / 饭卡余额 | 饭卡余额提示跳出来，周屿问要不要去东区商业街吃饭。三块钱不是大事，但每次都差一点。 | 说清预算 / 只说不去了 / 去但点最便宜 | `money_pressure +1`、`dorm_misread +1`、`dorm_warmth +1` |
| `ACT6-WORK-S10` | 小饭馆 / AA 收款码 | 唐骁按人头算 AA，周屿说他可以少转点。好意和尴尬挤在同一个收款码里。 | AA 到最后一分 / 接受少转 / 提前说自己预算 | `public_boundary +1`、`dorm_misread +1`、`repair_depth +1` |
| `ACT6-WORK-S11` | 家庭电话 / 楼道 | 母亲问要不要转一点，父亲只说“这周再等等”。林亦舟不能把所有变化都藏成一句够用。 | 说具体缺口 / 只回够用 / 挂掉先去上班 | `family_signal +1`、`old_debt +1`、`time_debt +1` |
| `ACT6-WORK-S12` | 工资确认群 / 4XX 群 | 工资确认表还没发，4XX 群里饭局投票快截止。他如果沉默，别人会替他默认“不来”。 | 钱账透明 / 用沉默省解释 / 只选最低消费 | `wage_confirmed = false`、`polite_distance +1`、`missed_chance +1` |

### 选择窗口

`ACT6-WORK-CHOICE-03` 位于 `ACT6-WORK-S12` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-WORK-C03-A` | 钱账透明 | `repair_depth +1`、`public_boundary +1`、`dorm_misread -1`；关系不一定变热，但别人不再只能猜。 |
| `ACT6-WORK-C03-B` | 用沉默省解释 | `polite_distance +1`、`missed_chance +1`、`dorm_absence +1`；短期省掉尴尬，毕业结算更容易低温。 |

完成条件：`money_pressure_recorded`、`family_signal_recorded`、`route_pool_locked = true`。

---

## `ACT6-WORK-B04` 请假修补与加班收益

本组是工作线第六幕的核心取舍。请假可以修补关系，但会损失工时和收入；接加班能保住现实安排，却会把当面解释继续往后推。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-WORK-S13` 至 `ACT6-WORK-S16` |
| `choice_window_id` | `ACT6-WORK-CHOICE-04` |
| `choice_after_scene` | `ACT6-WORK-S16` |
| `mother_lockpoints` | 4XX 当面补话、快递站加班、校医院疲劳、晚风 / 活动低频回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-WORK-S13` | 快递站窗口 / 4XX 事项群 | 站长问他能不能接晚班，4XX 群里有人提到当面把旧账说完。两个请求都很具体。 | 问能否请假 / 接晚班 / 先回群说明 | `work_shift +1`、`dorm_absence +1`、`repair_depth +1` |
| `ACT6-WORK-S14` | 校医院 / 宿管窗口 | 连续排班后低烧，护士让他写登记。身体成本终于变成纸面记录，不再是“忍一下”。 | 去校医院 / 硬撑上班 / 给 4XX 发请假理由 | `energy_low +1`、`time_debt +1`、`public_boundary +1` |
| `ACT6-WORK-S15` | 青枫居楼下 / 夜风 | 陆沉路过，只问他有没有吃饭。这个照面不能打开陆沉线，只提醒他现实压力不是只有自己一个人有。 | 接住一句现实提醒 / 转开话题 / 让陆沉别管 | `reality_bond +1`、`dorm_misread -1`、`polite_distance +1` |
| `ACT6-WORK-S16` | 公共桌 / 快递站后门 | 周屿不再每次都叫他，唐骁把他排进“能来再确认”。他必须决定请假修补，还是接加班保收入。 | 请假修补关系 / 接加班保收入 / 只发后补说明 | `dorm_warmth +1`、`money_pressure +1`、`work_shift +1` |

### 选择窗口

`ACT6-WORK-CHOICE-04` 位于 `ACT6-WORK-S16` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-WORK-C04-A` | 请假修补关系 | `dorm_warmth +1`、`repair_depth +1`、`money_pressure +1`；4XX 温度回升，但现实缺口会在毕业前继续追上来。 |
| `ACT6-WORK-C04-B` | 接加班保收入 | `work_shift +2`、`money_pressure -1`、`missed_chance +1`；现实安排更稳，关系更偏后补说明和低频联系。 |

完成条件：`energy_low_recorded`、`repair_or_shift_tradeoff_recorded`、`route_pool_locked = true`。

---

## `ACT6-WORK-B05` 毕业前现实安排预结算

本组把第六幕交给第七幕。这里不写最终结局，但必须输出第七卷读取的工时、工资、证明、联系人、家庭暗线、4XX 温度和最终联系范围。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-WORK-S17` 至 `ACT6-WORK-S20` |
| `choice_window_id` | `ACT6-WORK-CHOICE-05` |
| `choice_after_scene` | `ACT6-WORK-S20` |
| `mother_lockpoints` | 毕业去向预登记、工资确认、清寝、最后饭局、武生院站预回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-WORK-S17` | 教务系统 / 工资确认群 | 毕业去向预登记快开始，工资确认群也要求核对手机号。林亦舟发现两个“联系方式”都不能乱填。 | 先核对工资群 / 先填毕业去向 / 两边都写真实号码 | `work_schedule_checked +1`、`wage_confirmed +1`、`public_boundary +1` |
| `ACT6-WORK-S18` | B204 / 家庭备注栏 | 家庭备注栏很短，短到放不下生活费延迟、兼职、请假和第一周住处。 | 写最低真实说明 / 只写无特殊情况 / 先问父母 | `family_signal +1`、`repair_depth +1`、`old_debt +1` |
| `ACT6-WORK-S19` | 青枫居 4XX / 最后饭局预热 | 4XX 讨论最后饭局时间，快递站也问毕业前能不能多顶一班。林亦舟不能再把所有关系都放进“等我忙完”。 | 为饭局请假 / 接毕业前加班 / 提前说明只能低频联系 | `dorm_trust +1`、`work_shift +1`、`polite_distance +1` |
| `ACT6-WORK-S20` | 校门口 / 武生院站预回声 | 站台还没到，但第七卷已经靠近。工资确认、离校手续、到了说一声都在等同一个答复。 | 先处理现实安排 / 留关系口但不承诺 / 约定低频真实联系 | `work_final_contact_scope = branch_dependent`、`graduation_temperature = branch_dependent` |

### 选择窗口

`ACT6-WORK-CHOICE-05` 位于 `ACT6-WORK-S20` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-WORK-C05-A` | 毕业后先处理现实安排 | `work_schedule_checked +1`、`work_final_contact_scope = polite_distance`、`graduation_temperature = work_independent`；第七卷偏独立处理、体面距离或错过饭局。 |
| `ACT6-WORK-C05-B` | 留关系口但不承诺 | `dorm_trust +1`、`work_final_contact_scope = low_contact`、`graduation_temperature = low_contact`；第七卷可进入低频真实联系，但不能突然修复全部旧账。 |

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
    "work_final_contact_scope": "branch_dependent",
    "graduation_temperature": "branch_dependent",
    "route_switch_allowed": false,
    "soft_echo_routes_only": true
  }
}
```

第七卷读取重点：

- `work_shift` 高且 `public_boundary` 高：偏独立处理和流程稳定。
- `dorm_absence` 高、`repair_depth` 低：偏体面距离。
- `missed_chance` 高或 `meal_attendance_locked` 弱：偏错过最后饭局。
- `family_signal` 高且 `repair_depth` 高：偏家庭压力说开。
- `work_final_contact_scope = low_contact` 且 `dorm_trust` 保留：偏低频真实联系。

## 验收标准

- 20 个剧情段必须全部存在：`ACT6-WORK-S01` 至 `ACT6-WORK-S20`。
- 5 个四段组必须全部存在：`ACT6-WORK-B01` 至 `ACT6-WORK-B05`。
- 每组 4 页，每组 1 个选择窗口。
- 每个选择窗口只保留 2 个方向，且都留在 `POOL-R4-WORK`。
- 不重新开放陆沉线、晚风线、站队线、专注感情线、摆烂线或 5X。
- 钱压必须具体到饭卡、打印、交通、工资、AA、证明或排班，不写抽象可怜。
- `ACT6-WORK-S20` 后只进入 `ACT6-END`，再进入 `ACT7-WORK` 12 事件正式 JSON。
