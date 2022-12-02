function passwordGenerator(input) {
    let firstStr = input[0];
    let secondStr = input[1];
    let thirdStr = input[2];

    let str = firstStr.concat(secondStr);
    let counter = 0;

    for (let char of str) {

        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {

            if (counter > thirdStr.length - 1) {
                counter = 0;
            }

            let replacement = thirdStr[counter].toUpperCase();
            str = str.replace(char, replacement);
            counter++;
        }
    }

    let reversedStr = str
        .split("")
        .reverse()
        .join("");

    console.log(`Your generated password is ${reversedStr}`);
}
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);