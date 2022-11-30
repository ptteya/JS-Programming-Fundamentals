function sorting(arr) {
    let newArr = arr.slice(0);
    let sortedArr = newArr.sort((a, b) => b - a);
    let sortedArrLength = sortedArr.length
    let result = [];

    for (let i = 0; i < sortedArrLength; i++) {
        let biggest = sortedArr.shift();
        let smallest = sortedArr.pop();
        result.push(biggest, smallest);
    }

    console.log(result.join(" "));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])