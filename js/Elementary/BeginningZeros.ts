import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (text: string): number => {
  const text2number = Number(text)
  return text2number === 0
    ? text.length
    : text.length - String(text2number).length
}

function beginningZeros(text: string): number {
  return realSolution(text)
}

console.log('Example:')
console.log(beginningZeros('100'))

// These "asserts" are used for self-checking
assert.equal(beginningZeros('100'), 0)
assert.equal(beginningZeros('001'), 2)
assert.equal(beginningZeros('100100'), 0)
assert.equal(beginningZeros('001001'), 2)
assert.equal(beginningZeros('012345679'), 1)
assert.equal(beginningZeros('0000'), 4)

console.log("Coding complete? Click 'Check' to earn cool rewards!")
