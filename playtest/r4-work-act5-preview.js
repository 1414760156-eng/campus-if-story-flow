(function attach(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.R4WorkAct5Preview = api;
    if (root.document) {
      root.addEventListener("DOMContentLoaded", () => api.boot());
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function buildPreview() {
  const state = {
    sectionIndex: 0,
    mode: "pre",
    pageIndex: 0,
    direction: "",
    feedbackIndex: 0,
    microSelections: {},
    history: [],
    stack: [],
  };

  let els = {};
  let data = null;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function getSection() {
    return data.sections[state.sectionIndex];
  }

  function getDirection() {
    const section = getSection();
    return section.directions.find((item) => item.key === state.direction);
  }

  function setChildren(node, children) {
    node.replaceChildren(...children.filter(Boolean));
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function paragraphList(paragraphs) {
    return (paragraphs || []).map((text) => el("p", "", text));
  }

  function metricCounts() {
    const counts = {
      sections: data.sections.length,
      prePages: 0,
      choices: 0,
      directions: 0,
      feedbackPages: 0,
      microGroups: 0,
      microOptions: 0,
    };

    data.sections.forEach((section) => {
      counts.prePages += section.prePages.length;
      counts.choices += section.choice ? 1 : 0;
      counts.directions += section.directions.length;
      section.directions.forEach((direction) => {
        counts.feedbackPages += direction.feedbackPages.length;
        direction.feedbackPages.forEach((page) => {
          counts.microGroups += page.microGroups.length;
          page.microGroups.forEach((group) => {
            counts.microOptions += group.options.length;
          });
        });
      });
    });

    return counts;
  }

  function renderMetrics() {
    const counts = metricCounts();
    const rows = [
      ["桥接窗", counts.sections],
      ["选择前页", counts.prePages],
      ["宏观选择窗", counts.choices],
      ["宏观方向", counts.directions],
      ["反馈页", counts.feedbackPages],
      ["微心态组", counts.microGroups],
      ["微选项", counts.microOptions],
    ];

    const nodes = [];
    rows.forEach(([label, value]) => {
      nodes.push(el("dt", "", label));
      nodes.push(el("dd", "", String(value)));
    });
    setChildren(els.metricsList, nodes);
  }

  function renderSectionList() {
    const buttons = data.sections.map((section, index) => {
      const button = el("button", "section-button", `${section.id} ${section.shortTitle}`);
      button.type = "button";
      if (index === state.sectionIndex) button.classList.add("active");
      button.addEventListener("click", () => {
        pushStack();
        Object.assign(state, {
          sectionIndex: index,
          mode: "pre",
          pageIndex: 0,
          direction: "",
          feedbackIndex: 0,
          microSelections: {},
        });
        render();
      });
      return button;
    });
    setChildren(els.sectionList, buttons);
  }

  function renderHistory() {
    if (state.history.length === 0) {
      setChildren(els.historyList, [el("li", "history-detail", "还没有选择记录。")]);
      return;
    }

    const items = state.history.map((item) => {
      const li = el("li");
      const strong = el("strong", "", item.title);
      const detail = el("div", "history-detail", item.detail);
      setChildren(li, [strong, detail]);
      return li;
    });
    setChildren(els.historyList, items);
  }

  function updateChrome(title, location, progress) {
    const section = getSection();
    els.stageChip.textContent = section.id;
    els.pageProgress.textContent = progress || "";
    els.pageTitle.textContent = title || section.title;
    els.pageLocation.textContent = location || "";
  }

  function renderPrePage() {
    const section = getSection();
    const page = section.prePages[state.pageIndex];
    updateChrome(page.title, page.location, `${state.pageIndex + 1} / ${section.prePages.length} 选择前剧情`);
    setChildren(els.pageBody, paragraphList(page.paragraphs));
    els.choicePanel.hidden = true;
    els.microPanel.hidden = true;
    els.nextButton.hidden = false;
    els.nextButton.disabled = false;
    if (state.pageIndex + 1 < section.prePages.length) {
      els.nextButton.textContent = "下一页";
    } else if (section.choice) {
      els.nextButton.textContent = "进入抉择";
    } else if (state.sectionIndex + 1 < data.sections.length) {
      els.nextButton.textContent = "继续";
    } else {
      els.nextButton.textContent = "完成";
    }
  }

  function renderChoice() {
    const section = getSection();
    const choice = section.choice;
    updateChrome(choice.title, "宏观选择窗", "选择一个处理方向");
    setChildren(els.pageBody, paragraphList([choice.guide]));

    const buttons = choice.options.map((option) => {
      const button = el("button", "option-button");
      button.type = "button";
      const title = el("span", "option-title", `${option.key}. ${option.label}`);
      const detail = el("span", "option-detail", option.detail);
      setChildren(button, [title, detail]);
      button.addEventListener("click", () => selectDirection(option));
      return button;
    });

    setChildren(els.choicePanel, buttons);
    els.choicePanel.hidden = false;
    els.microPanel.hidden = true;
    els.nextButton.hidden = true;
    els.nextButton.disabled = true;
    els.nextButton.textContent = "先选择方向";
  }

  function selectedMicroKeys(page) {
    return page.microGroups.map((group) => `${page.id}:${group.prompt}`);
  }

  function renderFeedback() {
    const section = getSection();
    const direction = getDirection();
    const page = direction.feedbackPages[state.feedbackIndex];
    updateChrome(page.title, direction.title, `${state.feedbackIndex + 1} / ${direction.feedbackPages.length} 反馈页`);
    setChildren(els.pageBody, paragraphList(page.paragraphs));
    els.choicePanel.hidden = true;

    const microCards = page.microGroups.map((group) => {
      const key = `${page.id}:${group.prompt}`;
      const card = el("section", "micro-card");
      const title = el("h3", "", group.prompt);
      const row = el("div", "micro-options");
      const options = group.options.map((option) => {
        const button = el("button", "micro-choice");
        button.type = "button";
        if (state.microSelections[key] === option.key) button.classList.add("selected");
        setChildren(button, [
          el("strong", "", `${option.key}. ${option.action}`),
          el("span", "micro-feedback", option.feedback),
        ]);
        button.addEventListener("click", () => selectMicro(page, group, option));
        return button;
      });
      setChildren(row, options);
      setChildren(card, [title, row]);
      return card;
    });

    setChildren(els.microPanel, microCards);
    els.microPanel.hidden = microCards.length === 0;

    const required = selectedMicroKeys(page);
    const complete = required.every((key) => state.microSelections[key]);
    els.nextButton.hidden = microCards.length > 0;
    els.nextButton.disabled = required.length > 0 && !complete;
    els.nextButton.textContent = nextLabel();
  }

  function renderEnd() {
    const end = data.end || {};
    updateChrome(
      end.title || "ACT5-WORK 试玩到达末尾",
      end.location || "下一跳：ACT6-WORK-B01",
      end.progress || "桥接完成"
    );
    setChildren(els.pageBody, paragraphList(end.paragraphs || [
      "五个工作线桥接窗已读完。当前试玩数据来自正式剧情页级 JSON 的 act5_detail_blocks，可用于复核 B01-B05 的阅读手感、选择压力和微心态密度。",
      "如果要继续推进，下一步应进入 ACT6-WORK-B01，承接第一周清单、固定班、4XX 短时照面和现实事项排布。",
    ]));
    els.choicePanel.hidden = true;
    els.microPanel.hidden = true;
    els.nextButton.hidden = false;
    els.nextButton.disabled = true;
    els.nextButton.textContent = "已完成";
  }

  function nextLabel() {
    if (state.mode === "pre") return "下一页";
    if (state.mode !== "feedback") return "下一页";

    const direction = getDirection();
    if (state.feedbackIndex + 1 < direction.feedbackPages.length) return "下一反馈页";
    if (state.sectionIndex + 1 < data.sections.length) return "进入下一窗";
    return "完成 Act5";
  }

  function pushStack() {
    state.stack.push(clone({
      sectionIndex: state.sectionIndex,
      mode: state.mode,
      pageIndex: state.pageIndex,
      direction: state.direction,
      feedbackIndex: state.feedbackIndex,
      microSelections: state.microSelections,
      history: state.history,
    }));
  }

  function selectDirection(option) {
    const section = getSection();
    pushStack();
    state.direction = option.key;
    state.mode = "feedback";
    state.feedbackIndex = 0;
    state.microSelections = {};
    state.history.push({
      title: `${section.id} 选择 ${option.key}`,
      detail: `${option.label}。${option.detail}`,
    });
    render();
  }

  function selectMicro(page, group, option) {
    const key = `${page.id}:${group.prompt}`;
    state.microSelections[key] = option.key;
    state.history.push({
      title: `${page.id} 微选择 ${option.key}`,
      detail: `${option.action}。${option.feedback}`,
    });

    const complete = selectedMicroKeys(page).every((item) => state.microSelections[item]);
    if (complete) {
      advanceFeedback();
      return;
    }

    render();
  }

  function advanceFeedback() {
    pushStack();
    const direction = getDirection();
    if (state.feedbackIndex + 1 < direction.feedbackPages.length) {
      state.feedbackIndex += 1;
    } else if (state.sectionIndex + 1 < data.sections.length) {
      Object.assign(state, {
        sectionIndex: state.sectionIndex + 1,
        mode: "pre",
        pageIndex: 0,
        direction: "",
        feedbackIndex: 0,
        microSelections: {},
      });
    } else {
      state.mode = "end";
    }
    render();
    scrollToReaderTop();
  }

  function scrollToReaderTop() {
    if (!els.pageTitle || typeof els.pageTitle.scrollIntoView !== "function") return;
    els.pageTitle.scrollIntoView({ block: "start" });
  }

  function next() {
    if (els.nextButton.disabled || els.nextButton.hidden) return;

    pushStack();
    if (state.mode === "pre") {
      const section = getSection();
      if (state.pageIndex + 1 < section.prePages.length) {
        state.pageIndex += 1;
      } else if (section.choice) {
        state.mode = "choice";
      } else if (state.sectionIndex + 1 < data.sections.length) {
        Object.assign(state, {
          sectionIndex: state.sectionIndex + 1,
          mode: "pre",
          pageIndex: 0,
          direction: "",
          feedbackIndex: 0,
          microSelections: {},
        });
      } else {
        state.mode = "end";
      }
      render();
      scrollToReaderTop();
      return;
    }

    if (state.mode === "feedback") {
      state.stack.pop();
      advanceFeedback();
    }
  }

  function back() {
    const previous = state.stack.pop();
    if (!previous) return;
    Object.assign(state, previous);
    render();
  }

  function reset() {
    Object.assign(state, {
      sectionIndex: 0,
      mode: "pre",
      pageIndex: 0,
      direction: "",
      feedbackIndex: 0,
      microSelections: {},
      history: [],
      stack: [],
    });
    render();
  }

  function exportRun() {
    const payload = {
      route: data.route,
      pool: data.pool,
      source: data.source,
      history: state.history,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = data.exportFileName || "r4-work-act5-preview-run.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  function render() {
    if (!data || !Array.isArray(data.sections) || data.sections.length === 0) {
      setChildren(els.pageBody, [el("div", "error-box", "试玩数据未加载。请确认 r4-work-act5-preview-data.js 已由正式 JSON 导出，并与本页面在同一目录。")]);
      return;
    }

    els.backButton.disabled = state.stack.length === 0;
    renderMetrics();
    renderSectionList();
    renderHistory();

    if (state.mode === "pre") renderPrePage();
    if (state.mode === "choice") renderChoice();
    if (state.mode === "feedback") renderFeedback();
    if (state.mode === "end") renderEnd();
  }

  function boot() {
    data = window.R4WorkAct5PreviewData;
    els = {
      routeChip: document.getElementById("route-chip"),
      poolChip: document.getElementById("pool-chip"),
      stageChip: document.getElementById("stage-chip"),
      pageProgress: document.getElementById("page-progress"),
      pageTitle: document.getElementById("page-title"),
      pageLocation: document.getElementById("page-location"),
      pageBody: document.getElementById("page-body"),
      choicePanel: document.getElementById("choice-panel"),
      microPanel: document.getElementById("micro-panel"),
      backButton: document.getElementById("back-button"),
      nextButton: document.getElementById("next-button"),
      resetButton: document.getElementById("reset-button"),
      exportButton: document.getElementById("export-button"),
      metricsList: document.getElementById("metrics-list"),
      sectionList: document.getElementById("section-list"),
      historyList: document.getElementById("history-list"),
    };

    if (data) {
      els.routeChip.textContent = data.route || "R4-WORK";
      els.poolChip.textContent = data.pool || "POOL-R4-WORK";
    }

    els.backButton.addEventListener("click", back);
    els.nextButton.addEventListener("click", next);
    els.resetButton.addEventListener("click", reset);
    els.exportButton.addEventListener("click", exportRun);
    render();
  }

  return {
    boot,
    metricCounts,
  };
});
