import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (tree: [string, string][]): boolean => {
  for (let i = 0; i < tree.length; i++) {
    for (let k = i + 1; k < tree.length; k++) {
      const swap = [tree[i][1], tree[i][0]]
      if (tree[k][0] === swap[0] && tree[k][1] === swap[1]) {
        return false
      }
    }
  }

  for (let i = 0; i < tree.length; i++) {
    const valueArr = tree.filter((x, idx) => idx !== i).map((x) => x[1])
    if (valueArr.includes(tree[i][0]) && valueArr.includes(tree[i][1])) {
      return false
    }
  }

  for (let i = 0; i < tree.length; i++) {
    const flattedTreeArr = tree.filter((x, idx) => idx !== i).flat()
    if (
      flattedTreeArr.length !== 0 &&
      !flattedTreeArr.includes(tree[i][0]) &&
      !flattedTreeArr.includes(tree[i][1])
    ) {
      return false
    }
  }
  return true
}

function isFamily(tree: [string, string][]): boolean {
  return realSolution(tree)
}

console.log('Example:')
console.log(isFamily([['Logan', 'Mike']]))

// These "asserts" are used for self-checking
assert.equal(isFamily([['Logan', 'Mike']]), true)
assert.equal(
  isFamily([
    ['Logan', 'Mike'],
    ['Logan', 'Jack'],
  ]),
  true
)
assert.equal(
  isFamily([
    ['Logan', 'Mike'],
    ['Logan', 'Jack'],
    ['Mike', 'Alexander'],
  ]),
  true
)
assert.equal(
  isFamily([
    ['Logan', 'Mike'],
    ['Logan', 'Jack'],
    ['Mike', 'Logan'],
  ]),
  false
)
assert.equal(
  isFamily([
    ['Logan', 'Mike'],
    ['Logan', 'Jack'],
    ['Mike', 'Jack'],
  ]),
  false
)
assert.equal(
  isFamily([
    ['Logan', 'William'],
    ['Logan', 'Jack'],
    ['Mike', 'Alexander'],
  ]),
  false
)

console.log("Coding complete? Click 'Check' to earn cool rewards!")
