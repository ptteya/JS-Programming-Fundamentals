function houseParty(arr) {
    let partyList = [];

    for (let el of arr) {
        let current = el.split(" ");
        let name = current.shift();

        if (el === `${name} is not going!`) {
            if (partyList.includes(name)) {
                let index = partyList.indexOf(name);
                partyList.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (!partyList.includes(name)) {
                partyList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    }

    console.log(partyList.join("\n"));
}
houseParty(["Allie is going!", "George is going!", "John is not going!", "George is not going!"]);
