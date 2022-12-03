function secretChat(input) {
    let message = input.shift();

    let commands = {
        "InsertSpace": (index) => {
            return message.slice(0, index) + " " + message.slice(index)
        },
        "Reverse": (substr) => {
            if (message.includes(substr)) {
                let startIndex = message.indexOf(substr);
                let length = substr.length;

                let reversedSubstr = message.substring(startIndex, startIndex + length)
                    .split("")
                    .reverse()
                    .join("");

                return message.replace(substr, "") + reversedSubstr;
            }
            console.log("error");
            return message;
        },
        "ChangeAll": (substr, replacement) => {
            return message.replace(new RegExp(substr, "g"), replacement);
        }
    }

    input.forEach((entry) => {
        let [command, ...tokens] = entry.split(":|:");

        if (command !== "Reveal") {
            let oldMessage = message;
            message = commands[command](...tokens);
            if (message !== oldMessage)
                console.log(message);
        }
    });

    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);