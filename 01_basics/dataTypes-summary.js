// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = BigInt('354666466')
const bigNumber = 4367287278n



// JS -> Dynamically typed language

/*-------------------------------------------------*/

// Reference (Non primitive)

// Array, Objects, Functions

// arrays
const heros = ["shaktiman", "naagraj", "doga"]
// console.table(heros);

// objects
let myObj = {
    name: "hitesh",
    age: 22,
}

// functions

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction);
console.log(typeof heros);


