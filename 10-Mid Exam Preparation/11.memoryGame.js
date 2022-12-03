function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let command = input.shift();
    let moves = 1;

    while (command !== 'end' && sequence.length > 0) {

        let [firstIndex, secondIndex] = command.split(' ').map(Number);
        let isInvalidInput = (firstIndex === secondIndex) || (firstIndex < 0 || firstIndex >= sequence.length) || (secondIndex < 0 || secondIndex >= sequence.length);

        if (isInvalidInput) {
            console.log("Invalid input! Adding additional elements to the board");
            let middleNumIndex = Math.floor(sequence.length / 2);
            let newElement = `-${moves}a`;
            sequence.splice(middleNumIndex, 0, newElement, newElement);
        } else {
            if (sequence[firstIndex] === sequence[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);
                sequence = sequence.filter(e => e !== sequence[firstIndex]);
            } else {
                console.log("Try again!");
            }
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        command = input.shift();
        moves++;
    }

    if (sequence.length > 0) {
        console.log("Sorry you lose :(");
        console.log(`${sequence.join(' ')}`);
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]
);

