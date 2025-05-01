# Sorting Arrays in JavaScript

## `sort()` – Sorting an array: O(n log n)

By default, `sort()` **converts elements to strings and sorts them lexicographically** (dictionary order).

```javascript
// Sorting strings
let arr = ["banana", "apple", "cherry"];
arr.sort();
console.log(arr); // ["apple", "banana", "cherry"]

// Sorting numbers incorrectly
let numbers = [100, 5, 20, 10];
numbers.sort();
console.log(numbers); // [10, 100, 20, 5] (Incorrect! By default, numbers are sorted as strings ("100" < "5"))

// Sorting numbers correctly
let numbers = [100, 5, 20, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 10, 20, 100]
```

## `reverse()`– Reversing the order of elements: O(n)

Reverses the array in place, modifying the original array.

```javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
```

## Summary Table

| Method             | Action                               | Modifies Original? | Complexity            | When to Use?                                                  |
| ------------------ | ------------------------------------ | ------------------ | --------------------- | ------------------------------------------------------------- |
| `sort()`           | Sorts array (default: lexicographic) | ✅ Yes             | **O(n log n)**        | Sorting an array alphabetically (`sort()`)                    |
| `sort(a, b)`       | Sorts numbers in ascending order     | ✅ Yes             | **O(n log n)**        | Sorting numbers in ascending order (`sort((a, b) => a - b)`)  |
| `sort(b, a)`       | Sorts numbers in descending order    | ✅ Yes             | **O(n log n)**        | Sorting numbers in descending order (`sort((a, b) => b - a)`) |
| `reverse()`        | Reverses array order                 | ✅ Yes             | **O(n)**              | Reversing an array (`reverse()`)                              |
| `sort().reverse()` | Sorts first, then reverses           | ✅ Yes             | **O(n log n) + O(n)** | Sorting first, then reversing (`sort().reverse()`)            |
