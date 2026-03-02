# Common Mistakes of the Day & Debugging Guide  
## Use One Section Per Session — Normalize Debugging From Day One

Use this document **every session**: spend 5–10 minutes on "Common Mistakes of the Day" for that session.  
This builds a **debugging culture** early and makes errors feel normal and fixable.

---

## Session 1 — HTML structure & first page

**Common mistakes**

- Forgetting to close a tag (e.g. `<p>` without `</p>`).
- Wrong or missing `src`/`href` (path typo, wrong folder, missing `https://` for external links).
- Missing `alt` on `<img>` (accessibility and validation).
- More than one `<h1>` on the page (confuses structure and SEO).
- File saved as `.txt` or wrong encoding (page doesn't render as HTML).

**Debugging habit**

- **Validate:** Use [W3C Validator](https://validator.w3.org/) and fix the first few errors.
- **Inspect:** Right‑click → "View Page Source" to see what the browser actually received.

---

## Session 2 — Semantic HTML & multi-page

**Common mistakes**

- Links to `contact.html` break because the file is in a subfolder (wrong path).
- Copy‑pasting nav and forgetting to update the "current page" link or class.
- Using `<div>` for everything instead of `<header>`, `<nav>`, `<main>`, `<footer>`.

**Debugging habit**

- **Check paths:** Relative links must match file location (`contact.html` vs `pages/contact.html`).
- **Click every link** on both pages to confirm they work.

---

## Session 3 — First CSS

**Common mistakes**

- CSS "not applying": wrong path in `<link href="styles.css">` (e.g. typo, wrong folder).
- Selector typo: `.card` in CSS but `class="cards"` in HTML.
- Confusing `color` (text) and `background-color`.
- Forgetting to save both the HTML and the CSS file before refresh.

**Debugging habit**

- **Hard refresh:** Ctrl+F5 (Windows) / Cmd+Shift+R (Mac) to avoid cached CSS.
- **Check the link:** In DevTools → Network tab, confirm `styles.css` loads (status 200).

---

## Session 4 — Box model & selectors

**Common mistakes**

- Wrong specificity: class styling overridden by a more specific selector or ID.
- Using the same `id` on more than one element (invalid; use `class` for repeated styles).
- Box model confusion: adding `padding` and wondering why total width is larger (use `box-sizing: border-box`).
- Typo in class/ID name between HTML and CSS.

**Debugging habit**

- **Inspect element:** Right‑click → Inspect, then in DevTools see which rules apply and which are crossed out.
- **One ID per page** for a single element; use classes for repeated patterns.

---

## Session 5 — Responsive & units

**Common mistakes**

- Missing viewport meta: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` so mobile doesn't scale.
- Media query typo: `(max-width: 768px)` vs `(min-width: 768px)` (mobile‑first vs desktop‑first).
- Using only `px` for font sizes so layout doesn't scale (prefer `rem` for text).
- Media queries at the bottom overridden by earlier rules (order matters).

**Debugging habit**

- **Resize the window** or use DevTools device toolbar to test breakpoints.
- **Check meta tag** in the `<head>` first when "mobile looks wrong."

---

## Session 6 — Flexbox

**Common mistakes**

- Applying flex to the wrong element (flex goes on the **parent**, not the items).
- Forgetting `flex-wrap: wrap` and wondering why items don't wrap on small screens.
- Using `flex` on the container instead of on the **children** for `flex: 1 1 300px`.
- Confusing `justify-content` (main axis) with `align-items` (cross axis).

**Debugging habit**

- **Highlight flex in DevTools:** In Elements, select the flex container and see the flex overlay (axis, wrap).
- **Say out loud:** "This is the flex container; these are the flex items."

---

## Session 7 — JS variables & types

**Common mistakes**

- Using `var` instead of `let`/`const`.
- Comparing with `==` instead of `===` (strict).
- Expecting a number but getting a string from user input (e.g. `"5" + "3"` = `"53"`); use `Number()` or `parseFloat()`.
- Typo in variable name (e.g. `usreName` vs `userName`) causing `ReferenceError` or `undefined`.

**Debugging habit**

- **Use the console:** Run code in the browser console and read the error line number and message.
- **Log everything:** `console.log("variableName", variableName)` to see types and values.

---

## Session 8 — Functions & conditionals (logic only)

**Common mistakes**

- Forgetting `return` in a function, so you get `undefined`.
- Wrong condition (e.g. `if (score >= 90)` vs `if (score > 89)`) leading to wrong grade or branch.
- Not calling the function (defining `getGrade()` but never calling `getGrade(85)`).
- Off‑by‑one in loops (e.g. `i <= length` when you meant `i < length`).

**Debugging habit**

- **Log inputs and outputs:** `console.log("input", score); const result = getGrade(score); console.log("output", result);`
- **Test edge cases:** 0, negative, empty string, very large number.

---

## Session 9 — DOM & events

**Common mistakes**

- Script runs before the DOM exists: put `<script>` at end of `<body>` or use `DOMContentLoaded`.
- Wrong selector: `getElementById("result")` but HTML has `id="result-display"` → `null`, then "Cannot read property of null".
- Using `onclick` in HTML and `addEventListener` on the same element, so the handler runs twice.
- Reading `input.value` once at load time instead of inside the click/submit handler (always read when the user acts).

**Debugging habit**

- **Check for null:** `const el = document.getElementById("..."); if (el) { el.textContent = "..." }`
- **Log the element:** `console.log(button)` to confirm it's not `null` before adding listeners.

---

## Session 10 — Creating & removing elements

**Common mistakes**

- Appending to the wrong parent (e.g. `document.body.appendChild` instead of `list.appendChild`).
- Creating elements but not setting `textContent` or `innerHTML`, so the element is empty.
- Forgetting event delegation: attaching a listener to each new "Delete" button instead of one listener on the list.
- Reusing the same DOM node (e.g. appending the same `li` twice); create a **new** element per item.

**Debugging habit**

- **Inspect the DOM:** In Elements tab, confirm new nodes appear under the right parent.
- **Use event delegation:** One listener on the list, check `event.target` or `event.target.closest(".todo-item")`.

---

## Session 11 — Arrays & loops

**Common mistakes**

- Modifying an array while looping (e.g. `splice` in a `for` loop) and skipping items or going out of bounds.
- Using `forEach` but expecting a return value (forEach returns `undefined`; use `map` or a `for` loop if you need a result).
- Wrong property names: array of objects with `title` but code uses `name` → `undefined` in the template.
- Forgetting that `querySelectorAll` returns a NodeList; convert to array if you need array methods.

**Debugging habit**

- **Log the array:** `console.log(items)` before the loop to see structure.
- **Log each item:** `items.forEach((item, i) => console.log(i, item))` to verify data.

---

## Session 12 — Local storage

**Common mistakes**

- Storing an object without `JSON.stringify`; then `getItem` returns `"[object Object]"`.
- Not handling `JSON.parse` when storage is empty or corrupted (wrap in try/catch or check for `null`).
- Reading from storage only once at load and not re‑reading after add/delete (so the list doesn't update).
- Using the same key for different things and overwriting data.

**Debugging habit**

- **Inspect storage:** DevTools → Application → Local Storage → see keys and values.
- **Log parsed data:** `console.log(JSON.parse(localStorage.getItem("todos")))` to verify structure.

---

## Session 13 — Project structure & Git

**Common mistakes**

- Broken paths after moving files (e.g. `href="css/styles.css"` from a subfolder page).
- Forgetting to add the CSS/JS file to the page you're testing.
- Git: committing without checking `git status` and missing new or deleted files.
- Pushing to the wrong branch or wrong remote.

**Debugging habit**

- **Open the site from the folder root** (e.g. `file:///.../project/index.html`) so relative paths are consistent.
- **Run `git status`** before every commit to see what will be included.

---

## Session 14 — Fetch & API

**Common mistakes**

- Using the result of `fetch()` directly (it's a Promise); use `.then()` or `async/await`.
- Forgetting `.json()` on the response: `response.json()` returns another Promise, so you must await or `.then()` it.
- Not handling errors: network failure or 404; use `.catch()` or try/catch.
- Rendering before data is loaded (show a "Loading…" state until the request completes).

**Debugging habit**

- **Log the response:** `fetch(url).then(r => r.json()).then(data => console.log(data))` to see structure.
- **Check Network tab:** Status code, response body, and request URL.

---

## Session 15 — Final project & reflection

**Common mistakes**

- Submitting with console errors (fix or remove `console.log`/debug code).
- Links or images broken in the submitted folder (paths, missing files).
- No README or unclear instructions to run the project.

**Debugging habit**

- **Test in a fresh folder:** Copy the project to a new location and open `index.html`; fix any broken paths.
- **Answer the reflection:** "What was hardest? What did you debug? What would you improve?" — builds developer maturity.

---

## General debugging workflow (any session)

1. **Read the error message** — it usually says what's wrong and the line (or file).
2. **Check the line number** — typo, missing bracket, wrong variable name.
3. **Add `console.log`** — log variables and results to see what the code is doing.
4. **Use DevTools** — Console for errors and logs; Elements to see DOM; Network for requests.
5. **Search the error** — copy "Uncaught TypeError: Cannot read property 'x' of null" + "javascript" into a search engine; read the first clear explanation.

Keep this guide open each session and use the "Common Mistakes of the Day" as a short, repeated ritual so debugging becomes a normal part of coding.
