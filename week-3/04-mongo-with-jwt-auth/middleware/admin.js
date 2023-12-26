const Admin = require("../db").Admin;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const username = jwt.verify(String(req.headers["Authorization"]).split(" ")[1], process.env.SECRET)["username"];
        const admin = await Admin.findOne({ username: username });
        if (!admin) {
            res.status(401).json({ success: false, message: "The User Dosent Exist" });
            return;
        }
        if (admin["password"] !== password) {
            res.status(401).json({ success: false, message: "Incorrect Password" });
            return;
        }
        req.user = admin;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "invalid username or password" });
    }
}

module.exports = adminMiddleware;