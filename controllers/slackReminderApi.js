let request = require("request");

exports.sendSlackReminder = ( req,res ) => {
ß
    let text = "Bye"
    let channel = "UTBB9EGAV"
    let token   = "xoxb-929380680993-941526118679-jdZHK4Q092wTLVZLHip5YFuF"
 
    let options = { 
        method: 'POST',
        url: 'https://slack.com/api/chat.postMessage',
        headers: {
             'content-type': 'application/x-www-form-urlencoded',
             'postman-token': '5306ad3b-1cb6-80bb-7094-206f0619970d',
             'cache-control': 'no-cache',
              accept: 'application/json' 
        },
        form: { 
            token,
            channel ,
            text 
        } 
    };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.send(body);
  });
  
}