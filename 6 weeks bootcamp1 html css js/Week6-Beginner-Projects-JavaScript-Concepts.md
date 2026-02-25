# Week 6: Beginner Projects + JavaScript Mini Concepts

## 🎯 Learning Objectives

By the end of this week, you will be able to:
- Work with arrays and loops
- Use for loops and forEach
- Understand local storage basics
- Structure projects professionally
- Debug JavaScript effectively
- Use Google and documentation effectively
- Plan and build a complete multi-page website
- Continue learning after the bootcamp

---

## 📊 Arrays

**Arrays** are lists of items stored in a single variable.

### Creating Arrays

```javascript
// Method 1: Array literal (recommended)
let fruits = ["apple", "banana", "orange"];

// Method 2: Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Empty array
let empty = [];
```

### Accessing Array Elements

Arrays are **zero-indexed** (first item is at index 0):

```javascript
let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);  // "apple"
console.log(fruits[1]);  // "banana"
console.log(fruits[2]);  // "orange"
```

### Array Properties and Methods

#### Length

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length);  // 3
```

#### Adding Items

```javascript
let fruits = ["apple", "banana"];

// Add to end
fruits.push("orange");  // ["apple", "banana", "orange"]

// Add to beginning
fruits.unshift("grape");  // ["grape", "apple", "banana", "orange"]
```

#### Removing Items

```javascript
let fruits = ["apple", "banana", "orange"];

// Remove from end
fruits.pop();  // Returns "orange", array becomes ["apple", "banana"]

// Remove from beginning
fruits.shift();  // Returns "apple", array becomes ["banana"]

// Remove from specific index
fruits.splice(1, 1);  // Removes 1 item starting at index 1
```

#### Finding Items

```javascript
let fruits = ["apple", "banana", "orange"];

// Find index
let index = fruits.indexOf("banana");  // 1

// Check if item exists
let hasApple = fruits.includes("apple");  // true
```

---

## 🔄 Loops

Loops let you repeat code multiple times.

### for Loop

The most common loop:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
```

**Syntax**: `for (initialization; condition; increment) { code }`

### Looping Through Arrays

```javascript
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// apple
// banana
// orange
```

### forEach (Array Method)

A cleaner way to loop through arrays:

```javascript
let fruits = ["apple", "banana", "orange"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

**With arrow function**:
```javascript
fruits.forEach(fruit => {
    console.log(fruit);
});
```

### for...of Loop (Modern)

Even simpler for arrays:

```javascript
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

### while Loop

Repeats while condition is true:

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### Practical Example: Building a List

```javascript
let projects = [
    { title: "Calculator", description: "A simple calculator app" },
    { title: "Todo List", description: "Task management app" },
    { title: "Portfolio", description: "Personal portfolio site" }
];

let projectList = document.getElementById("project-list");

projects.forEach(function(project) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
    projectList.appendChild(listItem);
});
```

---

## 💾 Local Storage

**Local Storage** lets you save data in the user's browser that persists even after they close the page.

### Why Use Local Storage?

- Save user preferences
- Remember form data
- Store app state
- No server needed

### Basic Usage

#### Saving Data

```javascript
// Save a string
localStorage.setItem("username", "John");

// Save a number (converted to string)
localStorage.setItem("age", 25);

// Save an object (must convert to JSON)
let user = { name: "John", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
```

#### Getting Data

```javascript
// Get a string
let username = localStorage.getItem("username");  // "John"

// Get a number (returns string, need to convert)
let age = parseInt(localStorage.getItem("age"));  // 25

// Get an object (must parse JSON)
let user = JSON.parse(localStorage.getItem("user"));
```

#### Removing Data

```javascript
// Remove specific item
localStorage.removeItem("username");

// Clear all local storage
localStorage.clear();
```

### Practical Example: Saving Todo List

```javascript
// Save todos to local storage
function saveTodos() {
    let todos = [];
    document.querySelectorAll(".todo-item").forEach(function(item) {
        todos.push(item.textContent);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Load todos from local storage
function loadTodos() {
    let savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
        let todos = JSON.parse(savedTodos);
        todos.forEach(function(todoText) {
            addTodoToList(todoText);
        });
    }
}

// Call on page load
document.addEventListener("DOMContentLoaded", loadTodos);
```

### Limitations

- **Only strings**: Must use `JSON.stringify()` and `JSON.parse()`
- **5-10MB limit**: Depends on browser
- **Same origin**: Only accessible from same domain
- **No expiration**: Data stays until cleared

---

## 🏗️ Project Structuring

Organize your code for maintainability and scalability.

### Folder Structure

```
my-project/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   └── contact.js
├── images/
│   ├── logo.png
│   └── photos/
└── README.md
```

### File Organization Principles

1. **Separate concerns**: HTML, CSS, JS in different files
2. **Group related files**: Use folders (css/, js/, images/)
3. **Meaningful names**: `contact-form.js` not `script2.js`
4. **Consistent naming**: Use kebab-case (my-file.js) or camelCase (myFile.js)

### Code Organization

#### Separate by Function

```javascript
// navigation.js
function setupNavigation() {
    // Navigation code
}

// contact.js
function setupContactForm() {
    // Contact form code
}

// main.js
document.addEventListener("DOMContentLoaded", function() {
    setupNavigation();
    setupContactForm();
});
```

#### Use Comments to Organize

```javascript
// ===================================
// NAVIGATION FUNCTIONS
// ===================================

function toggleMenu() {
    // Code here
}

// ===================================
// FORM HANDLING
// ===================================

function validateForm() {
    // Code here
}
```

---

## 🐛 Debugging Techniques

Debugging is a crucial skill. Here's how to do it effectively.

### console.log() - Your Best Friend

```javascript
let value = 10;
console.log("Value is:", value);

let user = { name: "John", age: 25 };
console.log("User object:", user);
```

### Browser DevTools

1. **Open DevTools**: Press `F12` or `Right-click → Inspect`
2. **Console Tab**: See errors and run JavaScript
3. **Elements Tab**: Inspect HTML and CSS
4. **Network Tab**: See network requests
5. **Sources Tab**: Set breakpoints and debug

### Common Errors and Solutions

#### "Cannot read property of undefined"

```javascript
// Problem
let user = null;
console.log(user.name);  // Error!

// Solution
if (user) {
    console.log(user.name);
}
// Or
console.log(user?.name);  // Optional chaining (modern)
```

#### "Element is null"

```javascript
// Problem
let button = document.getElementById("my-button");
button.addEventListener("click", ...);  // Error if button is null

// Solution
let button = document.getElementById("my-button");
if (button) {
    button.addEventListener("click", ...);
}
```

#### "Unexpected token"

Usually a syntax error:
- Missing closing bracket `}`
- Missing semicolon (sometimes)
- Mismatched quotes

**Solution**: Check browser console for line number

### Debugging Workflow

1. **Read the error message** - It tells you what's wrong
2. **Check the line number** - Where the error occurred
3. **Use console.log()** - See what values variables have
4. **Check browser console** - Errors appear there
5. **Test in small pieces** - Isolate the problem

---

## 🔍 How to Google Effectively

As a developer, you'll Google constantly. Here's how to do it well.

### Effective Search Strategies

#### 1. Be Specific

```
❌ Bad: "javascript error"
✅ Good: "javascript cannot read property of undefined"
```

#### 2. Include Technology and Version

```
❌ Bad: "how to center div"
✅ Good: "css flexbox center div horizontally"
```

#### 3. Use Error Messages

```
✅ Good: "javascript Uncaught TypeError: Cannot read property 'addEventListener' of null"
```

#### 4. Add "how to" or "tutorial"

```
✅ Good: "how to use local storage javascript"
✅ Good: "javascript array forEach tutorial"
```

### Best Resources

1. **MDN Web Docs** - Official, comprehensive
   - Search: "mdn javascript arrays"
2. **Stack Overflow** - Community answers
   - Search: "stackoverflow [your question]"
3. **CSS-Tricks** - Great for CSS
4. **JavaScript.info** - Excellent tutorials
5. **W3Schools** - Beginner-friendly

### Reading Documentation

When reading docs:
1. **Start with examples** - See it in action
2. **Read the description** - Understand what it does
3. **Check parameters** - What inputs does it need?
4. **Look at return values** - What does it give back?
5. **Try it yourself** - Experiment in console

---

## 🚀 How to Continue Learning

The bootcamp is just the beginning! Here's how to keep growing.

### Practice Regularly

- **Code daily** - Even 30 minutes helps
- **Build projects** - Apply what you learn
- **Break things** - Learn from mistakes
- **Refactor old code** - Improve past projects

### Learning Resources

#### Free Courses
- **freeCodeCamp** - Comprehensive free curriculum
- **The Odin Project** - Full-stack curriculum
- **MDN Learning Area** - Official web docs
- **JavaScript.info** - Deep JavaScript tutorials

#### Practice Platforms
- **Codewars** - Coding challenges
- **LeetCode** - Algorithm practice
- **Frontend Mentor** - Real-world projects
- **CSS Battle** - CSS challenges

#### YouTube Channels
- **Traversy Media** - Practical tutorials
- **Web Dev Simplified** - Clear explanations
- **Kevin Powell** - CSS expert
- **freeCodeCamp** - Full courses

### Build Projects

**Start Small**:
- Calculator
- Todo List
- Weather App
- Quiz App

**Then Build**:
- Personal Portfolio
- Blog Website
- E-commerce Site
- Social Media Clone

### Join Communities

- **GitHub** - Share code, contribute
- **Discord/Slack** - Developer communities
- **Reddit** - r/webdev, r/learnjavascript
- **Twitter/X** - Follow developers
- **Local Meetups** - Network in person

### Version Control (Git)

Learn Git basics:
- Track changes
- Collaborate
- Build portfolio on GitHub

**Resources**:
- GitHub Learning Lab
- Git documentation
- Interactive Git tutorial

### Next Steps After Bootcamp

1. **Master the basics** - HTML, CSS, JavaScript
2. **Learn a framework** - React, Vue, or Angular
3. **Learn backend** - Node.js, Python, etc.
4. **Build a portfolio** - Show your work
5. **Apply for jobs** - Start with junior positions

---

## 💡 Best Practices Summary

### Code Quality

1. **Write readable code** - Clear variable names
2. **Comment complex logic** - Explain why, not what
3. **Keep functions small** - One responsibility
4. **Use consistent formatting** - Same style throughout
5. **Test your code** - Break it, fix it, repeat

### Project Management

1. **Plan before coding** - Sketch, wireframe, plan
2. **Start simple** - Add features incrementally
3. **Version control** - Use Git from the start
4. **Documentation** - Write README files
5. **Deploy early** - Get it online (GitHub Pages, Netlify)

### Learning Mindset

1. **Embrace errors** - They're learning opportunities
2. **Ask questions** - No question is stupid
3. **Help others** - Teaching reinforces learning
4. **Stay curious** - Explore new technologies
5. **Be patient** - Learning takes time

---

## 📚 Quick Reference

### Arrays
```javascript
let arr = [1, 2, 3];
arr.push(4);           // Add to end
arr.pop();             // Remove from end
arr.length;            // Get length
arr.forEach(item => {}); // Loop through
```

### Loops
```javascript
for (let i = 0; i < 10; i++) { }
arr.forEach(item => { });
for (let item of arr) { }
while (condition) { }
```

### Local Storage
```javascript
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
JSON.stringify(obj);   // Convert to string
JSON.parse(str);        // Convert from string
```

---

## 🎓 Summary

You've learned:
- ✅ Working with arrays and array methods
- ✅ Different types of loops (for, forEach, while)
- ✅ Local storage for data persistence
- ✅ How to structure projects professionally
- ✅ Debugging techniques and tools
- ✅ How to Google effectively
- ✅ Resources for continued learning
- ✅ Best practices for code and projects

**Next Step**: Complete the [Week 6 Final Project](./Week6-Final-Project.md) to showcase everything you've learned!

---

## 📖 Additional Resources

- [MDN JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [freeCodeCamp](https://www.freecodecamp.org/)
- [The Odin Project](https://www.theodinproject.com/)
- [JavaScript.info](https://javascript.info/)

**Congratulations on completing the bootcamp!** 🎉 Keep coding and never stop learning! 🚀

