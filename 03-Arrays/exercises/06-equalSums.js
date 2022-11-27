function equalSums(arr) {
    let isEqual = false;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = 0;
        let leftSum = 0;

        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        if (rightSum === leftSum) {
            isEqual = true;
            console.log(i);
            break;
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}
equalSums([1, 2, 3]);