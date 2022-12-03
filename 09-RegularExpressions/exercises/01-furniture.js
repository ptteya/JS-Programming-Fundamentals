function furniture(input) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)/;

    let line = input.shift();
    let allValidMatches = [];

    while (line !== "Purchase") {
        let validMatch = pattern.exec(line);

        if (validMatch !== null) {
            allValidMatches.push(validMatch);
        }
        line = input.shift();
    }

    console.log("Bought furniture:");

    let totalMoney = 0;

    if (allValidMatches.length > 0) {
        for (let match of allValidMatches) {
            totalMoney += Number(match.groups.price) * Number(match.groups.quantity);
            console.log(match.groups.name);
        }
    }

    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);

}
furniture(['>>Laptop<<312.2323!3', '>>TV<<300.21314!5', '>Invalid<<!5', '>>TV<<300.21314!20', '>>Invalid<!5', '>>TV<<30.21314!5', '>>Invalid<<!!5', 'Purchase'
]);