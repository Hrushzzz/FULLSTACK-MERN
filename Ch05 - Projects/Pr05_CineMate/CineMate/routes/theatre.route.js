import express from "express";
import { addTheatre, getTheatreById, getAllTheatre, updateTheatre, deleteTheatre } from "../controllers/theatre.controller.js";
import AuthMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// => Creating the routes :::

// Add theatre:
router.post("/", AuthMiddleware, addTheatre);
// goes to "AuthMiddleware" middleware first to do something and then it goes to "addTheatre" controller.

// Get theatre by ID: 
router.get("/:theatreId", getTheatreById);

// Get all theatres
// Get all theatres by Owners
router.get("/", getAllTheatre);

// Update Theatre
router.put("/:theatreId", updateTheatre);

// Delete Theatre
router.delete("/:theatreId", deleteTheatre);


export default router;