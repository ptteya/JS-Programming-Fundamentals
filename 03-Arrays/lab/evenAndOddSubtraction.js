function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let current = Number(arr[i]);
        if (current % 2 === 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([2, 4, 6, 8, 10]);
