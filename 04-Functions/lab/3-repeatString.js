function repeatString(str, count) {
    let newString = "";
    for (let i = 0; i < count; i++) {
        newString += str;
    }
    console.log(newString);
}
repeatString("String", 2);