// Given the following code rewrite it using only two if operators.
// (Hint: use logical operators).

/*
let n = +prompt('Enter number');

let i = 0;
let j = 0;
if (n % 2 === 0) {
  if (!Math.floor(n / 10)) {
    i += 1;
  }
}

if (n % 3 === 0) {
  if (n % 10 === 1) {
    j += 1;
  }
}
*/

let n = 60;

let i = 0;
let j = 0;

if (n % 2 && !Math.floor(n / 10)) {
  i += 1;
} else if (n % 3 && n % 10 === 1) {
  j += 1;
}
