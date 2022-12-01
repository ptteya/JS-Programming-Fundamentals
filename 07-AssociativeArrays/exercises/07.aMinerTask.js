function aMinerTask(input) {
    let resources = {};

    for (let i = 0; i < input.length - 1; i += 2) {
        let currResource = input[i];
        let quantity = Number(input[i + 1]);

        if (!resources.hasOwnProperty(currResource)) {
            resources[currResource] = quantity;
        } else {
            resources[currResource] += quantity;
        }
    }

    for (let [resource, quantity] of Object.entries(resources)) {
        console.log(`${resource} -> ${quantity}`);
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);