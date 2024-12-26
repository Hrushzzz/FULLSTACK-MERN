const { Console } = require('console');
const path = require('path');

console.log("filepath ::: ", __filename);  //in-built method to get the name of file
console.log("directory name ::: ", __dirname);  //in-built method to get the directory name
console.log("isAbsolutePath ::: ", path.isAbsolute(__filename));  //method to check if a path is Absolute or Relative
console.log("seperator ::: ", path.sep);
console.log("delimiter ::: ", path.delimiter);
console.log("path ::: ", process.env.PATH);   // to get the complete path
console.log("fileExtension ::: ", path.extname(__filename));  //to get the extension of a file
console.log("relativePath ::: ", path.relative(__filename, 'C:\Users\Hrushi\Documents\My Stuff\Z\Fullstack-MERN\Ch04 - MERN\x01 - Intro to Node\example 1\.Readme'));
//to get the relative path of a file.


// NOTE :: refer to more path module methods here ===> https://nodejs.org/api/path.html