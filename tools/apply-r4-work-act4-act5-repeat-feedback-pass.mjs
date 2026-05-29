import fs from 'node:fs';

const jsonPath = 'docs/剧情小说母版_v4.0/开发数据_IF剧情页级JSON_R4-WORK_v1.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const act5Context = {
  'ACT5-WORK-B01': ['复印件', 'C407 空栏', '4XX 门缝', '快递站群'],
  'ACT5-WORK-B02': ['用途栏', '补考目录', '明德楼窗口', '打印店小票'],
  'ACT5-WORK-B03': ['晚归登记', '便利贴', '4XX 公共桌', '课程群'],
  'ACT5-WORK-B05': ['晚风聊天框', '手环', '便利店门口', '照片授权'],
  'ACT5-WORK-B06': ['异常流清单', '钥匙登记', '公共桌', '秦越消息'],
  'ACT5-WORK-B07': ['勤工证明', '家庭说明', '明德楼走廊', '母亲语音'],
  'ACT5-WORK-B08': ['活动名单', '空白挂牌', '食堂二楼', '许棠文档'],
  'ACT5-WORK-B09': ['背影照片', '晚归登记本', '4XX 门口', '那瓶水'],
  'ACT5-WORK-B11': ['错题空表', '排班表', '快递站后门', 'C407 红圈'],
  'ACT5-WORK-B12': ['公开稿', '证明口径', '共享文档', '透明文件夹'],
  'ACT5-WORK-B13': ['说明页', '旧票根', '书屋门口', '晚风语音'],
  'ACT5-WORK-B14': ['固定班表', '第一周清单', '门禁时间', '公共桌空位']
};

const act5Templates = new Map([
  ['屏幕暗下去，掌心还热着。门缝、群消息和那张纸一起留在他手里。', 0],
  ['第二天，表格边上多出一个括号。有人少问一句，纸面却比昨晚更挤。', 1],
  ['林亦舟把纸收进文件夹，塑料扣轻轻响了一下。第二天再打开时，折痕还在。', 2],
  ['林亦舟往前站了一步，把话当面说出来。', 3],
  ['那句话落到桌面上，谁也没立刻替它找台阶。', 4],
  ['后来，那件事留在原处，旁边只空出一点位置。', 5]
]);

let act5Lines = 0;
for (const block of data.act5_detail_blocks ?? []) {
  const ctx = act5Context[block.block_id];
  if (!ctx) continue;
  for (const direction of block.choice_window?.directions ?? []) {
    for (const page of direction.feedback_pages ?? []) {
      page.text = (page.text ?? []).map((line) => {
        const template = act5Templates.get(line);
        if (template === undefined) return line;
        act5Lines += 1;
        const [primary, secondary, place, message] = ctx;
        if (template === 0) return `屏幕暗下去，${primary}和${message}一起留在他手里。`;
        if (template === 1) return `第二天，${secondary}旁边多出一行字，有人少问一句。`;
        if (template === 2) return `林亦舟把${primary}收进文件夹，塑料扣轻轻响了一下。`;
        if (template === 3) return `林亦舟往前站了一步，在${place}把话说出来。`;
        if (template === 4) return `${secondary}被推到桌面中间，没人立刻替他接话。`;
        return `后来，${primary}还留在原处，旁边空出一点位置。`;
      });
    }
  }
}

const act4BodyTemplates = new Set([
  '光谷截图还亮在上一条，把这句留给晚风看见。',
  '纸面上多出这一行，把笔帽按回去。'
]);

let act4BodyCount = 0;
for (const block of data.act4_detail_blocks ?? []) {
  for (const direction of block.choice_window?.directions ?? []) {
    for (const group of direction.micro_groups ?? []) {
      for (const option of group.options ?? []) {
        if (!act4BodyTemplates.has(option.body)) continue;
        const label = option.label.replace(/[。！？?]$/u, '');
        if (option.body.includes('光谷截图')) {
          option.body = `${label}留在聊天框里，光谷截图还亮在上一条。`;
        } else {
          option.body = `${label}被写进纸面，笔帽扣回去时响了一下。`;
        }
        act4BodyCount += 1;
      }
    }
  }
}

fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ act5Lines, act4BodyCount }, null, 2));
