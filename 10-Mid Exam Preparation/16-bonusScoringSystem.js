function bonusScoringSystem(input) {
    let arr = input.slice(0).map(Number);
    let students = arr.shift();
    let lectures = arr.shift();
    let bonus = arr.shift();

    let totalBonusesArr = [];

    for (let i = 0; i < students; i++) {
        let totalBonus = arr[i] / lectures * (5 + bonus);
        totalBonusesArr.push(totalBonus);
    }

    let max = Math.max(...totalBonusesArr);
    let index = totalBonusesArr.indexOf(max);

    console.log(`Max Bonus: ${Math.ceil(max)}.`);
    console.log(`The student has attended ${Math.ceil(arr[index])} lectures.`);
}
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);