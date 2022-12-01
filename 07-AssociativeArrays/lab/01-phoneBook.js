function phoneBook(input) {
    let assocArr = {};

    for (let entry of input) {
        let [name, phone] = entry.split(" ");
        assocArr[name] = phone;
    }

    for (let key in assocArr) {
        console.log(`${key} -> ${assocArr[key]}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);

