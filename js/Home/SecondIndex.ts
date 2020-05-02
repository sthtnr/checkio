import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (text: string, symbol: string): number | undefined => {
  let cnt = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] === symbol) {
      cnt++
    }
    if (cnt === 2) {
      return i
    }
  }
  return undefined
}

function secondIndex(text: string, symbol: string): number | undefined {
  return realSolution(text, symbol)
}

console.log('Example')
console.log(secondIndex('sims', 's'))

// These "asserts" are used for self-checking and not for an auto-testing
assert.equal(secondIndex('sims', 's'), 3)
assert.equal(secondIndex('find the river', 'e'), 12)
assert.equal(secondIndex('hi', ' '), undefined)
assert.equal(secondIndex('hi mayor', ' '), undefined)
assert.equal(secondIndex('hi mr Mayor', ' '), 5)
console.log('You are awesome! All tests are done! Go Check it!')
