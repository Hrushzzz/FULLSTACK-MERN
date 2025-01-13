import express from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import { createBooking, getBookingDetail, makePayment } from '../controllers/booking.controller.js';

const router = express.Router();

// => Creating the routes :::

router.post("/make-payemnt", AuthMiddleware, makePayment);

// create booking
router.post("/confirm", AuthMiddleware, createBooking);

// get booking details
router.get("/", AuthMiddleware, getBookingDetail);

export default router;