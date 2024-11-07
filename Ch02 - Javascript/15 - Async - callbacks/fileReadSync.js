const fileSystem = require("fs");  //importing a file system

console.log("Before");


//readFileSync => to read a file in Node
//node fileName.js  => to run and see output of a file in Node
const data1 = fileSystem.readFileSync("f1.txt");   
const data2 = fileSystem.readFileSync("f2.txt");

console.log("data from the file1 ->  "+ data1);
console.log("data from the file2 ->  "+ data2);

console.log("After");