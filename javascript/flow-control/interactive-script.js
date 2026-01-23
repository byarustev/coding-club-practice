/***
 * Our html has an input and a button. 
 * We want to make a decision when ever the user changes their age and clicks send 
 */


// Target the send button
const sendBtn = document.getElementById("send")
const input = document.getElementById("userAge")

// register an event listener
sendBtn.addEventListener('click', function () {
    // read the value from the input
    let age = input.value

    if (age != "") {
        age = parseInt(age)

        if (age > 18) {
            console.log("You are of drinking age: Please drink responsively")
        } else {
            console.log("You are underage: Please don't drink")
        }
    }

})


