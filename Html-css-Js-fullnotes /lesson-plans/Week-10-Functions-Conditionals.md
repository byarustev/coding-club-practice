# WEEK 10 LESSON PLAN

## 1. Lesson Information

| Field | Value |
|-------|--------|
| **Week** | 10 |
| **Topic** | Functions and Conditionals (Logic Only) |
| **Duration** | 2–3 Hours |

---

## 2. Learning Objectives

By the end of this lesson, students will be able to:

- Write a function that takes inputs and returns a value (e.g. grade from score, or result of a calculation).
- Use `if`/`else`/`else if` correctly and test with a few different inputs.
- Practice logic only in the console — no DOM this week.

---

## 3. Prior Knowledge

Students should understand:

- Variables (`let`, `const`), types, operators, `console.log`.
- Basic conditionals (e.g. from Week 9 converter/price exercise).

---

## 4. Materials Needed

- Computer, code editor, browser
- [JS-Logic-Practice-Sheet.md](../notes/Week-4/JS-Logic-Practice-Sheet.md) — Even/odd, Simple password validator, Mini calculator (logic only), optional FizzBuzz

---

## 5. Key Concepts

- **Functions:** declaration, parameters, `return`; calling a function with arguments.
- **Conditionals:** `if`, `else`, `else if`; ternary operator for simple choices.
- **Logic only:** no `getElementById`, no HTML — all input/output via `console.log` and (if needed) hardcoded test values.

---

## 6. Lesson Procedure

### A. Common Mistakes Review (5–10 minutes)

Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 8**. Forgetting `return`; off-by-one in conditions; testing with only one input.

### B. Introduction of Core Concept (40–60 minutes)

Instructor explains: function syntax (declaration, parameters, return); when to use `return`; `if`/`else`/`else if` and ternary; testing with multiple inputs. Live coding: e.g. grade-from-score function and a small conditional chain.

### C. Guided Practice (30–45 minutes)

Students: write one function that takes a number and returns a string (e.g. grade or category); add `if`/`else`; call the function with different values and `console.log` the result.

### D. Independent Practice (30–60 minutes)

**Main exercise:** Use [JS-Logic-Practice-Sheet.md](../notes/Week-4/JS-Logic-Practice-Sheet.md): **Even/odd**, **Simple password validator**, **Mini calculator (logic only)**. Optionally **FizzBuzz**. All in `script.js` with `console.log` only. No HTML elements, no `getElementById`.

**Real-world:** “This logic will later drive buttons and forms; get it right first.”

### E. Assessment

Functions return correct values for sample inputs; conditionals handle edge cases (e.g. boundary scores); code runs without errors.

### F. Wrap-Up Discussion (10–15 minutes)

What was difficult? Why practice logic without the DOM first? How will this connect to buttons and forms?

### G. Homework (Light / Optional)

Read “DOM” and “Selecting elements” in Week 5 material.

---

## Common Mistakes This Week

*Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 8** (5–10 min).*

- Forgetting `return` in a function that should produce a value.
- Not testing with several inputs (e.g. only testing one grade).
- Using `=` instead of `===` in conditions.

---

*Back to [Lesson Plans Index](README.md)*
