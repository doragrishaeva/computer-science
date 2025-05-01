# Higher-Order Array Functions in JavaScript

Higher-order functions allow you to **transform, filter, or reduce** arrays efficiently.  
These methods make JavaScript **more declarative** and **cleaner** than traditional loops.

## `map()` – Transform elements (returns a new array): O(n)

`map()` applies a function to **each element** and returns a **new array**.

- Does not modify the original array
- Returns a new array of the same length

```javascript
// Doubling numbers
let numbers = [1, 2, 3];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
```

## `filter()` – Select elements based on a condition: O(n)

`filter()` creates a new array with elements that pass a condition.

- Does not modify the original array
- Returns a new array (possibly shorter than the original)

```javascript
// Filtering even numbers
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
```

## `reduce()`– Combine elements into a single value: O(n)

`reduce()` takes an accumulator and applies a function to each element.

- Returns a single value (number, string, object, etc.)
- Can be used for sums, averages, grouping, etc.

```javascript
// Sum of all numbers
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

## `forEach()` – Iterate over elements (no return value): O(n)

`forEach()` executes a function for each element, but does not return anything.

- Best for side effects (logging, updating UI, etc.)
- Does not return a new array (unlike map())

```javascript
// Logging elements
let numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num * 2));
// Output: 2, 4, 6
```

## `some()` – Check if at least one element matches: O(n)

`some()` returns true if at least one element satisfies a condition.

- Returns true or false
- Stops as soon as it finds a match (efficient!)

```javascript
// Checking if an array has negative numbers
let numbers = [1, -2, 3, 4];
let hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative); // true
```

## `every()` – Check if all elements match: O(n)

`every()` returns true if all elements satisfy a condition.

- Returns true or false
- Stops early if a mismatch is found (efficient!)

```javascript
// Checking if all numbers are positive
let numbers = [1, 2, 3, 4];
let allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true
```

## Summary Table

| Method      | Action                                   | Returns        | Modifies Original? | Complexity |
| ----------- | ---------------------------------------- | -------------- | ------------------ | ---------- |
| `map()`     | Transforms elements, creates a new array | New array      | ❌ No              | **O(n)**   |
| `filter()`  | Filters elements based on a condition    | New array      | ❌ No              | **O(n)**   |
| `reduce()`  | Combines elements into a single value    | Single value   | ❌ No              | **O(n)**   |
| `forEach()` | Iterates over elements (no return)       | `undefined`    | ❌ No              | **O(n)**   |
| `some()`    | Checks if at least one match exists      | `true`/`false` | ❌ No              | **O(n)**   |
| `every()`   | Checks if all elements match a condition | `true`/`false` | ❌ No              | **O(n)**   |
