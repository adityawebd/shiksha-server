const express = require('express');
const router = express.Router();
const informationController = require('../../controllers/collegepage/information'); // Adjust the path to your controller

// Define routes
router.get('/', informationController.getAllInformations);
router.get('/:college', informationController.getInformationByCollegeName);
router.post('/', informationController.createInformation);

router.put('/:id', informationController.InformationInformation);

module.exports = router;
