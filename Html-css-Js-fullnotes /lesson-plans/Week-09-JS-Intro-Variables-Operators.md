# WEEK 9 LESSON PLAN

## 1. Lesson Information

| Field | Value |
|-------|--------|
| **Week** | 9 |
| **Topic** | JavaScript Intro: Variables, Types, Operators, Console |
| **Duration** | 2–3 Hours |

---

## 2. Learning Objectives

By the end of this lesson, students will be able to:

- Write a short script that uses variables and prints results with `console.log`.
- Use strict comparison (`===`) and template literals for a short message.
- Explain what JavaScript does in the browser (behaviour, not structure).

---

## 3. Prior Knowledge

Students should understand:

- HTML structure and linking external files.
- Basic folder structure (e.g. from Weeks 1–8).
- How to add `<script src="script.js"></script>` before `</body>` (optional homework from Week 8).

---

## 4. Materials Needed

- Computer, code editor, browser with DevTools
- [JS-Logic-Practice-Sheet.md](../notes/Week-4/JS-Logic-Practice-Sheet.md) — Grading and Temperature exercises

---

## 5. Key Concepts

- **What JavaScript does:** behaviour in the browser (vs HTML structure, CSS presentation).
- **External script:** writing in `script.js`, linked before `</body>`.
- **Variables:** `let`, `const`; naming conventions.
- **Types:** string, number, boolean; `typeof`.
- **Operators:** arithmetic; comparison (`===`, `!==`); logical (`&&`, `||`, `!`).
- **Template literals:** `` `Hello ${name}` ``.
- **Console:** `console.log()` for output; using the browser console to run and debug.

---

## 6. Lesson Procedure

### A. Common Mistakes Review (5–10 minutes)

Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 7**. Loose vs strict comparison; script placement; where to look for errors.

### B. Introduction of Core Concept (40–60 minutes)

Instructor explains: what JS does in the browser; linking `script.js`; variables (`let`, `const`) and naming; types (string, number, boolean) and `typeof`; arithmetic and comparison operators; strict equality (`===`, `!==`); template literals; using `console.log` and the browser console. Live coding: small script with variables and output.

### C. Guided Practice (30–45 minutes)

Students: create `script.js`; declare variables; use `console.log` and template literals; run in browser and open DevTools Console; try one simple conditional (e.g. discount if quantity > 10).

### D. Independent Practice (30–60 minutes)

**Main exercise:** Console-only. (1) Unit converter (miles to km) or price calculation (quantity × price). Use variables, template literals to print a sentence, and one conditional (e.g. discount if quantity > 10). (2) Do **Grading** and **Temperature** from [JS-Logic-Practice-Sheet.md](../notes/Week-4/JS-Logic-Practice-Sheet.md). No DOM.

**Real-world:** “Same logic as shopping or converter tools; we add the page later.”

### E. Assessment

Script runs without errors; results visible in console; strict comparison used where appropriate; template literals used for at least one message.

### F. Wrap-Up Discussion (10–15 minutes)

What was difficult? Why use `===` instead of `==`? How is this used in real life?

### G. Homework (Light / Optional)

Read “Functions” and “Conditionals” in Week 4 material.

---

## Common Mistakes This Week

*Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 7** (5–10 min).*

- Using `==` instead of `===`.
- Script in `<head>` so DOM not ready when script runs (or not using DOM yet).
- Typos in variable names; forgetting to open/close template literal backticks.

---

*Back to [Lesson Plans Index](README.md)*
