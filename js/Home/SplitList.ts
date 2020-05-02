import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (values: number[]): number[][] => {
  const sakaime = Math.ceil(values.length / 2)
  return [values.slice(0, sakaime), values.slice(sakaime)]
}

function splitList(values: number[]): number[][] {
  return realSolution(values)
}

console.log('Example:')
console.log(splitList([1, 2, 3, 4, 5, 6]))

// These "asserts" are used for self-checking
assert.deepEqual(splitList([1, 2, 3, 4, 5, 6]), [
  [1, 2, 3],
  [4, 5, 6],
])
assert.deepEqual(splitList([1, 2, 3]), [[1, 2], [3]])
assert.deepEqual(splitList([1, 2, 3, 4, 5]), [
  [1, 2, 3],
  [4, 5],
])
assert.deepEqual(splitList([1]), [[1], []])
assert.deepEqual(splitList([]), [[], []])

console.log("Coding complete? Click 'Check' to earn cool rewards!")
