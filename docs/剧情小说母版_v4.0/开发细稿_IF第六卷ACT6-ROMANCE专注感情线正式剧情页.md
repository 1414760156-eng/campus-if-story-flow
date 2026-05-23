# IF 第六卷 ACT6-ROMANCE 专注感情线正式剧情页

本文用于把 `R5-ROMANCE` / `POOL-R5-ROMANCE` 的第六卷承接层从长线占位扩成 20 个正式剧情段、5 个四段组和 5 个双方向选择窗口。

本文件不是第五幕入口，也不是第七卷毕业结算。第五幕 P0-C 已完成候选来源确认与锁池；第六卷只处理一件事：林亦舟已经从 A3 女生候选来源进入专注感情线以后，沈嘉禾或夏知微的生活圈、公开边界、4XX 最低事实、任务时间和毕业前联系频率怎样把这条关系定形。

## 路线锁定

| 字段 | 值 |
|---|---|
| `route_id` | `R5-ROMANCE` |
| `route_pool_id` | `POOL-R5-ROMANCE` |
| `act6_variant_id` | `ACT6-ROMANCE` |
| `entry_node` | `P0C_ACT5_CANDIDATE_CONFIRM` |
| `pool_entry_choice` | `P0C_ROMANCE_LOCK_CANDIDATE` |
| `route_focus` | `a3_derived_intimacy` |
| `romance_origin` | `a3_activity_public` |
| `romance_candidate` | `shen_jiahe` 或 `xia_zhiwei` |
| `route_switch_allowed` | `false` |
| `new_full_route_unlock_allowed` | `false` |

禁止项：

- 不允许把本线写成主轴没选晚风后的换人奖励。
- 不允许在第六卷重新开放晚风线、宿舍站队线、工作线、5X 或另一个候选对象完整线。
- 不允许把沈嘉禾 / 夏知微写成情绪垃圾桶；她们必须有自己的任务、截止时间、权限边界和生活半径。
- 不允许把 4XX 写成阻碍恋爱的反派；4XX 只体现林亦舟的缺席、延迟和最低事实不足。
- 不允许在选择窗口给第三方向；每个窗口只保留当前池内两种处理方式。

## 关键变量

| 变量 | 用途 |
|---|---|
| `romance_candidate` | 已锁定对象，只能是 `shen_jiahe` 或 `xia_zhiwei`。 |
| `candidate_link` | 候选对象关系连续强度。 |
| `shen_jiahe_link` | 沈嘉禾方向关系强度。 |
| `xia_zhiwei_link` | 夏知微方向关系强度。 |
| `relationship_truth` | 林亦舟是否愿意把宿舍、未来和选择说具体。 |
| `public_boundary` | 共享文档、照片、署名、朋友圈和同学目击边界。 |
| `candidate_public_scope` | 候选对象相关内容的公开范围。 |
| `candidate_private_entry` | 是否形成稳定私人入口。 |
| `candidate_task_time_checked` | 是否尊重对方任务时间和停止条件。 |
| `candidate_schedule_checked` | 是否确认毕业前现实安排。 |
| `candidate_final_contact_scope` | 第七卷最终联系范围。 |
| `romance_focus` | 林亦舟把时间和解释投向候选对象的程度。 |
| `dorm_absence` | 4XX 当面节点缺席程度。 |
| `dorm_visibility` | 4XX 是否看见这段关系。 |
| `dorm_warmth` | 宿舍旧关系温度。 |
| `time_debt` | 见面、打印、修片、等待和错过事项群产生的时间债。 |
| `money_pressure` | 打印、奶茶、胶片、交通和小礼物产生的钱压。 |
| `candidate_misread` | 候选对象因含混、失约、否认或索取过多产生的误读。 |
| `future_talk` | 是否具体谈到考证、作品、城市、实习和毕业后频率。 |
| `graduation_temperature` | 第七卷结算温度。 |

## 20 段总表

| 四段组 | 剧情段 | 选择窗口 | 两个池内方向 |
|---|---|---|---|
| `ACT6-ROMANCE-B01` | `S01` 至 `S04` | `ACT6-ROMANCE-CHOICE-01` | 说清候选来源 / 含混保留协作外壳 |
| `ACT6-ROMANCE-B02` | `S05` 至 `S08` | `ACT6-ROMANCE-CHOICE-02` | 明确公开边界 / 暂时只保留私人入口 |
| `ACT6-ROMANCE-B03` | `S09` 至 `S12` | `ACT6-ROMANCE-CHOICE-03` | 尊重对方任务时间 / 要求对方先接住自己 |
| `ACT6-ROMANCE-B04` | `S13` 至 `S16` | `ACT6-ROMANCE-CHOICE-04` | 给 4XX 最低事实 / 继续让亲密关系延迟旧账 |
| `ACT6-ROMANCE-B05` | `S17` 至 `S20` | `ACT6-ROMANCE-CHOICE-05` | 讨论毕业后现实联系 / 保留当下不承诺 |

---

## `ACT6-ROMANCE-B01` 候选来源与协作外壳

本组承接 P0-C 锁池确认。核心不是再选对象，而是把“为什么是这个人”写成现实证据：共享文档、打印材料、照片授权、活动影像和第三幕连续生活半径。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-ROMANCE-S01` 至 `ACT6-ROMANCE-S04` |
| `choice_window_id` | `ACT6-ROMANCE-CHOICE-01` |
| `choice_after_scene` | `ACT6-ROMANCE-S04` |
| `mother_lockpoints` | A3 候选来源、4XX 事项群、共享文档 / 摄影社、晚风低频回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-ROMANCE-S01` | A3 回声 / 事项群 | 第六卷开场先回查候选来源。沈嘉禾方向有共享文档和打印店记录；夏知微方向有照片授权和摄影社素材夹。4XX 群同时催 C407 分工。 | 查看候选来源 / 先回 4XX / 把两个窗口都标未读 | `a3_candidate_source_checked`、`candidate_link +1`、`dorm_visibility +1` |
| `ACT6-ROMANCE-S02` | 阳光书屋或摄影社 | 当前候选对象没有问“你是不是喜欢我”。沈嘉禾问材料停止条件；夏知微问照片能不能留。 | 回答具体边界 / 只说最近很乱 / 转成玩笑 | `relationship_truth +1`、`public_boundary +1`、`candidate_misread +1` |
| `ACT6-ROMANCE-S03` | 微信通知栏 | 晚风发来低频消息。它不能变成三角选择，只提醒林亦舟：转向必须说清，不是把前一段关系按到后面。 | 给晚风边界短句 / 暂不回复 / 转发给候选对象讨论 | `wanfeng_boundary +1`、`avoidance +1`、`relationship_truth +1` |
| `ACT6-ROMANCE-S04` | 共享文档 / 修片电脑 | 关系的外壳看上去仍像协作：文档权限、照片授权、材料清单。但林亦舟知道自己已经把更多解释给了这个人。 | 说清候选来源 / 继续装作只是协作 / 回避命名 | `candidate_link +1`、`romance_focus +1`、`ambiguity +1` |

### 选择窗口

`ACT6-ROMANCE-CHOICE-01` 位于 `ACT6-ROMANCE-S04` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-ROMANCE-C01-A` | 说清候选来源 | `relationship_truth +1`、`candidate_link +1`、`public_boundary +1`；当前对象知道自己不是临时出口，第六卷进入稳定生活半径。 |
| `ACT6-ROMANCE-C01-B` | 含混保留协作外壳 | `ambiguity +1`、`candidate_misread +1`、`romance_focus +1`；短期甜度存在，但后续公开边界和毕业结算更容易偏私人入口或错过。 |

完成条件：`a3_candidate_source_checked`、`romance_candidate_locked`、`act6_choice_window_count += 1`、`route_pool_locked = true`。

---

## `ACT6-ROMANCE-B02` 公开边界与私人入口

本组处理被看见。沈嘉禾方向是共享文档、署名、权限和材料协作者；夏知微方向是照片、授权、相册可见范围和修片电脑。公开边界不是官宣，而是被问到时能否说清。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-ROMANCE-S05` 至 `ACT6-ROMANCE-S08` |
| `choice_window_id` | `ACT6-ROMANCE-CHOICE-02` |
| `choice_after_scene` | `ACT6-ROMANCE-S08` |
| `mother_lockpoints` | 共享文档权限、照片授权、4XX 可见回声、私人入口 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-ROMANCE-S05` | 共享文档 / 摄影社相册 | 沈嘉禾方向，协作者名字反复出现；夏知微方向，照片预览里有林亦舟的背影。公开风险不是八卦，而是权限范围。 | 确认权限 / 只留私下 / 假装没看见 | `public_boundary +1`、`candidate_public_scope +1`、`ambiguity +1` |
| `ACT6-ROMANCE-S06` | 4XX 公共桌 | 周屿可能起哄，唐骁问会不会影响材料，陆沉只看时间。4XX 没有审判关系，只看他是否还承担最低事实。 | 给最低事实 / 打哈哈 / 私聊唐骁说明 | `dorm_visibility +1`、`project_stability +1`、`candidate_misread +1` |
| `ACT6-ROMANCE-S07` | 打印店门口 / 晨光湖 | 候选对象把停止条件摆出来：哪些文档能看，哪些照片不能发，哪些话不能让同学替他们命名。 | 尊重停止条件 / 说以后再说 / 反问她想不想公开 | `boundary_awareness +1`、`image_boundary +1`、`public_boundary +1` |
| `ACT6-ROMANCE-S08` | 私聊 / 权限提示 | 林亦舟意识到私人入口也需要边界。只保留私聊不是逃避公开，而是承认现在还不能承受所有误读。 | 明确公开边界 / 保留私人入口 / 否认关系 | `candidate_private_entry +1`、`candidate_misread +1`、`relationship_truth +1` |

### 选择窗口

`ACT6-ROMANCE-CHOICE-02` 位于 `ACT6-ROMANCE-S08` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-ROMANCE-C02-A` | 明确公开边界 | `public_boundary +2`、`candidate_public_scope +1`、`relationship_truth +1`；第七卷可进入继续联系或体面分别。 |
| `ACT6-ROMANCE-C02-B` | 暂时只保留私人入口 | `candidate_private_entry +2`、`ambiguity +1`、`future_talk +0`；关系保留温度，但公开结算偏低频私下。 |

完成条件：`public_boundary_checked`、`candidate_public_scope_checked`、`route_pool_locked = true`。

---

## `ACT6-ROMANCE-B03` 对方任务时间与亲密索取

本组防止候选对象变成情绪容器。她有自己的任务、作业、作品或考试；林亦舟必须选择尊重她的时间，还是要求她先接住自己的混乱。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-ROMANCE-S09` 至 `ACT6-ROMANCE-S12` |
| `choice_window_id` | `ACT6-ROMANCE-CHOICE-03` |
| `choice_after_scene` | `ACT6-ROMANCE-S12` |
| `mother_lockpoints` | 打印材料、照片修片、考试 / 作品截止、4XX 低温回声 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-ROMANCE-S09` | 打印店 / 摄影社电脑 | 沈嘉禾的材料今晚要交；夏知微的影像素材要整理。林亦舟想继续说宿舍事，但对方也在赶自己的截止时间。 | 先帮她完成任务 / 先说自己的事 / 约定几点停 | `candidate_task_time_checked +1`、`time_debt +1`、`relationship_truth +1` |
| `ACT6-ROMANCE-S10` | 食堂侧门 | 她没有替林亦舟骂任何人，只问他回去准备怎么说。被听见不是免责任。 | 说具体计划 / 只说不知道 / 转移话题 | `relationship_truth +1`、`avoidance +1`、`candidate_misread +1` |
| `ACT6-ROMANCE-S11` | 奶茶店 / 快递站 | 小礼物、奶茶、打印费或胶片贴纸让钱压进入关系。甜不是免费滤镜。 | AA / 顺手付 / 说清预算 | `money_pressure +1`、`gift_debt +1`、`public_boundary +1` |
| `ACT6-ROMANCE-S12` | 校园夜路 | 候选对象提醒他：如果只是想找人接住情绪，那这段关系会很累。林亦舟需要决定要不要把对方也当成有边界的人。 | 尊重她的任务时间 / 要她先听自己说完 / 暂停推进 | `candidate_link +1`、`candidate_misread +1`、`romance_focus -1` |

### 选择窗口

`ACT6-ROMANCE-CHOICE-03` 位于 `ACT6-ROMANCE-S12` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-ROMANCE-C03-A` | 尊重对方任务时间 | `candidate_task_time_checked +1`、`relationship_truth +1`、`candidate_link +1`；关系更扎实，不靠对方无限接住。 |
| `ACT6-ROMANCE-C03-B` | 要求对方先接住自己 | `romance_focus +1`、`candidate_misread +2`、`time_debt +1`；短期靠近，后续更容易产生小冷和体面分别风险。 |

完成条件：`candidate_task_time_checked`、`priority_pressure_recorded`、`route_pool_locked = true`。

---

## `ACT6-ROMANCE-B04` 4XX 最低事实与旧账延迟

本组是第六幕复发点。亲密关系不能替林亦舟处理 4XX；他必须给旧生活圈最低事实，或继续让亲密关系延迟旧账。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-ROMANCE-S13` 至 `ACT6-ROMANCE-S16` |
| `choice_window_id` | `ACT6-ROMANCE-CHOICE-04` |
| `choice_after_scene` | `ACT6-ROMANCE-S16` |
| `mother_lockpoints` | C407、事项群、材料 / 影像任务、旧账延迟 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-ROMANCE-S13` | C407 / 共享文档 | C407 演示预备临时提前，候选对象也有材料或影像要处理。林亦舟第一次必须给两边都留具体安排。 | 给 4XX 最低事实 / 先陪候选对象 / 两边都发短句 | `project_stability +1`、`dorm_absence +1`、`candidate_misread +1` |
| `ACT6-ROMANCE-S14` | 事项群 / 私聊 | 4XX 群里只剩“收到”。候选对象问他是不是又准备用“我很乱”替代解释。 | 写清今晚安排 / 只回收到 / 把群消息压后 | `dorm_visibility +1`、`relationship_truth +1`、`avoidance +1` |
| `ACT6-ROMANCE-S15` | 打印店门口 / 凌空栈道 | 沈嘉禾方向，材料不能替他兜底；夏知微方向，照片也不能替他证明。他必须自己回去说。 | 承认旧账延迟 / 说先别管 4XX / 让对方别问 | `relationship_truth +1`、`dorm_absence +1`、`candidate_misread +1` |
| `ACT6-ROMANCE-S16` | 公共桌回声 | 周屿不再起哄，唐骁只问文件，陆沉只问时间。旧关系没有爆炸，但正在降温。 | 给最低事实 / 继续延迟旧账 / 约当面补话 | `dorm_warmth +1`、`dorm_absence +1`、`future_talk +1` |

### 选择窗口

`ACT6-ROMANCE-CHOICE-04` 位于 `ACT6-ROMANCE-S16` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-ROMANCE-C04-A` | 给 4XX 最低事实 | `dorm_warmth +1`、`project_stability +1`、`relationship_truth +1`；第七卷 4XX 回声不至于完全冷掉。 |
| `ACT6-ROMANCE-C04-B` | 继续让亲密关系延迟旧账 | `romance_focus +1`、`dorm_absence +2`、`candidate_misread +1`；亲密更近，但毕业温度更偏甜且宿舍冷。 |

完成条件：`project_stability_checked`、`old_debt_delay_recorded`、`route_pool_locked = true`。

---

## `ACT6-ROMANCE-B05` 毕业前联系频率预结算

本组把第六幕交给第七幕。这里不写最终结局，但必须输出第七卷读取的候选对象、未来频率、公开边界、私人入口和毕业温度。

| 字段 | 值 |
|---|---|
| `scene_range` | `ACT6-ROMANCE-S17` 至 `ACT6-ROMANCE-S20` |
| `choice_window_id` | `ACT6-ROMANCE-CHOICE-05` |
| `choice_after_scene` | `ACT6-ROMANCE-S20` |
| `mother_lockpoints` | 毕业去向预热、答辩预备、作品 / 考试安排、最后饭局预热 |

### 剧情段

| `scene_id` | 场景 | 剧情页内容 | 可操作点 | 变量回调 |
|---|---|---|---|---|
| `ACT6-ROMANCE-S17` | 教务系统 / 共享文档或相册 | 毕业去向预登记快开始。沈嘉禾方向是考证、材料和城市；夏知微方向是作品、影像和授权归档。 | 问具体安排 / 只说以后再看 / 转回今晚任务 | `future_talk +1`、`candidate_schedule_checked +1`、`avoidance +1` |
| `ACT6-ROMANCE-S18` | 答辩预备 / 4XX 群 | 4XX 讨论答辩顺序和最后饭局。候选对象也问毕业后联系方式。林亦舟不能继续用含混保留所有关系。 | 把私人安排说成事实 / 只回答辩流程 / 两边都不提 | `dorm_visibility +1`、`public_boundary +1`、`candidate_misread +1` |
| `ACT6-ROMANCE-S19` | 图书馆 / 晨光湖 | 她问毕业以后还怎么联系。这个问题比表白更现实：频率、城市、作品、考试和生活节奏。 | 讨论联系频率 / 保留当下不承诺 / 只说有空再聊 | `future_talk +1`、`candidate_private_entry +1`、`candidate_misread +1` |
| `ACT6-ROMANCE-S20` | 武生院站预回声 | 站台还没到，但第七卷已经在靠近。共享文档、相册、毕业照和离校手续都会问同一个问题：留下，还是删掉。 | 写下联系范围 / 只保留私人入口 / 留到第七卷再说 | `candidate_final_contact_scope = branch_dependent`、`graduation_temperature = branch_dependent` |

### 选择窗口

`ACT6-ROMANCE-CHOICE-05` 位于 `ACT6-ROMANCE-S20` 后。

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT6-ROMANCE-C05-A` | 讨论毕业后现实联系 | `future_talk +2`、`candidate_final_contact_scope = continue_contact`、`graduation_temperature = continue_contact`；第七卷可进入继续联系或体面分别高温版本。 |
| `ACT6-ROMANCE-C05-B` | 保留当下不承诺 | `candidate_private_entry +1`、`candidate_final_contact_scope = private_entry`、`graduation_temperature = private_entry`；第七卷偏私人入口、体面分别或错过。 |

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
    "romance_candidate": "branch_dependent",
    "candidate_final_contact_scope": "branch_dependent",
    "graduation_temperature": "branch_dependent",
    "route_switch_allowed": false,
    "soft_echo_routes_only": true
  }
}
```

第七卷读取重点：

- `romance_candidate = shen_jiahe`：共享文档、材料、考证、城市、旧书签。
- `romance_candidate = xia_zhiwei`：照片、影像、授权、相册、留下或删掉。
- `public_boundary` 高：可以体面公开或继续联系。
- `candidate_private_entry` 高：偏私人入口。
- `candidate_misread` 高或 `missed_chance` 高：偏错过。
- `dorm_absence` 高：亲密关系保住时，4XX 毕业温度降低。

## 验收标准

- 20 个剧情段必须全部存在：`ACT6-ROMANCE-S01` 至 `ACT6-ROMANCE-S20`。
- 5 个四段组必须全部存在：`ACT6-ROMANCE-B01` 至 `ACT6-ROMANCE-B05`。
- 每组 4 页，每组 1 个选择窗口。
- 每个选择窗口只保留 2 个方向，且都留在 `POOL-R5-ROMANCE`。
- 不重新开放晚风、4XX 站队、工作线、5X 或另一个候选对象完整线。
- 沈嘉禾 / 夏知微必须保持自己的任务和边界，不能只作为林亦舟情绪出口。
- `ACT6-ROMANCE-S20` 后只进入 `ACT6-END`，再进入 `ACT7-ROMANCE` 12 事件正式 JSON。
