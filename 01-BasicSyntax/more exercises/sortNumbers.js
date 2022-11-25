function solve(firstNum, secondNum, thirdNum) {
    let firstPosition = Number.MIN_SAFE_INTEGER;
    let secondPosition = 0;
    let thirdPosition = 0;

    let waitingPosition = 0;

    if (firstNum > firstPosition) {
        firstPosition = firstNum;
        secondPosition = secondNum;
        thirdPosition = thirdNum;
    }
    if (secondNum > firstPosition) {
        firstPosition = secondNum;
        secondPosition = firstNum;
        thirdPosition = thirdNum;
    }
    if (thirdNum > firstPosition) {
        firstPosition = thirdNum;
        secondPosition = firstNum;
        thirdPosition = secondNum;
    }

    if (thirdPosition > secondPosition) {
        waitingPosition = secondPosition;
        secondPosition = thirdPosition;
        thirdPosition = waitingPosition;
    }

    console.log(firstPosition);
    console.log(secondPosition);
    console.log(thirdPosition);
}
solve(2, 1, 3);