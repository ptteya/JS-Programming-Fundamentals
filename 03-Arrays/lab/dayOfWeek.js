function dayOfWeek(num) {
    if (num < 1 || num > 7) {
        console.log("Invalid day!");
    } else {
        let dayArr = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];

        console.log(dayArr[num - 1]);
    }
}
dayOfWeek(6);