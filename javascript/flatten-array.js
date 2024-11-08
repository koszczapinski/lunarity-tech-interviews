/*
Flatten an array of arrays using the flat() method
*/

const flattenArray = (arr) => {
  return arr.flat(Infinity);
};

console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));

// TODO: Implement a custom flatten function

const customFlatten = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? customFlatten(curr) : curr);
  }, []);
};

console.log(customFlatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));
