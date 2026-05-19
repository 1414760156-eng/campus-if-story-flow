const assert = require("assert");
const data = require("./5a-full-data.js");
const engine = require("./engine.js");

function textLength(value) {
  return String(value || "").trim().length;
}

const nodes = data.nodes || {};
const chain = data.chain || [];
const chainNodes = chain.map((id) => nodes[id]).filter(Boolean);
const choiceNodes = chainNodes.filter((node) => (node.可选互动 || []).length > 0);
const allOptions = choiceNodes.flatMap((node) => node.可选互动 || []);
const psychologicalOptions = choiceNodes.flatMap((node) =>
  (node.可选互动 || [])
    .filter((option) => option.心理级选项)
    .map((option) => ({ node, option }))
);
const entertainmentNodes = chainNodes.filter((node) => node.娱乐性互动段);
const immersionNodes = chainNodes.filter((node) => node.低操作高沉浸段);
const conflictNodes = chainNodes.filter((node) => node.关键冲突节点);
const allNodes = Object.values(nodes);
const loopNodes = allNodes.filter((node) => node.回环节点);
const homogeneousReturnNodes = allNodes.filter((node) => node.流向类型 === "同质回流");
const heterogeneousSoftReturnNodes = allNodes.filter((node) => node.流向类型 === "异质软回流");
const homogeneousConvergenceNodes = allNodes.filter((node) => node.流向类型 === "同质收束");
const heterogeneousOutflowNodes = allNodes.filter((node) => node.流向类型 === "异质外流");

assert.ok(data.title.includes("正式可玩版 v2"), "title should mark 5A playable v2");
assert.ok(data.title.includes("v2.1"), "title should mark 5A micro-choice v2.1");
assert.ok(data.title.includes("v2.2"), "title should mark 5A extended loop v2.2");
assert.ok(data.title.includes("v3"), "title should mark typed return/outflow v3");
assert.ok(data.title.includes("v3.1"), "title should mark named multi-page return v3.1");
assert.ok(data.title.includes("v3.2"), "title should mark return chat micro-state v3.2");
assert.ok(data.title.includes("v3.3"), "title should mark multi-edge return v3.3");
assert.ok(data.title.includes("v3.4"), "title should mark narrative text polish v3.4");
assert.ok(data.title.includes("v3.7"), "title should mark global-aligned chinese-novelist polish v3.7");
assert.ok(data.title.includes("v3.8"), "title should mark key-path reading polish v3.8");
assert.ok(data.title.includes("v3.9"), "title should mark full chinese-novelist framework rewrite v3.9");
assert.ok(chain.length >= 22, `expected at least 22 nodes, got ${chain.length}`);
assert.ok(chain.length >= 35, `expected at least 35 nodes after extended loops, got ${chain.length}`);
assert.ok(chain.length >= 50, `expected at least 50 nodes after v3.1 multi-page returns, got ${chain.length}`);
assert.ok(chain.length >= 66, `expected at least 66 nodes after v3.2 chat-branch expansion, got ${chain.length}`);
assert.ok(chain.length >= 73, `expected at least 73 nodes after v3.3 multi-edge expansion, got ${chain.length}`);
assert.ok(choiceNodes.length >= 20, `expected at least 20 effective choice nodes, got ${choiceNodes.length}`);
assert.ok(allOptions.length >= 40, `expected at least 40 options, got ${allOptions.length}`);
assert.ok(allOptions.length >= 82, `expected at least 82 options after micro-choice expansion, got ${allOptions.length}`);
assert.ok(allOptions.length >= 92, `expected at least 92 options after extended loop expansion, got ${allOptions.length}`);
assert.ok(allOptions.length >= 126, `expected at least 126 options after v3.1 return expansion, got ${allOptions.length}`);
assert.ok(allOptions.length >= 160, `expected at least 160 options after v3.2 chat-branch expansion, got ${allOptions.length}`);
assert.ok(allOptions.length >= 176, `expected at least 176 options after v3.3 multi-edge expansion, got ${allOptions.length}`);
assert.ok(psychologicalOptions.length >= 10, `expected at least 10 psychological micro choices, got ${psychologicalOptions.length}`);
assert.ok(psychologicalOptions.length >= 34, `expected at least 34 psychological micro choices after v3.2 chat-branch expansion, got ${psychologicalOptions.length}`);
assert.ok(psychologicalOptions.length >= 50, `expected at least 50 psychological micro choices after v3.3 multi-edge expansion, got ${psychologicalOptions.length}`);
assert.ok(entertainmentNodes.length >= 4, `expected at least 4 entertainment nodes, got ${entertainmentNodes.length}`);
assert.ok(immersionNodes.length >= 3, `expected at least 3 immersion nodes, got ${immersionNodes.length}`);
assert.ok(conflictNodes.length >= 2, `expected at least 2 conflict nodes, got ${conflictNodes.length}`);
assert.ok(loopNodes.length >= 34, `expected at least 34 loop nodes after v3.2 chat-branch expansion, got ${loopNodes.length}`);
assert.ok(loopNodes.length >= 41, `expected at least 41 loop nodes after v3.3 multi-edge expansion, got ${loopNodes.length}`);
assert.ok(homogeneousReturnNodes.length >= 4, `expected 4+ homogeneous return nodes, got ${homogeneousReturnNodes.length}`);
assert.ok(heterogeneousSoftReturnNodes.length >= 2, `expected 2+ heterogeneous soft return nodes, got ${heterogeneousSoftReturnNodes.length}`);
assert.ok(homogeneousConvergenceNodes.length >= 1, "expected a 5A homogeneous convergence node");
assert.ok(heterogeneousOutflowNodes.length >= 4, `expected 4+ heterogeneous outflow nodes, got ${heterogeneousOutflowNodes.length}`);
assert.strictEqual(chainNodes.length, chain.length, "every chain id should point to an existing node");

const recordScrollNode = nodes.ACT5_5A05_RECORD_SCROLL;
assert.ok(recordScrollNode, "record scroll node should exist");
assert.ok(recordScrollNode.可选互动.length >= 4, "record scroll should offer 4+ options after micro-choice expansion");
assert.ok(recordScrollNode.可选互动.some((option) => /关掉手机/.test(option.选项)), "record scroll should allow closing the phone");
assert.ok(recordScrollNode.可选互动.some((option) => /晚风消息|晚风/.test(option.选项)), "record scroll should allow a Wanfeng interruption");

const playerFacingText = chainNodes
  .flatMap((node) => [
    node.标题,
    node.场景,
    node.选择前铺垫,
    ...(node.可选互动 || []).flatMap((option) => [option.选项, option.选择后反馈, option.即时反馈]),
  ])
  .join("\n");
[
  /系统写入/,
  /系统把/,
  /导出本次/,
  /确认本线结果/,
  /确认外流结果/,
  /确认5A同质收束/,
  /查看被远离的关系清单/,
  /查看这条收束留下的关系余温/,
  /分线输出页/,
  /这一步会被记进/,
  /同一张桌子、同一扇门、同一条群消息/,
  /语气会悄悄变重或变轻/,
  /让林亦舟意识到/,
  /林亦舟意识到/,
  /林亦舟发现/,
  /他忽然意识到/,
  /才意识到/,
  /才发现/,
  /忽然明白/,
  /忽然发现/,
  /让他明白/,
  /突然明白/,
  /帮人发声/,
  /按钮/,
  /下一句话会把/,
  /推向两种方向/,
  /要么把事实说清/,
  /要么让火气/,
  /回宿舍前，林亦舟站在门口又停了一次/,
  /站在门口又停/,
  /中南公寓/,
  /北园食堂/,
  /北园便利店/,
  /五神院/,
  /南门外/,
  /南门那边/,
  /周屿怕/,
  /唐骁怕/,
  /陆沉怕/,
  /怕被当众定罪/,
  /怕规则又变成一句玩笑/,
  /怕自己终于开口/,
  /剧情里安排/,
  /第六幕会从/,
  /读取他们的底盘/,
  /林亦舟知道/,
  /他知道/,
  /知道自己/,
  /知道这/,
  /真正/,
  /不等于/,
  /意味着/,
  /说明你/,
  /这个选择/,
  /这个动作/,
  /问题没有/,
  /回主线/,
  /替代答案/,
  /解决宿舍/,
  /不是[^。；\n]{0,40}而是/,
  /时间会替关系做决定/,
  /不选择也会被生活记录下来/,
  /最怕有人出来总结一切/,
  /不能永远躲在更清楚的问题里/,
  /资源线里的逻辑/,
  /回避值像被人/,
  /修补如果先变成展示/,
  /不是所有修补都要喊出来/,
  /未来不是简历上的方向/,
  /这个处理没有切断资源线/,
  /这个说法/,
  /这个提醒/,
  /这个入口/,
  /这个动作/,
  /像在提醒他/,
  /资源线/,
  /并非未来/,
  /问题消失/,
  /这个(回答|沉默|承认|让位|模糊|不漂亮|停顿|互动|问题|入口)/,
].forEach((pattern) => {
  assert.ok(!pattern.test(playerFacingText), `player-facing text should not contain meta phrase ${pattern}`);
});

["青枫居", "晨光湖", "西园餐厅", "银杏路", "东区商业街"].forEach((mapAnchor) => {
  assert.ok(playerFacingText.includes(mapAnchor), `5A map correction should include ${mapAnchor}`);
});

["ACT5_5A99_DORM_OUTPUT_FULL", "ACT5_5A15B_DORM_CONVERGENCE", "ACT5_5X99_OUTFLOW_OUTPUT"].forEach((nodeId) => {
  const node = nodes[nodeId];
  assert.ok(node, `${nodeId} output node should exist`);
  assert.ok((node.可选互动 || []).length >= 2, `${nodeId} should have 2+ diegetic output options`);
  (node.可选互动 || []).forEach((option) => {
    assert.ok(!/^(确认|查看|导出)/.test(option.选项), `${nodeId}/${option.选项} should read like an in-world action`);
  });
});

function assertNarrativeAnchors(nodeId, patterns) {
  const node = nodes[nodeId];
  assert.ok(node, `${nodeId} should exist`);
  const text = JSON.stringify({
    setup: node.选择前铺垫,
    options: node.可选互动,
  });
  patterns.forEach((pattern) => {
    assert.ok(pattern.test(text), `${nodeId} should include narrative anchor ${pattern}`);
  });
}

assertNarrativeAnchors("ACT5_5A11_TABLE_TIMER", [/周屿/, /唐骁/, /陆沉/, /计时器|纸|便签/]);
assertNarrativeAnchors("ACT5_5A15_DOOR_SLAM_RISK", [/周屿/, /唐骁/, /陆沉/, /门|拖鞋|床帘/]);
assertNarrativeAnchors("ACT5_5A20_RELAPSE_CHOICE", [/周屿/, /唐骁/, /陆沉/, /规则纸|耳机|复习/]);

function assertNodeTextIncludes(nodeId, terms) {
  const node = nodes[nodeId];
  assert.ok(node, `${nodeId} should exist`);
  const text = JSON.stringify(node);
  terms.forEach((term) => {
    assert.ok(text.includes(term), `${nodeId} should include global-aligned term ${term}`);
  });
}

assertNodeTextIncludes("ACT5_FULL_00_AUDIT", ["宿舍群", "生活费", "父亲", "母亲", "晚风", "抖音", "共享文档", "活动证明"]);
assertNodeTextIncludes("ACT5_5A05_RECORD_SCROLL", ["手机袋", "水费", "热水卡", "外放", "空调", "陆沉", "没事"]);
assertNodeTextIncludes("ACT5_5A16_CANTEEN_SEAT", ["筷子", "排队", "空椅子", "手机"]);
assertNodeTextIncludes("ACT5_5A20_RELAPSE_CHOICE", ["第六幕", "普通稳定", "修补回升", "低完成"]);
assertNodeTextIncludes("ACT5_5A16_CANTEEN_SEAT", ["要是没人坐，我先放这儿", "晚点来就晚点坐"]);
assertNodeTextIncludes("ACT5_5A16C_SIDE_DOOR_XIA", ["我不替你劝", "拍不到你坐回去"]);
assertNodeTextIncludes("ACT5_5A16F_SIDE_DOOR_SHEN", ["资料可以等五分钟", "你先回桌边"]);
assertNodeTextIncludes("ACT5_5A16H_SIDE_DOOR_QINYUE", ["报名表还有二十分钟", "椅子不会等二十分钟"]);
assertNodeTextIncludes("ACT5_5A01W3_WANFENG_DORM_REPLY", ["聊天框不替宿舍群回话"]);
assert.ok(
  (nodes.ACT5_5A15_DOOR_SLAM_RISK.可选互动 || []).some((option) =>
    (option.解锁 || []).includes("ACT5_5A15B_DORM_CONVERGENCE") && option.同质收束入口
  ),
  "door slam risk should offer a homogeneous convergence entrance before the hard outflow"
);
assert.strictEqual(
  nodes.ACT5_5X99_OUTFLOW_OUTPUT.跨幕延续,
  "第六幕与终章仅走外流单线",
  "outflow should continue through act 6 and finale as its own line"
);

choiceNodes.forEach((node) => {
  assert.ok(textLength(node.选择前铺垫) >= 80, `${node.节点ID} missing 80+ char pre-choice setup`);
  (node.可选互动 || []).forEach((option) => {
    assert.ok(textLength(option.选择后反馈) >= 80, `${node.节点ID}/${option.选项} missing 80+ char post-choice feedback`);
  });
});

conflictNodes.forEach((node) => {
  assert.ok(textLength(node.选择前铺垫) >= 250, `${node.节点ID} conflict setup should be 250+ chars`);
});

const corridorNode = nodes.ACT5_5A01_CORRIDOR_RETURN;
const outsideNode = nodes.ACT5_5A01A_OUTSIDE_BENCH;
assert.ok(corridorNode, "corridor return node should exist");
assert.ok(outsideNode, "outside bench loop node should exist");
const outsideOption = (corridorNode.可选互动 || []).find((option) => /不进门|楼外|长椅/.test(option.选项));
assert.ok(outsideOption, "corridor node should offer a non-entry route option");
assert.deepStrictEqual(outsideOption.解锁, ["ACT5_5A01A_OUTSIDE_BENCH"], "non-entry route should unlock outside bench loop");
assert.strictEqual(outsideNode.回环节点, true, "outside bench should be marked as a loop node");
assert.strictEqual(outsideNode.回流节点, "ACT5_5A02_DOORWAY_PAUSE", "outside bench should return to doorway pause");
assert.strictEqual(outsideNode.流向类型, "同质回流", "outside bench should be a homogeneous return");
const lakeOption = (corridorNode.可选互动 || []).find((option) => /湖边|绕一圈/.test(option.选项));
assert.ok(lakeOption, "corridor node should offer a lake-side heterogeneous soft return option");
assert.deepStrictEqual(lakeOption.解锁, ["ACT5_5A01C_LAKESIDE_SOFT_RETURN"], "lake option should unlock lakeside soft return");
assert.strictEqual(nodes.ACT5_5A01C_LAKESIDE_SOFT_RETURN.流向类型, "异质软回流", "lakeside node should be heterogeneous soft return");
assert.strictEqual(nodes.ACT5_5A01C_LAKESIDE_SOFT_RETURN.禁止解锁分线, true, "lakeside soft return should forbid route unlocking");
assert.strictEqual(nodes.ACT5_5A01D_LAKESIDE_BACK.回流节点, "ACT5_5A02_DOORWAY_PAUSE", "lakeside soft return should return to doorway pause");
const lakeWanfengOption = (nodes.ACT5_5A01C_LAKESIDE_SOFT_RETURN.可选互动 || []).find((option) => /晚风/.test(option.选项));
const lakeXiaOption = (nodes.ACT5_5A01C_LAKESIDE_SOFT_RETURN.可选互动 || []).find((option) => /夏知微/.test(option.选项));
assert.ok(lakeWanfengOption, "lakeside soft return should let player choose Wanfeng");
assert.ok(lakeXiaOption, "lakeside soft return should let player choose Xia Zhiwei");
assert.deepStrictEqual(lakeWanfengOption.解锁, ["ACT5_5A01W_WANFENG_CHAT_CHOICE"], "Wanfeng choice should enter chat topic choice");
assert.deepStrictEqual(lakeXiaOption.解锁, ["ACT5_5A01C2_LAKESIDE_XIA"], "Xia choice should enter Xia chat route");
const wanfengTopicNode = nodes.ACT5_5A01W_WANFENG_CHAT_CHOICE;
assert.ok(wanfengTopicNode, "Wanfeng topic choice node should exist");
assert.ok((wanfengTopicNode.可选互动 || []).some((option) => /刚发生|宿舍/.test(option.选项) && (option.解锁 || [])[0] === "ACT5_5A01W2_WANFENG_DORM"), "Wanfeng topic should allow talking about the just-happened dorm event");
assert.ok((wanfengTopicNode.可选互动 || []).some((option) => /不聊|别的/.test(option.选项) && (option.解锁 || [])[0] === "ACT5_5A01W4_WANFENG_LIGHT"), "Wanfeng topic should allow not talking about the dorm event");
assert.ok((nodes.ACT5_5A01C2_LAKESIDE_XIA.可选互动 || []).some((option) => /宿舍|刚才|刚发生/.test(option.选项) && (option.解锁 || [])[0] === "ACT5_5A01C3_LAKESIDE_RECENT"), "Xia route should allow talking about the just-happened dorm event");
assert.ok((nodes.ACT5_5A01C2_LAKESIDE_XIA.可选互动 || []).some((option) => /不聊|照片|别的/.test(option.选项) && (option.解锁 || [])[0] === "ACT5_5A01C4_LAKESIDE_FUTURE"), "Xia route should allow talking about something else");
const laundryOption = (corridorNode.可选互动 || []).find((option) => /洗衣房|陆沉/.test(option.选项));
assert.ok(laundryOption, "corridor node should offer a laundry-room homogeneous return option");
assert.deepStrictEqual(laundryOption.解锁, ["ACT5_5A01E_LAUNDRY_PAUSE"], "laundry option should unlock laundry-room return");
assert.strictEqual(nodes.ACT5_5A01E_LAUNDRY_PAUSE.流向类型, "同质回流", "laundry node should be homogeneous return");
(corridorNode.可选互动 || [])
  .filter((option) => option !== outsideOption && option !== lakeOption && option !== laundryOption)
  .forEach((option) => {
    assert.deepStrictEqual(option.解锁, ["ACT5_5A02_DOORWAY_PAUSE"], `${option.选项} should go directly to doorway pause`);
  });

let branchGame = engine.createGame(data);
branchGame = engine.chooseOption(branchGame, 0);
branchGame = engine.chooseOption(branchGame, 0);
assert.strictEqual(branchGame.currentNodeId, "ACT5_5A01_CORRIDOR_RETURN", "branch test should arrive at corridor node");
const outsideOptionIndex = corridorNode.可选互动.indexOf(outsideOption);
branchGame = engine.chooseOption(branchGame, outsideOptionIndex);
assert.strictEqual(branchGame.currentNodeId, "ACT5_5A01A_OUTSIDE_BENCH", "non-entry option should move to outside bench");
branchGame = engine.chooseOption(branchGame, 0);
assert.strictEqual(branchGame.currentNodeId, "ACT5_5A01A2_OUTSIDE_TALK", "outside bench should continue to a second loop beat");
branchGame = engine.chooseOption(branchGame, 0);
assert.strictEqual(branchGame.currentNodeId, "ACT5_5A01B_OUTSIDE_RETURN", "outside loop should continue to a third loop beat");
branchGame = engine.chooseOption(branchGame, 0);
assert.strictEqual(branchGame.currentNodeId, "ACT5_5A02_DOORWAY_PAUSE", "outside loop should return to doorway pause after two beats");

let lakeGame = Object.assign(engine.createGame(data), { currentNodeId: "ACT5_5A01_CORRIDOR_RETURN" });
const lakeOptionIndex = corridorNode.可选互动.indexOf(lakeOption);
lakeGame = engine.chooseOption(lakeGame, lakeOptionIndex);
assert.strictEqual(lakeGame.currentNodeId, "ACT5_5A01C_LAKESIDE_SOFT_RETURN", "lake option should move to heterogeneous soft return");
lakeGame = engine.chooseOption(lakeGame, 0);
assert.strictEqual(lakeGame.currentNodeId, "ACT5_5A01W_WANFENG_CHAT_CHOICE", "lake soft return should allow choosing Wanfeng first");
lakeGame = engine.chooseOption(lakeGame, 0);
assert.strictEqual(lakeGame.currentNodeId, "ACT5_5A01W2_WANFENG_DORM", "Wanfeng chat should allow talking about the just-happened dorm event");
lakeGame = engine.chooseOption(lakeGame, 0);
assert.strictEqual(lakeGame.currentNodeId, "ACT5_5A01W3_WANFENG_DORM_REPLY", "Wanfeng dorm talk should continue for a second chat beat");
lakeGame = engine.chooseOption(lakeGame, 0);
assert.strictEqual(lakeGame.currentNodeId, "ACT5_5A01D_LAKESIDE_BACK", "Wanfeng dorm talk should return through the reality-return beat");
lakeGame = engine.chooseOption(lakeGame, 0);
assert.strictEqual(lakeGame.currentNodeId, "ACT5_5A02_DOORWAY_PAUSE", "Wanfeng lake route should return to doorway pause");

let xiaLakeGame = Object.assign(engine.createGame(data), { currentNodeId: "ACT5_5A01C_LAKESIDE_SOFT_RETURN" });
const lakeXiaOptionIndex = nodes.ACT5_5A01C_LAKESIDE_SOFT_RETURN.可选互动.indexOf(lakeXiaOption);
xiaLakeGame = engine.chooseOption(xiaLakeGame, lakeXiaOptionIndex);
assert.strictEqual(xiaLakeGame.currentNodeId, "ACT5_5A01C2_LAKESIDE_XIA", "Xia choice should enter Xia chat route");
xiaLakeGame = engine.chooseOption(xiaLakeGame, 0);
assert.strictEqual(xiaLakeGame.currentNodeId, "ACT5_5A01C3_LAKESIDE_RECENT", "Xia dorm talk should open a recent-status chat beat");
xiaLakeGame = engine.chooseOption(xiaLakeGame, 0);
assert.strictEqual(xiaLakeGame.currentNodeId, "ACT5_5A01C4_LAKESIDE_FUTURE", "Xia dorm talk should open a future chat beat");
xiaLakeGame = engine.chooseOption(xiaLakeGame, 0);
assert.strictEqual(xiaLakeGame.currentNodeId, "ACT5_5A01D_LAKESIDE_BACK", "Xia route should continue to the reality-return beat");
xiaLakeGame = engine.chooseOption(xiaLakeGame, 0);
assert.strictEqual(xiaLakeGame.currentNodeId, "ACT5_5A02_DOORWAY_PAUSE", "Xia route should return to doorway pause");

const expectedLoopReturns = {
  ACT5_5A01A_OUTSIDE_BENCH: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01A2_OUTSIDE_TALK: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01B_OUTSIDE_RETURN: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01C_LAKESIDE_SOFT_RETURN: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01W_WANFENG_CHAT_CHOICE: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01W2_WANFENG_DORM: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01W3_WANFENG_DORM_REPLY: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01W4_WANFENG_LIGHT: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01W5_WANFENG_LIGHT_BACK: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01C2_LAKESIDE_XIA: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01C3_LAKESIDE_RECENT: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01C4_LAKESIDE_FUTURE: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01D_LAKESIDE_BACK: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01E_LAUNDRY_PAUSE: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01F_LAUNDRY_LUCHEN: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A01G_LAUNDRY_BACK: "ACT5_5A02_DOORWAY_PAUSE",
  ACT5_5A10A_WASHROOM_RESET: "ACT5_5A11_TABLE_TIMER",
  ACT5_5A10A2_WASHROOM_EDGE: "ACT5_5A11_TABLE_TIMER",
  ACT5_5A10B_WASHROOM_MESSAGE: "ACT5_5A11_TABLE_TIMER",
  ACT5_5A10C_STAIRWELL_ZHOUYU: "ACT5_5A11_TABLE_TIMER",
  ACT5_5A10D_STAIRWELL_TEXT: "ACT5_5A11_TABLE_TIMER",
  ACT5_5A10E_STAIRWELL_BACK: "ACT5_5A11_TABLE_TIMER",
  ACT5_5A16A_STORE_WATER: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16A2_STORE_TALK: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16B_STORE_RETURN: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16C_SIDE_DOOR_XIA: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16D_SIDE_DOOR_CAMERA: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16D2_SIDE_DOOR_FUTURE: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16E_SIDE_DOOR_BACK: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16F_SIDE_DOOR_SHEN: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16G_SIDE_DOOR_SHEN_DORM: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16G2_SIDE_DOOR_SHEN_STUDY: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16H_SIDE_DOOR_QINYUE: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16I_SIDE_DOOR_QINYUE_DORM: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A16I2_SIDE_DOOR_QINYUE_ACTIVITY: "ACT5_5A17_AFTER_MEAL_CHAT",
  ACT5_5A19A_HALLWAY_REVIEW: "ACT5_5A20_RELAPSE_CHOICE",
  ACT5_5A19A2_HALLWAY_EDGE: "ACT5_5A20_RELAPSE_CHOICE",
  ACT5_5A19B_HALLWAY_BACK: "ACT5_5A20_RELAPSE_CHOICE",
  ACT5_5A19C_WATER_ROOM_THERMOS: "ACT5_5A20_RELAPSE_CHOICE",
  ACT5_5A19D_WATER_ROOM_LUCHEN: "ACT5_5A20_RELAPSE_CHOICE",
  ACT5_5A19E_WATER_ROOM_BACK: "ACT5_5A20_RELAPSE_CHOICE",
};
assert.ok(loopNodes.length >= 24, `expected at least 24 loop nodes, got ${loopNodes.length}`);
Object.entries(expectedLoopReturns).forEach(([nodeId, returnNodeId]) => {
  assert.ok(nodes[nodeId], `${nodeId} loop node should exist`);
  assert.strictEqual(nodes[nodeId].回环节点, true, `${nodeId} should be marked as loop node`);
  assert.strictEqual(nodes[nodeId].回流节点, returnNodeId, `${nodeId} should return to ${returnNodeId}`);
});

const outflowLineNodes = allNodes.filter((node) => node.外流线节点);
const outflowOptions = allNodes.flatMap((node) =>
  (node.可选互动 || [])
    .filter((option) => option.外流点)
    .map((option) => ({ node, option }))
);
assert.strictEqual(outflowOptions.length, 1, "5A should have exactly one outflow option");
assert.strictEqual(outflowOptions[0].node.节点ID, "ACT5_5A15_DOOR_SLAM_RISK", "the only outflow point should be at door slam risk");
assert.deepStrictEqual(outflowOptions[0].option.解锁, ["ACT5_5X01_STAIRWELL_MUTE"], "outflow option should unlock new outflow line");
const convergenceOption = nodes.ACT5_5A15_DOOR_SLAM_RISK.可选互动.find((option) => option.流向类型 === "同质收束");
assert.ok(convergenceOption, "door slam risk should offer a 5A homogeneous convergence option");
assert.deepStrictEqual(convergenceOption.解锁, ["ACT5_5A15B_DORM_CONVERGENCE"], "homogeneous convergence should unlock 5A convergence node");
assert.strictEqual(nodes.ACT5_5A15B_DORM_CONVERGENCE.流向类型, "同质收束", "convergence node should be typed");
assert.ok(nodes.ACT5_5A15B_DORM_CONVERGENCE.第六幕入口标签, "convergence node should write an act-six entry tag");
assert.deepStrictEqual(
  outflowLineNodes.map((node) => node.节点ID),
  [
    "ACT5_5X01_STAIRWELL_MUTE",
    "ACT5_5X02_SOUTH_GATE_EDGE",
    "ACT5_5X02A_XUCHE_RECENT",
    "ACT5_5X02B_XUCHE_FUTURE",
    "ACT5_5X02C_QINYUE_EDGE",
    "ACT5_5X03_STRANGE_SEAT",
    "ACT5_5X03A_XUCHE_EMPTY_ECHO",
    "ACT5_5X99_OUTFLOW_OUTPUT",
  ],
  "outflow line should be a new stable short line"
);
outflowLineNodes.forEach((node) => {
  assert.strictEqual(node.分线, "5X_离场外流线", `${node.节点ID} should belong to the new outflow line`);
  assert.strictEqual(node.定轨节点, true, `${node.节点ID} should be deterministic`);
  assert.strictEqual(node.流向类型, "异质外流", `${node.节点ID} should be typed as heterogeneous outflow`);
  assert.strictEqual(node.回流节点, undefined, `${node.节点ID} should not return to old lines`);
});
const outflowOutput = nodes.ACT5_5X99_OUTFLOW_OUTPUT;
assert.strictEqual(outflowOutput.外流来源线, "5A_宿舍修补线", "5A outflow output should be judged by its source line");
assert.strictEqual(outflowOutput.外流结局类型, "新人逢场作戏_宿舍渐远_遗憾回响", "5A outflow should have a source-specific ending type");
assert.strictEqual(outflowOutput.跨幕延续, "第六幕与终章仅走外流单线", "outflow should stay on its own line in later acts");
assert.strictEqual(outflowOutput.软互动规则, "可同场景经过和过场互动，不开放回流抉择", "later-act outflow interactions should be soft only");
assert.ok(/许澈/.test(outflowOutput.选择前铺垫), "5A outflow output should mention Xu Che");
assert.ok(/逢场作戏/.test(outflowOutput.选择前铺垫), "5A outflow output should reveal the new connection as casual");
assert.ok(/宿舍/.test(outflowOutput.选择前铺垫) && /渐远|远/.test(outflowOutput.选择前铺垫), "5A outflow output should show the dorm drifting away");
assert.ok(/遗憾/.test(outflowOutput.选择前铺垫), "5A outflow output should carry regret");
assert.ok(nodes.ACT5_5A11_TABLE_TIMER.可选互动.length >= 3, "table timer should have 3+ options in v2");
assert.ok(nodes.ACT5_5A15_DOOR_SLAM_RISK.可选互动.length >= 4, "door slam risk should keep 4+ options");
assert.ok(nodes.ACT5_5A20_RELAPSE_CHOICE.可选互动.length >= 3, "relapse choice should have 3+ options in v2");
const forbiddenRouteKeys = ["解锁5A", "解锁5B", "解锁5C", "解锁5D", "解锁5E", "解锁5F"];
psychologicalOptions.forEach(({ node, option }) => {
  assert.notStrictEqual(option.外流点, true, `${node.节点ID}/${option.选项} psychological option should not be an outflow point`);
  assert.ok(!forbiddenRouteKeys.some((key) => Object.prototype.hasOwnProperty.call(option, key)), `${node.节点ID}/${option.选项} should not unlock old route keys`);
  (option.解锁 || []).forEach((target) => {
    assert.notStrictEqual(target, "ACT5_5X01_STAIRWELL_MUTE", `${node.节点ID}/${option.选项} should not unlock the outflow line`);
    assert.ok(!/^ACT5_5[BCDEF]/.test(target), `${node.节点ID}/${option.选项} should not jump to another fifth-act line`);
  });
});
outflowLineNodes.forEach((node) => {
  (node.可选互动 || []).forEach((option) => {
    assert.ok(!forbiddenRouteKeys.some((key) => Object.prototype.hasOwnProperty.call(option, key)), `${node.节点ID}/${option.选项} should not unlock old route keys`);
  });
});

function assertMicroChatNode(nodeId, speakerName, themes) {
  const node = nodes[nodeId];
  assert.ok(node, `${nodeId} micro-chat node should exist`);
  assert.strictEqual(node.微心态聊天节点, true, `${nodeId} should be marked as micro-state chat`);
  const text = JSON.stringify(node);
  assert.ok(text.includes(speakerName), `${nodeId} should include ${speakerName}`);
  themes.forEach((theme) => {
    assert.ok(text.includes(theme), `${nodeId} should include theme ${theme}`);
  });
  assert.ok((node.可选互动 || []).length >= 2, `${nodeId} should have 2+ chat options`);
  (node.可选互动 || []).forEach((option) => {
    assert.strictEqual(option.心理级选项, true, `${nodeId}/${option.选项} should be a psychological micro option`);
    assert.notStrictEqual(option.外流点, true, `${nodeId}/${option.选项} should not be an outflow point`);
    assert.ok(!forbiddenRouteKeys.some((key) => Object.prototype.hasOwnProperty.call(option, key)), `${nodeId}/${option.选项} should not unlock old route keys`);
    (option.解锁 || []).forEach((target) => {
      assert.notStrictEqual(target, "ACT5_5X01_STAIRWELL_MUTE", `${nodeId}/${option.选项} should not unlock the hard outflow line`);
      assert.ok(!/^ACT5_5[BCDEF]/.test(target), `${nodeId}/${option.选项} should not jump to another fifth-act line`);
    });
  });
}

[
  ["ACT5_5A01C3_LAKESIDE_RECENT", "夏知微", ["近况", "宿舍"]],
  ["ACT5_5A01C4_LAKESIDE_FUTURE", "夏知微", ["未来", "毕业"]],
  ["ACT5_5A01W_WANFENG_CHAT_CHOICE", "晚风", ["刚发生", "宿舍"]],
  ["ACT5_5A01W2_WANFENG_DORM", "晚风", ["宿舍", "微信"]],
  ["ACT5_5A01W3_WANFENG_DORM_REPLY", "晚风", ["现实", "宿舍"]],
  ["ACT5_5A01W4_WANFENG_LIGHT", "晚风", ["游戏", "抖音"]],
  ["ACT5_5A01W5_WANFENG_LIGHT_BACK", "晚风", ["轻松", "回主线"]],
  ["ACT5_5A16D2_SIDE_DOOR_FUTURE", "夏知微", ["未来", "毕业"]],
  ["ACT5_5A16F_SIDE_DOOR_SHEN", "沈嘉禾", ["刚发生", "饭桌"]],
  ["ACT5_5A16G_SIDE_DOOR_SHEN_DORM", "沈嘉禾", ["宿舍", "合作"]],
  ["ACT5_5A16G2_SIDE_DOOR_SHEN_STUDY", "沈嘉禾", ["复习", "资料"]],
  ["ACT5_5A16H_SIDE_DOOR_QINYUE", "秦越", ["刚发生", "饭桌"]],
  ["ACT5_5A16I_SIDE_DOOR_QINYUE_DORM", "秦越", ["宿舍", "资源"]],
  ["ACT5_5A16I2_SIDE_DOOR_QINYUE_ACTIVITY", "秦越", ["活动", "名单"]],
  ["ACT5_5X02A_XUCHE_RECENT", "许澈", ["近况", "轻松"]],
  ["ACT5_5X02B_XUCHE_FUTURE", "许澈", ["未来", "活动"]],
  ["ACT5_5X02C_QINYUE_EDGE", "秦越", ["活动", "许澈"]],
  ["ACT5_5X03A_XUCHE_EMPTY_ECHO", "许澈", ["现实", "宿舍"]],
].forEach(([nodeId, speakerName, themes]) => assertMicroChatNode(nodeId, speakerName, themes));

const priorNamedCameos = new Set(["晚风", "夏知微", "沈嘉禾", "秦越", "陈老师", "周屿", "唐骁", "陆沉"]);
heterogeneousSoftReturnNodes.forEach((node) => {
  assert.ok(node.软串场角色, `${node.节点ID} should name soft cameo roles`);
  node.软串场角色.split("/").forEach((name) => {
    assert.ok(priorNamedCameos.has(name), `${node.节点ID} soft cameo ${name} should be a prior named character`);
  });
});

const nonOutflowText = allNodes
  .filter((node) => !node.外流线节点)
  .map((node) => JSON.stringify(node))
  .join("\n");
assert.ok(!/边缘同学|影像社同学|新认识的人|那个人|某个同学/.test(nonOutflowText), "non-outflow text should not use unnamed interactive characters");

const outflowLineText = outflowLineNodes.map((node) => JSON.stringify(node)).join("\n");
assert.ok(/许澈/.test(outflowLineText), "outflow line should name Xu Che");
assert.ok(!/新认识的人|那个人|刚在便利店门口见过的同学|那个新人的头像/.test(outflowLineText), "outflow line should not use unnamed newcomer phrasing");
["ACT5_5X02_SOUTH_GATE_EDGE", "ACT5_5X02A_XUCHE_RECENT", "ACT5_5X02B_XUCHE_FUTURE", "ACT5_5X03_STRANGE_SEAT", "ACT5_5X03A_XUCHE_EMPTY_ECHO", "ACT5_5X99_OUTFLOW_OUTPUT"].forEach((nodeId) => {
  assert.strictEqual(nodes[nodeId].外流线新人物, "许澈", `${nodeId} should tag Xu Che as the outflow-line new character`);
});
assert.strictEqual(nodes.ACT5_5X02C_QINYUE_EDGE.软串场角色, "秦越", "5X should allow Qin Yue as a soft passing edge character");
assert.strictEqual(nodes.ACT5_5X02C_QINYUE_EDGE.禁止解锁分线, true, "Qin Yue 5X edge should not unlock 5F");

let normalDoorGame = Object.assign(engine.createGame(data), { currentNodeId: "ACT5_5A15_DOOR_SLAM_RISK" });
normalDoorGame = engine.chooseOption(normalDoorGame, 0);
assert.strictEqual(normalDoorGame.currentNodeId, "ACT5_5A16_CANTEEN_SEAT", "normal door choice should skip outflow");

let outflowGame = Object.assign(engine.createGame(data), { currentNodeId: "ACT5_5A15_DOOR_SLAM_RISK" });
const outflowIndex = nodes.ACT5_5A15_DOOR_SLAM_RISK.可选互动.findIndex((option) => option.外流点);
outflowGame = engine.chooseOption(outflowGame, outflowIndex);
assert.strictEqual(outflowGame.currentNodeId, "ACT5_5X01_STAIRWELL_MUTE", "outflow option should move to the new outflow line");
outflowGame = engine.chooseOption(outflowGame, 0);
assert.strictEqual(outflowGame.currentNodeId, "ACT5_5X02_SOUTH_GATE_EDGE", "outflow line should continue away from the dorm");
outflowGame = engine.chooseOption(outflowGame, 0);
assert.strictEqual(outflowGame.currentNodeId, "ACT5_5X02A_XUCHE_RECENT", "outflow line should open a recent-status chat with Xu Che");
outflowGame = engine.chooseOption(outflowGame, 0);
assert.strictEqual(outflowGame.currentNodeId, "ACT5_5X02B_XUCHE_FUTURE", "outflow line should open a future chat with Xu Che");
outflowGame = engine.chooseOption(outflowGame, 0);
assert.strictEqual(outflowGame.currentNodeId, "ACT5_5X02C_QINYUE_EDGE", "outflow line should include a Qin Yue soft edge pass-by");
outflowGame = engine.chooseOption(outflowGame, 0);
assert.strictEqual(outflowGame.currentNodeId, "ACT5_5X03_STRANGE_SEAT", "outflow line should reach a new scene");
outflowGame = engine.chooseOption(outflowGame, 0);
assert.strictEqual(outflowGame.currentNodeId, "ACT5_5X03A_XUCHE_EMPTY_ECHO", "outflow line should reveal the empty echo of the new connection");
outflowGame = engine.chooseOption(outflowGame, 0);
assert.strictEqual(outflowGame.currentNodeId, "ACT5_5X99_OUTFLOW_OUTPUT", "outflow line should end at its own output page");

(nodes.ACT5_5X99_OUTFLOW_OUTPUT.可选互动 || []).forEach((option, index) => {
  let outputGame = Object.assign(engine.createGame(data), { currentNodeId: "ACT5_5X99_OUTFLOW_OUTPUT" });
  outputGame = engine.chooseOption(outputGame, index);
  assert.strictEqual(outputGame.currentNodeId, "ACT5_5X99_OUTFLOW_OUTPUT", "outflow output choices should not advance back to 5A");
});

function countReturnWays(sourceNodeId) {
  const source = nodes[sourceNodeId];
  assert.ok(source, `${sourceNodeId} should exist`);
  return (source.可选互动 || []).filter((option) =>
    (option.解锁 || []).some((target) => nodes[target] && nodes[target].回环节点)
  ).length;
}

[
  ["ACT5_5A01_CORRIDOR_RETURN", 3],
  ["ACT5_5A10_BEFORE_MEETING", 2],
  ["ACT5_5A16_CANTEEN_SEAT", 4],
  ["ACT5_5A19_EXAM_NIGHT_RETURN", 2],
].forEach(([sourceNodeId, minimum]) => {
  assert.ok(countReturnWays(sourceNodeId) >= minimum, `${sourceNodeId} should have ${minimum}+ return ways`);
});

const sideDoorSource = nodes.ACT5_5A16_CANTEEN_SEAT;
const sideDoorShenOption = (sideDoorSource.可选互动 || []).find((option) => /沈嘉禾/.test(option.选项));
const sideDoorQinOption = (sideDoorSource.可选互动 || []).find((option) => /秦越/.test(option.选项));
assert.ok(sideDoorShenOption, "canteen should offer a Shen Jiahe side-door route");
assert.ok(sideDoorQinOption, "canteen should offer a Qin Yue side-door route");
assert.deepStrictEqual(sideDoorShenOption.解锁, ["ACT5_5A16F_SIDE_DOOR_SHEN"], "Shen side-door option should unlock Shen route");
assert.deepStrictEqual(sideDoorQinOption.解锁, ["ACT5_5A16H_SIDE_DOOR_QINYUE"], "Qin side-door option should unlock Qin route");
assert.ok((nodes.ACT5_5A16F_SIDE_DOOR_SHEN.可选互动 || []).some((option) => /刚才|饭桌|宿舍/.test(option.选项) && (option.解锁 || [])[0] === "ACT5_5A16G_SIDE_DOOR_SHEN_DORM"), "Shen route should allow talking about the just-happened meal table event");
assert.ok((nodes.ACT5_5A16F_SIDE_DOOR_SHEN.可选互动 || []).some((option) => /不聊|复习|资料/.test(option.选项) && (option.解锁 || [])[0] === "ACT5_5A16G2_SIDE_DOOR_SHEN_STUDY"), "Shen route should allow not talking about the dorm event");
assert.ok((nodes.ACT5_5A16H_SIDE_DOOR_QINYUE.可选互动 || []).some((option) => /刚才|饭桌|宿舍/.test(option.选项) && (option.解锁 || [])[0] === "ACT5_5A16I_SIDE_DOOR_QINYUE_DORM"), "Qin route should allow talking about the just-happened meal table event");
assert.ok((nodes.ACT5_5A16H_SIDE_DOOR_QINYUE.可选互动 || []).some((option) => /不聊|活动|名单/.test(option.选项) && (option.解锁 || [])[0] === "ACT5_5A16I2_SIDE_DOOR_QINYUE_ACTIVITY"), "Qin route should allow not talking about the dorm event");

function assertMultiPageLoopRoute({ fromNodeId, optionPattern, routeNodeIds, returnNodeId }) {
  const node = nodes[fromNodeId];
  assert.ok(node, `${fromNodeId} should exist`);
  assert.ok(routeNodeIds.length >= 3, `${fromNodeId} route ${optionPattern} should define 3+ pages`);
  const optionIndex = (node.可选互动 || []).findIndex((option) => optionPattern.test(option.选项));
  assert.ok(optionIndex >= 0, `${fromNodeId} should have loop option ${optionPattern}`);
  let loopGame = Object.assign(engine.createGame(data), { currentNodeId: fromNodeId });
  loopGame = engine.chooseOption(loopGame, optionIndex);
  routeNodeIds.forEach((nodeId, index) => {
    assert.strictEqual(loopGame.currentNodeId, nodeId, `${fromNodeId} route should visit ${nodeId}`);
    assert.strictEqual(nodes[nodeId].回环节点, true, `${nodeId} should be marked as loop node`);
    assert.strictEqual(nodes[nodeId].回流节点, returnNodeId, `${nodeId} should return to ${returnNodeId}`);
    if (index < routeNodeIds.length - 1) {
      loopGame = engine.chooseOption(loopGame, 0);
    }
  });
  loopGame = engine.chooseOption(loopGame, 0);
  assert.strictEqual(loopGame.currentNodeId, returnNodeId, `${routeNodeIds[routeNodeIds.length - 1]} should return to ${returnNodeId}`);
}

[
  {
    fromNodeId: "ACT5_5A01_CORRIDOR_RETURN",
    optionPattern: /楼外|长椅/,
    routeNodeIds: ["ACT5_5A01A_OUTSIDE_BENCH", "ACT5_5A01A2_OUTSIDE_TALK", "ACT5_5A01B_OUTSIDE_RETURN"],
    returnNodeId: "ACT5_5A02_DOORWAY_PAUSE",
  },
  {
    fromNodeId: "ACT5_5A01_CORRIDOR_RETURN",
    optionPattern: /湖边|绕一圈/,
    routeNodeIds: ["ACT5_5A01C_LAKESIDE_SOFT_RETURN", "ACT5_5A01W_WANFENG_CHAT_CHOICE", "ACT5_5A01W2_WANFENG_DORM", "ACT5_5A01W3_WANFENG_DORM_REPLY", "ACT5_5A01D_LAKESIDE_BACK"],
    returnNodeId: "ACT5_5A02_DOORWAY_PAUSE",
  },
  {
    fromNodeId: "ACT5_5A01_CORRIDOR_RETURN",
    optionPattern: /洗衣房|陆沉/,
    routeNodeIds: ["ACT5_5A01E_LAUNDRY_PAUSE", "ACT5_5A01F_LAUNDRY_LUCHEN", "ACT5_5A01G_LAUNDRY_BACK"],
    returnNodeId: "ACT5_5A02_DOORWAY_PAUSE",
  },
  {
    fromNodeId: "ACT5_5A10_BEFORE_MEETING",
    optionPattern: /水房|洗把脸/,
    routeNodeIds: ["ACT5_5A10A_WASHROOM_RESET", "ACT5_5A10A2_WASHROOM_EDGE", "ACT5_5A10B_WASHROOM_MESSAGE"],
    returnNodeId: "ACT5_5A11_TABLE_TIMER",
  },
  {
    fromNodeId: "ACT5_5A10_BEFORE_MEETING",
    optionPattern: /楼梯间|周屿|不针对/,
    routeNodeIds: ["ACT5_5A10C_STAIRWELL_ZHOUYU", "ACT5_5A10D_STAIRWELL_TEXT", "ACT5_5A10E_STAIRWELL_BACK"],
    returnNodeId: "ACT5_5A11_TABLE_TIMER",
  },
  {
    fromNodeId: "ACT5_5A16_CANTEEN_SEAT",
    optionPattern: /便利店|买水/,
    routeNodeIds: ["ACT5_5A16A_STORE_WATER", "ACT5_5A16A2_STORE_TALK", "ACT5_5A16B_STORE_RETURN"],
    returnNodeId: "ACT5_5A17_AFTER_MEAL_CHAT",
  },
  {
    fromNodeId: "ACT5_5A16_CANTEEN_SEAT",
    optionPattern: /侧门|夏知微|相机/,
    routeNodeIds: ["ACT5_5A16C_SIDE_DOOR_XIA", "ACT5_5A16D_SIDE_DOOR_CAMERA", "ACT5_5A16D2_SIDE_DOOR_FUTURE", "ACT5_5A16E_SIDE_DOOR_BACK"],
    returnNodeId: "ACT5_5A17_AFTER_MEAL_CHAT",
  },
  {
    fromNodeId: "ACT5_5A16_CANTEEN_SEAT",
    optionPattern: /沈嘉禾/,
    routeNodeIds: ["ACT5_5A16F_SIDE_DOOR_SHEN", "ACT5_5A16G_SIDE_DOOR_SHEN_DORM", "ACT5_5A16E_SIDE_DOOR_BACK"],
    returnNodeId: "ACT5_5A17_AFTER_MEAL_CHAT",
  },
  {
    fromNodeId: "ACT5_5A16_CANTEEN_SEAT",
    optionPattern: /秦越/,
    routeNodeIds: ["ACT5_5A16H_SIDE_DOOR_QINYUE", "ACT5_5A16I_SIDE_DOOR_QINYUE_DORM", "ACT5_5A16E_SIDE_DOOR_BACK"],
    returnNodeId: "ACT5_5A17_AFTER_MEAL_CHAT",
  },
  {
    fromNodeId: "ACT5_5A19_EXAM_NIGHT_RETURN",
    optionPattern: /走廊|背两页/,
    routeNodeIds: ["ACT5_5A19A_HALLWAY_REVIEW", "ACT5_5A19A2_HALLWAY_EDGE", "ACT5_5A19B_HALLWAY_BACK"],
    returnNodeId: "ACT5_5A20_RELAPSE_CHOICE",
  },
  {
    fromNodeId: "ACT5_5A19_EXAM_NIGHT_RETURN",
    optionPattern: /水房|热水|杯子/,
    routeNodeIds: ["ACT5_5A19C_WATER_ROOM_THERMOS", "ACT5_5A19D_WATER_ROOM_LUCHEN", "ACT5_5A19E_WATER_ROOM_BACK"],
    returnNodeId: "ACT5_5A20_RELAPSE_CHOICE",
  },
].forEach(assertMultiPageLoopRoute);

let game = engine.createGame(data);
let guard = 0;
while (game.currentNodeId !== "ACT5_5A99_DORM_OUTPUT_FULL" && guard < chain.length + 2) {
  const node = nodes[game.currentNodeId];
  assert.ok(node, `engine traversal missing node ${game.currentNodeId}`);
  assert.ok((node.可选互动 || []).length > 0, `${game.currentNodeId} should have at least one option before output`);
  game = engine.chooseOption(game, 0);
  guard += 1;
}

assert.strictEqual(game.currentNodeId, "ACT5_5A99_DORM_OUTPUT_FULL", "engine should reach full 5A output page");
assert.ok(game.log.length >= 20, `engine traversal should record 20+ choices, got ${game.log.length}`);

console.log("5A full data tests passed");
