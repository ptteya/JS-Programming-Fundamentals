function wordOccurrence(input) {
    let words = new Map;

    for (let word of input) {
        if (words.has(word)) {
            let newValue = words.get(word) + 1;
            words.set(word, newValue);
        } else {
            words.set(word, 1);
        }
    }

    let sorted = Array.from(words.entries()).sort((a, b) => b[1] - a[1]);

    for (let entry of sorted) {
        console.log(`${entry[0]} -> ${entry[1]} times`);
    }
}
wordOccurrence(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);


//With object:
// function wordOccurrence(input) {
//     let words = {};

//     for (let word of input) {
//         if (words.hasOwnProperty(word)) {
//             words[word] += 1;
//         } else {
//             words[word] = 1;
//         }
//     }

//     let sorted = Object.entries(words).sort((a, b) => {
//         return b[1] - a[1];
//     });

//     for (let entry of sorted) {
//         console.log(`${entry[0]} -> ${entry[1]} times`);
//     }
// }
// wordOccurrence(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);