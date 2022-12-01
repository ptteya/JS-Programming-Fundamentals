function piccolo(input) {
    let cars = {};

    for (let carEntry of input) {
        let [direction, carNumber] = carEntry.split(", ");

        if (direction === "IN") {
            cars[carNumber] = direction;
        } else if (cars.hasOwnProperty(carNumber) && direction === "OUT") {
            delete cars[carNumber];
        }
    }

    let keysArr = Object.keys(cars);
    let sortedCarsNumbers = keysArr.sort((a, b) => a.localeCompare(b));

    if (sortedCarsNumbers.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (let carNum of sortedCarsNumbers) {
            console.log(carNum);
        }
    }
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

