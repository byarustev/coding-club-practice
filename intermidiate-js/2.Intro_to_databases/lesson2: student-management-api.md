# Lesson 2 Project: Student Management System

## Project Overview

We are going to build a simple REST API that manages students.

The application will allow us to:

- Add students.
- View all students.
- Store student information permanently in a database.

By the end of this project, students will understand how a real application stores and retrieves data.

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime |
| Express.js | Creating APIs |
| SQLite | Database |
| sqlite3 | Connecting Node.js to SQLite |
| Postman | Testing APIs |

---

## Project Architecture

At the end, our application will look like this:

```
Student Management System

                 User
                  |
                  |
              Postman
                  |
                  |
             Express API
                  |
                  |
             SQLite Database
                  |
                  |
           students table
```

---

## Step 1: Create the Project Folder

Create a folder:

```bash
mkdir student-management-api
```

Move into the folder:

```bash
cd student-management-api
```

---

## Step 2: Initialize Node.js Project

Run:

```bash
npm init -y
```

This creates:

```
student-management-api

package.json
```

The `package.json` file keeps information about our application and its dependencies.

### Example

```json
{
  "name": "student-management-api",
  "version": "1.0.0"
}
```

---

## Step 3: Install Required Packages

Install Express:

```bash
npm install express
```

Install SQLite:

```bash
npm install sqlite3
```

Install Nodemon (development tool):

```bash
npm install nodemon --save-dev
```

Your `package.json` should now contain:

```json
{
  "dependencies": {
    "express": "^5.0.0",
    "sqlite3": "^5.0.0"
  }
}
```

---

## Step 4: Create Project Structure

Create the following folders:

```
student-management-api

│
├── database
│   └── database.js
│
├── routes
│   └── students.js
│
├── app.js
│
├── package.json
└── package-lock.json
```

### Explanation

| File | Purpose |
|------|---------|
| `app.js` | Starts the server |
| `database.js` | Handles database connection |
| `students.js` | Student API routes |
| `database` folder | Stores database files |

---

## Step 5: Configure SQLite Database

Create:

`database/database.js`

Add:

```javascript
const sqlite3 = require("sqlite3").verbose();


const database = new sqlite3.Database(
    "./database/school.db",
    (error)=>{
        if(error){
            console.log(error.message);
        }
        else{
            console.log("Connected to SQLite database");
        }
    }
);


module.exports = database;
```

### Understanding This Code

**`const sqlite3 = require("sqlite3")`**

Imports SQLite functionality.

**`new sqlite3.Database()`**

Creates or opens a database.

**`"./database/school.db"`**

The database file location.

After running the application, SQLite will create:

```
database

└── school.db
```

---

## Step 6: Create the Students Table

Update:

`database/database.js`

Add:

```javascript
database.run(`
CREATE TABLE IF NOT EXISTS students (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    name TEXT NOT NULL,

    age INTEGER,

    course TEXT

)
`);
```

Now our database contains:

```
school.db

students table

--------------------------------
id | name | age | course
--------------------------------
```

### Understanding the Table

**`id INTEGER PRIMARY KEY AUTOINCREMENT`**

Creates a unique ID automatically.

Example:

| id | name |
|----|------|
| 1 | Alice |
| 2 | Brian |

**`name TEXT NOT NULL`**

Means:

- Stores text.
- Name cannot be empty.

**`age INTEGER`**

Stores numbers.

**`course TEXT`**

Stores course names.

---

## Step 7: Create Express Server

Create:

`app.js`

Add:

```javascript
const express = require("express");

const database = require("./database/database");


const app = express();


app.use(express.json());


app.get("/",(req,res)=>{

    res.json({
        message:"Student API Running"
    });

});


app.listen(3000,()=>{

    console.log("Server running on port 3000");

});
```

---

## Step 8: Run The Application

Inside terminal:

```bash
node app.js
```

Expected output:

```
Connected to SQLite database

Server running on port 3000
```

Open:

`http://localhost:3000`

You should see:

```json
{
 "message":"Student API Running"
}
```

---

## Step 9: Create Student API Routes

Create:

`routes/students.js`

Add:

```javascript
const express = require("express");

const router = express.Router();

const database = require("../database/database");



router.get("/",(req,res)=>{


database.all(
"SELECT * FROM students",

[],
(error,rows)=>{

if(error){

return res.status(500)
.json(error);

}


res.json(rows);


});


});


module.exports = router;
```

---

## Step 10: Connect Routes

Update:

`app.js`

Add:

```javascript
const studentRoutes =
require("./routes/students");


app.use("/students",studentRoutes);
```

Now:

**GET**

`http://localhost:3000/students`

will return students.

---

## Step 11: Add Students

Add this route:

Inside:

`routes/students.js`

Add:

```javascript
router.post("/",(req,res)=>{


const {
name,
age,
course
}=req.body;



database.run(

`
INSERT INTO students
(name,age,course)

VALUES (?,?,?)
`,

[
name,
age,
course
],


function(error){


if(error){

return res.status(500)
.json(error);

}


res.json({

message:"Student added",
id:this.lastID

});


}


);


});
```

---

## Step 12: Test Using Postman

### Create Student

**Request:**

`POST`

`http://localhost:3000/students`

**Body:**

```json
{
"name":"Alice",
"age":18,
"course":"JavaScript"
}
```

**Response:**

```json
{
"message":"Student added",
"id":1
}
```

### Get Students

**Request:**

`GET`

`http://localhost:3000/students`

**Response:**

```json
[
{
"id":1,
"name":"Alice",
"age":18,
"course":"JavaScript"
}
]
```

---

## Step 13: Understanding The Complete Flow

When we send:

`POST /students`

The request travels:

```
Postman

   |
   |
Express Route

   |
   |
SQL INSERT QUERY

   |
   |
SQLite Database

   |
   |
Student Saved
```

---

## Final Project Structure

```
student-management-api

│
├── database
│   |
│   ├── database.js
│   └── school.db
│
├── routes
│   |
│   └── students.js
│
├── app.js
│
├── package.json
```

---

## Student Assignment

Extend the project by adding:

### Feature 1: Find Student By ID

Create:

`GET /students/:id`

Example:

`GET /students/2`

Returns:

```json
{
"id":2,
"name":"Brian",
"age":20
}
```

### Feature 2: Delete Student

Create:

`DELETE /students/:id`

### Feature 3: Update Student

Create:

`PUT /students/:id`

Allow changing:

- Name
- Age
- Course
