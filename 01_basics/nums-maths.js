const score = 400
const balance = new Number(100) // number object

// console.log(score)
// console.log(balance)

// console.log(balance.toString().length) 

// toFixed(value) 
// console.log(balance.toFixed(1))

const otherNumber = 123.8966

// toPrecision(val)
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000

// toLocaleString() => formatting
// console.log(hundreds.toLocaleString('en-IN'))

/* +++++++++++++++++++++ Maths +++++++++++++++++ */

// console.log(Math)

// Math.abs()
// console.log(Math.abs(-4))

// Math.round()
// console.log(Math.round(4.6))

// Math.ceil()
// console.log(Math.ceil(4.2))

// Math.floor()
// console.log(Math.floor(4.9))

// Math.min()
// console.log(Math.min(4, 6, 7, 2))

// Math.max()
// console.log(Math.max(4, 6, 7, 2))

// Math.random()
console.log(Math.random())

console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min) + min))


