import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (text: string): number => text.match(/\d/g)?.length || 0

function countDigits(text: string): number {
  return realSolution(text)
}

console.log('Example:')
console.log(countDigits('hi'))

// These "asserts" are used for self-checking
assert.equal(countDigits('hi'), 0)
assert.equal(countDigits('who is 1st here'), 1)
assert.equal(countDigits('my numbers is 2'), 1)
assert.equal(
  countDigits(
    'This picture is an oil on canvas ' +
      'painting by Danish artist Anna ' +
      'Petersen between 1845 and 1910 year'
  ),
  8
)
assert.equal(countDigits('5 plus 6 is'), 2)
assert.equal(countDigits(''), 0)

console.log("Coding complete? Click 'Check' to earn cool rewards!")
