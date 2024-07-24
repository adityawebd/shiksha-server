
const express = require('express');
const router = express.Router();
const departmentController = require('../../controllers/department/department');

router.get('/',departmentController.getdepartment);
router.get('/:college',departmentController.getdepartmentdata)
// router.post('/',departmentController.Createdepartment)
// router.put('/:id',departmentController.putdepartmentdata)

module.exports = router;
 