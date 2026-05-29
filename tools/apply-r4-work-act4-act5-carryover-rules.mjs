import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const routeJsonPath = path.join(
  projectRoot,
  "docs",
  "剧情小说母版_v4.0",
  "开发数据_IF剧情页级JSON_R4-WORK_v1.json"
);

const route = JSON.parse(fs.readFileSync(routeJsonPath, "utf8").replace(/^\uFEFF/, ""));

const rules = [
  ["ACT4-WORK-L01", "A", "r4_empty_dorm_family_call_first", ["family_responsibility", "time_debt", "old_debt"], ["ACT5-WORK-B01", "ACT5-WORK-B05"], "家庭电话先被接住，进入第五幕后只作为联系人、晚归解释和旧账压力，不打开家庭线。"],
  ["ACT4-WORK-L01", "B", "r4_empty_dorm_radius_split_work_first", ["work_rule_clarity", "work_shift_seed", "reality_order_visible"], ["ACT5-WORK-B01", "ACT5-WORK-B04"], "勤工值班先被问清，进入第五幕后优先兑现为晚班名单、固定班和工作生活半径。"],
  ["ACT4-WORK-L01", "C", "r4_empty_dorm_wanfeng_time_notice", ["wanfeng_trust", "wanfeng_delay", "relationship_truth"], ["ACT5-WORK-B02"], "晚风收到明确答复，第五幕后只保留短时照面和具体时间，不打开晚风完整线。"],
  ["ACT4-WORK-L02", "A", "r4_refund_rule_keep_meeting_cost", ["wanfeng_trust", "intimacy_pressure", "money_pressure"], ["ACT5-WORK-B02", "ACT5-WORK-B03"], "退改成本被看见，第五幕后在私人联系和证明材料里兑现为钱压与时间压。"],
  ["ACT4-WORK-L02", "B", "r4_refund_rule_cost_to_work", ["basic_cost_clear", "work_shift_seed", "route_order_visible"], ["ACT5-WORK-B01", "ACT5-WORK-B04"], "花费被算清，第五幕后优先落到晚班和固定排班。"],
  ["ACT4-WORK-L02", "C", "r4_refund_rule_budget_explained", ["relationship_truth", "parent_pressure_visible", "money_pressure_visible"], ["ACT5-WORK-B02", "ACT5-WORK-B03"], "预算和时间被说成实话，第五幕后兑现为短时照面和材料说明。"],
  ["ACT4-WORK-L03", "A", "r4_station_cash_family_gap_named", ["family_signal", "money_pressure", "old_debt_seen"], ["ACT5-WORK-B01", "ACT5-WORK-B03"], "父亲现金的缺口被命名，第五幕后作为钱压和联系人顺序的低温回声。"],
  ["ACT4-WORK-L03", "B", "r4_station_cash_debt_deferred", ["old_debt", "daily_stability", "study_repair"], ["ACT5-WORK-B03", "ACT5-WORK-B05"], "钱被先放进饭卡车票，第五幕后兑现为证明材料和第一周清单里的旧账。"],
  ["ACT4-WORK-L03", "C", "r4_station_cash_to_work_route", ["work_route", "work_certificate_seed", "work_shift_seed"], ["ACT5-WORK-B01", "ACT5-WORK-B03"], "现金压力转向勤工窗口，第五幕后兑现为排班入口和勤工证明。"],
  ["ACT4-WORK-L04", "A", "study_before_shift_once", ["study_pressure", "work_certificate_seed", "study_repair"], ["ACT5-WORK-B03"], "补考资料先被补齐，第五幕后兑现为材料窗口、证明和可提交边界。"],
  ["ACT4-WORK-L04", "B", "shift_before_review", ["work_shift_seed", "work_rule_clarity", "study_debt"], ["ACT5-WORK-B01", "ACT5-WORK-B04"], "临时班先被接下，第五幕后兑现为固定班倾向和学习债务。"],
  ["ACT4-WORK-L04", "C", "minimum_fact_given_before_absence", ["relationship_truth_seed", "public_boundary", "wanfeng_soft_echo"], ["ACT5-WORK-B02", "ACT5-WORK-B05"], "最低事实先被说明，第五幕后兑现为不失联、不回避的边界。"],
  ["ACT4-WORK-L05", "A", "r4_visible_seat_dorm_can_ask", ["dorm_warmth", "public_boundary", "dorm_repair"], ["ACT5-WORK-B01", "ACT5-WORK-B05"], "4XX 仍能问他，第五幕后兑现为宿舍低温照面，不回默认宿舍线。"],
  ["ACT4-WORK-L05", "B", "r4_back_seat_window_first", ["work_window_ready", "dorm_misread", "tang_material_support"], ["ACT5-WORK-B03", "ACT5-WORK-B04"], "后排和窗口优先，第五幕后兑现为材料/项目优先，但宿舍误读升高。"],
  ["ACT4-WORK-L05", "C", "r4_window_result_back_to_dorm", ["work_route", "work_certificate_seed", "public_boundary"], ["ACT5-WORK-B01", "ACT5-WORK-B03"], "明德楼窗口先跑完，第五幕后兑现为工作入口和证明材料。"],
  ["ACT4-WORK-L06", "A", "r4_contact_self_signed_to_work_entry", ["route_boundary", "work_route", "work_certificate_seed"], ["ACT5-WORK-B01"], "兼职和留校本人签字，第五幕 B01 必须从晚班后补说明和排班缺席进入。"],
  ["ACT4-WORK-L06", "B", "r4_contact_stay_only_detail_debt", ["old_debt", "work_window_pending", "work_rule_clarity"], ["ACT5-WORK-B01", "ACT5-WORK-B03"], "只填留校造成工作细节债，第五幕后兑现为补说明、证明材料和解释成本。"],
  ["ACT4-WORK-L06", "C", "r4_contact_parent_order_confirmed", ["family_signal", "family_basic_truth", "face_pressure"], ["ACT5-WORK-B01", "ACT5-WORK-B05"], "联系人顺序已确认，第五幕后兑现为家庭低温回声和本人签字边界。"],
];

route.act4_to_act5_carryover_rules = {
  status: "contract_ready",
  source: "formal_json_act4_detail_blocks_to_act5_detail_blocks",
  purpose: "Make Act4 choices, variables, and act5_echo_hook values auditable before Act6 writing starts.",
  source_blocks: ["ACT4-WORK-L01", "ACT4-WORK-L02", "ACT4-WORK-L03", "ACT4-WORK-L04", "ACT4-WORK-L05", "ACT4-WORK-L06"],
  target_blocks: ["ACT5-WORK-B01", "ACT5-WORK-B02", "ACT5-WORK-B03", "ACT5-WORK-B04", "ACT5-WORK-B05"],
  runtime_note: "The preview currently proves the contract and data path. A later full engine pass should use these rules to select conditional echo text.",
  rules: rules.map(([source_block, source_direction, act5_echo_hook, carried_variables, target_blocks, realization]) => ({
    source_block,
    source_direction,
    act5_echo_hook,
    carried_variables,
    target_blocks,
    realization,
    route_pool_id: "POOL-R4-WORK",
    route_switch_allowed: false,
    implementation_status: "mapped_for_act5_and_act6_audit"
  }))
};

route.validation_targets = route.validation_targets || {};
route.validation_targets.act4_to_act5_carryover_rules = {
  expected_rule_count: 18,
  expected_source_blocks: 6,
  expected_target_blocks: 5,
  require_every_act4_direction_hook_mapped: true,
  require_target_blocks_exist: true,
  require_route_pool_locked: true
};

fs.writeFileSync(routeJsonPath, `${JSON.stringify(route, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  rules: route.act4_to_act5_carryover_rules.rules.length,
  source_blocks: route.act4_to_act5_carryover_rules.source_blocks.length,
  target_blocks: route.act4_to_act5_carryover_rules.target_blocks.length
}));
