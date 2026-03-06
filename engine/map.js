import { loadScene } from './game.js';
import { worldMap } from '../data/map.js';

export function renderMap() {
  const map = document.getElementById('map');

  worldMap.forEach((loc) => {
    let div = document.createElement('div');

    div.className = 'map-location';

    div.textContent = loc.name;

    div.onclick = () => loadScene(loc.scene);

    map.appendChild(div);
  });
}
