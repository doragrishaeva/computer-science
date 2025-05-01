// given arr of unique numbers
// return all possible combinations of those numbers

// Input:  [1, 2, 3]
// Output: [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]

function permute(nums) {
  const result = [];

  function backtrack(path, used) {
    // базовый случай: если путь собрал все числа
    if (path.length === nums.length) {
      result.push([...path]); // добавляем копию пути
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // пропускаем уже использованные

      // делаем шаг
      path.push(nums[i]);
      used[i] = true;

      backtrack(path, used); // идём дальше

      // откат (backtrack)
      path.pop();
      used[i] = false;
    }
  }

  backtrack([], Array(nums.length).fill(false));
  return result;
}
