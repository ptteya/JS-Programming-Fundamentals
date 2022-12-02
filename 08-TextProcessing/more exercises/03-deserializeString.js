function deserializeString(input) {
    let entry = input.shift();
    let result = [];

    while (entry !== "end") {
        let entryArr = entry.split(":")
        let char = entryArr[0];
        let indexesArr = entryArr[1].split("/").map(Number);

        for (let index of indexesArr) {
            result[index] = char;
        }

        entry = input.shift();
    }

    console.log(result.join(""));
}
deserializeString([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
]);