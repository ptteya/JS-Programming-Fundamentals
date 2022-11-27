function addAndRemove(arr) {
    let result = [];
    let initialNumber = 1;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === "add") {
            result.push(initialNumber);
        } else {
            result.pop();
        }
        initialNumber++;
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join(' '));
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
