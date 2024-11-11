const fs = require("fs");
const {error} = require("console");

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

function cb1(data) {
    console.log("This is my file data -> " + data);

    let promiseReadFile2 = fs.promises.readFile("f2.txt");
    return promiseReadFile2;
}

function cb2(data) {
    console.log("This is my file data -> " + data);

    let promiseReadFile3 = fs.promises.readFile("f3.txt");
    return promiseReadFile3;
}

function cb3(data) {
    console.log("This is my file data -> " + data);
    }


promiseReadFile1
.then(cb1)
.then(cb2)
.then(cb3)
.catch(function(err) {
    console.log(err);
});