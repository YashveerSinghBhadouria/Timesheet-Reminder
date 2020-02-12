const getRecords = require('../services/kimai-api/fetchRecords');
const emptyDescriptionService = require('../services/timesheet/emptyDescription');
const missingRecordsService = require('../services/timesheet/missingRecords');
const stringConverterHelper = require('../utils/stringConverterHelper');

exports.getTimesheetMissingDescription = async ( req,res ) => {
    const { body: { command } } = req;   
    const timesheetRecordsPromise = getRecords.getTimeSheetRecords(command);
    const userRecordsPromise      = getRecords.getUsers(); 
    const records = await Promise.all([timesheetRecordsPromise, userRecordsPromise]);
    let result    = await missingRecordsService.getEmptyDescriptionUsers(JSON.parse(records[0]),JSON.parse(records[1]));
    const stringResult = stringConverterHelper.getTimesheetRecordsIntoString(result);
    res.send(stringResult);
}

exports.getTimesheetMissingRecords = async ( req,res ) => {
    const { body: { command } } = req;   
    const timesheetRecordsPromise = getRecords.getTimeSheetRecords(command);
    const userRecordsPromise      = getRecords.getUsers(); 
    const records = await Promise.all([timesheetRecordsPromise, userRecordsPromise]);
    let result    = await emptyDescriptionService.getEmptyTimesheetUsers(JSON.parse(records[0]),JSON.parse(records[1]));
    res.send(result);  
}


