/*
Create a function that reverses an array using three different methods
*/

// Method 1: Using spread operator and reverse() native method
function reverseArraySpread(a) {
  return [...a].reverse();
}

// Method 2: Using a loop
function reverseArrayLoop(a) {
  const reversed = [];
  for (let i = a.length - 1; i >= 0; i--) {
    reversed.push(a[i]);
  }
  return reversed;
}

// Method 3: Using map()
function reverseArrayMap(a) {
  return a.map((_, index) => a[a.length - 1 - index]);
}

// Test cases
const testArray = Array.from({ length: 1000 }, (_, i) => i);

// Benchmark function
// TODO: move to separate file
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
    'Function': fn.name,
    'Average Time': average.toFixed(4) + 'ms',
    'Min Time': min.toFixed(4) + 'ms',
    'Max Time': max.toFixed(4) + 'ms',
    'Sample Size': iterations
  });
}

// Usage:
benchmark(reverseArrayLoop, testArray);
benchmark(reverseArraySpread, testArray);
benchmark(reverseArrayMap, testArray);
