Array.prototype.myEvery = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (!callback.call(thisArg, arr[i], i, arr)) {
        return false;
      }
    }
  }

  return true;
};
