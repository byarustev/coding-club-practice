const cars=["Saab","Volvo","BMW"];
console.log(cars);      // Output: ["Saab", "Volvo", "BMW"]
console.log(cars[0])

console.log(cars[1])

let length=cars.length;
console.log(length)

cars[0]="Toyota";
console.log(cars);      // Output: ["Toyota", "Volvo", "BMW"]

cars.push("Maserati");
console.log(cars);      // Output: ["Toyota", "Volvo", "BMW", "Maserati"]

cars.pop();
console.log(cars);      // Output: ["Toyota", "Volvo", "BMW"]


indexToRemove = 2; 

// let newArray = originalArray.filter((item, index) => index !== indexToRemove);

 for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
 }

//   cars.splice(1 ,0,"Subaru","Ford");
//  console.log(cars);      // Output: ["Toyota", "Volvo"]

//  console.log(cars.at(0))

 cars.unshift("Honda");
 console.log(cars);      // Output: ["Honda", "Toyota", "Volvo"]

 cars.shift();
 console.log(cars);      // Output: ["Toyota", "Volvo"]




 // 
//  let shoppingCart=["Milk","Eggs","Butter","Juice"];

//  Add "Sugar" at the end of the array.
// Add "Meat" at the beginning of the array.
// Remove "Juice" from the array.
// Add "Tea" at the end of the array.
// Insert "Honey" after "Sugar".
// Insert "Oil" at index 2.
// Print the final array.
// How many items are in the shopping cart?

// use splice , push , pop , unshift , shift,length, methods to solve this problem.