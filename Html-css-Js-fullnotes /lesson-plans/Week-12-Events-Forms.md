# WEEK 12 LESSON PLAN

## 1. Lesson Information

| Field | Value |
|-------|--------|
| **Week** | 12 |
| **Topic** | Events: Click, Submit, Forms |
| **Duration** | 2–3 Hours |

---

## 2. Learning Objectives

By the end of this lesson, students will be able to:

- Attach a click handler with `addEventListener` and prevent a form from submitting the default way when needed.
- Read form values in the handler and show a result or message on the page.
- Use events: `click`, `submit`, `input`; update content and toggle classes.

---

## 3. Prior Knowledge

Students should understand:

- DOM: selecting elements, reading `input.value`, setting `textContent`.
- Functions and basic conditionals.

---

## 4. Materials Needed

- Computer, code editor, browser
- HTML page with form inputs and result area (or build from scratch)

---

## 5. Key Concepts

- **Events:** `click`, `submit`, `input`.
- **addEventListener:** element.addEventListener('click', handler).
- **Form:** `submit` event; `event.preventDefault()` to stop default submit; reading `input.value` in the handler.
- **Updating content:** set `textContent`; optionally `classList.add`/`remove`/`toggle` for styling feedback.

---

## 6. Lesson Procedure

### A. Common Mistakes Review (5–10 minutes)

Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 9** (events). Forgetting preventDefault on form submit; reading values before user has entered them.

### B. Introduction of Core Concept (40–60 minutes)

Instructor explains: what events are; `addEventListener('click', handler)`; form `submit` and `preventDefault()`; reading `input.value` inside the handler; displaying result in the page; optional: `classList.add`/`remove`/`toggle`. Live coding: simple form that computes something and shows result, or calculator with operation buttons.

### C. Guided Practice (30–45 minutes)

Students: add two number inputs and buttons for +, −, ×, ÷ and a result area; attach one listener per operation button; write one function per operation and one that reads inputs, calls the right operation, and displays the result; handle division by zero with a friendly message.

### D. Independent Practice (30–60 minutes)

**Main exercise:** On-page calculator: two number inputs, buttons for +, −, ×, ÷, result area. One function per operation; one function that reads inputs, calls the right operation, and displays the result. Use `addEventListener` on each button. Handle division by zero with a friendly message.

**Real-world:** “Same structure as any in-page calculator or configurator.”

**Milestone:** Interactive UI Developer.

### E. Assessment

All four operations work; result updates on button click; division by zero shows message; no form default submit (if using form); no console errors.

### F. Wrap-Up Discussion (10–15 minutes)

What was difficult? When do you use preventDefault? How is this used in real apps?

### G. Homework (Light / Optional)

Read “Creating elements” and “appendChild”, “remove” in Week 5 material.

---

## Common Mistakes This Week

*Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 9** (events) (5–10 min).*

- Forgetting `event.preventDefault()` on form submit so the page reloads.
- Attaching listeners to wrong elements or not reading current `input.value` in the handler.

---

*Back to [Lesson Plans Index](README.md)*
