# IF 第七卷 ACT7-E08 至 E12 毕业收束剧情页级细稿

## 用途

本文用于把 DEFAULT-4XX 的第七卷后半段毕业收束拆成可开发剧情页、选项页、变量回调和后续 JSON 事件结构。

本文件不是小说正文，也不是正式 JSON。它服务于下一步把 `ACT7-E08-GRAD-PHOTO` 至 `ACT7-E12-STATION-AFTER` 接入 `开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` 的 `act7_settlement_events`。

本轮范围只覆盖：

| 字段 | 值 |
|---|---|
| `route_id` | `DEFAULT-4XX` |
| `route_pool_id` | `POOL-DEFAULT-4XX` |
| `act7_variant_id` | `ACT7-DEFAULT` |
| `route_switch_allowed` | `false` |
| `source_mother_volume` | 第七卷《最后一个新年》 |
| `covered_events` | `ACT7-E08` 至 `ACT7-E12` |

其它路线后续必须按同一母事件另写文本变体，不得直接复用 DEFAULT 文本。

## 总体承接

本细稿直接承接已经完成的三个核心事件：

- `ACT7-E03-LAST-NEW-YEAR`：空白目录、旧物、公开范围和开学 / 最后一个新年对照。
- `ACT7-E06-THESIS-REVISION`：导师红批、`thesis_revision_v2.docx`、帮看边界和十点前提交。
- `ACT7-E07-DEFENSE`：答辩顺序表、门口等待、修改后提交、4XX 群回声。

E08 至 E12 的功能不是新增路线，而是把毕业照、清寝、饭局、手续和站口压成同一条 DEFAULT 收束链：4XX 还能同场，但不能被写成自动亲近；能短暂说清，但不能抹掉前文错过；能不解散群，但不能假装没有分流。

## 总体硬规则

1. 每个事件必须保留 `route_switch_allowed = false`。
2. 每个事件必须有具体流程物件，不能只写毕业氛围。
3. 所有“帮忙”必须先经过本人确认，不允许代签、代交、代删、代扔或代替别人决定公开范围。
4. 毕业照和饭局不能自动证明和解；清寝和离校手续不能自动证明决裂。
5. 晚风只作为林亦舟已有关系形状的生活回声出现，不替代 4XX 的毕业流程。
6. 站口结尾必须允许多种温度成立：`say_clear`、`present_but_not_close`、`polite_distance`、`not_reconciled`。

## 新增局部变量建议

| 变量 | 类型 | 用途 |
|---|---|---|
| `grad_photo_batch_seen` | bool | 是否看见毕业照批次 / 缺席不补规则。 |
| `grad_photo_scope` | enum | `only_archive` / `low_risk_submit` / `not_submit`。 |
| `photo_cache_checked` | bool | 是否处理预览缩略图或共享盘缓存。 |
| `photo_boundary_checked` | bool | 是否明确照片不等于和解、不等于公开授权。 |
| `dorm_clear_list_seen` | bool | 是否进入清寝清单。 |
| `shared_item_owner_checked` | bool | 是否确认公共 U 盘、遥控器、钥匙、旧快递等物件归属。 |
| `old_items_resolved` | enum | `confirmed_take` / `temporary_keep` / `left_blank`。 |
| `clearance_boundary_checked` | bool | 是否明确不能替别人丢物、签收、确认。 |
| `last_meal_vote_seen` | bool | 是否进入最后一顿饭投票。 |
| `last_meal_seat_confirmed` | enum | `self_only` / `asked_once` / `cancelable_empty_seat`。 |
| `meal_arrival_state` | enum | `all_briefly_present` / `late_present` / `missed_one`。 |
| `meal_boundary_checked` | bool | 是否明确饭桌不是强制圆满。 |
| `leaving_papers_seen` | bool | 是否进入离校手续清单。 |
| `dorm_key_returned` | bool | 是否完成退寝交钥匙。 |
| `campus_card_closed` | bool | 是否完成校园卡注销 / 余额处理。 |
| `certificate_received` | bool | 是否领取毕业证 / 学位证。 |
| `archive_transfer_checked` | bool | 是否确认档案转递 / 归档补扫。 |
| `leaving_boundary_checked` | bool | 是否明确手续必须本人办理。 |
| `station_arrival_seen` | bool | 是否到达武生院站口。 |
| `station_items_kept` | array | 站口保留物：布袋、旧门禁卡、挂绳、旧书、线路图书签等。 |
| `final_group_state` | enum | `not_disbanded` / `low_frequency` / `polite_closed` / `not_reconciled`。 |
| `ending_temperature_locked` | enum | 最终毕业温度候选。 |
| `station_boundary_checked` | bool | 是否明确站口告别不是关系圆满或关系断绝的唯一证明。 |

## 连续事件链

| 顺序 | 事件 ID | 母本来源 | 功能 |
|---|---|---|---|
| 1 | `ACT7-E08-GRAD-PHOTO` | 第六章《毕业照》及第七章《答辩以后》缓存回声 | 同框、预览、仅留存、公开风险。 |
| 2 | `ACT7-E09-DORM-CLEAR` | 第八章《清寝》 | 物件归属、公共桌、旧物、本人确认。 |
| 3 | `ACT7-E10-LAST-MEAL` | 第九章《最后一顿饭》 | 饭局投票、座位、迟到、AA 和饭桌温度。 |
| 4 | `ACT7-E11-LEAVING-PAPERS` | 第十章《武生院站》前半 | 退寝、校园卡、证书、档案、本人办理。 |
| 5 | `ACT7-E12-STATION-AFTER` | 第十章《武生院站》后半 | 武生院站口、离开顺序、群消息、最终温度。 |

---

## `ACT7-E08-GRAD-PHOTO` 毕业照 / 影像授权

| 字段 | 值 |
|---|---|
| `event_id` | `ACT7-E08-GRAD-PHOTO` |
| `mother_chapter` | 第六章《毕业照》及第七章《答辩以后》 |
| `previous_event` | `ACT7-E07-DEFENSE` |
| `next_event` | `ACT7-E09-DORM-CLEAR` |
| `main_location` | 晨光体育场北侧看台、融媒体共享盘、B204 / C407 回声 |
| `base_scene` | 个人照、班级照、寝室合照、缺席不补、预览缩略图、仅留存授权 |
| `scene_function` | 检验同框资格和公开风险，确认照片不等于和解。 |

### DEFAULT 路线功能

DEFAULT-4XX 的毕业照要写成“可以短暂同框，但同框不自动修复关系”。四个人可以在最后一张补拍里站到一起，也可以选择仅留存；照片的公开范围必须延续 E03 的不公开 / 仅留存逻辑和 E07 的答辩后缓存风险。

### 页面拆分

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 批次表 | `ACT7-E08-DEFAULT-P01` | 晨光体育场北侧看台贴出个人照、班级照、寝室合照三叠名单，规则写着“迟到顺延，缺席不补”。 | A. 自己核自己的批次；B. 在 4XX 群问谁到了。 | A：`grad_photo_batch_seen = true`, `project_stability +1`；B：`dorm_visibility +1`, `time_debt +1`。 |
| 错过第三组 | `ACT7-E08-DEFAULT-P02` | 唐骁线上面试延迟，周屿主持彩排点名，陆沉图书馆交接，林亦舟 C407 二次确认，第三组缺一人。 | A. 接受缺席不补；B. 等最后一张补拍。 | A：`polite_distance` 倾向；B：`present_but_not_close` 倾向，`time_debt +1`。 |
| 预览缓存 | `ACT7-E08-DEFAULT-P03` | 4XX 合照未提交，但预览缩略图出现在融媒体共享盘缓存里。 | A. 标注仅留存并撤缓存；B. 提交低风险版本。 | A：`photo_cache_checked = true`, `public_boundary +1`；B：`public_scope_risk +1`, `dorm_visibility +1`。 |
| 照片回声 | `ACT7-E08-DEFAULT-P04` | 晚风提醒“拍到和说开是两件事”，许棠只处理流程，不替 4XX 写漂亮说明。 | A. 只留存说明；B. 补一句私人说明。 | A：`grad_photo_scope = only_archive`；B：`say_clear` 倾向，`old_debt +1`。 |

### 核心选择窗

| 字段 | 值 |
|---|---|
| `choice_window_id` | `ACT7-E08-DEFAULT-CHOICE-01` |
| `after_page` | `ACT7-E08-DEFAULT-P03` |
| `direction_count` | 2 |

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E08-DEFAULT-C01-A` | 仅留存并撤缓存 | `photo_cache_checked = true`、`photo_boundary_checked = true`、`public_boundary +1`；毕业照进入体面在场或礼貌距离。 |
| `ACT7-E08-DEFAULT-C01-B` | 补一句私人说明 | `photo_cache_checked = true`、`photo_boundary_checked = true`、`old_debt +1`、`repair_depth +1`；后续清寝和饭局更容易出现具体话，但公开误读风险上升。 |

### 完成条件

```json
{
  "event_id": "ACT7-E08-GRAD-PHOTO",
  "route_switch_allowed": false,
  "required_completion_flags": [
    "grad_photo_batch_seen",
    "photo_cache_checked",
    "photo_boundary_checked"
  ],
  "must_record": [
    "grad_photo_scope",
    "photo_submit_decision",
    "graduation_temperature"
  ]
}
```

禁止项：

- 不允许把寝室合照写成全员自动和解。
- 不允许让许棠、晚风或融媒体流程替 4XX 写私人说明。
- 不允许把“仅留存”改成默认可公开。

---

## `ACT7-E09-DORM-CLEAR` 清寝 / 旧物处理

| 字段 | 值 |
|---|---|
| `event_id` | `ACT7-E09-DORM-CLEAR` |
| `mother_chapter` | 第八章《清寝》 |
| `previous_event` | `ACT7-E08-GRAD-PHOTO` |
| `next_event` | `ACT7-E10-LAST-MEAL` |
| `main_location` | 青枫居 4XX、宿管窗口、校园快递站、公共桌 |
| `base_scene` | 清寝共享清单、公共 U 盘、未知快递袋、门后挂钩、蓝伞、空调遥控器、钥匙 |
| `scene_function` | 检验谁能处理旧物但不代替别人确认。 |

### DEFAULT 路线功能

清寝是 DEFAULT-4XX 的物件结算。它不是伤感收拾房间，而是把“谁能动谁的东西”变成硬流程：可以协助，不能替；可以暂存，不能擅自丢；可以承认共同留存，不能把所有旧物变成怀旧装饰。

### 页面拆分

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 清单入场 | `ACT7-E09-DEFAULT-P01` | 林亦舟打开 4XX 清寝共享清单，先跳出来的是周屿彩排、唐骁线上复核、陆沉图书馆在岗三条缺席理由。 | A. 先列只属于自己的物品；B. 把公共桌单独列一栏。 | A：`clearance_boundary_checked = true`；B：`shared_item_owner_checked = true`。 |
| 旧物归属 | `ACT7-E09-DEFAULT-P02` | 黑 U 盘、未知快递袋、门后挂钩、蓝伞、空调遥控器和钥匙压到同一张表里。 | A. 等本人确认；B. 临时贴暂存便签。 | A：`public_boundary +1`；B：`old_items_resolved = temporary_keep`。 |
| 宿管预检 | `ACT7-E09-DEFAULT-P03` | 宿管阿姨提醒“别好心替人扔”，预检查不看感情，只看责任。 | A. 拍照留存；B. 写协助说明。 | A：`shared_item_owner_checked = true`；B：`responsibility_clarity +1`。 |
| 饭局通知 | `ACT7-E09-DEFAULT-P04` | 预检查通过，但班级群发来“毕业前最后一顿饭人数确认”，4XX 那一栏仍空着。 | A. 只转发提醒；B. 问他们是否到场。 | A：`last_meal_vote_seen = true`；B：`dorm_visibility +1`。 |

### 核心选择窗

| 字段 | 值 |
|---|---|
| `choice_window_id` | `ACT7-E09-DEFAULT-CHOICE-01` |
| `after_page` | `ACT7-E09-DEFAULT-P02` |
| `direction_count` | 2 |

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E09-DEFAULT-C01-A` | 全部等本人确认 | `shared_item_owner_checked = true`、`clearance_boundary_checked = true`、`polite_distance +1`；关系更清楚但温度偏低。 |
| `ACT7-E09-DEFAULT-C01-B` | 公共物临时暂存 | `old_items_resolved = temporary_keep`、`dorm_trust +1`、`proxy_risk +1`；后续饭局可多一句话，但必须补本人确认。 |

### 完成条件

```json
{
  "event_id": "ACT7-E09-DORM-CLEAR",
  "route_switch_allowed": false,
  "required_completion_flags": [
    "dorm_clear_list_seen",
    "shared_item_owner_checked",
    "clearance_boundary_checked"
  ],
  "must_record": [
    "old_items_resolved",
    "dorm_key_ready",
    "last_meal_vote_seen"
  ]
}
```

禁止项：

- 不允许让林亦舟擅自丢掉、签收、清空或公开别人的旧物。
- 不允许把清寝写成单纯怀旧陈列。
- 不允许把“协助”写成重新替别人负责。

---

## `ACT7-E10-LAST-MEAL` 最后一顿饭

| 字段 | 值 |
|---|---|
| `event_id` | `ACT7-E10-LAST-MEAL` |
| `mother_chapter` | 第九章《最后一顿饭》 |
| `previous_event` | `ACT7-E09-DORM-CLEAR` |
| `next_event` | `ACT7-E11-LEAVING-PAPERS` |
| `main_location` | 东区商业街东北饺子馆、后街烧烤投票、4XX 群 |
| `base_scene` | 最后一顿饭投票、未确认不留座、AA、迟到、旧小票、离校手续清单 |
| `scene_function` | 检验是否还有一张桌和一个座位，但不保证以后同路。 |

### DEFAULT 路线功能

最后一顿饭负责把清寝后的物件责任转成座位责任。林亦舟可以问一次、提醒一次、留一个可取消空位，但不能像过去那样替四个人决定地点、人数和是否到场。饭桌可以坐下，也可以迟到，也可以有人只吃到两个饺子；它不是和解仪式。

### 页面拆分

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 投票链接 | `ACT7-E10-DEFAULT-P01` | 班级群发“今晚八点截止，过时不补”，东区商业街东北饺子馆和后街烧烤二选一，4XX 空栏仍在。 | A. 只填自己；B. 在 4XX 群问一次。 | A：`last_meal_seat_confirmed = self_only`；B：`asked_once`、`dorm_visibility +1`。 |
| 到场顺序 | `ACT7-E10-DEFAULT-P02` | 唐骁先到但不替人占位，周屿彩排迟到，陆沉因未知快递袋迟到。 | A. 不替留座；B. 留一个可取消空位。 | A：`public_boundary +1`；B：`time_debt +1`, `dorm_warmth +1`。 |
| 饭桌回声 | `ACT7-E10-DEFAULT-P03` | 旧小票、两毛钱、大拉皮、AA 和“最后一顿饭”把前文旧账压到桌面。 | A. 说一句旧账；B. 让饭局只吃饭。 | A：`say_clear` 倾向，`old_debt +1`；B：`present_but_not_close` 倾向。 |
| 手续推入 | `ACT7-E10-DEFAULT-P04` | 离校手续清单发布，退寝交钥匙、校园卡注销、证书领取、档案转递和武生院站一起压来。 | A. 先保存清单；B. 问谁明天哪个批次。 | A：`leaving_papers_seen = true`；B：`dorm_visibility +1`。 |

### 核心选择窗

| 字段 | 值 |
|---|---|
| `choice_window_id` | `ACT7-E10-DEFAULT-CHOICE-01` |
| `after_page` | `ACT7-E10-DEFAULT-P01` |
| `direction_count` | 2 |

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E10-DEFAULT-C01-A` | 只确认自己的座位 | `last_meal_seat_confirmed = self_only`、`meal_boundary_checked = true`、`polite_distance +1`；饭局更体面，但私人话可能减少。 |
| `ACT7-E10-DEFAULT-C01-B` | 只问一次，不替决定 | `last_meal_seat_confirmed = asked_once`、`meal_boundary_checked = true`、`present_but_not_close +1`；可以短暂同桌，但迟到和空位仍成立。 |

### 完成条件

```json
{
  "event_id": "ACT7-E10-LAST-MEAL",
  "route_switch_allowed": false,
  "required_completion_flags": [
    "last_meal_vote_seen",
    "last_meal_seat_confirmed",
    "meal_boundary_checked"
  ],
  "must_record": [
    "meal_arrival_state",
    "meal_bill_settled",
    "leaving_papers_seen"
  ]
}
```

禁止项：

- 不允许把最后一顿饭写成毕业大团圆。
- 不允许让林亦舟替 4XX 全员占座、投票或确认。
- 不允许用饭桌替代离校手续的现实压力。

---

## `ACT7-E11-LEAVING-PAPERS` 离校手续 / 证书 / 档案

| 字段 | 值 |
|---|---|
| `event_id` | `ACT7-E11-LEAVING-PAPERS` |
| `mother_chapter` | 第十章《武生院站》前半 |
| `previous_event` | `ACT7-E10-LAST-MEAL` |
| `next_event` | `ACT7-E12-STATION-AFTER` |
| `main_location` | 青枫居宿管窗口、证书领取点、校园卡窗口、C407 归档补扫、校门 |
| `base_scene` | 退寝交钥匙、校园卡注销、毕业证领取、档案转递确认、离校去向复核 |
| `scene_function` | 确认大学生活被学校流程盖章，所有关键动作必须本人办理。 |

### DEFAULT 路线功能

离校手续把最后一顿饭的低温同桌拆回四条流程线。它的情绪不靠大段告别，而靠签收、盖章、交钥匙、注销和档案转递确认。DEFAULT-4XX 可以在窗口短暂重合，但每个人都必须对自己的手续负责。

### 页面拆分

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 清单发布 | `ACT7-E11-DEFAULT-P01` | 离校手续清单把 4XX 拆成退寝、校园卡、证书、档案和归档补扫几条线。 | A. 先跑自己的手续；B. 和 4XX 对一次批次。 | A：`leaving_boundary_checked = true`；B：`dorm_visibility +1`。 |
| 退寝交钥匙 | `ACT7-E11-DEFAULT-P02` | 宿管窗口只收本人钥匙和确认，公共钥匙袋必须写清来源。 | A. 交本人钥匙；B. 确认公共钥匙袋。 | A：`dorm_key_returned = true`；B：`shared_item_owner_checked = true`。 |
| 证书档案 | `ACT7-E11-DEFAULT-P03` | 毕业证、学位证、档案转递和 C407 归档补扫同时排队。 | A. 先签收证书；B. 先补扫归档页。 | A：`certificate_received = true`；B：`archive_transfer_checked = true`。 |
| 校门前 | `ACT7-E11-DEFAULT-P04` | 行李从青枫居拖到校门，晚风只给线路图书签，不替林亦舟处理 4XX 手续。 | A. 约站口短停；B. 各自先走。 | A：`station_arrival_seen = true`；B：`polite_distance` 倾向。 |

### 核心选择窗

| 字段 | 值 |
|---|---|
| `choice_window_id` | `ACT7-E11-DEFAULT-CHOICE-01` |
| `after_page` | `ACT7-E11-DEFAULT-P01` |
| `direction_count` | 2 |

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E11-DEFAULT-C01-A` | 先完成自己的手续 | `leaving_boundary_checked = true`、`project_stability +1`、`polite_distance +1`；流程清楚，站口私人话减少。 |
| `ACT7-E11-DEFAULT-C01-B` | 对一次批次但不代办 | `leaving_boundary_checked = true`、`dorm_trust +1`、`time_debt +1`；站口有机会短暂停留。 |

### 完成条件

```json
{
  "event_id": "ACT7-E11-LEAVING-PAPERS",
  "route_switch_allowed": false,
  "required_completion_flags": [
    "leaving_papers_seen",
    "dorm_key_returned",
    "leaving_boundary_checked"
  ],
  "must_record": [
    "campus_card_closed",
    "certificate_received",
    "archive_transfer_checked",
    "station_arrival_seen"
  ]
}
```

禁止项：

- 不允许代签、代领证书、代交钥匙或代确认档案。
- 不允许晚风替代宿舍离校手续与告别。
- 不允许把盖章流程写成纯行政流水账；每个流程动作都要压出关系后果。

---

## `ACT7-E12-STATION-AFTER` 武生院站 / 毕业后消息

| 字段 | 值 |
|---|---|
| `event_id` | `ACT7-E12-STATION-AFTER` |
| `mother_chapter` | 第十章《武生院站》后半 |
| `previous_event` | `ACT7-E11-LEAVING-PAPERS` |
| `next_event` | `DEFAULT-ENDING` |
| `main_location` | 校门、武生院站口、安检口、阳逻线站台、4XX 群 |
| `base_scene` | 行李箱、站口短停、唐骁五分钟、周屿布袋、陆沉旧书、晚风线路图书签、4XX 群“不解散” |
| `scene_function` | 输出 DEFAULT-4XX 最终毕业温度。 |

### DEFAULT 路线功能

站口不是所有线的圆满终点，而是 DEFAULT-4XX 的最终温度锁定点。四个人没有一起走，也没有讲出漂亮告别；但唐骁会等五分钟，周屿会留一个布袋，陆沉会递一本旧书，4XX 群可以不解散。结尾要允许“没有圆满，也没有断干净”成立。

### 页面拆分

| 拍点 | `page_id` | 页面内容 | 可玩选择 | 变量回调 |
|---|---|---|---|---|
| 站口抵达 | `ACT7-E12-DEFAULT-P01` | 校门到武生院站口不长，但被行李、临停、地铁口和各自去向走成很多段。 | A. 站口等五分钟；B. 自己先进站。 | A：`station_arrival_seen = true`, `present_but_not_close +1`；B：`polite_distance +1`。 |
| 三人离开 | `ACT7-E12-DEFAULT-P02` | 唐骁说“别总在中间，也别完全不在”，周屿给布袋，陆沉给旧书。 | A. 收下共同留存；B. 当场问清每件东西。 | A：`station_items_kept += ["joint_keep_bag"]`；B：`say_clear +1`, `old_debt +1`。 |
| 晚风回声 | `ACT7-E12-DEFAULT-P03` | 晚风不来送，只通过线路图书签和站口照片确认“可以站一会儿，也会走”。 | A. 给晚风发站口照片；B. 不转发任何照片。 | A：`relationship_truth +1`；B：`public_boundary +1`。 |
| 群消息 | `ACT7-E12-DEFAULT-P04` | 唐骁发“以后有事群里说”，周屿问“没事也能说吧”，陆沉回“可以”，林亦舟发“那就别解散”。 | A. 发“别解散”；B. 只报到站。 | A：`final_group_state = not_disbanded`；B：`low_frequency` 或 `polite_closed`。 |

### 核心选择窗

| 字段 | 值 |
|---|---|
| `choice_window_id` | `ACT7-E12-DEFAULT-CHOICE-01` |
| `after_page` | `ACT7-E12-DEFAULT-P04` |
| `direction_count` | 2 |

| 方向 | 标签 | 后果 |
|---|---|---|
| `ACT7-E12-DEFAULT-C01-A` | 发“那就别解散” | `final_group_state = not_disbanded`、`ending_temperature_locked = present_but_not_close`；若前置 `say_clear` 足够，可升到 `say_clear`。 |
| `ACT7-E12-DEFAULT-C01-B` | 只报到站 | `final_group_state = low_frequency`、`ending_temperature_locked = polite_distance`；若 `old_debt` 高且修补不足，可落到 `not_reconciled`。 |

### 温度锁定

| 温度 | 触发倾向 | 文本方向 |
|---|---|---|
| `say_clear` | E08-E12 中至少 3 次主动说清，且没有代替别人确认。 | 有些事终于说清，但不保证回到从前。 |
| `present_but_not_close` | 毕业照、清寝、饭局、站口均有短暂同场，边界明确。 | 人还在场，关系不再自动亲近。 |
| `polite_distance` | 流程完成高，私人解释低，只保持低频群消息。 | 体面、清楚、不难看，但少了亲密。 |
| `not_reconciled` | 旧账高、公开误读高、饭局或站口均未补话。 | 不和解，也不继续追究。 |

### 完成条件

```json
{
  "event_id": "ACT7-E12-STATION-AFTER",
  "route_switch_allowed": false,
  "required_completion_flags": [
    "station_arrival_seen",
    "station_boundary_checked",
    "ending_temperature_locked"
  ],
  "must_record": [
    "station_items_kept",
    "final_group_state",
    "graduation_temperature"
  ]
}
```

禁止项：

- 不允许把“别解散”写成四人以后必然亲密。
- 不允许把武生院站写成火车站、高铁站或公交换乘中心；它是阳逻线地铁站。
- 不允许让晚风替代 4XX 的站口收束。
- 不允许用“毕业快乐”“以后常联系”等漂亮话替代具体物件和具体消息。

---

## 后续 JSON 接入建议

正式接入 `开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` 时，建议把本文件拆成 `act7_settlement_events` 追加 5 个对象：

```json
[
  "ACT7-E08-GRAD-PHOTO",
  "ACT7-E09-DORM-CLEAR",
  "ACT7-E10-LAST-MEAL",
  "ACT7-E11-LEAVING-PAPERS",
  "ACT7-E12-STATION-AFTER"
]
```

每个对象应保留：

- `route_id = DEFAULT-4XX`
- `route_pool_id = POOL-DEFAULT-4XX`
- `act7_variant_id = ACT7-DEFAULT`
- `same_mother_event = true`
- `route_switch_allowed = false`
- 4 个剧情页
- 1 个二方向选择窗口
- `required_completion_flags`
- `forbidden_effects`
- `ending_hooks`

接入后，`validation_targets.act7_core_event_count` 可从 3 更新为 8；`act7_required_event_count` 仍保持 12，因为 E01、E02、E04、E05 仍未拆入正式 JSON。

## 校验清单

后续接入 JSON 或继续扩路线时至少检查：

- 是否包含 `ACT7-E08` 至 `ACT7-E12` 五个事件。
- 每个事件是否只写 DEFAULT-4XX，不混入其它路线文本。
- 每个事件是否保持 `route_switch_allowed = false`。
- 毕业照是否处理“仅留存 / 缓存 / 公开风险”。
- 清寝是否处理物件归属和本人确认。
- 最后一顿饭是否处理座位、迟到、AA 和饭桌不圆满。
- 离校手续是否处理退寝、校园卡、证书、档案和本人办理。
- 武生院站是否按阳逻线地铁站处理。
- 最终温度是否允许 `say_clear`、`present_but_not_close`、`polite_distance`、`not_reconciled` 多结果成立。
