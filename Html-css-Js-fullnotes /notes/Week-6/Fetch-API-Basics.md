# Fetch API Basics  
## One Session: Get Data From the Internet and Show It on the Page

Use this in the **Fetch API session** (Session 14 in the updated plan).  
Goal: call a public API, get JSON, show a loading state, then render a list. No backend — browser only.

---

## 1. Why "fetch" and APIs?

**API = Application Programming Interface**

- Many websites get data from servers (weather, posts, products).
- The server exposes an **API**: you send a request (e.g. "give me posts") and get data back (usually JSON).
- In the browser we use **fetch** to do that.

**Real-world:** Any app that shows "live" data (news, social feed, weather, search) uses something like fetch. This session bridges "only my own data" to "data from the internet."

---

## 2. What we'll use

- **API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — fake REST API for learning.
- **Endpoint:** `https://jsonplaceholder.typicode.com/posts` — returns a list of fake posts.
- **fetch()** — built-in browser function that returns a **Promise** (async).

We'll do:

1. Call the API.
2. Show "Loading…" while waiting.
3. Parse JSON and render the list (e.g. titles) in the DOM.
4. Handle errors (network or failed response) simply.

---

## 3. Minimal HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Posts from API</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Posts</h1>
  <p id="loading">Loading...</p>
  <ul id="post-list"></ul>

  <script src="script.js"></script>
</body>
</html>
```

- `#loading` — message while we wait.
- `#post-list` — where we'll inject the list items.

---

## 4. Fetch and render (basic)

**script.js**

```javascript
const loadingEl = document.getElementById("loading");
const listEl = document.getElementById("post-list");

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Something went wrong: " + response.status);
    }
    return response.json();
  })
  .then(function (data) {
    loadingEl.textContent = "";  // Hide loading
    data.forEach(function (post) {
      const li = document.createElement("li");
      li.textContent = post.title;
      listEl.appendChild(li);
    });
  })
  .catch(function (error) {
    loadingEl.textContent = "Failed to load posts. " + error.message;
  });
```

**What this does**

- `fetch(url)` returns a Promise (async).
- First `.then`: check `response.ok`, then return `response.json()` (also a Promise).
- Second `.then`: receive the array of posts; clear "Loading…", loop, create `<li>`, set `post.title`, append to `#post-list`.
- `.catch`: network error or thrown error → show message in `#loading`.

---

## 5. Loading state (pattern)

1. **Before fetch:** Show "Loading…" (or a spinner).
2. **When data arrives:** Hide loading, show list.
3. **On error:** Hide loading (or keep it) and show an error message.

So: show loading → fetch → on success clear loading + render; on error show error message.

---

## 6. Error handling (simple)

- **Network failure:** fetch fails → `.catch` runs.
- **Server error (e.g. 404, 500):** `response.ok` is false → throw so `.catch` runs.
- Optional: show a retry button or different message for "no network" vs "server error."

---

## 7. Optional: limit how many posts

JSONPlaceholder supports `?_limit=10`:

```javascript
const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
```

Use this to keep the list short and the demo fast.

---

## 8. Optional: async/await (same logic, different style)

If you've mentioned async/await:

```javascript
const loadingEl = document.getElementById("loading");
const listEl = document.getElementById("post-list");
const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

async function loadPosts() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Something went wrong: " + response.status);
    const data = await response.json();

    loadingEl.textContent = "";
    data.forEach(function (post) {
      const li = document.createElement("li");
      li.textContent = post.title;
      listEl.appendChild(li);
    });
  } catch (error) {
    loadingEl.textContent = "Failed to load posts. " + error.message;
  }
}

loadPosts();
```

Same flow: fetch → check response → parse JSON → clear loading → render list → catch errors.

---

## 9. Suggested session flow (60–90 min)

| Time     | Activity |
|----------|----------|
| 0–15     | Explain API, JSON, fetch, Promise (and that we use .then today). |
| 15–25    | Write HTML (loading + list container) and minimal CSS. |
| 25–45    | Write fetch → .then(response => response.json()) → .then(data => …), render titles. |
| 45–55    | Add loading state (show before fetch, hide after). Add .catch and simple error message. |
| 55–65    | Try ?_limit=10; maybe show post.body in a detail line or second list. |
| 65–90    | Optional: async/await version; or second API (e.g. users) and render names. |

---

## 10. What we're not covering (yet)

- POST/PUT/DELETE (writing data).
- Authentication (API keys, headers).
- Complex error handling or retries.
- Other APIs (later they can try weather, etc., with the same pattern).

This one session is enough to "fetch an API, show loading, render a list" and bridge to next-level frontend.
