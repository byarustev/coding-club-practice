# Week 3 Assignment: Responsive Portfolio Homepage

## 🎯 Assignment Overview

Build a responsive 3-section personal portfolio homepage using Flexbox. Your page should adapt beautifully from mobile phones to desktop computers.

**Estimated Time**: 4-5 hours

---

## ✅ Requirements Checklist

Your portfolio homepage must include:

- [ ] Navigation bar (horizontal on desktop, vertical on mobile)
- [ ] Hero section with:
  - [ ] A heading
  - [ ] A short description
  - [ ] An image positioned using Flexbox
- [ ] Projects section showing 3 project cards
  - [ ] Each card has: Title, Image/placeholder, Short description
- [ ] Layout uses Flexbox for project cards
- [ ] Responsive design (single column on mobile)
- [ ] Viewport meta tag in HTML
- [ ] Media queries for different screen sizes

---

## 📋 Step-by-Step Instructions

### Step 1: Set Up Your Project

1. Create a new folder called `portfolio-homepage`
2. Create the following files:
   - `index.html`
   - `styles.css`
3. Create an `images` folder for your images

### Step 2: Create HTML Structure

Open `index.html` and create the basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav>
        <!-- Navigation content -->
    </nav>
    
    <!-- Hero Section -->
    <section class="hero">
        <!-- Hero content -->
    </section>
    
    <!-- Projects Section -->
    <section class="projects">
        <!-- Project cards -->
    </section>
    
    <!-- Footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Step 3: Build the Navigation Bar

Add navigation content:

```html
<nav>
    <div class="nav-container">
        <h2 class="logo">Your Name</h2>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</nav>
```

**Note**: We'll use Flexbox to make this responsive!

### Step 4: Build the Hero Section

Add hero content:

```html
<section class="hero" id="home">
    <div class="hero-content">
        <div class="hero-text">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm a web developer passionate about creating beautiful and functional websites.</p>
        </div>
        <div class="hero-image">
            <img src="images/your-photo.jpg" alt="Your name - Web Developer">
        </div>
    </div>
</section>
```

**Image Tip**: Use a photo of yourself, a placeholder from [Unsplash](https://unsplash.com), or create a simple placeholder.

### Step 5: Build the Projects Section

Add project cards:

```html
<section class="projects" id="projects">
    <h2>My Projects</h2>
    <div class="projects-container">
        <!-- Project Card 1 -->
        <div class="project-card">
            <img src="images/project1.jpg" alt="Project 1">
            <h3>Project Title 1</h3>
            <p>Description of your first project. What technologies did you use? What problem does it solve?</p>
        </div>
        
        <!-- Project Card 2 -->
        <div class="project-card">
            <img src="images/project2.jpg" alt="Project 2">
            <h3>Project Title 2</h3>
            <p>Description of your second project. Be creative and descriptive!</p>
        </div>
        
        <!-- Project Card 3 -->
        <div class="project-card">
            <img src="images/project3.jpg" alt="Project 3">
            <h3>Project Title 3</h3>
            <p>Description of your third project. What makes it special?</p>
        </div>
    </div>
</section>
```

**Image Tip**: Use placeholder images from [Placeholder.com](https://placeholder.com) or [Unsplash](https://unsplash.com).

### Step 6: Add Footer

```html
<footer>
    <p>&copy; 2025 Your Name. All rights reserved.</p>
</footer>
```

### Step 7: Style with CSS - Global Styles

Open `styles.css` and start with global styles:

```css
/* ===================================
   GLOBAL STYLES
   =================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    color: #333;
}

a {
    text-decoration: none;
    color: inherit;
}
```

### Step 8: Style Navigation with Flexbox

Make navigation responsive:

```css
/* ===================================
   NAVIGATION
   =================================== */

nav {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: white;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #3498db;
}

/* Mobile: Vertical navigation */
@media (max-width: 767px) {
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-links {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}
```

### Step 9: Style Hero Section with Flexbox

```css
/* ===================================
   HERO SECTION
   =================================== */

.hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #ecf0f1;
}

.hero-content {
    max-width: 1200px;
    display: flex;
    align-items: center;
    gap: 3rem;
}

.hero-text h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

.hero-text p {
    font-size: 1.2rem;
    color: #555;
}

.hero-image img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Mobile: Stack vertically */
@media (max-width: 767px) {
    .hero-content {
        flex-direction: column;
        text-align: center;
    }
    
    .hero-text h1 {
        font-size: 2rem;
    }
    
    .hero-image img {
        width: 200px;
        height: 200px;
    }
}
```

### Step 10: Style Projects Section with Flexbox

This is the key part - use Flexbox for the project cards:

```css
/* ===================================
   PROJECTS SECTION
   =================================== */

.projects {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

.projects h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2c3e50;
}

.projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.project-card {
    flex: 1 1 300px;  /* Grow, shrink, min 300px */
    max-width: 350px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.2);
}

.project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-card h3 {
    padding: 1rem;
    color: #2c3e50;
    font-size: 1.5rem;
}

.project-card p {
    padding: 0 1rem 1.5rem;
    color: #666;
}

/* Mobile: Single column */
@media (max-width: 767px) {
    .project-card {
        flex: 1 1 100%;  /* Full width on mobile */
        max-width: 100%;
    }
}
```

### Step 11: Style Footer

```css
/* ===================================
   FOOTER
   =================================== */

footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem;
}
```

### Step 12: Test Responsiveness

1. **Open your HTML file in a browser**
2. **Resize the browser window** to test:
   - Mobile (narrow width)
   - Tablet (medium width)
   - Desktop (wide width)
3. **Check that**:
   - Navigation changes from horizontal to vertical on mobile
   - Hero section stacks vertically on mobile
   - Project cards become single column on mobile
   - Everything looks good at all sizes

### Step 13: Add More Responsive Breakpoints (Optional)

Fine-tune for tablet sizes:

```css
/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
    .project-card {
        flex: 1 1 45%;  /* 2 columns on tablet */
    }
}
```

---

## 🎨 Design Tips

### Color Scheme Ideas

**Modern Blue**:
```css
nav, footer { background-color: #2c3e50; }
.hero { background-color: #ecf0f1; }
.project-card:hover { box-shadow: 0 8px 12px rgba(52, 152, 219, 0.3); }
```

**Warm & Professional**:
```css
nav, footer { background-color: #8b4513; }
.hero { background-color: #faf5f0; }
```

### Typography

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1, h2, h3 {
    font-weight: 700;
}
```

---

## 📝 Complete Example Structure

Here's a reference structure (customize to your style):

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav>
        <div class="nav-container">
            <h2 class="logo">John Doe</h2>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <section class="hero" id="home">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Hi, I'm John Doe</h1>
                <p>I'm a web developer passionate about creating beautiful and functional websites that make a difference.</p>
            </div>
            <div class="hero-image">
                <img src="https://via.placeholder.com/300" alt="John Doe">
            </div>
        </div>
    </section>
    
    <section class="projects" id="projects">
        <h2>My Projects</h2>
        <div class="projects-container">
            <div class="project-card">
                <img src="https://via.placeholder.com/350x200" alt="Project 1">
                <h3>E-Commerce Website</h3>
                <p>Built a full-stack e-commerce platform using HTML, CSS, and JavaScript. Features include shopping cart, user authentication, and payment integration.</p>
            </div>
            <div class="project-card">
                <img src="https://via.placeholder.com/350x200" alt="Project 2">
                <h3>Weather App</h3>
                <p>A responsive weather application that displays current conditions and forecasts. Uses API integration to fetch real-time weather data.</p>
            </div>
            <div class="project-card">
                <img src="https://via.placeholder.com/350x200" alt="Project 3">
                <h3>Task Manager</h3>
                <p>An interactive task management application with drag-and-drop functionality, categories, and local storage for data persistence.</p>
            </div>
        </div>
    </section>
    
    <footer>
        <p>&copy; 2025 John Doe. All rights reserved.</p>
    </footer>
</body>
</html>
```

---

## ✅ Submission Checklist

Before submitting, verify:

- [ ] Navigation bar is horizontal on desktop, vertical on mobile
- [ ] Hero section has heading, description, and image
- [ ] Hero section uses Flexbox for layout
- [ ] Projects section has 3 project cards
- [ ] Each card has: title, image, description
- [ ] Project cards use Flexbox layout
- [ ] Layout becomes single column on mobile
- [ ] Viewport meta tag is in HTML
- [ ] Media queries are used for responsiveness
- [ ] Website looks good on mobile, tablet, and desktop
- [ ] All images have alt text
- [ ] Code is properly organized and commented

---

## 📤 Deliverables

Submit the following:

1. **`index.html`** file
2. **`styles.css`** file
3. **`images/`** folder (or note if using online images)
4. **Screenshots** showing mobile and desktop views (optional but helpful)

---

## 💡 Tips & Troubleshooting

### Common Issues

**Problem**: Cards don't wrap on mobile
- **Solution**: Make sure you have `flex-wrap: wrap` and `flex: 1 1 100%` on mobile

**Problem**: Navigation doesn't stack on mobile
- **Solution**: Check your media query and `flex-direction: column`

**Problem**: Hero section image too large on mobile
- **Solution**: Add responsive sizing in media query

**Problem**: Content overflows on small screens
- **Solution**: Add `max-width: 100%` to images and containers

### Pro Tips

- Use browser DevTools (F12) to test different screen sizes
- Test on actual mobile device if possible
- Use `gap` property instead of margins for spacing
- Start with mobile styles, then add desktop styles
- Use `flex: 1 1 300px` for flexible card widths

---

## 🎓 What You'll Learn

By completing this assignment, you'll practice:
- Using Flexbox for layout
- Creating responsive designs
- Writing media queries
- Building card-based layouts
- Making navigation responsive
- Understanding viewport units
- Mobile-first design approach

**Have fun building your responsive portfolio!** 🚀📱💻

