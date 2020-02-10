let hashmap = require('hashmap');

exports.getUserMap = (userRecords) => {
    let map = new hashmap();

    userRecords.forEach( user => {
        let userdata = [];
        userdata.push(user.username);
        userdata.push(0);        
        map.set(user.id,userdata);
    });
    return map;
}