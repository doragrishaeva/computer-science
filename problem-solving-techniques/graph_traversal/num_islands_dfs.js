// Условие:
// Дан 2D массив grid, состоящий из '1' (земля) и '0' (вода).
// Найди количество отдельных островов (связных '1' по горизонтали и вертикали).

function numIslands(grid) {
  if (!grid.length) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") return;

    grid[r][c] = "0"; // Помечаем как посещённую

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        dfs(r, c);
        count++;
      }
    }
  }

  return count;
}

// 🔹 Один из любимейших вопросов по графам.
// 🔹 Подходит для DFS и BFS.
