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
  const CHOICE_FALLBACKS = {
    L02: {
      title: "三个聊天框怎么回？",
      guide: "三个聊天框都开着，票页灰字还压在底部。你拎着常温水站在便利店门口，不能再把同一句“晚点说”发给所有人。",
    },
    L03: {
      title: "这笔现金怎么接？",
      guide: "信封、饭卡、补考通知和勤工群公告都在桌上。你先碰哪一样，父亲留下的五百块就会先变成哪一种压力。",
    },
    L04: {
      title: "先补哪一个缺口？",
      guide: "打印店机器还在吐纸，C201 门牌就在走廊尽头，勤工群又问谁能顶班。你手里只拿得稳一沓纸。",
    },
    L05: {
      title: "返校后站到哪里？",
      guide: "座位表贴在门口，你的文件袋夹在胳膊下。坐回原位、靠门处理资料，还是先跑窗口，都会让 4XX 看见你今天在哪里。",
    },
    L06: {
      title: "这张表怎么签？",
      guide: "暑假去向页面停在说明栏，联系人还空着。你手里的黑笔已经拧开，签下去前，先决定哪一栏不再空着。",
    },
  };

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
    const marker = new RegExp(`\\b(${direction}[1-9])\\s+`, "g");
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
    const marker = new RegExp(`\\b(${direction}[1-9])\\s+`, "g");
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
      if (!/^方向内流链样板|心态落点(?:样板)?[:：]?|反馈页写法样板/.test(trimmed)) {
        summaryLines.push(trimmed);
      }
    });

    choice.summary = linesToParagraphs(summaryLines).filter(isPlayerFacingChoiceParagraph);
    if (!choice.title && CHOICE_FALLBACKS[lockId]) {
      choice.title = CHOICE_FALLBACKS[lockId].title;
    }
    if (!choice.guide && CHOICE_FALLBACKS[lockId]) {
      choice.guide = CHOICE_FALLBACKS[lockId].guide;
    }

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

  function isPlayerFacingChoiceParagraph(text) {
    return !/本窗抉择|微内流点|主轴推进|POOL-|当前池|打开.*线|独立线|完整线|方向内流链|心态落点|反馈页写法/.test(text);
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

  function resolveFeedbackPages(lock, option) {
    const feedbackMap = getFeedbackMap(lock);
    return (option.feedbackIds || []).map((id) => feedbackMap[id]).filter(Boolean);
  }

  function formatStageName(mode) {
    return {
      loading: "加载中",
      scene: "剧情",
      choice: "抉择",
      micro: "方向剧情",
      feedback: "承接",
      complete: "完成",
    }[mode] || mode;
  }

  function formatMicroPrompt(group) {
    const role = stripInlineMarkdown(group && group.role ? group.role : "");
    const action = stripInlineMarkdown(group && group.action ? group.action : "");
    const topic = role.includes("：") ? role.split("：").pop() : role.replace(/^微心态抉择\s*\d*/, "");
    const promptByTopic = [
      [/怎么开口/, action.includes("母亲") ? "先怎么回母亲？" : "第一句话怎么说？"],
      [/收住还是补一句|是否补一句/, "还要不要再补一句？"],
      [/空白怎么解释/, "备注栏要怎么写？"],
      [/先问什么/, "先问哪件事？"],
      [/保哪一种见面/, "这一个半小时，先把哪边说清楚？"],
      [/怎么把时间落地/, "时间要怎么落下来？"],
      [/先向谁说清/, "先向谁说清楚？"],
      [/预算说到几分/, "钱和时间要说到哪一步？"],
      [/问谁/, "先问谁？"],
      [/钱怎么处理/, "这笔钱先怎么放？"],
      [/先补哪块窟窿/, "先补哪一块缺口？"],
      [/先补哪份材料/, "先抽哪一份材料？"],
      [/如何承认错过/, "错过窗口后怎么处理？"],
      [/怎么接班/, "这班要怎么接？"],
      [/先说哪件白天事/, "先把哪件白天事说清？"],
      [/说到什么深度/, "这次要说到多具体？"],
      [/坐到哪里/, "第二场答疑坐哪里？"],
      [/回答到几分/, "饭桌上怎么回答？"],
      [/离开前说不说/, "冲出去前留不留信息？"],
      [/怎么把结果带回 4XX/, "回寝时怎么带回结果？"],
      [/如实写到几分/, "表格要如实写到哪一步？"],
      [/怎么保存顺序/, "联系人顺序怎么保存？"],
    ];
    const matched = promptByTopic.find(([pattern]) => pattern.test(topic));
    if (matched) return matched[1];
    if (!topic) return "这里怎么处理？";
    return `${topic.replace(/[？?]$/, "")}？`;
  }

  function splitMicroLabel(label) {
    const text = stripInlineMarkdown(label).replace(/^[ABC]\d+\s+/, "");
    const colonIndex = text.indexOf("：");
    if (colonIndex < 0) {
      return { title: text.replace(/\s*\/\s*$/, ""), body: "" };
    }
    return {
      title: text.slice(0, colonIndex).replace(/\s*\/\s*$/, "").trim(),
      body: text.slice(colonIndex + 1).replace(/\s*\/\s*$/, "").trim(),
    };
  }

  function formatMicroChoiceTitle(labelParts, group) {
    const title = stripInlineMarkdown(labelParts && labelParts.title ? labelParts.title : "");
    const concrete = formatConcreteMicroTitle(title, labelParts && labelParts.body ? labelParts.body : null, group);
    if (concrete) return concrete;
    const mappings = [
      [/只给最低事实/, "先给母亲最低事实"],
      [/多问一句/, "多问一句父亲为什么这么急"],
      [/把自己也说进去/, "把留校和勤工也说进去"],
      [/^收住$/, "到这里收住，只记车次"],
      [/补一句负责/, "补一句自己会去站外"],
      [/轻问钱压/, "轻轻问家里是不是也紧"],
      [/只问规则/, "先问清材料、时间和换班"],
      [/直接问缺不缺人/, "直接问有没有能顶的窗口"],
      [/先问代价/, "先问会不会撞补考和回家"],
      [/给最低事实/, "先给晚风最低事实"],
      [/给具体改法/, "先给晚风具体改法"],
      [/说出压力来源/, "把家里、车票和勤工都说出来"],
      [/只承诺提前说/, "只承诺提前说明"],
      [/给两个备选/, "给晚风两个可执行备选"],
      [/说明先后顺序/, "说明站外、勤工和晚风的先后"],
      [/保短见/, "先把光谷压成短见"],
      [/保改期/, "先给晚风一个实在改期"],
      [/保报平安/, "先承认今天只能报平安"],
      [/只说时间/, "只说时间冲突"],
      [/说车票和路费/, "说清车票和路费"],
      [/连勤工窗口也说出来/, "连勤工窗口也一起说出来"],
      [/问父亲/, "先问父亲家里差多少"],
      [/问母亲/, "先告诉母亲父亲给了钱"],
      [/问材料/, "先问勤工材料要求"],
      [/问最近缺不缺班/, "先问最近有没有缺班"],
      [/问会不会撞补考/, "先问会不会撞补考"],
      [/只报 C201/, "只报 C201 位置"],
      [/只说“还行”|只说还行/, "只用“还行”挡一下"],
      [/只写留校/, "先只写留校和宿舍号"],
    ];
    const mapped = mappings.find(([pattern]) => pattern.test(title));
    return mapped ? mapped[1] : title;
  }

  function punctuate(text) {
    const value = stripInlineMarkdown(text || "").replace(/\s*\/\s*$/, "").trim();
    if (!value) return "";
    return /[。！？!?]$/.test(value) ? value : `${value}。`;
  }

  function quoteValue(text) {
    const value = punctuate(text).trim();
    return value ? `“${value}”` : "";
  }

  function inferMicroTarget(title, body, group) {
    const rawTitle = stripInlineMarkdown(title || "");
    const rawBody = stripInlineMarkdown(body || "");
    const action = stripInlineMarkdown(group && group.action ? group.action : "");
    const all = `${rawTitle} ${rawBody} ${action}`;
    if (/陆沉/.test(all)) return "陆沉";
    if (/唐骁/.test(all)) return "唐骁";
    if (/家庭群/.test(all)) return "家庭群";
    if (/4XX|群里发|发群|公共桌/.test(all)) return "4XX 群";
    if (/勤工|窗口|缺班|换班|材料清单|能不能排|班/.test(all) && !/晚风|光谷/.test(rawTitle)) return "勤工群";
    if (/晚风|光谷/.test(all)) return "晚风";
    if (/父亲/.test(all)) return "父亲";
    if (/母亲|家里|车票/.test(all)) return "母亲";
    return "";
  }

  function formatConcreteMicroTitle(title, body, group) {
    const cleanTitle = stripInlineMarkdown(title || "").replace(/\s*\/\s*$/, "").trim();
    const cleanBody = stripInlineMarkdown(body || "").replace(/\s*\/\s*$/, "").trim();
    const quotedInTitle = cleanTitle.match(/[“"]([^”"]+)[”"]/);
    const rows = [
      [/^收住$/, "备忘录只记：明天车次。"],
      [/说出压力来源|把家里、车票和勤工都说出来/, "发给晚风：“家里、车票、钱和勤工都挤在一起了。”"],
      [/先问代价/, "在勤工群问：“会不会影响补考、回家、光谷？”"],
      [/只承诺提前说|只承诺提前说明/, "发给晚风：“我提前说，不让你空等。”"],
      [/给两个备选|给两个可行备选/, "发给晚风：“我赶得上就短见，赶不上改周三。”"],
      [/说明先后顺序|说明站外、勤工和晚风的先后/, "发给晚风：“先去站外，再问勤工，晚上给你准话。”"],
      [/保短见/, "发给晚风：“我见完父亲去光谷，但只能待一会儿。”"],
      [/保改期/, "发给晚风：“这次不抢时间，我们改到周三。”"],
      [/保报平安/, "发给晚风：“我不一定到，见完站口先报平安。”"],
      [/写死短见时段/, "备忘录写：站口半小时，光谷二十分钟。"],
      [/只承诺到站后报平安/, "发给晚风：“我到站先报平安，后面不说满。”"],
      [/先算车票和饭卡/, "备忘录先写：车票、饭卡。"],
      [/把勤工可换钱时间也写进去/, "备忘录补上：勤工可排的小时。"],
      [/先问陆沉窗口能不能排上/, "问陆沉：“窗口班还能排上吗？”"],
      [/^问材料$|先问材料清单|先问勤工材料要求/, "在勤工群问：“第一次值班要带哪些材料？”"],
      [/问最近缺不缺班/, "在勤工群问：“最近还有缺人的班吗？”"],
      [/问会不会撞补考/, "在勤工群问：“会不会撞补考？”"],
      [/只说时间|只说时间冲突/, "发给晚风：“今天时间撞在一起了。”"],
      [/说车票和路费/, "发给晚风：“车票和路费我还没算稳。”"],
      [/连勤工窗口也说出来|连勤工窗口也一起说出来/, "发给晚风：“我还要问勤工窗口，今天可能排不开。”"],
      [/^问母亲$/, "发给母亲：“他今天给了我一部分钱。”"],
      [/两边都说最低事实/, "给父母各发一句：“钱我收到了，会用在补考和饭卡。”"],
      [/继续问缺口/, "再问父亲：“家里还差多少？”"],
      [/收住，只说会把钱用在补考和饭卡/, "只回一句：“钱我先用在补考和饭卡。”"],
      [/补一句自己会问勤工/, "补给母亲：“我明天也会去问勤工。”"],
      [/先充饭卡/, "先把饭卡充上。"],
      [/先留打印和车费/, "把打印费和车费夹进资料袋。"],
      [/先夹进补考资料袋/, "把钱夹进补考资料袋。"],
      [/不补，保持最低事实/, "不再补消息，把手机扣在桌上。"],
      [/先把勤工表压到后面/, "把勤工表压到资料袋后面，先写 C201。"],
      [/写进错题表背面/, "错题表背面写：窗口已错过。"],
      [/告诉陆沉窗口没了/, "对陆沉说：“窗口被别人接走了。”"],
      [/不说，先把第一章看完/, "不解释，先把第一章看完。"],
      [/先说明补考时间避免撞车/, "在勤工群补一句：“我有补考，时间别撞上。”"],
      [/先抄数据结构目录/, "把数据结构目录抄到错题表第一行。"],
      [/先拍 C201 门牌和路线/, "拍下 C201 门牌和走廊路线。"],
      [/先向母亲说车票还没稳/, "发给母亲：“车票还没稳，我晚点再看。”"],
      [/先向父亲说会去站口/, "发给父亲：“我会去站口见你。”"],
      [/先向晚风说光谷会受钱和时间影响/, "发给晚风：“光谷会被车票和时间影响，我不想让你干等。”"],
      [/先向 4XX 发 C201 和文件袋/, "发到 4XX 群：“我在 C201，文件袋要补。”"],
      [/先向母亲说补考教室/, "发给母亲：“我在 C201 补课，晚点看票。”"],
      [/先向晚风说今天不去光谷/, "发给晚风：“今天去不了光谷，我别让你空等。”"],
      [/只报 C201/, "只发：“我在 C201。”"],
      [/报 C201 加打印计划/, "发：“我在 C201，等会去打印。”"],
      [/报 C201、打印和勤工窗口顺序/, "发：“C201、打印、窗口，我按这个顺序跑。”"],
      [/坐回第三排靠边/, "坐到第三排靠边，把错题表摊开。"],
      [/坐到 4XX 看得见/, "坐到 4XX 看得见的位置，不挤过去。"],
      [/先去后排，开考前再回/, "先坐后排靠门，开考前再回座位。"],
      [/不说，直接去打印/, "下课后不解释，直接去打印店。"],
      [/直接回/, quotedInTitle ? `在勤工群回：“${quotedInTitle[1]}。”` : ""],
      [/在群里发/, quotedInTitle ? `发到 4XX 群：“${quotedInTitle[1]}。”` : ""],
      [/只告诉唐骁材料要补/, "低声告诉唐骁：“材料要补，我先去一趟。”"],
      [/直接放公共桌/, "把窗口回执直接放到公共桌上。"],
      [/先发群说明/, quotedInTitle ? `发到 4XX 群：“${quotedInTitle[1]}。”` : ""],
      [/只告诉陆沉材料要求/, "把材料要求只递给陆沉看。"],
      [/写校内窗口需后续补材料/, "说明栏写：校内窗口，后续补材料。"],
      [/写预计留校天数和可联系时间/, "说明栏写下留校天数和可联系时间。"],
      [/写兼职、留校和第一联系人全部事实/, "把兼职、留校和第一联系人都填上。"],
      [/先只写留校和宿舍号|只写留校/, "表格先写：留校，青枫居 4XX。"],
      [/写“校内窗口后补说明”/, "备注栏写：校内窗口后补说明。"],
      [/写联系人和可联系时间但不写兼职细节/, "备注栏写联系人和可联系时间，兼职细节先空着。"],
      [/先问父亲忙时能不能接/, "问父亲：“学校联系人电话，你忙时能接吗？”"],
      [/先问母亲能不能放第一/, "问母亲：“联系人我能先写你吗？”"],
      [/同时在家庭群说明学校要求真实有效/, "发到家庭群：“学校要求联系人真实有效。”"],
      [/母亲第一、父亲第二/, "保存联系人：母亲第一，父亲第二。"],
      [/保存后发家庭群/, "保存后把截图发到家庭群。"],
      [/先给父亲私发/, quotedInTitle ? `先私发父亲：“${quotedInTitle[1]}。”` : ""],
    ];
    const mapped = rows.find(([pattern, value]) => value && pattern.test(cleanTitle));
    if (mapped) return mapped[1];

    if (/^对([^说]+)说/.test(cleanTitle) && quotedInTitle) return `对${cleanTitle.match(/^对([^说]+)说/)[1]}说：“${quotedInTitle[1]}。”`;
    if (/^对([^补]+)补一句/.test(cleanTitle) && quotedInTitle) return `给${cleanTitle.match(/^对([^补]+)补一句/)[1]}补发：“${quotedInTitle[1]}。”`;
    if (/^说/.test(cleanTitle) && quotedInTitle) return `说：“${quotedInTitle[1]}。”`;
    if (/^只说/.test(cleanTitle) && quotedInTitle) return `只回：“${quotedInTitle[1]}。”`;

    if (cleanBody) {
      const value = quoteValue(cleanBody);
      const target = inferMicroTarget(cleanTitle, cleanBody, group);
      const isQuestion = /[？?]$/.test(cleanBody) || /^多问|^轻问|^先问|^直接问|^问/.test(cleanTitle);
      if (isQuestion) {
        if (target === "勤工群") return `在勤工群问：${value}`;
        if (target) return `问${target}：${value}`;
        return `问：${value}`;
      }
      if (/^对([^说]+)说/.test(cleanTitle) && quotedInTitle) return `对${cleanTitle.match(/^对([^说]+)说/)[1]}说：${value}`;
      if (/^对([^补]+)补一句/.test(cleanTitle) && quotedInTitle) return `给${cleanTitle.match(/^对([^补]+)补一句/)[1]}补发：${value}`;
      if (/直接回/.test(cleanTitle) && quotedInTitle) return `在勤工群回：${value}`;
      if (target === "勤工群") return `在勤工群发：${value}`;
      if (target === "4XX 群") return `发到 4XX 群：${value}`;
      if (target) return `发给${target}：${value}`;
      return `写下：${value}`;
    }

    return "";
  }

  function formatMicroGuide(group) {
    const role = stripInlineMarkdown(group && group.role ? group.role : "");
    const action = stripInlineMarkdown(group && group.action ? group.action : "");
    const topic = role.includes("：") ? role.split("：").pop() : role.replace(/^微心态抉择\s*\d*/, "");
    const guides = [
      [/怎么开口/, "电话还没挂断。母亲在等一句能落地的话，晚风截图和勤工表还摊在旁边。"],
      [/收住还是补一句|是否补一句/, "第一句发出去后，输入框还亮着。林亦舟看着那行字，手指停在发送键上。"],
      [/先问什么/, "群公告下面没人替他问。材料、缺班、补考时间挤在同一行。"],
      [/保哪一种见面/, "见父亲和去光谷之间只隔着一个半小时。任何一边多说几句话，另一边都会被挤掉。"],
      [/怎么把时间落地/, "备忘录里只剩两行空白，站口、光谷和返校时间都要挤进去。"],
      [/先算哪一项/, "车票、饭卡、打印费和勤工时间摊在同一页。林亦舟把计算器打开。"],
      [/先向谁说清/, "三个聊天框都停在屏幕上。林亦舟把复制好的那句话删掉，重新点开输入框。"],
      [/说到什么程度/, "晚风的聊天框还停在光谷截图下面。林亦舟删掉“到时候看”，重新看着输入框。"],
      [/怎么收口/, "林亦舟把晚风聊天框重新打开。光谷截图还在上一条，他不能再只回一个“到时候看”。"],
      [/预算说到几分/, "输入框里已经有了时间，车票和路费却还卡在备忘录下一行。"],
      [/问谁/, "信封、小票和成绩通知压在一起。林亦舟把钱夹回去，又把手机拿起来。"],
      [/继续追还是收住/, "父亲和母亲都沉默过一阵。屏幕暗下去前，输入框还停在那里。"],
      [/钱怎么处理/, "这笔钱能让饭卡和打印费稳一点，也会把没说完的话一起塞进包里。"],
      [/先补哪块窟窿/, "父亲给的钱和勤工便签被夹在一起。林亦舟把两张纸摊在同一页上。"],
      [/先补哪份材料/, "C201 门牌、补考资料和勤工申请表都在文件袋里，纸张贴着纸张。"],
      [/如何承认错过/, "窗口已经被别人接走。错过这件事还没有落到任何一张纸上。"],
      [/怎么接班/, "临时班第一次有了具体时间。群里还没人回复，补考资料也摊在桌上。"],
      [/先说哪件白天事/, "白天被补考、打印、教室和窗口切开。几个聊天框还在等他的具体位置。"],
      [/说到什么深度/, "C201、打印店和勤工窗口都在白天的表里。林亦舟看着聊天框，手指停在发送键上。"],
      [/坐到哪里/, "座位表把他放回别人能看见的位置。第三排、4XX 旁边和后排靠门，都隔着几排桌椅。"],
      [/回答到几分/, "饭桌上的关心已经递过来。他可以用一句话挡掉，也可以说出具体卡住的题。"],
      [/离开前说不说/, "后排靠门离打印店和明德楼最近。下课铃一响，书包拉链已经被他拉到一半。"],
      [/怎么把结果带回 4XX/, "窗口已经跑完，回执在手里。它可以直接落到公共桌上，也可以只先交给一个人。"],
      [/如实写到几分/, "去向页面没有给含混留太多空格。兼职、留校和联系人并排摆着，光标停在说明栏里。"],
      [/空白怎么解释/, "兼职栏可以先空着，但空白会跟着他回到 4XX。备注写成什么，后面就会被怎样追问。"],
      [/先问谁/, "联系人不是默认项。父亲要体面，母亲要真实，学校要能找到人。"],
      [/怎么保存顺序/, "号码顺序已经有了答案。保存之前，截图还停在屏幕上，发不发回家里都会留下痕迹。"],
    ];
    const matched = guides.find(([pattern]) => pattern.test(topic));
    return matched ? matched[1] : action;
  }

  function enrichMicroBody(title, body) {
    const value = punctuate(body);
    if (!value) return "";
    if (/[？?]$/.test(body)) {
      return `把这句问出口：${body} 问题会让压力显形，也决定接下来是谁先等。`;
    }
    if (/^(材料|时间|能不能|有没有|短见|周三|站口|C201)/.test(body)) {
      return `先把这几项落到纸面上：${value} 这样不是直接解决问题，而是让下一步能被看见。`;
    }
    if (/不一定|不能|可能|先|我/.test(body)) {
      return `先把话说完整：${value} 这不是让别人替他决定，而是把自己能做到的边界摆出来。`;
    }
    return `先按“${title}”处理：${value} 有了这一句，等待就不再只靠猜。`;
  }

  function formatMicroChoiceActionOnly(title, body) {
    const cleanTitle = stripInlineMarkdown(title || "").replace(/\s*\/\s*$/, "").trim();
    const value = punctuate(body);

    if (value) {
      if (/[？?]$/.test(body)) return `把这个问题发出去：${body}`;
      if (/材料|时间|能不能|有没有/.test(body) && !/[。！？!?]$/.test(body)) return `把问题缩成一行：${value}`;
      return `把这句话打进聊天框：${value}`;
    }

    const quoted = cleanTitle.match(/[“"]([^”"]+)[”"]/);
    if (/^直接回/.test(cleanTitle) && quoted) return `在勤工群里直接回：${quoted[1]}。`;
    if (/^对([^说]+)说/.test(cleanTitle) && quoted) {
      const target = cleanTitle.match(/^对([^说]+)说/)[1];
      return `对${target}发一句：${quoted[1]}。`;
    }
    if (/^对([^补]+)补一句/.test(cleanTitle) && quoted) {
      const target = cleanTitle.match(/^对([^补]+)补一句/)[1];
      return `给${target}补发一句：${quoted[1]}。`;
    }
    if (/^先向\s*([^说]+)说(.+)$/.test(cleanTitle)) {
      const match = cleanTitle.match(/^先向\s*([^说]+)说(.+)$/);
      return `先打开${match[1]}的聊天框，把“${match[2]}”发出去。`;
    }
    if (cleanTitle === "问材料") return "把材料要求单独问出去：学生证、复印件、表格。";
    if (/^先问/.test(cleanTitle)) return `把这个问题先问出去：${cleanTitle.replace(/^先问/, "")}。`;
    if (/^直接问/.test(cleanTitle)) return `把这个问题直接问出去：${cleanTitle.replace(/^直接问/, "")}。`;
    if (/^问/.test(cleanTitle)) return `把这个问题问出去：${cleanTitle.replace(/^问/, "")}。`;
    if (/^先算/.test(cleanTitle)) return `在备忘录里先写下：${cleanTitle.replace(/^先算/, "")}。`;
    if (/^把(.+)也写进去$/.test(cleanTitle)) return `在同一页里补上：${cleanTitle.replace(/^把/, "").replace(/也写进去$/, "")}。`;
    if (/^先抄/.test(cleanTitle)) return `把${cleanTitle.replace(/^先抄/, "")}抄进错题空表第一行。`;
    if (/^先拍/.test(cleanTitle)) return `先拍下：${cleanTitle.replace(/^先拍/, "")}。`;
    if (/^先把勤工表压到后面/.test(cleanTitle)) return "把勤工表压到文件袋后面，在旁边记一笔窗口可能错过。";
    if (/^先把/.test(cleanTitle)) return `先把这一步落到纸面上：${cleanTitle.replace(/^先把/, "")}。`;
    if (/^写/.test(cleanTitle)) return `把这一项写进去：${cleanTitle.replace(/^写/, "")}。`;
    if (/^报/.test(cleanTitle)) return `把这一项报出去：${cleanTitle.replace(/^报/, "")}。`;
    if (/^保存后/.test(cleanTitle)) return `联系人顺序保存后，把截图发到家庭群。`;
    if (/^母亲第一/.test(cleanTitle)) return `按这个顺序保存：母亲第一，父亲第二。`;
    if (/^先给父亲私发/.test(cleanTitle) && quoted) return `先给父亲私发一句：${quoted[1]}。`;
    if (/^坐/.test(cleanTitle)) return `按这个位置坐下：${cleanTitle}。`;
    if (/^不说，/.test(cleanTitle)) return `不再解释，先做这一件事：${cleanTitle.replace(/^不说，/, "")}。`;
    if (/^在群里发/.test(cleanTitle) && quoted) return `打开 4XX 群，在里面发一句：${quoted[1]}。`;
    if (/^先发群说明/.test(cleanTitle) && quoted) return `先打开 4XX 群，在里面说明：${quoted[1]}。`;
    if (/^只告诉/.test(cleanTitle)) return `只把这件事告诉一个人：${cleanTitle.replace(/^只告诉/, "")}。`;
    if (/^只报/.test(cleanTitle)) return `只把位置报出去：${cleanTitle.replace(/^只报/, "").trim()}，其他顺序先不展开。`;
    if (/^只说/.test(cleanTitle) && quoted) return `饭桌上只回一句：${quoted[1]}，筷子没有停太久。`;
    if (/^说/.test(cleanTitle) && quoted) return `把这句说出来：${quoted[1]}。`;
    if (/^只写/.test(cleanTitle)) return `表格里只先写清这一项：${cleanTitle.replace(/^只写/, "")}。`;
    if (/^不补/.test(cleanTitle)) return `不再补充，只保留刚才那句回复。`;
    return `把这一步先做出来：${cleanTitle}。`;
  }

  function formatMicroChoiceBody(labelParts, group) {
    const title = stripInlineMarkdown(labelParts && labelParts.title ? labelParts.title : "");
    const body = stripInlineMarkdown(labelParts && labelParts.body ? labelParts.body : "");
    const concreteBody = formatConcreteMicroBody(title, body, group);
    if (concreteBody) return concreteBody;

    const quoted = title.match(/[“"]([^”"]+)[”"]/);
    const quotedText = quoted ? `“${quoted[1]}”` : "";
    const mappings = [
      [/只给最低事实/, "只把看票和站外见面发给母亲，不展开钱和勤工。家里先能落地，但没说完的缺口会继续留白。"],
      [/多问一句/, "把“为什么这么急”问出口。这个问题会让父亲的半小时变重，也可能让母亲退回沉默。"],
      [/把自己也说进去/, "把留校和勤工一起放进回复里，让母亲知道暑假已经被学校切开；代价是她会立刻听出钱不够的影子。"],
      [/收住/, "不再追问，只把车次记进备忘录。电话先能落地，父亲那半小时背后的缺口继续留白。"],
      [/补一句负责/, "多补一句会去站外，不让父亲白等。这能稳住家里，也会把光谷和勤工都往后推一格。"],
      [/轻问钱压/, "把“家里是不是也紧”轻轻问出来。这不是摊牌，但会让转账备注第一次变成需要回答的问题。"],
      [/只问规则/, "先问材料、时间和换班规则，不急着抢班。勤工从情绪变成流程，收入入口会慢半拍。"],
      [/直接问缺不缺人/, "直接问有没有马上能顶的窗口，把缺钱变成可报名的班次；推进更快，补考和家里时间会被压紧。"],
      [/先问代价/, "先问会不会撞补考、回家和光谷。动作会慢一点，但不会让工作把所有关系都吞进去。"],
      [/给最低事实/, "先告诉晚风明天要处理家里，光谷不能按原时间。她不用继续猜，但还拿不到具体改法。"],
      [/给具体改法/, "给出短见或周三两个真实选项。不是把时间说满，而是让等待有一个能落脚的边界。"],
      [/说出压力来源/, "把家里、车票、钱和勤工一起说出来。关系会更清楚，压力也会从他一个人手里转到聊天框里。"],
      [/只承诺提前说/, "只承诺提前告知，不把做不到的时间说满。边界最低，等待也最容易拖长。"],
      [/给两个备选/, "把短见和周三都摆出来，晚点必须定一个。它保住选择，也给自己留下明确债务。"],
      [/说明先后顺序/, "把站外见父亲、看勤工、再回晚风写成顺序。她知道自己排在哪里，也会看见他到底被什么切开。"],
      [/保短见/, "给晚风说明会赶去光谷，但见面会被压得很短。保住的是不临时失约，代价是交通、钱和下一件事都会更紧。"],
      [/保改期/, "不把所有时间硬塞进同一天，直接改到周三。关系说清楚了，但这次光谷会真实错过。"],
      [/保报平安/, "先承认自己不一定到，只保证见完站口及时报平安。边界最低，等待感也最强。"],
      [/直接回/, quotedText ? `先把${quotedText}发出去，让窗口时间落地，再承担别的安排被挤压的风险。` : "先给出一个可执行答复，让事情从犹豫变成明确时间。"],
      [/先问材料清单/, "先把学生证、复印件和窗口要求问清，避免答应之后才发现自己缺东西；这班会慢一点，但不容易补交。"],
      [/先说明补考时间避免撞车/, "把补考卡点先摊开，宁可推进慢一点，也不要让周四窗口和复习撞在同一格。"],
      [/写死短见时段/, "把站口、光谷和返校都卡进备忘录。明确会让等待变短，也会把迟到风险写死。"],
      [/给两个可行备选/, "给晚风两个真的能执行的时间：一个短见，一个改期。她知道自己在等什么，他也必须晚点定下来。"],
      [/只承诺到站后报平安/, "只保证到站后报平安，不把自己现在还做不到的安排说满。它保住最低边界，也把等待留到下一次确认。"],
      [/先算车票和饭卡/, "先把车票、饭卡和打印费写清，看看今天还能不能稳住。钱不会变多，但顺序会变得可见。"],
      [/把勤工可换钱时间也写进去/, "把能换钱的时间列进表里，承认这一天不只被关系占着；光谷会后挪，工作主轴也会更明显。"],
      [/先问陆沉窗口能不能排上/, "先确认窗口还有没有位置，再决定光谷和回家的时间怎么挪。问清流程比硬排体面更有用。"],
      [/先向母亲说车票还没稳/, "先告诉母亲车票还没稳，让家里知道他不是故意拖着；钱和回家时间也会被摆到台面上。"],
      [/先向父亲说会去站口/, "先把站口半小时定下来，不让见面继续悬着。父亲那边稳了，其他安排会被迫往后排。"],
      [/先向晚风说光谷会受钱和时间影响/, "先告诉晚风光谷会被钱和时间影响。不是求她让步，而是不让她到最后才知道自己被挤掉。"],
      [/只说时间/, "只把时间冲突说出来，暂时不提钱和勤工。体面保住一点，真正的压力也会继续藏在后面。"],
      [/说车票和路费/, "把车票和路费说成事实，让对方知道这不是一句不想去。钱压会显形，但误读会少。"],
      [/连勤工窗口也说出来/, "把白天会被勤工窗口切开也说出来。话会更重，却能让别人知道他不是单纯失约。"],
      [/问父亲/, "先把“到底差多少”问向父亲。问题很直，会让他退回沉默，也会让钱不再只是信封。"],
      [/问母亲/, "先把父亲给钱这件事告诉母亲。她会听见压力，也会知道他没有把信封完全藏起来。"],
      [/两边都说最低事实/, "同时给两边最低事实，不追问全部缺口。它不算摊牌，但能阻止两边继续各猜各的。"],
      [/继续问缺口/, "继续把家里的缺口问清楚，哪怕父亲会回避。压力会更重，但不会再只是转账备注。"],
      [/收住，只说会把钱用在补考和饭卡/, "先把钱的用途说清，不继续追问来源。短期运转稳住，旧账也会被带到后面。"],
      [/补一句自己会问勤工/, "补一句自己会跑勤工流程，给家里一个可执行出口。它不是逞强，也会让工作主轴提前被看见。"],
      [/先充饭卡/, "先让接下来几顿饭有着落，把别的解释暂时压进包里。日常稳一点，没说完的话也更深一点。"],
      [/先留打印和车费/, "先保住补考资料和路上的钱，日常开销之后再算。它把钱压和学业修补绑到一起。"],
      [/先夹进补考资料袋/, "把这笔钱夹进补考资料袋，提醒自己它不是凭空多出来的。每次翻资料都会看见这笔债。"],
      [/不补，保持最低事实/, "只让别人知道他见到了父亲，不把信封和没问完的话拿出来。短期安静，解释成本会后移。"],
      [/对陆沉说/, "把“明天再问窗口”先递给陆沉，借他的流程感压住混乱。钱的来源不说，行动先往前走。"],
      [/对母亲补一句/, "把父亲给了点路费这件事补给母亲，承认家里压力已经进了自己的账本。体面会被碰到一点。"],
      [/问材料/, "先问清学生证、复印件和表格要求，别让一次接班变成新的补交。流程稳了，推进会慢半拍。"],
      [/问最近缺不缺班/, "直接问最近缺不缺班，让缺口先有一个收入入口。它推进最快，也最容易压住补考时间。"],
      [/问会不会撞补考/, "先把补考风险摆出来，不让工作把学业吞掉。窗口可能慢一步，但边界更清楚。"],
      [/先抄数据结构目录/, "先把数据结构目录抄进错题空表，让最硬的学业缺口有第一行内容。窗口会先被放到后面。"],
      [/先拍 C201 门牌和路线/, "先拍下 C201 门牌和路线，避免补考当天再把时间花在找楼层上。它保的是不再卡点。"],
      [/先把勤工表压到后面并记错过风险/, "先把勤工表压到文件袋后面，同时记下可能错过窗口。不是放弃工作，而是承认补考先要被补上。"],
      [/写进错题表背面/, "把错过窗口写到错题表背面，让这次代价和复习计划贴在一起。它不会消失，只是被看见了。"],
      [/告诉陆沉窗口没了/, "直接告诉陆沉窗口没了，让他不用从沉默里猜。说清楚之后，下午还能回到第一章。"],
      [/不说，先把第一章看完/, "不解释窗口，先把第一章看完。复习能完整一点，工作债也会被压到晚上。"],
      [/先向母亲说补考教室/, "先给母亲 C201 和补考时间，让她知道白天不是空着。她可能继续要票，但误读会少。"],
      [/先向晚风说今天不去光谷/, "先告诉晚风今天不去光谷，别让她等到深夜才知道。关系不被推进，但边界更清楚。"],
      [/先向 4XX 发 C201 和文件袋/, "把 C201 和文件袋发到 4XX 群里，让室友知道他白天确实卡在补考和材料里。"],
      [/只报 C201/, "只报一个位置，让别人知道他在哪里，但不解释整条动线。信息最少，后面仍要补。"],
      [/报 C201 加打印计划/, "把教室和打印计划一起发出去，让等待的人知道他为什么还没回来。它减少误读，也增加执行压力。"],
      [/报 C201、打印和勤工窗口顺序/, "把教室、打印和窗口顺序一次说清，让这一天从失踪变成可追踪的安排。说得越清楚，越要按顺序做。"],
      [/坐回第三排靠边/, "坐回能被看见的位置，但不把自己完全放到人群中央。4XX 能递来帮助，也更容易问起结果。"],
      [/坐到 4XX 看得见/, "坐到 4XX 看得见、又不挤在一起的位置。被支持和保边界同时成立。"],
      [/先去后排/, "先把自己挪到更好离开的位置，方便下课跑窗口，也承担别人看不懂的误读。"],
      [/只说“还行”|只说还行/, "用最轻的一句话盖过去，让饭桌暂时不继续追问。气氛稳住，具体困难也没有被接住。"],
      [/说“链表写完|链表写完/, "把难处说具体：链表写完，队列差一点。关心终于能接住事实，而不是围着分数转。"],
      [/别问分/, "把焦点从分数挪到做了哪题，不让这顿饭只剩成绩审问。边界清楚，也允许别人继续关心。"],
      [/不说，直接去打印/, "先冲去打印店处理材料，留下别人只能从结果倒推的空白。效率高，误读也会跟着涨。"],
      [/在群里发/, "把“去补表”丢进群里，至少让别人知道他不是失踪。解释很短，但够把去向钉住。"],
      [/只告诉唐骁/, "只把材料压力交给最懂流程的人，信息更窄也更稳。4XX 其他人仍可能不知道他去了哪里。"],
      [/直接放公共桌/, "把窗口回执放到所有人都看得见的位置，省掉一轮解释。结果公开，过程仍然简短。"],
      [/先发群说明/, "先说明自己去排队，让结果回来前也有一条线索。它不能解决等待，但能减少失踪感。"],
      [/只告诉陆沉/, "只对最接近现实流程的人说，换来稳，也留下偏窄的信息。别人会从陆沉那里倒推结果。"],
      [/写校内窗口/, "先把校内窗口写成后续补材料，给表格一个能过的事实。入口锁住，说明债也跟着出现。"],
      [/写预计留校天数/, "把留校天数和可联系时间写清，让别人真的找得到自己。兼职细节少一点，时间边界更稳。"],
      [/写兼职、留校和第一联系人/, "把兼职、留校和第一联系人一次写下去。清楚会带来压力，也让第五幕不能再退回含混。"],
      [/只写留校/, "只写留校和宿舍号，让表格先过。兼职空白会跟着他回到 4XX，后面必须补说明。"],
      [/写“校内窗口后补说明”/, "把兼职栏写成校内窗口后补说明，承认事情未定，也给后续补材料留出口。"],
      [/写联系人和可联系时间但不写兼职细节/, "先把人能找到这一点写清，兼职细节暂时留白。表格更稳，工作债还在。"],
      [/先问父亲忙时能不能接/, "先问父亲忙时能不能接电话，让体面和有效性分开。这个问题会碰到他的沉默。"],
      [/先问母亲能不能放第一/, "先问母亲能不能放第一联系人，把实际能联系到的人放到前面。父亲的体面要另行处理。"],
      [/同时在家庭群说明学校要求真实有效/, "把学校要求发进家庭群，让联系人顺序变成共同确认，而不是自己私下糊弄。"],
      [/母亲第一、父亲第二/, "按实际能接电话的人保存，不再为了体面把顺序写糊。解释少一点，结果先落地。"],
      [/保存后发家庭群/, "把截图发回家里，让联系人顺序从私下判断变成共同确认。家里会看见，他也少欠一次解释。"],
      [/先给父亲私发/, "先照顾父亲的体面，再把学校要求说清楚。顺序不变，但话不会直接砸到家庭群里。"],
    ];
    const mapped = mappings.find(([pattern]) => pattern.test(title));
    if (mapped) return mapped[1];
    if (body) return enrichMicroBody(title, body);

    if (/^先问/.test(title)) {
      return `先把“${title.replace(/^先问/, "")}”问清，再决定下一步怎么走。问清楚会慢一点，但不会让压力继续混在一起。`;
    }
    if (/^先/.test(title)) {
      return `先选择“${title.replace(/^先/, "")}”，让眼前的压力落到一个具体动作上。动作越明确，代价也越难藏住。`;
    }
    if (/^只/.test(title)) {
      return `只做到“${title.replace(/^只/, "")}”，保留最低边界，也留下后续解释成本。`;
    }
    return `先按“${title}”处理，让这一刻有一个落点。没有说完的压力，会在下一段现场里继续出现。`;
  }

  function formatConcreteMicroBody(title, body, group) {
    const renderedTitle = formatConcreteMicroTitle(title, body, group);
    if (!renderedTitle) return "";
    if (/^在勤工群/.test(renderedTitle)) return "群公告停在屏幕上，这一条发出去后会有人接话。";
    if (/^备忘录|^错题表|^说明栏|^备注栏|表格先写/.test(renderedTitle)) return "纸面上多出这一行，林亦舟把笔帽按回去。";
    if (/发给晚风|晚风/.test(renderedTitle)) return "光谷截图还亮在上一条，林亦舟把这句留给晚风看见。";
    if (/父亲|站口|站外/.test(renderedTitle)) return "站外的半小时被写进消息里，不再只卡在电话里。";
    if (/母亲|家里/.test(renderedTitle)) return "母亲那边还没有挂断，车票页也在屏幕后台开着。";
    if (/陆沉/.test(renderedTitle)) return "陆沉看完这句，能接上的只有流程，不是替他决定。";
    if (/唐骁/.test(renderedTitle)) return "唐骁抬眼看他，材料这件事终于有了具体入口。";
    if (/家庭群/.test(renderedTitle)) return "消息发出去，家庭群安静了几秒。";
    if (/4XX 群|公共桌/.test(renderedTitle)) return "宿舍那边会看见这一步，不必只从空座位猜他的去向。";
    if (/饭卡/.test(renderedTitle)) return "饭卡余额刷新出来，他把支付页关掉。";
    if (/手机|消息/.test(renderedTitle)) return "屏幕暗下去，公共桌上的信封还压着。";
    if (/拍下|门牌|路线/.test(renderedTitle)) return "照片存进相册，走廊尽头的门牌还在晃。";
    if (/坐到|坐回|后排|座位/.test(renderedTitle)) return "椅脚擦过地面，错题表被他摊开。";
    if (/打印店|第一章/.test(renderedTitle)) return "书包拉链一合，他已经走到教室门口。";
    if (/填上|联系人|兼职|留校/.test(renderedTitle)) return "表格光标跳到下一栏，页面暂时保存下来。";
    if (/^发|^问|^给父母|^再问/.test(renderedTitle)) return "消息发出去，对面开始输入，屏幕没有再暗下去。";
    if (/^说|^只回|低声/.test(renderedTitle)) return "话说出口，周围的声音短短停了一下。";
    if (/备忘录|错题表|表格|说明栏|备注栏|保存|写|夹/.test(renderedTitle)) return "纸面上多出这一行，林亦舟把笔帽按回去。";
    if (/勤工群|窗口|班/.test(renderedTitle)) return "群公告停在屏幕上，这一条发出去后会有人接话。";
    return "他把手里的东西放回桌面，新的沉默很快接上来。";
  }

  function mapMainChoiceByLabel(option, index) {
    const label = stripInlineMarkdown(option && option.label ? option.label : "");
    const rows = [
      [/先接住家里的那通电话/, "先接住家里的那通电话", "先回母亲，记下父亲到站时间，再把明天车次排出来。"],
      [/问清楚勤工值班能不能排上/, "先问清勤工值班怎么排", "问陆沉排班、报名材料和勤工群入口，把这张表真正放进自己的暑假。"],
      [/给晚风一个明确答复/, "给晚风一个明确答复", "给晚风一个不会让她空等的回复，说明明天家里要先处理，晚上再确认具体改法。"],
      [/保见面，把光谷时间留住/, "先把父亲那边定下来", "给父亲发到站时间，也写清自己能待多久。"],
      [/保排班和现实成本/, "先把勤工和花费算清", "把车票、饭卡、打印费和勤工时间写进同一张备忘录。"],
      [/明说预算和时间/, "先把预算和时间说成实话", "分别给母亲、父亲和晚风发不同的实话，不再复制同一句。"],
      [/问家里缺口/, "问清这笔钱从哪里来", "把父亲给的钱和家里的缺口问清楚，不再只看信封厚度。"],
      [/收钱不问/, "先把钱收进饭卡和车票", "先把饭卡、打印费和车票处理掉，剩下的话暂时压回包里。"],
      [/先问勤工流程/, "先问勤工窗口还能不能接", "去问勤工窗口的材料、班次和报名方式，让缺口有一个能做的出口。"],
      [/先补学业材料/, "先把补考资料补齐", "先把数据结构目录、C201 和打印材料补齐，再去看窗口消息。"],
      [/先接临时班/, "先回勤工群接下临时班", "在勤工群里接下临时班，把周四下午先写进备忘录。"],
      [/把白天能处理的事说清/, "先把今天白天会去哪儿说清", "把补考教室、打印和窗口顺序告诉该等的人。"],
      [/坐回 4XX 可见位置/, "坐回 4XX 看得见的位置", "坐回能被 4XX 看见的位置，把错题表摊开。"],
      [/靠后处理资料/, "坐到后排，先处理资料", "先坐到后排靠门的位置，下课后直接去打印店。"],
      [/先去跑现实窗口/, "先去明德楼跑完窗口", "先去明德楼跑窗口，拿到回执后再回公共桌。"],
      [/如实填兼职 \/ 留校安排/, "把兼职和留校都如实填上", "按真实情况填写兼职、留校和联系人，本人签字后再保存。"],
      [/只写留校/, "先只填留校和宿舍号", "先填留校和宿舍号，兼职栏留到后面补说明。"],
      [/先问父母再填/, "先问清联系人顺序再保存", "保存前问清父母谁能接电话，再把联系人顺序填上。"],
    ];
    const mapped = rows.find(([pattern]) => pattern.test(label));
    if (mapped) return mapped[index];
    return "";
  }

  function formatMainChoiceTitle(option) {
    return mapMainChoiceByLabel(option, 1) || stripInlineMarkdown(option && option.label ? option.label : "");
  }

  function formatMainChoiceDetail(option) {
    const mapped = mapMainChoiceByLabel(option, 2);
    if (mapped) return mapped;

    const action = stripInlineMarkdown(option && option.action ? option.action : "");
    if (action) return action;

    const summary = stripInlineMarkdown(option && option.effectSummary ? option.effectSummary : "");
    return summary
      .replace(/微内流点|主轴推进|POOL-[A-Z0-9-]+|当前池/g, "")
      .replace(/低频信任/g, "等待里的信任")
      .replace(/工作线入口|工作线倾向/g, "工作安排")
      .replace(/风险|代价|误读|压力/g, "")
      .trim();
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
      microBeatIndex: 0,
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
        title.textContent = `${entry.lockId} ${entry.option.direction}：${formatMainChoiceTitle(entry.option)}`;
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
        title.textContent = `${option.direction}. ${formatMainChoiceTitle(option)}`;

        const detail = document.createElement("span");
        detail.className = "option-detail";
        detail.textContent = formatMainChoiceDetail(option);

        button.append(title);
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
      const pageCount = Math.max(runtime.feedbackPages.length, 1);
      const group = chain.microGroups[runtime.microBeatIndex] || null;

      const block = document.createElement("div");
      block.className = `micro-beat${group ? "" : " muted"}`;

      const heading = document.createElement("h3");
      heading.textContent = group ? formatMicroPrompt(group) : "继续往下";

      block.append(heading);

      if (group) {
        const guide = formatMicroGuide(group);
        if (guide) {
          const guideText = document.createElement("p");
          guideText.className = "micro-guide";
          guideText.textContent = guide;
          block.appendChild(guideText);
        }

        const row = document.createElement("div");
        row.className = "micro-option-row";
        group.options.forEach((option) => {
          const labelParts = splitMicroLabel(option.label);
          const button = document.createElement("button");
          button.type = "button";
          button.className = "micro-choice";
          button.classList.toggle("selected", runtime.microSelections[group.beat] === option.code);
          button.addEventListener("click", () => {
            chooseMicroOption(group, option);
          });

          const label = document.createElement("strong");
          label.textContent = formatMicroChoiceTitle(labelParts, group);
          button.append(label);
          const choiceBody = formatMicroChoiceBody(labelParts, group);
          if (choiceBody) {
            const body = document.createElement("p");
            body.className = "micro-choice-text";
            body.textContent = choiceBody;
            button.append(body);
          }
          row.appendChild(button);
        });
        block.appendChild(row);
      }

      els.microPanel.appendChild(block);
    }

    function microComplete(lock) {
      if (!runtime.chosenOption) return false;
      const chain = lock.choice.chains[runtime.chosenOption.direction];
      if (!chain) return true;
      return chain.microGroups.every((group) => Boolean(runtime.microSelections[group.beat]));
    }

    function currentMicroBeatComplete(lock) {
      if (!runtime.chosenOption) return false;
      const chain = lock.choice.chains[runtime.chosenOption.direction];
      if (!chain) return true;
      const group = chain.microGroups[runtime.microBeatIndex];
      if (!group) return true;
      return Boolean(runtime.microSelections[group.beat]);
    }

    function isLastMicroBeat(lock) {
      if (!runtime.chosenOption) return true;
      return runtime.microBeatIndex >= Math.max(runtime.feedbackPages.length, 1) - 1;
    }

    function moveToNextLockOrComplete() {
      if (runtime.lockIndex < runtime.data.locks.length - 1) {
        runtime.lockIndex += 1;
        runtime.mode = "scene";
        runtime.pageIndex = 0;
        runtime.chosenOption = null;
        runtime.microBeatIndex = 0;
        runtime.microSelections = {};
        runtime.choiceCommitted = false;
        runtime.feedbackPages = [];
        runtime.feedbackIndex = 0;
      } else {
        runtime.mode = "complete";
      }
    }

    function advanceMicroFlow(lock) {
      if (!currentMicroBeatComplete(lock)) return;
      if (isLastMicroBeat(lock)) {
        if (!microComplete(lock)) return;
        commitChoice(lock);
        moveToNextLockOrComplete();
      } else {
        runtime.microBeatIndex += 1;
      }
    }

    function chooseMicroOption(group, option) {
      runtime.microSelections[group.beat] = option.code;
      advanceMicroFlow(currentLock());
      render();
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

      addVars(parseNumericEffects(option.effectSummary));
      if (/主轴/.test(option.type)) addVars({ ui_work_axis_choice: 1 });
      if (/微内流/.test(option.type)) addVars({ ui_micro_inflow_choice: 1 });
      microChoices.forEach((choice) => addVars(choice.effects));
      (chain ? chain.echoHooks : []).forEach((hook) => {
        if (!runtime.hooks.includes(hook)) runtime.hooks.push(hook);
      });

      if (runtime.feedbackPages.length === 0) {
        runtime.feedbackPages = resolveFeedbackPages(lock, option);
      }
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
      const lock = currentLock();
      runtime.chosenOption = option;
      runtime.microBeatIndex = 0;
      runtime.microSelections = {};
      runtime.choiceCommitted = false;
      runtime.feedbackPages = resolveFeedbackPages(lock, option);
      runtime.feedbackIndex = 0;
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
      els.stageChip.textContent = formatStageName(runtime.mode);
      els.choicePanel.hidden = true;
      els.microPanel.hidden = true;
      els.next.hidden = false;

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
        setBody([lock.choice.guide, ...lock.choice.summary].filter(Boolean).filter(isPlayerFacingChoiceParagraph));
        renderChoicePanel(lock);
        els.next.textContent = "请选择方向";
        els.next.disabled = true;
      } else if (runtime.mode === "micro") {
        const chain = lock.choice.chains[runtime.chosenOption.direction];
        const page = runtime.feedbackPages[runtime.microBeatIndex];
        const group = chain && chain.microGroups[runtime.microBeatIndex];
        els.title.textContent = `${runtime.chosenOption.direction}. ${formatMainChoiceTitle(runtime.chosenOption)}`;
        if (page) {
          els.title.textContent = page.title;
          els.location.textContent = page.id;
          setBody(page.paragraphs);
        } else {
          els.location.textContent = chain ? chain.title : lock.choice.id;
          setBody(["当前方向缺少正式剧情页，请回到 Markdown 检查反馈页 ID。"]);
        }
        els.progress.textContent = `${runtime.lockIndex + 1} / ${runtime.data.locks.length} 锁点 · ${runtime.chosenOption.direction} 方向 ${runtime.microBeatIndex + 1} / ${Math.max(runtime.feedbackPages.length, 1)}`;
        renderMicroPanel(lock);
        if (group) {
          els.next.hidden = true;
          els.next.disabled = true;
        } else {
          els.next.textContent = isLastMicroBeat(lock) ? (runtime.lockIndex < runtime.data.locks.length - 1 ? "进入下一锁点" : "完成预览") : "继续剧情";
          els.next.disabled = false;
        }
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
        advanceMicroFlow(lock);
      } else if (runtime.mode === "feedback") {
        if (runtime.feedbackIndex < runtime.feedbackPages.length - 1) {
          runtime.feedbackIndex += 1;
        } else if (runtime.lockIndex < runtime.data.locks.length - 1) {
          runtime.lockIndex += 1;
          runtime.mode = "scene";
          runtime.pageIndex = 0;
          runtime.chosenOption = null;
          runtime.microBeatIndex = 0;
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
        if (runtime.microBeatIndex > 0) {
          runtime.microBeatIndex -= 1;
        } else {
          runtime.mode = "choice";
        }
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
      runtime.microBeatIndex = 0;
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
      runtime.microBeatIndex = 0;
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
    splitMicroLabel,
    formatMainChoiceTitle,
    formatMicroChoiceTitle,
    formatMicroChoiceBody,
    formatMicroGuide,
    stripInlineMarkdown,
    boot,
  };
});
