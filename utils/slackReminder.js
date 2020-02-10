let request = require("request");

exports.sendSlackReminder = ( text,channel ) => {
    // let text = "Bye"
    // let channel = "UTBB9EGAV"
    let token   = process.env.slackBotToken
 
    let options = { 
        method: 'POST',
        url: process.env.slackPostMessageURL,
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
    res.send(body);
  });
  
}