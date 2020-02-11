const getRecords = require('../utils/getRecords');
const getEmptyDescriptionUsers = require('../utils/getEmptyDescriptionUsers');

const getResultIntoString = ( result ) => {
    let stringResult = "";
    result.forEach( user => {
        stringResult = stringResult + user.username + "\n";
        user.timearray.forEach( time => {
            stringResult = stringResult + "\t\t" + time + "\n";            
        });            
    });
    return stringResult;
}

exports.getTimesheetMissingDescription = async ( req,res ) => {
    const { body: { command } } = req;   
    const timesheetRecordsPromise = getRecords.getTimeSheetRecords(command);
    const userRecordsPromise      = getRecords.getUsers(); 
    const records = await Promise.all([timesheetRecordsPromise, userRecordsPromise]);
    let result    = await getEmptyDescriptionUsers.getEmptyDescriptionUsers(JSON.parse(records[0]),JSON.parse(records[1]));
    const stringResult =  getResultIntoString(result);
    res.send(stringResult);
}