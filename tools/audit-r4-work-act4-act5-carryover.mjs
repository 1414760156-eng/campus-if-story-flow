import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const routeJsonPath = path.join(
  projectRoot,
  "docs",
  "剧情小说母版_v4.0",
  "开发数据_IF剧情页级JSON_R4-WORK_v1.json"
);

const route = JSON.parse(fs.readFileSync(routeJsonPath, "utf8").replace(/^\uFEFF/, ""));
const act4Blocks = route.act4_detail_blocks || [];
const act5Blocks = route.act5_detail_blocks || [];
const carryover = route.act4_to_act5_carryover_rules;

assert.ok(carryover, "act4_to_act5_carryover_rules should exist");
assert.equal(carryover.rules.length, 18, "carryover should map all 18 Act4 directions");

const act5BlockIds = new Set(act5Blocks.map((block) => block.block_id));
const ruleByHook = new Map(carryover.rules.map((rule) => [rule.act5_echo_hook, rule]));

let act4DirectionCount = 0;
for (const block of act4Blocks) {
  for (const direction of block.choice_window.directions) {
    act4DirectionCount += 1;
    const hook = direction.variable_delta?.act5_echo_hook;
    assert.ok(hook, `${direction.direction_id} should expose act5_echo_hook`);
    assert.ok(ruleByHook.has(hook), `${hook} should have a carryover rule`);
    const rule = ruleByHook.get(hook);
    assert.equal(rule.source_block, block.block_id, `${hook} source block mismatch`);
    assert.equal(rule.source_direction, direction.direction, `${hook} source direction mismatch`);
    assert.equal(rule.route_pool_id, "POOL-R4-WORK", `${hook} should stay in R4-WORK pool`);
    assert.equal(rule.route_switch_allowed, false, `${hook} should not switch route`);
    assert.ok(rule.carried_variables.length > 0, `${hook} should carry variables`);
    assert.ok(rule.target_blocks.length > 0, `${hook} should target at least one Act5 block`);
    for (const target of rule.target_blocks) {
      assert.ok(act5BlockIds.has(target), `${hook} target ${target} should exist`);
    }
  }
}

assert.equal(act4DirectionCount, 18, "Act4 should expose 18 directions");

const l06 = act4Blocks.find((block) => block.block_id === "ACT4-WORK-L06");
const b01 = act5Blocks.find((block) => block.block_id === "ACT5-WORK-B01");
assert.equal(l06.next_block, "ACT5-WORK-B01", "L06 should point to B01");
assert.equal(b01.previous_block, "ACT4-WORK-L06", "B01 should point back to L06");

const act5RequiredWindows = new Set();
const act6Hooks = new Set();
for (const block of act5Blocks) {
  for (const direction of block.choice_window.directions) {
    assert.equal(direction.route_effect.route_pool_id, "POOL-R4-WORK", `${direction.direction_id} pool mismatch`);
    assert.equal(direction.route_effect.route_switch_allowed, false, `${direction.direction_id} should not switch route`);
    assert.ok(direction.variable_delta?.act5_required_windows_seen, `${direction.direction_id} should record required Act5 window`);
    assert.ok(direction.variable_delta?.act6_echo_hook, `${direction.direction_id} should record Act6 echo hook`);
    act5RequiredWindows.add(direction.variable_delta.act5_required_windows_seen);
    act6Hooks.add(direction.variable_delta.act6_echo_hook);
  }
}

assert.deepEqual([...act5RequiredWindows].sort(), [
  "activity_or_interest",
  "avoidance_or_outflow",
  "dorm_stand",
  "intimacy_or_wanfeng",
  "project_or_rule",
]);
assert.equal(act6Hooks.size, 15, "Act5 should expose 15 Act6 echo hooks");

console.log(JSON.stringify({
  act4_directions_checked: act4DirectionCount,
  carryover_rules_checked: carryover.rules.length,
  act5_blocks_checked: act5Blocks.length,
  act5_required_windows: [...act5RequiredWindows].sort(),
  act6_echo_hooks: act6Hooks.size
}));
