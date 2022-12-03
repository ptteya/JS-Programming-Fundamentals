function theLift(arr) {
    let index = 0;
    let people = Number(arr[index]);
    index++;
    let liftState = arr[index].split(" ");
    let sum = 0;

    let liftStateL = liftState.length;
    for (let i = 0; i < liftStateL; i++) {
        let wagonSpaces = Number(liftState[i]);
        while (wagonSpaces < 4 && people > 0) {
            wagonSpaces++;
            people--;
        }
        sum += wagonSpaces;
        liftState.splice(i, 1, wagonSpaces);
    }

    let emptySpaces = 0;
    if (sum < 4 * liftStateL) {
        emptySpaces = (4 * liftStateL) - sum;
    }

    if (people === 0 && emptySpaces > 0) {
        console.log("The lift has empty spots!")
    } else if (people >= 1 && emptySpaces === 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`)
    }

    console.log(liftState.join(" "));
}
theLift(["15", "1 2 3 4 1"]);
