import { state } from './state.js';
import { enemies } from '../data/enemies.js';
import { updateUI } from './ui.js';

let enemy = null;
let playerTurn = true;

export function startCombat(enemyName) {
  enemy = { ...enemies[enemyName] };
  playerTurn = true;

  document.getElementById('combat').classList.remove('hidden');

  updateCombatUI();
}

function playerAttack() {
  if (!playerTurn) return;

  enemy.hp -= state.player.attack;
  playerTurn = false;

  checkEnd();
  if (enemy.hp > 0) enemyTurn();
}

function enemyTurn() {
  const damage = Math.max(1, enemy.attack - state.player.defense);

  state.player.health -= damage;

  checkEnd();
  playerTurn = true;
  updateCombatUI();
}

function checkEnd() {
  if (enemy.hp <= 0) endCombat(true);
  if (state.player.health <= 0) endCombat(false);
}

function endCombat(victory) {
  document.getElementById('combat').classList.add('hidden');
  updateUI();
}

function updateCombatUI() {
  document.getElementById(
    'enemy'
  ).textContent = `${enemy.name} HP: ${enemy.hp}`;
}

document.getElementById('attackBtn').onclick = playerAttack;
