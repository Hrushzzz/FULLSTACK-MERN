import express from 'express';

const router = express.Router();   //getting the ROUTER instance

// => Creating the routes :::

router.get("/:userId", (req, res) => {});   // we use ":" to access the dynamic data,
                                            //here, we wanted the data of a particular user

router.post("/", (req, res) => {});    // In POST. userID doesn't exist as we use POST for creating,
                                        // so, we have to send the entire user info via request body. 

router.put("/:userId", (req, res) => {});

router.delete("/:userId", (req, res) => {});

export default router;
