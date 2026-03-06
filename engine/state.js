export const state = {

    scene: "intro",
  
    player: {
      level: 1,
      xp: 0,
      xpToNext: 10,
      maxHealth: 10,
      health: 10,
      attack: 2,
      defense: 1,
    },
  
    flags: {},
  
    combat: {
      active: false,
      enemy: null
    }
  
  };