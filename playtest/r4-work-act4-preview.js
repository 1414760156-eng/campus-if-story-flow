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
      guide: "父亲在站外，母亲催票，晚风也在等具体时间。退改规则已经不只是票页小字，而是你接下来要怎么安排这一天。",
    },
    L03: {
      title: "这笔现金怎么接？",
      guide: "父亲留下的现金、母亲的语音和成绩通知同时落在手边。钱能先补缺口，也会把没说清的事压进后面。",
    },
    L04: {
      title: "先补哪一个缺口？",
      guide: "补考资料、打印店、C201 和勤工窗口挤在同一个下午。哪件事先被接住，哪件事就会被推迟。",
    },
    L05: {
      title: "返校后站到哪里？",
      guide: "座位表、补考、窗口和 4XX 的视线都在场。你可以让自己被看见，也可以先保住材料和流程。",
    },
    L06: {
      title: "这张表怎么签？",
      guide: "兼职、留校、联系人和本人签字被放在同一页。写下去的不是答案，而是第五幕会继续追着你的事实。",
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

    choice.summary = linesToParagraphs(summaryLines);
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

  function formatMicroChoiceTitle(labelParts) {
    const title = stripInlineMarkdown(labelParts && labelParts.title ? labelParts.title : "");
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

  function formatMicroGuide(group) {
    const role = stripInlineMarkdown(group && group.role ? group.role : "");
    const action = stripInlineMarkdown(group && group.action ? group.action : "");
    const topic = role.includes("：") ? role.split("：").pop() : role.replace(/^微心态抉择\s*\d*/, "");
    const guides = [
      [/怎么开口/, "电话还没挂断，母亲没有催，只等他把明天怎么走说清楚。晚风截图和勤工表都摊在旁边，哪一句先发出去，后面的顺序就会跟着变。"],
      [/收住还是补一句|是否补一句/, "第一句已经发出去了，输入框还亮着。再补一句会让关系更清楚，也会让被压住的问题更难装作没看见。"],
      [/先问什么/, "勤工表已经从消息变成入口。材料、缺班和补考风险都挤在同一行，先问哪一句，暑假就会先被哪一件事切开。"],
      [/保哪一种见面/, "见父亲和去光谷之间只隔着一个半小时。任何一边多说几句话，另一边都会被挤掉。"],
      [/怎么把时间落地/, "备忘录里只有两行时间，站口、光谷和返校却都挤在里面。哪一行写实，哪一边就不用继续靠猜。"],
      [/先算哪一项/, "车票、饭卡、打印费和可换钱时间都摆在同一页上。第一笔先落在哪里，后面的顺序就会跟着偏过去。"],
      [/先向谁说清/, "三个聊天框都在等具体时间。同一个压力不能复制同一句话发出去。"],
      [/说到什么程度/, "第一句话要让晚风知道光谷会被挤掉。说得越具体，她越不用猜，他也越不能继续含混。"],
      [/预算说到几分/, "只说时间能保住体面，说到钱和勤工就会让压力显形。话递出去多少，关系里就多看见多少现实。"],
      [/问谁/, "信封、小票和成绩通知压在一起。钱不是凭空来的，第一句问向谁，沉默就会先从谁那里落下来。"],
      [/继续追还是收住/, "父亲和母亲的沉默都已经出现。继续追会让缺口变清楚，收住则能先保住当下运转。"],
      [/钱怎么处理/, "这笔钱能让饭卡和打印费稳一点，也会把没说完的话一起塞进包里。"],
      [/先补哪块窟窿/, "父亲给的钱和勤工便签被夹在一起。缺口都在眼前，只是哪一个先被写成今天的行动。"],
      [/先补哪份材料/, "C201 门牌、补考资料和勤工申请表都在文件袋里。纸张贴着纸张，先抽哪一份，下午就先往哪边倾斜。"],
      [/如何承认错过/, "窗口已经被别人接走。错过不能被抹掉，只能被写到某个地方，或者交给某个人知道。"],
      [/怎么接班/, "临时班第一次有了具体时间。答应得太快会压住复习，问得太慢又可能错过窗口。"],
      [/先说哪件白天事/, "白天被补考、打印、教室和窗口切开。消息发给谁，谁就会先知道他为什么不能按原时间出现。"],
      [/说到什么深度/, "只报位置能减少解释，说清顺序会增加约束。别人要等到什么程度，取决于他把哪一段行程摆出来。"],
      [/坐到哪里/, "座位表把他放回别人能看见的位置。越靠近 4XX，帮助越具体，追问也越近。"],
      [/回答到几分/, "饭桌上的关心已经递过来。他可以用一句话挡掉，也可以说出具体卡住的题。"],
      [/离开前说不说/, "后排靠门能让动作更快，也会让 4XX 只能从结果倒推他的去向。"],
      [/怎么把结果带回 4XX/, "窗口已经跑完，回执在手里。它可以直接落到公共桌上，也可以只先交给一个人。"],
      [/如实写到几分/, "去向页面没有给含混留太多空格。写得越清楚，后面的缺席和晚归越不能再退回没想好。"],
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

  function formatMicroChoiceBody(labelParts, group) {
    const title = stripInlineMarkdown(labelParts && labelParts.title ? labelParts.title : "");
    const body = stripInlineMarkdown(labelParts && labelParts.body ? labelParts.body : "");

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
          label.textContent = formatMicroChoiceTitle(labelParts);
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
        setBody([lock.choice.guide, ...lock.choice.summary].filter(Boolean));
        renderChoicePanel(lock);
        els.next.textContent = "请选择方向";
        els.next.disabled = true;
      } else if (runtime.mode === "micro") {
        const chain = lock.choice.chains[runtime.chosenOption.direction];
        const page = runtime.feedbackPages[runtime.microBeatIndex];
        const group = chain && chain.microGroups[runtime.microBeatIndex];
        els.title.textContent = `${runtime.chosenOption.direction}. ${runtime.chosenOption.label}`;
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
    formatMicroChoiceTitle,
    formatMicroChoiceBody,
    formatMicroGuide,
    stripInlineMarkdown,
    boot,
  };
});
