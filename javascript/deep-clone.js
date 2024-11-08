/**
 * Simple deep clone implementation using JSON parse/stringify
 * Note: This method has limitations - cannot handle functions, undefined values,
 * or circular references
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Creates a deep clone of any JavaScript value
 * Handles primitive types, Dates, Arrays and Objects
 *
 * @param {*} obj - The value to clone
 * @returns {*} A deep clone of the input value
 */
function deepClone(obj) {
  // Handle primitive types and null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date objects by creating new Date with same timestamp
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Arrays by recursively cloning each element
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle Objects by recursively cloning all property/value pairs
  if (obj instanceof Object) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
    );
  }
}

// Example usage:
const original = {
  name: "John",
  age: 30,
  hobbies: ["coding", "reading", "traveling"],
};

const cloned = deepClone(original);
console.log(cloned);
