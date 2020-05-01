import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (text: string): string =>
  text
    .replace(/\s/g, ', ,')
    .split(',')
    .map((s) => s.split('').reverse().join(''))
    .join('')

function backwardStringByWord(text: string): string {
  return realSolution(text)
}

console.log('Example:')
console.log(backwardStringByWord(''))

// These "asserts" are used for self-checking
assert.equal(backwardStringByWord(''), '')
assert.equal(backwardStringByWord('world'), 'dlrow')
assert.equal(backwardStringByWord('hello world'), 'olleh dlrow')
assert.equal(backwardStringByWord('hello   world'), 'olleh   dlrow')
assert.equal(backwardStringByWord('welcome to a game'), 'emoclew ot a emag')

console.log("Coding complete? Click 'Check' to earn cool rewards!")
