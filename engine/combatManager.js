import { enemies } from "../data/enemies.js";
import { state } from "./state.js";
import { updateUI } from "./ui.js";

export function startCombat(name) {

  state.combat.active = true;
  state.combat.enemy = { ...enemies[name] };
  state.combat.turn = "player";

  document.getElementById("combat").classList.remove("hidden");

  updateCombatUI();

}

function playerAttack() {

  if (!state.combat.active) return;
  if (state.combat.turn !== "player") return;

  const enemy = state.combat.enemy;

  enemy.hp -= state.player.attack;

  if (enemy.hp <= 0) return endCombat(true);

  state.combat.turn = "enemy";
  enemyTurn();

  updateCombatUI();
}

function enemyTurn() {

  const enemy = state.combat.enemy;

  const damage = Math.max(
    1,
    enemy.attack - state.player.defense
  );

  state.player.health -= damage;

  if (state.player.health <= 0)
    return endCombat(false);

  state.combat.turn = "player";
}

function endCombat(victory) {

  state.combat.active = false;

  document.getElementById("combat").classList.add("hidden");

  if (!victory) {
    state.player.health = state.player.maxHealth;
  }

  updateUI(state);
}

function updateCombatUI() {
  document.getElementById("enemy").textContent =
    state.combat.enemy.name +
    " HP: " +
    state.combat.enemy.hp;
}

document.getElementById("attackBtn").onclick = playerAttack;

document.getElementById("runBtn").onclick = () => {
  document.getElementById("combat").classList.add("hidden");
};