// Object de-structure AND JSON Intro

const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// course['courseName']
// course.courseInstructor

// Syntax of object de-structure =>
// const {} = object_name

const {courseInstructor: instructor, courseName: name, price} = course

// console.log(courseInstructor) // Allowed

// console.log(instructor)
// console.log(name)
// console.log(price)

// +++++++++++++++++++++++++++++++++++++++++++

// JSON => JavaScript Object Notation

// {
//     "name": "hitesh",
//     "coursename": "Js in Hindi",
//     "price": 599
// }

[
    {},
    {},
    {}
]

