// Given five numbers as input.
// Calculate and print the average of the numbers(without using arrays).

let a = +prompt("Enter number a");
let b = +prompt("Enter number b");
let c = +prompt("Enter number c");
let d = +prompt("Enter number d");
let e = +prompt("Enter number e");
let result;

result = (a + b + c + d + e) / 5;

alert(`average of the numbers
 ( ${a} + ${b} + ${c} + ${d} + ${e} ) / 5 = ${result}`);
