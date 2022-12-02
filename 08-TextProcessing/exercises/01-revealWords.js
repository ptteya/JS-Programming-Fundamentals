function revealWords(words, text) {
    let wordsArr = words.split(", ");

    for (let word of wordsArr) {
        let wordAsStars = "*".repeat(word.length);
        text = text.replace(wordAsStars, word);
    }

    console.log(text);
}
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');