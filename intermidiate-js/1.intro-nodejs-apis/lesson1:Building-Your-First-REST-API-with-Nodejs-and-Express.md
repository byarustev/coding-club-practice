# Lesson: Building Your First REST API with Node.js and Express

## Learning Objectives

By the end of this lesson students will be able to:

- Understand what a REST API is
- Understand HTTP requests and responses
- Create an Express server
- Create API routes
- Store data using JavaScript arrays
- Perform CRUD operations
- Test APIs using Postman or Thunder Client

---

## Before You Start: Install Node.js

Before building the API, students need **Node.js** installed on their computer.

Node.js lets you run JavaScript outside the browser. It also includes **npm**, which we use to install Express.

### Check if Node.js is already installed

Open a terminal (Mac) or Command Prompt / PowerShell (Windows) and run:

```bash
node -v
```

```bash
npm -v
```

If both commands print a version number (for example `v20.11.0`), Node.js is already installed and you can skip to the next section.

---

### Install Node.js on Windows

1. Go to the official website: [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (recommended for beginners).
3. Open the downloaded `.msi` installer.
4. Click **Next** through the setup screens.
5. Leave the default options selected (including npm).
6. Finish the installation.
7. Close and reopen your terminal.
8. Verify the install:

```bash
node -v
npm -v
```

---

### Install Node.js on Mac

**Option 1: Official installer (easiest)**

1. Go to the official website: [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version for macOS.
3. Open the downloaded `.pkg` file.
4. Follow the installer steps.
5. Close and reopen Terminal.
6. Verify the install:

```bash
node -v
npm -v
```

**Option 2: Homebrew (if already installed)**

```bash
brew install node
```

Then verify:

```bash
node -v
npm -v
```

---

### What you need for this lesson

- Node.js (LTS)
- npm (comes with Node.js)
- A code editor (VS Code or Cursor)
- A terminal
- Postman or Thunder Client (for testing the API later)

---

## What is an API?

API stands for

**Application Programming Interface**

Think of an API as a waiter in a restaurant.

```
Customer
    │
    │ Request
    ▼
 Waiter (API)
    │
    │
Kitchen (Application)
    │
    ▼
 Response
```

The customer never enters the kitchen.

Instead they ask the waiter.

The waiter brings back the response.

Exactly the same happens with software.

```
Browser

↓

API

↓

Server

↓

Response
```

---

## What is REST?

REST stands for

**Representational State Transfer**

It is simply a standard way for applications to communicate over HTTP.

A REST API exposes resources.

Example resources

- Users
- Products
- Books
- Students
- Courses

Each resource has its own URL.

Example

- `/users`
- `/products`
- `/books`

---

## HTTP Methods

REST APIs mainly use four methods.

| Method | Purpose |
|--------|---------|
| GET | Read data |
| POST | Create data |
| PUT | Update data |
| DELETE | Remove data |

### Example

**GET `/students`**

Return all students

**POST `/students`**

Create a new student

**PUT `/students/2`**

Update student 2

**DELETE `/students/2`**

Delete student 2

---

## Project Overview

We are building a simple Student API.

Each student has

- `id`
- `name`
- `course`
- `age`

Instead of using a database we will store everything inside an array.

---

## Step 1: Create the Project

Create a folder

`student-api`

Open the terminal

```bash
mkdir student-api

cd student-api
```

Initialize Node

```bash
npm init -y
```

---

## Step 2: Install Express

```bash
npm install express
```

---

## Step 3: Project Structure

```
student-api

│

├── app.js

├── package.json
```

---

## Step 4: Create the Express Server

Inside `app.js`

```javascript
const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

Run

```bash
node app.js
```

Expected output

```
Server running on port 3000
```

---

## Step 5: Parse JSON

When someone sends JSON, Express needs to understand it.

Add

```javascript
app.use(express.json());
```

Your file becomes

```javascript
const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

## Step 6: Our "Database"

Instead of MongoDB we create an array.

```javascript
let students = [
    {
        id: 1,
        name: "Alice",
        course: "Web Development",
        age: 20
    },
    {
        id: 2,
        name: "John",
        course: "Python",
        age: 21
    }
];
```

This array acts like a tiny database.

---

## Understanding CRUD

CRUD means

- **Create**
- **Read**
- **Update**
- **Delete**

These are the four basic operations every API performs.

---

## CREATE (POST)

Add a new student.

### Route

`POST /students`

### Code

```javascript
app.post("/students", (req, res) => {

    const student = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course,
        age: req.body.age
    };

    students.push(student);

    res.status(201).json(student);

});
```

### Test using Postman

**POST**

`http://localhost:3000/students`

**Body**

```json
{
    "name":"Peter",
    "course":"JavaScript",
    "age":23
}
```

**Expected response**

```json
{
    "id":3,
    "name":"Peter",
    "course":"JavaScript",
    "age":23
}
```

---

## READ (GET All)

Return all students.

### Route

`GET /students`

```javascript
app.get("/students", (req, res) => {

    res.json(students);

});
```

### Response

```json
[
   ...
]
```

---

## READ (GET One)

Return one student.

### Route

`GET /students/:id`

```javascript
app.get("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);

});
```

---

## UPDATE (PUT)

Replace a student.

`PUT /students/:id`

```javascript
app.put("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.course = req.body.course;
    student.age = req.body.age;

    res.json(student);

});
```

### Request Body

```json
{
    "name":"Peter Smith",
    "course":"Node.js",
    "age":24
}
```

---

## DELETE

### Route

`DELETE /students/:id`

```javascript
app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    students = students.filter(student => student.id !== id);

    res.json({
        message: "Student deleted"
    });

});
```

---

## Final app.js

At this stage, students will have a complete Express application containing:

- Express setup
- JSON middleware
- An in-memory students array
- `GET /students`
- `GET /students/:id`
- `POST /students`
- `PUT /students/:id`
- `DELETE /students/:id`

This demonstrates a full REST API without introducing databases.

---

## Testing the API

Students should test each endpoint in order:

| Step | Method | URL | Expected Result |
|------|--------|-----|-----------------|
| 1 | GET | `/students` | Returns all students |
| 2 | POST | `/students` | Adds a student |
| 3 | GET | `/students` | New student appears |
| 4 | GET | `/students/3` | Returns one student |
| 5 | PUT | `/students/3` | Updates the student |
| 6 | DELETE | `/students/3` | Removes the student |
| 7 | GET | `/students` | Student is gone |

---

## Common HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Internal Server Error |

Explain that status codes help clients understand the outcome of a request without inspecting the response body.

---

## Best Practices

- Use plural resource names (`/students` instead of `/student`).
- Return JSON responses consistently.
- Validate request data before saving it.
- Use appropriate HTTP status codes.
- Keep route handlers focused on a single responsibility.

---

## Challenge Exercises

### Warm-up Challenges

These build on the Student API you already created.

1. Add an `email` field to each student.
2. Add a `GET /students/course/:course` endpoint to filter students by course.
3. Return a `400 Bad Request` if `name`, `course`, or `age` is missing in a POST request.
4. Add a `PATCH /students/:id` endpoint that updates only the fields provided in the request body.
5. Implement simple pagination using query parameters, for example `GET /students?page=1&limit=5`

---

### Main Challenge: Build a Courses API

Using the same pattern as the Student API, create a full CRUD API for a new entity: **Course**.

This challenge checks whether students can apply everything they learned to a different resource without copying blindly.

#### Course shape

Each course should have:

- `id`
- `title`
- `instructor`
- `duration` (for example, number of weeks)
- `level` (for example, `"Beginner"`, `"Intermediate"`, or `"Advanced"`)

#### Starter data

Create an in-memory array, for example:

```javascript
let courses = [
    {
        id: 1,
        title: "Web Development",
        instructor: "Alice",
        duration: 8,
        level: "Beginner"
    },
    {
        id: 2,
        title: "Node.js APIs",
        instructor: "John",
        duration: 6,
        level: "Intermediate"
    }
];
```

#### Endpoints to implement

Build all of the following routes in the same `app.js` file (alongside the students routes):

| Method | Route | What it should do |
|--------|-------|-------------------|
| GET | `/courses` | Return all courses |
| GET | `/courses/:id` | Return one course by id |
| POST | `/courses` | Create a new course |
| PUT | `/courses/:id` | Replace an existing course |
| DELETE | `/courses/:id` | Delete a course |

#### Requirements

For each endpoint, follow the same habits used in the Student API:

- Use `express.json()` so POST and PUT can read JSON bodies.
- Return `201` when a course is created.
- Return `404` with a clear message when a course is not found.
- Return JSON responses consistently.
- Test every endpoint in Postman or Thunder Client.

#### Suggested request body for POST / PUT

```json
{
    "title": "Python Basics",
    "instructor": "Peter",
    "duration": 5,
    "level": "Beginner"
}
```

#### Testing checklist

| Step | Method | URL | Expected Result |
|------|--------|-----|-----------------|
| 1 | GET | `/courses` | Returns all courses |
| 2 | POST | `/courses` | Adds a course |
| 3 | GET | `/courses` | New course appears |
| 4 | GET | `/courses/3` | Returns one course |
| 5 | PUT | `/courses/3` | Updates the course |
| 6 | DELETE | `/courses/3` | Removes the course |
| 7 | GET | `/courses` | Course is gone |

#### Stretch goals (optional)

After the basic Courses CRUD works, try one or more of these:

1. Return `400 Bad Request` if `title`, `instructor`, `duration`, or `level` is missing on POST.
2. Add `GET /courses/level/:level` to filter courses by level.
3. Add `PATCH /courses/:id` that updates only the fields sent in the request body.
4. Link the two resources: add a `courseId` field to students, then return the matching course details when fetching a student.
5. Keep both `/students` and `/courses` working in the same server without breaking either one.

#### Done when

Students can confidently say:

- I can create a new resource endpoint from scratch.
- I understand how GET, POST, PUT, and DELETE map to CRUD.
- I can reuse the Student API pattern for any new entity.
