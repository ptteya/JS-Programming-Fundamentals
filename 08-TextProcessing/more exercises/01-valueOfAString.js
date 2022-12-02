function valueOfAString(input) {
    let text = input[0];
    let upperOrLower = input[1];
    let sum = 0;

    for (let chr of text) {
        let chrCode = chr.charCodeAt(0);
        if (upperOrLower === "UPPERCASE") {
            if (chrCode >= 65 && chrCode <= 90) {
                sum += chrCode;
            }
        } else if (upperOrLower === "LOWERCASE") {
            if (chrCode >= 97 && chrCode <= 122) {
                sum += chrCode;
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);