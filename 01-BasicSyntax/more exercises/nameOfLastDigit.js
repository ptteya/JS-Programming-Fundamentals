function nameOfLastDigit(number) {
    let lastDigit = number % 10;

    let digitName = '';
    switch (lastDigit) {
        case 0:
            digitName = "zero";
            break;
        case 1:
            digitName = "one";
            break;
        case 2:
            digitName = "two";
            break;
        case 3:
            digitName = "three";
            break;
        case 4:
            digitName = "four";
            break;
        case 5:
            digitName = "five";
            break;
        case 6:
            digitName = "six";
            break;
        case 7:
            digitName = "seven";
            break;
        case 8:
            digitName = "eight";
            break;
        case 9:
            digitName = "nine";
            break;

    }
    console.log(digitName);
}
nameOfLastDigit(1643)