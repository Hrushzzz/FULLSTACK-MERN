const fs = require('fs');

// readFileSync ==> read files synchronously.
const demoFileData = fs.readFileSync("./demo.txt");
console.log("demo file data ::: ", demoFileData.toString());

// appendFileSync ==> synchronously append the given data to a file. A new file is created if it does not exist.
fs.appendFileSync("./demo.txt", "\n --By Hrishi");
const demoFileData2 = fs.readFileSync("./demo.txt");
console.log("demo file data2 ::: ", demoFileData2.toString());


fs.mkdirSync("dist");   // mkdirSync() ==> method is used to create a directory Synchronously.
//  writeFileSync ==> for writing data to files in Node.js.
fs.writeFileSync("./dist/index.html", `
    <html>
        <body>
            <h1>
                Demo Page
            </h1>
        </body>
    </html>
`);

// NOTE :: refer to more FILE SYSTEM module methods here ===> https://nodejs.org/api/fs.html