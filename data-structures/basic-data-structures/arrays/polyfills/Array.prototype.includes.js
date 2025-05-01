Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
  const arr = this;
  const len = arr.length;

  if (len === 0) return false;

  let start = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);

  for (let i = start; i < len; i++) {
    if (Object.is(arr[i], searchElement)) {
      return true;
    }
  }

  return false;
};
