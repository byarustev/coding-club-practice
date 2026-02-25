# Week 3: Responsive Design + Flexbox

## 🎯 Learning Objectives

By the end of this week, you will be able to:
- Understand what responsive design is and why it matters
- Use the viewport meta tag
- Write media queries for different screen sizes
- Understand CSS units (px, %, em, rem, vh, vw)
- Master Flexbox for layout
- Build responsive page layouts that work on all devices

---

## What is Responsive Design?

**Responsive design** means your website looks good and works well on all devices - from mobile phones to tablets to desktop computers.

### Why Responsive Design Matters

![Responsive Design](https://www.w3schools.com/css/rwd_desktop.jpg)

- **Mobile usage is growing**: More than 50% of web traffic is mobile
- **Better user experience**: Users expect sites to work on their device
- **SEO benefits**: Google favors mobile-friendly sites
- **Future-proof**: New devices come out all the time

### The Problem Before Responsive Design

Before responsive design, websites were built for desktop only:
- Tiny text on mobile
- Horizontal scrolling required
- Buttons too small to tap
- Poor user experience

### The Solution

Responsive design uses:
- **Flexible layouts** (Flexbox, Grid)
- **Media queries** (different styles for different screen sizes)
- **Flexible units** (percentages, viewport units)
- **Flexible images** (scale with container)

---

## 📐 CSS Units

Understanding CSS units is crucial for responsive design:

### Absolute Units

#### Pixels (`px`)
```css
div {
    width: 500px;  /* Fixed size, doesn't change */
}
```
- Fixed size, doesn't scale
- Good for borders, small elements
- Not ideal for responsive layouts

### Relative Units

#### Percentages (`%`)
```css
div {
    width: 80%;  /* 80% of parent's width */
}
```
- Relative to parent element
- Great for responsive layouts
- Most common for widths

#### `em`
```css
p {
    font-size: 1.5em;  /* 1.5 times parent's font size */
    margin: 2em;       /* 2 times current font size */
}
```
- Relative to parent's font size (for font-size)
- Relative to current element's font size (for other properties)
- Can compound (nested elements multiply)

#### `rem` (Root EM) - Recommended!
```css
p {
    font-size: 1.5rem;  /* 1.5 times root (html) font size */
    margin: 2rem;       /* 2 times root font size */
}
```
- Always relative to root (`<html>`) font size
- Doesn't compound
- **Best practice** for responsive typography

#### Viewport Width (`vw`)
```css
div {
    width: 50vw;  /* 50% of viewport width */
}
```
- 1vw = 1% of viewport width
- Great for full-width elements

#### Viewport Height (`vh`)
```css
header {
    height: 100vh;  /* Full viewport height */
}
```
- 1vh = 1% of viewport height
- Useful for hero sections

### Unit Comparison

| Unit | Relative To | Best For |
|------|-------------|----------|
| `px` | Nothing (absolute) | Borders, small fixed elements |
| `%` | Parent element | Widths, responsive layouts |
| `em` | Parent/current font size | Typography (can compound) |
| `rem` | Root font size | Typography (recommended) |
| `vw` | Viewport width | Full-width elements |
| `vh` | Viewport height | Full-height sections |

---

## 📱 The Viewport Meta Tag

**Critical for mobile responsiveness!** Must be in your `<head>`:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
```

### What It Does

- `width=device-width`: Sets page width to device screen width
- `initial-scale=1.0`: Sets initial zoom level to 100%

**Without this tag**: Mobile browsers assume desktop width (usually 980px), causing horizontal scrolling.

---

## 🎯 Media Queries

Media queries let you apply different CSS styles based on screen size.

### Basic Syntax

```css
@media (condition) {
    /* CSS rules here */
}
```

### Common Breakpoints

```css
/* Mobile First Approach (Recommended) */

/* Default styles (mobile) */
body {
    font-size: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
    body {
        font-size: 18px;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    body {
        font-size: 20px;
    }
}
```

### Standard Breakpoints

```css
/* Mobile: default (no media query needed) */
/* 0px - 767px */

/* Tablet */
@media (min-width: 768px) {
    /* Styles for tablets */
}

/* Desktop */
@media (min-width: 1024px) {
    /* Styles for desktops */
}

/* Large Desktop */
@media (min-width: 1200px) {
    /* Styles for large screens */
}
```

### Media Query Examples

#### Change Layout Direction
```css
/* Mobile: Stack vertically */
.container {
    flex-direction: column;
}

/* Desktop: Side by side */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}
```

#### Hide/Show Elements
```css
/* Hide on mobile */
.desktop-only {
    display: none;
}

/* Show on desktop */
@media (min-width: 768px) {
    .desktop-only {
        display: block;
    }
}
```

#### Adjust Font Sizes
```css
h1 {
    font-size: 2rem;  /* Mobile */
}

@media (min-width: 768px) {
    h1 {
        font-size: 3rem;  /* Tablet */
    }
}

@media (min-width: 1024px) {
    h1 {
        font-size: 4rem;  /* Desktop */
    }
}
```

### Mobile-First vs Desktop-First

#### Mobile-First (Recommended)
Start with mobile styles, then add larger screen styles:

```css
/* Mobile styles (default) */
.container {
    width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}
```

#### Desktop-First
Start with desktop styles, then override for smaller screens:

```css
/* Desktop styles (default) */
.container {
    width: 1200px;
}

/* Tablet and down */
@media (max-width: 1023px) {
    .container {
        width: 100%;
    }
}
```

**Recommendation**: Use mobile-first - it's easier and more efficient!

---

## 🎨 Flexbox

**Flexbox** (Flexible Box Layout) is a powerful CSS layout system that makes it easy to create flexible, responsive layouts.

### Why Flexbox?

Before Flexbox, layouts were difficult:
- Floats (hacky, hard to control)
- Tables (not semantic)
- Absolute positioning (not flexible)

Flexbox solves these problems:
- ✅ Easy alignment
- ✅ Responsive by default
- ✅ Simple centering
- ✅ Flexible sizing

### Flexbox Basics

#### The Container (Parent)

To use Flexbox, set `display: flex` on a container:

```css
.container {
    display: flex;
}
```

This makes all direct children "flex items."

#### The Items (Children)

Children automatically become flex items and can be styled with flex properties.

### Flexbox Terminology

![Flexbox Axes](https://css-tricks.com/wp-content/uploads/2018/10/00-basic-terminology.svg)

- **Flex Container**: The parent element with `display: flex`
- **Flex Items**: Direct children of the flex container
- **Main Axis**: Primary axis (horizontal by default)
- **Cross Axis**: Perpendicular axis (vertical by default)

---

## 🎯 Flexbox Container Properties

### `flex-direction`

Controls the direction of flex items:

```css
.container {
    display: flex;
    flex-direction: row;        /* Default: left to right */
    flex-direction: row-reverse; /* Right to left */
    flex-direction: column;     /* Top to bottom */
    flex-direction: column-reverse; /* Bottom to top */
}
```

### `justify-content`

Aligns items along the **main axis**:

```css
.container {
    display: flex;
    justify-content: flex-start;    /* Default: start */
    justify-content: flex-end;      /* End */
    justify-content: center;        /* Center */
    justify-content: space-between; /* Space between items */
    justify-content: space-around;  /* Space around items */
    justify-content: space-evenly;  /* Equal space everywhere */
}
```

**Visual Examples**:

```
flex-start:    [Item1][Item2][Item3]-------
flex-end:      -------[Item1][Item2][Item3]
center:        ---[Item1][Item2][Item3]-----
space-between: [Item1]----[Item2]----[Item3]
space-around:  -[Item1]---[Item2]---[Item3]-
space-evenly:  --[Item1]--[Item2]--[Item3]--
```

### `align-items`

Aligns items along the **cross axis**:

```css
.container {
    display: flex;
    align-items: stretch;    /* Default: fill height */
    align-items: flex-start; /* Top */
    align-items: flex-end;   /* Bottom */
    align-items: center;     /* Center */
    align-items: baseline;   /* Text baseline */
}
```

### `gap`

Adds space between flex items (modern, recommended):

```css
.container {
    display: flex;
    gap: 20px;  /* Space between all items */
}
```

**Alternative** (older method):
```css
.item {
    margin-right: 20px;  /* Manual spacing */
}
```

### `flex-wrap`

Controls whether items wrap to new lines:

```css
.container {
    display: flex;
    flex-wrap: nowrap;  /* Default: all on one line */
    flex-wrap: wrap;    /* Wrap to new lines */
}
```

### Common Flexbox Patterns

#### Centering Content
```css
.container {
    display: flex;
    justify-content: center;  /* Horizontal center */
    align-items: center;      /* Vertical center */
    height: 100vh;            /* Full viewport height */
}
```

#### Navigation Bar
```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav a {
    margin: 0 10px;
}
```

#### Equal-Width Columns
```css
.container {
    display: flex;
}

.item {
    flex: 1;  /* Each item takes equal space */
}
```

---

## 🎯 Flexbox Item Properties

### `flex-grow`

Controls how much an item can grow:

```css
.item {
    flex-grow: 0;  /* Default: don't grow */
    flex-grow: 1;  /* Can grow to fill space */
    flex-grow: 2;  /* Grows twice as much as flex-grow: 1 */
}
```

### `flex-shrink`

Controls how much an item can shrink:

```css
.item {
    flex-shrink: 1;  /* Default: can shrink */
    flex-shrink: 0;  /* Don't shrink */
}
```

### `flex-basis`

Sets initial size before growing/shrinking:

```css
.item {
    flex-basis: 200px;  /* Initial width */
}
```

### `flex` (Shorthand)

Combines `flex-grow`, `flex-shrink`, and `flex-basis`:

```css
.item {
    flex: 1;           /* flex: 1 1 0% (grow, shrink, basis) */
    flex: 0 0 200px;   /* Don't grow, don't shrink, 200px basis */
    flex: 2 1 auto;    /* Grow 2x, can shrink, auto basis */
}
```

**Common values**:
- `flex: 1` - Grow to fill available space
- `flex: 0 0 200px` - Fixed 200px width
- `flex: auto` - Size based on content

### `align-self`

Overrides `align-items` for a specific item:

```css
.item {
    align-self: flex-end;  /* This item at bottom */
}
```

---

## 🏗️ Building Layouts with Flexbox

### Card Layout

```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px;  /* Grow, shrink, min 300px */
    /* Or: flex-basis: 300px; min-width: 300px; */
}
```

### Responsive Navigation

```css
/* Mobile: Vertical */
nav {
    display: flex;
    flex-direction: column;
}

/* Desktop: Horizontal */
@media (min-width: 768px) {
    nav {
        flex-direction: row;
        justify-content: space-between;
    }
}
```

### Hero Section

```css
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
}

@media (min-width: 768px) {
    .hero {
        flex-direction: row;
        text-align: left;
    }
}
```

---

## 💡 Flexbox Best Practices

1. **Use `gap` instead of margins** for spacing
2. **Start mobile-first** with `flex-direction: column`
3. **Use `flex: 1`** for equal-width items
4. **Combine with media queries** for responsive layouts
5. **Use `align-items: center`** for vertical centering

---

## 📚 Quick Reference

### Container Properties

| Property | Values | Purpose |
|---------|--------|---------|
| `display` | `flex` | Makes container flex |
| `flex-direction` | `row`, `column`, etc. | Direction of items |
| `justify-content` | `center`, `space-between`, etc. | Main axis alignment |
| `align-items` | `center`, `flex-start`, etc. | Cross axis alignment |
| `gap` | `20px` | Space between items |
| `flex-wrap` | `wrap`, `nowrap` | Allow wrapping |

### Item Properties

| Property | Values | Purpose |
|---------|--------|---------|
| `flex` | `1`, `0 0 200px` | Grow/shrink/basis |
| `flex-grow` | `0`, `1`, `2` | Can grow |
| `flex-shrink` | `0`, `1` | Can shrink |
| `flex-basis` | `200px`, `auto` | Initial size |
| `align-self` | `center`, `flex-end` | Override alignment |

---

## 🎓 Summary

You've learned:
- ✅ What responsive design is and why it matters
- ✅ CSS units (px, %, em, rem, vh, vw)
- ✅ The viewport meta tag
- ✅ Media queries for different screen sizes
- ✅ Flexbox container properties
- ✅ Flexbox item properties
- ✅ Building responsive layouts with Flexbox

**Next Step**: Complete the [Week 3 Assignment](./Week3-Assignment.md) to build a responsive portfolio!

---

## 📖 Additional Resources

- [MDN Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Interactive game to learn Flexbox
- [Can I Use - Flexbox](https://caniuse.com/flexbox) - Browser support

