const fs = require("fs");

// fs.readFile("f1.txt" , cb);

// function cb(err , data) {
//     if(err) {
//         console.log(error);
//     } else {
//         console.log("This is file 1 data --> " + data);
//     }
// }

console.log("Before");

let promiseReadFile1 = fs.promises.readFile("f1.txt");
//console.log(promiseReadFile);

promiseReadFile1.then(function(data) {
    console.log("This is my file data -> " + data);
}).catch(function(err) {
    console.log("This is the error -> " + err);
});


let promiseReadFile2 = fs.promises.readFile("f2.txt");
promiseReadFile2.then(function(data) {
    console.log("This is my file data -> " + data);
}).catch(function(err) {
    console.log("This is the error -> " + err);
});


let promiseReadFile3 = fs.promises.readFile("f3.txt");

promiseReadFile3.then(function(data) {
    console.log("This is my file data -> " + data);
}).catch(function(err) {
    console.log("This is the error -> " + err);
});

console.log("After");