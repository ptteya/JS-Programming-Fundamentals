function commonElements(firstArr, secondArr) {
    for (let el of firstArr) {
        let isEqual = secondArr.includes(el);
        if (isEqual) {
            console.log(el);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);


// for (let i = 0; i < firstArr.length; i++) {
//     for (let j = 0; j < secondArr.length; j++) {
//         if (firstArr[i] === secondArr[j]) {
//             console.log(firstArr[i]);
//         }
//     }
// }