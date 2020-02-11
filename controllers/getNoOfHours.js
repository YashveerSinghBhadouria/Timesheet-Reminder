let getUserRecords = require('../utils/getUserRecords');
let getTimesheetRecords = require('../utils/getTimesheetRecords');
let getTotalNoOfHours   = require('../utils/getTotalNoOfHours');

exports.getNoOfHours = async ( req,res ) => {
    const { body: { command } } = req;
    await getTimesheetRecords.getTimeSheetRecords(command, async ( timesheetRecords )=>{
      await getUserRecords.getUsers( async (userRecords) => {   
          let data = {
              timesheetRecords,
              userRecords
          }           
          let result = await getTotalNoOfHours.getTotalNoOfHours(JSON.parse(timesheetRecords),JSON.parse(userRecords));
        //   console.log(result);                    
          let stringResult = "";
          result.forEach( user => {
                stringResult = stringResult + user.username + " " + user.totalhours + "\n";
          });
          console.log(stringResult);          
          res.send(stringResult);
        });      
    });  
    
}