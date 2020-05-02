import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (elements: any[]): boolean =>
  elements.length === 0 || new Set(elements).size === 1

function allTheSame(elements: any[]): boolean {
  return realSolution(elements)
}

console.log('Example:')
console.log(allTheSame([1, 1, 1]))

// These "asserts" are used for self-checking and not for an auto-testing

assert.equal(allTheSame([1, 1, 1]), true)
assert.equal(allTheSame([1, 2, 1]), false)
assert.equal(allTheSame(['a', 'a', 'a']), true)
assert.equal(allTheSame([]), true)
assert.equal(allTheSame([1]), true)
console.log("Coding complete? Click 'Check' to earn cool rewards!")
