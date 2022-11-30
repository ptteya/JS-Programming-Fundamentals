function sortAnArray(arr) {
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()));
    console.log(sortedArr.join("\n"));
}
sortAnArray(['test', 'Deny', 'omen', 'Default']);