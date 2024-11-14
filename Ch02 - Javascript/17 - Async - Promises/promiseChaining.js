// const cleanRoom = function() {
//     return new Promise(function(resolve , reject) {
//         resolve("Cleaned the room");
//     });
// }

// const removeGarbage = function() {
//     return new Promise(function(resolve , reject) {
//         resolve("Garbage removed");
//     });
// }

// const winIceCream = function() {
//     return new Promise(function(resolve , reject) {
//         resolve("Got my Ice Cream");
//     });
// }

// cleanRoom().then(function(result) {
//     console.log(result);
//     return removeGarbage();
// }).then(function(result) {
//     console.log(result);
//     return winIceCream();
// }).then(function(result) {
//     console.log(result);
// });      // Promise Chaining



let cleanRoom = function() {
    return new Promise(function (resolve , reject) {
        //50% chance of success
        if (Math.random() < 0.5) {
            resolve("Cleaned the room");
        } else {
            //50% chance of failure
            reject("Failed to clean the room");
        }
    });
};

let removeGarbage = function(message) {
    return new Promise(function (resolve , reject) {
        //50% chance of success
        if (Math.random() < 0.5) {
            resolve(message + " then removed Garbage");
        } else {
            //50% chance of failure
            reject("Failed to remove Garbage");
        }
    });
};

let winIceCream = function(message) {
    return new Promise(function (resolve , reject) {
        resolve(message + " then won Ice Cream");
    });
};


cleanRoom().then(function(result) {
    console.log(result);
    return removeGarbage(result);
}).then(function(result) {
    console.log(result);
    return winIceCream(result);
}).then(function(result) {
    console.log("finished " + result);
}).catch(function(error) {    //This will catch any error that occurs
    console.error(error);
});

// This is called as "Promise Chaining".