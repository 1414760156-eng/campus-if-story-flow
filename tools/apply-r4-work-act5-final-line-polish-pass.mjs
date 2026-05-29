import fs from 'node:fs';

const jsonPath = 'docs/剧情小说母版_v4.0/开发数据_IF剧情页级JSON_R4-WORK_v1.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

function walkStrings(node, visitor) {
  if (typeof node === 'string') return visitor(node);
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i += 1) node[i] = walkStrings(node[i], visitor);
    return node;
  }
  if (node && typeof node === 'object') {
    for (const key of Object.keys(node)) node[key] = walkStrings(node[key], visitor);
  }
  return node;
}

const replacements = new Map([
  [
    '林亦舟看着公共桌上那几样东西，知道第六幕不是从新事件开始。',
    '林亦舟看着公共桌上那几样东西：打包小票压着门禁截图，活动截图还亮着，C407 清单的角被水杯压住。'
  ],
  [
    '快递站班表贴在透明板上，食堂窗口已经认得他，4XX 的公共桌也给他留出一个固定空位。三处都没有催，三处都在等一个长期答复。',
    '快递站班表贴在透明板上，食堂窗口已经认得他，4XX 的公共桌也给他留出一个固定空位。三个位置都安静着，像都先替他留了一格。'
  ]
]);

const missing = [];
for (const source of replacements.keys()) {
  let found = false;
  walkStrings(data, (value) => {
    if (value === source) found = true;
    return value;
  });
  if (!found) missing.push(source);
}
if (missing.length) throw new Error(`Missing ${missing.length} source strings`);

walkStrings(data, (value) => replacements.get(value) ?? value);

fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ replacements: replacements.size }, null, 2));
