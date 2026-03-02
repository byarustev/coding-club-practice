# Week 6 Final Project: Multi-Page Website with Interactivity

## 🎯 Project Overview

Build a fully functional, multi-page website that showcases everything you've learned in this bootcamp. This is your capstone project - make it impressive!

**Estimated Time**: 8-10 hours (spread over the week)

---

## ✅ Requirements Checklist

Your project must include:

### Pages
- [ ] Home page (`index.html`)
- [ ] About page (`about.html`)
- [ ] Projects page (`projects.html`)
- [ ] Contact page (`contact.html`)

### HTML Requirements
- [ ] Semantic HTML structure on all pages
- [ ] Consistent navigation across all pages
- [ ] Proper file structure

### CSS Requirements
- [ ] Flexbox used in at least two sections
- [ ] Responsive design (mobile-friendly)
- [ ] Consistent theme/design across all pages
- [ ] External stylesheet(s)

### JavaScript Requirements
- [ ] At least two interactive features, such as:
  - [ ] Mobile navigation menu toggle
  - [ ] Dark/light mode switch
  - [ ] Form validation on contact page
  - [ ] Simple slideshow/slider
  - [ ] Dynamic project list built from an array

### File Structure
- [ ] Clean folder organization:
  ```
  /project
    /css
    /js
    /images
    index.html
    about.html
    projects.html
    contact.html
    README.md
  ```

---

## 📋 Step-by-Step Instructions

### Step 1: Plan Your Project

Before coding, plan your website:

1. **Choose a theme**: Portfolio, business site, blog, etc.
2. **Sketch layouts**: Draw rough layouts for each page
3. **List features**: What interactive features will you include?
4. **Gather assets**: Images, content, etc.

### Step 2: Set Up Folder Structure

Create your project folder:

```
my-website/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── (your images)
└── README.md
```

### Step 3: Create Base HTML Structure

Start with `index.html` as your template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website - Home</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <nav>
            <!-- Navigation will go here -->
        </nav>
    </header>
    
    <main>
        <!-- Page content will go here -->
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
    
    <script src="js/main.js"></script>
</body>
</html>
```

### Step 4: Build Navigation

Create consistent navigation for all pages:

**HTML** (in `<nav>`):
```html
<nav class="navbar">
    <div class="nav-container">
        <a href="index.html" class="logo">My Website</a>
        <ul class="nav-menu" id="nav-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <button class="menu-toggle" id="menu-toggle">☰</button>
    </div>
</nav>
```

### Step 5: Build Home Page

Create an engaging homepage:

```html
<main>
    <section class="hero">
        <h1>Welcome to My Website</h1>
        <p>I create amazing web experiences</p>
        <a href="projects.html" class="cta-button">View My Work</a>
    </section>
    
    <section class="features">
        <h2>What I Do</h2>
        <div class="features-grid">
            <!-- Feature cards using Flexbox -->
        </div>
    </section>
</main>
```

### Step 6: Build About Page

Create `about.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website - About</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <!-- Same navigation -->
    </header>
    
    <main>
        <section class="about-section">
            <h1>About Me</h1>
            <div class="about-content">
                <img src="images/profile.jpg" alt="Profile photo">
                <div class="about-text">
                    <p>Your bio here...</p>
                </div>
            </div>
        </section>
    </main>
    
    <footer>
        <!-- Footer -->
    </footer>
    
    <script src="js/main.js"></script>
</body>
</html>
```

### Step 7: Build Projects Page

Create `projects.html` with dynamic project list:

```html
<main>
    <section class="projects-section">
        <h1>My Projects</h1>
        <div class="projects-container" id="projects-container">
            <!-- Projects will be added dynamically with JavaScript -->
        </div>
    </section>
</main>
```

### Step 8: Build Contact Page

Create `contact.html` with form:

```html
<main>
    <section class="contact-section">
        <h1>Get In Touch</h1>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Send Message</button>
        </form>
        <div id="form-message"></div>
    </section>
</main>
```

### Step 9: Create CSS Styles

Build `css/styles.css` with:

#### Global Styles
```css
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

/* Add your theme colors */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --bg-color: #fff;
}
```

#### Navigation Styles
```css
.navbar {
    background-color: #2c3e50;
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

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: white;
    text-decoration: none;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Mobile navigation */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: #2c3e50;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        padding: 2rem 0;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .menu-toggle {
        display: block;
    }
}
```

#### Hero Section (Using Flexbox)
```css
.hero {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.cta-button {
    display: inline-block;
    padding: 12px 30px;
    background-color: white;
    color: #667eea;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 20px;
}
```

#### Features Grid (Using Flexbox)
```css
.features-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
}

.feature-card {
    flex: 1 1 300px;
    max-width: 350px;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: center;
}
```

### Step 10: Add JavaScript Interactivity

Create `js/main.js`:

#### Mobile Menu Toggle
```javascript
// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle) {
    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
}
```

#### Dark/Light Mode Toggle (Optional)
```javascript
// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        // Save preference to local storage
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark);
    });
    
    // Load saved preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
}
```

#### Dynamic Projects List (Using Arrays)
```javascript
// Projects array
const projects = [
    {
        title: "Calculator App",
        description: "A simple calculator built with HTML, CSS, and JavaScript",
        image: "images/calculator.jpg",
        link: "#"
    },
    {
        title: "Todo List",
        description: "Task management application with local storage",
        image: "images/todo.jpg",
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "Responsive portfolio website using Flexbox",
        image: "images/portfolio.jpg",
        link: "#"
    }
];

// Function to display projects
function displayProjects() {
    const container = document.getElementById("projects-container");
    
    if (!container) return;
    
    projects.forEach(function(project) {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link">View Project</a>
        `;
        
        container.appendChild(projectCard);
    });
}

// Call on page load
document.addEventListener("DOMContentLoaded", displayProjects);
```

#### Form Validation
```javascript
// Contact form validation
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const messageDiv = document.getElementById("form-message");
        
        // Validation
        if (name === "" || email === "" || message === "") {
            messageDiv.textContent = "Please fill in all fields.";
            messageDiv.style.color = "red";
            return;
        }
        
        // Email validation (simple)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red";
            return;
        }
        
        // Success message
        messageDiv.textContent = "Thank you! Your message has been sent.";
        messageDiv.style.color = "green";
        contactForm.reset();
    });
}
```

### Step 11: Add Responsive Design

Ensure all pages work on mobile:

```css
/* Responsive breakpoints */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }
    
    .features-grid {
        flex-direction: column;
    }
    
    .about-content {
        flex-direction: column;
    }
}
```

### Step 12: Create README.md

Document your project:

```markdown
# My Website

A multi-page website built as the final project for the 6-week web development bootcamp.

## Features

- Responsive design (mobile-friendly)
- Mobile navigation menu
- Dynamic project list
- Contact form with validation
- Dark mode toggle (optional)

## Technologies Used

- HTML5
- CSS3 (Flexbox)
- JavaScript (ES6+)

## File Structure

```
my-website/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
```

## How to Run

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Navigate through the pages using the navigation menu

## Author

Your Name

## License

This project is open source and available under the MIT License.
```

---

## 🎨 Design Tips

### Color Scheme

Choose a consistent color palette:
- **Primary color**: Main brand color
- **Secondary color**: Accent color
- **Background**: Light or dark theme
- **Text**: High contrast for readability

### Typography

- Use 2-3 font families max
- Ensure good readability
- Use proper heading hierarchy

### Spacing

- Consistent padding and margins
- Use whitespace effectively
- Group related content

---

## ✅ Final Checklist

Before submitting, verify:

### HTML
- [ ] All 4 pages exist and work
- [ ] Semantic HTML used throughout
- [ ] Navigation works on all pages
- [ ] All images have alt text
- [ ] Proper file structure

### CSS
- [ ] Flexbox used in at least 2 sections
- [ ] Responsive on mobile, tablet, desktop
- [ ] Consistent design across pages
- [ ] External stylesheet(s)

### JavaScript
- [ ] At least 2 interactive features implemented
- [ ] Code is organized and commented
- [ ] No console errors
- [ ] All features work correctly

### Overall
- [ ] Clean folder structure
- [ ] README.md included
- [ ] All links work
- [ ] Website is functional and polished

---

## 📤 Deliverables

Submit the following:

1. **Complete project folder** with all files
2. **README.md** explaining your project
3. **Screenshots** of your website (optional but helpful)

---

## 💡 Project Ideas

If you need inspiration:

1. **Personal Portfolio** - Showcase your work
2. **Business Website** - For a local business
3. **Blog** - Share your thoughts
4. **Restaurant Site** - Menu and information
5. **Event Website** - Conference or meetup
6. **Non-profit Site** - Cause you care about

---

## 🎓 What You'll Demonstrate

This project showcases:
- ✅ HTML structure and semantics
- ✅ CSS styling and layout (Flexbox)
- ✅ Responsive design
- ✅ JavaScript interactivity
- ✅ DOM manipulation
- ✅ Event handling
- ✅ Project organization
- ✅ Problem-solving skills

---

## 🚀 Next Steps After Submission

1. **Get feedback** - Share with peers, mentors
2. **Iterate** - Improve based on feedback
3. **Deploy** - Put it online (GitHub Pages, Netlify)
4. **Add to portfolio** - This is your first real project!
5. **Keep building** - Start your next project

**Congratulations on completing the bootcamp!** 🎉

This final project demonstrates everything you've learned. Be proud of what you've accomplished and keep coding! 💻✨

