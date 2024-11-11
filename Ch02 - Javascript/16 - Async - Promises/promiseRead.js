const fs = require("fs");

fs.readFile("f1.txt" , cb);

function cb(err , data) {
    if(err) {
        console.log(error);
    } else {
        console.log("This is file 1 data --> " + data);
    }
}