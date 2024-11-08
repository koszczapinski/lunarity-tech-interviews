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

export { benchmark };
