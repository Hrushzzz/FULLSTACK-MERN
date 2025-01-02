import express from 'express';
import { createUser, deleteUser, getUserById, updateUser } from '../controllers/user.controller.js';

const router = express.Router();   //getting the ROUTER instance

// => Creating the routes :::
router.get("/:userId", getUserById);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
