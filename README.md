# 🗓️ Day Sum Solution

A **JavaScript** solution that processes date–value pairs and returns sums grouped by **day of the week**, with **interpolation for missing days**.

---

## 📘 Problem Description

Given an object (dictionary) where keys are dates in `YYYY-MM-DD` format and values are integers, return a new object where:

- Keys are **days of the week** (`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`)
- Values are **sums of all values** for that day
- Missing days are filled with the **mean of previous and next available days** (rounded to the nearest integer)
- Interpolation occurs **only when exactly one day is missing** between two known data points

---

## ✨ Features

✅ Efficient **O(n)** time complexity  
✅ Proper day-of-week mapping  
✅ Intelligent interpolation for missing days  
✅ Comprehensive test coverage  
✅ Handles edge cases (empty input, single day, multiple entries per day)

---

## 📁 Project Structure

```

day-sum-solution/
│
├── src/
│   └── solution.js          # Main solution implementation
│
├── tests/
│   └── test.js              # Comprehensive test suite
│
├── package.json             # Node.js configuration
└── README.md                # Project documentation

````

---

## ⚙️ Installation & Setup

### 🧩 Prerequisites
- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (comes with Node.js)

### 🚀 Steps

```bash
# Clone the repository
git clone <repository-url>
cd day-sum-solution

# Verify Node.js installation
node --version
npm --version

# Install dependencies
npm install

# Run tests
npm test
````

---

## 🧠 Usage

### Basic Example

```javascript
const solution = require('./src/solution');

// Example 1: Consecutive days
const input1 = {
  '2020-01-01': 6,
  '2020-01-02': 7,
  '2020-01-03': 8,
  '2020-01-04': 9,
  '2020-01-05': 10
};

const result1 = solution(input1);
console.log(result1);
// Output: { Mon: 0, Tue: 0, Wed: 6, Thu: 7, Fri: 8, Sat: 9, Sun: 10 }

// Example 2: Missing days with interpolation
const input2 = {
  '2020-01-01': 6,
  '2020-01-04': 9,
  '2020-01-05': 10
};

const result2 = solution(input2);
console.log(result2);
// Output: { Mon: 0, Tue: 0, Wed: 6, Thu: 0, Fri: 8, Sat: 9, Sun: 10 }
```

---

## 🧩 API

```javascript
/**
 * Processes date-value pairs and returns sums by day of week
 * @param {Object} D - Input object with dates as keys and integers as values
 * @returns {Object} - Object with days as keys and integer sums as values
 */
function solution(D) {
  // implementation
}
```

---

## 🧪 Test Cases

Comprehensive tests cover:

* ✅ Base cases (examples from problem statement)
* ✅ Edge cases (empty input, single day)
* ✅ Multiple entries for the same day
* ✅ Interpolation logic for missing days
* ✅ All days present
* ✅ Weekend-only data

### Running Tests

```bash
npm test
```

**Expected output:**

```
Running tests...

✓ Base test case - consecutive days
✓ Missing days with interpolation
✓ Complex missing days case
✓ Empty input
✓ Single day input
✓ All days present
✓ Multiple entries for same day
✓ Only weekend days

✅ 8/8 test cases passed!
```

---

## 🧮 Algorithm Explanation

### Step 1: Day Mapping

* Convert `YYYY-MM-DD` strings to `Date` objects
* Map each to a weekday (Mon–Sun)
* Sum values for each day

### Step 2: Interpolation

* Only interpolate when exactly **one day** is missing between two data points
* Use the **rounded mean** of adjacent days
* Leave other missing days as `0`

#### Example

**Input:**

```
Wed = 6, Sat = 9, Sun = 10
```

**Pattern:**

```
Data - No Data - No Data - Data
```

**Interpolation:**
Only **Friday** (between Wed and Sat) gets interpolated.

**Result:**

```
Thu = 0, Fri = 8
```

---

## ⚙️ Technical Details

| Property             | Description                                   |
| -------------------- | --------------------------------------------- |
| **Time Complexity**  | O(n)                                          |
| **Space Complexity** | O(1) (fixed 7-day output)                     |
| **Date Range**       | 1970-01-01 → 2100-01-01                       |
| **Output Order**     | Always `Mon → Sun`                            |
| **Error Handling**   | Ignores invalid or malformed dates gracefully |

---

## 🧩 Development

### Adding New Tests

Add test cases to `tests/test.js`:

```javascript
test('New test case', () => {
  const input = {
    '2023-01-01': 5,
    '2023-01-03': 8
  };

  const expected = {
    Mon: 0,
    Tue: 0,
    Wed: 5,
    Thu: 0,
    Fri: 7,
    Sat: 8,
    Sun: 0
  };

  const result = solution(input);
  assertDayOrder(result, expected);
});
```

---


