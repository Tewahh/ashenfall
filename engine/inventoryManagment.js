import { state } from "./state.js";
import { items } from "../data/items.js";
import { updateUI } from "./ui.js";

export function useItem(name) {

  const item = items[name];
  if (!item) return;

  if (item.type === "consumable") {

    state.player.health += item.heal;

    if (state.player.health > state.player.maxHealth)
      state.player.health = state.player.maxHealth;

    removeItem(name);

  }

  updateUI(state);
}

function removeItem(name) {

  const index = state.inventory.indexOf(name);

  if (index !== -1)
    state.inventory.splice(index, 1);

}