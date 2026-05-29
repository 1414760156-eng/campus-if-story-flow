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
const blocks = route.act5_detail_blocks ?? [];
const errors = [];

function countFeedbackPages() {
  return blocks.reduce(
    (sum, block) => sum + (block.choice_window?.directions ?? []).reduce((inner, direction) => inner + (direction.feedback_pages ?? []).length, 0),
    0
  );
}

function countMicroGroups() {
  return blocks.reduce(
    (sum, block) => sum + (block.choice_window?.directions ?? []).reduce((inner, direction) => inner + (direction.micro_groups ?? []).length, 0),
    0
  );
}

function countMicroOptions() {
  return blocks.reduce(
    (sum, block) =>
      sum +
      (block.choice_window?.directions ?? []).reduce(
        (inner, direction) => inner + (direction.micro_groups ?? []).reduce((groupSum, group) => groupSum + (group.options ?? []).length, 0),
        0
      ),
    0
  );
}

const expected = {
  blocks: 12,
  prePages: 48,
  choices: 12,
  directions: 36,
  feedbackPages: 72,
  microGroups: 48,
  microOptions: 144
};

if (blocks.length !== expected.blocks) errors.push(`block count mismatch: ${blocks.length}`);
const prePages = blocks.reduce((sum, block) => sum + (block.pages ?? []).length, 0);
if (prePages !== expected.prePages) errors.push(`pre page count mismatch: ${prePages}`);
const choices = blocks.filter((block) => block.choice_window).length;
if (choices !== expected.choices) errors.push(`choice count mismatch: ${choices}`);
const directions = blocks.reduce((sum, block) => sum + (block.choice_window?.directions ?? []).length, 0);
if (directions !== expected.directions) errors.push(`direction count mismatch: ${directions}`);
const feedbackPages = countFeedbackPages();
if (feedbackPages !== expected.feedbackPages) errors.push(`feedback page count mismatch: ${feedbackPages}`);
const microGroups = countMicroGroups();
if (microGroups !== expected.microGroups) errors.push(`micro group count mismatch: ${microGroups}`);
const microOptions = countMicroOptions();
if (microOptions !== expected.microOptions) errors.push(`micro option count mismatch: ${microOptions}`);

for (let index = 0; index < blocks.length; index += 1) {
  const expectedId = `ACT5-WORK-B${String(index + 1).padStart(2, "0")}`;
  const block = blocks[index];
  if (block.block_id !== expectedId) errors.push(`block order mismatch: expected ${expectedId}, got ${block.block_id}`);
  if (block.route_pool_id !== "POOL-R4-WORK") errors.push(`${block.block_id} route_pool changed`);
  if (block.route_switch_allowed !== false) errors.push(`${block.block_id} route switch is not closed`);
  if ((block.pages ?? []).length !== 4) errors.push(`${block.block_id} page count not 4`);
  if ((block.choice_window?.directions ?? []).length !== 3) errors.push(`${block.block_id} direction count not 3`);
  const next = index < blocks.length - 1 ? `ACT5-WORK-B${String(index + 2).padStart(2, "0")}` : "ACT6-WORK-B01";
  if (block.next_block !== next) errors.push(`${block.block_id} next_block mismatch`);
}

const playerText = JSON.stringify(blocks);
for (const term of ["秦越", "许棠", "夏知微", "沈嘉禾", "打印店老板", "宿管阿姨", "驿站", "助教", "陈老师", "书屋", "晚风"]) {
  if (!playerText.includes(term)) errors.push(`missing Act5 ecosystem term: ${term}`);
}

for (const banned of ["第五幕会", "第六幕", "Act6", "路线池", "系统", "玩家"]) {
  if (playerText.includes(banned)) errors.push(`player-facing text contains banned term: ${banned}`);
}

if (route.act5_core_expansion_blueprint?.latest_pass_applied !== "act5_core_expansion_pass_01_first_12_windows") {
  errors.push("latest Act5 expansion pass marker missing");
}

if (errors.length) {
  console.error(JSON.stringify({ ok: false, errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  blocks: blocks.length,
  prePages,
  choices,
  directions,
  feedbackPages,
  microGroups,
  microOptions,
  latest_pass: route.act5_core_expansion_blueprint.latest_pass_applied
}, null, 2));
