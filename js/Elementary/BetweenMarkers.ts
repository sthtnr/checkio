import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (line: string, left: string, right: string): string => {
  const idxOfL = line.indexOf(left)
  const idxOfR = line.indexOf(right)
  return line.slice(idxOfL + 1, idxOfR)
}

function betweenMarkers(line: string, left: string, right: string): string {
  return realSolution(line, left, right)
}

console.log('Example:')
console.log(betweenMarkers('What is >apple<', '>', '<'))

// These "asserts" are used for self-checking
assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple')
assert.equal(betweenMarkers('What is ><', '>', '<'), '')
assert.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple')

console.log("Coding complete? Click 'Check' to earn cool rewards!")
