import { scenes } from '../data/scenes.js';
import { updateHUD } from './ui.js';
import { renderMap } from './map.js';
import { startCombat } from './combat.js';
import { startFog } from './particles.js';
import { setupKeyboard } from './input.js';
import { state } from './state.js';

let scene = 'intro';

const dialogue = document.getElementById('dialogue');
const choices = document.getElementById('choices');

export function loadScene(name) {
  scene = name;
  let s = scenes[name];

  dialogue.textContent = s.text;

  choices.innerHTML = '';

  s.choices.forEach((c) => {
    let btn = document.createElement('button');
    btn.textContent = c.text;

    btn.onclick = () => {
      if (c.combat) startCombat(c.combat);
      else loadScene(c.next);
    };

    choices.appendChild(btn);
  });

  updateHUD(state);
}

renderMap();

setupKeyboard();

startFog();

loadScene(scene);
