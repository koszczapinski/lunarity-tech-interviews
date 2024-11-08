import { benchmark } from "./helpers.js";

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

// Usage:
benchmark(reverseArrayLoop, testArray);
benchmark(reverseArraySpread, testArray);
benchmark(reverseArrayMap, testArray);
