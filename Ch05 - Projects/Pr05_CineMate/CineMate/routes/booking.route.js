import express from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import { createBooking, getBookingDetail, getPaymentClientSecret } from '../controllers/booking.controller.js';

const router = express.Router();

// => Creating the routes :::

router.post("/get-payment-secret", AuthMiddleware, getPaymentClientSecret);

// create booking
router.post("/confirm", AuthMiddleware, createBooking);

// get booking details
router.get("/", AuthMiddleware, getBookingDetail);

export default router;