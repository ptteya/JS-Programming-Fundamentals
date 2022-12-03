function softUniReception(arr) {

    let firstEmp = Number(arr.shift());
    let secondEmp = Number(arr.shift());
    let thirdEmp = Number(arr.shift());
    let students = Number(arr.shift());

    let hours = 0;
    let studentsForOneHour = firstEmp + secondEmp + thirdEmp;

    while (students > 0) {
        students -= studentsForOneHour;
        hours++;
        if (hours % 4 === 0) {
            hours++;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['3', '2', '5', '40']);