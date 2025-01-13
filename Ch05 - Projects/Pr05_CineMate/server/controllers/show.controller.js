import Show from "../model/show.model.js";

// add show
export const addShow = async (req, res) => {
    try {
        const showDetail = new Show(req.body);  // theatreId , movieId
        await showDetail.save();
        res.send({
            success: true,
            ...showDetail,
        });
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
};

// update show
export const updateShow = async (req, res) => {
    try {
        const updatedShowDetails = await Show.updateOne(
            { _id: req.params.showId },
            { $set: req.body }
        );
        res.send(updatedShowDetails);
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
};

// delete show
export const deleteShow = async (req, res) => {
    try {
        await Show.findByIdAndDelete(req.params.showId);
        res.send({
            success: true,
            message: "Show is deleted..!"
        });
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
};

// get show by id
export const getShowById = async (req, res) => {
    try {
        const showDetail = await Show.findOne({ _id: req.params.showId }).populate(['theatre', 'movie']);
        // In Mongoose, we use ".populate" to join two tables/ get all the data from the referenced tables, 
        // this is similar to "joins" in SQL.
        // We have to pass tables like an Array.
        res.send(showDetail);
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
};

// get show by filter
export const getShowByFilter = async (req, res) => {
    try {
        const { movie, theatre, date } = req.query;

        const filter = {};

        if (movie) {
            filter.movie = movie;
        }
        if (theatre) {
            filter.theatre = theatre;
        }
        if (date) {
            filter.date = date;
        }
        const showDetails = await Show.find(filter).populate(["theatre"]);
        res.send(showDetails);
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
};

