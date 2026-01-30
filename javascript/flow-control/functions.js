// Function.
// A function is a reusable piece of code
const name1 = "Mark"

function add() {
    console.log(name1)
    // fnc definition
}


// anonymus functions: funcitons that dont have names
/**
 * sendBtn.addEventListener('click', function(){
 *  // this is an anonymus function
 * })
 *
 */

// function call. - invokes the function
add()

// Parameters 
function addNumbers(num1, num2) {
    console.log(name1)
    const sum = num1 + num2
    return sum
}

// Arrow functions. 
const addNumbers1 = (num1, num2) => {
    console.log(name1)
    const sum = num1 + num2
    return sum
}

// Function expressions - 
// it means we can then pass this function as a parameter to other functions
const addNumbers2 = function (num1, num2) {
    console.log(name1)
    const sum = num1 + num2
    return sum
}

console.log(addNumbers(40, 10))
console.log(addNumbers(100, 15))
console.log(addNumbers(890, 677))

const ans = addNumbers(10000, 20000)
console.log(ans)


function displayName() {
    console.log("Stephen")
}

const ans2 = displayName()
console.log(ans2)

// scope. 
// Local scope - limited to a given block in which its defined and Global scope - can be accessed any where in the file



// Examples of functions
// Write a function, given an arry it increments each value by 2

const array = [70, 56, 78, 92]

// Approach 1
function incrementMarks(arry) {
    // variable to store the result
    const result = []

    // iterate through the array 
    for (let i = 0; i < arry.length; i++) {
        // access a value at a certain index and increment by 2
        const value = arry[i] + 2
        // store the outcome to the result array
        result.push(value)
    }

    return result
}

console.log(incrementMarks(array), 'result')
console.log(array, 'original')

// approach2
function incrementMarks3(arry) {
    // variable to store the result
    const result = arry.map((item) => {
        return item + 3
    })

    return result
}

// How to shorten it 
// function incrementMarks3(arry) {
//     return arry.map(item => item + 3)
// }

// function incrementMarks4(arry) {
//     arry.forEach(element => {
//         element = element + 3
//     });
// }

console.log(incrementMarks3(array), 'result2')
console.log(array, 'original')

