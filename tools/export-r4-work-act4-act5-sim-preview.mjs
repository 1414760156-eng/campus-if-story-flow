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
const previewDataPath = path.join(projectRoot, "playtest", "r4-work-act4-act5-sim-preview-data.js");

const route = JSON.parse(fs.readFileSync(routeJsonPath, "utf8").replace(/^\uFEFF/, ""));
const carryover = route.act4_to_act5_carryover_rules;

if (!carryover?.rules?.length) {
  throw new Error("act4_to_act5_carryover_rules is missing.");
}

const ruleByHook = new Map(carryover.rules.map((rule) => [rule.act5_echo_hook, rule]));

function compactDelta(delta = {}) {
  return Object.fromEntries(
    Object.entries(delta).filter(([key]) => !key.startsWith("raw_"))
  );
}

function convertAct4Block(block) {
  return {
    id: block.block_id,
    title: block.block_name,
    guide: block.choice_window.guide,
    options: block.choice_window.directions.map((direction) => {
      const hook = direction.variable_delta?.act5_echo_hook;
      const rule = ruleByHook.get(hook);
      return {
        key: direction.direction,
        label: direction.label,
        detail: direction.description,
        directionId: direction.direction_id,
        next: direction.next_node,
        variableDelta: compactDelta(direction.variable_delta),
        act5EchoHook: hook,
        carryover: rule ? {
          targetBlocks: rule.target_blocks,
          carriedVariables: rule.carried_variables,
          realization: rule.realization,
        } : null,
      };
    }),
  };
}

function convertAct5Block(block) {
  return {
    id: block.block_id,
    title: block.block_name,
    sceneFunction: block.scene_function,
    prelude: block.pages.slice(0, 2).map((page) => ({
      title: page.page_title,
      location: page.location,
      paragraphs: page.text,
    })),
    choice: {
      title: block.choice_window.title,
      guide: block.choice_window.guide,
      options: block.choice_window.directions.map((direction) => ({
        key: direction.direction,
        label: direction.label,
        detail: direction.description,
        directionId: direction.direction_id,
        next: direction.next_node,
        variableDelta: compactDelta(direction.variable_delta),
        act6EchoHook: direction.variable_delta?.act6_echo_hook || "",
        requiredWindow: direction.variable_delta?.act5_required_windows_seen || "",
      })),
    },
  };
}

const data = {
  route: route.route_id,
  pool: route.route_pool_id,
  source: "formal-json:act4_detail_blocks + act5_detail_blocks + act4_to_act5_carryover_rules",
  generatedAt: new Date().toISOString().slice(0, 10),
  act4Blocks: route.act4_detail_blocks.map(convertAct4Block),
  act5Blocks: route.act5_detail_blocks.map(convertAct5Block),
  carryoverRules: carryover.rules,
  validation: {
    act4Blocks: route.act4_detail_blocks.length,
    act4Directions: route.act4_detail_blocks.reduce((sum, block) => sum + block.choice_window.directions.length, 0),
    act5Blocks: route.act5_detail_blocks.length,
    act5Directions: route.act5_detail_blocks.reduce((sum, block) => sum + block.choice_window.directions.length, 0),
    carryoverRules: carryover.rules.length,
  },
};

if (data.validation.act4Blocks !== 6) throw new Error("Expected 6 Act4 blocks.");
if (data.validation.act4Directions !== 18) throw new Error("Expected 18 Act4 directions.");
if (data.validation.act5Blocks !== 5) throw new Error("Expected 5 Act5 blocks.");
if (data.validation.act5Directions !== 15) throw new Error("Expected 15 Act5 directions.");
if (data.validation.carryoverRules !== 18) throw new Error("Expected 18 carryover rules.");

fs.writeFileSync(
  previewDataPath,
  `window.R4WorkAct45SimData = ${JSON.stringify(data, null, 2)};\n`,
  "utf8"
);

console.log(JSON.stringify(data.validation));
