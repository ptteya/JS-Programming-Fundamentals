function sumDigits(input) {
    numberAsString = input.toString();
    let digitsSum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let digit = numberAsString[i];
        digitsSum += Number(digit);
    }
    console.log(digitsSum);
}
sumDigits(245678)