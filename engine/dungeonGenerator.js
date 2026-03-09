import { loadScene } from "./sceneManager.js";

export function generateDungeon(size = 6) {

    const dungeon = [];

    for (let i = 0; i < size; i++) {

        dungeon.push({
            id: "room_" + i,
            enemy: Math.random() < 0.6,
            treasure: Math.random() < 0.4,
            visited: false
        });

    }

    return dungeon;
}

export function enterDungeon(state) {

    state.dungeon = generateDungeon();

    state.dungeonRoom = 0;

    loadScene("dungeonRoom");

}