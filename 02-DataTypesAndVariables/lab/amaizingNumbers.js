function amazingNumbers(number) {
    number = number.toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    let result = sum.toString().includes("9");
    if (result) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}
amazingNumbers(999);