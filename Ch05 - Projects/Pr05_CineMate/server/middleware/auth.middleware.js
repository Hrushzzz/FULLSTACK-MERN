import jwt from "jsonwebtoken";

const AuthMiddleware = function(req, res, next) {
    try {
        const jwtToken = req.headers["jwttoken"];
        const userData = jwt.verify(jwtToken, process.env.jwt_secret_salt);
        if (userData) {
            req.user = userData;
            next();
        } else {
            throw new Error("User token is not valid");
        }
    } catch(e) {
        res.status(401).send({
            success: false,
            message: e.message
        })
    }
}

export default AuthMiddleware;


// next(); => it is very important as it says to pass the control to the next flow.

// If we are using the same logic at many places,
// it is suggested to keep it in a middleware and use the 
// middleware wherever needed.

// A single "req" will pass through the flow i.e index -> route -> middleware -> controller.
// req is like a single source of truth, it has body, params and other things 
// So, it is ideal to store whatever data we wanted in the req itself for easy access(line 8).