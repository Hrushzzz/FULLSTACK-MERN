const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
    fs.readFile("./data.txt", (err, data) => {
        res.end(data);
    });
});

server.listen(3006, () => {
    console.log("Server is up..!");
});