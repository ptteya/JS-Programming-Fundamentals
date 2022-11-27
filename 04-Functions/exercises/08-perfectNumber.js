function perfectNum(number) {

    if (number === numDivisors(number)) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    function numDivisors(num) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
}
perfectNum(6);