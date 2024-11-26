/*
Binary Search is a search algorithm that finds the position of a target value within a sorted array.
*/

// Binary search function that takes a sorted array and target value as parameters
function binarySearch(arr, target) {
  // Initialize left pointer at start of array
  let left = 0;
  // Initialize right pointer at end of array
  let right = arr.length - 1;

  // Continue searching while left pointer is less than or equal to right pointer
  while (left <= right) {
    // Find middle index
    let mid = Math.floor((left + right) / 2);
    // If target is found at middle, return the index
    if (arr[mid] === target) return mid;
    // If middle value is less than target, search right half
    if (arr[mid] < target) left = mid + 1;
    // If middle value is greater than target, search left half
    else right = mid - 1;
  }
  // Return -1 if target is not found in array
  return -1;
}

// Test the function with a sorted array looking for value 5
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
