function performComparisons() {
    const num1 = parseFloat(prompt("Enter the first numeric value:"));
    const num2 = parseFloat(prompt("Enter the second numeric value:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter valid numeric values.");
        return;
    }

    console.log(`${num1} > ${num2}: ${num1 > num2}`);
    console.log(`${num1} >= ${num2}: ${num1 >= num2}`);
    console.log(`${num1} < ${num2}: ${num1 < num2}`);
    console.log(`${num1} <= ${num2}: ${num1 <= num2}`);
    console.log(`${num1} == ${num2}: ${num1 == num2}`);
    console.log(`${num1} != ${num2}: ${num1 != num2}`);
}
