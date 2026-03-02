# Week 4: Introduction to JavaScript

## 🎯 Learning Objectives

By the end of this week, you will be able to:
- Understand what JavaScript is and its role in web development
- Include JavaScript in HTML documents
- Work with variables and data types
- Use operators for calculations and comparisons
- Write conditional statements (if/else)
- Create and use functions
- Use console.log() for debugging
- Understand basic DOM concepts

---

## What is JavaScript?

**JavaScript** is a programming language that adds **interactivity** to websites. It's one of the three core technologies of the web:

- **HTML** = Structure
- **CSS** = Styling
- **JavaScript** = Behavior & Interactivity

### What JavaScript Can Do

- Respond to user actions (clicks, form submissions)
- Update page content dynamically
- Validate form inputs
- Create animations
- Fetch data from servers
- Build interactive games
- And much more!

### Why JavaScript?

- **Runs in the browser** - No installation needed
- **Universal support** - Works on all modern browsers
- **Versatile** - Can be used for frontend, backend, mobile apps
- **Essential** - Almost every modern website uses JavaScript

---

## 📝 Where to Write JavaScript

### Method 1: Internal JavaScript

JavaScript written in a `<script>` tag in your HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
    
    <script>
        // JavaScript code here
        console.log("Hello from JavaScript!");
    </script>
</body>
</html>
```

**When to use**: Quick tests, small scripts
**When NOT to use**: Larger projects (hard to maintain)

### Method 2: External JavaScript (Recommended)

JavaScript written in a separate `.js` file:

**script.js**:
```javascript
console.log("Hello from external JavaScript!");
```

**index.html**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
    
    <script src="script.js"></script>
</body>
</html>
```

**Best Practice**: Place `<script>` tags just before `</body>` for better page load performance.

---

## 🔤 Variables

Variables store data that can be used and changed in your code.

### Declaring Variables

JavaScript has three ways to declare variables:

#### `let` (Modern, Recommended)
```javascript
let name = "John";
let age = 25;
let isStudent = true;

// Can be reassigned
name = "Jane";
age = 26;
```

#### `const` (Constant - Cannot be reassigned)
```javascript
const pi = 3.14159;
const website = "https://example.com";

// This will cause an error:
// pi = 3.14;  // Error: Cannot reassign const
```

#### `var` (Old way - Avoid using)
```javascript
var oldWay = "Don't use this";
```

**Best Practice**: Use `const` by default, use `let` when you need to reassign.

### Variable Naming Rules

- Must start with a letter, `$`, or `_`
- Can contain letters, numbers, `$`, and `_`
- Case-sensitive (`name` ≠ `Name`)
- Cannot use reserved words (`let`, `const`, `if`, etc.)

**Good names**:
```javascript
let userName = "John";
let userAge = 25;
let isLoggedIn = true;
```

**Bad names**:
```javascript
let 123name = "John";  // Can't start with number
let user name = "John";  // Can't have spaces
let let = "John";  // Can't use reserved word
```

---

## Data Types

JavaScript has several data types. Here are the most common:

### 1. String (Text)

```javascript
let name = "John";
let message = 'Hello World';
let quote = `Template literals`;
```

**Template Literals** (Backticks) - Allow variables inside strings:
```javascript
let name = "John";
let greeting = `Hello, ${name}!`;  // "Hello, John!"
```

### 2. Number

```javascript
let age = 25;
let price = 19.99;
let temperature = -5;
```

### 3. Boolean (True/False)

```javascript
let isStudent = true;
let isLoggedIn = false;
let hasPermission = true;
```

### 4. Undefined

Variable declared but not assigned:
```javascript
let name;
console.log(name);  // undefined
```

### 5. Null

Explicitly empty value:
```javascript
let data = null;
```

### Checking Data Types

Use `typeof` operator:
```javascript
console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
```

---

## Operators

### Arithmetic Operators

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7 (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1 (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation)
```

### Assignment Operators

```javascript
let x = 10;
x += 5;   // x = x + 5 (15)
x -= 3;   // x = x - 3 (12)
x *= 2;   // x = x * 2 (24)
x /= 4;   // x = x / 4 (6)
```

### Comparison Operators

```javascript
let a = 5;
let b = 10;

console.log(a == b);   // false (loose equality)
console.log(a === b);  // false (strict equality - recommended)
console.log(a != b);   // true (not equal)
console.log(a !== b);  // true (strict not equal - recommended)
console.log(a < b);    // true (less than)
console.log(a > b);    // false (greater than)
console.log(a <= b);   // true (less than or equal)
console.log(a >= b);   // false (greater than or equal)
```

**Important**: Use `===` and `!==` instead of `==` and `!=` (strict comparison is safer).

### Logical Operators

```javascript
let isStudent = true;
let hasJob = false;

console.log(isStudent && hasJob);  // false (AND - both must be true)
console.log(isStudent || hasJob);   // true (OR - at least one true)
console.log(!isStudent);            // false (NOT - reverses boolean)
```

---

## Conditionals: if/else

Conditionals let your code make decisions.

### Basic if Statement

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}
```

### if/else Statement

```javascript
let age = 16;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote yet");
}
```

### if/else if/else Statement

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
```

### Logical Operators in Conditionals

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}
```

### Ternary Operator (Shorthand)

```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"
```

---

## Functions

Functions are reusable blocks of code that perform specific tasks.

### Function Declaration

```javascript
function greet() {
    console.log("Hello, World!");
}

// Call the function
greet();  // "Hello, World!"
```

### Functions with Parameters

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("John");   // "Hello, John!"
greet("Jane");   // "Hello, Jane!"
```

### Functions with Multiple Parameters

```javascript
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);  // 8
```

### Functions with Return Values

```javascript
function multiply(x, y) {
    return x * y;
}

let product = multiply(4, 5);
console.log(product);  // 20
```

### Function Expressions

```javascript
const greet = function(name) {
    console.log(`Hello, ${name}!`);
};

greet("John");
```

### Arrow Functions (Modern Syntax)

```javascript
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

// Single parameter - can omit parentheses
const greet = name => {
    console.log(`Hello, ${name}!`);
};

// Single expression - can omit braces and return
const add = (a, b) => a + b;
```

---

## 🐛 console.log() - Your Debugging Friend

`console.log()` prints information to the browser console. Essential for debugging!

### Basic Usage

```javascript
console.log("Hello, World!");
console.log(42);
console.log(true);

let name = "John";
console.log(name);  // "John"
```

### Multiple Values

```javascript
let name = "John";
let age = 25;
console.log("Name:", name, "Age:", age);
```

### Different Console Methods

```javascript
console.log("Regular message");
console.warn("Warning message");
console.error("Error message");
console.info("Info message");
```

### How to View Console

1. **Chrome/Firefox**: Press `F12` or `Right-click → Inspect → Console tab`
2. **Safari**: Enable Developer menu, then `Develop → Show JavaScript Console`

---

## 🌐 Basic DOM Introduction

The **DOM** (Document Object Model) is how JavaScript interacts with HTML.

### Selecting Elements

```javascript
// Select by ID
let header = document.getElementById("header");

// Select by class (returns first match)
let title = document.querySelector(".title");

// Select by tag
let paragraphs = document.querySelectorAll("p");
```

### Basic DOM Manipulation

```javascript
// Change text content
let heading = document.querySelector("h1");
heading.textContent = "New Heading";

// Change HTML content
heading.innerHTML = "<strong>Bold Heading</strong>";
```

**Note**: We'll learn more about DOM in Week 5!

---

## 💡 Best Practices

1. **Use meaningful variable names**
   ```javascript
   // Good
   let userName = "John";
   
   // Bad
   let x = "John";
   ```

2. **Use const by default, let when needed**
   ```javascript
   const pi = 3.14159;  // Won't change
   let counter = 0;     // Will change
   ```

3. **Use strict equality (===)**
   ```javascript
   // Good
   if (age === 18) { }
   
   // Avoid
   if (age == 18) { }
   ```

4. **Comment your code**
   ```javascript
   // Calculate total price including tax
   let total = price * 1.08;
   ```

5. **Keep functions focused**
   ```javascript
   // Good - does one thing
   function calculateTotal(price) {
       return price * 1.08;
   }
   ```

---

## 📚 Quick Reference

### Variables
```javascript
let variable = value;
const constant = value;
```

### Data Types
```javascript
let str = "String";
let num = 42;
let bool = true;
let nothing = null;
let notDefined = undefined;
```

### Operators
```javascript
+ - * / % **  // Arithmetic
=== !== < > <= >=  // Comparison
&& || !  // Logical
```

### Conditionals
```javascript
if (condition) { }
if (condition) { } else { }
if (condition) { } else if { } else { }
```

### Functions
```javascript
function name(params) {
    return value;
}
```

---

## 🎓 Summary

You've learned:
- ✅ What JavaScript is and why it's important
- ✅ How to include JavaScript in HTML
- ✅ Variables (let, const)
- ✅ Data types (string, number, boolean, etc.)
- ✅ Operators (arithmetic, comparison, logical)
- ✅ Conditionals (if/else)
- ✅ Functions (declaration, parameters, return)
- ✅ console.log() for debugging
- ✅ Basic DOM concepts

**Next Step**: Complete the [Week 4 Assignment](./Week4-Assignment.md) to build an interactive calculator!

---

## 📖 Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
- [JavaScript Console Methods](https://developer.mozilla.org/en-US/docs/Web/API/Console)

