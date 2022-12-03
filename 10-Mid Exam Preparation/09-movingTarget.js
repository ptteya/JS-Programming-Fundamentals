function movingTarget(input) {
    let targets = input.shift().split(" ").map(Number);
    let nextLine = input.shift();

    while (nextLine !== "End") {
        let nextLineArr = nextLine.split(" ");
        let command = nextLineArr[0];
        let index = Number(nextLineArr[1]);

        switch (command) {
            case "Shoot":
                let power = Number(nextLineArr[2]);
                if (indexExists(index)) {
                    if (targets[index] - power > 0) {
                        targets[index] = targets[index] - power;
                    } else {
                        targets.splice(index, 1);
                    }
                }
                break;
            case "Add":
                let value = Number(nextLineArr[2]);
                if (indexExists(index)) {
                    targets.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                let radius = Number(nextLineArr[2]);
                let indexAfter = index + radius;
                let indexBefore = index - radius;

                if (indexExists(indexAfter) && indexExists(indexBefore)) {
                    for (let r = index + 1; r <= index + radius; r++) {
                        if (indexExists(r)) {
                            targets.splice(r, 1);
                        }
                    }

                    for (let l = index; l >= index - radius; l--) {
                        if (indexExists(l)) {
                            targets.splice(l, 1);
                        }
                    }
                } else {
                    console.log("Strike missed!")
                }
                break;
        }
        nextLine = input.shift();
    }
    console.log(targets.join("|"));

    function indexExists(index) {
        if (index >= 0 && index <= targets.length - 1) {
            return true;
        }
        return false;
    }
}
movingTarget((["1 2 3 4 5", "Strike 0 1", "End"]));