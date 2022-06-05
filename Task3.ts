const inputArr = [ 2, 3, 10, 11, 12, 22, 297 ];

function bazFizzBuzz(input) {
  const answerArr = []

  input.forEach(element => {
    switch(true) {
      case element % 3 === 0 && element % 11 === 0:
        answerArr.push('fizzbuzz')
        break;
      case element % 3 === 0:
        answerArr.push('fizz')
        break;
      case element % 11 === 0:
        answerArr.push('buzz')
        break;
      default:
        answerArr.push('bazz')
    }
  })
  return answerArr
}

bazFizzBuzz(inputArr)