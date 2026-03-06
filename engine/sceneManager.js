import { state } from './state.js';
import { scenes } from '../data/scenes.js';
import { updateUI } from './ui.js';

export function loadScene(name) {
  state.scene = name;

  const scene = scenes[name];

  document.getElementById('dialogue').textContent = scene.text;

  renderChoices(scene.choices);

  updateUI();
}

function renderChoices(choices) {
  const container = document.getElementById('choices');
  container.innerHTML = '';

  choices.forEach((choice) => {
    const btn = document.createElement('button');
    btn.textContent = choice.text;

    btn.onclick = () => {
      if (choice.next) loadScene(choice.next);
      if (choice.combat) startCombat(choice.combat);
    };

    container.appendChild(btn);
  });
}
