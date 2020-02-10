const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

/**
 * Controllers (route handlers).
 */
const apiController = require('./controllers/api');

const getTimesheetMissingRecordsController = require('./controllers/getTimesheetMissingRecords.js');
const getTimesheetMissingDescriptionController = require('./controllers/getTimesheetMissingDescription.js');
const getNoOfHoursController = require('./controllers/getNoOfHours.js');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * API examples routes.
 */
app.get('/api', apiController.getApi);

app.post('/timesheet_missing_records', getTimesheetMissingRecordsController.getTimesheetMissingRecords);
app.post('/timesheet_missing_description', getTimesheetMissingDescriptionController.getTimesheetMissingDescription);
app.post('/noofhours', getNoOfHoursController.getNoOfHours);

if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
  } else {
    app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).send('Server Error');
    });
  }
  
/**
 * Start Express server.
 */
  app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost: in  mode',  app.get('port'));
    console.log('  Press CTRL-C to stop\n');
  });
  
  module.exports = app;