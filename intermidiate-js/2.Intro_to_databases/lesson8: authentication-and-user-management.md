# Lesson 8: Authentication and User Management

## Adding Secure Login and Protected APIs

---

## Lesson Overview

So far, our Student Management System allows anyone to access the API.

For example:

Anyone can send:

`GET /students`

and view all students.

Anyone can send:

`POST /students`

and create new student records.

This is not acceptable in a real application.

A school management system should know:

- Who is using the system.
- What they are allowed to do.
- Which actions they performed.

In this lesson, we will add:

- User registration.
- Secure password storage.
- Login functionality.
- JWT authentication.
- Protected routes.
- User roles.

---

## Lesson Objectives

By the end of this lesson, students should understand:

- Why applications need authentication.
- The difference between authentication and authorization.
- How passwords are stored securely.
- How JWT tokens work.
- How to register users.
- How to log users in.
- How to protect API routes.
- How to implement role-based permissions.

---

## 1. Authentication vs Authorization

These two concepts are often confused.

### Authentication

Authentication answers:

> "Who are you?"

Example:

You enter:

```
Email:
stephen@gmail.com

Password:
********
```

The system checks:

> "Is this really Stephen?"

### Authorization

Authorization answers:

> "What are you allowed to do?"

Example:

A student:

Can view grades

A teacher:

Can enter grades

An administrator:

Can manage users

### Real-Life Example

School entrance:

#### Authentication

Security guard asks:

> "Show me your ID."

#### Authorization

Security guard checks:

> "Are you allowed inside this building?"

---

## 2. User Management Design

Currently:

```
School System

Students

Courses

Teachers
```

We add:

`Users`

Our new structure:

```
             Users

              |
              |
    --------------------

    Students   Teachers
```

### Users Table

We create:

| Column | Purpose |
|--------|---------|
| id | Unique identifier |
| name | User name |
| email | Login email |
| password | Encrypted password |
| role | Permission level |

### Example:

| id | name | email | role |
|----|------|-------|------|
| 1 | Admin | admin@school.com | admin |
| 2 | John | teacher@school.com | teacher |

---

## 3. Installing Authentication Packages

Install:

```bash
npm install bcrypt jsonwebtoken
```

### bcrypt

Used for:

- Encrypting passwords.
- Comparing passwords.

### jsonwebtoken

Used for:

- Creating login tokens.
- Protecting APIs.

---

## 4. Creating User Model

Generate:

```bash
npx sequelize-cli model:generate \
--name User \
--attributes name:string,email:string,password:string,role:string
```

This creates:

- `models/user.js`
- `migrations/create-user.js`

### User Model

The database table becomes:

```
Users

id
name
email
password
role
createdAt
updatedAt
```

---

## Step 5: Run Migration

Create the table:

```bash
npx sequelize-cli db:migrate
```

Check database:

```
Users

id | name | email | password | role
```

---

## Step 6: Understanding Password Security

A beginner mistake:

Saving passwords directly.

### Example:

```
Users Table

email:
alice@gmail.com

password:
mypassword123
```

This is dangerous.

If the database leaks, everyone knows users' passwords.

### Solution: Hashing

Instead of storing:

`mypassword123`

we store:

`$2b$10$8Kjd92jd92jd92jd92`

Hashing is:

- One-way.
- Cannot be reversed.
- Unique.

### Password Flow

#### Registration:

```
User password

        |

      bcrypt

        |

Encrypted password

        |

     Database
```

#### Login:

```
User password

        |

      bcrypt compare

        |

Match?

        |

Create token
```

---

## Step 7: Create Authentication Service

Create:

`src/services/authService.js`

Add:

```javascript
const bcrypt =
require("bcrypt");


const hashPassword =
async(password)=>{


const salt =
await bcrypt.genSalt(10);


return await bcrypt.hash(
password,
salt
);


};


module.exports={
hashPassword
};
```

### Understanding Hashing

`bcrypt.hash()`

converts:

`hello123`

into:

`$2b$10$....`

---

## Step 8: Create User Registration API

Create:

`src/controllers/authController.js`

Add:

```javascript
const {
User
}=require("../../models");


const {
hashPassword
}=require("../services/authService");



const register =
async(req,res)=>{


const {
name,
email,
password,
role
}=req.body;



const encryptedPassword =
await hashPassword(password);



const user =
await User.create({

name,

email,

password:
encryptedPassword,

role

});


res.json(user);


};


module.exports={
register
};
```

---

## Step 9: Create Authentication Routes

Create:

`src/routes/authRoutes.js`

Add:

```javascript
const express =
require("express");


const router =
express.Router();


const controller =
require("../controllers/authController");



router.post(
"/register",
controller.register
);


module.exports=router;
```

Connect in:

`app.js`

Add:

```javascript
const authRoutes =
require("./routes/authRoutes");


app.use(
"/auth",
authRoutes
);
```

### Testing Registration

**Request:**

`POST`

`localhost:3000/auth/register`

**Body:**

```json
{
"name":"Admin",
"email":"admin@school.com",
"password":"admin123",
"role":"admin"
}
```

**Database:**

Users:

| id | email | password | role |
|----|-------|----------|------|
| 1 | admin@school.com | $2b$... | admin |

---

## Step 10: Creating Login

Login requires:

1. Find user by email.
2. Compare passwords.
3. Generate JWT token.

### JWT Explained

JWT stands for:

**JSON Web Token**

It is a digital ID card.

After login:

Server gives:

`eyJhbGciOiJIUzI1Ni...`

The client sends this token with every request.

### Authentication Flow

```
User Login

     |

Email + Password

     |

Server checks database

     |

Create JWT

     |

Return Token

     |

Client stores Token

     |

Uses Token For Future Requests
```

---

## Step 11: Login Controller

Update:

`authController.js`

Add:

```javascript
const bcrypt =
require("bcrypt");


const jwt =
require("jsonwebtoken");



const login =
async(req,res)=>{


const {
email,
password
}=req.body;



const user =
await User.findOne({

where:{
email
}

});



if(!user){

return res.status(404)
.json({
message:"User not found"
});

}



const valid =
await bcrypt.compare(
password,
user.password
);



if(!valid){

return res.status(401)
.json({
message:"Invalid password"
});

}



const token =
jwt.sign(

{
id:user.id,
role:user.role
},

process.env.JWT_SECRET,

{
expiresIn:"1d"
}

);



res.json({

token

});


};


module.exports.login=login;
```

---

## Step 12: Environment Variables

Update:

`.env`

Add:

```
JWT_SECRET=mysecretkey
```

Never expose this publicly.

---

## Step 13: Creating Authentication Middleware

Now we need to protect routes.

Create:

`src/middleware/authMiddleware.js`

Add:

```javascript
const jwt =
require("jsonwebtoken");


const authenticate =
(req,res,next)=>{


const token =
req.headers.authorization
?.split(" ")[1];


if(!token){

return res.status(401)
.json({
message:"Access denied"
});

}



try{


const decoded =
jwt.verify(
token,
process.env.JWT_SECRET
);


req.user =
decoded;


next();



}
catch(error){


res.status(401)
.json({
message:"Invalid token"
});


}


};


module.exports={
authenticate
};
```

---

## Step 14: Protect Student Routes

### Before:

```javascript
router.get(
"/",
controller.getStudents
);
```

### After:

```javascript
const {
authenticate
}=require("../middleware/authMiddleware");



router.get(
"/",
authenticate,
controller.getStudents
);
```

### Now:

#### Without token:

`GET /students`

**Response:**

```json
{
"message":"Access denied"
}
```

#### With token:

**Headers:**

```
Authorization:

Bearer eyJhbGc...
```

**Response:**

```json
[
{
"name":"Alice"
}
]
```

---

## Step 15: Role-Based Authorization

Authentication:

> "Who are you?"

Authorization:

> "What can you do?"

Example:

Only admins can delete students.

### Create:

`roleMiddleware.js`

```javascript
const allowRoles =
(...roles)=>{


return(req,res,next)=>{


if(!roles.includes(req.user.role)){


return res.status(403)
.json({

message:
"Permission denied"

});


}


next();


};


};


module.exports={
allowRoles
};
```

### Use:

```javascript
router.delete(

"/:id",

authenticate,

allowRoles("admin"),

controller.deleteStudent

);
```

### Now:

**Admin:**

Can delete students

**Teacher:**

Cannot delete students

---

## Final Architecture

Our application now looks like:

```
Client

 |
 |
Express API

 |
 |
Authentication Middleware

 |
 |
Controllers

 |
 |
Services

 |
 |
Models

 |
 |
PostgreSQL Database
```

---

## Updated Project Structure

```
student-management-api

src

├── controllers

│   ├── studentController.js

│   └── authController.js


├── services

│   ├── studentService.js

│   └── authService.js


├── middleware

│   ├── authMiddleware.js

│   └── roleMiddleware.js


├── routes

│   ├── studentRoutes.js

│   └── authRoutes.js


├── models

│   ├── User.js
│   ├── Student.js
│   └── Course.js


└── app.js

.env
```

---

## Practical Assignment

Extend the school system authentication.

### Task 1: Add User Roles

Support:

- admin
- teacher
- student

### Task 2: Protect APIs

Rules:

| Action | Allowed |
|--------|---------|
| Create users | Admin |
| Delete students | Admin |
| Create courses | Admin + Teacher |
| View courses | Everyone logged in |

### Task 3: Add User Profile API

Create:

`GET /auth/profile`

**Response:**

```json
{
"name":"John",
"email":"teacher@test.com",
"role":"teacher"
}
```

### Task 4: Add Logout Concept

Research and implement:

- Token expiration.
- Refresh tokens.
