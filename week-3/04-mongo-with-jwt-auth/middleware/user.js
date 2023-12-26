const Admin = require("../db").Admin;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const username = jwt.verify(String(req.headers["Authorization"]).split(" ")[1], process.env.SECRET)["username"];
        const user = await Admin.findOne({ username: username });
        if (!user) {
            res.status(401).json({ success: false, message: "The User Dosent Exist" });
            return;
        }
        if (user["password"] !== password) {
            res.status(401).json({ success: false, message: "Incorrect Password" });
            return;
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "invalid username or password" });
    }

}

module.exports = userMiddleware;