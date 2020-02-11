const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee");

router
    .route('/count-working-hours')
    .post(employeeController.countWorkingHours);

module.exports = router;