function arrayManipulations(input) {
    let arr = input.shift().split(" ").map(Number);
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, number, index] = input[i].split(" ");

        number = Number(number);
        index = Number(index);

        if (command === "Add") {
            arr.push(number);
        } else if (command === "Remove") {
            arr = arr.filter(x => x !== number)
        } else if (command === "RemoveAt") {
            arr.splice(number, 1);
        } else if (command === "Insert") {
            arr.splice(index, 0, number);
        }
    }
    console.log(arr.join(" "));
}
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);