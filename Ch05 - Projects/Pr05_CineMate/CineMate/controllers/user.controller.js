import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const getUserDetail = async (req, res) => {
    const jwtToken = req.headers["jwttoken"];   // ".headers" -> inbuilt method
    // console.log(jwtToken);
    const userData = jwt.verify(jwtToken, "123456");   // ".verify" to validate and check if it is equal to encrypted token
    
    if(userData) {
        console.log("Email", userData);
        const userInfo = await User.findOne({ email: userData.email});
        return res.status(401).send({
            status: true,
            ...userInfo,
        });
    } else {
        return res.status(401).send({
            status: false,
            message: "Please login again..!",
        });
    }
    res.status(200).send(userData);
};

export const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUserData = await User.create(userData);
        res.status(200).send(newUserData);
    } catch (e) {
        res.status(500).send(e);
    }
};

export const updateUser = async (req, res) => {
    const userData = req.body;
    const userId = req.params.userId;
    const updatedData = await User.updateOne(
        { _id: userId },
        {$set: userData,}
    );
    res.status(200).send(updatedData);
};

export const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    const deletedData = await User.findByIdAndDelete(userId);
    res.status(200).send(deletedData); 
};

export const login = async (req, res) => {
    const userDetail = req.body;    // "userDetail" are details from End user.
    //"user" is details stored in the DB
    const user = await User.findOne({ email: userDetail.email}).select(
        "password email"
      );    // By default, password is not visible in DB as we wrote "select: false" in our model Schema.
      // So, we have called our password explicitly using ".select" to compare.

    if (!userDetail.email || !userDetail.password) {
        return res.status(400).send({
            status: false,
            message: "Please pass Email and Password",
        });
    }

    if (user) {
        const validPassword = await bcrypt.compare(userDetail.password, user.password);
        if (validPassword) {
            const jwtToken = jwt.sign(
                {    //jwt.sign => inbuilt method in JWT 
                email: user.email    // this is payload (refer to syntax)
                },
                "123456",     // this is salt/secretKey
                { expiresIn: "1hr" }   // we add a expiry date for the token here
            );

            res.setHeader("jwtToken", jwtToken);   // setting up our json web token in the Header.

            return res.status(200).send({
                status: true,
                message: "You are LoggedIn",
            });
        } else {
            return res.status(401).send({
                status: false,
                message: "Email or Password is incorrect"
            });
        }
    } else {
        return res.status(401).send({
            status: false,
            message: "Email or Password is incorrect"
        });
    }
};



// Syntax for JSON web token sign :::
// const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });