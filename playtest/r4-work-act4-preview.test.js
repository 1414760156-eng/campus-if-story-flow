const assert = require("assert");
const fs = require("fs");
const path = require("path");
const preview = require("./r4-work-act4-preview.js");

const sourcePath = path.join(
  __dirname,
  "..",
  "docs",
  "剧情小说母版_v4.0",
  "开发正文_IF第四幕ACT4-WORK_P2标准剧情页_L01-L06.md"
);
const markdown = fs.readFileSync(sourcePath, "utf8");
const data = preview.parseMarkdown(markdown);

assert.strictEqual(data.routeId, "R4-WORK");
assert.strictEqual(data.poolId, "POOL-R4-WORK");
assert.strictEqual(data.metrics.locks, 6);
assert.strictEqual(data.metrics.scenePages, 24);
assert.strictEqual(data.metrics.choiceWindows, 6);
assert.strictEqual(data.metrics.feedbackPages, 36);
assert.strictEqual(data.metrics.directionChains, 18);
assert.strictEqual(data.metrics.echoHooks, 18);
assert.ok(data.metrics.microChoiceGroups >= 24, "micro choice groups should be parsed");

data.locks.forEach((lock) => {
  assert.strictEqual(lock.pages.length, 4, `${lock.id} should have 4 scene pages`);
  assert.ok(lock.choice, `${lock.id} should have a choice window`);
  assert.strictEqual(lock.choice.options.length, 3, `${lock.id} should have 3 main options`);
  ["A", "B", "C"].forEach((direction) => {
    assert.strictEqual(lock.feedback[direction].length, 2, `${lock.id} ${direction} should have 2 feedback pages`);
    assert.ok(lock.choice.chains[direction], `${lock.id} ${direction} should have a direction chain`);
    assert.ok(lock.choice.chains[direction].beats.length >= 4, `${lock.id} ${direction} should have chain beats`);
  });
});

const first = data.locks[0];
assert.strictEqual(first.choice.options[0].label, "先接住家里的那通电话");
assert.strictEqual(first.choice.chains.A.microGroups.length, 2);
assert.strictEqual(first.choice.chains.B.microGroups.length, 1);
assert.strictEqual(first.choice.chains.C.microGroups.length, 2);
assert.ok(first.choice.chains.A.echoHooks.includes("r4_empty_dorm_family_call_first"));

const effects = preview.parseNumericEffects("A2 `family_responsibility +1`、`wanfeng_delay +1`");
assert.deepStrictEqual(effects, { family_responsibility: 1, wanfeng_delay: 1 });

console.log("r4-work-act4-preview.test.js passed");
