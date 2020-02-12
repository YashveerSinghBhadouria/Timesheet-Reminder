const getRecords = require('../services/kimai-api/fetchRecords');
const getTotalNoOfHours   = require('../services/employee/countWorkingHours');
const stringConverterHelper = require('../utils/stringConverterHelper');

exports.countWorkingHours = async ( req,res ) => {
    const { body: { command } } = req;   
    const timesheetRecordsPromise = getRecords.getTimeSheetRecords(command);
    const userRecordsPromise      = getRecords.getUsers(); 
    const records = await Promise.all([timesheetRecordsPromise, userRecordsPromise]);
    let result    = await getTotalNoOfHours.getTotalNoOfHours(JSON.parse(records[0]),JSON.parse(records[1]));
    const stringResult =  stringConverterHelper.getWorkingHoursIntoString(result);
    res.send(stringResult);
}