'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

var all = {
  env: process.env.NODE_ENV || 'development',

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server Port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0'
};

module.exports = _.merge(all, require('./' + all.env + '.js') || {});