let getUserRecords = require('../utils/getUserRecords');
let getTimesheetRecords = require('../utils/getTimesheetRecords');
let getEmptyDescriptionUsers = require('../utils/getEmptyDescriptionUsers');

exports.getTimesheetMissingDescription = async ( req,res ) => {
    await getTimesheetRecords.getTimeSheetRecords(req.body.command, async ( timesheetRecords )=>{
      await getUserRecords.getUsers( async (userRecords) => {   
          let data = {
              timesheetRecords,
              userRecords
          } 
          let result = await getEmptyDescriptionUsers.getEmptyDescriptionUsers(JSON.parse(timesheetRecords),JSON.parse(userRecords));
          //console.log(result);          
          res.send(result);
      });      
    });  
}