class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(value) {
    this.storage[this.size] = value;
    this.size++;
  }

  pop() {
    if (this.size === 0) return undefined;
    this.size--;
    const value = this.storage[this.size];
    delete this.storage[this.size];
    return value;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }
}
