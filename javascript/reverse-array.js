/*
Create a function that reverses an array using three different methods
*/

// Method 1: Using spread operator and reverse() native method
function reverseArraySpread(a) {
  console.time('Spread Method');
  const result = [...a].reverse();
  console.timeEnd('Spread Method');
  return result;
}

// Method 2: Using a loop
function reverseArrayLoop(a) {
  console.time('Loop Method');
  const reversed = [];
  for(let i = a.length - 1; i >= 0; i--) {
    reversed.push(a[i]);
  }
  console.timeEnd('Loop Method');
  return reversed;
}

// Method 3: Using map()
function reverseArrayMap(a) {
  console.time('Map Method');
  const result = a.map((_, index) => a[a.length - 1 - index]);
  console.timeEnd('Map Method');
  return result;
}

// Test cases
const testArray = [1, 2, 3, 4];
console.log('Spread method:', reverseArraySpread(testArray));
console.log('Loop method:', reverseArrayLoop(testArray));
console.log('Map method:', reverseArrayMap(testArray));
