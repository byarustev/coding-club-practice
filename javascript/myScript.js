// Variables
const myButton = document.getElementById("myButton"); // targeting an html element by its id
const myGreet = document.getElementById("greet");
// addEventListener("event", Function)

// adding a click event listener to an element
myButton.addEventListener("click", function () {
    myGreet.innerHTML = "how are you";
});