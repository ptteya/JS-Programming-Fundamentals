function race(input) {
    let namePattern = /[A-Za-z]/g;
    let digitsPattern = /\d/g;
    let nameList = input.shift().split(", ");
    let line = input.shift();
    let racersInfo = {};

    while (line !== "end of race") {

        let lettersMatch = line.match(namePattern);
        let name = lettersMatch.join("");

        if (nameList.includes(name)) {
            let digitsMatch = line.match(digitsPattern).map(Number);
            let distance = digitsMatch.reduce((sum, digit) => {
                return sum + digit;
            }, 0);

            if (!racersInfo.hasOwnProperty(name)) {
                racersInfo[name] = 0;
            }
            racersInfo[name] += distance;
        }

        line = input.shift();
    }

    let sorted = Object.entries(racersInfo).sort((a, b) => b[1] - a[1]);

    if (sorted[0]) {
        console.log(`1st place: ${sorted[0][0]}`);
    }
    if (sorted[1]) {
        console.log(`2nd place: ${sorted[1][0]}`);
    }
    if (sorted[2]) {
        console.log(`3rd place: ${sorted[2][0]}`);
    }
}
race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);