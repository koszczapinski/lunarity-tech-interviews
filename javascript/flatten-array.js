/*
Flatten an array of arrays using the flat() method
*/

// Method 1: Using the native flat() method
// Function that uses the native flat() method to flatten nested arrays
// The Infinity argument ensures all levels of nesting are flattened
const flattenArray = (arr) => {
  return arr.flat(Infinity);
};

// Test the flattenArray function with a deeply nested array
console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));

// Custom implementation of array flattening using reduce() and recursion
const customFlatten = (arr) => {
  return arr.reduce((acc, curr) => {
    // If current element is an array, recursively flatten it
    // Otherwise, keep the element as is
    return acc.concat(Array.isArray(curr) ? customFlatten(curr) : curr);
  }, []);
};

// Test the customFlatten function with the same nested array
console.log(customFlatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));
