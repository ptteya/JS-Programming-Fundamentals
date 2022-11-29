function distinctArray(array) {
    let filteredArr = array.filter((el, i) => {
        return array.indexOf(el) === i;
    });
    console.log(filteredArr.join(" "));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])