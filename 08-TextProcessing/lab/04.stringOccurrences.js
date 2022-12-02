function countStringOccurrences(text, word) {
    let wordsArr = text.split(" ");
    let counter = 0;

    for (let current of wordsArr) {
        if (current === word) {
            counter++;
        }
    }

    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');

