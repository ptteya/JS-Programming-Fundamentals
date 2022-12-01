function partyTime(input) {

    let reservationList = {
        vip: [],
        regular: []
    }

    let entry = input.shift();
    while (entry !== "PARTY") {
        let firstLetter = entry[0];
        if (isNaN(firstLetter)) {
            reservationList.regular.push(entry);
        } else {
            reservationList.vip.push(entry);
        }
        entry = input.shift();
    }

    for (let guest of input) {
        if (reservationList.vip.includes(guest)) {
            let index = reservationList.vip.indexOf(guest);
            reservationList.vip.splice(index, 1);
        } else if (reservationList.regular.includes(guest)) {
            let index = reservationList.regular.indexOf(guest);
            reservationList.regular.splice(index, 1);
        }
    }

    let vipLength = reservationList.vip.length;
    let regularLength = reservationList.regular.length;

    console.log(vipLength + regularLength);
    console.log(reservationList.vip.join('\n'));
    console.log(reservationList.regular.join("\n"));
}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);