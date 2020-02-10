
let getUserstRecordsApi = require('../utils/getUserRecords')

exports.getApi =  async (req, res) => {
    await getUserstRecordsApi.getUsers( (users)=>{
        res.send(users);
    });    
};