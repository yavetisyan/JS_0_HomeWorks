// 1. Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

let count = Math.abs(prompt("Enter the count arrays"));
let arraY = [];
let number = arraY;

for (let i = 0; i < count; i++) {
  arraY.push(Math.abs(prompt("Enter arrays")));
}

function isOdd(num) {
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
      arr.push(num[i]);
    }
  }
  return arr;
}

function isEven(num) {
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      arr.push(num[i]);
    }
  }
  return arr;
}

console.log(isOdd(number), isEven(number));

// 2. Given a word and a list of possible anagrams, select the correct sublist.
// Work onli one letter, when in string two letters, the program not work

let a = ["inlets", "enlists", "google", "banana"];
let b = "listen";

function anagr(arr, findeAnagr) {
  let array = [];
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i].length !== findeAnagr.length) {
        break;
      }
      for (let k = 0; k < findeAnagr.length; k++) {
        if (arr[i][j] === findeAnagr[k]) {
          result += findeAnagr[k];
        }
      }
    }
    if (result === arr[i]) {
      return arr[i];
    }
  }
}

console.log(anagr(a, b));

// 3. Write a function which receives two strings and removes
//appearances of the second string from the first one

let txt = prompt("Enter some text");
let remWord = prompt("Enter removed word");

function removeStr(text, rtext) {
  return text.split(rtext).join("");
}

console.log(removeStr(txt, remWord));

// 4. Given an array of numbers. Create an array containing only unique elements.

let digit = +prompt("Enter digit arry");
let a = [];

for (let i = 0; i < digit; i++) {
  a.push(+prompt("Enter  arrays"));
}

function uniqElem(arr) {
  let result = [];
  let count = 0;
  let bool = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        bool = true;
      }
    }
    count++;
    if (count == 1 && bool == false) {
      result.push(arr[i]);
    }
    bool = false;
    count = 0;
  }
  return result;
}

console.log(uniqElem(a));

// 5. Given a string and symbols. Change first symbol by the second one in the string.

let txt = prompt("Enter some text");
let oldT = prompt("Enter old word");
let newT = prompt("Enter new word");

function replaceStr(text, rtext) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === rtext) {
      text[i] = newT;
      return text.rep~laceAll(oldT, newT);
    }
  }
}

console.log(replaceStr(txt, oldT));
