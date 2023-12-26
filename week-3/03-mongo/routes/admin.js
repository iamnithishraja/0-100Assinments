const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const zod = require("zod");
const { Course, Admin } = require("../db");

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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        const course = await Course.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
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