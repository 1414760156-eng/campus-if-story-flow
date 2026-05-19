# 5A 无效对话与上帝视角纠偏 v3.4.2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use $superpower-subagents (recommended) or $superpower-executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking via update_plan.

**Goal:** 删除 5A 当前试玩文本中的无效对话和上帝视角提示，让第五章 5A 更像可读、可玩的中文小说段落。

**Architecture:** 只改玩家可见数据层文本，不改 engine、app、节点结构和外流/回流规则。测试层已有禁用短语断言，先用红灯确认问题，再改文本至绿灯。

**Tech Stack:** 静态 HTML 试玩器、CommonJS 数据文件、Node.js 测试脚本、ripgrep 文本扫描。

---

### Task 1: Confirm Red State

**Files:**
- Test: `playtest/5a-full-data.test.js`
- Inspect: `playtest/5a-full-data.js`

- [x] **Step 1: Run data test**

Run:

```powershell
node playtest/5a-full-data.test.js
```

Expected: fail on player-facing meta phrases such as `让林亦舟意识到` or later `才意识到 / 才发现`.

- [x] **Step 2: Locate phrases**

Run:

```powershell
rg -n "让林亦舟意识到|林亦舟意识到|林亦舟发现|忽然意识到|忽然明白|下一句话会把|周屿怕|唐骁怕|陆沉怕|五神院" playtest/5a-full-data.js
```

Expected: line numbers for rewrite targets.

### Task 2: Rewrite Player-Facing Text

**Files:**
- Modify: `playtest/5a-full-data.js`

- [x] **Step 1: Replace self-recognition narration**

Change forms like `林亦舟忽然意识到...` into object/action descriptions:

```text
聊天框没有替他开门，也没有替他关门；宿舍那团现实只是被挪到屏幕边上。
```

- [x] **Step 2: Replace omniscient fork preview**

Change forms like `下一句话会把今晚推向两种方向` into present-tense pressure:

```text
屋里没有人再笑，门边那只拖鞋歪着，像随时会被一脚踢出去。
```

- [x] **Step 3: Replace map drift**

Change old or vague map terms into corrected campus anchors:

```text
青枫居、晨光湖、西园餐厅、银杏路、东区商业街
```

### Task 3: Verify Green State

**Files:**
- Test: `playtest/5a-full-data.test.js`
- Test: `playtest/app.smoke.test.js`
- Check: `playtest/5a-full-data.js`

- [x] **Step 1: Run phrase scan**

Run:

```powershell
rg -n "意识到|发现|忽然明白|下一句话会把|推向两种方向|要么.*要么|五神院" playtest/5a-full-data.js
```

Expected: no output.

- [x] **Step 2: Run data test**

Run:

```powershell
node playtest/5a-full-data.test.js
```

Expected: `5A full data tests passed`.

- [x] **Step 3: Run syntax and smoke checks**

Run:

```powershell
node --check playtest/5a-full-data.js
node playtest/app.smoke.test.js
```

Expected: syntax check exit 0 and `app smoke test passed`.
