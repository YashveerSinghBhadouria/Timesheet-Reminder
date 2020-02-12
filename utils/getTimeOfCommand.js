const Constants = require('../constants');

exports.getTimeOfCommand = ( requestedCommand ) => {
    let type;
    if( requestedCommand.includes( "week" )  == true   ) {
        type = Constants.WEEK_KEYWORD;
    }
    else if( requestedCommand.includes("month" ) == true ){
      type = Constants.MONTH_KEYWORD;
    }
    else{
      type = Constants.DAILY_KEYWORD;
    }
    return type;
}