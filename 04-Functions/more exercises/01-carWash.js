function carWash(input) {

    let percent = countPercentage(input);
    console.log(`The car is ${percent.toFixed(2)}% clean.`);

    function countPercentage(arr) {
        let value = 0;
        for (let el of arr) {
            if (el === "soap") {
                value += 10;
            } else if (el === "water") {
                value += value * 0.2;
            } else if (el === "vacuum cleaner") {
                value += value * 0.25;
            } else if (el === "mud") {
                value -= value * 0.1;
            }
        }
        return value;
    }
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);