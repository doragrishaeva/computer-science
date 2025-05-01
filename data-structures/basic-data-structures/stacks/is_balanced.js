function isBalanced(str) {
  const stack = new Stack();
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else if ([")", "]", "}"].includes(char)) {
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.isEmpty();
}

console.log(isBalanced("({[]})")); // 👉 true
console.log(isBalanced("({[})")); // 👉 false
