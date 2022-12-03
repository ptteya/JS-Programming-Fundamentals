function heartDelivery(input) {
    let arr = input.slice(0);
    let neighborhood = arr.shift().split("@").map(Number);
    let command = arr.shift();
    let houseIndex = 0;

    while (command !== "Love!") {
        let [jumpCommand, length] = command.split(" ");
        houseIndex += Number(length);

        if (houseIndex > neighborhood.length - 1) {
            houseIndex = 0;
        }

        let currHearts = neighborhood[houseIndex];
        if (currHearts === 0) {
            console.log(`Place ${houseIndex} already had Valentine's day.`)
        } else {
            let decreasedHearts = currHearts - 2;
            if (decreasedHearts === 0) {
                console.log(`Place ${houseIndex} has Valentine's day.`)
            }
            neighborhood.splice(houseIndex, 1, decreasedHearts);
        }
        command = arr.shift();
    }

    console.log(`Cupid's last position was ${houseIndex}.`);

    let housesWithValDay = 0;
    let housesWithoutValDay = 0;
    for (let el of neighborhood) {
        if (el === 0) {
            housesWithValDay++;
        } else {
            housesWithoutValDay++;
        }
    }

    if (housesWithValDay === neighborhood.length) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${housesWithoutValDay} places.`);
    }
}
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
