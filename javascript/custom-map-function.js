/*
Create a customMap function that works the same as the native map function

Example of usage:
[2,4,6,8].map(x => x * 2) // [4,8,12,16]
[1,2,3,4].customMap(x => x + 5) // [6,7,8,9]

*/

Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

console.log([2, 4, 6, 8].customMap((x) => x * 2)); // [4,8,12,16]
console.log([1, 2, 3, 4].customMap((x) => x + 5)); // [6,7,8,9]
