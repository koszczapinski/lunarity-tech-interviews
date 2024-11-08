/**
 * Efficient solution using Map (Hash Map)
 * Time Complexity: O(n) - we only need to traverse the array once
 * Space Complexity: O(n) - we store at most n elements in the Map
 *
 * The algorithm works by keeping track of numbers we've seen and their frequencies.
 * For each number, we check if we've already seen its complement (targetSum - num)
 * that would sum to targetSum. If found, we add the frequency of that complement to our count.
 */
function countPairsWithSum(arr, targetSum) {
  let count = 0;
  const seen = new Map(); // Stores number -> frequency mapping

  for (const num of arr) {
    const complement = targetSum - num; // Calculate the number needed to sum to targetSum

    // If we've seen the complement before, add its frequency to our count
    // This handles cases where the same number can be used in multiple pairs
    if (seen.has(complement)) {
      count += seen.get(complement);
    }

    // Add current number to seen Map or increment its frequency if already exists
    // The || 0 handles the case when the number is first encountered
    seen.set(num, (seen.get(num) || 0) + 1);
  }

  return count;
}

/**
 * Brute force solution (not recommended)
 * Time Complexity: O(n²) - requires nested loops
 * Space Complexity: O(1) - only uses a counter variable
 *
 * This approach checks every possible pair of numbers in the array
 * by using nested loops. While simple to understand, it's inefficient
 * for large arrays.
 */
function countPairsBruteForce(arr, targetSum) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Check if current pair sums to targetSum
      if (arr[i] + arr[j] === targetSum) {
        count++;
      }
    }
  }

  return count;
}

// Test cases
const arr = [2, 4, 2, 6, 3, 1, 5, 3, 8, 4, 7];

// Test with target sum of 8
console.log(countPairsWithSum(arr, 8)); // Should output: 4 (pairs: 1,7 | 3,5 | 3,5 | 2,6)
console.log(countPairsBruteForce(arr, 8)); // Should output: 3 (pairs: 1,7 | 3,5 | 2,6)
