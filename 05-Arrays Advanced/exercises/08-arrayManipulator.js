function arrayManipulator(arrOfNumbers, commandsArr) {
    for (let el of commandsArr) {
        let currArray = el.split(" ");
        let command = currArray.shift();
        currArray = currArray.map(Number);
        let index;

        switch (command) {
            case "add":
                index = currArray[0];
                element = currArray[1];
                arrOfNumbers.splice(index, 0, element);
                break;
            case "addMany":
                index = currArray.shift();
                for (let a = 0; a < currArray.length; a++) {
                    arrOfNumbers.splice(index, 0, currArray[a]);
                    index++;
                }
                break;
            case "contains":
                index = arrOfNumbers.indexOf(currArray[0]);
                console.log(index);
                break;
            case "remove":
                arrOfNumbers.splice(currArray[0], 1);
                break;
            case "shift":
                for (let i = 0; i < currArray[0]; i++) {
                    let elToAdd = arrOfNumbers.shift();
                    arrOfNumbers.push(elToAdd);
                }
                break;
            case "sumPairs":
                if (arrOfNumbers.length % 2 !== 0) {
                    arrOfNumbers.push(0);
                }
                let pairsSumArr = [];
                for (let j = 0; j < arrOfNumbers.length; j += 2) {
                    let sum = arrOfNumbers[j] + arrOfNumbers[j + 1];
                    pairsSumArr.push(sum);
                }
                arrOfNumbers = [...pairsSumArr];
                break;
            case "print":
                console.log(`[ ${arrOfNumbers.join(", ")} ]`);
                break;
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);