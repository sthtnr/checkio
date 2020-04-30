import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (text: string): string => {
  for (const word of text.split(/\s|,|\./)) {
    const match = word.match(/\w/)
    if (match) {
      return match['input']
    }
  }
}

function firstWord(text: string): string {
  return realSolution(text)
}

console.log('Example:')
console.log(firstWord('Hello world'))

// These "asserts" using for self-checking and not for auto-testing
assert.equal(firstWord('Hello world'), 'Hello')
assert.equal(firstWord(' a word '), 'a')
assert.equal(firstWord("don't touch it"), "don't")
assert.equal(firstWord('greetings, friends'), 'greetings')
assert.equal(firstWord('... and so on ...'), 'and')
assert.equal(firstWord('hi'), 'hi')
console.log("Coding complete? Click 'Check' to earn cool rewards!")
