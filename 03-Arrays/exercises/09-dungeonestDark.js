function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let rooms = arr[0].split("|");
    let roomCount = 0;

    for (let i = 0; i < rooms.length; i++) {
        let currRoom = rooms[i].split(" ");
        let itemOrMonster = currRoom[0];
        let number = Number(currRoom[1]);
        roomCount++;

        if (itemOrMonster === "potion") {
            let healingNum = 0;
            if (health + number > 100) {
                healingNum = 100 - health;
            } else {
                healingNum = number;
            }
            health += healingNum;
            console.log(`You healed for ${healingNum} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemOrMonster === "chest") {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${roomCount}`);
                break;
            }
        }
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);