import fs from "node:fs";

const jsonPath = "docs/剧情小说母版_v4.0/开发数据_IF剧情页级JSON_R4-WORK_v1.json";
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const contextByBlock = {
  "ACT5-WORK-B01": ["复印件", "C407 空栏", "4XX 门缝", "快递站群"],
  "ACT5-WORK-B02": ["用途栏", "补考目录", "明德楼窗口", "打印店小票"],
  "ACT5-WORK-B03": ["晚归登记", "便利贴", "4XX 公共桌", "课程群"],
  "ACT5-WORK-B05": ["晚风聊天框", "手环", "便利店门口", "照片授权"],
  "ACT5-WORK-B06": ["异常流清单", "钥匙登记", "公共桌", "秦越消息"],
  "ACT5-WORK-B07": ["勤工证明", "家庭说明", "明德楼走廊", "母亲语音"],
  "ACT5-WORK-B08": ["活动名单", "空白挂牌", "活动办公室", "许棠文档"],
  "ACT5-WORK-B09": ["背影照片", "晚归登记本", "4XX 门口", "那瓶水"],
  "ACT5-WORK-B11": ["错题空表", "排班表", "快递站后门", "C407 红圈"],
  "ACT5-WORK-B12": ["公开稿", "证明口径", "共享文档", "透明文件夹"],
  "ACT5-WORK-B13": ["说明页", "旧票根", "星辰书屋", "晚风语音"],
  "ACT5-WORK-B14": ["固定班表", "第一周清单", "门禁机旁", "门禁时间"]
};

let promptCount = 0;
let bodyCount = 0;

function cleanLabel(label) {
  return (label || "这一行").replace(/[。！？?]$/u, "");
}

function promptToScene(prompt, context) {
  const [primary, secondary, place, message] = context;
  if (/发出去前/.test(prompt)) return `${message}发送前`;
  if (/收工前|离开窗口前|定稿前|关灯前|贴上前|回去时/.test(prompt)) return `${primary}收进文件夹前`;
  if (/说到一半|话说到一半/.test(prompt)) return `${place}短暂停住`;
  if (/桌上还剩|还剩什么|文件夹里还露出|名单旁还剩|文档里还剩|班表边还剩/.test(prompt)) return `${secondary}旁边还亮着`;
  if (/照片授权/.test(prompt)) return `照片缩略图还亮着`;
  if (/活动和晚班/.test(prompt)) return `活动和晚班撞在同一格`;
  if (/接下半小时/.test(prompt)) return `半小时压到错题纸上`;
  if (/接受固定班/.test(prompt)) return `固定班表贴上前`;
  return prompt.replace(/？/g, "").replace(/先把哪/g, "").replace(/哪一/g, "").replace(/哪句/g, "").trim();
}

function rewriteBody(option, context) {
  const [primary, secondary, place, message] = context;
  const label = cleanLabel(option.label);
  const body = option.body || "";

  if (
    body.includes("被留在屏幕上") ||
    body.includes("少了一句含糊话") ||
    body.includes("没有再往后藏") ||
    body.includes("落到明处") ||
    body.includes("那边先安静了一下") ||
    body.includes("留在能被看见的地方")
  ) {
    const code = option.code ?? "";
    if (code === "1") {
      return `${label}删掉后，${primary}旁边只剩具体时间。`;
    }
    if (code === "2") {
      return `${label}留下来，${message}没有再被压到下一条。`;
    }
    return `${label}被写清楚，${place}的声音短短停了一下。`;
  }

  return body;
}

for (const block of data.act5_detail_blocks ?? []) {
  const context = contextByBlock[block.block_id];
  if (!context) continue;
  for (const direction of block.choice_window?.directions ?? []) {
    for (const group of direction.micro_groups ?? []) {
      const newPrompt = promptToScene(group.prompt || "", context);
      if (newPrompt !== group.prompt) {
        group.prompt = newPrompt;
        promptCount += 1;
      }
      for (const option of group.options ?? []) {
        const newBody = rewriteBody(option, context);
        if (newBody !== option.body) {
          option.body = newBody;
          bodyCount += 1;
        }
      }
    }
  }
}

fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ promptCount, bodyCount }, null, 2));
