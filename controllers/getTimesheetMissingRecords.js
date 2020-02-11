const getRecords = require('../utils/getRecords');
let getEmptyTimesheetUsers = require('../utils/getEmptyTimesheetUsers');

exports.getTimesheetMissingRecords = async ( req,res ) => {
    const { body: { command } } = req;   
    let timesheetRecords = await getRecords.getTimeSheetRecords(command);
    let userRecords      = await getRecords.getUsers(); 
    let result           = await getEmptyTimesheetUsers.getEmptyTimesheetUsers(JSON.parse(timesheetRecords),JSON.parse(userRecords));
    res.send(result);  
}