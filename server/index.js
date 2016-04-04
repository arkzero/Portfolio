'use strict';

// Set default node environemtn to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Export the application
var exports = module.exports = require('./app');