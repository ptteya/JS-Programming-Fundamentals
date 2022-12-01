function schoolGrades(input) {
    let allGrades = {};

    for (let student of input) {
        let studentInfo = student.split(" ");
        let name = studentInfo.shift();
        let studentGrades = studentInfo.map(Number);

        if (allGrades.hasOwnProperty(name)) {
            for (let el of studentGrades) {
                allGrades[name].push(el);
            }
        } else {
            allGrades[name] = studentGrades;
        }
    }

    let entries = Object.entries(allGrades)
    let sorted = entries.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let [name, gradesArr] of sorted) {
        let sum = 0;
        for (let el of gradesArr) {
            sum += Number(el);
        }
        let average = sum / gradesArr.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);


//With Map:
// function schoolGrades(input) {

//     let allGrades = new Map();

//     for (let student of input) {
//         let studentInfo = student.split(" ");
//         let name = studentInfo.shift();
//         let studentGrades = studentInfo.map(Number)

//         if (allGrades.has(name)) {
//             let currGrades = allGrades.get(name);
//             for (let grade of studentGrades) {
//                 currGrades.push(grade);
//             }
//             allGrades.set(name, currGrades);
//         } else {
//             allGrades.set(name, studentGrades);
//         }
//     }

//     let entries = Array.from(allGrades.entries());
//     let sorted = entries.sort((a, b) => {
//         return a[0].localeCompare(b[0]);
//     });

//     for (let [name, gradesArr] of sorted) {
//         let sum = 0;
//         for (let el of gradesArr) {
//             sum += Number(el);
//         }
//         let average = sum / gradesArr.length;

//         console.log(`${name}: ${average.toFixed(2)}`);
//     }
// }
// schoolGrades([
//     'Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6'
// ]);