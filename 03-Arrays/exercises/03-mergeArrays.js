function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];
    let result = 0;

    for (let index = 0; index < firstArr.length; index++) {
        if (index % 2 === 0) {
            result = Number(firstArr[index]) + Number(secondArr[index]);
        } else {
            result = firstArr[index] + secondArr[index];
        }
        thirdArr.push(result);
    }
    console.log(thirdArr.join(" - "));
}
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);