# Week 4 Assignment: Interactive Calculator

## 🎯 Assignment Overview

Build a simple interactive calculator using HTML, CSS, and JavaScript. Your calculator will perform basic arithmetic operations and handle edge cases like division by zero.

**Estimated Time**: 3-4 hours

---

## ✅ Requirements Checklist

Your calculator must include:

- [ ] HTML page with:
  - [ ] Two number input fields
  - [ ] Four operation buttons (Add, Subtract, Multiply, Divide)
  - [ ] A result display area
- [ ] JavaScript that:
  - [ ] Captures input values
  - [ ] Performs arithmetic operations in functions
  - [ ] Prevents dividing by zero (shows user-friendly error)
  - [ ] Displays results in the DOM
- [ ] Basic CSS styling
- [ ] External JavaScript file (`script.js`)

---

## 📋 Step-by-Step Instructions

### Step 1: Set Up Your Project

1. Create a new folder called `calculator`
2. Create the following files:
   - `index.html`
   - `styles.css`
   - `script.js`

### Step 2: Create HTML Structure

Open `index.html` and create the basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator-container">
        <h1>Simple Calculator</h1>
        
        <div class="calculator">
            <!-- Input fields and buttons will go here -->
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### Step 3: Add Input Fields

Inside the `.calculator` div, add input fields:

```html
<div class="calculator">
    <div class="inputs">
        <label for="num1">First Number:</label>
        <input type="number" id="num1" placeholder="Enter a number">
        
        <label for="num2">Second Number:</label>
        <input type="number" id="num2" placeholder="Enter a number">
    </div>
    
    <!-- Buttons will go here -->
    
    <!-- Result display will go here -->
</div>
```

### Step 4: Add Operation Buttons

Add four buttons for the operations:

```html
<div class="buttons">
    <button id="add">Add (+)</button>
    <button id="subtract">Subtract (-)</button>
    <button id="multiply">Multiply (×)</button>
    <button id="divide">Divide (÷)</button>
</div>
```

### Step 5: Add Result Display

Add an area to show the result:

```html
<div class="result">
    <h2>Result:</h2>
    <p id="result-display">0</p>
</div>
```

### Step 6: Style with CSS

Open `styles.css` and add basic styling:

```css
/* ===================================
   GLOBAL STYLES
   =================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

/* ===================================
   CALCULATOR CONTAINER
   =================================== */

.calculator-container {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    max-width: 500px;
    width: 100%;
}

h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

/* ===================================
   INPUTS
   =================================== */

.inputs {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #333;
    font-weight: bold;
}

input[type="number"] {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}

input[type="number"]:focus {
    outline: none;
    border-color: #3498db;
}

/* ===================================
   BUTTONS
   =================================== */

.buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

button {
    flex: 1;
    min-width: 100px;
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-weight: bold;
}

#add {
    background-color: #27ae60;
    color: white;
}

#add:hover {
    background-color: #229954;
}

#subtract {
    background-color: #e74c3c;
    color: white;
}

#subtract:hover {
    background-color: #c0392b;
}

#multiply {
    background-color: #3498db;
    color: white;
}

#multiply:hover {
    background-color: #2980b9;
}

#divide {
    background-color: #f39c12;
    color: white;
}

#divide:hover {
    background-color: #e67e22;
}

/* ===================================
   RESULT
   =================================== */

.result {
    text-align: center;
    padding: 20px;
    background-color: #ecf0f1;
    border-radius: 5px;
}

.result h2 {
    color: #2c3e50;
    margin-bottom: 10px;
}

#result-display {
    font-size: 2em;
    font-weight: bold;
    color: #2c3e50;
    min-height: 50px;
}
```

### Step 7: Write JavaScript - Get Input Values

Open `script.js` and start by creating a function to get input values:

```javascript
// Function to get input values
function getInputValues() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    // Convert strings to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    return { num1, num2 };
}
```

**Note**: `input.value` returns a string, so we use `parseFloat()` to convert to numbers.

### Step 8: Create Arithmetic Functions

Create functions for each operation:

```javascript
// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}
```

**Important**: The divide function checks for division by zero!

### Step 9: Display Results Function

Create a function to display results:

```javascript
// Function to display result
function displayResult(result) {
    let resultDisplay = document.getElementById("result-display");
    resultDisplay.textContent = result;
}
```

### Step 10: Add Event Listeners

Add click event listeners to each button:

```javascript
// Add button event listener
document.getElementById("add").addEventListener("click", function() {
    let inputs = getInputValues();
    let result = add(inputs.num1, inputs.num2);
    displayResult(result);
});

// Subtract button event listener
document.getElementById("subtract").addEventListener("click", function() {
    let inputs = getInputValues();
    let result = subtract(inputs.num1, inputs.num2);
    displayResult(result);
});

// Multiply button event listener
document.getElementById("multiply").addEventListener("click", function() {
    let inputs = getInputValues();
    let result = multiply(inputs.num1, inputs.num2);
    displayResult(result);
});

// Divide button event listener
document.getElementById("divide").addEventListener("click", function() {
    let inputs = getInputValues();
    let result = divide(inputs.num1, inputs.num2);
    displayResult(result);
});
```

### Step 11: Add Input Validation

Improve the `getInputValues` function to handle empty inputs:

```javascript
// Function to get input values with validation
function getInputValues() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    // Check if inputs are empty
    if (num1 === "" || num2 === "") {
        alert("Please enter both numbers!");
        return null;
    }
    
    // Convert strings to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    // Check if conversion was successful
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return null;
    }
    
    return { num1, num2 };
}
```

Update event listeners to handle null:

```javascript
document.getElementById("add").addEventListener("click", function() {
    let inputs = getInputValues();
    if (inputs !== null) {
        let result = add(inputs.num1, inputs.num2);
        displayResult(result);
    }
});
```

### Step 12: Test Your Calculator

1. **Open `index.html` in your browser**
2. **Test each operation**:
   - Enter two numbers and click each button
   - Verify results are correct
3. **Test edge cases**:
   - Try dividing by zero (should show error message)
   - Try leaving inputs empty (should show alert)
   - Try entering non-numbers (should show alert)
   - Try decimal numbers (should work correctly)
   - Try negative numbers (should work correctly)

---

## 🎨 Optional Enhancements

### Round Results

Round results to 2 decimal places:

```javascript
function displayResult(result) {
    let resultDisplay = document.getElementById("result-display");
    if (typeof result === "number") {
        result = result.toFixed(2);  // Round to 2 decimal places
    }
    resultDisplay.textContent = result;
}
```

### Clear Button

Add a clear button to reset inputs and result:

**HTML**:
```html
<button id="clear">Clear</button>
```

**JavaScript**:
```javascript
document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result-display").textContent = "0";
});
```

### Keyboard Support

Allow Enter key to perform calculation:

```javascript
document.getElementById("num2").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("add").click();
    }
});
```

---

## 📝 Complete Example Code

Here's a complete reference implementation:

**script.js**:
```javascript
// Function to get input values with validation
function getInputValues() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    // Check if inputs are empty
    if (num1 === "" || num2 === "") {
        alert("Please enter both numbers!");
        return null;
    }
    
    // Convert strings to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    // Check if conversion was successful
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return null;
    }
    
    return { num1, num2 };
}

// Arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

// Function to display result
function displayResult(result) {
    let resultDisplay = document.getElementById("result-display");
    if (typeof result === "number") {
        result = result.toFixed(2);
    }
    resultDisplay.textContent = result;
}

// Event listeners
document.getElementById("add").addEventListener("click", function() {
    let inputs = getInputValues();
    if (inputs !== null) {
        let result = add(inputs.num1, inputs.num2);
        displayResult(result);
    }
});

document.getElementById("subtract").addEventListener("click", function() {
    let inputs = getInputValues();
    if (inputs !== null) {
        let result = subtract(inputs.num1, inputs.num2);
        displayResult(result);
    }
});

document.getElementById("multiply").addEventListener("click", function() {
    let inputs = getInputValues();
    if (inputs !== null) {
        let result = multiply(inputs.num1, inputs.num2);
        displayResult(result);
    }
});

document.getElementById("divide").addEventListener("click", function() {
    let inputs = getInputValues();
    if (inputs !== null) {
        let result = divide(inputs.num1, inputs.num2);
        displayResult(result);
    }
});
```

---

## ✅ Submission Checklist

Before submitting, verify:

- [ ] HTML has two number input fields
- [ ] HTML has four operation buttons
- [ ] HTML has a result display area
- [ ] JavaScript captures input values
- [ ] JavaScript has functions for each operation
- [ ] Division by zero shows user-friendly error
- [ ] Results are displayed in the DOM
- [ ] CSS provides basic styling
- [ ] Calculator works correctly
- [ ] All edge cases are handled
- [ ] Code is properly organized and commented

---

## 📤 Deliverables

Submit the following:

1. **`index.html`** file
2. **`styles.css`** file
3. **`script.js`** file

---

## 💡 Tips & Troubleshooting

### Common Issues

**Problem**: Results show "NaN" (Not a Number)
- **Solution**: Make sure you're using `parseFloat()` to convert strings to numbers

**Problem**: Division by zero doesn't show error
- **Solution**: Check your condition - use `=== 0` not `== 0`

**Problem**: Buttons don't do anything
- **Solution**: 
  - Check that script.js is linked in HTML
  - Check browser console for errors (F12)
  - Verify element IDs match in HTML and JavaScript

**Problem**: Inputs are empty strings
- **Solution**: Add validation to check for empty inputs before calculating

### Pro Tips

- Use `console.log()` to debug - log values to see what's happening
- Test with different number types (integers, decimals, negatives)
- Use browser DevTools to inspect elements and test JavaScript
- Add comments to explain your code logic
- Test edge cases thoroughly

---

## 🎓 What You'll Learn

By completing this assignment, you'll practice:
- Working with HTML input elements
- Getting values from the DOM
- Writing JavaScript functions
- Handling user input and validation
- Error handling (division by zero)
- Event listeners
- DOM manipulation
- Combining HTML, CSS, and JavaScript

**Have fun building your calculator!** 🧮✨

