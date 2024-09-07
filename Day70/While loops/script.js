let i = 1;
while (i <= 10) console.log(i++);

i = 10;
while (i >= 1) console.log(i--);

let n = 5;
let fact = 1;
while (n > 0) fact *= n--;

console.log(fact);

n = 50;
let a = 0, b = 1;
while (a <= n) {
    console.log(a);
    [a, b] = [b, a + b];
}

n = 123;
let rev = 0;
while (n > 0) {
    rev = rev * 10 + n % 10;
    n = Math.floor(n / 10);
}
console.log(rev);

n = 123456;
let max = 0;
while (n > 0) {
    max = Math.max(max, n % 10);
    n = Math.floor(n / 10);
}
console.log(max);
