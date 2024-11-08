/**
 * Benchmarks a function's performance over multiple iterations
 * @param {Function} fn - Function to benchmark
 * @param {any} input - Input to pass to the function
 * @param {number} iterations - Number of iterations to run (default: 1000)
 */
function benchmark(fn, input, iterations = 1000) {
  const times = [];

  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    fn(input);
    const end = performance.now();
    times.push(end - start);
  }

  const average = times.reduce((a, b) => a + b) / times.length;
  const min = Math.min(...times);
  const max = Math.max(...times);

  console.log({
    Function: fn.name,
    "Average Time": average.toFixed(4) + "ms",
    "Min Time": min.toFixed(4) + "ms",
    "Max Time": max.toFixed(4) + "ms",
    "Sample Size": iterations,
  });
}

/**
 * Generates an array of random numbers with potential duplicates
 * @param {number} size - The desired size of the array
 * @returns {number[]} Array of random integers between 0 and size/2
 *
 * The function creates an array of the specified size and fills it with random numbers.
 * By using size/2 as the maximum value, we ensure there will likely be duplicate values,
 * which is useful for testing deduplication functions.
 */
const generateTestArray = (size) => {
  const arr = []; // Initialize empty array
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * (size / 2)));
  }
  return arr;
};

export { benchmark, generateTestArray };
