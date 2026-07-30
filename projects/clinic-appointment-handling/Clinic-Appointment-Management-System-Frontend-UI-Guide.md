# Clinic Appointment Management System

## Frontend UI Implementation Guide

| | |
|---|---|
| **Project Type** | Full-Stack Web Development Capstone |
| **Part** | Part 2: Frontend Application Development |
| **Level** | Intermediate |
| **Estimated Duration** | 2–3 Weeks |

---

## 1. Project Introduction

### Background

Nova Clinic requires a user-friendly web application that allows patients, doctors, and administrators to interact with the clinic management system.

The backend API has already been created.

Your responsibility as the frontend developer is to build a responsive web interface that communicates with the API and allows users to perform their required tasks.

**The application should provide different experiences depending on the user's role:**

- Patient
- Doctor
- Administrator

---

## 2. Frontend Learning Objectives

By completing this project, you should demonstrate your ability to:

1. Build a complete frontend application.
2. Create reusable UI components.
3. Work with JavaScript events and the DOM.
4. Consume REST APIs.
5. Handle asynchronous operations.
6. Manage user authentication.
7. Create forms with validation.
8. Display dynamic data.
9. Implement role-based interfaces.
10. Build responsive layouts.
11. Deploy a frontend application.

---

## 3. Required Technology Stack

| Area | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 |
| Programming | JavaScript ES6+ |
| API Communication | Fetch API |
| Version Control | Git + GitHub |
| Deployment | Vercel / Netlify |

### Optional Technologies

Students may use:

- Bootstrap
- Tailwind CSS
- React (if covered separately)

However, the focus should remain on understanding frontend fundamentals.

---

## 4. Frontend Project Structure

The application should follow a clean structure.

```
clinic-frontend/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── js/
│   ├── config.js
│   ├── api.js
│   ├── auth.js
│   ├── doctors.js
│   ├── appointments.js
│   └── dashboard.js
│
├── pages/
│   ├── login.html
│   ├── register.html
│   ├── patient-dashboard.html
│   ├── doctor-dashboard.html
│   ├── admin-dashboard.html
│   ├── doctors.html
│   ├── book-appointment.html
│   ├── appointments.html
│   └── profile.html
│
├── index.html
│
├── README.md
└── .gitignore
```

---

## Phase 1: Project Setup

### Objective

Create the frontend foundation.

### Tasks

1. Create the project repository.
2. Set up HTML, CSS, and JavaScript files.
3. Create asset folders.
4. Configure the API base URL.
5. Create the initial pages:

   - Homepage (`index.html`)
   - Login page (`pages/login.html`)
   - Registration page (`pages/register.html`)

### API Configuration

Create `js/config.js`:

```javascript
const API_URL = "http://localhost:5000/api";
```

When deploying, update `API_URL` to your live backend URL (for example, `https://your-api.onrender.com/api`).

Document both local and production values in your README.

### Deliverables

Submit:

- GitHub repository
- Initial folder structure
- Basic pages created
- API config file

### Acceptance Criteria

The project:

- Opens successfully in the browser
- Has organised folders
- Uses external CSS and JavaScript files
- Has a configurable `API_URL`

---

## Phase 2: Application Layout

### Objective

Create the shared structure used across the application.

### Required Layout Components

#### Navigation Bar

The navigation should contain:

**Public users:**

- Home
- Login
- Register

**Authenticated users (role-aware):**

| Role | Links |
|---|---|
| Patient | Dashboard, Doctors, Book Appointment, Appointments, Profile, Logout |
| Doctor | Dashboard, Appointments, Profile, Logout |
| Admin | Dashboard, Doctors, Patients, Appointments, Profile, Logout |

#### Footer

Include:

- Clinic name
- Copyright information
- Contact information

### Deliverables

Create reusable:

- Navigation
- Footer
- Page container

### Acceptance Criteria

All pages share a consistent layout.

---

## Phase 3: User Registration Interface

### Objective

Allow new users to create accounts.

### Page

`pages/register.html`

### Required Fields

The registration form must contain:

| Section | Fields |
|---|---|
| Personal Information | First Name, Last Name, Email, Password |
| Account Type | Dropdown: **Patient**, **Doctor** |

### Important Role Rules

| Role | Registration behaviour |
|---|---|
| Patient | Public self-registration allowed |
| Doctor | Public self-registration creates a **user account only**. An admin must later create the Doctor profile (speciality, phone, availability). |
| Admin | **Not available** in the registration form. Admin accounts come from backend seed data only. |

### Form Behaviour

When the user submits:

1. Validate input.
2. Send data to the API.

**API endpoint:**

```
POST /api/auth/register
```

Request body example:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@gmail.com",
  "password": "Password123",
  "role": "patient"
}
```

### Success Behaviour

Display:

```
Account created successfully
```

Then redirect the user to login.

### Error Behaviour

Display meaningful messages.

Examples:

- Email already exists
- Password is too short

### Deliverables

- Registration page
- Form validation
- API integration

---

## Phase 4: Login System

### Objective

Allow users to securely access the application.

### Page

`pages/login.html`

### Fields

| Field | Type |
|---|---|
| Email | Text input |
| Password | Password input |

### API Endpoint

```
POST /api/auth/login
```

### After Successful Login

Store in `localStorage`:

- JWT token
- User information
- User role

Example:

```javascript
localStorage.setItem("token", response.token);
localStorage.setItem("user", JSON.stringify(response.user));
localStorage.setItem("role", response.user.role);
```

### Redirect Rules

| Role | Redirect To |
|---|---|
| Patient | `pages/patient-dashboard.html` |
| Doctor | `pages/doctor-dashboard.html` |
| Admin | `pages/admin-dashboard.html` |

### Acceptance Criteria

- Invalid credentials are rejected
- Successful login redirects correctly by role
- User remains logged in after page refresh

---

## Phase 5: Route Protection

### Objective

Prevent unauthenticated or unauthorized users from accessing protected pages.

### Requirements

On every protected page, run an auth check when the page loads:

1. If no token exists in `localStorage`, redirect to `login.html`.
2. If the user's role is not allowed on that page, redirect to their correct dashboard.
3. Logout must clear `token`, `user`, and `role` from `localStorage`, then redirect to login.

Example:

```javascript
function requireAuth(allowedRoles = []) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  if (allowedRoles.length && !allowedRoles.includes(role)) {
    // redirect to the correct dashboard for this role
  }
}
```

### Protected Pages

| Page | Allowed Roles |
|---|---|
| `patient-dashboard.html` | Patient |
| `doctor-dashboard.html` | Doctor |
| `admin-dashboard.html` | Admin |
| `doctors.html` | Patient, Admin |
| `book-appointment.html` | Patient |
| `appointments.html` | Patient, Doctor, Admin |
| `profile.html` | Patient, Doctor, Admin |

### Acceptance Criteria

- Visiting a protected page without login redirects to login
- A patient cannot open the admin dashboard
- Logout clears session data

---

## Phase 6: Patient Dashboard

### Objective

Create the patient experience.

### Page

`pages/patient-dashboard.html`

### Dashboard Information

Display:

- Welcome message (include the patient's name)
- Upcoming appointments
- Appointment count
- Profile summary

### API Integration

```
GET /api/appointments
GET /api/auth/me
```

### Deliverables

Dashboard displaying live API data.

---

## Phase 7: Doctor Dashboard

### Objective

Create the doctor experience.

### Page

`pages/doctor-dashboard.html`

### Dashboard Information

Display:

- Welcome message (include the doctor's name)
- Today's / upcoming assigned appointments
- Appointment count by status (Pending, Confirmed, Completed)
- Profile summary (speciality, availability)

### API Integration

```
GET /api/appointments
GET /api/auth/me
```

### Quick Actions

From the dashboard, a doctor should be able to:

- View full appointment list
- Update an appointment status (Confirm / Complete / Cancel)

### Acceptance Criteria

- Only appointments assigned to the logged-in doctor are shown
- Status updates call the appointments API
- Loading and empty states are handled

---

## Phase 8: Doctor Listing

### Objective

Allow patients (and admins) to view available doctors.

### Page

`pages/doctors.html`

### Display

Each doctor card should contain:

- Doctor name
- Speciality
- Phone number
- Availability status

Example:

```
Dr Sarah Smith

Speciality: Dentist
Status: Available
```

### API Endpoint

```
GET /api/doctors
```

### Acceptance Criteria

- Doctors load dynamically
- Loading state is displayed
- Errors are handled

---

## Phase 9: Appointment Booking Interface

### Objective

Allow patients to book appointments.

### Page

`pages/book-appointment.html`

### Form Fields

| Field | Description |
|---|---|
| Doctor | Dropdown populated from `GET /api/doctors` |
| Date | Date selector |
| Time | Time selector |
| Notes | Optional text area |

### API Endpoint

```
POST /api/appointments
```

### Validation Rules

The frontend must check:

- Doctor is selected
- Date is selected
- Time is selected
- Date is not in the past

### Success Message

Example:

```
Appointment booked successfully
```

---

## Phase 10: Appointment Management

### Objective

Allow users to view and manage appointments.

### Page

`pages/appointments.html`

Show different content based on the logged-in role.

### Patient View

**Display:**

- Doctor
- Date
- Time
- Status
- Notes

**Actions:**

- Cancel appointment (`PUT /api/appointments/:id` with status `Cancelled`)

### Doctor View

**Display:**

- Patient name
- Appointment date
- Time
- Status

**Actions:**

Update status to:

- Confirm
- Complete
- Cancel

### Admin View

**Display:**

- All appointments (patient, doctor, date, time, status)

**Actions:**

- Edit
- Delete (`DELETE /api/appointments/:id`)

---

## Phase 11: Profile Management

### Objective

Allow users to manage personal information.

### Page

`pages/profile.html`

### Display

| Field | Source |
|---|---|
| Name | User (`firstName`, `lastName`) |
| Email | User |
| Phone | Patient or Doctor profile |
| Additional information | Date of birth / gender (patients), speciality (doctors) |

### API Endpoints

| Action | Endpoint |
|---|---|
| Load profile | `GET /api/auth/me` |
| Update patient profile | `PUT /api/patients/:id` |
| Update doctor profile | `PUT /api/doctors/:id` (admin only for full update; doctors may be view-only if backend restricts this) |

### Features

Users can:

- View profile
- Update editable profile fields (patients update their own patient record)

### Acceptance Criteria

- Profile data loads from the API
- Successful updates show a confirmation message
- Validation errors are displayed clearly

---

## Phase 12: Admin Dashboard

### Objective

Create an administrative control panel.

### Page

`pages/admin-dashboard.html`

### Dashboard Statistics

Display totals for:

- Patients
- Doctors
- Appointments

### Management Sections

#### Doctors

Admin can:

- Add doctor (link Doctor profile to an existing doctor user)
- Edit doctor
- Remove doctor

**API:** `POST /api/doctors`, `PUT /api/doctors/:id`, `DELETE /api/doctors/:id`

#### Patients

Admin can:

- View patients
- Remove patients

**API:** `GET /api/patients`, `DELETE /api/patients/:id`

#### Appointments

Admin can:

- View all appointments
- Delete appointments

**API:** `GET /api/appointments`, `DELETE /api/appointments/:id`

### Acceptance Criteria

- Statistics reflect live API data
- Only users with role `admin` can access this page

---

## Phase 13: Frontend API Layer

### Objective

Organise communication with the backend.

Create a central API helper in `js/api.js` that uses `API_URL` from `js/config.js`.

Example:

```javascript
async function apiRequest(url, options = {}) {
  const token = localStorage.getItem("token");

  const response = await fetch(API_URL + url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
}
```

### Requirements

All API calls should:

- Use the shared `apiRequest` helper
- Handle errors
- Show loading states
- Display user-facing messages

---

## Phase 14: User Experience Improvements

### Objective

Improve application quality.

### Required Improvements

| Type | Example |
|---|---|
| Loading States | `Loading appointments...` |
| Empty States | `You have no upcoming appointments` |
| Error Messages | `Unable to load doctors. Please try again.` |
| Confirmation Messages | `Are you sure you want to cancel this appointment?` |

---

## Phase 15: Responsive Design

### Objective

Ensure the application works on different devices.

The application must support:

- Desktop
- Tablet
- Mobile

### Required Screens

Test:

- Login
- Patient / Doctor / Admin dashboards
- Appointment booking
- Appointment list

---

## Phase 16: Testing Checklist

Before submission, verify:

### Authentication

- [ ] User can register as patient or doctor
- [ ] Admin cannot be created via the registration form
- [ ] User can login
- [ ] Logout works and clears localStorage
- [ ] Protected pages cannot be accessed without login
- [ ] Wrong role is redirected away from unauthorized pages

### Patients

- [ ] Can view doctors
- [ ] Can book appointment
- [ ] Can view appointments
- [ ] Can cancel appointment
- [ ] Can view / update own profile

### Doctors

- [ ] Can access doctor dashboard
- [ ] Can view assigned appointments only
- [ ] Can update appointment status

### Admin

- [ ] Can manage doctors
- [ ] Can manage patients
- [ ] Can manage appointments
- [ ] Can view dashboard statistics

### UI

- [ ] Responsive design
- [ ] No broken links
- [ ] Forms validate correctly
- [ ] Error messages display properly

---

## Phase 17: Deployment

### Objective

Publish the application online.

**Recommended platforms:**

- Vercel
- Netlify
- GitHub Pages

### Deployment Requirements

The student must provide:

- Live URL
- GitHub repository
- Setup instructions
- `API_URL` pointed at the deployed backend

### Acceptance Criteria

- Live site loads without errors
- Login and core flows work against the live API
- README includes the live frontend URL

---

## Final Frontend Submission Checklist

### Code

- [ ] Clean folder structure
- [ ] Reusable functions
- [ ] Proper naming conventions
- [ ] Configurable `API_URL`

### Functionality

- [ ] Authentication works
- [ ] Route protection works
- [ ] API integration complete
- [ ] All required pages implemented (including all three dashboards)

### User Experience

- [ ] Responsive layout
- [ ] Clear feedback messages
- [ ] Professional appearance

### Documentation

- [ ] README completed
- [ ] Screenshots included
- [ ] Deployment instructions included

---

## Frontend Assessment Rubric

| Area | Marks |
|---|---|
| Project structure | 10 |
| HTML/CSS implementation | 20 |
| JavaScript functionality | 20 |
| API integration | 20 |
| Authentication & route protection | 15 |
| Responsive design | 10 |
| Documentation | 5 |
| **Total** | **100** |
