function hasDuplicates(arr) {
  const unique = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (unique.has(arr[i])) {
      return true;
    }
    unique.add(arr[i]);
  }
  return false;
}

console.log(hasDuplicates([1, 2, 3, 4, 5])); // false
console.log(hasDuplicates([1, 2, 3, 4, 5, 1])); // true
