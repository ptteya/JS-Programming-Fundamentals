function garage(input) {
    let garages = {};

    for (let entry of input) {
        let [garageNum, garageInfo] = entry.split(" - ");

        if (!garages.hasOwnProperty(garageNum)) {
            garages[garageNum] = [];
        }
        garages[garageNum].push(garageInfo);
    }

    for (let [garage, carsInfo] of Object.entries(garages)) {
        console.log(`Garage № ${garage}`);
        for (let carInfo of carsInfo) {
            carInfo = carInfo.replace(new RegExp(": ", "g"), " - ");
            console.log(`--- ${carInfo}`);
        }
    }
}

garage([
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'
]);