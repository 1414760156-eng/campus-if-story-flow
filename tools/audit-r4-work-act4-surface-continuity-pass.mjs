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
const act4Blocks = route.act4_detail_blocks ?? [];
const expectedBlocks = [
  "ACT4-WORK-L01",
  "ACT4-WORK-L02",
  "ACT4-WORK-L03",
  "ACT4-WORK-L04",
  "ACT4-WORK-L05",
  "ACT4-WORK-L06"
];

for (const blockId of expectedBlocks) {
  const block = act4Blocks.find((candidate) => candidate.block_id === blockId);
  if (!block) {
    errors.push(`missing block ${blockId}`);
    continue;
  }
  if (block.route_pool_id !== "POOL-R4-WORK") errors.push(`${blockId} route_pool changed`);
  if ((block.choice_window?.directions ?? []).length !== 3) {
    errors.push(`${blockId} direction count changed: ${(block.choice_window?.directions ?? []).length}`);
  }
  if ((block.pages ?? []).length !== 4) errors.push(`${blockId} page count changed: ${(block.pages ?? []).length}`);
}

const allAct4PlayerText = JSON.stringify({
  act4_detail_blocks: act4Blocks,
  act4_to_act5_transition_block: route.act4_to_act5_transition_block
});

const requiredTerms = route.validation_targets?.act4_pass_01_surface_continuity?.required_search_terms ?? [
  "秦越",
  "许棠",
  "夏知微",
  "沈嘉禾",
  "打印店",
  "宿管阿姨",
  "驿站阿姨",
  "助教",
  "陈老师"
];

for (const term of requiredTerms) {
  if (!allAct4PlayerText.includes(term)) errors.push(`missing surface continuity term: ${term}`);
}

const blueprint = route.act4_campus_ecology_revision_blueprint;
if (blueprint?.latest_pass_applied !== "act4_pass_01_surface_continuity") {
  errors.push("latest pass marker missing");
}

const transitionPages = route.act4_to_act5_transition_block?.pages ?? [];
if (transitionPages.length !== 3) errors.push(`transition page count mismatch: ${transitionPages.length}`);
for (const term of ["打印店小票", "活动群", "宿管阿姨"]) {
  if (!JSON.stringify(transitionPages).includes(term)) errors.push(`transition missing term: ${term}`);
}

if (errors.length) {
  console.error(JSON.stringify({ ok: false, errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  act4_blocks_checked: expectedBlocks.length,
  direction_count_each: 3,
  page_count_each: 4,
  required_terms: requiredTerms.length,
  transition_pages_checked: transitionPages.length,
  latest_pass: blueprint.latest_pass_applied
}, null, 2));
