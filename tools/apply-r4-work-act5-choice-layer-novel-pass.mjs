import fs from "node:fs";

const jsonPath = "docs/剧情小说母版_v4.0/开发数据_IF剧情页级JSON_R4-WORK_v1.json";
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const choiceCopy = {
  "ACT5-WORK-B01": {
    title: "六点五十五，门缝里的输入框",
    guide: "快递站群、C407 照片、门禁提醒和活动未读一层层压在屏幕上。门缝里的灯被风吹得晃了一下。",
    descriptions: {
      A: "人先去快递站，回来的时间和 C407 能交的部分先落到屏幕上。",
      B: "缺席先变成当面事实，C407 空栏不用只等群消息。",
      C: "晚班先接住，唐骁那边也有了具体时间。"
    }
  },
  "ACT5-WORK-B02": {
    title: "退回来的用途栏",
    guide: "材料被窗口退回，格式、用途、本人说明和 C407 模板都摊在桌上。陆沉推过来的黑笔停在纸边。",
    descriptions: {
      A: "帮助只到格式为止，理由仍由林亦舟自己写。",
      B: "窗口能先收下，说明页会薄一层。",
      C: "窗口老师会看见家里那一行，材料也不再夹混。"
    }
  },
  "ACT5-WORK-B03": {
    title: "公共桌留着一瓶水",
    guide: "晚归登记、课程群抽查和公共桌便利贴都摊在同一晚。4XX 的门还没合严。",
    descriptions: {
      A: "当面入口留住一晚，工作班次少一格。",
      B: "当面话退成每次缺席前的交付记录。",
      C: "4XX 先看见他的缺席，再看见能交的部分。"
    }
  },
  "ACT5-WORK-B04": {
    title: "七点整，门还半开",
    guide: "楼下已经点名，手机屏幕亮了一次又一次。屋里椅脚一响，像有人正好回头。",
    descriptions: {
      A: "第一句落在 4XX，快递站多等一分钟。",
      B: "第一句落在工作，4XX 先按不在处理。",
      C: "三边都收到一句话，但没有哪边是当面。"
    }
  },
  "ACT5-WORK-B05": {
    title: "便利店门口的未读",
    guide: "晚风没有催，夏知微的照片也没有点名，4XX 只问到没到寝室。路口的雨光还在，手背上还留着一点快递墨。",
    descriptions: {
      A: "私人联系先保住，不用忙碌挡在前面。",
      B: "门禁和到寝时间先落地，晚风那边继续亮着未读。",
      C: "公开稿先不写人名，晚风那边只剩一句晚回。"
    }
  },
  "ACT5-WORK-B06": {
    title: "两张清单压在桌上",
    guide: "C407 的异常流清单压在左边，活动钥匙确认压在右边。唐骁的笔没动，秦越的消息还亮着。",
    descriptions: {
      A: "项目责任先变清楚，活动确认晚一拍。",
      B: "活动交接先不糊，C407 那边还要再补。",
      C: "C407 和钥匙都能追到人，但不替别人补空。"
    }
  },
  "ACT5-WORK-B07": {
    title: "窗口前的两份纸",
    guide: "勤工证明和家庭说明都在手里。窗口里的老师还等着下一份，走廊里母亲的语音又亮了一次。",
    descriptions: {
      A: "家庭缺口被看见，格式只让陆沉帮到纸边。",
      B: "材料能先过，旧账还压在文件夹下面。",
      C: "工作那张纸先递进去，家里那张还压在下面。"
    }
  },
  "ACT5-WORK-B08": {
    title: "周日名单亮着",
    guide: "秦越的名单、许棠的公开稿和快递站的周日班表同时亮着。食堂二楼的灯照在屏幕上。",
    descriptions: {
      A: "活动不再默认他兜底，公开信用会薄一点。",
      B: "活动圈被保住，工作收入少一格。",
      C: "秦越知道他几点走，许棠那边先空名字。"
    }
  },
  "ACT5-WORK-B09": {
    title: "照片里的空位",
    guide: "背影照片还没删，晚归登记刚合上，公共桌那瓶水还在。文件夹扣子又松了一格。",
    descriptions: {
      A: "照片里的缺席被拉回当面话。",
      B: "影像边界保住，4XX 误读还留在屋里。",
      C: "照片留着，桌上的水被收回一点。"
    }
  },
  "ACT5-WORK-B10": {
    title: "饭盒扣着",
    guide: "窗口阿姨已经认得他，4XX 公共桌也已经给出一个空位。饭盒扣着，水杯挪着，没人把那个字说出口。",
    descriptions: {
      A: "4XX 少等一次，默认会更快形成。",
      B: "饭会凉，当面说话的位置还留着。",
      C: "晚班带回来的痕迹先洗掉，话也会晚一点说。"
    }
  },
  "ACT5-WORK-B11": {
    title: "登记笔还没落下",
    guide: "快递站后门的筐号还在跳，错题纸摊在手机下面，C407 修改意见停在未读里。",
    descriptions: {
      A: "钱少一点，学习债先不再滚大。",
      B: "现实收入先补，错题只能压缩到夜里。",
      C: "这半小时先从今晚退出来。"
    }
  },
  "ACT5-WORK-B12": {
    title: "光标停在协助人员后面",
    guide: "活动稿、证明材料和 C407 负责项都摊开着。许棠那边的光标还在闪，唐骁这边的表格也还空着一格。",
    descriptions: {
      A: "公开边界清楚，证明材料还要另写。",
      B: "公开痕迹由林亦舟自己接住，不把 4XX 拖进去。",
      C: "许棠删掉名字，唐骁那边还等他补表。"
    }
  },
  "ACT5-WORK-B13": {
    title: "书屋门口的小灯",
    guide: "书屋门口的小灯灭了，晚风的语音还停在耳机里。青枫居和地铁站隔着同一个路口，雨水沿着路牙往下流。",
    descriptions: {
      A: "逃开的事实被带回寝室。",
      B: "晚风得到一段时间，4XX 的解释继续变晚。",
      C: "事情做完了，人还没回到公共桌边。"
    }
  },
  "ACT5-WORK-B14": {
    title: "透明板上的三格红圈",
    guide: "快递站班表贴在透明板上，食堂窗口已经认得他，4XX 的公共桌也给他留出一个固定空位。",
    descriptions: {
      A: "工作成为主半径，关系不会立刻断，只会一点点绕开。",
      B: "收入少一点，人还留在几个入口里。",
      C: "班表、活动、作业和回寝各有一条线。"
    }
  },
  "ACT5-WORK-B15": {
    title: "楼道灯还剩最后一盏",
    guide: "下周班表已经贴出来，4XX 也开始问还要不要等饭。门把手有点凉，楼道灯还剩最后一盏。",
    descriptions: {
      A: "收入和证明最稳，关系会先学会绕开。",
      B: "钱会薄一点，旧关系还留着一个晚上。",
      C: "单一班表暂时没有吞掉全部晚上。"
    }
  }
};

let titleCount = 0;
let guideCount = 0;
let descriptionCount = 0;

for (const block of data.act5_detail_blocks ?? []) {
  const patch = choiceCopy[block.block_id];
  if (!patch || !block.choice_window) continue;
  block.choice_window.title = patch.title;
  block.choice_window.guide = patch.guide;
  titleCount += 1;
  guideCount += 1;
  for (const direction of block.choice_window.directions ?? []) {
    if (patch.descriptions[direction.direction]) {
      direction.description = patch.descriptions[direction.direction];
      descriptionCount += 1;
    }
  }
}

fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ titleCount, guideCount, descriptionCount }, null, 2));
