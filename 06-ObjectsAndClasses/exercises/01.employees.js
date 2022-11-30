function employees(arr) {
    for (let currName of arr) {

        let person = {
            name: currName,
            personalNum: currName.length
        }

        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);