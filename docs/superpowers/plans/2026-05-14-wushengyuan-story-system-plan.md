# Wushengyuan Story System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use $superpower-subagents (recommended) or $superpower-executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking via update_plan.

**Goal:** Produce a mainline-safe, side-quest-rich narrative optimization package and a JSON interaction system for acts 1-6 of the 武生院 immersive campus game.

**Architecture:** Keep the story deliverable and machine-readable interaction system separate. The Markdown file explains narrative logic, character arcs, and player-facing examples; the JSON file provides structured nodes, hooks, state updates, rewards, and validation-friendly metadata.

**Tech Stack:** Markdown, JSON, PowerShell validation, bundled Python JSON parser.

---

### Task 1: Create Narrative Optimization Draft

**Files:**
- Create: `optimized_story_acts1_6.md`

- [ ] **Step 1: Add locked-mainline overview**

Write sections for mainline invariants, scene constraints, and act-by-act summaries. Include the exact locked events: military phone-bag event, military performance, class meeting, host/recruitment arc, graduation activity.

- [ ] **Step 2: Add character arc matrix**

Write one matrix for Lin Yizhou, Zhou Yu, Tang Xiao, Lu Chen, Shen Jiahe, Xia Zhiwei, Qin Yue, Wanfeng, family, and teachers. Each entry must include personality, psychological state, event trigger, and allowed effect.

- [ ] **Step 3: Add act-by-act optimized structure**

For each act, write mainline purpose, dorm relationship movement, side hooks, choices, and delayed echo. Avoid replacing existing node IDs and keep all growth event-driven.

- [ ] **Step 4: Add player-facing sample text**

Write concise novelized examples for key locked events and side hooks. Keep the text immersive and free of system words.

### Task 2: Create Interaction System JSON

**Files:**
- Create: `interactive_system_v2.json`

- [ ] **Step 1: Define metadata and rules**

Create top-level keys: `meta`, `global_rules`, `locations`, `characters`, `state_schema`, `mechanics`, `acts`, `finale_bridge`, and `validation_targets`.

- [ ] **Step 2: Define characters**

Add role, personality, psychological arc, and interaction affordances for core dorm characters and side characters.

- [ ] **Step 3: Define mechanics**

Add mechanics for relationship temperature, psychological undercurrent, side hook eligibility, delayed echo, resource rewards, fatigue/boundary pressure, scene movement, and memory pool rendering.

- [ ] **Step 4: Define act nodes and hooks**

Add compact node structures for acts 1-6. Each act must include mainline locked nodes plus side hook examples with effects that cannot override mainline.

- [ ] **Step 5: Define finale bridge**

Map act 6 projected endings into terminal soft variables and graduation activity effects without changing the projected ending family.

### Task 3: Verify Deliverables

**Files:**
- Read: `optimized_story_acts1_6.md`
- Read: `interactive_system_v2.json`

- [ ] **Step 1: Validate JSON**

Run: `python -m json.tool interactive_system_v2.json`

Expected: exit code 0 and formatted JSON output.

- [ ] **Step 2: Check required keywords**

Run keyword searches for the locked events and required characters.

Expected: all required keywords appear in at least one deliverable.

- [ ] **Step 3: Report output paths**

Summarize the created files and verification evidence. Mention any limitation, including unavailable git.
