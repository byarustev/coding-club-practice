// for(initialization;condition;modification){
//     statement
// }

const cars = ["BMW", "Volvo", "Saab", "Ford"];

 for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
 }


// for (let i = cars.length - 1; i >= 0; i--) {
//   console.log(cars[i]);
// }


// while(condition){
//     statement
// }

while(cars.length > 0){
    console.log(cars.pop());
}


const age=prompt("Enter your age: ");

while(age < 18){
    alert("You must be at least 18 years old.");
    age=prompt("Enter your age: ");
}


// Exercise:

// Prompt a user to give you their age , 
// if less than 18,aleart them that "they are underage",
// if age is between 18 and 65 , alert them that "they are eligible for work",
// if age is above 65 , alert them that "they are senior citizens".