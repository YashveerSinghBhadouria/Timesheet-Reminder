let request = require("request");
let moment = require('moment');
moment().format();

exports.getTimesheetRecords = ( req,res ) => {
    let xauthtoken = "api_kitten";
    let xauthuser  = "susan_super";    

    let yesterday  = moment().subtract(1,'days').endOf('day');    
    let enddate    = yesterday.format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();

    let enddateMinusOneDay = yesterday.subtract(1,'day').startOf('day').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();
    let enddateMinusOneWeek = yesterday.subtract(1,'week').startOf('day').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();
    let enddateMinusOneMonth = yesterday.subtract(1,'month').startOf('day').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toString();

    let begindate = enddateMinusOneDay;

    if( req.command == '/timesheetrecords-week' ){
        begindate = enddateMinusOneWeek;
    }
    else if( req.command == '/timesheetrecords-month' ){
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

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
      res.send( body );
    });
}