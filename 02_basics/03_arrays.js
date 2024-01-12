// strings are immutable
// arrays are mutable in JS

// ++++++++++++++++++++++++++++++

// storing marks of students in object

// let marks = {
//     stu1: 97,
//     stu2: 82,
// };

// +++++++++++++++++++++++++++++++

let marks = [96, 97, 95, 83, 78]

let heros = ["ironman", "hulk", "thor", "batman", "spiderman", "shaktiman"]

// console.log(marks)

// console.log(marks.length) // property 

// console.log(marks[1])

marks[1] = 45

// console.log(marks)

// +++++++++++++++++++++++++++++++

// iterables in JS => strings, arrays, objects

/*
for (let val of heros){
    console.log(val)
}
*/

// console.log()

// +++++++++++++++++++++++++++++++

/*
for (let val in heros){
    console.log(heros[val])
}
*/

// +++++++++++++++++++++++++++++++

/*
for(let i = 0; i < heros.length; i++){
    console.log(heros[i - 1])
}
*/

// +++++++++++++++++++++++++++++++

let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"]

/*
for(let city of cities){
    console.log(city.toLocaleUpperCase())
}
*/

// +++++++++++++++++++++++++++++++

// Array methods

// Two types => change array | does not change array

// ##############################################

// those who changes original array => push() pop() unshift() shift() splice(startIdx, delCount, newEle)

// those who does not change original array => toString() concat() slice()

// ################################################

// arr.push() => adds ele to end of array

let foodItems = ["potato", "apple", "lichy", "tomato"]
let anotherMarks = new Array(97, 86, 54, 36)

// foodItems.push("chips", "burger", "paneer")

// console.log(foodItems);

// arr.pop() => removes ele from end & return it

// let deletedItem = foodItems.pop()

// console.log(deletedItem)
// console.log(foodItems)

// console.log(foodItems.toString())

// console.log(anotherMarks.toString())

let marvel_heros = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"]
let dc_heros = ["superman", "batman"]
let indian_heros = ["shaktiman", "naagraj"]

// console.log(marvel_heros.concat(dc_heros))

// console.log(marvel_heros)

let allHeros = marvel_heros.concat(dc_heros, indian_heros)

// console.log(allHeros)

// marvel_heros.unshift("antman") // add to start

let delValue = marvel_heros.shift() // removes from start
// console.log(delValue)

// +++++++++++++++++++++++++++++++

// slice(startIdx, endIdx)  
// splice(startIdx, delCount, newEle)

// let newArr = marvel_heros.slice(1, 3)
// console.log(newArr)

let arr = [1, 2, 3, 4, 5, 6, 7]

// arr.splice(2, 2, 101, 102)

// console.log(arr)

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5

// Add Element
// arr.splice(2, 0, 101)

// Delete Element
// arr.splice(2, 1)

// Replace Element
// arr.splice(3, 1, 101)

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5








