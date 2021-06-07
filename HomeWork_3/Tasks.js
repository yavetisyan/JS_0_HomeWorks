//1.  Given a num round it to the nearest 50 without using “if” operator
//(conditions).

let sum = +prompt("Enter num");
let result;
result = sum % 50;

switch (true) {
  case result < 25:
    console.log(sum - result); //
    break;

  case result > 25:
    console.log(sum - result + 50); //
    break;

  case result == 25:
    console.log(sum + result);
    break;

  default:
    console.log("Error");
    break;
}

//---------------

let num = +prompt("enter number");
console.log(Math.round(num / 50) * 50);

//--------------

let num = +prompt("enter number");

//2. Find the sign of product of three nums without multiplication
//operator. Display the s pecified sign.

let a = +prompt("Enter num");
let b = +prompt("Enter num");
let c = +prompt("Enter num");

if (a > 0 && b > 0 && c > 0) {
  console.log("The sign is +");
} else if (a < 0 && b < 0 && c < 0) {
  console.log("The sign is -");
} else if (a > 0 && b < 0 && c < 0) {
  console.log("The sign is +");
} else if (a < 0 && b > 0 && c < 0) {
  console.log("The sign is +");
} else if (a < 0 && b < 0 && c > 0) {
  console.log("The sign is +");
} else if (a == 0 || b == 0 || c == 0) {
  console.log("unsigned");
} else {
  console.log("The sign is -");
}

//-----------------------

if (a === 0 || b === 0 || c === 0) {
  console.log("unignet");
} else if (
  (a > 0 && b > 0 && c > 0) ||
  (a > 0 && b < 0 && c < 0) ||
  (a < 0 && b < 0 && c > 0) ||
  (a < 0 && b > 0 && c < 0)
) {
  console.log("+");
} else {
  console.log("-");
}
//-------------

let numC = 12;
let arr = [];
for(let i=0; i<numC; i++){
    const curentNum = +prompt('Enter number')
    arr.push(curentNum)
    //arr[i] = curentNum
}
lte numC = +prompt('Enter number lenth')​;
let negC = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] === 0){
        cosnole.log('0')    
        break
    }
    if(arr[i]<0){
        negC++
    }
}
if(negC %2){
    console.log('-')
}else{
    console.log('+')
}


// 3. Insert a digit and a number. Check whether the digits contains in the
//number or not.

let digit = +prompt("Enter a digit number");
let num = +prompt("Enter number");

if (num == digit) {
  console.log("Yes");
}

while (num != 0) {
  if (num % 10 == digit) {
    console.log("Yes");
    break;
  }
  num = Math.floor(num / 10);
}
if (num == 0) {
  console.log("No");
}

//-----------------
let number = +prompt("Enter number");

while (number) {
  let lastDigit = number % 10;
  number = (number - lastDigit) / 10;
  console.log(number);
}
//---------------
for (let number = +prompt("Enter number"); number; number = (number - (number % 10)) / 10) {
  console.log(number);
}

//-----------------------------




// 4. Enter a number. Find the difference between its biggest and smallest digits.

let num = +prompt("Enter number");

let max = 0;
let min = num % 10;

while (num > 0) {
  let digit = num % 10;
  max = Math.max(digit, max);
  min = Math.min(digit, min);
  num = Math.floor(num / 10);
}
console.log(max - min);

//5. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

let num = +prompt("Enter number");
let x = 1;

for (i = 2; i < num; i++) {
  if (num % i == 0) {
    x = 0;
    break;
  }
}
if (x == 1) {
  console.log("Yes");
} else {
  console.log("No");
}
