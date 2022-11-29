function pointsValidation(arr) {
    let newArr = arr.slice(0);
    let x1 = newArr.shift();
    let y1 = newArr.shift();
    let x2 = newArr.shift();
    let y2 = newArr.shift();


    if (firstComparison(x1, y1) === true) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (secondComparison(x2, y2) === true) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (thirdComparison(x1, y1, x2, y2) === true) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function firstComparison(x1, y1) {
        let isValid = true;
        let distance = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
        if (Number.isInteger(distance)) {
            isValid = true;
        } else {
            isValid = false;
        }
        return isValid;
    }

    function secondComparison(x2, y2) {
        let isValid = true;
        let distance = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2));
        if (Number.isInteger(distance)) {
            isValid = true;
        } else {
            isValid = false;
        }
        return isValid;
    }

    function thirdComparison(x1, y1, x2, y2) {
        let isValid = true;
        let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        if (Number.isInteger(distance)) {
            isValid = true;
        } else {
            isValid = false;
        }
        return isValid;
    }
}
pointsValidation([3, 0, 0, 4]);