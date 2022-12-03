function needForSpeed(input) {
    let carsNum = input.shift();
    let cars = {};

    for (let i = 0; i < carsNum; i++) {
        let [car, mileAge, fuel] = input.shift().split("|");
        cars[car] = {
            mileAge: Number(mileAge),
            fuel: Number(fuel)
        };
    }

    let line = input.shift();
    while (line !== "Stop") {
        let [command, car, ...token] = line.split(" : ");

        if (command === "Drive") {
            let distance = Number(token[0]);
            let neededFuel = Number(token[1]);

            if (cars[car].fuel < neededFuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                cars[car].fuel -= neededFuel;
                cars[car].mileAge += distance;
                console.log(`${car} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);

                if (cars[car].mileAge >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }
        } else if (command === "Refuel") {
            let fuel = Number(token[0]);

            if (cars[car].fuel < 75) {
                if (cars[car].fuel + fuel > 75) {
                    fuel = 75 - cars[car].fuel;

                }
                cars[car].fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if (command === "Revert") {
            let kilometers = Number(token[0]);

            cars[car].mileAge -= kilometers;

            if (cars[car].mileAge < 10000) {
                cars[car].mileAge = 10000;
                line = input.shift();
                continue;
            }

            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }

        line = input.shift();
    }

    let entries = Object.entries(cars);
    for (let [key, value] of entries) {

        console.log(`${key} -> Mileage: ${value.mileAge} kms, Fuel in the tank: ${value.fuel} lt.`);

    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);