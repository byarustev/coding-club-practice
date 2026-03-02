# WEEK 11 LESSON PLAN

## 1. Lesson Information

| Field | Value |
|-------|--------|
| **Week** | 11 |
| **Topic** | DOM: Selecting Elements and Updating Content |
| **Duration** | 2–3 Hours |

---

## 2. Learning Objectives

By the end of this lesson, students will be able to:

- Select an element by ID or class and change its text or read an input value.
- Run the script only after the page is ready and handle “element not found” safely.
- Use the DOM as a tree: select, read, update.

---

## 3. Prior Knowledge

Students should understand:

- HTML (ids, classes, form inputs).
- JavaScript: variables, functions, conditionals.
- Linking `script.js` (e.g. at end of body).

---

## 4. Materials Needed

- Computer, code editor, browser with DevTools (Elements, Console)
- Simple HTML page with inputs and a result area (e.g. for tip calculator)

---

## 5. Key Concepts

- **DOM:** document as a tree of nodes; JavaScript can read and change it.
- **Selecting:** `getElementById`, `querySelector`, `querySelectorAll`.
- **Reading/updating:** `textContent`, `input.value`.
- **When the script runs:** `DOMContentLoaded` or script at end of body.
- **Safety:** check for `null` before using an element (element not found).

---

## 6. Lesson Procedure

### A. Common Mistakes Review (5–10 minutes)

Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 9**. Script runs before DOM is ready; typo in id/selector; not checking for null.

### B. Introduction of Core Concept (40–60 minutes)

Instructor explains: what the DOM is; selecting by ID and class (`getElementById`, `querySelector`); reading `textContent` and `input.value`; setting `textContent`; when the script runs (`DOMContentLoaded` or script at end); checking for `null`. Live coding: small page with input and result area, read input and update result.

### C. Guided Practice (30–45 minutes)

Students: add an HTML page with bill amount and tip % inputs, a button, and a result element; in JS, select the inputs and result; write a function that computes tip and returns result; write a function that sets the result element’s `textContent`; wire the button with `addEventListener` to run calculation and update page.

### D. Independent Practice (30–60 minutes)

**Main exercise:** Small page: bill amount and tip % inputs, a button, and a result area. JS: one function that reads the inputs, computes the tip, returns the result; another that sets the result element’s `textContent`. Button click (via `addEventListener`) runs the calculation and updates the page.

**Real-world:** “Same pattern as tip or discount calculators on the web.”

### E. Assessment

Tip calculation is correct; result updates on button click; no errors when element exists; script runs after DOM is ready.

### F. Wrap-Up Discussion (10–15 minutes)

What was difficult? Why check for `null`? How is this pattern used on real sites?

### G. Homework (Light / Optional)

Read “Events” and “addEventListener” in Week 5 material.

---

## Common Mistakes This Week

*Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 9** (5–10 min).*

- Running script before DOM is ready (e.g. script in head without DOMContentLoaded).
- Typos in element id or selector so `getElementById` / `querySelector` returns null.
- Using an element without checking for null, causing runtime errors.

---

*Back to [Lesson Plans Index](README.md)*
