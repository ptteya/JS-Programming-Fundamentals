function muOnline(input) {
    let initialHealth = 100;
    let bitcoins = 0;
    let bestRoom = 0;
    let health = initialHealth;

    let rooms = input.split("|");
    for (let currRoom of rooms) {

        let [command, number] = currRoom.split(" ");
        number = Number(number);
        bestRoom++;
        let isDead = false;

        switch (command) {
            case "potion":
                if (health + number > initialHealth) {
                    number = initialHealth - health;
                    health = 100;
                } else {
                    health += number;
                }

                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                console.log(`You found ${number} bitcoins.`);
                bitcoins += number;
                break;
            default:
                health -= number;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${bestRoom}`);
                    isDead = true;
                }
                break;
        }
        if (isDead) {
            break;
        }
    }

    if (health > 0) {
        console.log("You've made it!")
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${health}`);
    }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")