const express = require('express');
const router = express.Router();
const blogController = require('../../controllers/blogs/blogs'); // Adjust the path to your controller

// Define routes
router.get('/', blogController.getAllBlogs);
router.get('/:title', blogController.getInformationByBlogTitle);

module.exports = router;