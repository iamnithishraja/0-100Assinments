const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    try {
        User.create({
            username: req.body.username,
            password: req.body.password
        });
        res.status(200).json({ success: true, message: 'user created successfully' });
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find();
        res.status(200).json({ success: true, courses });
    } catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        const courseID = req.user.username;
        const user = await User.findOne({ username: req.body.username });
        user.purchaseCourses.push(courseID);
        user.save();
        res.status(200).json({ success: true, message: 'Course purchased successfully' });
    } catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const user = await User.findOne({ username: req.user.username }).populate("purchaseCourses");
        res.status(200).json({ success: true, purchasedCourses: user.purchaseCourses });
    } catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
});

module.exports = router