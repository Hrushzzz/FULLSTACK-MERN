import { transporter } from "../index.js";
import Booking from "../model/booking.model.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.stripe_secret_key);
// const stripe = require("stripe")("pk_test_51QjO0gB2qkcK8mR1uGMlF2QGfo0YDjuPlVN218AMeLrYLSVD8Y3Ox9hkbIoDEGovPhu8KYZkYqkczqqdEx4w1HMs00PpyMibuo")

export const getPaymentClientSecret = async (req, res) => {
  try {
    const bookingDetails = req.body;
    // Creating a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: bookingDetails.seats * bookingDetails.price * 100,
      currency: "inr",
      payment_method_types: ["card"],
      metadata: {
        showId: bookingDetails.showId,
        seats: bookingDetails.seats,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const createBooking = async (req, res) => {
  try {
    // UserId --> req.user (jwt token)
    // Transaction Id --> req.transactionId (get transaction details from /make-payment)
    // Seats --> req.seats (verify if selected seats are really available, update bookedSeats in Show collection)
    // showId --> req.showId

    const bookingDetails = req.body;

    const paymentIntent = await stripe.paymentIntents.retrieve(
      bookingDetails.transactionId
    );
    console.log(paymentIntent);
    const booking = new Booking({
      ...bookingDetails,
      seats: paymentIntent.metadata.seats,
      show: paymentIntent.metadata.showId,
    });
    booking.user = req.user.id;
    await booking.save();

    const info = await transporter.sendMail({
      from: '"Hrushikesh" <spidey17@gmail.com>', // sender address
      to: "x@gmail.com, y@gmail.com", // list of receivers
      subject: "Booking is confirmed", // Subject line
      text: "Come and Enjoy the movie.. Cheers..!", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    res.send({
      success: true,
      message: "Booking is confirm",
      ...paymentIntent
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const getBookingDetail = async (req, res) => {
  try {
    // We have to get user details, show details, movie details and theatre details
    const bookingDetail = await Booking.find()
      .populate("user")
      .populate({
        // getting "movie" details which is in "show" model
        path: "show",
        model: "shows",
        populate: {
          path: "movie",
          model: "movies",
        },
      })
      .populate({
        // getting "theatre" details which is in "show" model
        path: "show",
        model: "shows",
        populate: {
          path: "theatre",
          model: "theatres",
        },
      });
    // this is called as "nested Populate".
    res.send(bookingDetail);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
