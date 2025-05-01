# 🔢 Sorting Algorithms Cheat Sheet

| Algorithm          | Average Time | Worst Time | Space    | Stable | Use Case                                      |
| ------------------ | ------------ | ---------- | -------- | ------ | --------------------------------------------- |
| **Timsort**        | O(n log n)   | O(n log n) | O(n)     | ✅     | Built into JS `.sort()` (V8), stable and fast |
| **Merge Sort**     | O(n log n)   | O(n log n) | O(n)     | ✅     | Large datasets, need stable sorting           |
| **Quick Sort**     | O(n log n)   | O(n²)      | O(log n) | ❌     | Fastest in practice, but not stable           |
| **Insertion Sort** | O(n²)        | O(n²)      | O(1)     | ✅     | Small or nearly sorted arrays                 |
| **Selection Sort** | O(n²)        | O(n²)      | O(1)     | ❌     | Educational purposes                          |
| **Bubble Sort**    | O(n²)        | O(n²)      | O(1)     | ✅     | Teaching & visualizing algorithms             |

## ✅ Stable = Maintains relative order of equal elements

## 📦 Space = Extra memory needed

## 🚀 Use `.sort((a, b) => a - b)` in JS for real-world sorting (Timsort under the hood)

---

> ✨ Tip: Use built-in `.sort()` unless you’re doing interviews or need full control
