function createObject(fName, lName, a) {
    let person = {
        firstName: fName,
        lastName: lName,
        age: a,
    };
    return person;
}
createObject("Peter", "Pan", "20");