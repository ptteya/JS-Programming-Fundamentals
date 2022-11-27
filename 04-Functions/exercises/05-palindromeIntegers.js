function printResult(arr) {
    let isPalindrome = (num) => {
        let reversed = Number(num.toString().split('').reverse().join(''));
        if (num === reversed) {
            return true;
        } else {
            return false;
        }
    }

    for (let el of arr) {
        let currEl = el;
        console.log(isPalindrome(currEl));
    }
}
printResult([32, 2, 232, 1010]);