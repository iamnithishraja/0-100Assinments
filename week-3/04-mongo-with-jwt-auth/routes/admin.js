const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const Admin = require("../db").Admin;
const jwt = require("jsonwebtoken");
const { Course } = require("../db");
const dotenv = require("dotenv").config();


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    try {
        Admin.create({
            username: req.body.username,
            password: req.body.password
        });
        res.status(200).json({ success: true, message: 'admin created successfully' });
    } catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    try {
        const secretToken = jwt.sign({ username: req.body.username }, process.env.SECRET, { expiresIn: "365d" });
        res.status(200).json({ success: true, token: secretToken });
    } catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        const course = await Course.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            creator: req.user["_id"]
        });
        res.status(200).json({ success: true, course });
    } catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find();
        res.status(200).json({ success: true, courses });
    } catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
});

module.exports = router;