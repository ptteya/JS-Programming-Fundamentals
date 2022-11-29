function sumFirstAndLast(arr) {
    let newArr = arr.slice(0).map(Number);
    let firstEl = newArr.shift();
    let secondEl = newArr.pop();
    let sum = firstEl + secondEl;
    console.log(sum);
}
sumFirstAndLast(['5', '10']);