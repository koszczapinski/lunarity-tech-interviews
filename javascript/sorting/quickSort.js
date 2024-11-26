/*
Quick Sort is a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
*/

// Quick sort function that takes an array as parameter
function quickSort(arr) {
  // Base case: if array has 1 or fewer elements, it's already sorted
  if (arr.length <= 1) return arr;

  // Choose pivot element from middle of array
  const pivot = arr[Math.floor(arr.length / 2)];

  // Partition array into three parts:
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);

  // Recursively sort left and right partitions and combine with middle
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Test the quick sort function with sample array
console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));
