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
import { Server } from "socket.io";   // importing "server" instance from socket.io
import http from "http";
import { log } from "console";

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

const PORT = process.env.port || 5001;
// app.listen(PORT, () => {      
//     console.log(`Server started at http://localhost:${PORT}`);
//     connectToDB();
// }); 

const server = http.createServer(app);  // Here, app refers to express server we created.
const io = new Server(server, {   // passing http server instance to websocket io to create for the first time.
    cors: {
        origin: "http://localhost:3001"
    }
});   

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("message", (msg) => {
        console.log(msg);
        io.emit("message", msg);
    })
    socket.on("message2", (msg) => {  // we can have multiple socket listeners as well.
        console.log(msg);
        io.emit("message2", msg);
    })
})

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    connectToDB();
});