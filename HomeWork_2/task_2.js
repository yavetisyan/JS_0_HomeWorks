// Given a positive integer. Bring the last digit of the number to the beginning.
// Print the new number.
// If the last digit of the inserted number is 0, number remains the same.

let num = +prompt("Enter number");

let lastNum, result;

lastNum = num % 10;
console.log(lastNum);

if (num < 10) {
  alert(`You type ${num}
	Result = ${num}`);
} else if (lastNum != 0) {
  result = "" + lastNum + (num - lastNum) / 10;
  alert(`You type ${num}
	last nuber = ${lastNum} 
	Result =  ${result}`);
} else {
  result = num - lastNum;
  alert(`You type ${num} 
	Last number = ${lastNum}
	Result = ${result}`);
}
