// Условие:
// Дан массив nums, где каждый элемент — максимум шагов, на которые можно прыгнуть вперёд.
// Определи, можно ли допрыгать до конца массива.

// Input: nums = [2,3,1,1,4] → Output: true
// Input: nums = [3,2,1,0,4] → Output: false

function canJump(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}

// 🔹 Классика жадного подхода — на каждом шаге максимизируем достижимую позицию.
// 🔹 Часто идёт в паре с задачей “Jump Game II” (минимум прыжков до конца).
