# Copying Arrays in JavaScript

## `slice()` – Copy a portion or the entire array: O(n)

Creates a **shallow copy** of part or all of an array without modifying the original.

```javascript
// Copying the entire array
let arr = [1, 2, 3];
let copy = arr.slice();
console.log(copy); // [1, 2, 3]

// Extracting part of an array (The second parameter is exclusive (slice(1, 4) gets indices 1 to 3))
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 4);
console.log(sliced); // [2, 3, 4]
```

## `concat()` – Merge arrays and create a copy: O(n)

The concat() method combines arrays without modifying the original ones.

```javascript
// Copying an array with concat()
let arr = [1, 2, 3];
let copy = arr.concat();
console.log(copy); // [1, 2, 3]

// Merging multiple arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2, [5, 6]);
console.log(merged); // [1, 2, 3, 4, 5, 6]
```

## `spread Operator (...)`– The modern way: O(n)

The spread operator (...) is a clean and modern way to copy or merge arrays.

```javascript
// Copying an array
let arr = [1, 2, 3];
let copy = [...arr];
console.log(copy); // [1, 2, 3]

// Merging arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2, 5, 6];
console.log(merged); // [1, 2, 3, 4, 5, 6]
```

## Summary Table

| Method      | Action                      | Modifies Original? | Complexity | When to Use?                                          |
| ----------- | --------------------------- | ------------------ | ---------- | ----------------------------------------------------- |
| `slice()`   | Copy part or full array     | ❌ No              | **O(n)**   | Copy entire array or part of it (`slice(start, end)`) |
| `concat()`  | Merge arrays into a new one | ❌ No              | **O(n)**   | Merge multiple arrays (`concat(arr1, arr2)`)          |
| `...spread` | Copy or merge arrays        | ❌ No              | **O(n)**   | Modern way to copy or merge arrays (`[...arr]`)       |
