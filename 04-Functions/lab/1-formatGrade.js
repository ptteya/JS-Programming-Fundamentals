function formatGrade(grade) {
    let result = "";

    if (grade < 3.00) {
        result = `Fail (2)`;
    } else if (grade < 3.50) {
        result = `Poor (${grade.toFixed(2)})`;
    } else if (grade < 4.50) {
        result = `Good (${grade.toFixed(2)})`;
    } else if (grade < 5.50) {
        result = `Very Good (${grade.toFixed(2)})`;
    } else {
        result = `Excellent (${grade.toFixed(2)})`;
    }
    console.log(result);
}
formatGrade(4.50);