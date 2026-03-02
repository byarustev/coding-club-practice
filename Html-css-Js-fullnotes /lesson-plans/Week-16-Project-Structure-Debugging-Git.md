# WEEK 16 LESSON PLAN

## 1. Lesson Information

| Field | Value |
|-------|--------|
| **Week** | 16 |
| **Topic** | Project Structure, Debugging, and Git (Optional) |
| **Duration** | 2–3 Hours |

---

## 2. Learning Objectives

By the end of this lesson, students will be able to:

- Organise a small project into folders and name files clearly (e.g. `css/`, `js/`, `images/`).
- Use the console and DevTools to find and fix a simple error.
- (Optional) Push the project to GitHub and turn on GitHub Pages.

---

## 3. Prior Knowledge

Students should understand:

- Multi-page HTML, CSS, and JavaScript from Weeks 1–15.
- At least one interactive feature (e.g. to-do list, calculator, dynamic list).

---

## 4. Materials Needed

- Computer, code editor, browser with DevTools
- [Git-And-GitHub-Pages-Basics.md](../notes/Week-6/Git-And-GitHub-Pages-Basics.md) for optional Git section

---

## 5. Key Concepts

- **Project structure:** folders (`css/`, `js/`, `images/`), clear file names, separation of HTML/CSS/JS; paths in link and script tags.
- **Debugging:** `console.log`, reading error messages, DevTools Console and Elements tab.
- **Git (optional, ~30 min):** what version control is; `git init`, `add`, `commit`, `remote`, `push`; GitHub Pages for hosting.

---

## 6. Lesson Procedure

### A. Common Mistakes Review (5–10 minutes)

Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 13**. Wrong paths after moving files; ignoring error messages; not using DevTools.

### B. Introduction of Core Concept (40–60 minutes)

Instructor explains: why folder structure matters; organising css/, js/, images/; updating paths in HTML; debugging with console.log and reading errors; DevTools Console and Elements. Optional: brief Git intro — init, add, commit, remote, push; GitHub Pages. See [Git-And-GitHub-Pages-Basics.md](../notes/Week-6/Git-And-GitHub-Pages-Basics.md). Live coding: restructure a small project and fix one bug using DevTools.

### C. Guided Practice (30–45 minutes)

Students: create or restructure a project with folders; ensure all links and script src paths work; use Console to find an error and fix it; optionally run through Git steps (init, add, commit, push, GitHub Pages).

### D. Independent Practice (30–60 minutes)

**Main exercise:** Build a 3–4 page site (e.g. Home, About, Projects, Contact) with shared nav and one CSS file. At least one interactive feature (e.g. mobile nav toggle, theme toggle, or contact form that shows a message on submit). Responsive layout. One page can use an array to render content (e.g. Projects). Optional: init repo, add, commit, push, enable GitHub Pages.

**Real-world:** “Portfolio or small business site; same structure professionals use.”

### E. Assessment

Clear folder structure; no broken paths; at least one interactive feature works; no console errors; optional: repo on GitHub and site on GitHub Pages.

### F. Wrap-Up Discussion (10–15 minutes)

What was difficult? How did you use the console to debug? Decide whether to include Week 17 (Fetch) or go straight to final project (Week 18).

### G. Homework (Light / Optional)

Decide whether you will include a “data from the internet” feature (Week 17) or go straight to the final project (Week 18). Review [Final-Project-Rubric.md](../notes/Week-6/Final-Project-Rubric.md).

---

## Common Mistakes This Week

*Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 13** (5–10 min).*

- Paths break when moving files into folders (e.g. `href="styles.css"` vs `href="css/styles.css"`).
- Not reading the full error message in the console.
- Git: forgetting to add files before commit; wrong remote URL.

---

*Back to [Lesson Plans Index](README.md)*
