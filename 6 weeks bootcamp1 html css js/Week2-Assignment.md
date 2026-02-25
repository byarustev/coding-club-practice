# Week 2 Assignment: Style Your "About Me" Website

## 🎯 Assignment Overview

Take your Week 1 "About Me" website and make it beautiful using CSS! You'll create an external stylesheet and apply styling to transform your plain HTML into a visually appealing webpage.

**Estimated Time**: 3-4 hours

---

## ✅ Requirements Checklist

Your styled website must include:

- [ ] External CSS file (`styles.css`)
- [ ] Styling for page body (font, background color)
- [ ] Unique styling for all headings
- [ ] Styled paragraph text
- [ ] Customized lists (changed bullet style or removed bullets)
- [ ] Borders and padding on at least one section
- [ ] Max-width for content and centered layout
- [ ] Hover effects on links
- [ ] Image size changed using CSS (not HTML)
- [ ] Proper CSS organization with comments

---

## 📋 Step-by-Step Instructions

### Step 1: Set Up Your CSS File

1. Open your Week 1 project folder (`about-me-website`)
2. Create a new file called `styles.css` in the same folder as `index.html`
3. Open `styles.css` in your text editor

### Step 2: Link CSS to HTML

1. Open your `index.html` file
2. In the `<head>` section, add a link to your CSS file:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me - Your Name</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

3. **Save both files**

### Step 3: Style the Body

Start with the foundation - style the entire page:

```css
/* ===================================
   GLOBAL STYLES
   =================================== */

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}
```

**What this does**:
- Sets a readable font
- Adds line spacing for readability
- Sets a light background color
- Sets text color
- Removes default margins/padding

### Step 4: Style Headings

Create unique styles for each heading level:

```css
/* ===================================
   HEADINGS
   =================================== */

h1 {
    color: #2c3e50;
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

h2 {
    color: #34495e;
    font-size: 1.8em;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
    margin-top: 30px;
}

h3 {
    color: #555;
    font-size: 1.3em;
    font-style: italic;
}
```

**Customize these** to match your style! Try different:
- Colors
- Font sizes
- Text decorations
- Spacing

### Step 5: Style Paragraphs

Make your text readable and attractive:

```css
/* ===================================
   TEXT STYLES
   =================================== */

p {
    font-size: 1.1em;
    margin-bottom: 15px;
    text-align: justify;
}
```

### Step 6: Customize Lists

Style your hobbies list:

**Option 1: Remove bullets and add custom styling**
```css
ul {
    list-style: none;  /* Removes bullets */
    padding-left: 0;
}

li {
    padding: 8px;
    margin-bottom: 5px;
    background-color: #ecf0f1;
    border-left: 4px solid #3498db;
    padding-left: 15px;
}
```

**Option 2: Change bullet style**
```css
ul {
    list-style-type: square;  /* Square bullets */
    /* Or: circle, disc, none */
}

li {
    padding: 5px 0;
    color: #555;
}
```

**Option 3: Use custom images as bullets**
```css
ul {
    list-style-image: url('bullet.png');
}
```

Choose one style that you like!

### Step 7: Add Borders and Padding to Sections

Style at least one section with borders and padding:

```css
/* ===================================
   SECTIONS
   =================================== */

section {
    background-color: white;
    padding: 30px;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Or for a specific section */
#about {
    border: 2px solid #3498db;
    padding: 25px;
    background-color: #ffffff;
}
```

### Step 8: Center Content with Max-Width

Create a centered, readable layout:

```css
/* ===================================
   LAYOUT
   =================================== */

main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

header {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}
```

**What this does**:
- `max-width: 800px` limits content width for readability
- `margin: 0 auto` centers the content horizontally
- `padding: 20px` adds space inside

### Step 9: Style Images with CSS

Change image size using CSS (not HTML attributes):

```css
/* ===================================
   IMAGES
   =================================== */

img {
    width: 300px;
    height: auto;  /* Maintains aspect ratio */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    display: block;
    margin: 20px auto;  /* Centers the image */
}
```

**Important**: Remove any `width` or `height` attributes from your HTML `<img>` tags. Let CSS handle sizing!

### Step 10: Add Hover Effects to Links

Make links interactive:

```css
/* ===================================
   LINKS
   =================================== */

a {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    color: #2980b9;
    text-decoration: underline;
    transition: color 0.3s ease;  /* Smooth color change */
}

a:visited {
    color: #9b59b6;
}
```

**Test it**: Hover over your links to see the effect!

### Step 11: Style Navigation (If You Have One)

If your page has a navigation section:

```css
/* ===================================
   NAVIGATION
   =================================== */

nav {
    text-align: center;
    margin: 20px 0;
}

nav a {
    margin: 0 15px;
    padding: 8px 15px;
    background-color: #3498db;
    color: white;
    border-radius: 5px;
}

nav a:hover {
    background-color: #2980b9;
    text-decoration: none;
}
```

### Step 12: Style Footer

```css
/* ===================================
   FOOTER
   =================================== */

footer {
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    background-color: #2c3e50;
    color: white;
}
```

### Step 13: Add Comments and Organize

Make sure your CSS is well-organized with comments:

```css
/* ===================================
   SECTION NAME
   =================================== */

/* Individual comment explaining what this does */
.selector {
    property: value;
}
```

### Step 14: Test Your Styled Website

1. **Open `index.html` in your browser**
2. **Check that**:
   - All styles are applied
   - Links change on hover
   - Content is centered
   - Images are properly sized
   - Lists are styled
   - Sections have borders/padding
3. **Try different screen sizes** (resize browser window)

---

## 🎨 Design Inspiration

Here are some color scheme ideas:

### Modern Blue
```css
body { background-color: #f0f4f8; }
h1 { color: #1e3a5f; }
h2 { border-bottom-color: #4a90e2; }
a { color: #4a90e2; }
```

### Warm Earth Tones
```css
body { background-color: #faf5f0; }
h1 { color: #8b4513; }
h2 { border-bottom-color: #d2691e; }
a { color: #cd853f; }
```

### Dark Theme
```css
body { 
    background-color: #1a1a1a; 
    color: #e0e0e0;
}
h1 { color: #ffffff; }
section { background-color: #2d2d2d; }
```

---

## 📝 Complete Example Structure

Here's a complete example `styles.css` file structure (customize to your taste):

```css
/* ===================================
   GLOBAL STYLES
   =================================== */

* {
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}

/* ===================================
   LAYOUT
   =================================== */

header, main, footer {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

/* ===================================
   HEADER
   =================================== */

header {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 30px 20px;
}

h1 {
    margin: 0;
    font-size: 2.5em;
}

/* ===================================
   NAVIGATION
   =================================== */

nav {
    margin-top: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    padding: 8px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #34495e;
}

/* ===================================
   HEADINGS
   =================================== */

h2 {
    color: #2c3e50;
    font-size: 1.8em;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
    margin-top: 30px;
}

/* ===================================
   SECTIONS
   =================================== */

section {
    background-color: white;
    padding: 30px;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* ===================================
   TEXT
   =================================== */

p {
    font-size: 1.1em;
    margin-bottom: 15px;
    text-align: justify;
}

/* ===================================
   LISTS
   =================================== */

ul {
    list-style: none;
    padding-left: 0;
}

li {
    padding: 10px;
    margin-bottom: 8px;
    background-color: #ecf0f1;
    border-left: 4px solid #3498db;
    padding-left: 20px;
}

/* ===================================
   IMAGES
   =================================== */

img {
    width: 300px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    display: block;
    margin: 20px auto;
}

/* ===================================
   LINKS
   =================================== */

a {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    color: #2980b9;
    text-decoration: underline;
    transition: color 0.3s ease;
}

a:visited {
    color: #9b59b6;
}

/* ===================================
   FOOTER
   =================================== */

footer {
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    background-color: #2c3e50;
    color: white;
    border-radius: 8px;
}
```

---

## ✅ Submission Checklist

Before submitting, verify:

- [ ] `styles.css` file exists and is linked in HTML
- [ ] Body has font and background color
- [ ] All headings have unique styles
- [ ] Paragraphs are styled
- [ ] Lists are customized (different bullets or no bullets)
- [ ] At least one section has borders and padding
- [ ] Content has max-width and is centered
- [ ] Links have hover effects
- [ ] Images are sized using CSS (not HTML attributes)
- [ ] CSS is organized with comments
- [ ] Website looks good in browser
- [ ] All styles are working correctly

---

## 📤 Deliverables

Submit the following:

1. **`index.html`** (your Week 1 file, with CSS link added)
2. **`styles.css`** (your new stylesheet)

---

## 💡 Tips & Troubleshooting

### Common Issues

**Problem**: Styles not showing
- **Solution**: 
  - Check that `styles.css` is in the same folder as `index.html`
  - Verify the `<link>` tag in HTML is correct
  - Make sure file is saved
  - Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)

**Problem**: Image too large/small
- **Solution**: Adjust the `width` value in CSS. Use `height: auto` to maintain proportions.

**Problem**: Content not centered
- **Solution**: Make sure parent has `max-width` and `margin: 0 auto`

**Problem**: Hover effects not working
- **Solution**: Check that `:hover` is spelled correctly (with colon)

### Pro Tips

- Use browser DevTools (F12) to experiment with styles
- Try different color combinations
- Test on different screen sizes
- Keep your CSS organized - it makes debugging easier
- Use `box-sizing: border-box` to make sizing calculations easier

---

## 🎓 What You'll Learn

By completing this assignment, you'll practice:
- Creating external CSS files
- Styling text, colors, and backgrounds
- Understanding the box model
- Using classes and selectors
- Creating hover effects
- Organizing CSS code
- Centering and layout techniques

**Have fun making your website beautiful!** 🎨✨

