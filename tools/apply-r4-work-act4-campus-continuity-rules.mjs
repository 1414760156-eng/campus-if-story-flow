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

const continuityDoc = "开发审计_IF第四卷校园生态承接与第五卷入口.md";
route.source_docs = Array.isArray(route.source_docs) ? route.source_docs : [];
if (!route.source_docs.includes(continuityDoc)) {
  route.source_docs.push(continuityDoc);
}

route.act3_to_act4_campus_continuity_rules = {
  status: "contract_ready",
  source: "act3_campus_echo_to_act4_work_life_radius",
  purpose:
    "Make Act4 carry Act1-3 campus/social traces before Act5 expansion. Act4 may still be the work route, but it must prove that club contacts, teachers, shops, station staff, dorm guards, and campus memory did not disappear.",
  target_route_id: "R4-WORK",
  target_route_pool_id: "POOL-R4-WORK",
  applies_before: [
    "act4_detail_blocks_rewrite",
    "act4_to_act5_transition_rewrite",
    "act5_core_expansion"
  ],
  continuity_layers: [
    {
      layer_id: "act3_selected_core_edge_carry",
      display_name: "第三卷已选择方向的核心边缘人物承接",
      act4_permission:
        "May appear as a real obligation, unread message, time conflict, material request, or named person who can alter an Act4 micro-choice or feedback weight.",
      act4_limit:
        "Must not steal the R4-WORK route. Their role is to show what work displaces, not to reopen every route."
    },
    {
      layer_id: "act3_brushed_soft_echo_carry",
      display_name: "第一至三幕照面人物的微心态承接",
      act4_permission:
        "May appear as a remembered name, group notification, photo edge, shared-doc reminder, or short hesitation.",
      act4_limit:
        "Only micro-mindset or short feedback. No new main route, no sudden romance candidate, no key advice."
    },
    {
      layer_id: "everyday_campus_memory_carry",
      display_name: "日常校园人物记忆承接",
      act4_permission:
        "Teachers, print-shop owner, station staff, dorm guard, shop clerks, and food-window staff may remember, misread, return, let pass, or ask one uncomfortable extra question.",
      act4_limit:
        "They create concrete pressure and texture; they do not become replacement confidants."
    },
    {
      layer_id: "act5_entry_seed",
      display_name: "第五卷入口种子",
      act4_permission:
        "Every Act4 block should leave at least one reusable Act5 seed: person, object, message, proof, receipt, list, signature, or public memory.",
      act4_limit:
        "No player-facing development language. Use concrete objects and actions only."
    }
  ],
  block_rules: [
    {
      block_id: "ACT4-WORK-L01",
      block_name: "空宿舍与暑假分流",
      continuity_goal:
        "When the dorm empties, previous campus contacts should not vanish; they should become unread group traces beside family, Wanfeng, and the work table.",
      required_campus_echoes: ["activity_group_unread", "photo_or_public_material_trace", "dorm_guard_or_shop_clerk_memory"],
      named_character_permissions: [
        {
          character: "秦越 / 活动群",
          permission: "If Act3 activity was chosen, may ask whether Lin Yizhou can still help a summer activity handoff."
        },
        {
          character: "夏知微 / 许棠",
          permission: "If brushed only, may remain as photo authorization or public-material notification, not a main choice."
        }
      ],
      everyday_memory_actions: ["宿管阿姨看见行李和留校登记", "便利店店员认出他又买常温水和黑笔"],
      act5_seed_outputs: ["dorm_absence_seed", "activity_unread_seed", "shop_clerk_memory_seed"]
    },
    {
      block_id: "ACT4-WORK-L02",
      block_name: "生活费与退改规则",
      continuity_goal:
        "Ticket cost, Guanggu time, and family transfer should also touch public activity time and ordinary campus commerce.",
      required_campus_echoes: ["public_time_conflict", "commercial_street_memory", "newsroom_or_hosting_soft_echo"],
      named_character_permissions: [
        {
          character: "许棠",
          permission: "If newsroom was selected, may ask about public-material wording or event timing as a real conflict."
        },
        {
          character: "秦越",
          permission: "If hosting/activity was selected, may remain as a schedule question pressing against the ticket choice."
        }
      ],
      everyday_memory_actions: ["便利店兼职表换新纸", "店员或收银台让工作可能性变成看得见的纸"],
      act5_seed_outputs: ["money_pressure_visible", "public_time_debt", "commercial_clerk_memory_seed"]
    },
    {
      block_id: "ACT4-WORK-L03",
      block_name: "站外半小时与家庭现金",
      continuity_goal:
        "Family cash should not isolate the story from campus; the money must return to school through receipts, registration desks, meals, and work windows.",
      required_campus_echoes: ["station_vendor_memory", "library_or_work_desk_memory", "meal_receipt_object"],
      named_character_permissions: [
        {
          character: "沈嘉禾",
          permission: "If material/shared-doc source exists, may remain as a later format boundary, not appear in the family meeting itself."
        },
        {
          character: "陆沉",
          permission: "May keep the work-money mirror, but not absorb all work pressure into roommate dialogue."
        }
      ],
      everyday_memory_actions: ["站外小摊和小面馆承接现金尴尬", "图书馆登记台或食堂小票把钱带回校园"],
      act5_seed_outputs: ["family_cash_receipt_seed", "work_money_mirror_seed", "campus_receipt_memory_seed"]
    },
    {
      block_id: "ACT4-WORK-L04",
      block_name: "补考与打印店",
      continuity_goal:
        "This block is the key Act4 bridge for teachers, print-shop memory, Shen Jiahe, and study/work material boundaries.",
      required_campus_echoes: ["teacher_notice", "print_shop_owner_memory", "shared_doc_or_format_boundary"],
      named_character_permissions: [
        {
          character: "沈嘉禾",
          permission: "If shen_jiahe_link is present, may appear as format/shared-doc boundary; if not, only as soft memory of format rules."
        },
        {
          character: "唐骁",
          permission: "May provide organized material, but teachers and print-shop staff must also carry pressure."
        }
      ],
      everyday_memory_actions: ["打印店老板认出补考资料和勤工材料一起打", "老师或辅导员把本人确认讲成规则"],
      act5_seed_outputs: ["print_shop_owner_memory_seed", "teacher_rule_seed", "shen_jiahe_format_echo_seed"]
    },
    {
      block_id: "ACT4-WORK-L05",
      block_name: "返校前两间教室与座位表",
      continuity_goal:
        "Return-to-school classrooms should turn previous public visibility into a controlled campus gaze: teacher, classmates, seat list, package pickup, and shop table all remember him differently.",
      required_campus_echoes: ["teacher_or_classmate_gaze", "seat_list_public_visibility", "package_or_shop_memory"],
      named_character_permissions: [
        {
          character: "许棠 / 夏知微",
          permission: "If public narrative or photo source exists, may echo through name visibility or image boundary, not as sudden comfort."
        },
        {
          character: "许澈",
          permission: "Only as distant outflow premonition or old work-lanyard trace before hard 5X permission."
        }
      ],
      everyday_memory_actions: ["陈老师的班会规则产生外部边界", "快递站或便利店熟脸看见他的返校物件"],
      act5_seed_outputs: ["seat_visibility_seed", "classroom_rule_seed", "package_pickup_memory_seed"]
    },
    {
      block_id: "ACT4-WORK-L06",
      block_name: "联系人与签字",
      continuity_goal:
        "The final Act4 block must gather work, family, dorm, activity, courses, certificates, and campus memory into the transparent folder that Act5 will open.",
      required_campus_echoes: ["counselor_signature_rule", "activity_or_certificate_trace", "dorm_table_object_convergence"],
      named_character_permissions: [
        {
          character: "秦越 / 许棠 / 沈嘉禾 / 夏知微",
          permission: "Only characters with Act3 permission may become explicit pending obligations; brushed contacts remain as material/photo/group traces."
        },
        {
          character: "4XX",
          permission: "The dorm keeps the shared table and objects, but cannot erase outside-campus obligations."
        }
      ],
      everyday_memory_actions: ["辅导员或窗口老师坚持本人签字", "宿管或门禁记录留校/晚归边界"],
      act5_seed_outputs: ["transparent_folder_seed", "self_signature_boundary_seed", "act5_multi_relation_pressure_seed"]
    }
  ],
  transition_requirements: {
    target_block: "ACT4-WORK-L06-TO-ACT5-WORK-B01",
    must_carry: [
      "transparent_folder_seed",
      "self_signature_boundary_seed",
      "teacher_rule_seed",
      "print_shop_owner_memory_seed",
      "activity_unread_seed",
      "work_shift_seed",
      "dorm_absence_seed"
    ],
    player_facing_rule:
      "The transition should show time passing through objects, messages, receipts, signatures, and campus memory. It must not explain the contract as a system summary."
  }
};

route.act4_campus_ecology_revision_blueprint = {
  status: "planning_contract_ready",
  source: "act3_to_act4_campus_continuity_rules",
  purpose:
    "Guide the next rewrite of ACT4-WORK-L01 to L06 before Act5 expansion. The goal is continuity and richer campus memory, not adding new route branches.",
  rewrite_scope: {
    target_blocks: ["ACT4-WORK-L01", "ACT4-WORK-L02", "ACT4-WORK-L03", "ACT4-WORK-L04", "ACT4-WORK-L05", "ACT4-WORK-L06"],
    preserve_direction_count: true,
    preserve_route_pool: "POOL-R4-WORK",
    player_text_style: "Chinese novelist; concrete actions, no development labels"
  },
  per_block_minimums: {
    campus_echoes_per_block: 2,
    everyday_memory_action_per_block: 1,
    act5_seed_outputs_per_block: 2,
    micro_mindset_soft_echo_per_block: 1
  },
  rewrite_passes: [
    {
      pass_id: "act4_pass_01_surface_continuity",
      goal: "Add third-volume social/campus traces into existing Act4 pages and feedback without changing route logic.",
      output: "Revised act4_detail_blocks text fields."
    },
    {
      pass_id: "act4_pass_02_micro_mindset_permissions",
      goal: "Add or revise micro choices so selected core-edge contacts can weigh more than brushed contacts.",
      output: "Micro choices tagged by core-edge, soft echo, and everyday memory."
    },
    {
      pass_id: "act4_pass_03_transition_rebuild",
      goal: "Rewrite the Act4->Act5 transition so Act5 opens the transparent folder with work, campus, and social obligations already inside.",
      output: "Revised act4_to_act5_transition_block."
    }
  ]
};

route.validation_targets = route.validation_targets || {};
route.validation_targets.act3_to_act4_campus_continuity_rules = {
  expected_block_rule_count: 6,
  expected_continuity_layer_count: 4,
  require_each_block_has_campus_echoes: true,
  require_each_block_has_everyday_memory_action: true,
  require_each_block_outputs_act5_seed: true,
  require_transition_requirements: true
};
route.validation_targets.act4_campus_ecology_revision_blueprint = {
  expected_rewrite_pass_count: 3,
  expected_target_block_count: 6,
  preserve_route_pool: "POOL-R4-WORK",
  preserve_direction_count: true
};

fs.writeFileSync(routeJsonPath, `${JSON.stringify(route, null, 2)}\n`, "utf8");

console.log(JSON.stringify({
  block_rules: route.act3_to_act4_campus_continuity_rules.block_rules.length,
  continuity_layers: route.act3_to_act4_campus_continuity_rules.continuity_layers.length,
  rewrite_passes: route.act4_campus_ecology_revision_blueprint.rewrite_passes.length,
  transition_requirements: route.act3_to_act4_campus_continuity_rules.transition_requirements.must_carry.length
}, null, 2));
