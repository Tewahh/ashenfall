const weapons = ["Sword", "Axe", "Dagger", "Mace"];
const armors = ["Leather Armor", "Chainmail", "Plate Armor"];

const rarities = [
  { name: "Common", multiplier: 1 },
  { name: "Rare", multiplier: 1.5 },
  { name: "Epic", multiplier: 2 },
  { name: "Legendary", multiplier: 3 }
];

export function generateLoot() {
  const type = Math.random() < 0.5 ? "weapon" : "armor";

  const rarity = rarities[Math.floor(Math.random() * rarities.length)];

  if (type === "weapon") {
    const weapon = weapons[Math.floor(Math.random() * weapons.length)];
    const attack = Math.floor(2 * rarity.multiplier);
    return { type, name: `${rarity.name} ${weapon}`, attack, rarity: rarity.name };
  } else {
    const armor = armors[Math.floor(Math.random() * armors.length)];
    const defense = Math.floor(1 * rarity.multiplier);
    return { type, name: `${rarity.name} ${armor}`, defense, rarity: rarity.name };
  }
}