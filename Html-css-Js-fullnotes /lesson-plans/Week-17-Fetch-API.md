# WEEK 17 LESSON PLAN

## 1. Lesson Information

| Field | Value |
|-------|--------|
| **Week** | 17 |
| **Topic** | Fetch API: Loading Data from the Internet (Optional) |
| **Duration** | 2–3 Hours |

---

## 2. Learning Objectives

By the end of this lesson, students will be able to:

- Call a public API (e.g. JSONPlaceholder), get JSON, and show a list on the page.
- Show a loading state while waiting and a simple error message if the request fails.
- Use fetch, .then(), .json(), and .catch() in a simple way.

---

## 3. Prior Knowledge

Students should understand:

- DOM: selecting elements, creating elements, appending (e.g. from Weeks 11, 14).
- Arrays and looping (Week 14).

---

## 4. Materials Needed

- Computer, code editor, browser, internet access
- [Fetch-API-Basics.md](../notes/Week-6/Fetch-API-Basics.md)

---

## 5. Key Concepts

- **API (simple):** a URL that returns data (e.g. JSON); our page can request it with JavaScript.
- **fetch(url):** returns a Promise; use `.then(response => response.json())` to get data.
- **Loading state:** show “Loading…” then replace with content when data arrives.
- **Errors:** use `.catch()` to show a simple error message if the request fails.

---

## 6. Lesson Procedure

### A. Common Mistakes Review (5–10 minutes)

Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 14**. Forgetting .json(); not handling errors; CORS (explain that we use APIs that allow browser requests).

### B. Introduction of Core Concept (40–60 minutes)

Instructor explains: what an API is in simple terms; fetch(url); .then() to get response and call .json(); using the data to render a list; showing “Loading…” then replacing with list; .catch() for errors. See [Fetch-API-Basics.md](../notes/Week-6/Fetch-API-Basics.md). Live coding: fetch posts from JSONPlaceholder, show loading, then list of titles.

### C. Guided Practice (30–45 minutes)

Students: create a page with a container for the list; fetch `https://jsonplaceholder.typicode.com/posts?_limit=10`; show “Loading…” in the container; in .then(), parse JSON and loop to create list items (e.g. titles); replace loading with list; add .catch() to show error message.

### D. Independent Practice (30–60 minutes)

**Main exercise:** Fetch posts from `https://jsonplaceholder.typicode.com/posts?_limit=10`. Show “Loading…”, then replace it with a list of titles (or titles + short text). Add `.catch()` to show a short error message.

**Real-world:** “Same pattern as any app that shows data from the internet.”

### E. Assessment

List appears after loading; loading state visible while waiting; error message appears if fetch fails (e.g. disconnect network and reload); no uncaught errors.

### F. Wrap-Up Discussion (10–15 minutes)

What was difficult? When would you use an API in a real project? How does this connect to the final project?

### G. Homework (Light / Optional)

Plan your final project against the rubric (pages, features, content). Draft a short README.

---

## Common Mistakes This Week

*Use [Common-Mistakes-And-Debugging.md](../notes/Week-1/Common-Mistakes-And-Debugging.md) — **Session 14** (5–10 min).*

- Forgetting to call `.json()` on the response (response is not the data yet).
- Not handling errors with .catch() so failed requests leave the page stuck.
- Not showing a loading state so the page looks broken until data arrives.

---

*Back to [Lesson Plans Index](README.md)*
