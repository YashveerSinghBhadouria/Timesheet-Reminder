const express = require("express");
const router = express.Router();

const timesheetRoutes = require('./timesheet.js');
const employeeRoutes = require('./employee.js');

router.use("/timesheet", timesheetRoutes);
router.use("/employee", employeeRoutes);

module.exports = router;