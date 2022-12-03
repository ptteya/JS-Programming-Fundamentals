function experienceGaining(input) {
    let arrWithNumbers = input.slice(0).map(Number);
    let neededExperience = arrWithNumbers.shift();
    let battlesCount = arrWithNumbers.shift();
    let currBattles = 0;
    let totalEarnedExp = 0;

    for (let i = 1; i <= battlesCount; i++) {
        let expPerBattle = arrWithNumbers.shift();
        if (i % 3 === 0) {
            expPerBattle += expPerBattle * 0.15;
        }
        if (i % 5 === 0) {
            expPerBattle -= expPerBattle * 0.1;
        }
        if (i % 15 === 0) {
            expPerBattle += expPerBattle * 0.05;
        }
        totalEarnedExp += expPerBattle;
        currBattles++;
        if (totalEarnedExp >= neededExperience) {
            console.log(`Player successfully collected his needed experience for ${currBattles} battles.`)
            return;
        }
    }

    let leftExp = neededExperience - totalEarnedExp;
    console.log(`Player was not able to collect the needed experience, ${leftExp.toFixed(2)} more needed.`);
}
experienceGaining([500, 5, 50, 100, 200, 100, 30]);



