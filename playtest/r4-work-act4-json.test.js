const assert = require("assert");
const fs = require("fs");
const path = require("path");

const routeJsonPath = path.join(
  __dirname,
  "..",
  "docs",
  "剧情小说母版_v4.0",
  "开发数据_IF剧情页级JSON_R4-WORK_v1.json"
);

const route = JSON.parse(fs.readFileSync(routeJsonPath, "utf8"));
const blocks = route.act4_detail_blocks;

assert.ok(Array.isArray(blocks), "R4-WORK should expose act4_detail_blocks");
assert.strictEqual(blocks.length, 6, "current split should contain L01-L06");
assert.ok(
  route.source_docs.includes("开发正文_IF第四幕ACT4-WORK_P2标准剧情页_L01-L06.md"),
  "source_docs should include the confirmed Act4 P2 standard page doc"
);

const forbiddenPlayerText = [
  "本窗抉择",
  "微内流点",
  "主轴推进",
  "当前池",
  "最低事实",
  "具体改法",
  "收入入口",
  "低频信任",
  "保见面",
  "保改期",
  "保报平安",
  "只写留校",
  "POOL-",
  "family_",
  "route_",
  "act5_",
];

function playerFacingText(block) {
  const parts = [];
  parts.push(block.block_name, block.scene_function);
  block.pages.forEach((page) => {
    parts.push(page.page_title, page.location, ...(page.text || []));
  });
  parts.push(block.choice_window.title, block.choice_window.guide);
  block.choice_window.directions.forEach((direction) => {
    parts.push(direction.label, direction.description);
    direction.feedback_pages.forEach((page) => {
      parts.push(page.page_title, page.location, ...(page.text || []));
    });
    direction.micro_groups.forEach((group) => {
      parts.push(group.prompt, group.guide);
      group.options.forEach((option) => {
        parts.push(option.label, option.body);
      });
    });
  });
  return parts.filter(Boolean).join("\n");
}

const expected = [
  { id: "ACT4-WORK-L01", previous: "P0B_ACT4_ROUTE_CONFIRM", next: "ACT4-WORK-L02" },
  { id: "ACT4-WORK-L02", previous: "ACT4-WORK-L01", next: "ACT4-WORK-L03" },
  { id: "ACT4-WORK-L03", previous: "ACT4-WORK-L02", next: "ACT4-WORK-L04" },
  { id: "ACT4-WORK-L04", previous: "ACT4-WORK-L03", next: "ACT4-WORK-L05" },
  { id: "ACT4-WORK-L05", previous: "ACT4-WORK-L04", next: "ACT4-WORK-L06" },
  { id: "ACT4-WORK-L06", previous: "ACT4-WORK-L05", next: "ACT5-WORK-B01" },
];

let scenePageCount = 0;
let choiceWindowCount = 0;
let mainDirectionCount = 0;
let feedbackPageCount = 0;
let microGroupCount = 0;
let microChoiceCount = 0;

blocks.forEach((block, index) => {
  assert.strictEqual(block.block_id, expected[index].id);
  assert.strictEqual(block.act, "ACT4");
  assert.strictEqual(block.route_id, "R4-WORK");
  assert.strictEqual(block.route_pool_id, "POOL-R4-WORK");
  assert.strictEqual(block.source_detail_doc, "开发正文_IF第四幕ACT4-WORK_P2标准剧情页_L01-L06.md");
  assert.strictEqual(block.route_switch_allowed, false);
  assert.strictEqual(block.previous_block, expected[index].previous);
  assert.strictEqual(block.next_block, expected[index].next);
  assert.strictEqual(block.pages.length, 4, `${block.block_id} should keep 4 pre-choice story pages`);
  assert.strictEqual(block.choice_window.direction_count, 3, `${block.block_id} should keep 3 main directions`);
  assert.strictEqual(block.choice_window.directions.length, 3, `${block.block_id} should expose 3 directions`);
  assert.ok(block.choice_window.guide.length >= 35, `${block.block_id} should keep a scene-driven choice guide`);
  scenePageCount += block.pages.length;
  choiceWindowCount += 1;
  mainDirectionCount += block.choice_window.directions.length;

  block.choice_window.directions.forEach((direction) => {
    assert.ok(["main_axis", "micro_inflow"].includes(direction.direction_type));
    assert.strictEqual(direction.route_effect.route_pool_id, "POOL-R4-WORK");
    assert.strictEqual(direction.route_effect.route_switch_allowed, false);
    assert.strictEqual(direction.feedback_pages.length, 2, `${direction.direction_id} should keep 2 feedback pages`);
    assert.ok(direction.variable_delta.act5_echo_hook, `${direction.direction_id} should leave an Act5 echo hook`);
    feedbackPageCount += direction.feedback_pages.length;
    assert.ok(
      direction.micro_groups.length >= 1,
      `${direction.direction_id} should keep at least one micro choice group`
    );
    microGroupCount += direction.micro_groups.length;
    direction.micro_groups.forEach((group) => {
      assert.strictEqual(group.options.length, 3, `${group.group_id} should keep 3 micro choices`);
      assert.ok(group.guide.length >= 20, `${group.group_id} should keep a story-facing guide`);
      microChoiceCount += group.options.length;
      group.options.forEach((option) => {
        assert.ok(option.label.length >= 8, `${option.option_id} should not be a terse label`);
        assert.ok(option.body.length >= 14, `${option.option_id} should keep concrete action feedback`);
      });
    });
  });

  const visible = playerFacingText(block);
  forbiddenPlayerText.forEach((term) => {
    assert.ok(!visible.includes(term), `${block.block_id} player-facing text should not include ${term}`);
  });
});

assert.strictEqual(scenePageCount, 24, "split should keep 24 pre-choice story pages");
assert.strictEqual(choiceWindowCount, 6, "split should keep 6 choice windows");
assert.strictEqual(mainDirectionCount, 18, "split should keep 18 main directions");
assert.strictEqual(feedbackPageCount, 36, "split should keep 36 feedback pages");
assert.strictEqual(microGroupCount, 28, "split should keep 28 micro choice groups");
assert.strictEqual(microChoiceCount, 84, "split should keep 84 micro choices");

assert.deepStrictEqual(route.validation_targets.act4_p2_detail_blocks, {
  source_detail_doc: "开发正文_IF第四幕ACT4-WORK_P2标准剧情页_L01-L06.md",
  current_split_blocks: 6,
  current_split_block_ids: [
    "ACT4-WORK-L01",
    "ACT4-WORK-L02",
    "ACT4-WORK-L03",
    "ACT4-WORK-L04",
    "ACT4-WORK-L05",
    "ACT4-WORK-L06",
  ],
  target_total_blocks: 6,
  target_scene_page_count: 24,
  target_choice_window_count: 6,
  target_main_direction_count: 18,
  target_micro_group_count: 28,
  target_micro_choice_count: 84,
});

console.log("r4-work-act4-json.test.js passed");
