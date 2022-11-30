function inventory(input) {
    let heros = [];

    for (let el of input) {
        let [hero, level, items] = el.split(" / ");

        let currHero = {
            hero,
            level: +level,
            items
        }

        heros.push(currHero);
    }

    let sorted = heros.sort((a, b) => a.level - b.level);

    for (let currHero of sorted) {
        console.log(`Hero: ${currHero.hero}`);
        console.log(`level => ${currHero.level}`);
        console.log(`items => ${currHero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);