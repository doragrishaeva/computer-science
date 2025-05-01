# Searching in Arrays in JavaScript

### `indexOf()` – Find the index of an element: O(n)

- Finds the first occurrence of an element and returns its index.
- Returns `-1` if the element is not found.
- Searches from left to right
- Strict comparison (===)

```javascript
let arr = [10, 20, 30, 40, 50];

console.log(arr.indexOf(30)); // 2
console.log(arr.indexOf(100)); // -1 (not found)
```

### `lastIndexOf()` – Find the last occurrence: O(n)

- Same as indexOf(), but searches from the end.

```javascript
let arr = [10, 20, 30, 20, 50];

console.log(arr.lastIndexOf(20)); // 3 (last occurrence of 20)
```

### `includes()` – Check if an element exists: O(n)

- Returns true if the array contains the element, otherwise false.
- Strict comparison (===)

```javascript
let arr = [10, 20, 30];

console.log(arr.includes(20)); // true
console.log(arr.includes(100)); // false
```

### `find()` – Find the first matching element: O(n)

- Returns the first element that satisfies a condition.
- Returns undefined if no match is found.
- Allows custom conditions (more flexible than indexOf())

```javascript
let arr = [10, 20, 30, 40, 50];

let found = arr.find((num) => num > 25);
console.log(found); // 30 (first match)
```

### `findIndex()` – Find the index of the first match: O(n)

- Works like find(), but returns the index instead of the element.
- Useful when you need the position, not the value
- Returns -1 if no match is found

```javascript
let arr = [10, 20, 30, 40, 50];

let index = arr.findIndex((num) => num > 25);
console.log(index); // 2 (index of 30)
```

## Summary

| Method          | Action                         | Returns                | Complexity |
| --------------- | ------------------------------ | ---------------------- | ---------- |
| `indexOf()`     | Find index of first occurrence | Index or `-1`          | **O(n)**   |
| `lastIndexOf()` | Find index of last occurrence  | Index or `-1`          | **O(n)**   |
| `includes()`    | Check if element exists        | `true`/`false`         | **O(n)**   |
| `find()`        | Find first matching element    | Element or `undefined` | **O(n)**   |
| `findIndex()`   | Find index of first match      | Index or `-1`          | **O(n)**   |

---

## When to Use What?

| Situation                                              | Best Method     |
| ------------------------------------------------------ | --------------- |
| Need to find an element's **index**                    | `indexOf()`     |
| Need to find the **last occurrence**                   | `lastIndexOf()` |
| Just checking if an element **exists**                 | `includes()`    |
| Searching based on a **condition**                     | `find()`        |
| Searching based on a **condition, but need the index** | `findIndex()`   |
