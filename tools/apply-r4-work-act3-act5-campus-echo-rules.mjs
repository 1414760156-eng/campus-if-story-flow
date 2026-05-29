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

const auditDoc = "开发审计_IF第三卷社团前置与第五卷校园生态补强.md";
route.source_docs = Array.isArray(route.source_docs) ? route.source_docs : [];
if (!route.source_docs.includes(auditDoc)) {
  route.source_docs.push(auditDoc);
}

route.act3_to_act5_campus_echo_rules = {
  status: "contract_ready",
  source: "act3_activity_public_pool_and_campus_daily_memory_to_r4_work_act5",
  purpose:
    "Before expanding R4-WORK Act5, define which Act1-3 campus contacts can affect Act5 main choices, which can only appear as micro-mindset echoes, and which daily campus figures can create memory-level consequences.",
  target_route_id: "R4-WORK",
  target_route_pool_id: "POOL-R4-WORK",
  applies_before: ["act5_core_expansion", "act5_detail_blocks_rewrite", "act4_act5_full_playtest_regen"],
  target_act5_window_policy: {
    minimum_acceptable_main_windows: 12,
    ideal_main_windows_min: 12,
    ideal_main_windows_max: 15,
    first_playable_pass_allowed_windows: 12,
    blueprint_slot_count: 15,
    note:
      "Act5 is the core playable volume. Fewer than 12 main windows is only a structure draft, not a target state."
  },
  permission_layers: [
    {
      layer_id: "core_edge_character",
      display_name: "核心边缘人物",
      trigger:
        "The player clearly chose the matching Act3 activity/social direction, or reached two task-level interactions with the character.",
      act5_permission:
        "May affect a main choice, change consequence weight, add a concrete action route, or make a standing-cost heavier.",
      limit:
        "Must not replace 4XX as the main axis, must not solve the conflict for the player, and must carry the character's own task."
    },
    {
      layer_id: "micro_mindset_echo",
      display_name: "微心态软回声",
      trigger:
        "The character had an Act1-3 brush, short collaboration, group-message trace, or public-scene contact, but no route-level commitment.",
      act5_permission:
        "May appear only inside micro choices, short feedback, hesitation, wording cost, shame, comparison, or being-seen pressure.",
      limit:
        "Must not add a main route, must not change main-choice count, and must not upgrade into romance or a full support role."
    },
    {
      layer_id: "everyday_campus_memory",
      display_name: "日常校园人物记忆",
      trigger:
        "The daily campus figure appears repeatedly or controls a concrete campus procedure: teacher, assistant, print-shop owner, station worker, dorm guard, shop clerk, bookstore owner, venue manager.",
      act5_permission:
        "May remember, misread, reject, let pass, return a form, ask one extra sentence, or give an uncomfortable convenience.",
      limit:
        "Must not become a replacement confidant unless a later route explicitly grows that relationship through repeated scenes."
    },
    {
      layer_id: "background_texture",
      display_name: "背景质感",
      trigger:
        "No clear previous interaction; the person only belongs naturally to the place.",
      act5_permission:
        "May provide location texture and small realism.",
      limit:
        "Must not deliver key advice, emotional judgment, or a decisive consequence."
    }
  ],
  focus_rules: [
    {
      focus_id: "focus_hosting",
      source_window_hint: ["A3-CHOICE-01", "A3-CHOICE-02", "A3-CHOICE-03"],
      core_edge_if: ["a3_first_focus=focus_hosting", "a3_second_focus=focus_hosting", "a3_final_choice keeps hosting/activity"],
      soft_echo_if: ["met_qin_yue_once", "saw_hosting_recruit_table", "zhou_activity_circle_seen"],
      core_characters: ["秦越", "周屿活动圈"],
      soft_characters: ["许棠", "主持队同学"],
      act5_targets: ["ACT5-WORK-B01", "ACT5-WORK-B03", "ACT5-WORK-B05"],
      main_choice_permission:
        "秦越 can ask whether Lin Yizhou can be fixed into an activity flow, making work-shift choices cost an activity absence.",
      micro_echo_permission:
        "A group name, a waiting list, or a remembered hosting table may appear as a hesitation but cannot redirect the route.",
      prohibition:
        "Do not let hosting suddenly unlock Xia Zhiwei or Shen Jiahe unless their own source conditions are met."
    },
    {
      focus_id: "focus_newsroom",
      source_window_hint: ["A3-CHOICE-01", "A3-CHOICE-02", "A3-CHOICE-03"],
      core_edge_if: ["a3_first_focus=focus_newsroom", "a3_second_focus=focus_newsroom", "public_boundary>=2"],
      soft_echo_if: ["met_xu_tang_once", "public_draft_seen", "class_material_archive_seen"],
      core_characters: ["许棠"],
      soft_characters: ["辅导员", "融媒体同学", "沈嘉禾"],
      act5_targets: ["ACT5-WORK-B02", "ACT5-WORK-B03", "ACT5-WORK-B04"],
      main_choice_permission:
        "Xu Tang can affect public wording, private-room information, event material scope, or whether a conflict becomes a public narrative.",
      micro_echo_permission:
        "If only brushed, Xu Tang may trigger concern about how the matter will be retold, but cannot steer a main choice.",
      prohibition: "Xu Tang remains public-narrative pressure and is not a romance candidate in this contract."
    },
    {
      focus_id: "focus_photo",
      source_window_hint: ["A3-CHOICE-01", "A3-CHOICE-02", "A3-CHOICE-03"],
      core_edge_if: ["a3_first_focus=focus_photo", "a3_second_focus=focus_photo", "xia_zhiwei_link>=2"],
      soft_echo_if: ["xia_zhiwei_link=1", "photo_auth_seen", "back_view_or_empty_chair_seen"],
      core_characters: ["夏知微"],
      soft_characters: ["摄影社成员", "许棠"],
      act5_targets: ["ACT5-WORK-B03", "ACT5-WORK-B05"],
      main_choice_permission:
        "Xia Zhiwei can make absence, late return, image authorization, deletion, or being seen affect public consequences.",
      micro_echo_permission:
        "A photo edge, back view, or deleted image may become a micro-mindset echo without opening intimacy.",
      prohibition: "One photo brush is not enough to open romance or a full support route."
    },
    {
      focus_id: "focus_material_shared_docs",
      source_window_hint: ["A3-SHEN-N01", "A3-CHOICE-02", "A3-CHOICE-03"],
      core_edge_if: ["shen_jiahe_link>=2", "candidate_source_checked=true"],
      soft_echo_if: ["shen_jiahe_link=1", "shared_doc_seen", "format_help_once"],
      core_characters: ["沈嘉禾"],
      soft_characters: ["打印店老板", "课程同学"],
      act5_targets: ["ACT5-WORK-B02", "ACT5-WORK-B04"],
      main_choice_permission:
        "Shen Jiahe can provide a format/library/print-shop entry that clarifies boundaries without writing for him.",
      micro_echo_permission:
        "If only brushed, she may remind him that format can be checked but content and signatures cannot be outsourced.",
      prohibition: "Do not use Shen Jiahe as a moral explainer or automatic comfort source."
    },
    {
      focus_id: "focus_backstage",
      source_window_hint: ["A3-CHOICE-01", "A3-CHOICE-02", "A3-CHOICE-03"],
      core_edge_if: ["a3_first_focus=focus_backstage", "a3_second_focus=focus_backstage", "public_credit>=2"],
      soft_echo_if: ["backstage_material_seen", "program_list_help_once"],
      core_characters: ["秦越", "许棠", "活动老师"],
      soft_characters: ["活动同学", "场地管理员"],
      act5_targets: ["ACT5-WORK-B01", "ACT5-WORK-B04", "ACT5-WORK-B05"],
      main_choice_permission:
        "Backstage reliability can become extra labor: someone expects him to verify material, venue, or proof while work and C407 are also waiting.",
      micro_echo_permission:
        "Backstage objects may become reminders of being useful without becoming a new route.",
      prohibition: "Do not make reliability pure reward; it must carry time debt."
    },
    {
      focus_id: "focus_volunteer",
      source_window_hint: ["A3-CHOICE-01", "A3-CHOICE-02", "A3-CHOICE-03"],
      core_edge_if: ["a3_first_focus=focus_volunteer", "a3_second_focus=focus_volunteer", "public_credit>=2"],
      soft_echo_if: ["volunteer_once", "service_order_seen"],
      core_characters: ["志愿负责人", "活动老师"],
      soft_characters: ["普通同学", "场地管理员"],
      act5_targets: ["ACT5-WORK-B02", "ACT5-WORK-B05"],
      main_choice_permission:
        "Volunteer credit can make teachers or staff expect clearer boundaries and earlier replies.",
      micro_echo_permission:
        "May appear as small guilt about not being able to help every public thing.",
      prohibition: "Volunteer focus does not unlock a romance candidate by itself."
    },
    {
      focus_id: "focus_dorm_return",
      source_window_hint: ["A3-CHOICE-01", "A3-CHOICE-02", "A3-CHOICE-03"],
      core_edge_if: ["a3_first_focus=focus_dorm_return", "a3_final_choice keeps dorm return"],
      soft_echo_if: ["returned_once_to_4xx", "refused_long_group_once"],
      core_characters: ["唐骁", "陆沉", "周屿"],
      soft_characters: ["活动群", "普通同学"],
      act5_targets: ["ACT5-WORK-B01", "ACT5-WORK-B05"],
      main_choice_permission:
        "Dorm-return focus keeps 4XX warmer, but Act5 work choices still test whether he can preserve face-to-face explanation.",
      micro_echo_permission:
        "Activity can remain low-frequency background pressure even if it was not chosen.",
      prohibition: "Do not erase all campus-side echoes just because he returned to the dorm."
    },
    {
      focus_id: "focus_public_avoid",
      source_window_hint: ["A3-CHOICE-01", "A3-CHOICE-02", "A3-CHOICE-03"],
      core_edge_if: ["a3_first_focus=focus_public_avoid", "a3_final_choice avoids public life"],
      soft_echo_if: ["avoided_group_once", "did_not_explain_absence_once"],
      core_characters: ["4XX", "活动群"],
      soft_characters: ["老师", "同学", "店员"],
      act5_targets: ["ACT5-WORK-B03", "ACT5-WORK-B05"],
      main_choice_permission:
        "Avoidance can strengthen Act5 outflow/low-temperature choices and make silence more believable.",
      micro_echo_permission:
        "May appear as not wanting to be seen, answer, or explain.",
      prohibition: "Avoidance should not make the campus disappear; it should make the campus feel harder to face."
    }
  ],
  everyday_campus_memory_rules: [
    {
      role_id: "teacher_or_counselor",
      display_name: "陈老师 / 辅导员 / 任课老师",
      trigger: ["class_meeting_seen", "makeup_exam_notice_seen", "material_window_returned"],
      act5_targets: ["ACT5-WORK-B02", "ACT5-WORK-B04"],
      memory_actions: ["退回一栏说明", "点出本人签字", "提醒补考和材料不能互相代替"],
      micro_effects: ["rule_cost", "public_shame", "study_pressure"]
    },
    {
      role_id: "assistant_or_course_peer",
      display_name: "助教 / 课程同学",
      trigger: ["c407_project_seen", "lab_deadline_seen", "homework_split_seen"],
      act5_targets: ["ACT5-WORK-B04"],
      memory_actions: ["催一次补交", "指出接口责任", "让项目后果离开寝室群"],
      micro_effects: ["project_stability", "tang_pressure", "rule_boundary"]
    },
    {
      role_id: "work_lead_or_station_staff",
      display_name: "勤工负责人 / 驿站工作人员",
      trigger: ["work_shift_seed", "station_cash_seen", "first_evening_shift_seen"],
      act5_targets: ["ACT5-WORK-B01", "ACT5-WORK-B05"],
      memory_actions: ["把名字写进晚班表", "提醒扫码枪位置", "默认他能补一个空班"],
      micro_effects: ["work_route", "time_debt", "daily_radius_shift"]
    },
    {
      role_id: "print_shop_owner",
      display_name: "打印店老板 / 文印店员",
      trigger: ["certificate_copy_seen", "format_rework_seen", "family_statement_seen"],
      act5_targets: ["ACT5-WORK-B02"],
      memory_actions: ["认出同一份证明又改一版", "问身份证复印几份", "把队伍时间压到他面前"],
      micro_effects: ["material_embarrassment", "money_pressure", "self_signed_boundary"]
    },
    {
      role_id: "dorm_guard",
      display_name: "宿管阿姨 / 门禁值班",
      trigger: ["late_return_seen", "proxy_pickup_seen", "dorm_message_gap_seen"],
      act5_targets: ["ACT5-WORK-B01", "ACT5-WORK-B05"],
      memory_actions: ["提醒晚归登记", "问是不是又让室友带话", "把门禁记录变成外部见证"],
      micro_effects: ["dorm_misread", "route_boundary", "face_pressure"]
    },
    {
      role_id: "food_or_shop_clerk",
      display_name: "食堂窗口 / 便利店店员 / 奶茶店员",
      trigger: ["missed_meal_seen", "borrowed_charger_seen", "activity_afterparty_seen"],
      act5_targets: ["ACT5-WORK-B03", "ACT5-WORK-B05"],
      memory_actions: ["借一根充电线", "认出他总是压点吃饭", "误以为他在等私人电话"],
      micro_effects: ["wanfeng_delay", "money_pressure", "night_outside_pressure"]
    },
    {
      role_id: "bookstore_owner_or_regular",
      display_name: "书屋老板 / 店员 / 常客",
      trigger: ["bookstore_rest_seen", "quiet_study_seen", "outside_relation_seen"],
      act5_targets: ["ACT5-WORK-B03", "ACT5-WORK-B05"],
      memory_actions: ["留下一个安静座位", "认出他不是第一次躲到这里", "看见他和谁先后进门"],
      micro_effects: ["avoidance_or_outflow", "study_repair", "intimacy_pressure"]
    },
    {
      role_id: "activity_teacher_or_venue_manager",
      display_name: "活动老师 / 场地管理员",
      trigger: ["venue_key_seen", "activity_certificate_seen", "backstage_material_seen"],
      act5_targets: ["ACT5-WORK-B04", "ACT5-WORK-B05"],
      memory_actions: ["要求场地钥匙归还", "确认活动证明不能代签", "把事故责任写进名单"],
      micro_effects: ["public_credit", "activity_boundary", "time_debt"]
    }
  ]
};

route.act5_core_expansion_blueprint = {
  status: "planning_contract_ready",
  source: "act3_to_act5_campus_echo_rules",
  purpose:
    "Reserve the Act5 core-volume structure before rewriting player-facing Act5 detail blocks. The first playable rewrite may implement 12 windows, but the plan keeps 15 slots.",
  window_policy: route.act3_to_act5_campus_echo_rules.target_act5_window_policy,
  slots: [
    ["ACT5-WORK-C01", "晚班名单压到本人签字", "dorm_stand", ["work_lead_or_station_staff", "dorm_guard"], ["focus_hosting", "focus_dorm_return"]],
    ["ACT5-WORK-C02", "补考材料和说明用途", "project_or_rule", ["teacher_or_counselor", "print_shop_owner"], ["focus_material_shared_docs", "focus_newsroom"]],
    ["ACT5-WORK-C03", "4XX 是否还能当面问", "dorm_stand", ["dorm_guard", "assistant_or_course_peer"], ["focus_dorm_return", "focus_public_avoid"]],
    ["ACT5-WORK-C04", "晚风见面撞上活动散场", "intimacy_or_wanfeng", ["food_or_shop_clerk"], ["focus_photo", "focus_newsroom", "focus_hosting"]],
    ["ACT5-WORK-C05", "C407 项目规则公开化", "project_or_rule", ["assistant_or_course_peer", "activity_teacher_or_venue_manager"], ["focus_backstage", "focus_hosting"]],
    ["ACT5-WORK-C06", "家庭说明和勤工证明互相压住", "avoidance_or_outflow", ["teacher_or_counselor", "print_shop_owner"], ["focus_material_shared_docs", "focus_public_avoid"]],
    ["ACT5-WORK-C07", "活动名单问他能不能固定", "activity_or_interest", ["activity_teacher_or_venue_manager"], ["focus_hosting", "focus_backstage", "focus_volunteer"]],
    ["ACT5-WORK-C08", "寝室缺席被外人看见", "dorm_stand", ["dorm_guard", "food_or_shop_clerk"], ["focus_photo", "focus_newsroom"]],
    ["ACT5-WORK-C09", "学习债和工作债同晚结算", "project_or_rule", ["assistant_or_course_peer", "work_lead_or_station_staff"], ["focus_material_shared_docs", "focus_dorm_return"]],
    ["ACT5-WORK-C10", "公开叙事会把谁写进去", "activity_or_interest", ["teacher_or_counselor", "activity_teacher_or_venue_manager"], ["focus_newsroom", "focus_photo"]],
    ["ACT5-WORK-C11", "书屋或安静处的低声出口", "intimacy_or_wanfeng", ["bookstore_owner_or_regular"], ["focus_material_shared_docs", "focus_public_avoid"]],
    ["ACT5-WORK-C12", "固定班是否成为新半径", "avoidance_or_outflow", ["work_lead_or_station_staff", "dorm_guard", "food_or_shop_clerk"], ["focus_hosting", "focus_dorm_return"]],
    ["ACT5-WORK-C13", "外部轻松关系的第一次诱惑", "avoidance_or_outflow", ["bookstore_owner_or_regular", "food_or_shop_clerk"], ["focus_public_avoid", "focus_photo"]],
    ["ACT5-WORK-C14", "当外人面护谁一句", "dorm_stand", ["teacher_or_counselor", "activity_teacher_or_venue_manager"], ["focus_backstage", "focus_newsroom"]],
    ["ACT5-WORK-C15", "站队后的第一张回执", "project_or_rule", ["print_shop_owner", "work_lead_or_station_staff"], ["focus_material_shared_docs", "focus_dorm_return"]]
  ].map(([slot_id, title, required_window, everyday_roles, campus_focus_sources], index) => ({
    slot_id,
    order: index + 1,
    title,
    required_window,
    everyday_roles,
    campus_focus_sources,
    implementation_status: index < 12 ? "first_playable_candidate" : "reserved_expansion_candidate",
    output_requirement:
      "Each slot must include a public pressure point, a dorm echo, at least one micro-mindset layer, and one visible consequence."
  }))
};

route.validation_targets = route.validation_targets || {};
route.validation_targets.act3_to_act5_campus_echo_rules = {
  expected_focus_rule_count: 8,
  expected_permission_layer_count: 4,
  expected_everyday_memory_role_count: 8,
  require_core_edge_and_micro_echo_separation: true,
  require_no_unearned_romance_candidate: true,
  require_everyday_roles_can_create_micro_consequence: true
};
route.validation_targets.act5_core_expansion_blueprint = {
  expected_blueprint_slot_count: 15,
  expected_first_playable_candidate_count: 12,
  expected_reserved_expansion_candidate_count: 3,
  minimum_acceptable_main_windows: 12,
  ideal_main_windows_min: 12,
  ideal_main_windows_max: 15
};

fs.writeFileSync(routeJsonPath, `${JSON.stringify(route, null, 2)}\n`, "utf8");

console.log(JSON.stringify({
  focus_rules: route.act3_to_act5_campus_echo_rules.focus_rules.length,
  permission_layers: route.act3_to_act5_campus_echo_rules.permission_layers.length,
  everyday_memory_roles: route.act3_to_act5_campus_echo_rules.everyday_campus_memory_rules.length,
  blueprint_slots: route.act5_core_expansion_blueprint.slots.length,
  first_playable_candidates: route.act5_core_expansion_blueprint.slots.filter(
    (slot) => slot.implementation_status === "first_playable_candidate"
  ).length
}, null, 2));
