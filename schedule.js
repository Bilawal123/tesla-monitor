const { main } = require('./index');

const ONE_HOUR_MS = 60 * 60 * 1000;

console.log("Starting Tesla Inventory Scheduler...");
console.log(`Current time: ${new Date().toLocaleString()}`);

// Run immediately on start
runTask();

// Set interval to run once every hour
setInterval(runTask, ONE_HOUR_MS);

async function runTask() {
  console.log(`\n========================================`);
  console.log(`Triggering scheduled run: ${new Date().toLocaleString()}`);
  console.log(`========================================`);
  
  try {
    await main();
  } catch (err) {
    console.error("Uncaught exception in scheduler execution block:", err.message);
  }
  
  console.log(`Next execution will trigger at approximately: ${new Date(Date.now() + ONE_HOUR_MS).toLocaleString()}`);
}
