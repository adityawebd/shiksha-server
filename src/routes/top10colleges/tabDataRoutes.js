const express = require('express');
const router = express.Router();
const top10colleges=require('../../controllers/top10colleges/tabDataControler')


router.get('/', top10colleges.getTabData)
router.post('/', top10colleges.CreateTabData)

module.exports = router; 