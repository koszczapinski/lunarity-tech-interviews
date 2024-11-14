function twoSum(nums, target) {
  // Map to store numbers we've seen and their indices
  const numMap = new Map();

  // Iterate through array once
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach target
    const complement = target - nums[i];

    // If we've seen the complement before, we found a valid pair
    if (numMap.has(complement)) {
      // Return indices of both numbers that sum to target
      return [numMap.get(complement), i]; // Return first pair found
    }

    // Store current number and its index for future lookups
    numMap.set(nums[i], i); // Track index
  }

  // Return empty array if no solution found (though problem guarantees a solution)
  return [];
}

function twoSumBruteForce(nums, target) {
  // Check every possible pair of numbers
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // If we find a pair that sums to target, return their indices
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // Return empty array if no solution found (though problem guarantees a solution)
  return [];
}

// Test cases
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Should output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Should output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Should output: [0, 1]

console.log(twoSumBruteForce(nums, target)); // Should output: [0, 1]
console.log(twoSumBruteForce(nums2, target2)); // Should output: [1, 2]
console.log(twoSumBruteForce(nums3, target3)); // Should output: [0, 1]
