# IF 第七卷毕业结算与共用事件变体矩阵

## 用途

本文用于补齐 IF 玩法的第七卷结算层。

第五卷负责分流，普通长线需要满足最低主线选择窗口，5X 在唯一硬外流点硬锁。第六卷负责当前命运池内 20 个剧情段和 5 次二方向选择。第七卷不再重新选路线，而是把所有已锁定路线带进同一批毕业事件点：预登记、公开范围、最后一个新年、开题、三四月材料、改论文 / 改毕业设计、答辩、毕业照、清寝、最后一顿饭、离校手续和武生院站。

这些事件点共用母本，但文本不能共用同一套结局。每条路线必须按当前 `route_pool_id` 输出不同镜头、不同变量回声和不同毕业温度。

## 总原则

1. 第七卷是结算卷，不是重新分流卷。
2. 第七卷必须读取第五卷 / 第六卷已经确定的 `route_pool_id`、`active_route_id`、`route_lock`、`hard_outflow` 和 `graduation_temperature`。
3. 所有路线共用第七卷公共事件点，但每条线必须有自己的 `route_lens`、可见人物、文本重点和结局倾向。
4. 第七卷不能用一个“大家都和好”覆盖前面路线差异；说开、淡化、体面距离、不和解、继续联系、错过和 5X 遗憾都必须成立。
5. “最后一个新年”是硬事件，不是装饰标题。它负责把大学四年最后一次新年和第一卷 / 开学时的处境做对照。
6. 改论文 / 改毕业设计和答辩是硬事件。它们负责检验谁还能帮忙看稿、谁只做流程确认、谁已经不等、谁只能通过软消息出现。
7. 5X 进入第七卷后仍不得回原多线。旧线人物只能软照面、消息、同场流程或低温回声。

## 推荐字段

```json
{
  "act": "act7",
  "route_pool_id": "POOL-DEFAULT-4XX",
  "active_route_id": "DEFAULT-4XX",
  "route_lock": false,
  "hard_outflow": false,
  "act6_final_direction": "present_but_not_close",
  "act7_required_events_seen": [],
  "act7_variant_id": "ACT7-DEFAULT",
  "graduation_temperature": "unresolved_but_present",
  "ending_candidate": "DEFAULT-END-PRESENT",
  "no_route_switch_in_act7": true
}
```

字段说明：

| 字段 | 含义 |
|---|---|
| `act7_required_events_seen` | 第七卷已完成的共用事件点。正式 JSON 中应覆盖 12 个事件点。 |
| `act7_variant_id` | 当前路线的第七卷文本变体 ID。 |
| `act6_final_direction` | 第六卷最后一次二方向选择留下的处理倾向。 |
| `graduation_temperature` | 第七卷最终温度，不是好感值。 |
| `ending_candidate` | 当前可触发的路线结局 ID。 |
| `no_route_switch_in_act7` | 第七卷禁止重新开完整路线。 |

## 第七卷共用事件点

| 事件 ID | 母本章 | 事件名 | 必须承担的玩法功能 | 不能省略的内容 |
|---|---|---|---|---|
| `ACT7-E01-PRE-REGISTER` | 第一章《预登记》 | 毕业去向预登记 | 确认毕业后还能不能被找到 | 手机号、邮箱、去向、本人确认 |
| `ACT7-E02-PUBLIC-SCOPE` | 第二章《不公开》 | 公开范围确认 | 检验公开边界和材料授权 | 不公开 / 仅留存 / 班级内部 / 学院活动 |
| `ACT7-E03-LAST-NEW-YEAR` | 第三章《最后一个新年》 | 大学四年最后一个新年 | 对照第一卷开学时的处境 | 空白目录、旧物、是否愿意讲故事 |
| `ACT7-E04-THESIS-TOPIC` | 第四章《开题》 | 开题 / 毕业设计方向 | 确认“接下来做什么”和“谁能签” | 导师组、待定说明、本人签字 |
| `ACT7-E05-MARCH-QUEUE` | 第五章《三四月》 | 三四月毕业事项排队 | 把实习、考研、证书、材料、毕业照压到同一阶段 | 日期、窗口、缺席不补 |
| `ACT7-E06-THESIS-REVISION` | 第四至七章嫁接 | 改论文 / 改毕业设计 | 检验谁还会帮他看稿、改格式、等版本 | 修改意见、版本、导师反馈、截止时间 |
| `ACT7-E07-DEFENSE` | 第七章《答辩以后》 | 答辩 / 答辩后 | 检验关系是否还能等到答辩门口 | 签字、小章、答辩顺序、修改后提交 |
| `ACT7-E08-GRAD-PHOTO` | 第六章《毕业照》及第七章 | 毕业照 / 影像授权 | 检验同框资格和公开风险 | 预览、缓存、仅留存、是否提交主题材料 |
| `ACT7-E09-DORM-CLEAR` | 第八章《清寝》 | 清寝 / 旧物处理 | 检验谁能处理旧物但不代替别人确认 | 清单、钥匙、快递、U 盘、遥控器、本人确认 |
| `ACT7-E10-LAST-MEAL` | 第九章《最后一顿饭》 | 最后一顿饭 | 检验是否还有一张桌和一个座位 | 地点投票、人数锁定、迟到不等 |
| `ACT7-E11-LEAVING-PAPERS` | 第十章《武生院站》 | 离校手续 / 证书 / 档案 | 确认大学生活被学校流程盖章 | 退寝、证书、档案、校园卡、离校确认 |
| `ACT7-E12-STATION-AFTER` | 第十章《武生院站》 | 武生院站 / 毕业后消息 | 输出最后文本温度 | 站口、地铁、群消息、私聊、是否继续联系 |

## “最后一个新年”硬规则

`ACT7-E03-LAST-NEW-YEAR` 必须写出“最后”和“开学”的差异。

| 对照项 | 第一卷 / 开学处境 | 第七卷 / 最后一个新年处境 | 可转为变量 |
|---|---|---|---|
| 行李 | 不知道 4XX 会变成什么 | 清寝前知道每件东西要不要带走 | `old_object_weight` |
| 手机 / 群 | 新生群、班级群、宿舍群都在增加关系 | 群消息变成通知、确认、截止、低频回声 | `message_cut` / `dorm_visibility` |
| 桌子 | 四个人第一次分桌位 | 公共桌变成清单、签字、旧物和权限 | `dorm_warmth` / `public_boundary` |
| 关系 | 不熟但有空白 | 熟过、伤过、错过，空白不再是空白 | `old_debt` / `missed_chance` |
| 新年 | 还不知道未来会如何 | 已经知道有些事不会补拍、不补座、不补说 | `graduation_temperature` |

写法限制：

- 不能把“最后一个新年”写成煽情晚会或统一怀旧。
- 每条路线都必须决定：带不带物品、讲不讲故事、公开不公开、谁能确认。
- 4XX 以外路线也必须经过该事件，只是镜头不同：晚风可通过消息和语音，感情线可通过照片 / 文档，工作线可通过缺席或赶场，5X 可通过新圈和旧线擦肩。

## 改论文 / 答辩硬规则

`ACT7-E06-THESIS-REVISION` 和 `ACT7-E07-DEFENSE` 必须写成可结算事件。

| 环节 | 必须出现 | 可玩选择 | 后果 |
|---|---|---|---|
| 导师修改意见 | 红批、批注、版本命名、格式问题 | 自己改 / 找当前路线人物帮看 / 只交最低版 | 影响 `project_stability`、`route_trust`、`graduation_temperature` |
| 论文 / 毕业设计版本 | 初稿、修改稿、终版、查重前版 | 发给谁看 / 不发 / 只发格式问题 | 检验亲密度和边界 |
| 答辩前等待 | 门口、走廊、C407、B204、打印店 | 等别人 / 让别人等 / 不等 | 影响最后一顿饭和站口文本 |
| 答辩后补交 | 签字、小章、修改后提交 | 先补材料 / 先去饭局 / 先处理私聊 | 进入毕业温度结算 |

写法限制：

- 不能只写“答辩通过了”。必须写谁在场、谁没等、谁帮看、谁只回了一个“收到”。
- 不能把改论文变成纯学业流水账。它的功能是把路线关系压进格式、版本、签字和截止时间。
- 不能让某条线因为论文 / 答辩重新跳到另一条完整路线。

## 路线变体总表

| 路线池 | 第七卷变体 ID | 结算镜头 | 最后一个新年写法 | 改论文 / 答辩写法 | 主要结局温度 |
|---|---|---|---|---|---|
| `POOL-DEFAULT-4XX` | `ACT7-DEFAULT` | 4XX 公共桌、毕业照、清寝、饭局、站口 | 空白目录 / 旧物 / 不公开，检验还能不能共同确认 | 四人可互相看一部分稿，但不再替别人兜底 | 说开、在场、体面、不和解 |
| `POOL-R5-ZHOU` | `ACT7-ZHOU` | 周屿活动圈、主持材料、最后饭局 | 热闹退场后，周屿是否允许不把痛写成段子 | 改稿和主持彩排撞期，林亦舟决定帮他稳场还是让他自己说 | 热闹淡化、半句道歉、继续联系 |
| `POOL-R5-TANG` | `ACT7-TANG` | 流程表、格式、归档、证书 | “不公开”被写成规则，也可能被误读成冷 | 改论文版本、答辩材料和补交表最强；私人话最难 | 协作、非功能表达、礼貌距离 |
| `POOL-R5-LUCHEN` | `ACT7-LUCHEN` | 图书馆、勤工、旧书、晚到解释 | 最后一个新年像一张没人催他说的空表 | 改稿多发生在图书馆 / 书屋；重点是等陆沉自己说 | 迟来解释、低频联系、沉默淡化 |
| `POOL-R5-LIEFLAT` | `ACT7-LIEFLAT` | 空栏、过期入口、没人追问 | 空白目录不是抵抗，是他又没赶上 | 改论文拖到最低版，答辩后也没人责怪，只是少等一次 | 低存在感、迟来消息、错过 |
| `POOL-R5-WANFENG` | `ACT7-WANFENG` | 语音、地铁口、毕业城市、私人入口 | 最后一个新年通过消息、语音和“不公开”的共识出现 | 改稿 / 答辩和线下见面、未来频率讨论冲突 | 继续联系、体面分别、错过 |
| `POOL-R5-ROMANCE` | `ACT7-ROMANCE` | 沈嘉禾文档 / 夏知微影像 | 最后一个新年转成共享文档、照片、授权或私存 | 沈嘉禾偏文档和格式；夏知微偏影像和授权；都不能多对象摇摆 | 继续联系、私人入口、体面分别 |
| `POOL-R4-WORK` | `ACT7-WORK` | 排班、工资、快递、材料窗口 | 最后一个新年可能因班次缺席，只留下现实回声 | 改稿在夜班后、打印店、快递站间隙完成；答辩流程更独立 | 独立处理、低频联系、错过饭局 |
| `POOL-A3-ACTIVITY-PUBLIC` | `ACT7-A3` | 活动材料、公开范围、候选来源 | 最后一个新年被活动材料会吸走，但可选择不公开 | 改稿和活动材料并行，重点是公开信用和候选回声 | 公开信用、候选开放、低可见度 |
| `POOL-R3-PERFECT` | `ACT7-PERFECT` | 材料完整、署名清楚、私人空格 | 最后一个新年目录很清楚，但私人话可能仍空着 | 改稿、答辩、归档都很稳；风险是继续被工具化 | 公开清楚、工具化、低温清楚 |
| `POOL-R5X-HARD` | `ACT7-R5X` | 新圈、旧人擦肩、武生院站另一边 | 最后一个新年在旧线远处发生，新圈不承担旧故事 | 改稿 / 答辩只走 5X 单线；旧人只能看见结果或短句 | 5X 遗憾、清醒离开、薄圈散场 |

## 共用事件变体矩阵

### `ACT7-E01-PRE-REGISTER` 预登记

| 路线池 | 文本变体 |
|---|---|
| `POOL-DEFAULT-4XX` | 4XX 仍会核手机号和邮箱，但谁也不能替谁填去向。 |
| `POOL-R5-ZHOU` | 周屿把活动联系人和毕业去向写在同一张表上，林亦舟决定是否提醒他别把热闹写满。 |
| `POOL-R5-TANG` | 唐骁先检查格式，再卡在“毕业后联系人”一栏。 |
| `POOL-R5-LUCHEN` | 陆沉补备用电话，林亦舟只能等他自己递出表。 |
| `POOL-R5-LIEFLAT` | 林亦舟差点忘交，没人骂他，只是系统催了一遍。 |
| `POOL-R5-WANFENG` | 晚风问他填哪里，他第一次发现“以后”要写成格子。 |
| `POOL-R5-ROMANCE` | 候选对象的城市、考证或作品去向开始成为现实问题。 |
| `POOL-R4-WORK` | 工作排班和联系方式绑定，林亦舟更清楚自己毕业后能不能被找到。 |
| `POOL-A3-ACTIVITY-PUBLIC` | 活动联系人和毕业去向并排出现，公开信用开始变成手续。 |
| `POOL-R3-PERFECT` | 表格填得最清楚，但私人联系人一栏最难写。 |
| `POOL-R5X-HARD` | 旧群预登记只是软消息，新圈问他毕业后去哪像随口问天气。 |

### `ACT7-E03-LAST-NEW-YEAR` 最后一个新年

| 路线池 | 文本变体 |
|---|---|
| `POOL-DEFAULT-4XX` | 空白目录和旧物让四个人第一次承认：开学时的空白，已经被四年里的事写满。 |
| `POOL-R5-ZHOU` | 周屿想把它讲成玩笑，最后选择不公开或只留存。 |
| `POOL-R5-TANG` | 唐骁把公开范围写得准确，却发现准确也会伤人。 |
| `POOL-R5-LUCHEN` | 陆沉带来的东西最轻，但最难说明来源。 |
| `POOL-R5-LIEFLAT` | 目录空着不是选择，是他又晚了一步。 |
| `POOL-R5-WANFENG` | 晚风用“不公开”给他一个不用证明亲密的出口。 |
| `POOL-R5-ROMANCE` | 沈嘉禾方向是共享文档，夏知微方向是照片 / 影像；都要决定留存还是公开。 |
| `POOL-R4-WORK` | 他可能赶不上材料会，只能在班后补一个现实物件。 |
| `POOL-A3-ACTIVITY-PUBLIC` | 活动素材很多，但不是所有素材都该拿来讲私人故事。 |
| `POOL-R3-PERFECT` | 目录、来源、确认人都齐，唯独私人解释可能空着。 |
| `POOL-R5X-HARD` | 旧线的最后一个新年在远处成形；新圈没有义务替他记住开学。 |

### `ACT7-E06-THESIS-REVISION` 改论文 / 改毕业设计

| 路线池 | 文本变体 |
|---|---|
| `POOL-DEFAULT-4XX` | 四个人可互相看格式、代码或摘要，但必须先问能不能动。 |
| `POOL-R5-ZHOU` | 周屿彩排和改稿撞期，林亦舟可以帮他挡流程，也可以逼他自己发修改版。 |
| `POOL-R5-TANG` | 唐骁最擅长版本和格式，但玩家要决定流程是否压过私人话。 |
| `POOL-R5-LUCHEN` | 陆沉只发一版很晚的稿，林亦舟不能替他说理由。 |
| `POOL-R5-LIEFLAT` | 林亦舟拖到最低可交版，错过别人愿意帮他看稿的时间。 |
| `POOL-R5-WANFENG` | 晚风可以陪他听语音改摘要，但毕业后的联系频率也被问到。 |
| `POOL-R5-ROMANCE` | 沈嘉禾帮看文档边界，夏知微帮看影像 / 图表授权；候选对象不能变成免费工具。 |
| `POOL-R4-WORK` | 他在夜班、打印店和饭点之间改稿，独立但疲惫。 |
| `POOL-A3-ACTIVITY-PUBLIC` | 活动材料、论文格式和公开署名相互挤压。 |
| `POOL-R3-PERFECT` | 改稿最稳，版本最干净，但容易被默认继续帮别人收尾。 |
| `POOL-R5X-HARD` | 新圈可以陪他熬夜，但不理解旧项目；旧人只看见他交了终版。 |

### `ACT7-E07-DEFENSE` 答辩 / 答辩以后

| 路线池 | 文本变体 |
|---|---|
| `POOL-DEFAULT-4XX` | 答辩门口可以有人等，但等不等不等于亲密恢复。 |
| `POOL-R5-ZHOU` | 周屿可能在活动现场赶来，半句玩笑后终于停住。 |
| `POOL-R5-TANG` | 唐骁盯补交清单，答辩后一句不服务流程的话更珍贵。 |
| `POOL-R5-LUCHEN` | 陆沉可能晚到，但会把一件现实任务完成。 |
| `POOL-R5-LIEFLAT` | 他通过了，群里礼貌恭喜，没人继续问。 |
| `POOL-R5-WANFENG` | 晚风问结果，玩家决定是认真说还是用玩笑糊过去。 |
| `POOL-R5-ROMANCE` | 候选对象是否在答辩后等他，取决于前面的真实投入和公开边界。 |
| `POOL-R4-WORK` | 答辩后还要赶班或领工资确认，现实把情绪压短。 |
| `POOL-A3-ACTIVITY-PUBLIC` | 答辩结果和活动履历、公开材料一起进入毕业叙事。 |
| `POOL-R3-PERFECT` | 答辩材料清楚，结尾语气体面，但不一定有人等他吃饭。 |
| `POOL-R5X-HARD` | 许澈或新圈问一句“过了没”，旧人只在同场流程里擦肩。 |

## 结局温度映射

| 温度 | 适用路线 | 触发倾向 | 文本方向 |
|---|---|---|---|
| `say_clear` | `DEFAULT-4XX`、`R5-ZHOU`、`R5-TANG`、`R5-LUCHEN` | 第七卷事件中至少 3 次主动说清，且未代替别人确认 | 有些事终于说清，但不保证回到从前 |
| `present_but_not_close` | 多数普通路线 | 参与毕业照、清寝、饭局或站口，但低温 | 人还在场，关系不再自动亲近 |
| `polite_distance` | `R3-PERFECT`、`R4-WORK`、`R5-TANG`、`R5-LIEFLAT` | 流程完成高，私人解释低 | 体面、清楚、不难看，但少了亲密 |
| `continue_contact` | `R5-WANFENG`、`R5-ROMANCE`、`R5-ZHOU`、`R5-LUCHEN`、`R4-WORK` | 未来讨论明确，边界清楚 | 毕业后低频但真实联系 |
| `missed` | `R5-LIEFLAT`、`R4-WORK`、`R5-WANFENG`、`R5-ROMANCE` | 错过、迟到、未解释、入口过期 | 不是决裂，是最适合说话的时候过去了 |
| `not_reconciled` | `DEFAULT-4XX`、站队组三线 | 强误读、高旧账、低修补 | 不和解，也不继续追究 |
| `public_clear_private_blank` | `A3-ACTIVITY-PUBLIC`、`R3-PERFECT` | 公开材料完整，私人解释不足 | 外面看起来清楚，里面仍有空格 |
| `5x_regret` | `R5X-HARD` | `route_lock = "5x"` 且旧人远、新圈薄 | 新圈散得轻，旧人远得重 |

## JSON 拆分建议

```json
{
  "act7_settlement_rule": {
    "required_event_count": 12,
    "required_events": [
      "ACT7-E01-PRE-REGISTER",
      "ACT7-E02-PUBLIC-SCOPE",
      "ACT7-E03-LAST-NEW-YEAR",
      "ACT7-E04-THESIS-TOPIC",
      "ACT7-E05-MARCH-QUEUE",
      "ACT7-E06-THESIS-REVISION",
      "ACT7-E07-DEFENSE",
      "ACT7-E08-GRAD-PHOTO",
      "ACT7-E09-DORM-CLEAR",
      "ACT7-E10-LAST-MEAL",
      "ACT7-E11-LEAVING-PAPERS",
      "ACT7-E12-STATION-AFTER"
    ],
    "route_switch_allowed": false,
    "variant_by_route_pool": true,
    "ending_temperature_required": true
  }
}
```

后续正式 JSON 中，建议每个第七卷事件页保留：

```json
{
  "event_id": "ACT7-E06-THESIS-REVISION",
  "route_pool_id": "POOL-R5-TANG",
  "route_lens": "唐骁线版本：版本、格式、补交和私人话延迟",
  "same_mother_event": true,
  "allowed_choice_count": 2,
  "route_switch_allowed": false,
  "updates": ["project_stability", "tang_trust", "emotion_delay", "graduation_temperature"],
  "ending_hooks": ["TANG-END-COLLAB", "TANG-END-POLITE", "TANG-END-NOCHAT"]
}
```

## 校验清单

后续拆第七卷剧情页或 JSON 时，至少检查：

- 是否覆盖 12 个第七卷共用事件点。
- 是否包含 `ACT7-E03-LAST-NEW-YEAR`，并写出大学四年最后一个新年与开学处境的对照。
- 是否包含 `ACT7-E06-THESIS-REVISION`，并把改论文 / 改毕业设计写成关系结算事件。
- 是否包含 `ACT7-E07-DEFENSE`，并把答辩前后等待、补交和消息回声写入变量。
- 是否每条路线都有自己的 `act7_variant_id`。
- 是否没有在第七卷重新开放完整路线。
- 是否 5X 仍保持 `route_lock = "5x"` 和 `hard_outflow = true`。
- 是否每个结局都能落到具体事件，而不是只靠总评文字。

## 后续接入说明

1. 先把本文件接入 P0 总索引和长篇扩展总表。
2. 后续写剧情页级细稿时，应优先拆 `ACT7-E03-LAST-NEW-YEAR`、`ACT7-E06-THESIS-REVISION` 和 `ACT7-E07-DEFENSE`，因为这三个点最容易被写成泛化毕业氛围。
3. 正式 JSON 可在第六卷 20 段之后追加 `act7_settlement_events` 数组，统一读取当前 `route_pool_id` 输出文本变体。

## 2026-05-21 接入记录：ACT7-E06 剧情页级细稿

`开发细稿_IF第七卷ACT7-E06改论文毕业设计剧情页.md` 已完成第一版。

本细稿把 `ACT7-E06-THESIS-REVISION` 明确为“改论文 / 改毕业设计关系结算事件”，要求所有路线都记录：

- `thesis_revision_comments_seen`
- `thesis_revision_version`
- `thesis_revision_helper`
- `thesis_boundary_checked`
- `revision_submitted_before_deadline`

后续拆 `ACT7-E07-DEFENSE` 时，应读取本事件的提交版本和帮看关系，决定答辩门口谁在、谁不在、谁只发消息、谁赶流程。

## 2026-05-21 接入记录：ACT7-E07 剧情页级细稿

`开发细稿_IF第七卷ACT7-E07答辩剧情页.md` 已完成第一版。

本细稿把 `ACT7-E07-DEFENSE` 明确为“答辩 / 答辩后关系等待与补交结算事件”，要求所有路线读取 `ACT7-E06` 的：

- `thesis_revision_version`
- `thesis_revision_helper`
- `thesis_boundary_checked`
- `revision_submitted_before_deadline`

并记录：

- `defense_order_seen`
- `defense_waiting_state`
- `defense_revision_after_seen`
- `defense_post_submit_done`
- `defense_message_echo`
- `defense_boundary_checked`

后续拆正式 JSON 时，应先把 `ACT7-E03`、`ACT7-E06`、`ACT7-E07` 三个核心事件接入 `act7_settlement_events`，再补齐毕业照、清寝、最后一顿饭、离校手续和站后回声。

## 2026-05-21 接入记录：DEFAULT-4XX 第七卷核心事件正式 JSON

`开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` 已在第六卷 20 段之后新增 `act7_settlement_events` 数组，并先接入三项核心事件：

- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`

本次接入限定为 `route_id = DEFAULT-4XX`、`route_pool_id = POOL-DEFAULT-4XX`、`act7_variant_id = ACT7-DEFAULT`。其它路线仍需后续按同一母事件另写文本变体，不得直接复用 DEFAULT 文本。

JSON 层新增校验目标：

- `act7_core_event_count = 3`
- `act7_required_event_count = 12`
- `act7_route_switch_allowed = false`
- `act7_required_completion_flags = ["opening_contrast_seen", "thesis_boundary_checked", "defense_boundary_checked"]`

后续补齐 `ACT7-E08` 至 `ACT7-E12` 时，应继续沿用本数组结构，并保持每个事件的 `same_mother_event = true` 与 `route_switch_allowed = false`。

## 2026-05-21 接入记录：ACT7-E08 至 E12 毕业收束细稿

`开发细稿_IF第七卷ACT7-E08至E12毕业收束剧情页.md` 已完成第一版。

本细稿限定为 `DEFAULT-4XX` / `POOL-DEFAULT-4XX` / `ACT7-DEFAULT`，并把第七卷后半收束拆成：

- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

后续正式 JSON 接入时，应把以上 5 个事件追加进 `act7_settlement_events`。接入后，DEFAULT-4XX 的第七卷 JSON 将覆盖 E03、E06、E07、E08、E09、E10、E11、E12 共 8 个事件；本句为当时中间状态，E01、E02、E04、E05 已在后续早段事件收口中补齐。

## 2026-05-21 接入记录：DEFAULT-4XX 第七卷 E08-E12 正式 JSON

`开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` 已追加：

- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

本段记录的是 E08-E12 接入后的中间状态。后续早段事件已在正式 JSON 收口，DEFAULT-4XX 当前覆盖完整 12 个第七卷事件。中间状态下待补的 4 个事件曾为：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`

上述 4 个事件补齐后，DEFAULT-4XX 的第七卷 JSON 已形成完整 12 事件闭环。

## 2026-05-21 接入记录：DEFAULT-4XX 第七卷早段事件正式 JSON 收口

`开发数据_IF剧情页级JSON_DEFAULT-4XX_v1.json` 已补齐：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`

其中 `ACT7-E04-THESIS-TOPIC` 与 `ACT7-E05-MARCH-QUEUE` 补上了 E03 到 E06 之间的开题 / 毕业设计方向、三四月事项排队、本人签字、窗口挤压和缺席不补拍压力。所有 12 个事件仍保持 `route_pool_id = POOL-DEFAULT-4XX`、`same_mother_event = true`、`route_switch_allowed = false`。

JSON 层校验目标已同步为：

- `act7_core_event_count = 12`
- `act7_required_event_count = 12`
- `act7_route_switch_allowed = false`

后续路线变体应继承 12 个母事件顺序，但不得直接复用 DEFAULT 文本；每条路线需要根据自己的缺席方式、关系温度、公开边界和毕业后联系状态改写镜头。

## 2026-05-21 接入记录：ACT7-ZHOU 周屿线 12 事件变体细稿

`开发细稿_IF第七卷ACT7-ZHOU周屿线事件变体剧情页.md` 已完成第一版。

本细稿限定为 `R5-ZHOU` / `POOL-R5-ZHOU` / `ACT7-ZHOU`，并继承第七卷 12 个母事件顺序：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`
- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

该变体把周屿线结算落到活动联系人、主持素材公开范围、热闹退场、不公开权、彩排撞期、答辩门口停住玩笑、最后饭局半句道歉和毕业后低频联系。所有事件仍保持 `same_mother_event = true` 与 `route_switch_allowed = false`。

后续接正式 JSON 时，应重点记录：

- `zhou_activity_signature_scope`
- `zhou_half_apology_seen`
- `zhou_final_contact_scope`

这三个字段用于区分继续联系、半句道歉、体面淡化和迟来遗憾。

## 2026-05-21 接入记录：R5-ZHOU 第七卷正式 JSON

`开发数据_IF剧情页级JSON_R5-ZHOU_v1.json` 已完成第一版。

本文件把 `ACT7-ZHOU` 的 12 个同母事件变体接入正式剧情页级 JSON。它继承第七卷母事件顺序，但文本镜头、变量回声和结算温度均来自周屿线细稿：

- 活动联系人和毕业去向分开。
- 主持素材、停顿片段和公开范围需要本人确认。
- 改稿 / 答辩与主持彩排撞期。
- 毕业照、清寝、饭局和离校手续继续发生，但不强行写成大团圆。
- 最终温度由低频联系、半句道歉、体面淡化或迟来遗憾决定。

校验目标已满足：

- `act7_core_event_count = 12`
- 每个事件 4 个剧情页。
- 每个事件 1 个二方向选择窗口。
- `route_switch_allowed = false`
- `source_docs` 中引用的文件均存在。

后续路线接入应以本文件为 Act7 数据结构样板，但必须先写各自路线细稿，不得把周屿线的活动圈、主持素材、半句道歉直接替换名字后复用。

## 2026-05-21 接入记录：ACT7-TANG 唐骁线 12 事件变体细稿

`开发细稿_IF第七卷ACT7-TANG唐骁线事件变体剧情页.md` 已完成第一版。

本细稿限定为 `R5-TANG` / `POOL-R5-TANG` / `ACT7-TANG`，并继承第七卷 12 个母事件顺序：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`
- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

该变体把唐骁线结算落到流程表、格式、归档、证书、只读权限、责任边界、实用照看和流程外表达。所有事件仍保持 `same_mother_event = true` 与 `route_switch_allowed = false`。

后续接正式 JSON 时，应重点记录：

- `tang_archive_scope`
- `tang_nonfunctional_line_seen`
- `tang_final_contact_scope`

这三个字段用于区分继续协作、非功利表达、体面距离、低温淡化和不再私聊。

## 2026-05-21 接入记录：R5-TANG 第七卷正式 JSON

`开发数据_IF剧情页级JSON_R5-TANG_v1.json` 已完成第一版。

本文件把 `ACT7-TANG` 的 12 个同母事件变体接入正式剧情页级 JSON。它继承第七卷母事件顺序，但文本镜头、变量回声和结算温度均来自唐骁线细稿：

- 毕业后联系人和项目联系人分开。
- 不公开规则保留边界，但删掉定罪感。
- 改稿 / 答辩最重版本、格式、补交和本人说明。
- 毕业照、清寝、饭局和离校手续继续发生，但流程正确不等于关系回温。
- 最终温度由低频协作、非功利表达、体面距离、低温淡化或不再私聊决定。

校验目标已满足：

- `act7_core_event_count = 12`
- 每个事件 4 个剧情页。
- 每个事件 1 个二方向选择窗口。
- `route_switch_allowed = false`
- `source_docs` 中引用的文件均存在。

后续路线接入应以 `R5-ZHOU` 与 `R5-TANG` 两份正式 JSON 为 Act7 数据结构样板，但必须先写各自路线细稿，不得把唐骁线的流程表、格式、非功利表达直接替换名字后复用。

## 2026-05-21 接入记录：ACT7-LUCHEN 陆沉线 12 事件变体细稿

`开发细稿_IF第七卷ACT7-LUCHEN陆沉线事件变体剧情页.md` 已完成第一版。

本细稿限定为 `R5-LUCHEN` / `POOL-R5-LUCHEN` / `ACT7-LUCHEN`，并继承第七卷 12 个母事件顺序：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`
- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

该变体把陆沉线结算落到勤工、图书馆、旧书、最低可公开事实、本人确认、迟到但本人完成的任务和武生院站后低频联系。所有事件仍保持 `same_mother_event = true` 与 `route_switch_allowed = false`。

后续接正式 JSON 时，应重点记录：

- `luchen_old_book_checked`
- `luchen_late_word_seen`
- `luchen_final_contact_scope`

这三个字段用于区分低频联系、迟来解释、礼貌同框和空白离校。

## 2026-05-21 接入记录：R5-LUCHEN 第七卷正式 JSON

`开发数据_IF剧情页级JSON_R5-LUCHEN_v1.json` 已完成第一版。

本文件把 `ACT7-LUCHEN` 的 12 个同母事件变体接入正式剧情页级 JSON。它继承第七卷母事件顺序，但文本镜头、变量回声和结算温度均来自陆沉线细稿：

- 本人联系方式、备用电话和勤工联系人分开。
- 最低可公开事实保留，不替陆沉补完整原因。
- 旧书、夹页、排班截图、晚到修改稿和答辩本人回答成为关键回声。
- 毕业照、清寝、饭局和离校手续继续发生，但每个关键确认都回到陆沉本人。
- 最终温度由低频联系、迟来解释、礼貌同框或空白离校决定。

校验目标已满足：

- `act7_core_event_count = 12`
- 每个事件 4 个剧情页。
- 每个事件 1 个二方向选择窗口。
- `route_switch_allowed = false`
- `source_docs` 中引用的文件均存在。

后续路线接入应继续先写各自路线细稿，再接正式 JSON；不得把陆沉线的旧书、勤工和迟来解释直接替换名字后复用。

## 2026-05-21 接入记录：ACT7-LIEFLAT 摆烂线 12 事件变体细稿

`开发细稿_IF第七卷ACT7-LIEFLAT摆烂线事件变体剧情页.md` 已完成第一版。

本细稿限定为 `R5-LIEFLAT` / `POOL-R5-LIEFLAT` / `ACT7-LIEFLAT`，并继承第七卷 12 个母事件顺序：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`
- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

该变体把摆烂线结算落到系统提醒、默认最低可见、空白目录、过期入口、最低可交版、礼貌恭喜、边缘同框、没人追问和迟来私聊。所有事件仍保持 `same_mother_event = true` 与 `route_switch_allowed = false`。

后续接正式 JSON 时，应重点记录：

- `expired_entry_checked`
- `low_presence_checked`
- `lieflat_contact_scope`

这三个字段用于区分体面淡化、低存在感、迟来消息、错过和 5X 影子。

## 2026-05-21 接入记录：R5-LIEFLAT 第七卷正式 JSON

`开发数据_IF剧情页级JSON_R5-LIEFLAT_v1.json` 已完成第一版。

本文件把 `ACT7-LIEFLAT` 的 12 个同母事件变体接入正式剧情页级 JSON。它继承第七卷母事件顺序，但文本镜头、变量回声和结算温度均来自摆烂线细稿：

- 预登记由系统提醒代替人来催。
- 公开范围、毕业照授权、开题方向和三四月材料多落在默认最低范围。
- 最后一个新年目录空着，改稿拖到最低可交版，答辩后只有礼貌恭喜。
- 清寝、饭局、离校手续继续发生，但不再默认等林亦舟补一句。
- 最终温度由体面淡化、低存在感、迟来消息、错过或 5X 影子决定。

校验目标已满足：

- `act7_core_event_count = 12`
- 每个事件 4 个剧情页。
- 每个事件 1 个二方向选择窗口。
- `route_switch_allowed = false`
- `source_docs` 中引用的文件均存在。

后续路线接入应继续先写各自路线细稿，再接正式 JSON；不得把摆烂线的过期入口、低存在感和迟来私聊直接替换名字后复用。

## 2026-05-21 接入记录：ACT7-WANFENG 晚风线 12 事件变体细稿

`开发细稿_IF第七卷ACT7-WANFENG晚风线事件变体剧情页.md` 已完成第一版。

本细稿限定为 `R5-WANFENG` / `POOL-R5-WANFENG` / `ACT7-WANFENG`，并继承第七卷 12 个母事件顺序：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`
- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

该变体把晚风线结算落到语音、地铁口、毕业城市、不公开共识、私人入口、未来联系频率、答辩认真回话和到站报平安。所有事件仍保持 `same_mother_event = true` 与 `route_switch_allowed = false`。

后续接正式 JSON 时，应重点记录：

- `wanfeng_private_entry`
- `wanfeng_future_frequency`
- `wanfeng_final_contact_scope`

这三个字段用于区分继续联系、私人入口、体面分别、甜但有代价和错过。

## 2026-05-21 接入记录：R5-WANFENG 第七卷正式 JSON

`开发数据_IF剧情页级JSON_R5-WANFENG_v1.json` 已完成第一版。

本文件把 `ACT7-WANFENG` 的 12 个同母事件变体接入正式剧情页级 JSON。它继承第七卷母事件顺序，但文本镜头、变量回声和结算温度均来自晚风线细稿：

- 预登记把毕业城市和联系频率写成现实字段。
- 公开范围强调不公开共识，不把私密关系写成躲藏。
- 最后一个新年通过消息、语音和私存目录出现。
- 改稿 / 答辩与线下见面、未来频率讨论冲突。
- 毕业照、清寝、饭局和离校手续继续发生，但每个关键确认都需要处理晚风私聊和 4XX 旧桌之间的时间成本。
- 最终温度由继续联系、私人入口、体面分别、甜但有代价或错过决定。

校验目标已满足：

- `act7_core_event_count = 12`
- 每个事件 4 个剧情页。
- 每个事件 1 个二方向选择窗口。
- `route_switch_allowed = false`
- `source_docs` 中引用的文件均存在。

后续路线接入应继续先写各自路线细稿，再接正式 JSON；不得把晚风线的语音、地铁口、私人入口和到站报平安直接替换名字后复用。

## 2026-05-21 接入记录：ACT7-ROMANCE 专注感情线 12 事件变体细稿

`开发细稿_IF第七卷ACT7-ROMANCE专注感情线事件变体剧情页.md` 已完成第一版。

本细稿限定为 `R5-ROMANCE` / `POOL-R5-ROMANCE` / `ACT7-ROMANCE`，并继承第七卷 12 个母事件顺序：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`
- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

该变体把专注感情线结算落到沈嘉禾文档 / 格式 / 权限与夏知微影像 / 授权 / 私存相册两套候选分镜。所有事件仍保持 `same_mother_event = true` 与 `route_switch_allowed = false`，并要求进入时必须已有 `romance_candidate`，不得在第七卷重新摇摆双候选。

后续接正式 JSON 时，应重点记录：

- `romance_candidate`
- `candidate_private_entry`
- `candidate_final_contact_scope`

这三个字段用于区分沈嘉禾继续联系、夏知微继续联系、私人入口、体面分别、错过和甜但宿舍降温。

## 2026-05-21 接入记录：R5-ROMANCE 第七卷正式 JSON

`开发数据_IF剧情页级JSON_R5-ROMANCE_v1.json` 已完成第一版。

本文件把 `ACT7-ROMANCE` 的 12 个同母事件变体接入正式剧情页级 JSON。它继承第七卷母事件顺序，但文本镜头、变量回声和结算温度均来自专注感情线细稿：

- 预登记把候选对象的城市、考证或作品去向压成现实字段。
- 公开范围以文档署名 / 权限或照片授权 / 可见范围结算，不用亲密关系替代同意。
- 最后一个新年、清寝和站后节点都通过共享文档、旧书签、相册或未发照片形成私人入口。
- 改稿、答辩、毕业照和最后饭局都要求林亦舟说清边界，不能把沈嘉禾写成免费格式员，也不能把夏知微写成免费修图员。
- 最终温度由沈嘉禾继续联系、夏知微继续联系、私人入口、体面分别、错过或甜但宿舍降温决定。

校验目标已满足：

- `act7_core_event_count = 12`
- 每个事件 4 个剧情页。
- 每个事件 1 个二方向选择窗口。
- `route_switch_allowed = false`
- `source_docs` 中引用的文件均存在。

后续路线接入应继续先写各自路线细稿，再接正式 JSON；不得把专注感情线的候选对象镜头改名后复用到晚风线、工作线或三室友线。

## 2026-05-21 接入记录：ACT7-WORK 工作线 12 事件变体细稿

`开发细稿_IF第七卷ACT7-WORK工作线事件变体剧情页.md` 已完成第一版。

本细稿限定为 `R4-WORK` / `POOL-R4-WORK` / `ACT7-WORK`，并继承第七卷 12 个母事件顺序：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`
- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

该变体把工作线结算落到工时、工资、请假、证明、饭卡、打印小票、夜班疲惫、AA、交通费和现实流程。所有事件仍保持 `same_mother_event = true` 与 `route_switch_allowed = false`，并要求工作线不得写成苦情线、励志线、陆沉线或 5X 新圈子入口。

后续接正式 JSON 时，应重点记录：

- `shift_boundary_checked`
- `work_certificate_status`
- `wage_confirmed`
- `work_final_contact_scope`

这四个字段用于区分独立处理、体面距离、错过饭局、家庭压力说开和低频联系。

## 2026-05-21 接入记录：R4-WORK 第七卷正式 JSON

`开发数据_IF剧情页级JSON_R4-WORK_v1.json` 已完成第一版。

本文件把 `ACT7-WORK` 的 12 个同母事件变体接入正式剧情页级 JSON。它继承第七卷母事件顺序，但文本镜头、变量回声和结算温度均来自工作线细稿：

- 预登记把工时、联系方式、工资确认和家庭备注压成现实字段。
- 公开范围围绕工资截图、请假说明和证明材料展开，不把现实压力写成卖惨。
- 最后一个新年、清寝和站后节点通过工时表、旧饭卡、打印小票、工资确认和班后消息形成私人入口。
- 开题、三四月事项、改稿、答辩和毕业照都要求林亦舟在毕业流程和排班之间说清边界。
- 最终温度由独立处理、体面距离、错过饭局、家庭压力说开或低频联系决定。

校验目标已满足：

- `act7_core_event_count = 12`
- 每个事件 4 个剧情页。
- 每个事件 1 个二方向选择窗口。
- `route_switch_allowed = false`
- `source_docs` 中引用的文件均存在。

后续路线接入应继续先写各自路线细稿，再接正式 JSON；不得把工作线的工时、工资确认和证明材料改名后复用到陆沉线、摆烂线或 5X。

## 2026-05-21 接入记录：ACT7-A3 活动父池 12 事件变体细稿

`开发细稿_IF第七卷ACT7-A3活动父池事件变体剧情页.md` 已完成第一版。

本细稿限定为 `A3-ACTIVITY-PUBLIC` / `POOL-A3-ACTIVITY-PUBLIC` / `ACT7-A3`，并继承第七卷 12 个母事件顺序：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`
- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

该变体把活动父池结算落到活动联系人、公开材料、采访署名、照片授权、活动证明、活动物料、候选来源、总结会撞期和毕业后联系范围。所有事件仍保持 `same_mother_event = true` 与 `route_switch_allowed = false`，并要求 A3 不得直接写成 `R3-PERFECT`、`R5-ROMANCE`、`R5X-HARD` 或第七卷重新横跳所有社团。

后续接正式 JSON 时，应重点记录：

- `a3_contact_scope_checked`
- `a3_public_scope`
- `activity_certificate_status`
- `activity_image_scope_checked`
- `a3_final_contact_scope`

这五个字段用于区分公开信用、候选开放、压力扩散、回寝、低可见和完美种子。

## 2026-05-21 接入记录：A3-ACTIVITY-PUBLIC 第七卷正式 JSON

`开发数据_IF剧情页级JSON_A3-ACTIVITY-PUBLIC_v1.json` 已完成第一版。

本文件把 `ACT7-A3` 的 12 个同母事件变体接入正式剧情页级 JSON。它继承第七卷母事件顺序，但文本镜头、变量回声和结算温度均来自活动父池细稿：

- 预登记把活动联系人和毕业联系人分开，避免活动群成为默认毕业联系口。
- 公开范围围绕采访署名、活动材料、照片授权和候选来源展开，不把私事塞进公开场。
- 最后一个新年、毕业照和清寝节点都通过活动归档、图包、挂绳、节目单和 4XX 旧物形成边界判断。
- 开题、三四月事项、改稿、答辩和离校手续都要求林亦舟把活动信用、论文流程和本人签收分开。
- 最终温度由公开信用、候选开放、压力扩散、回寝、低可见或完美种子决定。

校验目标已满足：

- `act7_core_event_count = 12`
- 每个事件 4 个剧情页。
- 每个事件 1 个二方向选择窗口。
- `route_switch_allowed = false`
- `source_docs` 中引用的文件均存在。

后续路线接入应继续先写各自路线细稿，再接正式 JSON；不得把 A3 的活动联系人、公开署名和候选来源改名后复用成 `R3-PERFECT` 或 `R5X-HARD`。

## 2026-05-21 接入记录：ACT7-PERFECT 完美子外流 12 事件变体细稿

`开发细稿_IF第七卷ACT7-PERFECT完美子外流事件变体剧情页.md` 已完成第一版。

本细稿限定为 `R3-PERFECT` / `POOL-R3-PERFECT` / `ACT7-PERFECT`，并继承第七卷 12 个母事件顺序：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`
- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

该变体把完美线结算落到公开信用、职责范围、停止条件、被默认兜底、私人解释延后、清单冷化和毕业后安静边界。所有事件仍保持 `same_mother_event = true` 与 `route_switch_allowed = false`，并要求完美线不得写成奖状线、正确线、唐骁线、A3 父池重开或感情线替代。

后续接正式 JSON 时，应重点记录：

- `scope_clarity`
- `tooling_risk`
- `private_delay`
- `private_blank_seen`
- `handoff_scope_checked`
- `perfect_contact_scope`

这些字段用于区分公开清楚、工具化、体面低温、迟来私人话、低温和安静边界。

## 2026-05-21 接入记录：R3-PERFECT 第七卷正式 JSON

`开发数据_IF剧情页级JSON_R3-PERFECT_v1.json` 已完成第一版。

本文件把 `ACT7-PERFECT` 的 12 个同母事件变体接入正式剧情页级 JSON。它继承第七卷母事件顺序，但文本镜头、变量回声和结算温度均来自完美子外流细稿：

- 预登记表格最清楚，但私人联系人一栏最难写。
- 公开范围、署名、授权和停止条件都清楚，却也让他继续被默认兜底。
- 最后一个新年、毕业照和清寝节点都通过整齐目录、流程照片、清寝清单和私人空格形成低温判断。
- 开题、三四月事项、改稿、答辩和离校手续都要求林亦舟把职责范围、交接人和停止默认写清。
- 最终温度由公开清楚、工具化、体面低温、迟来私人话、低温或安静边界决定。

校验目标已满足：

- `act7_core_event_count = 12`
- 每个事件 4 个剧情页。
- 每个事件 1 个二方向选择窗口。
- `route_switch_allowed = false`
- `source_docs` 中引用的文件均存在。

后续路线接入应继续先写各自路线细稿，再接正式 JSON；不得把完美线的清单、公开信用和工具化代价改名后复用成 5X 硬外流。

## 2026-05-21 接入记录：ACT7-R5X 唯一硬外流 12 事件变体细稿

`开发细稿_IF第七卷ACT7-R5X唯一硬外流事件变体剧情页.md` 已完成第一版。

本细稿限定为 `R5X-HARD` / `POOL-R5X-HARD` / `ACT7-R5X`，并继承第七卷 12 个母事件顺序：

- `ACT7-E01-PRE-REGISTER`
- `ACT7-E02-PUBLIC-SCOPE`
- `ACT7-E03-LAST-NEW-YEAR`
- `ACT7-E04-THESIS-TOPIC`
- `ACT7-E05-MARCH-QUEUE`
- `ACT7-E06-THESIS-REVISION`
- `ACT7-E07-DEFENSE`
- `ACT7-E08-GRAD-PHOTO`
- `ACT7-E09-DORM-CLEAR`
- `ACT7-E10-LAST-MEAL`
- `ACT7-E11-LEAVING-PAPERS`
- `ACT7-E12-STATION-AFTER`

该变体把 5X 硬外流结算落到旧群越来越短、新圈轻陪但不懂旧项目、许澈保持边界、旧物不进门、饭局不回线、删除置顶和站台空白。所有事件仍保持 `same_mother_event = true` 与 `route_switch_allowed = false`，并要求 R5X 不得写成惩罚线、奖励线、许澈救援线或第七卷回旧线。

后续接正式 JSON 时，应重点记录：

- `new_circle_truth`
- `thin_relation`
- `old_dorm_distance`
- `message_cut`
- `soft_passing`
- `xuche_boundary_seen`
- `old_message_sent`
- `deleted_pin`
- `5x_regret`

这些字段用于区分轻陪、薄关系、旧线距离、消息切断、软通过、边界看见、旧消息未回、置顶删除和不可逆感。

## 2026-05-21 接入记录：R5X-HARD 第七卷正式 JSON

`开发数据_IF剧情页级JSON_R5X-HARD_v1.json` 已完成第一版。

本文件把 `ACT7-R5X` 的 12 个同母事件变体接入正式剧情页级 JSON。它继承第七卷母事件顺序，但文本镜头、变量回声和结算温度均来自唯一硬外流细稿：

- 预登记、公开范围、开题、三四月事项和答辩都只保最低本人流程，不打开旧线完整修补。
- 最后一个新年、毕业照、清寝、最后饭局和武生院站都允许旧人或旧群出现，但只能是软照面、短句、旧消息或沉下去的置顶。
- 新圈可以轻松、真实、好相处，但必须保持薄、快、散，不替代宿舍、爱情或母本主线。
- 许澈必须保留边界，不写成拯救者、新男主或稳定替代答案。
- 最终温度由清醒离开、薄圈散场、许澈边界、旧消息、删除置顶或站台空白决定。

校验目标已满足：

- `act7_core_event_count = 12`
- 每个事件 4 个剧情页。
- 每个事件 1 个二方向选择窗口。
- `route_switch_allowed = false`
- `hard_outflow = true`
- `source_docs` 中引用的文件均存在。

至此第七卷横向结算的主要路线 JSON 接入可以进入总审计；后续不得为了补 5X 遗憾而在第七卷临时回开旧路线。

## 2026-05-21 审计记录：IF 第七卷 ACT7 横向 JSON 收口

已完成 11 条正式 JSON 的横向一致性审计：

- `DEFAULT-4XX`
- `R5-ZHOU`
- `R5-TANG`
- `R5-LUCHEN`
- `R5-LIEFLAT`
- `R5-WANFENG`
- `R5-ROMANCE`
- `R4-WORK`
- `A3-ACTIVITY-PUBLIC`
- `R3-PERFECT`
- `R5X-HARD`

统一规则：

- 每条路线必须覆盖 `ACT7-E01-PRE-REGISTER` 至 `ACT7-E12-STATION-AFTER`。
- 每个事件必须保留 4 个剧情页、1 个二方向选择窗口。
- 每条路线第七卷均禁止重新开完整路线，`route_switch_allowed = false`。
- 边界链统一为 `ACT6-END -> ACT7-E01...E12 -> 路线ENDING`。
- `source_docs` 必须指向仓库内真实存在的依据文件。

本轮审计结果全部通过：11/11 JSON 可解析，事件数、页数、方向数、前后事件链、换线锁和 `source_docs` 均无缺口。
