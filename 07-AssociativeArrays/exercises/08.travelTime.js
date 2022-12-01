function travelTime(input) {
    let locations = {};

    for (let entry of input) {
        let [country, town, cost] = entry.split(" > ");
        cost = Number(cost);

        if (!locations.hasOwnProperty(country)) {
            locations[country] = { [town]: cost };
        } else {
            if (locations[country].hasOwnProperty(town)) {
                let value = locations[country][town];
                if (cost < value) {
                    locations[country][town] = cost;
                }
            } else {
                locations[country][town] = cost;
            }
        }
    }

    let sortedLocations = Object.entries(locations).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sortedLocations) {

        let townsAndCosts = Object.entries(value)
            .sort((a, b) => a[1] - b[1])
            .map(city => city.join(" -> "))
            .join(" ");

        console.log((key + ' -> ' + townsAndCosts));
    }
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);