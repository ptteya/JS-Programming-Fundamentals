function trainState(arr) {
    let newArr = arr.splice(0);
    let wagons = newArr.shift().split(" ").map(Number);
    let maxCapacity = Number(newArr.shift());

    for (let command of newArr) {
        if (command.includes("Add")) {
            command = command.split(" ");
            wagons.push(Number(command[1]));
        } else {
            command = Number(command);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + command <= maxCapacity) {
                    wagons.splice(j, 1, wagons[j] + command);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
trainState(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);

// for (let i = 0; i < newArr.length; i++) {
    //     let [command, number] = newArr[i].split(" ");
    //     if (command === "Add") {
    //         wagons.push(Number(number));
    //     } else {
    //         command = Number(command);
    //         for (let j = 0; j < wagons.length; j++) {
    //             let updated = Number(wagons[j]) + command
    //             if (updated <= maxCapacity) {
    //                 wagons.splice(j, 1, updated);
    //                 break;
    //             }
    //         }
    //     }
    // }