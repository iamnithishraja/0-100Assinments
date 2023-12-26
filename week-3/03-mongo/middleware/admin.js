const Admin = require("../db").Admin;

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const username = req.headers["username"];
        const password = req.headers["password"];
        const admin = await Admin.findOne({ username: username });
        if (!admin) {
            res.status(401).json({ success: false, message: "The User Dosent Exist" });
            return;
        }
        if (admin["password"] !== password) {
            res.status(401).json({ success: false, message: "Incorrect Password" });
            return;
        }
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "invalid username or password" });
    }
}

module.exports = adminMiddleware;