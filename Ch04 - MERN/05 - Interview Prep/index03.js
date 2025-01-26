const fs = require("fs");

const content = Math.random().toString(36).repeat(1000);

fs.writeFileSync("/Users/Hrushi/Documents/My Stuff/Z/Fullstack-MERN/Ch04 - MERN/05 - Interview Prep/data.txt", content);