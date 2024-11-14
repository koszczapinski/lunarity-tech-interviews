function twoSum(nums, target) {
  const numMap = new Map();
  let pairCount = 0; // Initialize counter

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      pairCount++; // Increment counter when we find a pair
    }

    numMap.set(nums[i], i);
  }

  return pairCount; // Return the count instead of indices
}

function countPairsWithSumBruteForce(nums, target) {
  let pairCount = 0; // Initialize counter

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        pairCount++; // Increment counter when we find a pair
      }
    }
  }

  return pairCount; // Return the count instead of indices
}

// Modified test cases
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Should output: 1

const nums2 = [3, 2, 4, 3];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Should output: 2

const nums3 = [3, 3, 3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Should output: 6

console.log(countPairsWithSumBruteForce(nums, target)); // Should output: 1
console.log(countPairsWithSumBruteForce(nums2, target2)); // Should output: 2
console.log(countPairsWithSumBruteForce(nums3, target3)); // Should output: 6
