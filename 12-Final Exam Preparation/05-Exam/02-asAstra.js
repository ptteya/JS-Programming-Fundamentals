function adAstra(input) {
    let pattern = /(\||#)(?<name>[A-Za-z\s?]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>(?:[0-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|10000))\1/g;

    let text = input.shift();
    let validMatch;
    let allValidMatches = [];
    while (validMatch = pattern.exec(text)) {
        allValidMatches.push(validMatch);
    }

    let totalCalories = 0;
    for (let match of allValidMatches) {
        let calories = Number(match.groups.calories);
        totalCalories += calories;
    }

    let daysToLast = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(daysToLast)} days!`);

    for (let match of allValidMatches) {
        let name = match.groups.name;
        let expDate = match.groups.expDate;
        let calories = match.groups.calories;

        console.log(`Item: ${name}, Best before: ${expDate}, Nutrition: ${calories}`);
    }
}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);