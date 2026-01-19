// Variables
const myButton = document.getElementById("myButton"); // targeting an html element by its id
const myGreet = document.getElementById("greet");
// addEventListener("event", Function)

// adding a click event listener to an element
myButton.addEventListener("click", function () {
    myGreet.innerHTML = "how are you";
});

// single line comments 

//print out a welcome message to the 
// console
console.log("Welcome to 19th Jan 2026")

/*
Here we are practicing commenting on
different lines
*/


// https://www.geeksforgeeks.org/javascript/variables-datatypes-javascript/
// const and let keywords.
//    name     value
const myName = "Stephen34"
let age = 34
let pi = 3.14;
let isStudent = true
age = age + 1

let careerStatus;

// myName = "Stephen 2"

console.log(myName)
console.log(age)

// Data Types 
//1. Primitive 
//2. non primitive


//1. Primitive 
// Number - numbers and big integers
// String - ""
// Booleans - true or false
// undefined 
//null 
let emptyValue = null

//2. non primitive
// Object - key=>value pairs
const student = {
    name: "Stephen",
    age: 34,
    careerStatus: 'Employed',
    isMale: true,
    gender: 'male'
}


const student2 = {
    name: "Mercy",
    age: 22,
    careerStatus: 'non-employed',
    isMale: false,
    gender: "female"
}


// Arrays - lists of information in an ordered manner
// a list of students, list of car brands, list of girl names. 

const boyNames = ["Stephen", "Mark", "Joseph", "Joshua", "Tony"]
const intList = [234, 523, 2343, 1243]

// Function: Represents reusable blocks of code.
function addNumbers(/* parameters */) {
    // Function body
}

function add2Numbers(a, b) {
    return a + b
}

console.log(add2Numbers(1, 2))
console.log(add2Numbers(10, 12))
console.log(add2Numbers(14, 22))
console.log(add2Numbers(101, 12))
console.log(add2Numbers(400, 2))


// Array Methods 
// https://www.geeksforgeeks.org/javascript/javascript-arrays/
// accessing information in a list
console.log(boyNames)

// Arrays are accessed using index and they start counting from zero

// output the first value
const first = boyNames[0]
console.log(first)

// output the third value
console.log(boyNames[2])


// array length or size
const arrayLength = boyNames.length
console.log(arrayLength)

// adding items to the list 
boyNames.push("Moses")

console.log(boyNames)

function addFirstBoyNameToHtmlList() {
    // Steps
    // 1. Target the ul element with in our html using the id
    const listOfNamesElement = document.getElementById("listOfNames")

    // 2. create an li element
    const li = document.createElement('li')
    // 3. change the text content of the li
    li.textContent = boyNames[0]
    // 4. append the li to the ul
    listOfNamesElement.appendChild(li)

    //Repeating step 2 to 4 for the different names
    const li2 = document.createElement('li')
    li2.textContent = boyNames[1]
    listOfNamesElement.appendChild(li2)

    const li3 = document.createElement('li')
    li3.textContent = boyNames[2]
    listOfNamesElement.appendChild(li3)
}


// Wait for the dom to load before attempting to manipulate the dom elements
window.addEventListener('load', (event) => {
    // Function call
    addFirstBoyNameToHtmlList()
});

