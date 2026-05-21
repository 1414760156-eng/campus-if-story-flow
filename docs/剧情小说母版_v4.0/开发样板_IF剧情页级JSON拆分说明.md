# IF 剧情页级 JSON 拆分样板说明

## 文件用途

`开发样板_IF剧情页级JSON拆分样板_v1.json` 是第一份可解析的剧情页级 JSON 样板。它不是全量剧情转换，也不是试玩器脚本，而是把现有长线开发稿里的路线池、节点、选项、变量、回声钩子和第六卷节奏先拆成统一形状，后续可以按同一格式继续批量拆正文页。

本样板优先验证四件事：

1. 第五卷普通长线结算前，至少完成 5 个主线选择窗口。
2. 每个被计入的第五卷窗口都必须有 `act6_echo_hook`。
3. 第六卷固定 20 个剧情段，拆成 5 个四段组。
4. 第六卷每个选择窗口只保留 2 个当前路线池内方向，不重新打开其它完整命运线。

## 覆盖内容

当前样板包含：

- `route_samples`：展示 `DEFAULT-4XX`、`R5-LUCHEN`、`R5-WANFENG`、`R5-ROMANCE` 的入口、路线池、权限和防漂移规则。
- `route_state_template`：展示进入 `POOL-R5-WANFENG` 后，路线状态如何记录第五卷门槛和第六卷 20/4/2 约束。
- `page_nodes`：提供 P0-D 站队入口、P0-C 晚风入口、P0-C 社团女生候选确认、P0-E 规则项目窗口、普通长线门槛检查五类页面节点样板。
- `act6_blocks`：以 `R5-WANFENG` 为例，完整列出 5 个四段组、20 个剧情段和 5 个二方向选择窗口。

## 字段拆法

剧情页节点沿用 `开发规格_IF路线Schema与P0节点池.md` 的字段：

- `id`：全局唯一节点 ID。样板节点使用 `_SAMPLE` 后缀，正式拆分时可以去掉后缀或另建正式 ID。
- `module`：P0-A / P0-B / P0-C / P0-D / P0-E。
- `route_id`：节点服务的主路线。
- `route_pool_id`：当前命运池。进入长线后，后续节点必须服从这个池。
- `act`、`scene`、`location`、`participants`、`trigger`：剧情页基础信息。
- `player_question`：玩家在这个节点真正选择的事情。
- `act5_window_tag`：第五卷最低主线选择窗口类别。
- `mainline_anchor`：本节点不得取消的母版锁点。
- `choices`：可拆选项，每个选项必须写变量、关系、路线效果和后续提示。
- `act6_echo_hook`：该选择在第六卷哪里回响。没有这个字段，不建议计入第五卷最低主线选择。
- `echo_hooks`：后续文本回声位置。
- `drift_guard`：防止路线变成奖励线、换女主补偿线或分支爆炸的提醒。

## 第五卷门槛

普通长线进入完整第六卷前，需要先检查：

```json
{
  "act5_mainline_choice_count": 5,
  "act5_required_windows_seen": [
    "dorm_stand",
    "intimacy_or_wanfeng",
    "project_or_rule",
    "activity_or_interest",
    "avoidance_or_outflow"
  ],
  "act5_choice_floor_met": true
}
```

未满足时，不应直接锁定完整普通长线。可以回到缺失窗口补足，也可以让该方向成为低温软回声，但不能让一次选择直接越过第五卷主线节奏。

## 第六卷 20/4/2

第六卷块结构固定为：

- 5 个 `act6_blocks`。
- 每个 block 有 4 个 `scene_ids`。
- 每个 block 只有 1 个 `choice_window`。
- 每个 `choice_window.directions` 恰好 2 个方向。
- 两个方向只能改变当前池内的关系温度、解释成本、资源代价、公开边界和毕业温度。

样板中的 `ACT6-WANFENG-B01` 至 `ACT6-WANFENG-B05` 可以直接作为其它路线复制骨架：

- `POOL-R5-LUCHEN`：两个方向应围绕不代言 / 现实压力 / 沉默边界。
- `POOL-R5-LIEFLAT`：两个方向应围绕回避方式 / 入口过期 / 低温照面。
- `POOL-R5-ROMANCE`：两个方向必须围绕已锁定的 `romance_candidate`，不能同时开沈嘉禾和夏知微完整线。
- `POOL-DEFAULT-4XX`：两个方向应围绕当面修补 / 代理风险 / 旧账保留。

## 后续拆分顺序

建议下一步按这个顺序推进：

1. 把 `DEFAULT-4XX` 的入口、8 个内回流点和第六卷 20 段映射拆成正式 JSON。
2. 拆站队组四线：`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN`、`R5-LIEFLAT`。
3. 拆 `R5-WANFENG`，复用本样板的第六卷块。
4. 拆 `R5-ROMANCE`，先固定 `romance_candidate` 的单锁定结构。
5. 再补 `R4-WORK`、`A3-ACTIVITY-PUBLIC`、`R3-PERFECT` 和 `R5X-HARD`。

这样做的好处是：先用已完成长线验证 JSON 结构，不急着扩写完整正文；等路线池、变量和回声都稳了，再扩具体剧情页和章节正文。
