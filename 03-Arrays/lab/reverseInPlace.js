function reverseInPlace(input) {
    let k = input.length - 1;
    for (let i = 0; i < input.length / 2; i++) {
        let current = input[i];
        input[i] = input[k - i];
        input[k - i] = current;
    }
    console.log(input.join(" "))
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);