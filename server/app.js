/**
 * Main Applicaiton File
 */

'use strict';

var express = require('express');
var config = require('./config/environment');
var http = require('http');

// Setup Server
var app = express();
var server = http.createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start Server
function startServer () {
  server.listen(config.port, config.ip, function () {
    console.log('Yo! Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
module.exports = app;