function printNthElement(arr) {
    let result = [];
    let n = Number(arr[arr.length - 1]);
    for (let i = 0; i < arr.length - 1; i += n) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2'])