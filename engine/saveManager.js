import { state } from "./state.js";

export function saveGame() {
  localStorage.setItem("ashenfallSave",
    JSON.stringify(state));
}

export function loadGame() {
  const data = localStorage.getItem("ashenfallSave");
  if (!data) return;

  Object.assign(state, JSON.parse(data));
}