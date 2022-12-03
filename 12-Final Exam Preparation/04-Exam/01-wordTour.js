function wordTour(input) {
    let stops = input.shift();
    let line = input.shift();

    while (line !== "Travel") {
        let [command, ...tokens] = line.split(":");

        if (command === "Add Stop") {
            let index = Number(tokens[0]);
            let str = tokens[1];

            if (isValidIndex(index, stops)) {
                stops = stops.substring(0, index) + str + stops.substring(index);
            }
        } else if (command === "Remove Stop") {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);

            if (isValidIndex(startIndex, stops) && isValidIndex(endIndex, stops)) {
                let word = "";
                for (let i = startIndex; i <= endIndex; i++) {
                    word += stops[i];
                }
                stops = stops.replace(word, "");
            }

        } else if (command === "Switch") {
            let oldString = tokens[0];
            let newString = tokens[1];

            if (stops.includes(oldString)) {
                stops = stops.replace(new RegExp(oldString, "g"), newString);
            }
        }
        console.log(stops);
        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

    function isValidIndex(index, str) {
        if (index < 0 || index >= str.length) {
            return false;
        }
        return true;
    }
}
wordTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);

