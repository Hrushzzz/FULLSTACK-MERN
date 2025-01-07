//const express = require("http");  
import express from "express";
import UserRoutes from "./routes/user.route.js";
import TheatreRoutes from "./routes/theatre.route.js";
import MovieRoutes from "./routes/movie.route.js";
import ShowRoutes from './routes/show.route.js';
import connectToDB from "./database/mongoDb.js";
import 'dotenv/config';  // used to access "env" related components.

const app = express();

app.set("view engine", "ejs");

app.use(express.json());

// API's ::: 
app.use("/api/user", UserRoutes);
app.use("/api/theatre", TheatreRoutes);
app.use("/api/movie", MovieRoutes);
app.use("/api/show", ShowRoutes);


app.all("*", (req, res) => {
    res.status(404).send("Page Not Found..!");
})

app.listen(5004, () => {      
    console.log("Server started at http://localhost:5004");
    connectToDB();
}); 