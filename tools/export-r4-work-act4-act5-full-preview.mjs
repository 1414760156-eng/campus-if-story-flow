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
const previewDataPath = path.join(projectRoot, "playtest", "r4-work-act4-act5-full-preview-data.js");

const route = JSON.parse(fs.readFileSync(routeJsonPath, "utf8").replace(/^\uFEFF/, ""));

function convertMicroGroup(group) {
  return {
    prompt: group.prompt,
    guide: group.guide || group.prompt,
    options: (group.options || []).map((option) => ({
      key: option.code,
      action: option.label,
      feedback: option.body,
    })),
  };
}

function convertPage(page, microGroups = []) {
  return {
    id: page.page_id,
    title: page.page_title,
    location: page.location,
    paragraphs: page.text || [],
    microGroups,
  };
}

function microGroupsByFeedbackPage(direction) {
  const byPage = new Map();
  const feedbackPages = direction.feedback_pages || [];
  let fallbackIndex = 0;

  for (const group of direction.micro_groups || []) {
    let sourcePageId = group.source_page_id;
    if (!sourcePageId && feedbackPages.length > 0) {
      const targetIndex = Math.min(fallbackIndex, feedbackPages.length - 1);
      sourcePageId = feedbackPages[targetIndex].page_id;
      fallbackIndex += 1;
    }
    if (!sourcePageId) continue;
    if (!byPage.has(sourcePageId)) byPage.set(sourcePageId, []);
    byPage.get(sourcePageId).push(convertMicroGroup(group));
  }

  return byPage;
}

function convertBlock(block) {
  if (!block.choice_window) {
    return {
      id: block.block_id,
      title: `${block.block_id} ${block.block_name}`,
      shortTitle: block.block_name,
      prePages: (block.pages || []).map((page) => convertPage(page)),
      choice: null,
      directions: [],
    };
  }

  const directions = block.choice_window.directions || [];
  return {
    id: block.block_id,
    title: `${block.block_id} ${block.block_name}`,
    shortTitle: block.block_name,
    prePages: (block.pages || []).map((page) => convertPage(page)),
    choice: {
      id: block.choice_window.choice_window_id,
      title: block.choice_window.title,
      guide: block.choice_window.guide,
      options: directions.map((direction) => ({
        key: direction.direction,
        label: direction.label,
        detail: direction.description,
      })),
    },
    directions: directions.map((direction) => {
      const groupsByPage = microGroupsByFeedbackPage(direction);
      return {
        key: direction.direction,
        title: direction.label,
        feedbackPages: (direction.feedback_pages || []).map((page) => (
          convertPage(page, groupsByPage.get(page.page_id) || [])
        )),
      };
    }),
  };
}

const sections = [
  ...route.act4_detail_blocks.map(convertBlock),
  convertBlock(route.act4_to_act5_transition_block),
  ...route.act5_detail_blocks.map(convertBlock),
];

const data = {
  route: route.route_id,
  pool: route.route_pool_id,
  source: "formal-json:act4_detail_blocks + act4_to_act5_transition_block + act5_detail_blocks",
  generatedAt: new Date().toISOString().slice(0, 10),
  exportFileName: "r4-work-act4-act5-full-run.json",
  end: {
    title: "R4-WORK 第四幕到第五幕试玩完成",
    location: "下一段：ACT6-WORK-B01",
    progress: "4->5 全链完成",
    paragraphs: [
      "第四幕从暑假去向、联系人签字和 B204 本人确认，走到第五幕返校第一周的晚班、材料、C407、活动名单和 4XX 饭点。",
      "到这里，固定班已经不只是赚钱办法，而是下一周会不会还有人默认等他的生活半径。"
    ],
  },
  sections,
};

const counts = {
  sections: data.sections.length,
  prePages: 0,
  choices: 0,
  directions: 0,
  feedbackPages: 0,
  microGroups: 0,
  microOptions: 0,
};

for (const section of data.sections) {
  counts.prePages += section.prePages.length;
  counts.choices += section.choice ? 1 : 0;
  counts.directions += section.directions.length;
  for (const direction of section.directions) {
    counts.feedbackPages += direction.feedbackPages.length;
    for (const page of direction.feedbackPages) {
      counts.microGroups += page.microGroups.length;
      for (const group of page.microGroups) counts.microOptions += group.options.length;
    }
  }
}

const expected = {
  sections: 22,
  prePages: 88,
  choices: 21,
  directions: 63,
  feedbackPages: 126,
  microGroups: 88,
  microOptions: 264,
};

for (const [key, value] of Object.entries(expected)) {
  if (counts[key] !== value) {
    throw new Error(`Unexpected ${key}: ${counts[key]} expected ${value}`);
  }
}

fs.writeFileSync(
  previewDataPath,
  `window.R4WorkAct5PreviewData = ${JSON.stringify(data, null, 2)};\n`,
  "utf8"
);

console.log(JSON.stringify(counts));
