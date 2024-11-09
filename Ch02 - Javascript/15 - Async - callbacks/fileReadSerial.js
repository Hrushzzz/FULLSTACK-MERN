//*** Serial execution of Asynchronous code ***

const fileSystem = require("fs");  //importing a file system

console.log("Before");

fileSystem.readFile("f1.txt" , cb1);

function cb1(err , data1) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("This is file 1 data -> " + data1);
    fileSystem.readFile("f2.txt" , cb2);
}


function cb2(err , data2) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("This is file 2 data -> " + data2);
    fileSystem.readFile("f3.txt" , cb3);
}


function cb3(err , data3) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("This is file 3 data -> " + data3);
}

console.log("After");