function sumOfOddNumbers(number) {
    let counter = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i++) {

        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            counter++;
        }

        if (counter === number) {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
sumOfOddNumbers(3);