const getRecords = require('../utils/getRecords');
const getEmptyDescriptionUsers = require('../utils/getEmptyDescriptionUsers');

const getResultIntoString = ( result ) => {
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
    let timesheetRecords = await getRecords.getTimeSheetRecords(command);
    let userRecords      = await getRecords.getUsers(); 
    let result           = await getEmptyDescriptionUsers.getEmptyDescriptionUsers(JSON.parse(timesheetRecords),JSON.parse(userRecords));
    let stringResult = getResultIntoString(result);
    res.send(stringResult);
}