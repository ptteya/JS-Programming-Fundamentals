function printResult(firstNum, secondNum, thirdNum) {

    function sumOfTwoNumbers(fNum, sNum) {
        return fNum + sNum;
    }
    function subtract(sum, tNum) {
        return sum - tNum;
    }

    let sum = sumOfTwoNumbers(firstNum, secondNum);
    let result = subtract(sum, thirdNum);

    console.log(result);
}

printResult(23, 6, 10)