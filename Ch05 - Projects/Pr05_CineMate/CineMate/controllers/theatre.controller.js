import Theatre from "../model/theatre.model.js";

// add theatre
export const addTheatre = async (req, res) => {
    try {
        const newTheatre = new Theatre(req.body);
        newTheatre.owner = req.user.id;  // ownerId -> getting from "auth.middleware".
        const theatreDetails = await newTheatre.save();
        res.send({
            success: true,
            ...theatreDetails,
        });
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
};

// get theatre by Id
export const getTheatreById = async (req, res) => {
    try {
        const theatreDetails = await Theatre.findById(req.params.theatreId);
        res.send(theatreDetails);
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
};

// get all theatres
export const getAllTheatre = async (req, res) => {
    try {

    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
};

// update theatre
export const updateTheatre = async (req, res) => {
    try {

    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
};

// delete theatre
export const deleteTheatre = async (req, res) => {
    try {
        await Theatre.findByIdAndDelete(req.params.theatreId);
        res.send({
            success: true,
        });
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message,
        });
    }
};