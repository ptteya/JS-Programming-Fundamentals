function city(obj) {
    let objEntries = Object.entries(obj);

    for (let [objKey, objValue] of objEntries) {
        console.log(`${objKey} -> ${objValue}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

//With keys
// function city(obj) {
//     let objKeys = Object.keys(obj);

//     for (let key of objKeys) {
//         console.log(`${key} -> ${obj[key]}`);
//     }
// }