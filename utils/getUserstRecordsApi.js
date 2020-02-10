let request = require("request");

exports.getUsers = (callback) => {
    let xauthtoken = "api_kitten";
    let xauthuser  = "susan_super";    

    let options = { 
        method: 'GET',
        url: 'https://demo-stable.kimai.org/api/users',
        headers: 
        { 
            'postman-token': 'a4cc6340-5a7d-fade-9b48-6f44094e86ae',
            'cache-control': 'no-cache',
            'x-auth-token': xauthtoken,
            'x-auth-user': xauthuser 
        }
    };

    request(options, (error, response, body) => {
        if (error) throw new Error(error);       
        callback(body)
    });  
      
}


