const mongoose = require('mongoose');
const { Schema } = mongoose;


const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    cardImage: {
        type: String
    },
}, {
    timestamps: true
});

const Blog = mongoose.model('blogs', BlogSchema);

module.exports= Blog;