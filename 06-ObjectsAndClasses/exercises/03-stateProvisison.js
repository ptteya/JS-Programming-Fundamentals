function stateProvision(stock, orderedProducts) {

    let storeProducts = {};
    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        storeProducts[product] = Number(stock[i + 1]);
    }

    for (let j = 0; j < orderedProducts.length; j += 2) {
        let product = orderedProducts[j];

        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;
        }
        storeProducts[product] += Number(orderedProducts[j + 1]);
    }

    for (let currProduct in storeProducts) {
        console.log(`${currProduct} -> ${storeProducts[currProduct]}`);
    }
}
stateProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
