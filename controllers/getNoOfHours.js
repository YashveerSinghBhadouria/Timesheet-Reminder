const getRecords = require('../utils/getRecords');
const getTotalNoOfHours   = require('../utils/getTotalNoOfHours');

const getResultIntoString = ( result ) => {
    let stringResult = "";
    result.forEach( user => {
        stringResult = stringResult + user.username + " " + user.totalhours + "\n";
    });
    return stringResult;
}

exports.getNoOfHours = async ( req,res ) => {
    const { body: { command } } = req;   
    const timesheetRecordsPromise = getRecords.getTimeSheetRecords(command);
    const userRecordsPromise      = getRecords.getUsers(); 
    const records = await Promise.all([timesheetRecordsPromise, userRecordsPromise]);
    let result    = await getTotalNoOfHours.getTotalNoOfHours(JSON.parse(records[0]),JSON.parse(records[1]));
    const stringResult =  getResultIntoString(result);
    res.send(stringResult);
}