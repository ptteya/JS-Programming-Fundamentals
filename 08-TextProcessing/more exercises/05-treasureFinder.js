function treasureFinder(input) {
    let keys = input.shift().split(" ");
    let entry = input.shift();
    let str = "";
    let result = [];

    while (entry !== "find") {
        let counter = 0;

        for (let i = 0; i < entry.length; i++) {
            let charCode = entry[i].charCodeAt(0);

            if (counter > keys.length - 1) {
                counter = 0;
            }

            charCode -= Number(keys[counter]);
            str += String.fromCharCode(charCode)
            counter++;
        }

        result.push(str);
        str = "";
        entry = input.shift();
    }

    for (let currStr of result) {
        let type = currStr.split("&")[1];
        let index = currStr.indexOf("<");
        let coordinates = currStr.substring(index + 1, currStr.length - 1);
        console.log(`Found ${type} at ${coordinates}`);
    }
}
treasureFinder([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
]);
