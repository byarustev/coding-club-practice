# Lesson 5: Building a Professional Backend Structure

## Improving the Student Management System API

---

## Lesson Overview

Up to this point, we have built a working Student Management System API.

Our application can now:

- ✅ Store data in SQLite
- ✅ Create tables
- ✅ Create relationships between tables
- ✅ Add students
- ✅ Add courses
- ✅ Retrieve related data using JOIN
- ✅ Update and delete records

However, our code structure is starting to become difficult to maintain.

Currently, our route files contain:

- API routes
- SQL queries
- Database logic
- Business logic

This works for a small project, but real applications separate these responsibilities.

---

## The Problem With Our Current Structure

Currently:

```
student-management-api

├── app.js
│
├── routes
│   └── students.js
│
└── database
    └── database.js
```

Inside `students.js` we have:

```javascript
router.get("/students",(req,res)=>{

    database.all(
       "SELECT * FROM students"
    )

})
```

The route knows:

- How the API works.
- How the database works.
- How SQL queries work.

This creates tightly coupled code.

---

## Professional Backend Structure

A professional Node.js backend separates responsibilities.

Our new structure:

```
student-management-api

│
├── src
│
│   ├── controllers
│   │       studentsController.js
│   │
│   ├── routes
│   │       studentsRoutes.js
│   │
│   ├── services
│   │       studentsService.js
│   │
│   ├── database
│   │       database.js
│   │
│   ├── models
│   │       studentModel.js
│   │
│   └── app.js
│
├── package.json
└── .env
```

---

## Understanding Each Folder

### Routes

Responsible for:

> "What URLs exist?"

Example:

- `GET /students`
- `POST /students`

Routes do not contain database code.

### Controllers

Responsible for:

> "What happens when an API is called?"

Example:

```
Receive request

↓

Call service

↓

Return response
```

### Services

Responsible for:

> "Business logic"

Example:

- Get students
- Create student
- Calculate something

### Models

Responsible for:

> "Database communication"

Example:

- SELECT students
- INSERT students
- UPDATE students

### Database

Responsible for:

> "Connecting to the database"

---

## New Application Flow

### Previously:

```
Request

↓

Route

↓

Database

↓

Response
```

### Professional approach:

```
Request

↓

Route

↓

Controller

↓

Service

↓

Model

↓

Database

↓

Response
```

---

## Step 1: Create New Folder Structure

Inside your project:

`src`

Create:

```
src

├── controllers
├── routes
├── services
├── models
├── database
```

---

## Step 2: Move Database Connection

Move:

`database/database.js`

to:

`src/database/database.js`

Your database connection remains:

```javascript
const sqlite3 = require("sqlite3")
.verbose();


const database =
new sqlite3.Database(
"./database/school.db"
);


module.exports = database;
```

---

## Step 3: Create Student Model

Create:

`src/models/studentModel.js`

This file communicates directly with SQL.

Add:

```javascript
const database =
require("../database/database");


const getStudents = (callback)=>{


database.all(

"SELECT * FROM students",

[],

callback

);


};


module.exports={
getStudents
};
```

### Understanding Models

The model only knows:

> "How do I get students from the database?"

It does not know anything about:

- HTTP
- URLs
- Responses

---

## Step 4: Create Student Service

Create:

`src/services/studentService.js`

Add:

```javascript
const studentModel =
require("../models/studentModel");


const getAllStudents = (callback)=>{


studentModel.getStudents(

callback

);


};


module.exports={
getAllStudents
};
```

### Why Do We Need Services?

Currently it looks unnecessary.

But imagine later:

When getting students, we need:

- Check permissions.
- Calculate grades.
- Add extra information.
- Apply business rules.

We put that logic here.

---

## Step 5: Create Student Controller

Create:

`src/controllers/studentController.js`

Add:

```javascript
const studentService =
require("../services/studentService");


const getStudents=(req,res)=>{


studentService.getAllStudents(

(error,students)=>{


if(error){

return res.status(500)
.json(error);

}


res.json(students);


}

);


};


module.exports={
getStudents
};
```

---

## Step 6: Create Student Routes

Create:

`src/routes/studentRoutes.js`

Add:

```javascript
const express=require("express");

const router=express.Router();


const controller =
require("../controllers/studentController");



router.get(
"/",
controller.getStudents
);



module.exports=router;
```

---

## Step 7: Update app.js

Create:

`src/app.js`

Add:

```javascript
const express=require("express");


const studentRoutes =
require("./routes/studentRoutes");


const app=express();


app.use(express.json());


app.use(
"/students",
studentRoutes
);



app.listen(3000,()=>{

console.log(
"Server running"
);

});
```

---

## Testing The New Structure

Run:

```bash
node src/app.js
```

### Test:

**GET**

`localhost:3000/students`

**Response:**

```json
[
{
"id":1,
"name":"Alice",
"age":18
}
]
```

---

## Step 8: Adding Environment Variables

Currently:

```javascript
app.listen(3000)
```

The port is hard-coded.

Professional applications store configuration separately.

### Install:

```bash
npm install dotenv
```

### Create:

`.env`

Add:

```
PORT=3000
DATABASE=school.db
```

### Update app.js:

```javascript
require("dotenv")
.config();


const PORT =
process.env.PORT;


app.listen(PORT,()=>{

console.log(
`Server running on ${PORT}`
);

});
```

### Why Use Environment Variables?

Different environments need different settings.

#### Example:

**Development:**

```
PORT=3000
DATABASE=school.db
```

**Production:**

```
PORT=8080
DATABASE=production.db
```

We do not change code.

---

## Step 9: Add Request Validation

Currently, someone can send:

```json
{
"name":"",
"age":"hello"
}
```

This creates bad data.

We need validation.

### Install:

```bash
npm install express-validator
```

### Example:

```javascript
const {
body
}=require("express-validator");


body("name")
.notEmpty()
.withMessage(
"Name is required"
)
```

### Why Validation Matters

**Without validation:**

```
Database

Alice
123
NULL
!!!!
```

**With validation:**

```
Database

Alice
Brian
Carol
```

Clean data.

---

## Step 10: Error Handling

Instead of repeating:

```javascript
if(error){

res.status(500)
.json(error)

}
```

everywhere,

we create one error handler.

### Create:

`src/middleware/errorHandler.js`

### Example:

```javascript
const errorHandler =
(error,req,res,next)=>{


console.log(error);


res.status(500)
.json({

message:
"Something went wrong"

});


};


module.exports=
errorHandler;
```

### Add To app.js

```javascript
app.use(errorHandler);
```

---

## Final Project Structure

After this lesson:

```
student-management-api

│
├── src
│
│   ├── controllers
│   │    └── studentController.js
│   │
│   ├── services
│   │    └── studentService.js
│   │
│   ├── models
│   │    └── studentModel.js
│   │
│   ├── routes
│   │    └── studentRoutes.js
│   │
│   ├── database
│   │    └── database.js
│   │
│   └── app.js
│
├── .env
├── package.json
```

---

## Comparing Beginner vs Professional Code

### Beginner

```
Route

 |
 |
SQL

 |
 |
Database
```

### Professional

```
Route

 |
Controller

 |
Service

 |
Model

 |
Database
```

---

## Assignment

Refactor the existing Student Management API.

### Task 1

Move all student SQL queries into:

`models/studentModel.js`

### Task 2

Move business logic into:

`services/studentService.js`

### Task 3

Create controllers for:

- students
- courses
- teachers

### Task 4

Add validation:

Students must have:

- Name
- Age
- Course

### Task 5

Add environment variables:

- `PORT`
- `DATABASE_NAME`
