function showDate() {
    let today = new Date();
    console.log((today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear());
}
showDate();

function showTime() {
    let now = new Date();
    console.log(now.getHours() + ":" + (now.getMinutes() < 10 ? "0" : "") + now.getMinutes());
}
showTime();

function getDay(num) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num - 1];
}
console.log(getDay(1));

function daysBetween(date1, date2) {
    let timeDiff = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}
console.log(daysBetween("2024-01-01", "2024-12-31"));

function format(date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');
}
console.log(format(new Date()));

function compare(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    if (d1 < d2) console.log("Date1 is before Date2");
    else if (d1 > d2) console.log("Date1 is after Date2");
    else console.log("Date1 is same as Date2");
}
compare("2024-01-01", "2024-01-02");

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(2, 2024));
