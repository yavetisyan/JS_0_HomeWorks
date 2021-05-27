// Given three numbers. Sort them by the ascending order.

let a = +prompt("Enter number a");
let b = +prompt("Enter number b");
let c = +prompt("Enter number c");

//

if (a > b && a > c) {
  if (b > c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else if (c > a && c > b) {
  if (a > b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

// or

// if (a > b && a > c && b > c) {
//  console.log(a, b, c);
//} else if (a > b && a > c && c > b) {
//  console.log(a, c, b);
//} else if (b > a && b > c && a > c) {
//  console.log(b, a, c);
//} else if (b > a && b > c && c > a) {
//  console.log(b, c, a);
//} else if (c > a && c > b && a > b) {
//  console.log(c, a, b);
//} else {
//  console.log(c, b, a);
//}
