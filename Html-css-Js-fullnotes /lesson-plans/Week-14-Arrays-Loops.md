# WEEK 14 LESSON PLAN

## 1. Lesson Information

| Field | Value |
|-------|--------|
| **Week** | 14 |
| **Topic** | Arrays and Loops: Building a List from Data |
| **Duration** | 2–3 Hours |

---

## 2. Learning Objectives

By the end of this lesson, students will be able to:

- Store a few items in an array (e.g. objects with title and description) and loop over them.
- For each item, create a DOM element (e.g. card or row) and append it to a container.
- Use the pattern: array of objects → loop → create element → append.

---

## 3. Prior Knowledge

Students should understand:

- DOM: createElement, appendChild, selecting containers.
- Basic JS: variables, functions.

---

## 4. Materials Needed

- Computer, code editor, browser
- HTML page with one empty container (e.g. `#projects` or `#menu`)

---

## 5. Key Concepts

- **Arrays:** literal `[]`, index, `length`, `push`; array of objects `{ title, description }`.
- **Loops:** `forEach` or `for`/`for...of` to iterate over array.
- **Pattern:** define array of 3+ items → loop → create element (e.g. card or row) → set content from item → append to container.

---

## 6. Lesson Procedure

### A. Common Mistakes Review (5–10 minutes)

Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 11**. Clearing container before re-rendering; off-by-one in loop; wrong property names on objects.

### B. Introduction of Core Concept (40–60 minutes)

Instructor explains: array literal and indexing; array of objects; forEach and for...of; creating one card/row per item and appending to a container. Live coding: array of 3 items, loop, create divs with title and description, append to #projects (or similar).

### C. Guided Practice (30–45 minutes)

Students: define an array of 3+ objects (e.g. `{ title, description }`); get container with querySelector; use forEach (or for...of) to create a card/row for each; set text from item; append to container.

### D. Independent Practice (30–60 minutes)

**Main exercise:** One HTML container (e.g. `#projects` or `#menu`). In JS, define an array of 3+ items (e.g. `{ title, description }`). Use `forEach` (or `for...of`) to create a card or row for each and append to the container.

**Real-world:** “Same as rendering products, blog posts, or menu items from data.”

### E. Assessment

All items from the array appear in the page; structure is correct (one element per item); no console errors.

### F. Wrap-Up Discussion (10–15 minutes)

What was difficult? When would you fetch this data from a server instead of hardcoding? How is this pattern used on real sites?

### G. Homework (Light / Optional)

Read “Local storage” and “JSON.stringify/parse” in Week 6 material.

---

## Common Mistakes This Week

*Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 11** (5–10 min).*

- Forgetting to clear container before re-rendering (if list is built again later).
- Typo in object property (e.g. item.titel instead of item.title).
- Loop variable used incorrectly inside async/callback (closure); for this week keep loop simple.

---

*Back to [Lesson Plans Index](README.md)*
