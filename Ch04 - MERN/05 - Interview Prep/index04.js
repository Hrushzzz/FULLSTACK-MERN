console.log("Start");

setTimeout(() => {    // Macro task
    console.log("Set Timeout");
});

process.nextTick(() => {    // Micro task
    console.log("Next Tick");
});

setImmediate(() => {    // Check task
    console.log("Set Immediate");
});

console.log("End");

// NOTE ::: Micro task > Macro task > Check task

// output ::: 
// Start
// End
// Next Tick
// Set Timeout
// Set Immediate