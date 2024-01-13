// Object => singleton using constructor

// Object.freeze(obj) => locks an object from modification

// const tinderUser = {}

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

// Object.keys(object) => returns array of keys
console.log(Object.keys(tinderUser))

// Object.values(object) => returns array of values
console.log(Object.values(tinderUser))

// Object.entries(object) => each key: value pair is converted to array in main array
console.log(Object.entries(tinderUser))

// returns true OR false
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// ++++++++++++++++++++++++++++++++++++++++

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname)

// console.log(regularUser.fullname.userFullname['lastname'])

// ++++++++++++++++++++++++++++++++++++++++

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2}

// Object.assign(target, source) 
// => combines properties of one OR more source objects to target object

// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3)

// ++++++++++++++++++++++++++++++++++++++++

// Array of objects

let users = [
    {
        email: "h@gmail.com",
        id: 1
    },
    {
        email: "B@gmail.com",
        id: 2
    },
    {
        email: "K@gmail.com",
        id: 3
    },
]

// console.log(users[1].email)

