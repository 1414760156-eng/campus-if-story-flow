(function boot() {
  const data = window.FiveAPlaytestData;
  const engine = window.PlaytestEngine;

  const stateKeys = [
    "宿舍互信",
    "回避值",
    "规则可信度",
    "宿舍火药味",
    "公开站队",
    "短期决裂",
    "短期决裂风险",
    "低温共处",
    "修补温度",
    "现实压力",
  ];

  const els = {
    act: document.getElementById("node-act"),
    line: document.getElementById("node-line"),
    progress: document.getElementById("node-progress"),
    title: document.getElementById("node-title"),
    scene: document.getElementById("node-scene"),
    summary: document.getElementById("node-summary"),
    choices: document.getElementById("choice-list"),
    states: document.getElementById("state-list"),
    logs: document.getElementById("log-list"),
    ending: document.getElementById("ending-panel"),
    feedback: document.getElementById("feedback-panel"),
    feedbackText: document.getElementById("feedback-text"),
    continue: document.getElementById("continue-button"),
    restart: document.getElementById("restart-button"),
    export: document.getElementById("export-button"),
  };

  let game = engine.createGame({
    nodes: data.nodes,
    chain: data.chain,
    startNodeId: data.startNodeId,
  });
  let pendingAdvance = null;

  function formatEffect(effect) {
    const entries = Object.entries(effect || {});
    if (entries.length === 0) return "";
    return entries.map(([key, value]) => `${key} ${Number(value) > 0 ? "+" : ""}${value}`).join(" / ");
  }

  function clampMeter(value) {
    return Math.max(0, Math.min(100, Number(value) || 0));
  }

  function getNodeTitle(node) {
    const index = data.chain.indexOf(node.节点ID);
    if (node.标题) return node.标题;
    if (node.节点ID === "ACT5_00_CONFUSION_AUDIT") return "混乱盘点夜";
    if (node.节点ID === "ACT5_01_LINE_ROUTER") return "分线整理页";
    if (node.节点ID === "ACT5_5A99_DORM_OUTPUT") return "宿舍线输出页";
    return `5A${String(Math.max(1, index - 1)).padStart(2, "0")} ${node.场景.split("_")[0]}`;
  }

  function getNarrativeText(node) {
    return [node.过场剧情, node.玩家可见摘要, node.选择前铺垫].filter(Boolean).join("\n\n");
  }

  function renderState() {
    els.states.innerHTML = "";
    stateKeys.forEach((key) => {
      const row = document.createElement("div");
      row.className = "state-row";

      const term = document.createElement("dt");
      term.textContent = key;

      const value = document.createElement("dd");
      value.textContent = game.state[key] || 0;

      const meter = document.createElement("div");
      meter.className = "meter";
      const fill = document.createElement("span");
      fill.style.width = `${clampMeter(game.state[key])}%`;
      meter.appendChild(fill);

      row.append(term, value, meter);
      els.states.appendChild(row);
    });
  }

  function renderChoices(node) {
    els.choices.innerHTML = "";
    els.choices.hidden = Boolean(pendingAdvance);
    if (pendingAdvance) return;
    (node.可选互动 || []).forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.addEventListener("click", () => handleChoice(index));

      const title = document.createElement("span");
      title.className = "choice-title";
      title.textContent = option.选项;

      const effect = document.createElement("span");
      effect.className = "choice-effect";
      effect.textContent = formatEffect(option.状态影响);

      button.append(title);
      if (effect.textContent) button.append(effect);
      els.choices.appendChild(button);
    });
  }

  function renderLog() {
    els.logs.innerHTML = "";
    game.log.forEach((entry) => {
      const item = document.createElement("li");

      const option = document.createElement("span");
      option.className = "log-option";
      option.textContent = entry.option;

      const feedback = document.createElement("span");
      feedback.className = "log-feedback";
      feedback.textContent = entry.feedback;

      const effect = document.createElement("span");
      effect.className = "log-effect";
      effect.textContent = formatEffect(entry.effect);

      item.append(option, feedback);
      if (effect.textContent) item.append(effect);
      els.logs.appendChild(item);
    });
  }

  function renderEnding(node) {
    const isOutput = node.节点ID === "ACT5_5A99_DORM_OUTPUT" || node.输出页;
    els.ending.hidden = !isOutput;
    if (!isOutput) {
      els.ending.innerHTML = "";
      return;
    }

    const ending = engine.resolveEnding(game.state);
    els.ending.innerHTML = "";

    const label = document.createElement("span");
    label.className = "ending-label";
    label.textContent = ending.label;

    const tone = document.createElement("span");
    tone.className = "ending-tone";
    tone.textContent = ending.tone;

    els.ending.append(label, tone);
  }

  function renderFeedback() {
    els.feedback.hidden = !pendingAdvance;
    if (!pendingAdvance) {
      els.feedbackText.textContent = "";
      return;
    }
    els.feedbackText.textContent = pendingAdvance.feedback;
  }

  function render() {
    const node = game.nodes[game.currentNodeId];
    const index = data.chain.indexOf(game.currentNodeId);
    els.act.textContent = node.幕 || "第五幕";
    els.line.textContent = node.分线 || "";
    els.progress.textContent = `${Math.max(index + 1, 1)} / ${data.chain.length}`;
    els.title.textContent = getNodeTitle(node);
    els.scene.textContent = node.场景 || "";
    els.summary.textContent = getNarrativeText(node);
    renderEnding(node);
    renderFeedback();
    renderChoices(node);
    renderState();
    renderLog();
  }

  function handleChoice(index) {
    const node = game.nodes[game.currentNodeId];
    const option = (node.可选互动 || [])[index];
    const nextGame = engine.chooseOption(game, index);
    pendingAdvance = {
      nextGame,
      feedback: option.选择后反馈 || option.即时反馈 || "",
    };
    game = Object.assign({}, game, {
      state: nextGame.state,
      log: nextGame.log,
    });
    render();
  }

  function continueAdvance() {
    if (!pendingAdvance) return;
    game = pendingAdvance.nextGame;
    pendingAdvance = null;
    render();
  }

  function restart() {
    game = engine.createGame({
      nodes: data.nodes,
      chain: data.chain,
      startNodeId: data.startNodeId,
    });
    pendingAdvance = null;
    render();
  }

  function exportLog() {
    const ending = engine.resolveEnding(game.state);
    const payload = {
      title: data.title,
      currentNodeId: game.currentNodeId,
      ending,
      state: game.state,
      log: game.log,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "5a-playtest-log.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  els.continue.addEventListener("click", continueAdvance);
  els.restart.addEventListener("click", restart);
  els.export.addEventListener("click", exportLog);
  render();
})();
