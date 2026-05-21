const assert = require("assert");
const data = require("./if-p0-branches-data.js");
const engine = require("./engine.js");

const routeIds = ["DEFAULT-4XX", "R5-ZHOU", "R5-TANG", "R5-LUCHEN", "R5-LIEFLAT"];
const nodes = data.nodes || {};

assert.strictEqual(data.startNodeId, "ACT5_IFP0_00_GROUP_MESSAGE");
assert.ok(nodes[data.startNodeId], "start node should exist");
assert.ok(Array.isArray(data.chain) && data.chain.length >= 26, "chain should include entry plus P0 route nodes");

routeIds.forEach((routeId) => {
  const chain = data.routeChains[routeId];
  assert.ok(Array.isArray(chain), `${routeId} should have route chain`);
  assert.ok(chain.length >= 5, `${routeId} should have 5+ nodes`);
  chain.forEach((nodeId) => {
    const node = nodes[nodeId];
    assert.ok(node, `${nodeId} should exist`);
    assert.strictEqual(node.路线, routeId, `${nodeId} should mark route ${routeId}`);
    assert.ok((node.可选互动 || []).length >= 3, `${nodeId} should have 3+ choices`);
  });
});

const entryOptions = nodes[data.startNodeId].可选互动 || [];
routeIds.forEach((routeId) => {
  assert.ok(entryOptions.some((option) => option.路线提示 === routeId), `entry should route to ${routeId}`);
});

const allText = Object.values(nodes)
  .flatMap((node) => [
    node.标题,
    node.场景,
    node.选择前铺垫,
    ...(node.可选互动 || []).flatMap((option) => [option.选项, option.选择后反馈, option.即时反馈]),
  ])
  .join("\n");

[
  /外传优先/,
  /晚风必选/,
  /必须选择晚风/,
  /取消主线/,
  /推翻主线/,
  /系统写入/,
  /回主线/,
  /这一步会被记进/,
  /让林亦舟意识到/,
  /林亦舟意识到/,
  /第二天早上/,
  /门缝/,
  /拖把/,
  /阿姨喊/,
  /睁眼/,
].forEach((pattern) => {
  assert.ok(!pattern.test(allText), `banned phrase found: ${pattern}`);
});

const game = engine.createGame({
  nodes,
  chain: data.chain,
  startNodeId: data.startNodeId,
  state: { 宿舍互信: 45, 回避值: 0 },
});

const afterChoice = engine.chooseOption(game, 0);
assert.strictEqual(afterChoice.currentNodeId, "ACT5_IFP0_DORM_01_PUBLIC_TABLE");
assert.ok((afterChoice.state.宿舍互信 || 0) > 45, "default route first choice should raise dorm trust");

console.log("if-p0-branches-data.test.js passed");
