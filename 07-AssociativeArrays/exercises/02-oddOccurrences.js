function oddOccurrences(input) {
    let words = input.toLowerCase().split(" ");
    let map = new Map;

    for (let word of words) {
        let value = 0;
        if (map.has(word)) {
            value = map.get(word);
        }
        value++;
        map.set(word, value);
    }

    let entries = Array.from(map.entries());
    let filteredArr = entries.filter((entry) => {
        return entry[1] % 2 !== 0;
    });

    let result = [];
    for (let element of filteredArr) {
        result.push(element[0]);
    }

    console.log(result.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');