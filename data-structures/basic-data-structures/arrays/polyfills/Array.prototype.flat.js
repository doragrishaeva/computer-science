Array.prototype.myFlat = function (depth = 1) {
  const result = [];

  (function flatten(arr, d) {
    for (let i = 0; i < arr.length; i++) {
      if (!(i in arr)) continue; // skip sparse elements
      const el = arr[i];
      if (Array.isArray(el) && d > 0) {
        flatten(el, d - 1);
      } else {
        result.push(el);
      }
    }
  })(this, depth);

  return result;
};
