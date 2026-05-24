(function attach(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.R4WorkAct4Preview = api;
    if (root.document) {
      root.addEventListener("DOMContentLoaded", () => api.boot());
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function buildPreview() {
  const SOURCE_PATH = "../docs/剧情小说母版_v4.0/开发正文_IF第四幕ACT4-WORK_P2标准剧情页_L01-L06.md";
  const ROUTE_ID = "R4-WORK";
  const POOL_ID = "POOL-R4-WORK";

  function stripInlineMarkdown(value) {
    return String(value || "")
      .replace(/`([^`]*)`/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\\\|/g, "|")
      .trim();
  }

  function normalizeMarkdown(markdown) {
    return String(markdown || "").replace(/^\uFEFF/, "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  }

  function splitTableRow(line) {
    const trimmed = String(line || "").trim();
    if (!trimmed.startsWith("|") || !trimmed.endsWith("|")) return null;
    if (/^\|\s*-+/.test(trimmed)) return null;
    return trimmed
      .slice(1, -1)
      .split("|")
      .map((cell) => cell.trim());
  }

  function linesToParagraphs(lines) {
    const paragraphs = [];
    let bucket = [];

    function flush() {
      const text = bucket.join("\n").trim();
      if (text) paragraphs.push(stripInlineMarkdown(text));
      bucket = [];
    }

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed === "---") {
        flush();
        return;
      }
      if (/^#{2,4}\s/.test(trimmed)) {
        flush();
        return;
      }
      bucket.push(line.trimEnd());
    });
    flush();
    return paragraphs;
  }

  function parseFeedbackRefs(lockId, refs, direction) {
    const base = `ACT4-WORK-${lockId}-P2`;
    const matches = [...String(refs || "").matchAll(/P2-([ABC])(\d{2})/g)];
    if (matches.length > 0) {
      return matches.map((match) => `${base}-${match[1]}${match[2]}`);
    }
    return [`${base}-${direction}01`, `${base}-${direction}02`];
  }

  function parseNumericEffects(text) {
    const effects = {};
    const cleaned = stripInlineMarkdown(text);
    const pattern = /\b([A-Za-z_][A-Za-z0-9_]*)\s+([+-])\s*(\d+(?:\.\d+)?)/g;
    for (const match of cleaned.matchAll(pattern)) {
      const key = match[1];
      const value = Number(match[3]) * (match[2] === "-" ? -1 : 1);
      effects[key] = Number((effects[key] || 0) + value);
    }
    return effects;
  }

  function parseEffectSegments(direction, text) {
    const cleaned = stripInlineMarkdown(text);
    const marker = new RegExp(`(${direction}\\d+)\\s+`, "g");
    const matches = [...cleaned.matchAll(marker)];
    const map = {};
    matches.forEach((match, index) => {
      const start = match.index + match[0].length;
      const end = index + 1 < matches.length ? matches[index + 1].index : cleaned.length;
      map[match[1]] = cleaned.slice(start, end).replace(/^[:：]\s*/, "").replace(/[；;]\s*$/, "").trim();
    });
    return map;
  }

  function parseMicroOptions(direction, text, effectText) {
    const cleaned = stripInlineMarkdown(text);
    const marker = new RegExp(`(${direction}\\d+)\\s+`, "g");
    const matches = [...cleaned.matchAll(marker)];
    if (matches.length === 0) return [];

    const effectMap = parseEffectSegments(direction, effectText);
    return matches.map((match, index) => {
      const start = match.index + match[0].length;
      const end = index + 1 < matches.length ? matches[index + 1].index : cleaned.length;
      const code = match[1];
      const label = cleaned.slice(start, end).replace(/[；;]\s*$/, "").trim();
      const effect = effectMap[code] || "";
      return {
        code,
        label,
        effectText: effect,
        effects: parseNumericEffects(effect),
      };
    });
  }

  function parseEchoHooks(text) {
    const hooks = [];
    const cleaned = stripInlineMarkdown(text);
    for (const match of cleaned.matchAll(/act5_echo_hook\s*=\s*([A-Za-z0-9_-]+)/g)) {
      hooks.push(match[1]);
    }
    return hooks;
  }

  function parseDirectionChains(lines) {
    const chains = {};
    const starts = [];
    lines.forEach((line, index) => {
      const match = line.match(/^####\s+([ABC])\s+(.+)$/);
      if (match) {
        starts.push({
          direction: match[1],
          title: stripInlineMarkdown(match[2]),
          index,
        });
      }
    });

    starts.forEach((start, startIndex) => {
      const end = startIndex + 1 < starts.length ? starts[startIndex + 1].index : lines.length;
      const block = lines.slice(start.index + 1, end);
      const beats = [];
      const microGroups = [];
      const echoHooks = [];

      block.forEach((line) => {
        const cells = splitTableRow(line);
        if (!cells || !/^\d+$/.test(cells[0] || "") || cells.length < 5) return;
        const microOptions = parseMicroOptions(start.direction, cells[3], cells[4]);
        const hooks = parseEchoHooks(cells[4]);
        hooks.forEach((hook) => {
          if (!echoHooks.includes(hook)) echoHooks.push(hook);
        });

        const beat = {
          beat: Number(cells[0]),
          role: stripInlineMarkdown(cells[1]),
          action: stripInlineMarkdown(cells[2]),
          microText: stripInlineMarkdown(cells[3]),
          effectText: stripInlineMarkdown(cells[4]),
          microOptions,
          echoHooks: hooks,
        };
        beats.push(beat);
        if (microOptions.length > 0) {
          microGroups.push({
            id: `${start.direction}-${cells[0]}`,
            beat: beat.beat,
            role: beat.role,
            action: beat.action,
            options: microOptions,
          });
        }
      });

      chains[start.direction] = {
        direction: start.direction,
        title: start.title,
        beats,
        microGroups,
        echoHooks,
      };
    });

    return chains;
  }

  function parseChoice(lockId, id, headingTitle, lines) {
    const choice = {
      id,
      headingTitle: stripInlineMarkdown(headingTitle),
      title: "",
      guide: "",
      summary: [],
      options: [],
      chains: parseDirectionChains(lines),
    };
    const summaryLines = [];

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("|") || trimmed.startsWith("####")) return;
      if (trimmed.startsWith("位置：")) return;
      if (trimmed.startsWith("抉择页标题：")) {
        choice.title = stripInlineMarkdown(trimmed.replace("抉择页标题：", ""));
        return;
      }
      if (trimmed.startsWith("抉择引导文：")) {
        choice.guide = stripInlineMarkdown(trimmed.replace("抉择引导文：", ""));
        return;
      }
      if (!/^方向内流链样板|心态落点样板|反馈页写法样板/.test(trimmed)) {
        summaryLines.push(trimmed);
      }
    });

    choice.summary = linesToParagraphs(summaryLines);

    lines.forEach((line) => {
      const cells = splitTableRow(line);
      if (!cells || !/^[ABC]$/.test(cells[0] || "") || cells.length < 5) return;
      const direction = cells[0];
      const isLongRow = cells.length >= 8;
      choice.options.push({
        direction,
        type: stripInlineMarkdown(cells[1]),
        label: stripInlineMarkdown(cells[2]),
        mindset: isLongRow ? stripInlineMarkdown(cells[3]) : "",
        flowNote: isLongRow ? stripInlineMarkdown(cells[4]) : "",
        action: isLongRow ? stripInlineMarkdown(cells[5]) : "",
        delayed: isLongRow ? stripInlineMarkdown(cells[6]) : "",
        feedbackRefs: isLongRow ? stripInlineMarkdown(cells[7]) : stripInlineMarkdown(cells[3]),
        effectSummary: isLongRow ? stripInlineMarkdown(`${cells[4]} ${cells[6]}`) : stripInlineMarkdown(cells[4]),
        feedbackIds: parseFeedbackRefs(lockId, isLongRow ? cells[7] : cells[3], direction),
      });
    });

    return choice;
  }

  function parseH3Blocks(sectionLines, baseLineNumber) {
    const blocks = [];
    sectionLines.forEach((line, index) => {
      const match = line.match(/^###\s+`([^`]+)`\s*(.*)$/);
      if (match) {
        blocks.push({
          id: match[1],
          title: stripInlineMarkdown(match[2]),
          index,
          line: baseLineNumber + index,
        });
      }
    });
    return blocks.map((block, index) => {
      const end = index + 1 < blocks.length ? blocks[index + 1].index : sectionLines.length;
      return Object.assign({}, block, {
        lines: sectionLines.slice(block.index + 1, end),
      });
    });
  }

  function createMetrics(locks) {
    const echoHookSet = new Set();
    const metrics = {
      locks: locks.length,
      scenePages: 0,
      choiceWindows: 0,
      feedbackPages: 0,
      directionChains: 0,
      microChoiceGroups: 0,
      echoHooks: 0,
    };

    locks.forEach((lock) => {
      metrics.scenePages += lock.pages.length;
      if (lock.choice) {
        metrics.choiceWindows += 1;
        metrics.directionChains += Object.keys(lock.choice.chains).length;
        Object.values(lock.choice.chains).forEach((chain) => {
          metrics.microChoiceGroups += chain.microGroups.length;
          chain.echoHooks.forEach((hook) => echoHookSet.add(hook));
        });
      }
      metrics.feedbackPages += Object.values(lock.feedback).flat().length;
    });
    metrics.echoHooks = echoHookSet.size;
    return metrics;
  }

  function parseMarkdown(markdown) {
    const lines = normalizeMarkdown(markdown).split("\n");
    const lockStarts = [];
    lines.forEach((line, index) => {
      const match = line.match(/^##\s+R4-ACT4-L(\d{2})\s+(.+)$/);
      if (match) {
        lockStarts.push({
          id: `L${match[1]}`,
          title: stripInlineMarkdown(match[2]),
          index,
          line: index + 1,
        });
      }
    });

    const locks = lockStarts.map((start, startIndex) => {
      const nextLockIndex = startIndex + 1 < lockStarts.length ? lockStarts[startIndex + 1].index : lines.length;
      const p2NotesIndex = lines.findIndex((line, index) => index > start.index && /^##\s+P2\s+写回字段备注/.test(line));
      const end = p2NotesIndex > start.index && p2NotesIndex < nextLockIndex ? p2NotesIndex : nextLockIndex;
      const sectionLines = lines.slice(start.index + 1, end);
      const blocks = parseH3Blocks(sectionLines, start.line + 1);
      const lock = {
        id: start.id,
        title: start.title,
        sourceLine: start.line,
        pages: [],
        choice: null,
        feedback: { A: [], B: [], C: [] },
      };

      blocks.forEach((block) => {
        if (/-P2-S\d{2}$/.test(block.id)) {
          lock.pages.push({
            id: block.id,
            title: block.title,
            sourceLine: block.line,
            paragraphs: linesToParagraphs(block.lines),
          });
          return;
        }
        if (/-P2-CHOICE-\d{2}$/.test(block.id)) {
          lock.choice = parseChoice(lock.id, block.id, block.title, block.lines);
          return;
        }
        const feedbackMatch = block.id.match(/-P2-([ABC])(\d{2})$/);
        if (feedbackMatch) {
          lock.feedback[feedbackMatch[1]].push({
            id: block.id,
            direction: feedbackMatch[1],
            title: block.title,
            sourceLine: block.line,
            paragraphs: linesToParagraphs(block.lines),
          });
        }
      });

      Object.keys(lock.feedback).forEach((direction) => {
        lock.feedback[direction].sort((a, b) => a.id.localeCompare(b.id));
      });

      return lock;
    });

    return {
      sourcePath: SOURCE_PATH,
      routeId: ROUTE_ID,
      poolId: POOL_ID,
      locks,
      metrics: createMetrics(locks),
    };
  }

  function getFeedbackMap(lock) {
    const map = {};
    Object.values(lock.feedback).flat().forEach((page) => {
      map[page.id] = page;
    });
    return map;
  }

  function boot() {
    const els = {
      routeChip: document.getElementById("route-chip"),
      lockChip: document.getElementById("lock-chip"),
      stageChip: document.getElementById("stage-chip"),
      progress: document.getElementById("page-progress"),
      title: document.getElementById("page-title"),
      location: document.getElementById("page-location"),
      body: document.getElementById("page-body"),
      choicePanel: document.getElementById("choice-panel"),
      microPanel: document.getElementById("micro-panel"),
      back: document.getElementById("back-button"),
      next: document.getElementById("next-button"),
      reload: document.getElementById("reload-button"),
      reset: document.getElementById("reset-button"),
      export: document.getElementById("export-button"),
      metrics: document.getElementById("metrics-list"),
      locks: document.getElementById("lock-list"),
      state: document.getElementById("state-list"),
      hooks: document.getElementById("hook-list"),
      history: document.getElementById("history-list"),
    };

    const runtime = {
      data: null,
      lockIndex: 0,
      mode: "loading",
      pageIndex: 0,
      feedbackIndex: 0,
      chosenOption: null,
      choiceCommitted: false,
      microSelections: {},
      feedbackPages: [],
      vars: {},
      hooks: [],
      history: [],
    };

    function currentLock() {
      return runtime.data && runtime.data.locks[runtime.lockIndex];
    }

    function setBody(paragraphs) {
      els.body.innerHTML = "";
      (paragraphs || []).forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        els.body.appendChild(paragraph);
      });
    }

    function renderMetrics() {
      els.metrics.innerHTML = "";
      if (!runtime.data) return;
      const rows = [
        ["锁点", `${runtime.data.metrics.locks} / 6`],
        ["剧情页", `${runtime.data.metrics.scenePages} / 24`],
        ["抉择窗", `${runtime.data.metrics.choiceWindows} / 6`],
        ["反馈页", `${runtime.data.metrics.feedbackPages} / 36`],
        ["方向链", `${runtime.data.metrics.directionChains} / 18`],
        ["微心态组", String(runtime.data.metrics.microChoiceGroups)],
        ["Act5 回声", `${runtime.data.metrics.echoHooks} / 18`],
      ];
      rows.forEach(([label, value]) => {
        const term = document.createElement("dt");
        const desc = document.createElement("dd");
        term.textContent = label;
        desc.textContent = value;
        els.metrics.append(term, desc);
      });
    }

    function renderLocks() {
      els.locks.innerHTML = "";
      if (!runtime.data) return;
      runtime.data.locks.forEach((lock, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lock-button";
        button.classList.toggle("active", index === runtime.lockIndex);
        button.textContent = `${lock.id} ${lock.title}`;
        button.addEventListener("click", () => jumpToLock(index));
        els.locks.appendChild(button);
      });
    }

    function renderState() {
      els.state.innerHTML = "";
      const entries = Object.entries(runtime.vars).sort((a, b) => a[0].localeCompare(b[0]));
      if (entries.length === 0) {
        const empty = document.createElement("div");
        empty.className = "state-empty";
        empty.textContent = "尚未选择。";
        els.state.appendChild(empty);
      } else {
        entries.forEach(([key, value]) => {
          const row = document.createElement("div");
          row.className = "state-row";
          const name = document.createElement("span");
          const amount = document.createElement("strong");
          name.textContent = key;
          amount.textContent = String(value);
          row.append(name, amount);
          els.state.appendChild(row);
        });
      }

      els.hooks.innerHTML = "";
      if (runtime.hooks.length === 0) {
        const empty = document.createElement("div");
        empty.className = "state-empty";
        empty.textContent = "尚未产生 Act5 回声。";
        els.hooks.appendChild(empty);
      } else {
        runtime.hooks.forEach((hook) => {
          const item = document.createElement("div");
          item.className = "hook-item";
          item.textContent = hook;
          els.hooks.appendChild(item);
        });
      }
    }

    function renderHistory() {
      els.history.innerHTML = "";
      runtime.history.forEach((entry) => {
        const item = document.createElement("li");
        const title = document.createElement("strong");
        const detail = document.createElement("div");
        detail.className = "history-detail";
        title.textContent = `${entry.lockId} ${entry.option.direction}：${entry.option.label}`;
        detail.textContent = entry.microChoices.length > 0 ? entry.microChoices.map((choice) => `${choice.code} ${choice.label}`).join(" / ") : "无微心态选择";
        item.append(title, detail);
        els.history.appendChild(item);
      });
    }

    function renderChoicePanel(lock) {
      const choice = lock.choice;
      els.choicePanel.innerHTML = "";
      els.choicePanel.hidden = runtime.mode !== "choice";
      if (runtime.mode !== "choice" || !choice) return;

      choice.options.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option-button";
        button.addEventListener("click", () => chooseOption(option));

        const title = document.createElement("span");
        title.className = "option-title";
        title.textContent = `${option.direction}. ${option.label}`;

        const meta = document.createElement("span");
        meta.className = "option-subtitle";
        meta.textContent = option.type;

        const detail = document.createElement("span");
        detail.className = "option-detail";
        detail.textContent = [option.mindset, option.effectSummary].filter(Boolean).join(" / ");

        button.append(title, meta);
        if (detail.textContent) button.append(detail);
        els.choicePanel.appendChild(button);
      });
    }

    function renderMicroPanel(lock) {
      els.microPanel.innerHTML = "";
      els.microPanel.hidden = runtime.mode !== "micro";
      if (runtime.mode !== "micro" || !runtime.chosenOption) return;

      const chain = lock.choice.chains[runtime.chosenOption.direction];
      if (!chain) return;

      chain.beats.forEach((beat) => {
        const block = document.createElement("div");
        block.className = `micro-beat${beat.microOptions.length === 0 ? " muted" : ""}`;

        const heading = document.createElement("h3");
        heading.textContent = `${beat.beat}. ${beat.role}`;

        const action = document.createElement("p");
        action.className = "micro-action";
        action.textContent = beat.action;

        block.append(heading, action);

        if (beat.microOptions.length > 0) {
          const row = document.createElement("div");
          row.className = "micro-option-row";
          beat.microOptions.forEach((option) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "micro-choice";
            button.classList.toggle("selected", runtime.microSelections[beat.beat] === option.code);
            button.addEventListener("click", () => {
              runtime.microSelections[beat.beat] = option.code;
              render();
            });

            const label = document.createElement("strong");
            const effect = document.createElement("span");
            effect.className = "micro-effect";
            label.textContent = `${option.code} ${option.label}`;
            effect.textContent = option.effectText;
            button.append(label);
            if (effect.textContent) button.append(document.createElement("br"), effect);
            row.appendChild(button);
          });
          block.appendChild(row);
        } else if (beat.effectText) {
          const effect = document.createElement("p");
          effect.className = "micro-effect";
          effect.textContent = beat.effectText;
          block.appendChild(effect);
        }

        els.microPanel.appendChild(block);
      });
    }

    function microComplete(lock) {
      if (!runtime.chosenOption) return false;
      const chain = lock.choice.chains[runtime.chosenOption.direction];
      if (!chain) return true;
      return chain.microGroups.every((group) => Boolean(runtime.microSelections[group.beat]));
    }

    function selectedMicroChoices(lock) {
      if (!runtime.chosenOption) return [];
      const chain = lock.choice.chains[runtime.chosenOption.direction];
      if (!chain) return [];
      const choices = [];
      chain.microGroups.forEach((group) => {
        const code = runtime.microSelections[group.beat];
        const selected = group.options.find((option) => option.code === code);
        if (selected) choices.push(selected);
      });
      return choices;
    }

    function addVars(effects) {
      Object.entries(effects || {}).forEach(([key, value]) => {
        runtime.vars[key] = Number((runtime.vars[key] || 0) + value);
      });
    }

    function commitChoice(lock) {
      if (runtime.choiceCommitted || !runtime.chosenOption) return;
      const option = runtime.chosenOption;
      const chain = lock.choice.chains[option.direction];
      const microChoices = selectedMicroChoices(lock);
      const feedbackMap = getFeedbackMap(lock);

      addVars(parseNumericEffects(option.effectSummary));
      if (/主轴/.test(option.type)) addVars({ ui_work_axis_choice: 1 });
      if (/微内流/.test(option.type)) addVars({ ui_micro_inflow_choice: 1 });
      microChoices.forEach((choice) => addVars(choice.effects));
      (chain ? chain.echoHooks : []).forEach((hook) => {
        if (!runtime.hooks.includes(hook)) runtime.hooks.push(hook);
      });

      runtime.feedbackPages = option.feedbackIds.map((id) => feedbackMap[id]).filter(Boolean);
      runtime.feedbackIndex = 0;
      runtime.history.push({
        lockId: lock.id,
        option,
        microChoices,
        echoHooks: chain ? chain.echoHooks : [],
      });
      runtime.choiceCommitted = true;
    }

    function chooseOption(option) {
      runtime.chosenOption = option;
      runtime.microSelections = {};
      runtime.choiceCommitted = false;
      const lock = currentLock();
      const chain = lock.choice.chains[option.direction];
      if (chain && chain.microGroups.length > 0) {
        runtime.mode = "micro";
      } else {
        commitChoice(lock);
        runtime.mode = "feedback";
      }
      render();
    }

    function render() {
      if (!runtime.data) return;
      const lock = currentLock();
      els.routeChip.textContent = `${runtime.data.routeId} / ${runtime.data.poolId}`;
      els.lockChip.textContent = `${lock.id} ${lock.title}`;
      els.stageChip.textContent = runtime.mode;
      els.choicePanel.hidden = true;
      els.microPanel.hidden = true;

      if (runtime.mode === "scene") {
        const page = lock.pages[runtime.pageIndex];
        els.title.textContent = page.title;
        els.location.textContent = page.id;
        els.progress.textContent = `${runtime.lockIndex + 1} / ${runtime.data.locks.length} 锁点 · ${runtime.pageIndex + 1} / ${lock.pages.length} 剧情页`;
        setBody(page.paragraphs);
        els.next.textContent = runtime.pageIndex < lock.pages.length - 1 ? "下一页" : "进入抉择";
        els.next.disabled = false;
      } else if (runtime.mode === "choice") {
        els.title.textContent = lock.choice.title || lock.choice.id;
        els.location.textContent = lock.choice.id;
        els.progress.textContent = `${runtime.lockIndex + 1} / ${runtime.data.locks.length} 锁点 · 抉择窗`;
        setBody([lock.choice.guide, ...lock.choice.summary].filter(Boolean));
        renderChoicePanel(lock);
        els.next.textContent = "请选择方向";
        els.next.disabled = true;
      } else if (runtime.mode === "micro") {
        const chain = lock.choice.chains[runtime.chosenOption.direction];
        els.title.textContent = `${runtime.chosenOption.direction}. ${runtime.chosenOption.label}`;
        els.location.textContent = chain ? chain.title : lock.choice.id;
        els.progress.textContent = `${runtime.lockIndex + 1} / ${runtime.data.locks.length} 锁点 · 内流链`;
        setBody([runtime.chosenOption.mindset, runtime.chosenOption.action, runtime.chosenOption.delayed].filter(Boolean));
        renderMicroPanel(lock);
        els.next.textContent = "进入反馈页";
        els.next.disabled = !microComplete(lock);
      } else if (runtime.mode === "feedback") {
        if (!runtime.choiceCommitted) commitChoice(lock);
        const page = runtime.feedbackPages[runtime.feedbackIndex];
        if (page) {
          els.title.textContent = page.title;
          els.location.textContent = page.id;
          els.progress.textContent = `${runtime.lockIndex + 1} / ${runtime.data.locks.length} 锁点 · ${runtime.feedbackIndex + 1} / ${runtime.feedbackPages.length} 反馈页`;
          setBody(page.paragraphs);
          els.next.textContent = runtime.feedbackIndex < runtime.feedbackPages.length - 1 ? "继续反馈" : runtime.lockIndex < runtime.data.locks.length - 1 ? "进入下一锁点" : "完成预览";
          els.next.disabled = false;
        } else {
          els.title.textContent = "缺少反馈页";
          els.location.textContent = runtime.chosenOption ? runtime.chosenOption.feedbackIds.join(" / ") : "";
          setBody(["当前方向没有解析到反馈页，需要回到 Markdown 检查反馈页 ID 是否一致。"]);
          els.next.textContent = "进入下一锁点";
          els.next.disabled = false;
        }
      } else if (runtime.mode === "complete") {
        els.title.textContent = "R4-WORK 第四幕 P2 预览完成";
        els.location.textContent = "ACT4-WORK-P2-COMPLETE";
        els.progress.textContent = `${runtime.history.length} / ${runtime.data.locks.length} 个锁点已操作`;
        setBody(["当前试玩记录已经覆盖到 L06。可以导出记录，对照变量、Act5 回声和每个锁点的选择手感。"]);
        els.next.textContent = "已完成";
        els.next.disabled = true;
      }

      els.back.disabled = runtime.mode === "scene" && runtime.lockIndex === 0 && runtime.pageIndex === 0;
      renderMetrics();
      renderLocks();
      renderState();
      renderHistory();
    }

    function handleNext() {
      const lock = currentLock();
      if (!lock) return;
      if (runtime.mode === "scene") {
        if (runtime.pageIndex < lock.pages.length - 1) {
          runtime.pageIndex += 1;
        } else {
          runtime.mode = "choice";
        }
      } else if (runtime.mode === "micro") {
        if (!microComplete(lock)) return;
        commitChoice(lock);
        runtime.mode = "feedback";
      } else if (runtime.mode === "feedback") {
        if (runtime.feedbackIndex < runtime.feedbackPages.length - 1) {
          runtime.feedbackIndex += 1;
        } else if (runtime.lockIndex < runtime.data.locks.length - 1) {
          runtime.lockIndex += 1;
          runtime.mode = "scene";
          runtime.pageIndex = 0;
          runtime.chosenOption = null;
          runtime.microSelections = {};
          runtime.choiceCommitted = false;
          runtime.feedbackPages = [];
          runtime.feedbackIndex = 0;
        } else {
          runtime.mode = "complete";
        }
      }
      render();
    }

    function handleBack() {
      if (runtime.mode === "scene") {
        if (runtime.pageIndex > 0) {
          runtime.pageIndex -= 1;
        } else if (runtime.lockIndex > 0) {
          runtime.lockIndex -= 1;
          runtime.mode = "scene";
          runtime.pageIndex = currentLock().pages.length - 1;
        }
      } else if (runtime.mode === "choice") {
        runtime.mode = "scene";
        runtime.pageIndex = currentLock().pages.length - 1;
      } else if (runtime.mode === "micro") {
        runtime.mode = "choice";
      } else if (runtime.mode === "feedback" && runtime.feedbackIndex > 0) {
        runtime.feedbackIndex -= 1;
      }
      render();
    }

    function jumpToLock(index) {
      runtime.lockIndex = index;
      runtime.mode = "scene";
      runtime.pageIndex = 0;
      runtime.feedbackIndex = 0;
      runtime.chosenOption = null;
      runtime.choiceCommitted = false;
      runtime.microSelections = {};
      runtime.feedbackPages = [];
      render();
    }

    function resetRun() {
      runtime.lockIndex = 0;
      runtime.mode = "scene";
      runtime.pageIndex = 0;
      runtime.feedbackIndex = 0;
      runtime.chosenOption = null;
      runtime.choiceCommitted = false;
      runtime.microSelections = {};
      runtime.feedbackPages = [];
      runtime.vars = {};
      runtime.hooks = [];
      runtime.history = [];
      render();
    }

    function exportRun() {
      const payload = {
        routeId: runtime.data.routeId,
        poolId: runtime.data.poolId,
        sourcePath: runtime.data.sourcePath,
        metrics: runtime.data.metrics,
        variables: runtime.vars,
        act5EchoHooks: runtime.hooks,
        history: runtime.history.map((entry) => ({
          lockId: entry.lockId,
          direction: entry.option.direction,
          label: entry.option.label,
          type: entry.option.type,
          microChoices: entry.microChoices.map((choice) => ({
            code: choice.code,
            label: choice.label,
            effectText: choice.effectText,
          })),
          echoHooks: entry.echoHooks,
        })),
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "r4-work-act4-preview-run.json";
      link.click();
      URL.revokeObjectURL(url);
    }

    function renderError(error) {
      els.stageChip.textContent = "error";
      els.title.textContent = "R4-WORK 预览加载失败";
      els.location.textContent = SOURCE_PATH;
      els.body.innerHTML = "";
      const box = document.createElement("div");
      box.className = "error-box";
      box.textContent = `${error.message || error}。请用本地 HTTP 服务打开 playtest/r4-work-act4-preview.html。`;
      els.body.appendChild(box);
      els.next.disabled = true;
      els.back.disabled = true;
    }

    async function load() {
      runtime.mode = "loading";
      try {
        const response = await fetch(encodeURI(SOURCE_PATH), { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const markdown = await response.text();
        runtime.data = parseMarkdown(markdown);
        resetRun();
      } catch (error) {
        renderError(error);
      }
    }

    els.next.addEventListener("click", handleNext);
    els.back.addEventListener("click", handleBack);
    els.reset.addEventListener("click", resetRun);
    els.reload.addEventListener("click", load);
    els.export.addEventListener("click", exportRun);
    load();
  }

  return {
    SOURCE_PATH,
    parseMarkdown,
    parseNumericEffects,
    stripInlineMarkdown,
    boot,
  };
});
