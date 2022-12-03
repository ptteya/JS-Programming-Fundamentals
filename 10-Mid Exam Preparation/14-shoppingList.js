function shoppingList(input) {
    let listWithGroceries = input.shift().split("!");
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Go Shopping!") {
        let operatorArr = command.split(" ");
        let operator = operatorArr.shift();
        let includesItem = listWithGroceries.includes(operatorArr[0])
        let itemIndex = listWithGroceries.indexOf(operatorArr[0]);

        switch (operator) {
            case "Urgent":
                if (!includesItem) {
                    listWithGroceries.unshift(operatorArr[0]);
                }
                break;
            case "Unnecessary":
                if (includesItem) {
                    listWithGroceries.splice(itemIndex, 1);
                }
                break;
            case "Correct":
                if (includesItem) {
                    listWithGroceries.splice(itemIndex, 1, operatorArr[1]);
                }
                break;
            case "Rearrange":
                if (includesItem) {
                    itemIndex = listWithGroceries.indexOf(operatorArr[0]);
                    let itemToAdd = listWithGroceries.splice(itemIndex, 1);
                    listWithGroceries.push(itemToAdd);
                }
                break;
        }
        command = input[index];
        index++;
    }
    console.log(listWithGroceries.join(", "));
}
shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)