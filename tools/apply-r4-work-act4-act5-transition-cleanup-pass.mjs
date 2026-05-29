import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const jsonPath = path.join(root, "docs", "剧情小说母版_v4.0", "开发数据_IF剧情页级JSON_R4-WORK_v1.json");

const route = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const transitionPages = {
  "ACT4-WORK-L06-TO-ACT5-S01": [
    "B204 的门在身后合上时，走廊里还亮着白天的灯。",
    "林亦舟把透明文件夹夹在手臂下，黑色签字压在本人确认栏里，字迹还没完全干。",
    "周屿在楼梯口等他，手里拎着半袋没喝完的水。唐骁低头看 C407 群里的清单，陆沉把门禁提醒转到 4XX 群里。谁都没有再问他到底是不是想好了。",
    "晚风的消息停在通知栏下方：到时候看吧，别把自己排没了。",
    "林亦舟没有立刻回。他把文件夹塞进书包，拉链拉到一半，纸角还是露出来一点。打印店小票从夹层里滑出来，背面写着“身份证复印两份”。"
  ],
  "ACT4-WORK-L06-TO-ACT5-S02": [
    "暑假最后几天，4XX 的公共桌没有真正空过。",
    "林亦舟回寝时，透明文件夹被杯底压在桌角。周屿拿外卖袋时碰到它，打印店小票露出一截，唐骁顺手把它推回去，没有翻开。",
    "晚上，勤工群发来返校后的试岗提醒。负责人只写了两行：新同学带复印件，第一周先排晚班。",
    "唐骁把 C407 的演示清单又传了一遍，周屿问周五晚上谁在宿舍，陆沉回了一个门禁时间。林亦舟把三条消息按顺序记进备忘录，光标停在下一行。",
    "活动群里，秦越问物资清点谁交接。许棠把公开材料的命名格式又发了一遍。消息没有点他的名，却刚好落在他那只没扣紧的文件夹旁边。"
  ],
  "ACT4-WORK-L06-TO-ACT5-S03": [
    "周五下午，雨停得很快，青枫居楼下的水还没干。",
    "林亦舟下楼取复印件，手机在口袋里震了一下。快递站群发出第一周试岗名单，他的名字排在第三个，后面写着：19:20 前到岗，带身份证复印件。",
    "他停在楼梯口，把那行字看完。",
    "楼上 4XX 的门半开着，C407 的分工表还空着一栏。透明文件夹被他夹在胳膊下，塑料边角贴着皮肤发凉。",
    "宿管阿姨正把晚归登记本翻到新的一页，看见他手里的复印件，只说：“又是本人签字？”林亦舟点了一下头。她没有再追问，楼梯口反而安静下来。"
  ]
};

for (const page of route.act4_to_act5_transition_block.pages || []) {
  if (transitionPages[page.page_id]) page.text = transitionPages[page.page_id];
}

const act5B01 = (route.act5_detail_blocks || []).find((block) => block.block_id === "ACT5-WORK-B01");
const b01s01 = act5B01?.pages?.find((page) => page.page_id === "ACT5-WORK-B01-S01");
if (b01s01) {
  b01s01.text = [
    "开学第一周还没完全热起来，4XX 的公共桌先被一只透明文件夹占住。",
    "文件夹里夹着暑假去向登记、打印店小票、补考座位表和两张身份证复印件。周屿把外卖袋从桌边拎开时，小票背面那行字又露出来：身份证复印两份。",
    "快递站群在这时发出晚班名单。林亦舟的名字排在第三个，后面写着：19:20 前到岗，带复印件。",
    "唐骁刚把 C407 分工表铺开，笔尖停在最后一栏。陆沉看了一眼门禁提醒，没有说话。那一栏像早就知道他今晚要缺席。"
  ];
}

fs.writeFileSync(jsonPath, `${JSON.stringify(route, null, 2)}\n`, "utf8");

console.log(JSON.stringify({
  transitionCleanup: true,
  pages: Object.keys(transitionPages).length,
  act5B01Opening: Boolean(b01s01)
}, null, 2));
