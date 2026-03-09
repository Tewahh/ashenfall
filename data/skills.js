export const skills = {

    powerStrike: {
        name: "Power Strike",
        description: "Attack +2",
        effect: (state) => {
            state.player.attack += 2;
        }
    },

    ironSkin: {
        name: "Iron Skin",
        description: "Defense +2",
        effect: (state) => {
            state.player.defense += 2;
        }
    },

    vitality: {
        name: "Vitality",
        description: "Max HP +5",
        effect: (state) => {
            state.player.maxHealth += 5;
            state.player.health = state.player.maxHealth;
        }
    }

};