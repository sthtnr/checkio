import assert from 'assert'

interface Stock {
  name: string
  price: number
}

// Arrow function does not supported yet lol
const realSolution = (limit: number, data: Stock[]): Stock[] =>
  [...data].sort((a, b) => b.price - a.price).slice(0, limit)

function biggerPrice(limit: number, data: Stock[]): Stock[] {
  return realSolution(limit, data)
}

console.log('Example:')
console.log(
  biggerPrice(2, [
    { name: 'bread', price: 100 },
    { name: 'wine', price: 138 },
    { name: 'meat', price: 15 },
    { name: 'water', price: 1 },
  ])
)

assert.deepEqual(
  biggerPrice(2, [
    { name: 'bread', price: 100 },
    { name: 'wine', price: 138 },
    { name: 'meat', price: 15 },
    { name: 'water', price: 1 },
  ]),
  [
    { name: 'wine', price: 138 },
    { name: 'bread', price: 100 },
  ]
)
assert.deepEqual(
  biggerPrice(1, [
    { name: 'pen', price: 5 },
    { name: 'whiteboard', price: 170 },
  ]),
  [{ name: 'whiteboard', price: 170 }]
)
console.log(
  "Coding complete? Click 'Check' to review your tests and earn cool rewards!"
)
