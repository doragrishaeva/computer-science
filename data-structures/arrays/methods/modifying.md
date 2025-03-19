# Modifying Arrays in JavaScript

| Method      | Action               | Complexity |
| ----------- | -------------------- | ---------- |
| `push()`    | Add to end           | **O(1)**   |
| `unshift()` | Add to start         | **O(n)**   |
| `pop()`     | Remove from end      | **O(1)**   |
| `shift()`   | Remove from start    | **O(n)**   |
| `splice()`  | Remove, add, replace | **O(n)**   |

🚀 Use push() and pop() when possible, as they are faster than unshift() and shift()!

## **Adding Elements**

### `push()` – Adds elements to the end: O(1)

- Modifies the original array
- Returns new length of the array

```javascript
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
```

### `unshift()` – Adds elements to the beginning: O(n)

- Modifies the original array
- Returns new length of the array
- O(n) complexity, as all elements must shift right

```javascript
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]
```

## **Removing Elements**

### `pop()` – Removes the last element: O(1)

- Modifies the original array
- Returns removed element

```javascript
let arr = [1, 2, 3];
let last = arr.pop();
console.log(arr); // [1, 2]
console.log(last); // 3
```

### `shift()` – Removes the first element: O(n)

- Modifies the original array
- Returns removed element
- O(n) complexity, as all elements must shift left

```javascript
let arr = [1, 2, 3];
let first = arr.shift();
console.log(arr); // [2, 3]
console.log(first); // 1
```

## **Modifying and Removing Elements in Place**

### `splice(start, deleteCount, ...items)` – Remove, add, or replace

- Removes, adds or replaces elements
- Modifies the original array
- Returns an array of removed elements

```javascript
let arr = [1, 2, 3, 4, 5];

// Remove elements (2 elements starting at index 1)
let removed = arr.splice(1, 2);
console.log(arr); // [1, 4, 5]
console.log(removed); // [2, 3]

// Add elements
let arr = [1, 4, 5];
arr.splice(1, 0, 2, 3); // Adds 2, 3 on index 1 (removes 0)
console.log(arr); // [1, 2, 3, 4, 5]

// Replace elements
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 99); // Replace arr[2] on 99
console.log(arr); // [1, 2, 99, 4, 5]
```
