function solve(number) {
    for (let row = 1; row <= number; row++) {
        let printLine = '';
        for (let col = 1; col <= row; col++) {
            printLine += `${row} `;
        }
        console.log(printLine);
    }
}
solve(3);