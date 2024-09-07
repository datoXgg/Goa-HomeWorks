function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));

function getSquareRoot(num) {
    return Math.sqrt(num);
}
console.log(getSquareRoot(9));

function getRoundNumber(num) {
    return Math.round(num);
}
console.log(getRoundNumber(4.5));

function getRoundDown(num) {
    return Math.floor(num);
}
console.log(getRoundDown(4.7));

function getRoundUp(num) {
    return Math.ceil(num);
}
console.log(getRoundUp(4.3));
