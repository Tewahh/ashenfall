export function getEnemyDamage(enemy, player) {

    switch (enemy.ai) {

        case "aggressive":
            return enemy.attack + 1;

        case "defensive":

            if (enemy.hp < 3)
                return enemy.attack + 2;

            return Math.max(1, enemy.attack - 1);

        case "smart":

            if (player.health < 5)
                return enemy.attack + 2;

            return enemy.attack;

        default:
            return enemy.attack;
    }

}