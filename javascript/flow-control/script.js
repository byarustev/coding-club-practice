console.log("Welcome to the Friday Session")

/***
 * if statement 
 * if(condition){
 *  What is executed if the condition is true
 * }
 */
const age = 17;
if (age < 18) {
    console.log("You are bellow the Driking age")
}

/**
 * Hint: Try changing the age to a value above 18 and compare the outputs
 */


/***
 * if else statement 
 * if(condition){
 *  What is executed if the condition is True
 * }else{
 * What is executed if the condition is false
 * 
 * }
 */

const score = 69

if (score >= 70) {
    console.log("You have passed")
} else {
    console.log("Unfortunately you have failed")
}

/**
 * Hint: Try changing the scrore to a value above or below 70 and compare the outputs
 */

/**
 * if else if
 * above 90: excellent
 * btn 65 and 89: Good
 * below 65: Failed
 */

const marks = 50

if (marks >= 90) { //Greater or equal
    console.log("Excellent")
} else if (marks > 65) {
    console.log("Good")
} else {
    console.log("Failed")
}


const day = "Monday"

switch (day) {
    case "Monday":
        console.log("its the start of the week")
        break
    case "Friday":
        console.log("its the end of the week")
        break

    case "Saturday":
        console.log("its a weekend")
        break

    case "Sunday":
        console.log("its a weekend")
        break

    default:
        console.log("its a normal day")
}

/**
 * Hint: Try changing day to different values of the week and you observe the out put. 
 */


/****
 * JavaScript Ternary Operator
 * condition? True: False
 */

const gender = "male"
console.log(gender === "male" ? "Male" : "Female")