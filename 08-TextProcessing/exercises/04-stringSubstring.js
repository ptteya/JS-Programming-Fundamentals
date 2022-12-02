function stringSubstring(word, text) {
    let wordToLower = word.toLowerCase();
    let textToLower = text.toLowerCase();
    let textAsArr = textToLower.split(" ");

    if (textAsArr.includes(wordToLower)) {
        console.log(wordToLower);
    } else {
        console.log(`${wordToLower} not found!`);
    }
}
stringSubstring('javascript', 'JavaScript is the best programming language');