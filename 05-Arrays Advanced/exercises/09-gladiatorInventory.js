function gladiatorInventory(arr) {
    let commandsArr = arr.slice(0);
    let inventoryArr = commandsArr.shift().split(" ");

    for (let el of commandsArr) {
        let current = el.split(" ");
        let command = current.shift();
        let equipment = current.shift();

        if (command === "Buy") {
            if (!isIncluded(equipment)) {
                inventoryArr.push(equipment);
            }
        } else if (command === "Trash") {
            if (isIncluded(equipment)) {
                let equipmentIndex = inventoryArr.indexOf(equipment);
                inventoryArr.splice(equipmentIndex, 1);
            }
        } else if (command === "Repair") {
            if (isIncluded(equipment)) {
                let equipmentIndex = inventoryArr.indexOf(equipment);
                inventoryArr.splice(equipmentIndex, 1);
                inventoryArr.push(equipment);
            }
        } else if (command === "Upgrade") {
            let upgradeArr = equipment.split("-");
            equipment = upgradeArr.shift();
            let upgrade = upgradeArr.shift();
            if (isIncluded(equipment)) {
                let equipmentIndex = inventoryArr.indexOf(equipment);
                let upgradedEquipment = `${equipment}:${upgrade}`
                inventoryArr.splice(equipmentIndex + 1, 0, upgradedEquipment)
            }
        }
    }

    console.log(inventoryArr.join(" "));
    function isIncluded(equipment) {
        if (inventoryArr.includes(equipment)) {
            return true;
        }
        return false;
    }
}
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
)