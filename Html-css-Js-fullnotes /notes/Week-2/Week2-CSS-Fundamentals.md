# Week 2: CSS Fundamentals

## 🎯 Learning Objectives

By the end of this week, you will be able to:
- Understand what CSS is and how it works with HTML
- Include CSS in your HTML documents (inline, internal, external)
- Style text, colors, backgrounds, and fonts
- Understand the CSS box model (margin, padding, border)
- Use classes and IDs for styling
- Apply basic layout concepts
- Write clean, organized CSS code

---

## What is CSS?

**CSS** stands for **Cascading Style Sheets**. It's the language that controls how HTML elements look on a webpage.

### The Relationship Between HTML and CSS

- **HTML** = Structure and content (the skeleton)
- **CSS** = Styling and appearance (the paint and decorations)

![HTML vs CSS](https://www.w3schools.com/css/img_selector.gif)

### Why CSS Exists

Before CSS, styling was mixed with HTML, making code messy and hard to maintain. CSS separates:
- **Structure** (HTML) from **Presentation** (CSS)
- Makes websites easier to maintain and update
- Allows one CSS file to style multiple HTML pages
- Enables responsive design

---

## How to Include CSS

There are three ways to add CSS to your HTML. We'll learn all three, but **external CSS is recommended** for most projects.

### Method 1: Inline CSS

CSS written directly in the HTML element using the `style` attribute:

```html
<p style="color: blue; font-size: 20px;">This text is blue and large</p>
```

**When to use**: Quick testing, one-off styles
**When NOT to use**: For most styling (hard to maintain)

### Method 2: Internal CSS

CSS written in a `<style>` tag in the `<head>` section:

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 20px;
        }
    </style>
</head>
```

**When to use**: Single-page websites, small projects
**When NOT to use**: Multi-page websites (code duplication)

### Method 3: External CSS (Recommended)

CSS written in a separate `.css` file, linked in the HTML:

**styles.css**:
```css
p {
    color: blue;
    font-size: 20px;
}
```

**index.html**:
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

**When to use**: Almost always! Best practice for all projects.

---

## 🎯 CSS Syntax

CSS follows a simple pattern:

```css
selector {
    property: value;
    property: value;
}
```

### Breaking It Down

- **Selector**: Which HTML element(s) to style
- **Property**: What aspect to change (color, size, etc.)
- **Value**: The specific setting (blue, 20px, etc.)
- **Declaration**: A property-value pair
- **Rule**: A selector + its declarations

### Example

```css
h1 {
    color: red;
    font-size: 32px;
    text-align: center;
}
```

This means: "Style all `<h1>` elements with red color, 32px font size, and center alignment."

---

## 🎨 Basic Styling

### Colors

CSS offers several ways to specify colors:

#### 1. Color Names
```css
p {
    color: blue;
    background-color: yellow;
}
```

#### 2. HEX Codes (Most Common)
```css
p {
    color: #FF5733;        /* Red-orange */
    background-color: #3498DB;  /* Blue */
}
```
- Format: `#RRGGBB` (Red, Green, Blue)
- Each pair is 00-FF (0-255 in decimal)
- `#000000` = Black, `#FFFFFF` = White

#### 3. RGB
```css
p {
    color: rgb(255, 87, 51);  /* Red-orange */
    background-color: rgb(52, 152, 219);  /* Blue */
}
```

#### 4. RGBA (with transparency)
```css
p {
    color: rgba(255, 87, 51, 0.5);  /* 50% transparent */
}
```
- The last value (0.5) is opacity (0 = transparent, 1 = opaque)

#### 5. HSL (Hue, Saturation, Lightness)
```css
p {
    color: hsl(9, 100%, 60%);
}
```

**Color Tools**: Use [Coolors.co](https://coolors.co) or browser DevTools to pick colors!

### Backgrounds

```css
body {
    background-color: #f0f0f0;           /* Solid color */
    background-image: url('image.jpg');  /* Background image */
    background-repeat: no-repeat;        /* Don't repeat image */
    background-size: cover;              /* Cover entire area */
    background-position: center;         /* Center the image */
}
```

### Fonts

#### Font Size
```css
p {
    font-size: 16px;      /* Pixels (most common) */
    font-size: 1em;      /* Relative to parent */
    font-size: 1rem;     /* Relative to root */
    font-size: 100%;     /* Percentage */
}
```

#### Font Weight
```css
p {
    font-weight: normal;   /* 400 */
    font-weight: bold;     /* 700 */
    font-weight: 300;      /* Light */
    font-weight: 900;      /* Extra bold */
}
```

#### Font Family
```css
p {
    font-family: Arial, sans-serif;
    font-family: "Times New Roman", serif;
    font-family: "Courier New", monospace;
}
```

**Font Stack**: Always provide fallbacks (comma-separated list)

#### Font Shorthand
```css
p {
    font: bold 16px Arial, sans-serif;
    /* weight size family */
}
```

### Text Alignment

```css
p {
    text-align: left;      /* Default */
    text-align: center;
    text-align: right;
    text-align: justify;   /* Spreads text evenly */
}
```

### Text Decoration

```css
a {
    text-decoration: none;        /* Remove underline */
    text-decoration: underline;
    text-decoration: line-through;
}
```

---

## The Box Model

Every HTML element is a box. Understanding the box model is crucial for layout!

![CSS Box Model](https://www.w3schools.com/css/box-model.gif)

### The Four Parts

1. **Content**: The actual content (text, images, etc.)
2. **Padding**: Space inside the element (between content and border)
3. **Border**: The border around the element
4. **Margin**: Space outside the element (between elements)

### Visual Example

```
┌─────────────────────────────────┐ ← Margin (outside)
│  ┌───────────────────────────┐  │
│  │ ┌───────────────────────┐ │  │ ← Border
│  │ │                       │ │  │
│  │ │      CONTENT          │ │  │
│  │ │                       │ │  │
│  │ └───────────────────────┘ │  │
│  └───────────────────────────┘  │ ← Padding (inside)
└─────────────────────────────────┘
```

### Padding

Space inside the element:

```css
div {
    padding: 20px;              /* All sides */
    padding: 10px 20px;         /* Top/Bottom, Left/Right */
    padding: 10px 20px 30px;   /* Top, Left/Right, Bottom */
    padding: 10px 20px 30px 40px; /* Top, Right, Bottom, Left */
    
    /* Individual sides */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```

### Margin

Space outside the element:

```css
div {
    margin: 20px;               /* All sides */
    margin: 10px 20px;          /* Top/Bottom, Left/Right */
    margin: 10px 20px 30px;     /* Top, Left/Right, Bottom */
    margin: 10px 20px 30px 40px; /* Top, Right, Bottom, Left */
    
    /* Individual sides */
    margin-top: 10px;
    margin-right: auto;         /* Auto centers horizontally */
    margin-bottom: 30px;
    margin-left: auto;
}
```

### Border

The border around the element:

```css
div {
    border: 2px solid black;
    /* width style color */
    
    /* Individual properties */
    border-width: 2px;
    border-style: solid;        /* solid, dashed, dotted, none */
    border-color: black;
    
    /* Individual sides */
    border-top: 1px solid red;
    border-right: 2px dashed blue;
    border-bottom: 3px dotted green;
    border-left: 4px solid orange;
}
```

### Width and Height

```css
div {
    width: 500px;           /* Fixed width */
    width: 80%;             /* Percentage of parent */
    width: 100vw;           /* Viewport width */
    
    height: 300px;          /* Fixed height */
    height: 50vh;           /* Viewport height */
    
    max-width: 1200px;      /* Maximum width */
    min-width: 300px;       /* Minimum width */
}
```

### Box Model Example

```css
.card {
    width: 300px;
    padding: 20px;
    border: 2px solid #333;
    margin: 20px;
    background-color: #f9f9f9;
}
```

**Total Width** = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right

---

## Selectors: Classes vs IDs

### Classes (`.class-name`)

- Use for **multiple elements** that share the same style
- Can be used multiple times on a page
- More flexible and reusable

```css
.highlight {
    background-color: yellow;
    font-weight: bold;
}
```

```html
<p class="highlight">Important text</p>
<p class="highlight">More important text</p>
```

### IDs (`#id-name`)

- Use for **unique elements** (only one per page)
- Higher specificity (overrides classes)
- Often used for JavaScript targeting

```css
#header {
    background-color: blue;
    color: white;
}
```

```html
<header id="header">Header Content</header>
```

### Specificity Order

1. **Inline styles** (highest priority)
2. **IDs** (`#id`)
3. **Classes** (`.class`)
4. **Elements** (`p`, `h1`, etc.) (lowest priority)

```css
/* This will win because ID has higher specificity */
#special {
    color: red;
}

.special {
    color: blue;
}
```

---

## 📐 Basic Layout: Display Property

The `display` property controls how elements behave:

### Block Elements

- Take full width of parent
- Start on a new line
- Can set width and height
- Examples: `<div>`, `<p>`, `<h1>`, `<section>`

```css
div {
    display: block;  /* Default for div */
    width: 500px;
    height: 200px;
}
```

### Inline Elements

- Only take up as much width as needed
- Stay on the same line
- Cannot set width and height
- Examples: `<span>`, `<a>`, `<strong>`

```css
span {
    display: inline;  /* Default for span */
    /* width and height don't work here */
}
```

### Inline-Block Elements

- Combines features of both
- Stays on same line (like inline)
- Can set width and height (like block)

```css
.button {
    display: inline-block;
    width: 150px;
    height: 40px;
}
```

---

## 💡 CSS Best Practices

### 1. Organization

Group related styles together:

```css
/* ===================================
   HEADER STYLES
   =================================== */
header {
    background-color: #333;
    color: white;
}

/* ===================================
   NAVIGATION STYLES
   =================================== */
nav {
    padding: 20px;
}

nav a {
    color: white;
    text-decoration: none;
}
```

### 2. Comments

Use comments to explain your code:

```css
/* Main container - centers content */
.container {
    max-width: 1200px;
    margin: 0 auto;  /* Centers horizontally */
}
```

### 3. Naming Conventions

Use descriptive, consistent names:

```css
/* Good */
.main-header { }
.article-title { }
.contact-button { }

/* Bad */
.header1 { }
.box { }
.thing { }
```

### 4. Use External Stylesheets

Keep CSS separate from HTML for maintainability.

### 5. Avoid Inline Styles

Use classes instead of inline styles when possible.

---

## 🎨 Common CSS Patterns

### Centering Content

```css
.container {
    max-width: 1200px;
    margin: 0 auto;  /* Centers horizontally */
}
```

### Styling Links

```css
a {
    color: blue;
    text-decoration: none;
}

a:hover {
    color: darkblue;
    text-decoration: underline;
}

a:visited {
    color: purple;
}
```

### Removing Default Styles

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**Note**: `box-sizing: border-box` makes width include padding and border (easier calculations!)

---

## 📚 Quick Reference

| Property | Purpose | Example |
|----------|---------|---------|
| `color` | Text color | `color: blue;` |
| `background-color` | Background color | `background-color: #fff;` |
| `font-size` | Text size | `font-size: 16px;` |
| `font-weight` | Text weight | `font-weight: bold;` |
| `font-family` | Font type | `font-family: Arial;` |
| `text-align` | Text alignment | `text-align: center;` |
| `padding` | Inner space | `padding: 20px;` |
| `margin` | Outer space | `margin: 10px;` |
| `border` | Border | `border: 1px solid black;` |
| `width` | Width | `width: 500px;` |
| `height` | Height | `height: 300px;` |
| `display` | Display type | `display: block;` |

---

## 🎓 Summary

You've learned:
- ✅ What CSS is and how it works with HTML
- ✅ Three ways to include CSS (inline, internal, external)
- ✅ CSS syntax and how to write rules
- ✅ Styling colors, backgrounds, fonts, and text
- ✅ The box model (margin, padding, border)
- ✅ Classes vs IDs and specificity
- ✅ Basic display properties
- ✅ CSS best practices

**Next Step**: Complete the [Week 2 Assignment](./Week2-Assignment.md) to style your Week 1 website!

---

## 📖 Additional Resources

- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
- [Color Picker Tools](https://coolors.co)

