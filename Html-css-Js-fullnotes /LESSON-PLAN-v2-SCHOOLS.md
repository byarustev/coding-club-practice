# HTML, CSS & JavaScript — Lesson Plan **Version 2 (Schools)**  
## Slower Pace: 1–2 Core Concepts Per Week | 2–3 Hours Per Week

**For:** School programmes and students with limited time.  
**Principle:** In any given week we focus on **only 1 or 2 core concepts**. No rushing. Same 2–3 hours per week contact time, but content is spread so each idea gets proper attention.

---

## How This Version Differs

| Version 1 (general) | Version 2 (schools) |
|---------------------|---------------------|
| More concepts per session | **1–2 core concepts per week** |
| 15 sessions total | **18 weeks** (more breathing room) |
| Dense concept blocks | **One clear focus per week** + one main exercise |
| Suits bootcamp / intensive | Suits **school timetables** and limited time |

**Structure per week:**  
Common Mistakes (5–10 min) → **Core concept(s)** (40–60 min) → **One practical exercise** (60–90 min) → Wrap-up and light homework (10–15 min).

---

## Supporting Notes (unchanged)

Same notes, by week folder. See `notes/README.md`.

- **Every week:** [Week-1/Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) — use the section for that week (5–10 min). For Weeks 16–18 use sections 13, 14, and 15 respectively.
- **Weeks 9–10:** [Week-4/JS-Logic-Practice-Sheet.md](notes/Week-4/JS-Logic-Practice-Sheet.md).
- **Week 16:** [Week-6/Git-And-GitHub-Pages-Basics.md](notes/Week-6/Git-And-GitHub-Pages-Basics.md).
- **Week 17:** [Week-6/Fetch-API-Basics.md](notes/Week-6/Fetch-API-Basics.md).
- **Week 18:** [Week-6/Final-Project-Rubric.md](notes/Week-6/Final-Project-Rubric.md).

---

## Milestone Badges (schools)

| Badge | When |
|-------|------|
| **Static Website Builder** | After Week 4 (multi-page HTML + first structure) |
| **Responsive Layout Developer** | After Week 8 (Flexbox) |
| **Interactive UI Developer** | After Week 12 (events + calculator) |
| **Dynamic Application Builder** | After Week 15 (localStorage) |
| **Frontend Project Developer** | After Week 18 (final project) |

---

# Part 1: HTML (Weeks 1–4) — One Concept at a Time

---

## Week 1 — How the Web Works & HTML Document Structure

**Core concept (1):** How the web works (browser, server, URLs) and what HTML is. Building a **valid HTML document**: DOCTYPE, `html`, `head`, `body`, `meta` charset and viewport. Folder structure and file naming.

**That’s it this week.** No extra tags beyond what’s needed for a minimal valid page.

**Learning objectives**

- Say in simple terms how a browser gets a page (browser → server → files).
- Create one valid HTML file with correct document structure.
- Use a sensible folder and name (e.g. `index.html`, lowercase, hyphens).

**Practical exercise (60–90 min)**

- Create a project folder and one `index.html` with correct structure. Add one `<h1>` and one `<p>`. Validate with [W3C Validator](https://validator.w3.org/).  
- **Real-world:** “Every webpage starts with this structure.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 1.

**Before next week:** Read about headings, paragraphs, links, and images in Week 1 material. Bring one idea for a short “About me” or “My favourite thing” text.

---

## Week 2 — Essential HTML Tags: Headings, Paragraphs, Links, Images, Lists

**Core concept (1):** Using the main content tags: `h1`–`h6`, `p`, `a` (href, mailto, anchor), `img` (with alt), `ul`/`ol`/`li`. Attributes: `id`, `class`, `src`, `href`, `alt`. One `h1` per page; closing tags; indentation.

**Learning objectives**

- Choose the right tag for headings, text, links, images, and lists.
- Use `alt` on images and correct paths in `src` and `href`.

**Practical exercise (60–90 min)**

- Build a single-page “About me” or “My favourite thing”: name as `h1`, short paragraphs, one image (with alt), one list (e.g. hobbies or steps), at least one external link and one `mailto:` link.  
- **Real-world:** “Same building blocks as any profile or product page.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 2.

**Before next week:** Read about semantic HTML (header, nav, main, section, footer). No coding homework if time is tight.

---

## Week 3 — Semantic HTML: Structure and Meaning

**Core concept (1):** Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`. When to use them instead of plain `div`. Why it helps accessibility and SEO.

**Learning objectives**

- Wrap content in the right semantic tags.
- Explain in one sentence why semantic HTML is used.

**Practical exercise (60–90 min)**

- Take the Week 2 page and add semantic structure: `header` (with `h1`), `nav` (anchor links to sections), `main`, at least two `section`s, `footer`. Keep content the same; only structure changes.  
- **Real-world:** “Sites and screen readers use this structure to understand the page.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 3.

**Before next week:** Read “What is CSS?” and “Linking a stylesheet” in Week 2 material. Add `<link rel="stylesheet" href="styles.css">` and create an empty `styles.css`.

---

## Week 4 — Multi-Page Sites and Linking

**Core concept (1):** Multi-page sites: second file (e.g. `contact.html`), same nav on each page, relative links between pages. Folder structure (e.g. `index.html`, `contact.html`, `images/`).

**Learning objectives**

- Create a second HTML page and link from the first.
- Copy the same nav into both pages and fix links so they work from either page.

**Practical exercise (60–90 min)**

- Turn the Week 3 page into a 2-page site: **Home** (`index.html`) and **Contact** (`contact.html`). Same header and nav on both; Contact has short text and a `mailto:` link.  
- **Real-world:** “Same idea as a small business or club site: Home + Contact.”

**Milestone:** Static Website Builder.

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 4.

**Before next week:** Skim Week 2 material on colors, fonts, and the box model. No required task.

---

# Part 2: CSS (Weeks 5–8) — One Concept at a Time

---

## Week 5 — What CSS Is and Basic Styling

**Core concept (1):** What CSS is (structure vs presentation). Linking an external stylesheet. Basic styling: `color`, `background-color`, `font-size`, `font-family`, `text-align`. Syntax: selector `{ property: value; }`.

**Learning objectives**

- Link a CSS file and apply a few rules to body, headings, and paragraphs.
- Change text colour, size, and alignment without touching HTML structure.

**Practical exercise (60–90 min)**

- Style the 2-page site from Week 4: one font, one background colour, different styles for `h1`, `h2`, and `p`. Style links (e.g. colour, no underline) and use `:hover`. Center the main content with `max-width` and `margin: 0 auto`.  
- **Real-world:** “You’re defining the look of a real site: typography and colours.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 3 (first CSS).

**Before next week:** Read about the box model (padding, margin, border) and classes/IDs.

---

## Week 6 — Box Model and Selectors (Classes & IDs)

**Core concept (1):** The box model: content, padding, border, margin. Using **classes** for repeated styles and **IDs** for a single element. Specificity in simple terms. `box-sizing: border-box` and a minimal reset.

**Learning objectives**

- Add padding, margin, and border to sections or cards.
- Use one class for all cards and see how it applies. Use one ID for one special element.

**Practical exercise (60–90 min)**

- Build one HTML page with 2–3 “cards” (e.g. product, service, or hobby). Use one class (e.g. `.card`) for padding, border, background. Use different margin/padding for the card vs the text inside. Add a simple hover effect (e.g. border or shadow).  
- **Real-world:** “Same idea as product or feature cards on a website.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 4 (box model).

**Before next week:** Read about responsive design and the viewport meta tag. Add the viewport meta to your HTML if not already there.

---

## Week 7 — Responsive Design: Viewport, Units, Media Queries

**Core concept (1):** Why responsive design matters. Viewport meta tag. Relative units (`%`, `rem`) vs `px`. One or two **media queries** (e.g. 768px) and mobile-first: base styles for small screens, then `min-width` for larger.

**Learning objectives**

- Make one page readable on a narrow (mobile) and wider (desktop) screen.
- Use at least one breakpoint and `rem` for font sizes.

**Practical exercise (60–90 min)**

- Make the card page from Week 6 responsive: on small screens cards stack (one column, full width); on larger screens use 2–3 columns (e.g. with % or flex). Use `rem` for font sizes.  
- **Real-world:** “Every modern site needs to work on phones and desktops.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 5 (responsive).

**Before next week:** Try Flexbox Froggy or read “Flexbox basics” in Week 3 material.

---

## Week 8 — Flexbox: Layout with Flex

**Core concept (1):** Flexbox: `display: flex` on the **container**. Main vs cross axis. Container: `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`. Items: `flex` (e.g. `flex: 1 1 300px`). Centering and simple nav + card grid.

**Learning objectives**

- Build a horizontal nav (e.g. logo left, links right) with Flexbox.
- Build a row of cards that wrap on smaller screens.

**Practical exercise (60–90 min)**

- Build one page: a Flexbox nav and a row of 3 cards that wrap. Use `flex-wrap` and something like `flex: 1 1 300px` on each card. Optional: simple hero (title + text) centered with Flexbox.  
- **Real-world:** “Same layout pattern as many portfolios and marketing pages.”

**Milestone:** Responsive Layout Developer.

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 6.

**Before next week:** Read “What is JavaScript?” and “Variables and types” in Week 4 material. Add `<script src="script.js"></script>` before `</body>` and `console.log("Hello");` in `script.js`.

---

# Part 3: JavaScript (Weeks 9–15) — One Concept at a Time

---

## Week 9 — JavaScript Intro: Variables, Types, Operators, Console

**Core concept (1):** What JavaScript does (behaviour in the browser). Writing in an external `script.js`. **Variables:** `let`, `const`; naming. **Types:** string, number, boolean; `typeof`. **Operators:** arithmetic, comparison (`===`, `!==`), logical (`&&`, `||`, `!`). Template literals. Using the console and `console.log`.

**Learning objectives**

- Write a short script that uses variables and prints results with `console.log`.
- Use strict comparison (`===`) and template literals for a short message.

**Practical exercise (60–90 min)**

- Console-only: e.g. unit converter (miles to km) or price calculation (quantity × price). Use variables, template literals to print a sentence, and one conditional (e.g. discount if quantity > 10). Then do **Grading** and **Temperature** from [JS-Logic-Practice-Sheet.md](notes/Week-4/JS-Logic-Practice-Sheet.md). No DOM.  
- **Real-world:** “Same logic as shopping or converter tools; we add the page later.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 7.

**Before next week:** Read “Functions” and “Conditionals” in Week 4 material.

---

## Week 10 — Functions and Conditionals (Logic Only)

**Core concept (1):** **Functions:** declaration, parameters, `return`. **Conditionals:** `if`, `else`, `else if`; ternary. Practice **logic only** in the console — no DOM this week.

**Learning objectives**

- Write a function that takes inputs and returns a value (e.g. grade from score, or result of a calculation).
- Use `if`/`else` correctly and test with a few different inputs.

**Practical exercise (60–90 min)**

- Use [JS-Logic-Practice-Sheet.md](notes/Week-4/JS-Logic-Practice-Sheet.md): **Even/odd**, **Simple password validator**, **Mini calculator (logic only)**. Optionally **FizzBuzz**. All in `script.js` with `console.log` only. No HTML elements, no `getElementById`.  
- **Real-world:** “This logic will later drive buttons and forms; get it right first.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 8.

**Before next week:** Read “DOM” and “Selecting elements” in Week 5 material.

---

## Week 11 — DOM: Selecting Elements and Updating Content

**Core concept (1):** The DOM as a tree. **Selecting:** `getElementById`, `querySelector`, `querySelectorAll`. **Reading/updating:** `textContent`, `input.value`. When the script runs: `DOMContentLoaded` or script at end of body. Checking for `null` before using an element.

**Learning objectives**

- Select an element by ID or class and change its text or read an input value.
- Run the script only after the page is ready and handle “element not found” safely.

**Practical exercise (60–90 min)**

- Small page: e.g. bill amount and tip % inputs, a button, and a result area. JS: one function that reads the inputs, computes the tip, returns the result; another that sets the result element’s `textContent`. Button click (via `addEventListener`) runs the calculation and updates the page.  
- **Real-world:** “Same pattern as tip or discount calculators on the web.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 9.

**Before next week:** Read “Events” and “addEventListener” in Week 5 material.

---

## Week 12 — Events: Click, Submit, Forms

**Core concept (1):** **Events:** `click`, `submit`, `input`. **addEventListener.** Form: `submit` event, `event.preventDefault()`, reading `input.value`. Updating content and toggling classes (`classList.add`/`remove`/`toggle`).

**Learning objectives**

- Attach a click handler with `addEventListener` and prevent a form from submitting the default way when needed.
- Read form values in the handler and show a result or message on the page.

**Practical exercise (60–90 min)**

- On-page calculator: two number inputs, buttons for +, −, ×, ÷, result area. One function per operation; one function that reads inputs, calls the right operation, and displays the result. Use `addEventListener` on each button. Handle division by zero with a friendly message.  
- **Real-world:** “Same structure as any in-page calculator or configurator.”

**Milestone:** Interactive UI Developer.

**Common Mistakes** — Session 9 (events).

**Before next week:** Read “Creating elements” and “appendChild”, “remove” in Week 5 material.

---

## Week 13 — Creating and Removing Elements

**Core concept (1):** **Creating:** `createElement`, setting `textContent` or `innerHTML`, attributes. **Adding/removing:** `appendChild`, `remove()`. **Event delegation:** one listener on the parent for dynamically added buttons (e.g. Delete).

**Learning objectives**

- Create a new element in JS, set its content, and append it to the page.
- Remove an element (e.g. list item) when a button inside it is clicked, using event delegation.

**Practical exercise (60–90 min)**

- To-do list: input, “Add” button, list. On Add: read input, create an `li` with text and a “Delete” button, append to `ul`. On Delete (event delegation on the list): remove that `li`. Ignore empty input; clear input after add.  
- **Real-world:** “Same pattern as task lists, comments, or any list the user can add to or remove from.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 10.

**Before next week:** Read “Arrays” and “Loops” in Week 6 material.

---

## Week 14 — Arrays and Loops: Building a List from Data

**Core concept (1):** **Arrays:** literal, index, `length`, `push`, `forEach` or `for`/`for...of`. **Pattern:** array of objects → loop → create element → append. Building a list (e.g. projects, menu items) in the DOM from an array.

**Learning objectives**

- Store a few items in an array (e.g. objects with title and description) and loop over them.
- For each item, create a DOM element (e.g. card or row) and append it to a container.

**Practical exercise (60–90 min)**

- One HTML container (e.g. `#projects` or `#menu`). In JS, define an array of 3+ items (e.g. `{ title, description }`). Use `forEach` (or `for...of`) to create a card or row for each and append to the container.  
- **Real-world:** “Same as rendering products, blog posts, or menu items from data.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 11.

**Before next week:** Read “Local storage” and “JSON.stringify/parse” in Week 6 material.

---

## Week 15 — Local Storage: Saving Data in the Browser

**Core concept (1):** Why persistence matters. **localStorage:** `setItem`, `getItem`, `removeItem`. Storing objects: `JSON.stringify` and `JSON.parse`. Loading on page load; handling empty or invalid JSON.

**Learning objectives**

- Save a string or a simple object to localStorage and read it back.
- Integrate that into the to-do list so tasks survive a refresh.

**Practical exercise (60–90 min)**

- Extend the Week 13 to-do list: on add/delete, update a JS array and save it (e.g. `JSON.stringify`) to localStorage. On load (`DOMContentLoaded`), read from localStorage, `JSON.parse`, and re-render the list. Fallback to empty array if nothing saved or parse fails.  
- **Real-world:** “Same idea as saving preferences or drafts without a server.”

**Milestone:** Dynamic Application Builder.

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 12.

**Before next week:** Read “Project structure” and “Debugging” in Week 6 material. List 2–3 features you want in your final site.

---

# Part 4: Integration and Final Project (Weeks 16–18)

---

## Week 16 — Project Structure, Debugging, and Git (Optional)

**Core concept (1–2):** **Structure:** folders (`css/`, `js/`, `images/`), clear file names, separation of HTML/CSS/JS. **Debugging:** `console.log`, reading errors, DevTools (Console, Elements). **Git (optional, ~30 min):** what version control is; `git init`, `add`, `commit`, `remote`, `push`; GitHub Pages. See [Git-And-GitHub-Pages-Basics.md](notes/Week-6/Git-And-GitHub-Pages-Basics.md).

**Learning objectives**

- Organise a small project into folders and name files clearly.
- Use the console and DevTools to find and fix a simple error.
- (Optional) Push the project to GitHub and turn on GitHub Pages.

**Practical exercise (60–90 min)**

- Build a 3–4 page site (e.g. Home, About, Projects, Contact) with shared nav and one CSS file. At least one interactive feature (e.g. mobile nav toggle, theme toggle, or contact form that shows a message on submit). Responsive layout. One page can use an array to render content (e.g. Projects). Optional: init repo, add, commit, push, enable GitHub Pages.  
- **Real-world:** “Portfolio or small business site; same structure professionals use.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 13.

**Before next week:** Decide whether you will include a “data from the internet” feature (Week 17) or go straight to the final project (Week 18). Review [Final-Project-Rubric.md](notes/Week-6/Final-Project-Rubric.md).

---

## Week 17 — Fetch API: Loading Data from the Internet (Optional)

**Core concept (1):** What an API is in simple terms. **fetch(url)** returns a Promise. Using `.then()` to get the response and call `.json()`. Showing “Loading…” then rendering a list (e.g. post titles). Handling errors with `.catch()`. See [Fetch-API-Basics.md](notes/Week-6/Fetch-API-Basics.md).

**Learning objectives**

- Call a public API (e.g. JSONPlaceholder), get JSON, and show a list on the page.
- Show a loading state while waiting and a simple error message if the request fails.

**Practical exercise (60–90 min)**

- Fetch posts from `https://jsonplaceholder.typicode.com/posts?_limit=10`. Show “Loading…”, then replace it with a list of titles (or titles + short text). Add `.catch()` to show a short error message.  
- **Real-world:** “Same pattern as any app that shows data from the internet.”

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 14.

**Before next week:** Plan your final project against the rubric (pages, features, content). Draft a short README.

---

## Week 18 — Final Project: Build, Showcase, and Reflection

**Core concept (1):** Bringing everything together. Using the [Final-Project-Rubric.md](notes/Week-6/Final-Project-Rubric.md) (HTML 20%, CSS 25%, JS 25%, code cleanliness 15%, creativity 15%). **Reflection:** What was hardest? What did you debug? What would you improve?

**Learning objectives**

- Deliver a multi-page site that meets the rubric and runs without console errors.
- Present it briefly and answer the reflection questions (spoken or written).

**Structure**

- **First 15–20 min:** Final checklist; share the rubric again. Quick debugging tips.
- **Next 60–90 min:** Build and polish the final project (or continue from Week 16).
- **Last 25–35 min:** Short demos (1–2 min each) and **reflection:** each student answers: (1) What was the hardest part? (2) What’s one bug you fixed or thing you debugged? (3) What would you improve or add if you had more time?

**Final project requirements**

- At least: Home, About, Projects, Contact (or equivalent). Semantic HTML; consistent nav; external CSS; responsive.
- At least two interactive features (e.g. mobile menu, theme toggle, form validation, dynamic list, or fetch + list).
- Clean folders and a short README. Assess with the rubric.

**Milestone:** Frontend Project Developer.

**Common Mistakes** — [Common-Mistakes-And-Debugging.md](notes/Week-1/Common-Mistakes-And-Debugging.md) Session 15.

**Real-world:** “Portfolio-ready: host on GitHub Pages or Netlify and link from your resume or school profile.”

---

# Summary: Version 2 at a Glance

| Week | Core concept(s) | Main exercise |
|------|------------------|---------------|
| 1 | Web + HTML document structure | Minimal valid page |
| 2 | Essential tags (headings, paragraphs, links, images, lists) | About me single page |
| 3 | Semantic HTML | Add structure to About me |
| 4 | Multi-page + linking | 2-page site (Home, Contact) |
| 5 | CSS intro + basic styling | Style 2-page site |
| 6 | Box model + classes/IDs | Product/service cards |
| 7 | Responsive (viewport, units, media queries) | Responsive card page |
| 8 | Flexbox | Nav + card grid |
| 9 | JS: variables, types, operators, console | Console converter + logic practice |
| 10 | Functions + conditionals (logic only) | JS Logic Practice Sheet |
| 11 | DOM: select, read, update | Tip calculator in page |
| 12 | Events + forms | 4-operation calculator |
| 13 | Create/remove elements | To-do add/delete |
| 14 | Arrays + loops | Dynamic list from array |
| 15 | Local storage | To-do with persistence |
| 16 | Project structure + debugging + (optional) Git | Multi-page site + 1 feature |
| 17 | Fetch API (optional) | Load and display list from API |
| 18 | Final project + rubric + reflection | Build, present, reflect |

---

# Tips for Facilitators (Schools)

1. **Stick to 1–2 concepts per week.** If you finish early, deepen the exercise or do more practice, don’t introduce the next concept.
2. **Common Mistakes every week** (5–10 min) so debugging feels normal from Week 1.
3. **One main exercise per week** so students leave with one clear outcome.
4. **Homework light:** “Before next week” is optional where time is tight; in-class practice is the priority.
5. **Week 17 (Fetch)** is optional; you can drop it and go from Week 16 to Week 18 if the calendar is tight.
6. **Milestones** help motivation; announce the badge when the group completes the relevant week.

Use this as the main plan for school programmes where students have limited time and need a calm, focused pace.
