function simpleCalc(firstNum, secondNum, operator) {
    let result = 0;
    switch (operator) {
        case "multiply":
            result = multiply(firstNum, secondNum);
            break;
        case "divide":
            result = divide(firstNum, secondNum);
            break;
        case "add":
            result = add(firstNum, secondNum);
            break;
        case "subtract":
            result = subtract(firstNum, secondNum);
            break;
    }

    console.log(result);

    function multiply(num1, num2) {
        return num1 * num2;
    }
    function divide(num1, num2) {
        return num1 / num2;
    }
    function add(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }
}

simpleCalc(12, 19, 'add');