# IF 第六卷 ACT6-ZHOU 周屿线正式剧情页

本文用于把 `R5-ZHOU` / `POOL-R5-ZHOU` 的第六卷承接层从五个四段组占位扩成 20 个正式剧情段、5 个四段组和 5 个双方向选择窗口。

本文件不是 P0-D 站队入口，也不是第七卷毕业结算。第五幕已经让林亦舟选择先靠近周屿；第六卷只处理一件事：活动圈、主持彩排、公开材料、玩笑防御和 4XX 低温回声怎样把周屿线定形。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-ZHOU` |
| `route_pool_id` | `POOL-R5-ZHOU` |
| `act6_variant_id` | `ACT6-ZHOU` |
| `entry_node` | `P0D_ACT5_SHORT_GROUP` |
| `pool_entry_choice` | `P0D_STAND_WITH_ZHOU` |
| `route_focus` | `zhou` |
| `outflow_stage` | `act5_dorm_stand` |
| `route_switch_allowed` | `false` |
| `new_full_route_unlock_allowed` | `false` |

禁止项：

- 不允许把周屿线写成活动圈奖励线、主持成功线或救赎线。
- 不允许在第六卷重新开放 DEFAULT、唐骁线、陆沉线、摆烂线、晚风线、专注感情线、工作线或 5X。
- 不允许让林亦舟默认替周屿填表、签字、授权、公开署名或解释缺席。
- 不允许让周屿用请客、玩笑、热闹直接抵消旧账。
- 不允许在选择窗口给第三方向；每个窗口只保留当前池内两种处理方式。

## 关键变量

| 变量 | 用途 |
|---|---|
| `zhou_trust` | 周屿是否愿意把玩笑背后的真话交给林亦舟。 |
| `activity_link` | 林亦舟进入周屿活动圈的深度。 |
| `public_smooth` | 公开场面是否被圆过去。 |
| `face_debt` | 面子账、请客、人情补偿的累积。 |
| `joke_defense` | 周屿用玩笑防御的强度。 |
| `public_boundary` | 公开材料、照片、署名、朋友圈和活动表边界。 |
| `dorm_absence` | 林亦舟在 4XX 场域缺席程度。 |
| `tang_misread` | 唐骁对林亦舟偏袒周屿的误读。 |
| `luchen_distance` | 陆沉与林亦舟距离。 |
| `qinyue_pressure` | 秦越和活动流程对林亦舟的调度压力。 |
| `project_stability` | C407 / 课程协作是否稳定。 |
| `repair_depth` | 林亦舟是否把热闹背后的旧账说到具体事实。 |
| `money_boundary` | 请客、AA、饮料和饭局付款边界。 |
| `zhou_activity_signature_scope` | 第七卷前置的活动署名范围。 |
| `zhou_final_contact_scope` | 周屿线最终联系范围。 |
| `graduation_temperature` | 第七卷结算温度。 |

## 20 段总表

| 四段组 | 剧情段 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-ZHOU-B01` | `S01` 至 `S04` | `ACT6-ZHOU-CHOICE-01` | 活动现场陪跑 / 宿舍边界留白 |
| `ACT6-ZHOU-B02` | `S05` 至 `S08` | `ACT6-ZHOU-CHOICE-02` | 替周屿收场 / 不替周屿圆场 |
| `ACT6-ZHOU-B03` | `S09` 至 `S12` | `ACT6-ZHOU-CHOICE-03` | 公开材料写热闹 / 控制授权和口径 |
| `ACT6-ZHOU-B04` | `S13` 至 `S16` | `ACT6-ZHOU-CHOICE-04` | 当面解释唐骁误读 / 暂缓解释保活动进度 |
| `ACT6-ZHOU-B05` | `S17` 至 `S20` | `ACT6-ZHOU-CHOICE-05` | 毕业后低频联系 / 体面淡化 |

---

## `ACT6-ZHOU-B01` 活动现场陪跑与宿舍边界留白

本组承接 P0-D 站队。林亦舟已经先靠近周屿，但第六卷不能让这件事变成“周屿正确”。第一组要建立活动圈更近、4XX 更低温的代价。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-ZHOU-S01` 至 `ACT6-ZHOU-S04` |
| `choice_window_id` | `ACT6-ZHOU-CHOICE-01` |
| `choice_after_scene` | `ACT6-ZHOU-S04` |
| `mother_lockpoints` | B206 彩排、活动群、C407 截止、4XX 事项群 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-ZHOU-S01` | B206 门口 / 活动群 | 秦越催主持彩排名单，周屿发来“救个场，不上台也行”。4XX 群里唐骁同时催 C407 初版。 | 先回周屿 / 先回 C407 / 两边都短回 | `activity_link +1`、`time_debt +1`、`tang_misread +1` |
| `ACT6-ZHOU-S02` | B206 / 空白流程文档 | 周屿把空白文档推过来，说自己“嘴上能补”。林亦舟看见主持词空格和活动签到表都等人填。 | 帮补串词 / 只补流程 / 要周屿自己回秦越 | `zhou_trust +1`、`qinyue_pressure +1`、`public_boundary +1` |
| `ACT6-ZHOU-S03` | 4XX 事项群 / C407 提醒 | 唐骁只发“23:00 截止”，陆沉只交自己的部分。林亦舟越靠近活动现场，4XX 越像只读回声。 | 补一句说明 / 不解释先彩排 / 请唐骁给十分钟 | `dorm_absence +1`、`project_stability +1`、`luchen_distance +1` |
| `ACT6-ZHOU-S04` | 彩排区 / 走廊 | 周屿用玩笑把迟到挡过去，秦越看向林亦舟等他接话。林亦舟必须决定是陪跑现场，还是给宿舍边界留白。 | 活动现场陪跑 / 宿舍边界留白 / 只说明最低事实 | `joke_defense +1`、`public_smooth +1`、`public_boundary +1` |

### 选择窗口

`ACT6-ZHOU-CHOICE-01` 位于 `ACT6-ZHOU-S04` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-ZHOU-C01-A` | 活动现场陪跑 | `activity_link +1`、`zhou_trust +1`、`dorm_absence +1`；周屿更愿意拉他进活动圈，唐骁误读上升。 |
| `ACT6-ZHOU-C01-B` | 宿舍边界留白 | `public_boundary +1`、`project_stability +1`、`zhou_trust -1`；C407 更稳，周屿觉得林亦舟没有完全站到自己这边。 |

完成条件：`route_pool_locked = true`、`activity_link`、`public_boundary`。

---

## `ACT6-ZHOU-B02` 替周屿收场与不替圆场

本组处理周屿线核心风险：周屿越信任林亦舟，越容易默认林亦舟会替他把场面圆过去。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-ZHOU-S05` 至 `ACT6-ZHOU-S08` |
| `choice_window_id` | `ACT6-ZHOU-CHOICE-02` |
| `choice_after_scene` | `ACT6-ZHOU-S08` |
| `mother_lockpoints` | 主持彩排缺人、秦越临时调度、4XX 低温回声、玩笑过界 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-ZHOU-S05` | B206 / 主持彩排 | 彩排临时缺人，周屿把“你站一下就行”说得像玩笑。秦越已经把林亦舟名字写到临时协助栏边上。 | 上台补场 / 只做后场 / 要求改成临时协助 | `activity_link +1`、`qinyue_pressure +1`、`zhou_activity_signature_scope` |
| `ACT6-ZHOU-S06` | 东区商业街 / 小舞台预演 | 周屿临场圆了一个空档，旁人笑了。林亦舟知道这次笑声会让周屿更相信热闹能遮住难堪。 | 跟着笑 / 轻声截住 / 事后私下说 | `public_smooth +1`、`joke_defense +1`、`repair_depth +1` |
| `ACT6-ZHOU-S07` | 4XX 公共桌回声 | 唐骁把 C407 文档锁了只读，陆沉只在群里发“已交”。没有人责备林亦舟，但也没有人等他解释。 | 回群说明 / 只交自己的部分 / 继续留在活动场 | `tang_misread +1`、`luchen_distance +1`、`project_stability +1` |
| `ACT6-ZHOU-S08` | 楼梯间 / 饮料机旁 | 周屿请他喝饮料，说“刚才你不接我就真尬了”。这句话既是感谢，也是新的默认。 | 替周屿收场 / 不替周屿圆场 / 只谈下一次边界 | `face_debt +1`、`money_boundary +1`、`zhou_trust +1` |

### 选择窗口

`ACT6-ZHOU-CHOICE-02` 位于 `ACT6-ZHOU-S08` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-ZHOU-C02-A` | 替周屿收场 | `public_smooth +1`、`qinyue_pressure +1`、`face_debt +1`；场面更顺，周屿依赖和唐骁误读同时增加。 |
| `ACT6-ZHOU-C02-B` | 不替周屿圆场 | `public_boundary +1`、`joke_defense -1`、`zhou_trust -1`；周屿不舒服，但边界开始被看见。 |

完成条件：`public_boundary`、`qinyue_pressure`、`route_pool_locked = true`。

---

## `ACT6-ZHOU-B03` 公开材料热闹与授权口径

本组把周屿的公开顺滑推到素材和授权层面。好看的活动材料会遮掉停顿，也会让 4XX 旧账被重新包装成漂亮回忆。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-ZHOU-S09` 至 `ACT6-ZHOU-S12` |
| `choice_window_id` | `ACT6-ZHOU-CHOICE-03` |
| `choice_after_scene` | `ACT6-ZHOU-S12` |
| `mother_lockpoints` | 活动素材预览、许棠授权提醒、朋友圈回声、4XX 群误读 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-ZHOU-S09` | 融媒体门口 / 素材预览 | 许棠给出活动片段预览。周屿在画面里很会圆场，但停顿被剪得干净。 | 保留停顿 / 剪得更顺 / 只内部留存 | `public_boundary +1`、`public_smooth +1`、`zhou_trust +1` |
| `ACT6-ZHOU-S10` | 朋友圈 / 活动群 | 活动群催是否可发，周屿嘴上说随便，手指却停在转发按钮上。林亦舟知道公开热闹会影响 4XX 的看法。 | 先问周屿 / 先问 4XX 授权 / 不公开 | `zhou_trust +1`、`public_consent_checked`、`tang_misread +1` |
| `ACT6-ZHOU-S11` | 青枫居楼下 / 手机 | 唐骁看见片段后只回“项目材料呢”，陆沉没有点赞。周屿说“你看，他们就扫兴”。 | 解释授权边界 / 先安抚周屿 / 不解释 | `tang_misread +1`、`luchen_distance +1`、`old_debt +1` |
| `ACT6-ZHOU-S12` | B206 / 共享盘 | 活动材料和 C407 归档都要署名。林亦舟必须决定是把公开材料写得热闹，还是控制授权和口径。 | 公开材料写热闹 / 控制授权和口径 / 改成临时协助 | `zhou_activity_signature_scope`、`qinyue_pressure +1`、`public_boundary +1` |

### 选择窗口

`ACT6-ZHOU-CHOICE-03` 位于 `ACT6-ZHOU-S12` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-ZHOU-C03-A` | 公开材料写热闹 | `public_smooth +2`、`old_debt +1`、`tang_misread +1`；活动材料好看，私人停顿和宿舍低温被推迟处理。 |
| `ACT6-ZHOU-C03-B` | 控制授权和口径 | `public_boundary +2`、`zhou_trust +1`、`qinyue_pressure +1`；公开更稳，但周屿会觉得林亦舟拆掉了场面的好看。 |

完成条件：`public_consent_checked`、`zhou_activity_signature_scope`、`route_pool_locked = true`。

---

## `ACT6-ZHOU-B04` 唐骁误读解释与活动进度

本组把周屿线和 C407 正面相撞。林亦舟可以当面解释唐骁误读，也可以暂缓解释保活动进度，但两种都不是无代价。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-ZHOU-S13` 至 `ACT6-ZHOU-S16` |
| `choice_window_id` | `ACT6-ZHOU-CHOICE-04` |
| `choice_after_scene` | `ACT6-ZHOU-S16` |
| `mother_lockpoints` | C407 演示准备、活动彩排撞期、项目只读权限、台上台下等待 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-ZHOU-S13` | C407 / 共享文档 | 唐骁只发任务清单，不再解释多余内容。林亦舟发现自己在周屿线里获得的热闹，换来了 C407 的低温。 | 当面问唐骁 / 先交自己的部分 / 转去活动场 | `project_stability +1`、`tang_misread +1`、`dorm_absence +1` |
| `ACT6-ZHOU-S14` | B206 / 活动群 | 秦越说台卡要改，周屿问他能不能先过去。周屿这次没有开大玩笑，只说“你不来也行”。 | 先赶过去 / 让周屿自己回 / 请秦越找替补 | `zhou_trust +1`、`qinyue_pressure +1`、`public_boundary +1` |
| `ACT6-ZHOU-S15` | 4XX 门口 / 楼道 | 唐骁正好出门，问他“你到底是按项目来，还是按人来”。问题难听，但具体。 | 解释唐骁误读 / 说今晚回来补 / 不解释先走 | `tang_misread +1`、`repair_depth +1`、`time_debt +1` |
| `ACT6-ZHOU-S16` | 台卡桌 / C407 回声 | 台卡快定稿，C407 也快提交。林亦舟只能选择当面解释唐骁误读，或者暂缓解释保活动进度。 | 当面解释唐骁误读 / 暂缓解释保活动进度 / 只写最低说明 | `activity_link +1`、`project_stability +1`、`public_boundary +1` |

### 选择窗口

`ACT6-ZHOU-CHOICE-04` 位于 `ACT6-ZHOU-S16` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-ZHOU-C04-A` | 当面解释唐骁误读 | `tang_misread -1`、`project_stability +1`、`zhou_trust -1`；C407 低温下降，周屿觉得自己被排到流程后面。 |
| `ACT6-ZHOU-C04-B` | 暂缓解释保活动进度 | `activity_link +1`、`qinyue_pressure +1`、`tang_misread +1`；活动顺利，4XX 专业协作继续低温。 |

完成条件：`project_stability`、`tang_misread`、`route_pool_locked = true`。

---

## `ACT6-ZHOU-B05` 低频联系与体面淡化预结算

本组把第六幕交给第七幕。这里不写最终结局，但必须输出第七卷读取的活动留名、饭局边界、半句道歉、4XX 温度和周屿最终联系范围。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-ZHOU-S17` 至 `ACT6-ZHOU-S20` |
| `choice_window_id` | `ACT6-ZHOU-CHOICE-05` |
| `choice_after_scene` | `ACT6-ZHOU-S20` |
| `mother_lockpoints` | 毕业活动留名、最后饭局预热、清寝旧物、武生院站预回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-ZHOU-S17` | B204 / 毕业活动协助表 | 毕业活动协助表里默认写了林亦舟的名字。周屿说“顺手写了”，秦越等最终表。 | 默认留名 / 改成临时协助 / 私下问为什么 | `zhou_activity_signature_scope`、`public_boundary +1`、`face_debt +1` |
| `ACT6-ZHOU-S18` | 东区商业街 / 最后饭局预热 | 饭局地点在东北饺子馆和后街之间摇摆。周屿想热闹一点，唐骁只问准点，陆沉看价格。 | 留可取消位 / 不替人填 / 只确认自己到场 | `meal_boundary_checked`、`money_boundary +1`、`polite_distance +1` |
| `ACT6-ZHOU-S19` | 青枫居楼下 / 清寝旧物 | 旧台卡、活动证和 4XX 旧物混在同一只袋子里。周屿终于说“那天我话说难听了点”，但没有完整道歉。 | 接住半句 / 追完整道歉 / 停在这里 | `zhou_half_apology_seen`、`repair_depth +1`、`joke_defense -1` |
| `ACT6-ZHOU-S20` | 校门口 / 武生院站预回声 | 站台还没到，第七卷已经靠近。周屿问以后是不是还看活动，林亦舟知道“还看”不等于 4XX 复原。 | 毕业后低频联系 / 体面淡化 / 只说到站发消息 | `zhou_final_contact_scope`、`graduation_temperature`、`ending_temperature_locked` |

### 选择窗口

`ACT6-ZHOU-CHOICE-05` 位于 `ACT6-ZHOU-S20` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-ZHOU-C05-A` | 毕业后低频联系 | `zhou_final_contact_scope = low_frequency_real`、`graduation_temperature = zhou_low_frequency`、`zhou_half_apology_seen = true`；第七卷可进入低频真实联系或半句道歉结算。 |
| `ACT6-ZHOU-C05-B` | 体面淡化 | `zhou_final_contact_scope = polite_distance`、`graduation_temperature = polite_distance`、`polite_distance +1`；第七卷偏活动材料体面、4XX 礼貌同框或低温淡化。 |

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
    "zhou_final_contact_scope": "branch_dependent",
    "graduation_temperature": "branch_dependent",
    "route_switch_allowed": false,
    "soft_echo_routes_only": true
  }
}
```

第七卷读取重点：

- `zhou_trust` 高且 `public_boundary` 高：偏低频真实联系或半句道歉。
- `public_smooth` 高但 `repair_depth` 低：偏活动材料体面、旧账淡化。
- `tang_misread` 高或 `dorm_absence` 高：偏 4XX 礼貌同框、宿舍低温。
- `face_debt` 高：偏请客、人情和热闹没有真正抵消旧账。
- `zhou_final_contact_scope = low_frequency_real`：第七卷允许保留周屿低频联系，但不反向修复全寝室。

## 验收标准

- 20 个剧情段必须全部存在：`ACT6-ZHOU-S01` 至 `ACT6-ZHOU-S20`。
- 5 个四段组必须全部存在：`ACT6-ZHOU-B01` 至 `ACT6-ZHOU-B05`。
- 每组 4 页，每组 1 个选择窗口。
- 每个选择窗口只保留 2 个方向，且都留在 `POOL-R5-ZHOU`。
- 不重新开放 DEFAULT、唐骁线、陆沉线、摆烂线、晚风线、专注感情线、工作线或 5X。
- 周屿线必须同时保留更近、更热闹、更容易被调度、更容易被误读的代价。
- `ACT6-ZHOU-S20` 后只进入 `ACT6-END`，再进入 `ACT7-ZHOU` 12 事件正式 JSON。
