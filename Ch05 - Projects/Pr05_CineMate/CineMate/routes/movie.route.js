import express from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import isAdminMiddleware from "../middleware/isAdmin.middleware.js";
import { addMovie, deleteMovie, getAllMovie, getMovieById, updateMovie } from "../controllers/movie.controller.js";

const router = express.Router();

// => Creating the routes :::

// add movie
router.post("/", AuthMiddleware, isAdminMiddleware, addMovie);

// get movie by id
router.get("/:movieId", getMovieById);

// get all movies
router.get("/", getAllMovie);

// update movie
router.put("/:movieId", AuthMiddleware, isAdminMiddleware, updateMovie);

// delete movie
router.delete("/:movieId", AuthMiddleware, isAdminMiddleware, deleteMovie);

export default router;