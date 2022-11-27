function addAndSubtract(arr) {
    let modifiedArray = [];
    let sumOriginalArray = 0;
    let sumModifiedArray = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        sumOriginalArray += currentNum;
        if (currentNum % 2 === 0) {
            currentNum += i;
        } else {
            currentNum -= i;
        }
        modifiedArray.push(currentNum);
        sumModifiedArray += modifiedArray[i];
    }
    console.log(modifiedArray);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}
addAndSubtract([5, 15, 23, 56, 35]);