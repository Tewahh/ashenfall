export const state = {

  scene: "intro",

  player: {
    health: 10,
    maxHealth: 10,
    attack: 2,
    defense: 1
  },

  inventory: [],
  quests: {},

  combat: {
    active: false,
    enemy: null,
    turn: "player"
  }

};