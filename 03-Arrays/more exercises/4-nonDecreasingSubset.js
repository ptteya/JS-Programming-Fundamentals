function nonDecreasingSubset(arr) {
    let output = [];
    let biggest = 0;

    for (let element of arr) {
        if (element >= biggest) {
            biggest = element;
            output.push(biggest);
        }
    }

    console.log(output.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);