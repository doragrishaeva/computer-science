// 1. Implement Queue using Stacks

// Реализовать очередь (FIFO: First In — First Out),
// используя только стек (LIFO: Last In — First Out).

// Idea: use two stacks (inStack and outStack)
// Enqueue -> push into inStack
// Dequeue -> if outStack empty, move all from inStack to outStack, then pop

class MyQueue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(x) {
    this.inStack.push(x);
  }

  //   Очередь должна возвращать самый первый добавленный элемент.
  // Но в стеке нет доступа к первому элементу напрямую — только к последнему.
  // Вот как мы решаем эту проблему:
  //   переливаем inStack в outStack, но в обратном порядке:
  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  peek() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  isEmpty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}
