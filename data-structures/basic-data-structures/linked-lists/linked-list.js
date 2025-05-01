// "Создай односвязный список с методами вставки/удаления";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    this.size++;
  }

  delete(value) {
    if (!this.head) return;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    }

    let current = this.head;
    while (current && current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = current;
    }
  }

  print() {
    let current = this.head;
    let out = "";
    while (current) {
      out += current.value + " → ";
      current = current.next;
    }
    console.log(out + "null");
  }
}

// 🔹 "Реализуй связный список на JS"
// 🔹 "Почему у массива быстрый доступ по индексу, а у Linked List — нет?"
// 🔹 "В чём преимущества связного списка?"
// 🔹 "Реализуй reverse() для связного списка"
// 🔹 "Найди цикл в связанном списке" (→ Floyd’s cycle detection)
