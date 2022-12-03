function degustationParty(input) {
    let arr = input.slice(0);
    let line = arr.shift();

    let guestsList = {};
    let unlikedMeals = 0;

    while (line !== 'Stop') {
        let [command, guest, meal] = line.split('-');

        switch (command) {
            case 'Like':
                like(guestsList, guest, meal);
                break;
            case 'Dislike':
                let result = dislike(guestsList, guest, meal);
                console.log(result);
                break;
        }

        line = arr.shift();
    }

    for (let [key, value] of Object.entries(guestsList)) {
        console.log(`${key}: ${value.join(', ')}`);
    }

    console.log(`Unliked meals: ${unlikedMeals}`);


    function like(guestsList, currGuest, currMeal) {
        if (!guestsList.hasOwnProperty(currGuest)) {
            guestsList[currGuest] = [];
        }

        if (!guestsList[currGuest].includes(currMeal)) {
            guestsList[currGuest].push(currMeal);
        }
    }

    function dislike(guestsList, currGuest, currMeal) {
        if (!guestsList.hasOwnProperty(currGuest)) {
            return `${currGuest} is not at the party.`;
        }

        if (!guestsList[currGuest].includes(currMeal)) {
            return `${currGuest} doesn't have the ${currMeal} in his/her collection.`;
        }

        let mealIndex = guestsList[currGuest].indexOf(currMeal);
        guestsList[currGuest].splice(mealIndex, 1);
        unlikedMeals++;

        return `${currGuest} doesn't like the ${currMeal}.`
    }
}

degustationParty([
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"
]);

degustationParty([
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"
]);


degustationParty([
    "Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"
]);

//another solution
// function degustationParty(input) {
//     let arr = input.slice(0);
//     let line = arr.shift();

//     let guestsList = {};
//     let unlikedMeals = 0;

//     while (line !== 'Stop') {
//         let [command, guest, meal] = line.split('-');

//         switch (command) {
//             case 'Like':
//                 if (!guestsList.hasOwnProperty(guest)) {
//                     guestsList[guest] = [];
//                 }

//                 if (!guestsList[guest].includes(meal)) {
//                     guestsList[guest].push(meal);
//                 }

//                 break;
//             case 'Dislike':
//                 if (!guestsList.hasOwnProperty(guest)) {
//                     console.log(`${guest} is not at the party.`);
//                 } else {
//                     if (!guestsList[guest].includes(meal)) {
//                         console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
//                     } else {
//                         let mealIndex = guestsList[guest].indexOf(meal);
//                         guestsList[guest].splice(mealIndex, 1);
//                         console.log(`${guest} doesn't like the ${meal}.`);
//                         unlikedMeals++;
//                     }
//                 }
//                 break;
//         }

//         line = arr.shift();
//     }

//     for (let [key, value] of Object.entries(guestsList)) {
//         console.log(`${key}: ${value.join(', ')}`);
//     }

//     console.log(`Unliked meals: ${unlikedMeals}`);
// }