import { state } from "./state.js";

export function startQuest(id) {
  state.quests[id] = { completed: false };
}

export function completeQuest(id) {
  if (state.quests[id])
    state.quests[id].completed = true;
}