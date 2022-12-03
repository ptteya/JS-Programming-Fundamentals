function manOWar(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let maxHealth = input.shift();
    let operator = input.shift();

    while (operator !== "Retire") {
        let commandArr = operator.split(" ");
        let command = commandArr.shift();
        commandArr = commandArr.map(Number);

        switch (command) {
            case "Fire":
                let index = commandArr[0];
                let fireDamage = commandArr[1];

                if (isValidIndex(index, warship)) {
                    warship[index] -= fireDamage;
                    if (warship[index] <= 0) {
                        console.log("You won! The enemy ship has sunken.")
                        return;
                    }
                }
                break;
            case "Defend":
                let startIndex = commandArr[0];
                let endIndex = commandArr[1];
                let damage = commandArr[2];

                if (isValidIndex(startIndex, pirateShip) && isValidIndex(endIndex, pirateShip)) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= damage;
                        if (pirateShip[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
                break;
            case "Repair":
                let repairIndex = commandArr[0];
                let health = commandArr[1];

                if (isValidIndex(repairIndex, pirateShip)) {
                    pirateShip[repairIndex] += health;
                    if (pirateShip[repairIndex] > maxHealth) {
                        pirateShip[repairIndex] = maxHealth;
                    }
                }
                break;
            case "Status":
                let count = 0;
                for (let el of pirateShip) {
                    if (el < maxHealth * 0.2) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`)
                break;
        }
        operator = input.shift();
    }

    let pirateShipSum = pirateShip.reduce((sum, el) => sum + el, 0);
    let warShipSum = warship.reduce((sum, el) => sum + el, 0);

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
    function isValidIndex(index, arr) {
        if (index < 0 || index >= arr.length) {
            return false;
        }
        return true;
    }
}
manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]);

