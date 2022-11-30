function equalNeighbors(input) {
    let index = 0;
    let currentArr = input[index];
    index++;
    let firstArrL = currentArr.length;
    let allArrays = [];
    let equals = 0;


    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < currentArr.length; j++) {
            allArrays.push(currentArr[j]);
            if (currentArr[j] === currentArr[j + 1]) {
                equals++;
            }
        }
        currentArr = input[index];
        index++;
    }

    allArrays.forEach((el, i) => {
        if (el === allArrays[i + firstArrL]) {
            equals++;
        }
    })

    console.log(equals);
}
equalNeighbors([['2', '3', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']]);
