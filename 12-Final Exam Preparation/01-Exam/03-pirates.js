function pirates(input) {
    let cities = {};

    let entry = input.shift();
    while (entry !== "Sail") {
        let [town, people, gold] = entry.split("||");
        if (!cities.hasOwnProperty(town)) {
            cities[town] = {
                people: 0,
                gold: 0
            };
        }
        cities[town].people += Number(people);
        cities[town].gold += Number(gold);
        entry = input.shift();
    }

    entry = input.shift();
    while (entry !== "End") {
        let eventArr = entry.split("=>");
        let town = eventArr[1];

        if (eventArr[0] === "Plunder") {
            let peopleToRemove = Number(eventArr[2]);
            let goldToRemove = Number(eventArr[3]);

            cities[town].people -= peopleToRemove;
            cities[town].gold -= goldToRemove;

            console.log(`${town} plundered! ${goldToRemove} gold stolen, ${peopleToRemove} citizens killed.`);

            if (cities[town].people === 0 || cities[town].gold === 0) {
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            }
        } else if (eventArr[0] === "Prosper") {
            let goldToAdd = Number(eventArr[2]);

            if (goldToAdd < 0) {
                console.log("Gold added cannot be a negative number!");
                entry = input.shift();
                continue;
            }

            cities[town].gold += goldToAdd;
            console.log(`${goldToAdd} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
        }
        entry = input.shift();
    }

    let towns = Object.entries(cities)
    if (towns.length < 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);

        for (let [town, townInfo] of towns) {
            console.log(`${town} -> Population: ${townInfo.people} citizens, Gold: ${townInfo.gold} kg`);
        }
    }
}
pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);
