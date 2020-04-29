import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (values: number[], search: number): number => {
  const idxOfLowerNearest = values
    .sort((a, b) => b - a)
    .findIndex((x) => x <= search)
  const LowerNearest = values[idxOfLowerNearest] ?? values[values.length - 1]
  const HigherNearest = values[idxOfLowerNearest - 1] ?? values[0]
  return Math.abs(search - LowerNearest) <= Math.abs(search - HigherNearest)
    ? LowerNearest
    : HigherNearest
}

function nearestValue(values: number[], search: number): number {
  return realSolution(values, search)
}

console.log('Example:')
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9))

// These "asserts" are used for self-checking
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10)
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7)
assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8)
assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9)
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4)
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17)
assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8)
assert.equal(nearestValue([-1, 2, 3], 0), -1)

console.log("Coding complete? Click 'Check' to earn cool rewards!")
