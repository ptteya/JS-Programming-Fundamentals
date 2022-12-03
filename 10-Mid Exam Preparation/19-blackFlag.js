function blackFlag(input) {
    let arr = input.slice(0);
    let days = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let expectedPlunder = Number(arr.shift());
    let totalGain = 0;

    for (let i = 1; i <= days; i++) {
        totalGain += dailyPlunder;

        if (i % 3 === 0) {
            totalGain += dailyPlunder * 0.5;
        }

        if (i % 5 === 0) {
            totalGain *= 0.7;
        }
    }

    if (totalGain >= expectedPlunder) {
        console.log(`Ahoy! ${totalGain.toFixed(2)} plunder gained.`)
    } else {
        let percentage = (totalGain / expectedPlunder) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}
blackFlag((["10",
    "20",
    "380"])
)