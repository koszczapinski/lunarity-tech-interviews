/*
Merge Sort is a divide-and-conquer algorithm that works by dividing an array into two halves, sorting each half, and then merging the sorted halves back together.
*/

// Main merge sort function that recursively divides and merges the array
function mergeSort(arr) {
  // Base case: if array has 1 or fewer elements, it's already sorted
  if (arr.length <= 1) return arr;

  // Find the middle point to divide array into two halves
  const mid = Math.floor(arr.length / 2);
  // Recursively sort the left half
  const left = mergeSort(arr.slice(0, mid));
  // Recursively sort the right half
  const right = mergeSort(arr.slice(mid));

  // Merge the sorted halves
  return merge(left, right);
}

// Helper function to merge two sorted arrays into one sorted array
function merge(left, right) {
  const result = [];
  let i = 0, j = 0; // Pointers for left and right arrays

  // Compare elements from both arrays and merge in sorted order
  while (i < left.length && j < right.length) {
    result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }

  // Concatenate remaining elements (if any)
  // Only one of these slices will have elements
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// Test the merge sort function with sample array
console.log(mergeSort([3, 6, 8, 10, 1, 2, 1]));
