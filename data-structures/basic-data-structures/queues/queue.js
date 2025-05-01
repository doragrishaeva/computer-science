// "Сделай очередь: enqueue, dequeue, peek";

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  peek() {
    return this.isEmpty() ? null : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(" "));
  }
}

// Как могут спросить на собеседовании
// 🔹 "Реализуй очередь с методами enqueue и dequeue"
// 🔹 "Очередь событий — как бы ты это реализовала?"
// 🔹 "Почему shift в массиве — это неэффективно?"
// 🔹 "Сделай очередь без shift (используй два указателя)"
// 🔹 "Реализуй очередь через два стека"

// Частые применения в фронтенде:
// setTimeout, setInterval → очередь задач

// дебаунс и троттлинг событий

// загрузка файлов в очередь

// прокрутка/виртуализация списков
