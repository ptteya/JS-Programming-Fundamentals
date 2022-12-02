function asciiSumator(input) {
    let firstCode = input[0].charCodeAt(0);
    let secondCode = input[1].charCodeAt(0);
    let str = input[2];
    let sum = 0;

    for (let chr of str) {
        let chrCode = chr.charCodeAt(0);
        if (firstCode < secondCode) {
            if (chrCode > firstCode && chrCode < secondCode) {
                sum += chrCode;
            }
        } else {
            if (chrCode < firstCode && chrCode > secondCode) {
                sum += chrCode;
            }
        }
    }

    console.log(sum);
}
asciiSumator(['?', 'E', '@ABCEF']);