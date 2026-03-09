export const state = {

  scene: "intro",

  player: {
    level: 1,
    xp: 0,
    xpToNext: 10,

    maxHealth: 20,
    health: 20,

    attack: 2,
    defense: 1,
    speed: 3,

    inventory: [],
    equipment: {
      weapon: null,
      armor: null
    }
  },


  flags: {},

  combat: {
    active: false,
    enemy: null
  }

};