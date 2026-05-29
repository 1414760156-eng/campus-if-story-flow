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

function block(blockId) {
  const found = (route.act5_detail_blocks ?? []).find((candidate) => candidate.block_id === blockId);
  if (!found) throw new Error(`Missing block: ${blockId}`);
  return found;
}

function page(blockId, pageId) {
  const found = (block(blockId).pages ?? []).find((candidate) => candidate.page_id === pageId);
  if (!found) throw new Error(`Missing page: ${pageId}`);
  return found;
}

function direction(blockId, key) {
  const found = (block(blockId).choice_window?.directions ?? []).find((candidate) => candidate.direction === key);
  if (!found) throw new Error(`Missing direction: ${blockId}-${key}`);
  return found;
}

function feedback(blockId, key, suffix) {
  const found = (direction(blockId, key).feedback_pages ?? []).find((candidate) => candidate.page_id === `${blockId}-${key}-${suffix}`);
  if (!found) throw new Error(`Missing feedback: ${blockId}-${key}-${suffix}`);
  return found;
}

function microGroup(blockId, groupSuffix) {
  for (const candidateDirection of block(blockId).choice_window?.directions ?? []) {
    const found = (candidateDirection.micro_groups ?? []).find((candidate) => candidate.group_id === `${blockId}-MICRO-${groupSuffix}`);
    if (found) return found;
  }
  throw new Error(`Missing micro group: ${blockId}-MICRO-${groupSuffix}`);
}

function addParagraph(blockId, pageId, text) {
  const target = page(blockId, pageId);
  target.text = Array.isArray(target.text) ? target.text : [];
  if (!target.text.includes(text)) target.text.push(text);
  target.updates = { ...(target.updates ?? {}), mother_alignment_pass_01: true };
}

function removeParagraphContaining(blockId, pageId, fragment) {
  const target = page(blockId, pageId);
  target.text = (target.text ?? []).filter((paragraph) => !paragraph.includes(fragment));
}

function addFeedbackParagraph(blockId, key, suffix, text) {
  const target = feedback(blockId, key, suffix);
  target.text = Array.isArray(target.text) ? target.text : [];
  if (!target.text.includes(text)) target.text.push(text);
  target.updates = { ...(target.updates ?? {}), mother_alignment_pass_01: true };
}

function setGuide(blockId, guide) {
  block(blockId).choice_window.guide = guide;
}

function setDirectionDescription(blockId, key, description) {
  direction(blockId, key).description = description;
}

function setMicro(blockId, groupSuffix, prompt, labels) {
  const target = microGroup(blockId, groupSuffix);
  target.prompt = prompt;
  target.options = target.options.map((option, index) => ({
    ...option,
    label: labels[index] ?? option.label,
    body: `这一次，他没有把选择说成态度，只把“${labels[index] ?? option.label}”落到能被别人看见的一步。`
  }));
  target.updates = { ...(target.updates ?? {}), mother_alignment_pass_01: true };
}

const alignment = [
  {
    id: "door_return",
    blocks: ["ACT5-WORK-B01", "ACT5-WORK-B03"],
    purpose: "班前门口回流：对应母本 5A 门口空间选择，让进门、下楼、楼梯口停住都成为工作线内部压力。"
  },
  {
    id: "shen_material_return",
    blocks: ["ACT5-WORK-B02"],
    purpose: "沈嘉禾 / 打印店材料回流：格式可以帮看，说明不能代写。"
  },
  {
    id: "activity_public_return",
    blocks: ["ACT5-WORK-B07", "ACT5-WORK-B10"],
    purpose: "秦越 / 许棠活动与公开叙事回流：活动可靠和公开材料同时消耗同一个人。"
  },
  {
    id: "wanfeng_xia_night_return",
    blocks: ["ACT5-WORK-B04", "ACT5-WORK-B09"],
    purpose: "晚风 / 夏知微夜晚回流：私人联系和影像边界照见缺席，但最后推回工作与学习债。"
  },
  {
    id: "rule_meeting_and_relapse",
    blocks: ["ACT5-WORK-B05", "ACT5-WORK-B08", "ACT5-WORK-B09", "ACT5-WORK-B12"],
    purpose: "工作线规则会与复发层：C407、4XX、快递站、活动、补考共同检验边界是否活着。"
  }
];

addParagraph(
  "ACT5-WORK-B01",
  "ACT5-WORK-B01-S04",
  "他没有马上推门。楼梯口的风从下往上灌，快递站群还在催提前十分钟到，屋里周屿把水杯放回公共桌。进门、下楼、在楼梯口多站半分钟，三件事都不算离开，却会让后面那句话变成不同的样子。"
);
setGuide(
  "ACT5-WORK-B01",
  "晚班、C407、4XX 门口和活动群未读压在同一部手机里。先说哪一句，不是给谁排名，而是决定他从哪扇门把今晚带回工作线。"
);
setMicro(
  "ACT5-WORK-B01",
  "C1",
  "站在门口这半分钟，先把哪件事说实？",
  ["先承认会迟到", "先说能交哪一栏", "先把几点回寝写清"]
);

addParagraph(
  "ACT5-WORK-B03",
  "ACT5-WORK-B03-S04",
  "这句话把楼下也算进来了。宿管窗口的晚归登记、快递站的到岗表、C407 的负责项，都在等他把自己放到一个能被问到的位置。林亦舟看见门缝里的灯，忽然知道：现在不进门，晚一点也要从这条走廊回来。"
);
setMicro(
  "ACT5-WORK-B03",
  "A1",
  "如果保住一个固定晚上，先牺牲哪一格？",
  ["少接一次晚班", "少去一次活动收尾", "少拖一次补说明"]
);

addParagraph(
  "ACT5-WORK-B02",
  "ACT5-WORK-B02-S02",
  "沈嘉禾就在靠窗那排座位，桌上摊着自己的报名材料。她看见他的说明页，只把附件顺序往旁边挪了一点：“格式我能看，理由你自己留着写。”这句话没有安慰他，却让打印店老板那句“别夹混”忽然有了更清楚的边。"
);
setGuide(
  "ACT5-WORK-B02",
  "材料被窗口退回，格式、用途、本人说明和 C407 模板都在桌上。可以有人帮他看纸边，但不能有人替他把缺口说成自己的。"
);
setMicro(
  "ACT5-WORK-B02",
  "A1",
  "沈嘉禾只看格式时，他先收住哪一句？",
  ["不说家里细节", "不把理由写给她看", "只问附件顺序"]
);

addParagraph(
  "ACT5-WORK-B04",
  "ACT5-WORK-B04-S03",
  "夏知微后来又补了一张缩略图。照片里没有林亦舟，只有便利店门口被雨照亮的一小块地、几只没发完的手环和一截空出来的路。她没有问他去哪儿，只问这张空镜能不能留。"
);
setGuide(
  "ACT5-WORK-B04",
  "晚风没有催，夏知微的照片也没有点名，4XX 只问到没到寝室。越是没人替他下结论，越要决定先把哪件事说成具体时间。"
);
setMicro(
  "ACT5-WORK-B04",
  "C1",
  "照片授权点掉前，哪句话不能再拖？",
  ["先回晚风不见面", "先告诉 4XX 到寝时间", "先确认空镜可以留"]
);

addParagraph(
  "ACT5-WORK-B05",
  "ACT5-WORK-B05-S04",
  "这不像开会，更像把几张纸摊在同一张桌上试重量。C407 的异常流要过程，活动钥匙要交接人，快递站要到岗记录，4XX 要知道他今晚还算不算在场。没有哪一张纸骂他，可每一张都能把他叫回来。"
);
setGuide(
  "ACT5-WORK-B05",
  "C407 要能追过程，活动钥匙也要确认责任。几张清单第一次放在同一张公共桌上，他不能再靠一边的可靠去抵另一边的空。"
);

addParagraph(
  "ACT5-WORK-B07",
  "ACT5-WORK-B07-S03",
  "秦越没有催第二遍，只把空白挂牌翻过来。挂牌背面压着胶痕，像之前被贴过很多名字。许棠把公开材料里的寝室号删掉后，抬头问他本人名字要不要保留。一个问能不能到场，一个问能不能被写进去，两个问题都落在同一支笔上。"
);
setGuide(
  "ACT5-WORK-B07",
  "秦越需要固定人手，许棠需要公开材料口径，快递站也需要固定班。一个没有工资，一个有工资，但都会占掉同一个周日。"
);
setMicro(
  "ACT5-WORK-B07",
  "B1",
  "活动和晚班撞在一起时，先把哪一处写成不能默认？",
  ["活动只到搬完设备", "晚班不临时加时", "公开稿不写寝室号"]
);

addParagraph(
  "ACT5-WORK-B08",
  "ACT5-WORK-B08-S04",
  "周屿把那瓶水往里推了一点，又像想起什么似的停住。唐骁没有继续问照片，陆沉把阳台门拉上，风声一下小了。所谓按不在处理，不是把他赶出去，而是以后很多事会先绕开他。"
);

removeParagraphContaining("ACT5-WORK-B09", "ACT5-WORK-B09-S04", "母本里期末复发");
addParagraph(
  "ACT5-WORK-B09",
  "ACT5-WORK-B09-S04",
  "这半小时如果接下，图书馆的座位会先空出来，C407 的修改意见会留到夜里，4XX 的晚饭也只剩一个盖着的碗。它不是失败，却像期末前水杯碰到桌沿的第一声轻响：前面写过的边界，到这里才知道能不能用。"
);
setGuide(
  "ACT5-WORK-B09",
  "加班能补钱，复习能补分，C407 能补责任。今晚不是三选一的算术题，而是前面所有边界第一次被同一只手往下压。"
);
setMicro(
  "ACT5-WORK-B09",
  "B1",
  "如果接下半小时，先把哪一处欠账写明？",
  ["错题只补两页", "C407 明早交初版", "4XX 不等他吃饭"]
);

addParagraph(
  "ACT5-WORK-B10",
  "ACT5-WORK-B10-S04",
  "许棠没有催，只发来一个文档光标还在闪的截图。光标停在“协助人员”后面，像一根细针。林亦舟看着那根针，知道公开材料不会替任何人说谎，但也不会替任何人保暖。"
);

addParagraph(
  "ACT5-WORK-B12",
  "ACT5-WORK-B12-S03",
  "如果他把班表当主表，4XX 会先按他不在排事，活动会先找别人顶空，晚风会先问他哪天真的有空，图书馆座位也会换成靠门的位置。没有人会立刻离开，只是每个人都开始学着不把他算进默认里。"
);
addParagraph(
  "ACT5-WORK-B12",
  "ACT5-WORK-B12-S04",
  "门禁机熄下去后，楼道灯一盏盏往里亮。林亦舟站在最亮和最暗的交界处，第一次觉得固定班不是把他带出学校，而是替他重新画了一张低温地图：哪里还能去，哪里已经不用等他。"
);
setGuide(
  "ACT5-WORK-B12",
  "快递站开始默认他，食堂窗口认得他，4XX 也开始按不在处理。固定班不是单纯赚钱，是新的生活半径，也可能让很多人慢慢学会不等他。"
);
setDirectionDescription(
  "ACT5-WORK-B12",
  "A",
  "工作成为主半径，关系不会立刻断，只会一点点学会绕开他。"
);
setMicro(
  "ACT5-WORK-B12",
  "A1",
  "如果接受固定班，哪一边会先不等他？",
  ["4XX 先按不在排", "活动先找别人顶", "晚风先问真实空档"]
);

addFeedbackParagraph(
  "ACT5-WORK-B12",
  "A",
  "F02",
  "后来，低温不是从一句重话开始的。它从周屿少问一顿饭、秦越少发一次@、晚风少等一个晚上开始。固定班表还贴在那里，像一张没有吵过架的证据。"
);

route.act5_mother_alignment_passes = Array.isArray(route.act5_mother_alignment_passes)
  ? route.act5_mother_alignment_passes.filter((pass) => pass.pass_id !== "r4_work_act5_mother_alignment_pass_01")
  : [];
route.act5_mother_alignment_passes.push({
  pass_id: "r4_work_act5_mother_alignment_pass_01",
  source_doc: "开发审计_IF_R4-WORK_母本小说横向关联对比.md",
  status: "formal_json_text_updated",
  scope: alignment,
  preserve_route_pool: "POOL-R4-WORK",
  note: "Adds mother-novel alignment seeds for work-line soft returns, rule meeting pressure, relapse pressure, and low-temperature work-radius risk without opening non-WORK routes."
});

route.act5_core_expansion_blueprint = {
  ...(route.act5_core_expansion_blueprint ?? {}),
  latest_mother_alignment_pass: "r4_work_act5_mother_alignment_pass_01",
  latest_mother_alignment_status: "formal_json_text_updated"
};

fs.writeFileSync(routeJsonPath, `${JSON.stringify(route, null, 2)}\n`, "utf8");

console.log(JSON.stringify({
  ok: true,
  pass: "r4_work_act5_mother_alignment_pass_01",
  groups: alignment.length,
  touched_blocks: Array.from(new Set(alignment.flatMap((item) => item.blocks))).length
}, null, 2));
