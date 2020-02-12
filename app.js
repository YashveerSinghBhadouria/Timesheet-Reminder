const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

const routes  = require('./routes')

const app = express();

app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routes);

if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
}
else{
    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).send('Server Error');
    });
}
  
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost: in  mode',  app.get('port'));
});

module.exports = app;