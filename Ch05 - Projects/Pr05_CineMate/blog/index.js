//const express = require("http");  
import express from "express";

import UserRoutes from "./routes/user.route.js";
import BlogRoutes from "./routes/blog.route.js";
import connectToDB from "./database/mongoDb.js";
import { renderBlogs, renderBlogById } from "./controllers/blog.controller.js";

const app = express();

app.set("view engine", "ejs");   // => Configuring a "View Engine"
// ejs --> Embedded JavaScript
// This is used for View Layer of MVC architecture and "ejs" is our templating engine

app.use(express.json());

app.use("/api/user", UserRoutes);
app.use("/api/blog", BlogRoutes);

app.get('/blog/list', renderBlogs);
app.get('/blog/:blogId', renderBlogById);   // rendering EJS files => views
// app.get('/blog/:blogId/:blogTitle', renderBlogById);


app.all("*", (req, res) => {
    res.status(404).send("Page Not Found..!");
})

app.listen(5002, () => {      
    console.log("Server started at http://localhost:5002");
    connectToDB();
}); 