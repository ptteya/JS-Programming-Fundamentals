function orders(product, quantity) {
    let totalPrice = 0;

    switch (product) {
        case "coffee":
            totalPrice = 1.50;
            break;
        case "water":
            totalPrice = 1.00;
            break;
        case "coke":
            totalPrice = 1.40;
            break;
        case "snacks":
            totalPrice = 2.00;
            break;
    }
    console.log((totalPrice * quantity).toFixed(2));
}
orders("water", 5);