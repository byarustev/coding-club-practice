# Lesson 3: Querying and Manipulating Data with SQL

## Extending the Student Management System API

---

## Lesson Overview

In the previous lesson, we built the foundation of our Student Management System API.

We learned how to:

- Create a Node.js application.
- Connect Node.js to SQLite.
- Create a database.
- Create a students table.
- Insert student records.
- Retrieve all students.

However, our API is still limited.

Currently, we can only:

- Add students.
- View all students.

A real application needs more functionality.

For example:

- Find a specific student.
- Search students.
- Filter students by course.
- Update student information.
- Remove students who leave the school.

In this lesson, we will add these features while learning important SQL commands.

---

## Lesson Objectives

By the end of this lesson, students should be able to:

- Understand how SQL queries retrieve specific data.
- Use the `WHERE` clause.
- Use comparison operators.
- Use logical operators (`AND`, `OR`).
- Search using `LIKE`.
- Sort data using `ORDER BY`.
- Limit results using `LIMIT`.
- Update records using `UPDATE`.
- Delete records using `DELETE`.
- Add new API endpoints using Express.

---

## Project Progress

At the end of Lesson 3, our API will support:

| Feature | Endpoint | SQL Concept |
|---------|----------|-------------|
| Get all students | `GET /students` | SELECT |
| Get one student | `GET /students/:id` | WHERE |
| Search students | `GET /students/search` | LIKE |
| Filter students | `GET /students/course/:course` | WHERE |
| Sort students | `GET /students/sort` | ORDER BY |
| Update student | `PUT /students/:id` | UPDATE |
| Delete student | `DELETE /students/:id` | DELETE |

---

## Step 1: Review Existing Database

Our database currently looks like this:

### students table

| id | name | age | course |
|----|------|-----|--------|
| 1 | Alice | 18 | JavaScript |
| 2 | Brian | 20 | Python |
| 3 | Carol | 19 | HTML |
| 4 | David | 22 | JavaScript |

---

## Part 1: Understanding WHERE

### The Problem

Imagine our school has 10,000 students.

Running:

```sql
SELECT * FROM students;
```

returns everyone.

But what if we only want:

> "Find the student with ID 3."

We need a condition.

This is where `WHERE` comes in.

### SQL WHERE Clause

Example:

```sql
SELECT * 
FROM students
WHERE id = 3;
```

Meaning:

> "Give me students where the id is equal to 3."

### Result

| id | name | age | course |
|----|------|-----|--------|
| 3 | Carol | 19 | HTML |

---

## Step 2: Create API - Get Student By ID

Open:

`routes/students.js`

Add:

```javascript
router.get("/:id",(req,res)=>{

const studentId = req.params.id;


database.get(

"SELECT * FROM students WHERE id = ?",

[studentId],

(error,row)=>{


if(error){

return res.status(500)
.json(error);

}


if(!row){

return res.status(404)
.json({
message:"Student not found"
});

}


res.json(row);


}


);


});
```

### Understanding The Code

#### Getting the ID

```javascript
req.params.id
```

From:

`GET /students/3`

The value becomes:

`3`

#### SQL Query

```sql
SELECT *
FROM students
WHERE id = ?
```

The question mark is a placeholder.

The value is provided separately:

```javascript
[studentId]
```

This prevents SQL injection attacks.

### Testing

**Request:**

`GET localhost:3000/students/2`

**Response:**

```json
{
"id":2,
"name":"Brian",
"age":20,
"course":"Python"
}
```

---

## Part 2: Filtering Data

### Example Question:

> "Show me all students studying JavaScript."

### SQL:

```sql
SELECT *
FROM students
WHERE course = 'JavaScript';
```

### Result:

| name | course |
|------|--------|
| Alice | JavaScript |
| David | JavaScript |

---

## Step 3: Create Course Filter API

Add:

```javascript
router.get("/course/:course",(req,res)=>{


const course=req.params.course;


database.all(

"SELECT * FROM students WHERE course = ?",


[course],


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

### Testing:

**GET**

`localhost:3000/students/course/Python`

**Response:**

```json
[
{
"name":"Brian",
"course":"Python"
}
]
```

---

## Part 3: Using Comparison Operators

SQL allows us to compare values.

### Greater Than

Find students older than 18:

```sql
SELECT *
FROM students
WHERE age > 18;
```

### Less Than

Find students younger than 20:

```sql
SELECT *
FROM students
WHERE age < 20;
```

### Equal

```sql
WHERE age = 18
```

### Not Equal

```sql
WHERE course != 'HTML'
```

---

## Part 4: Searching With LIKE

Sometimes we don't know the exact value.

### Example:

Search:

> "Find students whose names start with A."

### SQL:

```sql
SELECT *
FROM students
WHERE name LIKE 'A%';
```

### Meaning:

`A%`

means:

Starts with A.

### Examples:

**Matches:**

- Alice
- Andrew
- Anna

**Does not match:**

- Brian
- Carol

---

## Step 5: Add Search Endpoint

Add:

```javascript
router.get("/search",(req,res)=>{


const name=req.query.name;


database.all(

`
SELECT *
FROM students
WHERE name LIKE ?
`,

[`%${name}%`],


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

### Testing:

**GET**

`localhost:3000/students/search?name=Ali`

**Result:**

```json
[
{
"name":"Alice"
}
]
```

---

## Part 5: Sorting Data

Sometimes we need ordered results.

### Example:

Show students from youngest to oldest.

### SQL:

```sql
SELECT *
FROM students
ORDER BY age ASC;
```

### Ascending:

```
18
19
20
22
```

### Descending:

```sql
ORDER BY age DESC;
```

### Result:

```
22
20
19
18
```

---

## Step 6: Create Sorting Endpoint

Add:

```javascript
router.get("/sort",(req,res)=>{


database.all(

`
SELECT *
FROM students
ORDER BY age DESC
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

---

## Part 6: Limiting Results

Imagine a website showing only 10 students per page.

### SQL:

```sql
SELECT *
FROM students
LIMIT 2;
```

### Result:

Only two records.

---

## Part 7: Updating Data

Students sometimes change courses.

### Example:

Alice changes from HTML to JavaScript.

### SQL:

```sql
UPDATE students

SET course='JavaScript'

WHERE id=3;
```

---

## Step 8: Create Update API

Add:

```javascript
router.put("/:id",(req,res)=>{


const id=req.params.id;


const {
name,
age,
course
}=req.body;



database.run(

`
UPDATE students

SET name=?,
age=?,
course=?

WHERE id=?

`,


[
name,
age,
course,
id
],


function(error){


if(error){

return res.status(500)
.json(error);

}


res.json({
message:"Student updated"
});


}


);


});
```

### Testing:

**PUT**

`localhost:3000/students/1`

**Body:**

```json
{
"name":"Alice",
"age":19,
"course":"Python"
}
```

---

## Part 8: Deleting Data

Sometimes records need to be removed.

### Example:

Student leaves school.

### SQL:

```sql
DELETE FROM students
WHERE id=4;
```

---

## Step 9: Create Delete API

Add:

```javascript
router.delete("/:id",(req,res)=>{


const id=req.params.id;


database.run(

`
DELETE FROM students
WHERE id=?
`,

[id],


function(error){


if(error){

return res.status(500)
.json(error);

}


res.json({
message:"Student deleted"
});


}


);


});
```

---

## Complete API After Lesson 3

Your application now supports:

### Create

`POST /students`

Creates students.

### Read

`GET /students`

Gets all students.

`GET /students/:id`

Gets one student.

`GET /students/search?name=Alice`

Search students.

### Update

`PUT /students/:id`

Updates student details.

### Delete

`DELETE /students/:id`

Deletes students.

---

## Database Concepts Learned

Students now understand:

| SQL Feature | Purpose |
|-------------|---------|
| SELECT | Retrieve data |
| WHERE | Filter data |
| LIKE | Search data |
| ORDER BY | Sort results |
| LIMIT | Control results |
| UPDATE | Modify records |
| DELETE | Remove records |

---

## Practical Assignment

Extend the Student Management API.

### Task 1: Add Email Field

Modify the database:

Students should now have:

| Column | Type |
|--------|------|
| id | INTEGER |
| name | TEXT |
| email | TEXT |
| age | INTEGER |
| course | TEXT |

### Task 2: Create Email Search

Add:

`GET /students/email/:email`

Example:

`GET /students/email/alice@gmail.com`

### Task 3: Add Age Filter

Create:

`GET /students/age/:age`

Example:

`GET /students/age/18`

Returns all 18-year-old students.

### Task 4: Add Pagination

Create:

`GET /students?page=1`

Requirements:

- Return only 5 students per page.
- Use SQL `LIMIT`.
