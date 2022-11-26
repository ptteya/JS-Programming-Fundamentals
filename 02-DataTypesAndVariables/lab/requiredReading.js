function requiredReading(pagesNum, pagesForHour, days){
    let totalHours = pagesNum / pagesForHour;
    let hoursPerDay = totalHours / days;
    console.log(hoursPerDay);
}
requiredReading(432, 15 , 4);