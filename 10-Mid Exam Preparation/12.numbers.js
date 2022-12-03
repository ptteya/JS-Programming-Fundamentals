function numbers(input) {
    let numbersArr = input.split(" ").map(Number);

    let sum = numbersArr.reduce((acc, el) => {
        return acc + el;
    }, 0);

    let average = sum / numbersArr.length;

    let result = numbersArr.filter(el => el > average);
    if (result.length === 0) {
        console.log("No");
    } else {
        result.sort((a, b) => b - a);
        result = result.slice(0, 5)
        console.log(result.join(" "));
    }
}
numbers('10 20 30 40 50');