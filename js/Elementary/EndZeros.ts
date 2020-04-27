import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (value: number): number =>
  value.toString()[-1] === '0' ? 1 : 0

function endZeros(value: number): number {
  return realSolution(value)
}

console.log('Example:')
console.log(endZeros(0))

// These "asserts" are used for self-checking
assert.equal(endZeros(0), 1)
assert.equal(endZeros(1), 0)
assert.equal(endZeros(10), 1)
assert.equal(endZeros(101), 0)
assert.equal(endZeros(245), 0)
assert.equal(endZeros(100100), 2)

console.log("Coding complete? Click 'Check' to earn cool rewards!")
