function theImitationGame(input) {
    let message = input.shift();
    let line = input.shift();

    while (line !== "Decode") {
        let lineInfo = line.split("|");
        let command = lineInfo[0];

        if (command === "Move") {
            let lettersNum = Number(lineInfo[1]);
            let firstLetters = message.substring(0, lettersNum);
            let leftLetters = message.substring(lettersNum);
            message = leftLetters.concat(firstLetters);
        } else if (command === "Insert") {
            let index = Number(lineInfo[1]);
            let value = lineInfo[2];
            message = message.substring(0, index) + value + message.substring(index);
        } else if (command === "ChangeAll") {
            let substr = lineInfo[1];
            let replacement = lineInfo[2];
            while (message.includes(substr)) {
                message = message.replace(substr, replacement);
            }
        }

        line = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
