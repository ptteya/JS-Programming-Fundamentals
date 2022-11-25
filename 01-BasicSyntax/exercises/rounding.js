function solve(number, percision) {

    if (percision > 15) {
        percision = 15;
    }

    let roundedNum = number.toFixed(percision);

    console.log(parseFloat(roundedNum));

}
solve(10.5, 3)