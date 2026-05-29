import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const jsonPath = path.join(root, "docs", "剧情小说母版_v4.0", "开发数据_IF剧情页级JSON_R4-WORK_v1.json");
const act4DocPath = path.join(root, "docs", "剧情小说母版_v4.0", "开发正文_IF第四幕ACT4-WORK_P2标准剧情页_L01-L06.md");
const transitionScriptPath = path.join(root, "tools", "apply-r4-work-act4-act5-transition.mjs");

const route = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const exactReplacements = new Map([
  [
    "晚班、C407、4XX 门口和活动群未读压在同一部手机里。先说哪一句，不是给谁排名，而是决定他从哪扇门把今晚带回工作线。",
    "手机屏幕亮着四个入口：快递站群、C407 表格、4XX 门禁、活动群未读。林亦舟的拇指停在输入框上，楼梯口的风把门缝里的灯吹得一晃。"
  ],
  [
    "C407 要能追过程，活动钥匙也要确认责任。几张清单第一次放在同一张公共桌上，他不能再靠一边的可靠去抵另一边的空。",
    "C407 的异常流清单压在左边，活动钥匙确认压在右边。唐骁的笔没动，秦越的消息还亮着；他先碰哪张纸，哪边就先有了他的名字。"
  ],
  [
    "加班能补钱，复习能补分，C407 能补责任。今晚不是三选一的算术题，而是前面所有边界第一次被同一只手往下压。",
    "快递站后门的筐号还在跳，错题纸摊在手机下面，C407 修改意见停在未读里。半小时不长，落到哪张纸上都能压出痕迹。"
  ],
  [
    "这不是新路线，只是他在这一刻怎样把话说得更具体。",
    "这一步只看眼前这句话落在哪个动作上。"
  ],
  [
    "这一步只看眼前这句话落在哪个动作上。",
    "输入框、纸页和通知栏都停着，等他先动一下。"
  ],
  [
    "这一步没有替他解决任何事，只让下一句少一点空话。",
    "他把多余的话删掉，只留下一个能被核对的时间或名字。"
  ],
  [
    "纸面、消息或眼神里留下一个更具体的位置。",
    "纸角被压平，消息停在屏幕上，没人替他补后半句。"
  ],
  [
    "从那天以后，晚归、缺席和补说明都要落到这只透明文件夹里，不能再退回“还没想好”。",
    "他把文件夹放到公共桌边，塑料扣没有扣紧，复印件露出一角。唐骁伸手替他压平，周屿把水杯往旁边挪，陆沉看了一眼那张本人签字，没有再问“还没定吗”。"
  ],
  [
    "楼上 4XX 的门半开着，C407 的分工表还等着补栏，透明文件夹里的本人签字已经把这些事都推到他面前。再往下，就是今晚七点半。",
    "楼上 4XX 的门半开着，C407 的分工表还空着一栏。透明文件夹被他夹在胳膊下，塑料边角贴着皮肤发凉。快递站群跳出七点半到岗提醒，他站在楼梯口，没有立刻往哪边走。"
  ],
  [
    "它只是从“还没决定”变成“已经由本人确认”。辅导员看了一眼联系人，又提醒后续班表确定后补说明。",
    "刚才还能空着的栏位，现在盖着本人确认的痕迹。辅导员看了一眼联系人，又提醒后续班表确定后补说明。"
  ],
  [
    "第五幕会从这里接走：他已经把工作入口、留校说明和联系人写成事实，后面再缺席或晚归，就不能退回“还没想好”。",
    "他把文件夹放到公共桌边，塑料扣没有扣紧，复印件露出一角。唐骁伸手替他压平，周屿把水杯往旁边挪，陆沉看了一眼那张本人签字，没有再问“还没定吗”。"
  ],
  [
    "校内窗口需后续确认、可联系时间、预计留校天数、第一联系人。他每写一项，纸上的空白就少一块，也少一点能含混过去的空间。",
    "校内窗口需后续确认、可联系时间、预计留校天数、第一联系人。黑笔往下走，空栏一格一格被填上，纸页被他的手掌压得发皱。"
  ],
  [
    "去向页面没有给含混留太多空格。兼职、留校和联系人并排摆着，光标停在说明栏里。",
    "去向页面上，兼职、留校和联系人并排摆着。光标停在说明栏里，右下角的保存按钮一直亮着。"
  ],
  [
    "学生证复印件、身份证复印件、银行卡号、可排班时间。每一项都很具体，具体到没有空间让人继续含混。",
    "学生证复印件、身份证复印件、银行卡号、可排班时间。负责人把四项一行行念过去，笔尖停在哪一栏，他就得把文件夹翻到哪一页。"
  ],
  [
    "工作线不是逃开这些人，而是先承认他手里的时间和钱只够排一种顺序。",
    "林亦舟把零钱、车票截图和勤工便签并排放好。桌面不大，晚风的截图被压在最下面，只露出光谷两个字。"
  ],
  [
    "家庭变化从转账备注里浮出来，却还没有完全成形。后面他要填联系人、要请假、要解释留校和兼职，这些都不能再写成突然发生的事。",
    "转账备注停在屏幕上，父亲的名字、联系人栏和留校说明像三张没对齐的纸。林亦舟把手机扣下，指腹还沾着信封边上的灰。"
  ],
  [
    "这句话把工作线往前推了一步。不是去打工就不用解释，而是从明天开始，他每一个白天都更需要说清楚。",
    "陆沉把勤工窗口的地址发来，下面跟着一串材料名。林亦舟把便签夹到父亲信封外面，纸角刚好压住那张三块五的小票。"
  ],
  [
    "这句不是道歉，也不是解释全部。它只是把工作线的推进方式固定下来：不是靠失踪换收入，而是本人把现实窗口跑完，再把结果放回公共桌。",
    "他把回执拍到群里，照片边缘照进半截手指。唐骁回了一个收到，周屿把公共桌中间清出一块，陆沉没有再问他去了哪里。"
  ],
  [
    "通知栏还在往下跳，门缝里的光贴着指节。",
    "通知栏还在往下跳，冷光贴着指节。"
  ],
  [
    "后面的安排照着那句话往下挪。有人少问一句，也有人在表格边上补了一个括号。",
    "第二天，表格边上多出一个括号。有人少问一句，纸面却比昨晚更挤。"
  ]
]);

function cleanString(value) {
  let next = value;
  if (next.includes(" / 承接回声")) {
    next = next.replaceAll(" / 承接回声", "");
  }
  if (exactReplacements.has(next)) {
    next = exactReplacements.get(next);
  }

  next = next.replace(/^林亦舟选了“[^”]+”。$/, "林亦舟把那句话在心里过了一遍，才落到屏幕上。");
  next = next.replace(
    /^这一次，他没有把选择说成态度，只把“([^”]+)”落到能被别人看见的一步。$/,
    "他把“$1”留在能被看见的地方：消息、纸面，或者门口那半步停顿。"
  );
  next = next.replace(
    /^他把这句发出去时，(.+?)。(.*?)没有变少，只是先被他按了顺序。$/,
    "他按下发送时，$1。通知栏还在往下跳，门缝里的光贴着指节。"
  );
  next = next.replace(
    /^他把屏幕按暗，(.+?)里的那件事还贴在手心，像一小块没擦干净的水。$/,
    "屏幕暗下去，掌心还热着。门缝、群消息和那张纸一起留在他手里。"
  );
  next = next.replace(/^夜里，(.+?)多出一张被压平的纸。$/, "夜里，那张纸被压在文件夹最上面。");
  next = next.replace(
    /^有人照着他留下的边界往下排，也有人因为“[^”]+”少问了一句。少问不是原谅，只是今晚终于不用猜。$/,
    "后面的安排照着那句话往下挪。有人少问一句，也有人在表格边上补了一个括号。"
  );
  next = next.replace(
    /^林亦舟把那张纸收进文件夹，透明塑料扣轻轻响了一下，把“[^”]+”扣进了下一天。$/,
    "林亦舟把纸收进文件夹，塑料扣轻轻响了一下。第二天再打开时，折痕还在。"
  );
  next = next.replace(
    /^最先回来的不是安慰，而是一个“收到”。那两个字很短，却把“[^”]+”从含混里拉出来一点。$/,
    "负责人只回了一个“收到”。两个字停在屏幕上，比一句安慰更像盖章。"
  );
  next = next.replace(
    /^当面话并不比群消息轻，只是“[^”]+”被放在眼前时，每个人都能看见他在哪个字上停住。$/,
    "那句话落到桌面上，谁也没立刻替它找台阶。"
  );
  next = next.replace(
    /^后来，(.+?)没有被谁收走，只在(.+?)留下一个更窄的位置。$/,
    "后来，那件事留在原处，旁边只空出一点位置。"
  );

  return next;
}

function visit(node) {
  if (Array.isArray(node)) {
    for (let index = 0; index < node.length; index += 1) {
      node[index] = visit(node[index]);
    }
    return node;
  }
  if (node && typeof node === "object") {
    for (const key of Object.keys(node)) {
      node[key] = visit(node[key]);
    }
    return node;
  }
  if (typeof node === "string") {
    return cleanString(node);
  }
  return node;
}

visit(route.act4_detail_blocks);
visit(route.act4_to_act5_transition_block);
visit(route.act5_detail_blocks);

function cleanChoiceFeedback(blocks) {
  const fallbackGuides = [
    "纸页还摊着，手机屏幕没有暗下去。",
    "桌边空出一点位置，没人替他把话补完。",
    "光标停在最后一行，手指还没离开屏幕。",
    "门口的风吹过来，纸角轻轻翻了一下。",
    "通知栏还亮着，最上面那条消息没有被划走。"
  ];

  for (const block of blocks || []) {
    for (const direction of block.choice_window?.directions || []) {
      for (const page of direction.feedback_pages || []) {
        if (page.page_title === "夜里回声") {
          page.page_title = "夜里收好";
        }
        if (page.text?.[0] === "林亦舟把那句话在心里过了一遍，才落到屏幕上。") {
          if (page.page_title === "第一句发出去") {
            page.text[0] = "林亦舟删掉多余的铺垫，按下发送。";
          } else if (page.page_title === "当面落下") {
            page.text[0] = "林亦舟往前站了一步，把话当面说出来。";
          } else if (page.page_title === "边界先写") {
            page.text[0] = "林亦舟先把能停在哪里写清楚，再按下发送。";
          }
        }
      }
      for (const group of direction.micro_groups || []) {
        if (group.prompt === "边界写完后，哪一件事不能再装作没看见？") {
          group.prompt = "边界写完后，哪样东西还留在桌上？";
        }
        if (group.guide === "输入框、纸页和通知栏都停着，等他先动一下。") {
          if (group.prompt.includes("这句发出去前")) {
            group.guide = "输入框里的字还没发出去，光标在最后一个句号后闪。";
          } else if (group.prompt.includes("夜里收尾")) {
            group.guide = "文件夹摊在桌边，纸角还翘着。";
          } else if (group.prompt.includes("当面说到一半")) {
            group.guide = "对面的人没接话，桌上的纸被风掀起一角。";
          } else if (group.prompt.includes("站在门口")) {
            group.guide = "门口的灯亮着，楼梯口的风贴着袖口。";
          } else if (group.prompt.includes("照片授权")) {
            group.guide = "活动群的未读还亮着，照片缩略图停在屏幕边缘。";
          } else if (group.prompt.includes("半小时")) {
            group.guide = "快递站后门还有筐号在跳，错题纸压在手机下面。";
          } else if (group.prompt.includes("哪样东西还留在桌上")) {
            group.guide = "桌面没有立刻空出来，最显眼的反而是没被收走的那样东西。";
          } else {
            const key = Array.from(group.group_id || "").reduce((sum, char) => sum + char.charCodeAt(0), 0);
            group.guide = fallbackGuides[key % fallbackGuides.length];
          }
        }
      }
    }
  }
}

cleanChoiceFeedback(route.act4_detail_blocks);
cleanChoiceFeedback(route.act5_detail_blocks);

fs.writeFileSync(jsonPath, `${JSON.stringify(route, null, 2)}\n`, "utf8");

for (const filePath of [act4DocPath, transitionScriptPath]) {
  let content = fs.readFileSync(filePath, "utf8");
  for (const [before, after] of exactReplacements.entries()) {
    content = content.replaceAll(before, after);
  }
  content = content.replaceAll(" / 承接回声", "");
  fs.writeFileSync(filePath, content, "utf8");
}

console.log(JSON.stringify({ cleaned: true }, null, 2));
