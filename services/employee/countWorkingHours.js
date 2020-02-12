const Constants  = require('../../constants');
const hashmap    = require('hashmap');

const getUserMap = (userRecords) => {
    let map = new hashmap();
    userRecords.forEach( user => {
        let userdata = [];
        userdata.push(user.username);
        userdata.push(0);        
        map.set(user.id,userdata);
    });
    return map;
}

exports.getTotalNoOfHours = (timesheetRecords, userRecords) => {
    let userMap = getUserMap(userRecords);  
    
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
