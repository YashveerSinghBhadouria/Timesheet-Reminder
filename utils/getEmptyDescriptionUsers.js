let hashmap = require('hashmap');

const checkDescription = ( timesheetRecords, id ) => {
    let descriptionArray = [];
    timesheetRecords.forEach( record => {  
        if( ( record.user == id) && ( record.description == null  )  ){
            descriptionArray.push( record.begin );
        }
    });
    return descriptionArray;
}

exports.getEmptyDescriptionUsers = ( timesheetRecords, userRecords ) => {
    let userDescriptionMap = new hashmap();
    let result = []
    userRecords.forEach( user => {
        let descriptionArray = checkDescription( timesheetRecords,user.id );
        if( descriptionArray.length > 0 ){
            result.push( 
                {
                    username : user.username,
                    timearray:descriptionArray
                }
            );
        }
    });
    return result;
}