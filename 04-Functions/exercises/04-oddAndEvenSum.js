function printResult(number) {
    let numberToString = number.toString();

    function takeEvenSum(numAsString) {
        let evenSum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            let currDigit = Number(numAsString[i]);
            if (currDigit % 2 === 0) {
                evenSum += currDigit;
            }
        }
        return evenSum;
    }

    function takeOddSum(numAsString) {
        let oddSum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            let currDigit = Number(numAsString[i]);
            if (currDigit % 2 !== 0) {
                oddSum += currDigit;
            }
        }
        return oddSum;
    }

    console.log(`Odd sum = ${takeOddSum(numberToString)}, Even sum = ${takeEvenSum(numberToString)}`);
}
printResult(1000435);