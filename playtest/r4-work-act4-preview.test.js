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
const css = fs.readFileSync(path.join(__dirname, "r4-work-act4-preview.css"), "utf8");

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
assert.ok(/\[hidden\]\s*\{[^}]*display:\s*none\s*!important/.test(css), "hidden panels must not be overridden by panel display styles");

class FakeElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
    this.listeners = {};
    this._innerHTML = "";
    this.textContent = "";
    this.hidden = false;
    this.disabled = false;
    this.className = "";
    this.type = "";
    this.href = "";
    this.download = "";
    this.classList = {
      toggle: (name, enabled) => {
        const names = new Set(String(this.className || "").split(/\s+/).filter(Boolean));
        if (enabled) names.add(name);
        else names.delete(name);
        this.className = [...names].join(" ");
      },
    };
  }

  set innerHTML(value) {
    this._innerHTML = value;
    this.children = [];
  }

  get innerHTML() {
    return this._innerHTML;
  }

  append(...children) {
    this.children.push(...children);
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }

  addEventListener(eventName, handler) {
    this.listeners[eventName] = handler;
  }

  click() {
    if (this.listeners.click) this.listeners.click();
  }
}

function countByClass(root, className) {
  const ownClasses = String(root.className || "").split(/\s+/);
  const own = ownClasses.includes(className) ? 1 : 0;
  return own + root.children.reduce((sum, child) => sum + countByClass(child, className), 0);
}

async function runDomSmoke() {
  const ids = [
    "route-chip",
    "lock-chip",
    "stage-chip",
    "page-progress",
    "page-title",
    "page-location",
    "page-body",
    "choice-panel",
    "micro-panel",
    "back-button",
    "next-button",
    "reload-button",
    "reset-button",
    "export-button",
    "metrics-list",
    "lock-list",
    "state-list",
    "hook-list",
    "history-list",
  ];
  const elements = Object.fromEntries(ids.map((id) => [id, new FakeElement("div")]));

  global.document = {
    getElementById(id) {
      return elements[id];
    },
    createElement(tagName) {
      return new FakeElement(tagName);
    },
  };
  global.fetch = async () => ({
    ok: true,
    status: 200,
    text: async () => markdown,
  });
  global.Blob = class FakeBlob {};
  global.URL = {
    createObjectURL() {
      return "blob:fake";
    },
    revokeObjectURL() {},
  };

  preview.boot();
  await new Promise((resolve) => setImmediate(resolve));
  await new Promise((resolve) => setImmediate(resolve));

  assert.strictEqual(elements["page-title"].textContent, "青枫居 4XX / 打包声");
  for (let i = 0; i < 4; i += 1) elements["next-button"].click();
  assert.strictEqual(elements["page-title"].textContent, "空宿舍里的三扇门");
  assert.strictEqual(elements["choice-panel"].children.length, 3);

  elements["choice-panel"].children[0].click();
  assert.strictEqual(elements["page-title"].textContent, "接住家里电话 / 现场行动");
  assert.strictEqual(elements["page-body"].children[0].textContent, "林亦舟把母亲电话接完，没有马上去点晚风的截图，也没有问陆沉勤工表。");
  assert.strictEqual(elements["choice-panel"].hidden, true, "main ABC choices should be hidden after choosing a direction");
  assert.strictEqual(elements["micro-panel"].children.length, 1, "micro mode should show one direction page at a time");
  assert.strictEqual(countByClass(elements["micro-panel"], "micro-choice"), 3, "first direction page should render 3 micro choices");
  assert.strictEqual(elements["next-button"].hidden, true, "micro choice should advance directly without a confirm button");

  const choiceBeat = elements["micro-panel"].children[0];
  assert.strictEqual(choiceBeat.children[0].textContent, "先怎么回母亲？");
  const firstMicroChoice = choiceBeat.children.find((child) => String(child.className).includes("micro-option-row")).children[0];
  assert.strictEqual(firstMicroChoice.children[0].textContent, "只给最低事实");
  assert.strictEqual(firstMicroChoice.children[1].textContent, "我看票，明天去站外见他。");
  assert.ok(!firstMicroChoice.children.some((child) => /family_|old_debt/.test(child.textContent)), "player-facing micro choices should hide variable effects");
  firstMicroChoice.click();

  assert.strictEqual(elements["page-title"].textContent, "接住家里电话 / 承接回声");
  assert.strictEqual(elements["page-body"].children[0].textContent, "晚上十点，林亦舟终于把明天行程排出来。");
  assert.strictEqual(countByClass(elements["micro-panel"], "micro-choice"), 3, "second direction page should render the second micro choice group");
  assert.strictEqual(elements["next-button"].hidden, true, "second micro choice should also advance directly");

  const secondChoiceBeat = elements["micro-panel"].children[0];
  const secondMicroChoice = secondChoiceBeat.children.find((child) => String(child.className).includes("micro-option-row")).children[0];
  secondMicroChoice.click();
  assert.strictEqual(elements["page-title"].textContent, "4XX / 购票软件");
}

runDomSmoke()
  .then(() => {
    console.log("r4-work-act4-preview.test.js passed");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
