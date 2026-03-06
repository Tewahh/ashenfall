import { scenes } from "../data/scenes.js";
import { state } from "./state.js";
import { startCombat } from "./combatManager.js";
import { updateUI } from "./ui.js";

export function loadScene(name) {

  const scene = scenes[name];

  state.scene = name;

  if (scene.onEnter) scene.onEnter(state);

  document.getElementById("dialogue").textContent = scene.text;

  renderChoices(scene.choices);

  updateUI(state);
}

function renderChoices(choices) {

  const container = document.getElementById("choices");
  container.innerHTML = "";

  choices.forEach(choice => {

    const btn = document.createElement("button");
    btn.textContent = choice.text;

    btn.onclick = () => {

      if (choice.combat) startCombat(choice.combat);

      else loadScene(choice.next);

    };

    container.appendChild(btn);

  });

}