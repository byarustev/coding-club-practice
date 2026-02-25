# Week 1: Introduction to the Web + HTML Fundamentals

## 🎯 Learning Objectives

By the end of this week, you will be able to:
- Understand how websites work and the role of HTML
- Create a properly structured HTML document
- Use essential HTML tags to build web pages
- Implement semantic HTML for better structure
- Create links, add images, and organize content with lists

---

## 🌐 What is the Web?

The World Wide Web is a system of interconnected documents and resources accessible via the internet. Here's how it works:

### The Basic Flow

```
You (Browser) → Internet → Server → Files → Back to You
```

1. **Browser** (Chrome, Firefox, Safari) - The application you use to view websites
2. **Server** - A computer that stores website files and sends them to your browser
3. **Files** - HTML, CSS, JavaScript, images, and other resources that make up a website

![How the Web Works](https://www.cloudflare.com/img/learning/serverless/glossary/client-server-model/client-server-model.svg)

### Key Concepts

- **Client**: Your browser (the "client" requesting information)
- **Server**: The computer hosting the website files
- **HTTP/HTTPS**: The protocol (language) browsers and servers use to communicate
- **URL**: The address that tells your browser where to find a website

---

## 📁 Folder Structure for Web Projects

Before we start coding, let's organize our files properly. A well-organized project makes your life easier!

### Basic Structure

```
my-website/
├── index.html          (Main page - always name it "index.html")
├── about.html          (Other pages)
├── css/
│   └── styles.css      (Stylesheets)
├── js/
│   └── script.js       (JavaScript files)
└── images/
    └── photo.jpg       (Images)
```

### Best Practices

- Use lowercase for file names
- Use hyphens (-) instead of spaces: `my-page.html` not `my page.html`
- Keep related files in folders (css, js, images)
- Always name your main page `index.html`

---

## 📝 What is HTML?

**HTML** stands for **HyperText Markup Language**. It's the standard language for creating web pages.

### Why HTML Exists

HTML provides the **structure** and **content** of a webpage. Think of it as the skeleton of a house:
- HTML = Structure (walls, rooms, foundation)
- CSS = Styling (paint, decorations, furniture)
- JavaScript = Interactivity (lights, appliances, automation)

### HTML is a Markup Language

HTML uses **tags** (markup) to describe content. Tags are like labels that tell the browser what each piece of content is.

```html
<h1>This is a heading</h1>
<p>This is a paragraph</p>
```

---

## 🏗️ HTML Document Structure

Every HTML document follows a standard structure. Let's break it down:

### The Basic Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

### Understanding Each Part

#### 1. `<!DOCTYPE html>`
- Tells the browser this is an HTML5 document
- Must be the first line
- Not case-sensitive, but lowercase is standard

#### 2. `<html lang="en">`
- The root element that wraps everything
- `lang="en"` tells browsers the page is in English (helps with accessibility)

#### 3. `<head>`
- Contains **metadata** (information about the page)
- Not visible to users
- Includes: title, character encoding, links to CSS/JS files

#### 4. `<body>`
- Contains all **visible content**
- Everything users see goes here

---

## 🏷️ Essential HTML Tags

### Headings: `<h1>` to `<h6>`

Headings create a hierarchy. Use them to structure your content:

```html
<h1>Main Title (Biggest - Use Once Per Page)</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Smaller Heading</h4>
<h5>Even Smaller</h5>
<h6>Smallest Heading</h6>
```

**Best Practice**: Use only ONE `<h1>` per page (usually your main title).

### Paragraphs: `<p>`

Use paragraphs for regular text content:

```html
<p>This is a paragraph. It contains multiple sentences and wraps automatically.</p>
<p>This is another paragraph. Each paragraph is a separate block.</p>
```

### Links: `<a>`

Links connect pages together. The `href` attribute tells where the link goes:

```html
<!-- External link -->
<a href="https://www.google.com">Visit Google</a>

<!-- Email link -->
<a href="mailto:example@email.com">Send Email</a>

<!-- Link to another page on your site -->
<a href="about.html">About Me</a>

<!-- Anchor link (jumps to section on same page) -->
<a href="#section1">Jump to Section 1</a>
```

### Images: `<img>`

Images make pages visual. Always include `alt` text for accessibility:

```html
<img src="images/photo.jpg" alt="Description of the image">
```

**Attributes Explained**:
- `src`: The path to the image file
- `alt`: Alternative text (shown if image can't load, helps screen readers)

### Lists

#### Unordered Lists (Bullet Points): `<ul>`

```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

#### Ordered Lists (Numbered): `<ol>`

```html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```

### Div & Span: Grouping Elements

#### `<div>` - Block Container

Used to group block-level elements:

```html
<div class="container">
    <h2>Section Title</h2>
    <p>Some content</p>
</div>
```

#### `<span>` - Inline Container

Used to style or group inline elements:

```html
<p>This is <span class="highlight">important</span> text.</p>
```

---

## 🎯 HTML Attributes

Attributes provide additional information about elements. They go in the opening tag:

```html
<img src="photo.jpg" alt="My photo" id="profile-pic" class="rounded">
```

### Common Attributes

- **`id`**: Unique identifier (use once per page)
  ```html
  <div id="header">Header Content</div>
  ```

- **`class`**: Reusable identifier (can use multiple times)
  ```html
  <p class="highlight">Important text</p>
  <p class="highlight">More important text</p>
  ```

- **`src`**: Source (for images, scripts, etc.)
  ```html
  <img src="image.jpg">
  ```

- **`href`**: Hyperlink reference (for links)
  ```html
  <a href="page.html">Link</a>
  ```

- **`alt`**: Alternative text (for images)
  ```html
  <img src="cat.jpg" alt="A cute orange cat">
  ```

---

## 🎨 Semantic HTML

Semantic HTML uses tags that describe their **meaning**, not just their appearance. This makes your code more readable and accessible.

### Why Use Semantic HTML?

- **Better for SEO** (Search Engine Optimization)
- **Easier to maintain** (clearer code structure)
- **Accessibility** (screen readers understand the structure)
- **Future-proof** (easier to style with CSS)

### Common Semantic Tags

#### `<header>`
Contains introductory content or navigation:

```html
<header>
    <h1>My Website</h1>
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
    </nav>
</header>
```

#### `<nav>`
Navigation links:

```html
<nav>
    <a href="home.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
</nav>
```

#### `<main>`
The main content of the page (use once per page):

```html
<main>
    <h1>Welcome</h1>
    <p>Main content goes here...</p>
</main>
```

#### `<section>`
A thematic grouping of content:

```html
<section>
    <h2>About Me</h2>
    <p>I'm a web developer...</p>
</section>
```

#### `<article>`
Independent, self-contained content:

```html
<article>
    <h2>Blog Post Title</h2>
    <p>Blog post content...</p>
</article>
```

#### `<footer>`
Footer information (copyright, links, etc.):

```html
<footer>
    <p>&copy; 2025 My Website</p>
</footer>
```

### Semantic HTML Structure Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website</title>
</head>
<body>
    <header>
        <h1>Welcome to My Site</h1>
        <nav>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    
    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Content here...</p>
        </section>
        
        <article>
            <h2>My Latest Project</h2>
            <p>Project details...</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2025 My Name</p>
    </footer>
</body>
</html>
```

---

## 💡 Best Practices

1. **Always close your tags** (except self-closing tags like `<img>`)
2. **Use lowercase for tags and attributes**
3. **Indent nested elements** (makes code readable)
4. **Use semantic HTML** when possible
5. **Include alt text** for all images
6. **Validate your HTML** using [W3C Validator](https://validator.w3.org/)

### Proper Indentation Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
</head>
<body>
    <header>
        <h1>Title</h1>
        <nav>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
        </nav>
    </header>
    <main>
        <section>
            <h2>Section Title</h2>
            <p>Content here.</p>
        </section>
    </main>
</body>
</html>
```

---

## 🔍 HTML Comments

Comments help you (and others) understand your code. They're not visible on the webpage:

```html
<!-- This is a comment -->
<p>This is visible content</p>

<!-- 
    This is a multi-line comment
    Useful for longer explanations
-->
```

---

## 📚 Quick Reference

| Tag | Purpose | Example |
|-----|---------|---------|
| `<h1>`-`<h6>` | Headings | `<h1>Title</h1>` |
| `<p>` | Paragraph | `<p>Text</p>` |
| `<a>` | Link | `<a href="url">Link</a>` |
| `<img>` | Image | `<img src="img.jpg" alt="desc">` |
| `<ul>` | Unordered list | `<ul><li>Item</li></ul>` |
| `<ol>` | Ordered list | `<ol><li>Item</li></ol>` |
| `<div>` | Block container | `<div>Content</div>` |
| `<span>` | Inline container | `<span>Text</span>` |
| `<header>` | Header section | `<header>Content</header>` |
| `<nav>` | Navigation | `<nav>Links</nav>` |
| `<main>` | Main content | `<main>Content</main>` |
| `<section>` | Section | `<section>Content</section>` |
| `<article>` | Article | `<article>Content</article>` |
| `<footer>` | Footer | `<footer>Content</footer>` |

---

## 🎓 Summary

You've learned:
- ✅ How the web works (browser, server, files)
- ✅ HTML document structure
- ✅ Essential HTML tags (headings, paragraphs, links, images, lists)
- ✅ HTML attributes (id, class, src, href, alt)
- ✅ Semantic HTML for better structure
- ✅ Best practices for writing clean HTML

**Next Step**: Complete the [Week 1 Assignment](./Week1-Assignment.md) to build your first website!

---

## 📖 Additional Resources

- [MDN HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [W3C HTML Validator](https://validator.w3.org/)

