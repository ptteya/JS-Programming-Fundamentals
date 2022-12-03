function arrayModifier(input) {
    let array = input.shift().split(" ");
    let arrayL = array.length

    for (let i = 0; i <= arrayL; i++) {
        let currentArr = input[i].split(" ");
        let command = currentArr[0];
        let index1 = Number(currentArr[1]);
        let index2 = Number(currentArr[2]);

        if (command === "end") {
            break;
        } else if (command === "swap") {
            let temp = array[index1];
            array[index1] = array[index2];
            array[index2] = temp;
        } else if (command === "multiply") {
            array[index1] = array[index1] * array[index2];
        } else if (command === "decrease") {
            for (let i = 0; i < arrayL; i++) {
                let currEl = Number(array.shift()) - 1;
                array.push(currEl);
            }
        }
    }
    console.log(array.join(", "));
}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end',
]
)