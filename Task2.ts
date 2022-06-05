const arr = [ 'Hello World', 'Bye World', 'Useless World' ];

// pseudocode

// - loop over the array of strings
// - for each string element in the array
  // - split the string into an array of words
  // - create a do while statement to pop the last element from array of words adding them to placeholder array, do this until the array of words has length of 0 (reversing their order)
  // - split each popped word, and loop over the array of letters comparing and replacing with * if sequence of same character, join the popped word afterwards and add to empty placeholder array

function reverseOrder(arr:any[]) {
  const reversedArr:any[] = [];

  arr.forEach(element => {
    const splitStringArr = element.split(' ')
    const placeholderArr = [];
    do {
      const tempWord = splitStringArr.pop()
      const splitTempWord = tempWord.split('')
      const formattedWordArr = [];
      for (let i = 0; i <= splitTempWord.length - 1; i++) {
        if (i === splitTempWord.length - 1) {
          splitTempWord[i] === splitTempWord[i - 1] ? formattedWordArr.push('*') : formattedWordArr.push(splitTempWord[i]);
        } else {
          splitTempWord[i] === splitTempWord[i + 1] ? formattedWordArr.push('*') : formattedWordArr.push(splitTempWord[i]);
        }
      }
      placeholderArr.push(formattedWordArr.join(''))
    } while (splitStringArr.length > 0);
    reversedArr.push(placeholderArr.join(' '))
  })
  
  return reversedArr
}

console.log(reverseOrder(['Hello World First', 'Bye World', 'Useless World']))