# Day Sum Solution 🗓️

### Description
A JavaScript function that:
- Accepts a dictionary with keys as `YYYY-MM-DD` and integer values.
- Returns a dictionary where keys are days of the week (`Mon`..`Sun`) and values are summed by weekday.
- Fills missing days with the **mean of previous and next day** when both exist.

---

### Example

**Input**
```js
{
  '2020-01-01': 6,
  '2020-01-04': 9,
  '2020-01-05': 10
}
```

**Output**
```js
{
  Mon: 0,
  Tue: 0,
  Wed: 6,
  Thu: 0,
  Fri: 8,
  Sat: 9,
  Sun: 10
}
```

---

### Run Locally

```bash
npm install
npm test
```

---

### Tech Stack
- JavaScript (Node.js)
- No external dependencies
- Simple and efficient `O(n)` time complexity
