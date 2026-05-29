window.R4WorkAct45SimData = {
  "route": "R4-WORK",
  "pool": "POOL-R4-WORK",
  "source": "formal-json:act4_detail_blocks + act5_detail_blocks + act4_to_act5_carryover_rules",
  "generatedAt": "2026-05-28",
  "act4Blocks": [
    {
      "id": "ACT4-WORK-L01",
      "title": "空宿舍与暑假分流",
      "guide": "晚风在光谷，母亲在电话里，勤工表摊在公共桌上。周屿和唐骁走后，4XX 安静得像在等你把暑假填进某一格。",
      "options": [
        {
          "key": "A",
          "label": "先接住家里的那通电话",
          "detail": "先回母亲，把父亲到站时间和明天车次落到备忘录里。晚风和勤工不会消失，只是先往后挪。",
          "directionId": "ACT4-WORK-L01-C01-A",
          "next": "ACT4-WORK-L02",
          "variableDelta": {
            "family_responsibility": 1,
            "time_debt": 1,
            "old_debt": 1,
            "act5_echo_hook": "r4_empty_dorm_family_call_first"
          },
          "act5EchoHook": "r4_empty_dorm_family_call_first",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01",
              "ACT5-WORK-B05"
            ],
            "carriedVariables": [
              "family_responsibility",
              "time_debt",
              "old_debt"
            ],
            "realization": "家庭电话先被接住，进入第五幕后只作为联系人、晚归解释和旧账压力，不打开家庭线。"
          }
        },
        {
          "key": "B",
          "label": "先问清勤工值班怎么排",
          "detail": "先问清材料、时间和能不能换班，把勤工表从消息变成可执行流程。",
          "directionId": "ACT4-WORK-L01-C01-B",
          "next": "ACT4-WORK-L02",
          "variableDelta": {
            "work_rule_clarity": 1,
            "work_shift_seed": 1,
            "reality_order_visible": 1,
            "act5_echo_hook": "r4_empty_dorm_radius_split_work_first"
          },
          "act5EchoHook": "r4_empty_dorm_radius_split_work_first",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01",
              "ACT5-WORK-B04"
            ],
            "carriedVariables": [
              "work_rule_clarity",
              "work_shift_seed",
              "reality_order_visible"
            ],
            "realization": "勤工值班先被问清，进入第五幕后优先兑现为晚班名单、固定班和工作生活半径。"
          }
        },
        {
          "key": "C",
          "label": "给晚风一个明确答复",
          "detail": "先告诉晚风光谷不能按原时间，让等待有一句明确回复。",
          "directionId": "ACT4-WORK-L01-C01-C",
          "next": "ACT4-WORK-L02",
          "variableDelta": {
            "wanfeng_trust": 1,
            "wanfeng_delay": 1,
            "relationship_truth": 1,
            "act5_echo_hook": "r4_empty_dorm_wanfeng_time_notice"
          },
          "act5EchoHook": "r4_empty_dorm_wanfeng_time_notice",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B02"
            ],
            "carriedVariables": [
              "wanfeng_trust",
              "wanfeng_delay",
              "relationship_truth"
            ],
            "realization": "晚风收到明确答复，第五幕后只保留短时照面和具体时间，不打开晚风完整线。"
          }
        }
      ]
    },
    {
      "id": "ACT4-WORK-L02",
      "title": "生活费与退改规则",
      "guide": "父亲在站外，母亲催票，晚风也在等具体时间。退改规则已经不只是票页小字，而是你接下来要怎么安排这一天。",
      "options": [
        {
          "key": "A",
          "label": "先把父亲那边定下来",
          "detail": "先把父亲到站时间和能停多久说清楚，不让见面变成临时擦肩。",
          "directionId": "ACT4-WORK-L02-C02-A",
          "next": "ACT4-WORK-L03",
          "variableDelta": {
            "wanfeng_trust": 1,
            "intimacy_pressure": 1,
            "money_pressure": 1,
            "act5_echo_hook": "r4_refund_rule_keep_meeting_cost"
          },
          "act5EchoHook": "r4_refund_rule_keep_meeting_cost",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B02",
              "ACT5-WORK-B03"
            ],
            "carriedVariables": [
              "wanfeng_trust",
              "intimacy_pressure",
              "money_pressure"
            ],
            "realization": "退改成本被看见，第五幕后在私人联系和证明材料里兑现为钱压与时间压。"
          }
        },
        {
          "key": "B",
          "label": "先把勤工和花费算清",
          "detail": "先把车票、饭卡、打印费和勤工可换的钱算在一页上，再决定光谷和窗口怎么排。",
          "directionId": "ACT4-WORK-L02-C02-B",
          "next": "ACT4-WORK-L03",
          "variableDelta": {
            "basic_cost_clear": 1,
            "work_shift_seed": 1,
            "route_order_visible": 1,
            "act5_echo_hook": "r4_refund_rule_cost_to_work"
          },
          "act5EchoHook": "r4_refund_rule_cost_to_work",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01",
              "ACT5-WORK-B04"
            ],
            "carriedVariables": [
              "basic_cost_clear",
              "work_shift_seed",
              "route_order_visible"
            ],
            "realization": "花费被算清，第五幕后优先落到晚班和固定排班。"
          }
        },
        {
          "key": "C",
          "label": "先把预算和时间说成实话",
          "detail": "不把同一句话复制给三个人，分别说清车票、站口、路费和光谷会被影响。",
          "directionId": "ACT4-WORK-L02-C02-C",
          "next": "ACT4-WORK-L03",
          "variableDelta": {
            "relationship_truth": 1,
            "parent_pressure_visible": 1,
            "money_pressure_visible": 1,
            "act5_echo_hook": "r4_refund_rule_budget_explained"
          },
          "act5EchoHook": "r4_refund_rule_budget_explained",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B02",
              "ACT5-WORK-B03"
            ],
            "carriedVariables": [
              "relationship_truth",
              "parent_pressure_visible",
              "money_pressure_visible"
            ],
            "realization": "预算和时间被说成实话，第五幕后兑现为短时照面和材料说明。"
          }
        }
      ]
    },
    {
      "id": "ACT4-WORK-L03",
      "title": "站外半小时与家庭现金",
      "guide": "父亲留下的现金、母亲的语音和成绩通知同时落在手边。钱能先补缺口，也会把没说清的事压进后面。",
      "options": [
        {
          "key": "A",
          "label": "问清这笔钱从哪里来",
          "detail": "先问父亲和母亲这笔钱从哪里挤出来，不把五百块只当成普通生活费。",
          "directionId": "ACT4-WORK-L03-C03-A",
          "next": "ACT4-WORK-L04",
          "variableDelta": {
            "family_signal": 1,
            "money_pressure": 1,
            "old_debt_seen": 1,
            "family_truth_probe": 3,
            "family_basic_truth": 1,
            "relationship_truth": 1,
            "family_pressure": 1,
            "parent_worry": 1,
            "family_responsibility": 1,
            "work_hint_to_family": 1,
            "act5_echo_hook": "r4_station_cash_family_gap_named"
          },
          "act5EchoHook": "r4_station_cash_family_gap_named",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01",
              "ACT5-WORK-B03"
            ],
            "carriedVariables": [
              "family_signal",
              "money_pressure",
              "old_debt_seen"
            ],
            "realization": "父亲现金的缺口被命名，第五幕后作为钱压和联系人顺序的低温回声。"
          }
        },
        {
          "key": "B",
          "label": "先把钱收进饭卡和车票",
          "detail": "先把饭卡、车票和打印费稳住，家里没说清的部分暂时压进资料袋。",
          "directionId": "ACT4-WORK-L03-C03-B",
          "next": "ACT4-WORK-L04",
          "variableDelta": {
            "money_pressure": -1,
            "old_debt": 2,
            "minimum_truth": 1,
            "daily_stability": 1,
            "study_repair": 1,
            "family_debt_attached_to_study": 1,
            "dorm_misread": 1,
            "work_shift_seed": 1,
            "family_basic_truth": 1,
            "face_pressure": 1,
            "act5_echo_hook": "r4_station_cash_debt_deferred"
          },
          "act5EchoHook": "r4_station_cash_debt_deferred",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B03",
              "ACT5-WORK-B05"
            ],
            "carriedVariables": [
              "old_debt",
              "daily_stability",
              "study_repair"
            ],
            "realization": "钱被先放进饭卡车票，第五幕后兑现为证明材料和第一周清单里的旧账。"
          }
        },
        {
          "key": "C",
          "label": "先问勤工窗口还能不能接",
          "detail": "把勤工窗口问清楚，让父亲留下的钱不再是唯一能补缺口的办法。",
          "directionId": "ACT4-WORK-L03-C03-C",
          "next": "ACT4-WORK-L04",
          "variableDelta": {
            "work_route": 1,
            "luchen_reality_link": 1,
            "work_rule_clarity": 1,
            "work_certificate_seed": 1,
            "work_shift_seed": 2,
            "time_debt": 1,
            "study_boundary": 1,
            "act5_echo_hook": "r4_station_cash_to_work_route"
          },
          "act5EchoHook": "r4_station_cash_to_work_route",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01",
              "ACT5-WORK-B03"
            ],
            "carriedVariables": [
              "work_route",
              "work_certificate_seed",
              "work_shift_seed"
            ],
            "realization": "现金压力转向勤工窗口，第五幕后兑现为排班入口和勤工证明。"
          }
        }
      ]
    },
    {
      "id": "ACT4-WORK-L04",
      "title": "补考与打印店",
      "guide": "补考资料、打印店、C201 和勤工窗口挤在同一个下午。哪件事先被接住，哪件事就会被推迟。",
      "options": [
        {
          "key": "A",
          "label": "先把补考资料补齐",
          "detail": "先把 C201、资料包和错题表补齐，别让补考在勤工排班里被挤掉。",
          "directionId": "ACT4-WORK-L04-C04-A",
          "next": "ACT4-WORK-L05",
          "variableDelta": {
            "study_pressure": 1,
            "work_certificate_seed": 1,
            "tang_material_support": 1,
            "luchen_reality_link": 2,
            "study_repair": 2,
            "c201_route_confirmed": 1,
            "work_window_missed": 1,
            "self_boundary": 1,
            "time_debt": 1,
            "work_debt_visible": 1,
            "old_debt": 1,
            "act5_echo_hook": "study_before_shift_once"
          },
          "act5EchoHook": "study_before_shift_once",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B03"
            ],
            "carriedVariables": [
              "study_pressure",
              "work_certificate_seed",
              "study_repair"
            ],
            "realization": "补考资料先被补齐，第五幕后兑现为材料窗口、证明和可提交边界。"
          }
        },
        {
          "key": "B",
          "label": "先回勤工群接下临时班",
          "detail": "先接下周四窗口班，把能换成饭钱的时间从聊天记录里落到排班表上。",
          "directionId": "ACT4-WORK-L04-C04-B",
          "next": "ACT4-WORK-L05",
          "variableDelta": {
            "work_shift_seed": 3,
            "public_boundary": 1,
            "work_rule_clarity": 1,
            "study_debt": 1,
            "work_certificate_seed": 1,
            "study_boundary": 1,
            "act5_echo_hook": "shift_before_review"
          },
          "act5EchoHook": "shift_before_review",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01",
              "ACT5-WORK-B04"
            ],
            "carriedVariables": [
              "work_shift_seed",
              "work_rule_clarity",
              "study_debt"
            ],
            "realization": "临时班先被接下，第五幕后兑现为固定班倾向和学习债务。"
          }
        },
        {
          "key": "C",
          "label": "先把今天白天会去哪儿说清",
          "detail": "把 C201、打印店和窗口顺序分别说清，别让几个人只靠猜他的白天。",
          "directionId": "ACT4-WORK-L04-C04-C",
          "next": "ACT4-WORK-L05",
          "variableDelta": {
            "relationship_truth_seed": 1,
            "public_boundary": 2,
            "family_basic_truth": 1,
            "wanfeng_soft_echo": 1,
            "dorm_warmth": 1,
            "repair_depth": 1,
            "minimum_truth": 1,
            "relationship_truth": 1,
            "reality_order_visible": 1,
            "time_debt": -1,
            "act5_echo_hook": "minimum_fact_given_before_absence"
          },
          "act5EchoHook": "minimum_fact_given_before_absence",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B02",
              "ACT5-WORK-B05"
            ],
            "carriedVariables": [
              "relationship_truth_seed",
              "public_boundary",
              "wanfeng_soft_echo"
            ],
            "realization": "最低事实先被说明，第五幕后兑现为不失联、不回避的边界。"
          }
        }
      ]
    },
    {
      "id": "ACT4-WORK-L05",
      "title": "返校前两间教室与座位表",
      "guide": "座位表、补考、窗口和 4XX 的视线都在场。你可以让自己被看见，也可以先保住材料和流程。",
      "options": [
        {
          "key": "A",
          "label": "坐回 4XX 看得见的位置",
          "detail": "坐回 4XX 能看见的位置，让补考和窗口安排不再只藏在文件袋里。",
          "directionId": "ACT4-WORK-L05-C05-A",
          "next": "ACT4-WORK-L06",
          "variableDelta": {
            "dorm_warmth_seed": 1,
            "public_boundary": 2,
            "repair_depth": 2,
            "dorm_warmth": 3,
            "self_boundary": 1,
            "dorm_misread": 0,
            "minimum_truth": 1,
            "dorm_repair": 1,
            "act5_echo_hook": "r4_visible_seat_dorm_can_ask"
          },
          "act5EchoHook": "r4_visible_seat_dorm_can_ask",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01",
              "ACT5-WORK-B05"
            ],
            "carriedVariables": [
              "dorm_warmth",
              "public_boundary",
              "dorm_repair"
            ],
            "realization": "4XX 仍能问他，第五幕后兑现为宿舍低温照面，不回默认宿舍线。"
          }
        },
        {
          "key": "B",
          "label": "坐到后排，先处理资料",
          "detail": "先坐到后排靠门，把资料、打印和窗口时间处理完，再决定怎么面对 4XX。",
          "directionId": "ACT4-WORK-L05-C05-B",
          "next": "ACT4-WORK-L06",
          "variableDelta": {
            "work_window_ready": 1,
            "dorm_misread": 2,
            "minimum_support": 1,
            "work_efficiency": 1,
            "public_boundary": 1,
            "tang_material_support": 1,
            "act5_echo_hook": "r4_back_seat_window_first"
          },
          "act5EchoHook": "r4_back_seat_window_first",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B03",
              "ACT5-WORK-B04"
            ],
            "carriedVariables": [
              "work_window_ready",
              "dorm_misread",
              "tang_material_support"
            ],
            "realization": "后排和窗口优先，第五幕后兑现为材料/项目优先，但宿舍误读升高。"
          }
        },
        {
          "key": "C",
          "label": "先去明德楼跑完窗口",
          "detail": "下课先去明德楼窗口，把回执和补材料要求带回公共桌。",
          "directionId": "ACT4-WORK-L05-C05-C",
          "next": "ACT4-WORK-L06",
          "variableDelta": {
            "work_route": 1,
            "work_certificate_seed": 1,
            "work_rule_clarity": 1,
            "public_boundary": 1,
            "dorm_misread": -1,
            "relationship_truth": 1,
            "luchen_reality_link": 1,
            "act5_echo_hook": "r4_window_result_back_to_dorm"
          },
          "act5EchoHook": "r4_window_result_back_to_dorm",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01",
              "ACT5-WORK-B03"
            ],
            "carriedVariables": [
              "work_route",
              "work_certificate_seed",
              "public_boundary"
            ],
            "realization": "明德楼窗口先跑完，第五幕后兑现为工作入口和证明材料。"
          }
        }
      ]
    },
    {
      "id": "ACT4-WORK-L06",
      "title": "联系人与签字",
      "guide": "兼职、留校、联系人和本人签字被放在同一页。写下去的不是答案，而是明天还会被晚班、补说明和群消息逐项核对的事实。",
      "options": [
        {
          "key": "A",
          "label": "把兼职和留校都如实填上",
          "detail": "把兼职、留校和联系人都填上，由自己在 B204 签字确认。",
          "directionId": "ACT4-WORK-L06-C06-A",
          "next": "ACT5-WORK-B01",
          "variableDelta": {
            "route_boundary": 1,
            "work_route": 1,
            "public_boundary": 1,
            "work_certificate_seed": 1,
            "time_debt": -1,
            "family_signal": 1,
            "act5_echo_hook": "r4_contact_self_signed_to_work_entry"
          },
          "act5EchoHook": "r4_contact_self_signed_to_work_entry",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01"
            ],
            "carriedVariables": [
              "route_boundary",
              "work_route",
              "work_certificate_seed"
            ],
            "realization": "兼职和留校本人签字，第五幕 B01 必须从晚班后补说明和排班缺席进入。"
          }
        },
        {
          "key": "B",
          "label": "先只填留校和宿舍号",
          "detail": "先填留校和宿舍号，把未确定的窗口说明留到后面补。",
          "directionId": "ACT4-WORK-L06-C06-B",
          "next": "ACT5-WORK-B01",
          "variableDelta": {
            "old_debt": 3,
            "work_window_pending": 2,
            "public_boundary": 1,
            "work_rule_clarity": 1,
            "family_signal": 1,
            "act5_echo_hook": "r4_contact_stay_only_detail_debt"
          },
          "act5EchoHook": "r4_contact_stay_only_detail_debt",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01",
              "ACT5-WORK-B03"
            ],
            "carriedVariables": [
              "old_debt",
              "work_window_pending",
              "work_rule_clarity"
            ],
            "realization": "只填留校造成工作细节债，第五幕后兑现为补说明、证明材料和解释成本。"
          }
        },
        {
          "key": "C",
          "label": "先问清联系人顺序再保存",
          "detail": "先问父母谁能接学校电话，再把联系人顺序保存下来。",
          "directionId": "ACT4-WORK-L06-C06-C",
          "next": "ACT5-WORK-B01",
          "variableDelta": {
            "family_signal": 1,
            "relationship_truth_seed": 1,
            "family_truth_probe": 1,
            "family_basic_truth": 2,
            "relationship_truth": 2,
            "face_pressure": 1,
            "family_pressure": 1,
            "time_debt": -1,
            "family_face_repair": 1,
            "act5_echo_hook": "r4_contact_parent_order_confirmed"
          },
          "act5EchoHook": "r4_contact_parent_order_confirmed",
          "carryover": {
            "targetBlocks": [
              "ACT5-WORK-B01",
              "ACT5-WORK-B05"
            ],
            "carriedVariables": [
              "family_signal",
              "family_basic_truth",
              "face_pressure"
            ],
            "realization": "联系人顺序已确认，第五幕后兑现为家庭低温回声和本人签字边界。"
          }
        }
      ]
    }
  ],
  "act5Blocks": [
    {
      "id": "ACT5-WORK-B01",
      "title": "宿舍站队从排班缺席开始",
      "sceneFunction": "宿舍站队从排班缺席开始",
      "prelude": [
        {
          "title": "青枫居 4XX / 晚班后补说明",
          "location": "青枫居 4XX",
          "paragraphs": [
            "签完暑假去向登记以后，4XX 安静了几天。",
            "透明文件夹被塞回书架，黑色签字笔滚到公共桌边角，没人再提 B204 那一笔本人签字。林亦舟也以为，兼职 / 留校说明暂时只是系统里多出来的一行字。",
            "周五下午，这一行字先从快递站群里亮起来。",
            "负责人发了晚班试岗名单，林亦舟的名字排在第三个，后面写着：19:20 前到岗，带身份证复印件。",
            "他还没来得及回，唐骁推门进来，把 C407 分工表放到桌上：“今晚把现场分工过一遍。”",
            "周屿拎着水杯从阳台回来，扫了一眼表格：“今晚？林亦舟不是也在吗？”",
            "唐骁没有马上接。他看见林亦舟手机屏幕上的快递站名单，笔尖停在分工表最后一栏。",
            "那一栏还空着。"
          ]
        },
        {
          "title": "快递站 / 排班表",
          "location": "快递站",
          "paragraphs": [
            "林亦舟下楼去快递站确认。",
            "负责人把纸质排班表夹进透明板，指了指他的名字：“你留校说明过了，今晚先试第一班。”",
            "工资不高，但能按周结一部分，够补掉打印费和接下来几天饭钱。负责人说得很平，像在讲普通规则：“证件复印件带齐。真有事提前讲，别到了点才不来。”",
            "林亦舟点头。",
            "手机在这时亮了一下。",
            "唐骁：今晚 C407 要把分工表定下来。",
            "后面跟着一句：你那栏我先空着。",
            "林亦舟握着笔，笔尖在排班表上停了两秒。",
            "负责人把复印件要求写到他名字后面，又把排班表夹回透明板里。",
            "林亦舟把学生证复印件收进包侧，手机又震了一下。唐骁没有催第二句，只发来一张照片：C407 分工表最后一栏空着，纸角被压在一只装线材的纸箱下面。",
            "他站在快递站门口看完那张照片。楼梯间的风从上面灌下来，带着一点纸箱和旧设备的灰味。"
          ]
        }
      ],
      "choice": {
        "title": "六点五十五，先把哪一句送出去？",
        "guide": "4XX 的门半开着，C407 的分工表还空着一栏，快递站七点半点名。林亦舟已经亲手把兼职 / 留校说明签进系统，今晚第一次要把这份签字带回真实的人面前。",
        "options": [
          {
            "key": "A",
            "label": "先在群里写清晚班时间和 C407 能交的部分",
            "detail": "人先去快递站，但今晚几点回来、C407 能交什么，先别让别人替你猜。",
            "directionId": "ACT5-WORK-C01-A",
            "next": "ACT5-WORK-B02",
            "variableDelta": {
              "work_shift": 1,
              "dorm_absence": 1,
              "public_boundary": 1,
              "act5_required_windows_seen": "dorm_stand",
              "act6_echo_hook": "ACT6-WORK-B01-shift-fact"
            },
            "act6EchoHook": "ACT6-WORK-B01-shift-fact",
            "requiredWindow": "dorm_stand"
          },
          {
            "key": "B",
            "label": "先去问能不能请半小时，再回 4XX 当面说",
            "detail": "第一班就请假会留下成本，但至少这次把钱压和缺席当面落下。",
            "directionId": "ACT5-WORK-C01-B",
            "next": "ACT5-WORK-B02",
            "variableDelta": {
              "dorm_warmth": 1,
              "money_pressure": 1,
              "shift_boundary_checked": true,
              "act5_required_windows_seen": "dorm_stand",
              "act6_echo_hook": "ACT6-WORK-B01-repair-entry"
            },
            "act6EchoHook": "ACT6-WORK-B01-repair-entry",
            "requiredWindow": "dorm_stand"
          },
          {
            "key": "C",
            "label": "先进门说今晚有晚班，家里的事先不展开",
            "detail": "先承认缺席，不把父亲、生活费和补考打印费全摊开。",
            "directionId": "ACT5-WORK-C01-C",
            "next": "ACT5-WORK-B02",
            "variableDelta": {
              "family_signal": 1,
              "dorm_misread": 1,
              "public_boundary": 1,
              "act5_required_windows_seen": "dorm_stand",
              "act6_echo_hook": "ACT6-WORK-B01-known-fact-unknown-reason"
            },
            "act6EchoHook": "ACT6-WORK-B01-known-fact-unknown-reason",
            "requiredWindow": "dorm_stand"
          }
        ]
      }
    },
    {
      "id": "ACT5-WORK-B02",
      "title": "亲密 / 晚风只能短时照面",
      "sceneFunction": "亲密 / 晚风只能短时照面",
      "prelude": [
        {
          "title": "快递站后门 / 下班后的消息",
          "location": "快递站后门",
          "paragraphs": [
            "第二次晚班结束时，快递站后门只剩半卷胶带和一筐退回件。",
            "负责人把卷帘门拉下一半，提醒新同学把扫码枪放回充电座。林亦舟最后核对了一遍筐号，才发现手背上蹭了一道黑色快递墨。他去水池边冲了两下，墨没完全掉，只淡成一条灰线。",
            "手机在这时亮起来。",
            "晚风：下班后还回吗？",
            "消息下面还有一张截图。光谷那边的活动临时改到周日晚，页面底部写着“入场时间以现场为准”。她没有问他来不来，只把新的时间发给他看。",
            "林亦舟看了很久。",
            "上一条 4XX 群消息还停在十分钟前。周屿问他今晚几点回，唐骁把 C407 的材料截止时间往后顺了一格，陆沉只发了一个宿舍门禁截图。",
            "快递站后门的灯很白，照得手机屏幕发亮。林亦舟把那张截图存下来，卷帘门在身后落到一半，他从侧门绕出去，东区商业街的灯已经亮了。"
          ]
        },
        {
          "title": "东区商业街 / 散场的人",
          "location": "东区商业街",
          "paragraphs": [
            "林亦舟绕到东区商业街时，已经快十点。",
            "路边的奶茶店还亮着，两个女生抱着活动立牌往外走，立牌边角被风吹得轻轻拍在纸袋上。有人在门口分剩下的荧光手环，手环没发完，堆在透明盒里，一闪一闪。",
            "晚风又发来一句：如果你周日还要上班，我可以只在出口等一会儿。",
            "这句话比“你来不来”更难回。",
            "来不来还像一个选项。等一会儿就变成了时间：她会站在哪里、等多久、他是不是又要用“下班晚”把这段时间糊过去。",
            "林亦舟把手机握在手里，屏幕自动暗下去，又被下一条消息点亮。",
            "唐骁：C407 的说明页明早八点前给我。",
            "周屿：你别又到楼下才说自己回来了。",
            "晚风那张截图还在最上面。下一秒，4XX 群的新消息把截图顶下去半截；他往下滑，又看见唐骁那句说明页。屏幕亮着，像把几张纸叠在他掌心。",
            "电量只剩 7%。他把手机攥紧，往便利店门口走。"
          ]
        }
      ],
      "choice": {
        "title": "今晚这条消息，先怎么回？",
        "guide": "晚风把光谷时间发来，4XX 还在问他几点回，快递站排班表也刚塞进包里。林亦舟现在能给出的不是承诺，而是今晚和周日各自能落在哪一格。",
        "options": [
          {
            "key": "A",
            "label": "把今晚回寝和周日可见时间都说清楚",
            "detail": "告诉晚风今晚几点回、周日如果能去光谷只能留多久，让她知道自己在等哪一段。",
            "directionId": "ACT5-WORK-C02-A",
            "next": "ACT5-WORK-B03",
            "variableDelta": {
              "work_private_entry": 1,
              "wanfeng_distance": 1,
              "act5_required_windows_seen": "intimacy_or_wanfeng",
              "act6_echo_hook": "ACT6-WORK-B04-wanfeng-low-frequency"
            },
            "act6EchoHook": "ACT6-WORK-B04-wanfeng-low-frequency",
            "requiredWindow": "intimacy_or_wanfeng"
          },
          {
            "key": "B",
            "label": "先回一句还在晚班，周日等排班后再定",
            "detail": "不把话说满，也不让她以为自己已经排除这段关系。",
            "directionId": "ACT5-WORK-C02-B",
            "next": "ACT5-WORK-B03",
            "variableDelta": {
              "polite_distance": 1,
              "work_shift": 1,
              "act5_required_windows_seen": "intimacy_or_wanfeng",
              "act6_echo_hook": "ACT6-WORK-B04-private-entry-narrowed"
            },
            "act6EchoHook": "ACT6-WORK-B04-private-entry-narrowed",
            "requiredWindow": "intimacy_or_wanfeng"
          },
          {
            "key": "C",
            "label": "先回 4XX 报到楼下，再给晚风补具体时间",
            "detail": "让宿舍这边先落地，晚风那条消息不消失，但会晚一点。",
            "directionId": "ACT5-WORK-C02-C",
            "next": "ACT5-WORK-B03",
            "variableDelta": {
              "dorm_warmth": 1,
              "time_debt": 1,
              "act5_required_windows_seen": "intimacy_or_wanfeng",
              "act6_echo_hook": "ACT6-WORK-B01-dorm-truth-before-shift"
            },
            "act6EchoHook": "ACT6-WORK-B01-dorm-truth-before-shift",
            "requiredWindow": "intimacy_or_wanfeng"
          }
        ]
      }
    },
    {
      "id": "ACT5-WORK-B03",
      "title": "项目 / 规则 / 证明材料",
      "sceneFunction": "项目 / 规则 / 证明材料",
      "prelude": [
        {
          "title": "打印店 / 同一个文件袋",
          "location": "打印店",
          "paragraphs": [
            "周一上午，打印店的复印机卡了两次纸。",
            "店主把机盖掀开，抽出皱掉的 A4 纸，问林亦舟：“你这个是证明还是申请？章的位置不一样。”",
            "林亦舟低头看手里的文件袋。",
            "勤工值班证明、收入说明模板、补考材料回执、C407 项目分工表，还有一张晚班后补说明，全被夹在同一个透明袋里。纸页边角互相顶着，像几件原本不该挤在一起的事，被他一路从快递站、青枫居和明德楼带到这里。",
            "手机亮了一下。",
            "唐骁：C407 今天要定最终交付范围。",
            "陆沉隔了几秒也发来一条：勤工证明别让别人替你写理由，窗口只认本人说明。",
            "打印机又响了一声，吐出第一张收入说明。纸面很白，空栏也很白。林亦舟把它拿起来，夹到文件袋最外层，往明德楼走时，纸角还从拉链口露着。"
          ]
        },
        {
          "title": "明德楼材料窗口 / 本人签字",
          "location": "明德楼材料窗口",
          "paragraphs": [
            "明德楼一楼的材料窗口排着七八个人。",
            "前面有人因为少了一处本人签字，被老师退回来重填。老师把表格推出来，说得很慢：“证明可以补，说明也可以补，但不能让同学代写你的实际情况。”",
            "林亦舟听见“实际情况”四个字，手指在文件袋边缘停了一下。",
            "他能写晚班时间，能写勤工地点，能写收入说明，也能写 C407 哪几项自己能交。可如果每一个空栏都写成“因个人原因”，纸面会很整齐，4XX 看到时仍然只会看见一排退开的空白。",
            "队伍往前挪了一格。",
            "唐骁又发来新版分工表截图。最后一列写着：可到场 / 可交付 / 需本人确认。",
            "陆沉的消息还停在上面：别让别人替你写理由。",
            "窗口里的老师抬头：“下一位。”",
            "林亦舟往前走了一步，把收入说明和勤工证明一起递进去。老师先退回一处日期，又让他把用途写得更清楚。等他从窗口退出来时，纸面上多了两道铅笔圈。",
            "唐骁的分工表截图还停在手机上。林亦舟把被圈出来的材料塞回文件袋，下午去 C407 时，透明袋的边角一路硌着掌心。"
          ]
        }
      ],
      "choice": {
        "title": "这袋材料，先把哪一格写实？",
        "guide": "勤工证明、收入说明、补考回执和 C407 分工表都在同一个文件袋里。窗口只认本人签字，项目只认可交付边界，4XX 也不可能一直靠猜。林亦舟这次要先决定：证明解释到哪里，项目分工写到哪里，哪些内容不能让别人代签。",
        "options": [
          {
            "key": "A",
            "label": "先补勤工证明和收入说明，把缺席原因写到可提交",
            "detail": "让窗口先收材料，钱压和晚班不再只停在口头解释里。",
            "directionId": "ACT5-WORK-C03-A",
            "next": "ACT5-WORK-B04",
            "variableDelta": {
              "work_certificate_status": "prepared",
              "work_material_boundary_checked": true,
              "money_pressure": -1,
              "act5_required_windows_seen": "project_or_rule",
              "act6_echo_hook": "ACT6-WORK-B03-certificate-ready"
            },
            "act6EchoHook": "ACT6-WORK-B03-certificate-ready",
            "requiredWindow": "project_or_rule"
          },
          {
            "key": "B",
            "label": "先补 C407 项目分工，把能交和不能到场拆开",
            "detail": "不让唐骁替你兜现场，也不把工作线写成逃避项目。",
            "directionId": "ACT5-WORK-C03-B",
            "next": "ACT5-WORK-B04",
            "variableDelta": {
              "project_stability": 1,
              "time_debt": 1,
              "act5_required_windows_seen": "project_or_rule",
              "act6_echo_hook": "ACT6-WORK-B02-c407-low-temperature"
            },
            "act6EchoHook": "ACT6-WORK-B02-c407-low-temperature",
            "requiredWindow": "project_or_rule"
          },
          {
            "key": "C",
            "label": "写清可交付、不可到场和不能代签的范围",
            "detail": "证明和项目一起收边界：哪些能帮，哪些必须本人确认。",
            "directionId": "ACT5-WORK-C03-C",
            "next": "ACT5-WORK-B04",
            "variableDelta": {
              "public_boundary": 1,
              "work_schedule_checked": true,
              "act5_required_windows_seen": "project_or_rule",
              "act6_echo_hook": "ACT6-WORK-B01-schedule-boundary"
            },
            "act6EchoHook": "ACT6-WORK-B01-schedule-boundary",
            "requiredWindow": "project_or_rule"
          }
        ]
      }
    },
    {
      "id": "ACT5-WORK-B04",
      "title": "工作生活半径确认",
      "sceneFunction": "工作生活半径确认",
      "prelude": [
        {
          "title": "快递站清点台 / 下周固定吗",
          "location": "快递站清点台",
          "paragraphs": [
            "快递站清点台旁边贴了一张新的值班表。",
            "负责人拿红笔圈出周二、周四和周日晚班，问林亦舟：“下周能不能固定来？固定班好排，临时班不好换。”",
            "负责人把红笔帽拔开，笔尖悬在值班表旁边，等他接过去。",
            "林亦舟看着那三格。",
            "周二晚上，4XX 约好补 C407 演示分栏；周四有课程作业截止；周日活动群里正在问谁能去九龙壁舞台帮忙搬设备。三件事都不算大，可排班表一盖上去，它们就会一起往旁边挪。",
            "手机在这时亮了。",
            "周屿：周日舞台边缺两个人，来不来？",
            "唐骁：周二晚 C407 分栏别空。",
            "陆沉：周四作业截止，别忘。",
            "负责人把红笔递给他：“能固定就签在这里。”",
            "林亦舟没有马上落笔。他先把值班表拍下来，红圈在照片里比纸面上更醒目。下午去 C407 送文件时，他从九龙壁旁边绕了一段路。"
          ]
        },
        {
          "title": "九龙壁舞台边 / 半句玩笑",
          "location": "九龙壁舞台边",
          "paragraphs": [
            "下午，林亦舟从九龙壁旁边经过，包里的值班表还没签。",
            "舞台边正在拆背景板，周屿踩在台阶上，把一卷胶带扔给下面的人。看见林亦舟，他抬了抬下巴：“你现在比我还像有固定岗位的人。”",
            "玩笑说到一半，停住了。",
            "因为林亦舟胸前挂着快递站临时工作牌，手里还拿着 C407 的文件袋。那不是社团活动的志愿牌，也不是主持队的工牌，是把他从很多临时热闹里切出去的东西。",
            "周屿从台阶上跳下来：“周日你真来不了？”",
            "林亦舟没有马上答。值班表还在包里，周日那一格被红笔圈着。活动群里有人发了舞台布置清单，4XX 群里唐骁还在催周二分栏。",
            "周屿看了他一眼，没继续催，只把胶带从手腕上取下来：“你要是来不了，早点说。别让我们按你会来排。”",
            "这句话跟着他进了食堂。傍晚，手机一亮，活动群先把周日搬设备的名单顶了上来。"
          ]
        }
      ],
      "choice": {
        "title": "下周这张表，先按哪种生活半径排？",
        "guide": "固定班、C407、活动群、作业截止和 4XX 照面都在同一周里。林亦舟已经不能靠“到时候看”拖过去；他要么把固定班写成主生活半径，要么主动压低班次保一次照面，要么给每一件事写下停止条件。",
        "options": [
          {
            "key": "A",
            "label": "接下固定班，把周二周四周日都写进排班",
            "detail": "工作线成为默认生活半径，之后所有活动和宿舍照面都要绕开它。",
            "directionId": "ACT5-WORK-C04-A",
            "next": "ACT5-WORK-B05",
            "variableDelta": {
              "route_pool_locked": true,
              "work_shift": 1,
              "work_reliability": 1,
              "act5_required_windows_seen": "activity_or_interest",
              "act6_echo_hook": "ACT6-WORK-B01-fixed-shift-default"
            },
            "act6EchoHook": "ACT6-WORK-B01-fixed-shift-default",
            "requiredWindow": "activity_or_interest"
          },
          {
            "key": "B",
            "label": "少接一晚，保留一次 4XX / 活动照面",
            "detail": "收入会变不稳，但至少这周留下一次不是补说明的当面出现。",
            "directionId": "ACT5-WORK-C04-B",
            "next": "ACT5-WORK-B05",
            "variableDelta": {
              "dorm_warmth": 1,
              "money_pressure": 1,
              "work_reliability": -1,
              "act5_required_windows_seen": "activity_or_interest",
              "act6_echo_hook": "ACT6-WORK-B04-warm-but-unstable-income"
            },
            "act6EchoHook": "ACT6-WORK-B04-warm-but-unstable-income",
            "requiredWindow": "activity_or_interest"
          },
          {
            "key": "C",
            "label": "给排班、活动和作业都写停止条件",
            "detail": "不靠临时解释救场，先写清哪些到点必须停、哪些必须本人确认。",
            "directionId": "ACT5-WORK-C04-C",
            "next": "ACT5-WORK-B05",
            "variableDelta": {
              "self_control": 1,
              "public_boundary": 1,
              "time_debt": -1,
              "act5_required_windows_seen": "activity_or_interest",
              "act6_echo_hook": "ACT6-WORK-B01-boundary-cold"
            },
            "act6EchoHook": "ACT6-WORK-B01-boundary-cold",
            "requiredWindow": "activity_or_interest"
          }
        ]
      }
    },
    {
      "id": "ACT5-WORK-B05",
      "title": "回避 / 外流门槛关闭",
      "sceneFunction": "回避 / 外流门槛关闭",
      "prelude": [
        {
          "title": "青枫居楼下 / 新圈消息",
          "location": "青枫居楼下",
          "paragraphs": [
            "青枫居楼下的长椅上，有人把一张兼职群二维码贴在宣传栏边角。",
            "林亦舟刷门禁前，手机弹出一条陌生消息。许澈发来一张截图，说新圈子那边周末有临时工，结算快，不用解释太多。",
            "截图底下还有一句：不想回去说的话，可以先来这边。",
            "这句话太轻，轻得像能把 4XX、C407、快递站和明德楼窗口都暂时盖过去。",
            "林亦舟没有立刻回。",
            "楼上，4XX 群里周屿问他第一周清单写好了没；唐骁催 C407 替代交付；陆沉发了晚归登记截图。快递站群里，负责人正在确认下周固定班。",
            "林亦舟把截图按灭，没有扫宣传栏上的二维码。门禁机亮了一下，催他重新刷卡。",
            "那晚他照常去了快递站。临走前，宣传栏边角被风掀起来，二维码纸背面露出一条没撕干净的胶。"
          ]
        },
        {
          "title": "快递站后门 / 静音的诱惑",
          "location": "快递站后门",
          "paragraphs": [
            "晚班结束后，快递站后门风很大。",
            "林亦舟把扫码枪放回充电座，手机屏幕上排着四个未读：许澈、4XX、C407、快递站负责人。",
            "他把手指放到静音键上。",
            "静音能省掉很多解释。今晚不回 4XX，不回许澈，也不回唐骁，明天再说，手机就会安静下来。",
            "可屏幕暗下去以后，工资确认表还压在扫码台旁边，证明材料露出没盖章的一角，晚归登记表上的到寝时间仍然空着。",
            "负责人从后门探头：“第一周安排别忘了发。固定班不写清，后面不好排。”",
            "林亦舟把手机屏幕按亮，静音开关停在灰色那边。他先点开备忘录，把“第一周安排”几个字打在最上面。"
          ]
        }
      ],
      "choice": {
        "title": "第一周清单，先把哪一道门关清？",
        "guide": "许澈的新圈消息、静音开关、4XX 的短句和快递站固定班都停在手机里。林亦舟要把第一周安排发出去：哪边不接，哪边只留照面，哪边必须按清单交。",
        "options": [
          {
            "key": "A",
            "label": "留在工作线，把第一周安排发给所有相关群",
            "detail": "让排班、C407、晚归和材料都进入清单，第一周照这个走。",
            "directionId": "ACT5-WORK-C05-A",
            "next": "ACT6-WORK-B01",
            "variableDelta": {
              "act5_work_bridge_ready": true,
              "route_pool_locked": true,
              "work_schedule_checked": true,
              "act5_required_windows_seen": "avoidance_or_outflow",
              "act6_echo_hook": "ACT6-WORK-B01-shift-boundary"
            },
            "act6EchoHook": "ACT6-WORK-B01-shift-boundary",
            "requiredWindow": "avoidance_or_outflow"
          },
          {
            "key": "B",
            "label": "保留 4XX 照面，但不把晚班撤掉",
            "detail": "给宿舍留周日晚的当面说明，也承认固定班还照常排。",
            "directionId": "ACT5-WORK-C05-B",
            "next": "ACT6-WORK-B01",
            "variableDelta": {
              "dorm_warmth": 1,
              "closed_route_ids_kept_closed": true,
              "act5_required_windows_seen": "avoidance_or_outflow",
              "act6_echo_hook": "ACT6-WORK-B04-dorm-soft-echo"
            },
            "act6EchoHook": "ACT6-WORK-B04-dorm-soft-echo",
            "requiredWindow": "avoidance_or_outflow"
          },
          {
            "key": "C",
            "label": "拒绝许澈 / 静音诱因，按现实清单走",
            "detail": "不接新圈临时工，也不靠静音省解释，让钱、证明和排班继续摆在明面上。",
            "directionId": "ACT5-WORK-C05-C",
            "next": "ACT6-WORK-B01",
            "variableDelta": {
              "hard_outflow": false,
              "drift_guard_triggered": true,
              "work_reliability": 1,
              "act5_required_windows_seen": "avoidance_or_outflow",
              "act6_echo_hook": "ACT6-WORK-B01-no-hard-outflow"
            },
            "act6EchoHook": "ACT6-WORK-B01-no-hard-outflow",
            "requiredWindow": "avoidance_or_outflow"
          }
        ]
      }
    }
  ],
  "carryoverRules": [
    {
      "source_block": "ACT4-WORK-L01",
      "source_direction": "A",
      "act5_echo_hook": "r4_empty_dorm_family_call_first",
      "carried_variables": [
        "family_responsibility",
        "time_debt",
        "old_debt"
      ],
      "target_blocks": [
        "ACT5-WORK-B01",
        "ACT5-WORK-B05"
      ],
      "realization": "家庭电话先被接住，进入第五幕后只作为联系人、晚归解释和旧账压力，不打开家庭线。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L01",
      "source_direction": "B",
      "act5_echo_hook": "r4_empty_dorm_radius_split_work_first",
      "carried_variables": [
        "work_rule_clarity",
        "work_shift_seed",
        "reality_order_visible"
      ],
      "target_blocks": [
        "ACT5-WORK-B01",
        "ACT5-WORK-B04"
      ],
      "realization": "勤工值班先被问清，进入第五幕后优先兑现为晚班名单、固定班和工作生活半径。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L01",
      "source_direction": "C",
      "act5_echo_hook": "r4_empty_dorm_wanfeng_time_notice",
      "carried_variables": [
        "wanfeng_trust",
        "wanfeng_delay",
        "relationship_truth"
      ],
      "target_blocks": [
        "ACT5-WORK-B02"
      ],
      "realization": "晚风收到明确答复，第五幕后只保留短时照面和具体时间，不打开晚风完整线。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L02",
      "source_direction": "A",
      "act5_echo_hook": "r4_refund_rule_keep_meeting_cost",
      "carried_variables": [
        "wanfeng_trust",
        "intimacy_pressure",
        "money_pressure"
      ],
      "target_blocks": [
        "ACT5-WORK-B02",
        "ACT5-WORK-B03"
      ],
      "realization": "退改成本被看见，第五幕后在私人联系和证明材料里兑现为钱压与时间压。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L02",
      "source_direction": "B",
      "act5_echo_hook": "r4_refund_rule_cost_to_work",
      "carried_variables": [
        "basic_cost_clear",
        "work_shift_seed",
        "route_order_visible"
      ],
      "target_blocks": [
        "ACT5-WORK-B01",
        "ACT5-WORK-B04"
      ],
      "realization": "花费被算清，第五幕后优先落到晚班和固定排班。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L02",
      "source_direction": "C",
      "act5_echo_hook": "r4_refund_rule_budget_explained",
      "carried_variables": [
        "relationship_truth",
        "parent_pressure_visible",
        "money_pressure_visible"
      ],
      "target_blocks": [
        "ACT5-WORK-B02",
        "ACT5-WORK-B03"
      ],
      "realization": "预算和时间被说成实话，第五幕后兑现为短时照面和材料说明。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L03",
      "source_direction": "A",
      "act5_echo_hook": "r4_station_cash_family_gap_named",
      "carried_variables": [
        "family_signal",
        "money_pressure",
        "old_debt_seen"
      ],
      "target_blocks": [
        "ACT5-WORK-B01",
        "ACT5-WORK-B03"
      ],
      "realization": "父亲现金的缺口被命名，第五幕后作为钱压和联系人顺序的低温回声。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L03",
      "source_direction": "B",
      "act5_echo_hook": "r4_station_cash_debt_deferred",
      "carried_variables": [
        "old_debt",
        "daily_stability",
        "study_repair"
      ],
      "target_blocks": [
        "ACT5-WORK-B03",
        "ACT5-WORK-B05"
      ],
      "realization": "钱被先放进饭卡车票，第五幕后兑现为证明材料和第一周清单里的旧账。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L03",
      "source_direction": "C",
      "act5_echo_hook": "r4_station_cash_to_work_route",
      "carried_variables": [
        "work_route",
        "work_certificate_seed",
        "work_shift_seed"
      ],
      "target_blocks": [
        "ACT5-WORK-B01",
        "ACT5-WORK-B03"
      ],
      "realization": "现金压力转向勤工窗口，第五幕后兑现为排班入口和勤工证明。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L04",
      "source_direction": "A",
      "act5_echo_hook": "study_before_shift_once",
      "carried_variables": [
        "study_pressure",
        "work_certificate_seed",
        "study_repair"
      ],
      "target_blocks": [
        "ACT5-WORK-B03"
      ],
      "realization": "补考资料先被补齐，第五幕后兑现为材料窗口、证明和可提交边界。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L04",
      "source_direction": "B",
      "act5_echo_hook": "shift_before_review",
      "carried_variables": [
        "work_shift_seed",
        "work_rule_clarity",
        "study_debt"
      ],
      "target_blocks": [
        "ACT5-WORK-B01",
        "ACT5-WORK-B04"
      ],
      "realization": "临时班先被接下，第五幕后兑现为固定班倾向和学习债务。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L04",
      "source_direction": "C",
      "act5_echo_hook": "minimum_fact_given_before_absence",
      "carried_variables": [
        "relationship_truth_seed",
        "public_boundary",
        "wanfeng_soft_echo"
      ],
      "target_blocks": [
        "ACT5-WORK-B02",
        "ACT5-WORK-B05"
      ],
      "realization": "最低事实先被说明，第五幕后兑现为不失联、不回避的边界。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L05",
      "source_direction": "A",
      "act5_echo_hook": "r4_visible_seat_dorm_can_ask",
      "carried_variables": [
        "dorm_warmth",
        "public_boundary",
        "dorm_repair"
      ],
      "target_blocks": [
        "ACT5-WORK-B01",
        "ACT5-WORK-B05"
      ],
      "realization": "4XX 仍能问他，第五幕后兑现为宿舍低温照面，不回默认宿舍线。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L05",
      "source_direction": "B",
      "act5_echo_hook": "r4_back_seat_window_first",
      "carried_variables": [
        "work_window_ready",
        "dorm_misread",
        "tang_material_support"
      ],
      "target_blocks": [
        "ACT5-WORK-B03",
        "ACT5-WORK-B04"
      ],
      "realization": "后排和窗口优先，第五幕后兑现为材料/项目优先，但宿舍误读升高。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L05",
      "source_direction": "C",
      "act5_echo_hook": "r4_window_result_back_to_dorm",
      "carried_variables": [
        "work_route",
        "work_certificate_seed",
        "public_boundary"
      ],
      "target_blocks": [
        "ACT5-WORK-B01",
        "ACT5-WORK-B03"
      ],
      "realization": "明德楼窗口先跑完，第五幕后兑现为工作入口和证明材料。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L06",
      "source_direction": "A",
      "act5_echo_hook": "r4_contact_self_signed_to_work_entry",
      "carried_variables": [
        "route_boundary",
        "work_route",
        "work_certificate_seed"
      ],
      "target_blocks": [
        "ACT5-WORK-B01"
      ],
      "realization": "兼职和留校本人签字，第五幕 B01 必须从晚班后补说明和排班缺席进入。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L06",
      "source_direction": "B",
      "act5_echo_hook": "r4_contact_stay_only_detail_debt",
      "carried_variables": [
        "old_debt",
        "work_window_pending",
        "work_rule_clarity"
      ],
      "target_blocks": [
        "ACT5-WORK-B01",
        "ACT5-WORK-B03"
      ],
      "realization": "只填留校造成工作细节债，第五幕后兑现为补说明、证明材料和解释成本。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    },
    {
      "source_block": "ACT4-WORK-L06",
      "source_direction": "C",
      "act5_echo_hook": "r4_contact_parent_order_confirmed",
      "carried_variables": [
        "family_signal",
        "family_basic_truth",
        "face_pressure"
      ],
      "target_blocks": [
        "ACT5-WORK-B01",
        "ACT5-WORK-B05"
      ],
      "realization": "联系人顺序已确认，第五幕后兑现为家庭低温回声和本人签字边界。",
      "route_pool_id": "POOL-R4-WORK",
      "route_switch_allowed": false,
      "implementation_status": "mapped_for_act5_and_act6_audit"
    }
  ],
  "validation": {
    "act4Blocks": 6,
    "act4Directions": 18,
    "act5Blocks": 5,
    "act5Directions": 15,
    "carryoverRules": 18
  }
};
