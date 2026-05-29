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

const passDoc = "开发审计_IF第四卷校园生态承接与第五卷入口.md";
route.source_docs = Array.isArray(route.source_docs) ? route.source_docs : [];
if (!route.source_docs.includes(passDoc)) route.source_docs.push(passDoc);

const blocks = new Map((route.act4_detail_blocks ?? []).map((block) => [block.block_id, block]));

function findPage(pageId) {
  for (const block of blocks.values()) {
    const page = (block.pages ?? []).find((candidate) => candidate.page_id === pageId);
    if (page) return page;
  }
  const transitionPage = route.act4_to_act5_transition_block?.pages?.find((candidate) => candidate.page_id === pageId);
  if (transitionPage) return transitionPage;
  throw new Error(`Missing page: ${pageId}`);
}

function appendText(pageId, paragraph, update = {}) {
  const page = findPage(pageId);
  page.text = Array.isArray(page.text) ? page.text : [];
  if (!page.text.includes(paragraph)) page.text.push(paragraph);
  page.updates = { ...(page.updates ?? {}), ...update };
}

function mergeBlockFields(blockId, fields) {
  const block = blocks.get(blockId);
  if (!block) throw new Error(`Missing block: ${blockId}`);
  for (const [key, values] of Object.entries(fields)) {
    block[key] = Array.from(new Set([...(block[key] ?? []), ...values]));
  }
}

const paragraphUpdates = [
  [
    "ACT4-WORK-L01-P2-S01",
    "楼道里还有人往下搬活动立牌，纸板边角扫过门框。秦越在活动群里问暑假前的物资清点谁还能到场，消息很快被更多离校照片顶上去。林亦舟没有点开，只看见“清点”两个字从通知栏里露了一下。",
    { activity_unread_seed: true, qin_yue_soft_echo: true }
  ],
  [
    "ACT4-WORK-L01-P2-S02",
    "晚风截图下面还压着一条摄影社提醒，夏知微问上次活动图包里有没有人不愿意露脸。许棠也在融媒体群里补了一句，寝室号和私人信息不要写进公开稿。两条消息都不急，却像把校园里的热闹也留在桌边。",
    { photo_authorization_soft_echo: true, public_material_soft_echo: true }
  ],
  [
    "ACT4-WORK-L01-P2-S03",
    "楼下宿管阿姨在群里发了暑假留校登记提醒，说钥匙、门禁和晚归都按本人记录。林亦舟看见那句“本人记录”，再看勤工表，忽然觉得留在学校也不是从人群里消失。",
    { dorm_guard_memory_seed: true, self_record_boundary: true }
  ],
  [
    "ACT4-WORK-L02-P2-S03",
    "收银员把黑笔扫过去，抬头看了他一眼：“你们学校又办活动啊？这两天好多人买水。”林亦舟嗯了一声，没有解释自己不是去活动现场。他把零钱塞回口袋时，兼职表下面旧胶带翘起一点，像有人反复把同一个位置撕开又贴回去。",
    { shop_clerk_memory_seed: true, commercial_street_memory: true }
  ],
  [
    "ACT4-WORK-L02-P2-S04",
    "活动群也在这时跳了一下。秦越问周二晚谁能补流程，许棠在后面发了材料命名格式。林亦舟看着父亲、母亲、晚风和活动群四个入口挤在一起，第一次觉得“不去”也要排进时间表里。",
    { activity_time_conflict_seed: true, xu_tang_soft_echo: true }
  ],
  [
    "ACT4-WORK-L03-P2-S01",
    "小摊老板认得校门口这类短停的家长，递水时多看了父亲手里的黑塑料袋一眼，没有多问。林亦舟接过水，瓶身冰得发潮，像替他说完了那句“不用那么赶”。",
    { station_vendor_memory_seed: true }
  ],
  [
    "ACT4-WORK-L03-P2-S03",
    "登记台旁贴着暑期勤工轮岗表，最下面一栏被圆珠笔改过。值班同学说下周明德楼窗口缺人，语气像只是通知，不像邀请。林亦舟把小票夹好，忽然明白父亲给的钱最后还是会回到这些窗口和表格里。",
    { library_work_desk_memory_seed: true, campus_receipt_memory_seed: true }
  ],
  [
    "ACT4-WORK-L04-P2-S02",
    "共享文档里有人转了沈嘉禾的附件顺序提醒：文件名、页码、本人说明分开，不替别人写。那行字被截图转了好几次，最后落到林亦舟手机里时，已经不像提醒，更像一道边界。",
    { shen_jiahe_format_echo_seed: true, shared_doc_boundary_seed: true }
  ],
  [
    "ACT4-WORK-L04-P2-S04",
    "老板认出他上午来过一次，没说破，只把身份证复印件、补考目录和勤工申请分成三摞：“别夹混了，窗口不认你说‘都在里面’。”林亦舟把三摞纸重新拍齐，指腹蹭到一点新出的墨。",
    { print_shop_owner_memory_seed: true, material_stack_boundary: true }
  ],
  [
    "ACT4-WORK-L05-P2-S01",
    "助教从后门进来收临时名单，看到有人还在传资料包链接，只敲了敲门框。那一下不重，却让几部手机同时暗下去。林亦舟把唐骁的便签压平，知道这一次补考不是寝室里互相提醒就能过。",
    { assistant_rule_memory_seed: true, teacher_gaze_seed: true }
  ],
  [
    "ACT4-WORK-L05-P2-S02",
    "陈老师翻到活动证明和证书报名那一页时，特意停了一下：“公开材料也一样，谁的名字、谁的照片、谁的签字，先问本人。”周屿的糖纸攥得更紧，林亦舟想起夏知微那句不能露脸的提醒，没有抬头。",
    { chen_teacher_rule_seed: true, photo_boundary_soft_echo: true }
  ],
  [
    "ACT4-WORK-L05-P2-S03",
    "驿站阿姨把包裹递出来，又把面单上的错字念了一遍：“青枫局，听着像单位。”她笑完才补一句：“留校的自己签，别让室友顺手拿。”林亦舟把笔帽拔开，签名比平时慢了一点。",
    { station_staff_memory_seed: true, proxy_pickup_boundary_seed: true }
  ],
  [
    "ACT4-WORK-L06-P2-S01",
    "页面最下方挤着三条待办：活动证明、证书报名、补考材料回执。它们缩在小小的红点后面，谁也没出声，倒像都在等他先碰哪一个。林亦舟把鼠标从“兼职 / 留校说明”挪到紧急联系人，又停回去。陆沉那边删掉半行字，唐骁把证书材料夹进透明袋，周屿从书里抽出小舞台回执，纸角刮过桌面。",
    { multi_form_convergence_seed: true, activity_certificate_trace_seed: true }
  ],
  [
    "ACT4-WORK-L06-P2-S03",
    "队伍旁边有人翻活动回执，有人补证书报名复印件，也有人低声问能不能让同学代交。辅导员没有抬高声音，只把那张空表往回推：“能帮忙排队，不能帮忙确认。”",
    { counselor_signature_rule_seed: true, activity_receipt_trace_seed: true }
  ],
  [
    "ACT4-WORK-L06-P2-S04",
    "透明文件夹往下压住的不只是去向截图。活动群未读、打印店小票、补考座位表、门禁提醒和证件复印件都在里面各占一角。林亦舟把文件夹扣上时，听见塑料扣轻轻响了一声，像这些东西终于被迫合在一起。",
    { transparent_folder_seed: true, act5_multi_relation_pressure_seed: true }
  ],
  [
    "ACT4-WORK-L06-TO-ACT5-S01",
    "文件夹底下还夹着打印店小票，老板在背面顺手写了“身份证复印两份”。那几个字没有章，也不算证明，却比很多提醒更具体。",
    { print_shop_owner_memory_seed: true }
  ],
  [
    "ACT4-WORK-L06-TO-ACT5-S02",
    "活动群的未读没有清空。秦越问物资清点谁交接，许棠把公开材料命名格式又发了一遍；摄影社那边只剩一条照片授权提醒。它们都没有催林亦舟，可每一条都像知道他还在学校。",
    { activity_unread_seed: true, public_material_soft_echo: true, photo_authorization_soft_echo: true }
  ],
  [
    "ACT4-WORK-L06-TO-ACT5-S03",
    "楼下宿管阿姨正把晚归登记本翻到新的一页，看到他手里的复印件，只说：“又是本人签字？”林亦舟点了一下头。她没有再问，反而让这句省下来的追问更重。",
    { dorm_guard_memory_seed: true, self_signature_boundary_seed: true }
  ]
];

for (const [pageId, paragraph, update] of paragraphUpdates) appendText(pageId, paragraph, update);

mergeBlockFields("ACT4-WORK-L01", {
  must_record: ["activity_unread_seed", "photo_authorization_soft_echo", "public_material_soft_echo", "dorm_guard_memory_seed"]
});
mergeBlockFields("ACT4-WORK-L02", {
  must_record: ["shop_clerk_memory_seed", "activity_time_conflict_seed", "xu_tang_soft_echo"]
});
mergeBlockFields("ACT4-WORK-L03", {
  must_record: ["station_vendor_memory_seed", "campus_receipt_memory_seed", "library_work_desk_memory_seed"]
});
mergeBlockFields("ACT4-WORK-L04", {
  must_record: ["shen_jiahe_format_echo_seed", "print_shop_owner_memory_seed", "shared_doc_boundary_seed"]
});
mergeBlockFields("ACT4-WORK-L05", {
  must_record: ["assistant_rule_memory_seed", "chen_teacher_rule_seed", "station_staff_memory_seed", "photo_boundary_soft_echo"]
});
mergeBlockFields("ACT4-WORK-L06", {
  must_record: ["multi_form_convergence_seed", "counselor_signature_rule_seed", "transparent_folder_seed", "act5_multi_relation_pressure_seed"]
});

route.act4_campus_ecology_revision_blueprint = {
  ...(route.act4_campus_ecology_revision_blueprint ?? {}),
  latest_pass_applied: "act4_pass_01_surface_continuity",
  latest_pass_status: "formal_json_text_updated",
  latest_pass_note:
    "ACT4-WORK-L01 to L06 now carry visible campus/social echoes and everyday campus memory without changing direction count or route pool."
};

route.validation_targets = route.validation_targets || {};
route.validation_targets.act4_pass_01_surface_continuity = {
  expected_updated_act4_blocks: 6,
  expected_transition_pages_touched: 3,
  require_no_direction_count_change: true,
  require_route_pool_preserved: "POOL-R4-WORK",
  required_search_terms: ["秦越", "许棠", "夏知微", "沈嘉禾", "打印店", "宿管阿姨", "驿站阿姨", "助教", "陈老师"]
};

fs.writeFileSync(routeJsonPath, `${JSON.stringify(route, null, 2)}\n`, "utf8");

console.log(JSON.stringify({
  updated_paragraphs: paragraphUpdates.length,
  act4_blocks_touched: 6,
  transition_pages_touched: 3,
  latest_pass: route.act4_campus_ecology_revision_blueprint.latest_pass_applied
}, null, 2));
