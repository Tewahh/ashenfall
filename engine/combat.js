import { enemies } from "../data/enemies.js";
import { state } from "./state.js";
import { updateUI } from "./ui.js";
import { checkEnding } from "./endingManager.js";
import { addXP } from "./levelSystem.js";

export function startCombat(name) {

  state.combat.active = true;
  state.combat.enemy = { ...enemies[name] };

  document.getElementById("combat")
    .classList.remove("hidden");

  updateCombatUI();

}

function playerAttack() {

  const enemy = state.combat.enemy;

  enemy.hp -= state.player.attack;

  if (enemy.hp <= 0) {
    endCombat(true);
    return;
  }

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

  if (state.player.health <= 0) {
    endCombat(false);
  }

}

function endCombat(victory) {

  state.combat.active = false;

  document.getElementById("combat")
    .classList.add("hidden");

  if (victory) {
    addXP(5);
    checkEnding();

    if (state.player.xp >= state.player.xpToNext) {
      levelUp();
    }

    checkEnding();
  }

  updateUI();
}

function levelUp() {

  state.player.level++;
  state.player.xp = 0;
  state.player.xpToNext *= 1.5;

  state.player.maxHealth += 2;
  state.player.attack += 1;

  state.player.health = state.player.maxHealth;

}

function updateCombatUI() {

  document.getElementById("enemy").textContent =
    `${state.combat.enemy.name} HP: ${state.combat.enemy.hp}`;

}

document.getElementById("attackBtn")
  .onclick = playerAttack;