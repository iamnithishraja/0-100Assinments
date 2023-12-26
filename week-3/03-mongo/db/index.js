const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: { require: true, type: String },
    password: { require: true, type: String }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: { require: true, type: String },
    password: { require: true, type: String },
    purchaseCourses: [{ ref: "Course", type: mongoose.Schema.ObjectId }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: { require: true, type: String },
    description: { require: true, type: String },
    price: { require: true, type: Number },
    imageLink: { require: true, type: String },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}