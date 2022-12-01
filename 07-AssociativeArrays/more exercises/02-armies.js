function armies(input) {
    let armiesObject = {};

    for (let entry of input) {
        if (entry.includes("arrives")) {
            let index = entry.indexOf(" arrives");
            let leader = entry.substring(0, index);
            armiesObject[leader] = {};
            armiesObject[leader]['total'] = 0;
        } else if (entry.includes(":")) {
            let [leader, armyInfo] = entry.split(": ");
            if (armiesObject.hasOwnProperty(leader)) {
                let [armyName, armyCount] = armyInfo.split(', ');
                armiesObject[leader][armyName] = Number(armyCount);
                armiesObject[leader]['total'] += Number(armyCount);
            }
        } else if (entry.includes("+")) {
            let [armyName, armyCount] = entry.split(" + ");
            for (let key of Object.keys(armiesObject)) {
                if (armiesObject[key].hasOwnProperty(armyName)) {
                    armiesObject[key][armyName] += Number(armyCount);
                    armiesObject[key]['total'] += Number(armyCount);
                    break;
                }
            }
        } else if (entry.includes("defeated")) {
            let leader = entry.substring(0, (entry.length - "defeated".length - 1));
            delete armiesObject[leader];
        }
    }

    let sortedLeadersNames = Object.keys(armiesObject).sort((a, b) => armiesObject[b].total - armiesObject[a].total);;

    for (let name of sortedLeadersNames) {
        console.log(`${name}: ${armiesObject[name].total}`);
        delete armiesObject[name].total;
        let army = armiesObject[name];
        let sortedArmy = Object.entries(army).sort((a, b) => b[1] - a[1]);
        sortedArmy.forEach(el => console.log(`>>> ${el[0]} - ${el[1]}`));
    }
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);