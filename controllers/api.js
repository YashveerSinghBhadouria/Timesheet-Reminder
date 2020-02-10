
let getUserstRecordsApi = require('../utils/getUserstRecordsApi')

exports.getApi =  async (req, res) => {
    await getUserstRecordsApi.getUsers( (users)=>{
        res.send(users);
    });    
};