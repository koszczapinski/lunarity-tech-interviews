/**
 * Creates a debounced version of a function that delays its execution
 * until after a specified wait time has elapsed since the last time it was called
 *
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} - The debounced function
 */

function customDebounce(func, wait) {
  // Store the timeout ID to track pending executions
  let timeoutId;

  // Return a wrapper function that handles the debouncing
  return function (...args) {
    // Clear any existing timeout to cancel pending executions
    clearTimeout(timeoutId);

    // Set a new timeout that will execute after the wait period
    timeoutId = setTimeout(() => {
      // Call the original function with the correct 'this' context and arguments
      func.apply(this, args);
    }, wait);
  };
}

// Example usage: Create a debounced search function that only executes
// after 500ms of no additional calls
const debouncedSearch = customDebounce((searchTerm) => {
  console.log("Searching for:", searchTerm);
}, 500);

// If called multiple times rapidly, only the last call executes
debouncedSearch("a");
debouncedSearch("ap");
debouncedSearch("app"); // Only this one will execute after 500ms
