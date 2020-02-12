exports.getWorkingHoursIntoString = ( result ) => {
    let stringResult = "";
    result.forEach( user => {
        stringResult = stringResult + user.username + " " + user.totalhours + "\n";
    });
    return stringResult;
}

exports.getTimesheetRecordsIntoString = ( result ) => {
    let stringResult = "";
    result.forEach( user => {
        stringResult = stringResult + user.username + "\n";
        user.timearray.forEach( datetime => {
            let date = datetime.slice(0,10);
            let time = datetime.slice(11,19);
            stringResult = stringResult + "\t\t" + date + "\t" + time + "\n";    
        });            
    });
    return stringResult;
}
