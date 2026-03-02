# JavaScript Logic-Only Practice Sheet  
## Do These Before You Touch the DOM

Use this sheet **after** you know variables, types, operators, functions, and conditionals — and **before** you connect JavaScript to the page (DOM).  
Work in the **browser console** or a single `script.js` with `console.log()` only. No HTML elements, no `getElementById`, no buttons.

**Why:** Getting comfortable with *logic* first reduces confusion when you add DOM (selecting elements, events, updating the page). Think in JS; then plug it into the page.

---

## 1. Grading logic

**Task:** Write a function `getGrade(score)` that takes a number (0–100) and returns a letter grade.

- 90–100 → `"A"`
- 80–89 → `"B"`
- 70–79 → `"C"`
- 60–69 → `"D"`
- Below 60 → `"F"`

Use `if / else if / else`. Then call it with different scores and `console.log(getGrade(85))` etc.

**Extension:** If score is less than 0 or greater than 100, return `"Invalid score"`.

---

## 2. Temperature classifier

**Task:** Write a function `classifyTemp(celsius)` that takes a number (temperature in Celsius) and returns a string:

- Below 0 → `"Freezing"`
- 0–15 → `"Cold"`
- 16–25 → `"Mild"`
- Above 25 → `"Hot"`

Log the result for a few values, e.g. `console.log(classifyTemp(22))`.

**Extension:** Add a second parameter `unit` (`"C"` or `"F"`). If `unit === "F"`, convert to Celsius first: `celsius = (fahrenheit - 32) * 5/9`, then classify.

---

## 3. Even or odd

**Task:** Write a function `isEven(num)` that returns `true` if the number is even, `false` if odd.  
Use the modulo operator: `num % 2 === 0`.

Call it for a few numbers and log the result.

**Extension:** Write `isOdd(num)` using `!isEven(num)`.

---

## 4. Simple password validator

**Task:** Write a function `isValidPassword(password)` that takes a string and returns `true` only if:

- Length is at least 8 characters
- It contains at least one number (hint: loop over the string or use a regex later)

Use variables, conditionals, and a loop (e.g. `for` over the string).  
Log results for `"short"`, `"longenough"`, `"pass123"`.

**Extension:** Add a check for at least one uppercase letter.

---

## 5. Mini calculator (logic only)

**Task:** Write a function `calculate(a, b, operation)` where `operation` is `"add"`, `"subtract"`, `"multiply"`, or `"divide"`.  
Return the result of that operation on `a` and `b`.  
For `"divide"`, if `b === 0`, return `null` (or a string like `"Error"`) instead of dividing.

Call it and log:  
`calculate(10, 3, "add")`, `calculate(10, 0, "divide")`.

---

## 6. FizzBuzz (classic)

**Task:** Write a function `fizzBuzz(max)` that loops from 1 to `max` (e.g. 20) and for each number:

- If divisible by 3 and 5 → log `"FizzBuzz"`
- Else if divisible by 3 → log `"Fizz"`
- Else if divisible by 5 → log `"Buzz"`
- Else → log the number

Use a `for` loop and conditionals. No DOM — only `console.log()`.

---

## How to use this in the bootcamp

- **Session 7:** After variables/types/operators, do **1 (Grading)** and **2 (Temperature)** in the console.
- **Session 8:** After functions and conditionals, do **3 (Even/odd)**, **4 (Password)**, and **5 (Calculator)**.  
  Optionally **6 (FizzBuzz)** if time.
- Keep **no DOM** until Session 9; then the same kind of logic will drive your event handlers and DOM updates.

---

## Quick reference

- **Conditionals:** `if (condition) { } else if (condition) { } else { }`
- **Modulo:** `n % 2 === 0` → even
- **String length:** `str.length`
- **Loop over string:** `for (let i = 0; i < str.length; i++) { str[i] }`
- **Return early:** `if (b === 0) return "Error";`

Use this sheet as your "logic gym" before touching the DOM.
