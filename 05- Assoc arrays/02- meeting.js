function solve(input) {
    let meetings = {};

    for (let line of input) {
        let [weekday, name] = line.split(' ');

        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}`);
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let keys in meetings) {
        console.log(`${keys} -> ${meetings[keys]}`);
    }
}

solve(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])