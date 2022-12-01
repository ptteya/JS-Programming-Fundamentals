function wordTracker(input) {
    let wordsToLookFor = input.shift().split(" ");

    let words = {};

    for (let word of wordsToLookFor) {
        words[word] = 0;
    }

    for (let wordEntry of input) {
        if (words.hasOwnProperty(wordEntry)) {
            words[wordEntry] += 1;
        }
    }

    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let currWord of sortedWords) {
        console.log(`${currWord[0]} - ${currWord[1]}`);
    }
}
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);