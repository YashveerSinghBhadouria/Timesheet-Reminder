let getUserRecords = require('../utils/getUserRecords');
let getTimesheetRecords = require('../utils/getTimesheetRecords');
let getEmptyTimesheetUsers = require('../utils/getEmptyTimesheetUsers');

exports.getTimesheetMissingRecords = async ( req,res ) => {
    
    await getTimesheetRecords.getTimeSheetRecords(req.body.command, async ( timesheetRecords )=>{
        await getUserRecords.getUsers( async (userRecords) => {   
            let data = {
                timesheetRecords,
                userRecords
            }             
            let result = await getEmptyTimesheetUsers.getEmptyTimesheetUsers(JSON.parse(timesheetRecords),JSON.parse(userRecords));
            res.send(result);  
        });      
    });  
}