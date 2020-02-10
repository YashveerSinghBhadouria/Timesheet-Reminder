let getUserRecords = require('../utils/getUserRecords');
let getTimesheetRecords = require('../utils/getTimesheetRecords')

exports.getTimesheetMissingDescription = async ( req,res ) => {
    await getTimesheetRecords.getTimeSheetRecords(req.body.command, async ( timesheetRecords )=>{
      await getUserRecords.getUsers( (userRecords) => {   
          let data = {
              timesheetRecords,
              userRecords
          } 
          res.send(data);
      });      
    });  
}