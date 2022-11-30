function convertToObject(text) {
    let obj = JSON.parse(text);

    let objectEntries = Object.entries(obj);
    for (let [objKey, objValue] of objectEntries) {
        console.log(`${objKey}: ${objValue}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')