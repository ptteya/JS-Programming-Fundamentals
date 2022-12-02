function replaceRepeatingChars(text) {
    let output = "";
    for (let chr of text) {
        if (chr !== output[output.length - 1]) {
            output += chr;
        }
    }

    console.log(output)
}
replaceRepeatingChars('qqqwerqwecccwd');