//const express = require("http");  
import express from "express";
import UserRoutes from "./routes/user.route.js";
import TheatreRoutes from "./routes/theatre.route.js";
import MovieRoutes from "./routes/movie.route.js";
import ShowRoutes from './routes/show.route.js';
import BookingRoutes from "./routes/booking.route.js";
import connectToDB from "./database/mongoDb.js";
import cors from "cors";
import nodemailer  from 'nodemailer';

import 'dotenv/config';  // used to access "env" related components.

// creating a transporter to send mails
export const transporter = nodemailer.createTransport({
    host: "smtp.mandrillapp.com",
    port: 587,
    auth: {
        user: "spidey17@gmail.com",
        process: process.env.mailchimp_key
    }
})

const app = express();
app.use(cors());

app.set("view engine", "ejs");

app.use(express.json());

// API's ::: 
app.use("/api/user", UserRoutes);
app.use("/api/theatre", TheatreRoutes);
app.use("/api/movie", MovieRoutes);
app.use("/api/show", ShowRoutes);
app.use("/api/booking", BookingRoutes);


app.all("*", (req, res) => {
    res.status(404).send("Page Not Found..!");
})

app.listen(5010, () => {      
    console.log("Server started at http://localhost:5010");
    connectToDB();
}); 