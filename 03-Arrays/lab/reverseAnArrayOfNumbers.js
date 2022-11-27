function reverseAnArrayOfNumbers(n, inputArray) {
    let result = [];
    for (let i = n - 1; i >= 0; i--) {
        result.push(inputArray[i]);
    }
    console.log(result.join(" "));
}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);