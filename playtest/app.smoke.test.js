const assert = require("assert");

class FakeElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
    this.listeners = {};
    this.style = {};
    this.attributes = {};
    this._innerHTML = "";
    this.textContent = "";
    this.hidden = false;
    this.className = "";
    this.type = "";
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
    if (this.listeners.click) {
      this.listeners.click();
    }
  }
}

const elements = {};
const ids = [
  "node-act",
  "node-line",
  "node-progress",
  "node-title",
  "node-scene",
  "node-summary",
  "choice-list",
  "state-list",
  "log-list",
  "ending-panel",
  "feedback-panel",
  "feedback-text",
  "continue-button",
  "restart-button",
  "export-button",
];

ids.forEach((id) => {
  elements[id] = new FakeElement("div");
});

global.window = {
  FiveAPlaytestData: require("./5a-data.js"),
  PlaytestEngine: require("./engine.js"),
};

global.document = {
  getElementById(id) {
    return elements[id];
  },
  createElement(tagName) {
    return new FakeElement(tagName);
  },
};

global.Blob = class FakeBlob {};
global.URL = {
  createObjectURL() {
    return "blob:fake";
  },
  revokeObjectURL() {},
};

require("./app.js");

assert.strictEqual(elements["node-title"].textContent, "混乱盘点夜");
assert.strictEqual(elements["choice-list"].children.length, 3);
assert.strictEqual(elements["state-list"].children.length, 10);
assert.strictEqual(elements["log-list"].children.length, 0);

elements["choice-list"].children[0].click();

assert.strictEqual(elements["feedback-panel"].hidden, false);
assert.ok(elements["feedback-text"].textContent.length > 0);
assert.strictEqual(elements["node-title"].textContent, "混乱盘点夜");
assert.strictEqual(elements["log-list"].children.length, 1);

elements["continue-button"].click();

assert.strictEqual(elements["node-title"].textContent, "分线整理页");
assert.strictEqual(elements["log-list"].children.length, 1);
assert.strictEqual(elements["node-progress"].textContent, "2 / 9");

console.log("app smoke test passed");
