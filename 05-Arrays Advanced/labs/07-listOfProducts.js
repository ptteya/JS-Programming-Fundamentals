function printListOFProducts(arr) {
    let sortedArr = arr.sort();
    for (let i = 0; i < sortedArr.length; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}
printListOFProducts(['Watermelon', 'Banana', 'Apples']);