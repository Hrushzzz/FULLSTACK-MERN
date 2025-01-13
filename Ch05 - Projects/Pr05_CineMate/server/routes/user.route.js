import express from 'express';
import { createUser, deleteUser, updateUser, login, getUserDetail } from '../controllers/user.controller.js';

const router = express.Router();   //getting the ROUTER instance

// => Creating the routes :::
router.post("/login", login);
router.get("/", getUserDetail);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
