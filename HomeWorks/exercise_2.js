let a = +prompt("Enter number a");
let b = +prompt("Enter number b");

let result;

result = a > b;
alert(`${a} > ${b} = ${result}`);
result = a + b;
alert(`${a} + ${b} = ${result}`);
result = a * b;
alert(`${a} * ${b} = ${result}`);
result = a / b;
alert(`${a} / ${b} = ${result}`);

if (a < b) {
  alert("Error a < b, now work");
} else {
  result = a % b;
  alert(`${a} % ${b} = ${result}`);
}
