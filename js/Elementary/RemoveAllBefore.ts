import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (values: number[], b: number): number[] => {
  const idxOfb = values.indexOf(b)
  return idxOfb < 0 ? values : values.slice(idxOfb)
}

function removeAllBefore(values: number[], b: number): number[] {
  return realSolution(values, b)
}

console.log('Example:')
console.log(removeAllBefore([1, 2, 3, 4, 5], 3))

// These "asserts" are used for self-checking
assert.deepEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5])
assert.deepEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3])
assert.deepEqual(removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2), [2, 4, 2, 3, 4])
assert.deepEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7])
assert.deepEqual(removeAllBefore([], 0), [])
assert.deepEqual(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7), [
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
])

console.log("Coding complete? Click 'Check' to earn cool rewards!")
