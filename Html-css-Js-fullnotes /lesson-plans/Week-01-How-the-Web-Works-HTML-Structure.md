# WEEK 1 LESSON PLAN

## 1. Lesson Information

| Field | Value |
|-------|--------|
| **Week** | 1 |
| **Topic** | How the Web Works & HTML Document Structure |
| **Duration** | 2–3 Hours |
| **Instructor** | ____________________ |
| **Class** | ____________________ |

---

## 2. Learning Objectives (Measurable)

By the end of this lesson, students will be able to:

- Explain in simple terms how a browser retrieves a webpage.
- Create a valid HTML document using correct structure.
- Organize project files using proper naming conventions.

---

## 3. Prior Knowledge Required

None.

---

## 4. Materials & Resources

- Computer per student
- Code editor (VS Code or similar)
- Internet access
- [W3C HTML Validator](https://validator.w3.org/)
- Projector (for demonstration)

---

## 5. Key Vocabulary

| Term | Definition |
|------|------------|
| **Browser** | Software that requests and displays web pages |
| **Server** | Computer that sends files when a browser requests a URL |
| **HTML** | Markup language that defines the structure of a webpage |
| **DOCTYPE** | Declaration that tells the browser which HTML version to use |
| **Head** | Section containing metadata (not visible on the page) |
| **Body** | Section containing visible content |
| **Meta tag** | Tag that provides information about the page (e.g. charset, viewport) |

---

## 6. Lesson Structure

### A. Introduction (10–15 minutes)

- Ask students: *“What happens when you type google.com in a browser?”*
- Brief explanation of **browser → server → files**.
- Introduce HTML as the structure of a webpage.

### B. Direct Instruction (40–60 minutes)

Explain and demonstrate:

- **Basic folder structure** (e.g. one folder per project).
- **File naming** (`index.html`, lowercase, hyphens).
- **HTML structure:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  </body>
</html>
```

- Importance of `<meta charset>` and viewport.
- One `<h1>` and one `<p>` for a minimal page.
- Instructor builds a page live while students follow.

### C. Guided Practice (30–45 minutes)

Students:

1. Create their own project folder.
2. Create `index.html`.
3. Type the correct document structure.
4. Add one `<h1>` and one `<p>`.

Instructor walks around assisting.

### D. Independent Practice (30–45 minutes)

Students:

1. Validate their HTML using [W3C Validator](https://validator.w3.org/).
2. Fix any structural errors.

### E. Assessment

- Student submits valid HTML file.
- Instructor checks:
  - Correct structure (DOCTYPE, html, head, body).
  - Proper indentation.
  - No validation errors.

### F. Closure (10 minutes)

Students answer verbally:

- What is the role of HTML?
- What does the browser do?

### G. Homework (Optional)

- Read about headings, paragraphs, links, and images (Week 1 material).
- Bring one idea for a short “About me” or “My favourite thing” text for next week.

---

## Common Mistakes This Week

*Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 1** (5–10 min).*

- Forgetting to close tags (e.g. `<p>` without `</p>`).
- Wrong or missing `src`/`href` (path typo, wrong folder).
- More than one `<h1>` on the page.
- File saved as `.txt` or wrong encoding.

---

*Back to [Lesson Plans Index](README.md)*
