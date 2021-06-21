// 1. Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

let a = [1, 2, 3, 4, 10, 5, 6];
function isOddEven(arr) {
  const even = [];
  const odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
    if (arr[i] !== 0) {
      odd.push(arr[i]);
    }
  }
  console.log(odd, even);
}

console.log(isOddEven(a));

// 2. Given a word and a list of possible anagrams, select the correct sublist.
// Work onli one letter, when in string two letters, the program not work

let a = ["inlets", "enlists", "google", "banana"];
let b = "listen";

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (isStringsIncludesChar(str1[i], str2)) {
      count++;
    }
  }
  return count === str1.length ? true : false;
}

function isStringsIncludesChar(char, str) {
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      return true;
    }
  }
  return false;
}

function findAnagram(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isAnagram(str, arr[i])) {
      return arr[i];
    }
  }
  return null;
}

debugger;
console.log(findAnagram(b, a));

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
      return text.replaceAll(oldT, newT);
    }
  }
}

console.log(replaceStr(txt, oldT));
