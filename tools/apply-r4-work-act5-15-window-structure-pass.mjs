import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const jsonPath = path.join(root, "docs", "剧情小说母版_v4.0", "开发数据_IF剧情页级JSON_R4-WORK_v1.json");
const route = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const sourceDoc = "开发设计_IF_R4-WORK_第五幕扩写设计.md";
route.source_docs = Array.isArray(route.source_docs) ? route.source_docs : [];
if (!route.source_docs.includes(sourceDoc)) route.source_docs.push(sourceDoc);

const oldBlocks = new Map((route.act5_detail_blocks || []).map((block) => [block.block_id, block]));

const idShift = new Map([
  ["ACT5-WORK-B04", "ACT5-WORK-B05"],
  ["ACT5-WORK-B05", "ACT5-WORK-B06"],
  ["ACT5-WORK-B06", "ACT5-WORK-B07"],
  ["ACT5-WORK-B07", "ACT5-WORK-B08"],
  ["ACT5-WORK-B08", "ACT5-WORK-B09"],
  ["ACT5-WORK-B09", "ACT5-WORK-B11"],
  ["ACT5-WORK-B10", "ACT5-WORK-B12"],
  ["ACT5-WORK-B11", "ACT5-WORK-B13"],
  ["ACT5-WORK-B12", "ACT5-WORK-B14"],
]);

function shiftedBlock(oldId) {
  const block = oldBlocks.get(oldId);
  if (!block) throw new Error(`Missing source block ${oldId}`);
  let raw = JSON.stringify(block);
  for (const [from, to] of [...idShift.entries()].sort((a, b) => b[0].localeCompare(a[0]))) {
    raw = raw.replaceAll(from, to);
  }
  return JSON.parse(raw);
}

function page(blockId, suffix, title, location, text) {
  return {
    page_id: `${blockId}-${suffix}`,
    page_title: title,
    location,
    text,
    updates: { act5_15_window_pass_01: true },
  };
}

function microGroup(blockId, direction, index, sourcePageId, prompt, guide, labels) {
  return {
    group_id: `${blockId}-MICRO-${direction}${index}`,
    source_page_id: sourcePageId,
    beat: index,
    prompt,
    guide,
    options: labels.map((label, optionIndex) => ({
      option_id: `${blockId}-MICRO-${direction}${index}-${optionIndex + 1}`,
      code: String(optionIndex + 1),
      label,
      body: `${label}落下后，现场没有立刻变轻，只是少了一句需要别人替他猜的话。`,
      variable_delta: { [`${blockId.toLowerCase().replaceAll("-", "_")}_micro_${direction.toLowerCase()}${index}`]: optionIndex + 1 },
      raw_effect_text: "micro_mindset +1",
    })),
  };
}

function direction(blockId, key, label, description, echo, feedbackOne, feedbackTwo, microGroups = []) {
  return {
    direction_id: `${blockId}-${key}`,
    direction: key,
    direction_type: "act5_core_expansion_direction",
    stays_in_pool: true,
    label,
    description,
    variable_delta: {
      act5_required_windows_seen: echo,
      act6_echo_hook: `${blockId}-${echo}`,
    },
    route_effect: {
      route_pool_id: "POOL-R4-WORK",
      route_switch_allowed: false,
    },
    feedback_pages: [
      page(blockId, `${key}-F01`, feedbackOne.title, feedbackOne.location, feedbackOne.text),
      page(blockId, `${key}-F02`, feedbackTwo.title, feedbackTwo.location, feedbackTwo.text),
    ],
    micro_groups: microGroups,
    echo_hooks: { act6_echo_hook: `${blockId}-${echo}` },
    next_node: null,
  };
}

function block({ id, name, tag, pages, choiceTitle, guide, directions }) {
  return {
    block_id: id,
    block_name: name,
    act: "ACT5",
    route_id: "R4-WORK",
    route_pool_id: "POOL-R4-WORK",
    source_detail_doc: sourceDoc,
    route_switch_allowed: false,
    previous_block: null,
    next_block: null,
    blueprint_slot_id: id.replace("ACT5-WORK-B", "ACT5-WORK-C"),
    scene_range: "第五幕扩写",
    scene_function: name,
    act5_window_tag: tag,
    required_completion_flags: [tag],
    must_record: true,
    pages: pages.map((item) => page(id, item.suffix, item.title, item.location, item.text)),
    choice_window: {
      choice_window_id: `${id}-CHOICE`,
      title: choiceTitle,
      guide,
      after_page: `${id}-S04`,
      direction_count: 3,
      directions,
    },
  };
}

const newB04 = (() => {
  const id = "ACT5-WORK-B04";
  const aF1 = `${id}-A-F01`;
  const aF2 = `${id}-A-F02`;
  const bF1 = `${id}-B-F01`;
  const cF1 = `${id}-C-F01`;
  return block({
    id,
    name: "班前门口回流",
    tag: "doorway_return",
    pages: [
      { suffix: "S01", title: "六点五十八 / 门还半开", location: "青枫居 4XX 门口", text: [
        "六点五十八，4XX 的门还半开着。",
        "林亦舟站在门口，听见里面有人拖椅子。快递站群又跳出一条提醒：新同学提前十分钟到。",
        "唐骁的 C407 表格还停在手机后台，最后一栏没有填。周屿在屋里问谁把水放阳台，陆沉回了一句别挡门。",
        "林亦舟没有立刻进去。楼梯口的风从下往上灌，塑料文件夹贴着手臂发凉。"
      ] },
      { suffix: "S02", title: "楼梯口 / 第一句", location: "青枫居楼梯口", text: [
        "他往下走了半层，又停住。",
        "楼下快递站的灯亮着，宿管窗口那本晚归登记摊开在桌上。楼上 4XX 的门缝里漏出一点光。",
        "如果现在进门，第一句要对 4XX 说。如果现在下楼，第一句就是对负责人说。如果继续站着，所有人都会先按自己的方式猜。",
        "手机屏幕暗下去，又被群消息点亮。"
      ] },
      { suffix: "S03", title: "楼下 / 负责人点名", location: "青枫居楼下", text: [
        "快递站负责人在群里点名确认到岗。",
        "林亦舟看见自己的名字后面还空着一个“在”。手指停在屏幕上，没有马上按下去。",
        "身后楼道里传来周屿的声音，像是叫了一声他的名字，又像只是问谁关门。",
        "那一声没有追下来，却让他更难装作听不见。"
      ] },
      { suffix: "S04", title: "门口 / 不能再同时站着", location: "青枫居门口", text: [
        "七点整，快递站群又发了一次集合位置。",
        "4XX 的门被风带得轻轻响了一下。林亦舟把文件夹换到另一只手，掌心出了汗。",
        "他终于意识到，今晚不是选去哪里，而是先让哪边不用替他补那句解释。",
        "门里、楼下、屏幕上，三处都还亮着。"
      ] },
    ],
    choiceTitle: "七点整，第一句落在哪里？",
    guide: "门还半开着，楼下已经点名，手机屏幕亮了一次又一次。林亦舟不能继续站在楼梯口让三边各自猜。",
    directions: [
      direction(id, "A", "先进 4XX，把晚班和 C407 缺席当面说清", "第一句给 4XX，快递站会多等一分钟。", "doorway_dorm_face", {
        title: "进门", location: "青枫居 4XX", text: [
          "林亦舟推门进去，先把工作牌摘下来。",
          "屋里停了一下。唐骁的笔还在表格旁边，周屿手里的水杯没放下，陆沉抬眼看了门口。",
          "他说今晚七点二十到快递站，C407 不能到现场，但文档会在十点后补。说完以后，门口的风才从背后灌进来。"
        ] }, {
        title: "迟到一分钟", location: "快递站", text: [
          "他到快递站时，负责人已经把排班表夹上透明板。",
          "对方只看了一眼时间，没有发火：“第一天别再卡点。”",
          "林亦舟点头，把复印件递过去。4XX 群里，唐骁只回了一个收到。"
        ] }, [
        microGroup(id, "A", 1, aF1, "进门前，先删掉哪句铺垫？", "门缝里的光贴着指节，屋里已经听见脚步。", ["删掉“我可能来不了”", "保留“七点二十到岗”", "只说能补文档的时间"]),
        microGroup(id, "A", 2, aF2, "到快递站后，先把什么交出去？", "负责人看着时间，复印件还夹在文件夹里。", ["身份证复印件", "晚归截图", "第一班到岗确认"]),
      ]),
      direction(id, "B", "直接下楼，在快递站先回到岗", "第一句给工作，4XX 会先按不在处理。", "doorway_work_first", {
        title: "下楼", location: "快递站", text: [
          "林亦舟先在快递站群里回了一个在。",
          "楼上的门声被风盖住。负责人从后门探头，让他先把复印件交过去。",
          "他把文件夹打开，才发现 C407 那张空栏照片还停在屏幕后台。"
        ] }, {
        title: "门内空位", location: "青枫居 4XX", text: [
          "4XX 群里隔了几分钟才出现唐骁的消息：那栏先按你不在写。",
          "周屿没有接玩笑，只发了一张公共桌照片，水杯旁边空着一块。",
          "林亦舟看着照片，没有立刻回。"
        ] }, [
        microGroup(id, "B", 1, bF1, "回到岗时，先说明哪件事？", "扫码枪还在充电座上，负责人等着点名。", ["先说第一次到岗", "先交复印件", "先问能不能十点后补截图"]),
      ]),
      direction(id, "C", "在楼梯口先发一条完整说明，再下楼", "三边都收到一句话，但没有哪边是当面。", "doorway_written_boundary", {
        title: "楼梯口", location: "青枫居楼梯口", text: [
          "林亦舟站在楼梯口，把一句话拆成三行。",
          "晚班七点二十到岗，C407 十点后补文档，4XX 今晚不等饭。",
          "发送键按下去以后，楼道里安静了半秒，像三扇门都被轻轻推了一下。"
        ] }, {
        title: "三边各退一步", location: "校园快递站", text: [
          "快递站负责人回收到。唐骁回按文档算。周屿回了一个句号，又撤回，改成知道了。",
          "没有人立刻追问，林亦舟反而觉得那条消息比当面话更薄。",
          "他把手机收进口袋，往楼下走。"
        ] }, [
        microGroup(id, "C", 1, cF1, "三行说明里，哪一行必须保留？", "输入框已经被拆成三行，发送键还没按下。", ["晚班七点二十到岗", "C407 十点后补文档", "4XX 今晚不等饭"]),
      ]),
    ],
  });
})();

const newB10 = (() => {
  const id = "ACT5-WORK-B10";
  const aF1 = `${id}-A-F01`;
  const aF2 = `${id}-A-F02`;
  const bF1 = `${id}-B-F01`;
  const cF1 = `${id}-C-F01`;
  return block({
    id,
    name: "饭点试运行",
    tag: "meal_trial",
    pages: [
      { suffix: "S01", title: "食堂窗口 / 还要不要打包", location: "西园食堂", text: [
        "晚班结束后，西园食堂只剩两个窗口还亮着。",
        "窗口阿姨认出林亦舟，问他还是打包两份吗。这个“还是”来得太自然，像他已经连续几天在这个时间出现。",
        "他低头看手机，4XX 群里没人问饭。周屿下午发过一句小舞台彩排，唐骁只发了 C407 的修改意见。",
        "饭盒盖在窗口边，热气很快散开。"
      ] },
      { suffix: "S02", title: "公共桌 / 饭盒位置", location: "青枫居 4XX", text: [
        "林亦舟拎着饭回到 4XX 时，公共桌边只留了一个空位。",
        "周屿的饭盒已经吃完，唐骁电脑旁边压着修改清单，陆沉把一瓶常温水推到空位旁。",
        "没有人说怎么这么晚。没人说，反而像已经练习过一次。",
        "林亦舟把饭盒放下，塑料袋响了一声。"
      ] },
      { suffix: "S03", title: "水池边 / 没洗的筷子", location: "4XX 水池边", text: [
        "水池边堆着两双没洗的筷子。",
        "周屿从阳台回来，看见他站在水池边，问：“你吃了吗？”",
        "林亦舟说吃过了。其实只是在窗口边扒了几口。",
        "这句谎不重，却让水声听起来很空。"
      ] },
      { suffix: "S04", title: "桌边 / 试运行结果", location: "青枫居 4XX", text: [
        "那晚，四个人没有吵。",
        "不吵不代表没事。饭盒的位置、没问出口的话、没人等他的那半小时，都像一次小小的试运行。",
        "如果以后都这样，4XX 会慢慢知道什么时间不用等他。",
        "林亦舟把饭盒盖打开，菜已经不太热了。"
      ] },
    ],
    choiceTitle: "这顿饭还要不要让 4XX 等？",
    guide: "窗口阿姨已经认得他，4XX 公共桌也已经给出一个空位。饭点不大，却能看出以后谁还会等谁。",
    directions: [
      direction(id, "A", "提前说不用等饭，自己晚点解决", "让 4XX 少等一次，但默认会变得更快。", "meal_no_wait", {
        title: "提前说", location: "西园食堂", text: [
          "林亦舟在窗口前先发消息：不用等饭，我晚点自己吃。",
          "周屿回得很快：那我不留菜了。",
          "这句话很普通，却像把公共桌上的一个位置先收起来。"
        ] }, {
        title: "空出来的位置", location: "青枫居 4XX", text: [
          "回到 4XX 时，桌边确实没有给他留饭。",
          "陆沉把水推过来，唐骁没抬头，周屿说窗口还开着。",
          "没人做错什么，林亦舟却觉得这就是试运行的结果。"
        ] }, [
        microGroup(id, "A", 1, aF1, "发消息前，删掉哪句客气话？", "饭盒还在窗口边，热气已经散了一半。", ["删掉“你们先吃吧”", "只留“不用等饭”", "补一句我会自己解决"]),
        microGroup(id, "A", 2, aF2, "回寝后，先把什么放到桌上？", "公共桌边空着，水杯旁边没有饭盒。", ["没喝完的水", "打包小票", "C407 修改清单"]),
      ]),
      direction(id, "B", "打包回去，保留一顿公共桌照面", "饭会凉，但还能留下当面说话的位置。", "meal_face_kept", {
        title: "打包", location: "西园食堂", text: [
          "林亦舟还是让窗口阿姨打包了一份。",
          "阿姨把饭盒扣紧，说汤别洒。袋子拎在手里，比文件夹还热。",
          "他回去时，4XX 的门还亮着。"
        ] }, {
        title: "公共桌", location: "青枫居 4XX", text: [
          "饭盒放到公共桌上时，周屿终于问了一句今晚人多不多。",
          "林亦舟说快递站后门排了一排车。唐骁听见，顺手把 C407 表格往旁边挪。",
          "这顿饭凉了，但桌边没有完全空掉。"
        ] }, [
        microGroup(id, "B", 1, bF1, "坐下后，先接哪句话？", "饭盒盖打开，热气已经不多。", ["周屿问人多不多", "唐骁问文档什么时候补", "陆沉问门禁截图留了吗"]),
      ]),
      direction(id, "C", "先去水池边洗手，不急着坐回桌边", "先把晚班带回来的痕迹洗掉，但话也会晚一点说。", "meal_delay_talk", {
        title: "水池边", location: "4XX 水池边", text: [
          "林亦舟先去了水池边。",
          "快递墨被水冲淡，手背上还是留着一点灰。他听见周屿在身后问吃了吗，声音不大。",
          "水声盖住了第一秒的停顿。"
        ] }, {
        title: "晚一点坐下", location: "青枫居 4XX", text: [
          "他擦干手再回到桌边时，话题已经换到 C407。",
          "唐骁把修改清单推过来，周屿没有再问饭。",
          "晚班的痕迹洗掉了一点，错过的话也少了一句。"
        ] }, [
        microGroup(id, "C", 1, cF1, "水声里，先承认哪件事？", "手背上的灰还没洗干净，身后有人在等一句话。", ["承认只吃了几口", "承认以后会晚", "承认今晚先补 C407"]),
      ]),
    ],
  });
})();

const newB15 = (() => {
  const id = "ACT5-WORK-B15";
  const aF1 = `${id}-A-F01`;
  const aF2 = `${id}-A-F02`;
  const bF1 = `${id}-B-F01`;
  const cF1 = `${id}-C-F01`;
  return block({
    id,
    name: "第六幕入口确认",
    tag: "act6_entry_lock",
    pages: [
      { suffix: "S01", title: "第一周末 / 四张回执", location: "青枫居 4XX", text: [
        "第一周末，林亦舟把四张回执摊在公共桌上。",
        "快递站到岗确认、C407 可交付清单、饭点试运行的打包小票，还有一张没来得及回复的活动名单截图。",
        "周屿把水杯往旁边挪，唐骁看清 C407 那一栏，陆沉先看门禁时间。",
        "这些东西不再只是第五幕的结果，它们要被带进下一周。"
      ] },
      { suffix: "S02", title: "快递站 / 下周班表", location: "校园快递站", text: [
        "快递站负责人把下周班表贴上透明板。",
        "林亦舟的名字已经不在试岗栏，而在固定晚班下面。旁边有人问他是不是以后都这个点来。",
        "他没有马上答。固定班不是一句确定，它会替很多人提前决定不用等他。",
        "透明板反光，把他的名字映得有点模糊。"
      ] },
      { suffix: "S03", title: "4XX / 谁还默认等", location: "青枫居 4XX", text: [
        "回到 4XX，周屿问下周还留不留饭。",
        "这个问题比责备轻，也比责备更难接。唐骁没有插话，陆沉把门禁截图模板又发了一遍。",
        "林亦舟看着公共桌上那几样东西，知道第六幕不是从新事件开始。",
        "它会从这些默认有没有被改掉开始。"
      ] },
      { suffix: "S04", title: "夜里 / 下一卷之前", location: "青枫居楼道", text: [
        "夜里，楼道灯一盏一盏熄下去。",
        "林亦舟站在门外，把下周班表、C407 清单、活动截图和晚风未读消息重新看了一遍。",
        "每一条都没有逼他立刻回答，却都在等他把生活半径写成一种长期样子。",
        "门把手被他握了一会儿，金属有点凉。"
      ] },
    ],
    choiceTitle: "进入第六幕前，把哪种默认留下？",
    guide: "下周班表已经贴出来，4XX 也开始问还要不要等饭。第五幕不是结束，是把默认带进下一卷。",
    directions: [
      direction(id, "A", "固定班成为主表，其他事提前按不在处理", "收入和证明最稳，但关系会先学会绕开他。", "act6_work_radius_locked", {
        title: "主表", location: "校园快递站", text: [
          "林亦舟在下周班表旁边写下确认。",
          "负责人点头，说那以后按这个排。以后两个字落下来，像把下周每个晚上都提前扣住。",
          "他把笔还回去，透明板上自己的名字没有再晃。"
        ] }, {
        title: "低温入口", location: "青枫居 4XX", text: [
          "4XX 很快按他的固定班重排了饭点和 C407 讨论。",
          "没有人故意冷他，只是很多事开始不再问。",
          "第六幕从这里进入低温。"
        ] }, [
        microGroup(id, "A", 1, aF1, "确认固定班前，先看哪一行？", "透明板上名字已经挪到固定晚班下面。", ["快递站固定晚班", "C407 可交付清单", "4XX 饭点备注"]),
        microGroup(id, "A", 2, aF2, "回 4XX 后，先收哪样东西？", "公共桌上还有几张第一周留下来的纸。", ["打包小票", "门禁截图模板", "活动名单截图"]),
      ]),
      direction(id, "B", "少接一晚，保留 4XX 和学习债的照面", "钱会薄一点，但他还留一个晚上给旧关系。", "act6_repair_window_kept", {
        title: "少接一晚", location: "快递站", text: [
          "林亦舟问负责人能不能少接周三。",
          "负责人翻了一下表，说可以，但固定证明要按实际天数写。",
          "少掉的一晚很小，却给 4XX 和学习债留出一个真实空格。"
        ] }, {
        title: "修补入口", location: "青枫居 4XX", text: [
          "周三晚上，公共桌终于没有少他的位置。",
          "唐骁把 C407 清单推过来，周屿把饭盒放到他旁边，陆沉只说这次别拖到夜里。",
          "第六幕从这里保留修补入口。"
        ] }, [
        microGroup(id, "B", 1, bF1, "少接一晚时，先说明什么？", "负责人手里的班表还没贴回透明板。", ["证明按实际天数写", "周三留给 C407", "这周先试一次"]),
      ]),
      direction(id, "C", "把排班、活动、作业和回寝都写停止条件", "不选单一主表，先把每条线能停在哪里写清。", "act6_stop_conditions", {
        title: "停止条件", location: "青枫居楼道", text: [
          "林亦舟把四件事写在同一页。",
          "晚班到几点，C407 交哪一版，活动能不能到场，几点前必须回寝。",
          "每一行都不漂亮，但都能被人核对。"
        ] }, {
        title: "稳定入口", location: "青枫居 4XX", text: [
          "第二天，唐骁按那页纸改了 C407 分工，周屿按时间问饭，陆沉把门禁提醒删短了一句。",
          "没有哪条线彻底轻松，但它们终于没有互相装作不存在。",
          "第六幕从这里进入稳定检查。"
        ] }, [
        microGroup(id, "C", 1, cF1, "四行停止条件里，先写哪一行？", "纸页摊在楼道窗台上，笔尖停了一下。", ["晚班到几点", "C407 交哪一版", "几点前必须回寝"]),
      ]),
    ],
  });
})();

function finalBlocks() {
  return [
    oldBlocks.get("ACT5-WORK-B01"),
    oldBlocks.get("ACT5-WORK-B02"),
    oldBlocks.get("ACT5-WORK-B03"),
    newB04,
    shiftedBlock("ACT5-WORK-B04"),
    shiftedBlock("ACT5-WORK-B05"),
    shiftedBlock("ACT5-WORK-B06"),
    shiftedBlock("ACT5-WORK-B07"),
    shiftedBlock("ACT5-WORK-B08"),
    newB10,
    shiftedBlock("ACT5-WORK-B09"),
    shiftedBlock("ACT5-WORK-B10"),
    shiftedBlock("ACT5-WORK-B11"),
    shiftedBlock("ACT5-WORK-B12"),
    newB15,
  ];
}

route.act5_detail_blocks = finalBlocks();

for (let index = 0; index < route.act5_detail_blocks.length; index += 1) {
  const current = route.act5_detail_blocks[index];
  const previous = index === 0 ? "ACT4-WORK-L06" : route.act5_detail_blocks[index - 1].block_id;
  const next = index === route.act5_detail_blocks.length - 1 ? "ACT6-WORK-B01" : route.act5_detail_blocks[index + 1].block_id;
  current.previous_block = previous;
  current.next_block = next;
  current.blueprint_slot_id = current.block_id.replace("ACT5-WORK-B", "ACT5-WORK-C");
  current.route_pool_id = "POOL-R4-WORK";
  current.route_switch_allowed = false;
  if (current.choice_window) {
    current.choice_window.after_page = `${current.block_id}-S04`;
    current.choice_window.direction_count = 3;
    for (const direction of current.choice_window.directions || []) {
      direction.next_node = next;
      direction.route_effect = {
        route_pool_id: "POOL-R4-WORK",
        route_switch_allowed: false,
      };
    }
  }
}

route.validation_targets = route.validation_targets || {};
route.validation_targets.act5_detail_blocks = {
  ...(route.validation_targets.act5_detail_blocks || {}),
  expected_block_count: 15,
  expected_pre_choice_page_count: 60,
  expected_choice_window_count: 15,
  expected_direction_count: 45,
  expected_feedback_page_count: 90,
  expected_micro_group_count: 60,
  expected_micro_option_count: 180,
  require_route_pool_locked: true,
  require_first_block: "ACT5-WORK-B01",
  require_last_block: "ACT5-WORK-B15",
};
route.validation_targets.act5_core_expansion_pass_02 = {
  expected_main_windows: 15,
  added_windows: ["ACT5-WORK-B04", "ACT5-WORK-B10", "ACT5-WORK-B15"],
  preserve_route_pool: "POOL-R4-WORK",
  first_batch_focus: ["ACT5-WORK-B01", "ACT5-WORK-B02", "ACT5-WORK-B03", "ACT5-WORK-B04", "ACT5-WORK-B05"],
};

fs.writeFileSync(jsonPath, `${JSON.stringify(route, null, 2)}\n`, "utf8");

console.log(JSON.stringify({
  act5Windows: route.act5_detail_blocks.length,
  first: route.act5_detail_blocks[0].block_id,
  last: route.act5_detail_blocks.at(-1).block_id,
}, null, 2));
