const Constants  = require('../constants');
let getUserMap   = require('./getUserMap')
const hashmap    = require('hashmap');

exports.getTotalNoOfHours = (timesheetRecords, userRecords) => {
    let userMap = new hashmap();
    userMap = getUserMap.getUserMap(userRecords);  
    
    timesheetRecords.forEach( record  => {
        let userdata = userMap.get(record.user);
        let prevHours = parseFloat(userdata[1]); 
        let currentHours = record.duration / 3600;
        userdata[ Constants.HOUR_INDEX ] = (prevHours + currentHours).toPrecision(3);
        userMap.set(record.user,userdata);
    });    

    let result = []
    userMap.forEach( user => {
        result.push(
          { 
            'username':user[0],
            'totalhours':user[1] 
          } 
        ) 
    });
    return result;
 }
