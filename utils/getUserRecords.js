let request = require("request");

const performRequest = (options) => {
    return new Promise((resolve, reject)=>{
      request(options,(error, response, body) => {
        if (error) throw new Error(error);   
        resolve(body);
      });     
    });
  }
  
exports.getUsers = (userRecords) => {
    let xauthtoken = process.env.xauthtoken;
    let xauthuser  = process.env.xauthuser;    

    let options = { 
        method: 'GET',
        url: process.env.userRecordsURL,
        headers: 
        { 
            'postman-token': 'a4cc6340-5a7d-fade-9b48-6f44094e86ae',
            'cache-control': 'no-cache',
            'x-auth-token': xauthtoken,
            'x-auth-user': xauthuser 
        }
    };

    let result = await performRequest(options);    
    return result;      
}


