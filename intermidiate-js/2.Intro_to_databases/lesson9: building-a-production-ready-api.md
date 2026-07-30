# Lesson 9: Building a Production-Ready API

## Improving the Student Management System for Real-World Applications

---

## Lesson Overview

In the previous lessons, we transformed our project from a simple database exercise into a structured backend application.

Our application now has:

- ✅ Node.js + Express API
- ✅ PostgreSQL/SQLite database
- ✅ Sequelize ORM
- ✅ Database migrations
- ✅ Database relationships
- ✅ User authentication
- ✅ JWT authorization
- ✅ Role-based permissions

However, professional applications require more than working code.

A production system must also be:

- Easy for other developers to understand.
- Secure.
- Testable.
- Documented.
- Reliable.
- Easy to deploy and maintain.

In this lesson, we will add professional backend practices.

---

## Lesson Objectives

By the end of this lesson, students should understand:

- How professional APIs are documented.
- How to handle errors consistently.
- How to validate incoming data.
- How to add logging.
- How to write automated tests.
- How to implement pagination.
- How to improve API security.
- How to prepare an API for deployment.

---

## 1. What Makes an API Production Ready?

### A beginner API:

```
Request

↓

Route

↓

Database

↓

Response
```

### A production API:

```
Request

↓

Security Checks

↓

Validation

↓

Authentication

↓

Controller

↓

Service

↓

Database

↓

Error Handling

↓

Logging

↓

Response
```

---

## 2. API Documentation With Swagger

### The Problem

Imagine joining a company and being given:

```
GET /students
POST /students
PUT /students/:id
```

How do you know:

- What data to send?
- What responses look like?
- What errors can occur?

You need documentation.

### What is Swagger?

Swagger creates interactive API documentation.

It allows developers to:

- View available endpoints.
- Test APIs.
- Understand request formats.

### Example:

```
Student API

GET /students

Try it out

Execute
```

---

## Step 1: Install Swagger

Install:

```bash
npm install swagger-ui-express swagger-jsdoc
```

---

## Step 2: Create Swagger Configuration

Create:

`src/config/swagger.js`

Add:

```javascript
const swaggerJsdoc =
require("swagger-jsdoc");


const swaggerUi =
require("swagger-ui-express");


const options={

definition:{

openapi:"3.0.0",

info:{

title:"School Management API",

version:"1.0.0"

}

},


apis:[
"./src/routes/*.js"
]

};


const swaggerSpec =
swaggerJsdoc(options);


module.exports={
swaggerUi,
swaggerSpec
};
```

---

## Step 3: Add Swagger To Application

Update:

`app.js`

Add:

```javascript
const {
swaggerUi,
swaggerSpec
}=require("./config/swagger");


app.use(

"/api-docs",

swaggerUi.serve,

swaggerUi.setup(swaggerSpec)

);
```

Now visit:

`localhost:3000/api-docs`

You will see:

```
School Management API

Students

Courses

Authentication
```

---

## 3. Documenting Endpoints

Example:

Inside:

`studentRoutes.js`

Add:

```javascript
/**
 * @swagger
 * /students:
 *   get:
 *     summary:
 *       Get all students
 *     responses:
 *       200:
 *         description:
 *           List of students
 */
```

Swagger automatically reads this.

---

## 4. API Validation

### The Problem

Currently users can send:

```json
{
"name":"",
"age":"hello"
}
```

Our database should not accept this.

### Validation Rules

Student:

| Field | Rule |
|-------|------|
| name | Required |
| age | Must be number |
| course | Required |

---

## Step 1: Install Validator

```bash
npm install express-validator
```

---

## Step 2: Create Validation Middleware

Create:

`src/validators/studentValidator.js`

Add:

```javascript
const {
body
}=require("express-validator");


const studentValidation=[


body("name")
.notEmpty()
.withMessage(
"Name is required"
),


body("age")
.isInt()
.withMessage(
"Age must be a number"
)


];


module.exports =
studentValidation;
```

---

## Step 3: Use Validation

Route:

```javascript
router.post(

"/",

studentValidation,

controller.createStudent

);
```

### Handling Errors

Add:

```javascript
const {
validationResult
}=require("express-validator");


const errors =
validationResult(req);


if(!errors.isEmpty()){


return res.status(400)
.json(errors.array());


}
```

### Response:

```json
[
{
"message":"Age must be a number"
}
]
```

---

## 5. Centralized Error Handling

Currently we write:

```javascript
try{

}
catch(error){

res.status(500)

}
```

everywhere.

This becomes repetitive.

### Better Approach

Create:

`src/middleware/errorHandler.js`

```javascript
const errorHandler =
(error,req,res,next)=>{


console.error(error);


res.status(
error.status || 500
)
.json({

message:
error.message ||
"Server Error"

});


};


module.exports =
errorHandler;
```

Add:

```javascript
app.use(errorHandler);
```

Now every error goes through one place.

---

## 6. Logging With Winston

### Why Logging Matters

Imagine a user reports:

> "The system failed yesterday."

You need answers:

- When did it fail?
- Which API failed?
- What error occurred?

Logs provide this information.

### Install Winston

```bash
npm install winston
```

### Create Logger

Create:

`src/config/logger.js`

Add:

```javascript
const winston =
require("winston");


const logger =
winston.createLogger({

level:"info",


transports:[

new winston.transports.Console(),

new winston.transports.File({

filename:"app.log"

})

]


});


module.exports=logger;
```

### Using Logger

Instead of:

```javascript
console.log()
```

Use:

```javascript
logger.info(
"Student created"
);
```

### Logs:

```
INFO Student created

ERROR Database failed
```

---

## 7. Pagination

### The Problem

Imagine:

50,000 students

This query:

```javascript
Student.findAll()
```

returns everything.

Bad.

### Pagination

Instead of:

```
Page 1

Student 1-100
```

We do:

```
Page 2

Student 101-200
```

### SQL Concept

**LIMIT:**

```sql
LIMIT 10
```

**OFFSET:**

```sql
OFFSET 20
```

### Sequelize Pagination

Example:

```javascript
Student.findAll({

limit:10,

offset:20

});
```

Meaning:

Return:

10 students

starting from student 20

### API Design

**Request:**

`GET /students?page=2`

**Code:**

```javascript
const page =
req.query.page || 1;


const limit=10;


const offset =
(page-1)*limit;



const students =
await Student.findAll({

limit,

offset

});
```

### Response

Better API responses:

```json
{
"page":2,

"total":200,

"data":[

{
"name":"Alice"
}

]
}
```

---

## 8. API Security

A production API must protect itself.

### Security Threats

Common attacks:

#### SQL Injection

Attacker sends:

`' OR 1=1`

**Solution:**

Use Sequelize parameterization.

#### Password Attacks

**Solution:**

- bcrypt hashing.
- Strong passwords.
- Rate limiting.

#### Unauthorized Access

**Solution:**

- JWT.
- Permissions.

---

## 9. Adding Security Headers

Install:

```bash
npm install helmet
```

Use:

```javascript
const helmet =
require("helmet");


app.use(
helmet()
);
```

Helmet adds security headers automatically.

---

## 10. Rate Limiting

Prevent users from abusing APIs.

Example:

Someone sends:

10000 login requests

### Install:

```bash
npm install express-rate-limit
```

### Create:

```javascript
const rateLimit =
require("express-rate-limit");


const limiter =
rateLimit({

windowMs:15*60*1000,

max:100

});


app.use(limiter);
```

### Meaning:

Maximum:

100 requests

every 15 minutes

---

## 11. Testing APIs

### Why Testing?

Imagine changing login code.

How do you know you didn't break everything?

Automated tests.

### Install Testing Tools

```bash
npm install jest supertest --save-dev
```

### Example Test

Create:

`tests/student.test.js`

```javascript
const request =
require("supertest");


const app =
require("../src/app");


test(
"Get students",

async()=>{


const response =
await request(app)
.get("/students");


expect(
response.statusCode
)
.toBe(200);


}

);
```

### Test Flow

```
Run Tests

↓

Send API Requests

↓

Check Results

↓

Pass / Fail
```

---

## 12. Environment Configuration

Professional projects have:

- `.env.development`
- `.env.production`
- `.env.test`

### Example:

**Development:**

```
DATABASE=school_dev
```

**Production:**

```
DATABASE=school_prod
```

**Testing:**

```
DATABASE=school_test
```

---

## 13. Preparing For Deployment

A production server needs:

- Environment variables.
- Database connection.
- Process manager.
- Logging.
- Error handling.

### Typical deployment:

```
User

 |

Nginx

 |

Node.js API

 |

PostgreSQL Database
```

---

## Final Project Architecture

After Lesson 9:

```
student-management-api

src

├── config

│   ├── database.js

│   ├── swagger.js

│   └── logger.js


├── controllers


├── services


├── models


├── routes


├── middleware

│   ├── authMiddleware.js

│   ├── errorHandler.js

│   └── validator.js


├── validators


└── app.js


tests

migrations

seeders

.env
```

---

## Practical Assignment

Improve the Student Management API.

### Task 1: Add Swagger Documentation

Document:

- Authentication APIs
- Student APIs
- Course APIs

### Task 2: Add Validation

Student creation requires:

- name
- age
- course

### Task 3: Add Pagination

Implement:

`GET /students?page=1`

### Task 4: Add Security

Implement:

- Helmet.
- Rate limiting.
- Request logging.

### Task 5: Add Tests

Create tests for:

- Register user
- Login user
- Create student
- Get students
