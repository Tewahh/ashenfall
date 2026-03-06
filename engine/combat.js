import { enemies } from '../../data/enemies.js';
import { state } from './state.js';

let enemy;

export function startCombat(name) {
  enemy = { ...enemies[name] };

  document.getElementById('combat').classList.remove('hidden');

  updateCombat();
  setupCombatButtons(); // <-- ADD THIS
}

function setupCombatButtons() {
  const attackBtn = document.getElementById('attackBtn');

  if (!attackBtn) {
    console.error('Attack button not found!');
    return;
  }

  attackBtn.onclick = () => {
    enemy.hp -= state.attack;

    if (enemy.hp <= 0) {
      log('Enemy defeated');
      endCombat();
      return;
    }

    enemyTurn();
    updateCombat();
  };
}

function updateCombat() {
  document.getElementById('enemy').textContent =
    enemy.name + ' HP: ' + enemy.hp;
}

function enemyTurn() {
  let damage = Math.max(1, enemy.attack - state.defense);
  state.health -= damage;
  log(enemy.name + ' hits for ' + damage);
}

function log(t) {
  document.getElementById('combatLog').innerHTML += t + '<br>';
}

function endCombat() {
  document.getElementById('combat').classList.add('hidden');
}
