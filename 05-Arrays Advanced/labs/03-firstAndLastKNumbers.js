function firstAndLastKNumbers(arr) {
    let newArr = arr.slice(0);
    let k = newArr.shift();
    let fKNumbers = newArr.slice(0, k);
    let lKNumbers = newArr.slice(newArr.length - k, newArr.length);

    console.log(fKNumbers.join(" "));
    console.log(lKNumbers.join(" "));
}
firstAndLastKNumbers([2, 7, 8, 9]);