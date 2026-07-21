# Write Your Todo List Story on Substack

You finished the **Todo List App** — a real web app where people can add tasks, mark them done, delete them, filter them, and keep them saved even after closing the browser.

Your next task is not to write more code. Your job is to **tell the story** of how you built it.

Publish a short post on **Substack** (or write a draft there and share the link with your instructor). Write as if you are talking to a friend who has never coded before, but is curious about what you did.

**Length:** about 400–700 words (roughly 5–8 short paragraphs)

---

## What to write about

Your story should cover four things:

1. **What the task was**
2. **How you approached it**
3. **What challenges you faced**
4. **How you overcame them**

---

## 1. What was this task?

Explain what you were asked to do, in your own words.

- What kind of app did you build? What can a user do with it?
- What was already done for you (the HTML layout, the CSS styling, some of the JavaScript)?
- What did you have to finish in `script.js`?
- What ideas from JavaScript did you use? For example:
  - Changing what appears on the page (DOM manipulation)
  - Responding to clicks and keyboard input (event listeners)
  - Storing tasks as objects in an array (`{ id, text, completed }`)
  - Saving data in the browser (`localStorage`)
  - Showing only some tasks at a time (filtering)

Name at least **three features** you implemented — such as adding a todo, marking one complete, or saving tasks so they stay after a page refresh.

---

## 2. How did you approach it?

Describe your process, not just the final result.

- Did you read the README first, or jump straight into the code?
- Did you work on one function at a time, or try several at once?
- Which function did you start with? Why that one?
- How did you test your work? (refreshing the page, adding tasks, checking the browser console, and so on)
- Did you use `console.log()` to see what was happening?
- Did anyone help you — a classmate, your instructor, or an online resource? What did they help with?

Be honest. Good builders do not pretend everything worked on the first try.

---

## 3. What challenges did you face?

Pick **one to three real struggles** you had. Be specific.

Here are examples from this project — only write about ones that actually happened to you:

| What might have gone wrong | Why it can be tricky |
|---|---|
| `localStorage` and `JSON.parse` | Data is stored as text, not as a real array |
| `addTodo()` | Forgetting to clear the input, update `nextId`, or call `saveTodos()` |
| `getFilteredTodos()` | Mixing up `active` and `completed` in the filter logic |
| `toggleTodo()` | Finding the right todo by `id` using `.find()` |
| `deleteTodo()` | Choosing between `.splice()` and `.filter()` |
| Event listeners in `renderTodos()` | Attaching listeners to elements created inside a loop |
| Filter buttons | Reading `data-filter` and updating the `active` class |
| Clicks did nothing | A function was still empty, or `saveTodos()` / `renderTodos()` was not called |

For each challenge, write:

1. **What went wrong** — what you expected vs what actually happened
2. **What you tried** — your first attempt to fix it
3. **What finally worked**

---

## 4. How did you overcome it?

Turn each challenge into a short victory story.

You can use this pattern:

> “At first I thought __________, but then I realized __________. I fixed it by __________. Now I understand that __________.”

**Example** (change this to match your real experience):

> “At first I thought my todos were saving, but when I refreshed the page they disappeared. I realized I forgot to call `saveTodos()` after adding a task. I fixed it by adding that call at the end of `addTodo()`. Now I understand that changing data in memory is not the same as saving it to `localStorage`.”

---

## Suggested structure for your Substack post

Use these section headings:

### Title
Examples:
- *How I Built My First Todo List App*
- *What I Learned Making Tasks Stick in the Browser*
- *From Blank Functions to a Working App*

### Hook
One or two sentences on why this project mattered to you, or what surprised you.

### The Mission
What the assignment was and what the finished app does.

### My Game Plan
How you worked through it, step by step.

### The Hard Part
Your biggest challenge — be specific.

### The Breakthrough
How you solved it and what finally clicked.

### What I’d Tell My Past Self
One piece of advice for someone starting this project tomorrow.

### Closing
One thing you are proud of, and one thing you want to try next.

---

## Before you publish, check:

- [ ] You explained what the task was
- [ ] You described how you worked through it
- [ ] You named at least one specific challenge (not just “it was hard”)
- [ ] You explained how you solved it
- [ ] You included at least one thing you learned about JavaScript or building apps
- [ ] It sounds like you — not like a copy of the README

---

## Optional: add a screenshot

If you can, include a screenshot of:

- your working app with a few todos, or
- something in the browser console that helped you debug

Add a short caption explaining what the image shows and why it mattered.

---

## Need a place to start?

Here is one possible opening paragraph. Rewrite it in your own words:

> Last week I finished my first Todo List app in coding club. On the surface it sounds simple — type a task, check it off, delete it — but most of the app was already built for us in HTML and CSS. My real job was to fill in the JavaScript: functions for adding todos, filtering them, and saving them so they do not disappear when I refresh the page. This post is the story of how I did that, what broke along the way, and what I finally understood.
