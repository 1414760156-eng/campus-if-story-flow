import fs from "node:fs";

const jsonPath = "docs/剧情小说母版_v4.0/开发数据_IF剧情页级JSON_R4-WORK_v1.json";
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const replacements = new Map([
  [
    "在勤工群发：“材料、时间、能不能换班。”",
    "在勤工群发：“材料、时间、换班规则。”",
  ],
  [
    "在勤工群发：“材料、时间、能不能换班。”留在群公告下面，屏幕亮了一会儿才暗下去。",
    "在勤工群发：“材料、时间、换班规则。”那行字贴在群公告下面，屏幕亮了一会儿才暗下去。",
  ],
  ["还要不要继续问下去？", "信封里的钱还压在桌角"],
  ["先问勤工窗口还能不能接", "把勤工窗口先问清楚"],
  ["林亦舟先问勤工窗口还能不能接。", "林亦舟先把勤工窗口问清楚。"],
  ["先问能不能十点后补截图", "先约十点后补截图"],
  [
    "下周班表已经贴出来，4XX 也开始问还要不要等饭。门把手有点凉，楼道灯还剩最后一盏。",
    "下周班表已经贴出来，4XX 在群里留着一份饭。门把手有点凉，楼道灯还剩最后一盏。",
  ],
  [
    "晚班到几点，C407 交哪一版，活动能不能到场，几点前必须回寝。",
    "晚班的结束时间、C407 的定稿版本、活动名单上的名字和回寝门禁，一行行挤到同一张便签上。",
  ],
]);

let changed = 0;

function rewrite(value) {
  if (typeof value === "string") {
    const next = replacements.get(value);
    if (next) {
      changed += 1;
      return next;
    }
    return value;
  }
  if (Array.isArray(value)) return value.map(rewrite);
  if (value && typeof value === "object") {
    for (const key of Object.keys(value)) value[key] = rewrite(value[key]);
  }
  return value;
}

rewrite(data);
fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`);
console.log(JSON.stringify({ changed }, null, 2));
