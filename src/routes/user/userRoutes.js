
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user/userController');

router.get('/', userController.getAllUsers);

module.exports = router;
