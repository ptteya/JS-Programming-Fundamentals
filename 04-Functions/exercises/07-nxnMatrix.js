function printResult(number) {
    let printRow = (num) => {
        let rowArr = [];
        for (let i = 0; i < num; i++) {
            rowArr.push(num);
        }
        return rowArr.join(" ");
    }

    for (let i = 0; i < number; i++) {
        console.log(printRow(number));
    }
}
printResult(7);