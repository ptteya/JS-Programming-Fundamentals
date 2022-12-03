function flattenArr(arr) {
    let result = [];
    function iterateArr(arr) {
        for (let el of arr) {
            if (typeof el === "number") {
                result.push(el);
            } else if (Array.isArray(el)) {
                iterateArr(el);
            }
        }
    }

    iterateArr(arr);
    console.log(result);
}
flattenArr([1, 2, 3, 4, "asd", false, [5, 6, 'a', 7, 8, [9, 'b', 10, 133, ["hello", 10, 11]]]]);