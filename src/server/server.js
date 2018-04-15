var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// Routing APIs
app.use('/api', require('./api/routes'));

// Loading static files
app.use(express.static(path.join(__dirname, '../client')));

// Start the server
app.listen(8080, function () {
    console.log("Server is starting at port 8080... ");
});