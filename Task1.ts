// You are given A1 and A2, as well as the index = n

// A1 === first number
// A2 === second number
// n === index

// input = '1 2 5'
// output = 8

// A1 = 1
// A2 = 2
// A3 = A2 + A1 = 2 + 1 = 3
// A4 = A3 + A2 = 3 + 2 = 5
// A5 = A4 + A3 = 5 + 3 = 8
// A6 = A5 + A4 = 8 + 5 = 13
// A7 = A6 + A5 = 13 + 8 = 21

// pseudocode

// - declare function with a string input
// - split the string input into array of string elements
// - declare constants for A1, A2, and n inputs by parsing each element in split array
// - declare placeholder array
// - push A1 and A2 into first positions of placeholder array
// - create a for loop to push in the next number in sequence at end of Array
//   - loop will start with pushing in third number and will continue until the nth number is pushed in, then stop
//   - in each loop, the number to be pushed will be calculated by taking the current last number element in the array, and adding to it the number element with the index one lower than it (to the left of it)
// - after the for loop has finished, function to return the last number element in the placeholder array

function outputNthElementInSequence(input:string) {
  const splitInputArr = input.split(' ');
  const A1:number = parseInt(splitInputArr[0]);
  const A2:number = parseInt(splitInputArr[1]);
  const n:number = parseInt(splitInputArr[2]);
  
  const numArr = [];
  numArr.push(A1, A2);
  
  for (let i = 3; i <= n; i++) {
    numArr.push((numArr[numArr.length - 1] + numArr[numArr.length - 2]));
  };

  return numArr[numArr.length - 1];
}

outputNthElementInSequence('1 2 5');