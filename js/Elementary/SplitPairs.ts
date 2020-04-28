import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (text: string): string[] => {
  const ans = []
  if (text.length % 2 !== 0) {
    text += '_'
  }
  for (let i = 0; i < text.length; i += 2) {
    ans.push(text[i] + text[i + 1])
  }
  return ans
}

function splitPairs(text: string): string[] {
  return realSolution(text)
}

console.log('Example:')
console.log(splitPairs('abcd'))

// These "asserts" are used for self-checking
assert.deepEqual(splitPairs('abcd'), ['ab', 'cd'])
assert.deepEqual(splitPairs('abc'), ['ab', 'c_'])
assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_'])
assert.deepEqual(splitPairs('a'), ['a_'])
assert.deepEqual(splitPairs(''), [])

console.log("Coding complete? Click 'Check' to earn cool rewards!")
