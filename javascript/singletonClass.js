/*
Create a Singleton class that can be instantiated only once
*/

// Singleton class that ensures only one instance can be created
class Singleton {
  constructor() {
    // If an instance already exists, return that instance
    if (Singleton.instance) {
      return Singleton.instance;
    }
    // Otherwise create the first and only instance
    Singleton.instance = this;
  }
}

// Create first instance
const singleton = new Singleton();
// Try to create second instance - will return the first instance instead
const singleton2 = new Singleton();

// Verify both variables reference the same instance
console.log(singleton === singleton2); // true
