// "Как бы ты реализовала простую хеш-таблицу в JS?" (в т.ч. коллизии)

class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.table.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }
    return undefined;
  }

  keys() {
    const keysArr = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let [k] of bucket) {
          keysArr.push(k);
        }
      }
    }
    return keysArr;
  }
}
