# Clinic Appointment Management System

## Backend API Implementation Guide

| | |
|---|---|
| **Project Type** | Full-Stack Web Development Capstone |
| **Part** | Part 1: Backend API Development |
| **Level** | Intermediate |
| **Estimated Duration** | 2–3 Weeks |

---

## 1. Project Introduction

### Background

Nova Clinic is a small healthcare facility that currently manages patient appointments manually using notebooks and phone calls.

The clinic has requested a digital system that allows patients, doctors, and administrators to manage appointments more efficiently.

Your responsibility as the backend developer is to build a secure REST API that will power the clinic management application.

**The API will provide functionality for:**

- User registration and authentication
- Managing doctors
- Managing patients
- Booking appointments
- Managing appointment statuses
- Providing data to the frontend application

---

## 2. Backend Learning Objectives

By completing this project, you should demonstrate your ability to:

1. Build a RESTful API using Node.js and Express.
2. Design and implement a relational database.
3. Use Sequelize ORM for database communication.
4. Create database models and relationships.
5. Implement authentication using JWT.
6. Protect API routes.
7. Validate user input.
8. Handle errors professionally.
9. Test APIs using Postman.
10. Structure a backend application professionally.

---

## 3. Required Technology Stack

| Area | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | PostgreSQL / MySQL |
| ORM | Sequelize |
| Authentication | JWT |
| Password Security | bcrypt |
| API Testing | Postman |
| Version Control | Git + GitHub |

---

## 4. Backend Project Structure

Your backend should follow this structure:

```
clinic-api/
│
├── src/
│
│── config/
│   └── database.js
│
│── controllers/
│   ├── authController.js
│   ├── doctorController.js
│   ├── patientController.js
│   └── appointmentController.js
│
│── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
│── models/
│   ├── User.js
│   ├── Doctor.js
│   ├── Patient.js
│   └── Appointment.js
│
│── routes/
│   ├── authRoutes.js
│   ├── doctorRoutes.js
│   ├── patientRoutes.js
│   └── appointmentRoutes.js
│
│── migrations/
│
│── seeders/
│
│── app.js
│── server.js
│
├── .env
├── package.json
└── README.md
```

---

## Phase 1: Project Setup

### Objective

Create the backend foundation.

### Tasks

1. Create a Node.js project.
2. Install required packages.
3. Configure environment variables.

### Required Packages

```bash
npm install express sequelize sequelize-cli mysql2 pg jsonwebtoken bcrypt dotenv cors express-validator
```

> **Note:** Use either `mysql2` (MySQL) or `pg` (PostgreSQL), depending on your chosen database.

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000

DATABASE_NAME=clinic_db
DATABASE_USER=root
DATABASE_PASSWORD=password
DATABASE_HOST=localhost

JWT_SECRET=mysecretkey
```

> Replace example values with your own local credentials. Never commit real secrets to GitHub.

### Deliverables

Submit:

- GitHub repository
- Working Express server
- Database connection configured
- README setup instructions

### Acceptance Criteria

The following command should work:

```bash
npm start
```

The API should respond:

**`GET /api`**

Response:

```json
{
  "message": "Clinic API running"
}
```

---

## Phase 2: Database Implementation

### Objective

Create the database structure using Sequelize.

### Database Requirements

The system contains four main entities:

- Users
- Doctors
- Patients
- Appointments

---

### Entity 1: Users

**Purpose:** Stores login information.

**Fields:**

| Field | Type |
|---|---|
| id | Integer |
| firstName | String |
| lastName | String |
| email | String |
| password | String |
| role | String |
| createdAt | Date |
| updatedAt | Date |

**Rules:**

- Email must be unique.
- Password must be encrypted.
- Role can only be: `patient`, `doctor`, or `admin`.

---

### Entity 2: Doctors

**Purpose:** Stores doctor information.

**Fields:**

| Field | Type |
|---|---|
| id | Integer |
| userId | Integer |
| speciality | String |
| phone | String |
| active | Boolean |

**Relationship:**

One User has one Doctor profile.

```
User 1 ---- 1 Doctor
```

---

### Entity 3: Patients

**Purpose:** Stores patient information.

**Fields:**

| Field | Type |
|---|---|
| id | Integer |
| userId | Integer |
| dateOfBirth | Date |
| gender | String |
| phone | String |

**Relationship:**

```
User 1 ---- 1 Patient
```

---

### Entity 4: Appointments

**Purpose:** Stores bookings.

**Fields:**

| Field | Sequelize Type | Notes |
|---|---|---|
| id | `INTEGER` | Primary key |
| patientId | `INTEGER` | Foreign key |
| doctorId | `INTEGER` | Foreign key |
| appointmentDate | `DATEONLY` | Date only |
| appointmentTime | `TIME` | Or `STRING` if preferred |
| status | `STRING` | See allowed values below |
| notes | `TEXT` | Optional |

**Relationships:**

```
Patient 1 ---- Many Appointments
Doctor  1 ---- Many Appointments
```

---

### Seed Data Requirements

Your seeders must include at least:

| Seed Item | Quantity | Details |
|---|---|---|
| Admin user | 1 | Role `admin` — **admins are never created via public registration** |
| Doctor users + profiles | 2 | Users with role `doctor`, each linked to a Doctor record |
| Patient users + profiles | 2 | Users with role `patient`, each linked to a Patient record |
| Sample appointments | 2+ | Linked to seeded patients and doctors |

Example admin login for testing (document this in your README):

```
email: admin@novaclinic.com
password: Admin123!
```

### Deliverables

Submit:

- Sequelize models
- Database migrations
- Database relationships
- Seed data (as specified above)

### Acceptance Criteria

The following relationships must work:

```javascript
appointment.getDoctor()
// should return the doctor information.
```

---

## Phase 3: Authentication System

### Objective

Allow users to create accounts and securely login.

### Role Creation Rules

| Role | How it is created |
|---|---|
| `patient` | Public registration (`POST /api/auth/register`) |
| `doctor` | Public registration creates the **User** account only. An admin must then create the **Doctor profile** via `POST /api/doctors`. |
| `admin` | **Seed data only.** Public registration must reject `role: "admin"`. |

### Required Features

#### Registration

**`POST /api/auth/register`**

Request body:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@gmail.com",
  "password": "Password123",
  "role": "patient"
}
```

Allowed `role` values for this endpoint: `patient` or `doctor` only.

Expected response:

```json
{
  "message": "Account created successfully"
}
```

When `role` is `patient`, also create the linked Patient profile (or require the user to complete it via `POST /api/patients` — document which approach you chose).

---

#### Login

**`POST /api/auth/login`**

Request body:

```json
{
  "email": "john@gmail.com",
  "password": "Password123"
}
```

Response:

```json
{
  "token": "jwt-token",
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@gmail.com",
    "role": "patient"
  }
}
```

---

#### Current User Profile

**`GET /api/auth/me`**

Requires authentication.

Returns the logged-in user's information (and linked patient/doctor profile if available).

---

### Authentication Requirements

**Passwords must:**

- Never be stored directly.
- Be encrypted using bcrypt.

**Protected routes must require:**

```
Authorization: Bearer <token>
```

### Deliverables

- Register endpoint
- Login endpoint
- Current user endpoint (`GET /api/auth/me`)
- JWT middleware

### Acceptance Criteria

- A logged-in user can access protected routes.
- An unauthenticated user receives: **`401 Unauthorized`**
- Public registration rejects `role: "admin"`

---

## Phase 4: Doctor Management API

### Objective

Create doctor management functionality.

### Required Endpoints

| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/doctors` | Create Doctor profile | Admin only |
| `GET` | `/api/doctors` | Get All Doctors | Authenticated users |
| `GET` | `/api/doctors/:id` | Get Single Doctor | Authenticated users |
| `PUT` | `/api/doctors/:id` | Update Doctor | Admin only |
| `DELETE` | `/api/doctors/:id` | Delete Doctor | Admin only |

### Requirements

**Only administrators can:**

- Create doctors
- Update doctors
- Delete doctors

**Authenticated users can:**

- View doctors

> Creating a doctor links a Doctor profile to an existing User with `role: "doctor"`.

---

## Phase 5: Patient Management API

### Objective

Create patient management functionality.

### Required Endpoints

| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/patients` | Create Patient profile | Authenticated patient (own profile) or Admin |
| `GET` | `/api/patients` | Get All Patients | Admin only |
| `GET` | `/api/patients/:id` | Get Single Patient | Own profile, or Admin |
| `PUT` | `/api/patients/:id` | Update Patient | Own profile, or Admin |
| `DELETE` | `/api/patients/:id` | Delete Patient | Admin only |

### Requirements

**Administrators can:**

- View all patients
- Update any patient
- Delete patients

**Patients can:**

- Create / view / update **their own** patient profile only

**Doctors cannot:**

- Access the full patient list

---

## Phase 6: Appointment Management API

### Objective

Allow patients to schedule appointments and allow doctors/admins to manage them.

### Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/appointments` | Create Appointment |
| `GET` | `/api/appointments` | Get Appointments |
| `GET` | `/api/appointments/:id` | Get Single Appointment |
| `PUT` | `/api/appointments/:id` | Update Appointment |
| `DELETE` | `/api/appointments/:id` | Delete Appointment |

### Access Control

| Role | Create | View | Update | Delete |
|---|---|---|---|---|
| Patient | Own appointments only | Own appointments only | Cancel own only | Not allowed |
| Doctor | Not allowed | Own assigned appointments only | Update status of own appointments | Not allowed |
| Admin | Allowed | All appointments | Allowed | Allowed |

### Appointment Rules

The API must enforce:

| Rule | Description |
|---|---|
| **Rule 1** | Appointments cannot be booked in the past. |
| **Rule 2** | A doctor cannot have two appointments at the same time. |
| **Rule 3** | Appointment status can only be: `Pending`, `Confirmed`, `Completed`, or `Cancelled`. |
| **Rule 4** | Patients can only view their own appointments. |
| **Rule 5** | Doctors can only view and update appointments assigned to them. |
| **Rule 6** | Admins can view and manage all appointments. |

---

## Phase 7: API Validation

### Objective

Prevent invalid data entering the system.

### Required Validation

#### Registration

| Field | Validation |
|---|---|
| Email | Required, valid format, unique |
| Password | Minimum 8 characters |
| Role | Must be `patient` or `doctor` only |

#### Appointment

| Field | Validation |
|---|---|
| Date | Cannot be earlier than today |
| Doctor | Must exist in database |
| Patient | Must exist in database |

---

## Phase 8: API Testing

### Objective

Verify that the API works correctly.

The student must create a **Postman collection** containing:

**Authentication**

- ✅ Register user
- ✅ Login user
- ✅ Get current user (`GET /api/auth/me`)

**Doctors**

- ✅ Create doctor
- ✅ View doctors
- ✅ Update doctor
- ✅ Delete doctor

**Patients**

- ✅ Create patient
- ✅ View patients

**Appointments**

- ✅ Create appointment
- ✅ Update appointment
- ✅ Cancel appointment

---

## Phase 9: Documentation

The README must contain:

| Section | Description |
|---|---|
| **Project Description** | Explain the application. |
| **Installation** | Steps to run locally. |
| **Environment Variables** | Explain required variables. |
| **Seed Credentials** | Document the seeded admin (and sample users) for testing. |
| **API Documentation** | Endpoint, method, request example, response example. |
| **Database Diagram** | Include ER diagram. |

---

## Phase 10: Deployment

### Objective

Deploy the API online so it is publicly accessible.

**Recommended platforms:**

- Render
- Railway
- DigitalOcean

### Deliverables

- Live API URL
- Connected production database
- Environment variables configured on the host
- README updated with the live URL

### Acceptance Criteria

- `GET /api` returns a successful response from the live URL
- Authentication and core CRUD endpoints work against the deployed API
- Database persists data after restart

---

## Final Backend Submission Checklist

### Code

- [ ] Clean folder structure
- [ ] Meaningful variable names
- [ ] No unnecessary files

### Database

- [ ] Models created
- [ ] Relationships implemented
- [ ] Seed data available (admin, doctors, patients, appointments)

### API

- [ ] Authentication works
- [ ] Role-based access control implemented
- [ ] CRUD operations work
- [ ] Validation implemented
- [ ] Errors handled

### Documentation

- [ ] README complete
- [ ] Postman collection included

### Deployment

- [ ] API publicly accessible
- [ ] Database connected

---

## Backend Assessment Rubric

| Area | Marks |
|---|---|
| Project setup | 10 |
| Database design & Sequelize | 20 |
| Authentication & authorization | 20 |
| API implementation | 25 |
| Validation & error handling | 10 |
| Deployment | 5 |
| Documentation | 5 |
| Code quality | 5 |
| **Total** | **100** |
