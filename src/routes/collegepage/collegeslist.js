const express = require('express');
const router = express.Router();
const CollegeControler=require('../../controllers/collegepage/collegeslist')



router.get('/',CollegeControler.getCollege)
router.get('/:name',CollegeControler.getCollegeByName)


module.exports = router; 