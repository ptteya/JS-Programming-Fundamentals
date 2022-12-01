function meetings(input) {
    let scheduledMeetings = {};

    for (let appointment of input) {
        let [day, name] = appointment.split(" ");

        if (scheduledMeetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            scheduledMeetings[day] = name;
        }
    }

    for (let key in scheduledMeetings) {
        console.log(`${key} -> ${scheduledMeetings[key]}`);
    }
}
meetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);