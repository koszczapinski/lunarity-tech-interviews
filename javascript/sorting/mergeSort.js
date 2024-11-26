/*
Merge Sort is a divide-and-conquer algorithm that works by dividing an array into two halves, sorting each half, and then merging the sorted halves back together.
*/

// Main merge sort function that recursively divides and merges the array
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// Helper function to merge two sorted arrays into one sorted array
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([3, 6, 8, 10, 1, 2, 1]));

// Time Complexity: O(n log n) - The array is divided in half log(n) times, and merging takes linear time O(n).
