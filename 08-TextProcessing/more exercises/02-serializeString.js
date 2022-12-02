function serializeString(input) {
    let str = input[0];
    let charsIndexes = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!charsIndexes.hasOwnProperty(char)) {
            charsIndexes[char] = [];
        }
        charsIndexes[char].push(i);
    }

    for (let [key, value] of Object.entries(charsIndexes)) {
        console.log(key + ":" + value.join("/"));
    }
}
serializeString(["avjavamsdmcalsdm"])