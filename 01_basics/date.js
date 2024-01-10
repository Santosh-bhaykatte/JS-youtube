// Dates in JS

// Date object represent a single moment in a platform independent format from january 1, 1970

let myDate = new Date()

// console.log(myDate)

// console.log(myDate.toISOString())

// console.log(myDate.toJSON())

// console.log(myDate.toString())

// console.log(myDate.toDateString())

// console.log(myDate.toTimeString())

// console.log(myDate.toLocaleString())

// console.log(myDate.toLocaleDateString())

// console.log(myDate.toLocaleTimeString())

// console.log(typeof myDate)

// let newDate = new Date(2023, 0, 23)

// let newDate = new Date(2023, 0, 23, 5, 3)

// console.log(newDate)

// console.log(newDate.toString())

// console.log(newDate.toDateString())

// console.log(newDate.toTimeString())

// console.log(newDate.toLocaleString())

// console.log(newDate.toLocaleDateString())

// console.log(newDate.toLocaleTimeString())

// +++++++++++++++++++++++++++++++++++++++

// let newDate = new Date("2023-01-14") // "yy-mm-dd"

// let newDate = new Date("01-14-2023") // "mm-dd-yy"

// console.log(newDate.toLocaleString())

// ++++++++++++++++++++++++++++++++++++++

let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(newDate.getTime())

// converting milisec -> sec
// console.log(Math.floor(Date.now()/1000))

// ++++++++++++++++++++++++++++++++++++++++++

// let newDate = new Date() 

// console.log(newDate)

// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
// console.log(newDate.getMonth() + 1)

newDate.toLocaleString('default', {
    weekday: "long",
})




