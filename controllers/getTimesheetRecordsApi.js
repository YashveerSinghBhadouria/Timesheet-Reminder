let request = require("request");
let moment = require('moment');
let getUserstRecordsApi = require('../utils/getUserstRecordsApi')
moment().format();

const TIMESHEET_COMMAND_TYPE = 1;
const TIMESHEET_DESCRIPTION_TYPE = 2;
const WORKING_HOURS_TYPE = 3;

const TIMESHEET_COMMAND_KEYWORD = "timesheet"
const TIMESHEET_DESCRIPTION_KEYWORD = "desc";
const WORKING_HOURS_KEYWORD = "workinghours";

const DAILY_KEYWORD = 1;
const WEEK_KEYWORD = 2;
const MONTH_KEYWORD = 3;

const getTimeOfCommand = ( requestedCommand ) => {
    let type;
    if( requestedCommand.includes( "week" )  == true   ) {
        type = WEEK_KEYWORD;
    }
    else if( requestedCommand.includes( "month" ) == true ){
      type = MONTH_KEYWORD;
    }
    else{
      type = DAILY_KEYWORD;
    }
    return type;
}

const getTypeOfCommand = ( requestedCommand )=> {
  let type;
  if( requestedCommand.includes( WORKING_HOURS_KEYWORD )  == true   ) {
      type = WORKING_HOURS_TYPE;
  }
  else if( requestedCommand.includes( TIMESHEET_DESCRIPTION_KEYWORD ) == true ){
    type = TIMESHEET_DESCRIPTION_TYPE;
  }
  else{
    type = TIMESHEET_COMMAND_TYPE;
  }
  return type;
}  

exports.getTimesheetRecords = ( req,res ) => {

    let command = req.command;
    let commandtype = getTypeOfCommand(command);
    let commandtime = getTimeOfCommand(command);

    let xauthtoken = "api_kitten";
    let xauthuser  = "susan_super";    

    let yesterday  = moment().subtract(1,'days').endOf('day');    
    let enddate    = yesterday.format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();

    let enddateMinusOneDay = yesterday.subtract(1,'day').startOf('day').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();
    let enddateMinusOneWeek = yesterday.subtract(1,'week').startOf('day').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();
    let enddateMinusOneMonth = yesterday.subtract(1,'month').startOf('day').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();

    let begindate = enddateMinusOneDay;

    if( command == WEEK_KEYWORD ){
        begindate = enddateMinusOneWeek;
    }
    else if( command == MONTH_KEYWORD ){
        begindate = enddateMinusOneMonth;
    }

    let options = { 
      method: 'GET',
      url: 'https://demo-stable.kimai.org/api/timesheets',
      qs: {
        begin: begindate,
        end : enddate
      },
      headers: 
      { 
        'postman-token': '3661bba5-23bf-b8e9-5b2d-6900445240c6',
        'cache-control': 'no-cache',
        'x-auth-token': xauthtoken,
        'x-auth-user': xauthuser 
      } 
    };

    request(options, async function (error, response, body) {
        if (error) throw new Error(error);       
        let timesheetRecords = body;
        await getUserstRecordsApi.getUsers( (userRecords) => {    

            if( commandtype == WORKING_HOURS_TYPE ){

            }
            else if( commandtype == TIMESHEET_DESCRIPTION_TYPE ){

            }
            else{
              
            }

            res.send(timesheetRecords)
        });    

    });
}