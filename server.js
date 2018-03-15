var express      = require('express'),
    app            = express(),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    router          = require('./routes'),
    databaseConfig  = require('./config/database');

var connection = mongoose.connect(databaseConfig('local').url);

console.log(mongoose.connection.readyState);

app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

router(app);