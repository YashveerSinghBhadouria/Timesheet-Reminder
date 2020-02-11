const express = require("express");
const router = express.Router();

const timesheetController = require("../controllers/timesheet");

router
    .route('/missing-records')
    .post(timesheetController.getTimesheetMissingRecords);

router
    .route('/missing-description')
    .post(timesheetController.getTimesheetMissingDescription);

module.exports = router;