# Week 1 Assignment: Build Your "About Me" Website

## 🎯 Assignment Overview

Create a simple, single-page "About Me" website using HTML. This is your first real project, so take your time and make it personal!

---

## ✅ Requirements Checklist

Your website must include:

- [ ] Proper HTML structure (doctype, html, head, body)
- [ ] A main heading with your name
- [ ] A short paragraph describing yourself
- [ ] An image (with proper alt text)
- [ ] A list of your hobbies (ordered or unordered)
- [ ] At least 1 link:
  - [ ] One external link (to YouTube, Google, etc.)
- [ ] At least 3 semantic HTML tags (header, main, footer, nav, section, article)

---

## 📋 Step-by-Step Instructions

### Step 1: Set Up Your Project Folder

1. Create a new folder on your computer called `about-me-website`
2. Open this folder in your text editor (VS Code recommended)
3. Create a new file called `index.html` inside this folder

### Step 2: Create the Basic HTML Structure

1. Open `index.html` in your text editor
2. Type the following basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me - Your Name</title>
</head>
<body>
    <!-- Your content will go here -->
</body>
</html>
```

3. **Save the file** (Ctrl+S or Cmd+S)

### Step 3: Add Semantic Structure

Add semantic HTML tags to organize your page:

```html
<body>
    <header>
        <!-- Navigation and main title will go here -->
    </header>
    
    <main>
        <!-- Main content will go here -->
    </main>
    
    <footer>
        <!-- Footer content will go here -->
    </footer>
</body>
```

### Step 4: Add Your Header Section

Inside the `<header>` tag, add:

1. **Your name as an `<h1>` heading**:
   ```html
   <h1>Your Name</h1>
   ```

2. **A navigation section** (optional but recommended):
   ```html
   <nav>
       <a href="#about">About</a>
       <a href="#hobbies">Hobbies</a>
       <a href="#contact">Contact</a>
   </nav>
   ```

### Step 5: Add Main Content

Inside the `<main>` tag, create sections:

#### Section 1: About Section

1. Add a section with an `id` attribute:
   ```html
   <section id="about">
       <h2>About Me</h2>
       <p>Write 2-3 sentences about yourself here. 
       What do you do? What are you passionate about? 
       What brings you to web development?</p>
   </section>
   ```

2. **Add an image**:
   - Find an image you like (or use a placeholder from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com))
   - Save it in your project folder (or use an online URL)
   - Add it to your HTML:
     ```html
     <img src="your-image.jpg" alt="Description of the image">
     ```
   - **Important**: Always include descriptive `alt` text!

#### Section 2: Hobbies Section

1. Create another section:
   ```html
   <section id="hobbies">
       <h2>My Hobbies</h2>
       <!-- List will go here -->
   </section>
   ```

2. **Add a list of your hobbies**:
   - Choose either an ordered list (`<ol>`) or unordered list (`<ul>`)
   - Add at least 3-5 hobbies:
     ```html
     <ul>
         <li>Reading</li>
         <li>Photography</li>
         <li>Hiking</li>
         <li>Cooking</li>
         <li>Gaming</li>
     </ul>
     ```

### Step 6: Add Required Links

Add your three required links. You can place them anywhere on the page:

1. **External link** (to another website):
   ```html
   <p>Check out my favorite website: 
   <a href="https://www.youtube.com" target="_blank">YouTube</a></p>
   ```
   - `target="_blank"` opens the link in a new tab (optional but nice!)

### Step 7: Add Footer

Inside the `<footer>` tag, add:

```html
<footer>
    <p>&copy; 2025 Your Name. All rights reserved.</p>
    <p>Built with HTML during Week 1 of Bootcamp</p>
</footer>
```

### Step 8: Review Your Code

Check that you have:

- ✅ Proper indentation (nested elements are indented)
- ✅ All tags are properly closed
- ✅ All required elements are present
- ✅ Semantic HTML tags are used
- ✅ Alt text on images
- ✅ All three types of links

### Step 9: Test Your Website

1. **Open your HTML file**:
   - Double-click `index.html` in your file explorer, OR
   - Right-click the file → "Open with" → Choose your browser

2. **Test your links**:
   - Click the external link (should open in a new tab)

3. **Check the structure**:
   - Make sure everything displays correctly
   - Verify all text is readable
   - Ensure the image loads

---

## 📝 Example Structure (Reference Only)

Here's a complete example structure. **Don't copy this directly** - make it your own!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me - Jane Doe</title>
</head>
<body>
    <header>
        <h1>Jane Doe</h1>
        <nav>
            <a href="#about">About</a>
            <a href="#hobbies">Hobbies</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    
    <main>
        <section id="about">
            <h2>About Me</h2>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                 alt="Profile photo of Jane Doe" 
                 width="300">
            <p>Hi! I'm Jane, a passionate web developer in training. 
            I love creating beautiful and functional websites that 
            make a difference. When I'm not coding, you can find me 
            exploring new technologies or working on personal projects.</p>
            
            <p>Visit my favorite learning resource: 
            <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a></p>
        </section>
        
        <section id="hobbies">
            <h2>My Hobbies</h2>
            <ul>
                <li>Web Development</li>
                <li>Photography</li>
                <li>Reading Tech Blogs</li>
                <li>Hiking</li>
                <li>Playing Guitar</li>
            </ul>
        </section>
        
        <section id="contact">
            <h2>Get in Touch</h2>
            <p>Feel free to reach out: 
            <a href="mailto:jane.doe@example.com">jane.doe@example.com</a></p>
            <p><a href="#hobbies">View My Hobbies</a></p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Jane Doe. Built with HTML.</p>
    </footer>
</body>
</html>
```

---

## 🎨 Making It Personal

**Don't just follow the example!** Make this website truly yours:

- Write authentic content about yourself
- Choose images that represent you
- Pick hobbies you actually have
- Use your real email (or a test one)
- Add your own personality to the content

---

## ✅ Submission Checklist

Before submitting, verify:

- [ ] File is named `index.html`
- [ ] All HTML tags are properly closed
- [ ] Code is properly indented
- [ ] All required elements are present:
  - [ ] HTML structure (doctype, html, head, body)
  - [ ] Main heading with your name
  - [ ] Paragraph describing you
  - [ ] Image with alt text
  - [ ] List of hobbies
  - [ ] External link
  - [ ] Email link (mailto:)
  - [ ] Anchor link
  - [ ] At least 3 semantic tags
- [ ] Website opens correctly in a browser
- [ ] All links work properly

---

## 📤 Deliverables

Submit the following:

1. **`index.html`** file
2. **Screenshot** of your website in a browser (optional but helpful)

---

## 💡 Tips & Troubleshooting

### Common Issues

**Problem**: Image doesn't show
- **Solution**: Check the file path. If the image is in the same folder, use `src="image.jpg"`. If it's in a subfolder, use `src="images/image.jpg"`.

**Problem**: Links don't work
- **Solution**: 
  - External links need `https://`
  - Email links need `mailto:`
  - Anchor links need `#` and a matching `id` on the target element

**Problem**: Page looks plain/unstyled
- **Solution**: That's normal! We'll add CSS in Week 2. For now, focus on structure.

### Pro Tips

- Use comments in your HTML to organize sections:
  ```html
  <!-- About Section -->
  <section id="about">
  ```

- Test in multiple browsers (Chrome, Firefox, Safari)
- Ask for help if you're stuck - there are no stupid questions!

---

## 🎓 What You'll Learn

By completing this assignment, you'll practice:
- Creating a proper HTML document structure
- Using semantic HTML tags
- Adding images and links
- Organizing content with lists
- Writing clean, readable code

**Good luck, and have fun building your first website!** 🚀

