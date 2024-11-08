/*
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.
*/

// Bubble sort function that takes an array as parameter
function bubbleSort(arr) {
  // Outer loop to iterate through entire array
  for (let i = 0; i < arr.length; i++) {
    // Inner loop to compare adjacent elements
    // Note: We subtract i because after each pass, the largest element is already in place
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare adjacent elements and swap if they are in wrong order
      if (arr[j] > arr[j + 1]) {
        // Swap elements using array destructuring
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // Return the sorted array
  return arr;
}

// Test the bubble sort function with sample array
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
