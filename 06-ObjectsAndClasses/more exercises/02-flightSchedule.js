function flightSchedule(input) {
    let allFlightsArr = input[0];
    let changedFlightsArr = input[1];
    let statusArr = input[2];

    let schedule = {};
    for (let el of allFlightsArr) {
        let spaceIndex = el.indexOf(" ");
        let sector = el.substring(0, spaceIndex);
        let destination = el.substring(spaceIndex + 1, el.length);

        schedule[sector] = {
            Destination: destination,
            Status: "Ready to fly"
        }
    }

    for (let el of changedFlightsArr) {
        let [sector, status] = el.split(" ");
        if (schedule.hasOwnProperty(sector)) {
            schedule[sector].Status = status;
        }
    }

    for (let key of Object.keys(schedule)) {
        if (schedule[key].Status === statusArr[0]) {
            console.log(schedule[key]);
        }
    }
}

flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'],
    ['Ready to fly']
]);