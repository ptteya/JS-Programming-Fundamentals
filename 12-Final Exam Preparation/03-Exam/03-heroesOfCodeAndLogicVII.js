function heroesOfCode(input) {
    let heroesCount = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let [name, hp, mp] = input.shift().split(" ");
        hp = Number(hp);
        mp = Number(mp);

        if (!heroes.hasOwnProperty(name)) {
            if (hp <= 100 && mp <= 200) {
                heroes[name] = {
                    hp,
                    mp
                }
            }
        }
    }

    let commands = {
        "CastSpell": function (heroName, mpNeeded, spellName) {
            if (heroes[heroName].mp >= mpNeeded) {
                heroes[heroName].mp -= mpNeeded;
                return `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`;
            }
            return `${heroName} does not have enough MP to cast ${spellName}!`;
        },
        "TakeDamage": function (heroName, damage, attacker) {
            damage = +damage;
            heroes[heroName].hp -= damage;

            if (heroes[heroName].hp > 0) {
                return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`;
            }

            delete heroes[heroName];
            return `${heroName} has been killed by ${attacker}!`;
        },
        "Recharge": function (heroName, amount) {
            amount = +amount;
            let amountRecovered = 0;

            if (heroes[heroName].mp + amount > 200) {
                amountRecovered = 200 - heroes[heroName].mp;
                heroes[heroName].mp = 200;
            } else {
                amountRecovered = amount;
                heroes[heroName].mp += amountRecovered;
            }
            return `${heroName} recharged for ${amountRecovered} MP!`;
        },
        "Heal": function (heroName, amount) {
            amount = +amount;
            let amountRecovered = 0;

            if (heroes[heroName].hp + amount > 100) {
                amountRecovered = 100 - heroes[heroName].hp
                heroes[heroName].hp = 100;

            } else {
                amountRecovered = amount;
                heroes[heroName].hp += amountRecovered;
            }
            return `${heroName} healed for ${amountRecovered} HP!`;
        },

    }

    input.forEach((entry) => {
        if (entry !== "End") {
            let [command, heroName, ...tokens] = entry.split(" - ");
            let result = commands[command](heroName, ...tokens);
            console.log(result)
        }
    })

    let entries = Object.entries(heroes);
    for (let [key, values] of entries) {
        console.log(key);
        console.log(` HP: ${values.hp}`);
        console.log(` MP: ${values.mp}`);
    }
}
heroesOfCode([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);

//Anther solution
// function heroesOfCode(input) {
//     let heroesCount = Number(input.shift());
//     let heroes = {};

//     for (let i = 0; i < heroesCount; i++) {
//         let [name, hp, mp] = input.shift().split(" ");
//         hp = Number(hp);
//         mp = Number(mp);

//         if (!heroes.hasOwnProperty(name)) {
//             if (hp <= 100 && mp <= 200) {
//                 heroes[name] = {
//                     hp,
//                     mp
//                 }
//             }
//         }
//     }

//     let command = input.shift();

//     while (command !== "End") {
//         let commandArr = command.split(" - ");
//         let commandName = commandArr[0];
//         let heroName = commandArr[1];

//         if (commandName === "CastSpell") {
//             let mpNeeded = Number(commandArr[2]);
//             let spellName = commandArr[3];

//             if (heroes[heroName].mp >= mpNeeded) {
//                 heroes[heroName].mp -= mpNeeded;
//                 console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`)
//             } else {
//                 console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
//             }
//         } else if (commandName === "TakeDamage") {
//             let damage = Number(commandArr[2]);
//             let attacker = commandArr[3];

//             heroes[heroName].hp -= damage;

//             if (heroes[heroName].hp > 0) {
//                 console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
//             } else {
//                 console.log(`${heroName} has been killed by ${attacker}!`);
//                 delete heroes[heroName];
//             }
//         } else if (commandName === "Recharge") {
//             let amount = Number(commandArr[2]);
//             let amountRecovered = 0;

//             if (heroes[heroName].mp + amount > 200) {
//                 amountRecovered = 200 - heroes[heroName].mp;
//                 heroes[heroName].mp = 200;
//             } else {
//                 amountRecovered = amount;
//                 heroes[heroName].mp += amountRecovered;
//             }
//             console.log(`${heroName} recharged for ${amountRecovered} MP!`);
//         } else if (commandName === "Heal") {
//             let amount = Number(commandArr[2]);
//             let amountRecovered = 0;

//             if (heroes[heroName].hp + amount > 100) {
//                 amountRecovered = 100 - heroes[heroName].hp
//                 heroes[heroName].hp = 100;

//             } else {
//                 amountRecovered = amount;
//                 heroes[heroName].hp += amountRecovered;
//             }
//             console.log(`${heroName} healed for ${amountRecovered} HP!`)
//         }
//         command = input.shift();
//     }

//     let entries = Object.entries(heroes);
//     for (let [key, values] of entries) {
//         console.log(key);
//         console.log(` HP: ${values.hp}`);
//         console.log(` MP: ${values.mp}`);
//     }
// }
// heroesOfCode([
//     "4",
//     "Adela 90 150",
//     "SirMullich 70 40",
//     "Ivor 1 111",
//     "Tyris 94 61",
//     "Heal - SirMullich - 50",
//     "Recharge - Adela - 100",
//     "CastSpell - Tyris - 1000 - Fireball",
//     "TakeDamage - Tyris - 99 - Fireball",
//     "TakeDamage - Ivor - 3 - Mosquito",
//     "End"
// ]);
