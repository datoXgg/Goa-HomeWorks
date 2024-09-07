function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("The year is a leap year.");
    } else {
        console.log("The year is not a leap year.");
    }
}

function largerNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function smallestNumber(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}

function isEmptyString(str) {
    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
}

function isPalindrome(str) {
    var reversedStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    if (str === reversedStr) {
        return true;
    } else {
        return false;
    }
}

function gradeToLetter(grade) {
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
