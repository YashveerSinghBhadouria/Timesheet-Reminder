const express = require("express");
const router = express.Router();

const timesheetController = require("../controllers/timesheet");

router
    .route('/missing-records')
    .post(timesheetController.validate('getTimesheetMissingRecords'),timesheetController.getTimesheetMissingRecords);

router
    .route('/missing-description')
    .post(timesheetController.validate('getTimesheetMissingDescription'),timesheetController.getTimesheetMissingDescription);

module.exports = router;