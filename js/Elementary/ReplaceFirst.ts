import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (values: number[]): number[] =>
  values.length === 0 ? [] : values.slice(1).concat(values[0])

function replaceFirst(values: number[]): number[] {
  return realSolution(values)
}

console.log('Example:')
console.log(replaceFirst([1, 2, 3, 4]))

// These "asserts" are used for self-checking
assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1])
assert.deepEqual(replaceFirst([1]), [1])
assert.deepEqual(replaceFirst([]), [])

console.log("Coding complete? Click 'Check' to earn cool rewards!")
