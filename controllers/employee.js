const getRecords = require('../services/kimai-api/fetchRecords');
const getTotalNoOfHours   = require('../services/employee/countWorkingHours');

const getResultIntoString = ( result ) => {
    let stringResult = "";
    result.forEach( user => {
        stringResult = stringResult + user.username + " " + user.totalhours + "\n";
    });
    return stringResult;
}

exports.countWorkingHours = async ( req,res ) => {
    const { body: { command } } = req;   
    const timesheetRecordsPromise = getRecords.getTimeSheetRecords(command);
    const userRecordsPromise      = getRecords.getUsers(); 
    const records = await Promise.all([timesheetRecordsPromise, userRecordsPromise]);
    let result    = await getTotalNoOfHours.getTotalNoOfHours(JSON.parse(records[0]),JSON.parse(records[1]));
    const stringResult =  getResultIntoString(result);
    res.send(stringResult);
}