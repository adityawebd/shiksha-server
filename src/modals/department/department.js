const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for colleges
const departments = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    college: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    view_all_courses_link: {
        type: String,
        default: ''
    }
});

// Define the schema for tabs

// Create the models

const department = mongoose.model('departments', departments);

module.exports = department;
