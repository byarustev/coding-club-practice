# Week 5 Assignment: To-Do List App

## 🎯 Assignment Overview

Build a fully functional To-Do List application using HTML, CSS, and JavaScript. Your app will allow users to add tasks dynamically and remove them, demonstrating your understanding of DOM manipulation and events.

**Estimated Time**: 4-5 hours

---

## ✅ Requirements Checklist

Your To-Do List app must include:

- [ ] Input field for entering tasks
- [ ] "Add Task" button
- [ ] When user enters a task and clicks button:
  - [ ] Task is added to the list dynamically
  - [ ] Each task shows the task text
  - [ ] Each task has a "Delete" button
  - [ ] Delete button removes the task from the DOM
- [ ] Empty input should not add a task
- [ ] Bonus: "Mark as Done" button that toggles task styling
- [ ] Clean, user-friendly interface

---

## 📋 Step-by-Step Instructions

### Step 1: Set Up Your Project

1. Create a new folder called `todo-list`
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
    <title>To-Do List App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>My To-Do List</h1>
        
        <div class="input-section">
            <!-- Input and button will go here -->
        </div>
        
        <ul class="todo-list" id="todo-list">
            <!-- Tasks will be added here dynamically -->
        </ul>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### Step 3: Add Input and Button

Inside the `.input-section` div, add:

```html
<div class="input-section">
    <input 
        type="text" 
        id="task-input" 
        placeholder="Enter a new task..."
    >
    <button id="add-btn">Add Task</button>
</div>
```

### Step 4: Style with CSS

Open `styles.css` and add styling:

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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

/* ===================================
   CONTAINER
   =================================== */

.container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    padding: 30px;
    max-width: 500px;
    width: 100%;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5em;
}

/* ===================================
   INPUT SECTION
   =================================== */

.input-section {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

#task-input {
    flex: 1;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 5px;
    outline: none;
}

#task-input:focus {
    border-color: #667eea;
}

#add-btn {
    padding: 12px 24px;
    font-size: 16px;
    background-color: #667eea;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

#add-btn:hover {
    background-color: #5568d3;
}

/* ===================================
   TODO LIST
   =================================== */

.todo-list {
    list-style: none;
}

.todo-item {
    background-color: #f8f9fa;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.2s;
}

.todo-item:hover {
    transform: translateX(5px);
}

.todo-item.done {
    background-color: #d4edda;
    text-decoration: line-through;
    opacity: 0.7;
}

.todo-text {
    flex: 1;
    font-size: 16px;
    color: #333;
}

.todo-buttons {
    display: flex;
    gap: 10px;
}

.btn-done,
.btn-delete {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.btn-done {
    background-color: #28a745;
    color: white;
}

.btn-done:hover {
    background-color: #218838;
}

.btn-delete {
    background-color: #dc3545;
    color: white;
}

.btn-delete:hover {
    background-color: #c82333;
}
```

### Step 5: Write JavaScript - Get Elements

Open `script.js` and start by getting references to elements:

```javascript
// Get DOM elements
let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");
```

### Step 6: Create Function to Add Task

Create a function that adds a new task:

```javascript
// Function to add a new task
function addTask() {
    // Get the input value and trim whitespace
    let taskText = taskInput.value.trim();
    
    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;  // Exit function if empty
    }
    
    // Create new list item
    let listItem = document.createElement("li");
    listItem.className = "todo-item";
    
    // Create task text element
    let taskTextElement = document.createElement("span");
    taskTextElement.className = "todo-text";
    taskTextElement.textContent = taskText;
    
    // Create buttons container
    let buttonsContainer = document.createElement("div");
    buttonsContainer.className = "todo-buttons";
    
    // Create "Done" button (Bonus feature)
    let doneButton = document.createElement("button");
    doneButton.className = "btn-done";
    doneButton.textContent = "Done";
    
    // Create "Delete" button
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn-delete";
    deleteButton.textContent = "Delete";
    
    // Append elements
    buttonsContainer.appendChild(doneButton);
    buttonsContainer.appendChild(deleteButton);
    listItem.appendChild(taskTextElement);
    listItem.appendChild(buttonsContainer);
    todoList.appendChild(listItem);
    
    // Clear the input field
    taskInput.value = "";
    
    // Focus back on input for next task
    taskInput.focus();
}
```

### Step 7: Add Event Listener for Add Button

```javascript
// Add event listener to "Add Task" button
addButton.addEventListener("click", addTask);
```

### Step 8: Add Event Listener for Enter Key

Allow users to press Enter to add tasks:

```javascript
// Add event listener for Enter key
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
```

### Step 9: Add Delete Functionality

Add event delegation to handle delete buttons (since they're created dynamically):

```javascript
// Event delegation for delete buttons
todoList.addEventListener("click", function(event) {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains("btn-delete")) {
        // Get the parent list item
        let listItem = event.target.closest(".todo-item");
        // Remove the list item
        listItem.remove();
    }
});
```

**Event Delegation**: We attach the listener to the parent (`todoList`) instead of each button. This works for dynamically created buttons!

### Step 10: Add "Mark as Done" Functionality (Bonus)

Add the done functionality using event delegation:

```javascript
// Event delegation for done buttons
todoList.addEventListener("click", function(event) {
    // Check if the clicked element is a done button
    if (event.target.classList.contains("btn-done")) {
        // Get the parent list item
        let listItem = event.target.closest(".todo-item");
        // Toggle the "done" class
        listItem.classList.toggle("done");
        
        // Change button text
        if (listItem.classList.contains("done")) {
            event.target.textContent = "Undo";
        } else {
            event.target.textContent = "Done";
        }
    }
});
```

### Step 11: Combine Event Delegation

Since both delete and done use the same parent, combine them:

```javascript
// Event delegation for all buttons
todoList.addEventListener("click", function(event) {
    let listItem = event.target.closest(".todo-item");
    
    // Handle delete button
    if (event.target.classList.contains("btn-delete")) {
        listItem.remove();
    }
    
    // Handle done button
    if (event.target.classList.contains("btn-done")) {
        listItem.classList.toggle("done");
        
        // Change button text
        if (listItem.classList.contains("done")) {
            event.target.textContent = "Undo";
        } else {
            event.target.textContent = "Done";
        }
    }
});
```

### Step 12: Test Your App

1. **Open `index.html` in your browser**
2. **Test adding tasks**:
   - Type a task and click "Add Task"
   - Press Enter to add a task
   - Try adding an empty task (should show alert)
3. **Test deleting tasks**:
   - Click "Delete" button on any task
   - Verify task is removed
4. **Test marking as done** (if implemented):
   - Click "Done" button
   - Verify task styling changes
   - Click "Undo" to revert

---

## 🎨 Optional Enhancements

### Add Task Counter

Show how many tasks are remaining:

**HTML**:
```html
<div class="task-counter">
    <span id="task-count">0</span> tasks remaining
</div>
```

**JavaScript**:
```javascript
function updateTaskCount() {
    let totalTasks = todoList.children.length;
    let doneTasks = document.querySelectorAll(".todo-item.done").length;
    let remaining = totalTasks - doneTasks;
    
    document.getElementById("task-count").textContent = remaining;
}

// Call after adding/deleting tasks
```

### Clear All Button

Add a button to clear all tasks:

**HTML**:
```html
<button id="clear-all">Clear All</button>
```

**JavaScript**:
```javascript
document.getElementById("clear-all").addEventListener("click", function() {
    if (confirm("Are you sure you want to clear all tasks?")) {
        todoList.innerHTML = "";
        updateTaskCount();
    }
});
```

### Task Persistence (Local Storage)

Save tasks to browser's local storage:

```javascript
// Save tasks to local storage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".todo-text").forEach(function(task) {
        tasks.push(task.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        JSON.parse(savedTasks).forEach(function(taskText) {
            // Add task to list
        });
    }
}

// Call loadTasks when page loads
document.addEventListener("DOMContentLoaded", loadTasks);
```

---

## 📝 Complete Example Code

Here's a complete reference implementation:

**script.js**:
```javascript
// Get DOM elements
let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");

// Function to add a new task
function addTask() {
    // Get the input value and trim whitespace
    let taskText = taskInput.value.trim();
    
    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    // Create new list item
    let listItem = document.createElement("li");
    listItem.className = "todo-item";
    
    // Create task text element
    let taskTextElement = document.createElement("span");
    taskTextElement.className = "todo-text";
    taskTextElement.textContent = taskText;
    
    // Create buttons container
    let buttonsContainer = document.createElement("div");
    buttonsContainer.className = "todo-buttons";
    
    // Create "Done" button
    let doneButton = document.createElement("button");
    doneButton.className = "btn-done";
    doneButton.textContent = "Done";
    
    // Create "Delete" button
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn-delete";
    deleteButton.textContent = "Delete";
    
    // Append elements
    buttonsContainer.appendChild(doneButton);
    buttonsContainer.appendChild(deleteButton);
    listItem.appendChild(taskTextElement);
    listItem.appendChild(buttonsContainer);
    todoList.appendChild(listItem);
    
    // Clear the input field
    taskInput.value = "";
    taskInput.focus();
}

// Add event listener to "Add Task" button
addButton.addEventListener("click", addTask);

// Add event listener for Enter key
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Event delegation for all buttons
todoList.addEventListener("click", function(event) {
    let listItem = event.target.closest(".todo-item");
    
    if (!listItem) return;  // Safety check
    
    // Handle delete button
    if (event.target.classList.contains("btn-delete")) {
        listItem.remove();
    }
    
    // Handle done button
    if (event.target.classList.contains("btn-done")) {
        listItem.classList.toggle("done");
        
        // Change button text
        if (listItem.classList.contains("done")) {
            event.target.textContent = "Undo";
        } else {
            event.target.textContent = "Done";
        }
    }
});
```

---

## ✅ Submission Checklist

Before submitting, verify:

- [ ] Input field and "Add Task" button are present
- [ ] Tasks can be added dynamically
- [ ] Each task displays the task text
- [ ] Each task has a "Delete" button
- [ ] Delete button removes task from DOM
- [ ] Empty input doesn't add a task
- [ ] Enter key adds tasks
- [ ] Bonus: "Mark as Done" button works
- [ ] App is fully functional
- [ ] Code is clean and organized
- [ ] CSS provides good styling

---

## 📤 Deliverables

Submit the following:

1. **`index.html`** file
2. **`styles.css`** file
3. **`script.js`** file

---

## 💡 Tips & Troubleshooting

### Common Issues

**Problem**: Tasks aren't being added
- **Solution**: 
  - Check browser console for errors (F12)
  - Verify `script.js` is linked in HTML
  - Check that element IDs match

**Problem**: Delete button doesn't work
- **Solution**: Use event delegation (attach listener to parent, not individual buttons)

**Problem**: Can't add task with Enter key
- **Solution**: Check event listener - use `event.key === "Enter"`

**Problem**: Empty tasks are being added
- **Solution**: Use `.trim()` and check for empty string before adding

### Pro Tips

- Use `event.target.closest()` to find parent elements
- Use event delegation for dynamically created elements
- Clear input after adding task for better UX
- Focus input after adding for faster task entry
- Use `trim()` to remove whitespace from input

---

## 🎓 What You'll Learn

By completing this assignment, you'll practice:
- DOM element selection
- Creating elements dynamically
- Adding event listeners
- Event delegation
- DOM manipulation (adding/removing elements)
- Input validation
- Building interactive applications
- Combining HTML, CSS, and JavaScript

**Have fun building your To-Do List!** ✅📝✨

