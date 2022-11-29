function lastKNumSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sequenceK = result.slice(-k);
        let sum = 0;

        for (let el of sequenceK) {
            sum += el;
        }

        result.push(sum);
    }
    console.log(result.join(" "));
}
lastKNumSequence(6, 3);