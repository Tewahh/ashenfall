import { state } from './state.js';

export function updateUI(state) {

  document.getElementById("health").textContent =
    `Health: ${state.player.health}/${state.player.maxHealth}`;

  document.getElementById("stats").textContent =
    `ATK:${state.player.attack} DEF:${state.player.defense}`;

  document.getElementById("inventory").textContent =
    state.inventory.join(", ") || "Empty";

  const questText = Object.keys(state.quests)
    .map(q => `${q}: ${state.quests[q].completed ? "Done" : "Active"}`)
    .join(" | ");

  document.getElementById("quests").textContent =
    questText || "No quests";

}

export function updateHUD(state) {
  const health = document.getElementById('health');
  const stats = document.getElementById('stats');
  const inventory = document.getElementById('inventory');

  health.textContent = 'Health: ' + '❤'.repeat(state.health);

  stats.textContent = 'ATK:' + state.attack + ' DEF:' + state.defense;

  inventory.textContent =
    'Inventory: ' +
    (state.inventory.length ? state.inventory.join(', ') : 'Empty');
}

export function addToLog(text) {
  const log = document.getElementById('combatLog');

  log.innerHTML += text + '<br>';

  log.scrollTop = log.scrollHeight;
}

export function clearLog() {
  document.getElementById('combatLog').innerHTML = '';
}

export function showMessage(text) {
  const dialogue = document.getElementById('dialogue');

  dialogue.textContent = text;
}

export function showChoices(list, handler) {
  const container = document.getElementById('choices');

  container.innerHTML = '';

  list.forEach((choice, i) => {
    let btn = document.createElement('button');

    btn.textContent = i + 1 + '. ' + choice.text;

    btn.onclick = () => handler(choice);

    container.appendChild(btn);
  });
}
