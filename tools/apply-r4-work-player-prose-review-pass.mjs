import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const routeJsonPath = path.join(
  projectRoot,
  "docs",
  "剧情小说母版_v4.0",
  "开发数据_IF剧情页级JSON_R4-WORK_v1.json"
);

const route = JSON.parse(fs.readFileSync(routeJsonPath, "utf8").replace(/^\uFEFF/, ""));

function findPage(pageId) {
  for (const block of route.act4_detail_blocks ?? []) {
    const page = (block.pages ?? []).find((candidate) => candidate.page_id === pageId);
    if (page) return page;
  }
  for (const block of route.act5_detail_blocks ?? []) {
    const page = (block.pages ?? []).find((candidate) => candidate.page_id === pageId);
    if (page) return page;
    for (const direction of block.choice_window?.directions ?? []) {
      const feedbackPage = (direction.feedback_pages ?? []).find((candidate) => candidate.page_id === pageId);
      if (feedbackPage) return feedbackPage;
    }
  }
  const transitionPage = route.act4_to_act5_transition_block?.pages?.find((candidate) => candidate.page_id === pageId);
  if (transitionPage) return transitionPage;
  throw new Error(`Missing page: ${pageId}`);
}

findPage("ACT4-WORK-L06-P2-S01").text = [
  "班群通知暑假去向登记开放。",
  "表格弹开时，4XX 里短短静了一下。留校、返家、实习、兼职、校外住宿从上往下排着，像五条不肯合并的路。林亦舟的光标卡在“兼职 / 留校说明”后面，右边紧急联系人一栏空着。",
  "父亲发来：别写太死。",
  "母亲紧跟着说：按实际写。",
  "陆沉坐在旁边，删掉自己的留校原因，又重新敲。唐骁把证书材料夹进透明袋，周屿从书里抽出小舞台回执，纸角刮过桌面。页面最下方的三个红点还亮着：活动证明、证书报名、补考材料回执。林亦舟把鼠标挪到紧急联系人，又停回“兼职 / 留校说明”。"
];
findPage("ACT4-WORK-L06-P2-S01").updates = {
  ...(findPage("ACT4-WORK-L06-P2-S01").updates ?? {}),
  prose_review_pass_01: true
};

const l06Choice = (route.act4_detail_blocks ?? [])
  .find((block) => block.block_id === "ACT4-WORK-L06")
  ?.choice_window;
if (l06Choice) {
  l06Choice.guide = "暑假去向、紧急联系人、活动证明和补考回执都停在同一张页面上。先落哪一笔，就会先让谁看见他把自己放在哪里。";
}

route.player_prose_review_passes = Array.isArray(route.player_prose_review_passes)
  ? route.player_prose_review_passes
  : [];
route.player_prose_review_passes = route.player_prose_review_passes.filter((pass) => (
  pass.pass_id !== "r4_work_player_prose_review_pass_01"
));
route.player_prose_review_passes.push({
  pass_id: "r4_work_player_prose_review_pass_01",
  scope: "ACT4-WORK-L06 entry plus Act5 generated feedback prose",
  status: "formal_json_text_updated",
  note: "Rewrote the Act4 L06 summer-registration page from explanation into scene action, and relies on the updated Act5 expansion generator for non-repeated feedback prose."
});

fs.writeFileSync(routeJsonPath, `${JSON.stringify(route, null, 2)}\n`, "utf8");

console.log(JSON.stringify({
  ok: true,
  page: "ACT4-WORK-L06-P2-S01",
  paragraphs: findPage("ACT4-WORK-L06-P2-S01").text.length,
  pass: "r4_work_player_prose_review_pass_01"
}, null, 2));
