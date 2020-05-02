import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (items: any[]): any[] => {
  const ans = []

  const calcFreq = (x: string | number): number =>
    items.filter((y) => x === y).length
  const removeSideffectOfObjectEntries = (x: string): string | number =>
    isNaN(Number(x)) ? x : Number(x)
  const reducer = (acc, cur) => ({
    ...acc,
    [cur]: calcFreq(cur),
  })

  const freqObj = Array.from(new Set(items)).reduce(reducer, {})
  const arrayOfSortedFreqObj = Object.entries(freqObj).sort(
    (a: any, b: any) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1]
      }
      return (
        items.indexOf(removeSideffectOfObjectEntries(a[0])) -
        items.indexOf(removeSideffectOfObjectEntries(b[0]))
      )
    }
  )

  for (const i of arrayOfSortedFreqObj) {
    for (let k = 0; k < i[1]; k++) {
      ans.push(removeSideffectOfObjectEntries(i[0]))
    }
  }
  return ans
}

function frequencySort(items: any[]): any[] {
  return realSolution(items)
}

console.log('Example:')
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]))

// These "asserts" are used for self-checking and not for an auto-testing
assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [
  4,
  4,
  4,
  4,
  6,
  6,
  2,
  2,
])
assert.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), [
  'bob',
  'bob',
  'bob',
  'carl',
  'alex',
])
assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42])
assert.deepEqual(frequencySort([]), [])
assert.deepEqual(frequencySort([1]), [1])

console.log("Coding complete? Click 'Check' to earn cool rewards!")
