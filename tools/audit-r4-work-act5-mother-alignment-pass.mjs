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
const errors = [];

function block(blockId) {
  const found = (route.act5_detail_blocks ?? []).find((candidate) => candidate.block_id === blockId);
  if (!found) throw new Error(`Missing block: ${blockId}`);
  return found;
}

function collectAct5Text() {
  const text = [];
  for (const item of route.act5_detail_blocks ?? []) {
    text.push(item.block_id, item.block_name);
    for (const page of item.pages ?? []) text.push(page.page_title, page.location, ...(page.text ?? []));
    if (item.choice_window) text.push(item.choice_window.title, item.choice_window.guide);
    for (const direction of item.choice_window?.directions ?? []) {
      text.push(direction.label, direction.description);
      for (const page of direction.feedback_pages ?? []) text.push(page.page_title, page.location, ...(page.text ?? []));
      for (const group of direction.micro_groups ?? []) {
        text.push(group.prompt, group.guide);
        for (const option of group.options ?? []) text.push(option.label, option.body);
      }
    }
  }
  return text.filter(Boolean);
}

const joined = collectAct5Text().join("\n");
const requiredFragments = [
  "楼梯口的风",
  "进门、下楼、在楼梯口多站半分钟",
  "沈嘉禾就在靠窗那排座位",
  "格式我能看，理由你自己留着写",
  "空白挂牌翻过来",
  "公开材料里的寝室号删掉",
  "便利店门口被雨照亮的一小块地",
  "C407 的异常流要过程",
  "期末前水杯碰到桌沿的第一声轻响",
  "低温地图",
  "很多人慢慢学会不等他"
];
for (const fragment of requiredFragments) {
  if (!joined.includes(fragment)) errors.push(`missing required mother-alignment fragment: ${fragment}`);
}

const touchedBlocks = ["ACT5-WORK-B01", "ACT5-WORK-B02", "ACT5-WORK-B03", "ACT5-WORK-B04", "ACT5-WORK-B05", "ACT5-WORK-B07", "ACT5-WORK-B08", "ACT5-WORK-B09", "ACT5-WORK-B10", "ACT5-WORK-B12"];
for (const blockId of touchedBlocks) {
  const text = JSON.stringify(block(blockId));
  if (!text.includes("mother_alignment_pass_01") && !["ACT5-WORK-B10"].includes(blockId)) {
    errors.push(`block missing page/micro update marker: ${blockId}`);
  }
}

const pass = route.act5_mother_alignment_passes?.find((candidate) => candidate.pass_id === "r4_work_act5_mother_alignment_pass_01");
if (!pass) errors.push("missing act5_mother_alignment_passes marker");
if (route.act5_core_expansion_blueprint?.latest_mother_alignment_pass !== "r4_work_act5_mother_alignment_pass_01") {
  errors.push("missing latest_mother_alignment_pass on blueprint");
}

const forbidden = ["母本", "横向关联", "回流层", "变量", "第六幕", "系统"];
for (const fragment of forbidden) {
  const playerTextHit = (route.act5_detail_blocks ?? []).some((item) => {
    const textUnits = [];
    for (const page of item.pages ?? []) textUnits.push(...(page.text ?? []));
    if (item.choice_window?.guide) textUnits.push(item.choice_window.guide);
    for (const direction of item.choice_window?.directions ?? []) {
      textUnits.push(direction.label, direction.description);
      for (const page of direction.feedback_pages ?? []) textUnits.push(...(page.text ?? []));
      for (const group of direction.micro_groups ?? []) {
        textUnits.push(group.prompt);
        for (const option of group.options ?? []) textUnits.push(option.label, option.body);
      }
    }
    return textUnits.some((text) => text.includes(fragment));
  });
  if (playerTextHit) errors.push(`forbidden player-facing fragment remains: ${fragment}`);
}

const counts = {
  blocks: route.act5_detail_blocks?.length ?? 0,
  prePages: (route.act5_detail_blocks ?? []).reduce((sum, item) => sum + (item.pages?.length ?? 0), 0),
  choices: (route.act5_detail_blocks ?? []).filter((item) => item.choice_window).length,
  directions: (route.act5_detail_blocks ?? []).reduce((sum, item) => sum + (item.choice_window?.directions?.length ?? 0), 0),
  feedbackPages: (route.act5_detail_blocks ?? []).reduce(
    (sum, item) => sum + (item.choice_window?.directions ?? []).reduce((inner, direction) => inner + (direction.feedback_pages?.length ?? 0), 0),
    0
  ),
  microGroups: (route.act5_detail_blocks ?? []).reduce(
    (sum, item) => sum + (item.choice_window?.directions ?? []).reduce((inner, direction) => inner + (direction.micro_groups?.length ?? 0), 0),
    0
  )
};

const expected = { blocks: 12, prePages: 48, choices: 12, directions: 36, feedbackPages: 72, microGroups: 48 };
for (const [key, expectedValue] of Object.entries(expected)) {
  if (counts[key] !== expectedValue) errors.push(`count mismatch ${key}: ${counts[key]} expected ${expectedValue}`);
}

console.log(JSON.stringify({
  ok: errors.length === 0,
  pass: "r4_work_act5_mother_alignment_pass_01",
  required_fragments: requiredFragments.length,
  touched_blocks: touchedBlocks.length,
  ...counts
}, null, 2));

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
