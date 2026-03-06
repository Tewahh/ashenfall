import { loadScene } from "./engine/sceneManager.js";
import { saveGame, loadGame } from "./engine/saveManager.js";
import "./engine/combat.js";

window.save = saveGame;
window.load = () => {
  if (loadGame()) {
    loadScene("intro");
  }
};

loadScene("intro");