function printResult(number) {

    if (number < 100) {
        console.log(`${number}% [${countPercentsAndDots(number)}]`);
        console.log("Still loading...");
    } else {
        console.log(`${number}% Complete!`);
        console.log(`[${countPercentsAndDots(number)}]`);
    }
    function countPercentsAndDots(num) {
        let numberOfPercents = num / 10;
        let numberOfDots = 10 - numberOfPercents;

        let result = [];
        for (let p = 1; p <= numberOfPercents; p++) {
            result.push("%");
        }

        for (let d = 1; d <= numberOfDots; d++) {
            result.push(".");
        }
        return result.join('');
    }
}
printResult(100);