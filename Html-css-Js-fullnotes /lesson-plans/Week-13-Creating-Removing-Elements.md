# WEEK 13 LESSON PLAN

## 1. Lesson Information

| Field | Value |
|-------|--------|
| **Week** | 13 |
| **Topic** | Creating and Removing Elements |
| **Duration** | 2–3 Hours |

---

## 2. Learning Objectives

By the end of this lesson, students will be able to:

- Create a new element in JS, set its content, and append it to the page.
- Remove an element (e.g. list item) when a button inside it is clicked, using event delegation.
- Use createElement, textContent/innerHTML, appendChild, and remove().

---

## 3. Prior Knowledge

Students should understand:

- DOM: selecting elements, updating textContent.
- Events: addEventListener, click handlers.

---

## 4. Materials Needed

- Computer, code editor, browser
- (Optional) Starter HTML with input, Add button, and empty list

---

## 5. Key Concepts

- **Creating:** `document.createElement('tagName')`; set `textContent` or `innerHTML`; set attributes.
- **Adding:** `parent.appendChild(element)`.
- **Removing:** `element.remove()`.
- **Event delegation:** attach one listener on the parent (e.g. list) for dynamically added buttons (e.g. Delete); use `event.target` to find which button was clicked.

---

## 6. Lesson Procedure

### A. Common Mistakes Review (5–10 minutes)

Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 10**. Adding listeners to each new item vs one on parent; forgetting to append the new element.

### B. Introduction of Core Concept (40–60 minutes)

Instructor explains: createElement; setting textContent and attributes; appendChild; remove(); why event delegation (one listener on parent for many delete buttons); event.target and checking which button was clicked. Live coding: add one list item with a Delete button; delete via event delegation.

### C. Guided Practice (30–45 minutes)

Students: build HTML with input, “Add” button, and empty `ul`; on Add: read input, create `li` with text and a “Delete” button, append to `ul`; on Delete (listener on `ul`): if target is a delete button, remove that `li`; ignore empty input; clear input after add.

### D. Independent Practice (30–60 minutes)

**Main exercise:** To-do list: input, “Add” button, list. On Add: read input, create an `li` with text and a “Delete” button, append to `ul`. On Delete (event delegation on the list): remove that `li`. Ignore empty input; clear input after add.

**Real-world:** “Same pattern as task lists, comments, or any list the user can add to or remove from.”

### E. Assessment

New items appear in the list; Delete removes the correct item; empty input does not add; no duplicate listeners; no console errors.

### F. Wrap-Up Discussion (10–15 minutes)

What was difficult? Why use event delegation instead of a listener on every Delete button? How is this used in real apps?

### G. Homework (Light / Optional)

Read “Arrays” and “Loops” in Week 6 material.

---

## Common Mistakes This Week

*Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 10** (5–10 min).*

- Adding a new listener to every new item instead of one on the parent (event delegation).
- Creating an element but forgetting to append it to the DOM.
- Not checking event.target in delegation (e.g. removing wrong element).

---

*Back to [Lesson Plans Index](README.md)*
