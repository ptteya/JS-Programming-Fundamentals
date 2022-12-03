function messageTranslator(input) {
    let inputCount = Number(input.shift());
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<str>[A-Za-z]{8,})\]/;

    for (let i = 0; i < inputCount; i++) {
        let line = input[i];
        let validMatch = pattern.exec(line);

        if (!validMatch) {
            console.log('The message is invalid');
        } else {
            let translatedArr = [];
            for (let chr of validMatch.groups.str) {
                let chrCode = chr.charCodeAt(0);
                translatedArr.push(chrCode);
            }
            console.log(`${validMatch.groups.command}: ${translatedArr.join(' ')}`);
        }
    }
}

messageTranslator([
    "2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"
])

console.log('...........')

messageTranslator(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"])
