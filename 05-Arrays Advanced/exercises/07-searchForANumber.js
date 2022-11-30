function searchForANumber(firstArr, secondArr) {
    let elToTake = secondArr[0];
    let elToDelete = secondArr[1];
    let numToSearch = secondArr[2];

    let result = firstArr.splice(0, elToTake);
    result.splice(0, elToDelete);

    let foundCount = 0;
    for (let el of result) {
        if (el === numToSearch) {
            foundCount++;
        }
    }

    console.log(`Number ${numToSearch} occurs ${foundCount} times.`)
}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)