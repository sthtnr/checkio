import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (line1: string, line2: string): boolean => {
  for (let i = 0; i < line1.length; i++) {
    for (let k = 1; k < line1.length; k++) {
      if (line1[k] === line1[i] && line2[k] !== line2[i]) {
        return false
      }
    }
  }
  return new Set(line1).size === new Set(line2).size
}

function isometricStrings(line1: string, line2: string): boolean {
  return realSolution(line1, line2)
}

console.log('Example:')
console.log(isometricStrings('add', 'egg'))

// These "asserts" are used for self-checking
assert.equal(isometricStrings('add', 'egg'), true)
assert.equal(isometricStrings('foo', 'bar'), false)
assert.equal(isometricStrings('', ''), true)
assert.equal(isometricStrings('all', 'all'), true)
assert.equal(isometricStrings('gogopy', 'doodle'), false)

console.log("Coding complete? Click 'Check' to earn cool rewards!")
