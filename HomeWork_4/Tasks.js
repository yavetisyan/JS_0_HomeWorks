// 1. Given a number print its digits count.

let num = Math.abs(+prompt("Enter Digit Number"));
let b = "" + num;

console.log("Digit count = " + b.length);

// 2. Count numbers of digit 9 in a number.

let digit = 9;
let number = +prompt("Enter Count numbers");
let strNum = String(number);
let arr = [];
let result = "";

for (let i = 0; i < strNum.length; i++) {
  arr.push(+strNum[i]);

  if (arr[i] === digit) {
    result += arr[i];
  }
}

console.log(`In count '${number}' of digits 9 = ${result.length}`);

// 3. Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)

let a = +prompt("Enter power number");
let b = +prompt("Enter power number");
let result = 1;
let res = " ";

for (let i = 0; i < b; i++) {
  if (result > a && result < b) {
    res += result + ", ";
  }
  result *= 2;
}
console.log(res);

// 4. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

let strNum = prompt("Enter numbers");
let isDigitTrue;

if (strNum.length < 3) {
  console.log("Type minimum 3 numbers");
}

for (let i = 0; i < strNum.length - 1; i++) {
  if (+strNum[i] === 0 && +strNum[i + 1] === 0 && +strNum[i + 2] === 0) {
    isDigitTrue = true;
    break;
  }
}

if (isDigitTrue === true) {
  console.log("Yes");
} else {
  console.log("No");
}

// 5. Insert two positive integers n and m between 1 and 10. Compute and print n m.

let n = Math.abs(+prompt("Enter n"));
let m = Math.abs(+prompt("Enter m"));
let result = 1;

if (n >= 10 || m >= 10) {
  console.log(Math.pow(n, m));
} else {
  console.log("Use 1 to 10 numbers");
}

console.log(result);
//--------------------------------

for (let i = 0; i < m; i++) {
  if (n <= 10 || m <= 10) {
    result *= n;
  } else {
    console.log("Use 1 to 10 numbers");
  }
}
console.log(result);

//--------------------------------

console.log(n ** m);
