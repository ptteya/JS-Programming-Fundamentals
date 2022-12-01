function cardGame(input) {
    let powersValues = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }

    let typesValues = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }

    let players = {};

    for (let el of input) {
        let [name, cards] = el.split(": ");
        let cardsArr = cards.split(", ");

        if (!players.hasOwnProperty(name)) {
            players[name] = new Set();
        }

        for (let card of cardsArr) {
            players[name].add(card);
        }
    }

    for (let [key, value] of Object.entries(players)) {
        let totalValue = 0;
        for (let card of value) {
            let cardInfo = card.split("");
            let type = cardInfo.pop();
            let power = cardInfo.join("");
            let powerValue = power = powersValues[power];
            let typeValue = type = typesValues[type];
            totalValue += powerValue * typeValue;
        }

        console.log(`${key}: ${totalValue}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
