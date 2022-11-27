function factorialDivision(fistNum, secondNum) {

    let result = calcFirstNumFactorial(fistNum) / calcSecondNumFactorial(secondNum);
    console.log(result.toFixed(2));

    function calcFirstNumFactorial(num) {
        let firstFact = 1;
        for (let f = 1; f <= num; f++) {
            firstFact *= f;
        }
        return firstFact;
    }

    function calcSecondNumFactorial(num) {
        let secondFact = 1;
        for (let s = 1; s <= num; s++) {
            secondFact *= s;
        }
        return secondFact;
    }
}
factorialDivision(6, 2);