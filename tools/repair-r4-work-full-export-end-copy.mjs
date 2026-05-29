import fs from "node:fs";

const filePath = "tools/export-r4-work-act4-act5-full-preview.mjs";
const source = fs.readFileSync(filePath, "utf8");
const start = source.indexOf("  end: {");
const end = source.indexOf("  sections,", start);

if (start < 0 || end < 0) {
  throw new Error("Could not find end block in full preview exporter.");
}

const replacement = `  end: {
    title: "R4-WORK 第四幕到第五幕试玩完成",
    location: "下一段：ACT6-WORK-B01",
    progress: "4->5 全链完成",
    paragraphs: [
      "第四幕从暑假去向、联系人签字和 B204 本人确认，走到第五幕返校第一周的晚班、材料、C407、活动名单和 4XX 饭点。",
      "到这里，固定班已经不只是赚钱办法，而是下一周会不会还有人默认等他的生活半径。"
    ],
  },
`;

fs.writeFileSync(filePath, source.slice(0, start) + replacement + source.slice(end), "utf8");
console.log(JSON.stringify({ repaired: true }, null, 2));
