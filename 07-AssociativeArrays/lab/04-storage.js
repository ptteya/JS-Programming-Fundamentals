function printStorage(input) {
    let storage = new Map();

    for (let itemInfo of input) {
        itemInfo = itemInfo.split(" ");
        let name = itemInfo[0];
        let quantity = Number(itemInfo[1]);


        if (storage.has(name)) {
            let newQuantity = storage.get(name) + quantity;
            storage.set(name, newQuantity);
        } else {
            storage.set(name, quantity);
        }
    }

    for (let storageEntry of storage) {
        console.log(`${storageEntry[0]} -> ${storageEntry[1]}`);
    }
}
printStorage([
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);


