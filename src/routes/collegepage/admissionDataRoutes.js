const express = require('express');
const router = express.Router();
const admissionController= require('../../controllers/collegepage/admissionDataController');

router.get('/', admissionController.getAdmissionData);
router.post('/', admissionController.CreateAdmissionData);

module.exports = router; 