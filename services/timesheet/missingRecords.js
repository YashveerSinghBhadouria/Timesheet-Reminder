const moment = require('moment');
const checkPresence = ( timesheetRecords, id ) => {
    for( let i=0; i< timesheetRecords.length; i++ ){
        if( timesheetRecords[i].user == id ){
            return true;
        }        
    }
    return false;
}
const getEmptyTimesheetUsers = ( timesheetRecords,userRecords ) => {
    let missingRecords = [];
    userRecords.forEach( user => {
        if( checkPresence(  timesheetRecords, user.id  ) === false  ){                       
            missingRecords.push( user.username );            
            return;
        }
    });   
    return missingRecords;
}
exports.getMissingRecords = (timesheetRecords, userRecords, days) => {
    const date = moment();
    let result = [];
    if (days === 1) {
        result = getEmptyTimesheetUsers(timesheetRecords, userRecords);
        result.sort((a, b) => {
            return a[0] - b[0];
        });
        result.unshift(date.format('YYYY-MM-DD'));
        result = [ result ];
        return result;
    }

    for (let i = 1; i <= days; i++) {
        date.subtract(1, 'days');
        let day = date.day();
        let isWeekend = (day === 6) || (day === 0);

        if( isWeekend == false ) { 

            let currentTimesheetRecords = timesheetRecords.filter( ( record  ) => {
                return moment(record.begin).format('YYYY-MM-DD') === date.format('YYYY-MM-DD');
            });

            let currentMissingRecords = getEmptyTimesheetUsers(currentTimesheetRecords, userRecords);

            currentMissingRecords.sort((a, b) => {
                return a[0] - b[0]
            });

            currentMissingRecords.unshift(date.format('YYYY-MM-DD'))
            result.push(currentMissingRecords);
        }
    }
    return result;
}