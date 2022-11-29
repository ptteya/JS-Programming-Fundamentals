function printTwoSmallestNums(arr) {
    let newArr = arr.slice(0);
    let sortedArr = newArr.sort((a, b) => a - b);
    let twoSmallestNums = sortedArr.slice(0, 2);

    console.log(twoSmallestNums.join(" "));
}
printTwoSmallestNums([3, 0, 10, 4, 7, 3]);