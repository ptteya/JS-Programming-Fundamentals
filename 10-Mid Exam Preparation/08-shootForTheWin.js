function shootForTheWin(arr) {
    let targets = arr.shift().split(" ").map(Number);
    let counter = 0;
    let shotTargetsIndexes = [];

    for (let i = 0; i < arr.length; i++) {
        let index = arr[i];

        if (index === "End") {
            break;
        }

        index = Number(index);

        if (index >= 0 && index <= targets.length - 1) {
            let currTarget = targets[index];

            if (!shotTargetsIndexes.includes(index)) {
                shotTargetsIndexes.push(index);
            }

            targets.splice(index, 1, -1);
            targets.forEach((el, i) => {

                if (el > currTarget) {
                    if (!shotTargetsIndexes.includes(i)) {
                        targets.splice(i, 1, el - currTarget);
                    }
                } else if (el <= currTarget) {
                    if (!shotTargetsIndexes.includes(i)) {
                        targets.splice(i, 1, el + currTarget);
                    }
                }
                return el;
            });
            counter++;
        }
    }
    console.log(`Shot targets: ${counter} -> ${targets.join(" ")}`);
}
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
