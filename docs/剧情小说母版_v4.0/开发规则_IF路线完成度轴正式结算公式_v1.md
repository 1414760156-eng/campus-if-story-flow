# IF 路线完成度轴正式结算公式 v1

## 定位

本文件把 P1 审定后的变量信号和硬门槛候选，整理成正式结算公式数据层。它服务后续结算器、试玩器或 UI 读取，但不写回 11 个正式剧情页级 JSON。

## 数据来源

- `docs/剧情小说母版_v4.0/开发数据_IF路线完成度轴与四档结局_11条路线_v1.json`
- `docs/剧情小说母版_v4.0/开发数据_IF路线完成度轴变量绑定审计_11条路线_v1.json`
- `docs/剧情小说母版_v4.0/开发数据_IF路线完成度轴结算公式草案_11条路线_v1.json`
- `docs/剧情小说母版_v4.0/开发数据_IF路线完成度轴结算公式P1审定_11条路线_v1.json`
- `docs/剧情小说母版_v4.0/开发审读_IF路线完成度轴结算公式P1首轮_信号与硬门槛.md`

## 总体结果

- 覆盖路线：11 条。
- 覆盖完成度轴：55 个。
- 覆盖变量引用：275 个。
- 未审定信号：0 个。
- 代理家庭轴：2 个。
- 硬门槛应用：39 个；软负向扣分：13 个。

## 轴分公式

- 初始轴分：50。
- 正向变量激活：每个 +10。
- 负向变量激活：每个 -10。
- 语境变量不直接加减分，只负责门槛、解释或回查。
- 轴分限制在 0-100。
- 四档阈值：完美 >=80，良好 >=60，一般 >=40，遗憾 <40。

## 硬门槛规则

| 规则 | 类型 | 封顶档 | 分数上限 | 触发条件 |
|---|---:|---:|---:|---|
| max_tier_cap_normal_if_unresolved | axis_tier_cap | normal | 59 | negative variable is active and the same axis has no active repair / confirmation / boundary counter-signal |
| max_tier_cap_good | axis_tier_cap | good | 79 | misread / proxy / public-boundary risk variable is active and no boundary-clearing counter-signal is active |
| pressure_cap_requires_explanation | axis_tier_cap | good | 79 | money / family / dorm / rule pressure is active and no explanation / acknowledgement signal is active |
| hard_regret_gate | axis_regret_gate | regret | 39 | expired / cut-off variable is active |
| soft_negative_only | score_only | 无 | 无 | negative variable is active |

## 代理家庭轴处理

本轮不回写正式路线 JSON，因此两个家庭关系代理轴采用结算层代理规则：

- `R5-WANFENG:family_relationship`
- `DEFAULT-4XX:family_relationship`

处理方式：接受现有现实压力代理变量，但没有家庭专属变量前，该轴最高只能到良好，分数上限 79。后续若要让家庭轴可到完美，需要新增或映射家庭专属变量，例如 `family_acknowledged`、`family_boundary_named`、`family_pressure_explained`。

## 路线聚合规则

- 强判定轴权重：1.0。
- 次判定轴权重：0.75。
- 软回声轴权重：0.5。
- 路线完美：所有强判定轴达到完美，且路线加权分 >=75，且强判定轴没有未解除硬封顶。
- 路线良好：所有强判定轴至少良好，且路线加权分 >=60。
- 路线一般：路线加权分 >=40。
- 路线遗憾：路线加权分 <40，或强判定轴触发硬遗憾门槛。
- 软回声轴可以拉低温度并提供解释，但不会单独把整条路线打成遗憾，除非后续路线规则特别提升它。

## 路线摘要

| 路线 | 轴数 | 代理轴 | 硬门槛摘要 |
|---|---:|---|---|
| A3-ACTIVITY-PUBLIC | 5 | 无 | max_tier_cap_normal_if_unresolved=1 |
| R3-PERFECT | 5 | 无 | soft_negative_only=1 |
| R4-WORK | 5 | 无 | pressure_cap_requires_explanation=2；max_tier_cap_normal_if_unresolved=2；max_tier_cap_good=2 |
| R5-WANFENG | 5 | family_relationship | max_tier_cap_normal_if_unresolved=2；pressure_cap_requires_explanation=2；soft_negative_only=1 |
| R5-ROMANCE | 5 | 无 | max_tier_cap_normal_if_unresolved=1；max_tier_cap_good=2；soft_negative_only=1 |
| DEFAULT-4XX | 5 | family_relationship | max_tier_cap_normal_if_unresolved=2；pressure_cap_requires_explanation=3；max_tier_cap_good=1 |
| R5-ZHOU | 5 | 无 | max_tier_cap_normal_if_unresolved=1；soft_negative_only=1；max_tier_cap_good=1 |
| R5-TANG | 5 | 无 | soft_negative_only=1；max_tier_cap_good=3；pressure_cap_requires_explanation=1 |
| R5-LUCHEN | 5 | 无 | pressure_cap_requires_explanation=2；max_tier_cap_good=1 |
| R5-LIEFLAT | 5 | 无 | max_tier_cap_normal_if_unresolved=6；soft_negative_only=3；hard_regret_gate=2；pressure_cap_requires_explanation=1 |
| R5X-HARD | 5 | 无 | max_tier_cap_normal_if_unresolved=1；soft_negative_only=5 |

## 后续建议

下一步适合做“结算解释样本”：为 11 条路线各写一组完美 / 良好 / 一般 / 遗憾示例输入与玩家可见解释，验证本公式不会把代理轴、软回声轴或摆烂线误判成反主题结果。仍不建议直接回写正式剧情页级 JSON。
