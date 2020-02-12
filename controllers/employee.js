const getRecords = require('../services/kimai-api/fetchRecords');
const getTotalNoOfHours   = require('../services/employee/countWorkingHours');
const stringConverterHelper = require('../utils/stringConverterHelper');
const { body } = require('express-validator/check')
const { validationResult } = require('express-validator/check');

exports.validate = ( method ) => {    
    switch (method) {
        case 'countWorkingHours': {
            return [ 
                body('command', ' command doesnt exists ').not().isEmpty()
            ]   
        }
    }
}

exports.countWorkingHours = async ( req,res ) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const { body: { command } } = req;   

    const timesheetRecordsPromise = getRecords.getTimeSheetRecords(command);
    const userRecordsPromise      = getRecords.getUsers(); 
    const records = await Promise.all([timesheetRecordsPromise, userRecordsPromise]);
    let result    = await getTotalNoOfHours.getTotalNoOfHours(JSON.parse(records[0]),JSON.parse(records[1]));
    
    const stringResult =  stringConverterHelper.getWorkingHoursIntoString(result);
    res.send(stringResult);
}