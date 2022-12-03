function softUniBarIncome(input) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>-?\d+(?:\.\d+)?)\$/;
    let line = input.shift();
    let totalIncome = 0;

    while (line !== "end of shift") {
        let matched = pattern.exec(line);

        if (matched !== null) {
            let { customer, product, count, price } = matched.groups;
            count = Number(count);
            price = Number(price);
            totalIncome += count * price;
            console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
        }

        line = input.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);