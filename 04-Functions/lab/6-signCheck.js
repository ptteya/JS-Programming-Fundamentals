function signCheck(numOne, numTwo, numThree) {
    let totalNegatives = 0;

    if (isNegative(numOne)) {
        totalNegatives++;
    }
    if (isNegative(numTwo)) {
        totalNegatives++;
    }
    if (isNegative(numThree)) {
        totalNegatives++;
    }

    if (totalNegatives % 2 !== 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }

    function isNegative(number) {
        return number < 0;
    }
}


signCheck(-6, 12, 14);