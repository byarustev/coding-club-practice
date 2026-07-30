# Nova Clinic — UI Design Brief (Screens Only)

**For:** Graphics / UI Designer  
**Product:** Clinic Appointment Management System  
**Goal:** Design the screens below. You do not need to read the full technical guides.

---

## Roles (3 experiences)

| Role | Who they are | Main jobs |
|---|---|---|
| **Patient** | Books clinic visits | Register, view doctors, book/cancel appointments, manage profile |
| **Doctor** | Sees assigned patients | View schedule, update appointment status |
| **Admin** | Clinic manager | Manage doctors, patients, and all appointments |

Design should feel healthcare-professional, clean, and trustworthy — not flashy.

---

## Shared / Global

| Screen / Component | Notes |
|---|---|
| **Homepage** | Brand intro + CTAs to Login / Register |
| **Navigation (public)** | Home, Login, Register |
| **Navigation (logged in)** | Role-based links + Logout (see per-role lists below) |
| **Footer** | Clinic name, copyright, contact info |
| **Loading state** | e.g. “Loading appointments…” |
| **Empty state** | e.g. “You have no upcoming appointments” |
| **Error / success messages** | Form errors, API failures, success toasts/banners |
| **Confirmation dialog** | e.g. “Are you sure you want to cancel this appointment?” |

---

## Auth Screens

| # | Screen | Key UI elements |
|---|---|---|
| 1 | **Login** | Email, Password, Submit, link to Register |
| 2 | **Register** | First Name, Last Name, Email, Password, Account Type dropdown (**Patient / Doctor only** — no Admin) |

After login, users land on different dashboards by role.

---

## Patient Screens

**Nav when logged in:** Dashboard · Doctors · Book Appointment · Appointments · Profile · Logout

| # | Screen | What to show |
|---|---|---|
| 3 | **Patient Dashboard** | Welcome message, appointment count, upcoming appointments, profile summary |
| 4 | **Doctors List** | Doctor cards: name, speciality, phone, availability status |
| 5 | **Book Appointment** | Doctor dropdown, date picker, time picker, optional notes, submit |
| 6 | **My Appointments** | List: doctor, date, time, status, notes + **Cancel** action |
| 7 | **Profile** | Name, email, phone, DOB/gender (editable where allowed) |

---

## Doctor Screens

**Nav when logged in:** Dashboard · Appointments · Profile · Logout

| # | Screen | What to show |
|---|---|---|
| 8 | **Doctor Dashboard** | Welcome, today’s/upcoming appointments, counts by status (Pending / Confirmed / Completed), speciality & availability summary |
| 9 | **Doctor Appointments** | List: patient name, date, time, status + actions to set status: **Confirm / Complete / Cancel** |
| 10 | **Profile** | Name, email, phone, speciality (mostly view; keep layout consistent with patient profile) |

---

## Admin Screens

**Nav when logged in:** Dashboard · Doctors · Patients · Appointments · Profile · Logout

| # | Screen | What to show |
|---|---|---|
| 11 | **Admin Dashboard** | Stats cards: total Patients, Doctors, Appointments + shortcuts into management sections |
| 12 | **Manage Doctors** | List + **Add / Edit / Remove** doctor (speciality, phone, active/available) |
| 13 | **Manage Patients** | List patients + **Remove** |
| 14 | **Manage Appointments** | All appointments + **Edit / Delete** |
| 15 | **Profile** | Same shell as other roles |

---

## Priority order (if time is limited)

1. Login + Register  
2. Patient Dashboard + Book Appointment + Appointments  
3. Doctors List  
4. Doctor Dashboard + Appointments  
5. Admin Dashboard + one management table (Doctors)  
6. Profile + Homepage  
7. Empty / loading / error / confirm states  

---

## Design deliverables suggested

- Desktop layouts for all screens above  
- Mobile versions for: Login, Dashboards, Book Appointment, Appointments list  
- Component styles: buttons, inputs, cards, tables, status badges (`Pending`, `Confirmed`, `Completed`, `Cancelled`)  
- Optional: wireframes first, then high-fidelity  

---

## Out of scope for design

- API details, database, JWT, Postman, deployment  
- Admin self-registration (admins are seeded in the system — no “Admin” option on Register)

---

## Quick screen count

**~15 unique screens** + shared nav/footer + 4 system/feedback patterns (loading, empty, error, confirm).
