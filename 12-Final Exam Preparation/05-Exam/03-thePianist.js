function thePianist(input) {
    let piecesNum = Number(input.shift());
    let piecesList = {};

    for (let i = 0; i < piecesNum; i++) {
        let [piece, composer, key] = input.shift().split('|');
        piecesList[piece] = [composer, key];
    }

    let line = input.shift();
    while (line !== 'Stop') {
        let result;
        let [command, ...tokens] = line.split('|');
        let piece = tokens[0];

        switch (command) {
            case 'Add':
                let composer = tokens[1];
                let key = tokens[2];
                result = add(piecesList, piece, composer, key);
                break;
            case 'Remove':
                result = remove(piecesList, piece);
                break;
            case 'ChangeKey':
                let newKey = tokens[1];
                result = changeKey(piecesList, piece, newKey);
                break;
        }
        console.log(result);
        line = input.shift();
    }

    Object.entries(piecesList).forEach(([currPiece, pieceInfo]) => console.log(`${currPiece} -> Composer: ${pieceInfo[0]}, Key: ${pieceInfo[1]}`));

    function add(piecesList, piece, composer, key) {
        if (piecesList.hasOwnProperty(piece)) {
            return `${piece} is already in the collection!`;
        }
        piecesList[piece] = [composer, key];
        return `${piece} by ${composer} in ${key} added to the collection!`;
    }

    function remove(piecesList, piece) {
        if (piecesList.hasOwnProperty(piece)) {
            delete piecesList[piece];
            return `Successfully removed ${piece}!`;
        }
        return `Invalid operation! ${piece} does not exist in the collection.`
    }

    function changeKey(piecesList, piece, newKey) {
        if (piecesList.hasOwnProperty(piece)) {
            piecesList[piece][1] = newKey;
            return `Changed the key of ${piece} to ${newKey}!`
        }
        return `Invalid operation! ${piece} does not exist in the collection.`
    }
}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);