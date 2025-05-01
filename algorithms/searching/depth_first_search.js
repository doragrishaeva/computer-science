function dfs(node) {
  if (!node) return;

  console.log(node.val);

  for (let child of node.children) {
    dfs(child);
  }
}

// const tree = {
//     val: 'A',
//     children: [
//       { val: 'B', children: [{ val: 'E', children: [] }] },
//       { val: 'C', children: [] },
//       { val: 'D', children: [{ val: 'F', children: [] }] }
//     ]
//   };
//   A → B → E → C → D → F

function dfsSearch(child, target) {
  if (!child) return false;

  for (let elem of child.children) {
    if (elem.val === target || dfsSearch(elem, target)) {
      return true;
    }
  }

  return false;
}

const tree = {
  val: "A",
  children: [
    {
      val: "B",
      children: [{ val: "E", children: [] }],
    },
    {
      val: "C",
      children: [],
    },
    {
      val: "D",
      children: [{ val: "F", children: [] }],
    },
  ],
};

const elem = dfsSearch(tree, "E");
