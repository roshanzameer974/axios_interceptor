const router = require('express').Router();
const empController = require('../controllers/employee_controller');

router.post('/',empController.createEmployee);
router.patch('/:id',empController.updateEmployee);
router.delete('/:id',empController.deleteEmployee)

module.exports = router ;