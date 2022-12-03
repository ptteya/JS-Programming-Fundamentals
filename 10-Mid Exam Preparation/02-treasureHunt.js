function treasureHunt(input) {
    let loot = input.shift().split("|");
    let command = input.shift();

    while (command !== "Yohoho!") {
        commandArr = command.split(" ");
        let operation = commandArr.shift();

        if (operation === "Loot") {
            for (let el of commandArr) {
                if (!loot.includes(el)) {
                    loot.unshift(el);
                }
            }
        } else if (operation === "Drop") {
            let index = Number(commandArr[0]);
            if (index < 0 || index > loot.length) {
                command = input.shift();
                continue;
            }
            let element = loot.splice(index, 1);
            loot.push(element[0]);

        } else if (operation === "Steal") {
            let count = Number(commandArr[0]);
            let stolenItems = loot.splice(-count);
            console.log(stolenItems.join(", "));
        }
        command = input.shift();
    }

    let sum = loot.reduce((acc, el) => acc + el.length, 0);

    if (loot.length > 0) {
        let averageGain = sum / loot.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.")
    }
}

treasureHunt(([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"
]))
