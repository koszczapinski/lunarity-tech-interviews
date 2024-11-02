/*
Create a customMap function that works the same as the native map function

Example of usage:
[2,4,6,8].map(x => x * 2) // [4,8,12,16]
[1,2,3,4].customMap(x => x + 5) // [6,7,8,9]

*/

// Add customMap method to Array prototype to mimic native map functionality
Array.prototype.customMap = function (callback) {
  // Initialize empty array to store mapped values
  const result = [];
  // Iterate through each element of the array
  for (let i = 0; i < this.length; i++) {
    // Apply callback to current element and add result to output array
    result.push(callback(this[i]));
  }
  // Return the new mapped array
  return result;
};

// Test cases
console.log([2, 4, 6, 8].customMap((x) => x * 2)); // [4,8,12,16]
console.log([1, 2, 3, 4].customMap((x) => x + 5)); // [6,7,8,9]
