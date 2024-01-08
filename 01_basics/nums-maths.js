const score = 400 // number (primitive)
const anotherScore = 500

// console.log(anotherScore.toString())

/* ++++++++++++++++++++++++++++++++++++++ */

const balance = new Number(100) // number object
// balance var -> reference of Number obj

/* ++++++++++++++++++++++++++++++++++++++ */

const accountNumber = new Number(2676287192) // another number object


// console.log(accountNumber.toExponential())

// toLocaleString() => USA format representation
// console.log(accountNumber.toLocaleString())

// Indian format
// console.log(accountNumber.toLocaleString('en-IN'))

/* ++++++++++++++++++++++++++++++++++++++ */

const anotherNum = 248.945

// digits bet 1 - 21
// console.log(anotherNum.toPrecision(2))

/* ++++++++++++++++++++++++++++++++++++++ */

const price = new Number(245)

// digits must be bet 0 -100 
// console.log(price.toFixed(2))

/* ++++++++++++++++++++++++++++++++++++++ */

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

/* ================= Maths ================ */

// console.log(Math)

// Math.abs() - returns abstract value
// console.log(Math.abs(-4))

// Math.round() - rounds off number
// console.log(Math.round(4.3))

// Math.ceil() - returns higher number i.e ceil
// console.log(Math.ceil(4.2))

// Math.floor() - returns lower number i.e floor
// console.log(Math.floor(4.9))

// Math.min() - returns smallest val in array
// console.log(Math.min(3, 5, 1, 6))

// Math.max() - returns largest value in array
// console.log(Math.max(4, 6, 7, 2))

// Math.random() - returns random value 0 - 1

// console.log(Math.random())

// console.log(Math.random() * 10)

// console.log((Math.random() * 10) + 1)

// console.log(Math.floor((Math.random() * 10) + 1))

const min = 10
const max = 23

// console.log(Math.floor(Math.random() * (max - min)) + min)

// let userNum = prompt("Enter number bet 10 & 23")

const randomNum = Math.floor(Math.random() * (max - min)) + min

// while condition

/*
while(userNum != randomNum){
    userNum = prompt("wrong input. Try again")
}
*/

// console.log("correct input")



