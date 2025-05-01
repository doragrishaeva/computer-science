function bfs(root, target) {
  if (!root) return false;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.val === target) {
      return true;
    }

    for (let child of node.children) {
      queue.push(child);
    }
  }

  return false;
}

function bfsSearch(root, target) {
  if (!root) {
    return false;
  }

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node.val === target) {
      return true;
    }

    for (let nodes of node.children) {
      queue.push(nodes);
    }
  }

  return false;
}

// const tree = {
//     val: 'A',
//     children: [
//       {
//         val: 'B',
//         children: [{ val: 'E', children: [] }],
//       },
//       {
//         val: 'C',
//         children: [],
//       },
//       {
//         val: 'D',
//         children: [{ val: 'F', children: [] }],
//       },
//     ],
//   };
