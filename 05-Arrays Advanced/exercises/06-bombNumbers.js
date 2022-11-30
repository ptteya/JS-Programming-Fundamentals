function bombNumbers(sequenceArr, bombArr) {
    let [bombNum, power] = bombArr;

    while (sequenceArr.includes(bombNum)) {
        let bombNumIndex = sequenceArr.indexOf(bombNum);
        sequenceArr.splice(Math.max((bombNumIndex - power), 0), Math.min(power, bombNumIndex));
        bombNumIndex = sequenceArr.indexOf(bombNum);
        sequenceArr.splice(bombNumIndex, power + 1);
    }

    let sum = sequenceArr.reduce((a, b) => a + b, 0);
    console.log(sum)
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);