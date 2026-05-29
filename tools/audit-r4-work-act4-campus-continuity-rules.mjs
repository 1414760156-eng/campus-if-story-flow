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
const rules = route.act3_to_act4_campus_continuity_rules;
const blueprint = route.act4_campus_ecology_revision_blueprint;
const errors = [];

if (!rules) errors.push("missing act3_to_act4_campus_continuity_rules");
if (!blueprint) errors.push("missing act4_campus_ecology_revision_blueprint");

const expectedBlocks = [
  "ACT4-WORK-L01",
  "ACT4-WORK-L02",
  "ACT4-WORK-L03",
  "ACT4-WORK-L04",
  "ACT4-WORK-L05",
  "ACT4-WORK-L06"
];

if (rules) {
  if (rules.continuity_layers?.length !== 4) {
    errors.push(`continuity layer count mismatch: ${rules.continuity_layers?.length ?? 0}`);
  }
  if (rules.block_rules?.length !== 6) {
    errors.push(`block rule count mismatch: ${rules.block_rules?.length ?? 0}`);
  }

  const actualBlocks = new Set((rules.block_rules ?? []).map((rule) => rule.block_id));
  for (const blockId of expectedBlocks) {
    if (!actualBlocks.has(blockId)) errors.push(`missing block rule: ${blockId}`);
  }

  for (const rule of rules.block_rules ?? []) {
    if (!rule.continuity_goal) errors.push(`${rule.block_id} missing continuity_goal`);
    if (!rule.required_campus_echoes?.length) errors.push(`${rule.block_id} missing required_campus_echoes`);
    if (!rule.named_character_permissions?.length) errors.push(`${rule.block_id} missing named_character_permissions`);
    if (!rule.everyday_memory_actions?.length) errors.push(`${rule.block_id} missing everyday_memory_actions`);
    if (!rule.act5_seed_outputs?.length) errors.push(`${rule.block_id} missing act5_seed_outputs`);
  }

  if (!rules.transition_requirements?.target_block) {
    errors.push("missing transition target block");
  }
  if ((rules.transition_requirements?.must_carry ?? []).length < 6) {
    errors.push("transition must_carry has too few seeds");
  }
}

if (blueprint) {
  if (blueprint.rewrite_scope?.preserve_route_pool !== "POOL-R4-WORK") {
    errors.push("rewrite scope does not preserve POOL-R4-WORK");
  }
  if (blueprint.rewrite_scope?.preserve_direction_count !== true) {
    errors.push("rewrite scope does not preserve direction count");
  }
  if (blueprint.rewrite_passes?.length !== 3) {
    errors.push(`rewrite pass count mismatch: ${blueprint.rewrite_passes?.length ?? 0}`);
  }
  const targetBlocks = new Set(blueprint.rewrite_scope?.target_blocks ?? []);
  for (const blockId of expectedBlocks) {
    if (!targetBlocks.has(blockId)) errors.push(`blueprint missing target block: ${blockId}`);
  }
}

if (errors.length) {
  console.error(JSON.stringify({ ok: false, errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  block_rules: rules.block_rules.length,
  continuity_layers: rules.continuity_layers.length,
  rewrite_passes: blueprint.rewrite_passes.length,
  transition_must_carry: rules.transition_requirements.must_carry.length,
  target_blocks: blueprint.rewrite_scope.target_blocks.length
}, null, 2));
