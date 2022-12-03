function counterStrike(arr) {
    let newArr = arr.slice(0);
    let energy = Number(newArr.shift());
    let winCounter = 0;
    let notEnoughEnergy = false;

    for (let el of newArr) {
        let distance = el;
        if (distance === "End of battle") {
            break;
        }
        if (energy >= distance) {
            energy -= Number(distance);
            winCounter++;
            if (winCounter % 3 === 0) {
                energy += winCounter;
            }
        } else {
            notEnoughEnergy = true;
        }
    }

    if (notEnoughEnergy) {
        console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`);
    } else {
        console.log(`Won battles: ${winCounter}. Energy left: ${energy}`);
    }
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
