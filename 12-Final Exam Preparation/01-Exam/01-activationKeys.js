function activationKeys(input) {
    let activationKey = input.shift();
    input.pop();

    for (let entry of input) {
        if (entry.includes("Contains")) {
            let [command, substring] = entry.split(">>>");
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (entry.includes("Flip")) {
            let [command, upperOrLower, startIndex, endIndex] = entry.split(">>>");

            let strToFlip = activationKey.substring(Number(startIndex), Number(endIndex));
            let flipped = "";
            if (upperOrLower === "Upper") {
                flipped = strToFlip.toUpperCase();
            } else {
                flipped = strToFlip.toLowerCase();
            }
            activationKey = activationKey.replace(strToFlip, flipped);
            console.log(activationKey);
        } else if (entry.includes("Slice")) {
            let [command, startIndex, endIndex] = entry.split(">>>");

            let strToRemove = activationKey.substring(Number(startIndex), Number(endIndex));
            activationKey = activationKey.replace(strToRemove, "");
            console.log(activationKey);
        }
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);
