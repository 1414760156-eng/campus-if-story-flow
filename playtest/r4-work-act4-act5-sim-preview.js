(function attach(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.R4WorkAct45SimPreview = api;
    root.addEventListener("DOMContentLoaded", () => api.boot());
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function buildSimulator() {
  const state = {
    phase: "act4",
    act4Index: 0,
    act5Index: 0,
    act4Choices: [],
    act5Choices: [],
    variables: {},
    act5Hooks: [],
    act6Hooks: [],
    requiredWindows: [],
    stack: [],
  };

  let data = null;
  let els = {};

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function setChildren(node, children) {
    node.replaceChildren(...children.filter(Boolean));
  }

  function addDelta(delta) {
    Object.entries(delta || {}).forEach(([key, value]) => {
      if (key === "act5_echo_hook" || key === "act6_echo_hook" || key === "act5_required_windows_seen") return;
      if (typeof value === "number") {
        state.variables[key] = (Number(state.variables[key]) || 0) + value;
      } else {
        state.variables[key] = value;
      }
    });
  }

  function pushStack() {
    state.stack.push(clone(state));
  }

  function selectedCarryoversForBlock(blockId) {
    const selectedHooks = new Set(state.act5Hooks.map((item) => item.hook));
    return data.carryoverRules.filter((rule) => (
      selectedHooks.has(rule.act5_echo_hook) && rule.target_blocks.includes(blockId)
    ));
  }

  function renderMetrics() {
    const rows = [
      ["Act4 判定", `${state.act4Choices.length} / ${data.act4Blocks.length}`],
      ["Act5 判定", `${state.act5Choices.length} / ${data.act5Blocks.length}`],
      ["Act5 回声", state.act5Hooks.length],
      ["Act6 回声", state.act6Hooks.length],
      ["必经窗口", new Set(state.requiredWindows).size],
    ];
    const nodes = [];
    rows.forEach(([label, value]) => {
      nodes.push(el("dt", "", label));
      nodes.push(el("dd", "", String(value)));
    });
    setChildren(els.metricsList, nodes);
  }

  function renderVariables() {
    const entries = Object.entries(state.variables);
    if (entries.length === 0) {
      setChildren(els.variableList, [el("span", "history-detail", "还没有变量。")]);
      return;
    }
    setChildren(els.variableList, entries.map(([key, value]) => el("span", "token", `${key}: ${value}`)));
  }

  function renderHooks() {
    if (state.act5Hooks.length === 0 && state.act6Hooks.length === 0) {
      setChildren(els.hookList, [el("li", "history-detail", "还没有回声钩子。")]);
      return;
    }
    const items = [
      ...state.act5Hooks.map((item) => ({ title: item.hook, detail: `${item.source} -> ${item.targets.join(", ")}` })),
      ...state.act6Hooks.map((item) => ({ title: item.hook, detail: `${item.source} -> ACT6` })),
    ].map((item) => {
      const li = el("li");
      setChildren(li, [el("strong", "", item.title), el("div", "history-detail", item.detail)]);
      return li;
    });
    setChildren(els.hookList, items);
  }

  function renderHistory() {
    const history = [
      ...state.act4Choices.map((choice) => ({ title: `${choice.block} ${choice.key}`, detail: choice.label })),
      ...state.act5Choices.map((choice) => ({ title: `${choice.block} ${choice.key}`, detail: choice.label })),
    ];
    if (history.length === 0) {
      setChildren(els.historyList, [el("li", "history-detail", "还没有选择。")]);
      return;
    }
    setChildren(els.historyList, history.map((item) => {
      const li = el("li");
      setChildren(li, [el("strong", "", item.title), el("div", "history-detail", item.detail)]);
      return li;
    }));
  }

  function renderShell() {
    els.routeChip.textContent = data.route;
    els.poolChip.textContent = data.pool;
    els.phaseChip.textContent = state.phase === "act4" ? "Act4 判定" : state.phase === "act5" ? "Act5 承接" : "报告";
    els.backButton.disabled = state.stack.length === 0;
    renderMetrics();
    renderVariables();
    renderHooks();
    renderHistory();
  }

  function optionButton(label, detail, onClick) {
    const button = el("button", "option-button");
    button.type = "button";
    setChildren(button, [el("span", "option-title", label), el("span", "option-detail", detail)]);
    button.addEventListener("click", onClick);
    return button;
  }

  function renderAct4() {
    const block = data.act4Blocks[state.act4Index];
    els.progress.textContent = `${state.act4Index + 1} / ${data.act4Blocks.length}`;
    els.title.textContent = `${block.id} ${block.title}`;
    els.location.textContent = "选择 Act4 判定，生成 Act5 回声";
    setChildren(els.body, [el("p", "", block.guide)]);
    els.carryoverPanel.hidden = true;
    setChildren(els.options, block.options.map((option) => optionButton(
      `${option.key}. ${option.label}`,
      option.detail,
      () => chooseAct4(block, option)
    )));
  }

  function renderCarryover(block) {
    const count = selectedCarryoversForBlock(block.id).length;
    els.carryoverPanel.hidden = true;
    setChildren(els.carryoverPanel, count ? [el("span", "", String(count))] : []);
  }

  function renderAct5() {
    const block = data.act5Blocks[state.act5Index];
    els.progress.textContent = `${state.act5Index + 1} / ${data.act5Blocks.length}`;
    els.title.textContent = `${block.id} ${block.title}`;
    els.location.textContent = "进入 Act5，检查 Act4 判定如何兑现";
    const paragraphs = [
      el("p", "", block.sceneFunction),
      ...block.prelude.flatMap((page) => [
        el("p", "history-detail", `${page.title} / ${page.location}`),
        ...page.paragraphs.slice(0, 2).map((text) => el("p", "", text)),
      ]),
      el("p", "", block.choice.guide),
    ];
    setChildren(els.body, paragraphs);
    renderCarryover(block);
    setChildren(els.options, block.choice.options.map((option) => optionButton(
      `${option.key}. ${option.label}`,
      option.detail,
      () => chooseAct5(block, option)
    )));
  }

  function renderEnd() {
    els.progress.textContent = "完成";
    els.title.textContent = "4 -> 5 判定模拟完成";
    els.location.textContent = "复制其它路线前的联通样板";
    const windows = [...new Set(state.requiredWindows)];
    const wrapper = el("div", "sim-report");
    const act4List = el("ol", "summary-list");
    setChildren(act4List, state.act4Choices.map((choice) => el("li", "", `${choice.block} ${choice.key}：${choice.label}`)));
    const act5List = el("ol", "summary-list");
    setChildren(act5List, state.act5Choices.map((choice) => el("li", "", `${choice.block} ${choice.key}：${choice.label}`)));
    setChildren(wrapper, [
      el("p", "", "这一轮已经从 Act4 六个判定进入 Act5 五个承接窗，并生成 Act6 可读取的回声钩子。"),
      el("p", "history-detail", `已覆盖 Act5 必经窗口：${windows.join(" / ")}`),
      el("p", "history-detail", `Act5 回声 ${state.act5Hooks.length} 条，Act6 回声 ${state.act6Hooks.length} 条。完整 JSON 记录可用右下角“导出记录”保存。`),
      el("h3", "", "Act4 判定路径"),
      act4List,
      el("h3", "", "Act5 承接路径"),
      act5List,
    ]);
    setChildren(els.body, [wrapper]);
    els.carryoverPanel.hidden = true;
    setChildren(els.options, []);
  }

  function chooseAct4(block, option) {
    pushStack();
    addDelta(option.variableDelta);
    state.act4Choices.push({ block: block.id, key: option.key, label: option.label, hook: option.act5EchoHook });
    state.act5Hooks.push({
      source: `${block.id}-${option.key}`,
      hook: option.act5EchoHook,
      targets: option.carryover?.targetBlocks || [],
      realization: option.carryover?.realization || "",
    });
    if (state.act4Index + 1 < data.act4Blocks.length) {
      state.act4Index += 1;
    } else {
      state.phase = "act5";
      state.act5Index = 0;
    }
    render();
  }

  function chooseAct5(block, option) {
    pushStack();
    addDelta(option.variableDelta);
    state.act5Choices.push({ block: block.id, key: option.key, label: option.label });
    if (option.requiredWindow) state.requiredWindows.push(option.requiredWindow);
    if (option.act6EchoHook) {
      state.act6Hooks.push({ source: `${block.id}-${option.key}`, hook: option.act6EchoHook });
    }
    if (state.act5Index + 1 < data.act5Blocks.length) {
      state.act5Index += 1;
    } else {
      state.phase = "end";
    }
    render();
  }

  function back() {
    const previous = state.stack.pop();
    if (!previous) return;
    Object.assign(state, previous);
    render();
  }

  function reset() {
    Object.assign(state, {
      phase: "act4",
      act4Index: 0,
      act5Index: 0,
      act4Choices: [],
      act5Choices: [],
      variables: {},
      act5Hooks: [],
      act6Hooks: [],
      requiredWindows: [],
      stack: [],
    });
    render();
  }

  function exportRun() {
    const payload = {
      source: data.source,
      act4Choices: state.act4Choices,
      act5Choices: state.act5Choices,
      variables: state.variables,
      act5Hooks: state.act5Hooks,
      act6Hooks: state.act6Hooks,
      requiredWindows: [...new Set(state.requiredWindows)],
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "r4-work-act4-act5-sim-run.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  function render() {
    renderShell();
    if (state.phase === "act4") renderAct4();
    if (state.phase === "act5") renderAct5();
    if (state.phase === "end") renderEnd();
  }

  function boot() {
    data = window.R4WorkAct45SimData;
    els = {
      routeChip: document.getElementById("route-chip"),
      poolChip: document.getElementById("pool-chip"),
      phaseChip: document.getElementById("phase-chip"),
      progress: document.getElementById("sim-progress"),
      title: document.getElementById("sim-title"),
      location: document.getElementById("sim-location"),
      body: document.getElementById("sim-body"),
      carryoverPanel: document.getElementById("carryover-panel"),
      options: document.getElementById("sim-options"),
      metricsList: document.getElementById("metrics-list"),
      variableList: document.getElementById("variable-list"),
      hookList: document.getElementById("hook-list"),
      historyList: document.getElementById("history-list"),
      backButton: document.getElementById("back-button"),
      resetButton: document.getElementById("reset-button"),
      exportButton: document.getElementById("export-button"),
    };
    els.backButton.addEventListener("click", back);
    els.resetButton.addEventListener("click", reset);
    els.exportButton.addEventListener("click", exportRun);
    render();
  }

  return { boot };
});
