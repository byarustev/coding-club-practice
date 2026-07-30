# Lesson 6: Introduction to ORM with Sequelize

## Rebuilding the Student Management System Using Sequelize

---

## Lesson Overview

In the previous lessons, we interacted with our database by writing SQL queries manually.

Example:

```sql
SELECT *
FROM students
WHERE id = 1;
```

This approach works, but as applications become larger, writing SQL everywhere can become difficult to maintain.

Professional applications often use a tool called an **ORM**.

In this lesson, we will introduce **Sequelize**, an ORM for Node.js.

We will rebuild parts of our Student Management System using Sequelize.

---

## Lesson Objectives

By the end of this lesson, students should understand:

- What an ORM is.
- Why developers use ORMs.
- The difference between raw SQL and ORM queries.
- How to install Sequelize.
- How to connect Sequelize to SQLite.
- How to create database models.
- How to create tables using Sequelize.
- How to perform CRUD operations using Sequelize.
- How relationships are handled in Sequelize.

---

## 1. What is an ORM?

ORM stands for:

**Object Relational Mapping**

It is a tool that allows developers to interact with databases using programming objects instead of writing SQL directly.

### Without ORM

Example SQL:

```sql
SELECT *
FROM students;
```

Node.js:

```javascript
database.all(
"SELECT * FROM students",
[],
callback
);
```

### With ORM

The same operation:

```javascript
Student.findAll();
```

Much simpler.

### Understanding The Idea

A database table:

`students`

becomes a JavaScript object:

`Student`

A database row:

| id | name | age |
|----|------|-----|
| 1 | Alice | 18 |

becomes:

```json
{
 "id":1,
 "name":"Alice",
 "age":18
}
```

### ORM Translation

Sequelize automatically converts:

```javascript
Student.findAll()
```

into:

```sql
SELECT * FROM students;
```

### Popular Node.js ORMs

| ORM | Database Support |
|-----|------------------|
| Sequelize | MySQL, PostgreSQL, SQLite |
| Prisma | PostgreSQL, MySQL, SQLite |
| TypeORM | Multiple databases |
| Mongoose | MongoDB |

---

## 2. Why Use Sequelize?

Sequelize provides:

### 1. Less SQL Writing

Instead of:

```sql
INSERT INTO students...
```

we write:

```javascript
Student.create()
```

### 2. Database Independence

The same code can work with:

- SQLite
- PostgreSQL
- MySQL

### 3. Relationships

Sequelize makes relationships easier.

Example:

```javascript
Student.belongsTo(Course)
```

instead of manually managing foreign keys.

### 4. Validation

Example:

```javascript
name:{
allowNull:false
}
```

The database automatically protects your data.

---

## Project Upgrade

### Previously:

```
Node.js
 |
 |
Raw SQL
 |
 |
SQLite
```

### Now:

```
Node.js
 |
 |
Sequelize ORM
 |
 |
SQLite
```

---

## Step 1: Install Sequelize

Inside your project:

```bash
npm install sequelize sqlite3
```

Install Sequelize CLI:

```bash
npm install sequelize-cli --save-dev
```

---

## Step 2: Initialize Sequelize

Run:

```bash
npx sequelize-cli init
```

This creates:

```
student-management-api

├── config
├── models
├── migrations
├── seeders
└── src
```

### Understanding These Folders

#### Models

Represent database tables.

Example:

`Student` model

represents

`students` table

#### Migrations

Instructions for creating database tables.

Example:

Create students table

#### Seeders

Used for inserting initial data.

Example:

Add default courses

#### Config

Database connection settings.

---

## Step 3: Configure SQLite

Open:

`config/config.json`

Replace with:

```json
{
  "development": {
    "dialect": "sqlite",
    "storage": "./database/school.sqlite"
  }
}
```

### Meaning:

**`"dialect":"sqlite"`**

We are using SQLite.

**`"storage":"./database/school.sqlite"`**

Database file location.

---

## Step 4: Create Student Model

Run:

```bash
npx sequelize-cli model:generate \
--name Student \
--attributes name:string,age:integer
```

This creates:

- `models/student.js`
- `migrations/create-student.js`

### Generated Model

Example:

```javascript
'use strict';

module.exports = (sequelize,DataTypes)=>{


const Student =
sequelize.define(
'Student',
{

name:{
type:DataTypes.STRING
},

age:{
type:DataTypes.INTEGER
}

});


return Student;


};
```

### Understanding Models

This:

`Student`

represents:

`students` table

This:

`name:string`

becomes:

`name TEXT`

This:

`age:integer`

becomes:

`age INTEGER`

---

## Step 5: Create Database Tables

Run:

```bash
npx sequelize-cli db:migrate
```

Sequelize creates:

`school.sqlite`

with:

`Students` table

---

## Step 6: Create Course Model

Generate:

```bash
npx sequelize-cli model:generate \
--name Course \
--attributes name:string
```

Run migrations:

```bash
npx sequelize-cli db:migrate
```

### Database now:

```
Students

id
name
age


Courses

id
name
```

---

## Step 7: Creating Records

### Previously:

SQL:

```sql
INSERT INTO students
(name,age)

VALUES
('Alice',18);
```

### With Sequelize:

```javascript
const {Student}=require("../models");


Student.create({

name:"Alice",

age:18

});
```

---

## Step 8: Reading Data

### Previously:

```sql
SELECT * FROM students;
```

### Sequelize:

```javascript
Student.findAll();
```

Returns:

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

## Step 9: Finding One Student

### SQL:

```sql
SELECT *
FROM students
WHERE id=1;
```

### Sequelize:

```javascript
Student.findByPk(1);
```

---

## Step 10: Updating Data

### SQL:

```sql
UPDATE students

SET age=19

WHERE id=1;
```

### Sequelize:

```javascript
Student.update(

{
age:19
},

{
where:{
id:1
}
}

);
```

---

## Step 11: Deleting Data

### SQL:

```sql
DELETE FROM students
WHERE id=1;
```

### Sequelize:

```javascript
Student.destroy({

where:{
id:1
}

});
```

---

## Step 12: Creating Relationships

Our old design:

```
courses

id
name


students

id
name
course_id
```

In Sequelize:

Student belongs to Course.

Open:

`models/student.js`

Add:

```javascript
Student.associate=(models)=>{

Student.belongsTo(
models.Course,
{
foreignKey:"courseId"
}
);

};
```

Course has many students.

`models/course.js`

Add:

```javascript
Course.associate=(models)=>{

Course.hasMany(
models.Student
);

};
```

### Understanding Relationship

Before:

`students.course_id`

Now:

`student.courseId`

Sequelize manages the connection.

---

## Step 13: Getting Students With Courses

### Raw SQL:

```sql
SELECT *
FROM students
JOIN courses
ON students.course_id=courses.id;
```

### Sequelize:

```javascript
Student.findAll({

include:Course

});
```

### Output:

```json
[
{
"name":"Alice",

"Course":{
"name":"JavaScript"
}
}
]
```

---

## Step 14: Updating Our API

Our controller changes from:

```javascript
database.all(
"SELECT * FROM students"
)
```

to:

```javascript
Student.findAll()
```

### Example Controller:

```javascript
const {
Student
}=require("../models");


exports.getStudents=
async(req,res)=>{


const students =
await Student.findAll();


res.json(students);


};
```

---

## Step 15: Async/Await

Sequelize uses Promises.

Instead of:

```javascript
callback(error,data)
```

we use:

```javascript
const students =
await Student.findAll();
```

This makes code cleaner.

---

## Before vs After

### Raw SQL Approach

```javascript
database.all(

"SELECT * FROM students",

(error,data)=>{

}

);
```

### Sequelize Approach

```javascript
const students =
await Student.findAll();
```

---

## Project Structure After Sequelize

```
student-management-api

│
├── config
│
├── models
│
│   ├── student.js
│   └── course.js
│
├── migrations
│
├── seeders
│
├── src
│
│   ├── controllers
│   ├── routes
│   └── app.js
│
└── package.json
```

---

## Practical Assignment

Convert the Student Management System from raw SQL to Sequelize.

### Task 1

Create models:

- Student
- Course
- Teacher

### Task 2

Create relationships:

```
Teacher

   |
   |
Courses

   |
   |
Students
```

### Task 3

Implement these APIs:

#### Students

- `GET /students`
- `POST /students`
- `PUT /students/:id`
- `DELETE /students/:id`

#### Courses

- `GET /courses`
- `POST /courses`

### Task 4

Add validation:

Student:

- Name required
- Age required
- Course required
