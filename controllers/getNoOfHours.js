const getRecords = require('../utils/getRecords');
const getTotalNoOfHours   = require('../utils/getTotalNoOfHours');

const getResultIntoString = ( result ) => {
    let stringResult = "";
    result.forEach( user => {
        stringResult = stringResult + user.username + " " + user.totalhours + "\n";
    });
}

exports.getNoOfHours = async ( req,res ) => {
    const { body: { command } } = req;   

    let timesheetRecords = await getRecords.getTimeSheetRecords(command);
    let userRecords      = await getRecords.getUsers(); 
    let result           = await getTotalNoOfHours.getTotalNoOfHours(JSON.parse(timesheetRecords),JSON.parse(userRecords));

    res.send(stringResult);

}