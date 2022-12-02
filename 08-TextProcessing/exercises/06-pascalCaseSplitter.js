function solve(str) {
    let result = [];
    let word = "";

    for (let i = 0; i < str.length; i++) {
        word += str[i];

        if (i + 1 > str.length - 1) {
            result.push(word);
            break;
        } else if (str[i + 1].toUpperCase() === str[i + 1]) {
            result.push(word);
            word = "";
        }
    }

    console.log(result.join(", "));
}
solve('HoldTheDoor')
