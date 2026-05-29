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
const rules = route.act3_to_act5_campus_echo_rules;
const blueprint = route.act5_core_expansion_blueprint;
const errors = [];

if (!rules) errors.push("missing act3_to_act5_campus_echo_rules");
if (!blueprint) errors.push("missing act5_core_expansion_blueprint");

if (rules) {
  if (rules.permission_layers?.length !== 4) {
    errors.push(`permission layer count mismatch: ${rules.permission_layers?.length ?? 0}`);
  }
  if (rules.focus_rules?.length !== 8) {
    errors.push(`focus rule count mismatch: ${rules.focus_rules?.length ?? 0}`);
  }
  if (rules.everyday_campus_memory_rules?.length !== 8) {
    errors.push(`everyday memory role count mismatch: ${rules.everyday_campus_memory_rules?.length ?? 0}`);
  }

  const requiredLayers = new Set([
    "core_edge_character",
    "micro_mindset_echo",
    "everyday_campus_memory",
    "background_texture"
  ]);
  for (const layer of rules.permission_layers ?? []) requiredLayers.delete(layer.layer_id);
  if (requiredLayers.size) errors.push(`missing permission layers: ${[...requiredLayers].join(", ")}`);

  for (const focus of rules.focus_rules ?? []) {
    if (!focus.focus_id) errors.push("focus rule missing focus_id");
    if (!focus.core_edge_if?.length) errors.push(`${focus.focus_id} missing core_edge_if`);
    if (!focus.soft_echo_if?.length) errors.push(`${focus.focus_id} missing soft_echo_if`);
    if (!focus.act5_targets?.length) errors.push(`${focus.focus_id} missing act5_targets`);
    if (!focus.main_choice_permission) errors.push(`${focus.focus_id} missing main_choice_permission`);
    if (!focus.micro_echo_permission) errors.push(`${focus.focus_id} missing micro_echo_permission`);
  }

  for (const role of rules.everyday_campus_memory_rules ?? []) {
    if (!role.role_id) errors.push("everyday role missing role_id");
    if (!role.trigger?.length) errors.push(`${role.role_id} missing trigger`);
    if (!role.memory_actions?.length) errors.push(`${role.role_id} missing memory_actions`);
    if (!role.micro_effects?.length) errors.push(`${role.role_id} missing micro_effects`);
  }
}

if (blueprint) {
  const slots = blueprint.slots ?? [];
  if (slots.length !== 15) errors.push(`blueprint slot count mismatch: ${slots.length}`);
  const firstPlayable = slots.filter((slot) => slot.implementation_status === "first_playable_candidate").length;
  const reserved = slots.filter((slot) => slot.implementation_status === "reserved_expansion_candidate").length;
  if (firstPlayable !== 12) errors.push(`first playable candidate count mismatch: ${firstPlayable}`);
  if (reserved !== 3) errors.push(`reserved expansion candidate count mismatch: ${reserved}`);
  for (const slot of slots) {
    if (!slot.slot_id || !slot.title) errors.push("blueprint slot missing id/title");
    if (!slot.everyday_roles?.length) errors.push(`${slot.slot_id} missing everyday_roles`);
    if (!slot.campus_focus_sources?.length) errors.push(`${slot.slot_id} missing campus_focus_sources`);
    if (!slot.required_window) errors.push(`${slot.slot_id} missing required_window`);
  }
}

if (errors.length) {
  console.error(JSON.stringify({ ok: false, errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  focus_rules: rules.focus_rules.length,
  permission_layers: rules.permission_layers.length,
  everyday_memory_roles: rules.everyday_campus_memory_rules.length,
  blueprint_slots: blueprint.slots.length,
  first_playable_candidates: blueprint.slots.filter((slot) => slot.implementation_status === "first_playable_candidate").length,
  reserved_expansion_candidates: blueprint.slots.filter((slot) => slot.implementation_status === "reserved_expansion_candidate").length
}, null, 2));
