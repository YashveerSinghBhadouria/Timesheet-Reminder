let moment = require('moment');
const Constants = require('../constants');
let getTimeOfCommand = require('../utils/getTimeOfCommand');

exports.getDates = (command) => {
    let commandtime = getTimeOfCommand.getTimeOfCommand(command);
    let yesterday  = moment().subtract(1,'days').endOf('day');    
    let enddate    = yesterday.format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();

    let enddateMinusOneDay = yesterday.subtract(1,'day').startOf('day').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();
    let enddateMinusOneWeek = yesterday.subtract(1,'week').startOf('day').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();
    let enddateMinusOneMonth = yesterday.subtract(1,'month').startOf('day').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();

    let begindate = enddateMinusOneDay;
    if( commandtime ==  Constants.WEEK_KEYWORD ){
        begindate = enddateMinusOneWeek;
    }
    else if( commandtime == Constants.MONTH_KEYWORD ){
        begindate = enddateMinusOneMonth;
    }
    const Dates = {
      begindate,
      enddate
    }
    return Dates;
}
