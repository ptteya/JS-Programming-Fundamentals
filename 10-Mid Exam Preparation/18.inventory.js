function inventory(input) {
    let journal = input.shift().split(", ");
    let command = input.shift();
    let itemIndex;

    while (command !== "Craft!") {
        let commandArr = command.split(" - ");
        let currCommand = commandArr[0];
        let item = commandArr[1];
        let hasItem = journal.includes(item);

        switch (currCommand) {
            case "Collect":
                if (!hasItem) {
                    journal.push(item);
                }
                break;
            case "Drop":
                if (hasItem) {
                    itemIndex = journal.indexOf(item);
                    journal.splice(itemIndex, 1);
                }
                break;
            case "Combine Items":
                let [oldItem, newItem] = item.split(":");

                if (journal.includes(oldItem)) {
                    itemIndex = journal.indexOf(oldItem);
                    journal.splice(itemIndex + 1, 0, newItem);
                }
                break;
            case "Renew":
                if (hasItem) {
                    itemIndex = journal.indexOf(item);
                    let itemToAdd = journal.splice(itemIndex, 1);
                    journal.push(itemToAdd);
                }
                break;
        }
        command = input.shift();
    }
    console.log(journal.join(", "));
}
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);