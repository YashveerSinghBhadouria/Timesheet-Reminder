const getRecords = require('../utils/getRecords');
let getEmptyTimesheetUsers = require('../utils/getEmptyTimesheetUsers');

exports.getTimesheetMissingRecords = async ( req,res ) => {
    const { body: { command } } = req;   
    const timesheetRecordsPromise = getRecords.getTimeSheetRecords(command);
    const userRecordsPromise      = getRecords.getUsers(); 
    const records = await Promise.all([timesheetRecordsPromise, userRecordsPromise]);
    let result    = await getEmptyTimesheetUsers.getEmptyTimesheetUsers(JSON.parse(records[0]),JSON.parse(records[1]));
    res.send(result);  
}