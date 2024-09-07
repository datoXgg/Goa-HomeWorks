function ageCheck(age) {
    if (age > 18) {
        console.log(`${age} is more than 18`);
    } else if (age < 18) {
        console.log(`${age} is less than 18`);
    } else {
        console.log(`${age} is equal to 18`);
    }
}

ageCheck(22);
ageCheck(15); 
ageCheck(18); 