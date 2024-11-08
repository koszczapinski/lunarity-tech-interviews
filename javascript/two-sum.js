/**
 * LeetCode Two Sum Solution
 * Problem: Given an array of integers nums and an integer target,
 * return indices of the two numbers that add up to target.
 *
 * Key characteristics:
 * - Returns indices of the numbers (not the numbers themselves)
 * - Finds only the first valid pair
 * - Guarantees exactly one solution exists
 * - Cannot use the same element twice
 *
 * Time Complexity: O(n) - we only traverse the array once
 * Space Complexity: O(n) - we store at most n elements in the Map
 *
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum to find
 * @return {number[]} - Array containing indices of the two numbers
 */
function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i]; // Return first pair found
    }
    numMap.set(nums[i], i); // Track index
  }
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
