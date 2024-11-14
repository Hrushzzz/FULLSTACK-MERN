const fileSystem = require("fs");  //importing a file system

console.log("Before");

fileSystem.readFile("f1.txt" , function(err , data1) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("This is file 1 data -> " + data1);
});

fileSystem.readFile("f2.txt" , function(err , data2) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("This is file 2 data -> " + data2);
});

fileSystem.readFile("f3.txt" , function(err , data3) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("This is file 3 data -> " + data3);
});

console.log("After");