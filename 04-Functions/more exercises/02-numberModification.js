function numberModification(number) {

    let arr = number.toString().split('');
    let sum = 0;
    let digitCounter = 0;

    for (let currDigit of arr) {
        sum += Number(currDigit);
        digitCounter++;
    }

    if (sum / digitCounter > 5) {
        console.log(number);
    } else {
        while (sum / digitCounter < 5) {
            sum += 9;
            arr.push(9);
            digitCounter++;

        }
        console.log(arr.join(''));
    }
}
numberModification(5835);