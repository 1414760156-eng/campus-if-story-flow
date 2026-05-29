import fs from 'node:fs';

const jsonPath = 'docs/剧情小说母版_v4.0/开发数据_IF剧情页级JSON_R4-WORK_v1.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const cCopyByBlock = {
  'ACT5-WORK-B01': {
    label: '先回快递站：我到岗，C407 十点后补',
    description: '晚班先接住，唐骁那边也有了具体时间。',
    pageTitle: '先回到岗'
  },
  'ACT5-WORK-B02': {
    label: '把三行都写进用途栏',
    description: '窗口老师会看见家里那一行，材料也不再夹混。',
    pageTitle: '三行用途'
  },
  'ACT5-WORK-B03': {
    label: '这周先顾晚班，C407 保最低可交',
    description: '4XX 先看见他的缺席，再看见能交的部分。',
    pageTitle: '窄一格'
  },
  'ACT5-WORK-B05': {
    label: '先回照片授权，再回晚风',
    description: '公开稿先不写人名，晚风那边只剩一句晚回。',
    pageTitle: '先回空镜'
  },
  'ACT5-WORK-B06': {
    label: '两张清单只写自己经手的部分',
    description: 'C407 和钥匙都能追到人，但不替别人补空。',
    pageTitle: '只写经手'
  },
  'ACT5-WORK-B07': {
    label: '先交勤工证明，家庭说明下次补',
    description: '工作那张纸先递进去，家里那张还压在下面。',
    pageTitle: '压在下面'
  },
  'ACT5-WORK-B08': {
    label: '写上到场和离场时间',
    description: '秦越知道他几点走，许棠那边先空名字。',
    pageTitle: '两个时间'
  },
  'ACT5-WORK-B09': {
    label: '不解释照片，先让 4XX 按不在写',
    description: '照片留着，桌上的水被收回一点。',
    pageTitle: '按不在写'
  },
  'ACT5-WORK-B11': {
    label: '回今晚不能加，之后提前一天排',
    description: '先把这半小时从今晚退出来。',
    pageTitle: '不加半小时'
  },
  'ACT5-WORK-B12': {
    label: '公开稿写无名协助，证明另走窗口',
    description: '许棠删掉名字，唐骁那边还等他补表。',
    pageTitle: '删掉名字'
  },
  'ACT5-WORK-B13': {
    label: '留在书屋写完说明页，只回到寝时间',
    description: '事情做完了，人还没回到公共桌边。',
    pageTitle: '只回到寝'
  },
  'ACT5-WORK-B14': {
    label: '把四件事分成四行时间',
    description: '班表、活动、作业和回寝各有一条线。',
    pageTitle: '四行时间'
  },
  'ACT5-WORK-B15': {
    label: '把四件事分成四行时间',
    description: '下周先按四行时间走，不让单一班表吞掉全部晚上。',
    pageTitle: '四行时间'
  }
};

for (const block of data.act5_detail_blocks ?? []) {
  const patch = cCopyByBlock[block.block_id];
  if (!patch) continue;
  const direction = block.choice_window?.directions?.find((item) => item.direction === 'C');
  if (!direction) throw new Error(`Missing C direction for ${block.block_id}`);
  direction.label = patch.label;
  direction.description = patch.description;
  if (direction.feedback_pages?.[0]) direction.feedback_pages[0].page_title = patch.pageTitle;
}

fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ cDirectionsPolished: Object.keys(cCopyByBlock).length }, null, 2));
