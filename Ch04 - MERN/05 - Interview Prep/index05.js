const fs = require("fs");

console.log("1. Starting");

// Reading a file Asynchronously
fs.readFile("example.txt", (err, data) => {
    if(err) {
        throw err;
    }
    console.log("2. File read complete");

    // Using setImmediate to defer execution
    setImmediate(() => {
        console.log("3. This runs after the file is read");
    });
});

console.log("4. Script End");

// Using setTimeout to schedule a task
setTimeout(() => {
    console.log("5. This runs after setImmediate");
});

process.nextTick(() => {
    console.log("6. Next Tick");
});

setImmediate(() => {
    console.log("7. This is outside setImmediate");
});


// output ::: 
// 1. Starting
// 4. Script End
// 6. Next Tick
// 5. This runs after setImmediate
// 7. This is outside setImmediate
// 2. File read complete
// 3. This runs after the file is read
