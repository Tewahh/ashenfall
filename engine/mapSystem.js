import { worldMap } from "../data/worldMap.js";
import { loadScene } from "./sceneManager.js";

export function renderMap() {

    const map = document.getElementById("choices");
    map.innerHTML = "";

    worldMap.forEach(loc => {

        const btn = document.createElement("button");
        btn.textContent = loc.name;

        if (!loc.unlocked) {
            btn.disabled = true;
        }

        btn.onclick = () => {
            // First load the scene
            loadScene(loc.scene);

            // Then trigger a random travel event if not the starting scene
            if (loc.scene !== "map") {
                loadScene("travelEvent");
            }
        };

        map.appendChild(btn);

    });

}

export function unlockLocation(id) {

    const location = worldMap.find(l => l.id === id);

    if (location) {
        location.unlocked = true;
    }

}