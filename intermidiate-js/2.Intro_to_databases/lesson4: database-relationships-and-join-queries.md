# Lesson 4: Database Relationships and JOIN Queries

## Extending the Student Management System

---

## Lesson Overview

So far, our Student Management System has only one database table:

`students`

Currently, our table stores:

| id | name | age | course |
|----|------|-----|--------|
| 1 | Alice | 18 | JavaScript |
| 2 | Brian | 20 | Python |
| 3 | Carol | 19 | HTML |

This works, but there is a problem.

---

## The Problem With Our Current Design

Imagine we have 5,000 students.

Our table might look like this:

| id | name | age | course |
|----|------|-----|--------|
| 1 | Alice | 18 | JavaScript |
| 2 | Brian | 20 | Python |
| 3 | Carol | 19 | JavaScript |
| 4 | David | 22 | Python |
| 5 | Eva | 18 | JavaScript |

Notice something?

The course names are repeated many times.

```
JavaScript
Python
JavaScript
Python
JavaScript
```

This creates problems.

### Database Design Problem: Data Duplication

Imagine the school changes the course name:

From:

`JavaScript`

To:

`Full Stack JavaScript Development`

We would need to update thousands of student records.

This is inefficient.

---

## Solution: Separate Data Into Tables

Instead of storing everything in one table, we create separate tables.

Our database becomes:

```
school.db


students table

id | name | age | course_id


courses table

id | course_name
```

---

## Understanding Relationships

A database relationship describes how tables connect to each other.

Example:

- A student belongs to a course.
- A course has many students.

### Relationship:

```
One Course
     |
     |
     |
 Many Students
```

This is called:

**One-to-Many Relationship**

---

## Real-World Examples

### School

One teacher teaches many students.

```
Teacher

   |
   |
Students
```

### Company

One department has many employees.

```
Department

     |
     |
Employees
```

### Online Store

One customer has many orders.

```
Customer

    |
    |
Orders
```

---

## Lesson Objectives

By the end of this lesson, students should understand:

- Why databases use multiple tables.
- What primary keys are.
- What foreign keys are.
- How tables are connected.
- How to create relationships.
- How to retrieve related data using `JOIN`.
- How to update our Node.js API to use relationships.

---

## Step 1: Redesign Our Database

Our new design:

```
DATABASE

school.db


        courses

        id
        name



        students

        id
        name
        age
        course_id
```

### Understanding Primary Keys

A **primary key** uniquely identifies a record.

Example:

Courses table:

| id | name |
|----|------|
| 1 | JavaScript |
| 2 | Python |
| 3 | HTML |

The `id` column identifies each course.

### Understanding Foreign Keys

A **foreign key** connects two tables.

Example:

Students table:

| id | name | course_id |
|----|------|-----------|
| 1 | Alice | 1 |
| 2 | Brian | 2 |
| 3 | Carol | 1 |

The value:

`course_id = 1`

means:

> "This student belongs to the course with ID 1."

### Visual Explanation

**Courses:**

```
ID     NAME

1   JavaScript
2   Python
3   HTML
```

**Students:**

```
ID    NAME     COURSE_ID

1    Alice        1
2    Brian        2
3    Carol        1
```

**Connection:**

```
JavaScript
     |
     |
 Alice
 Carol
```

---

## Step 2: Update Database Configuration

Open:

`database/database.js`

Replace the table creation code.

### Create Courses Table

```javascript
database.run(`

CREATE TABLE IF NOT EXISTS courses(

id INTEGER PRIMARY KEY AUTOINCREMENT,

name TEXT NOT NULL

)

`);
```

### Create Students Table

```javascript
database.run(`

CREATE TABLE IF NOT EXISTS students(

id INTEGER PRIMARY KEY AUTOINCREMENT,

name TEXT NOT NULL,

age INTEGER,

course_id INTEGER,

FOREIGN KEY(course_id)
REFERENCES courses(id)

)

`);
```

### Understanding FOREIGN KEY

This line:

```sql
FOREIGN KEY(course_id)
REFERENCES courses(id)
```

means:

> "The value in `students.course_id` must exist inside `courses.id`."

#### Example:

**Allowed:**

Courses:

| id | name |
|----|------|
| 1 | JavaScript |

Students:

| name | course_id |
|------|-----------|
| Alice | 1 |

**Not allowed:**

Students:

| name | course_id |
|------|-----------|
| John | 99 |

Because course 99 does not exist.

---

## Step 3: Insert Courses

Before adding students, we need courses.

Add:

```sql
INSERT INTO courses(name)

VALUES

('JavaScript'),

('Python'),

('HTML');
```

### Database:

Courses:

| id | name |
|----|------|
| 1 | JavaScript |
| 2 | Python |
| 3 | HTML |

---

## Step 4: Insert Students

Now students reference courses.

### Example:

```sql
INSERT INTO students
(name,age,course_id)

VALUES

('Alice',18,1),

('Brian',20,2),

('Carol',19,1);
```

### Result:

Students:

| id | name | age | course_id |
|----|------|-----|-----------|
| 1 | Alice | 18 | 1 |
| 2 | Brian | 20 | 2 |
| 3 | Carol | 19 | 1 |

---

## Step 5: Understanding JOIN

Now we have two tables.

If we run:

```sql
SELECT *
FROM students;
```

We get:

| name | course_id |
|------|-----------|
| Alice | 1 |
| Brian | 2 |

But users don't understand IDs.

They want:

| Student | Course |
|---------|--------|
| Alice | JavaScript |
| Brian | Python |

We need `JOIN`.

### INNER JOIN

SQL:

```sql
SELECT 

students.name,

courses.name

FROM students

INNER JOIN courses

ON students.course_id = courses.id;
```

### Result:

| Student | Course |
|---------|--------|
| Alice | JavaScript |
| Brian | Python |
| Carol | JavaScript |

### Breaking Down JOIN

#### FROM

Start from:

`students`

#### JOIN

Connect:

`courses`

#### ON

Explain the connection:

```sql
students.course_id = courses.id
```

Meaning:

> "Match students with their courses."

---

## Step 6: Create Course API

Create:

`routes/courses.js`

Add:

```javascript
const express=require("express");

const router=express.Router();

const database=require("../database/database");


router.get("/",(req,res)=>{


database.all(

"SELECT * FROM courses",

[],

(error,rows)=>{


if(error){

return res.status(500)
.json(error);

}


res.json(rows);


}


);


});


module.exports=router;
```

### Connect Route

Open:

`app.js`

Add:

```javascript
const courseRoutes =
require("./routes/courses");


app.use("/courses",courseRoutes);
```

### Test:

**GET**

`localhost:3000/courses`

**Response:**

```json
[
{
"id":1,
"name":"JavaScript"
}
]
```

---

## Step 7: Get Students With Their Courses

Update:

`routes/students.js`

Add:

```javascript
router.get("/details",(req,res)=>{


database.all(

`

SELECT

students.id,

students.name,

students.age,

courses.name AS course


FROM students


INNER JOIN courses


ON students.course_id = courses.id


`,

[],


(error,rows)=>{


if(error){

return res.status(500)
.json(error);

}


res.json(rows);


}


);


});
```

### Test:

**GET**

`localhost:3000/students/details`

**Response:**

```json
[
{
"id":1,
"name":"Alice",
"age":18,
"course":"JavaScript"
},

{
"id":2,
"name":"Brian",
"age":20,
"course":"Python"
}
]
```

---

## Step 8: Creating Students With Courses

Previously:

```json
{
"name":"Alice",
"age":18,
"course":"JavaScript"
}
```

Now:

```json
{
"name":"Alice",
"age":18,
"course_id":1
}
```

### Why?

Because the course already exists.

---

## Step 9: API Design Improvement

Our API now looks like a real application.

### Courses

**Create:**

`POST /courses`

**Get:**

`GET /courses`

### Students

**Create:**

`POST /students`

**Get:**

`GET /students`

**Get detailed information:**

`GET /students/details`

---

## Database Before vs After

### Before

```
students

id
name
age
course
```

**Problem:**

- Duplicate data.
- Hard to update.
- Poor design.

### After

```
courses

id
name


students

id
name
age
course_id
```

**Benefits:**

- Less duplication.
- Easier updates.
- Better organization.
- Scales better.

---

## Assignment

Extend the Student Management System.

### Task 1: Add Teachers

Create:

`teachers` table

Columns:

| Column | Type |
|--------|------|
| id | INTEGER PRIMARY KEY |
| name | TEXT |
| email | TEXT |

### Task 2: Connect Teachers To Courses

Update courses:

```
courses

id
name
teacher_id
```

Relationship:

```
Teacher

    |
    |
 Courses

    |
    |
Students
```

### Task 3: Create API

Create:

`GET /courses/details`

Expected response:

```json
[
{
"course":"JavaScript",
"teacher":"John",
"students":20
}
]
```
