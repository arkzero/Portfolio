/**
 * Express Configuration
 */

'use strict';

var express = require('express');
var path = require('path');
var config = require('./environment');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function (app) {
  var env = app.get('env');

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.set('appPath', path.join(config.root, 'client'));

  if ('development' === env) {
    // TODO: Setup Live Reload
  }
};