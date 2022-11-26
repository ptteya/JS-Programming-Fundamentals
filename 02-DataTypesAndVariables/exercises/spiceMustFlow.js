function spiceMustFlow(startingYield) {
    let totalSpice = 0;
    let dayCounter = 0;

    while (startingYield >= 100) {
        dayCounter++;
        totalSpice += startingYield - 26;
        startingYield -= 10;
    }

    console.log(dayCounter);
    if (dayCounter !== 0) {
        console.log(totalSpice - 26);
    } else {
        console.log(totalSpice);
    }
}
spiceMustFlow(450);
