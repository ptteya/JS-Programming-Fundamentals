function computerStore(input) {
    let index = 0;
    let command = input[index];
    let priceWithoutTax = 0;
    let tax = 0;
    let totalPrice = 0;

    while (command !== "special" && command !== "regular") {
        if (Number(command) < 0) {
            console.log("Invalid price!")
        } else {
            priceWithoutTax += Number(command);
        }
        index++
        command = input[index];
    }

    tax = priceWithoutTax * 0.2;
    totalPrice = priceWithoutTax + tax;

    if (command === "special") {
        totalPrice *= 0.9;
    }

    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }

}
computerStore([

    'regular'

])