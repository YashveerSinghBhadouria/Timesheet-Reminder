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
            stringResult = stringResult + "\t\t" + date + "\n";    
        });            
    });
    return stringResult;
}
