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

route.act4_to_act5_transition_block = {
  block_id: "ACT4-WORK-L06-TO-ACT5-WORK-B01",
  block_name: "暑假去向后的第一周入口",
  act: "ACT4_TO_ACT5",
  route_id: "R4-WORK",
  route_pool_id: "POOL-R4-WORK",
  source_detail_doc: "开发数据_IF剧情页级JSON_R4-WORK_v1.json",
  route_switch_allowed: false,
  previous_block: "ACT4-WORK-L06",
  next_block: "ACT5-WORK-B01",
  scene_range: "幕间过渡",
  scene_function: "把第四幕暑假去向、联系人签字和勤工窗口，过渡到第五幕开学后第一周的晚班试岗。",
  pages: [
    {
      page_id: "ACT4-WORK-L06-TO-ACT5-S01",
      page_title: "B204 后 / 透明文件夹",
      location: "B204 走廊",
      text: [
        "B204 的门在身后合上时，走廊里还亮着白天的灯。",
        "林亦舟把透明文件夹夹在手臂下，最上面那页是暑假去向登记，黑色签字压在本人确认栏里。兼职、留校、联系人顺序都在同一张纸上，字迹还没完全干。",
        "周屿从楼梯口等他，手里拎着半袋没喝完的水。唐骁低头看群里的项目清单，陆沉把门禁提醒转到 4XX 群里。谁都没有再问他到底是不是想好了。",
        "晚风的消息停在通知栏下方：到时候看吧，别把自己排没了。",
        "林亦舟没有立刻回。他先把透明文件夹塞进书包，拉链拉到一半，纸角还是露出来一点。"
      ],
      updates: {}
    },
    {
      page_id: "ACT4-WORK-L06-TO-ACT5-S02",
      page_title: "暑假末 / 回校清单",
      location: "青枫居 4XX",
      text: [
        "暑假最后几天，4XX 的公共桌上陆续多出返校清单。",
        "车票截图、补考资料、宿舍门禁、项目分工表，像几叠不同颜色的纸，被人随手压在同一张桌面上。林亦舟的透明文件夹也放在那里，边角被杯底压住，没人翻开。",
        "勤工群在周三晚上发了试岗提醒，负责人让新同学返校后补证件复印件。唐骁把 C407 的演示清单又传了一遍，周屿问谁周五晚上在宿舍，陆沉只回了一个门禁时间。",
        "林亦舟把这些消息一条条存进备忘录。暑假还没正式结束，开学第一周的空格已经先排出来。"
      ],
      updates: {}
    },
    {
      page_id: "ACT4-WORK-L06-TO-ACT5-S03",
      page_title: "周五下午 / 晚班名单",
      location: "快递站群 / 青枫居楼下",
      text: [
        "周五下午，雨停得很快，青枫居楼下的水还没干。",
        "林亦舟下楼取复印件，手机在口袋里震了一下。快递站群发出第一周试岗名单，他的名字排在第三个，后面写着：19:20 前到岗，带身份证复印件。",
        "他停在楼梯口，把那行字看完。",
        "楼上 4XX 的门半开着，C407 的分工表还等着补栏，透明文件夹里的本人签字已经把这些事都推到他面前。再往下，就是今晚七点半。"
      ],
      updates: {}
    }
  ]
};

route.validation_targets = route.validation_targets || {};
route.validation_targets.act4_to_act5_transition_block = {
  expected_blocks: 1,
  expected_pages: 3,
  previous_block: "ACT4-WORK-L06",
  next_block: "ACT5-WORK-B01",
  route_pool_id: "POOL-R4-WORK"
};

fs.writeFileSync(routeJsonPath, `${JSON.stringify(route, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  block: route.act4_to_act5_transition_block.block_id,
  pages: route.act4_to_act5_transition_block.pages.length,
  previous: route.act4_to_act5_transition_block.previous_block,
  next: route.act4_to_act5_transition_block.next_block
}));
