# HTML, CSS & JavaScript Bootcamp — Lesson Plan  
## For 2–3 Hours Per Week (In-Person / Live Sessions)

This plan is based on the 6-week bootcamp content but **re-paced for programs where you meet learners only 2–3 hours per week**. Each session is a single 2–3 hour block. Exercises are topic-focused and tied to real-world use (landing pages, forms, calculators, task lists, small sites).

---

## How to Use This Plan

- **Session length**: 2–3 hours per session.
- **Suggested split** (adjust to your group):
  - **Common Mistakes of the Day**: 5–10 min (see [notes/Week-1/Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) — one section per session).
  - **Review / recap**: 5–10 min  
  - **New concepts**: 40–50 min  
  - **Guided / hands-on exercise**: 60–90 min  
  - **Wrap-up & homework**: 10–15 min  
- **Between sessions**: Learners read the relevant Week X materials and try the “Before next session” tasks so live time stays focused on practice and questions.
- **Real-world angle**: Every exercise is framed as something they might build in a job or side project (e.g. “like a product page”, “like a contact form”).

---

## Milestone Badges (Gamify Progression)

| Level | Badge | When |
|-------|--------|------|
| **Level 1** | **Static Website Builder** | After Session 3 |
| **Level 2** | **Responsive Layout Developer** | After Session 6 |
| **Level 3** | **Interactive UI Developer** | After Session 9 |
| **Level 4** | **Dynamic Application Builder** | After Session 12 |
| **Level 5** | **Frontend Project Developer** | After Session 15 |

## Supporting Notes (by week in `notes/`)

Notes are in **Week-1**, **Week-4**, and **Week-6** folders to follow the curriculum sequence. See `notes/README.md` for the full index.

- **Every session:** [Week-1/Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) — use the section for that session (5–10 min).
- **Sessions 7–8:** [Week-4/JS-Logic-Practice-Sheet.md](notes/Week-4/JS-Logic-Practice-Sheet.md) — logic-only practice before DOM.
- **Session 13:** [Week-6/Git-And-GitHub-Pages-Basics.md](notes/Week-6/Git-And-GitHub-Pages-Basics.md) — ~30 min Git/GitHub Pages.
- **Session 14:** [Week-6/Fetch-API-Basics.md](notes/Week-6/Fetch-API-Basics.md) — fetch, loading state, render API data.
- **Session 15:** [Week-6/Final-Project-Rubric.md](notes/Week-6/Final-Project-Rubric.md) — grading and reflection.

---

## Part 1: HTML & Web Basics (Sessions 1–3)

### Session 1 — How the Web Works & HTML Structure (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 1 (5–10 min).

**Learning objectives**

- Explain browser, server, and the role of HTML/CSS/JS.
- Create a valid HTML document (DOCTYPE, `html`, `head`, `body`).
- Use headings, paragraphs, links, and images with good practices.

**Concepts to cover (40–50 min)**

- How the web works (browser, server, HTTP, URLs).
- Project folder and file naming (e.g. `index.html`, lowercase, hyphens).
- Document structure: `<!DOCTYPE html>`, `<html lang="en">`, `<head>`, `<body>`, `<meta charset>`, viewport.
- Tags: `h1`–`h6`, `p`, `a` (external, internal, `mailto`, anchor), `img` (with `alt`), `ul`/`ol`/`li`.
- Attributes: `id`, `class`, `src`, `href`, `alt`.
- Comments and basic indentation.

**Practical exercise (60–90 min) — Logic only (console): “About / profile page”**

- **Task**: Build a single-page “About Me” or “Team member profile” (like a simple LinkedIn or “Meet the team” page).
- **Must include**:
  - Proper document structure and one `<h1>`.
  - Short bio in `<p>`, one image with meaningful `alt`.
  - List of skills or interests (`ul`/`ol`).
  - At least one external link, one internal anchor link (e.g. “Jump to contact”), and one `mailto:` link.
- **Real-world link**: “This is the same structure you’d use for a personal bio, speaker page, or team card on a company site.”

**Before next session**

- Read Week 1 material (semantic HTML, `div`/`span`).
- Add 3 semantic tags to their page: e.g. `<header>`, `<main>`, `<footer>` (or `<section>`).

---

### Session 2 — Semantic HTML & Multi-Page Links (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 2 (5–10 min).

**Learning objectives**

- Use semantic tags: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Organize a small multi-page site and link between pages.
- Apply basic best practices (one `h1`, closing tags, indentation).

**Concepts to cover (40–50 min)**

- Why semantic HTML matters (accessibility, SEO, maintainability).
- Semantic layout: `header`, `nav`, `main`, `section`, `article`, `footer`.
- When to use `div` vs `section` vs `article`.
- Multi-page setup: second page (e.g. `contact.html`), same nav in each file, relative links.

**Practical exercise (60–90 min) — Logic only (console): “Small business or portfolio home + contact”**

- **Task**: Turn last week’s page into a 2-page mini-site: **Home** (`index.html`) and **Contact** (`contact.html`).
- **Must include**:
  - Same `<header>` and `<nav>` on both pages (links: Home, Contact).
  - `<main>` with at least one `<section>` on each page.
  - Contact page: short “Get in touch” text and a `mailto:` link (no form yet).
  - Consistent folder structure (e.g. `index.html`, `contact.html`, `images/`).
- **Real-world link**: “Same pattern as a small business site or portfolio: Home + Contact.”

**Before next session**

- Read Week 2 material (what CSS is, linking a stylesheet).
- Add `<link rel="stylesheet" href="styles.css">` and create an empty `styles.css` in the same folder.

---

### Session 3 — HTML Wrap-Up & First CSS (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 3 (5–10 min).  
**Milestone:** Level 1 — Static Website Builder (after this session).

**Learning objectives**

- Validate HTML (e.g. W3C) and fix common issues.
- Link an external CSS file and apply a few basic rules.
- Understand separation of structure (HTML) vs presentation (CSS).

**Concepts to cover (30–40 min)**

- Quick HTML checklist: one `h1`, all images with `alt`, valid links.
- Including CSS: external stylesheet (recommended), `<link>` in `<head>`.
- CSS syntax: selector, `{ property: value; }`.
- Basic styling: `color`, `background-color`, `font-size`, `font-family`, `text-align`.

**Practical exercise (75–90 min) — Real-world: “Style your 2-page site”**

- **Task**: Style the 2-page site from Session 2 so it looks intentional (e.g. one font, one main color, readable text).
- **Must include**:
  - Body: font family, font size, background color, text color.
  - Different styles for `h1`, `h2`, and `p`.
  - Styled links (e.g. color, no underline) and `:hover` (e.g. underline or color change).
  - Centered content with `max-width` and `margin: 0 auto` on `main`.
- **Real-world link**: “You’re defining the look of a real site: typography, colors, and layout basics.”

**Before next session**

- Read Week 2 (box model, padding, margin, border, classes and IDs).
- Add one section with a border and padding using a class (e.g. `.card` or `.highlight`).

---

## Part 2: CSS Fundamentals & Layout (Sessions 4–6)

### Session 4 — Box Model, Selectors & Layout Basics (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 4 (5–10 min).

**Learning objectives**

- Use the box model: content, padding, border, margin.
- Use classes and IDs appropriately; understand basic specificity.
- Use `display: block`, `inline`, `inline-block` where needed.

**Concepts to cover (40–50 min)**

- Box model diagram; `padding`, `margin`, `border` (including shorthand).
- When to use class vs ID; specificity (inline > ID > class > element).
- `display: block` vs `inline` vs `inline-block`.
- `box-sizing: border-box` and a simple reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`).

**Practical exercise (60–90 min) — Logic only (console): “Product or service card”**

- **Task**: Build a single HTML page with 2–3 “cards” (e.g. product, service, or pricing tier).
- **Each card**: image (or placeholder), title, short description, optional “Learn more” link.
- **Must include**:
  - One shared class for all cards (e.g. `.card`) for padding, border, background.
  - Different margin/padding on card vs inside card (e.g. title vs text).
  - Hover effect (e.g. border color or shadow change).
- **Real-world link**: “Same idea as product cards on an e‑commerce or SaaS landing page.”

**Before next session**

- Read Week 3 (responsive design, viewport, units).
- Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to their HTML.

---

### Session 5 — Responsive Design & CSS Units (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 5 (5–10 min).

**Learning objectives**

- Use viewport meta tag and flexible units (`%`, `rem`, `vw`/`vh` where useful).
- Write media queries for mobile vs desktop.
- Apply a mobile-first approach.

**Concepts to cover (40–50 min)**

- Why responsive design matters (mobile traffic, UX, SEO).
- Viewport meta tag.
- Units: `px`, `%`, `em`, `rem`, `vw`, `vh` — when to use which.
- Media queries: `@media (min-width: …)` and one or two breakpoints (e.g. 768px, 1024px).
- Mobile-first: base styles for small screens, then `min-width` for larger.

**Practical exercise (60–90 min) — Logic only (console): “Responsive card layout”**

- **Task**: Make the card page from Session 4 responsive.
- **Must include**:
  - Mobile: cards stacked (one column), full width, readable font size.
  - Tablet/desktop: 2–3 columns (e.g. using `max-width` and `%` or flex later).
  - Use `rem` for font sizes; at least one breakpoint (e.g. 768px).
- **Real-world link**: “Every modern site needs to work on phones and desktops.”

**Before next session**

- Read Week 3 (Flexbox: container and item properties).
- Try Flexbox Froggy or a short Flexbox tutorial.

---

### Session 6 — Flexbox Layouts (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 6 (5–10 min).  
**Milestone:** Level 2 — Responsive Layout Developer (after this session).

**Learning objectives**

- Use Flexbox for alignment and distribution of items.
- Build a responsive nav and a simple card grid with Flexbox.

**Concepts to cover (40–50 min)**

- `display: flex`; main vs cross axis.
- Container: `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`.
- Items: `flex`, `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`.
- Centering with Flexbox; nav bar and card grid patterns.

**Practical exercise (60–90 min) — Logic only (console): “Portfolio or landing section”**

- **Task**: Build a single-page section that could be the “Projects” or “Features” part of a portfolio/landing page.
- **Must include**:
  - A horizontal nav (e.g. logo left, links right) using Flexbox.
  - A row of 3 cards that wrap on smaller screens (`flex-wrap`, `flex: 1 1 300px` or similar).
  - Optional: simple “hero” area (title + short text) centered with Flexbox.
- **Real-world link**: “This is the same layout pattern used in portfolios and marketing pages.”

**Before next session**

- Read Week 4 (what JavaScript is, where to put it, variables, types).
- Add a single `<script src="script.js"></script>` before `</body>` and `console.log("Hello");` in `script.js`.

---

## Part 3: JavaScript Basics (Sessions 7–9)

### Session 7 — JavaScript Intro: Variables, Types & Operators (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 7 (5–10 min).

**Learning objectives**

- Include JavaScript via external file and use `console.log`.
- Use `let` and `const`; name variables clearly.
- Work with strings, numbers, booleans; use template literals and basic operators.
- Build confidence with **logic only** (no DOM yet) to reduce cognitive load when you add the page later.

**Concepts to cover (40–50 min)**

- Role of JavaScript (behavior and interactivity).
- External script: `<script src="script.js"></script>` at end of `body`.
- Variables: `let`, `const`; naming rules and conventions.
- Types: string, number, boolean; `typeof`; `undefined`/`null` briefly.
- Template literals; arithmetic and comparison (`===`, `!==`); logical (`&&`, `||`, `!`).

**Practical exercise (60–90 min) — Logic only (console): “Simple unit converter or price calculator”**

- **Task**: Console-only script (no DOM yet) that does a small calculation.
- **Examples**:  
  - Convert miles to km (or any unit).  
  - Compute total price from quantity and unit price (e.g. “3 × 9.99”).
- **Must include**:
  - Variables for inputs and result; use template literals to print a sentence (e.g. “3 items at $9.99 = $29.97”).
  - At least one conditional (e.g. “if quantity &gt; 10, apply 10% discount”).
- **Real-world link**: “Same logic as shopping carts, converters, or pricing tools.”

**Before next session**

- Read Week 4 (functions, conditionals).
- Refactor their script: put the calculation in a function and call it with different values.

---

### Session 8 — Functions & Conditionals — Logic Only (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 8 (5–10 min).

**Learning objectives**

- Write functions with parameters and return values.
- Use `if`/`else`/`else if` and ternary where appropriate.
- Get comfortable with **logic and control flow** before touching the DOM (reduces confusion in Session 9).

**Concepts to cover (40–50 min)**

- Function declarations and expressions; parameters and `return`.
- Arrow functions for simple callbacks.
- Conditionals: `if`/`else`/`else if`; ternary.
- **No DOM this session** — all work in `script.js` with `console.log()` only.

**Practical exercise (60–90 min) — Logic only (console)**

- Use [JS-Logic-Practice-Sheet.md](notes/Week-4/JS-Logic-Practice-Sheet.md): **Even/odd**, **Simple password validator**, **Mini calculator (logic only)**. Optionally **FizzBuzz**. All in `script.js`, no HTML, no `getElementById`.
- Real-world link: same logic you will plug into buttons and forms in Session 9.

**Before next session**

- Read Week 5 (DOM, events, `addEventListener`, forms).
- Add `<script src="script.js"></script>` to a tiny HTML page and run one `console.log` to confirm the script runs.

---

### Session 9 — DOM & Events (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 9 (5–10 min).  
**Milestone:** Level 3 — Interactive UI Developer (after this session).

**Learning objectives**

- Use `addEventListener` for click, input, submit.
- Handle form submit with `preventDefault` and read input values.
- Update content and toggle classes from JavaScript.

**Concepts to cover (40–50 min)**

- DOM as a tree; selecting elements (recap + `querySelectorAll` and loops).
- Events: `click`, `input`, `submit`, `change`.
- `addEventListener`; named vs anonymous handlers.
- Form: `submit` event, `event.preventDefault()`, reading `input.value`.
- Updating DOM: `textContent`, `classList.add`/`remove`/`toggle`.

**Practical exercise (60–90 min) — Logic only (console): “Interactive calculator (two numbers, four operations)”**

- **Task**: On-page calculator: two number inputs, buttons for +, −, ×, ÷, result area.
- **Must include**:
  - One function per operation; one function that reads inputs, calls the right operation, and displays result.
  - `addEventListener` on each operation button.
  - Division by zero: show a friendly message instead of “Infinity”.
  - Optional: clear button; basic styling.
- **Real-world link**: “Same structure as any in-page calculator or multi-step form.”

**Before next session**

- Read Week 5 (creating elements, `appendChild`, `remove`).
- Try adding one new element with `createElement` and `appendChild` (e.g. a “History” line under the calculator).

---

## Part 4: DOM, Dynamic Content & Persistence (Sessions 10–12)

### Session 10 — Creating & Removing Elements (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 10 (5–10 min).

**Learning objectives**

- Create elements with `createElement`; set content and attributes.
- Append and remove nodes (`appendChild`, `remove`).
- Use `DOMContentLoaded` and null checks for robustness.

**Concepts to cover (40–50 min)**

- `createElement`, `textContent`/`innerHTML`, setting attributes.
- `appendChild`, `insertBefore`, `remove()` and `removeChild`.
- `DOMContentLoaded`; checking for `null` before using elements.

**Practical exercise (60–90 min) — Logic only (console): “To-do list (add and delete)”**

- **Task**: To-do list: input, “Add” button, list of tasks; each task has a “Delete” button.
- **Must include**:
  - Add: read input, create `li` (with text + Delete button), append to `ul`.
  - Delete: remove the corresponding `li` (event delegation on the list).
  - Ignore empty input; clear input after add.
- **Real-world link**: “Same pattern as task lists, comment lists, or dynamic checklists.”

**Before next session**

- Read Week 6 (arrays, loops, `forEach`).
- Store their to-dos in an array in code and log the array after each add/remove (optional).

---

### Session 11 — Arrays, Loops & Dynamic Lists (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 11 (5–10 min).

**Learning objectives**

- Use arrays: `push`, `pop`, `length`, `forEach` or `for` loop.
- Build a list in the DOM from an array (e.g. projects, menu items).

**Concepts to cover (40–50 min)**

- Arrays: literal, index, `length`; `push`, `pop`, `shift`, `unshift`, `splice`; `indexOf`, `includes`.
- Loops: `for`, `for...of`, `forEach`.
- Pattern: array of objects → loop → create element → append.

**Practical exercise (60–90 min) — Logic only (console): “Dynamic project or menu list”**

- **Task**: One HTML container (e.g. `#projects` or `#menu`). In JS, define an array of items (e.g. `{ title, description, image }` or `{ name, price }`). Loop and render each as a card or row.
- **Must include**:
  - At least 3 items in the array.
  - `forEach` (or `for...of`) to create elements and append.
  - Reuse the same structure (e.g. one function that takes an item and returns a DOM node).
- **Real-world link**: “Same as rendering products, blog posts, or menu items from data.”

**Before next session**

- Read Week 6 (localStorage, JSON.stringify/parse).
- Optional: save one string in `localStorage` and read it on page load in the console.

---

### Session 12 — Local Storage & To-Do Persistence (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 12 (5–10 min).  
**Milestone:** Level 4 — Dynamic Application Builder (after this session).

**Learning objectives**

- Use `localStorage.setItem`/`getItem`/`removeItem`.
- Store and load structured data with `JSON.stringify` and `JSON.parse`.
- Integrate persistence into an existing app (e.g. to-do list).

**Concepts to cover (40–50 min)**

- Why persistence matters; limitations of localStorage (size, same-origin, strings only).
- `setItem`, `getItem`, `removeItem`, `clear`.
- Storing objects: `JSON.stringify` and `JSON.parse`; handling parse errors.

**Practical exercise (60–90 min) — Logic only (console): “To-do list that survives refresh”**

- **Task**: Extend the Session 10 to-do list so tasks are saved to localStorage and restored on load.
- **Must include**:
  - On add/delete: update a JS array and save it with `JSON.stringify` to localStorage.
  - On load (`DOMContentLoaded`): read from localStorage, `JSON.parse`, and re-render the list.
  - Handle empty or invalid JSON (e.g. fallback to `[]`).
- **Real-world link**: “Same idea as saving preferences, drafts, or offline-capable apps.”

**Before next session**

- Read Week 6 (project structure, debugging, final project).
- List 2–3 features they want in their final multi-page site.

---

## Part 5: Integration, API & Final Project (Sessions 13–15)

### Session 13 — Project Structure, Debugging, Git & Integration (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 13 (5–10 min).

**Learning objectives**

- Organize a small project: folders (e.g. `css/`, `js/`, `images/`), clear file names.
- Use DevTools (Console, Elements, breakpoints if time).
- Combine HTML, CSS, and JS in one coherent site.
- **Git & GitHub Pages (~30 min):** What version control is; init, add, commit, push; deploy site with GitHub Pages. See [Git-And-GitHub-Pages-Basics.md](notes/Week-6/Git-And-GitHub-Pages-Basics.md).

**Concepts to cover (30–40 min)**

- Folder structure and naming; separating HTML, CSS, JS.
- Debugging: `console.log`, reading errors; Elements tab to inspect DOM; optional breakpoints.
- How to search for errors (copy error message + "javascript" into search). **Git block (~30 min):** Use [Git-And-GitHub-Pages-Basics.md](notes/Week-6/Git-And-GitHub-Pages-Basics.md): why version control; git init, add, commit, remote, push; GitHub Pages from branch.

**Practical exercise (75–90 min) — Real-world: “Multi-page site with one interactive feature”**

- **Task**: Build a 3–4 page site (e.g. Home, About, Projects, Contact) reusing one nav and one CSS file.
- **Must include**:
  - Shared header/nav and footer; consistent styling.
  - At least one interactive feature: e.g. mobile nav toggle, dark/light mode toggle, or contact form that shows a message on submit (no backend).
  - Responsive layout (Flexbox + media queries).
  - One page that uses an array to render content (e.g. Projects from an array).
- **Real-world link**: “Portfolio, small business site, or event site.”

**Before next session**

- Plan final project: pages, features, content.
- Draft a simple README (project name, how to open it, what’s included).

---

---
### Session 14 — Fetch API & Loading State (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 14 (5–10 min).

**Learning objectives:** Call a public API with `fetch()`; handle Promise with `.then()` (or async/await); parse JSON and render a list in the DOM; show loading state and handle errors. See [Fetch-API-Basics.md](notes/Week-6/Fetch-API-Basics.md).

**Practical exercise:** Use JSONPlaceholder (e.g. `https://jsonplaceholder.typicode.com/posts?_limit=10`): fetch posts, show "Loading…", then render titles in a list; add simple error message if fetch fails. Real-world link: same pattern as any app that shows data from the internet.

**Before next session:** Review [Final-Project-Rubric.md](notes/Week-6/Final-Project-Rubric.md); plan final project against the rubric.

---

### Session 15 — Final Project Build, Showcase & Reflection (2–3 hrs)

**Common Mistakes of the Day** — See [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 15 (5–10 min). **Milestone:** Level 5 — Frontend Project Developer.

**Learning objectives:** Apply full stack (HTML, CSS, JS, DOM, events, arrays, localStorage or fetch); present and give/receive feedback; reflect on what was hardest, what you debugged, and what you'd improve.

**Structure:** (1) Final checklist + share [Final-Project-Rubric.md](notes/Week-6/Final-Project-Rubric.md). (2) Build and polish final project (60–90 min). (3) Demos (1–2 min each) + **reflection:** Each student answers: What was the hardest part? What's one bug you fixed or thing you debugged? What would you improve or add if you had more time?

**Final project requirements:** At least Home, About, Projects, Contact; semantic structure; consistent nav; external CSS; responsive; at least two interactive features; clean folders and README. Assess with [Final-Project-Rubric.md](notes/Week-6/Final-Project-Rubric.md) (HTML 20%, CSS 25%, JS 25%, code cleanliness 15%, creativity/polish 15%).

**Real-world framing:** Portfolio-ready; host on GitHub Pages or Netlify and link from your resume.

---
## Summary: Session Overview

| Session | Focus | Main practical exercise |
|--------|--------|--------------------------|
| 1 | Web + HTML structure | About/Profile page |
| 2 | Semantic HTML, 2 pages | Small site: Home + Contact |
| 3 | First CSS | Style the 2-page site |
| 4 | Box model, selectors | Product/service cards |
| 5 | Responsive, units, media queries | Responsive card layout |
| 6 | Flexbox | Portfolio/landing section (nav + cards) |
| 7 | JS variables, types, operators | Console + Logic Practice (grading, temperature) |
| 8 | Functions, conditionals (logic only) | JS Logic Practice Sheet (even/odd, password, mini calc) |
| 9 | DOM & events | Tip/discount calculator + 4-op calculator in page |
| 10 | createElement, append, remove | To-do list (add/delete) |
| 11 | Arrays, loops | Dynamic list from array |
| 12 | localStorage, JSON | To-do list with persistence |
| 13 | Structure, debugging, Git & integration | Multi-page site + 1 feature; Git/GitHub Pages ~30 min |
| 14 | Fetch API | Fetch posts, loading state, render list |
| 15 | Final project & reflection | Build, showcase, rubric, reflection questions |

---

## Tips for Facilitators

1. **Keep exercises scoped** so most learners can finish the core requirements in the session; extensions can be homework.
2. **Reuse one project** where possible (e.g. same 2-page site gets styled, then responsive, then Flexbox) so they see progression.
3. **Emphasize real-world use** each time: “This is how landing pages / forms / calculators / task apps are built.”
4. **Share a starter template** (minimal HTML + CSS + JS) for Sessions 7–12 so they don’t get stuck on setup.
5. **Do "Common Mistakes of the Day" every session** (5–10 min) so debugging is normalized from day one. Use [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md).
6. **If you have less than 15 sessions**, merge: e.g. 1+2 (HTML in 2 sessions), 4+5 (CSS layout + responsive), 7+8 (JS logic only), 10+11 (dynamic list + arrays), or omit Session 14 (Fetch) and keep 13 + 15. Session 15 stays as final showcase with rubric and reflection.

---

## Optional Homework / Between-Session Tasks

- **After Session 2**: Add one more page (e.g. “Services” or “Gallery”) and link it in the nav.
- **After Session 6**: Build a simple “Pricing” or “Features” section with 3 columns using Flexbox.
- **After Session 9**: Add a “Clear” button to the calculator and style the calculator like an app.
- **After Session 11**: Add a “Filter” or “Search” that filters the dynamic list (e.g. by text).
- **After Session 12**: Add a “Mark as done” toggle to the to-do list and persist that state in localStorage.

Use this plan as the backbone of your 2–3 hours/week program; adjust session count and exercise difficulty to your learners’ level and pace.
