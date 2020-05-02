'use strict'

// Arrow function does not supported yet lol
const realSolution = (text: string, words: string[]) => {
  const reducer = (acc, cur, idx) => ({
    ...acc,
    [cur]: text
      .toLowerCase()
      .split(/\s/)
      .filter((n) => words[idx] === n).length,
  })
  return words.reduce(reducer, {})
}

function popularWords(text: string, words: string[]) {
  return realSolution(text, words)
}

console.log('Example:')
console.log(
  popularWords(
    `
When I was One
I had just begun
When I was Two
I was nearly new`,
    ['i', 'was', 'three', 'near']
  )
)
