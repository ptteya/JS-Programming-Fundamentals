function printCharactersInRange(first, second) {
    let firstSymbol = first.charCodeAt(0);
    let secondSymbol = second.charCodeAt(0);
    let minNum = Math.min(firstSymbol, secondSymbol);
    let maxNum = Math.max(firstSymbol, secondSymbol);
    let arr = [];
    let newSymbols = "";

    for (let i = minNum + 1; i < maxNum; i++) {
        newSymbols = String.fromCharCode(i);
        arr.push(newSymbols);
    }
    console.log(arr.join(" "));
}
printCharactersInRange("a", "d");