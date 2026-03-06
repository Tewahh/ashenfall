export const scenes = {
  intro: {
    text: `Ashenfall was once a kingdom powered by a sacred flame.
    When the flame died, the forest swallowed the land.
    Travelers vanish here.
    Yet you entered willingly.`,
    choices: [
      { text: 'Enter the forest', next: 'forestEntrance' },
      { text: 'Check your supplies', next: 'checkItems' },
    ],
  },

  checkItems: {
    text: 'You search your bag.',
    effect: (state) => {
      if (!state.inventory.includes('Torch')) state.inventory.push('Torch');
    },
    choices: [{ text: 'Enter the forest', next: 'forestEntrance' }],
  },

  forestEntrance: {
    text: 'Fog coils between twisted trees. The path splits ahead.',
    choices: [
      { text: 'Follow the old road', next: 'road' },
      { text: 'Walk into the deep forest', next: 'deepForest' },
      { text: 'Return to entrance', next: 'intro' },
    ],
  },

  forestDeep: {
    text: `
  The forest grows darker as you move forward.
  
  The trees twist unnaturally, forming narrow corridors of bark.
  
  You notice:
  - Broken arrows in the ground
  - Old campfire ashes
  - Fresh footprints leading north
  
  Something is hunting here.
  `,
    choices: [
      { text: "Follow the footprints", next: "wolfEncounter" },
      { text: "Search the camp", next: "findPotion" },
      { text: "Return to entrance", next: "intro" }
    ]
  },

  findPotion: {
    text: `
  You find a half-buried satchel.
  
  Inside is a glowing Health Potion.
  `,
    effect: (state) => {
      state.inventory.push("Health Potion");
    },
    choices: [
      { text: "Continue", next: "forestDeep" }
    ]
  },

  ruinedVillage: {
    text: `
  You discover a burned village.
  
  Doors hang open.
  
  Wind moves through empty homes.
  
  A survivor may still be here.
  `,
    choices: [
      { text: "Enter house", next: "npcSurvivor" },
      { text: "Search ruins", next: "findLargePotion" },
      { text: "Leave", next: "map" }
    ]
  },

  npcSurvivor: {
    text: `
  A frightened survivor hides inside.
  
  "Please... the beast comes at night."
  `,
    choices: [
      { text: "Offer help", next: "questStart" },
      { text: "Leave", next: "ruinedVillage" }
    ]
  },

  road: {
    text: 'An abandoned road leads toward ancient ruins.',
    choices: [
      { text: 'Search roadside', next: 'findSword' },
      { text: 'Continue walking', combat: 'wolf' },
      { text: 'Return', next: 'forestEntrance' },
    ],
  },

  findSword: {
    text: 'Half buried in mud is a rusted sword.',
    effect: (state) => {
      state.inventory.push('Rusty Sword');
    },
    choices: [
      { text: 'Equip sword', next: 'equipSword' },
      { text: 'Leave it', next: 'road' },
    ],
  },

  equipSword: {
    text: 'You equip the sword.',
    effect: (state) => {
      state.attack += 2;
    },
    choices: [
      { text: 'Continue walking', combat: 'wolf' },
      { text: 'Return', next: 'road' },
    ],
  },

  deepForest: {
    text: 'The forest grows darker. Something watches you.',
    choices: [
      { text: 'Investigate sounds', combat: 'shade' },
      { text: 'Retreat', next: 'forestEntrance' },
    ],
  },

  ruins: {
    text: 'Crumbling statues surround an ancient temple.',
    choices: [
      { text: 'Enter temple', next: 'templeEntrance' },
      { text: 'Return to forest', next: 'forestEntrance' },
    ],
  },

  templeEntrance: {
    text: 'Stone stairs descend underground.',
    choices: [
      { text: 'Descend', next: 'dungeon1' },
      { text: 'Leave', next: 'ruins' },
    ],
  },

  dungeon1: {
    text: 'The dungeon air smells like ash.',
    choices: [
      { text: 'Search room', next: 'findKey' },
      { text: 'Go deeper', next: 'dungeon2' },
    ],
  },

  findKey: {
    text: 'You find a bronze key.',
    effect: (state) => {
      state.inventory.push('Temple Key');
    },
    choices: [{ text: 'Go deeper', next: 'dungeon2' }],
  },

  dungeon2: {
    text: 'A massive door blocks the path.',
    choices: [
      {
        text: 'Use key',
        condition: (state) => state.inventory.includes('Temple Key'),
        next: 'bossRoom',
      },
      { text: 'Return upstairs', next: 'dungeon1' },
    ],
  },

  bossRoom: {
    text: 'A monstrous beast emerges from the shadows.',
    choices: [
      { text: 'Fight', combat: 'beast' },
      { text: 'Run', next: 'dungeon2' },
    ],
  },

  endingHero: {
    text: 'The beast falls. The forest begins to fade. Ashenfall is free.',
    choices: [{ text: 'Restart adventure', next: 'intro' }],
  },

  forestClearing: {
    text: 'You find a wounded traveler.',
    choices: [
      {
        text: 'Help them',
        next: 'reward',
        effect: () => {
          completeQuest('helpTraveler');
        },
      },
    ],
  },
};
