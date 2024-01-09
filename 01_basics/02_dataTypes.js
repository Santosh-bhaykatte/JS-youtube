"use strict"; // treat all JS code as newer version

// alert("HELLO SANTOSH");

let age; // declaration
age = 34.4; // initialization

// primitive types

// number => up to 2^53
// BigInt(4564435342442)
// string => "Santosh"
// boolean => true/false

// null => standalone value | type => object
// undefined => not known
// symbol => unique identification

// object

// console.log(typeof (undefined)) // undefined
// console.log(typeof null) // object

/* ------------------------------------------------ */

// // string, boolean, null, undefined -> number conversion using Number()

// let score = "Hitesh"

// console.log(typeof(score))

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber)

// // returns NaN => Not a Number
// console.log(valueInNumber)

// Important! -

// "33" => 33; type => Number, value => 33
// "33ab" => NaN; type => Number, value => NaN
// true => 1; false => 0; type => Number
// null => 0; type => Number, value => 0
// undefined => NaN; type => Number

/* ------------------------------------------------ */
// string, number, null -> boolean using Boolean()

// let isLoggedIn = null

// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true
// null => false

/* ------------------------------------------------ */
// number, boolean, null, undefined -> string using String()

// let number = 33.43
// let stringNumber = String(number)

// console.log(stringNumber)
// console.log(typeof stringNumber)

// number 33.43 => string 33
// null => null; type => string
// undefined => undefined; type => string
// true => true, false => false

/* ------------------------------------------------ */

// const x = Symbol("HELLO!")
// console.log(x)
// console.log(typeof x)

/* ------------------------------------------------ */

// let value = 3
// let negValue = -value
// console.log(negValue)

let str1 = "Santosh"
let str2 = " Bhaykatte"

// let str3 = str1 + str2
// console.log(str3)
// // console.log(str1 + str2)

// console.log("1" + 2 + 2) // returns 122

// console.log(1 + 2 + "2") // adds 1 & 2 concatenates with "2"

// console.log(+true) // returns 1
// console.log(+"") // returns 0

/* ---------------------------------------------- */

// let num1, num2, num3 // allowed

// num1 = num2 = num3 = 2 + 2
// console.log(num1)

/* -------------------------------------- */
// console.log("2" > "1")

// console.log(null > 0)  // false
// console.log(null == 0) // false
// console.log(null >= 0) // true

/* -------------------------------------- */

// === -> equality (type check)

// console.log("2" == 2);
// console.log("2" === 2);
// console.log(2 !== "2"); // true

/*-----------------------------------------*/


// Stack (Primitive) -> copy of value, Heap (Non-primitive) -> reference of value

// stack example

let youtubename = "hiteshchoudharydotcom" // string
let anotherName = youtubename

anotherName = "chaiaurcode"

// console.log(youtubename);
// console.log(anotherName);


// Heap example

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
userTwo["upi"] = "user@ubl"

console.log(userOne.email)
console.log(userTwo.email)
console.log(userOne["upi"])

