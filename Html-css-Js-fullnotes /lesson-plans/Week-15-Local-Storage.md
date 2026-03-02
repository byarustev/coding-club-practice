# WEEK 15 LESSON PLAN

## 1. Lesson Information

| Field | Value |
|-------|--------|
| **Week** | 15 |
| **Topic** | Local Storage: Saving Data in the Browser |
| **Duration** | 2–3 Hours |

---

## 2. Learning Objectives

By the end of this lesson, students will be able to:

- Save a string or a simple object to localStorage and read it back.
- Integrate localStorage into the to-do list so tasks survive a refresh.
- Use JSON.stringify and JSON.parse for objects; handle empty or invalid data.

---

## 3. Prior Knowledge

Students should understand:

- To-do list from Week 13 (add/delete items, event delegation).
- Arrays and the pattern of rendering a list from data (Week 14).

---

## 4. Materials Needed

- Computer, code editor, browser
- Week 13 to-do list project (or starter with add/delete)

---

## 5. Key Concepts

- **Why persistence:** data lost on refresh without it; localStorage keeps data in the browser.
- **localStorage:** `setItem(key, value)`, `getItem(key)`, `removeItem(key)`; values are strings.
- **Objects:** `JSON.stringify(array)` to save; `JSON.parse(string)` to read; handle empty or invalid JSON (try/catch or check before parse).
- **When to save:** on add/delete, update JS array and save to localStorage.
- **When to load:** on `DOMContentLoaded`, read from localStorage, parse, re-render list; fallback to empty array if nothing saved or parse fails.

---

## 6. Lesson Procedure

### A. Common Mistakes Review (5–10 minutes)

Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 12**. Saving non-strings without stringify; not handling parse errors; saving too often (e.g. on every keystroke) vs on add/delete.

### B. Introduction of Core Concept (40–60 minutes)

Instructor explains: what localStorage is and when to use it; setItem/getItem (strings only); JSON.stringify and JSON.parse for arrays/objects; loading on page load and re-rendering the list; fallback to [] when getItem is null or parse fails. Live coding: extend to-do so one task is saved and restored.

### C. Guided Practice (30–45 minutes)

Students: in to-do, keep an array in JS; on add/delete, update array and localStorage.setItem('todos', JSON.stringify(array)); on DOMContentLoaded, getItem, parse (with fallback to []), loop and render list.

### D. Independent Practice (30–60 minutes)

**Main exercise:** Extend the Week 13 to-do list: on add/delete, update a JS array and save it (e.g. `JSON.stringify`) to localStorage. On load (`DOMContentLoaded`), read from localStorage, `JSON.parse`, and re-render the list. Fallback to empty array if nothing saved or parse fails.

**Real-world:** “Same idea as saving preferences or drafts without a server.”

**Milestone:** Dynamic Application Builder.

### E. Assessment

Tasks persist after refresh; add and delete still work; no errors when localStorage is empty or corrupted (fallback works).

### F. Wrap-Up Discussion (10–15 minutes)

What was difficult? What are the limits of localStorage (size, same origin)? How is this used in real apps?

### G. Homework (Light / Optional)

Read “Project structure” and “Debugging” in Week 6 material. List 2–3 features you want in your final site.

---

## Common Mistakes This Week

*Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 12** (5–10 min).*

- Storing object/array directly (localStorage only stores strings); must use JSON.stringify.
- Not handling null or invalid JSON from getItem (crashes on parse).
- Saving on every keystroke instead of on add/delete (can be slow or overwrite).

---

*Back to [Lesson Plans Index](README.md)*
