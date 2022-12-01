function addressBook(input) {
    let book = {};
    for (let entry of input) {
        let [name, address] = entry.split(":");
        book[name] = address;
    }

    let entries = Object.entries(book);
    entries.sort((a, b) => {
        let keyA = a[0];
        let keyB = b[0];
        return keyA.localeCompare(keyB);
    });

    for (let el of entries) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);


