import assert from 'assert'

// Arrow function does not supported yet lol
const realSolution = (text: string, begin: string, end: string): string => {
  const indOfBegin =
    text.indexOf(begin) === -1 ? -1 : text.indexOf(begin) + begin.length - 1
  const indOfEnd = text.indexOf(end) === -1 ? text.length : text.indexOf(end)
  return indOfBegin < indOfEnd ? text.slice(indOfBegin + 1, indOfEnd) : ''
}

function betweenMarkers(text: string, begin: string, end: string): string {
  return realSolution(text, begin, end)
}

console.log('Example:')
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
assert.equal(
  betweenMarkers(
    '<head><title>My new site</title></head>',
    '<title>',
    '</title>'
  ),
  'My new site'
)
assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
console.log(
  "Coding complete? Click 'Check' to review your tests and earn cool rewards!"
)
