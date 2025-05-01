// 2. Moving Average from Data Stream

class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
  }

  next(val) {
    this.queue.push(val);
    this.sum += val;

    if (this.queue.length > this.size) {
      this.sum -= this.queue.shift();
    }

    return this.sum / this.queue.length;
  }
}
