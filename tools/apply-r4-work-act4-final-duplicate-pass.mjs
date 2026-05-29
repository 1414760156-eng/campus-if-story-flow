import fs from "node:fs";

const jsonPath = "docs/剧情小说母版_v4.0/开发数据_IF剧情页级JSON_R4-WORK_v1.json";
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const repeated = new Set([
  "4XX 群里安静了一会儿，周屿没有再用空座位猜你去哪。",
  "陆沉把手机扣到桌面上，只问这件事今晚谁去补。"
]);

let replacements = 0;

for (const block of data.act4_detail_blocks ?? []) {
  for (const direction of block.choice_window?.directions ?? []) {
    for (const group of direction.micro_groups ?? []) {
      for (const option of group.options ?? []) {
        if (!repeated.has(option.body)) continue;
        const label = (option.label || "这句话").replace(/[。！？?]$/u, "");
        if (option.body.startsWith("4XX")) {
          option.body = `4XX 群里安静了一会儿，周屿看完“${label}”，没有再用空座位猜他去了哪。`;
        } else {
          option.body = `陆沉把手机扣到桌面上，只问“${label}”后今晚谁去补。`;
        }
        replacements += 1;
      }
    }
  }
}

fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ replacements }, null, 2));
