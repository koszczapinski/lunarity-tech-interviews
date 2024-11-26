import { benchmark, generateTestArray } from "../helpers.js";

// 1. Set with spread (Most Modern & Usually Fastest)
function uniqueWithSet(arr) {
  return [...new Set(arr)];
}

// 2. Filter with indexOf (Good for older browsers)
function uniqueWithFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 3. Reduce (Readable but less performant)
function uniqueWithReduce(arr) {
  return arr.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
}

// 4. For loop with object (Old school but can be fast)
function uniqueWithObject(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  return Object.keys(obj).map((num) => Number(num));
}

// Test the functions
const testArray = generateTestArray(10000);
console.log("Array size:", testArray.length);

console.log("Performance Benchmarks:");
benchmark(uniqueWithSet, testArray);
benchmark(uniqueWithFilter, testArray);
benchmark(uniqueWithReduce, testArray);
benchmark(uniqueWithObject, testArray);

// Verify that all methods produce the same result
const results = {
  set: uniqueWithSet(testArray),
  filter: uniqueWithFilter(testArray),
  reduce: uniqueWithReduce(testArray),
  object: uniqueWithObject(testArray),
};

console.log("Results length comparison:");
Object.entries(results).forEach(([method, result]) => {
  console.log(`${method}: ${result.length} unique values`);
});
