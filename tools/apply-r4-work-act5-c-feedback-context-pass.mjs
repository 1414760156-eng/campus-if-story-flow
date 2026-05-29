import fs from 'node:fs';

const jsonPath = 'docs/剧情小说母版_v4.0/开发数据_IF剧情页级JSON_R4-WORK_v1.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const pageTextByBlock = {
  'ACT5-WORK-B01': [
    '林亦舟先在快递站群里回了到岗，又给唐骁补了一句十点后交文档。',
    '负责人只回“收到”。唐骁隔了几秒回：“按这个写。”',
    '门缝里的灯还亮着，周屿没有再问饭。'
  ],
  'ACT5-WORK-B02': [
    '林亦舟把用途栏重新写了一遍，勤工、补考和家庭情况分成三行。',
    '窗口老师把纸抽过去，看完后没有再让他重填，只在右上角盖了章。',
    '那枚红章压下来时，透明文件夹里的几张纸终于没有再互相顶住。'
  ],
  'ACT5-WORK-B03': [
    '林亦舟在 4XX 群里说这周先顾晚班，C407 只保最低可交。',
    '唐骁没有立刻回，过了一会儿把分工表里他的名字挪到文档说明后面。',
    '周屿看见那一格变窄了，手里的便利贴转了一圈，没有贴上去。'
  ],
  'ACT5-WORK-B05': [
    '林亦舟先回夏知微：空镜可以留，别写人名。',
    '再点开晚风的聊天框时，输入栏里只剩一句“今天会晚点回”。',
    '便利店门外的手环灯灭了几只，雨水顺着台阶往下流。'
  ],
  'ACT5-WORK-B06': [
    '林亦舟在 C407 清单上只写自己做过的文档说明，活动钥匙那边只写交接时间。',
    '唐骁看完，没说好也没说不好，只把多余的空格划掉。',
    '秦越那边回了一个登记截图，场地钥匙的空白栏少了一行。'
  ],
  'ACT5-WORK-B07': [
    '林亦舟先把勤工证明递进去，家庭情况说明还压在文件夹最下面。',
    '窗口老师抬头看了他一眼，说缺的那份下次补齐。',
    '他点头，手指隔着塑料扣按住下面那张纸。'
  ],
  'ACT5-WORK-B08': [
    '林亦舟在活动名单后面写了到场时间，也写了离场时间。',
    '秦越看见那两个时间，没有再把“固定”两个字往前推。',
    '许棠把公开材料里的名字先空着，只在旁边标了一个待确认。'
  ],
  'ACT5-WORK-B09': [
    '林亦舟没有在照片下面解释。',
    '唐骁把 C407 那栏按不在处理，周屿把桌上的水往自己那边收了一点。',
    '宿管登记本合上时，勤工两个字还隔着纸透出来。'
  ],
  'ACT5-WORK-B11': [
    '林亦舟回负责人：今晚不能多留，之后提前一天排。',
    '消息发出去后，他把手机扣在错题纸旁边，第一行终于写完整。',
    'C407 的红圈还在未读里亮着，但没有再把这半小时拿走。'
  ],
  'ACT5-WORK-B12': [
    '林亦舟回许棠：公开稿写无名协助，证明材料另走窗口。',
    '许棠把“协助人员”后面的光标往前删了一格，唐骁那边的表格还等他补名字。',
    '透明文件夹被他合上，塑料扣这次扣紧了。'
  ],
  'ACT5-WORK-B13': [
    '林亦舟留在书屋，把说明页最后两行补完。',
    '他只给 4XX 回了到寝时间，没有把晚风那通语音写进去。',
    '店员关灯时，他把那张旧票根夹回书里。'
  ],
  'ACT5-WORK-B14': [
    '林亦舟把排班、活动、作业和回寝时间分别写在四行。',
    '负责人看完周日那格，没再替他往后顺延；唐骁把 C407 的截止时间圈出来。',
    '4XX 群里，周屿只问了一句那天还留不留饭。'
  ]
};

for (const block of data.act5_detail_blocks ?? []) {
  const text = pageTextByBlock[block.block_id];
  if (!text) continue;
  const direction = block.choice_window?.directions?.find((item) => item.direction === 'C');
  const page = direction?.feedback_pages?.[0];
  if (!page) throw new Error(`Missing C feedback page for ${block.block_id}`);
  if (!page.text?.some((line) => line.includes('他把停止的地方先写出来'))) {
    throw new Error(`Unexpected C feedback page for ${block.block_id}`);
  }
  page.text = text;
}

const literalReplacements = new Map([
  [
    '这不是劝他别赚钱。陆沉说完就低头吃饭，像把选择还给他。',
    '陆沉说完就低头吃饭，筷子碰到碗沿，声音很轻。那句话没有拦他，只把晚上的空格推到他面前。'
  ],
  [
    '负责人点头，说那以后按这个排。以后两个字落下来，像把下周每个晚上都提前扣住。',
    '负责人点头，把“固定”两个字写到他名字前面。红笔停了一下，又往周日那格划过去。'
  ],
  [
    '钱没有替他做选择，但它把每个选择都写出价格。',
    '零钱被收进抽屉，找回来的硬币磕在玻璃柜上，声音比消息提示还清楚。'
  ],
  [
    '同一句“晚点说”已经不够用了。发给谁都像把问题推回下一分钟。',
    '他删掉那句“晚点说”。输入框空下来，三个人的头像还停在上面。'
  ],
  [
    '三个聊天框都开着，票页灰字还压在底部。便利店门口风很热，同一句“晚点说”已经不够用了。',
    '三个聊天框都开着，票页灰字还压在底部。便利店门口风很热，他删掉那句“晚点说”，输入框重新空下来。'
  ]
]);

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

const missing = [];
for (const source of literalReplacements.keys()) {
  let found = false;
  walkStrings(data, (value) => {
    if (value === source) found = true;
    return value;
  });
  if (!found) missing.push(source);
}
if (missing.length) throw new Error(`Missing ${missing.length} literal source strings`);

walkStrings(data, (value) => literalReplacements.get(value) ?? value);

fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({
  cFeedbackPages: Object.keys(pageTextByBlock).length,
  literalReplacements: literalReplacements.size
}, null, 2));
