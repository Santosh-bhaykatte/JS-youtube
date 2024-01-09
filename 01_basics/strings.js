const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value") // + => concatenation operator

// string interpolation
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hitesh-hc-com')
// console.log(gameName)

console.log(gameName[0])
console.log(gameName.__proto__)

// console.log(gameName.toLocaleUpperCase())

/* 
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))
*/


const newString = gameName.substring(0, 6) // No neg value is allowed
// console.log(newString)

// console.log(gameName.slice(-8, 4)) // neg val allowed -> reverse count

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes("hitesh"))

// console.log(gameName.split('-'))
// console.log(gameName.split())

/* +++++++++++++++++++++++++++++++++++ */

// summary Important
/* 
 
str.length => returns length
str.toUpperCase() => converts to uppercase
str.toLowerCase() => converts to lowercase
str1.concat(str2) => str1 + str2
str.trim() => removes leading & trailing whitespaces
str.slice(start, end?) => -ve value is allowed | returns part of string
str.substring(start, end?) => -ve value is not allowed
str.replace(searchVal, newVal)
str.replaceAll()
str.charAt(indx) => returns char at index
str.indexOf('') => returns indx of char
str.includes("") => true | false
str.split('on-basis') => splits into array
str.startsWith(substring) => starts with substring
str.endsWith(substring) => ends with substring
str.indexOf(substring) => returns index of first occurence of substring, returns -1 if not found

*/