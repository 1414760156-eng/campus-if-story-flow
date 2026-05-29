import fs from 'node:fs';

const jsonPath = 'docs/剧情小说母版_v4.0/开发数据_IF剧情页级JSON_R4-WORK_v1.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const contextByBlock = {
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

let act5Text = 0;
let act5Prompt = 0;
let act5Guide = 0;
let act5Label = 0;

for (const block of data.act5_detail_blocks ?? []) {
  const ctx = contextByBlock[block.block_id];
  if (!ctx) continue;
  const [primary, secondary, place, message] = ctx;

  for (const direction of block.choice_window?.directions ?? []) {
    for (const page of direction.feedback_pages ?? []) {
      page.text = (page.text ?? []).map((line) => {
        if (line !== '夜里，那张纸被压在文件夹最上面。') return line;
        act5Text += 1;
        return `夜里，${primary}被压在文件夹最上面。`;
      });
    }

    for (const group of direction.micro_groups ?? []) {
      if (group.prompt === '这句发出去前，删掉哪一层借口？') {
        group.prompt = `${message}发出去前，先删掉哪一句？`;
        act5Prompt += 1;
      }
      if (group.prompt === '当面说到一半，先看见谁的反应？') {
        group.prompt = `${place}这句话说到一半，先看见谁停了一下？`;
        act5Prompt += 1;
      }
      if (group.guide === '输入框里的字还没发出去，光标在最后一个句号后闪。') {
        group.guide = `输入框里的字还没发出去，${message}在屏幕顶端亮着。`;
        act5Guide += 1;
      }
      if (group.guide === '文件夹摊在桌边，纸角还翘着。') {
        group.guide = `${primary}摊在桌边，${secondary}还露出一角。`;
        act5Guide += 1;
      }
      if (group.guide === '对面的人没接话，桌上的纸被风掀起一角。') {
        group.guide = `${secondary}被风掀起一角，对面的人还没接话。`;
        act5Guide += 1;
      }
      if (group.guide === '桌面没有立刻空出来，最显眼的反而是没被收走的那样东西。') {
        group.guide = `${place}没有立刻空出来，${primary}还留在桌边。`;
        act5Guide += 1;
      }

      for (const option of group.options ?? []) {
        if (option.label === '陆沉把东西推近一点') {
          option.label = `陆沉把${primary}推近一点`;
          act5Label += 1;
        }
      }
    }
  }
}

let act4Bodies = 0;
for (const block of data.act4_detail_blocks ?? []) {
  for (const direction of block.choice_window?.directions ?? []) {
    for (const group of direction.micro_groups ?? []) {
      for (const option of group.options ?? []) {
        if (option.body !== '群公告停在屏幕上，这一条发出去后会有人接话。') continue;
        const label = option.label.replace(/[。！？?]$/u, '');
        option.body = `${label}留在群公告下面，屏幕亮了一会儿才暗下去。`;
        act4Bodies += 1;
      }
    }
  }
}

fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ act5Text, act5Prompt, act5Guide, act5Label, act4Bodies }, null, 2));
