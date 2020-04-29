import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (text: string): boolean => {
  let counter = 0
  const wordArr = text.split(/\s/)
  for (const word of wordArr) {
    if (isNaN(Number(word))) {
      counter++
    } else {
      counter = 0
    }
    if (counter >= 3) {
      return true
    }
  }
  return false
}

function threeWords(text: string): boolean {
  return realSolution(text)
}

console.log('Example:')
console.log(threeWords('Hello World hello'))

assert.equal(threeWords('Hello World hello'), true)
assert.equal(threeWords('He is 123 man'), false)
assert.equal(threeWords('1 2 3 4'), false)
assert.equal(threeWords('bla bla bla bla'), true)
assert.equal(threeWords('Hi'), false)
console.log(
  "Coding complete? Click 'Check' to review your tests and earn cool rewards!"
)
