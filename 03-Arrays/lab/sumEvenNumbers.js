function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = Number(arr[i]);
        if (current % 2 === 0) {
            sum += current;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['2', '4', '6', '8', '10']);