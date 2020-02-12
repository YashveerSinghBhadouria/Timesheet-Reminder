const moment = require('moment');

const checkDescription = ( timesheetRecords, id ) => {

    let descriptionArray = [];
    timesheetRecords.forEach( record => {  
        if( ( record.user == id) && ( record.description == null  )  ){
            let date = moment(record.begin).format('DD-MMMM-YYYY');
            descriptionArray.push( date );
        }
    });
    return descriptionArray;
}

exports.getEmptyDescriptionUsers = ( timesheetRecords, userRecords ) => {
    let result = []
    userRecords.forEach( user => {
        let descriptionArray = checkDescription( timesheetRecords,user.id );
        if( descriptionArray.length > 0 ){
            result.push( 
                {
                    username : user.username,
                    timearray: descriptionArray
                }
            );
        }
    });  
    return result;
}