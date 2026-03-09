import { loadScene } from "./engine/sceneManager.js";
import { saveGame, loadGame } from "./engine/saveManager.js";
import { renderMap } from "./engine/mapSystem.js";
import { renderSkillTree } from "./engine/skillTree.js";
import "./engine/combat.js";

window.save = saveGame;
window.onload = () => {
  if (!loadGame())
    loadScene("intro");
}

renderMap();
renderSkillTree();
loadScene("intro");