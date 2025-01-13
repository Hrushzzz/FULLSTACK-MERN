import Booking from "../model/booking.model.js";

export const makePayment = async (req, res) => {
    try {
        // TODO : Make payment to Stripe and return transactionId
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
}

export const createBooking = async (req, res) => {
    try {
        // UserId --> req.user (jwt token)
        // Transaction Id --> req.transactionId (get transaction details from /make-payment)
        // Seats --> req.seats (verify if selected seats are really available, update bookedSeats in Show collection)
        // showId --> req.showId

        const bookingDetails = req.body;
        const booking = new Booking(bookingDetails);
        booking.user = req.user.id;
        await booking.save();
        // TODO : verify if selected seats are really available, update bookedSeats in Show collection
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
}

export const getBookingDetail = async (req, res) => {
    try {
        // We have to get user details, show details, movie details and theatre details
        const bookingDetail = await Booking.find()
        .populate("user")
        .populate({   // getting "movie" details which is in "show" model
            path: "show",
            model: "shows",
            populate: {
                path: "movie",
                model: "movies"
            },
        })
        .populate({   // getting "theatre" details which is in "show" model
            path: "show",
            model: "shows",
            populate: {
                path: "theatre",
                model: "theatres"
            },
        });
        // this is called as "nested Populate".
        res.send(bookingDetail);
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
}