# Introduction to SQL

## Beginner's Guide (Zero Experience)

---

## Lesson Objectives

By the end of this lesson, students should be able to:

- Understand what a database is.
- Understand what SQL is and why it is important.
- Explain the difference between data and information.
- Understand tables, rows, and columns.
- Install and use a simple SQL environment.
- Write their first SQL query.
- Retrieve information from a database.

---

## 1. What is Data?

Before learning SQL, we need to understand data.

**Data** is simply pieces of information that are stored.

### Examples of data

| Student Name | Age | Course |
|--------------|-----|--------|
| John | 18 | Web Development |
| Sarah | 20 | Graphic Design |
| Peter | 19 | Python |

Every number, word, date, or image stored on a computer is considered data.

### Examples

- Your phone contacts
- WhatsApp messages
- Facebook posts
- Bank transactions
- Hospital records
- School results

All these are forms of data.

---

## 2. What is a Database?

Imagine a school with 2,000 students.

Can the school keep all student records on paper?

Probably not.

Instead, they store everything in a computer.

A **database** is an organized collection of data stored electronically.

Think of it as a very smart digital filing cabinet.

Instead of searching through hundreds of papers, you simply ask the database for the information you need.

### Real-Life Examples

#### A School Database

| Student ID | Name | Class |
|------------|------|-------|
| 101 | Alice | Senior 4 |
| 102 | Brian | Senior 3 |
| 103 | Grace | Senior 2 |

#### A Hospital Database

| Patient ID | Name | Blood Group |
|------------|------|-------------|
| 1 | Jane | O+ |
| 2 | Peter | A- |

#### A Supermarket Database

| Product | Price | Quantity |
|---------|-------|----------|
| Bread | 3000 | 40 |
| Milk | 2500 | 65 |
| Sugar | 5000 | 20 |

### Why Do We Need Databases?

Imagine Facebook.

Millions of people:

- create accounts
- upload photos
- send messages
- make comments

Where is all this information stored?

Inside huge databases.

Without databases:

- Banks couldn't track money.
- Schools couldn't manage students.
- Hospitals couldn't keep patient records.
- Airlines couldn't manage bookings.

Almost every modern application uses databases.

---

## 3. What is SQL?

SQL stands for:

**Structured Query Language**

SQL is the language used to communicate with databases.

Think of SQL as asking questions.

For example:

Instead of saying:

> "Show me all students."

You write SQL.

```sql
SELECT * FROM students;
```

The database understands SQL and returns the answer.

### What Does SQL Do?

SQL allows us to:

- Create databases
- Create tables
- Store information
- Retrieve information
- Update information
- Delete information

### Real-Life Example

Imagine a school database containing 5,000 students.

Instead of scrolling through thousands of names, you simply ask:

> "Show all students in Senior 4."

SQL does the searching for you instantly.

---

## 4. What is a Database Management System (DBMS)?

A database needs software that stores and manages data.

This software is called a **Database Management System (DBMS)**.

Think of it as the manager of the database.

It:

- stores data
- retrieves data
- updates data
- protects data

### Popular Database Systems

| Database | Used By |
|----------|---------|
| MySQL | Websites |
| PostgreSQL | Large Applications |
| SQLite | Mobile Apps |
| Microsoft SQL Server | Businesses |
| Oracle Database | Banks |
| MariaDB | Web Applications |

Although these databases are different, they all understand SQL.

---

## 5. Understanding Tables

A database stores information inside **tables**.

A table looks similar to a spreadsheet.

### Example

| Student ID | Name | Age | Course |
|------------|------|-----|--------|
| 1 | Alice | 18 | HTML |
| 2 | Brian | 20 | Python |
| 3 | Carol | 19 | JavaScript |

### Rows

A **row** represents one complete record.

Example:

| Student ID | Name | Age |
|------------|------|-----|
| 1 | Alice | 18 |

This entire line is one row.

**One row = One student.**

### Columns

A **column** represents one type of information.

Example:

| Name |
|------|
| Alice |
| Brian |
| Carol |

This is the **Name** column.

Columns describe the data.

### Easy Way to Remember

Imagine an Excel spreadsheet.

Columns go:

⬇ Down

Rows go:

➡ Across

Example:

| ID | Name | Age |
|----|------|-----|
| 1 | Alice | 18 |
| 2 | Brian | 20 |

- **Horizontal = Rows**
- **Vertical = Columns**

---

## 6. What is a Record?

A **record** is another name for a row.

Example:

| ID | Name | Age |
|----|------|-----|
| 5 | David | 21 |

Everything on this line forms one record.

---

## 7. What is a Field?

A **field** is one individual piece of information.

Example:

| ID | Name | Age |
|----|------|-----|
| 1 | Alice | 18 |

Fields include:

- `1`
- `Alice`
- `18`

Each cell is a field.

### Summary

| Term | Meaning |
|------|---------|
| Database | Collection of organized data |
| Table | Stores related information |
| Row | One complete record |
| Column | One type of information |
| Field | One single value inside a cell |

---

## 8. Installing SQLite

For beginners, we'll use **SQLite**, because:

- It's free.
- It requires no server setup.
- It stores everything in a single file.
- It's widely used for learning and small applications.

### Option 1: SQLite Online (No Installation)

You can practice immediately using online SQLite editors.

### Option 2: Install SQLite

Download SQLite from the official website and install it for your operating system.

You can also use **DB Browser for SQLite**, which provides a graphical interface for creating databases and running SQL queries.

---

## 9. Writing Your First SQL Query

One of the simplest SQL commands is `SELECT`.

It is used to retrieve data from a table.

Suppose we have a table called `students`.

### students

| id | name | age |
|----|------|-----|
| 1 | Alice | 18 |
| 2 | Brian | 20 |
| 3 | Carol | 19 |

To display all the information in the table:

```sql
SELECT * FROM students;
```

### What does this mean?

| Part | Meaning |
|------|---------|
| `SELECT` | Retrieve data |
| `*` | All columns |
| `FROM` | Specify the table |
| `students` | The table name |
| `;` | End of the SQL statement |

### Output

| id | name | age |
|----|------|-----|
| 1 | Alice | 18 |
| 2 | Brian | 20 |
| 3 | Carol | 19 |

---

## 10. Selecting Specific Columns

You don't always need every column.

To display only the students' names:

```sql
SELECT name FROM students;
```

### Output

| name |
|------|
| Alice |
| Brian |
| Carol |

To display both the name and age:

```sql
SELECT name, age FROM students;
```

### Output

| name | age |
|------|-----|
| Alice | 18 |
| Brian | 20 |
| Carol | 19 |

---

## 11. SQL Keywords

Some common SQL keywords include:

| Keyword | Purpose |
|---------|---------|
| SELECT | Retrieve data |
| FROM | Specify the table |
| WHERE | Filter data |
| INSERT | Add new data |
| UPDATE | Modify existing data |
| DELETE | Remove data |
| CREATE | Create databases or tables |

These keywords form the building blocks of SQL, and you'll learn them throughout the course.

---

## 12. How SQL Fits into a Web Application

A typical web application works like this:

```
User
   │
   ▼
Website or Mobile App
   │
   ▼
Backend (Node.js, Python, PHP, etc.)
   │
   ▼
SQL Database
```

For example:

1. A user logs into a website.
2. The backend sends an SQL query to the database.
3. The database returns the user's information.
4. The website displays it to the user.

As a developer, you'll often write SQL queries inside your backend code to interact with the database.

---

## Key Takeaways

- Data is raw information.
- A database stores organized data electronically.
- SQL is the language used to communicate with databases.
- Databases store information in tables.
- Tables consist of rows and columns.
- A row is a record, and each cell is called a field.
- SQL queries allow you to retrieve, add, update, and delete information.
- SQLite is an excellent database for beginners because it is lightweight and easy to set up.

---

## Practice Questions

1. What is the difference between data and a database?
2. What does SQL stand for?
3. Name three applications that use databases.
4. What is the difference between a row and a column?
5. What does the `SELECT` keyword do?
6. What is the purpose of the `FROM` keyword?
7. Write an SQL query to display all records from a table named `employees`.
8. Write an SQL query to display only the `first_name` and `salary` columns from the `employees` table.

---

## Mini Exercise

Given the following table:

| id | name | age | course |
|----|------|-----|--------|
| 1 | Alice | 18 | HTML |
| 2 | Brian | 20 | JavaScript |
| 3 | Carol | 19 | Python |

Write SQL queries to:

1. Display all columns.
2. Display only the `name` column.
3. Display only the `name` and `course` columns.
4. Explain, in your own words, what the `*` symbol means in `SELECT * FROM students;`.

---

## Next Lesson

In the next lesson, students will learn how to:

- Create a database.
- Create tables using `CREATE TABLE`.
- Understand SQL data types such as `INTEGER`, `TEXT`, and `REAL`.
- Insert records using the `INSERT INTO` statement.
