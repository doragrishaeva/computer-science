// thisArg is optional argument which will be used as this in callback
// map callbackFn specification is callbackFn(currentValue, index, array)

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];
  // ref to the array to avoid this[i]
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    // Check if the current index is in the array - protection from sparse arrays
    if (i in arr) {
      // invoke callback with thisArg
      result.push(callback.call(thisArg, arr[i], i, arr));
    }
  }

  return result;
};

const numbers = [1, 2, 3];
const doubled = numbers.myMap((n) => n * 2);
console.log(doubled); // [2, 4, 6]
