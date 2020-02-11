const checkPresence = ( timesheetRecords, id ) => {
    for( let i=0; i< timesheetRecords.length; i++ ){
        if( timesheetRecords[i].user == id ){
            return true;
        }        
    }
    return false;
}
exports.getEmptyTimesheetUsers = ( timesheetRecords,userRecords ) => {

    let missingRecords = [];
    userRecords.forEach( user => {
        if( checkPresence(  timesheetRecords, user.id  ) === false  ){                       
            missingRecords.push( user.username );            
            return;
        }
    });   
    return missingRecords;
}
