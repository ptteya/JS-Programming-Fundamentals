function emojiDetector(input) {
    let text = input[0];
    let digitsPattern = /\d/g;
    let emojiPattern = /(\:\:|\*\*)(?<name>[A-Z][a-z][a-z]+)\1/g;

    let match = text.match(digitsPattern);
    let coolThreshold = match.reduce((product, el) => product * Number(el), 1);
    console.log(`Cool threshold: ${coolThreshold}`);

    let validMatch;
    let validEmojis = [];

    while (validMatch = emojiPattern.exec(text)) {
        validEmojis.push(validMatch);
    }

    console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);

    for (let emoji of validEmojis) {
        let name = emoji.groups.name;
        let coolness = 0;

        for (let char of name) {
            coolness += char.charCodeAt(0)
        }

        if (coolness > coolThreshold) {
            console.log(emoji[0]);
        }
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);