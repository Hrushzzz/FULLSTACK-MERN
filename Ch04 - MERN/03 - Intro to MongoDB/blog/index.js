//const express = require("http");  
import express from "express";     // Step 01 => we can use any of the two

import UserRoutes from "./routes/user.route.js";   //importing user.route 
import BlogRoutes from "./routes/blog.route.js";
import connectToDB from "./database/mongoDb.js";   // importing our database

const app = express();   // Step 02 => Creating an Instance

app.use(express.json());

app.use("/api/user", UserRoutes);  //Consuming UserRoutes for request that has "/api/user".
// Any request that comes starting with "/api/user" , go into this UserRoutes i.e "./routes/user.route.js".

app.use("/api/blog", BlogRoutes);


app.all("*", (req, res) => {
    res.status(404).send("Page Not Found..!");   // we can send a status code in this way
})

app.listen(5002, () => {      
    console.log("Server started at http://localhost:5002");
    connectToDB();   // connecting to our database as soon as our server is created
});     // Step 03 => Creating a Server



// NOTE ::: The data that we get from the "network" tab in the body is SERIALIZED data (string-format data),
// So, we need to convert the data in "body" into JSON format, so that we can read it inside our "controllers".
// to do that, we do "app.use(express.json())".
