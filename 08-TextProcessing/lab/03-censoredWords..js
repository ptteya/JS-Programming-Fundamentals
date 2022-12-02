function censoredWords(text, word) {
    let censored = '*'.repeat(word.length);

    let censoredText = text.replace(word, censored);

    while (censoredText.includes(word)) {
        censoredText = censoredText.replace(word, censored);
    }

    console.log(censoredText);
}
censoredWords('A small sentence with some small words', 'small')

//To censor all the words:
// function censoredWords(text, word) {

//     for (let i = 0; i < text.length; i++) {
//         let letter = text[i];
//         if (letter === " ") {
//             continue;
//         }
//         text = text.replace(letter, "*".repeat(1))
//     }

//     console.log(text);
// }
// censoredWords('A small sentence with some small words', 'small')