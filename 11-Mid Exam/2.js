function spaceTravel(input) {
    let travelRoute = input.shift().split("||");
    let fuel = Number(input.shift());
    let ammunition = Number(input.shift());

    for (let el of travelRoute) {
        let [command, num] = el.split(" ");

        if (command === "Travel") {
            let lightYears = Number(num);

            for (let i = 1; i <= lightYears; i++) {
                fuel--;
                if (fuel < lightYears) {
                    console.log("Mission failed.");
                    break;
                }
            }
            if (fuel >= lightYears) {
                console.log(`The spaceship travelled ${lightYears} light-years.`);
            }
        } else if (command === "Enemy") {
            let enemyArmour = Number(num);
            let didNotFight = true;
            let didNotRun = true;

            if (ammunition >= enemyArmour) {
                ammunition -= enemyArmour;
                didNotFight = false;
                console.log(`An enemy with ${enemyArmour} armour is defeated.`);
            } else if (ammunition < enemyArmour) {
                for (let j = 1; j <= enemyArmour; j++) {
                    fuel -= 2;
                    if (fuel < enemyArmour) {
                        break;
                    }
                }

                if (fuel >= enemyArmour) {
                    didNotRun = false;
                    console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
                }
            }

            if (didNotFight && didNotRun) {
                console.log("Mission failed.");
                break;
            }
        } else if (command === "Repair") {
            let fuelToAdd = Number(num);
            fuel += fuelToAdd;
            let ammunitionToAdd = fuelToAdd * 2;
            ammunition += ammunitionToAdd;

            console.log(`Ammunitions added: ${ammunitionToAdd}.`);
            console.log(`Fuel added: ${fuelToAdd}.`);
        } else if (command === "Titan") {
            console.log("You have reached Titan, all passengers are safe.");
            break;
        }
    }
}
spaceTravel([
    'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'
]);

// switch (command) {
//     case "Travel":
//         let lightYears = Number(num);
//         for (let i = 1; i <= lightYears; i++) {
//             fuel--;
//         }
//         if (fuel >= lightYears) {
//             console.log(`The spaceship travelled ${lightYears} light-years.`);
//         } else {
//             console.log("Mission failed.");
//             return;
//         }
//         break;
//     case "Enemy":
//         let enemyArmour = Number(num);
//         let didFight = false;
//         let didRun = false;

//         if (ammunition >= enemyArmour) {
//             ammunition -= enemyArmour;
//             didFight = true;
//             console.log(`An enemy with ${enemyArmour} armour is defeated.`);
//         } else if (ammunition < enemyArmour) {
//             for (let j = 1; j <= enemyArmour; j++) {
//                 fuel -= 2;
//             }

//             if (fuel >= enemyArmour) {
//                 didRun = true;
//                 console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
//             }
//         }

//         if (!didFight && !didRun) {
//             console.log("Mission failed.");
//             return;
//         }
//         break;
//     case "Repair":
//         let fuelToAdd = Number(currRoute[1]);
//         fuel += fuelToAdd;
//         let ammunitionToAdd = fuelToAdd * 2;
//         ammunition += ammunitionToAdd;

//         console.log(`Ammunitions added: ${ammunitionToAdd}.`);
//         console.log(`Fuel added: ${fuelToAdd}.`);
//         break;
//     case "Titan":
//         console.log("You have reached Titan, all passengers are safe.");
//         return;
//         break;
// }