function starEnigma(input) {
    let pattern = /@(?<name>[A-Za-z]+)[^@\-\:!>]*:(?<population>\d+)[^@\-\:!>]*!(?<type>[AD])![^@\-\:!>]*->(?<soldiers>\d+)/;
    let letters = ['s', 't', 'a', 'r'];
    let messagesCount = input.shift();
    let decrypted = [];
    let attacked = [];
    let destroyed = [];

    for (let i = 0; i < messagesCount; i++) {
        let counter = 0;
        let message = input[i];

        for (let char of message) {
            if (letters.includes(char.toLowerCase())) {
                counter++;
            }
        }
        for (let char of message) {
            let charCode = char.charCodeAt(0) - counter;
            decrypted.push(String.fromCharCode(charCode));
        }

        decrypted = decrypted.join("");

        let match = pattern.exec(decrypted);

        if (match) {
            if (match.groups.type === "A") {
                attacked.push(match.groups.name);
            } else if (match.groups.type === "D") {
                destroyed.push(match.groups.name);
            }
        }
        decrypted = [];
    }

    attacked.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(planet => console.log(`-> ${planet}`));

    destroyed.sort((a, b) => a.localeCompare(b));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach(planet => console.log(`-> ${planet}`));
}
starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
