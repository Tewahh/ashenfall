import { state } from "./state.js";
import { updateUI } from "./ui.js";

// Initialize inventory if not present
if (!state.player.inventory) state.player.inventory = [];
if (!state.player.equipment) state.player.equipment = { weapon: null, armor: null };


// Add an item to inventory
export function addItem(item) {
    state.player.inventory.push(item);
    console.log("Item added:", item.name);
    updateUI();
}

// Remove item (optional)
export function removeItem(index) {
    state.player.inventory.splice(index, 1);
    updateUI();
}

// Equip an item
export function equipItem(index) {
    const item = state.player.inventory[index];
    if (!item) return;

    // Unequip previous item if same type
    if (item.type === "weapon" && state.player.equipment.weapon) {
        state.player.attack -= state.player.equipment.weapon.attack;
    }
    if (item.type === "armor" && state.player.equipment.armor) {
        state.player.defense -= state.player.equipment.armor.defense;
    }

    // Equip new item
    if (item.type === "weapon") {
        state.player.equipment.weapon = item;
        state.player.attack += item.attack;
    }
    if (item.type === "armor") {
        state.player.equipment.armor = item;
        state.player.defense += item.defense;
    }

    console.log(`Equipped: ${item.name}`);
    updateUI();
}



export function renderInventory() {
    const container = document.getElementById("inventoryList");
    if (!container) return;
  
    container.innerHTML = "";
  
    state.player.inventory.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} ${item.attack ? "ATK+"+item.attack : ""}${item.defense ? " DEF+"+item.defense : ""}`;
  
      const equipBtn = document.createElement("button");
      equipBtn.textContent = "Equip";
      equipBtn.onclick = () => equipItem(index);
  
      li.appendChild(equipBtn);
      container.appendChild(li);
    });
  }