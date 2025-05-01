# Arrays in JavaScript

To confidently work with arrays in JavaScript, you need to:

- Know the syntax and ways to create arrays.
- Be proficient with fundamental methods for modification, searching, filtering, and sorting.
- Understand how higher-order functions like `map`, `reduce`, and `filter` work.
- Be familiar with patterns such as the **two-pointer method** and **sliding window**, and know how to apply them to solve problems.
- Understand mutability and how to work with immutable structures.
- Practice with real-world problems, analyzing both your own and others' solutions.

## **Basics of Arrays**

**Array** - a collection of values that can be accessed by an index.

In JavaScript, arrays can store values of different types, including **numbers, strings, objects, functions, and even other arrays**.

### **Ways to Declare Arrays:**

**Array Literals:** (recommended)

```javascript
let arr = [1, 2, 3];
```

**Array Constructor:** (not recommended)

```javascript
let arr = new Array(1, 2, 3);
console.log(arr); // [1, 2, 3]

let emptyArr = new Array(5); // Array with length = 5, but without values
console.log(arr); // [empty × 5]

let arr = new Array(5).fill(0); // Can be safely used // [0, 0, 0, 0, 0]
```

**Array.of():** (creates array from passed values)

```javascript
let arr = Array.of(1, 2, 3); // [1, 2, 3]
let singleElement = Array.of(5); // [5]
let emptyArray = Array.of(); // []
```

**Array.from():** (creates array from iterable objects, like Set, strings, Map, NodeList)

- Array.from(iterable) – creates array from strings, Set, Map, NodeList
- Array.from({ length: n }, fn) – creates array with generated values (alternative to **new Array(n).fill().map()**)

```javascript
let arr = Array.from([1, 2, 3]); // Array copy

// String -> Array
let arr = Array.from("hello");
console.log(arr); // ['h', 'e', 'l', 'l', 'o']

// Set -> Array removes duplicates
let uniqueArr = Array.from(new Set([1, 2, 2, 3, 3]));
console.log(uniqueArr); // [1, 2, 3]

// Map -> Array (if need to extract keys or values from Map)
let map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

let keys = Array.from(map.keys());
console.log(keys); // [1, 2, 3]

let values = Array.from(map.values());
console.log(values); // ["one", "two", "three"]

// NodeList -> Array
let divs = document.querySelectorAll("div"); // NodeList
let divArray = Array.from(divs);

// Array.from({ length: n }, callback)
let randomNumbers = Array.from({ length: 5 }, () => Math.random());
console.log(randomNumbers); // [0.42, 0.87, 0.15, 0.99, 0.33]
```

**Spread operator:** (useful for immutubal structures)

```javascript
let arr1 = [1, 2, 3];
let copy = [...arr1];

let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

### **Accessing and Modifuying Elements:**

Elements are accessed by index (starting from 0):

```javascript
console.log(arr[0]); // 1
```

Modifying an element at a specific index:

```javascript
arr[1] = 42; // Changes the second element to 42
```

JavaScript arrays are **dynamic**, meaning their length can change:

```javascript
arr[10] = "new"; // The array grows longer, and empty positions are `undefined`
```
