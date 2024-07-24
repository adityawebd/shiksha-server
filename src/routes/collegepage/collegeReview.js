const express = require('express');
const router = express.Router();
const reviewData = require('../../controllers/collegepage/reviewDataControler')

router.get('/', reviewData.GetReviewData);
// router.get('/page', reviewData.GetReviewData)
router.post('/',reviewData.CreateReviewData);

module.exports = router; 