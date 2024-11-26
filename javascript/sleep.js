/*
Create a sleep function that delays execution of a callback function
*/

const sleep = (fn, time) =>
  // Return a new Promise that resolves after the specified delay
  new Promise((resolve) =>
    // Use setTimeout to delay execution
    setTimeout(() => {
      // Execute the callback function and resolve the promise with its result
      resolve(fn());
    }, time)
  );

// Example usage
sleep(() => console.log("Hello"), 1000); // Logs 'Hello' after 1 second
