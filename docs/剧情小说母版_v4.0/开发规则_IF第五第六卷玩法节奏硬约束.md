# IF 第五第六卷玩法节奏硬约束

## 用途

本文用于把第五卷和第六卷的玩法节奏从“叙事方向”补成可拆 JSON、可校验、可复用的硬规则。

它约束的是互动开发，不是小说正文。小说母本仍负责人物性格、生活半径、事件顺序和文学质感；本文负责规定：第五卷至少要给玩家哪些主线选择窗口，第六卷进入命运池后必须如何组织 20 个剧情段、每四段如何落一次选择、每次选择为什么只能保留两个方向。

## 总硬规则

```json
{
  "act5_mainline_choice_floor": {
    "min_required_choice_windows": 5,
    "must_cover": [
      "dorm_stand",
      "intimacy_or_wanfeng",
      "project_or_rule",
      "activity_or_interest",
      "avoidance_or_outflow"
    ],
    "choice_must_leave_act6_echo": true,
    "route_lock_before_floor": "forbidden_except_R5X_HARD"
  },
  "act6_twenty_scene_rule": {
    "scene_count": 20,
    "block_count": 5,
    "scenes_per_block": 4,
    "choice_window_every": 4,
    "choice_window_count": 5,
    "directions_per_window": 2,
    "only_current_route_pool": true,
    "no_new_full_route_unlock": true
  }
}
```

解释：

- 第五卷必须至少经过 5 个主线选择窗口，不能只靠一次“站谁”直接锁完整后续。
- 第五卷的选择窗口必须覆盖宿舍站队、亲密 / 晚风、项目 / 规则、活动 / 兴趣、回避 / 外流五类主压力。
- 第五卷每个选择窗口都必须留下第六卷可见后果，不能只改当场一句台词。
- 第六卷每条已进入的命运池都必须组织为 20 个剧情段。
- 第六卷每 4 个剧情段形成一个小组，第 4 段后落一次选择窗口，共 5 次选择。
- 第六卷每次选择窗口只能保留两个方向。这两个方向不是两条新路线，而是当前命运池内的两个处理方向。
- 第六卷不能重新开放其它完整命运线。其它人物只能作为软照面、消息、同场流程或回声出现。

## 第五卷最低主线选择要求

### 五个必经选择窗口

第五卷进入长线结算前，至少保留以下五个选择窗口。不同路线可以改写场景和人物，但不能删除窗口功能。

| 窗口 ID | 必须覆盖的压力 | 玩家实际选择 | 可导向倾向 | 第六卷必须回响 |
|---|---|---|---|---|
| `ACT5-MAIN-CHOICE-01-DORM-STAND` | 宿舍站队 | 回公共桌、私聊周屿、私聊唐骁、私聊陆沉、静音不回 | `DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT` | 谁还愿意等林亦舟，谁开始少解释 |
| `ACT5-MAIN-CHOICE-02-INTIMACY` | 晚风 / 亲密出口 | 继续靠近晚风、停在朋友、回寝处理旧账、把情绪交给社团女生候选 | `R5-WANFENG`、`DEFAULT-4XX`、`R5-ROMANCE` 前置 | 第六卷亲密关系是否成为主生活半径 |
| `ACT5-MAIN-CHOICE-03-PROJECT-RULE` | 项目 / 规则 / 材料 | 先稳 C407、先谈旧账、先问授权、先交最低责任 | `R5-TANG`、`DEFAULT-4XX`、`R3-PERFECT` 回声 | 第六卷项目协作温度、公开材料风险 |
| `ACT5-MAIN-CHOICE-04-ACTIVITY-INTEREST` | 活动 / 兴趣 / 公开表达 | 去活动圈补场、回 4XX、拒绝公开、只做幕后 | `R5-ZHOU`、`R3-PERFECT`、`R5-LIEFLAT` 前置 | 第六卷活动圈是否继续调度林亦舟 |
| `ACT5-MAIN-CHOICE-05-AVOID-OUTFLOW` | 回避 / 唯一硬外流 | 回头敲门、楼下冷静、继续静音、跟许澈或新圈走 | `DEFAULT-4XX`、`R5-LIEFLAT`、`R5X-HARD` | 第六卷是否仍在旧命运池内，或 5X 单线 |

### 计数规则

1. 每个窗口只能计一次。一个场景里出现多个按钮，不等于多个主线选择窗口。
2. 窗口必须提供可见行为：回谁、不回谁、去哪里、把名字写不写进材料、是否赴约、是否进门。
3. 窗口必须写入至少一个变量变化和一个 `act6_echo_hook`。
4. 普通软外流不能在少于 5 个窗口时锁定完整长线；只有 `R5X-HARD` 可以在唯一硬外流点覆盖其它规则。
5. 如果玩家某一类压力长期不选，仍要通过缺席、错过或入口关闭完成该窗口结算。

### 推荐字段

```json
{
  "act5_mainline_choice_count": 0,
  "act5_required_windows_seen": [],
  "act5_choice_floor_met": false,
  "act5_echo_hooks": [],
  "act5_route_candidate_scores": {
    "DEFAULT-4XX": 0,
    "R5-ZHOU": 0,
    "R5-TANG": 0,
    "R5-LUCHEN": 0,
    "R5-LIEFLAT": 0,
    "R5-WANFENG": 0,
    "R5-ROMANCE": 0,
    "R5X-HARD": 0
  }
}
```

2026-05-23 schema 同步：`act5_route_candidate_scores` 是第五幕局部视图；正式路线状态统一使用 `route_candidate_scores`、`act5_entry_bias`、`entry_gate_status`、`entry_gate_conditions` 和 `entry_gate_audit`。第五幕锁池必须同时满足本文件的五类选择窗口下限，以及 `开发规则_IF第三四幕前置入口与第五幕外流条件矩阵.md` 中的“前置条件 + 最终选择”。

## 第六卷 20 剧情段规则

### 结构

第六卷进入某条命运池后，不再无限开树，而是采用 20 个剧情段、5 个四段组的结构。

| 组 | 剧情段 | 功能 | 第 4 段选择窗口 |
|---:|---|---|---|
| 1 | `ACT6-S01` 至 `ACT6-S04` | 承接第五卷站队后第一轮后果 | `ACT6-CHOICE-01` |
| 2 | `ACT6-S05` 至 `ACT6-S08` | 当前路线生活半径稳定成形 | `ACT6-CHOICE-02` |
| 3 | `ACT6-S09` 至 `ACT6-S12` | 未选择者误读或软照面变重 | `ACT6-CHOICE-03` |
| 4 | `ACT6-S13` 至 `ACT6-S16` | 当前路线核心矛盾复发 | `ACT6-CHOICE-04` |
| 5 | `ACT6-S17` 至 `ACT6-S20` | 进入第七卷毕业结算前定形 | `ACT6-CHOICE-05` |

每个四段组的推荐节奏：

1. 第 1 段：母本公共锁点进入当前路线镜头。
2. 第 2 段：当前路线核心人物或生活方式加压。
3. 第 3 段：未选择者软照面、消息或低温回声。
4. 第 4 段：现实任务收束，并落一个二方向选择。

### 每四段一个选择

每 4 个剧情段后必须出现一个选择窗口。这个选择不是重新选路线，而是在当前池内二选一。

```json
{
  "choice_window_id": "ACT6-CHOICE-01",
  "after_scene": "ACT6-S04",
  "direction_count": 2,
  "directions": [
    {
      "id": "stay_current_route_deeper",
      "label": "继续把时间投给当前路线核心",
      "route_pool_id": "POOL-R5-TANG"
    },
    {
      "id": "handle_soft_echo_boundary",
      "label": "先处理一个未选择者或公共锁点的边界",
      "route_pool_id": "POOL-R5-TANG"
    }
  ],
  "forbidden": ["unlock_new_full_route", "switch_route_pool", "open_third_direction"]
}
```

### 只选两个方向

第六卷每次选择窗口只能有两个方向，原因是第六卷已经不是分流卷，而是收束卷。

允许的二方向组合：

| 当前路线 | 方向 A | 方向 B |
|---|---|---|
| `DEFAULT-4XX` | 当面修补 / 继续留在公共桌 | 尊重边界 / 不再替人说完整 |
| `R5-ZHOU` | 继续靠近周屿和活动圈 | 截住玩笑或处理公开边界 |
| `R5-TANG` | 继续稳项目和流程 | 放慢流程处理人的边界 |
| `R5-LUCHEN` | 等陆沉自己说 | 只处理一个具体现实任务 |
| `R5-LIEFLAT` | 继续回避 | 补一个过期入口但不转深线 |
| `R5-WANFENG` | 继续亲密投入 | 说清边界和宿舍旧账 |
| `R5-ROMANCE` | 继续候选对象生活半径 | 处理公开 / 金钱 / 宿舍缺席代价 |
| `R4-WORK` | 接现实排班 | 保住一个关系入口 |
| `R3-PERFECT` | 继续低风险自控 | 拒绝被继续工具化 |
| `R5X-HARD` | 留在新圈 | 看见旧人但不回旧线 |

禁止的二方向写法：

- 不得写成“去周屿线 / 去唐骁线 / 去陆沉线”这种重新开路线。
- 不得在一个窗口给三到四个完整方向。
- 不得让选择 B 成为新完整路线入口。
- 不得用“继续 / 返回”这种无变量选项凑数。
- 不得把第六卷写成第五卷同类争吵的重复分流。

## 第六卷节点字段

建议每个第六卷剧情段增加字段：

```json
{
  "act": "act6",
  "scene_index": 1,
  "block_index": 1,
  "scene_id": "ACT6-R5-TANG-S01",
  "route_pool_id": "POOL-R5-TANG",
  "mother_event_id": "ME-C407-DEMO",
  "route_lens": "唐骁线规则与项目镜头",
  "scene_function": "承接第五卷站队后果",
  "choice_window_after": false,
  "allowed_direction_count": 0,
  "soft_echo_only": true
}
```

第 4 / 8 / 12 / 16 / 20 段后追加选择窗口字段：

```json
{
  "choice_window_after": true,
  "choice_window_id": "ACT6-R5-TANG-CHOICE-01",
  "allowed_direction_count": 2,
  "allowed_directions": ["project_first", "boundary_first"],
  "route_pool_locked": true,
  "new_full_route_unlock_allowed": false
}
```

## 校验清单

后续拆 JSON、写长线或做试玩器时，至少检查：

- 第五卷是否有 `act5_mainline_choice_count >= 5`。
- 第五卷是否覆盖五类窗口：宿舍站队、亲密 / 晚风、项目 / 规则、活动 / 兴趣、回避 / 外流。
- 第五卷每个窗口是否有 `act6_echo_hook`。
- 第六卷当前路线是否有 20 个剧情段。
- 第六卷是否每 4 段后才出现一次选择窗口。
- 第六卷选择窗口数量是否为 5。
- 第六卷每个选择窗口是否只有 2 个方向。
- 第六卷每个方向是否仍留在当前 `route_pool_id`。
- 第六卷是否没有重新开放其它完整命运线。

## 和现有长线文件的关系

`DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG` 等长线文件目前提供的是 8-10 章级可玩支线骨架，包含章节、节点、变量、内回流点和毕业温度。本文不推翻这些文件，而是在后续拆第六卷剧情页或 JSON 时要求：

- 第五卷入口层必须先满足最低主线选择窗口。
- 第六卷承接层必须把当前路线内容重排成 20 个剧情段。
- 原长线文件中的 8 章可以作为 20 段的上层章节分组，但最终 JSON / 剧情页需要落到 `ACT6-S01` 至 `ACT6-S20`。
- 原长线文件中的内回流点只能服务当前池二方向选择，不能借机开新完整路线。
