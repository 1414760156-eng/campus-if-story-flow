(function attach(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.PlaytestEngine = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function buildEngine() {
  const initialState = {
    宿舍互信: 45,
    回避值: 0,
    规则可信度: 0,
    宿舍火药味: 0,
    公开站队: 0,
    短期决裂: 0,
    短期决裂风险: 0,
    低温共处: 0,
    修补温度: 0,
    现实压力: 55,
  };

  const endings = {
    short_term_break: {
      id: "short_term_break",
      label: "短期决裂",
      tone: "宿舍没有散，但门关上的声音会在第六幕回来。",
    },
    open_side_taking: {
      id: "open_side_taking",
      label: "公开站队",
      tone: "你靠近了一边，也让另一边把这件事记住。",
    },
    dorm_repair: {
      id: "dorm_repair",
      label: "宿舍修补",
      tone: "四个人未必都说开了，但至少知道下次该怎么开口。",
    },
    low_temperature: {
      id: "low_temperature",
      label: "低温共处",
      tone: "大家仍然同住，只是很多话不再顺手说出来。",
    },
  };

  function createInitialState(overrides) {
    return Object.assign({}, initialState, overrides || {});
  }

  function applyEffect(state, effect) {
    const next = Object.assign({}, state);
    Object.entries(effect || {}).forEach(([key, value]) => {
      if (typeof value === "number") {
        next[key] = Number(next[key] || 0) + value;
      } else {
        next[key] = value;
      }
    });
    return next;
  }

  function getNextNodeId(chain, currentNodeId) {
    const index = chain.indexOf(currentNodeId);
    if (index < 0 || index >= chain.length - 1) {
      return currentNodeId;
    }
    return chain[index + 1];
  }

  function chooseOption(game, optionIndex) {
    const node = game.nodes[game.currentNodeId];
    if (!node) {
      throw new Error(`Missing node: ${game.currentNodeId}`);
    }

    const options = node.可选互动 || [];
    const option = options[optionIndex];
    if (!option) {
      throw new Error(`Missing option ${optionIndex} on ${game.currentNodeId}`);
    }

    const nextState = applyEffect(game.state, option.状态影响 || {});
    const unlockTarget = Array.isArray(option.解锁) && option.解锁.length > 0 ? option.解锁[0] : null;
    const nextNodeId = unlockTarget || getNextNodeId(game.chain, game.currentNodeId);
    const logEntry = {
      nodeId: game.currentNodeId,
      option: option.选项,
      feedback: option.即时反馈 || "",
      effect: option.状态影响 || {},
      nextNodeId,
    };

    return Object.assign({}, game, {
      currentNodeId: nextNodeId,
      state: nextState,
      log: game.log.concat(logEntry),
    });
  }

  function resolveEnding(state) {
    if ((state.短期决裂 || 0) >= 1 || (state.短期决裂风险 || 0) >= 1) {
      return endings.short_term_break;
    }
    if ((state.公开站队 || 0) >= 1) {
      return endings.open_side_taking;
    }
    if ((state.宿舍互信 || 0) >= 60 && (state.规则可信度 || 0) >= 5) {
      return endings.dorm_repair;
    }
    return endings.low_temperature;
  }

  function createGame({ nodes, chain, startNodeId, state }) {
    return {
      nodes,
      chain,
      currentNodeId: startNodeId,
      state: createInitialState(state),
      log: [],
    };
  }

  return {
    createInitialState,
    applyEffect,
    chooseOption,
    resolveEnding,
    createGame,
  };
});
