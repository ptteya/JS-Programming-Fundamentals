function maxSequenceOfEqualElements(arr) {
    let longestSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currSequence = [arr[i]];

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                break;
            } else {
                currSequence.push(arr[j]);
            }
        }

        if (longestSequence.length < currSequence.length) {
            longestSequence = currSequence;
        }
    }
    console.log(longestSequence.join(" "));
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])