# Lesson 7: Database Migrations, Seeders, and Production Database Setup

## Preparing the Student Management System for Real-World Development

---

## Lesson Overview

In previous lessons, we improved our Student Management System from:

`Node.js + Express + Raw SQL + SQLite`

into:

`Node.js + Express + Sequelize ORM + SQLite`

Our application is now structured like a professional backend.

However, there is one important problem.

**How do teams safely change databases over time?**

Imagine we already have a deployed school system with thousands of students.

The school requests:

> "Add a phone number field to every student."

A beginner might open the database and manually add a column.

This creates problems:

- Other developers don't know what changed.
- Production and development databases become different.
- Changes cannot be reversed easily.

Professional applications use:

- Migrations
- Seeders

---

## Lesson Objectives

By the end of this lesson, students should understand:

- What database migrations are.
- Why migrations are important.
- How to create migrations with Sequelize.
- How to modify existing tables safely.
- How to rollback database changes.
- What seeders are.
- How to insert initial database data.
- How to prepare an application for PostgreSQL.

---

## 1. Understanding Database Changes

Applications are never finished.

They continuously evolve.

### Example:

#### Version 1

Students table:

| id | name | age |
|----|------|-----|
| 1 | Alice | 18 |
| 2 | Brian | 20 |

#### Version 2 Requirement

The school wants student emails.

New design:

| id | name | age | email |
|----|------|-----|-------|
| 1 | Alice | 18 | alice@gmail.com |
| 2 | Brian | 20 | brian@gmail.com |

The database structure has changed.

This is called a:

**Database Migration**

---

## 2. What is a Migration?

A migration is a file that describes a database change.

Think of migrations as:

> "A history book of database changes."

### Example:

```
Migration History

001-create-students-table.js

002-create-courses-table.js

003-add-email-to-students.js

004-add-phone-to-students.js
```

### Why Migrations Matter

#### Without migrations:

Developer A:

Adds email column manually

Developer B:

Does not know email exists

Production:

Database is different

Problems occur.

#### With migrations:

Everyone runs:

```bash
sequelize db:migrate
```

Everyone gets the same database structure.

---

## 3. Understanding Sequelize Migration Files

A migration usually has two parts:

```javascript
module.exports = {

up: async()=>{

// Apply change

},


down: async()=>{

// Undo change

}

}
```

### UP

Means:

> "Apply this change."

Example:

Create table.

### DOWN

Means:

> "Reverse this change."

Example:

Delete table.

---

## 4. Creating a Migration

Imagine we want to add email to students.

Run:

```bash
npx sequelize-cli migration:create \
--name add-email-to-students
```

A new file appears:

```
migrations/

202607301200-add-email-to-students.js
```

---

## Step 5: Writing the Migration

Open the file.

Example:

```javascript
module.exports = {

async up(queryInterface, Sequelize) {


await queryInterface.addColumn(
"Students",
"email",
{
type: Sequelize.STRING,
allowNull:false
}
);


},


async down(queryInterface, Sequelize) {


await queryInterface.removeColumn(
"Students",
"email"
);


}

};
```

### Understanding This Code

This:

```javascript
queryInterface.addColumn()
```

means:

> "Modify an existing table."

This:

`"Students"`

is the table name.

This:

`"email"`

is the new column.

---

## Step 6: Running Migrations

Run:

```bash
npx sequelize-cli db:migrate
```

### Output:

```
Migration completed successfully
```

The students table now has:

| id | name | age | email |
|----|------|-----|-------|
| 1 | Alice | 18 | null |

---

## Step 7: Undoing a Migration

Sometimes we make mistakes.

Example:

Wrong column name:

`emial`

instead of:

`email`

We can rollback.

Run:

```bash
npx sequelize-cli db:migrate:undo
```

The last migration is reversed.

### Migration Workflow

Professional developers follow this cycle:

```
Requirement

↓

Create migration

↓

Test locally

↓

Commit code

↓

Deploy

↓

Run migrations
```

---

## 8. Creating Seeders

A new developer downloads the project.

They run:

```bash
npm install
```

Then:

```bash
sequelize db:migrate
```

The database is empty.

But the application needs default data.

Example:

Courses:

- JavaScript
- Python
- HTML

This is where seeders help.

### What is a Seeder?

A seeder inserts initial data into a database.

Examples:

- Default admin user.
- System settings.
- Categories.
- Roles.
- Courses.

---

## 9. Creating a Seeder

Run:

```bash
npx sequelize-cli seed:generate \
--name add-default-courses
```

Creates:

```
seeders/

202607301300-add-default-courses.js
```

---

## Step 10: Writing Seeder Code

Example:

```javascript
module.exports = {

async up(queryInterface, Sequelize) {


await queryInterface.bulkInsert(
"Courses",

[
{
name:"JavaScript",
createdAt:new Date(),
updatedAt:new Date()
},

{
name:"Python",
createdAt:new Date(),
updatedAt:new Date()
}

]


);


},


async down(queryInterface, Sequelize) {


await queryInterface.bulkDelete(
"Courses",
null,
{}
);


}

};
```

### Running Seeders

Run:

```bash
npx sequelize-cli db:seed:all
```

Now the database contains:

Courses:

| id | name |
|----|------|
| 1 | JavaScript |
| 2 | Python |

### Removing Seed Data

Run:

```bash
npx sequelize-cli db:seed:undo:all
```

---

## 11. Migration vs Seeder

Many beginners confuse them.

| Migration | Seeder |
|-----------|--------|
| Changes database structure | Adds data |
| Creates tables | Adds records |
| Adds columns | Adds default values |
| Changes schema | Changes content |

### Example:

Adding a teachers table:

**Migration:**

Create teachers table

**Seeder:**

Add default teachers

---

## 12. Moving From SQLite to PostgreSQL

SQLite is excellent for learning.

However, production systems usually use:

- PostgreSQL
- MySQL

For our project, we will move to PostgreSQL.

### Why PostgreSQL?

Advantages:

- Handles large amounts of data.
- Better concurrency.
- Advanced features.
- Used widely in production.

### Architecture Change

#### Before:

```
Node.js

   |

Sequelize

   |

SQLite file
```

#### After:

```
Node.js

   |

Sequelize

   |

PostgreSQL Server
```

---

## Step 13: Install PostgreSQL Driver

Install:

```bash
npm install pg pg-hstore
```

---

## Step 14: Update Sequelize Configuration

Open:

`config/config.json`

Change:

```json
{
"development":{

"username":"postgres",

"password":"password",

"database":"school",

"host":"localhost",

"dialect":"postgres"

}

}
```

### Understanding Configuration

| Field | Meaning |
|-------|---------|
| `username` | Database user |
| `password` | Database password |
| `database` | Database name |
| `dialect` | Database type |

---

## Step 15: Environment Variables

Never store passwords directly.

### Bad:

```javascript
password:"mypassword"
```

### Good:

`.env`

Example:

```
DB_USER=postgres

DB_PASSWORD=password

DB_NAME=school

DB_HOST=localhost
```

Update config:

```javascript
require("dotenv").config();


module.exports={

username:
process.env.DB_USER,

password:
process.env.DB_PASSWORD,

database:
process.env.DB_NAME,

host:
process.env.DB_HOST,

dialect:"postgres"

}
```

---

## 16. Professional Deployment Workflow

A real company workflow:

```
Developer creates migration:

add-phone-column.js

↓

Pushes code:

git push

↓

Server receives update:

git pull

↓

Run:

sequelize db:migrate

↓

Database updates safely.
```

---

## Project Structure After Lesson 7

```
student-management-api

│
├── config
│
├── models
│
├── migrations
│
├── seeders
│
├── src
│   |
│   ├── controllers
│   ├── routes
│   ├── services
│   └── app.js
│
├── .env
│
└── package.json
```

---

## Practical Assignment

### Task 1: Add Student Contact Information

Create a migration:

`add-student-contact-info`

Add:

- email
- phone
- address

### Task 2: Create Default Courses Seeder

Insert:

- Frontend Development
- Backend Development
- Mobile Development
- Data Science

### Task 3: Create Teacher Migration

Create:

`teachers` table

Fields:

| Field | Type |
|-------|------|
| id | INTEGER |
| name | STRING |
| email | STRING |
| phone | STRING |

### Task 4: Move Database Configuration To `.env`

Required variables:

- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_HOST`
- `DB_PORT`
