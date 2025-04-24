const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    password: { type: String, required: true },
    phoneno: String, 
    biography: String,
    website: String,
    facebook: String,
    instagram: String,
    linkedin: String,
    github: String,
    youtube: String,
    twitter: String,
    role: String,
    isActive: Boolean,
    createdAt: { type: Date, default: Date.now },
    notification: {
        comment: { type: Boolean, default: true },
        like: { type: Boolean, default: true },
        reply: { type: Boolean, default: true },
        news: { type: Boolean, default: true },
        report: { type: Boolean, default: true }
    }
}, { collection: 'users' });

const User = mongoose.model("User", userSchema, 'users');
module.exports = User;
