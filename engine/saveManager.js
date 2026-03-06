import { state } from "./state.js";

const SAVE_KEY = "rpg_save";

export function saveGame() {
  localStorage.setItem(
    SAVE_KEY,
    JSON.stringify(state)
  );

  console.log("Game Saved");
}

export function loadGame() {
  const data = localStorage.getItem(SAVE_KEY);

  if (!data) return false;

  const loaded = JSON.parse(data);

  Object.assign(state, loaded);

  console.log("Game Loaded");

  return true;
}

export function deleteSave() {
  localStorage.removeItem(SAVE_KEY);
}