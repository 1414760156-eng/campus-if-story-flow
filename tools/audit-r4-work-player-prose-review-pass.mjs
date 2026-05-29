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

function findAct4Page(pageId) {
  for (const block of route.act4_detail_blocks ?? []) {
    const page = (block.pages ?? []).find((candidate) => candidate.page_id === pageId);
    if (page) return page;
  }
  throw new Error(`Missing page: ${pageId}`);
}

function collectPlayerText() {
  const texts = [];
  for (const block of route.act4_detail_blocks ?? []) {
    for (const page of block.pages ?? []) texts.push(...(page.text ?? []));
    if (block.choice_window?.guide) texts.push(block.choice_window.guide);
    for (const direction of block.choice_window?.directions ?? []) {
      texts.push(direction.label, direction.description);
      for (const page of direction.feedback_pages ?? []) texts.push(...(page.text ?? []));
      for (const group of direction.micro_choices ?? []) {
        texts.push(group.prompt);
        for (const option of group.options ?? []) texts.push(option.label);
      }
    }
  }
  for (const page of route.act4_to_act5_transition_block?.pages ?? []) texts.push(...(page.text ?? []));
  for (const block of route.act5_detail_blocks ?? []) {
    for (const page of block.pages ?? []) texts.push(...(page.text ?? []));
    if (block.choice_window?.guide) texts.push(block.choice_window.guide);
    for (const direction of block.choice_window?.directions ?? []) {
      texts.push(direction.label, direction.description);
      for (const page of direction.feedback_pages ?? []) texts.push(...(page.text ?? []));
      for (const group of direction.micro_choices ?? []) {
        texts.push(group.prompt);
        for (const option of group.options ?? []) texts.push(option.label);
      }
    }
  }
  return texts.filter(Boolean);
}

const l06 = findAct4Page("ACT4-WORK-L06-P2-S01");
const l06Joined = (l06.text ?? []).join("\n");
for (const required of ["4XX 里短短静了一下", "纸角刮过桌面", "三个红点还亮着"]) {
  if (!l06Joined.includes(required)) errors.push(`L06 prose missing scene marker: ${required}`);
}

const bannedFragments = [
  "每个人都有要交的东西",
  "只有林亦舟这张表把兼职、留校和家里压力同时摊开",
  "页面下方还有活动证明",
  "发现暑假去向不是一张单独的表",
  "消息发出去后，最先回他的不是安慰",
  "安静不是事情结束，而是每一边都知道不能再把他当作默认空格",
  "这句话没有把事情变轻，只把第一块空白填上",
  "没有替他解释“",
  "那天以后，和"
];
const allText = collectPlayerText();
for (const fragment of bannedFragments) {
  if (allText.some((text) => text.includes(fragment))) errors.push(`banned explanatory/template fragment remains: ${fragment}`);
}

const duplicateMap = new Map();
for (const text of allText) {
  if (text.length < 16) continue;
  duplicateMap.set(text, (duplicateMap.get(text) ?? 0) + 1);
}
const duplicates = [...duplicateMap.entries()]
  .filter(([, count]) => count > 1)
  .filter(([text]) => !text.startsWith("林亦舟选了"));
if (duplicates.length > 0) {
  errors.push(`duplicate player prose remains: ${duplicates.slice(0, 5).map(([text, count]) => `${count}x ${text}`).join(" | ")}`);
}

if (!route.player_prose_review_passes?.some((pass) => pass.pass_id === "r4_work_player_prose_review_pass_01")) {
  errors.push("missing player prose review pass marker");
}

console.log(JSON.stringify({
  ok: errors.length === 0,
  l06_paragraphs: l06.text?.length ?? 0,
  checked_text_units: allText.length,
  duplicate_candidates: duplicates.length,
  pass: "r4_work_player_prose_review_pass_01"
}, null, 2));

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
