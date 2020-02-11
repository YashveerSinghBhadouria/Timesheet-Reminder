const request = require("request");
const getDates     = require('./getDates')
require('dotenv').config()

const xauthtoken = process.env.xauthtoken;
const xauthuser  = process.env.xauthuser;    

let options = { 
  method: 'GET',
  headers: 
  { 
      'postman-token': 'a4cc6340-5a7d-fade-9b48-6f44094e86ae',
      'cache-control': 'no-cache',
      'x-auth-token': xauthtoken,
      'x-auth-user': xauthuser 
  }
};

const performRequest = (options) => {
    return new Promise((resolve, reject)=>{
      request(options,(error, response, body) => {
        if (error) throw new Error(error);   
        resolve(body);
      });     
    });
  }
  
exports.getUsers = async () => {
    options.url = process.env.userRecordsURL;
    let result = await performRequest(options);    
    return result;      
}

exports.getTimeSheetRecords = async (command) => {
    const Dates = getDates.getDates(command);
    options.url = process.env.timesheetRecordsURL;
    options.qs  = {
        begin: Dates.begindate,
        end : Dates.enddate 
    }    
    let result = await performRequest(options);    
    return result;
}


