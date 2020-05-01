import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (text: string): string => {
  const capitalizedText = text.replace(text[0], text[0].toUpperCase())
  return capitalizedText[text.length - 1] === '.'
    ? capitalizedText
    : capitalizedText.concat('.')
}

function correctSentence(text: string): string {
  return realSolution(text)
}

console.log('Example:')
console.log(correctSentence('greetings, friends'))

// These "asserts" are used for self-checking
assert.equal(correctSentence('greetings, friends'), 'Greetings, friends.')
assert.equal(correctSentence('Greetings, friends'), 'Greetings, friends.')
assert.equal(correctSentence('Greetings, friends.'), 'Greetings, friends.')

console.log("Coding complete? Click 'Check' to earn cool rewards!")
