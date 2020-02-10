let request = require("request");
const getDates     = require('../utils/getDates')

require('dotenv').config()

exports.getTimeSheetRecords = (command,timesheetRecords) => {
    let xauthtoken = process.env.xauthtoken;
    let xauthuser  = process.env.xauthuser;    
    const Dates    = getDates.getDates(command);
    
    let options = { 
        method: 'GET',
        url: process.env.timesheetRecordsURL,
        qs: {
          begin: Dates.begindate,
          end : Dates.enddate
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
        timesheetRecords(body);
    });    
}

