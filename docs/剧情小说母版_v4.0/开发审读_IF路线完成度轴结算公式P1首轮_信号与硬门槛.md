# IF 路线完成度轴结算公式 P1 首轮审定：信号与硬门槛

日期：2026-05-23

用途：对公式草案中的变量信号、代理变量和硬门槛做 P1 人工审定。本文仍不写回正式剧情页级 JSON，不作为最终可执行公式。

## 总结

- 路线数：11
- 轴总数：55
- 变量出现次数：275
- 草案中需人工确认的变量出现次数：62
- P1 后仍未判定正负向的变量出现次数：0
- P1 改判信号次数：62
- 硬门槛候选出现次数：39

P1 结论：草案中的 `needs_manual_review` 已全部处理成 positive / negative / context；但硬门槛和代理轴仍需要正式阈值设计。

## 统计

- 审定后信号：positive=162，context=61，negative=52
- 硬门槛：none=223，max_tier_cap_normal_if_unresolved=16，soft_negative_only=13，pressure_cap_requires_explanation=11，max_tier_cap_good=10，hard_regret_gate=2
- 轴状态：p1_signal_reviewed_thresholds_pending=32，p1_hard_gate_review_pending=21，p1_proxy_axis_design_pending=2

## 路线轴状态表

| 路线 | 轴 | 状态 | 硬门槛变量 | 改判变量 | 下一缺口 |
|---|---|---|---|---|---|
| `A3-ACTIVITY-PUBLIC` | `interest_activity` | 信号已审 / 待阈值 | - | `a3_public_scope`: needs_manual_review -> context<br>`public_credit`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `A3-ACTIVITY-PUBLIC` | `dorm_relationship` | 硬门槛待定 | `dorm_absence` -> max_tier_cap_normal_if_unresolved | `activity_reply_after_meal`: needs_manual_review -> positive<br>`a3_public_scope`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `A3-ACTIVITY-PUBLIC` | `study_or_work` | 信号已审 / 待阈值 | - | `thesis_revision_version`: needs_manual_review -> positive<br>`activity_certificate_status`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `A3-ACTIVITY-PUBLIC` | `romance_relationship` | 信号已审 / 待阈值 | - | `candidate_source_tag`: needs_manual_review -> context<br>`female_candidate_present`: needs_manual_review -> context<br>`a3_public_scope`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `A3-ACTIVITY-PUBLIC` | `self_boundary` | 信号已审 / 待阈值 | - | `public_boundary`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R3-PERFECT` | `self_boundary` | 信号已审 / 待阈值 | - | `public_boundary`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R3-PERFECT` | `study_or_work` | 信号已审 / 待阈值 | - | `thesis_revision_version`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R3-PERFECT` | `dorm_relationship` | 信号已审 / 待阈值 | - | `perfect_reply_after_meal`: needs_manual_review -> positive<br>`meal_attendance_locked`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R3-PERFECT` | `interest_activity` | 信号已审 / 待阈值 | - | `public_credit`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R3-PERFECT` | `romance_relationship` | 信号已审 / 待阈值 | - | `shen_jiahe_link`: needs_manual_review -> context<br>`xia_zhiwei_link`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R4-WORK` | `study_or_work` | 信号已审 / 待阈值 | - | `work_shift`: needs_manual_review -> context<br>`work_certificate_status`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R4-WORK` | `family_relationship` | 硬门槛待定 | `money_pressure` -> pressure_cap_requires_explanation<br>`money_pressure_recorded` -> pressure_cap_requires_explanation | `small_income`: needs_manual_review -> positive<br>`family_signal`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R4-WORK` | `dorm_relationship` | 硬门槛待定 | `dorm_absence` -> max_tier_cap_normal_if_unresolved | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R4-WORK` | `romance_relationship` | 硬门槛待定 | `missed_meet_seen` -> max_tier_cap_normal_if_unresolved | `intimacy_link`: needs_manual_review -> context<br>`shen_jiahe_link`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R4-WORK` | `self_boundary` | 硬门槛待定 | `proxy_risk` -> max_tier_cap_good<br>`public_boundary_risk` -> max_tier_cap_good | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-WANFENG` | `romance_relationship` | 信号已审 / 待阈值 | - | `wanfeng_future_frequency`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-WANFENG` | `dorm_relationship` | 硬门槛待定 | `dorm_absence` -> max_tier_cap_normal_if_unresolved<br>`old_dorm_distance` -> max_tier_cap_normal_if_unresolved | `dorm_visibility`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-WANFENG` | `study_or_work` | 信号已审 / 待阈值 | - | `thesis_revision_version`: needs_manual_review -> positive<br>`defense_message_echo`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-WANFENG` | `family_relationship` | 代理轴待设计 | `money_pressure` -> pressure_cap_requires_explanation<br>`priority_pressure_recorded` -> pressure_cap_requires_explanation | `wanfeng_future_frequency`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-WANFENG` | `self_boundary` | 信号已审 / 待阈值 | - | `wanfeng_boundary`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-ROMANCE` | `romance_relationship` | 信号已审 / 待阈值 | - | `romance_candidate`: needs_manual_review -> context<br>`romance_candidate_locked`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-ROMANCE` | `dorm_relationship` | 硬门槛待定 | `dorm_absence` -> max_tier_cap_normal_if_unresolved | `candidate_reply_after_meal`: needs_manual_review -> positive<br>`dorm_visibility`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-ROMANCE` | `study_or_work` | 信号已审 / 待阈值 | - | `thesis_revision_version`: needs_manual_review -> positive<br>`defense_message_echo`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-ROMANCE` | `side_character_affinity` | 硬门槛待定 | `candidate_misread` -> max_tier_cap_good<br>`wanfeng_misread` -> max_tier_cap_good | `romance_candidate`: needs_manual_review -> context<br>`romance_candidate_locked`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-ROMANCE` | `self_boundary` | 信号已审 / 待阈值 | - | `romance_candidate_locked`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `DEFAULT-4XX` | `dorm_relationship` | 硬门槛待定 | `dorm_absence` -> max_tier_cap_normal_if_unresolved | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `DEFAULT-4XX` | `study_or_work` | 信号已审 / 待阈值 | - | `thesis_revision_helper`: needs_manual_review -> context<br>`thesis_revision_version`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `DEFAULT-4XX` | `romance_relationship` | 信号已审 / 待阈值 | - | `luchen_voice`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `DEFAULT-4XX` | `family_relationship` | 代理轴待设计 | `money_pressure` -> pressure_cap_requires_explanation<br>`dorm_pressure` -> pressure_cap_requires_explanation<br>`rule_pressure` -> pressure_cap_requires_explanation | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `DEFAULT-4XX` | `self_boundary` | 硬门槛待定 | `proxy_risk` -> max_tier_cap_good<br>`avoidance` -> max_tier_cap_normal_if_unresolved | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-ZHOU` | `primary_relationship` | 信号已审 / 待阈值 | - | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-ZHOU` | `interest_activity` | 信号已审 / 待阈值 | - | `zhou_activity_signature_scope`: needs_manual_review -> positive<br>`public_smooth`: needs_manual_review -> positive<br>`public_scope`: needs_manual_review -> context<br>`activity_link`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-ZHOU` | `dorm_relationship` | 硬门槛待定 | `dorm_absence` -> max_tier_cap_normal_if_unresolved | `meal_attendance_locked`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-ZHOU` | `study_or_work` | 信号已审 / 待阈值 | - | `thesis_revision_version`: needs_manual_review -> positive<br>`joke_defense`: needs_manual_review -> negative | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-ZHOU` | `self_boundary` | 硬门槛待定 | `proxy_risk` -> max_tier_cap_good | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-TANG` | `primary_relationship` | 信号已审 / 待阈值 | - | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-TANG` | `study_or_work` | 信号已审 / 待阈值 | - | `thesis_revision_version`: needs_manual_review -> positive<br>`tang_archive_scope`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-TANG` | `dorm_relationship` | 信号已审 / 待阈值 | - | `meal_attendance_locked`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-TANG` | `side_character_affinity` | 硬门槛待定 | `zhou_misread` -> max_tier_cap_good<br>`rule_pressure` -> pressure_cap_requires_explanation | `tang_archive_scope`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-TANG` | `self_boundary` | 硬门槛待定 | `luchen_proxy_risk` -> max_tier_cap_good<br>`proxy_risk` -> max_tier_cap_good | `responsibility_clarity`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-LUCHEN` | `primary_relationship` | 信号已审 / 待阈值 | - | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-LUCHEN` | `dorm_relationship` | 信号已审 / 待阈值 | - | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-LUCHEN` | `study_or_work` | 信号已审 / 待阈值 | - | `work_reality`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-LUCHEN` | `family_relationship` | 硬门槛待定 | `family_pressure` -> pressure_cap_requires_explanation<br>`money_pressure` -> pressure_cap_requires_explanation | `work_reality`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-LUCHEN` | `self_boundary` | 硬门槛待定 | `proxy_risk` -> max_tier_cap_good | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-LIEFLAT` | `self_boundary` | 硬门槛待定 | `avoidance` -> max_tier_cap_normal_if_unresolved<br>`late_regret` -> max_tier_cap_normal_if_unresolved<br>`lost_chance` -> max_tier_cap_normal_if_unresolved | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-LIEFLAT` | `dorm_relationship` | 硬门槛待定 | `old_dorm_distance` -> max_tier_cap_normal_if_unresolved | `meal_attendance_locked`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-LIEFLAT` | `study_or_work` | 信号已审 / 待阈值 | - | `thesis_revision_version`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-LIEFLAT` | `romance_relationship` | 硬门槛待定 | `avoidance` -> max_tier_cap_normal_if_unresolved<br>`expired_entry_checked` -> hard_regret_gate<br>`expired_form_seen` -> hard_regret_gate | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5-LIEFLAT` | `side_character_affinity` | 硬门槛待定 | `money_pressure` -> pressure_cap_requires_explanation<br>`avoidance` -> max_tier_cap_normal_if_unresolved | `external_echo`: needs_manual_review -> context | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5X-HARD` | `primary_relationship` | 信号已审 / 待阈值 | - | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5X-HARD` | `dorm_relationship` | 硬门槛待定 | `old_dorm_distance` -> max_tier_cap_normal_if_unresolved | `meal_attendance_locked`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5X-HARD` | `study_or_work` | 信号已审 / 待阈值 | - | `thesis_revision_version`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5X-HARD` | `side_character_affinity` | 信号已审 / 待阈值 | - | `new_circle_contact`: needs_manual_review -> positive<br>`new_circle_fit`: needs_manual_review -> positive | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |
| `R5X-HARD` | `self_boundary` | 信号已审 / 待阈值 | - | - | 仍需为变量激活值、正负向强度和硬门槛封顶规则写正式阈值。 |

## 后续规则化建议

1. 把 `hard_regret_gate`、`max_tier_cap_good`、`max_tier_cap_normal_if_unresolved` 和 `pressure_cap_requires_explanation` 分别写成正式封顶规则。
2. 代理轴优先处理 `R5-WANFENG:family_relationship` 与 `DEFAULT-4XX:family_relationship`，决定补家庭专属变量还是接受现实压力代理。
3. 对 context 变量只做门槛、显示解释或入口校验，不直接加减分。
4. 下一版可以生成正式结算数据层，但仍不建议写回正式剧情页级 JSON。
