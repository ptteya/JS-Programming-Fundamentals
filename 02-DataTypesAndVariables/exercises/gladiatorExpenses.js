function gladiatiorExpenses(lostFights, helmetPrice, swordPrice, sheildPrice, armorPrice) {
    let expenses = 0;
    let shieldBrokeCounter = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice;
        }
        if (i % 6 === 0) {
            expenses += sheildPrice;
            shieldBrokeCounter++;
            if (shieldBrokeCounter % 2 === 0) {
                expenses += armorPrice;
            }
        }
        helmetIsBroken = false;
        swordIsBroken = false;
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatiorExpenses(23, 12.5, 21.5, 40, 200);
