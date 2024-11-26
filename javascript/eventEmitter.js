/**
 * A simple event emitter class that implements the observer pattern
 * Allows subscribing to events, unsubscribing, and emitting events with data
 */
class EventEmitter {
  /**
   * Initialize the event emitter with an empty events Map
   */
  constructor() {
    this.events = new Map();
  }

  /**
   * Subscribe to an event with a callback function
   * @param {string} eventName - Name of the event to subscribe to
   * @param {Function} callback - Function to be called when event is emitted
   * @returns {Function} Unsubscribe function to remove the callback
   */
  on(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(callback);

    // Return unsubscribe function for convenience
    return () => {
      this.off(eventName, callback);
    };
  }

  /**
   * Unsubscribe a callback function from an event
   * @param {string} eventName - Name of the event to unsubscribe from
   * @param {Function} callback - Callback function to remove
   */
  off(eventName, callback) {
    if (!this.events.has(eventName)) return;

    const callbacks = this.events.get(eventName);
    const index = callbacks.indexOf(callback);

    if (index !== -1) {
      callbacks.splice(index, 1);
    }

    // Remove the event entirely if no callbacks remain
    if (callbacks.length === 0) {
      this.events.delete(eventName);
    }
  }

  /**
   * Emit an event with optional arguments
   * @param {string} eventName - Name of the event to emit
   * @param {...any} args - Arguments to pass to the callback functions
   */
  emit(eventName, ...args) {
    if (!this.events.has(eventName)) return;

    const callbacks = this.events.get(eventName);
    callbacks.forEach((callback) => {
      try {
        callback(...args);
      } catch (error) {
        console.error(`Error in event handler for ${eventName}:`, error);
      }
    });
  }

  /**
   * Subscribe to an event for one-time execution
   * Automatically unsubscribes after the first emission
   * @param {string} eventName - Name of the event to subscribe to
   * @param {Function} callback - Function to be called once
   * @returns {Function} Unsubscribe function to remove the callback
   */
  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(eventName, wrapper);
    };

    return this.on(eventName, wrapper);
  }
}
