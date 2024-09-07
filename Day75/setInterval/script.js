function countdown(seconds) {
    setInterval(() => console.log(seconds-- || "Time's up!"), 1000);
}
countdown(10);

function clock() {
    setInterval(() => {
        let now = new Date();
        console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    }, 1000);
}
clock();

function randomNumber() {
    setInterval(() => console.log(Math.floor(Math.random() * 100) + 1), 2000);
}
randomNumber();

function showDateTime() {
    setInterval(() => console.log(new Date().toLocaleString()), 1000);
}
showDateTime();

function randomWord() {
    let words = ["apple", "banana", "cherry", "date", "elderberry"];
    setInterval(() => console.log(words[Math.floor(Math.random() * words.length)]), 2000);
}
randomWord();
