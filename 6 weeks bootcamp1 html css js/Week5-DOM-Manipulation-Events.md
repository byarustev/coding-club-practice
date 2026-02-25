# Week 5: DOM Manipulation + Events

## 🎯 Learning Objectives

By the end of this week, you will be able to:
- Understand the DOM and document tree structure
- Select elements using various methods
- Update DOM content (text, HTML, values)
- Add and remove CSS classes dynamically
- Understand and handle events (click, input, submit)
- Use event listeners to make pages interactive
- Create and append elements dynamically
- Build interactive web applications

---

## 🌳 What is the DOM?

**DOM** stands for **Document Object Model**. It's a representation of your HTML document as a tree of objects that JavaScript can interact with.

### The DOM Tree

Think of your HTML as a tree:

```
html
├── head
│   ├── title
│   └── link
└── body
    ├── header
    │   └── h1
    ├── main
    │   ├── section
    │   │   └── p
    │   └── div
    └── footer
        └── p
```

### Why the DOM Matters

- JavaScript can **read** HTML content
- JavaScript can **modify** HTML content
- JavaScript can **add/remove** HTML elements
- JavaScript can **respond** to user actions

**Without the DOM**: Static, boring pages
**With the DOM**: Dynamic, interactive pages!

---

## 🎯 Selecting Elements

Before you can manipulate elements, you need to select them.

### getElementById()

Selects a single element by its ID:

```javascript
let header = document.getElementById("header");
```

**Returns**: Single element or `null` if not found

**HTML**:
```html
<div id="header">Header Content</div>
```

### querySelector()

Selects the **first** element matching a CSS selector:

```javascript
let title = document.querySelector(".title");
let firstPara = document.querySelector("p");
let link = document.querySelector("a.button");
```

**Returns**: Single element or `null` if not found

**HTML**:
```html
<p class="title">First Title</p>
<p class="title">Second Title</p>  <!-- This won't be selected -->
```

### querySelectorAll()

Selects **all** elements matching a CSS selector:

```javascript
let allParagraphs = document.querySelectorAll("p");
let allButtons = document.querySelectorAll("button");
let allCards = document.querySelectorAll(".card");
```

**Returns**: NodeList (array-like object)

**Usage**:
```javascript
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function(para) {
    console.log(para.textContent);
});
```

### Other Selection Methods

```javascript
// By class name (returns HTMLCollection)
let items = document.getElementsByClassName("item");

// By tag name (returns HTMLCollection)
let divs = document.getElementsByTagName("div");

// By name attribute
let inputs = document.getElementsByName("username");
```

**Best Practice**: Use `querySelector()` and `querySelectorAll()` - they're the most flexible!

---

## ✏️ Updating DOM Content

### textContent vs innerHTML

#### textContent (Safe, Recommended for Text)

```javascript
let heading = document.querySelector("h1");
heading.textContent = "New Heading";
```

- Sets/gets **plain text**
- **Safe** - prevents XSS attacks
- Strips HTML tags
- Use for: Text content only

#### innerHTML (For HTML)

```javascript
let div = document.querySelector(".content");
div.innerHTML = "<strong>Bold text</strong>";
```

- Sets/gets **HTML content**
- **Can be dangerous** - only use with trusted content
- Renders HTML tags
- Use for: When you need to add HTML

**Example**:
```javascript
// textContent - safe
element.textContent = "<script>alert('hack')</script>";
// Displays as text: "<script>alert('hack')</script>"

// innerHTML - dangerous
element.innerHTML = "<script>alert('hack')</script>";
// Executes the script! ⚠️
```

### Updating Input Values

For form inputs, use `.value`:

```javascript
let input = document.getElementById("username");
input.value = "John Doe";  // Set value
let currentValue = input.value;  // Get value
```

### Getting Text Content

```javascript
let paragraph = document.querySelector("p");
let text = paragraph.textContent;  // Get text
console.log(text);
```

---

## 🎨 Adding and Removing Classes

Dynamically change styling by adding/removing CSS classes.

### classList Methods

```javascript
let element = document.querySelector(".box");

// Add a class
element.classList.add("highlight");

// Remove a class
element.classList.remove("highlight");

// Toggle a class (add if missing, remove if present)
element.classList.toggle("active");

// Check if element has a class
if (element.classList.contains("active")) {
    console.log("Element is active");
}

// Add multiple classes
element.classList.add("class1", "class2", "class3");

// Remove multiple classes
element.classList.remove("class1", "class2");
```

### Practical Example

**HTML**:
```html
<button id="toggle-btn">Toggle Dark Mode</button>
<div id="content">Content here</div>
```

**CSS**:
```css
.dark-mode {
    background-color: #333;
    color: white;
}
```

**JavaScript**:
```javascript
let button = document.getElementById("toggle-btn");
let content = document.getElementById("content");

button.addEventListener("click", function() {
    content.classList.toggle("dark-mode");
});
```

---

## 🎪 Events

**Events** are actions that happen in the browser (user clicks, types, submits forms, etc.).

### Common Events

| Event | Description | Example |
|-------|-------------|---------|
| `click` | User clicks an element | Button click |
| `input` | User types in input field | Text input |
| `submit` | Form is submitted | Form submission |
| `change` | Input value changes | Select dropdown |
| `focus` | Element receives focus | Input focused |
| `blur` | Element loses focus | Input unfocused |
| `mouseover` | Mouse enters element | Hover effect |
| `mouseout` | Mouse leaves element | Leave effect |
| `keydown` | Key is pressed | Keyboard input |
| `load` | Page finishes loading | Window load |

---

## 👂 Event Listeners

Event listeners "listen" for events and execute code when they occur.

### addEventListener() - Recommended Method

```javascript
let button = document.getElementById("my-button");

button.addEventListener("click", function() {
    console.log("Button was clicked!");
});
```

### Syntax

```javascript
element.addEventListener(event, function, options);
```

- **event**: The event type (e.g., "click", "input")
- **function**: Code to run when event occurs
- **options**: Optional settings (rarely used)

### Multiple Event Listeners

You can add multiple listeners to the same element:

```javascript
let button = document.getElementById("my-button");

button.addEventListener("click", function() {
    console.log("First handler");
});

button.addEventListener("click", function() {
    console.log("Second handler");
});
// Both will run when button is clicked
```

### Named Functions vs Anonymous Functions

**Anonymous Function** (inline):
```javascript
button.addEventListener("click", function() {
    console.log("Clicked");
});
```

**Named Function** (reusable):
```javascript
function handleClick() {
    console.log("Clicked");
}

button.addEventListener("click", handleClick);
// Note: No parentheses after handleClick!
```

### Removing Event Listeners

```javascript
function handleClick() {
    console.log("Clicked");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);  // Removes listener
```

---

## 🎯 Event Examples

### Click Event

```javascript
let button = document.querySelector("button");

button.addEventListener("click", function() {
    alert("Button clicked!");
});
```

### Input Event

```javascript
let input = document.getElementById("username");

input.addEventListener("input", function() {
    let value = input.value;
    console.log("User typed:", value);
});
```

### Submit Event

```javascript
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents form from submitting
    console.log("Form submitted!");
});
```

**Important**: Use `event.preventDefault()` to stop default form behavior.

### Change Event

```javascript
let select = document.getElementById("country");

select.addEventListener("change", function() {
    let selectedValue = select.value;
    console.log("Selected:", selectedValue);
});
```

---

## 🏗️ Creating Elements Dynamically

Create new HTML elements with JavaScript and add them to the page.

### createElement()

Creates a new element:

```javascript
let newDiv = document.createElement("div");
let newParagraph = document.createElement("p");
let newButton = document.createElement("button");
```

### Setting Content

```javascript
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
// Or
newParagraph.innerHTML = "<strong>Bold text</strong>";
```

### Setting Attributes

```javascript
let newImage = document.createElement("img");
newImage.src = "image.jpg";
newImage.alt = "Description";
newImage.id = "my-image";
newImage.className = "photo";
```

### appendChild()

Adds an element as the last child:

```javascript
let container = document.querySelector(".container");
let newDiv = document.createElement("div");
newDiv.textContent = "New content";
container.appendChild(newDiv);
```

### insertBefore()

Inserts an element before another:

```javascript
let container = document.querySelector(".container");
let newDiv = document.createElement("div");
let existingDiv = document.querySelector(".existing");
container.insertBefore(newDiv, existingDiv);
```

### removeChild()

Removes an element:

```javascript
let container = document.querySelector(".container");
let child = document.querySelector(".child");
container.removeChild(child);
```

### Modern Method: remove()

```javascript
let element = document.querySelector(".to-remove");
element.remove();  // Simpler way to remove
```

### Complete Example: Adding List Items

```javascript
// Get the list
let list = document.querySelector("ul");

// Create new list item
let newItem = document.createElement("li");
newItem.textContent = "New item";

// Add to list
list.appendChild(newItem);
```

---

## 💡 Best Practices

### 1. Wait for DOM to Load

Always wait for the DOM to be ready before selecting elements:

```javascript
// Method 1: DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    let button = document.getElementById("my-button");
});

// Method 2: Place script at end of body (simpler)
// Just put <script> tag before </body>
```

### 2. Use Specific Selectors

```javascript
// Good - specific
let button = document.querySelector(".submit-button");

// Bad - too generic
let button = document.querySelector("button");
```

### 3. Check if Element Exists

```javascript
let element = document.getElementById("my-element");
if (element) {
    element.textContent = "Hello";
} else {
    console.log("Element not found");
}
```

### 4. Use textContent for Text, innerHTML Sparingly

```javascript
// Good - for text
element.textContent = "Safe text";

// Only when you need HTML
element.innerHTML = "<strong>Bold</strong>";
```

### 5. Organize Event Listeners

```javascript
// Group related listeners together
function setupEventListeners() {
    let button1 = document.getElementById("btn1");
    let button2 = document.getElementById("btn2");
    
    button1.addEventListener("click", handleButton1);
    button2.addEventListener("click", handleButton2);
}

// Call when DOM is ready
document.addEventListener("DOMContentLoaded", setupEventListeners);
```

---

## 📚 Quick Reference

### Selecting Elements
```javascript
document.getElementById("id")
document.querySelector(".class")
document.querySelectorAll("p")
```

### Updating Content
```javascript
element.textContent = "Text"
element.innerHTML = "<strong>HTML</strong>"
element.value = "Input value"
```

### Classes
```javascript
element.classList.add("class")
element.classList.remove("class")
element.classList.toggle("class")
element.classList.contains("class")
```

### Events
```javascript
element.addEventListener("click", function() { })
element.addEventListener("input", function() { })
element.addEventListener("submit", function(event) {
    event.preventDefault();
})
```

### Creating Elements
```javascript
let newEl = document.createElement("div")
parent.appendChild(newEl)
element.remove()
```

---

## 🎓 Summary

You've learned:
- ✅ What the DOM is and how it works
- ✅ How to select elements (getElementById, querySelector, etc.)
- ✅ How to update content (textContent, innerHTML, value)
- ✅ How to add/remove CSS classes dynamically
- ✅ Common events (click, input, submit)
- ✅ How to use event listeners
- ✅ How to create and append elements dynamically
- ✅ Best practices for DOM manipulation

**Next Step**: Complete the [Week 5 Assignment](./Week5-Assignment.md) to build a To-Do List app!

---

## 📖 Additional Resources

- [MDN DOM Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info DOM](https://javascript.info/dom-nodes)
- [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

