function netherRealms(input) {
    let demons = input.split(/, */g);
    let healthPattern = /[^\d\+\-\*\/\.]/g;
    let damagePattern = /[\+\-]?\d+(?:\.\d+)?/g;

    let demonsObj = {};

    for (let demon of demons) {
        let health = 0;
        let damage = 0;

        let validMatch;
        while ((validMatch = healthPattern.exec(demon)) !== null) {
            health += validMatch[0].charCodeAt(0);
        }

        let validNumber;
        while ((validNumber = damagePattern.exec(demon)) !== null) {
            damage += Number(validNumber[0]);
        }

        for (let chr of demon) {
            if (chr === "*") {
                damage *= 2;
            } else if (chr === "/") {
                damage /= 2;
            }
        }

        demonsObj[demon] = { health, damage: damage.toFixed(2) }
    }

    let sorted = Object.entries(demonsObj).sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach(el => {
        return console.log(`${el[0]} - ${el[1].health} health, ${el[1].damage} damage`);
    });
}
netherRealms("M3ph1st0**, Azazel");






























