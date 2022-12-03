function mirrorWords(input) {
    let pattern = /(@|#)(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;

    let text = input[0];
    let validMatch;
    let allValidMatches = [];
    let counter = 0;
    let mirrorWords = [];

    while ((validMatch = pattern.exec(text)) !== null) {
        allValidMatches.push(validMatch);
        counter++;
    }

    for (let match of allValidMatches) {
        let firstWord = match.groups.firstWord;
        let secondWord = match.groups.secondWord;

        let reversedSecondWord = secondWord.split("").reverse().join("");

        if (firstWord === reversedSecondWord) {
            mirrorWords.push([firstWord, secondWord]);
        }
    }

    if (allValidMatches.length === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${counter} word pairs found!`);
    }

    if (mirrorWords.length === 0) {
        console.log("No mirror words!")
    } else {
        console.log("The mirror words are:");
        let output = mirrorWords.map((wordArr) => `${wordArr[0]} <=> ${wordArr[1]}`)
        console.log(output.join(", "));
    }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);