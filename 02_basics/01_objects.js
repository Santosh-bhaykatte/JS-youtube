// Object declaration => key:value pairs

// Always singleton - using constructor
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // mySym: "mykey1", // Invalid
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(JsUser.email) // Not right way

// console.log(JsUser['email'])

// console.log(JsUser["full name"])

// ++++++++++++++++++++++++++++++++++++++++++

// console.log(JsUser.mySym)  // wrong way
// console.log(JsUser[mySym]) // right way

// console.log(typeof('mySym')) // => string
// console.log(typeof JsUser.mySym)

// ++++++++++++++++++++++++++++++++++++++++++

JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser) // locks an object

JsUser.email = "hitesh@microsoft.com"

// console.log(JsUser)

// ++++++++++++++++++++++++++++++++++++++++++

// adding function in Object

JsUser.greeting = function(){
    console.log("Hello JS user")
}

// console.log(JsUser.greeting()) // function executes

// console.log(JsUser.greeting)  // only reference

// ++++++++++++++++++++++++++++++++++++++++++

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`) // 'this' keyword used to access current object
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())
