let a = +prompt("Enter numer a");
let b = +prompt("Enter number b");

alert(`a = ${a}
b = ${b}`);

a = a + b;
b = a - b;
a = a - b;

alert(`a = ${a}
b = ${b}`);
