function solve(str) {
    let wordsArr = str.split(" ");
    let specialWords = [];

    for (let word of wordsArr) {
        if (word.startsWith("#") && word.length > 1) {
            word = word.substring(1);
            specialWords.push(word);
        }
    }

    let result = [];

    for (let specWord of specialWords) {
        let charsArr = specWord.split("");
        let isOnlyLetters = true;

        for (let char of charsArr) {
            let code = char.charCodeAt();
            if ((code < 65 || code > 90) && (code < 97 || code > 122)) {
                isOnlyLetters = false;
            }
        }

        if (isOnlyLetters) {
            result.push(specWord);
        }
    }

    console.log(result.join("\n"));
}
solve('The symbol # is known #variously in English-speaking #regions as the #num4ber sign')

//With regex:
// function modernTimes(input) {
//     let pattern = /#(?<word>[A-Za-z]+)/g;

//     let validMatch;
//     while ((validMatch = pattern.exec(input)) !== null) {
//         console.log(validMatch.groups.word);
//     }
// }