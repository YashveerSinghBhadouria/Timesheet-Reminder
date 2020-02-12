exports.getWorkingHoursIntoString = ( result ) => {
    let stringResult = "";
    result.forEach( user => {
        stringResult = stringResult + user.username + " " + user.totalhours + "\n";
    });
    return stringResult;
}

exports.getMissingDescriptionIntoString = ( result ) => {
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

exports.getMissingRecordsIntoString = (result) => {
    let stringResult = "";
    result.forEach( record => {
        stringResult = stringResult + record[0] + "\n";
        for( let i=1 ;i < record.length; i++  ){
            stringResult = stringResult + "\t\t\t" + record[i] + "\n";    
        }        
    });
    return stringResult;
}
