function solve(startNum, endNum) {

    let sum = 0;
    let printLine = '';

    for (let currNum = startNum; currNum <= endNum; currNum++) {

        sum += currNum;

        if (currNum === endNum) {
            printLine += `${currNum}`;
        } else {
            printLine += `${currNum} `;
        }

    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}
solve(5, 10)