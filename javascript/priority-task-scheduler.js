class PriorityTaskScheduler {
  constructor() {
    this.tasks = [];
  }

  addTask(taskFunction, delay, priority) {
    // Create task object with all necessary properties
    const task = {
      execute: taskFunction,
      delay,
      priority,
    };

    this.tasks.push(task);
  }

  async executeTasks() {
    // Sort tasks by priority first, then by delay
    const sortedTasks = [...this.tasks].sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return a.delay - b.delay;
    });

    // Execute tasks in order
    for (const task of sortedTasks) {
      await new Promise((resolve) => setTimeout(resolve, task.delay));
      console.log(`Delay: ${task.delay}, Priority: ${task.priority}`);
      await task.execute();
    }

    // Clear tasks after execution
    this.tasks = [];
  }
}

// Example usage:
async function main() {
  const scheduler = new PriorityTaskScheduler();

  // Example task function
  const taskFn = async () => {
    // Task implementation
  };

  scheduler.addTask(taskFn, 100, 2);
  scheduler.addTask(taskFn, 50, 1);
  scheduler.addTask(taskFn, 75, 1);

  await scheduler.executeTasks();
}

main();
