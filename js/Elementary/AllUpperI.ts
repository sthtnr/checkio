import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (text: string): boolean => text === text.toUpperCase()

function isAllUpper(test: string): boolean {
  return realSolution(test)
}
console.log('Example:')
console.log(isAllUpper('ALL UPPER'))

// These "asserts" are used for self-checking
assert.equal(isAllUpper('ALL UPPER'), true)
assert.equal(isAllUpper('all lower'), false)
assert.equal(isAllUpper('mixed UPPER and lower'), false)
assert.equal(isAllUpper(''), true)

console.log("Coding complete? Click 'Check' to earn cool rewards!")
