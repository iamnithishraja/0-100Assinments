const User = require("../db").User;

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const username = req.headers["username"];
        const password = req.headers["password"];
        const user = await User.findOne({ username: username });
        if (!user) {
            res.status(401).json({ success: false, message: "The User Dosent Exist" });
            return;
        }
        if (user["password"] !== password) {
            res.status(401).json({ success: false, message: "Incorrect Password" });
            return;
        }
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "invalid username or password" });
    }
}

module.exports = userMiddleware;