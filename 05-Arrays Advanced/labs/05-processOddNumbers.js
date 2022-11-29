function processOddNumbers(arr) {
    let oddNumbers = arr.filter((x, i) => i % 2 !== 0);
    let doubled = oddNumbers.map(x => x * 2);
    let result = doubled.reverse();

    console.log(result.join(" "));
}
processOddNumbers([10, 15, 20, 25]);