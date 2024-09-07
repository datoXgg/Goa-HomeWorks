function performArithmetic(str, num) {
    const parsedValue = parseFloat(str);

    if (isNaN(parsedValue)) {
        console.log(`"${str}" is not a valid number.`);
        return;
    }

    console.log(`Performing operations with string "${str}" and number ${num}:`);
    console.log(`Addition (+): ${parsedValue + num}`);
    console.log(`Subtraction (-): ${parsedValue - num}`);
    console.log(`Multiplication (*): ${parsedValue * num}`);

    if (num !== 0) {
        console.log(`Division (/): ${parsedValue / num}`);
    } else {
        console.log(`Division (/): Cannot divide by zero.`);
    }
}

// Examples:
performArithmetic("10", 5);
performArithmetic("7.5", 2);
performArithmetic("3.14", 0);
performArithmetic("Hello World", 10);
