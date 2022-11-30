function catalogue(input) {
    input.sort((a, b) => a.localeCompare(b));

    let itemsInfo = {};
    let lettersArr = [];

    for (let item of input) {
        let [name, price] = item.split(" : ");
        itemsInfo[name] = Number(price);

        let letter = name.substring(0, 1);
        if (!lettersArr.includes(letter)) {
            lettersArr.push(letter);
        }
    }

    let keys = Object.keys(itemsInfo);

    for (let currLetter of lettersArr) {
        console.log(currLetter);
        for (let key of keys) {
            let keyFirstLetter = key.substring(0, 1);
            if (keyFirstLetter === currLetter) {
                console.log(`  ${key}: ${itemsInfo[key]}`);
            }
        }
    }
}
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);

