import fs from 'node:fs';

const jsonPath = 'docs/剧情小说母版_v4.0/开发数据_IF剧情页级JSON_R4-WORK_v1.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const contextByBlock = {
  'ACT5-WORK-B01': {
    aFirst: '林亦舟把七点二十到岗先发出去，C407 的空栏还停在下一张照片里。',
    aPrompt: '收工前，文件夹里先压哪一张？',
    cPrompt: '到岗和 C407 都说完后，门口还剩什么？',
    thing: '复印件',
    place: '4XX 门缝',
    reaction: '周屿那边的输入中亮了又灭'
  },
  'ACT5-WORK-B02': {
    aFirst: '林亦舟把格式问题先交出去，退回来的用途栏还摊在桌面上。',
    aPrompt: '材料重新夹好前，哪一页先放上面？',
    cPrompt: '三行用途写完后，柜台边还剩什么？',
    thing: '用途栏',
    place: '明德楼窗口',
    reaction: '窗口老师的笔帽点在纸边'
  },
  'ACT5-WORK-B03': {
    aFirst: '林亦舟先把今晚能到 C407 的时间说清楚，宿管登记还留在楼下。',
    aPrompt: '回寝前，哪张纸先压到桌边？',
    cPrompt: '按不在写下后，公共桌还剩什么？',
    thing: '便利贴',
    place: '4XX 公共桌',
    reaction: '唐骁把分工表往旁边挪了一点'
  },
  'ACT5-WORK-B05': {
    aFirst: '林亦舟先回晚风，说今天只能短见一会儿。',
    aPrompt: '回寝前，哪样东西先留在口袋里？',
    cPrompt: '空镜确认后，便利店门口还剩什么？',
    thing: '手环',
    place: '便利店门口',
    reaction: '晚风的聊天框还停在屏幕底部'
  },
  'ACT5-WORK-B06': {
    aFirst: '林亦舟先把 C407 异常流写到自己名下，活动钥匙那条消息还亮着。',
    aPrompt: '清单收起前，哪一页先夹进去？',
    cPrompt: '只写经手部分后，桌上还剩什么？',
    thing: 'C407 清单',
    place: '公共桌',
    reaction: '秦越那边发来登记截图'
  },
  'ACT5-WORK-B07': {
    aFirst: '林亦舟把家庭说明也递进去，窗口里的章还没有落下。',
    aPrompt: '离开窗口前，哪张纸先收好？',
    cPrompt: '家庭说明压回去后，文件夹里还露出什么？',
    thing: '家庭说明',
    place: '明德楼走廊',
    reaction: '母亲的语音又震了一下'
  },
  'ACT5-WORK-B08': {
    aFirst: '林亦舟先答应周日固定到场，快递站班表还在包里。',
    aPrompt: '活动名单定下前，哪样东西先放进夹子？',
    cPrompt: '到场和离场写完后，名单旁还剩什么？',
    thing: '空白挂牌',
    place: '活动办公室',
    reaction: '许棠把公开稿光标往前移了一格'
  },
  'ACT5-WORK-B09': {
    aFirst: '林亦舟先把照片里的背影认下来，4XX 群里安静了一会儿。',
    aPrompt: '照片处理完后，哪样东西先收进文件夹？',
    cPrompt: '不解释照片后，桌角还剩什么？',
    thing: '背影照片',
    place: '4XX 门口',
    reaction: '周屿撤回后的空白还停着'
  },
  'ACT5-WORK-B11': {
    aFirst: '林亦舟先接下那半小时，错题纸还摊在手机下面。',
    aPrompt: '夜里回去时，哪张纸先放进文件夹？',
    cPrompt: '不加半小时后，错题纸旁还剩什么？',
    thing: '错题空表',
    place: '快递站后门',
    reaction: '负责人手里的登记笔停了一下'
  },
  'ACT5-WORK-B12': {
    aFirst: '林亦舟先让许棠保留协助人员，C407 表格还等着名字。',
    aPrompt: '公开稿定稿前，哪一页先压住？',
    cPrompt: '名字删掉后，共享文档里还剩什么？',
    thing: '公开稿',
    place: '公共桌',
    reaction: '许棠发来的光标截图还亮着'
  },
  'ACT5-WORK-B13': {
    aFirst: '林亦舟先接起晚风的语音，书屋的钟正走到八点。',
    aPrompt: '书屋关灯前，哪样东西先夹进书里？',
    cPrompt: '只回到寝时间后，书屋门口还剩什么？',
    thing: '旧票根',
    place: '星辰书屋',
    reaction: '店员把门口小灯关掉'
  },
  'ACT5-WORK-B14': {
    aFirst: '林亦舟先让固定班按主表排，4XX 的第一周清单还压在旁边。',
    aPrompt: '下周班表贴上前，哪一行先圈出来？',
    cPrompt: '四行时间写完后，班表边还剩什么？',
    thing: '固定班表',
    place: '门禁机旁',
    reaction: '陆沉把门禁时间圈了一下'
  }
};

const bodyTemplates = new Set([
  '他把多余的话删掉，只留下一个能被核对的时间或名字。',
  '纸角被压平，消息停在屏幕上，没人替他补后半句。'
]);

let bodyCount = 0;
let promptCount = 0;
let pageCount = 0;

for (const block of data.act5_detail_blocks ?? []) {
  const context = contextByBlock[block.block_id];
  if (!context) continue;

  for (const direction of block.choice_window?.directions ?? []) {
    if (direction.direction === 'A') {
      const firstPage = direction.feedback_pages?.[0];
      if (firstPage?.text?.[0] === '林亦舟删掉多余的铺垫，按下发送。') {
        firstPage.text[0] = context.aFirst;
        pageCount += 1;
      }
    }

    for (const group of direction.micro_groups ?? []) {
      if (group.prompt === '夜里收尾时，把什么放进文件夹？') {
        group.prompt = context.aPrompt;
        promptCount += 1;
      }
      if (group.prompt === '边界写完后，哪样东西还留在桌上？') {
        group.prompt = context.cPrompt;
        promptCount += 1;
      }

      for (const option of group.options ?? []) {
        if (!bodyTemplates.has(option.body)) continue;
        const label = option.label.replace(/[。！？?]$/u, '');
        const code = option.code ?? option.key ?? '';
        if (code === '1' || code === 'A1' || option.option_id?.endsWith('-1')) {
          option.body = `${label}被留在屏幕上，${context.thing}旁边少了一句含糊话。`;
        } else if (code === '2' || code === 'A2' || option.option_id?.endsWith('-2')) {
          option.body = `${label}没有再往后藏，${context.reaction}。`;
        } else {
          option.body = `${label}落到明处，${context.place}那边先安静了一下。`;
        }
        bodyCount += 1;
      }
    }
  }
}

fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ pageCount, promptCount, bodyCount }, null, 2));
