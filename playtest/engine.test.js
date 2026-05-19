const assert = require("assert");
const {
  createInitialState,
  applyEffect,
  chooseOption,
  resolveEnding,
  createGame,
} = require("./engine.js");

const sampleNodes = {
  START: {
    节点ID: "START",
    可选互动: [
      { 选项: "整理桌面", 状态影响: { 宿舍互信: 3, 回避值: -1 } },
      { 选项: "去走廊", 状态影响: { 回避值: 1 }, 解锁: ["HALL"] },
    ],
  },
  HALL: {
    节点ID: "HALL",
    可选互动: [
      { 选项: "听陆沉说完", 状态影响: { 陆沉表达度: 5, 规则可信度: 1 } },
    ],
  },
  END: {
    节点ID: "END",
    可选互动: [],
  },
};

const chain = ["START", "HALL", "END"];

function run() {
  const initial = createInitialState();
  assert.strictEqual(initial.宿舍互信, 45);
  assert.strictEqual(initial.现实压力, 55);

  const changed = applyEffect(initial, { 宿舍互信: 3, 回避值: -1 });
  assert.strictEqual(changed.宿舍互信, 48);
  assert.strictEqual(changed.回避值, -1);
  assert.strictEqual(initial.宿舍互信, 45);

  const unlocked = chooseOption({ nodes: sampleNodes, chain, currentNodeId: "START", state: initial, log: [] }, 1);
  assert.strictEqual(unlocked.currentNodeId, "HALL");
  assert.strictEqual(unlocked.state.回避值, 1);
  assert.strictEqual(unlocked.log.length, 1);

  const advanced = chooseOption({ nodes: sampleNodes, chain, currentNodeId: "START", state: initial, log: [] }, 0);
  assert.strictEqual(advanced.currentNodeId, "HALL");
  assert.strictEqual(advanced.state.宿舍互信, 48);

  assert.strictEqual(resolveEnding({ 短期决裂: 1, 公开站队: 1, 宿舍互信: 80, 规则可信度: 8 }).id, "short_term_break");
  assert.strictEqual(resolveEnding({ 公开站队: 1, 宿舍互信: 80, 规则可信度: 8 }).id, "open_side_taking");
  assert.strictEqual(resolveEnding({ 宿舍互信: 60, 规则可信度: 5 }).id, "dorm_repair");
  assert.strictEqual(resolveEnding({ 宿舍互信: 42, 规则可信度: 2 }).id, "low_temperature");

  const game = createGame({ nodes: sampleNodes, chain, startNodeId: "START" });
  const next = chooseOption(game, 0);
  assert.strictEqual(next.currentNodeId, "HALL");
}

run();
console.log("engine tests passed");
